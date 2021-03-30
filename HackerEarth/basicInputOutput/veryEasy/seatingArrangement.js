let getOppSeatNo = ({ row, seatNum }) => {
  let mySeat;
  let oppSeat;
  if (isSeatUpRow(row, seatNum)) {
    if (isSeatRight(row - 3, seatNum)) {
      mySeat = checkSeatPos(seatNum, row - 2, row);

      if (mySeat === "AS") {
        oppSeat = seatNum - 7;
      } else if (mySeat === "WS") {
        oppSeat = seatNum - 11;
      } else {
        oppSeat = seatNum - 9;
      }

      console.log(oppSeat, mySeat);
    } else {
      mySeat = checkSeatPos(seatNum, row - 3, row - 5);

      if (mySeat === "AS") {
        oppSeat = seatNum - 5;
      } else if (mySeat === "WS") {
        oppSeat = seatNum - 1;
      } else {
        oppSeat = seatNum - 3;
      }

      console.log(oppSeat, mySeat);
    }
  } else {
    if (isSeatLeft(row - 9, seatNum)) {
      mySeat = checkSeatPos(seatNum, row - 8, row - 6);

      if (mySeat === "AS") {
        oppSeat = seatNum + 5;
      } else if (mySeat === "WS") {
        oppSeat = seatNum + 1;
      } else {
        oppSeat = seatNum + 3;
      }

      console.log(oppSeat, mySeat);
    } else {
      mySeat = checkSeatPos(seatNum, row - 9, row - 11);

      if (mySeat === "AS") {
        oppSeat = seatNum + 7;
      } else if (mySeat === "WS") {
        oppSeat = seatNum + 11;
      } else {
        oppSeat = seatNum + 9;
      }

      console.log(oppSeat, mySeat);
    }
  }
};

let isSeatUpRow = (row, seatNum) => {
  return seatNum > row - 6;
};

let isSeatLeft = (row, seatNum) => {
  return seatNum > row;
};

let isSeatRight = (row, seatNum) => {
  return seatNum > row;
};

let checkSeatPos = (seatNum, min, max) => {
  switch (seatNum) {
    case min:
      return "AS";

    case max:
      return "WS";

    default:
      return "MS";
  }
};

let seatingArrangement = (N, seatingArr) => {
  let i = 0;
  while (i < N) {
    let seatNum = seatingArr[i];
    if (seatNum <= 12) {
      getOppSeatNo({ row: 12, seatNum });
    } else if (seatNum <= 24) {
      getOppSeatNo({ row: 24, seatNum });
    } else if (seatNum <= 36) {
      getOppSeatNo({ row: 36, seatNum });
    } else if (seatNum <= 48) {
      getOppSeatNo({ row: 48, seatNum });
    } else if (seatNum <= 60) {
      getOppSeatNo({ row: 60, seatNum });
    } else if (seatNum <= 72) {
      getOppSeatNo({ row: 72, seatNum });
    } else if (seatNum <= 84) {
      getOppSeatNo({ row: 84, seatNum });
    } else if (seatNum <= 96) {
      getOppSeatNo({ row: 96, seatNum });
    } else {
      getOppSeatNo({ row: 108, seatNum });
    }

    i++;
  }
};

// seatingArrangement(2, [18, 40]);

// Online Solution
let a = 13;
let x = a % 12;
console.log("x", x);

if (x == 0) {
  console.log(a - 11, "WS");
} else if (x == 1) {
  console.log(a + 11, "WS");
} else if (x == 2) {
  console.log(a + 9, "MS");
} else if (x == 3) {
  console.log(a + 7, "AS");
} else if (x == 4) {
  console.log(a + 5, "AS");
} else if (x == 5) {
  console.log(a + 3, "MS");
} else if (x == 6) {
  console.log(a + 1, "WS");
} else if (x == 7) {
  console.log(a - 1, "WS");
} else if (x == 8) {
  console.log(a - 3, "MS");
} else if (x == 9) {
  console.log(a - 5, "AS");
} else if (x == 10) {
  console.log(a - 7, "AS");
} else if (x == 11) {
  console.log(a - 9, "MS");
}

/*


// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let inputString = input.split("\n");
    let testCases = Number(inputString[0]);

    let i = 1;
    while (i <= testCases) {
    let seatNum = Number(inputString[i]);
    if (seatNum <= 12) {
      getOppSeatNo({ row: 12, seatNum });
    } else if (seatNum <= 24) {
      getOppSeatNo({ row: 24, seatNum });
    } else if (seatNum <= 36) {
      getOppSeatNo({ row: 36, seatNum });
    } else if (seatNum <= 48) {
      getOppSeatNo({ row: 48, seatNum });
    } else if (seatNum <= 60) {
      getOppSeatNo({ row: 60, seatNum });
    } else if (seatNum <= 72) {
      getOppSeatNo({ row: 72, seatNum });
    } else if (seatNum <= 84) {
      getOppSeatNo({ row: 84, seatNum });
    } else if (seatNum <= 96) {
      getOppSeatNo({ row: 96, seatNum });
    } else {
      getOppSeatNo({ row: 108, seatNum });
    }

    i++;

    }    
    
    }
    


// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail


// Write your code here
let getOppSeatNo = ({ row, seatNum }) => {
  let mySeat;
  let oppSeat;
  if (isSeatUpRow(row, seatNum)) {
    if (isSeatRight(row - 3, seatNum)) {
      mySeat = checkSeatPos(seatNum, row - 2, row);

      if (mySeat === "AS") {
        oppSeat = seatNum - 7;
      } else if (mySeat === "WS") {
        oppSeat = seatNum - 11;
      } else {
        oppSeat = seatNum - 9;
      }

      
      process.stdout.write(oppSeat+" "+mySeat+"\n");
    } else {
      mySeat = checkSeatPos(seatNum, row - 3, row - 5);

      if (mySeat === "AS") {
        oppSeat = seatNum - 5;
      } else if (mySeat === "WS") {
        oppSeat = seatNum - 1;
      } else {
        oppSeat = seatNum - 3;
      }

      
      process.stdout.write(oppSeat+" "+mySeat+"\n");
    }
  } else {
    if (isSeatLeft(row - 9, seatNum)) {
      mySeat = checkSeatPos(seatNum, row - 8, row - 6);

      if (mySeat === "AS") {
        oppSeat = seatNum + 5;
      } else if (mySeat === "WS") {
        oppSeat = seatNum + 1;
      } else {
        oppSeat = seatNum + 3;
      }

      
      process.stdout.write(oppSeat+" "+mySeat+"\n");
    } else {
      mySeat = checkSeatPos(seatNum, row - 9, row - 11);

      if (mySeat === "AS") {
        oppSeat = seatNum + 7;
      } else if (mySeat === "WS") {
        oppSeat = seatNum + 11;
      } else {
        oppSeat = seatNum + 9;
      }

      
      process.stdout.write(oppSeat+" "+mySeat+"\n");
    }
  }
};

let isSeatUpRow = (row, seatNum) => {
  return seatNum > row - 6;
};

let isSeatLeft = (row, seatNum) => {
  return seatNum > row;
};

let isSeatRight = (row, seatNum) => {
  return seatNum > row;
};

let checkSeatPos = (seatNum, min, max) => {
  switch (seatNum) {
    case min:
      return "AS";

    case max:
      return "WS";

    default:
      return "MS";
  }
};


*/
