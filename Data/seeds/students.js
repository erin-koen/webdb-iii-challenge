
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'student1'},
        {id: 2, name: 'student2'},
        {id: 3, name: 'student3'}
      ]);
    });
};
