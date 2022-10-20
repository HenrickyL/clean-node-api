import { HttpRequest, HttpResponse } from "presentation/protocols/http"

export class SignUpController{
  handle(httpRequest: HttpRequest<any>): HttpResponse<any>{
    if(!httpRequest.body.name){
      return {
        statusCode:400,
        body: new Error('Missing param: name')
      }
    }
    if(!httpRequest.body.email){
      return {
        statusCode:400,
        body: new Error('Missing param: email')
      }
    }
    
  }
}