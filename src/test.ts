/* eslint-disable no-useless-return */

//
;((run: 0 | 1 = 0) => {
  if (!run) return
  //
})()
// types
;((run: 0 | 1 = 0) => {
  if (!run) return

  // primative type: boolean number string undefined null void

  const log = (x: boolean | number | string) => console.log(x)
  log(false)
  log(0)
  log('0')

  let a: undefined | null | void

  a = (() => {})() // void
  let b
  a = b // undefined
  a = null // null

  console.log(a)

  // object types: interface class enum arrays tuples

  const uniparse = { name: 'uniparse', age: 23 }

  let logName = (user: { name: string; age: number }) =>
    console.log(user.name)
  logName(uniparse)

  interface Person {
    name: string
    age: number
  }
  logName = (user: Person) => console.log(user.name)
  logName(uniparse)

  type User = {
    name: string
    age: number
  }

  logName = (user: User) => console.log(user.name)
  logName(uniparse)

  // classes

  class Books {
    type: string | undefined
    stock: number | undefined
  }
  const techBooks = new Books()
  console.log(techBooks)
  techBooks.type = 'react'
  techBooks.stock = 4
  console.log(techBooks)
})(1)

/*
// type assertions
;((run: 0 | 1 = 0) => {
  if (!run) return

  const colors = ['red', 'green', 'blue'] as const
  colors[4] = 'yellow' // err read-only property

  const any = 5 as any // or unknown
  const num: number = any
  const str = <string>any

  const logStr = (str: string) => str
  const logNum = (num: number) => num

  console.log(
    logStr(num), // err
    logStr(str),
    logNum(num),
    logNum(str), // err
    typeof str
  )
})()
*/
