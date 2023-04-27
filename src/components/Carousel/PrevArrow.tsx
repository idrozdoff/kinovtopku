import Image from 'next/image';
import { ArrowType } from '@/types/utils';

export const PrevArrow = (props: ArrowType) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[0%] left-[-30px] cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
      onClick={onClick}
    >
      <Image
        src="/icons/arrowLeft.svg"
        alt="arrowLeft"
        className="w-[30px] h-[175px]"
        width={30}
        height={175}
      />
    </div>
  );
};
