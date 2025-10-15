import { Loader2 } from "lucide-react";

export default function Loader({ text = "Laster inn..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-600 animate-fadeIn">
      <Loader2 className="h-10 w-10 animate-spin text-gray-500 mb-4" />
      <p className="text-sm tracking-wide">{text}</p>
    </div>
  );
}
