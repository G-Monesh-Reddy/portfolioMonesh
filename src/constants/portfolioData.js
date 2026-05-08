import resumePdf from '../assets/Monesh__Resume.pdf';

export const portfolioData = {
  personalInfo: {
    name: "Monesh Reddy Gurram",
    role: "Software Development Engineer | Frontend Engineer | ML Engineer",
    summary: "Software Development Engineer with hands-on experience in frontend and full-stack development, AI-powered web applications, and data-driven systems. Skilled in React-based UI engineering, REST API integration, JWT-based authentication workflows, and applied AI using transformer models (BERT, RoBERTa). Experienced in SDLC-driven development, modular architecture, responsive design, and reproducible ML workflows involving real-world datasets.",
    email: "tillugurram@gmail.com",
    phone: "9000201821",
    github: "https://github.com/G-Monesh-Reddy",
    linkedin: "https://linkedin.com/in/monesh-gurram",
    resumeUrl: resumePdf
  },

  education: [
    {
      institution: "Kalasalingam Academy of Research and Education, Tamil Nadu",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2022 – 2026",
      cgpa: "8.37",
    }
  ],

  skills: {
    "Programming Languages": ["Python", "JavaScript (ES6+)", "C++", "Java (Basic)", "SQL", "TypeScript"],
    "Frontend": ["HTML5", "CSS3", "Bootstrap", "React.js", "Tailwind CSS", "Vite", "Framer Motion", "React Router", "Context API", "Responsive Web Design", "Media Queries", "Flexbox", "CSS Grid", "Monaco Editor"],
    "Backend": ["Node.js", "Express.js", "Flask", "FastAPI"],
    "Databases": ["MongoDB", "MongoDB Atlas", "SQLite", "MySQL", "SQL"],
    "Machine Learning (Experienced)": ["End-to-end ML pipelines", "Data preprocessing", "Feature engineering", "Model training", "Model evaluation", "KNN", "Naive Bayes", "Logistic Regression", "Decision Trees", "Random Forest", "Gradient Boosting", "Scikit-learn", "Accuracy", "Precision", "Recall", "F1-score", "ROC-AUC", "RMSE", "Cross-Validation", "5-fold CV", "Confusion Matrix", "Model validation", "Outlier detection", "Statistical insights", "Real-world datasets (4K–550K+ rows)"],
    "AI / NLP (Experienced)": ["Transformers", "BERT", "RoBERTa", "Hugging Face Hub", "Hugging Face Spaces", "Tokenization", "Text Classification", "Sentiment Analysis", "Multilingual NLP", "Large Language Models (LLMs)", "Gemini AI", "Gemini API", "ChatGPT", "LLM Integration", "Prompt Engineering", "Transfer Learning", "Query Rewriting"],
    "RAG / Retrieval Systems": ["RAG", "FAISS", "BM25", "RRF", "Hybrid Retrieval", "Semantic Search", "Multi-document QA Systems", "SSE Streaming"],
    "Currently Learning": ["Deep Learning", "CNNs", "Advanced text emotion detection using BERT", "Multimodal AI architectures", "PyTorch", "AdamW Optimizer", "Linear Learning Rate Scheduling"],
    "Data Analysis & Visualization": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Data Cleaning", "Data Preprocessing", "Data Manipulation", "Statistical Analysis", "Data Visualization", "Reporting", "Feature Engineering", "Scaling", "Encoding"],
    "APIs & Auth": ["REST APIs", "RESTful APIs", "REST-based Microservices", "JWT Authentication", "OAuth Authentication", "CRUD Operations"],
    "Tools & Platforms": ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Jupyter Notebook", "Google Translate API", "Excel", "Vercel", "Streamlit", "Joblib", "Pickle"],
    "Core CS Concepts": ["DSA", "Operating Systems", "OOP", "SDLC", "Agile", "Version Control", "Authentication & Authorization", "API Integration", "Modular Architecture", "Reproducible ML Workflows", "System Design", "CI/CD Workflows"]
  },

  experience: [
    {
      role: "Software Development Intern",
      company: "GHN Publications",
      duration: "Feb 2025 – Sep 2025",
      responsibilities: [
        "Developed responsive Admin, User, and Vendor dashboards using React and Tailwind CSS",
        "Improved cross-device responsiveness across 20+ production modules",
        "Collaborated via Git-based CI/CD workflows for deployment and version control",
        "Built responsive dashboards using React + Tailwind across 20+ modules",
        "Improved UI performance and ensured scalable frontend architecture"
      ]
    }
  ],

  projects: [
    // --- AI + Fullstack Projects ---
   
    {
      id: 2,
      title: "Emotion & Stress Detection Web App",
      githubUrl: null,
      liveUrl: "https://g-monesh-reddy.github.io/EmotionDetection/?utm_source=chatgpt.com",
      description: "Built an AI-driven web application that analyzes user text input to detect 28 distinct emotions and multiple stress levels. Fine-tuned BERT and RoBERTa transformer models were deployed via Hugging Face Spaces for real-time inference. Implemented optimized tokenization and inference pipelines to improve prediction accuracy. Designed an interactive frontend to visualize emotion and stress outputs clearly for end users.",
      metrics: [
        "Fine-tuned RoBERTa-base on GoEmotions (28 classes)",
        "Achieved 58.39% accuracy and 57.12% weighted F1 on 5,427 validation samples",
        "Trained stress classification model on Dreaddit dataset",
        "Achieved 80.98% accuracy and 80.91% F1",
        "Built end-to-end transformer training pipeline using PyTorch, AdamW optimizer, and linear learning rate scheduling",
        "Achieved 80%+ accuracy in stress classification using NLP models",
        "Built end-to-end pipeline using PyTorch with optimized inference"
      ],
      tags: ["BERT", "RoBERTa", "Hugging Face", "PyTorch", "NLP", "React"]
    },
    {
      id: 12,
      title: "Hybrid RAG Multi-Document QA System",
      githubUrl: "https://github.com/G-Monesh-Reddy/MultiDoc-RAG-System",
      liveUrl: "https://multi-doc-rag-system.vercel.app/",
      description: "Built full-stack RAG system enabling semantic search across multi-document datasets. Designed hybrid retrieval (FAISS + BM25) with RRF improving answer relevance. Implemented SSE streaming achieving 1–2s latency. Integrated LLM (Gemini) with query rewriting to reduce hallucinations. Deployed scalable architecture using FastAPI, Vercel, MongoDB Atlas.",
      metrics: [],
      tags: ["RAG", "FAISS", "FastAPI", "React.js", "MongoDB Atlas", "Gemini AI", "Vercel"]
    },
    {
      id: 13,
      title: "Smart Code Translator (AI System)",
      githubUrl: "https://github.com/G-Monesh-Reddy/CodeTranslation",
      liveUrl: "https://code-translation.vercel.app",
      description: "Developed LLM-based system for code translation and optimization across 5+ languages. Built modular backend (controller-service architecture) with REST APIs. Implemented JWT + OAuth authentication with secure routing. Designed structured prompt pipelines improving output consistency. Built real-time UI using Monaco Editor with async processing.",
      metrics: [],
      tags: ["React.js", "Node.js", "LLMs", "REST APIs", "JWT Authentication", "Monaco Editor"]
    },
    {
      id: 1,
      title: "Multilingual AI Chatbot",
      githubUrl: "https://github.com/G-Monesh-Reddy/Chatbot?utm_source=chatgpt.com",
      liveUrl: null,
      description: "Developed an end-to-end multilingual conversational chatbot to enable real-time question answering across 20+ Indian languages. The system uses a Flask-based backend exposing REST-based microservices that communicate with Gemini LLM for response generation. Integrated Google Translate API to ensure high-quality multilingual input/output handling. Built a responsive frontend using React.js and Tailwind CSS, enabling seamless user interaction across devices.",
      metrics: [],
      tags: ["Flask", "React.js", "Tailwind CSS", "Gemini LLM", "REST APIs", "Google Translate API"]
    },

    // --- ML Projects ---
    {
      id: 10,
      title: "Student Dropout Prediction System",
      githubUrl: null,
      liveUrl: "https://student-dropout-prediction-lqwquuamdsmegaclv9bynq.streamlit.app/",
      description: "Built binary classification pipeline on 4,000+ records. Engineered Scikit-learn preprocessing pipeline eliminating data leakage. Trained Logistic Regression, KNN, Random Forest, and Gradient Boosting models. Improved ROC-AUC from 0.78 to 0.91. Reduced false negatives by 22%. Implemented 5-fold CV (<3% variance). Achieved <50ms inference using Joblib.",
      metrics: [],
      tags: ["Scikit-learn", "Machine Learning", "Classification", "Streamlit", "Joblib"]
    },
    {
      id: 11,
      title: "Life Expectancy Prediction App",
      githubUrl: null,
      liveUrl: "https://life-expectancy-vyxp3ghxb9fdwbidejmfu6.streamlit.app/",
      description: "Developed regression model achieving R² > 0.87. Reduced RMSE by 18%. Implemented preprocessing pipeline improving prediction stability by 25%. Optimized inference latency by 40% using serialized model deployment.",
      metrics: [],
      tags: ["Machine Learning", "Regression", "Streamlit", "Data Preprocessing"]
    },

    // --- EDA Projects ---
    {
      id: 6,
      title: "Titanic Dataset Analysis (EDA)",
      githubUrl: "https://github.com/G-Monesh-Reddy/EDA-Analysis?utm_source=chatgpt.com",
      liveUrl: null,
      description: "Performed Exploratory Data Analysis (EDA) on the Titanic dataset to identify survival trends based on gender, age, passenger class, and family size. Discovered that female passengers had approximately 2.7× higher survival rates and that 1st-class passengers had the highest survival odds. Visualized insights using statistical plots.",
      metrics: [],
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"]
    },
    {
      id: 7,
      title: "Zomato Restaurants Analysis (EDA)",
      githubUrl: "https://github.com/G-Monesh-Reddy/EDA_ANALYSIS_ZOMATO.git?utm_source=chatgpt.com",
      liveUrl: null,
      description: "Conducted EDA on 42K+ restaurant records from Bangalore to analyze food trends and customer preferences. Identified that 49% of restaurants support table booking and 32% support online ordering. Analyzed pricing trends showing affordability peaks at ₹1,000–₹1,500, and identified major food hubs such as Lavelle Road, Church Street, Koramangala, Whitefield, and BTM.",
      metrics: [],
      tags: ["Python", "Pandas", "EDA", "Data Visualization"]
    },
    {
      id: 8,
      title: "Black Friday Sales Analysis (EDA)",
      githubUrl: "https://github.com/G-Monesh-Reddy/EDA-BLACK-FRIDAY?utm_source=chatgpt.com",
      liveUrl: null,
      description: "Analyzed 550K+ customer transaction records to uncover purchasing patterns and revenue drivers. Identified City B contributing 41.5% of total revenue, and found that the top-selling SKU generated ₹28M, while the top 5 SKUs generated ₹128.5M combined.",
      metrics: [],
      tags: ["Python", "Pandas", "Data Analysis", "EDA"]
    },
    {
      id: 9,
      title: "Heart Attack Analysis (EDA)",
      githubUrl: "https://github.com/G-Monesh-Reddy/EDA-HEART_ATTACT_ANALYSIS?utm_source=chatgpt.com",
      liveUrl: null,
      description: "Performed EDA on a healthcare dataset to analyze heart attack risk factors. Identified 54.5% of patients at positive risk, primarily within the 40–55 age group. Detected severe outliers such as cholesterol levels above 400 mg/dL and high blood pressure readings, supporting risk stratification insights.",
      metrics: [],
      tags: ["Python", "EDA", "Healthcare Data", "Statistical Analysis"]
    },

    // --- Frontend Projects ---
    {
      id: 3,
      title: "Nxt Trendz (E-commerce Platform)",
      githubUrl: null,
      liveUrl: "https://moneshnxttrends.ccbp.tech?utm_source=chatgpt.com",
      description: "Developed a scalable React-based e-commerce platform inspired by Amazon/Flipkart. Built 15+ modular UI components using Context API for global state management. Implemented JWT-based authentication for secure user sessions and integrated REST APIs for product listing, cart, and checkout workflows. Ensured responsive design and modular architecture for maintainability.",
      metrics: [],
      tags: ["React.js", "Context API", "JWT Authentication", "REST APIs", "Responsive Design"]
    },
    {
      id: 4,
      title: "Jobby App (Job Portal)",
      githubUrl: null,
      liveUrl: "https://moneshjobbyapp.ccbp.tech?utm_source=chatgpt.com",
      description: "Built a job search web application featuring 500+ job listings with advanced filtering capabilities. Implemented multi-parameter filtering using URL query parameters and protected routes using React Router and JWT authentication. Optimized API calls and search workflows to improve responsiveness and usability.",
      metrics: [],
      tags: ["React.js", "React Router", "JWT Authentication", "API Integration"]
    },
    {
      id: 5,
      title: "Tasty Kitchens (Food Delivery Platform)",
      githubUrl: null,
      liveUrl: "https://moneshfoodapp.ccbp.tech?utm_source=chatgpt.com",
      description: "Developed an online food delivery application with dynamic restaurant and menu pages powered by REST APIs. Implemented real-time cart management with persistent storage. Converted Figma designs into responsive React components, ensuring consistent UI behavior across devices.",
      metrics: [],
      tags: ["React.js", "REST APIs", "Responsive Design", "Figma to React"]
    }
  ],

  researchPapers: [
    {
      title: "Emotibuddie: A Generative AI Companion for Emotional Stress Monitoring and Mental Wellness Support",
      link: "https://drive.google.com/file/d/1i7nsBdqH86M_lyg16pWxdUrjZygTDkVY/view?usp=sharing&utm_source=chatgpt.com"
    },
    {
      title: "Multi-Language Conversational Agent for Tech Support: Design and Implementation",
      link: "https://drive.google.com/file/d/1l0kx4twm7zjum43xC9NpYIkj2fWugpY2/view?usp=sharing&utm_source=chatgpt.com"
    }
  ],

  hackathon: {
    title: "IBM Hackathon 2025",
    award: "National Winner",
    description: "Achieved National Winner position at the IBM Hackathon 2025."
  },

  certifications: [
    {
      id: 1,
      link: "https://drive.google.com/file/d/14jLnyuxfcqmnOFdXQELURuwhsDg7Qg4n/view?usp=sharing&utm_source=chatgpt.com"
    },
    {
      id: 2,
      link: "https://drive.google.com/file/d/11d04Y8E6v6qOyk0gxXwLY-qk6q3crWDf/view?usp=sharing&utm_source=chatgpt.com"
    },
    {
      id: 3,
      link: "https://drive.google.com/file/d/1wc7cl2cbOtvYVr1fozTU6szB4wMWW27Z/view?usp=sharing&utm_source=chatgpt.com"
    }
  ]
};
