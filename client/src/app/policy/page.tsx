export default function Page() {
    return (
        <div className="h-[2000px] bg-gray-100 p-4">
            <div className="relative h-[500px] bg-blue-100 mt-[100px]">
                <div className="sticky top-[100px] bg-blue-500 text-white p-4">
                    Sticky for 500px only
                </div>
                <div className="h-[1000px]">Scroll content here</div>
            </div>
            <div className="mt-10">More content...</div>
        </div>
    );
}
