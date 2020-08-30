exports.up = (knex) => (
  knex.schema.createTable('question', (table) => {
    table.increments('id');
    table.string('author').defaultTo('Anônimo');
    table.text('question').notNullable();
    table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.boolean('show').defaultTo(false);
  }));

exports.down = (knex) => (
  knex.schema.dropTable('question')
);
