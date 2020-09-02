const knex = require('../../../database/connection');

module.exports = {
  Query: {
    suggestion: (_, args) => knex('plan_suggestion').where('id', args.id).andWhere('show', true).first(),
    suggestions: () => knex('plan_suggestion').where('show', true).select('*'),
  },
  Mutation: {
    createSuggestion: async (_, args) => {
      const { author, field, suggestion } = args;

      const created = await knex('plan_suggestion').insert({
        author,
        field,
        suggestion,
      });

      const response = await knex('plan_suggestion').where('id', created).first();
      return response;
    },
  },
};
