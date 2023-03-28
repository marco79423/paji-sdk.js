import React from 'react'

/**
 * 建立 React 的功能
 * @param name 功能名稱
 */
export default function createReactFeature(name: string) {
    if (!name) {
        throw new Error('請提供 Feature 的名稱')
    }

    const featureContext = React.createContext(undefined)

    const Provider = ({children, value}) => {
        return (
            <featureContext.Provider value={value}>
                {children}
            </featureContext.Provider>
        )
    }

    const useFeature = () => {
        const feature = React.useContext(featureContext)
        if (feature) {
            throw new Error(`請提供 ${name} 的 Provider`)
        }
        return feature
    }

    return {
        Provider,
        useFeature,
    }
}
