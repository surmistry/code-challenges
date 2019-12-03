const compareTwo = (first, second) => first < second;

const absoluteIncreasingSequence = (sequence) => {
  let mandatorySuccess = true;
  for (let secIndex = 0; secIndex <= sequence.length - 2; secIndex++) {
    mandatorySuccess = mandatorySuccess && compareTwo(sequence[secIndex], sequence[secIndex + 1]);
  }
  return mandatorySuccess;
};


const checkEarlySeq = (sequence, index) => {
  const splicedSequence = [...sequence];
  splicedSequence.splice(index, 1);
  return absoluteIncreasingSequence(splicedSequence);
};

const checkRemoveSequence = (sequence, index) => (
    checkEarlySeq(sequence, index - 1) ||
    checkEarlySeq(sequence, index) ||
    checkEarlySeq(sequence, index + 1));

const almostIncreasingSequence = (sequence) => {
  // console.log('hey', sequence.length)
  let checkContinue = true;
  let finalOutcome = true;
  let index = 0;
  for (index = 0; index < sequence.length - 2; index++) {
    const result = compareTwo(sequence[index], sequence[index + 1]);
    if (!result) {
      if (checkContinue) {
        checkContinue = false;
        const checkResult = checkRemoveSequence(sequence, index);
        console.log(checkResult, 'checked at index', index);
        if (!checkResult) {
          finalOutcome = false;
        }
      }
      else {
        finalOutcome = false;
      }
    }
  }
  return (finalOutcome);
};


console.log(almostIncreasingSequence([[1, 3, 2, 1]]));
