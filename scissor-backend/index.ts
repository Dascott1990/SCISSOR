// /scissor-backend/index.ts

import express, { Request, Response } from 'express';
import cors from 'cors'; 
import { shortenUrl } from './urlShortener'; // Make sure this is defined
import { trackClick } from './clickTracker'; // Make sure this is defined
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Firebase config
import authRouter from './auth'; // Import the authentication routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); 

// Use the authentication routes
app.use('/api/auth', authRouter); // Ensure this line is added

// API endpoint to shorten URL
app.post('/shorten', async (req: Request, res: Response) => {
    console.log('Received request:', req.body); // Log request body
    const { originalUrl, domain, alias } = req.body;

    if (!originalUrl || !domain) {
        return res.status(400).json({ error: 'Original URL and domain are required' });
    }

    try {
        const response = await shortenUrl(originalUrl, domain, alias);
        res.json(response);
    } catch (error: unknown) { // Explicitly typing error as unknown
        if (error instanceof Error) {
            console.error('Error shortening URL:', error.message, error.stack);
            res.status(500).json({ error: 'Failed to shorten URL', details: error.message });
        } else {
            console.error('Unexpected error shortening URL:', error);
            res.status(500).json({ error: 'Failed to shorten URL' });
        }
    }
});

// New endpoint to handle redirection
app.get('/:alias', async (req: Request, res: Response) => {
    const { alias } = req.params;

    try {
        const shortenedUrl = `http://short.ly/${alias}`;
        const docRef = doc(db, 'urls', shortenedUrl);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const originalUrl = docSnap.data().originalUrl;

            // Track the click
            await trackClick(shortenedUrl);

            // Redirect the user to the original URL
            res.redirect(originalUrl);
        } else {
            res.status(404).send('URL not found');
        }
    } catch (error: unknown) { // Explicitly typing error as unknown
        if (error instanceof Error) {
            console.error('Error during redirection:', error.message, error.stack);
            res.status(500).send('Failed to track click: ' + error.message);
        } else {
            console.error('Unexpected error during redirection:', error);
            res.status(500).send('Failed to track click');
        }
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
