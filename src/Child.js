import React from 'react'

export default function Child(props) {
   console.log('Child props',props.mychildprop)
  return (
    <div>Child { props.mychildprop }</div>
  )
}
