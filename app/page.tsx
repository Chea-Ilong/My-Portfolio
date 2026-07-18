'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Code2, ExternalLink, Github, Linkedin, Mail, Send } from 'lucide-react';

interface NavItem {
  label: Record<Language, string>;
  href: string;
}

type Language = 'en' | 'km';

const navItems: NavItem[] = [
  { label: { en: 'About', km: 'អំពីខ្ញុំ' }, href: '#about' },
  { label: { en: 'Experience', km: 'បទពិសោធន៍' }, href: '#experience' },
  { label: { en: 'Skills', km: 'ជំនាញ' }, href: '#skills' },
  { label: { en: 'Projects', km: 'គម្រោង' }, href: '#projects' },
  { label: { en: 'Contact', km: 'ទំនាក់ទំនង' }, href: '#contact' },
];

const experiences = [
  {
    role: 'Selected Digital Startup',
    roleKm: 'ស្តាតអាប់ឌីជីថលដែលត្រូវបានជ្រើសរើស',
    company: 'ACTSmart Incubation Program Cohort 1',
    period: 'July 12 - December 27 2025',
    periodKm: '12 កក្កដា - 27 ធ្នូ 2025',
    description: 'Selected for ACTSmart, a tech-focused incubation program supporting Cambodian startups, SMEs, and university entrepreneurs. Contributed throughout the 5-month program, gaining hands-on experience in technical development, startup operations, and product validation, successfully delivering a real-world, production-ready MVP tested by over 130 registered users.',
    descriptionKm: 'ត្រូវបានជ្រើសរើសចូលរួម ACTSmart ដែលជាកម្មវិធីបណ្តុះអាជីវកម្មផ្តោតលើបច្ចេកវិទ្យា សម្រាប់គាំទ្រស្តាតអាប់ សហគ្រាសធុនតូច និងមធ្យម និងសហគ្រិនសាកលវិទ្យាល័យនៅកម្ពុជា។ បានចូលរួមពេញមួយកម្មវិធីរយៈពេល 5 ខែ ដោយទទួលបានបទពិសោធន៍ជាក់ស្តែងក្នុងការអភិវឌ្ឍបច្ចេកទេស ប្រតិបត្តិការស្តាតអាប់ និងការផ្ទៀងផ្ទាត់ផលិតផល ព្រមទាំងបានបង្កើត MVP ដែលអាចប្រើប្រាស់ជាក់ស្តែង និងត្រូវបានសាកល្បងដោយអ្នកប្រើប្រាស់ចុះឈ្មោះជាង 130 នាក់។',
    highlights: ['Full-Stack Development', 'Startup Innovation', 'Product Validation', 'MVP Development'],
    highlightsKm: ['ការអភិវឌ្ឍ Full-Stack', 'នវានុវត្តន៍ស្តាតអាប់', 'ការផ្ទៀងផ្ទាត់ផលិតផល', 'ការអភិវឌ្ឍ MVP'],
    image: '/actsmart.jpeg',
  },
  {
    role: 'Co-founder',
    roleKm: 'សហស្ថាបនិក',
    company: 'Turing Hackathon Cohort 8',
    period: 'June 06 - June 15 2025',
    periodKm: '06 មិថុនា - 15 មិថុនា 2025',
    description: 'Co-founded Phsar Design, a platform for freelance digital artists to showcase their work, find job opportunities, and for clients to discover and hire creative talent. Contributed to the ideation stage, creating mockups and prototypes to support the team\'s concept development, which earned an Honorable Award for teamwork and project execution.',
    descriptionKm: 'បានចូលរួមសហស្ថាបនា Phsar Design ដែលជាវេទិកាសម្រាប់សិល្បករឌីជីថលឯករាជ្យបង្ហាញស្នាដៃ ស្វែងរកឱកាសការងារ និងសម្រាប់អតិថិជនស្វែងរក និងជួលអ្នកមានទេពកោសល្យច្នៃប្រឌិត។ បានចូលរួមក្នុងដំណាក់កាលបង្កើតគំនិត ដោយរៀបចំ mockup និង prototype ដើម្បីគាំទ្រការអភិវឌ្ឍគំនិតរបស់ក្រុម ដែលទទួលបានពានកិត្តិយសសម្រាប់ការងារជាក្រុម និងការអនុវត្តគម្រោង។',
    highlights: ['Concept Development', 'UI/UX Design', 'Teamwork'],
    highlightsKm: ['ការអភិវឌ្ឍគំនិត', 'ការរចនា UI/UX', 'ការងារជាក្រុម'],
    image: '/turning hackathon.jpeg',
  },
  {
    role: 'Organizer',
    roleKm: 'អ្នករៀបចំកម្មវិធី',
    company: 'CADT\'s Next GEN Engagement Program',
    period: 'May 30 - September 16 2025',
    periodKm: '30 ឧសភា - 16 កញ្ញា 2025',
    description: 'Served as Organizer for the CADT Next-Gen Program, coordinating with team members to align goals, assign tasks, and track progress. Applied leadership, critical thinking, and decision-making skills to support smooth execution and successful delivery of the program.',
    descriptionKm: 'បានបម្រើការជាអ្នករៀបចំកម្មវិធី CADT Next-Gen ដោយសម្របសម្រួលជាមួយសមាជិកក្រុម ដើម្បីកំណត់គោលដៅរួម បែងចែកភារកិច្ច និងតាមដានវឌ្ឍនភាព។ បានអនុវត្តជំនាញភាពជាអ្នកដឹកនាំ ការគិតវិភាគ និងការសម្រេចចិត្ត ដើម្បីគាំទ្រការអនុវត្តកម្មវិធីឱ្យរលូន និងជោគជ័យ។',
    highlights: ['Program Coordination', 'Leadership', 'Team Management'],
    highlightsKm: ['ការសម្របសម្រួលកម្មវិធី', 'ភាពជាអ្នកដឹកនាំ', 'ការគ្រប់គ្រងក្រុម'],
    image: '/CADT\'s Next GEN Engagement Program.jpg',
  },
  {
    role: 'Project Lead',
    roleKm: 'ប្រធានគម្រោង',
    company: 'CADT Freshman Coding Championship 2025',
    period: 'May 11 - July 21 2025',
    periodKm: '11 ឧសភា - 21 កក្កដា 2025',
    description: 'Selected as Project Lead by the CADT Coding Club to design and build a custom leaderboard system for the CFCC competition. Led the development and delivery of a production-ready platform integrating HackerRank challenges to improve scoring transparency and streamline event operations by working closely with organizers.',
    descriptionKm: 'ត្រូវបាន CADT Coding Club ជ្រើសរើសជាប្រធានគម្រោង ដើម្បីរចនា និងបង្កើតប្រព័ន្ធតារាងពិន្ទុផ្ទាល់ខ្លួនសម្រាប់ការប្រកួត CFCC។ បានដឹកនាំការអភិវឌ្ឍ និងដាក់ឱ្យប្រើប្រាស់វេទិកាដែលភ្ជាប់ជាមួយ HackerRank ដើម្បីបង្កើនតម្លាភាពពិន្ទុ និងសម្រួលប្រតិបត្តិការកម្មវិធី តាមរយៈការសហការជិតស្និទ្ធជាមួយអ្នករៀបចំ។',
    highlights: ['Project Leadership', 'Full-Stack Development', 'System Architecture'],
    highlightsKm: ['ការដឹកនាំគម្រោង', 'ការអភិវឌ្ឍ Full-Stack', 'ស្ថាបត្យកម្មប្រព័ន្ធ'],
    image: '/CADT Freshman Coding Championship 2025.jpg',
  },
  {
    role: 'Trainer',
    roleKm: 'គ្រូបណ្តុះបណ្តាល',
    company: 'Youth Education Supports',
    period: 'September 20 2024 - March 29 2025',
    periodKm: '20 កញ្ញា 2024 - 29 មីនា 2025',
    description: 'Training scratch course to college student at PTEC, contributing to their academic growth. Collaborated with fellow volunteers and staff to organize sessions that addressed both academic and soft skill development.',
    descriptionKm: 'បានបណ្តុះបណ្តាលវគ្គ Scratch ដល់និស្សិតនៅ PTEC ដើម្បីរួមចំណែកដល់ការរីកចម្រើនផ្នែកសិក្សារបស់ពួកគេ។ បានសហការជាមួយអ្នកស្ម័គ្រចិត្ត និងបុគ្គលិក ដើម្បីរៀបចំវគ្គសិក្សាដែលគាំទ្រទាំងការអភិវឌ្ឍជំនាញសិក្សា និងជំនាញទន់។',
    highlights: ['Technical Training', 'Education', 'Mentoring'],
    highlightsKm: ['ការបណ្តុះបណ្តាលបច្ចេកទេស', 'ការអប់រំ', 'ការណែនាំ'],
    image: '/Youth Education Supports.jpg',
  },
];

const projects = [
  {
    title: 'LeakScope',
    description: 'LeakScope is an automated black-box security scanner that audits live Supabase applications for vulnerabilities by analyzing publicly exposed assets without requiring credentials. Engineered detection for leaked API keys, exposed database tables, broken Row Level Security policies, IDOR/BOLA vulnerabilities, and sensitive data leaks in endpoints and storage buckets.',
    descriptionKm: 'LeakScope គឺជាឧបករណ៍ស្កេនសុវត្ថិភាព black-box ស្វ័យប្រវត្តិ ដែលត្រួតពិនិត្យកម្មវិធី Supabase កំពុងដំណើរការ ដោយវិភាគធនធានដែលបង្ហាញជាសាធារណៈ ដោយមិនត្រូវការព័ត៌មានចូលប្រើ។ ប្រព័ន្ធអាចរកឃើញ API key ដែលលេចធ្លាយ តារាងទិន្នន័យដែលបើកចំហ គោលការណ៍ Row Level Security ដែលខូច ចំណុចខ្សោយ IDOR/BOLA និងទិន្នន័យរសើបដែលលេចធ្លាយតាម endpoint និង storage bucket។',
    tags: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'PostgreSQL'],
    year: '2026',
    live: 'https://www.leakscope.tech/',
    github: 'https://github.com/PromSereyreaksa/LeakScope',
    highlights: 'One URL. Full audit path.',
    highlightsKm: 'URL តែមួយ។ ផ្លូវត្រួតពិនិត្យពេញលេញ។',
    image: '/leakscope.png',
  },
  {
    title: 'AUREA',
    description: 'An easy, fast, and efficient website builder designed for creatives to build stunning portfolios with a flexible template system. AUREA removes the hassle of website setup, saves time, and lets designers focus on their craft instead of technical complexities.',
    descriptionKm: 'ឧបករណ៍បង្កើតគេហទំព័រដែលងាយស្រួល លឿន និងមានប្រសិទ្ធភាព សម្រាប់អ្នកច្នៃប្រឌិតបង្កើត portfolio ដ៏ស្រស់ស្អាតជាមួយប្រព័ន្ធ template ដែលបត់បែនបាន។ AUREA កាត់បន្ថយភាពស្មុគស្មាញក្នុងការរៀបចំគេហទំព័រ សន្សំពេលវេលា និងអនុញ្ញាតឱ្យអ្នករចនាផ្តោតលើស្នាដៃជំនួសឱ្យបញ្ហាបច្ចេកទេស។',
    tags: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'PostgreSQL'],
    year: '2025',
    live: 'https://www.aurea.tools/',
    github: 'https://github.com/imposter-dot-com/AUREA---Backend',
    highlights: 'Portfolio Builder for Creatives',
    highlightsKm: 'ឧបករណ៍បង្កើត Portfolio សម្រាប់អ្នកច្នៃប្រឌិត',
    image: '/aurea.png',
  },
  {
    title: 'PhsarDesign',
    description: 'Co-founded a creative freelancing platform for freelance digital artists to showcase their work, find job opportunities, and for clients to discover and hire creative talent. A thriving community connecting creators with opportunities.',
    descriptionKm: 'បានចូលរួមសហស្ថាបនាវេទិកាការងារឯករាជ្យសម្រាប់សិល្បករឌីជីថលបង្ហាញស្នាដៃ ស្វែងរកឱកាសការងារ និងសម្រាប់អតិថិជនស្វែងរក និងជួលអ្នកមានទេពកោសល្យច្នៃប្រឌិត។ ជាសហគមន៍ដែលភ្ជាប់អ្នកបង្កើតជាមួយឱកាសការងារ។',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    year: '2025',
    live: 'https://phsardesign.vercel.app/',
    github: 'https://github.com/PromSereyreaksa/PhsarDesign',
    highlights: 'Creative Freelancing Platform',
    highlightsKm: 'វេទិកាការងារឯករាជ្យសម្រាប់អ្នកច្នៃប្រឌិត',
    image: '/phsarDesign.png',
  },
  {
    title: 'Room Rental Management System',
    description: 'A comprehensive full-stack Java desktop application for managing room rentals with separate portals for landlords and tenants. Features role-based access, property management (buildings, floors, rooms), automated billing, and payment tracking built using Java Swing GUI and MySQL backend with OOP principles and MVC architecture.',
    descriptionKm: 'កម្មវិធី desktop Java full-stack សម្រាប់គ្រប់គ្រងការជួលបន្ទប់ ជាមួយផ្ទាំងប្រើប្រាស់ដាច់ដោយឡែកសម្រាប់ម្ចាស់ផ្ទះ និងអ្នកជួល។ មានការគ្រប់គ្រងសិទ្ធិតាមតួនាទី ការគ្រប់គ្រងអចលនទ្រព្យ (អគារ ជាន់ និងបន្ទប់) វិក្កយបត្រស្វ័យប្រវត្តិ និងការតាមដានការទូទាត់ ដោយប្រើ Java Swing GUI និង MySQL backend តាមគោលការណ៍ OOP និងស្ថាបត្យកម្ម MVC។',
    tags: ['Java', 'Swing', 'MySQL', 'OOP', 'MVC', 'DAO'],
    year: '2025',
    live: null,
    github: 'https://github.com/Chea-Ilong/FullStack-Room-Rental-Management-System',
    highlights: 'Full-Stack Java Desktop Application',
    highlightsKm: 'កម្មវិធី Desktop Java Full-Stack',
    image: '/java-room rental.jpeg',
  },
];

const skills = [
  {
    category: 'Programming Languages',
    categoryKm: 'ភាសាសរសេរកម្មវិធី',
    items: [
      { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', url: 'https://www.typescriptlang.org/' },
      { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg', url: 'https://www.w3schools.com/cpp/' },
      { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg', url: 'https://www.java.com/' },
      { name: 'HTML5', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', url: 'https://www.w3schools.com/html/' },
      { name: 'CSS3', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg', url: 'https://www.w3schools.com/css/' },
      { name: 'Dart', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dart/dart-original.svg', url: 'https://dart.dev/' },
    ],
  },
  {
    category: 'Framework',
    categoryKm: 'Framework',
    items: [
      { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg', url: 'https://reactjs.org/' },
      { name: 'Next.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' },
      { name: 'TailwindCSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', url: 'https://tailwindcss.com/' },
      { name: 'Flutter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg', url: 'https://flutter.dev/' },
      { name: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg', url: 'https://expressjs.com/' },

    ],
  },
  {
    category: 'Backend & Databases',
    categoryKm: 'Backend និងមូលដ្ឋានទិន្នន័យ',
    items: [
      { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg', url: 'https://nodejs.org' },
      { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg', url: 'https://www.postgresql.org' },
      { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg', url: 'https://www.mongodb.com/' },
      { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg', url: 'https://www.mysql.com/' },
      { name: 'MariaDB', icon: 'https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg', url: 'https://mariadb.org/' },
      { name: 'Firebase', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg', url: 'https://firebase.google.com/' },
      { name: 'Supabase', icon: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg', url: 'https://supabase.com/' },
    ],
  },
  {
    category: 'DevOps & Tools',
    categoryKm: 'DevOps និងឧបករណ៍',
    items: [
      { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg', url: 'https://www.docker.com/' },
      { name: 'Git', icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg', url: 'https://git-scm.com/' },
      { name: 'Linux', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg', url: 'https://www.linux.org/' },
      { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg', url: 'https://postman.com/' },
      { name: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg', url: 'https://www.figma.com/' },
      { name: 'DigitalOcean', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/digitalocean/digitalocean-original.svg', url: 'https://www.digitalocean.com/' },
    ],
  },
];

const copy = {
  en: {
    role: 'Full-Stack Developer',
    heroLine1: "Hi, I'm",
    heroLine2: 'Chea Ilong',
    heroDescription: 'A dedicated Software Engineer crafting elegant digital solutions. I specialize in full-stack development, startup innovation, and turning ideas into deployable products.',
    viewProjects: 'View Projects',
    contactMe: 'Contact me',
    about: 'About',
    aboutHeading: 'Engineering with product thinking',
    aboutDescription: 'I have hands-on experience in full-stack development, startup execution, and technical leadership. I build systems that are practical to maintain and easy for users to trust.',
    currentlyWorking: 'Currently working on',
    currentWork: 'LeakScope - Supabase security scanner.',
    learning: 'Learning',
    learningValue: 'Software development and AWS cloud fundamentals',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Get in touch',
    contactDescription: "I'm always interested in hearing about new projects and opportunities. Whether you want to discuss a potential collaboration, have a question, or simply want to say hello, feel free to reach out.",
    email: 'Email',
    privacy: 'Privacy',
    terms: 'Terms',
    copyright: '© 2025 Chea Ilong. All rights reserved.',
    languageLabel: 'Change language',
  },
  km: {
    role: 'អ្នកអភិវឌ្ឍន៍ Full-Stack',
    heroLine1: 'សួស្តី ខ្ញុំឈ្មោះ',
    heroLine2: 'ជា អ៊ីឡុង',
    heroDescription: 'ខ្ញុំជាវិស្វករកម្មវិធីដែលផ្តោតលើការបង្កើតដំណោះស្រាយឌីជីថលប្រកបដោយគុណភាព។ ខ្ញុំមានជំនាញក្នុងការអភិវឌ្ឍ full-stack នវានុវត្តន៍ស្តាតអាប់ និងការប្រែក្លាយគំនិតទៅជាផលិតផលដែលអាចដាក់ឱ្យប្រើប្រាស់បាន។',
    viewProjects: 'មើលគម្រោង',
    contactMe: 'ទាក់ទងខ្ញុំ',
    about: 'អំពីខ្ញុំ',
    aboutHeading: 'វិស្វកម្មដែលគិតគូរពីផលិតផល',
    aboutDescription: 'ខ្ញុំមានបទពិសោធន៍ជាក់ស្តែងក្នុងការអភិវឌ្ឍ full-stack ការអនុវត្តស្តាតអាប់ និងភាពជាអ្នកដឹកនាំផ្នែកបច្ចេកទេស។ ខ្ញុំបង្កើតប្រព័ន្ធដែលងាយស្រួលថែទាំ និងអាចឱ្យអ្នកប្រើប្រាស់ទុកចិត្តបាន។',
    currentlyWorking: 'កំពុងធ្វើការ',
    currentWork: 'LeakScope - ឧបករណ៍ស្កេនសុវត្ថិភាព Supabase។',
    learning: 'កំពុងសិក្សា',
    learningValue: 'ការអភិវឌ្ឍកម្មវិធី និងមូលដ្ឋានគ្រឹះ AWS Cloud',
    experience: 'បទពិសោធន៍',
    skills: 'ជំនាញ',
    projects: 'គម្រោង',
    contact: 'ទាក់ទងមកខ្ញុំ',
    contactDescription: 'ខ្ញុំតែងតែចាប់អារម្មណ៍ក្នុងការស្វែងយល់អំពីគម្រោង និងឱកាសថ្មីៗ។ ប្រសិនបើអ្នកចង់ពិភាក្សាអំពីកិច្ចសហការ មានសំណួរ ឬគ្រាន់តែចង់សួរសុខទុក្ខ សូមទាក់ទងមកខ្ញុំដោយសេរី។',
    email: 'អ៊ីមែល',
    privacy: 'ឯកជនភាព',
    terms: 'លក្ខខណ្ឌ',
    copyright: '© 2025 Chea Ilong។ រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    languageLabel: 'ប្តូរភាសា',
  },
} satisfies Record<Language, Record<string, string>>;

export default function Home() {
  const [activeNav, setActiveNav] = useState('about');
  const [language, setLanguage] = useState<Language>('en');
  const text = copy[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveNav(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'km';
  }, [language]);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground antialiased">
      <main>
        {/* Navigation */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
          <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
            <a href="#" className="text-base font-semibold transition-opacity duration-300 hover:opacity-60">
              Chea Ilong
            </a>
            <div className="flex items-center gap-4 lg:gap-7">
              <div className="hidden items-center gap-6 md:flex lg:gap-7">
                {navItems.map((item) => {
                  const isActive = activeNav === item.href.slice(1);
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`py-2 text-base transition-colors duration-300 ${isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                      {item.label[language]}
                    </a>
                  );
                })}
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={language === 'km'}
                aria-label={text.languageLabel}
                onClick={() => setLanguage((current) => current === 'en' ? 'km' : 'en')}
                className="relative grid grid-cols-2 rounded-lg border border-border bg-card p-0.5"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0.5 left-0.5 w-[calc(50%-2px)] rounded-md bg-foreground transition-transform duration-300 ease-out ${language === 'km' ? 'translate-x-full' : 'translate-x-0'}`}
                />
                <span
                  className={`relative z-10 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-300 ${language === 'en' ? 'text-background' : 'text-muted-foreground'}`}
                >
                  English
                </span>
                <span
                  className={`relative z-10 rounded-md px-2.5 py-1.5 text-sm font-semibold transition-colors duration-300 ${language === 'km' ? 'text-background' : 'text-muted-foreground'}`}
                >
                  ខ្មែរ
                </span>
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section with Profile */}
        <section className="px-5 pb-28 pt-36 sm:px-8 sm:pb-32 sm:pt-40 lg:pb-40 lg:pt-44">
          <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16 lg:gap-24">
            <div className="space-y-10">
              <div className="space-y-6">
                <p className="text-xs font-medium uppercase text-muted-foreground">{text.role}</p>
                <h1 className={`${language === 'km' ? 'text-4xl leading-[1.45] sm:text-5xl lg:text-6xl xl:text-7xl' : 'text-5xl leading-[1.04] sm:text-6xl lg:text-7xl xl:text-8xl'} font-normal text-foreground`}>
                  {text.heroLine1} <br /> {text.heroLine2}
                </h1>
              </div>
              <p className="max-w-lg text-base font-normal leading-relaxed text-foreground/65 sm:text-lg">
                {text.heroDescription}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-lg bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-[background-color,transform] duration-300 ease-out hover:-translate-y-px hover:bg-foreground/85"
                >
                  {text.viewProjects}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-normal text-foreground transition-[background-color,border-color,transform] duration-300 ease-out hover:-translate-y-px hover:border-foreground/25 hover:bg-muted/40"
                >
                  {text.contactMe}
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="aspect-[5/6] w-full max-w-80 overflow-hidden rounded-lg border border-border/70 bg-card shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                <Image
                  src="/mypic.png"
                  alt="Chea Ilong"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                  sizes="320px"
                />
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-border/70 bg-muted/20 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div>
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase text-muted-foreground">{text.about}</p>
              <h2 className="max-w-2xl text-4xl font-normal leading-tight sm:text-5xl">{text.aboutHeading}</h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2 pt-12">
              <p className="max-w-xl text-foreground/65">
                {text.aboutDescription}
              </p>
              <div className="space-y-6 rounded-lg border border-border/70 bg-card p-7 shadow-[0_8px_24px_rgba(0,0,0,0.035)] sm:p-8">
                <p className="text-xs font-medium uppercase text-muted-foreground">{text.currentlyWorking}</p>
                <p className="font-semibold text-foreground">{text.currentWork}</p>
                <p className="pt-4 text-xs font-medium uppercase text-muted-foreground">{text.learning}</p>
                <p className="font-semibold text-foreground">{text.learningValue}</p>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="border-t border-border/70 bg-background px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-14">
            <div className="text-center">
              <h2 className="text-4xl font-normal text-foreground sm:text-5xl">{text.experience}</h2>
            </div>
            <div className="max-w-6xl mx-auto relative">
              {/* Timeline Line */}
              <div className="absolute bottom-0 left-2 top-0 w-px bg-border" />

              <div className="space-y-14">
                {experiences.map((exp, index) => (
                  <div key={index} className="group relative pl-10 sm:pl-12">
                    {/* Timeline Node */}
                    <div className="absolute left-0.5 top-1.5 flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-foreground ring-[5px] ring-background transition-transform duration-300 ease-out group-hover:scale-110" />
                    </div>

                    {/* Connecting Line Animation */}
                    <div className="absolute left-4 top-[13px] h-px w-5 bg-border sm:w-7" />

                    <div className="grid md:grid-cols-3 gap-6 items-start">
                      {/* Content */}
                      <div className="md:col-span-2 space-y-3">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                          <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{exp.company}</h3>
                          <span className="whitespace-nowrap text-xs font-medium uppercase text-foreground/45">{language === 'km' ? exp.periodKm : exp.period}</span>
                        </div>
                        <p className="text-base font-semibold text-foreground/85">{language === 'km' ? exp.roleKm : exp.role}</p>
                        <p className="text-base font-normal leading-relaxed text-foreground/60">
                          {language === 'km' ? exp.descriptionKm : exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {(language === 'km' ? exp.highlightsKm : exp.highlights).map((highlight) => (
                            <span key={highlight} className="rounded-md border border-border/60 bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground/60">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Experience Image */}
                      {exp.image && (
                        <div className="relative h-48 w-full overflow-hidden rounded-lg border border-border/60 bg-muted/20 shadow-[0_8px_24px_rgba(0,0,0,0.035)]">
                          <Image
                            src={exp.image}
                            alt={exp.company}
                            fill
                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="border-t border-border/70 bg-muted/20 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-14">
            <div className="text-center">
              <h2 className="text-4xl font-normal text-foreground sm:text-5xl">{text.skills}</h2>
            </div>
            <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:gap-12 lg:gap-16">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">{language === 'km' ? skillGroup.categoryKm : skillGroup.category}</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {skillGroup.items.map((skill) => (
                      <a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/skill flex items-center gap-4 rounded-lg border border-border/60 bg-card/60 p-4 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-px hover:border-border hover:bg-card hover:shadow-sm"
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 shrink-0 object-contain"
                          loading="lazy"
                        />
                        <span className="text-sm font-normal text-foreground/65 transition-colors duration-300 group-hover/skill:text-foreground">
                          {skill.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-t border-border/70 bg-background px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-14">
              <div className="text-center">
                <h2 className="text-4xl font-normal text-foreground sm:text-5xl">{text.projects}</h2>
              </div>
              <div className="space-y-8">
                {projects.map((project, index) => {
                  const image = project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover/image:scale-[1.015]"
                      sizes="(max-width: 768px) 100vw, 400px"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Code2 className="h-12 w-12 text-muted-foreground/30" />
                    </div>
                  );

                  return (
                  <article
                    key={project.title}
                    className="group block rounded-lg border border-border/60 bg-card/50 p-5 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-px hover:border-border hover:bg-card hover:shadow-[0_14px_40px_rgba(0,0,0,0.055)] sm:p-8"
                  >
                    <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={language === 'km' ? `បើកគម្រោង ${project.title}` : `Open the live ${project.title} project`}
                          className={`group/image relative h-56 overflow-hidden rounded-md border border-border/60 bg-muted/20 sm:h-72 lg:h-80 ${index % 2 === 1 ? 'md:order-2' : ''}`}
                        >
                          {image}
                          <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-md border border-white/30 bg-black/65 text-white opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 group-focus-visible/image:opacity-100">
                            <ExternalLink className="h-4 w-4" />
                          </span>
                        </a>
                      ) : (
                        <div className={`relative h-56 overflow-hidden rounded-md border border-border/60 bg-muted/20 sm:h-72 lg:h-80 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                          {image}
                        </div>
                      )}

                      <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <p className="text-xs font-medium uppercase text-foreground/45">{project.year}</p>
                        <h3 className="text-3xl font-semibold text-foreground sm:text-4xl">{project.title}</h3>
                        <p className="text-base leading-relaxed text-foreground/60">{language === 'km' ? project.descriptionKm : project.description}</p>
                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-border/70 bg-transparent px-2.5 py-1 text-xs font-normal text-foreground/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between gap-4 pt-4">
                          <p className="text-sm font-semibold text-foreground/85">{language === 'km' ? project.highlightsKm : project.highlights}</p>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-foreground transition-opacity duration-300 hover:opacity-60"
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-border/70 bg-muted/20 px-5 py-24 sm:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-14">
            <div className="text-center">
              <h2 className="text-4xl font-normal text-foreground sm:text-5xl">{text.contact}</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-12">
              <p className="text-center text-lg font-normal leading-relaxed text-foreground/65">
                {text.contactDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="mailto:cheadara133@gmail.com"
                  className="group flex items-center gap-4 rounded-lg border border-border/70 bg-card/60 p-5 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-px hover:border-border hover:bg-card hover:shadow-sm sm:p-6"
                >
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-foreground/80 group-hover:text-foreground transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-0.5 text-xs font-medium uppercase text-foreground/45">{text.email}</p>
                    <span className="truncate text-sm font-semibold text-foreground">cheadara133@gmail.com</span>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/chea-ilong-88bb83333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-border/70 bg-card/60 p-5 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-px hover:border-border hover:bg-card hover:shadow-sm sm:p-6"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 flex-shrink-0 text-foreground/80 group-hover:text-foreground transition-colors" />
                  <span className="text-sm font-semibold text-foreground">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Chea-Ilong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-border/70 bg-card/60 p-5 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-px hover:border-border hover:bg-card hover:shadow-sm sm:p-6"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 flex-shrink-0 text-foreground/80 group-hover:text-foreground transition-colors" />
                  <span className="text-sm font-semibold text-foreground">GitHub</span>
                </a>
                <a
                  href="https://t.me/Chea_Ilong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg border border-border/70 bg-card/60 p-5 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-px hover:border-border hover:bg-card hover:shadow-sm sm:p-6"
                  aria-label="Telegram"
                >
                  <Send className="w-6 h-6 flex-shrink-0 text-foreground/80 group-hover:text-foreground transition-colors" />
                  <span className="text-sm font-semibold text-foreground">Telegram</span>
                </a>
              </div>
            </div>
          </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border/70 bg-background px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-foreground/70 font-light">{text.copyright}</p>
            <div className="flex gap-8 text-sm text-foreground/70 font-light">
              <a href="#" className="hover:text-foreground transition-colors">{text.privacy}</a>
              <a href="#" className="hover:text-foreground transition-colors">{text.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
