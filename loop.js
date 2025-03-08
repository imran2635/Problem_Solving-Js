function loop() {
  const testArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
    
    for(let index in testArray){
        console.log(`Curret Data for index ${index}: ${testArray[index]}`);
    }
}

loop();
