
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students_table').insert([
        {id: 1, name: 'student1'},
        {id: 2, name: 'student2'},
        {id: 3, name: 'student3'}
      ]);
    });
};
