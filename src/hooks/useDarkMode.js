import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);

    useEffect(() => {
        const body = document.body;
        if (darkMode === true) {
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }
    }, [darkMode])
        

return [darkMode, setDarkMode]
}

export default useDarkMode;