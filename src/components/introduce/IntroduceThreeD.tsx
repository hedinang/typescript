import React, { MouseEvent, useEffect, useRef, useState } from 'react';
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

        if (this.x > mouse.x - 200 && this.x < mouse.x + 200 && this.y > mouse.y - 200 && this.y < mouse.y + 200)
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

function IntroduceThreeDesktop(props: any) {
    let ref = useRef<HTMLCanvasElement>(null);
    let ctx: CanvasRenderingContext2D
    let circleList: Circle[] = []
    let N = 70
    let heigh = 400
    let colorList = ['#ed1a1a', '#31ed1a', '#1a20ed', '#d0e714']
    let text = 'Commerce is the new way of shopping. Here highly accurate 3D models ' +
        'of products integrate with Augmented Reality experiences to show the customer ' +
        'a graphic and interactive representation of the product. It is a pleasant ' +
        'consequence of visual commerce. 3D technology allows customers to get in touch ' +
        'with the product, exactly as it happens in store. It offers a new way to interact ' +
        'with products. Customers can view them from any angle, rotate them, zoom in ' +
        'and so on. They can do everything they would do in real life. The opportunities ' +
        'that 3D and AR Commerce offers are innumerable.'
    let splits = text.split(' ')
    let lines: string[] = []
    let fontSize = 17
    let maxLineLength = 1200
    let start = -1
    let seperate = () => {
        let line = ''
        let lineLength = 0
        while (lineLength <= maxLineLength && start < splits.length - 1) {
            start += 1
            line += ' ' + splits[start]
            lineLength += fontSize * (splits[start].split('').length + 1)
        }
        lines.push(line)
        if (start < splits.length - 1)
            seperate()
    }
    seperate()

    function randomIntFromTo(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let animate = () => {
        let connections = []
        ctx.clearRect(0, 0, window.innerWidth, heigh)
        for (let index = 0; index < N; index++) {
            let interaction = circleList[index].update()
            if (interaction.size !== 0)
                connections.push(interaction)
        }
        ctx.lineWidth = 0.1
        for (let index = 0; index < connections.length; index++) {
            let queueElement = connections.shift()
            for (let i = 0; i < connections.length; i++) {
                const element = connections[i]
                ctx.beginPath()
                ctx.moveTo(queueElement.get('x'), queueElement.get('y'))
                ctx.lineTo(element.get('x'), element.get('y'))
                ctx.strokeStyle = 'white'
                ctx.stroke()
            }
        }
        var lineheight = 25;
        let x = window.innerWidth / 7
        let y = 90
        ctx.fillStyle = "white";
        ctx.font = "30pt Times New Roman";
        ctx.fillText('3D', x, y)
        y = y + lineheight
        ctx.font = '17px Font name';
        for (var i = 0; i < lines.length; i++)
            ctx.fillText(lines[i], x, y + (i * lineheight));
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
            canvas.height = heigh
            ctx = canvas.getContext('2d')
            if (ctx != null) {
                for (let index = 0; index < N; index++) {
                    let x = Math.random() * window.innerWidth
                    let y = Math.random() * canvas.height
                    let dx = Math.random() - 0.5
                    let dy = Math.random() - 0.5
                    let color = colorList[randomIntFromTo(0, 3)]
                    circleList.push(new Circle(x, y, dx, dy, 4, ctx, window.innerWidth, heigh, color))
                }
                animate()

            }
        }
    }, [props])
    return (
        <canvas style={{ backgroundColor: '#002a56' }} onMouseMove={mouseMove} ref={ref}></canvas>
    )
}
function IntroduceThreeMobile(props: any) {
    let ref = useRef<HTMLCanvasElement>(null);
    let ctx: CanvasRenderingContext2D
    let circleList: Circle[] = []
    let N = 70
    let heigh = 400
    let colorList = ['#ed1a1a', '#31ed1a', '#1a20ed', '#d0e714']
    let text = 'Commerce is the new way of shopping. Here highly accurate 3D models ' +
        'of products integrate with Augmented Reality experiences to show the customer ' +
        'a graphic and interactive representation of the product. It is a pleasant ' +
        'consequence of visual commerce. 3D technology allows customers to get in touch ' +
        'with the product, exactly as it happens in store. It offers a new way to interact ' +
        'with products. Customers can view them from any angle, rotate them, zoom in ' +
        'and so on. They can do everything they would do in real life. The opportunities ' +
        'that 3D and AR Commerce offers are innumerable.'
    let splits = text.split(' ')
    let lines: string[] = []
    let fontSize = 17
    // let maxLineLength = 1000
    // let [maxLineLength, setMaxLineLength] = useState(0)
    let start = -1
    let seperate = (maxLineLength: number) => {
        let line = ''
        let lineLength = 0
        while (lineLength <= maxLineLength && start < splits.length - 1) {
            start += 1
            line += ' ' + splits[start]
            lineLength += fontSize * (splits[start].split('').length + 1)
        }
        lines.push(line)
        if (start < splits.length - 1)
            seperate(maxLineLength)
    }

    function randomIntFromTo(min: number, max: number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    let animate = () => {
        let connections = []
        ctx.clearRect(0, 0, window.innerWidth, heigh)
        for (let index = 0; index < N; index++) {
            let interaction = circleList[index].update()
            if (interaction.size !== 0)
                connections.push(interaction)
        }
        ctx.lineWidth = 0.1
        for (let index = 0; index < connections.length; index++) {
            let queueElement = connections.shift()
            for (let i = 0; i < connections.length; i++) {
                const element = connections[i]
                ctx.beginPath()
                ctx.moveTo(queueElement.get('x'), queueElement.get('y'))
                ctx.lineTo(element.get('x'), element.get('y'))
                ctx.strokeStyle = 'white'
                ctx.stroke()
            }
        }
        var lineHeight = 25;
        let x = window.innerWidth / 2
        let y = 90
        ctx.textAlign = 'center'
        ctx.fillStyle = "white";
        ctx.font = "30pt Times New Roman";
        ctx.fillText('3D', x, y)
        y = y + lineHeight
        ctx.font = '17px Font name';
        for (var i = 0; i < lines.length; i++)
            ctx.fillText(lines[i], x, y + (i * lineHeight));
        requestAnimationFrame(animate)
    }
    let mouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
    }
    useEffect(() => {
        // maxLineLength = window.innerWidth * 0.8
        // let result: [] = []
        // seperate(splits, result)
        // setLines(result)

        // setMaxLineLength(maxLineLength)
        if (ref.current) {
            let canvas = ref.current
            canvas.width = window.innerWidth
            canvas.height = heigh
            ctx = canvas.getContext('2d')
            seperate(props.longestLine)

            if (ctx != null) {
                for (let index = 0; index < N; index++) {
                    let x = Math.random() * window.innerWidth
                    let y = Math.random() * canvas.height
                    let dx = Math.random() - 0.5
                    let dy = Math.random() - 0.5
                    let color = colorList[randomIntFromTo(0, 3)]
                    circleList.push(new Circle(x, y, dx, dy, 4, ctx, window.innerWidth, heigh, color))
                }
                animate()

            }
        }
    }, [props])
    return (
        <>
            <canvas style={{ backgroundColor: '#002a56' }} onMouseMove={mouseMove} ref={ref}></canvas>
        </>
    )
}
export default function Introduce(props: any): any {
    useEffect(() => {

    }, [props])
    switch (props.responsive) {
        case 'mobile':
            return <IntroduceThreeMobile responsive={props.responsive} longestLine={props.longestLine} />
        case 'desktop':
            return <IntroduceThreeDesktop responsive={props.responsive} longestLine={props.longestLine}/>
    }
}
