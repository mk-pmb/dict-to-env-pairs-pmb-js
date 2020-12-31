// -*- coding: utf-8, tab-width: 2 -*-

const dfOpt = {
  pfx: '',
  sep: '=',
  suf: '',
};

function pairs(dict, opt) {
  const { pfx, sep, suf } = { ...dfOpt, ...opt };
  const ck = (opt.reKey || String);
  const cv = (opt.reVal || String);
  function f([k, v]) { return pfx + ck(k) + sep + cv(v) + suf; }
  return Object.entries(dict).map(f);
}

Object.assign(pairs, {
  dfOpt,
});

export default pairs;
