import Link from 'next/link';
import Image from 'next/image';
import { PropFilmList } from '@/types/utils';
import { trimStr } from '@/utils/utils';

const FilmListItem = ({ item, index }: PropFilmList) => {
  return (
    <Link href={`/film/${item.name}`}>
      <div className="cursor-pointer flex border-solid border-b border-gray-300 hover:bg-gray-100 transition-colors duration-300">
        <div className="flex items-center small:ml-[20px] ml-[10px]">
          {index + 1}
        </div>
        <Image
          src={item.poster}
          alt="poster"
          className="inline m-5 w-[100px] h-[150px]"
          width={100}
          height={150}
          placeholder="blur"
          blurDataURL="/loadingImg.png"
        />
        <div className="flex justify-center flex-col text-sm md:text-base lg:text-lg">
          <p>
            Название: <b>{item.name}</b>
          </p>
          <p>Дата выхода: {item.release}</p>
          <p className="text-gray-500">{trimStr(item.description, 150)}</p>
        </div>
      </div>
    </Link>
  );
};

export default FilmListItem;
