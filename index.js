// Code your solution in this file!

const num2= 42;

function distanceFromHqInBlocks(num1){
    if (num1 >= 42){
        return (num1 - num2)
    } else if (num1 < 42){
        return (num2 - num1)
    }
}

function distanceFromHqInFeet(num1){

    return distanceFromHqInBlocks(num1)*264;

}

function distanceTravelledInFeet(block1,block2){
    if (block1 >= block2){
        return (block1-block2)*264
    }else if (block1 < block2){
        return (block2-block1)*264
    }

}

function calculatesFarePrice(start,destination){
    let newDist= distanceTravelledInFeet(start,destination)


    if (newDist <= 400){
        return (newDist*0)
    } else if(newDist > 400 && newDist < 2000) {
        return (newDist-400)*0.02
    }else if(newDist > 2000 && newDist <= 2500){
        return 25
    }else if (newDist > 2500) {
        return 'cannot travel that far';
    }

}