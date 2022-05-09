var cartarr=JSON.parse(localStorage.getItem("cartdata"))
console.log(cartarr)
displaycart(cartarr)
var tprice=0;

function displaycart(arr){
    arr.forEach(function(elem,index){
        var box=document.createElement("div")
        box.setAttribute("id","box")
        var div1=document.createElement("div")
        div1.setAttribute("id","deleteicon")
        var delimg= document.createElement("img");
        delimg.setAttribute("src","https://cdn-icons-png.flaticon.com/128/1345/1345823.png");
        delimg.addEventListener("click",function(){
            deleteitem(elem,index);
          })
        div1.append(delimg)
        
        var div2=document.createElement("div")
        div2.setAttribute("id","productimg")
        var pimg= document.createElement("img");
        pimg.setAttribute("src", elem.avatar);
        div2.append(pimg)

        var div3=document.createElement("div")
        div3.setAttribute("id","productname")
        var pnames=document.createElement("p")
        pnames.innerText=elem.name
        div3.append(pnames)

        var div4=document.createElement("div")
        div4.setAttribute("id","price")
        var pprice=document.createElement("p")
        pprice.innerText=elem.position
        div4.append(pprice)

        var div5=document.createElement("div")
        div5.setAttribute("id","incdec")
   
        var inc=document.createElement("button")
        inc.setAttribute("id","inc")
        inc.innerText="+"
        var dec=document.createElement("button")
        dec.setAttribute("id","dec")
        dec.innerText="-"
        var x = document.createElement("input");
        x.setAttribute("id","qntbox")
        x.setAttribute("type", "text");
        x.setAttribute("value", "1");
        div5.append(dec,x,inc)
      
        var div6=document.createElement("div")
        div6.setAttribute("id","totalprice")
        var incprice=+(elem.position.replace("$",""))
        console.log(incprice)
        console.log(sum)
        div6.append(incprice)
        inc.addEventListener('click', () => {
            x.value = Number(x.value) + 1;
            div6.innerHTML="";
             tprice=incprice*x.value
            div6.append(tprice)
        });
        
        dec.addEventListener('click', () => {
            if (x.value <= 1) {
                x.value = 1;
                div6.innerHTML="";
                 tprice=incprice*x.value
                 
            div6.append(tprice)

            }
            else {
                x.value = Number(x.value) - 1
                div6.innerHTML="";
                 tprice=incprice*x.value
                div6.append(tprice)
            }
        });

      
            
        
    

        box.append(div1,div2,div3,div4,div5,div6)

        document.querySelector("#cartlist").append(box)

    })
   
}
function deleteitem(elem,index){
    cartarr.splice(index,1);
    localStorage.setItem("cartdata",JSON.stringify(cartarr))
    window.location.reload();
}
var sum= cartarr.reduce(function(acc,elem){
    return acc+Number(elem.position.replace("$",""))
},0)
var h2=document.createElement("h2")
h2.innerText="Subtotal: $"+sum
var h1=document.createElement("h1")
h1.innerText="Grand Total: $"+sum

document.querySelector("#sumbox").append(h2,h1)
console.log(sum)



// function addbtn(e) {
//     e = parseInt(qtn.value) + 1;
// };

// subBtn.addEventListener('click', () => {
//     if (qty.value <= 1) {
//         qty.value = 1;
//     }
//     else {
//         qty.value = parseInt(qty.value) - 1
//     }
// });
