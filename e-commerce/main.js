console.log(document)
/* About Us
const one-ToysWorld is an old site in the virtual world and managed by a team of years of experience managing toy stores,
Mainly motorized for children, children's kitchens, doll houses, swimming pools, warehouses, yard equipment and more.
The site is designed to give you a quick solution for the busy parents and allows you to easily purchase the right gifts for your child,
    And at the fairest price.

Skilled staff provide personal, professional, prompt and courteous service to fulfill your parental requests(grandparents, of course).
    Therefore! We are the perfect solution for buying everything your child needs.
VIP service, because our service is your advantage
Our basic principle is to provide the best possible service and to that end we invest special efforts.
Because we truly believe that our service is your advantage.

Our dream at ToysWorld is to make you customers happy with the products, the attitude,
    Service and handle your purchases so you have a pleasant experience that will make you the most satisfied you can be.
Wish you a pleasant purchase and an amazing experience. */
const container = document.getElementById("container")

/* const aboutH = document.createElement("h2")
aboutH.setAttribute("id", "h")
document.getElementById("container").appendChild(aboutH)
aboutH.innerHTML = "About Us"
const aboutP1 = document.createElement("P")
document.getElementById("container").appendChild(aboutP1)
aboutP1.innerHTML = "ToysWorld is an old site in the virtual world and managed by a team of years of experience managing toy storesMainly motorized for children, children's kitchens, doll houses, swimming pools, warehouses, yard equipment and more The site is designed to give you a quick solution for the busy parents and allows you to easily purchase the right gifts for your child  And at the fairest price"
const aboutP2 = document.createElement("P")
document.getElementById("container").appendChild(aboutP2)
aboutP2.innerHTML = "Skilled staff provide personal, professional, prompt and courteous service to fulfill your parental requests(grandparents, of course).Therefore! We are the perfect solution for buying everything your child needs.VIP service, because our service is your advantage Our basic principle is to provide the best possible service and to that end we invest special efforts.Because we truly believe that our service is your advantage."
const aboutP3 = document.createElement("P")
document.getElementById("container").appendChild(aboutP3)
aboutP3.innerHTML = "Our dream at ToysWorld is to make you customers happy with the products, the attitude,Service and handle your purchases so you have a pleasant experience that will make you the most satisfied you can be.Wish you a pleasant purchase and an amazing experience."
container.removeChild(container.childNodes[0])
console.log(container.childNodes.length)*/
const aboutUs = document.getElementById("about")

aboutUs.onclick = function () {
    for (let i = (container.childNodes.length - 1); i >= 0; i--) {
        container.removeChild(container.childNodes[i]);
    }
    const aboutH = document.createElement("h2")
    aboutH.setAttribute("id", "h")
    document.getElementById("container").appendChild(aboutH)
    aboutH.innerHTML = "About Us"
    const aboutP1 = document.createElement("P")
    document.getElementById("container").appendChild(aboutP1)
    aboutP1.innerHTML = "ToysWorld is an old site in the virtual world and managed by a team of years of experience managing toy storesMainly motorized for children, children's kitchens, doll houses, swimming pools, warehouses, yard equipment and more The site is designed to give you a quick solution for the busy parents and allows you to easily purchase the right gifts for your child  And at the fairest price"
    const aboutP2 = document.createElement("P")
    document.getElementById("container").appendChild(aboutP2)
    aboutP2.innerHTML = "Skilled staff provide personal, professional, prompt and courteous service to fulfill your parental requests(grandparents, of course).Therefore! We are the perfect solution for buying everything your child needs.VIP service, because our service is your advantage Our basic principle is to provide the best possible service and to that end we invest special efforts.Because we truly believe that our service is your advantage."
    const aboutP3 = document.createElement("P")
    document.getElementById("container").appendChild(aboutP3)
    aboutP3.innerHTML = "Our dream at ToysWorld is to make you customers happy with the products, the attitude,Service and handle your purchases so you have a pleasant experience that will make you the most satisfied you can be.Wish you a pleasant purchase and an amazing experience."
    /* this.onclick = null; */

}
const toys = [{ name: "doctor", pecture: "https://ae01.alicdn.com/kf/H419d3e6968994931914a577794207861Y/17pcs.jpg", price: "59.90", add: "add to cart" }, { name: "dino", pecture: "https://ae01.alicdn.com/kf/HTB10rhWXNTpK1RjSZFGq6AHqFXaW.jpg", price: "29.90", add: "add to cart" }]
const cart = []
 /* console.log(cart) */ 
const product = document.getElementById("products")

product.onclick = function () {
    for (let r = (container.childNodes.length - 1); r >= 0; r--) {
        container.removeChild(container.childNodes[r]);
    }
    
    for (let i = 0; i < toys.length; i++) {
      

        const toyImge = document.createElement("img")
        document.getElementById("container").appendChild(toyImge)
        toyImge.setAttribute("src", toys[i].pecture)
        toyImge.setAttribute("class", i)
        toyImge.style.width = "80px"


        const toyName = document.createElement("div")
        document.getElementById("container").appendChild(toyName)
        toyName.setAttribute("class", i)
        toyName.innerText = toys[i].name

        const toyPrice = document.createElement("div")
        document.getElementById("container").appendChild(toyPrice)
        toyPrice.setAttribute("class", i)
        toyPrice.innerText = toys[i].price

        const addToCart = document.createElement("button")
        document.getElementById("container").appendChild(addToCart)
        addToCart.setAttribute("id", i)
        addToCart.innerText = toys[i].add

       document.getElementById(i).onclick = function () {
        if (cart.includes(toys[i]) === false) cart.push(toys[i]);   
            /* cart.push(toys[i])
 */
        }
        
 
    }
  /* return cart  */ 
}

 /*  console.log(product.onclick())   */   
const cartPage = document.getElementById("cart")
cartPage.onclick=function(){
    
    for (let r = (container.childNodes.length - 1); r >= 0; r--) {
        container.removeChild(container.childNodes[r]);
    }
   
   for (let i = 0; i < cart.length; i++) {
      

        const toyImge = document.createElement("img")
        document.getElementById("container").appendChild(toyImge)
        toyImge.setAttribute("src", cart[i].pecture)
        toyImge.setAttribute("class", i)
        toyImge.style.width = "80px"


        const toyName = document.createElement("div")
        document.getElementById("container").appendChild(toyName)
        toyName.setAttribute("class", i)
        toyName.innerText = cart[i].name

        const toyPrice = document.createElement("div")
        document.getElementById("container").appendChild(toyPrice)
        toyPrice.setAttribute("class", i)
        toyPrice.innerText = cart[i].price

        let remToCart = document.createElement("button")
        document.getElementById("container").appendChild(remToCart)
        remToCart.setAttribute("id", i)
        
        toys[i].add="remove from cart"
        remToCart.innerHTML = toys[i].add

        document.getElementById(i).onclick=function(){
            cart.splice(i,1)
            cartPage.onclick()

        }

    } 
}




