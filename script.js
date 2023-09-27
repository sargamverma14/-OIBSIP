const calTemp = () =>{
    const tempNum = document.getElementById('Num').value;
    console.log(tempNum)
    const type = document.getElementById('tempType').value;
    console.log(type);

    const celToFah = (cel)=>{
        let Fahrenheit= Math.round((cel*9/5)+32);
        return Fahrenheit;
    }
    const fahToCel = (fah)=>{
        let Celsius= Math.round((fah-32)*5/9);
        return Celsius;
    }
    

    let result;
    if(type=='c')
    {
        result = celToFah(tempNum);
        document.getElementById('resultContainer').innerHTML= `=${result}° Fahrenheit`;
    }
    else{
        result = fahToCel(tempNum);
        document.getElementById('resultContainer').innerHTML= `=${result}° Celsius`;
    }
}