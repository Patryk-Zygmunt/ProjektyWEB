
var rx = require('rxjs');

var getObs = ()=>{
    return rx.from([1, 2, 3, 4, 5]);
}



let obs = getObs()


let add=()=>{



}

console.log(getObs())
obs.subscribe(v=>console.log(v))
