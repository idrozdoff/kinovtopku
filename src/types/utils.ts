import { ReactNode } from 'react';
import { MouseEventHandler } from 'react';

export declare type Film = {
  name: string;
  release: string;
  poster: string;
  description: string;
  shoots: string[];
  crew: Crew[];
};

export declare type Crew = {
  type: 'creators' | 'starring';
  list: string[];
};

export declare type ApiFilmsData = {
  filmsList: Film[];
};

export declare type ApiFilmData = {
  film: Film | NotFound;
};

export type propFilmsList = {
  filmsList: Film[];
};

export type NotFound = {
  notFound: boolean;
};

export type PropFilmList = {
  item: Film;
  index: number;
};

export type PagePropFilm = {
  props: PropFilm;
};

export type PropFilm = {
  film: Film;
};

export type Props = {
  children: ReactNode;
};

export type ArrowType = {
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export type PropsCarousel = {
  links: string[];
};

export type CrewTypeObject = {
  'starring': string;
  'creators': string;
};
