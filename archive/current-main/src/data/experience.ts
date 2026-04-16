export interface ExperienceEntry {
  slug: string;
  role: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface Category {
  id: string;
  label: string;
  tagline: string;
  experiences: ExperienceEntry[];
}

export const categories: Category[] = [
  {
    id: 'ml',
    label: 'ML',
    tagline: 'Machine learning research, model design, and applied AI',
    experiences: [
      {
        slug: 'neurotech-ml',
        role: 'Machine Learning Engineer',
        company: 'NeuroTech @ Berkeley',
        dates: 'Jan 2026 — Present',
        location: 'Berkeley, CA',
        bullets: [
          'Achieved 5° RMSE on supervised regression predicting gait angle from 16-channel EEG data for BCI-driven exoskeleton control',
          'Designed a CNN-LSTM architecture — CNN extracts spatial-spectral features, LSTM performs gait angle regression',
          'Preprocessed raw EEG with artifact removal, bandpass filtering, per-channel normalization, and overlapping sliding windows',
        ],
        tech: ['Python', 'PyTorch', 'CNN-LSTM', 'EEG/BCI'],
      },
      {
        slug: 'synopsys-ds',
        role: 'Data Scientist',
        company: 'Synopsys (Contract)',
        dates: 'Aug 2025 — Dec 2025',
        location: 'Berkeley, CA',
        bullets: [
          'Trained and benchmarked regression, random forest, gradient boosting, and GNN models to predict chip power consumption',
          'Evaluated models on MAE, RMSE, and MAPE metrics across ~50–100 chip designs',
          'Used SHAP analysis to identify dominant features driving power consumption predictions',
        ],
        tech: ['Python', 'PyTorch', 'TorchGeometric', 'SHAP'],
      },
    ],
  },
  {
    id: 'swe',
    label: 'SWE',
    tagline: 'Full-stack systems, infrastructure, and engineering leadership',
    experiences: [
      {
        slug: 'openproject-vp',
        role: 'Vice President of Projects',
        company: 'Open Project @ Berkeley',
        dates: 'Jan 2025 — Dec 2025',
        location: 'Berkeley, CA',
        bullets: [
          "Led 15+ developers across 10+ teams in UC Berkeley's largest CS club (150+ members)",
          'Built internal management software and a CAS-authenticated system handling 200+ applications per semester',
          'Designed PostgreSQL schemas with Drizzle ORM and introduced org-wide CI/CD workflows and documentation',
        ],
        tech: ['Next.js', 'PostgreSQL', 'Supabase', 'Drizzle'],
      },
      {
        slug: 'cubesat-swe',
        role: 'Software Engineer',
        company: 'CubeSat',
        dates: 'Aug 2021 — Sep 2024',
        location: 'Irvine, CA',
        bullets: [
          "Engineered the satellite's end-to-end image data stream with error detection and correction",
          'Implemented encoding/decoding pipelines with compression, error correction, and encryption — increasing throughput by ~40%',
          'Integrated low-level USB/UART drivers on Linux using FTD2XX and Xilinx tooling',
        ],
        tech: ['Python', 'C', 'Linux', 'Satellite'],
      },
    ],
  },
  {
    id: 'agents',
    label: 'Agents',
    tagline: 'LLM-powered systems, RAG pipelines, and intelligent tooling',
    experiences: [
      {
        slug: 'openproject-lead',
        role: 'Lead Developer',
        company: 'Open Project @ Berkeley',
        dates: 'Jan 2025 — May 2025',
        location: 'Berkeley, CA',
        bullets: [
          'Built an LLM-powered RAG system for chess coaching — improved agent performance by 20%',
          'Extracted tactical and strategic features from board positions and retrieved similar historical positions and concept templates',
          'Developed an offline evaluation pipeline over 2M+ positions to test multiple LLMs with and without generated hints',
          'Led 2 cross-functional teams of 15+ developers across frontend, backend, and data workstreams',
        ],
        tech: ['Python', 'React Native', 'Flask', 'SQLite'],
      },
      {
        slug: 'neurotech-agents',
        role: 'Machine Learning Engineer',
        company: 'NeuroTech @ Berkeley',
        dates: 'Jan 2026 — Present',
        location: 'Berkeley, CA',
        bullets: [
          'Built an end-to-end BCI pipeline translating 16-channel EEG signals into real-time gait angle predictions for exoskeleton control',
          'Designed the preprocessing pipeline with artifact removal, bandpass filtering, and sliding window alignment for streaming inference',
          'Achieved 5° RMSE enabling responsive, closed-loop control between brain signals and exoskeleton actuation',
        ],
        tech: ['Python', 'PyTorch', 'EEG/BCI', 'Pipeline'],
      },
    ],
  },
  {
    id: 'data',
    label: 'Data',
    tagline: 'Data pipelines, scraping, ETL, and large-scale data systems',
    experiences: [
      {
        slug: 'openproject-data',
        role: 'Data Engineer',
        company: 'Open Project @ Berkeley',
        dates: 'Aug 2024 — Jan 2025',
        location: 'Berkeley, CA',
        bullets: [
          'Built an async web scraper with 10,000+ automated HTTP requests per run, collecting 100K+ data points',
          'Reduced end-to-end collection time by ~100x and structured 600+ classroom schedules into JSON availability models',
          'Cleaned and normalized 500K+ user-submitted ingredient entries, increasing recognized inputs from <20% to >95%',
        ],
        tech: ['Python', 'Playwright', 'Pandas'],
      },
      {
        slug: 'synopsys-data',
        role: 'Data Scientist',
        company: 'Synopsys (Contract)',
        dates: 'Aug 2025 — Dec 2025',
        location: 'Berkeley, CA',
        bullets: [
          'Transformed raw chip netlist data into graph representations for GNN training across ~50–100 designs',
          'Built data pipelines with PyTorch Geometric to construct and featurize netlist graphs with attention layers',
          'Benchmarked inference speed and model scalability across varying design complexities',
        ],
        tech: ['Python', 'PyTorch Geometric', 'Pandas', 'ETL'],
      },
    ],
  },
];
