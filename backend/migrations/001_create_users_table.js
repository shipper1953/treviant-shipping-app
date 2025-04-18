exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('company');
    table.string('name');
    table.string('street1');
    table.string('street2');
    table.string('city');
    table.string('state');
    table.string('zip');
    table.string('phone');
    table.string('default_email');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
