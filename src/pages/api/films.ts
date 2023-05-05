// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Film } from '@/types/utils';
import { filmsList } from '@/utils/mock';

type FilmsData = {
  filmsList: Film[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FilmsData>
) {
  res.status(200).json({ filmsList: filmsList });
}
