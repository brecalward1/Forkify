# Fractional

A simple, lightweight fraction library.

## Getting Started

You can install fractional via npm:

```
npm install -s fractional.js
```

Or, if you plan to use it in the browser, you can use a cdn:

```html
<script src="https://unpkg.com/fractional.js"></script>
```

## Examples

```js
let pi = new Fractional(22,7)   // -> {n:22, d:7}
new Fractional(22/7)            // -> {n:22, d:7}
new Fractional([22,7])          // -> {n:22, d:7}

pi.sub(3)                       // -> {n:1, d:7}
pi.sub(new Fractional(1,3))     // -> {n:59, d:21}
pi.mul(2)                       // -> {n:44, d:7}
pi.pow(3)                       // -> {n:10648, d:343}
pi.mul(2).sub(3/4)              // -> {n:155, d:28}

pi.toString()                   // -> 22/7
pi.valueOf()                    // -> 3.14285714285714

1/10 + 2/10                     // -> 0.30000000000000004
new F(1/10).add(2/10).valueOf() // -> 0.3
new F(1/10 + 2/10)              // -> 0.3
```

## Docs

The docs can be found on the [github wiki](https://github.com/lucasgruwez/fractional.js/wiki).

## Built With

0 dependencies!

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/lucasgruwez/fractional.js/tags).

## Authors

* **Lucas Gruwez** - *Initial work* - [lucasgruwez](https://github.com/lucasgruwez)

See also the list of [contributors](https://github.com/lucasgruwez/fractional.js/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) for details
