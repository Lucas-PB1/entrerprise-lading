import axios from 'axios';

// Interfaces e tipos
interface NavLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: string;
  href: string;
}

interface Section {
  title: string;
  description: string;
  mediaUrl: string;
  isVideo: boolean;
  imagePosition: 'left' | 'right';
  hasButton: boolean;
  bgColor: string;
}

interface HeaderData {
  logo: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
}

interface LandingData {
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  bgColor: string;
  sections: Section[];
}

interface BlogPost {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}

interface PostApiResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// Funções de busca de dados
const fetchJsonData = async <T>(filePath: string): Promise<T> => {
  const response = await axios.get<T>(filePath);
  return response.data;
};

/**
 * Busca e retorna os dados para o cabeçalho, incluindo logotipo, links de navegação e links sociais.
 * @returns {Promise<HeaderData>} - Dados do cabeçalho
 */
export const fetchHeaderData = async (): Promise<HeaderData> => {
  return fetchJsonData<HeaderData>('/data/headerData.json');
};

/**
 * Busca e retorna os dados dos posts do blog.
 * @returns {Promise<BlogPost[]>} - Array com os dados dos posts do blog
 */
export const fetchPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get<PostApiResponse[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );

  const posts = response.data.slice(0, 6).map((post) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    imageUrl: '../images/blog/blog-1.jpg',
  }));

  return posts;
};

/**
 * Busca e retorna os dados principais da landing page, incluindo título, descrição, imagem principal e seções.
 * @returns {Promise<LandingData>} - Dados da landing page
 */
export const fetchLandingData = async (): Promise<LandingData> => {
  return fetchJsonData<LandingData>('/data/landingData.json');
};

/**
 * Salva log de contato em um arquivo de texto.
 * @param {string} data - Dados a serem salvos no log
 */
export const saveLogToFile = (data: string): void => {
  const blob = new Blob([data], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'contact_log.txt';
  link.click();
};
