const totQuestions = 10;
const totAnswers = 6;

// const questions: string[][] = Array.from( Array(totQuestions), () => new Array(totAnswers));

const store = {
  data: {
    questions: Array.from( Array(totQuestions), () => new Array(totAnswers)) as string[][]
  }
}

export default store;