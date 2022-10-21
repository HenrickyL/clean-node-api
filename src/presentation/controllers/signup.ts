import {MissingParamError,InvalidParamError, ServerError } from '../errors'
import { 
  HttpRequest, 
  HttpResponse,
  EmailValidator,
  Controller } from "../protocols"
import { BadRequest, InternalError } from './../helpers/http-helpers';

export class SignUpController implements Controller<any>{
  private readonly _emailValidator : EmailValidator;

  constructor(emailValidator: EmailValidator){
    this._emailValidator = emailValidator;
  }

  handle(httpRequest: HttpRequest<any>): HttpResponse<any>{
   try{ 
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
      //
      return {
        statusCode:200,
        body: {}
      }
    }catch(error){
      return InternalError()
    }
  }
}