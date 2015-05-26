#!/usr/bin/env node

var n = process.argv[2];
var d = new Date().getTime();

function biggestCollatzSequence(s) {
  var bs = s;
  var bl = 0;

  while(s > 0) {
    var n = s;
    var l = 0;

    while(n !== 1) {
      l++;

      if (n % 2 == 0)
        n = n / 2;
      else
        n = 3 * n + 1;
    }

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
