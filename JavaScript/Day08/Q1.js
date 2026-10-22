function countFrequency(name) {
    let str=name.toUpperCase()
    const obj={

    }

    for(let i=0;i<str.length;i++) {
        const letter=str[i]
        if(obj[letter]==undefined) {
            obj[letter]=1;
        }
        else {
            obj[letter]=obj[letter]+1

        }
    }

    console.log(obj);
}

countFrequency("APPLE,BANANA")