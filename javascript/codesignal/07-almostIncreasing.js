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
    // console.log(finalOutcome, index);
  }
  return (finalOutcome);
};


const compareTwo = (first, second) => first < second;

const checkRemoveSequence = (sequence, index) => {
  const splicedInplace = [...sequence];
  const splicedEarly = [...sequence];
  const splicedExtraEarly = [...sequence];
  splicedExtraEarly.splice(index - 1, 1);
  splicedEarly.splice(index, 1);
  // const checkExtraEarly = absoluteIncreasingSequence(splicedExtraEarly);
  // const checkEarly = absoluteIncreasingSequence(splicedEarly);
  // if (checkEarly) return checkEarly
  splicedInplace.splice(index + 1, 1);
  // const checkInplace = absoluteIncreasingSequence(splicedInplace);
  return (
    absoluteIncreasingSequence(splicedExtraEarly) ||
    absoluteIncreasingSequence(splicedEarly) ||
    absoluteIncreasingSequence(splicedInplace));
};

const absoluteIncreasingSequence = (sequence) => {
  let mandatorySuccess = true;
  for (let secIndex = 0; secIndex <= sequence.length - 2; secIndex++) {
    mandatorySuccess = mandatorySuccess && compareTwo(sequence[secIndex], sequence[secIndex + 1]);
  }
  return mandatorySuccess;
};

console.log(almostIncreasingSequence([[1, 3, 2, 1]]));
