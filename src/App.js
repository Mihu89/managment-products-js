import { Product } from "./Product.js";
import { UI } from "./UI.js";

// DOM Events
document.getElementById("product-form")
.addEventListener("submit", function(e){

    let productName = document.getElementById("name").value;
    let productDescription = document.getElementById("description").value;
    let productPrice = document.getElementById("price").value;
    let productYear = document.getElementById("year").value;

    // create product object from form values
    const product = new Product(productName, productDescription, productPrice, productYear);
    const ui = new UI();

    // validate user input
    if(productName ==="" || productDescription ===""  
    || (productPrice ==="" || parseInt(productPrice)< 0) 
    || (productYear ==="" || parseInt(productYear)< 1800)){
        ui.showMessage("Please insert data in all fields", "danger");
    } else{
        // save product
    ui.addProduct(product);
    ui.showMessage("Product added Successifull", "success");
    // clear form data
    ui.resetForm();
    e.preventDefault();
    }
});

// event listener for delete product from the list
document.getElementById("product-list")
.addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();
})

