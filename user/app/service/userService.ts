import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { SuccessResponse, ErrorResponse } from '../utility'

export class UserService {
  constructor() {}
  async Signup(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ message: 'user created', data: {} })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }

  async Signin(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user signed in' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }

  async Verify(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user verified' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }
  // User Profile Methods
  async GetProfile(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user profile get' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }

  async UpdateProfile(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user profile Patched' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }
  async CreateProfile(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user profile created' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }
  // Cart Crud Operation Methods
  async CreateCart(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user cart Create' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }
  async GetCart(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user cart Get' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }
  async UpdateCart(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user cart Update' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }
  // Payment Crud Operation Methods
  async CreatePayment(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user payment Create' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }
  async UpdatePayment(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user payment Update' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }
  async GetPayment(event: APIGatewayProxyEventV2) {
    try {
      return SuccessResponse({ data: {}, message: 'user payment Get' })
    } catch (error) {
      return ErrorResponse(500, error)
    }
  }
}
