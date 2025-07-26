export interface Skill {
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  isCombined?: boolean;
  combinedPeriod?: string;
  combinedPositions?: string[];
}

export interface Project {
  title: string;
  description: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
  link?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
  concentration?: string;
}

export const personalInfo = {
  name: 'Christopher Vinciguerra',
  title: 'Software Engineer & MBA Graduate',
  email: 'christophervin1@gmail.com',
  phone: '(518) 935-3812',
  location: 'Clifton Park, NY',
  website: 'https://chrisv.us',
  linkedin: 'https://linkedin.com/in/chris-vinciguerra/',
  github: 'https://github.com/ChrisVinciguerra',
  resume: '/assets/Chris Vinciguerra Resume 7-25-25.pdf',
  about: `I'm a Computer Science graduate and MBA holder with a passion for AI, data science, and building innovative solutions. Recently led teams at xAI as a Human Data Expert Team Lead, I specialize in machine learning, software engineering, and team leadership. Currently seeking new opportunities to make an impact.`,
  intro: `Passionate about building innovative solutions at the intersection of AI, data science, and software engineering. Recently led teams at xAI and now seeking new opportunities to advance artificial intelligence capabilities.`
};

export const education: Education[] = [
  {
    degree: 'Master of Business Administration',
    school: 'Syracuse University, Martin J. Whitman School of Management',
    location: 'Syracuse, NY',
    period: 'August 2022 - December 2024',
    gpa: '3.99/4.0',
    concentration: 'Business Analytics'
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'Syracuse University, College of Engineering & Computer Science',
    location: 'Syracuse, NY',
    period: 'August 2020 - December 2024',
    gpa: '3.87/4.0'
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming Languages', level: 'expert' },
  { name: 'JavaScript', category: 'Programming Languages', level: 'advanced' },
  { name: 'TypeScript', category: 'Programming Languages', level: 'advanced' },
  { name: 'C++', category: 'Programming Languages', level: 'intermediate' },
  { name: 'Java', category: 'Programming Languages', level: 'intermediate' },
  { name: 'SQL', category: 'Programming Languages', level: 'advanced' },
  
  // Technologies & Frameworks
  { name: 'React', category: 'Frontend & Backend', level: 'advanced' },
  { name: 'Node.js', category: 'Frontend & Backend', level: 'advanced' },
  { name: 'TensorFlow', category: 'AI/ML & Data Science', level: 'expert' },
  { name: 'Docker', category: 'DevOps & Tools', level: 'advanced' },
  { name: 'MongoDB', category: 'Frontend & Backend', level: 'intermediate' },
  { name: 'Flask', category: 'Frontend & Backend', level: 'intermediate' },
  { name: 'Git', category: 'DevOps & Tools', level: 'advanced' },
  
  // Areas of Expertise
  { name: 'Machine Learning', category: 'AI/ML & Data Science', level: 'expert' },
  { name: 'Data Science', category: 'AI/ML & Data Science', level: 'advanced' },
  { name: 'Software Engineering', category: 'Development & Leadership', level: 'expert' },
  { name: 'Team Leadership', category: 'Development & Leadership', level: 'advanced' },
  { name: 'Agile Development', category: 'Development & Leadership', level: 'advanced' }
];

export const experience: Experience[] = [
  {
    company: 'xAI',
    position: 'Human Data Expert Team Lead',
    location: 'Remote',
    period: 'January 2025 - July 2025',
    description: 'Supervised a global team of 15 Software Engineering Specialists in curating data for reinforcement learning to improve AI programming capabilities.',
    highlights: [
      'Supervised a global team of 15 Software Engineering Specialists in curating data for reinforcement learning to improve AI programming capabilities in Python, JavaScript, and C++',
      'Supported global team expansion to 60 internal and 150+ external members through guidance and supporting workflow scripts',
      'Developed rubrics, instructions, and documentation for data correction; led weekly meetings to align team on shifting project goals',
      'Developed interactive scripts for team members to test and define repository setup commands in a containerized environment',
      'Automated Dockerfile generation from JSON inputs including environment setup, repo installation, and Python dependencies',
      'Conducted technical and project interviews in Python, independently evaluating candidates for advancement'
    ],
    technologies: ['Python', 'JavaScript', 'C++', 'Docker', 'AI/ML', 'Team Leadership'],
    isCombined: true,
    combinedPeriod: 'September 2024 - July 2025',
    combinedPositions: ['Software Engineering Specialist, Human Data', 'Human Data Expert Team Lead']
  },
  {
    company: 'xAI',
    position: 'Software Engineering Specialist, Human Data',
    location: 'Remote',
    period: 'September 2024 - January 2025',
    description: 'Collaborated closely with AI engineers to experiment with various methods for generating unique programming problems.',
    highlights: [
      'Collaborated closely with AI engineers to experiment with various methods for generating unique programming problems using Python scripts',
      'Conducted extensive quality assurance (QA) on vendor-created and internally generated datasets for programming prompts',
      'Edited GitHub-sourced issue descriptions and pull requests for model fairness to support reinforcement learning'
    ],
    technologies: ['Python', 'AI/ML', 'Quality Assurance', 'GitHub']
  },
  {
    company: 'Regeneron Pharmaceuticals',
    position: 'Computer System Validation Intern',
    location: 'Rensselaer, NY',
    period: 'May 2024 - July 2024',
    description: 'Led the Computer System Validation and IT Quality team transition from SharePoint to Jira for project tracking.',
    highlights: [
      'Led the Computer System Validation and IT Quality team transition from SharePoint to Jira for project tracking, enhancing item visibility and efficiency for over 40 global users',
      'Developed and implemented tailored workflows, issue types, fields, and validation in Jira to meet specific business needs',
      'Created custom dashboards and queries to highlight key metrics in monthly reports for senior management',
      'Authored detailed user documentation and provided support through daily office hours'
    ],
    technologies: ['Jira', 'SharePoint', 'Project Management', 'Documentation']
  },
  {
    company: 'Regeneron Pharmaceuticals',
    position: 'Document Control Intern',
    location: 'Rensselaer, NY',
    period: 'May 2023 - August 2023',
    description: 'Collaborated with management to design and implement a new knowledge management tool for regulatory audits.',
    highlights: [
      'Collaborated with management to design and implement a new knowledge management tool for regulatory audits, addressing gaps in record-keeping for over 60 common topics',
      'Designed internal business applications for data collection and analysis using Power Apps, Power Automate, and SharePoint'
    ],
    technologies: ['Power Apps', 'Power Automate', 'SharePoint', 'Business Analysis']
  },
  {
    company: 'Syracuse University',
    position: 'Academic Physics Coach',
    location: 'Syracuse, NY',
    period: 'August 2021 - May 2024',
    description: 'Fostered a positive learning environment through responsiveness to student needs, ensuring academic success.',
    highlights: [
      'Fostered a positive learning environment through responsiveness to student needs, ensuring academic success across 4 semesters and over 160 students',
      'Facilitated student engagement with key introductory physics concepts through weekly practice worksheets',
      'Provided guided walkthroughs and explanations of course content, addressing student-specific misunderstandings in small group sessions'
    ],
    technologies: ['Teaching', 'Physics', 'Student Support', 'Academic Coaching']
  }
];

export const projects: Project[] = [
  {
    title: 'OnePolicy',
    description: 'Co-founded a startup to deliver individualized life insurance quotes from multiple companies without an agent.',
    role: 'Co-Founder',
    period: 'January 2023 - October 2023',
    location: 'Clifton Park, NY',
    highlights: [
      'Trained deep neural networks for regression with TensorFlow and Keras, utilizing preprocessing, normalization, regularization, and dropout techniques, reducing model size by over 50% while maintaining accuracy',
      'Configured and deployed Docker containers serving neural network predictions for over six insurance companies through REST API created with TensorFlow-serving'
    ],
    technologies: ['TensorFlow', 'Keras', 'Docker', 'REST API', 'Python', 'Machine Learning']
  },
  {
    title: 'MUSIX',
    description: 'Led a team of four in designing a location-based music web app and authored a comprehensive Software Requirements Specification (SRS) document following UML guidelines.',
    role: 'Co-Founder, Scrum Master',
    period: 'August 2022 - May 2023',
    location: 'Syracuse, NY',
    highlights: [
      'Acted as Scrum Master, managing Agile development through user stories, workload estimation, iterative sprints, and standup meetings, ensuring project deadlines were met',
      'Integrated Google Maps API with Flask backend to perform CRUD operations on Geospatial data in MongoDB database',
      'Launched a beta version in the Syracuse area utilizing Google Maps, Node.Js, MongoDB, and a Python backend with Flask'
    ],
    technologies: ['Flask', 'Node.js', 'MongoDB', 'Google Maps API', 'Python', 'JavaScript', 'Agile']
  }
];

export const leadership = [
  {
    title: 'Syracuse University Research & Development Club',
    role: 'President',
    period: 'April 2022 - August 2023',
    description: 'Organized weekly meetings and club activities to foster community in the ECS college within Syracuse. Invited guests to host exploratory presentations of requested topics around current developments such as FinTech, LLMs, and Industrial Automation.'
  },
  {
    title: 'Syracuse University Research & Development Club',
    role: 'Treasurer',
    period: 'August 2021 - April 2022',
    description: 'Managed club finances and budget planning for research and development initiatives.'
  }
]; 