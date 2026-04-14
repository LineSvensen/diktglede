import bildeMarit from "../../assets/maritnybok.jpeg";

export default function OmMeg() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center text-center lg:text-left">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4 ">Om Marit</h1>
          <p className="text-gray-700 ">
            Marit Theresie Hardeberg er født i 1966 – oppvokst i Arendal og
            Grimstad. Hun har Master of Business and Marketing, Bachelor i
            Spansk språk og Latinamerikastudier ved Universitetet i Bergen og
            Universidad de Las Palmas de Gran Canaria – og Master i Spansk
            fremmedspråk i skolen ved Høgskolen i Østfold. For tiden arbeider
            hun som Freelance
            forfatter/spansklærer/kursleder/oversetter/tolk/kunstner.
          </p>
        </div>

        <img
          src={bildeMarit}
          alt="Marit"
          className="rounded-lg sm:w-1/2 "
        ></img>
      </div>
    </div>
  );
}
