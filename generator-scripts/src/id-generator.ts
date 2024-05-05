export class IdGenerator {
	private _sequence: number = 1;

	public getNext(): string {
		return `value${this._sequence++}`;
	}
}