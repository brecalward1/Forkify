/*!
 * fractional.js - v1.0.0 - (https://github.com/lucasgruwez/fractional.js)
 * Copyright 2017 Lucas Gruwez.
 * Licensed under MIT
 * https://github.com/lucasgruwez/fractional.js
 */

let err = {
	divideBy0: new EvalError('Can\'t divide by 0'),
	invalidParam: new TypeError('Invaild paramteter'),
}

let F = (f) => {
	if (f instanceof Fraction) return f
	if (typeof f == 'number' && f % 1 == 0) f = [f,1]
	return new Fraction(f)
}

class Fraction {

	/**
	 * Create a fraction
	 * @param {number}  a                Numerator
	 * @param {number}  b                Denominator
	 */

	constructor(a,b) {

		if (b == 0) throw err.divideBy0

		if (a % 1 == 0 && b % 1 == 0) {
			this.n = Math.abs(a / this._gcd(a,b))
			this.d = Math.abs(b / this._gcd(a,b))
			if (a * b < 0) this.n = -this.n
			return this
		}
		switch (typeof a) {

			case 'object':
				if ('n' in a && 'd' in a) return new Fraction(a.n, a.d)
				if (0 in a) return new Fraction(a[0], a[1])
				else throw err.invalidParam

			case 'number':
				// approximate using Farey sequence
				const N = 1E8

				let lo = [0,1]
				let hi = [Math.ceil(a),1]

				while (lo[1] <= N && hi[1] <= N) {

					let med = (lo[0] + hi[0]) / (lo[1] + hi[1])
					if (a === med) {
						if (lo[1] + hi[1] <= N) {
						return new Fraction(lo[0] + hi[0], lo[1] + hi[1])
						}
						if (lo[1] > hi[1]) return new Fraction(hi)
						return new Fraction(lo)
					}
					else if (med < a) lo = [lo[0] + hi[0], lo[1] + hi[1]]
					else              hi = [lo[0] + hi[0], lo[1] + hi[1]]

				}

				if (lo[1] > N) return new Fraction(hi)
				return new Fraction(lo)

			default:
				throw err.invalidParam

		}

	}

	/**
	 * Fraction to string
	 * @return {string} n/d
	 */

	toString() {
		return `${this.n}/${this.d}`
	}

	/**
	 * Value of fraction
	 * @return {number} value
	 */

	valueOf() {
		return this.n / this.d
	}

	/**
	 * Add a number to this
	 * @param  {number | Fraction} f number to add to this
	 * @return {Fraction}            this + f
	 */

	add(f) {
		f = F(f)
		let n = this.n * f.d + this.d * f.n
		let d = this.d * f.d
		return new Fraction(n,d)
	}

	/**
	 * Subtract a number from this
	 * @param  {number | Fraction} f number to subtract from this
	 * @return {Fraction}            this - f
	 */

	sub(f) {
		f = F(f)
		let n = this.n * f.d - this.d * f.n
		let d = this.d * f.d
		return new Fraction(n,d)
	}

	/**
	 * Multiply this by a number
	 * @param  {number | Fraction} f number to multiply this by
	 * @return {Fraction}            this * f
	 */

	mul(f) {
		f = F(f)
		let n = this.n * f.n
		let d = this.d * f.d
		return new Fraction(n,d)
	}

	/**
	 * Divide this by a number
	 * @param  {number | Fraction} f number to divide this by
	 * @return {Fraction}            this / f
	 */

	div(f) {
		f = F(f)
		let n = this.n * f.d
		let d = this.d * f.n
		return new Fraction(n,d)
	}

	/**
	 * Returns the reciprocal of this
	 * @return {Fraction} 1 / this
	 */

	reciprocal() { return new Fraction(1,1).div(this) }

	/**
	 * Raise this to a power
	 * @param  {number | Fraction} f exponent to raise this to
	 * @return {number | Fraction}   this ^ f
	 */

	pow(f) {
		f = F(f).valueOf()
		if (f % 1 == 0 && f >= 0) return new Fraction(this.n**f, this.d**f)
		if (f % 1 == 0 && f <= 0) return new Fraction(this.d**-f, this.n**-f)
		return new Fraction( this.n**f / this.d**f )
	}

	/**
	 * Get the nth root of this
	 * @param  {number | Fraction} n root base
	 * @return {number | Fraction}   nth root of this
	 */

	nthRoot(n) { return this.pow(new Fraction(1, n)) }

	_gcd(a,b) {
		while (b) {
			let t = a % b
			a = b
			b = t
		}
		return a
	}

}

module.exports = Fraction;
