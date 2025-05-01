import { FaArrowUp } from "react-icons/fa";
import {
  Navbar,
  Footer,
  MaquinaEscribir,
  Section,
  Somos,
  Carousel,
  Button,
} from "../../components";

import {
  navbarItems,
  listCardsServicios,
  listCardDonar,
  novedades,
  donativosProgramas,

} from "../../data";

const Home = () => {
  

  return (
    <div className="page-container">
      
      <header>
        <Navbar items={navbarItems} />
      </header>
      <main className="content-wrap">
        <Button classNameCustom="button-inicio" label={<FaArrowUp />} onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}}/>
        <MaquinaEscribir text="¿Te imaginas un mundo donde no pudieras moverte?" />
        <Somos />
        <Section id="novedades" tituloSection="Novedades"><Carousel list={novedades}/></Section>
        <Section
          id="servicios"
          tituloSection="Servicios"
          cards={listCardsServicios}
          columns="4"
        />
        <Section
          id="donar"
          tituloSection="Donar"
          cards={listCardDonar}
          columns="2"
        />
        <Section
          id="donar-bazar"
          tituloSection="Programas de Donación"
        ><Carousel list={donativosProgramas}/></Section>
        
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
