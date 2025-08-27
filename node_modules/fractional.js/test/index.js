const T = require('./test.js');
const F = require('../fraction.js');

const S = new Date().getTime()

var test = new T('constructor')

let p = {n: 22, d: 7}

test.equals(new F(22, 7),       p)
test.equals(new F([22, 7]),     p)
test.equals(new F({n:22, d:7}), p)
test.equals(new F(22/7),        p)

test.done()

var test = new T('basic functions')

let a = new F(4, 3)
let b = new F(-5, 6)
let c = new F(4, 52)

test.equals(a.add(b),       {n:01, d:02})
test.equals(b.add(c),       {n:-59, d:78})
test.equals(c.add(a),       {n:55, d:39})
test.equals(a.add(8),       {n:28, d:03})
test.equals(b.add(5),       {n:25, d:06})

test.equals(a.sub(b),       {n:13, d:06})
test.equals(b.sub(c),       {n:-71, d:78})
test.equals(c.sub(a),       {n:-49, d:39})
test.equals(a.sub(8),       {n:-20, d:03})
test.equals(b.sub(5),       {n:-35, d:06})

test.equals(a.mul(b),       {n:-10, d:09})
test.equals(b.mul(c),       {n:-05, d:78})
test.equals(c.mul(a),       {n:04, d:39})
test.equals(a.mul(8),       {n:32, d:03})
test.equals(b.mul(5),       {n:-25, d:06})

test.equals(a.div(b),       {n:-08, d:05})
test.equals(b.div(c),       {n:-65, d:06})
test.equals(c.div(a),       {n:03, d:52})
test.equals(a.div(8),       {n:01, d:06})
test.equals(b.div(5),       {n:-01, d:06})

test.done()

var test = new T('exponential')

test.equals(a.pow(5),       {n:1024, d:243})
test.equals(b.pow(3),       {n:-125, d:216})
test.equals(c.pow(2),       {n:0001, d:169})

test.isClose(a.pow(b).valueOf(),      .7868362976)
test.equals(new F(9,25).pow([1,2]).valueOf(), .6)

test.done()

var test = new T('misc')

test.equals(a.reciprocal(), {n:3, d:4})

test.equals(a.toString(),   '4/3')
test.equals(b.toString(),   '-5/6')
test.equals(c.toString(),   '1/13')

test.isClose(a.valueOf(),   1.333333333)
test.isClose(b.valueOf(),   -.833333333)
test.isClose(c.valueOf(),   .0769230769)

test.done()

const E = new Date().getTime()

console.log(`\nTime: ${E-S}ms`)
