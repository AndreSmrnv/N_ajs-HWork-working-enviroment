// TODO: write your code here

import getBuffer from './getbuffer';

export class ArrayBufferConverter {
    constructor() {
        this.ArrayBuffer ;
      }
  load(buffer) {
    this.ArrayBuffer  = getBuffer(buffer);
  }

  toString() {
    return String.fromCharCode(...new Uint16Array(this.ArrayBuffer ));
  }
}


console.log('worked');
