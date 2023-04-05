
let blackRabbit = {type:'aggressive',speak}

blackRabbit.speak("WHOA")


function speak (line){
    if(this.type==='aggressive'){
        
        console.log(`I am an ${this.type} rabbit & ${line}`)
    }
    else{

        console.log(`I am a ${this.type} rabbit and I say ${line}`)
    }
}

let rabbit = {type:'normal',speak}
rabbit.speak("I can run faster than tortoise")


// ! calling the speak function on blackRabbit
speak.call(blackRabbit,"I am also becoming normal")

rabbit.eat = function(fruit){
    if(fruit==='Mango'){
        console.table(`Thank you for giving me mango`)
    }else{
        console.table(`I only eat mangoes.PLease give me one.`) 
    }
}





// rabbit.speak('Hello')

rabbit.eat('Mango')