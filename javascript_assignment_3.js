const people = [ 
  "Alice Anderson", 
  "Aaron Adams", 
  "Bella Brown", 
  "Brian Black", 
  "Cathy Carter", 
  "Charles Cooper", 
  "Diana Davis", 
  "Daniel Drake", 
  "Ella Evans", 
  "Ethan Edwards", 
  "Fiona Fisher", 
  "Frank Foster", 
  "Grace Green", 
  "Gavin Gray", 
  "Hannah Harris", 
  "Henry Hill", 
  "Isabella Ingram", 
  "Ian Irving", 
  "Jack Johnson", 
  "Julia James" 
]; 

const nameWithB = people.filter(filterName);

function filterName(person){
    return person.charAt(0) == 'B'
}

console.log(nameWithB);