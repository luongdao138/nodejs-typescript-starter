import dotenv from 'dotenv-safe'

dotenv.config()

export function forEach<T = any>(arr: T[], callback: (item: T, arr: T[], index: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], arr, i)
  }
}
