import React from 'react'
import useToggle from './useToggle'

/**
 * 按鍵 Toggle
 * @param defaultState 預設布林值
 * @param key 監控按鍵 (如: F12)
 */
export default function useKeyPressToggle(defaultState: boolean = false, key: string | string[]): boolean {
    const keys = Array.isArray(key) ? key : [key]

    const [value, toggle] = useToggle(defaultState)
    React.useEffect(() => {
        const handleKeyPress = event => {
            if (keys.includes(event.key)) {
                toggle()
            }
        }

        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [value])

    return value
}
