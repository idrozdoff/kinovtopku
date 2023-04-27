// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ApiFilmsData } from '@/types/utils';
import { filmsList } from '@/utils/mock';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiFilmsData>
) {
  res.status(200).json({ filmsList: filmsList });
}
