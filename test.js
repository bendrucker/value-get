'use strict'

var test = require('tape')
var get = require('./')

test(function (t) {
  t.equal(get('foo', {foo: 'bar'}), 'bar')
  t.equal(get('foo.bar', {foo: {bar: 'baz'}}), 'baz')
  t.equal(get('foo')({foo: 'bar'}), 'bar')
  t.end()
})
