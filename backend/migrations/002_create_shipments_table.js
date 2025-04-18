exports.up = function(knex) {
  return knex.schema.createTable('shipments', function(table) {
    table.increments('id').primary();
    table.string('email').notNullable();
    table.string('barcode');
    table.string('carrier');
    table.string('service');
    table.decimal('cost', 10, 2);
    table.string('tracking_code');
    table.string('tracking_url');
    table.string('label_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('shipments');
};
