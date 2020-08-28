exports.up = (knex) => (
  knex.schema.createTable('question', (table) => {
    table.increments('id');
    table.string('author');
    table.string('question').notNullable();
    table.datetime('createdAt').notNullable();
  }));

exports.down = (knex) => (
  knex.schema.dropTable('question')
);
