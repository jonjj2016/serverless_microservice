import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { UserService } from '../service/userService'

const service = new UserService()

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
  return await service.Profile(event)
}

export const cart = async (event: APIGatewayProxyEventV2) => {
  return await service.Cart(event)
}

export const payment = async (event: APIGatewayProxyEventV2) => {
  return await service.Payment(event)
}
