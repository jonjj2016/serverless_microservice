import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { SuccessResponse, ErrorResponse } from '../utility'

export class UserService {
  constructor() {}
  async Signup(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({})
    } catch (error) {
      return ErrorResponse(1000, error)
    }
  }

  async Signin(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({})
    } catch (error) {
      return ErrorResponse(1000, error)
    }
  }

  async Verify(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({})
    } catch (error) {
      return ErrorResponse(1000, error)
    }
  }

  async Profile(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({})
    } catch (error) {
      return ErrorResponse(1000, error)
    }
  }

  async Cart(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({})
    } catch (error) {
      return ErrorResponse(1000, error)
    }
  }

  async Payment(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({})
    } catch (error) {
      return ErrorResponse(1000, error)
    }
  }
}
