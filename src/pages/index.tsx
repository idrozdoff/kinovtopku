import type { propFilmsList } from '@/types/utils';
import Header from '@/components/Header';
import FilmListItem from '@/components/FilmListItem';
import { NextPage } from 'next';

const Home: NextPage<propFilmsList> = ({ filmsList }) => {
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
};

Home.getInitialProps = async (): Promise<propFilmsList> => {
  const res = await fetch('http://localhost:3000/api/films');
  const json = await res.json();
  return { filmsList: json.filmsList };
};

export default Home;
