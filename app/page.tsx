import AboutComponent from "./_components/about-component";
import AltoFalantesComponents from "./_components/alto-falantes-components";
import ContactsComponent from "./_components/contacts-component";
import FooterComponent from "./_components/footer";
import HeroComponent from "./_components/hero-component";
import ProjectComponents from "./_components/projects-component";
import RecondicionamentoComponent from "./_components/recondicionamento-component";

export default function Home() {
  return (
    <main className="mt-12">
      <HeroComponent />
      <AboutComponent />
      <ContactsComponent />
      <AltoFalantesComponents />
      <RecondicionamentoComponent />
      <ProjectComponents />
      <FooterComponent />
    </main>
  );
}
