import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'



function Navbar() {
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  let [isShow, setIsShow] = useState('none')
  let [responsive, setResponsive] = useState({
    logo: 'left'
  })
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  let maxWidth = 960


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < maxWidth) {
        responsive.logo = 'left'
      }
      else {
        responsive.logo = 'center'
      }
      setResponsive({ ...responsive })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
  }, [])


  const onMouseEnter = () => {
    if (window.innerWidth < maxWidth) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < maxWidth) {
      setDropdown(true)
    } else {
      setDropdown(false)
    }
  }
  let onClick = (e) => {
    if (window.innerWidth < maxWidth) {
      if (isShow === 'none') setIsShow('block')
      else setIsShow('none')
    }
  }

  return (
    <>
      <nav className='navbar' style={{ justifyContent: `${responsive.logo}` }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: '4rem', borderRadius: '50%' }} src='./raccoon.webp' />
          <h2>
            PicoCat
          </h2>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <Dropdown responsive={responsive.logo} click={click} />
      </nav>
    </>
  )
}
export default Navbar
