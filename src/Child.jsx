import React from 'react'
import {useCookies} from 'react-cookie'

function Child() {
  const [cookies, setCookie] = useCookies(['userInput', 'name'])
  return (
    <div>
      <h1>Child: {cookies.userInput}, {cookies.name}</h1>
    </div>
  )
}

export default Child