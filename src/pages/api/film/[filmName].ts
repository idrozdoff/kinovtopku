// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Film, NotFound, ApiFilmData } from '@/types/utils';
import { filmsList } from '@/utils/mock';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiFilmData>
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
