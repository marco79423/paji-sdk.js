import React from 'react'
import {useRouter} from 'next/router'

/**
 * 取得網頁 Canonical URL
 * @returns {string} canonicalURL - 網頁的 Canonical URL
 */
export default function useCanonicalUrl(hostUrl) {
  const router = useRouter()

  const pathEnd = Math.min.apply(Math, [
    router.asPath.indexOf('?') > 0 ? router.asPath.indexOf('?') : router.asPath.length,
    router.asPath.indexOf('#') > 0 ? router.asPath.indexOf('#') : router.asPath.length
  ])
  return hostUrl + router.asPath.substring(0, pathEnd)
}
