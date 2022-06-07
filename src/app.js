// async js

const strLength = (name, cb) => {
  const lengthOfName = name.length;
  cb(lengthOfName);
};
strLength("ram");
// const printName = (nameLength) => console.log(`my name is ${nameLength}long`);
// printName(5);
// strLength("pinky", printName);

// undefined vs not defined
console.log(a);
var a = 10;
{
  var b = 5;
  console.log(b);
}
