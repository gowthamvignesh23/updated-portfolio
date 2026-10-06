export const personalInfo = {
  name: "Vignesh D",
  tagline: "Building with Python & Scalable Systems",
  headline: "Python Developer & Software Engineer",
  email: "gowthamvignesh2105@gmail.com",
  phone: "+91 93458 99069",
  location: "Bengaluru, India",
  profilePhoto: "/profile.jpg",
  roles: [
    "Software Engineer",
    "Python Developer",
    "Data Analyst",
    "Backend Enthusiast",
    "Frontend Developer",
    "IT Professional"
  ],
  bio: `Entry level developer with a strong foundation in Electronics and Communication Engineering, hands-on experience with Python and machine learning fundamentals, and a shipped production website built end-to-end. Comfortable with Linux, Git, and REST-based systems, and quick to pick up modern backend frameworks like Flask and Django.`,
  detailedAbout: `I hold a B.E. in Electronics and Communication Engineering (CGPA 8.5/10) with verified Python programming certifications. During my AI internship, I developed hands-on expertise in applying supervised learning models and evaluation metrics using Python machine learning ecosystems. 

Through my intensive Python Full Stack Course at BDreamz Global Solutions (Bengaluru), I developed responsive full-stack web applications using Python, React.js, and MySQL with robust RESTful APIs, optimized SQL queries, and Agile workflows. I take pride in building clean, maintainable software architecture—from real-time telemetry pipelines to scalable full-stack applications.`,
  socials: [
    { name: "GitHub", url: "https://github.com/gowthamvignesh23", icon: "github", label: "gowthamvignesh23" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vignesh1723", icon: "linkedin", label: "vignesh1723" },
    { name: "Email", url: "mailto:gowthamvignesh2105@gmail.com", icon: "mail", label: "gowthamvignesh2105@gmail.com" },
    { name: "Phone", url: "tel:+919345899069", icon: "phone", label: "+91 93458 99069" }
  ],
  stats: [
    { label: "Training & Internships", value: 2, suffix: "", icon: "briefcase" },
    { label: "CGPA (Engineering)", value: 8.5, decimals: 1, suffix: " / 10", icon: "award" },
    { label: "Projects Shipped", value: 5, suffix: "+", icon: "code" },
    { label: "Core Technologies", value: 12, suffix: "+", icon: "cpu" }
  ]
};

export const skillsData = [
  {
    category: "Languages",
    description: "Core programming and markup languages used for building software and web applications.",
    color: "var(--violet)",
    skills: [
      { name: "Python", level: 90, tag: "Advanced Core" },
      { name: "JavaScript", level: 82, tag: "ES6+ & Async" },
      { name: "Java", level: 75, tag: "OOP & Basics" },
      { name: "SQL (MySQL)", level: 84, tag: "Queries & Schema" },
      { name: "HTML5 & CSS3", level: 92, tag: "Semantic & Responsive" },
      { name: "Spring Boot", level: 68, tag: "Backend Basics" }
    ]
  },
  {
    category: "Backend & Machine Learning",
    description: "Foundational architecture, API design patterns, and machine learning pipelines.",
    color: "var(--cyan)",
    skills: [
      { name: "RESTful API Design", level: 88, tag: "Endpoints & CRUD" },
      { name: "OOP Architecture", level: 88, tag: "Design Patterns" },
      { name: "Supervised Learning", level: 80, tag: "Classification & Regression" },
      { name: "Model Evaluation", level: 78, tag: "Metrics & Validation" },
      { name: "Clean Code & Refactoring", level: 86, tag: "Best Practices" },
      { name: "Data Processing (Pandas/NumPy)", level: 76, tag: "ETL & Analysis" }
    ]
  },
  {
    category: "Tools & DevOps Platforms",
    description: "Development workflows, version control, and operational environments.",
    color: "var(--amber)",
    skills: [
      { name: "Git & Version Control", level: 88, tag: "Branching & PRs" },
      { name: "GitHub & CI/CD Pages", level: 85, tag: "Deployment" },
      { name: "Linux / Unix Shell", level: 82, tag: "Bash & CLI" },
      { name: "VS Code", level: 90, tag: "Workspaces & Debugging" },
      { name: "Postman", level: 84, tag: "API Testing" },
      { name: "Arduino / ESP Microcontrollers", level: 75, tag: "Embedded C/C++" }
    ]
  },
  {
    category: "Full Stack & Database",
    description: "Full-stack web application development, relational databases, and modern APIs.",
    color: "var(--coral)",
    skills: [
      { name: "React.js & Frontend", level: 86, tag: "Components & Hooks" },
      { name: "MySQL & Relational DB", level: 85, tag: "Schema Design" },
      { name: "RESTful CRUD APIs", level: 88, tag: "Frontend Integration" },
      { name: "SQL Query Optimization", level: 82, tag: "Performance Tuning" },
      { name: "Agile & Code Reviews", level: 85, tag: "Collaborative Sprints" }
    ]
  }
];

export const experienceData = [
  {
    role: "Artificial Intelligence Intern",
    company: "Brainery Spot Technology",
    location: "Coimbatore, India",
    period: "2024",
    type: "Internship",
    badge: "AI & ML",
    color: "var(--violet)",
    summary: "Worked on supervised machine learning pipelines, dataset preparation, and generative AI research for practical industry solutions.",
    highlights: [
      "Applied supervised machine learning models (classification, regression) and rigorous evaluation metrics using Python libraries (Scikit-Learn, Pandas, NumPy).",
      "Strengthened core Python object-oriented programming, algorithm efficiency, and systematic code debugging practices.",
      "Explored Generative AI tools and prompt engineering workflows to automate real-world analytical tasks under tight sprint deadlines.",
      "Presented performance benchmarking findings to senior engineering mentors with actionable takeaways."
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Generative AI", "Data Analysis"]
  },
  {
    role: "Python Full Stack Course (6 Months)",
    company: "BDreamz Global Solutions Private Limited",
    location: "Bengaluru, India",
    period: "Mar 2026 – Sep 2026",
    type: "Course & Training",
    badge: "Python Full Stack",
    color: "var(--cyan)",
    summary: "Completed an intensive 6-month full-stack development program engineering responsive web applications, RESTful APIs, and relational MySQL database architectures.",
    highlights: [
      "Developed responsive full-stack web applications using Python, React.js, and MySQL, delivering scalable and user-friendly solutions.",
      "Designed and implemented RESTful APIs for CRUD operations and seamless frontend-backend integration.",
      "Created SQL schemas and optimized database queries to improve data retrieval efficiency and application performance.",
      "Collaborated using Git and GitHub, participated in code reviews and debugging, and followed Agile development practices."
    ],
    tech: ["Python", "React.js", "MySQL", "RESTful APIs", "SQL Optimization", "Git & GitHub", "Agile"]
  }
];

export const projectsData = [
  {
    id: "portfolio-website",
    title: "Personal Developer Portfolio & Web App",
    category: "Web Development",
    period: "June 2025 – Present",
    tagline: "Modern, high-performance developer hub with dynamic animations and CLI terminal",
    description: "Designed, engineered, and deployed a modern full-stack web application from scratch. Features an interactive Linux/Python terminal emulator, live Python code runner, canvas-driven celestial background, 3D card tilt physics, and responsive design.",
    problemSolved: "Crafted a recruiter-first interactive experience that communicates both frontend aesthetic polish and deep backend Python expertise through interactive components.",
    architecture: "Built with React 19 and Vite for instant load times, structured CSS design system with CSS custom properties for dynamic theme switching, Canvas API for particle constellation physics, and accessible semantic HTML5.",
    highlights: [
      "Engineered an interactive embedded Linux/Python CLI terminal with command history and tabbed output.",
      "Built dynamic 3D perspective tilt physics with mouse reflection lighting.",
      "Integrated live multi-theme accent switcher (Violet, Cyber Cyan, Emerald, Amber).",
      "Achieved 100% responsive design across ultra-wide monitors, laptops, and mobile screens."
    ],
    tech: ["React", "JavaScript (ES6+)", "Vite", "Canvas API", "CSS3 / Custom Tokens", "Git", "GitHub Pages"],
    github: "https://github.com/gowthamvignesh23",
    liveDemo: "#",
    featured: true,
    color: "var(--violet)"
  },
  {
    id: "weather-report-app",
    title: "Weather Report in Real Time",
    category: "Web Development",
    period: "August 2026",
    tagline: "Live weather web application fetching real-time global weather conditions via public API",
    description: "Built a real-time weather web application that fetches live weather data from a public API and displays temperature, humidity, wind speed, and conditions for any searched city.",
    problemSolved: "Delivers instantaneous live meteorological insights with robust error handling for invalid city queries, network timeouts, and dynamic DOM updates across all device sizes.",
    architecture: "Lightweight frontend application engineered with semantic HTML5 structure, responsive CSS layout, and modern asynchronous JavaScript (fetch, async/await, DOM manipulation) handling real-time API responses and dynamic state rendering.",
    highlights: [
      "Built a real-time weather web application that fetches live weather data from a public API and displays temperature, humidity, wind speed, and conditions for any searched city.",
      "Used JavaScript (fetch, async/await, DOM manipulation) to handle API responses and errors, with a responsive HTML/CSS interface.",
      "Implemented dynamic weather icons, temperature unit conversions, and intuitive search input validation.",
      "Designed an adaptive, mobile-responsive layout delivering smooth performance across all viewports."
    ],
    tech: ["HTML", "CSS", "JavaScript", "Weather API", "Fetch API", "Async/Await", "DOM Manipulation"],
    github: "https://github.com/gowthamvignesh23",
    liveDemo: "#",
    featured: true,
    color: "var(--cyan)"
  },
  {
    id: "iot-biomonitor",
    title: "IoT Saliva Glucose & Heart Rate Monitor",
    category: "IoT & Embedded",
    period: "May 2026",
    tagline: "Real-time non-invasive bio-telemetry prototype connected to cloud data pipeline",
    description: "Engineered an IoT telemetry system integrating specialized optical and biosensors with microcontrollers, transmitting vital health metrics through MQTT messaging to a cloud analytics pipeline with automated threshold alerting.",
    problemSolved: "Traditional glucose monitoring requires invasive pinpricks; this prototype explores non-invasive biochemical optical sensing coupled with low-latency MQTT cloud telemetry.",
    architecture: "ESP8266 Wi-Fi microcontroller reading analog/digital signals from pulse oximetry and optical biosensors, formatting payloads as lightweight JSON, publishing via MQTT broker over TLS to an IoT cloud dashboard.",
    highlights: [
      "Engineered multi-sensor data acquisition pipeline aggregating heart rate, SpO2, and optical glucose estimations.",
      "Implemented publish-subscribe architecture with low-power MQTT broker protocols.",
      "Configured automated real-time alerts when biometric readings exceed safe medical boundaries.",
      "Optimized embedded C/C++ firmware loop timing to eliminate sensor sampling jitter."
    ],
    tech: ["ESP8266", "Arduino C/C++", "MQTT Protocol", "IoT Cloud", "Sensors", "Python Data Logger"],
    github: "https://github.com/gowthamvignesh23",
    liveDemo: "#",
    featured: true,
    color: "var(--cyan)"
  },
  {
    id: "ai-classifier-pipeline",
    title: "AI Supervised Learning & Predictive Pipeline",
    category: "Python & AI",
    period: "2024",
    tagline: "Automated end-to-end data preprocessing, model training, and performance evaluation",
    description: "Developed a Python-powered machine learning pipeline that ingests raw tabular datasets, performs feature engineering and missing-value imputation, trains classification models, and generates comprehensive visual performance reports.",
    problemSolved: "Standardizes repetitive data cleaning and model experimentation workflows into reusable, modular Python classes.",
    architecture: "Modular Python OOP package utilizing Scikit-Learn for algorithm training, Pandas for tabular manipulation, and Matplotlib/Seaborn for ROC-AUC curves and confusion matrices.",
    highlights: [
      "Built automated data cleansing pipelines handling outlier removal and categorical one-hot encoding.",
      "Trained Random Forest and Logistic Regression models with cross-validation hyperparameter tuning.",
      "Exported evaluation metrics including Precision, Recall, F1-Score, and Confusion Matrix plots.",
      "Structured clean OOP modules ready for API wrapper integration."
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "OOP Architecture"],
    github: "https://github.com/gowthamvignesh23",
    liveDemo: "#",
    featured: true,
    color: "var(--amber)"
  },
  {
    id: "secure-rest-api",
    title: "Secure Python RESTful Backend Service",
    category: "Python & AI",
    period: "2025",
    tagline: "Clean-architecture backend API service with authentication and database schema",
    description: "Designed a lightweight REST API backend following OOP clean code principles, supporting CRUD operations, input sanitization, token-based authentication, and structured logging in Linux environments.",
    problemSolved: "Demonstrates production-ready backend design patterns with separation of concerns between controllers, services, and repository layers.",
    architecture: "Python service with structured routing, relational database integration (MySQL / SQLite), JWT authentication middleware, and standardized JSON response payloads.",
    highlights: [
      "Engineered structured endpoints with parameter validation and secure exception handling.",
      "Implemented database connection pooling and schema migrations with MySQL.",
      "Adopted secure coding practices, input validation, and optimized SQL queries.",
      "Documented API routes with Postman collections and OpenAPI specification."
    ],
    tech: ["Python", "MySQL", "REST APIs", "JWT Auth", "Linux", "Postman"],
    github: "https://github.com/gowthamvignesh23",
    liveDemo: "#",
    featured: false,
    color: "var(--coral)"
  }
];

export const educationData = {
  degree: "B.E., Electronics and Communication Engineering",
  institution: "KSR Institute for Engineering and Technology",
  location: "Namakkal / Tiruchengode, Tamil Nadu, India",
  graduation: "Graduated May 2026",
  cgpa: "8.50 out of 10.0",
  coursework: [
    "Object-Oriented Programming",
    "Operating Systems & Linux",
    "Computer Networks",
    "Web Technologies",
    "Software Engineering",
    "Embedded Systems & IoT",
    "Digital Signal Processing",
    "Microprocessors & Microcontrollers"
  ],
  certifications: [
    {
      title: "Python Programming Certification",
      issuer: "Guvi Geek Network",
      date: "Verified",
      icon: "code",
      desc: "Comprehensive coursework covering data structures, OOP paradigms, modules, and file operations."
    },
    {
      title: "Generative AI Course Completion",
      issuer: "Coursera",
      date: "Verified",
      icon: "sparkles",
      desc: "Prompt engineering techniques, foundation models, and practical application integration."
    },
    {
      title: "Neural Nuggets Award",
      issuer: "Global Knowledge Technologies AI Summit 2025, Bangalore",
      date: "Awarded 2025",
      icon: "award",
      desc: "Recognized for innovative machine learning problem-solving and technical presentation at the summit."
    }
  ],
  languages: [
    { name: "English", proficiency: "Professional Working Proficiency", flag: "🌐" },
    { name: "Tamil", proficiency: "Native / Bilingual", flag: "🇮🇳" }
  ]
};

export const codeSnippets = [
  {
    id: "ai_pipeline",
    title: "ml_pipeline.py",
    language: "python",
    desc: "Supervised Learning & Model Evaluation Pipeline",
    code: `import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

class MLPipeline:
    def __init__(self, data_path: str):
        self.data_path = data_path
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        
    def prepare_and_train(self):
        print("[*] Loading dataset and engineering features...")
        # Simulated clean dataset
        X = np.random.randn(500, 6)
        y = (X[:, 0] + X[:, 1] * 0.5 > 0).astype(int)
        
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        print("[*] Training Random Forest model with cross-validation...")
        self.model.fit(X_train, y_train)
        
        predictions = self.model.predict(X_test)
        acc = accuracy_score(y_test, predictions)
        print(f"[+] Model Training Complete! Test Accuracy: {acc * 100:.2f}%")
        return {"status": "SUCCESS", "accuracy": acc, "samples": len(y_test)}

# Run pipeline
pipeline = MLPipeline("sensor_telemetry.csv")
result = pipeline.prepare_and_train()
print(f"[✓] Pipeline execution finished: {result}")
`,
    output: `[*] Loading dataset and engineering features...
[*] Training Random Forest model with cross-validation...
[+] Model Training Complete! Test Accuracy: 93.00%
[✓] Pipeline execution finished: {'status': 'SUCCESS', 'accuracy': 0.93, 'samples': 100}`
  },
  {
    id: "iot_mqtt",
    title: "telemetry_service.py",
    language: "python",
    desc: "IoT Biomonitor MQTT Broker Ingestion",
    code: `import json
import time

class TelemetryConsumer:
    """Consumes real-time heart rate and glucose sensor packets."""
    def __init__(self, device_id: str):
        self.device_id = device_id
        self.alert_threshold = 140  # mg/dL
        
    def process_packet(self, raw_payload: dict):
        timestamp = time.strftime("%H:%M:%S")
        glucose = raw_payload.get("glucose_est", 98)
        bpm = raw_payload.get("bpm", 72)
        
        status = "NORMAL"
        if glucose > self.alert_threshold:
            status = "⚠️ ALERT: GLUCOSE HIGH"
            
        return {
            "time": timestamp,
            "device": self.device_id,
            "bpm": bpm,
            "glucose_mg_dl": glucose,
            "status": status
        }

# Simulated sensor event stream
consumer = TelemetryConsumer("ESP8266_NODE_01")
sample = {"bpm": 74, "glucose_est": 105, "battery_v": 3.92}
log = consumer.process_packet(sample)
print(f"[MQTT INGEST] {json.dumps(log, indent=2)}")
`,
    output: `[MQTT INGEST] {
  "time": "14:32:00",
  "device": "ESP8266_NODE_01",
  "bpm": 74,
  "glucose_mg_dl": 105,
  "status": "NORMAL"
}`
  },
  {
    id: "rest_api",
    title: "secure_api.py",
    language: "python",
    desc: "Clean OOP REST API Controller with Validation",
    code: `class DeveloperProfileService:
    def __init__(self):
        self.developer = "Vignesh D"
        self.specialties = ["Python", "Machine Learning", "Clean Code", "Linux"]
        
    def get_profile(self):
        return {
            "status": 200,
            "developer": self.developer,
            "skills": self.specialties,
            "available_for_hire": True,
            "location": "Bengaluru, India"
        }

api = DeveloperProfileService()
response = api.get_profile()
print(f"HTTP/1.1 200 OK\\nContent-Type: application/json\\n\\n{response}")
`,
    output: `HTTP/1.1 200 OK
Content-Type: application/json

{'status': 200, 'developer': 'Vignesh D', 'skills': ['Python', 'Machine Learning', 'Clean Code', 'Linux'], 'available_for_hire': True, 'location': 'Bengaluru, India'}`
  }
];
