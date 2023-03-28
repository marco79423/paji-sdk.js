import React from 'react'

/**
 * Toggle
 * @param defaultState 預設布林值
 */
export default function useToggle(defaultState: boolean): [boolean, () => void] {
    const [value, setValue] = React.useState(defaultState)
    const toggle = React.useCallback(() => {
        setValue(v => !v)
    }, [])
    return [value, toggle]
}
