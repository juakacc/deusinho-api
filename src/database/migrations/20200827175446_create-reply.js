exports.up = (knex) => (
  knex.schema.createTable('reply', (table) => {
    table.increments('id');
    table.text('reply').notNullable();
    table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.integer('question_id').unsigned().notNullable();

    table.foreign('question_id').references('id').inTable('question');
  }));

exports.down = (knex) => (
  knex.schema.dropTable('reply')
);
