exports.up = function (knex) {
  return knex.schema.createTable('question', (table) => {
    table.increments('id');
    table.string('author');
    table.string('question').notNullable();
    table.datetime('createdAt').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('question');
};
