import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Google GenAI client
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Endpoint: Generate custom questions for Ethiopian Curriculum
app.post('/api/generate-questions', async (req, res) => {
  try {
    const { subject, grade, unitNumber, unitTitle, topic, questionType = 'choice', count = 5, difficulty = 'medium' } = req.body;

    if (!ai) {
      return res.status(503).json({
        error: 'Gemini API is not configured on the server. Built-in curriculum question bank is available.',
      });
    }

    const prompt = `You are a senior Ethiopian National Educational Assessment & Examinations expert and secondary school teacher specializing in the Ethiopian New Curriculum (Grade 9 to 12).
Generate ${count} high-quality ${questionType === 'choice' ? 'multiple-choice questions' : 'review questions / exercises'} for:
- Subject: ${subject}
- Grade: ${grade}
- Unit: ${unitNumber ? `Unit ${unitNumber}: ` : ''}${unitTitle || 'General Unit'}
${topic ? `- Focus Topic: ${topic}` : ''}
- Target Standard: Ethiopian New Curriculum Textbook & Entrance/Model Exam standard
- Difficulty: ${difficulty}

Return ONLY a valid JSON array of objects with the following schema, and NO markdown code block wrappers or extra text:
[
  {
    "id": "gen-${Date.now()}-1",
    "question": "Clear, precise question stem matching Ethiopian textbook review style",
    "options": ["A. Option 1", "B. Option 2", "C. Option 3", "D. Option 4"],
    "correctAnswer": 0, // 0 for A, 1 for B, 2 for C, 3 for D
    "explanation": "Detailed step-by-step reasoning, formula substitution, or conceptual proof",
    "keyConcept": "Core definition, law, theorem or principle tested",
    "difficulty": "Easy" | "Medium" | "Hard",
    "type": "choice"
  }
]`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text || '[]';
    try {
      const parsed = JSON.parse(text);
      return res.json({ questions: parsed });
    } catch {
      // Strip possible markdown fences if any
      const cleaned = text.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      return res.json({ questions: parsed });
    }
  } catch (error: any) {
    console.error('Question generation failed:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate curriculum questions' });
  }
});

// Endpoint: AI Ethiopian Curriculum Tutor / Explain Question
app.post('/api/explain-question', async (req, res) => {
  try {
    const { question, options, selectedAnswer, correctAnswer, subject, grade, unitTitle } = req.body;

    if (!ai) {
      return res.status(503).json({
        error: 'Gemini API is not configured on the server.',
      });
    }

    const prompt = `You are a supportive, expert Ethiopian secondary school tutor for ${subject} Grade ${grade}, Ethiopian New Curriculum.
A student needs an in-depth breakdown for this question:
Unit: ${unitTitle}
Question: ${question}
${options && options.length > 0 ? `Options:\n${options.map((opt: string, i: number) => `${i}: ${opt}`).join('\n')}` : ''}
${selectedAnswer !== undefined ? `Student's Chosen Option: ${selectedAnswer} (${options ? options[selectedAnswer] : ''})` : ''}
Correct Option: ${correctAnswer} (${options ? options[correctAnswer] : ''})

Provide a friendly, structured explanation tailored to Ethiopian students:
1. Direct Verdict & Summary
2. Step-by-Step Derivation / Logic / Principle
3. Why the correct answer is right and why distractors are wrong (common student misconceptions)
4. Key Ethiopian Curriculum Formula / Definition to remember
5. Quick Exam Tip for the Ethiopian Model / Entrance Exam (EUEE)`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.json({ explanation: response.text });
  } catch (error: any) {
    console.error('Explanation request failed:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate explanation' });
  }
});

// Vite or Static files handling
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EthioSTEM Server listening on port ${PORT}`);
  });
}

startServer();
