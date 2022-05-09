var productdata=[
    {
    avatar:
    "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_bodybar_purifying-2_1024x.png?v=1595909766",
    name: "Body Bar: Purifying (Neem & Turmeric)",
    position: "$4.99",
    product_id:25,
    logo:
    "https://lh3.googleusercontent.com/gE-Epy_M7QINR02p_AaErAcYz2yJQSIwVlrkZhwltHTR2LUwE6C5DvQIl7C92FjK3-_VLp1LkZ9nRZgc39dtUei6wuXICpJNhlXTa8hWdadTGTGOkL66x6pnOxadNXm_25n03i_GJA=s55-p-k",
    },
    {
    avatar:
    "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_bodybar_refreshing-1_1024x.png?v=1595909931",
    name: "Body Bar: Refreshing (Lavender & Rosemary)",
    position: "$4.99",
    product_id:26,
    logo:
    "https://lh3.googleusercontent.com/gE-Epy_M7QINR02p_AaErAcYz2yJQSIwVlrkZhwltHTR2LUwE6C5DvQIl7C92FjK3-_VLp1LkZ9nRZgc39dtUei6wuXICpJNhlXTa8hWdadTGTGOkL66x6pnOxadNXm_25n03i_GJA=s55-p-k",
    },
    {
    avatar:
    "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaChestBalmPMwithHerbCartonJar_1024x.png?v=1624548043",
    name: "Chest Balm P.M.",
    position: "$7.99",
    product_id:27,
    logo:
    "https://lh3.googleusercontent.com/gE-Epy_M7QINR02p_AaErAcYz2yJQSIwVlrkZhwltHTR2LUwE6C5DvQIl7C92FjK3-_VLp1LkZ9nRZgc39dtUei6wuXICpJNhlXTa8hWdadTGTGOkL66x6pnOxadNXm_25n03i_GJA=s55-p-k",
    },
    {
    avatar:
    "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_exoliatingwwa_bottlebox_1024x.png?v=1595909354",
    name: "Face Scrub: Exfoliating (Walnut & Wood Apple)",
    position: "$8.99",
    product_id:28,
    logo:
    "https://lh3.googleusercontent.com/gE-Epy_M7QINR02p_AaErAcYz2yJQSIwVlrkZhwltHTR2LUwE6C5DvQIl7C92FjK3-_VLp1LkZ9nRZgc39dtUei6wuXICpJNhlXTa8hWdadTGTGOkL66x6pnOxadNXm_25n03i_GJA=s55-p-k",
    },
    {
    avatar:
    "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_balancing_neem_turmeric_bottlebox_1024x.png?v=1595909161",
    name: "Face Wash: Balancing (Neem & Turmeric)",
    position: "$8.99",
    product_id:29,
    logo:
    "https://lh3.googleusercontent.com/gE-Epy_M7QINR02p_AaErAcYz2yJQSIwVlrkZhwltHTR2LUwE6C5DvQIl7C92FjK3-_VLp1LkZ9nRZgc39dtUei6wuXICpJNhlXTa8hWdadTGTGOkL66x6pnOxadNXm_25n03i_GJA=s55-p-k",
    },
    {
    avatar:
    "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/BEAUTY_facewash_hydrating_bottlebox_1024x.png?v=1595909481",
    name: "Face Wash: Hydrating",
    position: "$8.99",
    product_id:30,
    logo:
    "https://lh3.googleusercontent.com/gE-Epy_M7QINR02p_AaErAcYz2yJQSIwVlrkZhwltHTR2LUwE6C5DvQIl7C92FjK3-_VLp1LkZ9nRZgc39dtUei6wuXICpJNhlXTa8hWdadTGTGOkL66x6pnOxadNXm_25n03i_GJA=s55-p-k",
    },
    {
    avatar:
    "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/InvigoratingFaceWash_1024x.png?v=1595909620",
    name: "Face Wash: Invigorating",
    position: "$8.99",
    product_id:31,
    logo:
    "https://lh3.googleusercontent.com/gE-Epy_M7QINR02p_AaErAcYz2yJQSIwVlrkZhwltHTR2LUwE6C5DvQIl7C92FjK3-_VLp1LkZ9nRZgc39dtUei6wuXICpJNhlXTa8hWdadTGTGOkL66x6pnOxadNXm_25n03i_GJA=s55-p-k",
    },
    {
    avatar:
    "https://cdn.shopify.com/s/files/1/0399/1728/9633/products/HimalayaWarmingBodyBalmCartonJarwithherb_1024x.png?v=1624547923",
    name: "Warming Body Balm",
    position: "$7.99",
    product_id:32,
    logo:
    "https://lh3.googleusercontent.com/gE-Epy_M7QINR02p_AaErAcYz2yJQSIwVlrkZhwltHTR2LUwE6C5DvQIl7C92FjK3-_VLp1LkZ9nRZgc39dtUei6wuXICpJNhlXTa8hWdadTGTGOkL66x6pnOxadNXm_25n03i_GJA=s55-p-k",
    },
    
    ];


    var cartarr=JSON.parse(localStorage.getItem("cartdata"))||[];
    
   displayproduct(productdata)

   function displayproduct(productdata){
       document.getElementById("productcategory").innerHTML="";
       productdata.map(function(elem){
           var box=document.createElement("div")
            var pimg= document.createElement("img");
            pimg.setAttribute("src", elem.avatar);
           var pnames=document.createElement("p")
           pnames.innerText=elem.name

           var pprice=document.createElement("p")
           pprice.innerText=elem.position

           var plogo=document.createElement("img")
           plogo.setAttribute("src",elem.logo)

           var btn=document.createElement("button")
            var p=document.createElement("p")
            p="Add to cart"
            btn.addEventListener("click",function(){
              carddatafunction(elem)
            });

            btn.append(plogo,p)

           box.append(pimg,pnames,pprice,btn)

           document.querySelector("#productcategory").append(box)

       })
   }

   function carddatafunction(elem){
    var a=cartarr.filter(function(el){
     return el.product_id == elem.product_id;
    })

    if(a.length === 0){
      cartarr.push(elem);
      alert("Product Added to Cart Successfuly")
      localStorage.setItem("cartdata",JSON.stringify(cartarr))
    }else{
      alert("Product already in Cart");
    }
   }
 


 function filtervalue() {
      var selected = document.querySelector("#filter").value;
      
   if (selected == "pasc") {
        productdata.sort(function (a, b) {
          return +(a.position.replace("$","")) - (+(b.position.replace("$","")) );;
        });
        displayproduct(productdata);
      }

      if (selected == "pdsc") {
        productdata.sort(function (a, b) {
          return +(b.position.replace("$","")) - (+(a.position.replace("$","")) );
        });
        displayproduct(productdata);
      }

      if (selected == "nasc") {
        productdata.sort(function (a, b) {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
         displayproduct(productdata)
         
        
      }
      if (selected == "ndsc") {
        productdata.sort(function (a, b) {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
        displayproduct(productdata);
        
        
      }
    }
     