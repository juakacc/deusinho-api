const knex = require('../../../database/connection');

module.exports = {
  Query: {
    question: (_, args) => knex('question').where('id', args.id).first(),
    questions: () => knex('question').select('*'),
  },
  Mutation: {
    createQuestion: (_, args) => {
      // questions.push(args);
      return args;
    },
  },
};
