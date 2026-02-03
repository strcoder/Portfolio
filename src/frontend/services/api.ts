import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface SocialMedia {
  github: string;
  twitch: string;
  twitter: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}

export interface Project {
  _id: string;
  name: string;
  url: string;
  startDate: string;
  logoUrl: string;
  tags: string[];
  github: string;
  description: string;
  bgColor?: string;
  headerImage?: string;
}

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await apiClient.get('/api/project');
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};

export const fetchSocialMedia = async (id: string = '602af04697a43ef69c8e0488'): Promise<SocialMedia> => {
  const defaultSocial: SocialMedia = {
    github: 'https://github.com',
    twitch: 'https://twitch.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  };

  try {
    const response = await apiClient.get(`/api/social-media/${id}`);
    return response.data.data || defaultSocial;
  } catch (error) {
    console.error('Error fetching social media:', error);
    return defaultSocial;
  }
};

export const sendMessage = async (message: {
  username: string;
  userMail: string;
  message: string;
}): Promise<boolean> => {
  try {
    await apiClient.post('/api/message', message);
    return true;
  } catch (error) {
    console.error('Error sending message:', error);
    return false;
  }
};

export const sendEmail = async (email: string): Promise<boolean> => {
  try {
    await apiClient.post('/api/mail', { email });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
