import {sleep} from "@/app/utils";

export interface User {
  id: number
  name: string
  email: string
  fetchedAt: string
}

export async function cachedFetchUserInFn(time = 200): Promise<User> {
  'use cache'
  await sleep(time)
  const fetchedAt = new Date().toLocaleString()

  return {
    id: 1,
    name: 'Cached SA John Doe',
    email: 'sa-john@example.com',
    fetchedAt
  }
}
