import { SiBuymeacoffee } from "react-icons/si";
import { headers } from "next/headers";
import { KOFI_URL } from "./constants";

export default async function Home() {
  const headersList = headers();
  const host = (await headersList).get("host");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-center min-h-screen pt-0 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="max-w-[360px] row-start-1 items-center justify-center">
        <h1>{host}</h1>
      </header>
      <main className="max-w-[360px] flex flex-col gap-[36px] row-start-2 items-start w-full">
        <p>What a great domain!</p>
        <p>We know it too and we have great plans for it.</p>
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
      <footer className="row-start-3 items-center justify-center">
        <p>Copyright © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
