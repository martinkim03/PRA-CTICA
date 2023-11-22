let products = {
    data: [
    {
        productName: "FRAGMENT DESIGN X TRAVIS SCOTT X AIR JORDAN 1 RETRO LOW",
        category: "AirJordan",
        price: "1500",
        image: "https://cdn.flightclub.com/1250/TEMPLATE/267414/1.jpg",
    },
    {
        productName: "AIR FORCE 1 '07 TRIPLE WHITE",
        category: "Nike",
        price: "80",
        image: "https://cdn.flightclub.com/1250/TEMPLATE/251353/1.jpg",
    },
    {
        productName: "YEEZY BOOST 700 WAVE RUNNER' 2017",
        category: "Yeezy",
        price: "380",
        image: "https://cdn.flightclub.com/1250/TEMPLATE/802501/1.jpg",
    },
    {
        productName: "FEAR OF GOD X ERA 95 DX COLLECTION 2 WHITE",
        category: "Otros",
        price: "1000",
        image: "https://cdn.flightclub.com/1250/TEMPLATE/802695/1.jpg",
    },
    {
        productName: "AIR JORDAN 4 RETRO WHITE OREO",
        category: "AirJordan",
        price: "500",
        image: "https://cdn.flightclub.com/1250/TEMPLATE/246509/1.jpg",
    },
    {
        productName: "ZOOM KOBE 6 PROTRO GRINCH",
        category: "Nike",
        price: "750",
        image: "https://cdn.flightclub.com/1250/TEMPLATE/186215/1.jpg",
    },
    {
        productName: "YEEZY BOOST 750 'GREY GUM",
        category: "Yeezy",
        price: "1200",
        image: "https://cdn.flightclub.com/1250/TEMPLATE/201296/1.jpg",
    },
    {
        productName: "COMME DES GARÇONS PLAY X CHUCK 70 HIGH BLACK 2015",
        category: "Otros",
        price: "115",
        image: "https://cdn.flightclub.com/3000/TEMPLATE/805852/1.jpg",
    },
    {
        productName: "AIR JORDAN 3 RETRO SEOUL",
        category: "AirJordan",
        price: "5000",
        image: "https://cdn.flightclub.com/1250/TEMPLATE/803561/1.jpg",
    },
  ],
};

for (let i of products.data) {
    // Reemplazar espacios en blanco con guiones bajos
    let categoryClass = i.category.replace(/\s+/g, '_');

    // Crear Card
    let card = document.createElement("div");
    card.classList.add("card", categoryClass, "hide");

    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container
    let container = document.createElement("div");
    container.classList.add("container");

    // nombre 
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    // precio
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //verificar si value es igual al innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    //seleccionar todas las cards
    let elements = document.querySelectorAll(".card");
    //recorrer todas las cards
    elements.forEach((element) => {
      //Mostrar todas las publicaciones cuando apretas todos
      if (value == "Todos") {
        element.classList.remove("hide");
      } else {
        //verificar si contiene una categoria
        if (element.classList.contains(value)) {
          //mostrar elemento en base a la categoria
          element.classList.remove("hide");
        } else {
          //esconder otros elementos
          element.classList.add("hide");
        }
      }
    });
  }

  //Botón buscar
  document.getElementById("search").addEventListener("click", () => {
    //inicializaciones
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //recorrer todo
    elements.forEach((element, index) => {
      //verificar si el texto incluye el valor de busqueda
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //mostrar la card que va
        cards[index].classList.remove("hide");
      } else {
        //esconder otras
        cards[index].classList.add("hide");
      }
    });
  });
  
//Initially dipslay all products
window.onload = () => {
    filterProduct("Todos");
};