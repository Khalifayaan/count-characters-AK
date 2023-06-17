


function count(character, string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count++;
      }
    }
    return count;
  }
  
  
  const result = count("m", "communication");
  console.log(result);