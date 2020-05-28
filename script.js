function toDoContent(){
    var el=document.getElementById('todoInput');
    
    if(el.value!=''){
        var selectNode=document.getElementById('container');
        var node=document.createElement('div');
        node.setAttribute('class','content');
        var childNode=document.createElement('div');
        childNode.setAttribute('class','delete');
        childNode.setAttribute('onclick','remove(event)');

        node.textContent=el.value;
        node.appendChild(childNode);
        selectNode.appendChild(node);

        el.value='';
    }
}
function remove(e){
    console.log(e.target.tagName);
    var a=e.target;
    var b=a.parentNode;

    b.remove();
    
    
}