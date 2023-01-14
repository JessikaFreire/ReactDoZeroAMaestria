const Challenge = () => {
    const a = 5
    const b = 7

    const handleSum = (e) => {
        const sum = a + b
        console.log(sum)
    }

    return(
        <div>
        <p>A: {a} - B: {b}</p> 
        <button onClick={handleSum} >Soma</button>
        </div>
        
    )
};
export default Challenge;
