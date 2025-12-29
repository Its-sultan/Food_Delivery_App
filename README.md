# FoodExpress | Premium Delivery

A modern, high-performance food delivery single-page application (SPA) built with pure vanilla JavaScript and cutting-edge frontend technologies.

## 🚀 Concept & Tech Stack

This project demonstrates a "Buildless" workflow—maximizing performance and simplicity by leveraging CDNs and standard browser APIs.

- **Core**: Vanilla JavaScript (ES Modules)
- **Styling**: [Tailwind CSS Play CDN](https://tailwindcss.com/docs/play-cdn)
- **Icons**: [Font Awesome 6.5.1](https://fontawesome.com/)
- **State Management**: Reactive Observable Store (custom implementation)
- **Routing**: Client-side Hash Routing (zero server-side config required)
- **Design**: Premium Glassmorphism, Micro-animations

## ✨ Key Features

- **Dynamic Routing**: Seamless page transitions without refreshing.
- **Restaurant Discovery**: Search and filter through curated lists.
- **Smart Cart**: Single-restaurant basket logic with real-time badge updates.
- **Profile Customization**:
  - **Modern Settings**: Tabbed interface for managing preferences.
  - **Avatar Upload**: Real-time profile picture updates (persisted locally).
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

## 🛠️ Getting Started

Since this app uses a static setup without a build step, getting started is as simple as it gets.

### Prerequisites
- A simple static file server (VS Code Live Server or `npx serve`).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/CS335.git
   ```
2. Navigate to the client directory:
   ```bash
   cd CS335/client
   ```
3. Run with your preferred server:
   ```bash
   npx serve .
   ```

## 📂 Project Structure

```text
client/
├── index.html          # Main entry & global styles
├── src/
│   ├── main.js         # App bootstrap
│   ├── js/
│   │   ├── router.js   # Hash-based SPA router
│   │   └── store.js    # Global state management
│   ├── components/     # Global Navbar & Footer
│   └── pages/          # Individual route components
└── .gemini/            # Project intelligence & logs
```

## 🍊 License
Distributed under the MIT License. See `LICENSE` for more information.
