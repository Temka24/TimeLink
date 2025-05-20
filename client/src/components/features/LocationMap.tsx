type Props = {
    lat: number;
    lng: number;
};

export default function LocationMap({ lat, lng }: Props) {
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow mt-[-20px]">
            <iframe
                src={url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
