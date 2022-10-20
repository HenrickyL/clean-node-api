import { BadRequest } from './../helpers/http-helpers';
import { MissingParamError } from "../errors/missing-param-error"
import { HttpRequest, HttpResponse } from "../protocols/http"

export class SignUpController{
  handle(httpRequest: HttpRequest<any>): HttpResponse<any>{
    if(!httpRequest.body.name){
      return BadRequest(new MissingParamError('name'))
    }
    if(!httpRequest.body.email){
      return BadRequest(new MissingParamError('email'))
    }
    
  }
}