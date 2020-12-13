// 3단계: 루빅스 큐브 구현하기

const CUBOID = 6;
const CUBE = {
    "front": [["O", "O", "O"], ["O", "O", "O"],["O", "O", "O"]],
    "back": [["Y", "Y", "Y"], ["Y", "Y", "Y"],["Y", "Y", "Y"]],
    "right": [["G", "G", "G"], ["G", "G", "G"],["G", "G", "G"]],
    "left": [["W", "W", "W"], ["W", "W", "W"],["W", "W", "W"]],
    "up": [["B", "B", "B"], ["B", "B", "B"],["B", "B", "B"]],
    "down": [["R", "R", "R"], ["R", "R", "R"],["R", "R", "R"]]
};

function printSectionalPlanOfCube () {
    for (let i = 0; i < CUBOID; i++) {
        let keys = Object.keys(CUBE)[i];
        let planeCube = [];
        for (let j = 0; j < CUBE[keys].length; j++) {
            planeCube.push(CUBE[keys][j].join(" "));
        }
        console.log(keys);
        console.log(planeCube.join("\n"));
        }
}