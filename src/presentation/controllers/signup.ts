import { BadRequest } from './../helpers/http-helpers';
import { MissingParamError } from "../errors/missing-param-error"
import { HttpRequest, HttpResponse } from "../protocols/http"

export class SignUpController{
  handle(httpRequest: HttpRequest<any>): HttpResponse<any>{
    const error = this.ValidateFields(httpRequest);
    if(error)
      return error
    return {
      statusCode:200,
      body: {}
    }
  }

  private ValidateFields(httpRequest: HttpRequest<any>): HttpResponse<any>{
    const requiredField = ['name', 'email','password', 'passwordConfirmation']
    for(const field of requiredField){
      if(!httpRequest.body[field]){
        return BadRequest(new MissingParamError(field))
      }
    }
  }
}