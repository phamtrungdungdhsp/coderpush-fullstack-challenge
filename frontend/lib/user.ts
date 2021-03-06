import useSWR from 'swr'
import { fetchingAPI } from './index'

export const getUsers = (page = 1, limit = 10) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BE_URL}/users?page=${page}&limit=${limit}`, fetchingAPI)
  
  return {
    listUser: data?.data || [],
    isLoading: !error && !data,
    isError: error
  }
}

export const getMatchedUser = (page = 1, limit = 10) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BE_URL}/user/match?page=${page}&limit=${limit}`, fetchingAPI)
  
  return {
    listUser: data?.data || [],
    isLoading: !error && !data,
    isError: error
  }
}

export const getLikedUser = (page = 1, limit = 10) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BE_URL}/user/like?page=${page}&limit=${limit}`, fetchingAPI)
  
  return {
    listUser: data?.data || [],
    isLoading: !error && !data,
    isError: error
  }
}

export const signIn = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = await fetchingAPI(`${process.env.NEXT_PUBLIC_BE_URL}/sign-in`, { method: 'POST' })
  localStorage.setItem('userId', data.id.toString())
}

export const likePerson = async (targetId: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = await fetchingAPI(`${process.env.NEXT_PUBLIC_BE_URL}/user/like`, {
    method: 'POST',
    body: JSON.stringify({ targetId })
  })
  return data
}

export const passPerson = async (targetId: number) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  await fetchingAPI(`${process.env.NEXT_PUBLIC_BE_URL}/user/pass`, { method: 'POST', body: JSON.stringify({ targetId }) })
}