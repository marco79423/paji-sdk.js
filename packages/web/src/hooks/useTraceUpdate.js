import React from 'react'

export default function useTraceUpdate(props, label) {
  const prev = React.useRef(props)
  React.useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v]
      }
      return ps
    }, {})
    if (Object.keys(changedProps).length > 0) {
      console.log(label ? '[${label}] ' : '' + 'Changed props:', changedProps)
    }
    prev.current = props
  })
}