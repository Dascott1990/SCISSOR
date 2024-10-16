import { db } from './firebaseConfig'; // Ensure this imports the Firestore instance
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore'; // Firestore functions
import crypto from 'crypto';

interface ShortenUrlResponse {
    shortenedUrl: string;
}

export const shortenUrl = async (
    originalUrl: string,
    domain: string,
    alias: string
): Promise<ShortenUrlResponse> => {
    const shortenedUrl = generateShortUrl(originalUrl, domain, alias);
    console.log(`Generated shortened URL: ${shortenedUrl}`);

    try {
        // Get a reference to the 'urls' collection
        const urlsCollection = collection(db, 'urls'); // Use Firestore `db` correctly here
        
        // Create a query to check if the alias already exists
        const q = query(urlsCollection, where('shortenedUrl', '==', shortenedUrl));
        const querySnapshot = await getDocs(q); // Execute the query

        if (!querySnapshot.empty) {
            throw new Error('Alias already exists');
        }

        // Add the new shortened URL to Firestore
        await addDoc(urlsCollection, {
            originalUrl,
            shortenedUrl,
            createdAt: new Date().toISOString(),
            clickCount: 0,
        });

        console.log(`Successfully added shortened URL to Firestore: ${shortenedUrl}`);
        return { shortenedUrl };
    } catch (error) {
        console.error("Error adding document: ", error);
        throw new Error("Error saving the URL");
    }
};

// Function to generate a short URL using the provided alias or by hashing the original URL
const generateShortUrl = (url: string, domain: string, alias: string): string => {
    if (alias) {
        return `${domain}/${alias}`;
    } else {
        // Create a hash (MD5) of the original URL and use the first 6 characters for a short, unique alias
        const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 6);
        return `${domain}/${hash}`;
    }
};
