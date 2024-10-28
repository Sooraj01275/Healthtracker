import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { usePositionData } from '../../../helpers/usePositionData';

const MapComponent = ({ location }: { location: string | null }) => {
    const positions = usePositionData({ location })
    return (
        <MapContainer
            center={[23.5937, 78.9629]}
            zoom={5}
            style={{ height: "100vh", width: "100%" }}
            scrollWheelZoom={false}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {positions.map((position, index) => (
                <Marker
                    key={index}
                    position={position.coords as any}
                    icon={L.icon({
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                    })}
                >
                    <Popup>{position.name}</Popup>
                </Marker>
            ))}

        </MapContainer>
    );
};

export default MapComponent;
