const formatResponse = (statusCode: number, message: string, data: unknown) => {
  if (data) {
    return {
      statusCode,
      headers: { 'Access-Control-Allow-Origin': '.' },
      body: JSON.stringify({
        message,
        data,
      }),
    }
  } else {
    return {
      statusCode,
      headers: { 'Access-Control-Allow-Origin': '.' },
      body: JSON.stringify({
        message,
      }),
    }
  }
}

export const SuccessResponse = ({
  data,
  message = 'success',
}: {
  data: unknown
  message?: string
}) => {
  return formatResponse(200, message, data)
}
export const ErrorResponse = (code = 1000, error: unknown) => {
  if (Array.isArray(error)) {
    const errorObject = error[0].constraints
    const errorMessage =
      errorObject[Object.keys(errorObject)[0]] || 'Error Occured'
    return formatResponse(code, errorMessage, null)
  }
  return formatResponse(code, `${error}`, null)
}
