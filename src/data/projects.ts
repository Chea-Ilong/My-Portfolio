import motifyImage from '../assets/images/projects/motify.png';
import leakscopeImage from '../assets/images/projects/leakscope.png';
import aureaFeeEstimatorImage from '../assets/images/projects/aurea-fee-estimator.png';
import aureaImage from '../assets/images/projects/aurea.png';
import phsarDesignImage from '../assets/images/projects/phsar-design.png';
import cardifyImage from '../assets/images/projects/cardify.png';
import cfccImage from '../assets/images/projects/CFCC.png';
import rbacSystemImage from '../assets/images/projects/rbac-system.png';
import roomRentalImage from '../assets/images/projects/room-rental.jpeg';

export const projects = [
  {
    title: 'Motify',
    description: 'Motify is an AI video generator for SaaS marketing that turns a single prompt into editable explainer videos, launch videos, product demos, and promotional motion graphics. Built on a code-first motion graphics engine with a timeline editor, so every generated scene stays fully editable before it is exported to video.',
    descriptionKm: 'Motify គឺជាឧបករណ៍បង្កើតវីដេអូដោយ AI សម្រាប់ទីផ្សារ SaaS ដែលបំប្លែង prompt តែមួយទៅជាវីដេអូពន្យល់ វីដេអូបើកដំណើរការផលិតផល ការបង្ហាញផលិតផល និង motion graphics ផ្សព្វផ្សាយ ដែលអាចកែសម្រួលបាន។ បង្កើតឡើងលើម៉ាស៊ីន motion graphics ផ្អែកលើកូដ ជាមួយកម្មវិធីកែសម្រួល timeline ដូច្នេះរាល់ឈុតដែលបានបង្កើតអាចកែសម្រួលបានពេញលេញ មុនពេលនាំចេញជាវីដេអូ។',
    tags: ['Svelte', 'TypeScript', 'GSAP', 'Vite', 'AI'],
    year: '2026',
    live: 'https://motify.video/',
    github: 'https://github.com/COPPSARY/Motify',
    highlights: 'Prompt to SaaS video. Fully editable.',
    highlightsKm: 'ពី prompt ទៅវីដេអូ SaaS។ កែសម្រួលបានពេញលេញ។',
    image: motifyImage,
  },
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
    image: leakscopeImage,
  },
  {
    title: 'AUREA Fee Estimator',
    description: 'A capstone project: a smart pricing calculator that helps freelance designers set fair hourly and project rates from their real business costs, including salary goals, equipment, software, rent, profit margin, and billable hours. Integrates Google Gemini to analyze uploaded PDF project briefs, extracting scope, duration, and deliverables, then generates client-ready invoices and a public portfolio page with rates.',
    descriptionKm: 'គម្រោងបញ្ចប់ការសិក្សា (Capstone)៖ ឧបករណ៍គណនាតម្លៃឆ្លាតវៃ ដែលជួយអ្នករចនាឯករាជ្យកំណត់តម្លៃសមរម្យតាមម៉ោង និងតាមគម្រោង ផ្អែកលើថ្លៃដើមអាជីវកម្មពិតប្រាកដ រួមមានប្រាក់ខែគោលដៅ ឧបករណ៍ កម្មវិធី ថ្លៃជួល ប្រាក់ចំណេញ និងម៉ោងធ្វើការដែលអាចគិតថ្លៃបាន។ ភ្ជាប់ជាមួយ Google Gemini ដើម្បីវិភាគឯកសារ PDF ពិពណ៌នាគម្រោង ដោយទាញយកវិសាលភាព រយៈពេល និងលទ្ធផលដែលត្រូវប្រគល់ បន្ទាប់មកបង្កើតវិក្កយបត្រសម្រាប់អតិថិជន និងទំព័រ portfolio សាធារណៈដែលបង្ហាញតម្លៃ។',
    tags: ['React', 'TypeScript', 'Vite', 'Express', 'Supabase', 'Gemini AI'],
    year: '2026',
    live: null,
    github: 'https://github.com/PromSereyreaksa/AUREA-Capstone',
    highlights: 'Fair Pricing for Freelance Designers',
    highlightsKm: 'តម្លៃសមរម្យសម្រាប់អ្នករចនាឯករាជ្យ',
    image: aureaFeeEstimatorImage,
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
    image: aureaImage,
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
    image: phsarDesignImage,
  },
  {
    title: 'Cardify',
    description: 'An offline flashcard app built with Flutter that helps students memorize through adaptive repetition. Each card carries a 0–10 difficulty score that rises when you answer "Don\'t Know" and falls when you answer "Know", so harder cards come back more often. Includes decks by category, a practice mode and a custom special mode, session results, and a statistics dashboard, all stored locally in SQLite.',
    descriptionKm: 'កម្មវិធី flashcard ដែលដំណើរការដោយគ្មានអ៊ីនធឺណិត បង្កើតដោយ Flutter ជួយសិស្សចងចាំតាមរយៈការរំលឹកឡើងវិញដែលសម្របតាមសមត្ថភាព។ កាតនីមួយៗមានពិន្ទុកម្រិតលំបាកពី 0 ដល់ 10 ដែលកើនឡើងនៅពេលអ្នកឆ្លើយ "មិនដឹង" និងថយចុះនៅពេលអ្នកឆ្លើយ "ដឹង" ដូច្នេះកាតពិបាកៗនឹងត្រលប់មកញឹកញាប់ជាង។ មានកញ្ចប់កាតតាមប្រភេទ របៀបហ្វឹកហាត់ និងរបៀបពិសេសតាមចិត្ត លទ្ធផលនៃវគ្គនីមួយៗ និងផ្ទាំងស្ថិតិ ដែលទាំងអស់រក្សាទុកក្នុង SQLite លើឧបករណ៍។',
    tags: ['Flutter', 'Dart', 'SQLite', 'Mobile'],
    year: '2025',
    live: null,
    github: 'https://github.com/nithkidd/Cardify-APP',
    highlights: 'Offline Flashcards with Adaptive Repetition',
    highlightsKm: 'Flashcard គ្មានអ៊ីនធឺណិត ជាមួយការរំលឹកតាមសមត្ថភាព',
    image: cardifyImage,
  },
  {
    title: 'CFCC Leaderboard',
    description: 'A real-time leaderboard for the CADT Freshman Coding Competition (CFCC), with overall, per-round, team, and group rankings. Pulls submissions from the HackerRank API with rate-limited polling, syncs results through Firebase Firestore, and supports live search by name or HackerRank ID, group filtering, and a fullscreen mode for display on stage.',
    descriptionKm: 'តារាងចំណាត់ថ្នាក់ពេលវេលាជាក់ស្តែងសម្រាប់ការប្រកួតសរសេរកូដសម្រាប់និស្សិតឆ្នាំទីមួយរបស់ CADT (CFCC) ដែលមានចំណាត់ថ្នាក់រួម តាមជុំនីមួយៗ តាមក្រុម និងតាមក្រុមសិក្សា។ ទាញយកលទ្ធផលពី HackerRank API ដោយកំណត់អត្រាស្នើសុំ ធ្វើសមកាលកម្មលទ្ធផលតាម Firebase Firestore និងគាំទ្រការស្វែងរកភ្លាមៗតាមឈ្មោះ ឬ HackerRank ID ការត្រងតាមក្រុម និងរបៀបពេញអេក្រង់សម្រាប់បង្ហាញលើឆាក។',
    tags: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Firebase'],
    year: '2025',
    live: 'https://cfcc-leaderboard.vercel.app',
    github: 'https://github.com/Chea-Ilong/CFCC-Leaderboard',
    highlights: 'Live Coding Competition Leaderboard',
    highlightsKm: 'តារាងចំណាត់ថ្នាក់ការប្រកួតសរសេរកូដផ្ទាល់',
    image: cfccImage,
  },
  {
    title: 'RBAC System',
    description: 'A role-based access control system for MySQL and MariaDB, with an admin dashboard for managing database users, roles, and privileges. Supports global, database, and table-scoped privileges, direct grants that override roles, and live synchronization that runs the matching GRANT and REVOKE statements on the server. Includes integrated mysqldump backup and recovery.',
    descriptionKm: 'ប្រព័ន្ធគ្រប់គ្រងសិទ្ធិចូលប្រើតាមតួនាទី (RBAC) សម្រាប់ MySQL និង MariaDB ជាមួយផ្ទាំងគ្រប់គ្រងសម្រាប់អ្នកប្រើប្រាស់មូលដ្ឋានទិន្នន័យ តួនាទី និងសិទ្ធិ។ គាំទ្រសិទ្ធិកម្រិតប្រព័ន្ធ កម្រិតមូលដ្ឋានទិន្នន័យ និងកម្រិតតារាង ការផ្តល់សិទ្ធិផ្ទាល់ដែលលើសពីតួនាទី និងការធ្វើសមកាលកម្មផ្ទាល់ដែលដំណើរការពាក្យបញ្ជា GRANT និង REVOKE នៅលើម៉ាស៊ីនមេ។ មានមុខងារបម្រុងទុក និងស្តារទិន្នន័យដោយប្រើ mysqldump។',
    tags: ['Next.js', 'TypeScript', 'MySQL', 'MariaDB', 'TailwindCSS'],
    year: '2025',
    live: null,
    github: 'https://github.com/Chea-Ilong/rbac-system',
    highlights: 'Database Access Control Dashboard',
    highlightsKm: 'ផ្ទាំងគ្រប់គ្រងសិទ្ធិចូលប្រើមូលដ្ឋានទិន្នន័យ',
    image: rbacSystemImage,
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
    image: roomRentalImage,
  },
];

// The home page shows this many; the rest live only on /projects/.
export const homeProjectCount = 5;

export type Project = (typeof projects)[number];

/** Anchor id for a project's card, e.g. 'CFCC Leaderboard' → 'cfcc-leaderboard'. */
export const projectId = (project: Project) =>
  project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
