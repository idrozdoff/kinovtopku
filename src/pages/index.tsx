import type { Film } from '@/types/utils';
import Header from '@/components/Header';
import FilmListItem from '@/components/FilmListItem';
import { AppProps, AppContext } from 'next/app';
import api from '@/apiSingleton';

export type PropsFilmsList = {
  filmsList: Film[];
};

export function FilmsList({ filmsList }: PropsFilmsList & AppProps) {
  return (
    <>
      <Header />
      <div className="bg-white px-5">
        {filmsList.map((item, index) => (
          <FilmListItem
            item={item}
            index={index}
            key={item.name}
          />
        ))}
      </div>
    </>
  );
}

FilmsList.getInitialProps = async (
  context: AppContext
): Promise<PropsFilmsList | unknown> => {
  let initialProps: PropsFilmsList = { filmsList: [] };
  const res = await api.films.fetchFilms();
  if (Array.isArray(res?.filmsList)) {
    initialProps.filmsList = res.filmsList;
  }
  return initialProps;
};

export default FilmsList;
