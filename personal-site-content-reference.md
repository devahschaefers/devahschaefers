# Devah Schaefers Personal Site Content Reference

This file centralizes the content pulled from the resume source PDFs you referenced, plus the LinkedIn profile URL:

- LinkedIn: <https://www.linkedin.com/in/devahschaefers/>
- SWE resume PDF
- AI Engineer resume PDF
- Data Science resume PDF
- Data Engineer resume PDF
- SWE/Linkdin resume PDF

Note: I could not directly crawl the LinkedIn page content from this environment, so this file is built from the local resume PDFs that appear to mirror that profile content.

## Core Identity

- Name: Devah Schaefers
- Email: devah.schaefers@gmail.com
- Phone: (949) 466-8538
- LinkedIn: <https://www.linkedin.com/in/devahschaefers/>
- School: University of California, Berkeley
- Degree: Bachelor of Arts in Computer Science & Data Science

## Conflicts To Resolve Once

These values differ across the source resumes and should be standardized before you publish website copy:

- Expected graduation: May 2027 in most versions, May 2028 in `SWE/Linkdin`
- GPA: 3.95 in some versions, 3.97 in others
- Open Project VP start date: January 2025 in some versions, May 2025 in others
- Open Project VP title scope: `Vice President of Projects (Next.js)` vs `Vice President of Projects (Next.js, SQL)`
- Open Project lead role wording varies between `Lead Developer` and a more data/backend-focused description

## Short Bio Material

Potential facts consistently supported across the resume set:

- UC Berkeley student studying Computer Science and Data Science
- Builds across software engineering, machine learning, data systems, and AI tooling
- Experience leading engineering teams, designing internal tools, building ML pipelines, and shipping full-stack systems
- Works with Python, TypeScript, Rust, SQL, React/Next.js, PyTorch, PostgreSQL, SQLite, and AI/LLM workflows

## Education

### University of California, Berkeley

- Bachelor of Arts in Computer Science & Data Science
- Expected Graduation: May 2027 or May 2028 depending on version
- GPA: 3.95 or 3.97 depending on version

## Experience

### NeuroTech @ Berkeley

- Role: Machine Learning Engineer
- Location: Berkeley, CA
- Dates: January 2026 - Present
- Stack: Python, PyTorch
- Achieved 5 degree RMSE on a supervised regression task predicting gait angle from 16-channel EEG data for BCI-driven exoskeleton control
- Designed a CNN-LSTM architecture where a CNN extracts spatial-spectral features and an LSTM performs gait angle regression
- Preprocessed raw EEG with artifact removal, bandpass filtering, per-channel normalization, and overlapping sliding windows for aligned training samples

### Synopsys (Contract)

- Role: Data Scientist
- Location: Berkeley, CA
- Dates: August 2025 - December 2025
- Stack: Python, PyTorch, TorchGeometric
- Trained and compared linear regression, random forest, gradient boosting, and GNN models to predict chip power consumption
- Evaluated on MAE, RMSE, and MAPE across roughly 50-100 designs
- Built a GNN with PyTorch Geometric and graph attention layers on netlist graphs
- Benchmarked model accuracy and inference speed and used SHAP analysis to identify dominant features

### Open Project

- Location: Berkeley, CA

#### Vice President of Projects

- Dates: January 2025 - December 2025 in one version, May 2025 - Present in others
- Stack: Next.js, SQL, Supabase, PostgreSQL, Drizzle
- Led and supported 10+ projects in UC Berkeley's largest CS club
- Led 15+ developers across 10+ teams in a 150+ member organization
- Guided early design reviews, technical direction, API/data schema decisions, and documentation of trade-offs
- Built internal management software in Next.js, Supabase, and PostgreSQL
- Built a CAS-authenticated system handling 200+ project applications per semester
- Designed PostgreSQL schemas for member, project, and application data using Drizzle ORM
- Helped teams structure tables, relationships, and indexes for maintainability and simpler querying
- Introduced org-wide CI/CD workflows, templates, documentation, and onboarding support

#### Lead Developer

- Dates: January 2025 - May 2025
- Stack: Python, React Native, Flask, SQLite
- Led 2 cross-functional teams of 15+ developers across frontend, backend, and data workstreams
- Conducted regular code reviews and drove architecture decisions including framework selection, REST endpoint design, and data contracts
- Built an LLM-powered RAG system for chess coaching
- Extracted tactical and strategic features from board positions and retrieved similar historical positions and concept templates
- Improved agent performance by 20% on the evaluation set
- Developed an offline evaluation pipeline over 2M+ positions to test multiple LLMs with and without generated hints
- Designed and optimized a SQLite architecture and Python NLP pipelines
- Cleaned and normalized 500K+ user-submitted ingredient entries
- Increased recognized ingredient inputs from under 20% to over 95%
- Enabled recipe recommendations to scale reliably

#### Data Engineer

- Dates: August 2024 - January 2025
- Stack: Python, Playwright, Pandas
- Built an asynchronous web scraper with 10,000+ automated HTTP requests per run
- Collected over 100K classroom availability data points
- Reduced end-to-end collection time by roughly 100x
- Turned raw schedule data for 600+ classrooms into a structured JSON availability model
- Powered a student-facing tool querying 100K+ records to find open study spaces

### Cube Sat

- Role: Software Engineer
- Location: Irvine, CA
- Dates: August 2021 - September 2024
- Stack: Python, C
- Engineered the satellite's end-to-end image data stream
- Added error detection and correction for more reliable payload transmission over laser and RF links
- Implemented encoding and decoding pipelines with compression, error correction, and encryption
- Increased effective data throughput by about 40%
- Improved link reliability by about 50% in one version
- Integrated low-level USB/UART drivers on Linux using FTD2XX and Xilinx tooling
- Supported custom baud rates and robust streaming with retry handling for interrupted transfers

## Projects

### Structured Document Editing Agent

- Stack: TypeScript, AI SDK
- Built an LLM-powered agent for structured document editing via tool calls
- Used an intermediate representation to keep multi-step edits safe and consistent
- Reduced manual editing time by 60%
- Designed a validation system combining tool-level constraints and post-edit checks

### AI File Organizer

- Stack: Rust
- Built an AI-based tool to organize large, inconsistent directory trees
- Used recursive traversal, semantic indexing, contextual grouping, and model-guided planning
- Achieved about 18x faster cleanup than manual organization in one version
- Processed and semantically indexed 10K+ files in one version
- Architected a two-stage Explorer/Organizer pipeline
- Explorer handled traversal and internal summaries
- Organizer handled semantic grouping and file-operation planning
- Included asynchronous model calls and an interactive TUI workflow
- Added a virtual staging layer for safe review before execution
- Reported zero data loss during testing in one version

### NeuroTech EEG Gait Decoder

- Stack: Python, PyTorch
- Built a PyTorch pipeline to predict gait angle from 16-channel EEG
- Reached 5 degree RMSE on supervised regression for BCI-driven exoskeleton control
- Designed a CNN-LSTM model with filtering, normalization, and overlapping sliding windows

### Disaster Response NLP

- Stack: Python
- Performed sentiment analysis on about 45K disaster tweets across 14 events using RoBERTa and VADER
- Implemented batch processing to cut inference time roughly in half
- Developed geospatial and textual models to identify locations of highest need during wildfire crises
- Used word frequency analysis and sentiment scoring to extract actionable signals from social media data

### Disinformation Detection System

- Stack: Python, scikit-learn
- Developed a disinformation detection system using Logistic Regression
- Used GloVe embeddings and Bag-of-Words features
- Achieved 91% accuracy and 87% F1-score
- Collected and cleaned 1,000+ text samples or data points via web scraping
- Reduced preprocessing time by 40% in one version
- Iterated using confusion-matrix analysis and standard evaluation metrics

### Raycast Extension

- Stack: TypeScript, React, AppleScript
- Built a productivity extension for calendar management
- Reported over 10,000 users in one version
- Integrated with calendar software via AppleScript

## Skills

### Languages

- Python
- SQL
- PostgreSQL
- SQLite
- Rust
- C
- Java
- C++
- TypeScript
- CSS

### Frameworks, Libraries, and ML

- React
- Next.js
- React Native
- Flask
- PyTorch
- TorchGeometric
- scikit-learn
- Pandas
- NumPy
- spaCy
- BeautifulSoup
- Playwright
- Drizzle ORM

### Data and Systems

- Data modeling
- Normalization
- ETL/ELT
- Web scraping
- Batch processing
- Async processing
- Query profiling
- Schema design
- Indexing

### Tools and Platforms

- Git
- GitHub
- GitLab
- Supabase
- PostgreSQL
- SQLite
- CI/CD

## Website Copy Seeds

### One-line positioning

Devah Schaefers is a UC Berkeley Computer Science and Data Science student building software, AI systems, and data infrastructure.

### Slightly longer positioning

Devah Schaefers is a UC Berkeley student studying Computer Science and Data Science with experience across software engineering, machine learning, data systems, and AI tooling. His work spans full-stack internal platforms, LLM-powered agents, applied ML research, and high-volume data pipelines.

## Source Notes

Source files used to build this reference:

- `/Users/devahschaefers/Library/Mobile Documents/com~apple~CloudDocs/Resumes/PDFs/SWE/DevahSchaefersResume.pdf`
- `/Users/devahschaefers/Library/Mobile Documents/com~apple~CloudDocs/Resumes/PDFs/AIEngineer/DevahSchaefersResume.pdf`
- `/Users/devahschaefers/Library/Mobile Documents/com~apple~CloudDocs/Resumes/PDFs/DataScience/DevahSchaefersResume.pdf`
- `/Users/devahschaefers/Library/Mobile Documents/com~apple~CloudDocs/Resumes/PDFs/DataEngineer/DevahSchaefersResume.pdf`
- `/Users/devahschaefers/Library/Mobile Documents/com~apple~CloudDocs/Resumes/PDFs/SWE/Linkdin/DevahSchaefersResume.pdf`
