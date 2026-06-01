import { storeCrap } from "./actions/crapAction";
import { StorePresentation } from "./components/StorePresentation";
import { connectDB } from "./lib/db";
import { Crap } from "./models/Crap";
import { CrapModel } from "./models/CrapSchema";

export default async function Home() {
  await connectDB();
  const craps: Crap[] = await CrapModel.find();

  return (
    <div className="flex flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <form
          className="border border-emerald-700 rounded-4xl"
          action={storeCrap}
        >
          <input
            className="p-2"
            type="text"
            id="craptext"
            name="craptext"
            placeholder="Crap to store..."
          />
          <button className="bg-emerald-800 rounded-4xl py-2 px-4">
            Store crap
          </button>
        </form>
        <StorePresentation craps={craps} />
      </main>
    </div>
  );
}
