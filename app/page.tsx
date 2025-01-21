import AboutComponent from "./_components/about-component";
import HeroComponent from "./_components/hero-component";

export default function Home() {
  return (
    <main className="h-full">
      <HeroComponent />
      <AboutComponent />
    </main>
  );
}
