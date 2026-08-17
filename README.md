# 📝 PressFolio

### Transform Press Releases into Beautiful Blog Posts

![PressFolio](https://img.shields.io/badge/PressFolio-Press%20to%20Blog-D62828?style=for-the-badge)
![Astro](https://img.shields.io/badge/Astro-4.0-FF5D01?style=for-the-badge&logo=astro)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ What is PressFolio?

**PressFolio** is a free, browser-based tool that transforms official press releases into beautifully formatted blog posts. No signup required, no data sent to servers - everything happens locally in your browser.

### 🎯 Perfect For

- 📰 **Journalists** - Quickly convert PIB releases into readable articles
- 📝 **Bloggers** - Transform official statements into engaging content
- 📊 **Analysts** - Extract key figures and quotes from press releases
- 🐦 **Social Media Managers** - Generate tweet threads from announcements

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 📥 **Smart Input** | Paste any press release - PIB, company PRs, ministerial statements |
| 🔍 **Auto-Parse** | Automatically extracts: Source, Date, Quote, Figures, Context |
| ✏️ **Refine** | Edit and customize extracted content |
| 📄 **Multiple Formats** | Generate: News Article, Quick Brief, Tweet Thread |
| 📤 **Export** | Copy Markdown, Download .md, Copy HTML |
| 🌙 **Dark Mode** | Built-in dark/light theme toggle |
| 🔒 **100% Private** | All processing happens in your browser |
| 💾 **Auto-Save** | Drafts are saved automatically |

---

## 🎨 5-Stage Workflow

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  INPUT  │ →  │  PARSE  │ →  │ REFINE  │ →  │ COMPOSE │ →  │ EXPORT  │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘
```

1. **Input** - Paste your press release
2. **Parse** - Auto-extract key information
3. **Refine** - Edit and customize content
4. **Compose** - Preview your blog post
5. **Export** - Copy, download, or share

---

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build) ⚡
- **Styling:** Vanilla CSS with CSS Variables
- **Logic:** Pure JavaScript (no dependencies)
- **Hosting:** Vercel (free)

---

## 📦 Quick Start

```bash
# Clone the repository
git clone https://github.com/NSKWeb/pressfolio.git
cd pressfolio

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

---

## 🌐 Live Demo

🚀 **Live Site:** [pressfolio.vercel.app](https://pressfolio.vercel.app)

---

## 📁 Project Structure

```
pressfolio/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Main tool
│   │   ├── how-it-works.astro   # Tutorial
│   │   ├── contact.astro        # Contact form
│   │   ├── privacy.astro        # Privacy policy
│   │   └── terms.astro          # Terms of service
│   ├── layouts/
│   │   └── BaseLayout.astro     # Base layout
│   ├── components/
│   │   ├── Header.astro         # Header
│   │   └── Footer.astro         # Footer
│   └── styles/
│       └── global.css           # Styles
├── public/
│   └── styles/
│       └── global.css           # Compiled styles
├── astro.config.mjs
└── package.json
```

---

## 🎨 Design System

### Colors

| Color | Light Mode | Dark Mode |
|-------|------------|-----------|
| Primary | `#D62828` | `#EF4444` |
| Background | `#FAFAF8` | `#0F0F0F` |
| Card | `#FFFFFF` | `#252525` |
| Border | `#1A1A1A` | `#FAFAFA` |

### Typography

- **Headings:** Playfair Display
- **Body:** Inter
- **Code:** JetBrains Mono

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Astro](https://astro.build) - The web framework that powers this project
- [Google Fonts](https://fonts.google.com) - Beautiful typography
- Inspired by [PIB Dispatcher](https://presstoblog.netlify.app)

---

## 📬 Contact

Have questions or suggestions? [Open an issue](https://github.com/NSKWeb/pressfolio/issues) or reach out!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/NSKWeb">@NSKWeb</a>
</p>
