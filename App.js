class Product{
    constructor(name,price,year){
        this.name=name;
        this.price=price;
        this.year=year;
    }
    
}

class UI{
    addProduct(product){
        const productList=document.getElementById('product-list');
        const element=document.createElement('div');
        element.innerHTML=`
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} <strong>Price</strong> ${product.price} <strong>Year</strong> ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
        this.resetForm();
        
    }
    deleteProduct(element){
        if(element.name==='delete'){
            element.parentElement.parentElement.parentElement.remove();
        }
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    showMessage(message,cssClass){
        const div = document.createElement('div');
        div.className=`alert alert-${cssClass} mt-4`
        div.appendChild(document.createTextNode(message));
        //Showing in DOM
        const container=document.querySelector('.container');
        const app= document.querySelector('#App');
        container.insertBefore(div,app);
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000);
    }
}

//DOM Events
document.getElementById('product-form')
    .addEventListener('submit',function(e){
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        const ui=new UI();
        if(name===""||price===""||year===""){
            return ui.showMessage('Please complete fields','danger');
        }
        
        const product = new Product(name, price,year);

        
        ui.addProduct(product);
        e.preventDefault();
        ui.showMessage('Product added successfully','success')
    }); 

document.getElementById('product-list')
    .addEventListener('click',function(e){
        const ui= new UI();
        ui.deleteProduct(e.target);
        ui.showMessage('Product deleted successfully','info')
    });