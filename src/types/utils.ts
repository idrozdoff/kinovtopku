import { MouseEventHandler } from 'react';

export type Film = {
  name: string;
  release: string;
  poster: string;
  description: string;
  shoots: string[];
  crew: Crew[];
};

export type Crew = {
  type: 'creators' | 'starring';
  list: string[];
};

export type ArrowType = {
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export function isString(str: unknown): str is String {
  return typeof str === 'string';
}
