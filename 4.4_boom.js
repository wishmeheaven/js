


function checkBoom(number) {

let sevenBoom = "";

    for (let i = 1; i <= number; i++) {
        if ((i % 7 === 0) && (i.toString().includes("7"))) {
            sevenBoom += "-KaKaBoomBoom!-";
        } else if ((i % 7 === 0) || (i.toString().includes("7")) ){
            sevenBoom += ((i % 7 === 0) ? "-KaBoom!-" : "-KakaBoom!-");
        } else sevenBoom += i
        
        if (i < number){
        sevenBoom += " , "
        }
    }
    
    console.log(sevenBoom);
}

checkBoom(18);