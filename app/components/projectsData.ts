export interface Project {
  id: number;
  no: string;
  title: string;
  subtitle: string;
  description: string;
  logo: string;
  images: string[];
  link: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    no: '01',
    title: 'Bartr.',
    subtitle: 'Do What You Love. Get What You Need',
    description: 'In todays gig economy...',
    logo: '/assets/projects/bartr/Bartr.png',
    images: ['/assets/projects/bartr/bartr-1.png', '/assets/projects/bartr/bartr-2.png', '/assets/projects/bartr/bartr-3.png', '/assets/projects/bartr/bartr-4.png'],
    link: 'https://example.com/bartr',
    technologies: ["Next.js", "Gemini AI", "Supabase", "Stripe"]
  },
  {
    id: 2,
    no: '02',
    title: 'StreamBase',
    subtitle: 'Level up your Live Stream',
    description: 'StreamBase is a decentralized...',
    logo: '/assets/projects/streambase/Streambaselogo.png',
    images: ['/assets/projects/streambase/streambase-1.png', '/assets/projects/streambase/streambase-2.png', '/assets/projects/streambase/streambase-3.png', '/assets/projects/streambase/streambase-4.png'],
    link: 'https://example.com/streambase',
    technologies: ["Blockchain", "Smart Contracts", "AI Chatbots", "Next.js"]
  },
  {
    id: 3,
    no: '03',
    title: 'Texus 25',
    subtitle: 'SRM RMP Technical Fest',
    description: 'Texus is the official website...',
    logo: '/assets/projects/Texus/Texus25.png',
    images: ['/assets/projects/Texus/Texus-1.png', '/assets/projects/Texus/Texus-2.png', '/assets/projects/Texus/Texus-3.png', '/assets/projects/Texus/Texus-4.png'],
    link: 'https://example.com/texus',
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"]
  },
  {
    id: 4,
    no: '04',
    title: 'RC BOT',
    subtitle: 'Personalised Health Bot',
    description: 'This project develops an AI platform...',
    logo: '/assets/projects/rcbot/rcbott.png',
    images: ['/assets/projects/rcbot/rcbot-1.png', '/assets/projects/rcbot/rcbot-2.png'],
    link: 'https://example.com/rcbot',
    technologies: ["Gemini AI", "Next.js", "Tailwind CSS"]
  }
]; 