interface Cell {
  x: number
  y: number
  top: boolean
  right: boolean
  bottom: boolean
  left: boolean
  visited: boolean
}

export class Maze {
  width: number
  height: number
  grid: Cell[][]

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.grid = Array.from({ length: height }, (_, y) =>
      Array.from({ length: width }, (_, x) => ({
        x,
        y,
        top: true,
        right: true,
        bottom: true,
        left: true,
        visited: false,
      })),
    )
    this.start()
  }

  start() {
    const stack = []
    let currentCell = this.grid[0][0]
    currentCell.visited = true
    stack.push(currentCell)

    while (stack.length > 0) {
      const neighbors = this.getUnvisitedNeighbors(currentCell)
      if (neighbors.length > 0) {
        const randomNeighbor = neighbors[Math.floor(Math.random() * neighbors.length)]
        this.removeWall(currentCell, randomNeighbor)
        stack.push(currentCell)
        currentCell = randomNeighbor
        currentCell.visited = true
      } else {
        currentCell = stack.pop()!
      }
    }
  }

  getUnvisitedNeighbors(cell: Cell) {
    const neighbors = []
    const { x, y } = cell
    if (x > 0 && !this.grid[y][x - 1].visited) {
      neighbors.push(this.grid[y][x - 1])
    }
    if (x < this.width - 1 && !this.grid[y][x + 1].visited) {
      neighbors.push(this.grid[y][x + 1])
    }
    if (y > 0 && !this.grid[y - 1][x].visited) {
      neighbors.push(this.grid[y - 1][x])
    }
    if (y < this.height - 1 && !this.grid[y + 1][x].visited) {
      neighbors.push(this.grid[y + 1][x])
    }

    return neighbors
  }

  removeWall(cell1: Cell, cell2: Cell) {
    if (cell1.x === cell2.x && cell1.y === cell2.y + 1) {
      cell1.top = false
      cell2.bottom = false
    } else if (cell1.x === cell2.x && cell1.y === cell2.y - 1) {
      cell1.bottom = false
      cell2.top = false
    } else if (cell1.x === cell2.x + 1 && cell1.y === cell2.y) {
      cell1.left = false
      cell2.right = false
    } else if (cell1.x === cell2.x - 1 && cell1.y === cell2.y) {
      cell1.right = false
      cell2.left = false
    }
  }

  render(containerId: string) {
    const container = document.getElementById(containerId)
    if (!container) {
      throw new Error('Container not found')
    }
    container.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`

    this.grid.flat().forEach((cell) => {
      const cellDiv = document.createElement('div')
      cellDiv.classList.add('cell')
      if (cell.top) {
        cellDiv.classList.add('top')
      }
      if (cell.right) {
        cellDiv.classList.add('right')
      }
      if (cell.bottom) {
        cellDiv.classList.add('bottom')
      }
      if (cell.left) {
        cellDiv.classList.add('left')
      }
      container.appendChild(cellDiv)
    })
  }
}
