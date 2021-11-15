import React, { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Chair } from '../model/threeDModel'
import { Col, Row } from 'react-bootstrap'
import ThreeDHeader from '../introduce/ThreeDHeader'
import { DefaultXRControllers } from '@react-three/xr'
// import ShowRoom from '../model/ShowRoom'
export default function ThreeD() {
    let [color, setColor] = useState('./texture/wood.jpg')
    // let changeColor = (e) => {
    //     setColor(e)

    // }
    let [item, setItem] = useState('back')
    let changeItem = (e) => {
        setItem(e)
    }
    let textureList = ['./texture/wood.jpg', './texture/wood1.jpg',
        './texture/wood2.jpg', './texture/wood3.jpg', './texture/grass.jpg', './texture/1.jpg', './texture/2.jpg']

    let changeTexture = (e) => {
        setColor(e)
    }

    return (
        <div>
            <ThreeDHeader />
            <div>
                <h2 style={{ textAlign: 'center' }}>Demo</h2>
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
                            <Canvas style={{ height: '20rem', width: '20rem' }} camera={{ position: [0, 20, 0] }}>
                                <ambientLight />
                                <Chair color={color} changeItem={changeItem} />
                                <OrbitControls />
                                {/* <DefaultXRControllers /> */}
                            </Canvas>
                            <h3 style={{ width: '22rem', textAlign: 'center' }}>{item}</h3>
                        </div>

                    </Col>
                    <Col>
                    </Col>
                </Row>

            </div>
            <div>
                <h3 style={{ textAlign: 'center' }}>Show Room</h3>
            </div>
        </div>

    )
}
