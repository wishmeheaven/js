

function stepIn(N){

    let steps = []
    let stepBy = ''

    for(let i = 0; i < N ; i++)
    {
        for(let j=0; j < N; j++) {       
            if(j <= i) {
                stepBy += '#'
            } else {
                stepBy += ' '
            }
        }
       
            steps.push(stepBy)
        
    }
    return steps

}

console.log(stepIn(3))


/*
 if(!(i+1 == N)){
            stepBy+=' '
            steps.push(stepBy)
        } else {
*/