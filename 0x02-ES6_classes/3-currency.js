export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._code = value;
    } else {
      throw new TypeError('code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._name = value;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
