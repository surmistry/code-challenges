const findNonHauntedRoomCosts = (matrix) => {
  const hauntedRooms = [false, false, false, false];
  let safeRoomCosts = [];
  for (rooms of matrix) {
    const updatedHaunted = findHauntedRooms(hauntedRooms, rooms);
    const safeRooms = retrieveSafeRoomCosts(updatedHaunted, rooms);
    safeRoomCosts = [...safeRoomCosts].concat([...safeRooms]);
    console.log(safeRoomCosts);
  }
  return safeRoomCosts;
};

const sumSafeRooms = (safeRooms) => {
  let sum = 0;
  for (const cost of safeRooms) {
    sum += cost;
  }
  return sum;
};

const findHauntedRooms = (hauntedRooms, roomCosts) => {
  const updatedHauntedRooms = hauntedRooms;
  for (const [index, cost] of roomCosts.entries()) {
    // console.log(cost, index);
    if (cost === 0) {
      hauntedRooms[index] = true;
      console.log(hauntedRooms);
    }
  }
  return updatedHauntedRooms;
};

const retrieveSafeRoomCosts = (haunted, row) => {
  const unsafeRooms = [...haunted];
  const safeRooms = [];
  for (const [index, cost] of row.entries()) {
    if (!unsafeRooms[index]) {
      safeRooms.push(cost);
    }
  }
  return safeRooms;
};

function matrixElementsSum (matrix) {
  const roomCosts = findNonHauntedRoomCosts(matrix);
  return sumSafeRooms(roomCosts);
}

// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];


// const cost = matrixElementsSum(matrix);
// console.log('cost', cost);
