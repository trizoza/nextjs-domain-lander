import { SiBuymeacoffee } from "react-icons/si";
import { headers } from "next/headers";
import { COFFEE_URL } from "./constants";

export default async function Home() {
  const headersList = headers();
  const host = (await headersList).get("host");

  return (
    <div className="grid grid-rows-[1fr_20px] items-start justify-items-center min-h-screen gap-16 pt-36 p-6 sm:p-36">
      <main className="max-w-[360px] flex flex-col gap-[36px] row-start-1 items-center w-full px-3">
        <h1 className="uppercase text-2xl tracking-wider">{host}</h1>
        <p>What a great domain! We have grand plans for it and we are working hard to bring it to life soon.</p>
        <p>If you&apos;d like to <b>learn more</b> or you have your own plans and you&apos;d like to <b>buy</b> <i>{host}</i> from us, <b>get us a coffee</b> to get the conversation started.</p>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href={COFFEE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBuymeacoffee />
          Buy me a coffee
        </a>
      </main>
      <footer className="row-start-2 items-center justify-center text-xs">
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
