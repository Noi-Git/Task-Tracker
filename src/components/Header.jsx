import React from 'react'
import Button from './Button'

const Header = ({ title, onAdd, toggleAddButton }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={toggleAddButton ? 'red' : 'green'}
        text={toggleAddButton ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header
