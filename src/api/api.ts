// src/api/data.ts
// Importação de imagens usadas na landing page
import axios from "axios";
import logo from "../images/logo.png";

// Imagem Seção
import image1 from "../images/sections/image-1.jpg";
import image2 from "../images/sections/image-2.jpg";
import image3 from "../images/sections/image-3.jpg";
import image4 from "../images/sections/image-4.jpg";

// Imagem Blog
import blog1 from "../images/blog/blog-1.jpg";

// Interfaces e tipos
// Define a estrutura de um link de navegação para o menu principal
interface NavLink {
  label: string; // Texto exibido no link
  href: string; // Referência para a âncora ou página de destino
}

// Define a estrutura de um link para redes sociais
interface SocialLink {
  icon: string; // Ícone da rede social, como 'facebook' ou 'twitter'
  href: string; // URL do perfil ou página da rede social
}

// Define a estrutura de uma seção na landing page, que pode conter texto, imagem ou vídeo
interface Section {
  title: string; // Título da seção
  description: string; // Descrição ou conteúdo principal da seção
  mediaUrl: string; // URL da mídia (imagem ou vídeo) usada na seção
  isVideo: boolean; // Indica se a mídia é um vídeo (true) ou imagem (false)
  imagePosition: "left" | "right"; // Posição da imagem na seção, 'left' ou 'right'
  hasButton: boolean; // Indica se a seção inclui um botão de ação
  bgColor: string; // Cor de fundo da seção
}

// Define a estrutura de dados para o cabeçalho, contendo o logotipo, links de navegação e redes sociais
interface HeaderData {
  logo: string; // URL do logotipo
  navLinks: NavLink[]; // Array de links de navegação
  socialLinks: SocialLink[]; // Array de links para redes sociais
}

// Define a estrutura principal de dados da landing page
interface LandingData {
  title: string; // Título principal da landing page
  description: string; // Descrição da landing page
  cta: string; // Texto do botão de chamada para ação (Call to Action)
  imageUrl: string; // URL da imagem principal exibida na landing page
  bgColor: string; // Cor de fundo da seção principal da landing page
  sections: Section[]; // Array de seções para exibir conteúdo adicional na landing page
}

// Define a estrutura de um post do blog
interface BlogPost {
  id: number; // Identificador único do post
  title: string; // Título do post
  body: string; // Conteúdo do post
  imageUrl: string; // URL da imagem do post
}

// Funções de busca de dados
// Essas funções simulam a obtenção de dados de uma API ou arquivo de configuração
// Podem ser adaptadas para integrar com uma API real futuramente

/**
 * Busca e retorna os dados para o cabeçalho, incluindo logotipo, links de navegação e links sociais.
 * @returns {Promise<HeaderData>} - Dados do cabeçalho
 */
export const fetchHeaderData = async (): Promise<HeaderData> => {
  return {
    logo: logo, // Imagem de logotipo importada
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "Serviços", href: "#nossos-serviços" },
      { label: "Sobre Nós", href: "#vídeo-institucional" },
      { label: "Depoimentos", href: "#depoimentos-de-clientes" },
      { label: "Contato", href: "#contato" },
    ],
    socialLinks: [
      { icon: "facebook", href: "https://facebook.com/TechInnovators" },
      { icon: "twitter", href: "https://twitter.com/TechInnovators" },
      { icon: "instagram", href: "https://instagram.com/TechInnovators" },
    ],
  };
};

/**
 * Busca e retorna os dados dos posts do blog.
 * @returns {Promise<BlogPost[]>} - Array com os dados dos posts do blog
 */
export const fetchPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // Mapeia os dados recebidos para o formato BlogPost
  const posts = response.data.slice(0, 6).map((post: any) => ({
    id: post.id,
    title: post.title,
    body: post.body,
    imageUrl: blog1, // Placeholder para a imagem do post
  }));

  return posts;
};

/**
 * Busca e retorna os dados principais da landing page, incluindo título, descrição, imagem principal e seções.
 * @returns {Promise<LandingData>} - Dados da landing page
 */
export const fetchLandingData = async (): Promise<LandingData> => {
  return {
    title: "Bem-vindo à Tech Innovators",
    description:
      "Na Tech Innovators, transformamos sua visão em soluções tecnológicas inovadoras. Nossa equipe é apaixonada por criar ferramentas que impulsionam o sucesso do seu negócio. Com uma abordagem centrada no cliente e focada em resultados, estamos prontos para levar sua empresa a novos patamares.",
    cta: "Fale Conosco", // Botão de chamada para ação principal
    imageUrl: image1, // Imagem principal da landing page
    bgColor: "white", // Cor de fundo da seção principal
    sections: [
      {
        title: "Nossos Serviços",
        description:
          "Oferecemos uma ampla gama de serviços que incluem desenvolvimento de software personalizado, consultoria em TI e integração de sistemas. Nossa missão é ajudar sua empresa a otimizar processos, reduzir custos e melhorar a eficiência operacional. Estamos aqui para fornecer soluções sob medida que atendam às suas necessidades específicas e ajudem você a alcançar seus objetivos estratégicos.",
        mediaUrl: image3,
        isVideo: false,
        imagePosition: "right",
        hasButton: true,
        bgColor: "#f5f5f5",
      },
      {
        title: "Vídeo Institucional",
        description:
          "Assista ao nosso vídeo institucional e descubra como a Tech Innovators pode transformar a sua empresa. Neste vídeo, apresentamos exemplos de nossos projetos anteriores, destacando o impacto positivo que nossas soluções têm causado em nossos clientes. Deixe-se inspirar pelas histórias de sucesso e veja como podemos ajudar a sua empresa a se destacar no mercado.",
        mediaUrl: "https://www.youtube.com/embed/8vkGADckmiI",
        isVideo: true,
        imagePosition: "right",
        hasButton: true,
        bgColor: "white",
      },
      {
        title: "Depoimentos de Clientes",
        description:
          "Nossos clientes são a nossa maior prioridade. Veja o que eles têm a dizer sobre nossa abordagem e como nossos serviços impactaram positivamente seus negócios. Esses depoimentos refletem a confiança que depositam em nós e os resultados que obtiveram após a implementação de nossas soluções. Junte-se a um grupo crescente de empresas satisfeitas que transformaram seus desafios em oportunidades.",
        mediaUrl: image2,
        isVideo: false,
        imagePosition: "left",
        hasButton: true,
        bgColor: "#f5f5f5",
      },
      {
        title: "Contato",
        description:
          "Entre em contato conosco para discutir como podemos ajudar a sua empresa a crescer. Nossa equipe está pronta para ouvir suas necessidades e oferecer soluções personalizadas que se alinhem com seus objetivos. Não hesite em nos enviar uma mensagem, ligar ou preencher nosso formulário de contato. Estamos ansiosos para colaborar com você e levar sua visão ao próximo nível.",
        mediaUrl: image4,
        isVideo: false,
        imagePosition: "right",
        hasButton: false,
        bgColor: "white",
      },
    ],
  };
};

export const saveLogToFile = (data: string): void => {
  const blob = new Blob([data], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "contact_log.txt";
  link.click();
};
