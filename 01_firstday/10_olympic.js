// const olympics = [
//   "第1回  1896年",
//   "第2回  1900年",
//   "第3回  1904年",
//   "第4回  1908年",
//   "第5回  1912年",
//   "第6回  1916年",
//   "第7回  1920年",
//   "第8回  1924年",
//   "第9回  1928年",
//   "第10回  1932年",
//   "第11回  1936年",
//   "第12回  1940年",
//   "第13回  1944年",
//   "第14回  1948年",
//   "第15回  1952年",
//   "第16回  1956年",
//   "第17回  1960年",
//   "第18回  1964年",
//   "第19回  1968年",
//   "第20回  1972年",
//   "第21回  1976年",
//   "第22回  1980年",
//   "第23回  1984年",
//   "第24回  1988年",
//   "第25回  1992年",
//   "第26回  1996年",
//   "第27回  2000年",
//   "第28回  2004年",
//   "第29回  2008年",
//   "第30回  2012年",
//   "第31回  2016年",
//   "第32回  2020年",]

//   for(let i=0; i < olympics.length; i++){
//       console.log(olympics[i]);
//   }

let i =1;
for(let year=1896; year<2021;year+=4){
    if( i!==6 || i !==12 || i !==13 ){
        console.log(`第${i}回 ${year}年`);
    }
    i++;
}
