const numberOfRows = 5
// ! pehle empty string ko initialize kardo
let stars = ''
for(i=0;i<numberOfRows - 1;i++){

    // ! har loop k andar ek aur loop chalao
    // ! yeh wala loop 0 se lekar jo b i ki value hogi wahi tak chalega.
    for(j=0;j<i;j++){
        // ! isi kaaran triangle type ka shape banta hai. jab zero se i ki value tak inner loop chalta hai
        // ! tab har row me i ki value change hoti hai aur usi variation se
        // ! triangle wala shape banta hai.
        // ! to be very precise, this is left triangle pattern.

        stars+="*"

        console.log(stars)
    }

}