import { Github, Instagram, Linkedin } from 'iconoir-react';

import LogoAntd from '../../public/icons/icon-antd.svg';
import LogoCypress from '../../public/icons/icon-cypress.svg';
import LogoExpressjs from '../../public/icons/icon-expressjs.svg';
import LogoFigma from '../../public/icons/icon-figma.svg';
import LogoFirebase from '../../public/icons/icon-firebase.svg';
import LogoJavaScript from '../../public/icons/icon-javascript.svg';
import LogoJest from '../../public/icons/icon-jest.svg';
import LogoMongoDB from '../../public/icons/icon-mongodb.svg';
import LogoMUI from '../../public/icons/icon-mui.svg';
import LogoNextjs from '../../public/icons/icon-nextjs.svg';
import LogoNodejs from '../../public/icons/icon-nodejs.svg';
import LogoReact from '../../public/icons/icon-react.svg';
import LogoRedux from '../../public/icons/icon-redux.svg';
import LogoSass from '../../public/icons/icon-sass.svg';
import LogoStorybook from '../../public/icons/icon-storybook.svg';
import LogoTailwindCss from '../../public/icons/icon-tailwindcss.svg';
import LogoTypeScript from '../../public/icons/icon-typescript.svg';

import LogoBlueYonder from '../../public/icons/blue-yonder-logo.svg';
import LogoDivami from '../../public/icons/divami-logo.svg';

import IllustrationFiskil from '../../public/images/illustration-fiskil.svg';
import IllustrationLantern from '../../public/images/illustration-lantern.svg';

import ReviewBikash from '../../public/images/bikash-tripathy-headshot.jpeg';
import ReviewChaiti from '../../public/images/chaiti-halder-headshot.jpeg';
import ReviewShanklesh from '../../public/images/shanklesh-headshot.jpeg';

import Photo1 from '../../public/images/photo1.jpg';
import Photo2 from '../../public/images/photo2.jpg';
import Photo3 from '../../public/images/photo3.jpg';
import Photo4 from '../../public/images/photo4.jpg';
import Photo5 from '../../public/images/photo5.jpg';
import Photo6 from '../../public/images/photo6.jpg';

import { LinkProps } from '@/components/ui/link';

export const NAV_LINKS: LinkProps[] = [
  { children: 'Journey', href: '#journey' },
  { children: 'Work', href: '#work' },
  { children: 'Testimonials', href: '#testimonials' },
  { children: 'Contact', href: '#contact' }
];

export const SKILLS = [
  { label: 'JavaScript', icon: LogoJavaScript },
  { label: 'TypeScript', icon: LogoTypeScript },
  { label: 'React', icon: LogoReact },
  { label: 'Next.js', icon: LogoNextjs },
  { label: 'Redux', icon: LogoRedux },
  { label: 'Firebase', icon: LogoFirebase },
  { label: 'Node.js', icon: LogoNodejs },
  { label: 'Express.js', icon: LogoExpressjs },
  { label: 'MongoDB', icon: LogoMongoDB },
  { label: 'Tailwind', icon: LogoTailwindCss },
  { label: 'Scss', icon: LogoSass },
  { label: 'MUI', icon: LogoMUI },
  { label: 'Ant', icon: LogoAntd },
  { label: 'Figma', icon: LogoFigma },
  { label: 'Storybook', icon: LogoStorybook },
  { label: 'Cypress', icon: LogoCypress },
  { label: 'Jest', icon: LogoJest }
];

export const PROJECTS = [
  {
    name: 'CBP Semantic Network Architecture',
    description:
      'A SaaS platform designed to optimize supply chain management, enabling businesses to enhance operational efficiency, planning, and decision-making through advanced modeling and data-driven insights.',
    techs: ['TypeScript', 'React', 'Redux', 'Storybook', 'Jest', 'JavaScript'],
    previewImage: IllustrationFiskil,
    color: {
      bgColor: '#DEDFEF',
      borderColor: '#ADAFD0'
    },
    colorClass: {
      bgColor: 'bg-indigo-100',
      borderColor: 'border-indigo-700'
    },
    href: 'https://blueyonder.com/'
  },
  {
    name: 'Notekeeper',
    description:
      'Notekeeper is a responsive and user-friendly note-taking application designed to help users create, organize, and manage their notes efficiently. Provides a seamless experience for taking quick notes, categorizing them, and accessing them anytime.',
    techs: ['TypeScript', 'React', 'Ant', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    previewImage: IllustrationLantern,
    color: {
      bgColor: '#EBE5ED',
      borderColor: '#C6B3CF'
    },
    colorClass: {
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-700'
    },
    href: 'https://notekeeper-a4jn.onrender.com/'
  }
  // {
  //   name: 'Mokoboko',
  //   description:
  //     'Mokoboko makes Pilates and fitness easy by helping you seamlessly book classes, reserve spots, and get reminders before each session.',
  //   techs: ['TypeScript', 'Next.js', 'Tailwind'],
  //   previewImage: IllustrationMokoboko,
  //   color: {
  //     bgColor: '#D1D7CE',
  //     borderColor: '#A8B0A4'
  //   },
  //   colorClass: {
  //     bgColor: 'bg-green-100',
  //     borderColor: 'border-green-700'
  //   },
  //   href: 'https://mokoboko.xyz/'
  // },
  // {
  //   name: 'Scraye',
  //   description:
  //     'Scraye is a housing platform that makes life easier across the UK, seamlessly connecting buyers, renters, owners, and agents. It simplifies selling, renting, and managing properties, all in one place.',
  //   techs: ['TypeScript', 'React', 'Redux', 'Tailwind', 'MUI', 'Storybook', 'Cypress'],
  //   previewImage: IllustrationScraye,
  //   color: {
  //     bgColor: '#E2EAEE',
  //     borderColor: '#B6C1C6'
  //   },
  //   colorClass: {
  //     bgColor: 'bg-sky-100',
  //     borderColor: 'border-sky-700'
  //   },
  //   href: 'https://www.scraye.com/'
  // }
];

export const TESTIMONIALS = [
  {
    name: 'Chaiti Haldar',
    company: 'Staff Software Engineer II, Blue Yonder',
    testimonial: `“I am pleased to write this recommendation for Papu, who has been an integral part of our team since the early days of our project. As one of the first few members to join my team, he has played a crucial role in shaping the team and driving its success.
Papu is extraordinary in his work and dedication. His skills in ReactJS, Redux Toolkit, and JavaScript have been exemplary, allowing him to develop efficient, high-quality solutions that have significantly contributed to the project’s success. His tremendous hard work and technical expertise have been instrumental in overcoming challenges and delivering impactful results.
Beyond his individual contributions, Papu has taken on leadership responsibilities, guiding other developers and providing valuable training to new joiners. He has consistently been involved in peer reviews, fostering a culture of collaboration and continuous improvement within the team. It has been a privilege to work alongside Papu, and I have no doubt that he will continue to excel in any endeavor he takes on. I highly recommend him for any role that values dedication, technical expertise, and leadership.”`,
    avatar: ReviewChaiti,
    linkedinId: 'https://www.linkedin.com/in/chaiti-haldar-14318a27/'
  },
  {
    name: 'Shanklesh Vishwakarma',
    company: 'Sr Software Engineer, Divami',
    testimonial: `“I had the pleasure of working with Papu on supply chain management. I can confidently say he is one of the most talented software engineer. He is expert in Reactjs, Redux, JavaScript. Also he has a fantastic problem solving skill which make him an individual asset to any team. What sets Papu apart is his ability to break down complex problm and find efficient solution. If you are looking for a skilled and dedicated software engineer, I highly recommend Papu.”`,
    avatar: ReviewShanklesh,
    linkedinId: 'https://www.linkedin.com/in/shanklesh-vishwakarma-5751787b/'
  },
  {
    name: 'Bikash Tripathy',
    company: 'Software Engineer, Divami',
    testimonial: `“I've had the pleasure of working with Papu Sethi, an excellent Front-End Developer. His technical skills, problem-solving abilities, and collaborative mindset have been a great support to me. Papu is a dedicated team player who consistently delivers high-quality work. I highly recommend him.”`,
    avatar: ReviewBikash,
    linkedinId: 'https://www.linkedin.com/in/bikash-tripathy-ba5b341b0/'
  }
];

export const COMPANIESANDCLIENTS = [
  { name: 'Divami', logo: LogoDivami, href: 'https://divami.com/' },
  { name: 'Blue Yonder', logo: LogoBlueYonder, href: 'https://blueyonder.com/' }
];

export const FOOTERLINKS = [
  { label: 'GITHUB', href: '' },
  { label: 'FIGMA', href: '' },
  { label: 'TWITTER', href: '' },
  { label: 'CV', href: '' }
];

export const BIT_OF_ME = [
  {
    emoji: '🎨',
    text: 'I’m into design, coding, and life’s greatest mystery—why food magically tastes better after midnight.🍕'
  },
  {
    emoji: '💎',
    text: 'I have a soft spot for antique items and friends as rare as diamonds—what can I say? I appreciate timeless gems… just like myself! 😜✨'
  },
  {
    emoji: '🌌',
    text: 'Late-night walks under the stars bring me peace, a sense of wonder, and the occasional “What am I doing with my life?” moment. 😅'
  },
  {
    emoji: '😂',
    text: 'I try to stay serious in deep conversations, but if something funny pops into my head… well, good luck getting me to stop laughing. 🙈'
  },
  {
    emoji: '📸',
    text: 'I try to capture everything—breathtaking views, candid moments, and, of course, my award-worthy selfies. 📸✨'
  }
];

export const PHOTOS = [
  { photo: Photo1, alt: 'Leh Main Street Way' },
  { photo: Photo2, alt: 'Snowy Path to Monestry' },
  { photo: Photo3, alt: 'Zyara in Sand Dunes' },
  { photo: Photo4, alt: 'Cute Puppy' },
  { photo: Photo5, alt: 'Leh Palace' },
  { photo: Photo6, alt: 'Magnetic Hill' }
];

export const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/papusethi'
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/papusethi'
  },
  {
    label: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/_papusethi_'
  }
];
