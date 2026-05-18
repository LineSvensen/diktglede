import BackButton from "../../Components/BackButton";

export default function errorside() {
  return (
    <div className="max-w-5xl min-h-screen mx-auto p-8 flex flex-col text-center  justify-center items-center">
      <h1 className="text-3xl poppins-bold text-rose mb-4 pb-4  ">
        Oops! Noe gikk galt 😮🥀
      </h1>
      <p className="text-black text-base poppins-regular mb-4 pb-4 ">
        Det kan skyldes at siden er fjernet, dårlig internettforbindelse eller
        at nettsiden arbeides på. Prøv gjerne igjen senere.
      </p>
      <div className="flex flex-col items-center justify-center text-center  ">
        <BackButton />
        <p className="text-rose sm:hidden text-base poppins-regular  flex items-center text-center pb-2">
          Gå tilbake
        </p>
      </div>
    </div>
  );
}
