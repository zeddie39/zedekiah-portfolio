
import { Briefcase, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  description: string[];
  icon: LucideIcon;
  category: 'Experience' | 'Education';
}

export const timelineData: TimelineEvent[] = [
  {
    date: 'Dec 2024 - Present',
    title: 'Co-founder & CTO',
    subtitle: 'Ztech Clinic (Zedekiah Tech Clinic)',
    description: [
      'Full-stack development with Python & Django',
      'AI-powered support system implementation',
      'Microservices architecture design'
    ],
    icon: Briefcase,
    category: 'Experience',
  },
  {
    date: '2023 - Present',
    title: 'Freelance Developer',
    subtitle: 'Self-Employed',
    description: [
      'Web development projects',
      'IoT and robotics solutions',
      'AI/ML implementations'
    ],
    icon: Briefcase,
    category: 'Experience',
  },
  {
    date: '2022 - 2026 (Expected)',
    title: 'BSc. Computer Science',
    subtitle: 'Kisii University',
    description: ['Currently on Industrial Attachment'],
    icon: GraduationCap,
    category: 'Education',
  },
  {
    date: '2022',
    title: 'KCSE Certificate',
    subtitle: 'High School',
    description: ['Grade B-'],
    icon: GraduationCap,
    category: 'Education',
  },
];
