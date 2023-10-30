import React from 'react'

const Footer = ({length}) => {
    const year=new Date();
  return (
    <footer>
      No of list is {length}<br></br>
      Copyright &copy;{year.getFullYear()}
    </footer>
  )
}

export default Footer
