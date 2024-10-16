// /scissor-backend/clickTracker.ts

import { db } from './firebaseConfig'; // Correct path to firebaseConfig
import { doc, updateDoc, increment } from 'firebase/firestore';

// Function to encode the shortened URL for safe Firestore usage
const encodeForFirestore = (url: string): string => {
    return encodeURIComponent(url); // URL encode the shortened URL
};

// Function to increment the click count for a given shortened URL
export const trackClick = async (shortenedUrl: string): Promise<void> => {
    try {
        // Encode the shortened URL to avoid issues with Firestore document references
        const encodedUrl = encodeForFirestore(shortenedUrl);
        
        // Reference the document in Firestore based on the encoded shortened URL
        const docRef = doc(db, 'urls', encodedUrl);
        
        // Increment the clickCount field by 1
        await updateDoc(docRef, {
            clickCount: increment(1),
        });
        
        console.log(`Click count incremented for URL: ${shortenedUrl}`);
    } catch (error) {
        console.error("Error incrementing click count: ", error);
        throw new Error('Error tracking click');
    }
};

export default trackClick;
