import {
  FcHome,
  FcSearch,
  FcLike,
  FcGraduationCap,
  FcConferenceCall,
  FcShipped,
  FcSupport,
  FcCloseUpMode,
  FcBiotech,
  FcElectronics,
} from "react-icons/fc";
import {
  FaPaypal,
  FaBook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { TbHorseToy } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";

import {
  investigacion,
  corticoesteroides,
  terapias,
  programaEducativo,
  programaRecreacion,
  transporteAdaptadoModal,
  equipoEspecializadoModal,
  enseresRehabilitacionModal,
  inbursaModal,
  donacionesBazar,
  liEquiposElectronicos,
  liJuguetes,
  liLibros,
  liRopa,
  primerSlide,
} from "./textModals.tsx";
import { CardProps, SlideProps } from "../components";

//Navbar
export const navbarItems = [
  { children: "Inicio", to: "#" },
  { children: "Somos", to: "#somos" },
  { children: "Servicios", to: "#servicios" },
  { children: "Donativos", to: "#donar" },
  { children: "Contacto", to: "#footer" },
];

//Footer

export const listLinksContacto = [
  {
    className: "link-footer",
    children: "33 19 80 68 84",
    href: "https://wa.me/523319806884",
    icon: FaWhatsapp,
  },
  {
    className: "link-footer",
    children: "C. Román Morales 284, Oblatos, 44380 Guadalajara, Jal.",
    href: "https://maps.app.goo.gl/nYtYRmDrJZGmoLsCA",
    icon: FaMapMarkerAlt,
  },
  {
    className: "link-footer",
    children: "coordinacion@admo.org.mx",
    href: "mailto:coordinacion@admo.org.mx",
    icon: FaEnvelope,
  },
];

export const linkRedes = [
  {
    className: "link-footer",
    children: "Facebook",
    href: "https://facebook.com/ADMOAC",
    icon: FaFacebook,
  },
  {
    className: "link-footer",
    children: "Twitter",
    href: "https://twitter.com/ADMOAC",
    icon: FaTwitter,
  },
  {
    className: "link-footer",
    children: "Instagram",
    href: "https://www.instagram.com/admo_distrofia_muscular",
    icon: FaInstagram,
  },
];

export const accesosRapidos = [
  {
    className: "link-footer",
    children: "Inicio",
    to: "#",
  },
  {
    className: "link-footer",
    children: "Donativos",
    to: "#donar",
  },
  {
    className: "link-footer",
    children: "Servicios",
    to: "#servicios",
  },
];

//Cards

export const listCardsServicios: CardProps[] = [
  {
    icon: FcSearch,
    sizeIcon: 70,
    text: "Programa de investigación",
    heightCard: "150px",
    fontSizeText: "0.8rem",
    alignTextCard: "center",
    showModal: true,
    listParrafos: investigacion,
  },
  {
    icon: FcBiotech,
    sizeIcon: 70,
    text: "Protocolo con corticoesteroides",
    heightCard: "150px",
    fontSizeText: "0.8rem",
    alignTextCard: "center",
    showModal: true,
    listParrafos: corticoesteroides,
  },
  {
    icon: FcLike,
    sizeIcon: 70,
    text: "Terapias",
    heightCard: "150px",
    fontSizeText: "0.8rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: terapias,
  },
  {
    icon: FcGraduationCap,
    sizeIcon: 70,
    text: "Programa educativo",
    heightCard: "150px",
    fontSizeText: "0.8rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: programaEducativo,
  },
  {
    icon: FcConferenceCall,
    sizeIcon: 70,
    text: "Programa de recreación",
    heightCard: "150px",
    fontSizeText: "0.8rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: programaRecreacion,
  },
  {
    icon: FcShipped,
    sizeIcon: 70,
    text: "Transporte adaptado",
    heightCard: "150px",
    fontSizeText: "0.8rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: transporteAdaptadoModal,
  },
  {
    icon: FcSupport,
    sizeIcon: 70,
    text: "Prestamo de equipo especializado",
    heightCard: "150px",
    fontSizeText: "0.8rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: equipoEspecializadoModal,
  },
  {
    icon: FcCloseUpMode,
    sizeIcon: 70,
    text: "Enseres de rehabilitación",
    heightCard: "150px",
    fontSizeText: "0.8rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: enseresRehabilitacionModal,
  },
];

export const listCardDonar: CardProps[] = [
  {
    icon: FaPaypal,
    sizeIcon: 70,
    colorIcon: "white",
    text: "PAYPAL",
    heightCard: "200px",
    fontSizeText: "2rem",
    urlOut:
      "https://www.paypal.com/donate?token=GV8TNY_irPb2_OqYYxUvJQRQMXDZMVWgyQdDwR1UxVySAW6hJU2HxgZaJolAasRRBxo77nxubuDDWKAc",
    alignTextCard: "end",
  },
  {
    icon: CiBank,
    sizeIcon: 70,
    colorIcon: "white",
    text: "INBURSA",
    heightCard: "200px",
    fontSizeText: "2rem",
    alignTextCard: "start",
    showModal: true,

    listParrafos: inbursaModal,
  },
];

export const donativosBazar: CardProps[] = [
  {
    icon: FcHome,
    sizeIcon: 70,
    text: "Articulos del hogar",
    heightCard: "150px",
    fontSizeText: "0.9rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: donacionesBazar,
  },
  {
    icon: FcElectronics,
    sizeIcon: 70,
    text: "Equipos electronicos",
    heightCard: "150px",
    fontSizeText: "0.9rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: liEquiposElectronicos,
  },
  {
    icon: TbHorseToy,
    sizeIcon: 70,
    colorIcon: "white",
    text: "Juguetes",
    heightCard: "150px",
    fontSizeText: "0.9rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: liJuguetes,
  },
  {
    icon: FaBook,
    sizeIcon: 70,
    colorIcon: "white",
    text: "Libros",
    heightCard: "150px",
    fontSizeText: "0.9rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: liLibros,
  },
  {
    icon: GiClothes,
    colorIcon: "white",
    sizeIcon: 70,
    text: "Ropa en buen estado",
    heightCard: "150px",
    fontSizeText: "0.9rem",
    alignTextCard: "center",
    showModal: true,

    listParrafos: liRopa,
  },
];

//Carousel

export const novedades: SlideProps[] = [
  {
    imgSrc: "/admo/assets/que-es-dm-admo-ac.jpg",
    showModal: true,
    listParrafos: primerSlide,
  },
  {
    imgSrc: "/admo/assets/que-es-dm-admo-ac.jpg",
    showModal: true,
    listParrafos: primerSlide,
  },
  {
    imgSrc: "/admo/assets/que-es-dm-admo-ac.jpg",
    showModal: true,
    listParrafos: primerSlide,
  },
];

export const donativosProgramas: SlideProps[] = [
  { imgSrc: "/admo/assets/electronico.jpg", showModal: false },
  { imgSrc: "/admo/assets/llaves.jpg", showModal: false },
];
