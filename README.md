# Aryan Jha — Developer Portfolio

Personal portfolio website showcasing software engineering projects, technical skills, competitive programming milestones, and professional certifications.

🌐 **Live Website**: [https://aryanjha05.vercel.app/](https://aryanjha05.vercel.app/)

---

## Overview

I am a **B.Tech Computer Science & Engineering (AI & ML)** student at Parul University, Vadodara, Gujarat. This portfolio highlights my work across full-stack development, artificial intelligence, machine learning, and data structures & algorithms.

---

## Features

- **Responsive Design**: Optimized across mobile (320px+), tablet, desktop, and ultra-wide viewports without horizontal overflow.
- **Interactive Hero**: Fluid typography, dynamic problem-solving counters (800+ DSA problems, 1681 LeetCode rating), and quick navigation.
- **Project Showcase**: Detailed cards with technology tags, live demo links, repository links, and previews.
- **Categorized Skills**: Visual skill category cards covering Languages, AI/ML, Web & Databases, and Tools & Platforms.
- **Education & Milestones**: Structured timeline covering academic qualifications, competitive programming ratings, and hackathon participations.
- **Verified Certifications**: Credentials from NVIDIA Deep Learning Institute, AWS Academy, and NPTEL.
- **Direct Contact & Form**: Accessible contact form with validation and direct `mailto:` fallback.
- **Smooth Animations**: Powered by GSAP, ScrollTrigger, SplitText, and AOS.
- **Resume Download**: Direct download link to the latest PDF resume.

---

## Tech Stack

### Website Implementation
- **Markup & Styling**: HTML5, CSS3, Bootstrap 5
- **Scripting & Interactivity**: JavaScript (ES6+), jQuery
- **Animation & Motion**: GSAP (ScrollTrigger, ScrollSmoother, SplitText, ScrollTo), AOS (Animate on Scroll)
- **UI Components**: Swiper.js, Magnific Popup, PureCounter, Phosphor Icons
- **Deployment & Hosting**: Vercel

---

## Featured Projects

### 1. Ride-Hailing Demand Forecasting & Driver Allocation
- **Technologies**: React, Python, LLM, Leaflet
- **Description**: Developed an AI-powered ride-hailing platform for demand forecasting, driver allocation, and geospatial visualization. Built the LLM-based Driver Coaching Assistant to generate personalized driving recommendations using trip history and demand-zone patterns. Collaborated within a cross-functional team to integrate the LLM module with the React dashboard.
- **Repository**: [github.com/AryanJha05/Ride-Hailing-AI](https://github.com/AryanJha05/Ride-Hailing-AI)

### 2. CIFAR-100 Image Classifier
- **Technologies**: Python, TensorFlow/Keras, FastAPI, Docker, JavaScript
- **Description**: Built an EfficientNetV2B0 classifier using transfer learning, achieving 74.2% accuracy across 100 CIFAR-100 classes. Developed an asynchronous FastAPI inference backend with Out-Of-Distribution (OOD) rejection using free-energy and prototype similarity; deployed on Render and integrated with a responsive Vercel frontend.
- **Live Demo**: [cifar100-image-classifier.vercel.app](https://cifar100-image-classifier.vercel.app/)
- **Repository**: [github.com/AryanJha05/cifar100-image-classifier](https://github.com/AryanJha05/cifar100-image-classifier)

---

## Technical Skills

- **Languages**: Python, Java, SQL, JavaScript, Bash
- **AI / ML**: Machine Learning, TensorFlow, Keras, Scikit-learn, XGBoost, LLMs, Prompt Engineering
- **Backend**: FastAPI, Flask, RESTful APIs
- **Frontend**: React, HTML5, CSS3
- **Databases**: MySQL
- **Tools & Platforms**: Linux, Git, GitHub, Docker, AWS, Render, Vercel, Postman, VS Code

---

## Project Structure

```text
PortFolio/
├── assets/
│   ├── css/
│   │   ├── aos.css
│   │   ├── bootstrap.min.css
│   │   ├── magnific-popup.css
│   │   ├── main.css
│   │   └── swiper-bundle.css
│   ├── images/
│   │   ├── icons/
│   │   │   ├── banner-three-pluse.svg
│   │   │   ├── header-three-toggle.svg
│   │   │   └── service-three-arrow.svg
│   │   ├── logo/
│   │   │   └── favicon.png
│   │   ├── shapes/
│   │   │   ├── about-three-shape.png
│   │   │   ├── banner-three-shape.png
│   │   │   └── footer-three-bg-shape.png
│   │   ├── thumbs/
│   │   │   ├── about-three-thumb.jpg
│   │   │   ├── cifar100-project.png
│   │   │   ├── ride-hailing-project.png
│   │   │   ├── service-three-thumb1.png
│   │   │   ├── service-three-thumb2.png
│   │   │   ├── service-three-thumb3.png
│   │   │   └── service-three-thumb4.png
│   │   └── aryan-profile.png
│   ├── js/
│   │   ├── gsap/
│   │   │   ├── chroma.min.js
│   │   │   ├── gsap.js
│   │   │   ├── gsap-scroll-smoother.js
│   │   │   ├── gsap-scroll-to-plugin.js
│   │   │   ├── gsap-scroll-trigger.js
│   │   │   └── gsap-split-text.js
│   │   ├── aos.js
│   │   ├── boostrap.bundle.min.js
│   │   ├── custom-gsap.js
│   │   ├── jquery-3.7.1.min.js
│   │   ├── jquery.marquee.min.js
│   │   ├── magnific-popup.min.js
│   │   ├── main.js
│   │   ├── phosphor-icon.js
│   │   ├── purecounter.js
│   │   ├── slider-active.js
│   │   ├── swiper-bundle.min.js
│   │   └── tw-cursor.js
│   └── Aryan-Jha-Resume.pdf
├── .gitignore
├── .vscode/
│   └── settings.json
├── index.html
└── README.md
```

---

## Local Development

The project is built with static web standards and does not require an external build pipeline.

### Running Locally

You can serve the directory using any static HTTP server:

#### Option 1: Python 3
```bash
python3 -m http.server 5500
```
Open [http://127.0.0.1:5500](http://127.0.0.1:5500) in your browser.

#### Option 2: VS Code Live Server
Open the workspace in VS Code and click **Go Live** (preconfigured to port 5501 in `.vscode/settings.json`).

#### Option 3: Node.js `npx serve`
```bash
npx serve .
```

---

## Deployment

The portfolio is deployed statically on **Vercel** with automatic preview deployments on git pushes to the `main` branch.

Production URL: [https://aryanjha05.vercel.app/](https://aryanjha05.vercel.app/)

---

## Contact

- **Email**: [aryan42006@gmail.com](mailto:aryan42006@gmail.com)
- **GitHub**: [github.com/AryanJha05](https://github.com/AryanJha05)
- **LinkedIn**: [linkedin.com/in/aryan-jha-050406aj](https://www.linkedin.com/in/aryan-jha-050406aj/)
- **Coding Profiles**: [codolio.com/profile/SogeKing_](https://codolio.com/profile/SogeKing_)

---

## License

No license has been specified. All rights reserved by Aryan Jha.