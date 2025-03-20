let maincont = document.createElement("div")
maincont.innerHTML =`
<div class="header">
            <p class="htitle">Don Mateo's</p>
            <div class="navbar">
                <div class="revervabutton">
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62 10.79a15.091 15.091 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 10.05 10.05 0 003.15.5 1 1 0 011 1v3.38a1 1 0 01-1 1A19.91 19.91 0 012 4a1 1 0 011-1h3.38a1 1 0 011 1 10.05 10.05 0 00.5 3.15 1 1 0 01-.24 1.02l-2.02 2.62z"/>
                    </svg>
                    Reservar
                </div>
                <svg class="log-insta"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" fill="white"></path>
                </svg>
            </div>
        </div>

        <div class="main">
            <div class="content">
                <div class="text">
                    <p class="text1">Tradición y locura</p>
                    <p class="text2">Bienvenidos al mundo de la pizza moderna.</p>
                </div>
                
            </div>
            <div class="side">
                <p class="title">Don Mateo's</p>
                <ul>
                    <li style="color: rgb(170, 138, 57) ">Inicio</li>
                    <li>Carta</li>
                    <li>Menús especiales</li>
                    <li>Galería</li>
                    <li>Trabaja con nosotros</li>
                    <li>Conocenos</li>
                </ul>
            </div>
        </div>

        <div class="galeria">
            <div class="descripcion">
                <div class="descripcion1">
                    <p class="title">I nostri ristoranti</p>
                    <img src="https://gondoliere.com/wp-content/uploads/2024/02/object.png" alt="">
                    <h3>Tradición y vanguardia</h3>
                    <p class="descripcion-texto">Andalucía- Italia, vía Don Mateo. El grupo gastronómico ofrece en la ciudad desde hace más de dos décadas el auténtico sabor de la cocina italiana. tres restaurantes, distintos ambientes, pero idéntica esencia: el maridaje de tradición y vanguardia.
                    </p>
                    <p class="descripcion-texto">El profundo respeto al producto de calidad y la elaboración propia al más puro estilo italiano son los ingredientes básicos de Don Mateo, que apuesta por cocinar experiencias en la que intervengan todos los sentidos. Por eso, cuida cada detalle de la atención al cliente y crea estilo en decoración e interiorismo</p>
                </div>
                <div class="descripcion11">
                    <img src="https://media.istockphoto.com/id/638790274/es/foto/pizza-de-margerita-sabrosa-al-horno.jpg?s=612x612&w=0&k=20&c=nXd46AyeCxglSYqvwXoNxjCYYsJnYz74K50l6XuON3E=" alt="">
                </div>
            </div>
            <div class="fotos">
                <div class="fotos1">
                    <p class="fotos-titulo" >Galería</p>
                    <img src="https://gondoliere.com/wp-content/uploads/2024/02/object.png" alt="">
                    <p class="title">Un vistazo a nuestros sabores y ambiente</p>
                </div>
                <div class="fotos2">
                    <img src="https://media.istockphoto.com/id/638790274/es/foto/pizza-de-margerita-sabrosa-al-horno.jpg?s=612x612&w=0&k=20&c=nXd46AyeCxglSYqvwXoNxjCYYsJnYz74K50l6XuON3E=" alt="">
                </div>
            </div>
        </div>

        <div class="contact">
            <div class="contactwrapper">
                <div class="contact1">
                    <h1>Contacto</h1>
                    <form action="">
                        <div>
                            <label for="">Nombre*</label>
                            <input type="text">

                            <label for="">Apellido*</label>
                            <input type="text">

                        </div>
                        <label for="">Correo electronico*</label>
                        <input type="text">

                        <label for="">Mensaje</label>
                        <textarea id="description" name="description" rows="4" cols="50" placeholder="Escribe aquí..."></textarea>
    
                        <button>Enviar       →
                        </button>
                    </form>
                    <p>
                        Llámenos para realizar sus consultas y reservas. <br>
                        Para cualquier sugerencia utilice el formulario de contacto.
                    </p>
                    
               </div>
               <div class="contact2">
                    <div class="mapa">
                    </div>

                    <ul>
                        <li class="cont title smallfont">TELÉFONOS RESERVAS:</li>
                        <li class="cont"> Martinez Campos         999 99 99 99</li>
                        <li class="cont">Perico Rodríguez      999 99 99 99</li>
                        <li class="cont">Julian Manuel       999 99 99 99</li>
                        <li class="cont title smallfont">HORARIO DE APERTURA:</li>
                        <li class="cont">Mañana de lunes a jueves:               12:00 – 16:00</li>
                        <li class="cont">Mañana de viernes a domingo:       12:00 – 16:30</li>
                        <li class="cont">Tarde de lunes a jueves y dom:       20:00 – 00:00</li>
                        <li class="cont">Tarde viernes y sábados:                   20:00 – 00:30</li>


                    </ul>
                    
                    
               </div>
            </div>
           
            
        </div>

`;
export default maincont;