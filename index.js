
var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productDescInput = document.getElementById('productDescInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var searchInput = document.getElementById('searchInput');
var productsContainer = [];
//zbon adim
if (localStorage.getItem('products') != null) {
    productsContainer = JSON.parse(localStorage.getItem('products'));//not null
    displayProducts();
}

function addProduct() {

    if(validate()==true)
    {
        var product = {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescInput.value,
        }
        productsContainer.push(product);//1000
        localStorage.setItem('products', JSON.stringify(productsContainer))
        displayProducts();

    }
    
    else
    {
        window.alert("Invalid ProductName")
    }
    

    // clearForm();
}



function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
}


function displayProducts() 
{

    var cartoona = ``;
    for (var i = 0; i < productsContainer.length; i++) {
        cartoona += `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td> <button onclick="deleteProduct(${i});" class="btn btn-sm btn-outline-danger">delete</button> </td>
        <td> <button class="btn btn-sm btn-outline-warning">update</button> </td>
   
      </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
}


function deleteProduct(deleteIndex){
    productsContainer.splice(deleteIndex,1);
    localStorage.setItem('products',JSON.stringify(productsContainer))
    displayProducts();
}

function searchProducts(){
    var searchTerm = searchInput.value;
    var cartoona='';
    for(var i=0 ; i<productsContainer.length;i++)
    {
        if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase())==true)
        {
            cartoona += `<tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
            <td> <button onclick="deleteProduct(${i});" class="btn btn-sm btn-outline-danger">delete</button> </td>
            <td> <button onclick=updateProduct(${i}) class="btn btn-sm btn-outline-warning">update</button> </td>
       
          </tr>`
        }
        document.getElementById('tableBody').innerHTML = cartoona;
        }

    }

    function validate() 
    {
        var regex = /^[A-Z][a-z]{3,8}$/;
        if (regex.test(productNameInput.value)==true)
        {
            return true;
        }
        else
        {
            return false;
        }





    }






//   var productName ="Samsung note 8";
//   var searchTerm = "Note";

// console.log(  productName.toLowerCase().includes(searchTerm.toLowerCase()));



