import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import './Icon.scss'


const Icon = ({ name }) => {
  const iconClassName = cx('icon-basic', {
    [`icon-basic-${name}`]: true,
  })

  return (
    <div className="icon">
      <i className={iconClassName} />
    </div>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
