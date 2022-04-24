/**
 * 哈拼字符划分
 */
export class HapinCharDivision {
	private _hapin: string = ""
	private _idx: number = 0
	private _res: string[] = []

	constructor(hapin: string) {
		this._hapin = hapin
	}

	private _shotChar(c: string) {
		const next = this._hapin[this._idx + 1]
		if (c === "x") {
			if (["a", "o", "e", "u"].includes(next)) {
				this._res.push(c + next)
				this._idx += 2
				return
			}

			this._idx++
			return
		}

		if (c === "y") {
			if (["e", "u"].includes(next)) {
				this._res.push(c + next)
				this._idx += 2
				return
			}

			this._idx++
			return
		}

		if (c === "c") {
			if (next === "h") {
				this._res.push(c + next)
				this._idx += 2
				return
			}
			this._idx++
			return
		}

		if (c === "g") {
			if (next === "h") {
				this._res.push(c + next)
				this._idx += 2
				return
			}

			this._res.push(c)
			this._idx++
			return
		}

		if (c === "h") {
			if (next === "h") {
				this._res.push(c + next)
				this._idx += 2
				return
			}

			this._res.push(c)
			this._idx++
			return
		}

		if (c === "s") {
			if (next === "h") {
				this._res.push(c + next)
				this._idx += 2
				return
			}

			this._res.push(c)
			this._idx++
			return
		}

		if (c === "n") {
			if (next === "g") {
				this._res.push(c + next)
				this._idx += 2
				return
			}

			this._res.push(c)
			this._idx++
			return
		}

		this._res.push(c)
		this._idx++
		return
	}

	divide() {
		while (this._idx < this._hapin.length) {
			this._shotChar(this._hapin[this._idx])
		}
		return this._res
	}
}