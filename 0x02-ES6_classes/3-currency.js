export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
  //getter function
  get code() {
    return this._code;
  }
  //setter function
  set code(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._code = value;
    } else {
	throw new TypeError("code must be a string");
    }
  }
  //getter function
  get name() {
    return this._name;
  }
  //setter function
  set name(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._name = value;
    } else {
	throw new TypeError("name must be a string");
    }
  }
  //full function
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
