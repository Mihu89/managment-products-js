class Product {
    constructor(name, description, price, year) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById("product-list");
        const element = document.createElement("div");
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Product</strong>:${product.name}
                <strong>Description</strong>: ${product.description}
                <strong>Price</strong>:${product.price}
                <strong>Year</strong>:${product.year}
                <a href="#" name="delete" class="btn btn-danger">Delete</a>
            </div>
        </div>
        `;

        productList.appendChild(element);
    }

    deleteProduct(element) {
        if (element.name == "delete") {
            element.parentElement.parentElement.remove();
            console.log("Product deleted");
        }
    }

    resetForm(){
        document.getElementById("product-form").reset();
    }

    showMessage(message, cssClass){
        const div = document.createElement("div");
        div.className=`alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div, app);
        // remove html node after 3 seconds
        setTimeout(function(){
                document.querySelector(".alert").remove();
        }, 4000);
    }
}

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
    console.log(e.target);
    ui.deleteProduct(e.target);
    e.preventDefault();
})

