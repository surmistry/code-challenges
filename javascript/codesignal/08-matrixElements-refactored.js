const sumSafeRooms = (safeRooms) => safeRooms.reduce((costSum, roomCost) => (costSum + roomCost), 0);

const findHauntedRooms = (hauntedRooms, roomCosts) => {
  const updatedHauntedRooms = hauntedRooms;
  for (const [index, cost] of roomCosts.entries()) {
    if (cost === 0) {
      hauntedRooms[index] = true;
    }
  }
  return updatedHauntedRooms;
};

const retrieveSafeRoomCosts = (haunted, row) => row.filter((_, index) => !haunted[index]);

const findNonHauntedRoomCosts = (matrix) => {
  const hauntedRooms = [false, false, false, false];
  return matrix.reduce(
    (safeRoomCosts, rooms) => [...safeRoomCosts].concat([...retrieveSafeRoomCosts(findHauntedRooms(hauntedRooms, rooms), rooms)]),
    []
  );
};
const matrixElementsSum = (matrix) => {
  const roomCosts = findNonHauntedRoomCosts(matrix);
  return sumSafeRooms(roomCosts);
};

// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];


// const cost = matrixElementsSum(matrix);
// console.log('cost', cost);
