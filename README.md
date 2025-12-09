# Personal Resume Website

A clean, professional resume website designed to showcase your academic achievements, projects, and research interests to professors and potential research supervisors.

## 🎯 Purpose

This website is specifically designed to:
- Present your qualifications in a professional, academic format
- Highlight your research interests and technical skills
- Showcase relevant projects and achievements
- Make it easy for professors to evaluate you for research internship positions

## 🚀 How to Customize

### 1. Update Personal Information (index.html)

Replace the placeholder text with your actual information:

- **Header Section**: Your name, title, and contact information
- **About Me**: Your background, interests, and research goals
- **Education**: Your university, degree, GPA, and coursework
- **Research Interests**: Your specific areas of interest
- **Projects**: Your significant projects with descriptions and links
- **Skills**: Your technical skills and proficiencies
- **Experience**: Your work experience and internships
- **Honors & Awards**: Your achievements and recognitions

### 2. Add Your Profile Picture

- Replace `profile.jpg` with your professional photo
- Recommended: 500x500px, professional headshot
- Formats: JPG, PNG (keep file size under 500KB)

### 3. Add Your Resume PDF

- Add your resume as `resume.pdf` in the root directory
- This will be downloadable via the "Download PDF Resume" button

### 4. Customize Colors (styles.css)

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary-color: #2c3e50;    /* Main dark color */
    --secondary-color: #3498db;   /* Accent blue color */
    --accent-color: #e74c3c;      /* Highlight red color */
}
```

## 📦 Hosting on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name it: `username.github.io` (replace `username` with your GitHub username)
   - Example: If your username is "johndoe", name it `johndoe.github.io`
4. Make it **Public**
5. Click "Create repository"

### Step 2: Push Your Code

In your terminal, run these commands from the `Home_Page` directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Add resume website"

# Add your GitHub repository as remote
git remote add origin https://github.com/username/username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and "/ (root)"
6. Click "Save"

### Step 4: Access Your Site

Your site will be live at: `https://username.github.io`

⏱️ Note: It may take a few minutes for your site to become available.

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Professional Layout**: Clean, academic-focused design
- **Easy to Navigate**: Clear sections for different aspects of your profile
- **Print-Friendly**: Optimized for printing
- **Smooth Animations**: Subtle animations for better user experience
- **SEO-Friendly**: Proper HTML structure for search engines

## 📝 Tips for Maximum Impact

1. **Keep it Updated**: Regularly update your projects and achievements
2. **Be Specific**: Use numbers and metrics where possible (e.g., "improved performance by 40%")
3. **Quality over Quantity**: Focus on your best 3-5 projects
4. **Professional Photo**: Use a clear, professional headshot
5. **Proofread**: Check for typos and grammatical errors
6. **Link Everything**: Add links to your GitHub repos, demos, and LinkedIn
7. **Research Focus**: Emphasize projects and skills relevant to research
8. **Contact Information**: Make sure all contact details are current

## 🔧 Troubleshooting

### Profile image not showing?
- Check that the image file is named exactly `profile.jpg` (or update the HTML if using a different name)
- Ensure the image is in the same directory as `index.html`

### Site not loading on GitHub Pages?
- Wait 5-10 minutes after pushing changes
- Check that your repository is public
- Verify the repository name matches the pattern `username.github.io`

### Want to use a custom domain?
- Purchase a domain from a registrar (e.g., Namecheap, Google Domains)
- Add a `CNAME` file with your domain name
- Configure DNS settings with your registrar
- See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 📱 Social Media

After publishing, share your resume site:
- Add it to your LinkedIn profile
- Include it in your email signature
- Share it when applying for research positions
- Include it on your CV/resume

## 📄 License

Feel free to use this template for your personal resume website!

---

**Good luck with your research internship applications! 🎓**
