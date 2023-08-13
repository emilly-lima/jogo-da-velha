/**document.addEventListener("DOMContentLoaded", function(){
    var escolha;
    document.getElementsByClassName("escolha").addEventListener("click", function () {        
        
        if(){}
    })

});
**/

function choiceX() {
    if (document.getElementById("X")) {
        document.getElementById("O").disabled = true;
    } 
}

function choiceO() {
    if (document.getElementById("O")) {
        document.getElementById("X").disabled = true;
    } 
}