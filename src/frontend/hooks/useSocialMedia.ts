import { useState, useEffect } from 'react';
import { fetchSocialMedia, SocialMedia } from '../services/api';

interface UseSocialMediaReturn {
  socialMedia: SocialMedia;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

const defaultSocialMedia: SocialMedia = {
  github: 'https://github.com',
  twitch: 'https://twitch.com',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
};

export const useSocialMedia = (): UseSocialMediaReturn => {
  const [socialMedia, setSocialMedia] = useState<SocialMedia>(defaultSocialMedia);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchSocialMedia();
      setSocialMedia(data);
    } catch (err) {
      setError('Error al cargar redes sociales');
      console.error('Error fetching social media:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { socialMedia, loading, error, refetch: fetchData };
};
