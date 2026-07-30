# TrainerDB Productivity Assistant Chrome Extension

## Overview

TrainerDB Productivity Assistant is a Chrome Extension built to improve the TrainerDB user experience by providing useful productivity tools directly on the website.

The extension helps users quickly save notes, bookmark important pages, copy page information, switch to dark mode, and view page details without leaving TrainerDB.

---

## Why I Built This

While using TrainerDB, users may want to:

- Save notes for different pages
- Bookmark important pages
- Quickly copy page information
- Reduce eye strain with dark mode
- View useful page details

This extension combines these features into a single sidebar to improve productivity.

---

## Features

### 📝 Personal Notes
- Save notes for each TrainerDB page.
- Notes are automatically loaded when revisiting the page.

### ⭐ Bookmark Current Page
- Save the current page as a bookmark.
- Prevents duplicate bookmarks.

### 📋 Copy Page Title & URL
- Copies the current page title and URL to the clipboard.

### 🌙 Toggle Dark Mode
- Enables and disables dark mode for better readability.

### 📊 Page Information
Displays:
- Page Title
- Current URL
- Current Path
- Website Host

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Chrome Extension Manifest V3

---

## Installation

1. Download or clone this repository.

2. Open Google Chrome.

3. Go to:

```
chrome://extensions
```

4. Enable **Developer Mode**.

5. Click **Load unpacked**.

6. Select the project folder.

7. Open:

```
https://trainerdb.com
```

8. Click the 🧠 floating button to open the productivity sidebar.

---

## Project Structure

```
TrainerDB-Assistant/
│
├── manifest.json
├── content.js
├── content.css
├── popup.html
├── popup.css
├── popup.js
├── background.js
├── icons/
└── README.md
```

---

## Assumptions

- The extension is designed specifically for TrainerDB.
- Bookmarks and notes are stored locally in the browser.
- Internet access is required to use TrainerDB.

---

## Limitations

- Bookmarks are stored only in the local browser.
- Dark mode may not affect every website element.
- The extension is intended for TrainerDB pages.

---

## Future Improvements

- Chrome Sync support
- AI-powered page summaries
- Search saved notes
- Export bookmarks
- Keyboard shortcuts
- Better dark mode compatibility

---

## Author

Developed as part of the TrainerDB Chrome Extension Technical Challenge.
