
import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        // Firebase login
        await signInWithEmailAndPassword(auth, email, password);

        alert("Login successful!");

        // redirect to dashboard
        window.location.href = "index.html";
    }
    catch (error) {
        console.error(error);
        alert("Login failed: " + error.message);
    }
});
