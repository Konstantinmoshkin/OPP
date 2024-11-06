function verify() {
    console.log('a','b','c')
    let a = parseInt(elementF.value);
    let b = parseInt(elementG.value);
    let c = parseInt(elementJ.value);
    console.log(a, b, c)
    
    if (a!=b){

        let big, small
        if(a>b){
            big = a;
            small = b;
        }
        else {
            big = b;
            small = a;
        }
        if ( c>=small && c <=big){
            result = 'Число входит в диапазон'
            document.getElementById('resul').value = result;
        }
        else{
            result = 'Число не входит в диапазон'
            document.getElementById('resul').value = result;
        }
    }
    else{
        if (a = c){
        result = 'Число входит в диапазон'
        document.getElementById('resul').value = result;
        }
        else{
        result = 'Число не входит в диапазон'
        document.getElementById('resul').value = result;
        }

    
    
    
}

}

const elementF = document.getElementById('g')
const elementG = document.getElementById('h')
const elementJ = document.getElementById('j')
const elementVerif = document.getElementById('verif')
elementVerif.addEventListener('click', verify)