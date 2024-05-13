/**
 * A class used to generate incrementing, TypeScript compatible, two-byte IDs
 *
 * @export
 * @class TwoByteIdGenerator
 */
export class TwoByteIdGenerator {
	private _sequence: number = 1;

	/**
	 * Gets the next ID in the sequence
	 *
	 * @return {string}
	 * @memberof TwoByteIdGenerator
	 */
	public getNext(): string {
		// Use 2-letter names to save up on raw lib size
		return `v${this._sequence++}`;
	}
}