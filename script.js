const prompt =  require('prompt-sync')({sigint:true});



const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
      constructor(field){
        this._field = field;
  }
  path(v, h){
      return this._field[v][h] = pathCharacter;
  }
  print(){
        for(let i = 0; i < this._field.length; i++){
            console.log(this._field[i].join(' ').toString())
        }
  }
}

const myField = new Field([
      ['*', '░', '░'],
      ['░', 'O', '░'],
      ['░', '^', '░'],
]);
    



let founHat = false;

let vertical = 0;
let horizontal = 0;


while (!founHat) {
      
      myField.print()
      
      let guess = prompt('Which Way?  ')

      if(guess === 'quit'){
            founHat = true;
      }

      switch(guess){
            case 'd':
                  vertical = vertical += 1;
                  if (vertical > myField._field.length - 1){
                        founHat = true;
                        console.log('Out of bound')
                  }else{   
                        checkPath(vertical, horizontal);
                  }
                  break;
            case 'r':
                  horizontal = horizontal += 1;
                  checkPath(vertical, horizontal);
                  break;
            case 'l':
                  horizontal = horizontal -= 1;
                  checkPath(vertical, horizontal);
                  break;
            case 'u':
                  vertical = vertical -= 1;
                  if(vertical < 0){
                        founHat = true
                        console.log("out of bound")
                  }else{
                        checkPath(vertical, horizontal);
                  }
                  break;
            default:
                  console.log('u | d | l | r')
                  break;
      }
}



function checkPath(v,h){
      if(v > myField._field.length - 1 || v < 0){
            founHat = true;
            console.log('Out of Bound')
      }else if(h > myField._field.length - 1 || h < 0){
            founHat = true;
            console.log('Out of Bound')
      }
      if(myField._field[v][h] === hole){
            founHat = true;
            console.log('Fell in hole')
      }else if(myField._field[v][h] === hat){
            founHat = true
            console.log('Hat Found')
      }else{
            myField.path(v, h)
      }
}

