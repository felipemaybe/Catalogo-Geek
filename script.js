
let listFigure = ["dom example"];
let listPainting = [];

function createActionItem(listFigure){
    let item = {}
    item.actionItem = listFigure
    return item
    
}

console.log(createActionItem(listFigure))

function createPaintingItem(listPainting){
    let item2 = {}
    item2.paintItem = listPainting
    return item2

}

console.log(createPaintingItem(listPainting))



let addForCard = document.querySelector("li")
let secaolistFigure = document.querySelector(".card")


for(let i = 0; i < listFigure.length; i++){
    

        let itensBar = listFigure

        let spanControl = document.createElement("span")

        spanControl.innerText = itensBar[i]

        addForCard.appendChild(spanControl)

        secaolistFigure.appendChild(elementoLista)

        

        }
        
  