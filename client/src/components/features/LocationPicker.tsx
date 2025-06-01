'use client';

import { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

type Props = {
    value: { lat: number; lng: number };
    onChange: (coords: { lat: number; lng: number }) => void;
};

export default function LocationPicker({ value, onChange }: Props) {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<maplibregl.Map | null>(null);
    const markerRef = useRef<maplibregl.Marker | null>(null);

    // 🧠 Хамгийн сүүлийн value/onChange хадгалах ref
    const valueRef = useRef(value);
    const onChangeRef = useRef(onChange);

    useEffect(() => {
        valueRef.current = value;
        onChangeRef.current = onChange;
    }, [value, onChange]);

    useEffect(() => {
        if (mapRef.current && !mapInstance.current) {
            const map = new maplibregl.Map({
                container: mapRef.current,
                style: `https://api.maptiler.com/maps/basic/style.json?key=RQCwbg3UpHNVft10yEHE`,
                center: [valueRef.current.lng, valueRef.current.lat],
                zoom: 13,
            });

            map.on('load', () => {
                map.resize();
                const marker = new maplibregl.Marker({ draggable: false })
                    .setLngLat([valueRef.current.lng, valueRef.current.lat])
                    .addTo(map);

                markerRef.current = marker;

                map.on('click', (e) => {
                    const coords = { lng: e.lngLat.lng, lat: e.lngLat.lat };
                    marker.setLngLat([coords.lng, coords.lat]);
                    onChangeRef.current(coords);
                });
            });

            mapInstance.current = map;
        }

        return () => {
            if (mapInstance.current) {
                mapInstance.current.remove();
                mapInstance.current = null;
            }
        };
    }, []);

    return <div ref={mapRef} className="h-[400px] w-full rounded shadow relative" />;
}
