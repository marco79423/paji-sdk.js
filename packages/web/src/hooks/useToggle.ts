import React from 'react'

/**
 * Toggle
 * @param initialValue 任意初始值
 */
export default function useToggle(initialValue: any) {
    const [value, setValue] = React.useState(initialValue)
    const toggle = React.useCallback(() => {
        setValue(v => !v)
    }, [])
    return [value, toggle]
}
