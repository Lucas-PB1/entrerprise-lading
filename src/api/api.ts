import axios from 'axios';

/**
 * Define os links de navegação no cabeçalho.
 */
interface NavLink {
  label: string; // O texto exibido no link
  href: string; // O URL para o qual o link leva
}

/**
 * Define os links das redes sociais no cabeçalho.
 */
interface SocialLink {
  icon: string; // O ícone da rede social (referência para a biblioteca de ícones)
  href: string; // O URL para o qual o link social leva
}

/**
 * Define os dados de uma seção da landing page.
 */
interface Section {
  title: string; // Título da seção
  description: string; // Descrição da seção
  mediaUrl: string; // URL da mídia (imagem ou vídeo)
  isVideo: boolean; // Define se a mídia é um vídeo
  imagePosition: 'left' | 'right'; // Posição da imagem ('left' ou 'right')
  hasButton: boolean; // Define se a seção tem um botão de ação
  bgColor: string; // Cor de fundo da seção
}

/**
 * Define os dados do cabeçalho, como logo e links de navegação.
 */
interface HeaderData {
  logo: string; // URL do logotipo
  navLinks: NavLink[]; // Lista de links de navegação
  socialLinks: SocialLink[]; // Lista de links das redes sociais
}

/**
 * Define os dados principais da landing page, como título, descrição e seções.
 */
interface LandingData {
  title: string; // Título da landing page
  description: string; // Descrição da landing page
  cta: string; // Call to action (ex.: texto do botão)
  imageUrl: string; // URL da imagem principal
  bgColor: string; // Cor de fundo da landing page
  sections: Section[]; // Seções da landing page
}

/**
 * Define os dados de um post do blog.
 */
interface BlogPost {
  id: number; // ID do post
  title: string; // Título do post
  body: string; // Corpo do post
  imageUrl: string; // URL da imagem do post
}

/**
 * Define o formato da resposta da API ao buscar posts.
 */
interface PostApiResponse {
  id: number; // ID do post
  title: string; // Título do post
  body: string; // Corpo do post
  userId: number; // ID do usuário que criou o post
}

// Funções de busca de dados

/**
 * Função genérica para buscar dados em um arquivo JSON.
 *
 * @param {string} filePath - O caminho para o arquivo JSON.
 * @returns {Promise<T>} - Os dados recuperados do arquivo JSON.
 */
const fetchJsonData = async <T>(filePath: string): Promise<T> => {
  const response = await axios.get<T>(filePath);
  return response.data;
};

/**
 * Busca e retorna os dados para o cabeçalho, incluindo logotipo, links de navegação e links sociais.
 *
 * @returns {Promise<HeaderData>} - Dados do cabeçalho
 */
export const fetchHeaderData = async (): Promise<HeaderData> => {
  return fetchJsonData<HeaderData>('/data/headerData.json');
};

/**
 * Busca e retorna os dados dos posts do blog.
 *
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
    imageUrl: '../images/blog/blog-1.jpg', // Imagem padrão
  }));

  return posts;
};

/**
 * Busca e retorna os dados principais da landing page, incluindo título, descrição, imagem principal e seções.
 *
 * @returns {Promise<LandingData>} - Dados da landing page
 */
export const fetchLandingData = async (): Promise<LandingData> => {
  return fetchJsonData<LandingData>('/data/landingData.json');
};

/**
 * Salva um log de contato em um arquivo de texto.
 *
 * @param {string} data - Dados a serem salvos no log.
 */
export const saveLogToFile = (data: string): void => {
  const blob = new Blob([data], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'contact_log.txt';
  link.click();
};
