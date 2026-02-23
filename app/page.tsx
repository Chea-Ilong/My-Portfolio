'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, ChevronRight, Code2, Database, Cloud, FileCode, Layers, Cpu, Box, GitBranch, Terminal, Braces, Globe, Layout, Palette, Server, Lock, Zap, TestTube, Send } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const experiences = [
  {
    role: 'Selected Digital Startup',
    company: 'ACTSmart Incubation Program Cohort 1',
    period: 'July 12 - December 27 2025',
    description: 'Selected for ACTSmart, a tech-focused incubation program supporting Cambodian startups, SMEs, and university entrepreneurs. Contributed throughout the 5-month program, gaining hands-on experience in technical development, startup operations, and product validation, successfully delivering a real-world, production-ready MVP tested by over 130 registered users.',
    highlights: ['Full-Stack Development', 'Startup Innovation', 'Product Validation', 'MVP Development'],
    image: '/actsmart.jpeg',
  },
  {
    role: 'Co-founder',
    company: 'Turing Hackathon Cohort 8',
    period: 'June 06 - June 15 2025',
    description: 'Co-founded Phsar Design, a platform for freelance digital artists to showcase their work, find job opportunities, and for clients to discover and hire creative talent. Contributed to the ideation stage, creating mockups and prototypes to support the team\'s concept development, which earned an Honorable Award for teamwork and project execution.',
    highlights: ['Concept Development', 'UI/UX Design', 'Teamwork'],
    image: '/turning hackathon.jpeg',
  },
  {
    role: 'Organizer',
    company: 'CADT\'s Next GEN Engagement Program',
    period: 'May 30 - September 16 2025',
    description: 'Served as Organizer for the CADT Next-Gen Program, coordinating with team members to align goals, assign tasks, and track progress. Applied leadership, critical thinking, and decision-making skills to support smooth execution and successful delivery of the program.',
    highlights: ['Program Coordination', 'Leadership', 'Team Management'],
    image: '/CADT\'s Next GEN Engagement Program.jpg',
  },
  {
    role: 'Project Lead',
    company: 'CADT Freshman Coding Championship 2025',
    period: 'May 11 - July 21 2025',
    description: 'Selected as Project Lead by the CADT Coding Club to design and build a custom leaderboard system for the CFCC competition. Led the development and delivery of a production-ready platform integrating HackerRank challenges to improve scoring transparency and streamline event operations by working closely with organizers.',
    highlights: ['Project Leadership', 'Full-Stack Development', 'System Architecture'],
    image: '/CADT Freshman Coding Championship 2025.jpg',
  },
  {
    role: 'Trainer',
    company: 'Youth Education Supports',
    period: 'September 20 2024 - March 29 2025',
    description: 'Training scratch course to college student at PTEC, contributing to their academic growth. Collaborated with fellow volunteers and staff to organize sessions that addressed both academic and soft skill development.',
    highlights: ['Technical Training', 'Education', 'Mentoring'],
    image: '/Youth Education Supports.jpg',
  },
];

const projects = [
  {
    title: 'AUREA',
    description: 'An easy, fast, and efficient website builder designed for creatives to build stunning portfolios with a flexible template system. AUREA removes the hassle of website setup, saves time, and lets designers focus on their craft instead of technical complexities.',
    tags: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'PostgreSQL'],
    year: '2024',
    link: 'https://www.aurea.tools/',
    highlights: 'Portfolio Builder for Creatives',
    image: '/aurea.png',
  },
  {
    title: 'PhsarDesign',
    description: 'Co-founded a creative freelancing platform for freelance digital artists to showcase their work, find job opportunities, and for clients to discover and hire creative talent. A thriving community connecting creators with opportunities.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    year: '2023',
    link: 'https://phsardesign.vercel.app/',
    highlights: 'Creative Freelancing Platform',
    image: '/phsarDesign.png',
  },
  {
    title: 'Room Rental Management System',
    description: 'A comprehensive full-stack Java desktop application for managing room rentals with separate portals for landlords and tenants. Features role-based access, property management (buildings, floors, rooms), automated billing, and payment tracking built using Java Swing GUI and MySQL backend with OOP principles and MVC architecture.',
    tags: ['Java', 'Swing', 'MySQL', 'OOP', 'MVC', 'DAO'],
    year: '2025',
    link: 'https://github.com/Chea-Ilong/FullStack-Room-Rental-Management-System',
    highlights: 'Full-Stack Java Desktop Application',
    image: '/java-room rental.jpeg',
  },
];

const skills = [
  {
    category: 'Programming Languages',
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

export default function Home() {
  const [activeNav, setActiveNav] = useState('about');

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

  return (
    <div className="bg-background text-foreground antialiased">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/40">
        <nav className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
          <a href="#" className="text-base font-light tracking-tight hover:opacity-60 transition-opacity">
            Chea Ilong
          </a>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => {
              const isActive = activeNav === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-light transition-opacity duration-200 ${
                    isActive
                      ? 'text-foreground opacity-100'
                      : 'text-muted-foreground opacity-60 hover:opacity-100'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Hero Section with Profile */}
      <section className="pt-48 pb-48 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <p className="text-sm uppercase tracking-widest font-medium">Full-Stack Developer</p>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.05] text-foreground">
                Hi, I'm <br /> Chea  Ilong 
              </h1>
            </div>
            <p className="text-lg text-muted-foreground/80 font-light leading-relaxed max-w-lg">
              A dedicated Software Engineer crafting elegant digital solutions. I specialize in full-stack development, startup innovation, and turning ideas into deployable products.
            </p>
            <div className="flex gap-4 pt-6">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/85 transition-all rounded-full text-base font-medium"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-border/50 text-foreground hover:border-foreground/50 hover:bg-muted/30 transition-all rounded-full text-base font-light"
              >
                Contact me
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-80 h-96 bg-gradient-to-br from-muted/40 to-muted/20 rounded-3xl overflow-hidden border border-border/30">
              <img 
                src="/mypic.png" 
                alt="Chea Ilong" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-48 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">About me</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8 text-base leading-relaxed">
            <p className="text-foreground/85 font-light text-lg">
              I'm a dedicated Software Engineer with strong experience in <span className="text-foreground font-medium">full-stack development</span>, <span className="text-foreground font-medium">startup innovation</span>, and technical project execution. I have hands-on experience building production-ready systems and contributing to real-world products.
            </p>
            <p className="text-foreground/85 font-light text-lg">
              I'm skilled in <span className="text-foreground font-medium">project coordination</span>, <span className="text-foreground font-medium">program execution</span>, and <span className="text-foreground font-medium">peer education</span>, with a strong ability to turn ideas into deployable solutions. Through initiatives like AUREA, I've demonstrated my commitment to teamwork, problem-solving, and creating impactful digital products.
            </p>
            <div className="space-y-4 pt-4 border-t border-border/20">
              <div>
                <p className="text-sm text-muted-foreground/60 font-medium uppercase tracking-wider mb-2">Currently working on</p>
                <p className="text-foreground/85 font-medium">AUREA — Fee Estimator for Freelance Designers</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground/60 font-medium uppercase tracking-wider mb-2">Learning</p>
                <p className="text-foreground/85 font-medium">Software Development, Cloud Computing (AWS)</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground/60 font-medium uppercase tracking-wider mb-2">Open to</p>
                <p className="text-foreground/85 font-medium">Software development collaborations, innovative tech solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-48 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">Experience</h2>
          </div>
          <div className="max-w-6xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-1.75 top-0 bottom-0 w-0.5 bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground/20" />
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative pl-12">
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-1.5 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-foreground ring-4 ring-background shadow-lg shadow-foreground/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-foreground/30 transition-all duration-300" />
                  </div>
                  
                  {/* Connecting Line Animation */}
                  <div className="absolute left-5 top-2.5 w-8 h-0.5 bg-gradient-to-r from-foreground/40 to-transparent group-hover:from-foreground/60 transition-colors" />
                  
                  <div className="grid md:grid-cols-3 gap-6 items-start">
                    {/* Content */}
                    <div className="md:col-span-2 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                        <h3 className="text-2xl font-medium tracking-tight text-foreground">{exp.company}</h3>
                        <span className="text-sm text-muted-foreground font-medium tracking-wide uppercase whitespace-nowrap">{exp.period}</span>
                      </div>
                      <p className="text-base text-foreground/75 font-medium">{exp.role}</p>
                      <p className="text-base text-muted-foreground/80 leading-relaxed font-light">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.highlights.map((highlight) => (
                          <span key={highlight} className="text-xs text-foreground/80 font-medium px-3 py-1.5 bg-muted/50 border border-border/30 rounded-full">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Experience Image */}
                    {exp.image && (
                      <div className="w-full h-48 bg-muted/20 rounded-2xl overflow-hidden border border-border/20">
                        <img 
                          src={exp.image} 
                          alt={exp.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-48 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">Skills</h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-8">
                <h3 className="text-xl font-medium tracking-tight text-foreground">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 gap-6">
                  {skillGroup.items.map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-6 p-7 rounded-2xl hover:bg-muted/40 border border-transparent hover:border-border/40 transition-all group/skill"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-8 h-8 text-foreground/60 group-hover/skill:text-foreground transition-colors shrink-0 object-contain"
                      />
                      <span className="text-xl font-light text-muted-foreground/90 group-hover/skill:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-48 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">Projects</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border/20 rounded-3xl hover:border-foreground/20 hover:shadow-2xl hover:shadow-foreground/5 transition-all overflow-hidden"
              >
                {/* Project Image */}
                <div className="w-full h-72 bg-muted/20 flex items-center justify-center border-b border-border/10 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center space-y-3">
                      <div className="w-20 h-20 mx-auto bg-muted/40 rounded-2xl flex items-center justify-center">
                        <Code2 className="w-10 h-10 text-muted-foreground/50" />
                      </div>
                      <p className="text-sm text-muted-foreground/50 font-light">Project Preview</p>
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div className="p-10">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-3xl font-medium tracking-tight text-foreground group-hover:text-foreground transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-6 h-6 text-muted-foreground/40 group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground/80 mb-8 leading-relaxed font-light text-lg max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 text-sm font-light text-muted-foreground/70 bg-muted/30 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-base text-foreground/85 font-medium whitespace-nowrap">{project.highlights}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-48 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">Get in touch</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-12">
            <p className="text-lg text-foreground/85 leading-relaxed font-light text-center">
              I'm always interested in hearing about new projects and opportunities. Whether you want to discuss a potential collaboration, have a question, or simply want to say hello, feel free to reach out.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a
                href="mailto:cheadara133@gmail.com"
                className="flex items-center gap-4 p-6 border border-border/30 rounded-3xl hover:border-foreground/30 hover:bg-muted/20 hover:shadow-lg hover:shadow-foreground/5 transition-all group"
              >
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-foreground/70 group-hover:text-foreground transition-colors" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider mb-0.5">Email</p>
                  <span className="text-foreground font-light text-sm truncate">cheadara133@gmail.com</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/chea-ilong-88bb83333/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-border/30 rounded-3xl hover:border-foreground/30 hover:bg-muted/20 hover:shadow-lg hover:shadow-foreground/5 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 flex-shrink-0 text-foreground/70 group-hover:text-foreground transition-colors" />
                <span className="text-sm font-light text-foreground/85">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Chea-Ilong"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-border/30 rounded-3xl hover:border-foreground/30 hover:bg-muted/20 hover:shadow-lg hover:shadow-foreground/5 transition-all group"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 flex-shrink-0 text-foreground/70 group-hover:text-foreground transition-colors" />
                <span className="text-sm font-light text-foreground/85">GitHub</span>
              </a>
              <a
                href="https://t.me/Chea_Ilong"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 border border-border/30 rounded-3xl hover:border-foreground/30 hover:bg-muted/20 hover:shadow-lg hover:shadow-foreground/5 transition-all group"
                aria-label="Telegram"
              >
                <Send className="w-6 h-6 flex-shrink-0 text-foreground/70 group-hover:text-foreground transition-colors" />
                <span className="text-sm font-light text-foreground/85">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-16 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground/60 font-light">© 2025 Chea Ilong. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-muted-foreground/60 font-light">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
