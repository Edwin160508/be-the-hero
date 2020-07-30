
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(column){
    column.increments();

    column.string('title').notNullable();
    column.string('description').notNullable();
    column.decimal('value').notNullable();

    column.string('ong_id').notNullable();

    column.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
