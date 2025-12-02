'use server'

import { revalidateTag } from 'next/cache'

export async function revalidateTime() {
  revalidateTag('time', 'max')
  return { success: true, revalidatedAt: new Date().toISOString() }
}

export async function revalidateUser() {
  revalidateTag('server-action-user-1', 'max')
  revalidateTag('server-action-user-2', 'max')
  return { success: true, revalidatedAt: new Date().toISOString() }
}


export async function revalidateAll() {
  revalidateTag('user', 'max')
  revalidateTag('post', 'max')
  revalidateTag('server-action-user-1', 'max')
  revalidateTag('server-action-user-2', 'max')
  return { success: true, revalidatedAt: new Date().toISOString() }
}
