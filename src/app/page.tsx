import AboutJourney from "@/components/AboutJourney";
import AnimatedLink from "@/components/AnimatedLink";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <div className="h-auto font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Landing />
        <AboutJourney />
      </main>
      
    </div>
  );
}
