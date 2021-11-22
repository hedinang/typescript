import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import './Navbar.css';

function DropdownDesktop() {
  let [showChildren, setShowChildren] = useState('none')
  const onMouseEnter = (e: any) => {
    setShowChildren('block')

  }

  const onMouseLeave = (e: any) => {
    setShowChildren('none')

  }
  return (
    <>
      <ul
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(5, auto)', gridGap: '10px', alignItems: 'center',
          listStyle: 'none', textAlign: 'center', width: '50vw', justifyContent: 'end', marginRight: '2rem'
        }}
      >
        <li style={{ textAlign: 'left' }}>
          <Link style={{ color: 'white' }} to='/' >
            Home
        </Link>
        </li>
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ height: '80px', textAlign: 'left', display: 'flex' }}>
          <div style={{ paddingTop: '26px' }}>Product <i className='fas fa-caret-down' /></div>
          <ul
            style={{
              borderRadius: '5px', right: '0',
              fontSize: '1rem',
              width: '44rem',
              height: '10rem',
              position: 'absolute',
              top: '80px',
              background: '#bbeffd', display: `${showChildren}`

            }}
          >
            <Row style={{
              paddingLeft: '2rem', paddingTop: '2rem',
            }}>
              <Col xs={4}>
                <div>
                  <Link to='/product'>3D/VR/AR</Link>
                </div>
                <div>
                  <Link to='/product/od'>Object Detection</Link>
                </div>
                <div>
                  <Link to='/product/ocr'>Optical Character Recognition</Link>
                </div>
                <div>
                  <Link to='/product/is'>Image Synthesis</Link>
                </div>
              </Col>
              <Col xs={3}>
                <div>
                  <Link to='/product/tts'>Text To Speech</Link>
                </div>
                <div>
                  <Link to='/product/stt'>Speech To Text</Link>
                </div>
                <div>
                  <Link to='/product/ss'>Speech Synthesis</Link>
                </div>
              </Col>
              <Col xs={5}>
                <Link to='/product/3d'>Natural Language Processing</Link>
              </Col>
            </Row>
          </ul>
        </li>
        <li style={{ textAlign: 'left' }}>
          <Link style={{ color: 'white' }} to='/' >
            Contact Us
        </Link>
        </li>
      </ul>
    </>
  )
}
function DropdownMobile(props: any): any {
  let [showChildren, setShowChildren] = useState('none')
  let [showParent, setShowParent] = useState('none')
  useEffect(() => {
    if (props.click === true) setShowParent('block')
    else {
      setShowParent('none')
      setShowChildren('none')
    }
  }, [props])
  let onClick = (e: any) => {
    if (showChildren === 'none') setShowChildren('block')
    else setShowChildren('none')
  }
  return (
    <ul style={{
      paddingLeft: '1rem', position: 'absolute', height: '55vh',
      top: '80px', width: '100%', display: `${showParent}`,
      listStyle: 'none', backgroundColor: '#002a56', left: '0'
    }} >
      <li style={{ textAlign: 'left' }}>
        <Link style={{ color: 'white' }} to='/' >
          Home
        </Link>
      </li>
      <li style={{ textAlign: 'left' }}>
        <div onClick={onClick}>
          Product <i className='fas fa-caret-down' />
        </div>

        <ul style={{ paddingLeft: '2rem', listStyle: 'none', display: `${showChildren}` }}  >
          <li style={{ textAlign: 'left' }}>
            <Link style={{ color: 'white' }} to='/product' >
              3D/VR/AR
            </Link>
          </li>
          <li style={{ textAlign: 'left' }}>
            <Link style={{ color: 'white' }} to='/' >
              Object Detection
            </Link>
          </li>
          <li style={{ textAlign: 'left' }}>
            <Link style={{ color: 'white' }} to='/product/ocr'>Optical Character Recognition</Link>
          </li>
          <li style={{ textAlign: 'left' }}>
            <Link style={{ color: 'white' }} to='/product/is'>Image Synthesis</Link>
          </li>
          <li style={{ textAlign: 'left' }}>
            <Link style={{ color: 'white' }} to='/product/tts'>Text To Speech</Link>
          </li>
          <li style={{ textAlign: 'left' }}>
            <Link style={{ color: 'white' }} to='/product/stt'>Speech To Text</Link>
          </li>
          <li style={{ textAlign: 'left' }}>
            <Link style={{ color: 'white' }} to='/product/ss'>Speech Synthesis</Link>
          </li>
          <li style={{ textAlign: 'left' }}>
            <Link style={{ color: 'white' }} to='/product/3d'>Natural Language Processing</Link>
          </li>
        </ul>
      </li>
      <li style={{ textAlign: 'left' }}>
        <Link style={{ color: 'white' }} to='/' >
          Contact Us
        </Link>
      </li>


    </ul>
  )

}
export default function Dropdown(props: any): any {
  useEffect(() => {

  }, [props])
  switch (props.responsive) {
    case 'left':
      return <DropdownMobile click={props.click} />
    case 'center':
      return <DropdownDesktop />
  }

}

