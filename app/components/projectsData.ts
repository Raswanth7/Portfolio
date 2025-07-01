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
  bgcolor: string;
}

export const projects: Project[] = [
  {
    id: 1,
    no: '01',
    title: 'Bartr.',
    subtitle: 'Do What You Love. Get What You Need',
    description: 'Bartr is an innovative skill exchange platform that enables users to connect and trade services without the need for monetary transactions. The platform leverages an AI-powered matching algorithm to recommend ideal skill exchange partners based on user profiles. It features an intuitive swipe-based interface for accepting or rejecting proposals, making the experience interactive and user-friendly. To promote accountability, Bartr incorporates a staking mechanism where users deposit security tokens, ensuring task completion. A built-in reputation system further rewards reliable users and fosters a trusted community for skill-sharing.',
    logo: '/assets/projects/bartr/Bartr.png',
    images: ['/assets/projects/bartr/bartr-1.png', '/assets/projects/bartr/bartr-2.png', '/assets/projects/bartr/bartr-3.png', '/assets/projects/bartr/bartr-4.png'],
    link: 'https://example.com/bartr',
    technologies: ["Next.js", "Gemini AI", "Supabase", "Stripe"],
    bgcolor:"bg-blue-700"
  },
  {
    id: 2,
    no: '02',
    title: 'StreamBase',
    subtitle: 'Level up your Live Stream',
    description: 'StreamBase is a decentralized live streaming platform that empowers streamers to broadcast their content and receive donations directly in cryptocurrency. The platform integrates an AI assistant called Hash, designed to simplify the donation process for viewers, making contributions fast, secure, and hassle-free. Streamers can track their earnings and seamlessly claim their donations through the built-in payout system. With StreamBase, content creators enjoy complete control over their earnings in a decentralized, blockchain-powered environment.',
    logo: '/assets/projects/streambase/Streambaselogo.png',
    images: ['/assets/projects/streambase/streambase-1.png', '/assets/projects/streambase/streambase-2.png', '/assets/projects/streambase/streambase-3.png', '/assets/projects/streambase/streambase-4.png'],
    link: 'https://example.com/streambase',
    technologies: ["Blockchain", "Smart Contracts", "AI Chatbots", "Next.js"],
    bgcolor:"bg-green-500"
  },
  {
    id: 3,
    no: '03',
    title: 'Texus 25',
    subtitle: 'SRM RMP Technical Fest',
    description: `Texus 25 is the official event booking website for SRM IST Ramapuram's flagship event. The platform allows students to easily register for a variety of events, including technical competitions, non-technical activities, hackathons, and musical nights. The website features dedicated dashboards for both users and administrators. Users can browse upcoming events, register, and manage their bookings, while admins have access to a separate dashboard to efficiently manage event listings, participant details, and overall system control. Texus 25 provides a seamless and organized experience for both event organizers and participants.`,
    logo: '/assets/projects/Texus/Texus25.png',
    images: ['/assets/projects/Texus/Texus-1.png', '/assets/projects/Texus/Texus-2.png', '/assets/projects/Texus/Texus-3.png', '/assets/projects/Texus/Texus-4.png'],
    link: 'https://example.com/texus',
    technologies: ["Next.js", "Tailwind CSS", "Responsive Design"],
    bgcolor:"bg-pink-500"
  },
  {
    id: 4,
    no: '04',
    title: 'Spendid',
    subtitle: 'AI Powered Expense Tracker',
    description: `Spendid is a smart, AI-powered expense tracker designed to make personal finance simple and stress-free. With Spendid, users can effortlessly track their income, monitor expenses, and manage monthly budgets all in one intuitive interface. The app offers real-time balance updates, smart categorization of expenses, and seamless month-to-month navigation, ensuring users always have a clear picture of their financial health. Whether you're managing daily spending or planning ahead, Spendid helps you stay in control of your money with ease and confidence.`,
    logo: '/assets/projects/spendid/spendid.png',
    images: ['/assets/projects/spendid/Spendid1.png', '/assets/projects/spendid/Spendid2.png', '/assets/projects/spendid/Spendid3.png'],
    link: 'https://example.com/rcbot',
    technologies: ["DeepSeek", "React Native","Expo","Supabase","Tailwind CSS"],
    bgcolor:"bg-violet-500"
  }
]; 