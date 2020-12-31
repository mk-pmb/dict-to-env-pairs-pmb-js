
<!--#echo json="package.json" key="name" underline="=" -->
dict-to-env-pairs-pmb
=====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Convert a dictionary object to an array of key=value pairs.
<!--/#echo -->



API
---

This module exports one function:

### dictToEnvPairs(dict[, opt])

`dict` is a dictionary object.

`opts` is an optional options object that supports these optional keys:

* `pfx`: Prefix for each line. Default: empty string.
* `sep`: Separator for each line. Default: `'='`.
* `suf`: Suffix for each line. Default: empty string.
* `reKey`: A function that encodes/quotes/defuses the keys.
* `reVal`: A function that encodes/quotes/defuses the values.




Usage
-----

see [test/basics.mjs](test/basics.mjs)


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
