import React, { useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Chair } from '../model/threeDModel'
import { Col, Row } from 'react-bootstrap'
import { DefaultXRControllers } from '@react-three/xr'
import Introduce from '../introduce/IntroduceThreeD'
// import ShowRoom from '../model/ShowRoom'

let ContentDesktop = () => {
    let textureList = ['./texture/wood.jpg', './texture/wood1.jpg',
        './texture/wood2.jpg', './texture/wood3.jpg', './texture/grass.jpg', './texture/1.jpg', './texture/2.jpg']

    let changeTexture = (e) => {
        setColor(e)
    }
    let [color, setColor] = useState('./texture/wood.jpg')
    let [item, setItem] = useState('back')
    let changeItem = (e) => {
        setItem(e)
    }
    return (
        <Row>
            <Col></Col>
            <Col>
                <Row style={{ textAlign: 'center' }}>
                    <Col>
                        <h3>Textures</h3>
                    </Col>
                </Row>
                <Row >
                    {textureList.map(e =>
                        <Col xs={3} onClick={() => { changeTexture(e) }}
                            style={{ borderRadius: '6px', backgroundImage: `url(${e})`, height: '80px' }} >
                        </Col>
                    )}
                </Row>
            </Col>
            <Col>

                <div>
                    <Canvas style={{ height: '30rem', width: '34rem' }} camera={{ position: [0, 20, 0] }}>
                        <ambientLight />
                        <Chair color={color} changeItem={changeItem} />
                        <OrbitControls />
                        {/* <DefaultXRControllers /> */}
                    </Canvas>
                    <h3 style={{ width: '34rem', textAlign: 'center' }}>{item}</h3>
                </div>

            </Col>
            <Col>
            </Col>
        </Row>
    )

}
let ContentMobile = () => {
    let textureList = ['./texture/wood.jpg', './texture/wood1.jpg',
        './texture/wood2.jpg', './texture/wood3.jpg', './texture/grass.jpg', './texture/1.jpg', './texture/2.jpg']

    let changeTexture = (e) => {
        setColor(e)
    }
    let [color, setColor] = useState('./texture/wood.jpg')
    let [item, setItem] = useState('back')
    let changeItem = (e) => {
        setItem(e)
    }
    return (
        <>
            <div style={{ marginLeft: '10%', width: '80%' }}>
                <div style={{ textAlign: 'center' }}>
                    <div>
                        <h3>Textures</h3>
                    </div>
                </div>
                <Row >
                    {textureList.map(e =>
                        <Col xs={3} onClick={() => { changeTexture(e) }}
                            style={{ borderRadius: '6px', backgroundImage: `url(${e})`, height: '80px' }} >
                        </Col>
                    )}
                </Row >
            </div>
            <div>
                <div style={{ marginLeft: '5%', width: '90%' }} >
                    <div style={{
                        textAlign: 'center', borderRadius: '5px',
                        borderWidth: '2px', borderStyle: 'solid', borderColor: '#bac5d1'
                    }}>

                        <Canvas style={{ height: '30rem', width: '100%' }} camera={{ position: [0, 20, 0] }}>
                            <ambientLight />
                            <Chair color={color} changeItem={changeItem} />
                            <OrbitControls />
                            {/* <DefaultXRControllers /> */}
                        </Canvas>
                        <h3 >{item}</h3>
                    </div>
                </div>

            </div>
        </>
    )

}
export default function ThreeD() {
    let [responsive, setResponsive] = useState('desktop')
    let [longestLine, setLongestLine] = useState(100)

    let [color, setColor] = useState('./texture/wood.jpg')
    let [item, setItem] = useState('back')
    let changeItem = (e) => {
        setItem(e)
    }
    let textureList = ['./texture/wood.jpg', './texture/wood1.jpg',
        './texture/wood2.jpg', './texture/wood3.jpg', './texture/grass.jpg', './texture/1.jpg', './texture/2.jpg']

    let changeTexture = (e) => {
        setColor(e)
    }
    let [content, setContent] = useState(<ContentDesktop />)
    useEffect(() => {
        let maxWidth = 960
        function handleResize() {
            if (window.innerWidth < maxWidth) {
                responsive = 'mobile'
                setContent(<ContentMobile />)
            }
            else {
                responsive = 'desktop'
                setContent(<ContentDesktop />)
            }

            setResponsive(responsive)
            setLongestLine(window.innerWidth * 1.4)
        }
        window.addEventListener("resize", handleResize)
        handleResize()
    }, [])
    return (
        <div>
            <Introduce responsive={responsive} longestLine={longestLine} />
            <div>
                <h2 style={{ textAlign: 'center' }}>Demo</h2>

                {content}

            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>Show Room</h3>
            </div>
        </div>

    )
}
