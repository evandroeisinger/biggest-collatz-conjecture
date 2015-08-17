#!/usr/bin/env node

var n = process.argv[2];
var d = new Date().getTime();
var c = {1: 1};

function collatzLength(n) {
  if (!(n in c)) {
    if (n % 2 == 0)
      c[n] = collatzLength(n * 0.5) + 1;
    else
      c[n] = collatzLength(n * 3 + 1) + 1;
  }

  return c[n];
};

function biggestCollatzSequence(s) {
  var bs = s;
  var bl = 0;

  while (s > 0) {
    var l = collatzLength(s);

    if (l > bl) {
      bl = l;
      bs = s;
    }

    s--;
  }

  return bs;
}

console.log('\x1b[36mnumber with biggest collatz sequence:\x1b[0m \x1b[45m %s \x1b[0m', biggestCollatzSequence(n));
console.log('\x1b[35m%s seconds\x1b[0m',(new Date().getTime() - d) / 1000);
