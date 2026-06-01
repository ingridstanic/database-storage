import { deleteCrap, toggleCrap } from "../actions/crapAction";
import { Crap } from "../models/Crap";
import { Star } from "lucide-react";

type CrapProps = {
  craps: Crap[];
};

export const StorePresentation = ({ craps }: CrapProps) => {
  return (
    <ul className="flex flex-col gap-2 w-full">
      {craps.map((crap) => (
        <div
          className="flex justify-between gap-5 border-b border-b-emerald-700 p-2"
          key={crap.id}
        >
          <li>{crap.text}</li>
          <div className="flex gap-5">
            <form action={toggleCrap}>
              <button>
                <input type="hidden" name="crapid" value={crap.id} />
                <Star
                  color="gold"
                  className="cursor-pointer shadow active:shadow-inner active:translate-y-0.5"
                  fill={crap.isImportant ? "gold" : "none"}
                />
              </button>
            </form>
            <form action={deleteCrap}>
              <input type="hidden" name="crapid" value={crap.id} />
              <button className="border-2 border-emerald-800 px-2 rounded-2xl cursor-pointer shadow active:shadow-inner active:translate-y-0.5">
                Dump
              </button>
            </form>
          </div>
        </div>
      ))}
    </ul>
  );
};
