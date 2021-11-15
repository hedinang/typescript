import React, { MouseEvent, Suspense, useEffect, useRef } from 'react';
let mouse = {
    x: 0,
    y: 0
}
class Circle {
    x: number
    y: number
    dx: number
    dy: number
    radius = 4
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
    update() {
        if (this.x + this.radius > this.w || this.x - this.radius < 0)
            this.dx = -this.dx
        if (this.y + this.radius > this.h || this.y - this.radius < 0)
            this.dy = -this.dy
        this.x += this.dx
        this.y += this.dy
        if (this.x > mouse.x - 100 && this.x < mouse.x + 100 && this.y > mouse.y - 100 && this.y < mouse.y + 100)
            this.radius = 14
        else
            this.radius = 4
        this.draw()
    }
    draw() {
        this.c.beginPath()
        this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.c.strokeStyle = this.color
        this.c.stroke()
        this.c.fillStyle = this.color
        this.c.fill()
        // this.c.clearRect(0, 0, window.innerWidth, 1000)
    }

}

export function Animation() {
    let ref = useRef<HTMLCanvasElement>(null);
    let ctx: any
    let circpleList: Circle[] = []
    let N = 1000
    let colorList = ['#ed1a1a', '#31ed1a', '#1a20ed', '#d0e714']
    function randomIntFromTo(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let animate = () => {
        ctx.clearRect(0, 0, window.innerWidth, 700)
        for (let index = 0; index < N; index++) {
            circpleList[index].update()
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
                    let x = Math.random() * window.innerWidth - 100
                    let y = x + Math.random() * 100
                    let dx = Math.random() - 0.5
                    let dy = Math.random() - 0.5
                    let color = colorList[randomIntFromTo(0, 3)]
                    circpleList.push(new Circle(x, y, dx, dy, 4, ctx, window.innerWidth, 700, color))
                }
                animate()

            }
        }
    }, [])
    return (
        <>
            <canvas onMouseMove={mouseMove} ref={ref}></canvas>
        </>
    )
}