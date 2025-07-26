# David Guzman Piedrahita - Personal Website

A beautiful, modern academic portfolio website showcasing AI safety research and publications.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Looks great on all devices
- **Easy to Maintain**: Simple HTML/CSS/JS structure
- **Auto Publications**: Automatic publication loading from JavaScript data
- **Fast Loading**: Optimized for speed and performance

## 📁 File Structure!

```
website/
├── index.html          # Main website file
├── styles.css          # All styling
├── script.js           # JavaScript functionality + publications data
├── add_publication.py  # Python script to add new publications easily
└── README.md          # This file
```

## 🔧 How to Add New Publications

### Method 1: Using the Python Script (Recommended)
```bash
python add_publication.py
```
Follow the prompts to add title, venue, authors, abstract, and links.

### Method 2: Manual Editing
1. Open `script.js`
2. Find the `publications` array
3. Add a new publication object:
```javascript
{
    title: "Your Paper Title",
    venue: "Conference 2025",
    authors: "Your Name, Co-author Name",
    abstract: "Brief description of your work...",
    links: [
        { text: "arXiv", url: "https://arxiv.org/abs/..." },
        { text: "PDF", url: "https://arxiv.org/pdf/..." }
    ]
}
```

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
- Primary color: `#2563eb` (blue theme)
- Accent color: `#ffd700` (gold highlights)
- Background gradients: Update in `.hero` section

### Content
- **About section**: Edit the text in `index.html` under `#about`
- **Experience**: Update the timeline items in `index.html`
- **Contact info**: Update links in the contact section

### Profile Information
Update the hero section in `index.html`:
- Change the title and description
- Update current position and stats
- Modify contact links

## 🌐 Deployment Options

### GitHub Pages (Recommended)
1. Create a repository named `username.github.io`
2. Upload all website files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://username.github.io`

### Netlify
1. Drag and drop the website folder to [netlify.app](https://app.netlify.com)
2. Get instant deployment with custom domain options

### Vercel
1. Connect your GitHub repository to [vercel.com](https://vercel.com)
2. Automatic deployments on every commit

## 📊 Publication Management

Your publications are stored in `script.js` in the `publications` array. Each publication object has:

- `title`: Full paper title
- `venue`: Conference/journal name or "arXiv"
- `authors`: Comma-separated author list
- `abstract`: Brief description (1-2 sentences)
- `links`: Array of links (arXiv, PDF, Code, etc.)

## 🔧 Local Development

To test locally:
1. Open `index.html` in your browser, or
2. Use a simple HTTP server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🎯 SEO & Performance

The website is optimized for:
- ✅ Mobile responsiveness
- ✅ Fast loading times
- ✅ Clean semantic HTML
- ✅ Search engine friendly structure
- ✅ Professional academic presentation

## 📝 Maintenance Tips

1. **Keep publications updated**: Use the Python script for easy additions
2. **Update experience**: Modify timeline items when you get new positions
3. **Check links**: Ensure all external links work properly
4. **Backup regularly**: Keep copies of your customizations

## 🆘 Troubleshooting

**Publications not showing?**
- Check that JavaScript is enabled in browser
- Verify the publications array syntax in `script.js`

**Styling issues?**
- Check that `styles.css` is loading properly
- Use browser developer tools to debug CSS

**Need help?**
- Check the browser console for error messages
- Ensure all files are in the same directory

---

**Created with ❤️ for academic excellence**