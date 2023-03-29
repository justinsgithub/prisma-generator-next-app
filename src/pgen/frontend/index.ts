import axios from 'axios';
import { ModelName, ModelOp, OpMethod, PrismaApi, ReqFuncParams } from '../pgen-save-types';
import { authorFrontend as author } from './authors';
import { bookFrontend as book } from './books';
import { genreFrontend as genre } from './genres';
import { seriesFrontend as series } from './series';

export async function requestFunction (params: ReqFuncParams<any, ModelOp, ModelName>) {
  const { url, method, data } = params
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
