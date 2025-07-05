import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the route handler with proper typing
const sendEmailHandler = async (req: Request, res: Response): Promise<void> => {
  const { to, subject, html } = req.body;
  
  try {
    const data = await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>',
      to,
      subject,
      html,
    });
    
    res.status(200).json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

app.post('/send-email', (req: Request, res: Response) => {
  sendEmailHandler(req, res).catch((error) => {
    console.error('Error in sendEmailHandler:', error);
    res.status(500).json({ error: 'Internal server error' });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});