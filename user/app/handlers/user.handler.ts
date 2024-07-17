import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { UserService } from '../service/userService'
import { ErrorResponse } from '../utility'
import middy from '@middy/core'
import jsonBodyParser from '@middy/http-json-body-parser'

const service = new UserService()

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

export const signup = middy((event: APIGatewayProxyEventV2) => {
  return service.Signup(event)
}).use(jsonBodyParser())

export const signin = middy((event: APIGatewayProxyEventV2) => {
  return service.Signin(event)
}).use(jsonBodyParser())

export const verify = middy((event: APIGatewayProxyEventV2) => {
  return service.Verify(event)
}).use(jsonBodyParser())
export const profile = middy((event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext?.http?.method
  switch (httpMethod) {
    case 'GET':
      console.log('Here')
      return service.GetProfile(event)
    case 'PUT':
      return service.UpdateProfile(event)
    case 'POST':
      return service.CreateProfile(event)
    default:
      return ErrorResponse(404, 'Invalid Method!!!')
  }
}).use(jsonBodyParser())

export const cart = middy((event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext?.http?.method as HttpMethod
  switch (httpMethod) {
    case 'GET':
      return service.GetCart(event)
    case 'PUT':
      return service.UpdateCart(event)
    case 'POST':
      return service.CreateCart(event)
    default:
      return ErrorResponse(404, 'Invalid Method!!!')
  }
}).use(jsonBodyParser())

export const payment = middy((event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext?.http?.method as HttpMethod
  switch (httpMethod) {
    case 'GET':
      return service.GetPayment(event)
    case 'PUT':
      return service.UpdatePayment(event)
    case 'POST':
      return service.CreatePayment(event)
    default:
      return ErrorResponse(404, 'Invalid Method!!!')
  }
}).use(jsonBodyParser())
