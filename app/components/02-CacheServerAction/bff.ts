import {sleep} from "@/app/utils";

export interface User {
  id: number
  name: string
  email: string
}

export async function fetchUser(time = 200): Promise<User> {
  await sleep(time)

  return {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  }
}
