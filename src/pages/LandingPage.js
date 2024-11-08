import React, { useEffect, useState } from 'react';
import { fetchLandingData } from '../api/api.ts';
import SectionComponent from '../components/SectionComponent';
import Loading from '../components/Loading';

/**
 * Componente responsável pela renderização da página inicial (Landing Page).
 *
 * Este componente busca dados dinâmicos da API e renderiza as seções da página,
 * incluindo o cabeçalho, o conteúdo principal e outras seções conforme especificado.
 */
function LandingPage() {
  // Estado para armazenar os dados carregados da API
  const [data, setData] = useState(null);

  // Estado para controle do carregamento da página
  const [loading, setLoading] = useState(true);

  // Busca os dados da landing page assim que o componente é montado
  useEffect(() => {
    const loadData = async () => {
      // Chama a função para buscar os dados da landing page
      const fetchedData = await fetchLandingData();
      setData(fetchedData); // Atualiza o estado com os dados recebidos
      setLoading(false); // Indica que o carregamento terminou
    };

    loadData(); // Executa a função de busca
  }, []); // O array vazio indica que a busca ocorre apenas uma vez após o primeiro render

  // Se a página ainda estiver carregando, exibe o componente de carregamento
  if (loading) return <Loading />;

  return (
    <div>
      {/* Renderiza o componente principal da landing page */}
      <SectionComponent
        id='home'
        title={data.title || 'Bem-vindo'}
        description={data.description || 'Conheça nossos serviços e produtos.'}
        cta={data.cta || 'Ver mais'}
        bgColor={data.bgColor || '#fff'}
        animation='fade-up'
        mediaUrl={data.imageUrl}
      />

      {/* Renderiza as seções adicionais se existirem */}
      {data.sections &&
        data.sections.map((section, index) => (
          <React.Fragment key={index}>
            {/* Renderiza cada seção com os dados da API */}
            <SectionComponent
              id={
                section.title?.toLowerCase().replace(/\s+/g, '-') ||
                `section-${index}`
              }
              title={section.title || 'Seção'}
              description={section.description || 'Descrição da seção'}
              cta={section.hasButton ? 'Saiba Mais' : ''}
              mediaUrl={section.mediaUrl}
              isVideo={section.isVideo}
              imagePosition={section.imagePosition}
              hasButton={section.hasButton}
              bgColor={section.bgColor || '#f8f9fa'}
              animation='fade-up'
            />
          </React.Fragment>
        ))}
    </div>
  );
}

export default LandingPage;
