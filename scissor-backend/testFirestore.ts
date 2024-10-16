import { db } from './firebaseConfig'; // Adjust the path if necessary
import { collection, addDoc } from "firebase/firestore";

async function testFirestore() {
    try {
        console.log("Firestore instance:", db); // Log the Firestore instance
        const docRef = await addDoc(collection(db, "test"), {
            testField: "Hello, World!"
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

testFirestore();
