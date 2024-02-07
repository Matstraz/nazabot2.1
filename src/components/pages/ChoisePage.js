import { useNavigate } from "react-router";
import bear from "../../assets/pics/welcomepage/bear.png";
import ugly from "../../assets/pics/welcomepage/ugly.png";
import ninja from "../../assets/pics/welcomepage/ninja.png";
import ninjabig from "../../assets/pics/welcomepage/ninjabig.png";
import sleeping from "../../assets/pics/welcomepage/sleeping.png";
import hurted from "../../assets/pics/welcomepage/hurted.png";
import honest from "../../assets/pics/welcomepage/honest.png";
import pokemon from "../../assets/pics/welcomepage/pokemon.png";
import albacio from "../../assets/pics/homepage/albacio.png";
import wurm from "../../assets/pics/homepage/wurm.png";
import { useState } from "react";

export default function ChoisePage({
  setShow,
  sleeping1,
  setSleeping1,
  pokemon1,
  setPokemon1,
  bear1,
  setBear1,
  hurted1,
  setHurted1,
  honest1,
  setHonest1,
  ninja1,
  setNinja1,
  ninjabig1,
  setNinjabig1,
  ugly1,
  setUgly1,
  albacio1,
  setAlbacio1,
}) {
  const navigate = useNavigate();
  let [show3, setShow3] = useState(false);
  function reset() {
    setShow(false);
    navigate("/");
    setSleeping1(false);
    setPokemon1(false);
    setBear1(false);
    setHurted1(false);
    setHonest1(false);
    setNinja1(false);
    setNinjabig1(false);
    setUgly1(false);
  }
  return (
    <div className="w-screen min-h-screen bg-slate-800 text-slate-200 py-8 flex flex-col justify-start items-center gap-8">
      {/* BEAR */}
      <div
        className={
          bear1 ? "flex flex-col justify-start items-center gap-8" : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center px-1">
            Hai scelto <br /> NAZA BEAR COL PIGIAMINO!
          </div>
          <img src={bear} alt="bear" className="w-20" />
        </div>

        <div className="w-11/12 border-double border-4 p-2">
          <p>
            <span className="font-bold text-md">Carattere:</span> sei un Naza,
            un padre, un cristiano.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Lavoro:</span> per te esiste un
            unico lavoro, sei un vero 'padre di famiglia'.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Denaro:</span> purtroppo non ti
            è rimasta una lira.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Amore:</span> riesci ad amore
            solo la tua famiglia ed i tuoi amici, hai il cuore tenero ricoperto
            da pelliccia d'orso.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Magic:</span> non hai il tempo
            di dedicarti ad altro se non alla famiglia.
          </p>
        </div>
      </div>
      {/* ugly */}
      <div
        className={
          ugly1 ? "flex flex-col justify-start items-center gap-8" : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center px-1">
            Hai scelto <br /> UGLY NAZA!
          </div>
          <img src={ugly} alt="ugly" className="w-36" />
        </div>

        <div className="w-11/12 border-double border-4 p-2">
          <p>
            <span className="font-bold text-md">Carattere:</span> sei brutto
            fuori e brutto dentro.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Lavoro:</span> l'unico lavoro a
            cui puoi aspirare è dentro un campanile a Notre-Dame.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Denaro:</span> puoi racimolare
            denaro solo attraverso l'elemosina da parte dei passanti.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Amore:</span> AHAHAH, NO LOVE.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Magic:</span> sei così povero
            che non puoi permetterti le bustine per il pauper.
          </p>
        </div>
      </div>

      {/* ninja */}
      <div
        className={
          ninja1 ? "flex flex-col justify-start items-center gap-8" : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center px-1">
            Hai scelto <br /> NAZA, NINJA TRADITORE DELLA FOGLIA!
          </div>
          <img src={ninja} alt="ugly" className="w-36" />
        </div>

        <div className="w-11/12 border-double border-4 p-2">
          <p>
            <span className="font-bold text-md">Carattere:</span> sei un infame.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Lavoro:</span> uccidi forze
            portanti per divertimento.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Denaro:</span> non hai alcun
            problema economico.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Amore:</span> non pensi a cose
            futuli come l'amore.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Magic:</span> sei disposto a
            qualunque genjutsu pur di vincire una partita.
          </p>
        </div>
      </div>

      {/* ninjabig */}
      <div
        className={
          ninjabig1
            ? "flex flex-col justify-start items-center gap-8"
            : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center px-1">
            Hai scelto <br /> NAZA, NINJA (FINTO) TRADITORE DELLA FOGLIA!
          </div>
          <img src={ninjabig} alt="ugly" className="w-24" />
        </div>

        <div className="w-11/12 border-double border-4 p-2">
          <p>
            <span className="font-bold text-md">Carattere:</span> sei un infame
            o almeno è quello che vuoi far credere agli altri...
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Lavoro:</span> uccidi forze
            portanti a pagamento ma la cosa ti causa gravi sensi di colpa.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Denaro:</span> doni in
            beneficienza tutti i tuoi guadagni.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Amore:</span> l'unica persona
            per cui provi qualocsa è Peco, Ultimo ninja del villaggio delle
            banane.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Magic:</span> sei disposto a
            qualunque genjutsu pur di vincire una partita (con discreto
            insuccesso).
          </p>
        </div>
      </div>

      {/* sleeping */}
      <div
        className={
          sleeping1
            ? "flex flex-col justify-start items-center gap-8"
            : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center px-1">
            Hai scelto <br /> SLEEPING NAZA
          </div>
          <img src={sleeping} alt="ugly" className="w-40" />
        </div>

        <div className="w-11/12 border-double border-4 p-2">
          <p>
            <span className="font-bold text-md">Carattere:</span> hai un
            carattere di merda ma sei troppo stanco per mostrarlo agli altri.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Lavoro:</span> riesci a lavorare
            solo in smart, acquistando criptovalute per 20 minuti al giorno.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Denaro:</span> hai perso tutto
            con i tuoi pessimi investimenti.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Amore:</span> niente è più
            importante per te del tuo cuscino.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Magic:</span> hai raggiunto la
            tua attuale condizione completando 2 leghe di fila.
          </p>
        </div>
      </div>

      {/* hurted */}
      <div
        className={
          hurted1 ? "flex flex-col justify-start items-center gap-8" : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center px-1">
            Hai scelto <br /> HURTED NAZA
          </div>
          <img src={hurted} alt="ugly" className="w-40" />
        </div>

        <div className="w-11/12 border-double border-4 p-2">
          <p>
            <span className="font-bold text-md">Carattere:</span> placido e
            remissivo, come un cane bastonato.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Lavoro:</span> fingi incidenti
            stradali per incassare denaro dalle assicurazioni.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Denaro:</span> hai racimolato un
            piccolo patrimonio con i tuoi raggiri.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Amore:</span> ami solo te
            stesso.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Magic:</span> hai una collezione
            invidiabile, acquistata con denaro sporco. La tua parola d'ordine è
            'ospedale'.
          </p>
        </div>
      </div>

      {/* pokemon */}
      <div
        className={
          pokemon1 ? "flex flex-col justify-start items-center gap-8" : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center px-1">
            Hai scelto <br /> NAZA POKEMON
          </div>
          <img src={pokemon} alt="ugly" className="w-40" />
        </div>

        <div className="w-11/12 border-double border-4 p-2">
          <p>
            <span className="font-bold text-md">Carattere:</span> moderatamente
            aggressivo, talvolta ti fermi ad ululare sui picchi o sulle
            scogliere.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Lavoro:</span> passi le giornate
            a cacciare rattata.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Denaro:</span> non hai bisogno
            di soldi, ti bastano le caramelle.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Amore:</span> ti piacciono solo
            i tuoi simili del tuo stesso sesso.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Magic:</span> provi
            disperatamente a vincere ma alla fine resti sempre un Suicune.
          </p>
        </div>
      </div>

      {/* honest */}
      <div
        className={
          honest1 ? "flex flex-col justify-start items-center gap-8" : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center px-1">
            Hai scelto <br /> HONEST NAZA
          </div>
          <img src={honest} alt="ugly" className="w-40" />
        </div>

        <div className="w-11/12 border-double border-4 p-2">
          <p>
            <span className="font-bold text-md">Carattere:</span> ironico ed
            irritante.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Lavoro:</span> spettatore di
            partite calcistiche e spettacoli televisivi.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Denaro:</span> hai perso tutti i
            tuoi soldi a causa di microscelte errate.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Amore:</span> hai occhi solo per
            i topdecks.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Magic:</span> è il tuo hobby
            preferito, superato solamente dal tuo irrefrenabile impulso a fare
            ospedale.
          </p>
        </div>
      </div>

      {/* albacio */}
      <div
        className={
          albacio1 ? "flex flex-col justify-start items-center gap-8" : "hidden"
        }
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="text-4xl text-center px-1">
            Complimenti hai trovato <br /> NAZA AL BACIO!
          </div>
          <img src={albacio} alt="ugly" className="w-40" />
        </div>

        <div className="w-11/12 border-double border-4 p-2">
          <p>
            <span className="font-bold text-md">Carattere:</span> disponibile e
            permessivo, non riesci a dire di no quando si parla di affetto ed
            effusioni.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Lavoro:</span> batti le
            principali stazioni ferroviarie con la tua immancabile borsetta
            rossa ricoperta di lustrini.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Denaro:</span> i tuoi guadagni
            ammontano a circa 20 euro a prestazione.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Amore:</span> dispensi amore
            costantemente.
          </p>
          <br />
          <p>
            <span className="font-bold text-md">Magic:</span> collezioni
            esclusivamente carte con art ambigue. Custodisci gelosamente,
            esposta in una vetrina nella tua stanzetta, una copia foil di&nbsp;
            <span
              className="underline text-blue-500 cursor-pointer"
              onClick={() => setShow3(true)}
            >
              questa carta
            </span>
            .
          </p>
        </div>
        <img
          src={wurm}
          alt="wurm"
          className={show3 ? "w-10/12 md:w-6/12 lg:w-3/12" : "hidden"}
        />
      </div>

      {/* RESET BUTTON */}
      <button
        className={
          !albacio1
            ? "bg-slate-600 cursor-pointer rounded-lg px-4 py-1 pb-2"
            : "hidden"
        }
        onClick={reset}
      >
        Pick Again
      </button>
      {/* ALBACIO BUTTON */}
      <button
        className={
          albacio1
            ? "bg-slate-600 cursor-pointer rounded-lg px-4 py-1 pb-2"
            : "hidden"
        }
        onClick={() => {
          setAlbacio1(false);
          setShow3(false);
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}
