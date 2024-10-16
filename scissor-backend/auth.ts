// auth.ts
import express, { Request, Response } from 'express';
import { auth } from './firebaseConfig'; // Adjusted path to shared
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const router = express.Router();

// Sign Up Endpoint
router.post('/signup', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        res.status(201).json({ userId: userCredential.user.uid }); // Send user ID back to the client
    } catch (error: any) {
        console.error("Sign Up Error:", error);
        res.status(400).json({ error: error.message }); // Send error message
    }
});

// Login Endpoint
router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        res.status(200).json({ userId: userCredential.user.uid }); // Send user ID back to the client
    } catch (error: any) {
        console.error("Login Error:", error);
        res.status(400).json({ error: error.message }); // Send error message
    }
});

export default router;
