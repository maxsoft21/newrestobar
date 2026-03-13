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
        },
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
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0",
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
const menuItemsHamburguesas = document.getElementById("menuItemsHamburguesas");
const menuItemsTagosDeLaCasa = document.getElementById(
  "menuItemsTagosDeLaCasa",
);
const menuItemsTagosDeLaCasaSour = document.getElementById(
  "menuItemsTagosDeLaCasaSour",
);
const menuItemsTagosDeLaCasaClasicos = document.getElementById(
  "menuItemsTagosDeLaCasaClasicos",
);
const menuItemsTagosDeLaCasaEroticDrink = document.getElementById(
  "menuItemsTagosDeLaCasaEroticDrink",
);
const menuItemsCervezas = document.getElementById("menuItemsCervezas");
const menuItemsEspumantes = document.getElementById("menuItemsEspumantes");
const menuItemsVinosTintos = document.getElementById("menuItemsVinosTintos");
const menuItemsVinosBlancos = document.getElementById("menuItemsVinosBlancos");
const menuItemsDestiladosCaribe = document.getElementById(
  "menuItemsDestiladosCaribe",
);
const menuItemsDestiladosSpritz = document.getElementById(
  "menuItemsDestiladosSpritz",
);
const menuItemsDestiladosPiscos = document.getElementById(
  "menuItemsDestiladosPiscos",
);
const menuItemsDestiladosRon = document.getElementById(
  "menuItemsDestiladosRon",
);
const menuItemsDestiladosWhisky = document.getElementById(
  "menuItemsDestiladosWhisky",
);
const menuItemsDestiladosVodka = document.getElementById(
  "menuItemsDestiladosVodka",
);
const menuItemsDestiladosLicores = document.getElementById(
  "menuItemsDestiladosLicores",
);
const menuItemsPromociones = document.getElementById(
  "menuItemsPromociones",
);

const pathImageParaPicotear = "./img/paraPicotear";
const pathImagePizza = "./img/pizzas";
const pathImageTagosDeLaCasa = "./img/tragosDeLaCasa";
const pathImageCervezas = "./img/cervezas";
const pathImageEspumantes = "./img/espumantes";
const pathImageDestilados = "./img/destilados";
const pathImageHamburguesas = "./img/hamburguesas";
const pathImageBebidas = "./img/bebidas";
const pathImageTragos = "./img/tragos";
const pathImagePromociones = "./img/promociones";

// Define el JSON con los elementos del menú
const menuJSONParaPicotear = {
  items: [
    {
      name: "CHICHARRÓN DE CHANCHO CON PAPAS BRAVAS",
      description: "",
      price: "$11.900.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/chicharron-chancho.jpg",
    },
    {
      name: "CHICHARRÓN DE POLLO",
      description: "",
      price: "$8.900.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/chicharron-pollo.jpg",
    },
    {
      name: "ALIPAPAS",
      description: "",
      price: "$8.900.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/alipapas.jpg",
    },
    {
      name: "ALITAS ACEVICHADAS",
      description: "",
      price: "$7.000.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/alitas-acevichadas.jpg",
    },
    {
      name: "ALITAS EN SALSA DE MARACUYA",
      description: "",
      price: "$7.000.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/alitas-maracuya.jpg",
    },
    {
      name: "ALITAS A LA BBQ",
      description: "",
      price: "$7.000.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/alitas-bbq.jpg",
    },
    {
      name: "TABLA FRÍA",
      description: "",
      price: "$10.000.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/tabla-fria.jpg",
    },
    {
      name: "EMPANADA DE CARNE - 6 UND.",
      description: "",
      price: "$6.000.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/empanadas-carne.jpg",
    },
    {
      name: "EMPANADAS DE QUESO - 6 UND.",
      description: "",
      price: "$4.000.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/empanadas-queso.jpg",
    },
    {
      name: "PORCIÓN DE PAPAS FRITAS",
      description: "",
      price: "$4.500.-",
      price2: "",
      srcImage: pathImageParaPicotear + "/papas-fritas.jpg",
    },
  ],
};

const menuJSONHamburguesas = {
  items: [
    {
      name: "LA CLÁSICA",
      description:
        "Lechuga, Tomate, Carne, Papas al hilo y Cremas, todo en un delicioso pan artesanal.",
      price: "$5.000.-",
      price2: "",
      srcImage: pathImageHamburguesas + "/laClasica.jpg",
    },
    {
      name: "HAMBURGUESA ROYAL",
      description:
        "Lechuga, Tomate, Carne, Huevo frito, Papas al hilo y Cremas, en un suave y exquisito pan artesanal.",
      price: "$5.500.-",
      price2: "",
      srcImage: pathImageHamburguesas + "/hamburguesaRoyal.jpg",
    },
    {
      name: "LA ESPECIAL",
      description:
        "Carne, Tocino, Lechuga, Tomate, Papas al hilo y Cremas, en un pan artesanal recién preparado.",
      price: "$6.900.-",
      price2: "",
      srcImage: pathImageHamburguesas + "/laEspecial.jpg",
    },
  ],
};

const menuJSONTagosDeLaCasa = {
  items: [
    {
      name: "OASIS",
      price: "$7.000",
      description:
        "Limón macerado con menta fresca, maracuyá, frambuesa, destilado de ron y Jagermaister.",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/oasis.jpg",
    },
    {
      name: "OASIS BLUE",
      price: "$7.000",
      description:
        "Pisco acholado, glitter comestible blue, jugo de limón y esencia de maracuyá.",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/oasisBlue.jpg",
    },
    {
      name: "LÁGRIMAS DE SANGRE",
      price: "$7.000",
      description:
        "Glitter comestible rojo, miel, jengibre, jugo de limón y tequila.",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/lagrimasDeSangre.jpg",
    },
    {
      name: "PENICHILIN",
      price: "$7.000",
      description: "Whisky, jugo de limón, miel y esencia de jengibre.",
      price2: "",
      srcImage: pathImageTagosDeLaCasa + "/penichilin.jpg",
    },
  ],
};

const menuJSONCervezas = {
  items: [
    {
      name: "ROYAL 1LT",
      description: "",
      price: "$5.000",
      price2: "",
      srcImage: pathImageCervezas + "/royal1lt.jpg",
    },
    {
      name: "HEINEKEN 1LT",
      description: "",
      price: "$5.000",
      price2: "",
      srcImage: pathImageCervezas + "/heineken1lt.jpg",
    },
    {
      name: "QUILMES 1LT",
      description: "",
      price: "$4.500",
      price2: "",
      srcImage: pathImageCervezas + "/quilmes1lt.jpg",
    },
    {
      name: "STELLA 975ML",
      description: "",
      price: "$4.500",
      price2: "",
      srcImage: pathImageCervezas + "/stella975ml.jpg",
    },
    {
      name: "VASO CHELADO",
      description: "",
      price: "$1.500",
      price2: "",
      srcImage: pathImageCervezas + "/vasoChelado.jpg",
    },
    {
      name: "VASO MICHELADO",
      description: "",
      price: "$1.500",
      price2: "",
      srcImage: pathImageCervezas + "/vasoMichelado.jpg",
    },
    {
      name: "CORONA 330ML",
      description: "",
      price: "$2.500",
      price2: "",
      srcImage: pathImageCervezas + "/corona330ml.jpg",
    },
  ],
};

const menuJSONEspumantes = {
  items: [
    {
      name: "BRUT COPA",
      description: "",
      price: "$3.500",
      price2: "",
      srcImage: pathImageEspumantes + "/brutCopa.jpg",
    },
    {
      name: "BRUT BOTELLA",
      description: "",
      price: "$12.500",
      price2: "",
      srcImage: pathImageEspumantes + "/brutBotella.jpg",
    },
  ],
};

const menuJSONDestiladosCaribe = {
  items: [
    {
      name: "Mojito tradicional",
      description: "",
      price: "$4.900",
      price2: "",
      srcImage: pathImageDestilados + "/mojitoTradicional.jpg",
    },
    {
      name: "Mojito sabores",
      description: "Maracuyá, Frutilla, Mango, Frambuesa",
      price: "$5.900",
      price2: "",
      srcImage: pathImageDestilados + "/mojitoSabores.jpg",
    },
    {
      name: "Mojito Corona XL",
      description: "",
      price: "$7.500",
      price2: "",
      srcImage: pathImageDestilados + "/mojitoCoronaXL.jpg",
    },
    {
      name: "Mojito Corona Sabores XL",
      description: "",
      price: "$8.000",
      price2: "",
      srcImage: pathImageDestilados + "/mojitoCoronaSaboresXL.jpg",
    },
    {
      name: "Mojito jagermeister XL",
      description: "",
      price: "$6.900",
      price2: "",
      srcImage: pathImageDestilados + "/mojitoJagerXL.jpg",
    },
    {
      name: "Mojito Whisky Jack XL",
      description: "",
      price: "$7.900",
      price2: "",
      srcImage: pathImageDestilados + "/mojitoWhiskyJackXL.jpg",
    },
    {
      name: "Caipirinha",
      description: "",
      price: "$4.900",
      price2: "",
      srcImage: pathImageDestilados + "/caipirinha.jpg",
    },
    {
      name: "Caipiroska",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/caipiroska.jpg",
    },
    {
      name: "Daikiri Sabores",
      description: "",
      price: "$5.900",
      price2: "",
      srcImage: pathImageDestilados + "/daikiriSabores.jpg",
    },
    {
      name: "Daikiri",
      description: "",
      price: "$4.900",
      price2: "",
      srcImage: pathImageDestilados + "/daikiri.jpg",
    },
  ],
};

const menuJSONDestiladosSpritz = {
  items: [
    {
      name: "Aperol XL",
      description: "",
      price: "$6.900",
      price2: "",
      srcImage: pathImageDestilados + "/aperolXL.jpg",
    },
    {
      name: "Ramazzoti XL",
      description: "",
      price: "$6.900",
      price2: "",
      srcImage: pathImageDestilados + "/ramazzotiXL.jpg",
    },
    {
      name: "BEBIDA 350CC",
      description: "",
      price: "$2.000",
      price2: "",
      srcImage: pathImageBebidas + "/bebida350cc.jpg",
    },
    {
      name: "AGUA MINERAL 330CC",
      description: "",
      price: "$1.500",
      price2: "",
      srcImage: pathImageBebidas + "/aguaMineral330cc.jpg",
    },
    {
      name: "RED BULL",
      description: "",
      price: "$2.500",
      price2: "",
      srcImage: pathImageBebidas + "/redbull.jpg",
    },
    {
      name: "MONSTER",
      description: "",
      price: "$2.500",
      price2: "",
      srcImage: pathImageBebidas + "/monster.jpg",
    },
    {
      name: "LIMONADA",
      description: "",
      price: "$3.490",
      price2: "",
      srcImage: pathImageBebidas + "/limonada.jpg",
    },
    {
      name: "JUGO NATURAL",
      description: "Maracuyá, Mango, Frambuesa, Piña, Frutilla",
      price: "$3.490",
      price2: "",
      srcImage: pathImageBebidas + "/jugoNatural.jpg",
    },
  ],
};

const menuJSONDestiladosPiscos = {
  items: [
    {
      name: "ALTO 35° + BEBIDA",
      description: "",
      price: "$4.900",
      price2: "",
      srcImage: pathImageDestilados + "/alto35bebida.jpg",
    },
    {
      name: "ALTO 40° + BEBIDA",
      description: "",
      price: "$5.900",
      price2: "",
      srcImage: pathImageDestilados + "/alto40bebida.jpg",
    },
    {
      name: "MISTRAL 35° + BEBIDA",
      description: "",
      price: "$5.000",
      price2: "",
      srcImage: pathImageDestilados + "/mistral35bebida.jpg",
    },
    {
      name: "MISTRAL 40° + BEBIDA",
      description: "",
      price: "$6.000",
      price2: "",
      srcImage: pathImageDestilados + "/mistral40bebida.jpg",
    },
    {
      name: "MAL PASO 35° + BEBIDA",
      description: "",
      price: "$6.000",
      price2: "",
      srcImage: pathImageDestilados + "/malpaso35bebida.jpg",
    },
    {
      name: "MAL PASO 40° + BEBIDA",
      description: "",
      price: "$7.000",
      price2: "",
      srcImage: pathImageDestilados + "/malpaso40bebida.jpg",
    },
  ],
};

const menuJSONDestiladosRon = {
  items: [
    {
      name: "HAVANA 3 AÑOS + BEBIDA",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/havana3bebida.jpg",
    },
    {
      name: "HAVANA 7 AÑOS + BEBIDA",
      description: "",
      price: "$7.500",
      price2: "",
      srcImage: pathImageDestilados + "/havana7bebida.jpg",
    },
    {
      name: "SANTA TERESA + BEBIDA",
      description: "",
      price: "$7.900",
      price2: "",
      srcImage: pathImageDestilados + "/santateresaBebida.jpg",
    },
  ],
};

const menuJSONDestiladosWhisky = {
  items: [
    {
      name: "JACK DANIEL'S N°7 + BEBIDA",
      description: "",
      price: "$8.500",
      price2: "",
      srcImage: pathImageDestilados + "/jackDaniels7Bebida.jpg",
    },
    {
      name: "JACK DANIEL'S APPLE + BEBIDA",
      description: "",
      price: "$8.500",
      price2: "",
      srcImage: pathImageDestilados + "/jackDanielsAppleBebida.jpg",
    },
    {
      name: "JACK DANIEL'S HONEY + BEBIDA",
      description: "",
      price: "$8.500",
      price2: "",
      srcImage: pathImageDestilados + "/jackDanielsHoneyBebida.jpg",
    },
    {
      name: "JACK DANIEL'S FIRE + BEBIDA",
      description: "",
      price: "$8.500",
      price2: "",
      srcImage: pathImageDestilados + "/jackDanielsFireBebida.jpg",
    },
    {
      name: "JOHNNIE WALKER RED LABEL + BEBIDA",
      description: "",
      price: "$5.900",
      price2: "",
      srcImage: pathImageDestilados + "/johnnieWalkerRedBebida.jpg",
    },
    {
      name: "JOHNNIE WALKER BLACK LABEL + BEBIDA",
      description: "",
      price: "$8.500",
      price2: "",
      srcImage: pathImageDestilados + "/johnnieWalkerBlackBebida.jpg",
    },
    {
      name: "BUCHANAN'S + BEBIDA",
      description: "",
      price: "$8.500",
      price2: "",
      srcImage: pathImageDestilados + "/buchanansBebida.jpg",
    },
  ],
};

const menuJSONDestiladosVodka = {
  items: [
    {
      name: "STOLI ORIGINAL + BEBIDA",
      description: "",
      price: "$5.900",
      price2: "",
      srcImage: pathImageDestilados + "/stoliOriginalBebida.jpg",
    },
  ],
};

const menuJSONDestiladosLicores = {
  items: [
    {
      name: "BOMBAY SAPPHIRE + BEBIDA",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/bombaySapphireBebida.jpg",
    },
    {
      name: "TANQUERAY + BEBIDA",
      description: "",
      price: "$5.900",
      price2: "",
      srcImage: pathImageDestilados + "/tanquerayBebida.jpg",
    },
    {
      name: "FERNET BRANCA + BEBIDA",
      description: "",
      price: "$6.000",
      price2: "",
      srcImage: pathImageDestilados + "/fernetBrancaBebida.jpg",
    },
    {
      name: "BAILEYS",
      description: "",
      price: "$4.500",
      price2: "",
      srcImage: pathImageDestilados + "/baileys.jpg",
    },
    {
      name: "DRAMBUIE",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageDestilados + "/drambuie.jpg",
    },
  ],
};

const menuJSONTagosDeLaCasaClasicos = {
  items: [
    {
      name: "PERUVIAN SOURS",
      description: "",
      price: "$5.990",
      price2: "",
      srcImage: pathImageTragos + "/peruvianSours.jpg",
    },
    {
      name: "PERUVIAN SOURS CATEDRAL",
      description: "",
      price: "$8.900",
      price2: "",
      srcImage: pathImageTragos + "/peruvianSoursCatedral.jpg",
    },
    {
      name: "AMARETTO SOURS",
      description: "",
      price: "$4.900",
      price2: "",
      srcImage: pathImageTragos + "/amarettoSours.jpg",
    },
    {
      name: "COPA SANGRÍA",
      description: "",
      price: "$6.990",
      price2: "",
      srcImage: pathImageTragos + "/copaSangria.jpg",
    },
    {
      name: "OLD FASHIONED",
      description: "",
      price: "$6.990",
      price2: "",
      srcImage: pathImageTragos + "/oldFashioned.jpg",
    },
    {
      name: "NEGRONI",
      description: "",
      price: "$6.990",
      price2: "",
      srcImage: pathImageTragos + "/negroni.jpg",
    },
    {
      name: "MANHATTAN",
      description: "",
      price: "$4.990",
      price2: "",
      srcImage: pathImageTragos + "/manhattan.jpg",
    },
    {
      name: "MARTINI DRY",
      description: "",
      price: "$5.900",
      price2: "",
      srcImage: pathImageTragos + "/martiniDry.jpg",
    },
    {
      name: "TOM COLLINS",
      description: "",
      price: "$5.900",
      price2: "",
      srcImage: pathImageTragos + "/tomCollins.jpg",
    },
    {
      name: "CLAVO OXIDADO",
      description: "",
      price: "$6.900",
      price2: "",
      srcImage: pathImageTragos + "/clavoOxidado.jpg",
    },
    {
      name: "MARGARITA",
      description: "",
      price: "$5.900",
      price2: "",
      srcImage: pathImageTragos + "/margarita.jpg",
    },
    {
      name: "MARGARITA BLUE",
      description: "",
      price: "$5.990",
      price2: "",
      srcImage: pathImageTragos + "/margaritaBlue.jpg",
    },
    {
      name: "PIÑA COLADA",
      description: "",
      price: "$6.900",
      price2: "",
      srcImage: pathImageTragos + "/pinaColada.jpg",
    },
    {
      name: "RUSO BLANCO",
      description: "",
      price: "$5.900",
      price2: "",
      srcImage: pathImageTragos + "/rusoBlanco.jpg",
    },
    {
      name: "RUSO NEGRO",
      description: "",
      price: "$5.500",
      price2: "",
      srcImage: pathImageTragos + "/rusoNegro.jpg",
    },
    {
      name: "SHOT DE TEQUILA",
      description: "",
      price: "$3.000",
      price2: "",
      srcImage: pathImageTragos + "/shotTequila.jpg",
    },
  ],
};
const menuJSONTagosDeLaCasaEroticDrink = {
  items: [
    {
      name: "ORGASMO",
      description: "Vodka, Kahlúa, Baileys, Crema y Chantilly.",
      price: "$6.900",
      price2: "",
      srcImage: pathImageTragos + "/orgasmo.jpg",
    },
    {
      name: "SEX ON THE BEACH",
      description: "Stoli Original, Curaçao, Jugo de maracuyá, Granadina.",
      price: "$6.500",
      price2: "",
      srcImage: pathImageTragos + "/sexOnTheBeach.jpg",
    },
    {
      name: "FRUIT PASSION",
      description: "Whisky, Leche condensada, Frambuesa.",
      price: "$7.000",
      price2: "",
      srcImage: pathImageTragos + "/fruitPassion.jpg",
    },
  ],
};
const menuJSONPromociones = {
  items: [
    {
      name: "CHURRASCO",
      description: "Churrasco + papas fritas.",
      price: "$5.500",
      price2: "",
      srcImage: pathImagePromociones + "",
    },
    {
      name: "CHURRASCO ITALIANO",
      description: "Churrasco Italiano + papas fritas.",
      price: "$6.500",
      price2: "",
      srcImage: pathImagePromociones + "",
    },
    {
      name: "BARROS LUCO",
      description: "Barros Luco + papas fritas.",
      price: "$6.500",
      price2: "",
      srcImage: pathImagePromociones + "",
    },
    {
      name: "CHACARERO",
      description: "Chacarero + papas fritas.",
      price: "$5.900",
      price2: "",
      srcImage: pathImagePromociones + "",
    },
    {
      name: "CHORRILLANA MIXTA",
      description: "Chorrillana mixta.",
      price: "$12.900",
      price2: "",
      srcImage: pathImagePromociones + "",
    },
    {
      name: "CHORRILLANA CARNE",
      description: "Chorrillana carne.",
      price: "$14.900",
      price2: "",
      srcImage: pathImagePromociones + "",
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
                                </div>`,
    )
    .join("");
  container.innerHTML = menuHTML;
}

// Llama a la función para mostrar el menú
mostrarMenu(menuJSONPromociones, menuItemsPromociones);
mostrarMenu(menuJSONParaPicotear, menuItemsParaPicotear);
mostrarMenu(menuJSONHamburguesas, menuItemsHamburguesas);
mostrarMenu(menuJSONTagosDeLaCasa, menuItemsTagosDeLaCasa);
mostrarMenu(menuJSONTagosDeLaCasaClasicos, menuItemsTagosDeLaCasaClasicos);
mostrarMenu(
  menuJSONTagosDeLaCasaEroticDrink,
  menuItemsTagosDeLaCasaEroticDrink,
);
mostrarMenu(menuJSONCervezas, menuItemsCervezas);
mostrarMenu(menuJSONEspumantes, menuItemsEspumantes);
mostrarMenu(menuJSONDestiladosCaribe, menuItemsDestiladosCaribe);
mostrarMenu(menuJSONDestiladosSpritz, menuItemsDestiladosSpritz);
mostrarMenu(menuJSONDestiladosPiscos, menuItemsDestiladosPiscos);
mostrarMenu(menuJSONDestiladosRon, menuItemsDestiladosRon);
mostrarMenu(menuJSONDestiladosWhisky, menuItemsDestiladosWhisky);
mostrarMenu(menuJSONDestiladosVodka, menuItemsDestiladosVodka);
mostrarMenu(menuJSONDestiladosLicores, menuItemsDestiladosLicores);
