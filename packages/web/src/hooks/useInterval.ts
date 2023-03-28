import React from 'react'


interface Options {
    enabled: boolean
}

const DefaultOptions: Options = {
    enabled: true
}

/**
 * 指定頻率呼叫 callback
 * @param callback Callback
 * @param interval 毫秒 (預設 1000)
 * @param options 選項
 */
export default function useInterval(callback: () => void, interval: number = 1000, options: Options) {
    const {enabled} = {...DefaultOptions, ...options}

    const ref = React.useRef(callback)
    React.useEffect(() => {
        ref.current = callback
    }, [callback])

    React.useEffect(() => {
        let intervalId
        if (enabled) {
            intervalId = setInterval(() => {
                ref.current()
            }, interval)
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }
    }, [interval, enabled])
}
