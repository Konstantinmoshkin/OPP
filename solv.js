function verify() {
        console.log('a','b','c')
        let a = parseInt(elementA.innerText);
        let b = parseInt(elementB.innerText);
        let c = parseInt(elementC.innerText);
        console.log('a', 'b', 'c')
        
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
                document.getElementById('result').innerText = result;
            }
            else{
                result = 'Число не входит в диапазон'
                document.getElementById('result').innerText = result;
            }
        }
        else{
            if (a = c){
            result = 'Число входит в диапазон'
            document.getElementById('result').innerText = result;
            }
            else{
            result = 'Число не входит в диапазон'
            document.getElementById('result').innerText = result;
            }

        
        
        
}

}

const elementA = document.getElementById('a')
const elementB = document.getElementById('b')
const elementC = document.getElementById('c')
const elementVerify = document.getElementById('verify')
elementVerify.addEventListener('click', verify)