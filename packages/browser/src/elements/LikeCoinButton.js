import React from 'react'
import PropTypes from 'prop-types'
import IframeResizer from 'iframe-resizer-react'

/**
 * LikCoin 的按鈕
 * @param {object} data -  JSON 內容
 * @returns {JSX.Element}
 */
function LikeCoinButton({userId, url, style = {}}) {
  const currentUrl = url || window.location.href
  return (
    <IframeResizer
      src={`//button.like.co/in/embed/${userId}/button?referrer=${currentUrl}`}
      inPageLinks
      checkOrigin={['//button.like.co']}
      style={{border: 0, margin: 0, ...style}}
    />
  )
}

LikeCoinButton.propTypes = {
  userId: PropTypes.string.isRequired,
  url: PropTypes.string,
  style: PropTypes.object,
}

export default LikeCoinButton
