const product = [
    {
        id: 0,
        image: 'images-data/image-01.jpg',
        title: 'BreadBoard',
        price: 60,
    },
    {
        id: 1,
        image: 'images-data/image-02.jpg',
        title: 'Multimeter',
        price: 200,
    },
    {
        id: 2,
        image: 'images-data/image-03.jpeg',
        title: 'LCD 16x2 Alphanumeric Display',
        price: 190,
    },
    {
        id: 3,
        image: 'images-data/image-04.jpeg',
        title: 'Soldering Iron Complete Kit',
        price: 100,
    },

    {
        id: 4,
        image: 'images-data/image-05.jpeg',
        title: 'PCB',
        price: 150,
    },
    {
        id: 5,
        image: 'images-data/image-06.jpeg',
        title: 'L.E.D',
        price: 10,
    }

];

//created an array with multipe objects for products




const categories = [...new Set(product.map((item)=>{return item}))]   //This line creates an array categories containing unique elements from the product array.
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')



//product.map((item) => { return item }):           The .map() function iterates over each item in the product array and returns the item itself. This step creates a new array that is similar to product.
//new Set(...):                                     Wraps the mapped array with new Set() , creates a Set object, which  removes any duplicate values.
//[...new Set(...)]:                                Using the spread operator (...) converts the Set back into an array with unique elements.


//let i = 0; , This variable will be used to generate unique indices for each product when adding them to the cart.



//document.getElementById('root').innerHTML = categories.map((item) => { ... }).join('');
//Populates the HTML content of an element with id="root" , with dynamically generated product information.


//categories.map((item) => { ... })     Iterates over each item in the categories array.
//var {image, title, price} = item;:   Destructures the item object to extract its image, title, and price properties.
//Template Literal (return ...):       will Create a string containing HTML markup for each product.


//<div class='box'>: will create a container for each product.
//<img class='images' src=${image}></img>: Displays the product image.
//<div class='bottom'>: creates a container for product details (title and price).
//<p>${title}</p>: for displaying the product title.
//<h2>$ ${price}.00</h2>: will Display the product price formatted as dollars.
//<button onclick='addtocart(${i++})'>Add to cart</button>:     Adds a button to add the current product to the cart, incrementing i for each product to maintain unique indices.

//.join(''):    Joins all generated HTML strings into a single string, which will be assigned to the innerHTML property of the element with id="root".




//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------//





//creating an empty array cart which will store the products added to the cart.

var cart =[]; 

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}


//cart.push({...categories[a]});  This Adds a copy of the product from 'categories' array at index parameter a to the cart array using the spread syntax (...).




function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

//cart.splice(a, 1);: Removes one element from the cart array at index a.



function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

//variable j used for indexing items in the cart and variable total used to calculate/store the total price of items in the cart
//document.getElementById("count").innerHTML = cart.length;:    Updates the HTML content of an element with id="count" to display the number of items in the cart (cart.length).
//If cart.length is 0  , then Set the HTML content of an element with id="cartItem" to show  "Your cart is empty" and set Sets the HTML content of an element with id="total" to display "$ 0.00".


//If cart.length is greater than 0 (i.e if cart has items in it ) then cart.map((items) => { ... }): Maps over each item in the cart array and generates HTML markup for each item.
//var {image, title, price} = items;: Destructures the items object to extract its image, title, and price properties.
//document.getElementById("total").innerHTML = "$ " + total + ".00";: Updates the HTML content of an element with id="total" to display the updated total price.
//then returns the markup for each item each item in the cart as string



let checkoutButton = document.querySelector('.checkout-button');
checkoutButton.addEventListener('click',function(){
    alert("Thankyou for shopping with us!");
})





// Setting the date we're counting down to
let countDownDate = new Date("Dec 10, 2024 15:37:25").getTime();


let x = setInterval(function() {

  // Getting current date and time
  let now = new Date().getTime();

  // calculating time between today's date and the countdown date
  let distance = countDownDate - now;


  // Time calculations for days, hours, minutes and seconds

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);



  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//every 1 second the function executes







