
link1=document.getElementById('link1');
link2=document.getElementById('link2');
link3=document.getElementById('link3');
link4=document.getElementById('link4');

function highlight(obj){
    console.log(obj);
   
   obj.style.backgroundColor = '#041E66';
   
}


window.setTimeout(function(){highlight(link1);},6280);
window.setTimeout(function(){highlight(link2);},6280);
window.setTimeout(function(){highlight(link3);},6280);
window.setTimeout(function(){highlight(link4);},6280);