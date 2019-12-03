const filterIndex = (sequence) => sequence.reduce(
  ([firstTeam, secondTeam], currentVal, index) => {
    if (index % 2) secondTeam.push(currentVal);
    else firstTeam.push(currentVal);
    return [firstTeam, secondTeam];
  },
  [[], []],
);

const sumTeam = (team) => team.reduce((prevSum, value) => (prevSum + value), 0);

const alternatingSums = (a) => {
  const [teamOne, teamTwo] = filterIndex(a);
  return [sumTeam(teamOne), sumTeam(teamTwo)];
};


// const teams = alternatingSums([50, 60, 60, 45, 70]);

// console.log(teams);
