import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { UserService } from '../service/userService'
import { ErrorResponse } from '../utility'

const service = new UserService()

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

export const signup = async (event: APIGatewayProxyEventV2) => {
  return await service.Signup(event)
}

export const signin = async (event: APIGatewayProxyEventV2) => {
  return await service.Signin(event)
}

export const verify = async (event: APIGatewayProxyEventV2) => {
  return await service.Verify(event)
}
export const profile = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext?.http?.method
  switch (httpMethod) {
    case 'GET':
      console.log('Here')
      return await service.GetProfile(event)
    case 'PUT':
      return await service.UpdateProfile(event)
    case 'POST':
      return await service.CreateProfile(event)
    default:
      return ErrorResponse(404, 'Invalid Method!!!')
  }
}

export const cart = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext?.http?.method as HttpMethod
  switch (httpMethod) {
    case 'GET':
      return await service.GetCart(event)
    case 'PUT':
      return await service.UpdateCart(event)
    case 'POST':
      return await service.CreateCart(event)
    default:
      return ErrorResponse(404, 'Invalid Method!!!')
  }
}

export const payment = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext?.http?.method as HttpMethod
  switch (httpMethod) {
    case 'GET':
      return await service.GetPayment(event)
    case 'PUT':
      return await service.UpdatePayment(event)
    case 'POST':
      return await service.CreatePayment(event)
    default:
      return ErrorResponse(404, 'Invalid Method!!!')
  }
}
