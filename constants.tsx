
import { Project } from './types';

export const THEMATIC_WORK: Project[] = [
  {
    id: 'hci-01',
    theme: 'Cognitive Augmentation',
    title: 'Neural Interfaces for Creative Expression',
    description: 'A longitudinal study exploring how non-invasive brain-computer interfaces can augment digital art workflows for motor-impaired artists. The research focuses on signal-to-intent latency and the psychological impact of direct creative output.',
    year: '2023 — 2024',
    role: 'Lead Researcher',
    format: 'Academic Paper / Prototype'
  },
  {
    id: 'ai-01',
    theme: 'Ethical AI Systems',
    title: 'Sustainable Data Architectures',
    description: 'Investigating low-energy consumption database patterns specifically designed for edge computing environments. This project proposes a new framework for "decentralized intelligence" that prioritizes data sovereignty and ecological footprint over raw processing speed.',
    year: '2022 — 2023',
    role: 'Systems Architect',
    format: 'Technical Report'
  },
  {
    id: 'spatial-01',
    theme: 'Spatial Information Design',
    title: 'Kinetic Typography in VR',
    description: 'Spatial UI research focusing on the legibility and emotional resonance of moving text within three-dimensional environments. Developed a library of motion primitives that adapt to user gaze and environmental lighting conditions.',
    year: '2022',
    role: 'UX Designer & Engineer',
    format: 'Experimental Interface'
  },
  {
    id: 'governance-01',
    theme: 'Digital Governance',
    title: 'Algorithmic Transparency Frameworks',
    description: 'A collaborative effort to define standardized metrics for "explainability" in automated decision-making systems. The goal is to provide non-technical stakeholders with legible insights into complex model behaviors.',
    year: '2021 — 2022',
    role: 'Policy Consultant',
    format: 'White Paper'
  }
];

export const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'work' },
  { label: 'Contact', id: 'contact' }
];
