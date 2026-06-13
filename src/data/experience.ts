export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  summary: string;
  bullets: string[];
  postSlug?: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  stat?: string;
  postSlug?: string;
}

export interface Category {
  id: string;
  label: string;
  tagline: string;
  experiences: ExperienceEntry[];
  projects: ProjectEntry[];
}

export const categories: Category[] = [
  {
    id: 'ml',
    label: 'ML',
    tagline: 'Machine learning research, model design, and applied AI',
    experiences: [
      {
        role: 'ML Engineer',
        company: 'NeuroTech @ Berkeley',
        dates: 'Jan 2026 — Present',
        summary: 'EEG gait decoder',
        bullets: [
          'Achieved 5° RMSE on supervised regression predicting gait angle from 16-channel EEG data for BCI-driven exoskeleton control',
          'Designed a CNN-LSTM architecture — CNN extracts spatial-spectral features, LSTM performs gait angle regression',
          'Preprocessed raw EEG with artifact removal, bandpass filtering, per-channel normalization, and overlapping sliding windows',
        ],
        postSlug: 'neurotech-eeg',
      },
      {
        role: 'Data Scientist',
        company: 'Synopsys (Contract)',
        dates: 'Aug 2025 — Dec 2025',
        summary: 'Chip power models',
        bullets: [
          'Trained and benchmarked regression, random forest, gradient boosting, and GNN models to predict chip power consumption',
          'Evaluated models on MAE, RMSE, and MAPE metrics across ~50–100 chip designs',
          'Used SHAP analysis to identify dominant features driving power consumption predictions',
        ],
        postSlug: 'chip-power-gnn',
      },
    ],
    projects: [
      {
        title: 'Disaster Response NLP',
        description:
          'Sentiment analysis on ~45K disaster tweets across 14 events using RoBERTa and VADER. Batch processing cut inference time roughly in half.',
        postSlug: 'disaster-nlp',
      },
      {
        title: 'Disinformation Detection System',
        description:
          'Classification system using Logistic Regression with GloVe embeddings and Bag-of-Words features. 91% accuracy and 87% F1-score, iterated via confusion-matrix analysis.',
        postSlug: 'disinfo-detection',
      },
    ],
  },
  {
    id: 'swe',
    label: 'SWE',
    tagline: 'Full-stack systems, infrastructure, and engineering leadership',
    experiences: [
      {
        role: 'Vice President of Projects',
        company: 'Open Project @ Berkeley',
        dates: 'Jan 2025 — Dec 2025',
        summary: 'Internal club tooling',
        bullets: [
          "Led 15+ developers across 10+ teams in UC Berkeley's largest CS club (150+ members)",
          'Built internal management software and a CAS-authenticated system handling 200+ applications per semester',
          'Designed PostgreSQL schemas with Drizzle ORM and introduced org-wide CI/CD workflows and documentation',
        ],
        postSlug: 'open-project-platform',
      },
      {
        role: 'Software Engineer',
        company: 'CubeSat',
        dates: 'Aug 2021 — Sep 2024',
        summary: 'Satellite image pipeline',
        bullets: [
          "Engineered the satellite's end-to-end image data stream with error detection and correction",
          'Implemented encoding/decoding pipelines with compression, error correction, and encryption — increasing throughput by ~40%',
          'Integrated low-level USB/UART drivers on Linux using FTD2XX and Xilinx tooling',
        ],
        postSlug: 'cubesat',
      },
    ],
    projects: [
      {
        title: 'AI File Organizer',
        description:
          'Rust-built tool to organize large, inconsistent directory trees. Asynchronous model calls, interactive TUI workflow, and a virtual staging layer for safe review before execution.',
        postSlug: 'ai-file-organizer',
      },
      {
        title: 'Raycast Calendar Extension',
        description:
          'Productivity extension for calendar management integrated with macOS via AppleScript. Serving over 10,000 users.',
        stat: '10K+ users',
        postSlug: 'raycast-calendar',
      },
    ],
  },
  {
    id: 'agents',
    label: 'Agents',
    tagline: 'LLM-powered systems, RAG pipelines, and intelligent tooling',
    experiences: [
      {
        role: 'Lead Developer',
        company: 'Open Project @ Berkeley',
        dates: 'Jan 2025 — May 2025',
        summary: 'Chess coaching RAG',
        bullets: [
          'Built an LLM-powered RAG system for chess coaching — improved agent performance by 20%',
          'Extracted tactical and strategic features from board positions and retrieved similar historical positions and concept templates',
          'Developed an offline evaluation pipeline over 2M+ positions to test multiple LLMs with and without generated hints',
        ],
        postSlug: 'chess-rag',
      },
      {
        role: 'ML Engineer',
        company: 'NeuroTech @ Berkeley',
        dates: 'Jan 2026 — Present',
        summary: 'Realtime BCI pipeline',
        bullets: [
          'Built an end-to-end BCI pipeline translating 16-channel EEG signals into real-time gait angle predictions for exoskeleton control',
          'Designed the preprocessing pipeline with artifact removal, bandpass filtering, and sliding window alignment for streaming inference',
          'Achieved 5° RMSE enabling responsive, closed-loop control between brain signals and exoskeleton actuation',
        ],
        postSlug: 'neurotech-eeg',
      },
    ],
    projects: [
      {
        title: 'Resume Editing Agent',
        description:
          'An agent that tailors resumes per job and treats formatting as a hard constraint, verifying the rendered PDF with pdftotext to keep bullets clean and the resume to one page — speeding up my application process by roughly 10x.',
        postSlug: 'resume-editing-agent',
      },
      {
        title: 'AI File Organizer',
        description:
          'AI-based tool using recursive traversal, semantic indexing, and model-guided planning to organize directory trees. Two-stage Explorer/Organizer pipeline achieving 18x faster cleanup.',
        postSlug: 'ai-file-organizer',
      },
    ],
  },
  {
    id: 'data',
    label: 'Data',
    tagline: 'Data pipelines, scraping, ETL, and large-scale data systems',
    experiences: [
      {
        role: 'Data Engineer',
        company: 'Open Project @ Berkeley',
        dates: 'Aug 2024 — Jan 2025',
        summary: 'Study-space scraper',
        bullets: [
          'Built an async web scraper with 10,000+ automated HTTP requests per run, collecting 100K+ data points',
          'Reduced end-to-end collection time by ~100x and structured 600+ classroom schedules into JSON availability models',
          'Cleaned and normalized 500K+ user-submitted ingredient entries, increasing recognized inputs from <20% to >95%',
        ],
        postSlug: 'classroom-scraper',
      },
      {
        role: 'Data Scientist',
        company: 'Synopsys (Contract)',
        dates: 'Aug 2025 — Dec 2025',
        summary: 'Netlist graph pipeline',
        bullets: [
          'Transformed raw chip netlist data into graph representations for GNN training across ~50–100 designs',
          'Built data pipelines with PyTorch Geometric to construct and featurize netlist graphs with attention layers',
          'Benchmarked inference speed and model scalability across varying design complexities',
        ],
        postSlug: 'chip-power-gnn',
      },
    ],
    projects: [
      {
        title: 'Disaster Response NLP',
        description:
          'Processed ~45K disaster tweets across 14 events. Developed geospatial and textual models to identify locations of highest need, using word frequency analysis and sentiment scoring to extract actionable signals.',
        postSlug: 'disaster-nlp',
      },
      {
        title: 'Disinformation Detection System',
        description:
          'Collected and cleaned 1,000+ text samples via web scraping. Reduced preprocessing time by 40% with structured NLP pipelines for feature extraction.',
        postSlug: 'disinfo-detection',
      },
    ],
  },
];
