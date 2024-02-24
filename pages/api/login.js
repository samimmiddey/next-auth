import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../src/Firebase/config";

export default async function handler(req, res) {
    try {
        const { email, password } = req.body;

        // Create an account
        const response = await signInWithEmailAndPassword(auth, email, password);

        res.status(200).json({
            success: true,
            email: response.user.email
        })
    }
    catch (error) {
        if (error) {
            res.status(500).json({ success: false, error: 'Something went wrong.' })
        }
    }
};