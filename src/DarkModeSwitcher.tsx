import {
  useEffect,
  useState,
  useSyncExternalStore,
} from 'react'
import DarkModeSvg from './DarkModeSvg'

/* eslint-disable jsx-a11y/label-has-associated-control */

export default function DarkModeSwitcher() {
  const storageTheme = useSubscribeToStorage()
  const systemTheme = useSubscribeToSystemDarkMode()

  const initThemeMode = storageTheme ?? 'system'
  const [themeMode, setThemeMode] = useState(initThemeMode)

  const isManual = !!storageTheme?.match(/dark|light/)
  const initDarkMode =
    (isManual ? storageTheme : systemTheme) === 'dark'
  const [darkMode, setDarkMode] = useState(initDarkMode)

  // on storage dark mode change in other tabs
  useEffect(() => {
    setThemeMode(initThemeMode)
    setDarkMode(initDarkMode)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageTheme])

  // on system dark mode change in settings
  useEffect(() => {
    if (isManual) return
    setDarkMode(systemTheme === 'dark')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemTheme])

  useEffect(
    () =>
      document.documentElement.classList[
        darkMode ? 'add' : 'remove'
      ]('dark'),
    [darkMode]
  )

  return (
    <span className=''>
      dark mode: {isManual ? 'manual' : 'auto'}{' '}
      <DarkModeSvg dark={darkMode} />{' '}
      <select
        onChange={e => {
          const mode = e.target.value
          setThemeMode(mode)
          localStorage.setItem('theme', mode)

          const isManual = ['light', 'dark'].includes(mode)
          setDarkMode(
            (isManual ? mode : systemTheme) === 'dark'
          )
        }}>
        {['dark', 'light', 'system'].map(mode => (
          <option selected={themeMode === mode}>{mode}</option>
        ))}
      </select>
    </span>
  )
}

function useSubscribeToStorage() {
  const subscribe = (cb: any) => {
    window.addEventListener('storage', cb)
    return () => window.removeEventListener('storage', cb)
  }

  const getSnapshot = () => localStorage.getItem('theme')

  return useSyncExternalStore(subscribe, getSnapshot)
}

function useSubscribeToSystemDarkMode() {
  const query = window.matchMedia(
    '(prefers-color-scheme: dark)'
  )

  const subscribe = (cb: any) => {
    query.addEventListener('change', cb)
    return () => query.removeEventListener('change', cb)
  }

  const getSnapshot = () => (query.matches ? 'dark' : 'light')

  return useSyncExternalStore(subscribe, getSnapshot)
}
