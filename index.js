var revealDate;
var revealForm;
var revealSubmit;
var counter = 0;

window.onload = function(){
    console.log("Loaded")
    revealDate = document.getElementById("date");
    revealForm = document.getElementById("reveal-form");
    revealSubmit = document.getElementById("reveal-submit");

    revealDate.onclick = function(){
        if(window.getComputedStyle(document.getElementById("reveal-form")).visibility === "hidden"){
            revealForm.style.visibility = "visible";
            revealDate.style.visibility = "hidden";
            counter = 0
            
        }
    }
        revealForm.onclick = function(){
            if((window.getComputedStyle(document.getElementById("date")).visibility === "hidden") && (counter > 0)){
                revealForm.style.visibility = "hidden";
                revealDate.style.visibility = "visible";
            }
            else{
                counter += 1   
            }
            
        }
}



function revealToggle(){
    
}