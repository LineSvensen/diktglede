import { useEffect, useState } from "react";
import BookList from "../../Components/BookList";
import Loader from "../../Components/Loader/loader";

export default function Diktboker() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl poppins-bold text-rose mb-6 pl-4">
        Alle diktbøker
      </h1>

      <BookList />
    </div>
  );
}
