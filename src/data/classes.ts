export interface Course {
  code: string;
  title: string;
  units: number;
  grade: string;
  taughtAt?: { name: string; url: string };
}

export interface Semester {
  id: string;
  label: string;
  courses: Course[];
}

export const semesters: Semester[] = [
  {
    id: 'summer-2026',
    label: 'Summer 2026',
    courses: [
      { code: 'ANTHRO 2AC', title: 'Introduction to Archaeology', units: 4.0, grade: 'EPN' },
      { code: 'COMPSCI 61C', title: 'Great Ideas of Computer Architecture', units: 4.0, grade: 'GRD' },
    ],
  },
  {
    id: 'spring-2026',
    label: 'Spring 2026',
    courses: [
      { code: 'COMPSCI 170', title: 'Efficient Algorithms and Intractable Problems', units: 4.0, grade: 'GRD' },
      { code: 'COMPSCI 189', title: 'Introduction to Machine Learning', units: 4.0, grade: 'GRD' },
      { code: 'CYPLAN 98', title: 'Special Group Study', units: 1.0, grade: 'PNP' },
      { code: 'ISF 100A', title: 'Introduction to Social Theory', units: 4.0, grade: 'EPN' },
      { code: 'NEU 198', title: 'Directed Group Study', units: 2.0, grade: 'PNP' },
    ],
  },
  {
    id: 'fall-2025',
    label: 'Fall 2025',
    courses: [
      { code: 'CHEM 1A', title: 'General Chemistry', units: 3.0, grade: 'P' },
      { code: 'COLWRIT R4B', title: 'Reading, Composition, and Research', units: 4.0, grade: 'A' },
      { code: 'DATA C100', title: 'Principles & Techniques of Data Science', units: 4.0, grade: 'A+' },
      { code: 'HISTORY 84', title: 'Sophomore Seminar', units: 1.0, grade: 'P' },
      { code: 'UGBA 135', title: 'Personal Financial Management', units: 2.0, grade: 'A' },
    ],
  },
  {
    id: 'spring-2025',
    label: 'Spring 2025',
    courses: [
      { code: 'COMPSCI 47B', title: 'Completion of Work in Computer Science 61B', units: 1.0, grade: 'A+' },
      { code: 'COMPSCI 70', title: 'Discrete Mathematics and Probability Theory', units: 4.0, grade: 'A-' },
      { code: 'ENGIN 125', title: 'Ethics, Engineering, and Society', units: 3.0, grade: 'A+' },
      { code: 'MUSIC 27', title: 'Introduction to Western Music', units: 4.0, grade: 'A+' },
    ],
  },
  {
    id: 'fall-2024',
    label: 'Fall 2024',
    courses: [
      { code: 'COGSCI 1', title: 'Introduction to Cognitive Science', units: 4.0, grade: 'A+' },
      { code: 'COMPSCI 61A', title: 'The Structure and Interpretation of Computer Programs', units: 4.0, grade: 'A' },
      { code: 'DATA C8', title: 'Foundations of Data Science', units: 4.0, grade: 'A+' },
    ],
  },
  {
    id: 'highschool',
    label: 'High School',
    courses: [
      { code: 'MATH 53', title: 'Multivariable Calculus', units: 4.0, grade: '', taughtAt: { name: 'Saddleback', url: 'https://www.saddleback.edu/' } },
      { code: 'MATH 54', title: 'Linear Algebra and Differential Equations', units: 4.0, grade: '', taughtAt: { name: 'IVC', url: 'https://www.ivc.edu/' } },
      { code: 'COMPSCI 61B', title: 'Data Structures', units: 4.0, grade: '', taughtAt: { name: 'IVC', url: 'https://www.ivc.edu/' } },
    ],
  },
];
