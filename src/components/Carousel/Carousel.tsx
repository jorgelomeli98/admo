import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Carousel.css";
import { JSX, useState } from "react";
import { Modal } from "../Modal/Modal";

export interface SlideProps {
  imgSrc: string;
  showModal: boolean;
  listParrafos?: JSX.Element[];
}

export interface ListSlidesProps {
  list: SlideProps[];
}

export const Carousel = ({ list }: ListSlidesProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [currentModal, setCurrentModal] = useState<JSX.Element[] | undefined>(
    undefined
  );

  const handleClick = (item: SlideProps) => {
    if (item.showModal) {
      setCurrentModal(item.listParrafos || []);
      setOpenModal(true);
    }
  };

  return (
    <>
      <Swiper
        className="carousel"
        modules={[Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
      >
        {list.map((item, index) => (
          <>
            <SwiperSlide
              key={`carousel-${index}`}
              onClick={() => handleClick(item)}
              className="slide"
              
            >
              <img src={item.imgSrc} alt={`${index}`}/>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      {openModal && (
        <Modal
          onClose={() => setOpenModal(false)}
          listParrafosModal={currentModal}
        />
      )}
    </>
  );
};
