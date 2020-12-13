// 2단계: 평면 큐브 구현하기

const startArray = ["R", "R", "W", "G", "C", "W", "G", "B", "B"];
let result = [];
let input = "";

function createPlaneCube() {
    for (let i = 0; i < startArray.length; i += 3) {
    result.push(startArray.slice(i, i + 3));
    }
}

function printResult() {
    let copyResult = result;
    let RESULT = [];
    for (let i = 0; i < copyResult.length; i++) {
        RESULT.push(copyResult[i].join(" "));
        }
    console.log(RESULT.join("\n"));
}

function getInput() {
    input = prompt("input", "CUBE> ");
}

function printInput() {
    console.log(input);
}

const checkCommand = {
    "U": function isU () {
        const firstElement = result[0].shift();
        result[0].push(firstElement);
    },
    "B": function isB () {
        const lastElement = result[2].pop();
        result[2].unshift(lastElement);
    },
    "R": function isR () {
        const topElement = result[0].pop();
        const middleElement = result[1].pop();
        const bottomElement = result[2].pop();
        
        result[0].push(middleElement);
        result[1].push(bottomElement);
        result[2].push(topElement);
    },
    "L": function isL () {
        const topElement = result[0].shift();
        const middleElement = result[1].shift();
        const bottomElement = result[2].shift();
        
        result[0].unshift(bottomElement);
        result[1].unshift(topElement);
        result[2].unshift(middleElement);
    },
    "Q": function isQ () {
        console.log("Bye~");
    }
}

function rearrangementArray() {
    let command = input.split(" ");
    let removeCUBE = command[1];
    for (let i = 0; i < removeCUBE.length; i++) {
        if (removeCUBE[i] === "U") {
            if (removeCUBE[i + 1] === "'") {
                console.log(removeCUBE[i] + "'");
                checkCommand["U"]();
                checkCommand["U"]();
                printResult();
            } else {
                console.log("U");
                checkCommand["U"]();
                printResult();
            }
        } else if (removeCUBE[i] === "B") {
            if (removeCUBE[i + 1] === "'") {
                console.log(removeCUBE[i] + "'");
                checkCommand["B"]();
                checkCommand["B"]();
                printResult();
            } else {
                console.log("B");
                checkCommand["B"]();
                printResult();
            }
        } else if (removeCUBE[i] === "R") {
            if (removeCUBE[i + 1] === "'") {
                console.log(removeCUBE[i] + "'");
                checkCommand["R"]();
                checkCommand["R"]();
                printResult();
            } else {
                console.log("R");
                checkCommand["R"]();
                printResult();
            }
        } else if (removeCUBE[i] === "L") {
            if (removeCUBE[i + 1] === "'") {
                console.log(removeCUBE[i] + "'");
                checkCommand["L"]();
                checkCommand["L"]();
                printResult();
            } else {
                console.log("L");
                checkCommand["L"]();
                printResult();
            }
        } else if (removeCUBE[i] === "Q") {
            if (input === "CUBE> Q") {
                console.log("Bye~");
                return;
            }
            console.log("Q");
            checkCommand["Q"]();
            return;
        } else if (removeCUBE[i] === "'") {
            continue;
        } else {
            console.log("Error");
        }
    }
}

function recursion () {
    getInput();
    printInput();
    rearrangementArray();
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Q") {
            return;
        }
    }

    return recursion();
}

function init() {
    createPlaneCube();
    printResult();
    recursion();
}

init();