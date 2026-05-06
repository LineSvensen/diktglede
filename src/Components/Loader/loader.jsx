import { Loader2 } from "lucide-react";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/pinkloader.json";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen w-screen flex-col items-center justify-center bg-white">
      <Lottie
        animationData={loaderAnimation}
        loop={true}
        className="h-150 w-150"
      />
    </div>
  );
}
