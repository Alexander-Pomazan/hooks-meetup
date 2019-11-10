import mockUsers from './mock-users.json'

const getRandomUser = (idx = Math.floor(Math.random() * 10)) =>
  mockUsers[idx % 10]

export const formatUserInitials = name =>
  name
    .split(' ')
    .slice(0, 2)
    .map(i => i.charAt(0).toUpperCase())
    .join('')

export const fetchUserProfileData = (time = 500) =>
  new Promise(resolve => setTimeout(() => resolve(getRandomUser()), time))
