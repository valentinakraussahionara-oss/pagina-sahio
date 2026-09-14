document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       PRODUCTOS
    ========================================= */

    const productos = [

        {
            id: 1,
            nombre: "Auriculares Bluetooth",
            categoria: "Tecnología",
            descripcion: "Sonido inalámbrico de alta calidad.",
            precio: 25000,
            imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 2,
            nombre: "Smartwatch Pro",
            categoria: "Tecnología",
            descripcion: "Reloj inteligente para tu día a día.",
            precio: 45000,
            imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 3,
            nombre: "Teclado Mecánico",
            categoria: "Tecnología",
            descripcion: "Teclado mecánico para gaming.",
            precio: 55000,
            imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 4,
            nombre: "Mouse Gamer",
            categoria: "Tecnología",
            descripcion: "Mouse de alta precisión.",
            precio: 30000,
            imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 5,
            nombre: "Parlante Bluetooth",
            categoria: "Tecnología",
            descripcion: "Sonido potente y batería duradera.",
            precio: 38000,
            imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 6,
            nombre: "Cámara Digital",
            categoria: "Tecnología",
            descripcion: "Capturá tus mejores momentos.",
            precio: 120000,
            imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 7,
            nombre: "Tablet",
            categoria: "Tecnología",
            descripcion: "Ideal para estudiar y entretenerte.",
            precio: 180000,
            imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 8,
            nombre: "Notebook",
            categoria: "Tecnología",
            descripcion: "Potente computadora portátil.",
            precio: 450000,
            imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 9,
            nombre: "Mochila Urbana",
            categoria: "Accesorios",
            descripcion: "Resistente y cómoda.",
            precio: 35000,
            imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 10,
            nombre: "Gorra Clásica",
            categoria: "Accesorios",
            descripcion: "Diseño clásico y cómodo.",
            precio: 12000,
            imagen: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 11,
            nombre: "Gafas de Sol",
            categoria: "Accesorios",
            descripcion: "Diseño moderno.",
            precio: 18000,
            imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 12,
            nombre: "Reloj Clásico",
            categoria: "Accesorios",
            descripcion: "Estilo elegante y minimalista.",
            precio: 50000,
            imagen: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 13,
            nombre: "Botella Térmica",
            categoria: "Hogar",
            descripcion: "Mantiene tus bebidas frías o calientes.",
            precio: 15000,
            imagen: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 14,
            nombre: "Lámpara LED",
            categoria: "Hogar",
            descripcion: "Iluminación moderna.",
            precio: 22000,
            imagen: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 15,
            nombre: "Taza Minimalista",
            categoria: "Hogar",
            descripcion: "Diseño moderno y elegante.",
            precio: 8500,
            imagen: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 16,
            nombre: "Almohadón Decorativo",
            categoria: "Hogar",
            descripcion: "Ideal para decorar tus espacios.",
            precio: 14000,
            imagen: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 17,
            nombre: "Zapatillas Deportivas",
            categoria: "Deportes",
            descripcion: "Comodidad para tus actividades.",
            precio: 60000,
            imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 18,
            nombre: "Pelota de Fútbol",
            categoria: "Deportes",
            descripcion: "Ideal para entrenamientos y partidos.",
            precio: 20000,
            imagen: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 19,
            nombre: "Mancuernas",
            categoria: "Deportes",
            descripcion: "Para entrenamiento en casa.",
            precio: 32000,
            imagen: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80"
        },

        {
            id: 20,
            nombre: "Mochila Deportiva",
            categoria: "Deportes",
            descripcion: "Amplia y resistente.",
            precio: 28000,
            imagen: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80"
        }

    ];



    /* =========================================
       RECUPERAR CARRITO
    ========================================= */

    let carrito = [];

    try {

        carrito =
            JSON.parse(
                localStorage.getItem("novashop_carrito")
            ) || [];

    } catch (error) {

        carrito = [];

        localStorage.removeItem(
            "novashop_carrito"
        );

    }



    /* =========================================
       ELEMENTOS
    ========================================= */

    const listaProductos =
        document.getElementById("lista-productos");

    const contadorCarrito =
        document.getElementById("contador-carrito");

    const carritoPanel =
        document.getElementById("carrito-panel");

    const carritoLista =
        document.getElementById("carrito");

    const overlay =
        document.getElementById("overlay");

    const modalPago =
        document.getElementById("modal-pago");



    /* =========================================
       FORMATO DE PRECIO
    ========================================= */

    function precio(numero) {

        return "$" +
            numero.toLocaleString("es-AR");

    }



    /* =========================================
       MOSTRAR PRODUCTOS
    ========================================= */

    function mostrarProductos(lista = productos) {

        listaProductos.innerHTML = "";

        document.getElementById(
            "cantidad-resultados"
        ).textContent =
            lista.length + " productos";


        if (lista.length === 0) {

            listaProductos.innerHTML = `

                <div style="
                    grid-column:1/-1;
                    text-align:center;
                    padding:50px;
                ">

                    <h3>
                        No se encontraron productos
                    </h3>

                    <p>
                        Probá con otra búsqueda.
                    </p>

                </div>

            `;

            return;

        }


        lista.forEach(producto => {

            const tarjeta =
                document.createElement("article");

            tarjeta.className =
                "producto";


            tarjeta.innerHTML = `

                <div class="producto-imagen">

                    <img
                        src="${producto.imagen}"
                        alt="${producto.nombre}"
                        loading="lazy"
                    >

                    <span class="producto-categoria">
                        ${producto.categoria}
                    </span>

                </div>


                <div class="producto-info">

                    <small>
                        ${producto.categoria}
                    </small>

                    <h3>
                        ${producto.nombre}
                    </h3>

                    <p class="descripcion">
                        ${producto.descripcion}
                    </p>

                    <div class="precio">
                        ${precio(producto.precio)}
                    </div>

                    <button
                        class="btn-agregar"
                        data-id="${producto.id}"
                    >
                        Agregar al carrito
                    </button>

                </div>

            `;


            listaProductos.appendChild(tarjeta);

        });


        document
            .querySelectorAll(".btn-agregar")
            .forEach(boton => {

                boton.addEventListener(
                    "click",
                    function () {

                        const id =
                            Number(
                                this.dataset.id
                            );

                        agregarProducto(id);

                    }
                );

            });

    }



    /* =========================================
       AGREGAR
    ========================================= */

    function agregarProducto(id) {

        const producto =
            productos.find(
                p => p.id === id
            );

        if (!producto) return;


        const existente =
            carrito.find(
                p => p.id === id
            );


        if (existente) {

            existente.cantidad++;

        } else {

            carrito.push({

                id: producto.id,

                nombre: producto.nombre,

                precio: producto.precio,

                cantidad: 1

            });

        }


        guardarCarrito();

        mostrarCarrito();

        mostrarNotificacion(
            "✓ " +
            producto.nombre +
            " agregado al carrito"
        );

    }



    /* =========================================
       MOSTRAR CARRITO
    ========================================= */

    function mostrarCarrito() {

        carritoLista.innerHTML = "";


        if (carrito.length === 0) {

            carritoLista.innerHTML = `

                <div class="carrito-vacio">

                    <div style="font-size:50px;">
                        🛒
                    </div>

                    <h3>
                        Tu carrito está vacío
                    </h3>

                    <p>
                        Agregá productos para comenzar.
                    </p>

                </div>

            `;

            actualizarResumen();

            return;

        }


        carrito.forEach(producto => {

            const item =
                document.createElement("div");

            item.className =
                "item-carrito";


            const subtotal =
                producto.precio *
                producto.cantidad;


            item.innerHTML = `

                <div>

                    <div class="item-nombre">
                        ${producto.nombre}
                    </div>

                    <div class="item-controles">

                        <button
                            class="btn-cantidad"
                            data-accion="menos"
                            data-id="${producto.id}"
                        >
                            −
                        </button>

                        <span class="cantidad">
                            ${producto.cantidad}
                        </span>

                        <button
                            class="btn-cantidad"
                            data-accion="mas"
                            data-id="${producto.id}"
                        >
                            +
                        </button>

                        <button
                            class="btn-eliminar"
                            data-id="${producto.id}"
                        >
                            Eliminar
                        </button>

                    </div>

                </div>


                <div class="item-precio">
                    ${precio(subtotal)}
                </div>

            `;


            carritoLista.appendChild(item);

        });



        document
            .querySelectorAll(".btn-cantidad")
            .forEach(boton => {

                boton.addEventListener(
                    "click",
                    function () {

                        const id =
                            Number(
                                this.dataset.id
                            );


                        if (
                            this.dataset.accion === "mas"
                        ) {

                            aumentar(id);

                        } else {

                            disminuir(id);

                        }

                    }
                );

            });



        document
            .querySelectorAll(".btn-eliminar")
            .forEach(boton => {

                boton.addEventListener(
                    "click",
                    function () {

                        eliminar(
                            Number(
                                this.dataset.id
                            )
                        );

                    }
                );

            });


        actualizarResumen();

    }



    /* =========================================
       AUMENTAR
    ========================================= */

    function aumentar(id) {

        const producto =
            carrito.find(
                p => p.id === id
            );

        if (!producto) return;

        producto.cantidad++;

        guardarCarrito();

        mostrarCarrito();

    }



    /* =========================================
       DISMINUIR
    ========================================= */

    function disminuir(id) {

        const producto =
            carrito.find(
                p => p.id === id
            );

        if (!producto) return;


        producto.cantidad--;


        if (producto.cantidad <= 0) {

            carrito =
                carrito.filter(
                    p => p.id !== id
                );

        }


        guardarCarrito();

        mostrarCarrito();

    }



    /* =========================================
       ELIMINAR
    ========================================= */

    function eliminar(id) {

        carrito =
            carrito.filter(
                p => p.id !== id
            );

        guardarCarrito();

        mostrarCarrito();

    }



    /* =========================================
       LOCAL STORAGE
    ========================================= */

    function guardarCarrito() {

        localStorage.setItem(
            "novashop_carrito",
            JSON.stringify(carrito)
        );

    }



    /* =========================================
       TOTAL
    ========================================= */

    function calcularTotal() {

        return carrito.reduce(
            (total, producto) =>
                total +
                producto.precio *
                producto.cantidad,
            0
        );

    }



    /* =========================================
       UNIDADES
    ========================================= */

    function calcularUnidades() {

        return carrito.reduce(
            (total, producto) =>
                total +
                producto.cantidad,
            0
        );

    }



    /* =========================================
       ACTUALIZAR RESUMEN
    ========================================= */

    function actualizarResumen() {

        const unidades =
            calcularUnidades();

        const total =
            calcularTotal();


        document.getElementById(
            "total-unidades"
        ).textContent = unidades;


        document.getElementById(
            "subtotal"
        ).textContent =
            precio(total);


        document.getElementById(
            "total-precio"
        ).textContent =
            precio(total);


        contadorCarrito.textContent =
            unidades;


        document.getElementById(
            "total-modal"
        ).textContent =
            precio(total);


        actualizarCuotas();

    }



    /* =========================================
       ABRIR CARRITO
    ========================================= */

    document
        .getElementById("abrir-carrito")
        .addEventListener(
            "click",
            function () {

                carritoPanel
                    .classList
                    .add("abierto");

                overlay
                    .classList
                    .add("activo");

            }
        );



    /* =========================================
       CERRAR CARRITO
    ========================================= */

    function cerrarCarrito() {

        carritoPanel
            .classList
            .remove("abierto");

        overlay
            .classList
            .remove("activo");

    }


    document
        .getElementById("cerrar-carrito")
        .addEventListener(
            "click",
            cerrarCarrito
        );


    overlay.addEventListener(
        "click",
        cerrarCarrito
    );



    /* =========================================
       VACIAR
    ========================================= */

    document
        .getElementById("vaciar-carrito")
        .addEventListener(
            "click",
            function () {

                if (
                    carrito.length === 0
                ) return;


                if (
                    confirm(
                        "¿Querés vaciar el carrito?"
                    )
                ) {

                    carrito = [];

                    guardarCarrito();

                    mostrarCarrito();

                }

            }
        );



    /* =========================================
       BUSCADOR
    ========================================= */

    document
        .getElementById("buscador")
        .addEventListener(
            "input",
            function () {

                const texto =
                    this.value
                        .toLowerCase()
                        .trim();


                const categoriaActiva =
                    document
                        .querySelector(
                            ".categoria.activa"
                        )
                        .dataset
                        .categoria;


                const resultados =
                    productos.filter(
                        producto => {

                            const coincideTexto =

                                producto.nombre
                                    .toLowerCase()
                                    .includes(texto)

                                ||

                                producto.descripcion
                                    .toLowerCase()
                                    .includes(texto);


                            const coincideCategoria =

                                categoriaActiva === "Todos"

                                ||

                                producto.categoria ===
                                categoriaActiva;


                            return (
                                coincideTexto &&
                                coincideCategoria
                            );

                        }
                    );


                mostrarProductos(
                    resultados
                );

            }
        );



    /* =========================================
       CATEGORÍAS
    ========================================= */

    document
        .querySelectorAll(".categoria")
        .forEach(boton => {

            boton.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".categoria"
                        )
                        .forEach(b =>
                            b.classList.remove(
                                "activa"
                            )
                        );


                    this.classList.add(
                        "activa"
                    );


                    const categoria =
                        this.dataset.categoria;


                    const texto =
                        document
                            .getElementById(
                                "buscador"
                            )
                            .value
                            .toLowerCase()
                            .trim();


                    const resultados =
                        productos.filter(
                            producto => {

                                const categoriaOK =

                                    categoria === "Todos"

                                    ||

                                    producto.categoria ===
                                    categoria;


                                const textoOK =

                                    producto.nombre
                                        .toLowerCase()
                                        .includes(texto)

                                    ||

                                    producto.descripcion
                                        .toLowerCase()
                                        .includes(texto);


                                return (
                                    categoriaOK &&
                                    textoOK
                                );

                            }
                        );


                    mostrarProductos(
                        resultados
                    );

                }
            );

        });



    /* =========================================
       VER PRODUCTOS
    ========================================= */

    document
        .getElementById("ver-productos")
        .addEventListener(
            "click",
            function () {

                document
                    .getElementById("productos")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );



    /* =========================================
       ABRIR PAGO
    ========================================= */

    document
        .getElementById("ir-pago")
        .addEventListener(
            "click",
            function () {

                if (
                    carrito.length === 0
                ) {

                    alert(
                        "El carrito está vacío."
                    );

                    return;

                }


                modalPago
                    .classList
                    .add("activo");


                actualizarResumen();

            }
        );



    /* =========================================
       CERRAR PAGO
    ========================================= */

    document
        .getElementById("cerrar-pago")
        .addEventListener(
            "click",
            function () {

                modalPago
                    .classList
                    .remove("activo");

            }
        );



    /* =========================================
       MÉTODO DE PAGO
    ========================================= */

    document
        .querySelectorAll(
            'input[name="metodo"]'
        )
        .forEach(radio => {

            radio.addEventListener(
                "change",
                function () {

                    const tarjeta =
                        this.value === "tarjeta";


                    document.getElementById(
                        "datos-tarjeta"
                    ).style.display =
                        tarjeta
                            ? "block"
                            : "none";


                    document.getElementById(
                        "contenedor-cuotas"
                    ).style.display =
                        tarjeta
                            ? "block"
                            : "none";


                    actualizarCuotas();

                }
            );

        });



    /* =========================================
       CUOTAS
    ========================================= */

    document
        .getElementById("cuotas")
        .addEventListener(
            "change",
            actualizarCuotas
        );


    function actualizarCuotas() {

        const metodo =
            document.querySelector(
                'input[name="metodo"]:checked'
            ).value;


        const total =
            calcularTotal();


        const texto =
            document.getElementById(
                "texto-cuota"
            );


        if (
            metodo === "mercadopago"
        ) {

            texto.textContent =
                "Pago mediante Mercado Pago";

            return;

        }


        const cuotas =
            Number(
                document.getElementById(
                    "cuotas"
                ).value
            );


        const valor =
            total / cuotas;


        if (cuotas === 1) {

            texto.textContent =
                "1 cuota de " +
                precio(valor) +
                " - Sin interés";

        } else {

            texto.textContent =
                cuotas +
                " cuotas de " +
                precio(valor);

        }

    }



    /* =========================================
       CONFIRMAR COMPRA
    ========================================= */

    document
        .getElementById("confirmar-pago")
        .addEventListener(
            "click",
            function () {

                if (
                    carrito.length === 0
                ) return;


                const metodo =
                    document.querySelector(
                        'input[name="metodo"]:checked'
                    ).value;


                if (
                    metodo === "tarjeta"
                ) {

                    const titular =
                        document
                            .getElementById(
                                "titular"
                            )
                            .value
                            .trim();


                    const tarjeta =
                        document
                            .getElementById(
                                "numero-tarjeta"
                            )
                            .value
                            .trim();


                    if (
                        !titular ||
                        !tarjeta
                    ) {

                        alert(
                            "Completá los datos de la tarjeta."
                        );

                        return;

                    }

                }


                alert(
                    "¡Compra realizada correctamente!"
                );


                carrito = [];

                guardarCarrito();

                mostrarCarrito();


                modalPago
                    .classList
                    .remove("activo");


                cerrarCarrito();

            }
        );



    /* =========================================
       FORMATO TARJETA
    ========================================= */

    document
        .getElementById("numero-tarjeta")
        .addEventListener(
            "input",
            function () {

                let numero =
                    this.value
                        .replace(/\D/g, "")
                        .substring(0, 16);


                let grupos =
                    numero.match(
                        /.{1,4}/g
                    );


                this.value =
                    grupos
                        ? grupos.join(" ")
                        : "";

            }
        );



    /* =========================================
       NOTIFICACIÓN
    ========================================= */

    function mostrarNotificacion(texto) {

        const notificacion =
            document.getElementById(
                "notificacion"
            );


        notificacion.textContent =
            texto;


        notificacion.classList.add(
            "mostrar"
        );


        setTimeout(
            function () {

                notificacion.classList.remove(
                    "mostrar"
                );

            },
            2000
        );

    }



    /* =========================================
       CARRUSEL PROMOCIONAL
    ========================================= */

    const slides =
        document.querySelectorAll(".slide");

    const indicadores =
        document.querySelectorAll(".indicador");

    const botonAnterior =
        document.getElementById(
            "carrusel-anterior"
        );

    const botonSiguiente =
        document.getElementById(
            "carrusel-siguiente"
        );


    let slideActual = 0;

    let intervaloCarrusel;



    /* MOSTRAR SLIDE */

    function mostrarSlide(numero) {

        if (!slides.length) return;


        slides.forEach(slide => {

            slide.classList.remove(
                "activo"
            );

        });


        indicadores.forEach(indicador => {

            indicador.classList.remove(
                "activo"
            );

        });


        slides[numero].classList.add(
            "activo"
        );


        if (indicadores[numero]) {

            indicadores[numero].classList.add(
                "activo"
            );

        }


        slideActual = numero;

    }



    /* SIGUIENTE */

    function siguienteSlide() {

        let siguiente =
            slideActual + 1;


        if (
            siguiente >= slides.length
        ) {

            siguiente = 0;

        }


        mostrarSlide(
            siguiente
        );

    }



    /* ANTERIOR */

    function anteriorSlide() {

        let anterior =
            slideActual - 1;


        if (anterior < 0) {

            anterior =
                slides.length - 1;

        }


        mostrarSlide(
            anterior
        );

    }



    /* BOTÓN SIGUIENTE */

    if (botonSiguiente) {

        botonSiguiente.addEventListener(
            "click",
            function () {

                siguienteSlide();

                reiniciarCarrusel();

            }
        );

    }



    /* BOTÓN ANTERIOR */

    if (botonAnterior) {

        botonAnterior.addEventListener(
            "click",
            function () {

                anteriorSlide();

                reiniciarCarrusel();

            }
        );

    }



    /* INDICADORES */

    indicadores.forEach(indicador => {

        indicador.addEventListener(
            "click",
            function () {

                const numero =
                    Number(
                        this.dataset.slide
                    );


                mostrarSlide(
                    numero
                );


                reiniciarCarrusel();

            }
        );

    });



    /* CAMBIO AUTOMÁTICO */

    function iniciarCarrusel() {

        intervaloCarrusel =
            setInterval(
                siguienteSlide,
                5000
            );

    }



    /* REINICIAR */

    function reiniciarCarrusel() {

        clearInterval(
            intervaloCarrusel
        );

        iniciarCarrusel();

    }



    /* =========================================
       BOTONES DEL CARRUSEL
    ========================================= */

    document
        .querySelectorAll(".btn-slide")
        .forEach(boton => {

            boton.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.producto
                        );


                    const producto =
                        productos.find(
                            p => p.id === id
                        );


                    if (!producto) return;


                    agregarProducto(id);


                    carritoPanel
                        .classList
                        .add("abierto");


                    overlay
                        .classList
                        .add("activo");

                }
            );

        });



    /* =========================================
       INICIAR CARRUSEL
    ========================================= */

    if (slides.length > 0) {

        mostrarSlide(0);

        iniciarCarrusel();

    }



    /* =========================================
       INICIAR TIENDA
    ========================================= */

    mostrarProductos();

    mostrarCarrito();

});