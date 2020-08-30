const knex = require('../../../database/connection');

module.exports = {
  Question: {
    reply: (parent) => knex('reply').where('question_id', parent.id).first(),
  },
  Query: {
    question: (_, args) => knex('question').where('id', args.id).andWhere('show', true).first(),
    questions: () => knex('question').where('show', true).select('*'),
  },
  Mutation: {
    createQuestion: async (_, args) => {
      const { author, question } = args;

      const a = await knex('question').insert({
        author,
        question,
      });

      const response = await knex('question').where('id', a).first();
      return response;
    },
  },
};
