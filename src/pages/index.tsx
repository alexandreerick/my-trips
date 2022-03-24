import LinkWrapper from 'components/LinkWrapper';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map'), { ssr: false });

const Home: React.FC = () => {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline color="black" size={32} aria-label="about" />
      </LinkWrapper>
      <Map
        places={[
          {
            id: '1',
            location: {
              latitude: -9.652623,
              longitude: -35.708952,
            },
            name: 'Casa',
            slug: 'casa',
          },
          {
            id: '2',
            location: {
              latitude: -9.131623,
              longitude: -35.74108952,
            },
            name: 'Sei la',
            slug: 'Sei la',
          },
        ]}
      />
    </>
  );
};

export default Home;
