import { InvalidParamError } from '../errors/invalid-param-error';
import { EmailValidator } from '../protocols/email-validator';
import { Controller } from './../protocols/controller';
import { BadRequest } from './../helpers/http-helpers';
import { MissingParamError } from "../errors/missing-param-error"
import { HttpRequest, HttpResponse } from "../protocols/http"

export class SignUpController implements Controller<any>{
  private readonly _emailValidator : EmailValidator;

  constructor(emailValidator: EmailValidator){
    this._emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest<any>): HttpResponse<any>{
    //validateFields
    const requiredField = ['name', 'email','password', 'passwordConfirmation']
    for(const field of requiredField){
      if(!httpRequest.body[field]){
        return BadRequest(new MissingParamError(field))
      }
    }
    if(!this._emailValidator.isValid(httpRequest.body.email)){
        return BadRequest(new InvalidParamError('email'))
    }

    
    return {
      statusCode:200,
      body: {}
    }
  }
}