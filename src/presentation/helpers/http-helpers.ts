import { HttpResponse } from './../protocols/http';
export const BadRequest = (error : Error): HttpResponse<Error> =>({
  statusCode: 400,
  body: error
})

export const NotFound = (error : Error): HttpResponse<Error>=>({
  statusCode: 404,
  body: error
})

export const InternalError = (error : Error): HttpResponse<Error>=>({
  statusCode: 500,
  body: error
})