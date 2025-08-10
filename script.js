let Boxes = document.querySelectorAll(".box");

let reset = document.getElementById("reset");

let turnO = true;

let mssg = document.querySelector('.mssg')

let wining = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const Reset = ()=>{
    turnO = true;
    enable();
    mssg.classList.add("hide");
}

Boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
         box.innerText = "X";
         turnO = true;
        }
        box.disabled = true;

        checkWinner()
        
    });
});
const disable = () =>{
    for(let Box of Boxes){
        Box.disabled = true;
    }
}
const enable = () =>{
    for(let Box of Boxes){
        Box.disabled = false;
        Box.innerText= "";
    }
}
const show = ( p) =>{
    mssg.innerText = `Winner is : ${p}`;
            mssg.classList.remove("hide");
            disable();
            
}
const checkWinner = () =>{
   for (let win of wining){
    let p1 = Boxes[win[0]].innerText;
    let p2 = Boxes[win[1]].innerText;
    let p3 = Boxes[win[2]].innerText;
    if(p1 != "" && p2 != "" && p3 !=""){
        if(p1 === p2 && p2 === p3){
            show(p1);
        }else{
            mssg.innerText = `game draw`;
        }
    }
   }
};
 reset.addEventListener('click', Reset);