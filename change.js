function find_edit(){
    const item1  = document.getElementById('surname')

    item1.innerText="Moshkin"
    const item2  = document.getElementById('firstname')

    item2.innerText="Konstantin"
    const item3  = document.getElementById('date')

    item3.innerText="VII.III.MMV"

}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)