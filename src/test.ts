/* eslint-disable no-useless-return */

// test
;((run: 0 | 1 = 0) => {
  if (!run) return

  const arr = [
    [['name1'], ['name1', 'money'], ['name1', 'xp']],
    [['name2'], ['name2', 'money'], ['name2', 'xp']],
  ]
  console.log(JSON.stringify(arr.flat(), null, 2))
})(1)

// functiosn
;((run: 0 | 1 = 0) => {
  if (!run) return
  const log = (arg: string) => console.log(arg)
  const sayHi = (fn: (arg: string) => void) => fn('hi')

  sayHi(log)

  //
})()
/*
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

  // non-null asseration with the (Postfix !)
  // used if we know for sure that its not null | undefined
  // while typescript can't figuare it out himself
  const nonNullAsseration = (
    x: number | null | undefined,
    isNumber = typeof x === 'number'
  ) => (isNumber ? climp(x!, 0, 10) + +x!.toFixed() : x)
  function climp(num: number, min: number, max: number) {
    return Math.min(Math.max(num, min), max)
  }

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
    // fields must be assigned by constructor(), else use !
    type!: string
    stock!: number
  }
  const techBooks = new Books()
  console.log(techBooks)
  techBooks.type = 'react'
  techBooks.stock = 4
  console.log(techBooks)

  // enum

  enum Directions {
    up = 1, // 0 if we did not initialize it
    down,
    left,
    right,
  }
  console.log(Directions)
  // {
  //   1: 'up',
  //   2: 'down',
  //   3: 'left',
  //   4: 'right',
  //   up: 1,
  //   down: 2,
  //   left: 3,
  //   right: 4,
  // }

  // Array

  // type[] or Array<type>
  function sum(arr: number[]) {
    return arr.reduce(
      (prevSum, current) => prevSum + current,
      0
    )
  }
  console.log(sum([1, 3, 4, 99, -7]))

  // Tuple
  //   optional type? must be last & not with rest ...type[]
  //   rest ...type[] can be at start or middle or end
  function decode(arr: [string, number, string?]) {
    const [hash, base, currency] = arr
    const money = parseInt(hash, base)
    return currency ? `${money}${currency}` : money
  }
  console.log(decode(['ff', 16]))
  console.log(decode(['ff', 16, '$']))

  const items = [
    { name: 'pistol', value: 100 },
    { name: 'smg', value: 200 },
    { name: 'shotgun', value: 250 },
    { name: 'rifle', value: 400 },
    { name: 'sniper', value: 700 },
  ]
  interface Item {
    name: string
    value: number
  }

  function unlockedItems(arr: [number, ...Item[]]) {
    const [money, ...items] = arr
    const unlocked = items
      .filter(item => item.value < money)
      .map(item => item.name)
    return `you can buy: ${unlocked.join(', ')}`
  }
  console.log(unlockedItems([300, ...items]))

  // object
  // optional property
  function sayHi(user: { name: string; age?: number }) {
    const greeting = `hello ${user.name}${
      user.age ? ` with age ${user.age}` : ''
    }`
    console.log(greeting)
  }
  sayHi({ name: 'uniparse', age: 23 })
  const obj = { x: 0 }
  console.log(obj)

  // any | unknown
  // any, if we are layz & confident.
  const getNameAny = (user: any) => user.name

  // unknown, as from third party libraries, APIs
  // ⚠️ const getNameUnknown = (user: unknown) => user?.name
})(1)
*/
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
