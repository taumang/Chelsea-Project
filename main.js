var dragValue1;
var dragValue2;

function move(id) {
    var element = document.getElementById("theDiv1");
    var element1 = document.getElementById("theDiv2");
    

    
    element.style.position ="absolute";
    element1.style.position ="absolute";

    element.onmousedown = ()=>{
        dragValue1 = element;
        dragValue2 = element;
    }

    

    element1.onmousedown = ()=>{
        dragValue1 = element;
        dragValue2 = element;
    }
    
}

document.onmouseup= (event)=>{
    dragValue1= null;
    dragValue2 = null;
}

document.onmousemove = (event)=>{
    var x = event.pageX
    var y = event.pageY

    dragValue1.style.left = x + "px";
    dragValue1.style.top = y + "px";
    
    dragValue2.style.right = x + "px"
    dragValue2.style.top = y + "px"
}

