let cars = [{
     "brand": "Toyota",
     "model": "Camry",
     "year": 1999,
     "price": 20000,
     "image_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiW_IPZhJ_XAhXpB5oKHW69C8sQjRwIBw&url=https%3A%2F%2Fwww.ford.com%2Fnew-cars%2F&psig=AOvVaw1pgTL2kPqxI_ejmZdqeGsT&ust=1509682736588763"
}, {
     "brand": "BMW",
     "model": "X6",
     "year": 2014,
     "price": 25000,
     "image_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiXl7XWhJ_XAhWHB5oKHdcOD6IQjRwIBw&url=https%3A%2F%2Fwww.cars.com%2Fresearch%2Fbmw-i8%2F&psig=AOvVaw2VskU9ePk4P3KUx6N8dcOg&ust=1509682708435506"
}, {
     "brand": "Daewoo",
     "model": "Nexia",
     "year": 2007,
     "price": 15000,
     "image_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwibxp7ThJ_XAhXJCpoKHWEfDpsQjRwIBw&url=http%3A%2F%2Fwww.businessinsider.com%2Fmost-beautiful-cars-on-sale-today-2017-5&psig=AOvVaw01dtZLhvLvGc1wY2rSc8sl&ust=1509682708431849"
}];
let icons="basket.png";
let icons1="dollar.jpg"
for (var i = 0; i < cars.length; i++) {
     var image = document.createElement('img');
     image.innerHTML = "<img>";
     image.src = cars[i]["image_url"];
     style = image.style;
     style.width = "100px";
     style.height = "80px";
     style.margin = "5px";
     image.setAttribute("data-credits",String(cars[i]["price"]));
     document.querySelector('#card'+(i+1)).appendChild(image);
}
for(var i=0;i<cars.length;i++){
     var image1=document.createElement('img');
     image1.innerHTML="<img>";
     image1.src=icons;
     style = image1.style;
     style.width = "20px";
     style.height = "12px";
     style.margin = "5px";
    document.querySelector('#basket'+(i+1)).appendChild(image1);
}
    var r=0;
   const imaged=document.querySelector('#basket1');
    const image2=imaged.querySelector('img');
function click1() {
   
 
 switch(image2.src.substring(image2.src.lastIndexOf('/')+1,image2.src.length)){
    case icons:
        image2.src=icons1;
        document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[0]["price"];
        break;
    case icons1:
       document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1;
         document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[0]["price"];;
        image2.src=icons;
        break;

}

}
image2.addEventListener('click',click1);
    const imaged1=document.querySelector('#basket2');
    const image3=imaged1.querySelector('img');
function click2() {

switch(image3.src.substring(image3.src.lastIndexOf('/')+1,image3.src.length)){
    case icons:
        image3.src=icons1;
        document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[1]["price"];;
        break;
    case icons1:
    
    document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[1]["price"];;
        image3.src=icons;
        break;

}

}
image3.addEventListener('click',click2);

const imaged2=document.querySelector('#basket3');
 const image4=imaged2.querySelector('img');
function click3() {

switch(image4.src.substring(image4.src.lastIndexOf('/')+1,image4.src.length)){
    case icons:
        image4.src=icons1;
        document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)+1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)+cars[2]["price"];;
        break;
    case icons1:
        
        image4.src=icons;
        document.querySelector("#items").innerHTML=parseInt(document.querySelector("#items").innerHTML)-1;
        document.querySelector("#sum").innerHTML=parseInt(document.querySelector("#sum").innerHTML)-cars[2]["price"];;
        break;
}

}
image4.addEventListener('click',click3);