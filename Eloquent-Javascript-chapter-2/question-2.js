const start = 1;
const end = 100;
const when_divisible_by_3 = "Fizz"
const when_divisible_by_5 = "Buzz"
const when_divisible_by_both_3_n_5 = "FizzBuzz"

for(i = start; i<= end;i++){
    // ! pehle check kar lena ki dono se divisible hai, isse koi b case miss nahi hoga
    if(i%3===0 && i%5===0){
        console.log(when_divisible_by_both_3_n_5);
    }
    // ! isme sirf 3 se divisible wale hi include honge
    else if(i%3==0){
        console.log(when_divisible_by_3);
        
    }
    // ! isme sirf 5 se divisible wale hi include honge
    else if(i%5==0){
        console.log(when_divisible_by_5);

    }
    else{
// ! aur isme baaki saare jo uppar kisi b condition ko meet nahi kiye
        console.log(i)
    }
}