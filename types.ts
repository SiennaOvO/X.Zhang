
export interface Project {
  id: string;
  title: string;
  theme: string;
  description: string;
  year: string;
  role: string;
  format: string;
}

export type ViewState = 'home' | 'work' | 'contact';
