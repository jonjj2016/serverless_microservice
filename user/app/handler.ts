import { APIGatewayProxyEventV2 } from 'aws-lambda'

export const signup = async (event: APIGatewayProxyEventV2) => {
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '.' },
    body: JSON.stringify({
      message: 'Signup Message',
      data: {},
    }),
  }
}

export const signin = async (event: APIGatewayProxyEventV2) => {
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '.' },
    body: JSON.stringify({
      message: 'Signin Message',
      data: {},
    }),
  }
}
export const verify = async (event: APIGatewayProxyEventV2) => {
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '.' },
    body: JSON.stringify({
      message: 'Verify Message',
      data: {},
    }),
  }
}
export const profile = async (event: APIGatewayProxyEventV2) => {
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '.' },
    body: JSON.stringify({
      message: 'Profile Message',
      data: {},
    }),
  }
}

export const cart = async (event: APIGatewayProxyEventV2) => {
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '.' },
    body: JSON.stringify({
      message: 'Cart Message',
      data: {},
    }),
  }
}

export const payment = async (event: APIGatewayProxyEventV2) => {
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '.' },
    body: JSON.stringify({
      message: 'account Message',
      data: {},
    }),
  }
}
