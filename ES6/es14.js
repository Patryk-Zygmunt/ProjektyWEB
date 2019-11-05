function zad1() {
    const tab1 = [1, 7, 12, 46, 85];
    const tab2 = [10, 26, 75, 34];
    return [...tab1,...tab2];
}


zad2 = (...args)=> args.map(s=>s.toUpperCase()).join("+");

function zad3a() {
    let o1 = {nazwa:'jabko', ilosc:23, cena:3.34}
    let o2 = {nazwa:'gruszka', ilosc:3, cena:4.55}
    let o3 = {nazwa:'kiwi', ilosc:6, cena:7.23}
    for (let o of [o1,o2,o3]) {
        console.log(`nazwa:${o.nazwa}, ilosc:${o.ilosc}, cena:${o.cena}`)
    }
}


function zad4a(user){
    const {info,id,relatives:{wife:{name:wifeName}}} = user
    return {info:info,id:id,wifeName:wifeName}
}

zad4 = ()=>{
    const tab = [1,2,3,4,5];
    [a,b,,c] = tab
    const obj = {
        name : "Marcin",
        surname : "Kowalski",
        age: 20
    }

    const {name,surname,age:userAge} = obj
    const user = {     name: 'Grzegorz', type: 'node',info: 'something',id: 21, relatives: {   wife: {  name: 'Magdalena', id: 22 }  } };
    console.log(zad4a(user))
}


function* zad6(){
    yield* Array(20).fill(20).map((x, y) => x - y)
}

var g = zad6()

console.log(g.next().value);
console.log(g.next());
console.log(g.next());



zad7 = ()=>{
    const user = [
        {imie: "Ola", sex: 'F', value: 5000},
    { imie: "Kasia", sex: 'F',value: 650},
    { imie: "Jurek", sex: 'M',value: 10},
    { imie: "Ola", sex: 'F', value: 1200},
    { imie: "Robert", sex: 'M', value: 77},
    { imie: "Wacek", sex: 'M', value: 77},
    { imie: "Ula", sex: 'F', value: 77},
    { imie: "Ola", sex: 'F', value: 77},
]

   return  { count: user.filter(u=>u.sex==='F').length,
        salary: user.filter(u=>u.sex==='F').reduce((s,c)=>s+c.value,0)
    }


}

console.log(zad7())
