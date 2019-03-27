exports.up = function(knex) {
  return knex.schema.createTable("students", function(tbl) {
    //creating the primary key, autoincrementing, called ID
    tbl.increments();
    //createing the name field
    tbl.string("name").notNullable();
    //creating a foreign key that ties to cohort ID
    tbl
      .integer("cohort_id")
      .unsigned()
      .references("id")
      .inTable("cohorts")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("students");
};
