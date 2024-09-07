// src/components/CrocwiseTips.jsx
const CrocwiseTips = () => {
    const tips = [
        "Stay at least 5 meters from the water’s edge.",
        "Always check for crocodile warning signs.",
        "Never swim in areas known for crocodiles.",
        "Dispose of food and bait scraps in bins.",
        "Keep pets away from water’s edge."
    ];

    return (
        <div className="mt-4">
            <div className="overflow-hidden h-20">
                <ul className="animate-marquee">
                    {tips.map((tip, index) => (
                        <li key={index} className="mb-2 text-left text-sm">
                            • {tip}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
