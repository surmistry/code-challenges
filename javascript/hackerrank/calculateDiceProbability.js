const make_dice_rolls = (size) => [...Array(size)].map((_, index) => index + 1);

const loop_through = (values, targets) => {
  let returnMatrix = [];
  for (let baseIndex = 0; baseIndex < values.length; baseIndex++) {
    for (let subIndex = 0; subIndex < targets.length; subIndex++) {
      const forwardValues = typeof values[baseIndex] === Object ? values[baseIndex] : [values[baseIndex]];
      returnMatrix[(baseIndex * targets.length) + subIndex] = [targets[subIndex]].concat(...forwardValues);
    }
    subIndex = 0;
  }
  return returnMatrix;
}


function get_probability(target_roll_result, num_dice, num_dice_sides) {
  let dice = []
  for (let die = 0; die < num_dice; die++) {
    dice.push(make_dice_rolls(num_dice_sides));
  }
  let sumDice = [];
  for (let index = 1; index < dice.length; index++) {
    let target = (index === 1) ? dice[0] : sumDice;
    sumDice = loop_through(target, dice[index])
  }
  const size = sumDice.filter((value) => {
    const rollSum = value.reduce((sum, value) => sum + value, 0);
    return (rollSum === target_roll_result)
  })
  return (size.length / Math.pow(num_dice_sides, num_dice))
}

console.log(get_probability(13, 3, 8))