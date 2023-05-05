// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Film } from '@/types/utils';
import { filmsList } from '@/utils/mock';

type NotFound = {
  notFound: boolean;
};

type FilmData = {
  film: Film | NotFound;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FilmData>
) {
  const { filmName } = req.query;
  let film: Film | NotFound = { notFound: true };
  if (filmName) {
    const filtered = filmsList.filter(i => i.name === filmName);
    if (filtered.length) {
      film = filtered[0];
    }
    res.status(200).json({ film: film });
  } else res.status(404).json({ film: film });
}
