const hello = () => {
  console.log("Hello World");
	
}

console.log(hello);

const hello2 = {
  greet: ()=>{
      console.log("helloWorld");
  }
}

hello2.greet();

class Human {
    constructor(){
    }
    greet(){
        console.log("hello");
    }
}
const yutaka = new Human();
yutaka.greet();
