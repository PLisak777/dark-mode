import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (key, initialValues, cb) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);


return [darkMode, toggleMode]
}

export default useDarkMode;