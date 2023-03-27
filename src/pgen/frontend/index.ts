import axios from 'axios';
import { OpMethod } from '../pgen-types';
import { authorFrontend as author } from './authors';
import { bookFrontend as book } from './books';
import { genreFrontend as genre } from './genres';
import { seriesFrontend as series } from './series';

export async function requestFunction(req: { method: Lowercase<OpMethod>; data: any; url: string }) {
  const { url, method, data } = req
  if (method === 'get') {
    const response = await axios[method](url)
    return response.data
  }
  if (method === 'delete') {
    const response = await axios[method](url, { data })
    return response.data
  } else {
    const response = await axios[method](url, data)
    return response.data
  }
}

export const prismaFrontend = {
  author,
  book,
  genre,
  series,
}
