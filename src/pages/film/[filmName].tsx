import type { NotFound, PropFilm, PagePropFilm } from '@/types/utils';
import Image from 'next/image';
import Header from '@/components/Header';
import { GetServerSidePropsContext, GetServerSideProps } from 'next';
import { crewType } from '@/utils/utils';
import Carousel from '@/components/Carousel/Carousel';

function Film({ film }: PropFilm) {
  const { poster, name, description, crew, shoots } = film;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="px-5 flex sm:flex-row flex-col">
        <Image
          src={poster}
          alt="poster"
          className="flex my-5 mx-auto sm:m-5 sm:ml-0 w-[200px] h-[300px]"
          width={200}
          height={300}
          placeholder="blur"
          blurDataURL="/loadingImg.png"
        />
        <div className="flex justify-center flex-col text-sm md:text-base lg:text-lg mb-[10px]">
          <p>
            Название: <b>{name}</b>
          </p>
          <p>{`Описание: ${description}`}</p>
          <div className="flex flex-row text-gray-500">
            {crew.map(group => (
              <div
                className="mr-5"
                key={group.type}
              >
                <p>{crewType[group.type]}</p>
                {group.list.map(name => (
                  <p key={name}>{name}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-[50px]">
        <Carousel links={shoots} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  PagePropFilm | NotFound
> = async (context: GetServerSidePropsContext) => {
  const { filmName } = context.query;
  const res = await fetch(`http://localhost:3000/api/film/${filmName}`);
  const data = await res.json();
  if (data?.film?.notFound) {
    return data;
  }

  return { props: { film: data.film } };
};

export default Film;
