document.addEventListener("DOMContentLoaded", function () {
    const root = document.getElementById("root");

    function renderWelcomeScreen() {
        root.innerHTML = `
            <div class="container">
                <h1>Welcome Gracy! Let's Play 🎭</h1>
                <p>Let's See How We Can Enlighten Your Mood</p>
                <button id="startBtn">Let's Start</button>
            </div>
        `;
        document.getElementById("startBtn").addEventListener("click", renderMoodSelection);
    }

    function renderMoodSelection() {
        root.innerHTML = `
            <div class="container">
                <h1>What's Your Mood Today? 🤔</h1>
                <button data-mood="Happy">😃 Happy</button>
                <button data-mood="Angry">😡 Angry</button>
                <button data-mood="Sad">😢 Sad</button>
                <button data-mood="Stressed">😵‍💫 Stressed</button>
                <button data-mood="Bored">😐 Bored</button>
                <button data-mood="Irritated">😠 Irritated</button>
                <button data-mood="IDontKnow">🤷‍♂️ I Don't Know</button>
            </div>
        `;

        document.querySelectorAll("button[data-mood]").forEach(button => {
            button.addEventListener("click", () => renderMoodOptions(button.dataset.mood));
        });
    }

    function renderMoodOptions(mood) {
        const moodOptions = {
            "Happy": [
                { text: "Watch Friends S05E14", link: "https://www.netflix.com" },
                { text: "Watch Big Bang Theory S02E11", link: "https://www.netflix.com" },
                { text: "Start Learning Something New", message: "Great choice, Gracy! Keep growing!" }
            ],
            "Angry": [
                { text: "Try to Breathe", message: "Take deep breaths, Gracy." },
                { text: "Avoid Reacting", message: "Listening without reacting helps." },
                { text: "Hit the Gym", message: "Exercise is a great stress reliever!" },
                { text: "Take a Shower", message: "A warm shower can calm you down." }
            ],
            "Sad": [
                { text: "Look in the Mirror & Self-Talk", message: "You got this, Gracy!" },
                { text: "Eat Something Yummy", link: "https://www.zomato.com" },
                { text: "Call Me", action: "call" },
                { text: "Visit Hanuman Mandir", action: "map" }
            ],
            "Stressed": [
                { text: "Meditate for 5 mins", message: "Clear your mind, Gracy!" },
                { text: "Listen to Podcast", link: "https://open.spotify.com/show/706hylM6zaDW8LrrYxcggQ" },
                { text: "Listen to Hanuman Chalisa", link: "https://open.spotify.com/track/6H7fLdt0AeWpuxUKXuXWrx?si=fc2cee7ec9154da7" },
                { text: "Read The Magic", link: "https://books.google.com" }
            ],
            "Bored": [
                { text: "Read Motivational Books", message: "Great choice, Gracy!" },
                { text: "Go to DIY for Shopping", action: "map" },
                { text: "Discuss Business Ideas", message: "Let’s brainstorm, Gracy!" }
            ],
            "Irritated": [
                { text: "Meditate", message: "Calm your mind, Gracy." },
                { text: "Talk with Akshat", action: "call" },
                { text: "Watch Think School", link: "https://www.youtube.com/c/ThinkSchool" }
            ],
            "IDontKnow": [
                { text: "Join Google Meet", link: "https://meet.google.com/etk-hfpd-voh?authuser=0" }
            ]
        };

        const options = moodOptions[mood].map(option => {
            if (option.link) {
                return `<button onclick="window.open('${option.link}', '_blank')">${option.text}</button>`;
            } else if (option.action === "call") {
                return `<button onclick="window.location.href='tel:+919876543210'">Call Me</button>`;
            } else if (option.action === "map") {
                return `<button onclick="window.open('https://www.google.com/maps', '_blank')">Get Directions</button>`;
            } else {
                return `<button onclick="alert('${option.message}')">${option.text}</button>`;
            }
        }).join('');

        root.innerHTML = `
            <div class="container">
                <h1>${mood} Options</h1>
                ${options}
                <button onclick="renderMoodSelection()">Back</button>
            </div>
        `;
    }

    renderWelcomeScreen();
});
