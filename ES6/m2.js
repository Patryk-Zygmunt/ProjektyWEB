import {fufu, ala} from "./m1";

function  kuku(){
    console.log("kuku")
}
 function ala() {
    console.log("ala")
 }

export {kuku, ala}

function test(){
    kuku()
    ala()
    fufu()
    ala()
}

test()
