import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/Header'

const MaiLayout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

MaiLayout.propTypes = {}

export default MaiLayout