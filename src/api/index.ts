import FilmApi from './FilmApi';

type ApiFactory = {
  apiPrefix?: string;
};

export default function apiFactory({ apiPrefix }: ApiFactory = {}) {
  if (!apiPrefix) {
    throw new Error('apiPrefix is required');
  }

  return {
    films: new FilmApi({ prefix: apiPrefix }),
  };
}
