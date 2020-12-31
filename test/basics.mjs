// -*- coding: utf-8, tab-width: 2 -*-

import 'p-fatal';
import test from 'p-tape';

import dictToEnvPairs from '.';


const animalSounds = {
  // https://en.wikipedia.org/wiki/List_of_animal_sounds
  bee: 'buzz',
  cat: 'meow',
  cow: 'moo',
  rat: 'squeak',
};


test('simple ini', (t) => {
  t.plan(1);
  t.equal(dictToEnvPairs(animalSounds), [
  ]);
});
