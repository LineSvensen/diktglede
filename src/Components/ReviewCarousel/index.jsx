import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ReviewCarousel = ({
  reviews,
  autoPlayInterval = 5000,
  linearMode = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [fontSizeClass, setFontSizeClass] = useState("text-base");
  const autoPlayRef = useRef(null);

  const visibleReviews =
    reviews?.filter((review) => review.visible !== false) || [];

  // Funksjon for å bestemme font-størrelse basert på tekstlengde OG skjermbredde
  const getFontSizeClass = (textLength, windowWidth) => {
    const isMobile = windowWidth < 640;

    if (isMobile) {
      // Mobile (under 640px) - mindre tekst
      if (textLength > 350) return "text-base";
      if (textLength > 250) return "text-base"; // 12px
      if (textLength > 150) return "text-base"; // 14px
      if (textLength > 80) return "text-base"; // 16px
      return "text-lg"; // 18px
    } else {
      // Desktop (over 768px)
      if (textLength > 400) return "text-base";
      if (textLength > 300) return "text-lg";
      if (textLength > 200) return "text-xl";
      if (textLength > 100) return "text-2xl";
      return "text-3xl";
    }
  };

  // Oppdater font-størrelse basert på tekstlengde OG skjermstørrelse
  useEffect(() => {
    const updateFontSize = () => {
      const currentText = currentReview?.quote || "";
      const windowWidth = window.innerWidth;
      const newFontSize = getFontSizeClass(currentText.length, windowWidth);
      setFontSizeClass(newFontSize);
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, [currentIndex, visibleReviews]);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);

    if (isAutoPlaying && !linearMode && visibleReviews.length > 0) {
      autoPlayRef.current = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) =>
          prev === visibleReviews.length - 1 ? 0 : prev + 1,
        );
      }, autoPlayInterval);
    }
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [isAutoPlaying, currentIndex, linearMode, visibleReviews.length]);

  const handlePrev = () => {
    stopAutoPlay();
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? visibleReviews.length - 1 : prev - 1,
    );
    setTimeout(() => {
      if (isAutoPlaying) startAutoPlay();
    }, 100);
  };

  const handleNext = () => {
    stopAutoPlay();
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === visibleReviews.length - 1 ? 0 : prev + 1,
    );
    setTimeout(() => {
      if (isAutoPlaying) startAutoPlay();
    }, 100);
  };

  const handleDotClick = (index) => {
    stopAutoPlay();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => {
      if (isAutoPlaying) startAutoPlay();
    }, 100);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (linearMode) {
    return (
      <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 py-6 md:py-8">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -visibleReviews.length * 100 + "%"],
            }}
            transition={{
              duration: visibleReviews.length * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...visibleReviews, ...visibleReviews].map((review, idx) => (
              <div
                key={idx}
                className="inline-flex w-[280px] md:w-[400px] lg:w-[500px] flex-shrink-0 flex-col items-center justify-center px-4 md:px-6 text-center text-white"
              >
                <p className="text-sm italic md:text-xl line-clamp-4 ">
                  "{review.quote}"
                </p>
                <p className="mt-3 md:mt-4 font-semibold text-sm md:text-base">
                  – {review.author}
                </p>
                {review.date && (
                  <p className="mt-1 text-xs opacity-75">
                    {new Date(review.date).toLocaleDateString("no-NO")}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  if (visibleReviews.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
        <p className="text-gray ">Ingen anmeldelser å vise</p>
      </div>
    );
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const currentReview = visibleReviews[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* FAST HØYDE - lavere på mobil */}
      <div className="relative overflow-hidden rounded-2xl bg-white border-1 border-gray-100 shadow-xl h-[380px] sm:h-[400px] ">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="h-full p-5 sm:p-8 md:p-12 flex flex-col"
          >
            {/* Anførselstegn - mindre på mobil */}
            <svg
              className="mb-2 sm:mb-4 h-7 w-7 md:h-12 md:w-12 text-palepink flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {/* Sitat - dynamisk font-størrelse */}
            <div className="flex-1 flex items-center justify-center mb-3 sm:mb-4 overflow-y-auto">
              <p
                className={`${fontSizeClass} leading-relaxed text-black  poppins-regular text-center transition-all duration-300 px-8 sm:px-2`}
              >
                "{currentReview.quote}"
              </p>
            </div>

            {/* Forfatter og dato - kompakt på mobil */}
            <div className="flex-shrink-0 pt-3 sm:pt-4 border-t border-gray-100 text-center">
              <p className="poppins-bold text-black text-xs sm:text-sm md:text-base">
                {currentReview.author}
              </p>
              {currentReview.date && (
                <p className="text-[10px] sm:text-xs md:text-sm text-gray poppins-regular mt-0.5 sm:mt-1">
                  {new Date(currentReview.date).toLocaleDateString("no-NO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigasjonsknapper - mindre på mobil */}
        <button
          onClick={handlePrev}
          className="absolute border-1 border-gray-100 left-1  sm:left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 sm:p-1.5 md:p-2 shadow-md transition hover:bg-white sm:md:left-4 z-10"
          aria-label="Forrige anmeldelse"
        >
          <ChevronLeft className="w-5 h-5   cursor-pointer text-gray" />
        </button>

        <button
          onClick={handleNext}
          className="absolute border-1 border-gray-100 right-1 sm:right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 sm:p-1.5 md:p-2 shadow-md transition hover:bg-white sm:md:right-4 z-10"
          aria-label="Neste anmeldelse"
        >
          <ChevronRight className="w-5 h-5  cursor-pointer text-gray " />
        </button>

        {/* Auto-play kontroll - mindre på mobil */}
        <button
          onClick={toggleAutoPlay}
          className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 cursor-pointer rounded-full bg-gray p-1 sm:p-1.5 md:p-2 transition hover:bg-gray-200 z-10"
          aria-label={isAutoPlaying ? "Pause" : "Spill"}
        >
          {isAutoPlaying ? (
            <Pause className="h-4 w-4 sm:h-3 sm:w-3 md:h-4 md:w-4 text-white" />
          ) : (
            <Play className="h-4 w-4 sm:h-3 sm:w-3 md:h-4 md:w-4 text-white" />
          )}
        </button>
      </div>

      {/* Dot-indikatorer - mindre mellomrom på mobil */}
      <div className="mt-4 sm:mt-5 md:mt-6 flex justify-center gap-1.5 sm:gap-2 flex-wrap">
        {visibleReviews.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "w-4 sm:w-6 md:w-8 bg-rose"
                : "w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Gå til anmeldelse ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
