const Ship = (name, size) => {
    const hit = (num) => {
        if(!damaged.includes(num)){
            damaged.push(num)
        }
    }
    let damaged = []
    const isSunk = () => {
        if(damaged.length === size.length){
            return true;
        }else{
            return false;
        }
    }
    return {name, size, isSunk, damaged, hit};
}
export default Ship