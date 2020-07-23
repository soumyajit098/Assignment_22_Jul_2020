'use strict'


let x=0
let text=''
console.log('While Loop...')
while( x < 10){
    text += 'The number is ' + x;
    x++;
}
console.log(text)


//do while loop

let m=0
let result=''
do{
    m= m + 1;
    result = result + m
}while(m<5)
console.log(result)

//switch case

const carName = 'BMW'
switch ( carName) { 
    case 'VOLVO' :
        console.log('Worlds safest car')
        break ;
    case 'AUDI' :
    case 'BMW' :
        console.log('Both BMW and AUDI are German Cars')
        break ;
    default :
        console.log(`Sorry ${carName} is not available `)
}