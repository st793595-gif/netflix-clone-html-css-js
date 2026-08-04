// ==========================================
// NETFLIX CLONE - VANILLA JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. ELEMENTS SELECT KARNA
    // ==========================================

// ==========================================
// SEARCH FUNCTION
// ==========================================
    const signInBtn = document.querySelector(".btn-red-sm");
    const languageBtn = document.querySelector("nav .btn:not(.btn-red-sm)");

    const getStartedBtn = document.querySelector(".btn-red");
    const emailInput = document.querySelector(".main input");

    const faqBoxes = document.querySelectorAll(".faqbox");
    const footerLinks = document.querySelectorAll(".footer a");


    // ==========================================
    // 2. FAQ DATA
    // ==========================================

    const faqAnswers = [
        "Netflix is a streaming service that offers a wide variety of TV shows, movies, documentaries and more on internet-connected devices.",
        
        "Netflix plans in India start from ₹149 per month. The price depends on the plan you choose.",
        
        "You can watch movies, TV shows, series, documentaries, anime and Netflix Originals.",
        
        "You can watch Netflix on smart TVs, smartphones, tablets, laptops, gaming consoles and other supported devices."
    ];


    // ==========================================
    // 3. FAQ FUNCTIONALITY
    // ==========================================

    faqBoxes.forEach(function (faqBox, index) {

        faqBox.addEventListener("click", function () {

            // Check if answer already exists
            let answer = faqBox.nextElementSibling;

            // If answer is already open
            if (answer && answer.classList.contains("faq-answer")) {

                answer.remove();

                // Change X back to +
                faqBox.querySelector("svg").innerHTML = `
                    <path d="M12 4V20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>

                    <path d="M4 12H20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                `;

                return;
            }


            // Close all other FAQ answers
            document.querySelectorAll(".faq-answer").forEach(function (item) {
                item.remove();
            });


            // Change all icons back to +
            document.querySelectorAll(".faqbox svg").forEach(function (svg) {
                svg.innerHTML = `
                    <path d="M12 4V20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>

                    <path d="M4 12H20"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                `;
            });


            // Create answer
            answer = document.createElement("div");

            answer.classList.add("faq-answer");

            answer.textContent = faqAnswers[index];

            // Insert answer after clicked FAQ
            faqBox.insertAdjacentElement("afterend", answer);


            // Change + to X
            faqBox.querySelector("svg").innerHTML = `
                <path d="M6 6L18 18"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"/>

                <path d="M18 6L6 18"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"/>
            `;

        });

    });


    // ==========================================
    // 4. GET STARTED - EMAIL VALIDATION
    // ==========================================

    getStartedBtn.addEventListener("click", function () {

        const email = emailInput.value.trim();


        // Empty email
        if (email === "") {

            showMessage(
                "Please enter your email address.",
                "error"
            );

            emailInput.focus();

            return;
        }


        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            showMessage(
                "Please enter a valid email address.",
                "error"
            );

            emailInput.focus();

            return;
        }


        // Valid email
        showMessage(
            "Great! Your email has been accepted. Welcome to Netflix!",
            "success"
        );

    });


    // ==========================================
    // 5. ENTER KEY ON EMAIL INPUT
    // ==========================================

    emailInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            getStartedBtn.click();

        }

    });


    // ==========================================
    // 6. SIGN IN MODAL
    // ==========================================

    signInBtn.addEventListener("click", function () {

        openLoginModal();

    });


    function openLoginModal() {

        // Prevent duplicate modal
        if (document.querySelector(".custom-modal")) {
            return;
        }


        const modal = document.createElement("div");

        modal.classList.add("custom-modal");

        modal.innerHTML = `

            <div class="modal-content">

                <button class="close-modal">&times;</button>

                <h2>Sign In</h2>

                <input
                    type="email"
                    class="login-email"
                    placeholder="Email address"
                >

                <input
                    type="password"
                    class="login-password"
                    placeholder="Password"
                >

                <button class="login-submit">
                    Sign In
                </button>

                <p class="login-message"></p>

                <p class="signup-text">
                    New to Netflix?
                    <strong>Sign up now.</strong>
                </p>

            </div>

        `;


        document.body.appendChild(modal);


        // Close button
        const closeBtn =
            modal.querySelector(".close-modal");


        closeBtn.addEventListener("click", function () {

            modal.remove();

        });


        // Login button
        const loginSubmit =
            modal.querySelector(".login-submit");


        loginSubmit.addEventListener("click", function () {

            const email =
                modal.querySelector(".login-email").value.trim();

            const password =
                modal.querySelector(".login-password").value.trim();

            const message =
                modal.querySelector(".login-message");


            if (email === "" || password === "") {

                message.textContent =
                    "Please enter email and password.";

                message.style.color = "red";

                return;
            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                message.textContent =
                    "Please enter a valid email address.";

                message.style.color = "red";

                return;
            }


            if (password.length < 4) {

                message.textContent =
                    "Password must contain at least 4 characters.";

                message.style.color = "red";

                return;
            }


            message.textContent =
                "Sign in successful!";

            message.style.color = "#46d369";


            setTimeout(function () {

                modal.remove();

            }, 1500);

        });


        // Signup text
        const signupText =
            modal.querySelector(".signup-text strong");


        signupText.addEventListener("click", function () {

            alert(
                "Sign up feature is ready to be connected with a backend."
            );

        });

    }


    // ==========================================
    // 7. LANGUAGE BUTTON
    // ==========================================

    languageBtn.addEventListener("click", function () {

        let languageMenu =
            document.querySelector(".language-menu");


        // If already open
        if (languageMenu) {

            languageMenu.remove();

            return;
        }


        languageMenu = document.createElement("div");

        languageMenu.classList.add("language-menu");


        languageMenu.innerHTML = `

            <div data-language="English">
                English
            </div>

            <div data-language="Hindi">
                हिन्दी
            </div>

        `;


        document.querySelector("nav").appendChild(languageMenu);


        const languages =
            languageMenu.querySelectorAll("div");


        languages.forEach(function (language) {

            language.addEventListener("click", function () {

                const selectedLanguage =
                    language.dataset.language;

                languageBtn.textContent =
                    selectedLanguage;

                languageMenu.remove();


                showMessage(
                    selectedLanguage + " selected.",
                    "success"
                );

            });

        });

    });


    // ==========================================
    // 8. FOOTER LINKS
    // ==========================================

    footerLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();


            const linkName =
                link.textContent.trim();


            showFooterMessage(linkName);

        });

    });


    // ==========================================
    // 9. FOOTER MESSAGE MODAL
    // ==========================================

    function showFooterMessage(title) {

        if (document.querySelector(".footer-modal")) {
            return;
        }


        const modal =
            document.createElement("div");


        modal.classList.add("footer-modal");


        modal.innerHTML = `

            <div class="footer-modal-content">

                <button class="footer-close">
                    &times;
                </button>

                <h2>${title}</h2>

                <p>
                    This is a Netflix clone project.
                    The <strong>${title}</strong> page
                    can be connected to a real backend
                    in the future.
                </p>

                <button class="footer-ok">
                    OK
                </button>

            </div>

        `;


        document.body.appendChild(modal);


        // Close button
        modal
            .querySelector(".footer-close")
            .addEventListener("click", function () {

                modal.remove();

            });


        // OK button
        modal
            .querySelector(".footer-ok")
            .addEventListener("click", function () {

                modal.remove();

            });

    }


    // ==========================================
    // 10. MESSAGE FUNCTION
    // ==========================================

    function showMessage(text, type) {

        // Remove previous message
        const oldMessage =
            document.querySelector(".website-message");


        if (oldMessage) {
            oldMessage.remove();
        }


        const message =
            document.createElement("div");


        message.classList.add("website-message");


        message.textContent = text;


        if (type === "error") {

            message.style.backgroundColor = "#e50914";

        } else {

            message.style.backgroundColor = "#198754";

        }


        document.body.appendChild(message);


        setTimeout(function () {

            message.remove();

        }, 3000);

    }


    // ==========================================
    // 11. ESC KEY
    // ==========================================

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            const modal =
                document.querySelector(".custom-modal");

            const footerModal =
                document.querySelector(".footer-modal");

            const languageMenu =
                document.querySelector(".language-menu");


            if (modal) {
                modal.remove();
            }


            if (footerModal) {
                footerModal.remove();
            }


            if (languageMenu) {
                languageMenu.remove();
            }

        }

    });

});