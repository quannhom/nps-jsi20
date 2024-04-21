// Câu 9:
let m = [1,2,3,4,5,6,"hh","9",80,100];
let m2 = m.filter(item => typeof item == 'number');
console.log(m2);
let mSquared = m2.map(item => item*item);
console.log(mSquared);

// Câu 10:
let str = [" High knowledge, high return"];
let strChange
for (let i = 0; i < str.length - 1; i++) {
  strChange = prompt(" High knowledge, high return").toLowerCase().trim();
  for (let j = i + 1; j < str.length; j++) {
      if (str[i].length > str[j].length){
        const temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      };
    };
  }
console.log(str);

// Câu 11:
class People {
  constructor(name, age, address) {
    this._name = name;
    this._age = age;
    this._address = address;
  };

  introduction(){
    return (`My name is ${this._name} and I am ${this._age} years old`);
  }
};

class Students extends People {
  constructor(name, age, address, id, math, physical, chemistry){
    super(name, age, address);
    this._id = id;
    this._math = math;
    this._physical = physical;
    this._chemistry = chemistry;
   };
};

let Quan = new Students(
  "Ngo Hoang Quan",
  14,
  "VietNam",
  123456789,
  8,
  9,
  10
);
console.log(Quan);

class average{
    constructor(math, physical, chemistry){
      this._math = math;
      this._physical = physical;
      this._chemistry = chemistry;
  };

  method(){
      return `Result = ${this._math} + ${this._physical} + ${this._chemistry}`;
  };
};

let AverageScore = new average(
  8,
  9,
  10
);

console.log(AverageScore);
alert(
  AverageScore.method()
)

// Câu 12:
class TriangleArea{
  constructor(D, C){
      this._D = D;
      this._C = C;
  }

  method(){
      return `S = ${this._D} * ${this._C}`;
  }
}

let triangle = new TriangleArea(
  2,
  3
);

console.log(triangle);
alert(
  triangle.method()
)