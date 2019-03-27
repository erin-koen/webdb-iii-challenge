exports.up = function(knex) {
  return knex.schema.createTable("cohorts", function(tbl) {
    //create a primary key, will default to being called id
    tbl.increments();
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cohorts");
};
