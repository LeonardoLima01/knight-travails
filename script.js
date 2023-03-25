function createAllLinks(queue, index, steps) {
  let arr = [];
  for (i of queue[index]) {
    let a = getPaths([i[0], i[1]], steps);
    console.log(i);
    // turn bigger array into 1 item
    for (i of a) {
      // push to array
      arr.push(i);
    }
  }
  return arr;
}

function getPaths(start, steps) {
  x = [
    start[0] + 2,
    start[0] + 2,
    start[0] - 2,
    start[0] - 2,
    start[0] + 1,
    start[0] + 1,
    start[0] - 1,
    start[0] - 1,
  ];
  y = [
    start[1] - 1,
    start[1] + 1,
    start[1] + 1,
    start[1] - 1,
    start[1] + 2,
    start[1] - 2,
    start[1] + 2,
    start[1] - 2,
  ];

  let arr = [];

  for (let i = 0; i < 8; i++) {
    if (x[i] >= 0 && x[i] <= 7 && y[i] >= 0 && y[i] <= 7) {
      let newArray = [x[i], y[i], steps];
      arr.push(newArray);
    }
  }
  return arr;
}
function createBoard() {
  let board = [];

  for (let i = 0; i < 8; i++) {
    board[i] = [];

    for (let j = 0; j < 8; j++) {
      board[i][j] = "";
    }
  }
  return board;
}

function knightMoves(start, end) {
  if (arguments.length != 2 || start.length != 2 || end.length != 2)
    return "Please type in 2 arrays of size 2.";

  let board = createBoard();
  let queue = [];
  let steps = 0;

  queue.push(getPaths(start, ++steps));

  for (let j = 0; j < queue.length; j++) {
    queue.push(createAllLinks(queue, j, ++steps));
    for (let i = 0; i < queue[j].length; i++) {
      if (board[queue[j][i][0]][queue[j][i][1]] != "visited") {
        // Check if current node is the target
        if (queue[j][i][0] == end[0] && queue[j][i][1] == end[1])
          return queue[j][i][2];

        // Mark board as visited
        board[queue[j][i][0]][queue[j][i][1]] = "visited";
      }
    }
  }
}
