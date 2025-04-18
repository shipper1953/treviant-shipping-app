exports.seed = function(knex) {
  return knex('users').del().then(function () {
    return knex('users').insert([
      {
        email: 'test@example.com',
        company: 'Test Co.',
        name: 'Test User',
        street1: '123 Main St',
        street2: 'Suite 100',
        city: 'Austin',
        state: 'TX',
        zip: '78701',
        phone: '555-123-4567',
        default_email: 'test@example.com'
      }
    ]);
  });
};
