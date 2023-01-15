import React from 'react'

const Fragment = ({ propFragment}) => {
  return (
    <>
        <h1>Primeiro Título</h1>
        <h3>Segundo Título</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment