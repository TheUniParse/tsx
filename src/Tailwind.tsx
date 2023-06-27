import DarkModeSwitcher from './DarkModeSwitcher'

export default function Tailwind() {
  const list = [1, 2, 3, 4, 5, 6, 7]
  const breakpoints = [640, 768, 1024, 1280, 1536]

  return (
    <>
      <div>
        <h2>Unordered List</h2>
        <ul>
          {list.map(n => (
            <li
              key={n}
              className='odd:text-pink-700 hover:translate-x-1 before:[&:nth-child(3n)]:content-["-3rds-"]'>
              list item {n}
            </li>
          ))}
        </ul>
      </div>

      <div className='[&_code]:red grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
        {breakpoints.map(breakpoint => (
          <b key={breakpoint}>
            w <code>{'<'}</code> {breakpoint}px
          </b>
        ))}
      </div>

      <DarkModeSwitcher />
      <div className='bg-white text-black dark:bg-black dark:text-white'>
        <p>content</p>
      </div>

      <div>
        <span className='absolute animate-spin motion-reduce:hidden'>
          |
        </span>
        <p className='ml-3'>Processing...</p>
      </div>

      <p className='print:hidden'>secrat must not be printed</p>
      <p className='hidden print:block'>
        displayed only when printed
      </p>
    </>
  )
}

/**
 * Breakpoint	Minimum-w	 CSS
    sm	        640px	    @media (min-width: 640px) { ... }
    md	        768px	    @media (min-width: 768px) { ... }
    lg	        1024px    @media (min-width: 1024px) { ... }
    xl	        1280px    @media (min-width: 1280px) { ... }
    2xl	        1536px    @media (min-width: 1536px) { ... }
 */
