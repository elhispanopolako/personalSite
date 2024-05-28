// Triangles
function triangles() {
    let hashIcon = '#'
    let trianglesLength = 7
    let tree = ''
    for (let i = 0; i < trianglesLength; i++) {
        console.log(tree = tree + hashIcon)
    }
}

// FizzBuzz
function fizzBuzz() {
    let number = 1
    let actualNumber = ''
    while (number < 100) {
        switch (true) {
            case number % 5 == 0 && number % 3 == 0:
                actualNumber = 'FizzBuzz'
                break
            case number % 5 == 0:
                actualNumber = 'Buzz'
                break
            case number % 3 == 0:
                actualNumber = 'Fizz'
                break
            default:
                actualNumber = number
        }
        console.log(actualNumber)
        number++
    }
}

// cheesBoard
function cheesBoard() {
    let size = 8
    let result = ''
    for (let col = 0; col < size; col++) {
        if (col % 2 == 0) {
            result = ' '
        } else {
            result = '#'
        }
        for (let row = 0; row < size; row++) {
            if (result[result.length - 1] == '#') {
                result = result + ' '
            } else {
                result = result + '#'
            }
        }
        console.log(result)
    }
}

