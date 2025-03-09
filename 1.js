console.log('hi');
  const x = parseInt(prompt("Введите число:"))
  sum = 0;
  for ( let a = 1; a < x; a++) {
    if(x % a === 0) {
      sum += a;
    }
 }
 if (sum > x){
  console.log(x,'Избыточное');
 }
 else{
  console.log(x,'Не избыточное');
 }