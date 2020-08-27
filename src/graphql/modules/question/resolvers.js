const questions = [{
  id: 1,
  author: 'Joaquim',
  question: 'Testando',
  createdAt: '2020-12-12',
}, {
  id: 2,
  author: 'Julia',
  question: 'Testando 2',
  createdAt: '2020-12-12',
}];

module.exports = {
  Query: {
    question: () => questions[0],
    questions: () => questions,
  },
  Mutation: {
    createQuestion: (_, args) => {
      questions.push(args);
      return args;
    },
  },
};
