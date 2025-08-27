const path = require('path');

class test {
	constructor(name) {
		this.tests = 0
		this.pass  = 0
		this.name  = name
	}

	equals(a,b) {

		this.tests++

		if (typeof a == 'string') a == b ? this.pass++ : this._err(a,b);
		if (typeof a == 'boolean') a == b ? this.pass++ : this._err(a,b);
		if (typeof a == 'number') {
			if (Number.isNaN(a) && Number.isNaN(b)) this.pass++
			a == b ? this.pass++ : this._err(a,b);
		}
		if (typeof a == 'object') {
			a = JSON.stringify(a)
			b = JSON.stringify(b)
			a == b ? this.pass++ : this._err(a,b);
		}
		if (typeof a == 'undefined') typeof b == 'undefined' ? this.pass++ : this._err(a,b);
	}

	isClose(a,b) {

		if (typeof a == 'number') {
			a = Math.round(a * 1E5) / 1E5
			b = Math.round(b * 1E5) / 1E5
			this.equals(a,b)
		}

	}

	_err(a,b) {
		console.error(`Test #${this.tests} failed`);
		if (typeof a == 'object') a = JSON.stringify(a)
		if (typeof b == 'object') b = JSON.stringify(b)
		console.error(`Got: ${a.toString()}, expected: ${b.toString()}\n`)
	}

	done() {
		let msg = `${this.name}  ${this.pass}/${this.tests}`.length
		msg = Array(80 - msg+1).join('.')
		msg = `${this.name} ${msg} ${this.pass}/${this.tests}`
		console.log(msg)
	}
}

module.exports = test;
