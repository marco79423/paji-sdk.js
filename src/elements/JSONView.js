import React from 'react'

import ReactJson from 'react-json-view'


export default function JSONView({data}) {
  return (
    <ReactJson src={data} indentWidth={2}/>
  )
}
