import BackButton from "../../Components/BackButton";

export default function Personvern() {
  return (
    <main className="min-h-screen bg-palepink text-black px-6 py-4">
      <BackButton />
      <section className="max-w-3xl mx-auto bg-white/80 rounded-2xl shadow-sm p-6 sm:p-10">
        <h1 className="text-2xl sm:text-4xl font-bold text-rose mb-6">
          Personvernerklæring
        </h1>

        <p className="mb-4">
          Denne personvernerklæringen forklarer hvordan Diktglede behandler
          personopplysninger når du besøker nettsiden eller tar kontakt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Hvem er ansvarlig?</h2>
        <p className="mb-4">
          Ansvarlig for behandlingen av personopplysninger er:
        </p>
        <p className="mb-4">
          <strong>Diktglede</strong>
          <br />
          E-post:{" "}
          <a className="underline" href="mailto:marithardeberg@gmail.com">
            marithardeberg@gmail.com
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Hvilke opplysninger samles inn?
        </h2>
        <p className="mb-4">
          Nettsiden samler i utgangspunktet ikke inn personopplysninger
          automatisk utover tekniske opplysninger som kan behandles av
          tjenestene nettsiden bruker, for eksempel hosting og publisering.
        </p>
        <p className="mb-4">
          Hvis du tar kontakt via e-post eller kontaktskjema, kan vi behandle
          opplysninger som navn, e-postadresse, telefonnummer og innholdet i
          meldingen din.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Hva brukes opplysningene til?
        </h2>
        <p className="mb-4">
          Opplysningene brukes kun for å svare på henvendelser, følge opp
          bestillinger eller annen kontakt du selv tar initiativ til.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Rettslig grunnlag</h2>
        <p className="mb-4">
          Behandlingen skjer fordi det er nødvendig for å kunne svare på
          henvendelsen din, eller fordi du selv har gitt oss opplysningene.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Bruk av tredjepartstjenester
        </h2>
        <p className="mb-4">
          Nettsiden kan bruke tredjepartstjenester som Vercel for hosting og
          Sanity for innholdshåndtering. Disse tjenestene kan behandle tekniske
          data som er nødvendige for at nettsiden skal fungere.
        </p>

        {/* <p className="mb-4">
          Dersom kontaktskjema brukes, kan skjemaet være levert via Formspree.
          Da sendes opplysningene du fyller inn videre til Formspree for å
          levere meldingen til oss.
        </p> */}

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Informasjonskapsler/cookies
        </h2>
        <p className="mb-4">
          Diktglede bruker ikke informasjonskapsler til markedsføring eller
          sporing, med mindre dette tydelig opplyses om og du har gitt samtykke.
        </p>
        <p className="mb-4">
          Dersom nettsiden senere får analyseverktøy, annonsering eller andre
          sporingsteknologier, vil dette oppdateres i personvernerklæringen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          Hvor lenge lagres opplysningene?
        </h2>
        <p className="mb-4">
          Opplysninger fra henvendelser lagres så lenge det er nødvendig for å
          følge opp kontakten, og slettes når de ikke lenger er relevante.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Dine rettigheter</h2>
        <p className="mb-4">
          Du kan be om innsyn, retting eller sletting av personopplysninger vi
          har om deg. Du kan også protestere mot behandling eller be om
          begrensning av behandlingen.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Kontakt</h2>
        <p className="mb-4">
          Har du spørsmål om personvern, kan du kontakte oss på:
          <br />
          <a className="underline" href="mailto:marithardeberg@gmail.com">
            marithardeberg@gmail.com
          </a>
        </p>

        <p className="text-sm text-black/60 mt-10">
          Sist oppdatert: 19. mai 2026
        </p>
      </section>
    </main>
  );
}
