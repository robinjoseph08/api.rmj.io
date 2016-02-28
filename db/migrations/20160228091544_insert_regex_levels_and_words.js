'use strict';

exports.up = function (knex, Promise) {
  return Promise.resolve()
  .then(() => {
    let count = 1;
    return Promise.all([
      knex('regex_levels').insert({ id: count++ }),
      knex('regex_levels').insert({ id: count++ }),
      knex('regex_levels').insert({ id: count++ }),
      knex('regex_levels').insert({ id: count++ })
    ]);
  })
  .then(() => {
    let count = 1;
    return Promise.all([
      knex('regex_words').insert({ id: count++, value: 'rotation', side: 'left', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'rotten', side: 'left', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'rotisserie', side: 'left', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'rottweiler', side: 'left', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'rotator', side: 'left', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'rotunda', side: 'left', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'godot', side: 'right', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'wrote', side: 'right', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'tornado', side: 'right', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'roman', side: 'right', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'retail', side: 'right', regex_level_id: 1 }),
      knex('regex_words').insert({ id: count++, value: 'holiday', side: 'right', regex_level_id: 1 }),

      knex('regex_words').insert({ id: count++, value: 'foot', side: 'left', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'feeling', side: 'left', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'rubber', side: 'left', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'moons', side: 'left', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'spoon', side: 'left', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'reef', side: 'left', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'forlorn', side: 'right', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'rusting', side: 'right', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'response', side: 'right', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'ferns', side: 'right', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'whole', side: 'right', regex_level_id: 2 }),
      knex('regex_words').insert({ id: count++, value: 'knocked', side: 'right', regex_level_id: 2 }),

      knex('regex_words').insert({ id: count++, value: 'joe@gmail.com', side: 'left', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: 'jsmith538@me.com', side: 'left', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: 'joe_smith@smith.io', side: 'left', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: 'js9274@college.edu', side: 'left', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: 'joe.smith@hotmail.co.uk', side: 'left', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: 'joe-s@sbcglobal.net', side: 'left', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: '@.com', side: 'right', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: '@gmail.com', side: 'right', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: 'joesmith@', side: 'right', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: 'joe_s.yahoo.com', side: 'right', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: 'joe@smith@me', side: 'right', regex_level_id: 3 }),
      knex('regex_words').insert({ id: count++, value: 'joe..smith@hotmail.com', side: 'right', regex_level_id: 3 }),

      knex('regex_words').insert({ id: count++, value: '214-555-8260', side: 'left', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '(415) 237-9732', side: 'left', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '646.864.9731', side: 'left', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '1-800-239-8261', side: 'left', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '2129630725', side: 'left', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '972 832 7236', side: 'left', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '765234046', side: 'right', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '(652-125-6732)', side: 'right', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '-800-825-8259', side: 'right', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '(9) 527-8152', side: 'right', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '9260 8326 23', side: 'right', regex_level_id: 4 }),
      knex('regex_words').insert({ id: count++, value: '12 (800) 180 1963', side: 'right', regex_level_id: 4 })
    ]);
  });
};

exports.down = function (knex, Promise) {
  return knex('regex_words').where('id', '<=', 48).del()
  .then(() => knex('regex_levels').where('id', '<=', 4));
};
