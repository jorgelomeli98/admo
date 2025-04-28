import { JSX } from "react";
import { Button } from "../components";

const negritas: React.CSSProperties = {
  fontWeight: "bold",
};

const by = (text: string) => <span className="negritas" style={negritas}>{text}</span>; //by = bolify jeje

//Servicios
export const investigacion: JSX.Element[] = [
  <h3>Programa de investigacion</h3>,
  <p>
    Con el fin de mejorar la calidad de vida de los niños con{" "}
    {by("distrofia muscular")}, ya con un diagnóstico certero de la {by("DMD")},
    contamos con un protocolo médico, que brinda la oportunidad de retrasar la
    pérdida de deambulación en beneficiarios de entre 6 y 12 años de edad.
  </p>,
  <p>
    El tratamiento que brindamos es un seguimiento médico integral, los
    {by(" corticoesteroides")} los administra el pediatra especializado
    mensualmente, pero lleva un seguimiento complementario con estudios de
    laboratorio, estudio
    {by(" cardiológico, densitometrías, espirometrias, oftalmología,")} pruebas
    de valoración física: caminata y movimiento.
  </p>,
];

export const corticoesteroides: JSX.Element[] = [
  <h3>Protocolo con corticoesteroides</h3>,
  <p>
    Con el fin de mejorar la calidad de vida de los niños con distrofia
    muscular, ya con un {by("diagnóstico certero de la DMD")}, contamos con un
    protocolo médico, que brinda la oportunidad de retrasar la{" "}
    {by("pérdida de deambulación")} en beneficiarios de entre{" "}
    {by("6 y 12 años de edad")}.
  </p>,
  <p>
    El tratamiento que brindamos es un seguimiento médico integral, los
    corticoesteroides los administra el pediatra especializado mensualmente,
    pero lleva un seguimiento complementario con estudios de laboratorio,
    estudio cardiológico, densitometrías, espirometrias, oftalmología, pruebas
    de valoración física: caminata y movimiento.
  </p>,
];

export const terapias: JSX.Element[] = [
  <h3>Terapias</h3>,
  <h3>Terapia Respiratoria</h3>,
  <p>
    Consiste en ayudar a expulsar flemas, así como también, ayuda a fortalecer
    la capacidad respiratoria de nuestros beneficiarios, siempre apoyados con
    equipos médicos especializados, tales como chaleco vibrador, máquina de tos,
    y los ventiladores BIPAP.
  </p>,
  <h3>Terapia física</h3>,
  <p>
    Esta consiste es mantener en movimiento los músculos así como, el
    estiramiento de los mismos tratando de evitar contracturas.
  </p>,
  <h3>Hidroterapia</h3>,
  <p>
    Aprovechando las ventajas que el agua tibia ofrece al movimiento y al
    fortalecimiento de los músculos, brindamos la posibilidad de recibir
    terapias en esta área, a beneficiarios candidatos bajo la supervisión del
    área médica.`;
  </p>,
];
export const programaEducativo: JSX.Element[] = [
  <h3>Programa educativo</h3>,
  <p>
    A lo largo de nuestro actuar hemos trabajado para que nuestros beneficiarios
    continuén estudiando, hoy apostamos a que terminen sus estudios básicos de
    manera regular, es por eso que {by("Oruga")}, nace con el objetivo de
    integrar la cultura de discapacidad en escuelas públicas, brindar a los
    docentes herramientas para una enseñanza-aprendizaje adaptado a las
    capacidades físicas de nuestros beneficiarios y la integración y
    corresponsabilidad de la familia ante las necesidades específicas del
    beneficiario.
  </p>,
  <p>
    {by("Impulso ADMO")} ofrece alternativas para continuar o culminar sus
    estudios a beneficiarios, que por las condiciones físicas, de salud y
    económicas, pausaron sus estudios; se trata del apoyo de {by("INEEJAD")} (
    {by("Instituto Estatal parala Educación de Jóvenes y Adultos")}) para
    terminar primaria y secundaria, convenio con el{" "}
    {by("Tecnológico de Monterrey")} en el cual se ofrecen becas para
    preparatoria en línea y convenio en {by("Tec Milenio")}, para ofrecer a
    nuestros beneficiarios carreras universitarias.
  </p>,

  <p>
    {by("Talleres")}: Para desarrollar su potencial {by("emocional")},{" "}
    {by("intelectual")} y {by("artistico")}, en {by("ADMO, A.C")} ofrecemos a
    nuestros beneficiarios, una gama de talleres afines a los intereses y
    posibilidades de cada uno de nuestros niños y jóvenes, tales como taller de
    música, donde se conformó el grupo de {by("Los Big Boys")}, círculos de
    lectura, de regularización de lenguaje, ingles básico y pintura.
  </p>,
];
export const programaRecreacion: JSX.Element[] = [
  <h3>Programa de recreacion</h3>,
  <p>
    Para un servicio {by("integral")}, la parte social es indispensable para
    nuestros beneficiarios, por lo que en {by("ADMO A.C.")} trabajamos para
    promover la {by("inclusión")}, es por eso que nuestro programa de recreación
    con la colaboración de la red de apoyo de diferentes instituciones y de
    voluntarios, nuestros niños y jóvenes, asisten a diferentes lugares
    recreativos, culturales y deportivos.
  </p>,
];

export const transporteAdaptadoModal: JSX.Element[] = [
  <h3>Transporte adaptado</h3>,
  <p>
    Brindamos a nuestros beneficiarios un servicio de{" "}
    {by("transporte adaptado")} a sus necesidades; confiable, seguro y de
    calidad, ya que la{" "}
    {by(
      "principal barrera para este tipo de discapacidad es la falta de accesibilidad a los medios de transporte ya existentes"
    )}
    .
  </p>,
  <p>
    No solamente proporcionamos este servicio para las actividades diarias de
    nuestros beneficiarios, sino también, al seguimiento médico de cada
    beneficiario y a los diferentes eventos fuera y dentro de {by("ADMO, A.C.")}
  </p>,
];

export const equipoEspecializadoModal: JSX.Element[] = [
  <h3>Prestamo de equipo especializado</h3>,
  <p>
    Los equipos médicos especializados de terapias pulmonares, son de alto costo
    económico, en asociación de distrofia contamos con equipos que ponemos al
    servicio y disposición de los beneficiarios cuando por indicaciones médicas
    sea necesario, como las máquinas de tos, y los ventiladores BIPAB
  </p>,
];

export const enseresRehabilitacionModal: JSX.Element[] = [
  <h3>Enseres de rehabilitación</h3>,
  <p>
    A través de distintas instituciones públicas y privadas, otorgamos la
    posibilidad de que cada beneficiario cuente con enseres que le faciliten su
    vida cotidiana en su hogar, como en su vida diaria, sillas de ruedas
    manuales, eléctricas, sillas de baño, grúas, rampas, de fácil acceso a las
    familias de los beneficiarios.
  </p>,
];

//Donaciones
export const inbursaModal: JSX.Element[] = [
  <h3>Datos INBURSA</h3>,
  <p>{by("Cuenta:")} 500 126 80 946</p>,
  <p>{by("Clabe")}: 036 32050 012680 9465</p>,
];

//Donaciones Bazar

export const donacionesBazar: JSX.Element[] = [
  <ul>
    <li key="camas">Camas individuales o matrimoniales en buen estado</li>
    <li key="colchones">Colchones limpios y sin daños</li>
    <li key="sillas-mesas">Sillas y mesas</li>
    <li key="ropa-cama">Ropa de cama (sábanas, cobijas, edredones)</li>
    <li key="toallas-cortinas">Toallas y cortinas</li>
    <li key="electrodomesticos">
      Electrodomésticos pequeños (licuadoras, microondas, planchas)
    </li>
    <li key="utensilios">
      Utensilios de cocina (platos, vasos, cubiertos, ollas)
    </li>
    <li key="lamparas">Lámparas y focos funcionales</li>
    <li key="roperos">Roperos o muebles para almacenamiento</li>
    <li key="ventiladores">Ventiladores o calentadores portátiles</li>
    <li key="alfombras">Alfombras, tapetes o cojines</li>
    <li key="limpieza">
      Artículos de limpieza (cubetas, escobas, trapeadores nuevos o seminuevos)
    </li>
  </ul>,
];

export const liEquiposElectronicos: JSX.Element[] = [
  <ul>
    <li key="laptop">Laptops o computadoras de escritorio</li>
    <li key="tablet">Tabletas</li>
    <li key="celular">Teléfonos celulares funcionales</li>
    <li key="tv">Televisores</li>
    <li key="impresora">Impresoras</li>
    <li key="radio">Radios o reproductores de música</li>
    <li key="monitor">Monitores de computadora</li>
    <li key="teclado-mouse">Teclados y mouse</li>
    <li key="consola">Consolas de videojuegos</li>
    <li key="proyector">Proyectores</li>
    <li key="parlantes">Parlantes o bocinas</li>
    <li key="cargadores">Cargadores y cables originales</li>
    <li key="regulador">Reguladores de voltaje o no breaks</li>
  </ul>,
];

export const liJuguetes: JSX.Element[] = [
  <ul>
    <li key="muñecas">Muñecas y muñecos en buen estado</li>
    <li key="peluches">Peluches limpios</li>
    <li key="juegos-mesa">Juegos de mesa completos</li>
    <li key="rompecabezas">Rompecabezas con todas sus piezas</li>
    <li key="autos">Carritos o pistas de autos</li>
    <li key="bloques">Bloques de construcción (tipo LEGO)</li>
    <li key="libros-cuentos">Libros de cuentos infantiles</li>
    <li key="juguetes-musicales">Juguetes musicales</li>
    <li key="disfraces">Disfraces infantiles</li>
    <li key="juguetes-educativos">Juguetes educativos</li>
    <li key="juguetes-bebe">Juguetes para bebés (mordederas, sonajas)</li>
    <li key="bicicletas">Bicicletas pequeñas o triciclos en buen estado</li>
  </ul>,
];

export const liLibros: JSX.Element[] = [
  <ul>
    <li key="libros-infantiles">Libros infantiles ilustrados</li>
    <li key="cuentos">Cuentos para todas las edades</li>
    <li key="novelas">Novelas juveniles y de adultos</li>
    <li key="libros-educativos">
      Libros educativos (matemáticas, ciencias, historia)
    </li>
    <li key="enciclopedias">Enciclopedias completas y actuales</li>
    <li key="diccionarios">Diccionarios (español, inglés, bilingües)</li>
    <li key="libros-colorear">Libros para colorear</li>
    <li key="libros-autoayuda">Libros de autoayuda y desarrollo personal</li>
    <li key="biografias">Biografías y libros históricos</li>
    <li key="revistas-educativas">Revistas educativas y culturales</li>
    <li key="libros-manualidades">
      Libros de manualidades y actividades creativas
    </li>
    <li key="libros-religiosos">
      Libros religiosos (cuentos bíblicos, historias espirituales)
    </li>
  </ul>,
];

export const liRopa: JSX.Element[] = [
  <ul>
    <li key="ropa-ninos">
      Ropa para niños y niñas (camisetas, pantalones, vestidos)
    </li>
    <li key="ropa-bebes">Ropa para bebés (mamelucos, bodies, gorritos)</li>
    <li key="ropa-adultos">
      Ropa para adultos (camisas, blusas, jeans, suéteres)
    </li>
    <li key="ropa-invierno">
      Ropa de invierno (chamarras, abrigos, bufandas, guantes)
    </li>
    <li key="calzado">
      Calzado en buen estado (zapatos, tenis, sandalias, botas)
    </li>
    <li key="ropa-deportiva">Ropa deportiva (pants, playeras, shorts)</li>
    <li key="ropa-interior-nueva">
      Ropa interior nueva (calzones, calcetas, brasieres)
    </li>
    <li key="pijamas">Pijamas completas y en buen estado</li>
    <li key="accesorios">Accesorios (cinturones, gorras, mochilas)</li>
    <li key="uniformes-escolares">Uniformes escolares en buen estado</li>
    <li key="ropa-formal">Ropa formal (sacos, vestidos, corbatas)</li>
  </ul>,
];

export const primerSlide: JSX.Element[] = [
  <p>Hola</p>, 
  <p>Primer Modal</p>,
  <Button classNameCustom="button-custom" label="Enviar" onClick={() => {}}/>
]