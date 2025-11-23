import { auth, db } from "../firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    updateProfile 
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

import { 
    doc, 
    setDoc 
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// get form
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const phone = document.getElementById("signupPhone").value;
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirm").value;

    // Password check
    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    try {
        // 1) Create Firebase user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 2) Add user display name
        await updateProfile(user, { displayName: name });

        // 3) Save user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            email: email,
            phone: phone,
            createdAt: new Date()
        });

        alert("Signup successful!");
        window.location.href = "loginpage.html";   // go to login page

    } catch (error) {
        console.error(error);
        alert("Signup failed: " + error.message);
    }
});
