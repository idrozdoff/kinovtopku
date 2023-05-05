import Slider from 'react-slick';
import Image from 'next/image';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import {
  ImageDialogContext,
  ImageDialogContextType,
} from '@/context/ContextWrapper';
import { useContext } from 'react';

type PropsCarousel = {
  links: string[];
};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  arrows: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1195,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 591,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
      },
    },
  ],
};

export default function Carousel({ links }: PropsCarousel) {
  const { setImageModal } = useContext(
    ImageDialogContext
  ) as ImageDialogContextType;
  const handleOpenPreview = (link: string) => {
    setImageModal({
      isOpen: true,
      link,
    });
  };
  return (
    <Slider {...settings}>
      {links.map((link, index) => (
        <div
          key={link}
          className="outline-0"
          onClick={() => handleOpenPreview(link)}
        >
          <Image
            src={link}
            alt={`image ${index}`}
            className="flex mx-auto px-[12px] min-w-[250px] min-h-[175px] cursor-pointer"
            width={250}
            height={175}
            placeholder="blur"
            blurDataURL="/loadingImg.png"
          />
        </div>
      ))}
    </Slider>
  );
}
