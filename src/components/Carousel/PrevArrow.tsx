import Image from 'next/image';
import { ArrowType } from '@/types/utils';
import arrowLeft from '../../assets/icons/arrowLeft.svg';

export default function PrevArrow(props: ArrowType) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[0%] left-[-30px] cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
      onClick={onClick}
    >
      <Image
        src={arrowLeft}
        alt="arrowLeft"
        className="w-[30px] h-[175px]"
        width={30}
        height={175}
      />
    </div>
  );
}
