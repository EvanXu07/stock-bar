import { getSdkErrorCode, HttpError, StockSDK } from 'stock-sdk'

export const sdk = new StockSDK({
  timeout: 10000,
  retry: {
    maxRetries: 3,
    baseDelay: 800,
  },
  rateLimit: {
    requestsPerSecond: 5,
    maxBurst: 10,
  },
})

function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof HttpError) {
    return `请求失败 (${error.status})`
  }
  if (error instanceof Error) {
    return error.message
  }
  return fallback
}

export async function wrap<T>(fn: () => Promise<T>, label: string): Promise<T> {
  try {
    return await fn()
  }
  catch (error) {
    const msg = getErrorMessage(error, `获取${label}失败`)
    const code = getSdkErrorCode(error)
    console.error(`[api] ${msg}${code ? ` (${code})` : ''}`)
    throw error
  }
}
