// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import EventData from '../../utils/EventData.json'
import {EventDataType} from '../../types'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EventDataType[]>
) {
  res.status(200).json(EventData)
}
