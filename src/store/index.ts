const totQuestions = 10;
const totAnswers = 6;

const store = {
  data: {
    questions: Array.from( Array(totQuestions), () => new Array(totAnswers))
  }
}

export default store;