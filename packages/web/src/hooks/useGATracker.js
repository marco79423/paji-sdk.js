import React from 'react'
import {GA4React} from 'ga-4-react'

/**
 * @typedef {Object} GATracker
 * @property {function} pageView - Emit page view
 * @property {function} trace - Emit event
 */

/**
 * 取得 Google Analytics 4 的 Tracker 工具
 * @param {string} trackingCode
 * @return {GATracker} gaTracker - Tracker
 */
export default function useGATracker(trackingCode) {
  const [gaObj, setGAObj] = React.useState(null)

  React.useEffect(() => {
    if (!gaObj) {
      const ga4react = new GA4React(trackingCode)
      ga4react.initialize()
        .then((ga4) => {
          setGAObj(ga4)
        })
        .catch(() => {
          // 什麼都不做
        })
    }
  }, [])

  return {
    pageView: () => {
      if (gaObj) {
        gaObj.pageview(window.location.pathname)
      }
    },
    trace: (key, data) => {
      if (gaObj) {
        gaObj.gtag('event', key, data)
      }
    }
  }
}
