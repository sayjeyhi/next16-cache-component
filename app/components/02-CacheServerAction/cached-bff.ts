'use cache'
import {sleep} from "@/app/utils";

export interface User {
  id: number
  name: string
  email: string
  fetchedAt: string
}

export async function cachedFetchUser(time = 200): Promise<User> {
  await sleep(time)
  const fetchedAt = new Date().toLocaleString()

  return {
    id: 1,
    name: 'Cached SA John Doe',
    email: 'sa-john@example.com',
    fetchedAt
  }
}
