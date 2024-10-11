
function getTimeString(time){

    const hours = parseInt( time / 3600)
    let second = time % 3600
    const minuts = parseInt(second / 60)
    second = second % 60

    return `${hours} hours ${minuts} min ${second} sec ago `
    

}

const getTiem = getTimeString(4000);
console.log(getTiem)