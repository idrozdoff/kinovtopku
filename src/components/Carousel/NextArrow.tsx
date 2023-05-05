import Image from 'next/image';
import { ArrowType } from '@/types/utils';
import arrowRight from '../../assets/icons/arrowRight.svg';

export default function NextArrow(props: ArrowType) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[0%] right-[-30px] cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
      onClick={onClick}
    >
      <Image
        src={arrowRight}
        alt="arrowRigth"
        className="w-[30px] h-[175px]"
        width={30}
        height={175}
      />
    </div>
  );
}
