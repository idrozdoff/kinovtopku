import type { Film } from '@/types/utils';
import { isString } from '@/types/utils';
import Image from 'next/image';
import Header from '@/components/Header';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { crewType } from '@/utils/utils';
import Carousel from '@/components/Carousel/Carousel';
import api from '@/apiSingleton';

type PropsFilm = {
  film: Film;
};

export default function Film({ film }: PropsFilm) {
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

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PropsFilm>> {
  const { filmName } = context.query;
  if (isString(filmName)) {
    const res = await api.films.fetchFilmInfo(filmName);
    if (res?.film?.notFound) {
      return res;
    }
    return { props: { film: res.film } };
  } else {
    console.log('Wrong params');
  }
  return { notFound: true };
}
