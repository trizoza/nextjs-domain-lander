import { SiBuymeacoffee } from "react-icons/si";
import { headers } from "next/headers";
import { KOFI_URL } from "./constants";

export default async function Home() {
  const headersList = headers();
  const host = (await headersList).get("host");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen pt-0 pb-20 gap-16 sm:p-20">
      <main className="max-w-[360px] flex flex-col gap-[36px] row-start-2 items-center w-full px-3">
        <h1 className="uppercase text-2xl tracking-wider">{host}</h1>
        <p>What a great domain! We know it too and have grand plans for it. We are working hard to bring it to life soon.</p>
        <p>If you&apos;d like to <b>learn more</b> or you have your own plans and you&apos;d like to <b>buy {host}</b> from us, <b>get us a coffee</b> to get the conversation started.</p>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href={KOFI_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBuymeacoffee />
          Buy me a coffee
        </a>
      </main>
      <footer className="row-start-3 items-center justify-center text-xs">
        <p>Made with ❤️ by <a href={KOFI_URL} target="_blank" rel="noopener noreferrer" className="underline">Trizo</a></p>
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
