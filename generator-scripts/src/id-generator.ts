export class TwoByteIdGenerator {
	private _sequence: number = 1;

	public getNext(): string {
		// Use 2-letter names to save up on raw lib size
		return `v${this._sequence++}`;
	}
}