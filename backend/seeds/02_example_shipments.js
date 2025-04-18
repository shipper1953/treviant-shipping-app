exports.seed = function(knex) {
  return knex('shipments').del().then(function () {
    return knex('shipments').insert([
      {
        email: 'test@example.com',
        barcode: 'TEST123456789',
        carrier: 'UPS',
        service: 'Ground',
        cost: 8.50,
        tracking_code: '1Z999AA10123456784',
        tracking_url: 'https://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=1Z999AA10123456784',
        label_url: 'https://example.com/fake-label.pdf'
      }
    ]);
  });
};
