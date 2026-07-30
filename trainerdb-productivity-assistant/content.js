// Prevent duplicate assistant
if (!document.getElementById("trainerdb-assistant-btn")) {

    // ===========================
    // Floating Assistant Button
    // ===========================

    const assistantBtn = document.createElement("button");
    assistantBtn.id = "trainerdb-assistant-btn";
    assistantBtn.innerHTML = "🧠";

    document.body.appendChild(assistantBtn);

    // ===========================
    // Sidebar
    // ===========================

    const sidebar = document.createElement("div");
    sidebar.id = "trainerdb-sidebar";

    sidebar.innerHTML = `
        <div class="sidebar-header">
            <h2>🧠 TrainerDB Assistant</h2>
            <button id="closeSidebar">✖</button>
        </div>

        <div class="sidebar-content">

            <h3>📝 Personal Notes</h3>

            <textarea
                id="trainerdb-notes"
                placeholder="Write your notes here..."
            ></textarea>

            <button class="tool-btn" id="saveNotes">
                💾 Save Notes
            </button>

            <hr>

            <button class="tool-btn" id="bookmarkBtn">
                ⭐ Bookmark Current Page
            </button>

            <button class="tool-btn" id="copyBtn">
                📋 Copy Page Title & URL
            </button>

            <button class="tool-btn" id="darkBtn">
                🌙 Toggle Dark Mode
            </button>

            <button class="tool-btn" id="pageBtn">
                📊 Page Information
            </button>

        </div>
    `;

    document.body.appendChild(sidebar);

    // ===========================
    // Open Sidebar
    // ===========================

    assistantBtn.addEventListener("click", () => {
        sidebar.classList.add("open");
    });

    // ===========================
    // Close Sidebar
    // ===========================

    document.addEventListener("click", (e) => {
        if (e.target.id === "closeSidebar") {
            sidebar.classList.remove("open");
        }
    });

    // ===========================
    // Save Notes
    // ===========================

    document.addEventListener("click", (e) => {

        if (e.target.id === "saveNotes") {

            const notes = document.getElementById("trainerdb-notes").value;

            const pageKey = "notes_" + location.pathname;

            localStorage.setItem(pageKey, notes);

            alert("✅ Notes Saved!");

        }

    });

    // ===========================
    // Load Notes
    // ===========================

    const pageKey = "notes_" + location.pathname;

    const savedNotes = localStorage.getItem(pageKey);

    if (savedNotes) {

        document.getElementById("trainerdb-notes").value = savedNotes;

    }
    // ===========================
    // Bookmark Current Page
    // ===========================

    document.addEventListener("click", (e) => {

        if (e.target.id === "bookmarkBtn") {

            const bookmark = {
                title: document.title,
                url: window.location.href
            };

            let bookmarks = JSON.parse(
                localStorage.getItem("trainerdb_bookmarks")
            ) || [];

            const exists = bookmarks.some(
                item => item.url === bookmark.url
            );

            if (exists) {
                alert("⭐ This page is already bookmarked.");
                return;
            }

            bookmarks.push(bookmark);

            localStorage.setItem(
                "trainerdb_bookmarks",
                JSON.stringify(bookmarks)
            );

            alert("⭐ Page bookmarked successfully!");

        }

    });

    // ===========================
    // Copy Page Title & URL
    // ===========================

    document.addEventListener("click", (e) => {

        if (e.target.id === "copyBtn") {

            const text =
`Title: ${document.title}

URL: ${window.location.href}`;

            navigator.clipboard.writeText(text)
                .then(() => {
                    alert("📋 Page information copied!");
                })
                .catch(() => {
                    alert("Unable to copy.");
                });

        }

    });

    // ===========================
    // Toggle Dark Mode
    // ===========================

    document.addEventListener("click", (e) => {

        if (e.target.id === "darkBtn") {

            document.body.classList.toggle("trainerdb-dark-mode");

            const enabled = document.body.classList.contains(
                "trainerdb-dark-mode"
            );

            localStorage.setItem(
                "trainerdb_dark_mode",
                enabled
            );

        }

    });

    // Restore Dark Mode

    const darkModeEnabled =
        localStorage.getItem("trainerdb_dark_mode") === "true";

    if (darkModeEnabled) {

        document.body.classList.add("trainerdb-dark-mode");

    }

    // ===========================
    // Page Information
    // ===========================

    document.addEventListener("click", (e) => {

        if (e.target.id === "pageBtn") {

            const info =
`📊 Page Information

Title:
${document.title}

URL:
${window.location.href}

Path:
${window.location.pathname}

Host:
${window.location.host}`;

            alert(info);

        }

    });

}