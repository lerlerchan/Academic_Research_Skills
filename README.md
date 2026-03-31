# Academic Research Skills

Curated research skills for Claude Code, compiled from leading researchers and practitioners.

**Website:** https://lerlerchan.github.io/Academic_Research_Skills/

## Skills Included

1. **🔍 Systematic Literature Review — PRISMA 2020** (By Chuah Kee Man)  
   Guide users through writing systematic reviews following PRISMA 2020. Produces Word documents, flow diagrams, and APA citations.  
   [Repo](https://github.com/lerlerchan/slr-prisma)

2. **🌐 English to Bahasa Melayu Translator** (By Chuah Kee Man)  
   Translate English to Malaysian Malay following DBP conventions. Handles formal documents and technical content.  
   [Repo](https://github.com/keemanxp/dbp-translator-claude)

3. **📚 APA 7th Edition Referencing & Citation** (By Chuah Kee Man)  
   Format, verify, and convert references. Supports 20+ source types with web verification.  
   [Repo](https://github.com/keemanxp/apa-referencing-skill)

4. **✍️ Remove AI Writing Patterns** (By blader)  
   Detect and fix AI writing patterns. Makes text sound natural and human-written.  
   [Repo](https://github.com/blader/humanizer)

5. **🧠 Claude Scholar: Research Ecosystem** (By Galaxy-Dawn)  
   Full research lifecycle support: ideation, development, analysis, writing, publication. 47 embedded skills.  
   [Repo](https://github.com/Galaxy-Dawn/claude-scholar)

6. **💡 Uncommon Prompting Tips for Students** (By Chuah Kee Man)  
   20 creative prompting techniques for learning and retention.  
   [Repo](https://github.com/keemanxp/uncommon-prompting-tips)

---

## Site Architecture

This site is built with **Jekyll** and hosted on **GitHub Pages**.

### Key Features
- ✅ Search-first grid layout (Layout B)
- ✅ Real-time client-side filtering by title and category
- ✅ Individual pages for each skill
- ✅ SEO-friendly static HTML
- ✅ Mobile responsive (works on all devices)
- ✅ Auto-deploys on commit via GitHub Actions

### Directory Structure
```
academic_research_skills/
├── _config.yml              # Jekyll configuration
├── _data/skills.yml         # Skills catalog (single source of truth)
├── _layouts/                # Page templates
│   ├── default.html         # Base layout
│   ├── home.html            # Homepage (search grid)
│   └── skill.html           # Individual skill detail pages
├── assets/                  # CSS and JavaScript
│   ├── css/style.css
│   └── js/search.js
├── skills/                  # Generated skill pages
├── index.md                 # Homepage
├── Gemfile                  # Ruby dependencies
├── DESIGN.md                # Design documentation
└── README.md                # This file
```

---

## Local Development

### Prerequisites
- Ruby 3.0+
- Bundler

### Setup

1. **Clone and navigate:**
   ```bash
   cd academic_research_skills
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Build and serve:**
   ```bash
   bundle exec jekyll serve
   ```

4. **Visit:** http://localhost:4000/Academic_Research_Skills

### Making Changes

- **Update skills:** Edit `_data/skills.yml`
- **Change homepage layout:** Edit `_layouts/home.html`
- **Modify styling:** Edit `assets/css/style.css`
- **Change site title:** Edit `_config.yml`

All changes auto-reload when you save.

---

## Deployment

**Automatic:** Push to `main` branch → GitHub Actions builds and deploys to GitHub Pages  
**Manual:** Run `bundle exec jekyll build` and push to `gh-pages` branch

---

## Adding New Skills

To add a new skill:

1. Open `_data/skills.yml`
2. Add an entry with:
   - `id` — URL slug
   - `name` — Display name
   - `emoji` — Representative emoji
   - `category` — One of: Literature Review, General, Writing, Methods
   - `description` — 100-150 word summary
   - `repository` — GitHub repo link
   - `asset_url` — Raw `.md` file URL
   - `asset_type` — md, md+references, or system
   - `author` — Creator name
   - `tags` — Search keywords

3. Run `bundle exec jekyll build` to generate the new skill page

---

## Design Documentation

See [DESIGN.md](DESIGN.md) for:
- Complete architecture overview
- Design decisions and trade-offs
- Search implementation details
- Styling and responsive design specs
- Future scalability notes

---

## Contributing

To contribute skills or improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-skill`)
3. Update `_data/skills.yml` or templates
4. Test locally (`bundle exec jekyll serve`)
5. Push and open a pull request

---

## License

Each skill retains its original license. This site framework is provided as-is for educational and research purposes.

---

## Credits

- **Site Design & Build:** Academic Research Skills contributors
- **Skills Curated By:** Chuah Kee Man, Galaxy-Dawn, blader, and others
- **Built With:** Jekyll, Tailwind CSS, Lunr.js

---

## Support

- 📧 Email: [Your email if applicable]
- 🐛 Issues: [GitHub Issues](https://github.com/lerlerchan/academic_research_skills/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/lerlerchan/academic_research_skills/discussions)

---

Last updated: {{ site.time | date: "%Y-%m-%d" }}
