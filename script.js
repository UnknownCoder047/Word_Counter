let textbox=document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var text = this.value;
    let char= text.length;
    document.getElementById('ch').innerHTML=char;
    text=text.trim();
    var words = text.split(" ");
    var cleanList= words.filter(function(elm){
        return elm !="";
    });
    document.getElementById('w').innerHTML = cleanList.length;
});