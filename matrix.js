class MatrixArray {
    constructor(width, height, element = (x, y) => undefined) {
      this.width = width;
      this.height = height;
      this.matrix = [];
  
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          this.matrix[y * width + x] = element(x, y);
        }
      }
    }
  
    get(x, y) {
      return this.matrix[y * this.width + x];
    }
    set(x, y, value) {
      this.matrix[y * this.width + x] = value;
    }
  }


let neo = new MatrixArray(4,4,(x, y)=> `coordinates ${x}, ${y}`);

for (let {x, y, value} of neo) {
    console.log(x ,y, value);
}