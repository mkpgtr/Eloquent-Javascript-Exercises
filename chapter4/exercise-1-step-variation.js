

function range(start,end,step=1){

    let result1 = []
    if(step<0 && end>=start){
        console.log( "Start should be greater than end")
        return "Start should be greater than end";
    }

    const arrayOfNumbers = []

   

   if(start<end){
    for(i=start;i<end;i++){
     
        if(i===start){
            arrayOfNumbers[0]=start
        }
        else if(i===end-1){
            arrayOfNumbers.push(end)
        } 
            
            // ! arrayOfNumbers[0]+2 = arrayOfNumbers[1]
        arrayOfNumbers[i]=arrayOfNumbers[i-1]+(step)
        

        if(arrayOfNumbers[arrayOfNumbers.length-1]<end && arrayOfNumbers[arrayOfNumbers.length-1]+step >= end ){
      
           result1 = arrayOfNumbers
           return result1
            
        } 
       
   
    }
   }

   if(start>end){
    let result = []
    console.log("start is greater than end")
    let arrayOfNumbers = []
    for(i=start;i>end;i--){
        if(i===start){

            arrayOfNumbers[start] = start
        }
        if(i>end){
            // ! while checking with console.log I found out that I had to put a limit and extract array from a certain point
            // ! so then I thought that I should put a limit by checkcing if the element is greater than or equal to end minus one
            if(arrayOfNumbers[i]>=end-1){

                
                result = arrayOfNumbers.filter((element)=>{
                    if(element>0) return element
                }).reverse()

                // console.log('hurray', arrayOfNumbers.filter((element)=>{
                //     if(element>0) return element
                // }).reverse())
            
                
            }

            //  ! arrayOfNumbers[9] = arrayOfNumbers[10]-step 
            if(step < 0){
                 // ! if someone enters range(10,1,-2), it will output [10,8,6,4,2]
                arrayOfNumbers[i-1] = arrayOfNumbers[i] + (step)

            }
            else{

                // ! if someone enters range(10,1,2), it will output [10,8,6,4,2]
                arrayOfNumbers[i-1] = arrayOfNumbers[i] - step
            }
            

            
            
           console.log(i)
        }

            console.log(arrayOfNumbers)
        

    }
    console.log(arrayOfNumbers)
  return result
   
   }
   
}
// range(1,10,2) // [1,3,5,7,9]

console.log(range(1,10,1)) // [10,8,6,4,2]