// ! exercise number 3 : chessboard problem

const black = "#";
const white = " ";
// ! yeh total_row ham apne marzi se daal sakte hai but chessboard me 8 hote h so let's keep it 8
const total_rows = 8;
let line = ""

for(i=0;i < total_rows; i++){
    for(j=0; j<=total_rows;j++){
        // ! even rows me pehle white ko daalna fir black ko
        
        if(i%2===0){
            line += white
            line+=black
        }
        // ! odd rows me pehle black ko daalna fir white ko
     else{
            line += black
            line+=white
     }
       
    }
    // ! aur har line print karne k baad ek new line start kar dena
    line +="\n"  
}
console.log(line)
