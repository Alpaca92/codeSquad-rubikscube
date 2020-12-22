// 1단계: 단어 밀어내기 구현하기

let RESULT = "";

function getOutput(alphabet) {
    RESULT += alphabet;
}

function rearrangementString() {
    input = prompt("input").split(" ");
    string = input[0].split("");
    const NUMBER_TO_MOVE = Math.abs(+input[1]) % string.length;
    const rearrangedString = [];

    if (+input[1] >= 100 || +input[1] < -100) {
        console.log("Error");
    } else if (NUMBER_TO_MOVE === 0) {
        console.log(input[0]);
    } else if ( (+input[1] < 0 && input[2].toUpperCase() === "L") || (+input[1] > 0 && input[2].toUpperCase() === "R") ) {
        let idxOfString = string.length - NUMBER_TO_MOVE;
        const REMAINDER = string.slice(0, idxOfString);
        while (string.length !== idxOfString) {
            rearrangedString.push(string[idxOfString] );
            idxOfString++;
        };
        const concatArray = rearrangedString.concat(REMAINDER);
        concatArray.forEach(getOutput);
        console.log(RESULT);
    }
    else {
        let idxOfstring = NUBMER_TO_MOVE;
        const REMAINDER = string.slice(0, idxOfstring);
        while (string.length !== idxOfstring) {
            rearrangedString.push(string[idxOfstring] );
            idxOfstring++;
        };
        const concatArray = rearrangedString.concat(REMAINDER);
        concatArray.forEach(getOutput);
        console.log(RESULT);
    }
}

rearrangementString();
