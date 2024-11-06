// src/pages/LandingPage.js
import React, { useEffect, useState } from 'react';
import { fetchLandingData } from '../api/api.ts';
import SectionComponent from '../components/SectionComponent';
import Loading from '../components/Loading';

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
      <SectionComponent
          id="home"
          title={data.title} 
          description={data.description} 
          cta={data.cta} 
          bgColor={data.bgColor} 
          animation="fade-up" 
          mediaUrl={data.imageUrl} 
      />
      {data.sections.map((section, index) => (
        <React.Fragment key={index}>
          <SectionComponent
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              title={section.title} 
              description={section.description} 
              cta={section.hasButton ? "Saiba Mais" : ""}
              mediaUrl={section.mediaUrl}
              isVideo={section.isVideo}
              imagePosition={section.imagePosition}
              hasButton={section.hasButton}
              bgColor={section.bgColor} 
              animation="fade-up" 
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default LandingPage;
