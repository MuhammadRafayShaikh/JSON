const fetchApi = async () => {
    let res = await fetch("https://dummyjson.com/products", { method: 'get' });
    let data = await res.json();

    console.log(data);

    for (let i = 0; i < data.products.length; i++) {
        document.getElementById('mydata').innerHTML += `
        <div class="card" style="width: 23rem;">
                         <img src="${data.products[i].thumbnail}" class="card-img-top" alt="...">
                         <div class="card-body">
                         <h5 class="card-title">${data.products[i].title}</h5>
                         <p class="card-text">Price: Rs ${data.products[i].price}</p>
                         <a href="Assignmentdetailpage.html?id=${i}" class="btn btn-primary">Go somewhere</a>
                     </div>
                 </div>
        `

    }
}
fetchApi()