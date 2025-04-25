import {
  Navbar,
  Footer,
  MaquinaEscribir,
  Section,
  Somos,
} from "../../components";

import {
  navbarItems,
  listCardsServicios,
  listCardDonar,
  donativosBazar,
} from "../../data";

const Home = () => {
  return (
    <div className="page-container">
      <header>
        <Navbar items={navbarItems} />
      </header>
      <main className="content-wrap">
        <MaquinaEscribir text="¿Te imaginas un mundo donde no pudieras moverte?" />
        <Somos />
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
          tituloSection="Donativos al Bazar"
          cards={donativosBazar}
          columns="5"
          children={
            <>
              <h2>
                Recibimos los donativos de Lunes a Viernes de 9:00 a 17:00 hr.
              </h2>
              <h2>
                Si el donativo es muy grande y no puedes traerlo a nuestras
                instalaciones, nosotros vamos por ellos.
              </h2>
            </>
          }
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
