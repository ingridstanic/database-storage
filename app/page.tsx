import { storeCrap } from "./actions/crapAction";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <form
          className="border border-emerald-700 rounded-2xl"
          action={storeCrap}
        >
          <input
            type="text"
            id="craptext"
            name="craptext"
            placeholder="Crap to store..."
          />
          <button className="border border-emerald-700 rounded-2xl px-3">
            Store crap
          </button>
        </form>
      </main>
    </div>
  );
}
