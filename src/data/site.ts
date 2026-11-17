export type Language = 'en' | 'km';

export interface NavItem {
  label: Record<Language, string>;
  /** Section id on the home page. */
  section: string;
}

export const navItems: NavItem[] = [
  { label: { en: 'About', km: 'អំពីខ្ញុំ' }, section: 'about' },
  { label: { en: 'Experience', km: 'បទពិសោធន៍' }, section: 'experience' },
  { label: { en: 'Projects', km: 'គម្រោង' }, section: 'projects' },
  { label: { en: 'Skills', km: 'ជំនាញ' }, section: 'skills' },
  { label: { en: 'Contact', km: 'ទំនាក់ទំនង' }, section: 'contact' },
];

// UI strings shared by every page: the header, the footer, and the projects list.
export const siteCopy = {
  en: {
    role: 'Full-Stack Developer',
    languageLabel: 'Change language',
    privacy: 'Privacy',
    terms: 'Terms',
    copyright: '© 2025 Chea Ilong. All rights reserved.',
    seeMore: 'See more',
    allProjects: 'All Projects',
    allProjectsDescription: 'Everything I have built, from production products to coursework and competition tools.',
    backHome: 'Back to home',
  },
  km: {
    role: 'អ្នកអភិវឌ្ឍន៍ Full-Stack',
    languageLabel: 'ប្តូរភាសា',
    privacy: 'ឯកជនភាព',
    terms: 'លក្ខខណ្ឌ',
    copyright: '© 2025 Chea Ilong។ រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    seeMore: 'មើលបន្ថែម',
    allProjects: 'គម្រោងទាំងអស់',
    allProjectsDescription: 'រាល់អ្វីដែលខ្ញុំបានបង្កើត ចាប់ពីផលិតផលដែលកំពុងដំណើរការ រហូតដល់កិច្ចការសិក្សា និងឧបករណ៍សម្រាប់ការប្រកួត។',
    backHome: 'ត្រឡប់ទៅទំព័រដើម',
  },
} satisfies Record<Language, Record<string, string>>;
