function countSheep(count) {
  if (count === 0 ){
    console.log('All Sheep jumped over the fence');
    return;
  }    
  console.log(`${count}: Another sheep jumps over the fence`);
  countSheep(count-1);
}

function powerCalculator(base,exp) {
  if(exp < 0) {
    console.log('exponent should be >= 0');
    return;
  }

  if(exp === 0) {
    return 1;
  }

  return base * powerCalculator(base, exp - 1);
}

function reverseString(string){
  console.log(string);
  if(string.length === 0)
    return '';

  return string[string.length-1] + reverseString(string.slice(0,string.length-1));
}

function triangularNumber(n){
  if(n === 0) {
    return 0;
  }

  return n + triangularNumber(n-1);
}

function getString(string,separator){
  if(string[0] === separator)
    return '';

  if(string.length === 0)
    return '';
  
  return string[0] + getString(string.slice(1),separator);
}

function stringSplitter(string,separator){
  if(string.length === 0 || !string){
    return '';
  }  
    
  const firstValue = getString(string,separator);

  return [firstValue,...stringSplitter(string.slice(firstValue.length+1),separator)];
}

function fibonacciSequence(n,x=0,y=1){
  if(n === 1){
    return y.toString();
  }

  if(n < 1) {
    return 'can\'t have negatives';
  }

  return `${y}, ` + fibonacciSequence(n-1,y,x+y);
}

function factorial(number) {
  if(number === 1)
    return 1;

  return number * factorial(number-1);    
}

function findPath(maze,x=0,y=0,lastDirection='',prevLocations=[],pathString=''){
  if(maze[x][y] === 'e'){
    console.log(pathString);
    return;
  }

  //Check Down Path
  if(x+1 < maze.length && lastDirection !== 'U' ){
    if (maze[x+1][y] !== '*' && prevLocations.includes(`${x+1},${y}`) === false){
      prevLocations.push(`${x+1},${y}`);
      findPath(maze,x+1,y,'D',prevLocations,pathString+'D');
      prevLocations.pop();
    }
  }

  //Check Up Path
  if(x > 0 && lastDirection !== 'D' ){    
    if (maze[x-1][y] !== '*' && !(prevLocations.includes(`${x-1},${y}`))){
      prevLocations.push(`${x-1},${y}`);
      findPath(maze,x-1,y,'U',prevLocations,pathString+'U');
      prevLocations.pop();
    }
  }

  //Check Right Path
  if(y+1 < maze[x].length && lastDirection !== 'L'){    
    if (maze[x][y+1] !== '*' && !(prevLocations.includes(`${x},${y+1}`))){
      prevLocations.push(`${x},${y+1}`);
      findPath(maze,x,y+1,'R',prevLocations,pathString+'R');
      prevLocations.pop();
    }
  }

  //Check Left Path
  if(y > 0 && lastDirection !== 'R'){    
    if (maze[x][y-1] !== '*' && !(prevLocations.includes(`${x},${y-1}`))){
      prevLocations.push(`${x},${y-1}`);
      findPath(maze,x,y-1,'L',prevLocations,pathString+'L');
      prevLocations.pop();
    }
  }  
}

// countSheep(5);
// console.log(powerCalculator(2,10));
// console.log(reverseString('this is a string'));
// console.log(triangularNumber(5));
// console.log(getString('02/20/2020','/'));
// console.log(stringSplitter('02/20/2020','/'));
// console.log(fibonacciSequence(10));
// console.log(factorial(5));

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let smallestMaze = [['e']];

// findPath(maze);

// function anagrams(string,prefix=''){
//   if(string.length === 1){
//     console.log(prefix+string);
//   } else {
//     for(let i = 0; i < string.length; i++){
//       const currentLetter = string.slice(i,i+1);
//       const beforeLetters = string.slice(0,i);
//       const afterLetters = string.slice(i+1);

//       console.log(currentLetter);

    
//       anagrams(prefix+currentLetter,beforeLetters+afterLetters);
//     }    
//   }
// }

//east
//eats
//esat
//esta


// anagrams('east');

const orgChart = {
  name: 'Zuckerberg',
  team: {
    name: 'Shroeper',
    team: {
      name: 'Bosworth',
      team: {
        name: 'Steve',
        name1: 'Kyle',
        name2: 'Andra',
      }
    }
  }
};

function organizationChart(obj){
  if(Object.keys(obj).includes('name')){
    return obj.name;
  } else {
    return '  ';
  }
    
  if(!(Object.keys(obj).includes('team'))){
    return;
  }

  console.log('  ' + organizationChart(obj.team));
}

organizationChart(orgChart);