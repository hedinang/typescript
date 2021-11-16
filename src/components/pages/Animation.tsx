import React, { MouseEvent, useEffect, useRef } from 'react';
let mouse = {
    x: 0,
    y: 0
}
class Circle {
    x: number
    y: number
    dx: number
    dy: number
    radius = 1
    c: CanvasRenderingContext2D
    w: number
    h: number
    color: string
    maxRadius = 10
    constructor(x: number, y: number, dx: number, dy: number, radius: number, ctx: any, w: number, h: number, color: string) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        // this.radius = radius
        this.c = ctx
        this.w = w
        this.h = h
        this.color = color
    }
    update(): Map<string, number> {
        if (this.x + this.radius > this.w || this.x - this.radius < 0)
            this.dx = -this.dx
        if (this.y + this.radius > this.h || this.y - this.radius < 0)
            this.dy = -this.dy
        this.x += this.dx
        this.y += this.dy
        let map = new Map()

        if (this.x > mouse.x - 150 && this.x < mouse.x + 150 && this.y > mouse.y - 150 && this.y < mouse.y + 150)
        // this.radius = 14
        {
            map.set('x', this.x)
            map.set('y', this.y)
        }
        // else
        this.draw()
        return map
        // this.radius = 1
        // this.draw()
    }
    draw() {
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.c.strokeStyle = 'white'
        this.c.stroke()
        this.c.fillStyle = 'white'
        this.c.fill()
        // this.c.clearRect(0, 0, window.innerWidth, 1000)
    }

}

export function Animation() {
    let ref = useRef<HTMLCanvasElement>(null);
    let ctx: CanvasRenderingContext2D
    let circleList: Circle[] = []
    let N = 70
    let colorList = ['#ed1a1a', '#31ed1a', '#1a20ed', '#d0e714']
    function randomIntFromTo(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let animate = () => {
        let connections = []
        ctx.clearRect(0, 0, window.innerWidth, 700)
        for (let index = 0; index < N; index++) {
            let interaction = circleList[index].update()
            if (interaction.size !== 0)
                connections.push(interaction)
        }
        for (let index = 0; index < connections.length; index++) {
            let queueElement = connections.shift()
            for (let i = 0; i < connections.length; i++) {
                const element = connections[i]
                ctx.beginPath()
                ctx.moveTo(queueElement.get('x'), queueElement.get('y'))
                ctx.lineTo(element.get('x'), element.get('y'))
                ctx.strokeStyle = '#19ffff'
                ctx.stroke()
            }
        }

        requestAnimationFrame(animate)
    }
    let mouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
    }
    useEffect(() => {
        if (ref.current) {
            let canvas = ref.current
            canvas.width = window.innerWidth
            canvas.height = 700
            ctx = canvas.getContext('2d')
            if (ctx != null) {
                for (let index = 0; index < N; index++) {
                    let x = Math.random() * window.innerWidth
                    let y = Math.random() * canvas.height
                    let dx = Math.random() - 0.5
                    let dy = Math.random() - 0.5
                    let color = colorList[randomIntFromTo(0, 3)]
                    circleList.push(new Circle(x, y, dx, dy, 4, ctx, window.innerWidth, 700, color))
                }
                animate()

            }
        }
    }, [])
    return (
        <>
            <canvas style={{ backgroundColor: '#002a56' }} onMouseMove={mouseMove} ref={ref}></canvas>
        </>
    )
}