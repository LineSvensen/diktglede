import { useState, useEffect } from "react";
import Loader from "../../Components/Loader/loader";
import HeroCarousel from "../../Components/HeroCarousel";

export default function Hjem() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader text="Laster inn siden..." />;

  return (
    <div className="max-w-7xl mx-auto p-8">
      <HeroCarousel />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Velkommen 🌸</h1>
      <p className="text-gray-700">
        Dette er hjemmesiden din. Du kan legge til tekst, bilder eller dikt her.
      </p>
    </div>
  );
}
