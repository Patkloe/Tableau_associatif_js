function test(){
var arr = { 
        "Mecreance": "highest", 
        "Solange": "Innocent", 
        "Hotel": "Plateau", 
        "Thelligence": "sonel_mimboman",
        "La_mere": "Un_beignet_but three_pressed",
        "Mecreance": "over power",
        "over power":"Mecreance"
    }; 
  console.log("Keys are listed below "+"\n"); 
  
// Loop to print keys 
for (var key in arr) { 
    if (arr.hasOwnProperty(key)) { 
  
        // Printing Keys 
        console.log(key + "\n"); 
    } 
 }  
}
test();
function testscript(){
 var tab = [1,2,3,4,5];
 var a = tab.length;
 var arr = new Array(); 
 alert("tab size" + " " + a);
 for(let i = 0; i < tab.length; i++){
     arr[i] = tab[i];              //{ i:tab[i]};
 }
 console.log("Keys are listed below "+"\n");
for (var key in arr) { 
    if (arr.hasOwnProperty(key)) { 
  
        // Printing Keys 
        console.log(key + "\n"); 
    } 
 }
}
testscript();
