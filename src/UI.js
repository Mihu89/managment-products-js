export class UI {
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