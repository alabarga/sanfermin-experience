# San Fermín Festival Experience Landing Page

A premium, responsive landing page showcasing exclusive packages for the San Fermín festival in Pamplona, Spain. This project delivers a visually stunning experience with sophisticated design elements, immersive visuals, and conversion-optimized layouts.

![San Fermín Festival Experience](https://sanfermin.me/screenshot.png)

## Features

- ✨ Premium festival packages with tiered pricing
- 🏠 City center accommodation showcase
- 📅 Day-by-day festival schedule (July 6-14)
- 🎵 Concert lineup with details
- 🖼️ Full-width image gallery with slider
- 📝 Contact form with booking capabilities
- 📱 Fully responsive design for all devices
- 🎬 YouTube video background in hero section

## Technologies Used

- React.js
- TailwindCSS
- Framer Motion for animations
- Swiper.js for sliders
- React DatePicker
- YouTube Embed API

## Setup and Local Development

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/sanfermin-festival.git
   cd sanfermin-festival
   ```

2. **Install dependencies**
   ```
   yarn install
   ```

3. **Start the development server**
   ```
   yarn start
   ```

4. **Build for production**
   ```
   yarn build
   ```

## Deploying to GitHub Pages with Custom Domain (sanfermin.me)

### Step 1: Prepare your repository

1. **Create a GitHub repository for your project**
   - Go to github.com and create a new repository named `sanfermin-festival` or another name of your choice

2. **Push your code to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/sanfermin-festival.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Configure your project for GitHub Pages

1. **Install the GitHub Pages package**
   ```bash
   yarn add gh-pages --dev
   ```

2. **Update your package.json file**
   Add these lines to your package.json:
   ```json
   {
     "homepage": "https://sanfermin.me",
     "scripts": {
       // existing scripts...
       "predeploy": "yarn build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Configure custom domain in public folder**
   Create a file named `CNAME` in the `public` directory:
   ```
   echo "sanfermin.me" > public/CNAME
   ```

### Step 3: DNS Configuration for Custom Domain

1. **Purchase the domain `sanfermin.me`** from a domain registrar (GoDaddy, Namecheap, Google Domains, etc.)

2. **Configure DNS settings** in your domain registrar's dashboard:
   - Add an A record pointing to GitHub Pages IP addresses:
     ```
     A @ 185.199.108.153
     A @ 185.199.109.153
     A @ 185.199.110.153
     A @ 185.199.111.153
     ```
   - Add a CNAME record for the www subdomain:
     ```
     CNAME www sanfermin.me
     ```

3. **Wait for DNS propagation** (can take up to 48 hours, but often completes within a few hours)

### Step 4: Deploy your website

1. **Deploy to GitHub Pages**
   ```bash
   yarn deploy
   ```

2. **Configure GitHub repository settings**
   - Go to your GitHub repository
   - Navigate to Settings > Pages
   - Under "Source", ensure it's set to "gh-pages branch"
   - Under "Custom domain", verify that "sanfermin.me" is entered
   - Check "Enforce HTTPS" to enable secure connection

### Step 5: Verify your deployment

1. Visit https://sanfermin.me to confirm your site is live
2. Test the website on multiple devices and browsers

## Maintaining Your Website

### Updating Content

1. Make changes to your code locally
2. Test changes with `yarn start`
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Update description"
   git push origin main
   ```
4. Redeploy:
   ```bash
   yarn deploy
   ```

### Custom Domain Renewal

Remember to renew your domain before it expires to maintain ownership of sanfermin.me.

## SEO Considerations

The landing page is optimized for search engines with:
- Semantic HTML structure
- Metadata and Open Graph tags
- Schema.org structured data
- Mobile-friendly responsive design
- Fast loading times

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For inquiries about San Fermín festival packages, visit [sanfermin.me](https://sanfermin.me) or contact info@sanfermin.me.
