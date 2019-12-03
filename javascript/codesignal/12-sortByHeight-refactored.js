const findPeople = (a) => a.filter((height) => height > 0);

const unitePeopleToTrees = (trees, people) => {
  let peopleIndex = 0;
  const united = trees.map((val) => {
    if (val < 0) return val;
    const person = people[peopleIndex];
    peopleIndex += 1;
    return person;
  });
  return united;
};

const sortByHeight = (a) => {
  const people = findPeople(a);
  people.sort((A, B) => A - B);
  console.log(people);
  return unitePeopleToTrees(a, people);
};

console.log(sortByHeight([4, 9, 11, 2, 16]));
