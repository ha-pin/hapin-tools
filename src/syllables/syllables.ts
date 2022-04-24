import { HapinCharDivision } from "../utils"

/**
 * 音节划分
 */
export class SyllablesDivision {
	private _hapins: string[] = []
	private readonly _vowels: string[] = ["ye", "a", "o", "u", "e", "xa", "xo", "xe", "xu", "yu"]
	private _res: string[] = []
	private _idx: number = 0
	private _isKazakh = true

	constructor(hapin: string) {
		this._hapins = new HapinCharDivision(hapin).divide()
	}

	private _divideSyllables(c: string) {
		const next = this._hapins[this._idx + 1]
		if (this._idx === 0) {
			// 开音节判断
			if (this._vowels.includes(c)) {
				this._res.push(c)
				this._idx++
				return
			} else {
				if (this._vowels.includes(next)) {
					this._res.push(c + next)
					this._idx += 2
					return
				}

				// TODO 不是哈语词，直接结束
			}

			return
		}

		if (this._vowels.includes(c)) {
			// 元音
		}
	}

	divide() {
		while(this._idx < this._hapins.length && this._isKazakh) {
			this._divideSyllables(this._hapins[this._idx])
		}

		return this._res
	}
}