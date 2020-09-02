exports.up = (knex) => (
  knex.schema.createTable('plan_suggestion', (table) => {
    table.increments('id');
    table.string('author').defaultTo('Anônimo');
    table.string('field');
    table.text('suggestion').notNullable();
    table.datetime('createdAt').notNullable().defaultTo(knex.fn.now());
    table.boolean('show').defaultTo(false);
  }));

exports.down = (knex) => (
  knex.schema.dropTable('plan_suggestion')
);
