import { BsSun, BsMoonFill } from 'react-icons/bs'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggle } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark/light mode"
      className="flex items-center justify-center w-9 h-9 rounded-full border border-lightBrown hover:border-cyan transition-all duration-300 text-white hover:text-cyan"
    >
      {isLight
        ? <BsMoonFill size={16} className="text-orange" />
        : <BsSun size={17} className="text-cyan" />
      }
    </button>
  )
}

export default ThemeToggle
