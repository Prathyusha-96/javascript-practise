// async js

const strLength = (name, cb) => {
  const lengthOfName = name.length;
  cb(lengthOfName);
};
const printName = (nameLength) => console.log(`my name is ${nameLength}long`);
printName(5);
strLength("pinky", printName);
