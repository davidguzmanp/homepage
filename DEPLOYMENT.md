# 🚀 Deploy Your Website to GitHub Pages

## Quick Setup (5 minutes)

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click "New Repository" 
3. Name it: `davidguzmanp.github.io` (replace `davidguzmanp` with your GitHub username)
4. Make it **Public**
5. Click "Create Repository"

### Step 2: Upload Website Files
**Option A: Using GitHub Web Interface (Easiest)**
1. In your new repository, click "uploading an existing file"
2. Drag and drop all files from your `website` folder:
   - `index.html`
   - `styles.css` 
   - `script.js`
   - `add_publication.py`
   - `README.md`
3. Write commit message: "Initial website setup"
4. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
git init
git add .
git commit -m "Initial website setup"
git branch -M main
git remote add origin https://github.com/davidguzmanp/davidguzmanp.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

### Step 4: Access Your Website
Your website will be live at: `https://davidguzmanp.github.io`
(Replace `davidguzmanp` with your GitHub username)

⏱️ **Note**: It may take 5-10 minutes for the site to go live initially.

## 🔄 Updating Your Website

### Adding New Publications
1. Use the Python script locally:
   ```bash
   python add_publication.py
   ```
2. Upload the updated `script.js` to GitHub
3. Your site updates automatically!

### Making Other Changes
1. Edit files locally
2. Upload changed files to GitHub
3. Site updates within minutes

## 🌟 Your Website Features

✅ **Professional Design**: Modern, clean academic portfolio  
✅ **Responsive**: Perfect on mobile, tablet, and desktop  
✅ **Fast Loading**: Optimized for speed  
✅ **Easy Updates**: Simple publication management  
✅ **SEO Friendly**: Discoverable by search engines  
✅ **No Maintenance**: No server management needed  

## 🎯 Next Steps After Deployment

1. **Test everything**: Visit your live site and click all links
2. **Share your URL**: Add it to your CV, LinkedIn, email signature
3. **Google Scholar**: Update your profile with your new website
4. **Social Media**: Share your new professional website
5. **Regular Updates**: Add new publications as they're published

## 🆘 Troubleshooting

**Site not loading?**
- Wait 10 minutes after enabling GitHub Pages
- Check that `index.html` is in the root directory
- Ensure repository is public

**Publications not showing?**
- Check browser console for JavaScript errors
- Verify `script.js` syntax is correct

**Need custom domain?**
- In repository settings > Pages, add your custom domain
- Update DNS settings with your domain provider

---

🎉 **Congratulations!** You now have a beautiful, professional website that's easy to maintain and automatically showcases your research!