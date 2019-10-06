const printYutaka = () => {
  console.log("Yutaka");
};
const call = (callback) => {
  console.log("私の名前は");
  callback();
};
call(printYutaka)