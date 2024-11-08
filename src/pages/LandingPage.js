// src/pages/LandingPage.js
import React, { useEffect, useState } from 'react';
import { fetchLandingData } from '../api/api.ts';
import SectionComponent from '../components/SectionComponent';
import Loading from '../components/Loading';
import { Helmet } from 'react-helmet';

function LandingPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchLandingData();
      setData(fetchedData);
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Helmet>
        <title>{data?.title || 'Página Inicial'}</title>
        <meta
          name='description'
          content={data?.description || 'Descrição da página de destino'}
        />
      </Helmet>

      <SectionComponent
        id='home'
        title={data.title || 'Bem-vindo'}
        description={data.description || 'Conheça nossos serviços e produtos.'}
        cta={data.cta || 'Ver mais'}
        bgColor={data.bgColor || '#fff'}
        animation='fade-up'
        mediaUrl={data.imageUrl}
      />

      {data.sections &&
        data.sections.map((section, index) => (
          <React.Fragment key={index}>
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
