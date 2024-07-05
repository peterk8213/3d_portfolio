<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Portfolio README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f9;
            padding: 20px;
        }
        h1, h2, h3 {
            color: #333;
            text-align: center;
        }
        .section {
            margin: 20px 0;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .section img {
            max-width: 100%;
            border-radius: 8px;
            margin-top: 10px;
        }
        .section p {
            margin: 10px 0;
        }
        code {
            display: block;
            background: #e8e8e8;
            padding: 10px;
            border-radius: 4px;
            margin: 10px 0;
        }
    </style>
</head>
<body>

    <h1>Personal Portfolio</h1>

    <div class="section">
        <h2>Overview</h2>
        <p>This project is a personal portfolio showcasing my skills, projects, and experience in computer science and web development.</p>
    </div>

    <div class="section">
        <h2>Technologies Used</h2>
        <ul>
            <li><strong>Frontend:</strong> React.js, Framer Motion</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Styling:</strong> Tailwind CSS</li>
            <li><strong>Deployment:</strong> Vercel</li>
            <li><strong>Version Control:</strong> Git, GitHub</li>
        </ul>
    </div>

    <div class="section">
        <h2>Features</h2>
        <h3>1. Home Page</h3>
        <p>Introduction section with brief bio and navigation links to different sections.</p>
        
        <h3>2. Projects Section</h3>
        <p>Showcase of projects with descriptions, technologies used, and live demo links. Each project is displayed with a thumbnail image.</p>
        
        <h3>3. Experience Section</h3>
        <p>Details of work experience, including roles, companies, dates, and responsibilities.</p>
        
        <h3>4. Skills Section</h3>
        <p>List of skills relevant to web development and computer science.</p>
        
        <h3>5. Education Section</h3>
        <p>Details of academic background, including degree, institution, and dates.</p>
        
        <h3>6. Contact Information</h3>
        <p>Contact form or links to social media profiles.</p>
    </div>

    <div class="section">
        <h2>Design</h2>
        <p><strong>Color Scheme:</strong> Utilizes a modern palette with primary colors and accents for readability and visual appeal.</p>
        <p><strong>Layout:</strong> Responsive design ensuring usability across devices.</p>
    </div>

    <div class="section">
        <h2>Deployment</h2>
        <p>Deployed on Vercel for seamless deployment and hosting.</p>
    </div>

    <div class="section">
        <h2>Development Setup</h2>
        <p>Clone the repository:</p>
        <code>git clone https://github.com/your-username/portfolio.git</code>
        <p>Install dependencies:</p>
        <code>npm install</code>
        <p>Start the development server:</p>
        <code>npm start</code>
    </div>

    <div class="section">
        <h2>Screenshots</h2>
        <p>Home Page</p>
        <img src="screenshots/home.png" alt="Home Page Screenshot">
        <p>Projects Section</p>
        <img src="screenshots/projects.png" alt="Projects Section Screenshot">
        <p>Contact Section</p>
        <img src="screenshots/contact.png" alt="Contact Section Screenshot">
    </div>

</body>
</html>


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
