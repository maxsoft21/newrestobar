(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// Obtén la referencia al elemento <div> donde mostrarás los datos del menú
const menuItemsParaPicotear = document.getElementById("menuItemsParaPicotear");
const menuItemsPizza = document.getElementById("menuItemsPizza");
const menuItemsPizzaPromociones = document.getElementById(
  "menuItemsPizzaPromociones"
);
const menuItemsTagosDeLaCasa = document.getElementById(
  "menuItemsTagosDeLaCasa"
);
const menuItemsTagosDeLaCasaSour = document.getElementById(
  "menuItemsTagosDeLaCasaSour"
);
const menuItemsTagosDeLaCasaClasicos = document.getElementById(
  "menuItemsTagosDeLaCasaClasicos"
);
const menuItemsTagosDeLaCasaEroticDrink = document.getElementById(
  "menuItemsTagosDeLaCasaEroticDrink"
);
const menuItemsCervezasBarril = document.getElementById(
  "menuItemsCervezasBarril"
);
const menuItemsCervezasMixes = document.getElementById(
  "menuItemsCervezasMixes"
);
const menuItemsCervezasBotella = document.getElementById(
  "menuItemsCervezasBotella"
);
const menuItemsEspumantes = document.getElementById("menuItemsEspumantes");
const menuItemsVinosTintos = document.getElementById("menuItemsVinosTintos");
const menuItemsVinosBlancos = document.getElementById("menuItemsVinosBlancos");
const menuItemsDestiladosCaribe = document.getElementById(
  "menuItemsDestiladosCaribe"
);
const menuItemsDestiladosSpritz = document.getElementById(
  "menuItemsDestiladosSpritz"
);
const menuItemsDestiladosVirgins = document.getElementById(
  "menuItemsDestiladosVirgins"
);
const menuItemsDestiladosPiscos = document.getElementById(
  "menuItemsDestiladosPiscos"
);
const menuItemsDestiladosRon = document.getElementById(
  "menuItemsDestiladosRon"
);
const menuItemsDestiladosWhisky = document.getElementById(
  "menuItemsDestiladosWhisky"
);
const menuItemsDestiladosVodka = document.getElementById(
  "menuItemsDestiladosVodka"
);
const menuItemsDestiladosLicores = document.getElementById(
  "menuItemsDestiladosLicores"
);
const menuItemsDestiladosShot = document.getElementById(
  "menuItemsDestiladosShot"
);
const menuItemsDestiladosMixer = document.getElementById(
  "menuItemsDestiladosMixer"
);
const pathImageParaPicotear = "./img/paraPicotear";
const pathImagePizza = "./img/pizzas";
const pathImageTagosDeLaCasa = "./img/tragosDeLaCasa";
const pathImageCervezas = "./img/cervezas";
const pathImageEspumantes = "./img/espumantes";
const pathImageDestilados = "./img/destilados";

// Define el JSON con los elementos del menú
const menuJSONParaPicotear = {
  items: [
    {
      name: "EMPANADITAS DE QUESO - 8",
      description: "",
      price: "$3.900.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/empanadas.jpg",
    },
    {
      name: "BARROS LUCO",
      description:
        "Lomo vetado 200 grs, queso derretido, todo en Pan Frica + Porcion de papas fritas ",
      price: "$5.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/barrosLuco1.jpg",
    },
    {
      name: "LOMO ITALIANO",
      description:
        "Lomo vetado 200 grs, tomate, palta, mayonesa casera, en  Pan frica + porcion de papas fritas",
      price: "$5.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/lomitoItaliano1.jpg",
    },
    {
      name: "LOMO CHACARERO",
      description:
        "Lomo vetado 200 grs, porotos verdes, tomate, mayonesa casera, aji verde, en pan frica, + porcion de papas fritas",
      price: "$5.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/lomoChacarero1.jpg",
    },
    {
      name: "LECHE DE TIGRE",
      description:
        "Reyneta, Camaron Ecuatoriano, Cancha Serrana, Camote, Marinado en limon mezclado en el jugo del ceviche, acompañados con ricas tostadas, servido en copa",
      price: "$6.900.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/lecheDeTigre1.jpg",
    },
    {
      name: "CEVICHE NEW",
      description:
        "Reyneta, Cebolla Morada, Camote, Cancha Serrana, Todo marinado en jugo de limon",
      price: "$12.900.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/cevicheNew1.jpg",
    },
    {
      name: "CEVICHE MIXTO",
      description:
        "Camaron Ecuatoriano, Reyneta, Cebolla Morada, Camote, Cancha Serrana y todo Marinado en Jugo de Limon",
      price: "$14.900.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/cevicheMixto1.jpg",
    },
    {
      name: "CHORRILLANA NEW",
      description:
        "Carne de Vacuno,  Cerdo,  Pollo, Chorizo, Cebolla Caramelizada, Papas Chips Rusticas",
      price: "$11.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/chorrillanaNew.jpg",
    },
    {
      name: "CHORRILLANA OLD",
      description:
        "Carne de Vacuno, Cerdo, Pollo, Chorizos, Cebolla, Caramelizada, Papas Fritas",
      price: "$11.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/chorrillanaNew.jpg",
    },
    {
      name: "LOMO SALTEADO",
      description:
        "Carne de Vacuno, Papas Fritas, Acompañado con un mix de verduras salteadas",
      price: "$8.500.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/Lomosalteado1.jpg",
    },
    {
      name: "POLLO APANADO",
      description:
        "Trozos de pollo apanado al estilo New acompañado de Salsa Teriyaki y Guacamole.",
      price: "$5.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/polloApanado.jpg",
    },
    {
      name: "PAPAS A LA NEW",
      description:
        "Papas Chips Ruticas, Trocitos de Carne, Champiñones, bañado en queso derretido con un toque de oregano.",
      price: "$7.500.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/papasNew.jpg",
    },
    {
      name: "PAPAS A LA MEXICANA",
      description:
        "Papas Chips cubiertas en salsa Mexicana, Trocitos de carne, Champiñones, Queso, con toques de oregano.",
      price: "$7.500.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/",
    },
    {
      name: "TABLA DE CARNE",
      description:
        "Carne de Vacuno, Carne de cerdo, Longanizas, Pollo, Champiñones Salteados en aceite de Oliva, acompañados de Salame, Aceitunas, Pan tostado con aceite de oliva y oregano, Guacamole.",
      price: "$9.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/tabladecarne.jpg",
    },
    {
      name: "CARNE Y POLLO AL PIL PIL",
      description:
        "Trozo de Carne de Vacuno y Pollo, Condimentado con aceite de Oliva, Ajo, Aji verde, Jugo de Limon con Vino Blanco acompañado de tostaditas en aceite de Oliva y Oregano.",
      price: "$10.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/",
    },
    {
      name: "VEGETARIANO NEW",
      description:
        "Aros de Cebolla con champiñones rebosados al estilo New, Salteados de verduras y acompañados de Tomates Cherry.",
      price: "$5.000.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/",
    },
    {
      name: "VEGETARIANO NEW + PAPAS CHIPS",
      description:
        "Papas Chips Rusticas, Aros de Cebolla con Champiñones rebosados al estilo New acompañados con salteados de veduras y Tomates Cherry",
      price: "$5.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/vegetarianoNewMasPapasChips.jpg",
    },
    {
      name: "HAMBURGESAS NEW",
      description:
        "Hamburgesa casera 200 gr. Bañada en queso derretido con aros de cebolla, rebosados con salsa casera, Tomate, Lechuga, Porcion de Papas Fritas en Pan Frica",
      price: "$5.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/",
    },
    {
      name: "HAMBURGUESA NEW II",
      description:
        "Hamburguesa Casera de 200 grs. Bañada en queso Cheddar, Huevo frito, cebolla caramelizada, tomates, lechuga, pepinillos, rebozados en salsa casera, porcion de papas fritas en Pan frica.",
      price: "$5.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/Hamburguesanew2.jpg",
    },
    {
      name: "HAMBURGUESA NEW III",
      description:
        "Hamburgesa casera de 200 grs. Bañada en Queso Cheddar, chorizo parrillero, tocino, cebolla caramelizada, Tomates, Lechuga, Rebozado en salsa casera, porcion de papas fritas en pan frica​",
      price: "$5.990.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/Hamburguesanew3.jpg",
    },
  ],
};
const menuJSONPizza = {
  items: [
    {
      name: "PIZZA PEPERONI FAMILIAR (38CMS)",
      description:
        "Queso Mozarella, Peperoni, sobre una salsa de pizza casera hecha con ingredientes de primera calidad, todo en una delgada, crujiente y exquisita masa artesanal hecha en casa.",
      price: "$9.990.-",
      price2: "",
      srcImage: pathImagePizza + "/pizzaPepperoni.jpg",
    },
    {
      name: "PIZZA VEGETARIANA FAMILIAR (38CMS)",
      description:
        "Queso Mozarella, Tomate Cherry, Pimentón, Zanahoria, Cebolla, Champiñones, sobre una salsa de pizza casera hecha con ingredientes de primera calidad, todo en una delgada, crujiente y exquisita masa artesanal hecha en casa.",
      price: "$9.990.-",
      price2: "",
      srcImage: pathImagePizza + "/pizzaVegetariana.jpg",
    },
    {
      name: "PIZZA MARGARITA FAMILIAR (38CMS)",
      description:
        "Queso Mozarella, Tomates en rodajas, sobre una salsa de pizza casera hecha con ingredientes de primera calidad, todo en una delgada, crujiente y exquisita masa artesanal hecha en casa.",
      price: "$8.990.-",
      price2: "",
      srcImage: pathImagePizza + "/pizzamargarita.jpg",
    },
    {
      name: "PIZZA NEW I FAMILIAR (38CMS)",
      description:
        "Queso Mozarella, Choclo, Peperoni, Chorizo, Salame, Aceitunas, Carne Molida, sobre una salsa casera hecha con ingredientes de primera calidad, todo en una delgada, crujiente y exquisita masa hecha en casa.",
      price: "$10.990.-",
      price2: "",
      srcImage: pathImagePizza + "/new1.jpg",
    },
    {
      name: "PIZZA NEW II FAMILIAR (38CMS)",
      description:
        "Queso Mozarella, Trozos de Lomo Vetado sazonados en salsa de whisky, Aceitunas negras, sobre una salsa casera hecha con ingredientes de primera calidad, todo en una delgada, crujiente y exquisita masa artesanal hecha en casa.",
      price: "$11.990.-",
      price2: "",
      srcImage: pathImagePizza + "/",
    },
    {
      name: "PIZZA POLLO & CAMARON (38CMS)",
      description:
        "Queso Mozarella, Trozos de Pollo, Camarones, Salteados y sazonados en salsa marina, sobre una salsa casera de pizza hecha con ingredientes de primera calidad, todo en una delgada, crujiente y exquisita masa artesanal hecha en casa.",
      price: "$11.990.-",
      price2: "",
      srcImage: pathImagePizza + "/pizzaPolloyCamaron.jpg",
    },
  ],
};
const menuJSONPizzaPromociones = {
  items: [
    {
      name: "Promo 1",
      description:
        "PIZZA PEPERONI, MARGARITA, VEGETARIANA O NEW I FAMILIAR + 1 CERVEZA LITRO ROYAL, HEINEKEN O 2 SCHOP STELLA 500 cc C/U",
      price: "$12.990.-",
      price2: "",
      srcImage: pathImagePizza + "/",
    },
    {
      name: "Promo 2",
      description:
        "PIZZA POLLO CAMARON, NEW II, + 1 CERVEZA LITRO ROYAL, HEINEKEN O 2 SCHOP STELLA 500 CC C/U",
      price: "$13.990.-",
      price2: "",
      srcImage: pathImagePizza + "/",
    },
    {
      name: "Promo 3",
      description:
        "PIZZA PEPERONI, MARGARITA, VEGETARIANA O NEW I FAMILIAR + 2 SCHOP KROSS (GOLDEN STOUT) O 2 SCHOP 24/7 (AMBER LAGER SESSION IPA) 500 cc C/U",
      price: "$14.990.-",
      price2: "",
      srcImage: pathImagePizza + "/",
    },
    {
      name: "Promo 4",
      description:
        "PIZZA POLLO&CAMARON. NEW II, + 2 SCHOP KROSS (GOLDEN O STOUT) O 2 SCHOP 24/7 (AMBER LAGER SESSION IPA) 500 CC C/U",
      price: "$15.990.-",
      price2: "",
      srcImage: pathImagePizza + "/",
    },
  ],
};

const menuJSONTagosDeLaCasa = {
  items: [
    {
      name: "NEW TROPIC",
      price: "$6.990",
      description:
        "Limón de pica macerado con menta fresca Maracuya, Frambuesa, destilado de jagermaitter con toque de ron bacardi.",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Luna de Miel",
      price: "$4.990",
      description: "Jack Daniels honey, Menta y Limon de pica",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Rasp n Roses",
      price: "$4.990",
      description: "Absolut Raspberry, Crema de leche, Granadina, Marrasquino",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "El Temblor",
      price: "$4.990",
      description: "Jack Daniels fire, Absolut mandarin, Curacao y Marrasquino",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Vanilla Ice",
      price: "$4.990",
      description: "Absolut vainilla, Licor de menta, Crema de leche.",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Sweet Dream",
      price: "$4.990",
      description:
        "Bombay Saphire, Albahaca, Jugo de frambuesa y Limón de pica",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Straw-Trooper",
      price: "$4.990",
      description: "Tequila, Menta, Frutilla y Tizado con sal merquen",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Tonic be Good",
      price: "$4.990",
      description: "Bombay Saphire, Campari, Tonica y Piel de naranja",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "James Bond",
      price: "$4.990",
      description:
        "Absolut Vodka, Martini extra dry, cascaras de limón con aceitunas sevillanas",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Smooth Criminal",
      price: "$4.990",
      description: "Fernet Branca, Licor de cacao y Crema de leche",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Sparkling Negroni",
      price: "$4.990",
      description: "Campari, Vermouth Rosso, Espumante Brut",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
  ],
};

const menuJSONTagosDeLaCasaSour = {
  items: [
    {
      name: "Pisco Sour Chileno",
      price: "$3.500",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Preruvian Style Sours",
      price: "$4.990",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Amaretto Sours",
      price: "$3.500",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Menta Sours",
      price: "$3.500",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
  ],
};

const menuJSONTagosDeLaCasaEroticDrink = {
  items: [
    {
      name: "Orgasmo",
      price: "1 x $6.000",
      description: "Vodka, Khalua, Bayles, Crema, Chantilly",
      price2: "2 x $11.000",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Sex on the Beach",
      price: "1 x $5.500",
      description: "Stoli original, Curacao, Jugo de maracuya, Granadina",
      price2: "2 x $10.000",
      srcImage: pathImageTagosDeLaCasa + "/sexOnTheBeach.jpg",
    },
    {
      name: "Pineapple Sex",
      price: "$5.000",
      description:
        "Ron blanco, Juego de piña, helado de piña, crema de leche, crema chantilly",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Fruit Passion",
      price: "$5.000",
      description: "Wisky, Leche condensada, Jugo de maracuya, Frutilla",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
  ],
};

const menuJSONTagosDeLaCasaClasicos = {
  items: [
    {
      name: "Copa Sangría",
      price: "$4.990",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Old Fashoned",
      price: "$4.990",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Negroni",
      price: "$4.990",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Manhattan",
      price: "$4.990",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Martini Dry",
      price: "$4.500",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Tom Collins",
      price: "$3.900",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Clavo Oxidado",
      price: "$4.900",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Margarita",
      price: "$4.000",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Laguna Azul",
      price: "$4.990",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Piña Colada",
      price: "$4.990",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Ruso Blanco",
      price: "$4.500",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
    {
      name: "Ruso Negro",
      price: "$4.500",
      description: "",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/",
    },
  ],
};

const menuJSONCervezasBarril = {
  items: [
    {
      name: "Chopp de Cusqueña 500cc",
      description: "",
      price: "1 x $3.000",
      price2: "2 x $5.000",
      srcImage: pathImageCervezas + "/shopCusquenha.jpeg",
    },
    {
      name: "Edeltoff",
      description: "Summer Ale - Ambar Ale",
      price: "1 x $3.000",
      price2: "2 x $5.000",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "Estrella Damm Chopp",
      description: "",
      price: "2 X $6.000",
      price2: "",
      srcImage: pathImageCervezas + "/estrellaDam.jpg",
    },
    {
      name: "Kross Golden",
      description: "",
      price: "2 x $7.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "Kross Stout",
      description: "",
      price: "2 x $7.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "Stella Artois",
      description: "",
      price: "$3.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "Heineken",
      description: "",
      price: "$3.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
  ],
};
const menuJSONCervezasMixes = {
  items: [
    {
      name: "CROWN BLUE BEER",
      description:
        "Cerveza Corona, con limon, sal, tequila y curacao Crown red beer",
      price: "1 x $4000",
      price2: "2 × $7000",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "CROWN RED BEER",
      description: "Cerveza Corona, con limon, Sal, tequila y granadina",
      price: "​1 x $4000",
      price2: "2 × $7000",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "BEER KALUA",
      description: "Cerveza con Shot de Kalua y Vodka con estelas de canela",
      price: "​1 x $4.500",
      price2: "2 x $8.000",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "BEER DEVIL",
      description: "Cerveza con Shot de Jagger y Tabasco",
      price: "1 x $4.500",
      price2: "2 x $8.000",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "BEER MEXICO",
      description: "Cerveza con Shot de Tequila Michelado",
      price: "1 x ​$4.500",
      price2: "2 x $8.000",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "BEER RUSSO",
      description: "Cerveza con Shot de Vodka y estelas de canela",
      price: "1 x ​$4.500",
      price2: "2 x $8.000",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "BEER SUBMARINE",
      description: "Cerveza con Shot de Pisco y estelas de canela",
      price: "1 x ​$4.500",
      price2: "​2 x $8.000",
      srcImage: pathImageCervezas + "/",
    },
  ],
};

const menuJSONCervezasBotella = {
  items: [
    {
      name: "CORONA",
      description: "",
      price: "$2.500",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "MILLER",
      description: "",
      price: "​​​$2.500",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "CORONA 710cc",
      description: "",
      price: "$4.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "BUDWEISER 1L",
      description: "",
      price: "$4.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "ROYAL GUARD 1L",
      description: "",
      price: "​​$4.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "HEINEKEN 1L",
      description: "",
      price: "​​​​$4.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "AUSTRAL CALAFATE",
      description: "",
      price: "​​​$3.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "AUSTRAL YAGAN",
      description: "",
      price: "​​​$3.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "AUSTRAL PATAGONIA",
      description: "",
      price: "​​​$3.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "KUNTSMANN TOROBAYO",
      description: "",
      price: "​​​$3.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "KUNTSMANN BOCK",
      description: "",
      price: "​​​$3.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
    {
      name: "KUNTSMANN DAS LAGER",
      description: "",
      price: "​​​$3.000",
      price2: "",
      srcImage: pathImageCervezas + "/",
    },
  ],
};
const menuJSONVinosTintos = {
  items: [
    {
      name: "Copa de Sangría",
      description: "",
      price: "$4.900",
      price2: "",
      srcImage: pathImageEspumantes + "/",
    },
    {
      name: "Doña Dominga",
      description: "",
      price: "$8.500",
      price2: "",
      srcImage: pathImageEspumantes + "/",
    },
    {
      name: "Patronales",
      description: "",
      price: "$10.990",
      price2: "",
      srcImage: pathImageEspumantes + "/",
    },
    {
      name: "Santa Ema",
      description: "",
      price: "$10.990",
      price2: "",
      srcImage: pathImageEspumantes + "/",
    },
  ],
};
const menuJSONVinosBlancos = {
  items: [
    {
      name: "Patronales",
      description: "",
      price: "$10.900",
      price2: "",
      srcImage: pathImageEspumantes + "/",
    },
    {
      name: "Santa Ema",
      description: "",
      price: "$10.900",
      price2: "",
      srcImage: pathImageEspumantes + "/",
    },
  ],
};
const menuJSONEspumantes = {
  items: [
    {
      name: "Valdivieso Brut Copa",
      description: "",
      price: "$2.500",
      price2: "",
      srcImage: pathImageEspumantes + "/",
    },
    {
      name: "Valdivieso Brut Botella",
      description: "",
      price: "$11.500",
      price2: "",
      srcImage: pathImageEspumantes + "/",
    },
  ],
};

const menuJSONDestiladosCaribe = {
  items: [
    {
      name: "Mojito jagermeister XL",
      description: "",
      price: "$6.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Mojito Whisky Jack XL",
      description: "(7, Honey, Fire, Apple)",
      price: "$7.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Mojito tradicional ",
      description: "",
      price: "1x$3.500",
      price2: "2x$6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Mojito sabores",
      description: "Maracuyá, Frutilla, Mango, Frambuesa",
      price: "1 x $4.000",
      price2: "2 x $7.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Mojito Corona XL",
      description: "",
      price: "$6.000",
      price2: "",
      srcImage: pathImageDestilados + "/mojitoCorona.jpg",
    },
    {
      name: "Mojito Corona Sabores XL",
      description: "",
      price: "$6.500",
      price2: "",
      srcImage: pathImageDestilados + "/mojitoCorona.jpg",
    },
    {
      name: "Mojito Tradicional XL",
      description: "",
      price: "$5.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Mojito Sabores XL",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Caipirinha",
      description: "",
      price: "$3.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Caipiroska",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Daikiri Sabores",
      description: "",
      price: "$3.990",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Daikiri",
      description: "",
      price: "$3.490",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
  ],
};

const menuJSONDestiladosSpritz = {
  items: [
    {
      name: "Aperol",
      description: "",
      price: "1 x $4.990",
      price2: "2 x $8.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Aperol XL",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Ramazzotti",
      description: "",
      price: "1 x $4.900",
      price2: "2 x $8.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Ramazzoti XL",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
  ],
};
const menuJSONDestiladosVirgins = {
  items: [
    {
      name: "Bebida 350cc",
      description: "",
      price: "$2.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Agua Mineral 330cc",
      description: "",
      price: "$1.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Gatorade 500cc",
      description: "",
      price: "$2.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Red Bull",
      description: "",
      price: "$2.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Monster",
      description: "",
      price: "$2.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Limonada",
      description: "",
      price: "$3.490",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "Jugo Natural",
      description: "Maracuya, Mango, Frambuesa, Piña, Frutilla",
      price: "$3.490",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
  ],
};

const menuJSONDestiladosPiscos = {
  items: [
    {
      name: "ALTO 35°",
      description: "",
      price: "1 x $3.000",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "ALTO 40°",
      description: "",
      price: "$4.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "MISTRAL 35°",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "MISTRAL 40°",
      description: "",
      price: "$4.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "HORCON QUEMADO 35°",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "HORCON QUEMADO 40°",
      description: "",
      price: "$4.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "FUNDO LOS NICHOS 35°",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "FUNDO LOS NICHOS 40°",
      description: "",
      price: "$4.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "MAL PASO 35°",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "MAL PASO 40°",
      description: "",
      price: "$4.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
  ],
};

const menuJSONDestiladosRon = {
  items: [
    {
      name: "FLOR DE CAÑA 4 AÑOS",
      description: "",
      price: "1 x $3.000",
      price2: "2 x $5.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "HAVANA ESPECIAL",
      description: "",
      price: "1 x $4.000",
      price2: "2 x $7.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "HAVANA AÑEJO RESERVA",
      description: "",
      price: "1 x $4.000",
      price2: "2 x $7.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "HAVANA 3 AÑOS",
      description: "",
      price: "$4.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "HAVANA 7 AÑOS",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "CACIQUE AÑEJO",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "CACIQUE 500",
      description: "",
      price: "$4.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
  ],
};

const menuJSONDestiladosWhisky = {
  items: [
    {
      name: "BALLANTINES",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "100 PIPPERS",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JACK DANIEL'S N°7",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JACK DANIEL'S APPLE",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JACK DANIEL'S HONEY",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JACK DANIEL'S FIRE",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JOHNNIE WALKER RED LABEL",
      description: "",
      price: "1 x $4.000",
      price2: "2 x $7.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JOHNNIE WALKER BLACK LABEL",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "BUCHANAN'S",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "OLD PARR",
      description: "",
      price: "$6.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
  ],
};
const menuJSONDestiladosVodka = {
  items: [
    {
      name: "STOLI ORIGINAL",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "ABSOLUT ORIGINAL",
      description: "",
      price: "1 x $4.000",
      price2: "2 x $7.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "ABSOLUT VARIEDADES",
      description:
        "Raspberry, Cherry, Apeach, Vainilla, Kurrant, Citron, Pepar",
      price: "1 x $4.000",
      price2: "2 x $7.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "GRAY GOOSE ORIGINAL",
      description: "",
      price: "1 x $5.500",
      price2: "2 x $10.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "GRAY GOOSE LE POIRE",
      description: "",
      price: "$6.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
  ],
};
const menuJSONDestiladosLicores = {
  items: [
    {
      name: "BOMBAY SAPPHIRE",
      description: "",
      price: "1 x $4.500",
      price2: "2 x $8.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "TANQUERAY",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "FERNET BRANCA",
      description: "",
      price: "1 x $4.000",
      price2: "2 x $7.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "CAMPARI",
      description: "",
      price: "1 x $4.000",
      price2: "2 x $7.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "FRANGELICO",
      description: "",
      price: "$4.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "BAILEYS",
      description: "",
      price: "$4.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "DRAMBUIE",
      description: "",
      price: "$4.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
  ],
};
const menuJSONDestiladosShot = {
  items: [
    {
      name: "TERREMOTO",
      description: "",
      price: "1 x $3.500",
      price2: "2 x $6.000",
      srcImage: pathImageDestilados + "/Terremoto.jpg",
    },
    {
      name: "CUCARACHA",
      description: "",
      price: "$3.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "TEQUILA SHOT",
      description: "",
      price: "1 x $2.500",
      price2: "2 x $4.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JAGGERMEISTER",
      description: "",
      price: "1 x $4.500",
      price2: "2 x $8.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "AMARETTO",
      description: "",
      price: "1 x $2.500",
      price2: "2 x $4.000",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "MENTA",
      description: "",
      price: "1 x $2.500",
      price2: "2 x $4.000",
      srcImage: pathImageDestilados + "/",
    },
  ],
};
const menuJSONDestiladosMixer = {
  items: [
    {
      name: "COPA DE SANGRÍA",
      description: "",
      price: "$4.900",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "HORCON QUEMADO 35°+RED BULL",
      description: "",
      price: "$6.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "HAVANA ESPECIAL + RED BULL",
      description: "",
      price: "$6.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JACK N°7 + RED BULL",
      description: "",
      price: "$7.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JOHNNY RED LABEL+RED BULL",
      description: "",
      price: "$6.500",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "ABSOLUT VARIEDADES+RED BULL",
      description: "",
      price: "$7.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
    {
      name: "JAGGERMEISTER - RED BULL (Jager Bomb)",
      description: "",
      price: "$6.000",
      price2: "",
      srcImage: pathImageDestilados + "/",
    },
  ],
};

// Función para mostrar los elementos del menú en el <div>
function mostrarMenu(menu, container) {
  const items = menu.items;
  const menuHTML = items
    .map(
      (item) => `<div class="col-lg-6">
                                    <div class="d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid rounded" src="${item.srcImage}" alt="" style="width: 80px; height: 80px;">
                                        <div class="w-100 d-flex flex-column text-start ps-4">
                                            <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                <span>${item.name}</span>
                                                <div class="text-primary d-flex flex-column">
                                                <span>${item.price}</span>
                                                <span>${item.price2}</span>
                                                </div>
                                            </h5>
                                            <small class="fst-italic">${item.description}</small>
                                        </div>
                                    </div>
                                </div>`
    )
    .join("");
  container.innerHTML = menuHTML;
}

// Llama a la función para mostrar el menú
mostrarMenu(menuJSONParaPicotear, menuItemsParaPicotear);
mostrarMenu(menuJSONPizza, menuItemsPizza);
mostrarMenu(menuJSONPizzaPromociones, menuItemsPizzaPromociones);
mostrarMenu(menuJSONTagosDeLaCasa, menuItemsTagosDeLaCasa);
mostrarMenu(menuJSONTagosDeLaCasaClasicos, menuItemsTagosDeLaCasaClasicos);
mostrarMenu(menuJSONTagosDeLaCasaSour, menuItemsTagosDeLaCasaSour);
mostrarMenu(
  menuJSONTagosDeLaCasaEroticDrink,
  menuItemsTagosDeLaCasaEroticDrink
);
mostrarMenu(menuJSONCervezasBarril, menuItemsCervezasBarril);
mostrarMenu(menuJSONCervezasMixes, menuItemsCervezasMixes);
mostrarMenu(menuJSONCervezasBotella, menuItemsCervezasBotella);
mostrarMenu(menuJSONVinosTintos, menuItemsVinosTintos);
mostrarMenu(menuJSONVinosBlancos, menuItemsVinosBlancos);
mostrarMenu(menuJSONEspumantes, menuItemsEspumantes);
mostrarMenu(menuJSONDestiladosCaribe, menuItemsDestiladosCaribe);
mostrarMenu(menuJSONDestiladosSpritz, menuItemsDestiladosSpritz);
mostrarMenu(menuJSONDestiladosVirgins, menuItemsDestiladosVirgins);
mostrarMenu(menuJSONDestiladosPiscos, menuItemsDestiladosPiscos);
mostrarMenu(menuJSONDestiladosRon, menuItemsDestiladosRon);
mostrarMenu(menuJSONDestiladosWhisky, menuItemsDestiladosWhisky);
mostrarMenu(menuJSONDestiladosVodka, menuItemsDestiladosVodka);
mostrarMenu(menuJSONDestiladosLicores, menuItemsDestiladosLicores);
mostrarMenu(menuJSONDestiladosShot, menuItemsDestiladosShot);
mostrarMenu(menuJSONDestiladosMixer, menuItemsDestiladosMixer);
