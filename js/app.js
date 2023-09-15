// IIFE - Immediately Invoked Function Expression
// this can run automatically - it is "self-executing"
// any vars live only inside the IIFE so not wasting global memory
(function() 
{
    function Start() {
        let x = 1;
        console.log('First App Started');
        console.log(x);
    }

    // attach to window onLoad event listener
    window.addEventListener('load', Start);
    console.log(x);
})();

let updateCounterWithoutClosure = () => {
    let counter = 0;
    counter++;
    document.getElementById('clickcount').innerHTML = counter;
}
function updateCounterWithoutClosure(){
    let counter = 0;

    return()=>{
        counter++;
        document.getElementById('clickcount').innerhtml = counter;
    }
}