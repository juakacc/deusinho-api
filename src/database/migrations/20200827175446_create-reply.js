exports.up = (knex) => (
  knex.schema.createTable('reply', (table) => {
    table.increments('id');
    table.string('reply').notNullable();
    table.datetime('createdAt').notNullable();
    table.integer('question_id').unsigned().notNullable();

    table.foreign('question_id').references('id').inTable('question');
  }));

exports.down = (knex) => (
  knex.schema.dropTable('reply')
);
