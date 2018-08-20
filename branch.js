class Branch {
    constructor(start, end, thickness) {
        this.start = start
        this.end = end
        this.thickness = thickness
        this.stroke = 'SaddleBrown'
        this.grown = false
        this.sprout = false
    }

    twig(theta, len, thick) {
        let direction = p5.Vector.sub(this.end, this.start)
        direction.rotate(theta)
        direction.mult(len)
        let twigStart = this.end.copy()
        let twigEnd = p5.Vector.add(twigStart, direction)
        return new Branch(twigStart, twigEnd, this.thickness * thick)
    }

    render() {
        push()
        noFill()
        strokeCap(PROJECT)
        strokeWeight(this.thickness)
        stroke(this.stroke)
        line(this.start.x, this.start.y, this.end.x, this.end.y)
        pop()
    }
}