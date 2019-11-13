import React from 'react'
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

export const Scale = ({ children, scale }) => {
  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}>
      {children}
    </div>
  )
}

Scale.defaultProps = {
  scale: 1
}

const patternImport = new RegExp(
  /import\s+?(?:(?:(?:[\w*\s{},]*)\s+from\s+?)|)(?:(?:".*?")|(?:'.*?'))[\s]*?(?:;|$|)/
)

export const removeImportLines = codeSnippet => {
  const temp = codeSnippet
    .split('\n')
    .filter(line => !patternImport.test(line))
    .join('\n')

  return temp
}
