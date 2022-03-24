import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type IMapProps = {
  places?: Place[];
};

const Map = ({ places }: IMapProps) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map((place) => (
        <>
          <Marker
            key={place.id}
            position={[place.location.latitude, place.location.longitude]}
            title={place.name}
          >
            <Popup>{place.name}</Popup>
          </Marker>
        </>
      ))}
    </MapContainer>
  );
};

export default Map;
