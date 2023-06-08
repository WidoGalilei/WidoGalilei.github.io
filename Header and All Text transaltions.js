

let scrollpos = window.scrollY
const header = document.querySelector("#fixedHeader")
const header_height = header.offsetHeight


const add_class_on_scroll = (className) => header.classList.add(className)
const remove_class_on_scroll = (className) => header.classList.remove(className)

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

    if (scrollpos >= 70) { 
        add_class_on_scroll("move_top") }
    if (scrollpos >= 500) { 
        add_class_on_scroll("fade_in") }
    if (scrollpos < 70 && header.classList.contains('fade_in') === false) { 
        remove_class_on_scroll("fade_in")
        remove_class_on_scroll("move_top") 
    }
    if (scrollpos <= 1) { 
        remove_class_on_scroll("fade_in")
        remove_class_on_scroll("move_top") 
    }
})

    // Contact information toggle

        const contactInfo = document.querySelector('#showContact')
        const phone_butt = document.querySelector("#buttonPhonelink")

        function toggleContactInfo() {

            contactInfo.classList.toggle('contactDropDown')
            contactInfo.classList.toggle('contactDropDownHide')

        }

        phone_butt.addEventListener('click', toggleContactInfo)


    // Change lenguage of content and buttons


        const rooms = document.querySelector('#rooms')
        // const galeria = document.querySelector('#galeria')
        const food = document.querySelector('#food')
        // const live = document.querySelector('#live')
        const booking = document.querySelector('#booking')

        const APh2 = document.querySelector('#AppRuralH2')
        const text1 = document.querySelector('#text1')
        const text2 = document.querySelector('#text2')
        const text3 = document.querySelector('#text3')


        const concertH3 = document.querySelector('#ConcertH3')
        const concertText = document.querySelector('#concertText')

        const artH3 = document.querySelector('#artH3')
        const artText = document.querySelector('#artText')

        const mapH3 = document.querySelector('#mapH3')
        const mapText = document.querySelector('#mapText')

        const resButton = document.querySelector('#resButton')

        const Time_Recepcion_header = document.querySelector('#Time_Recepcion_header')

        const Time_Reception_Monday = document.querySelector('#Time_Reception_Monday')
        const Time_Reception_Tuesday = document.querySelector('#Time_Reception_Tuesday')
        const Time_Reception_Wednesday = document.querySelector('#Time_Reception_Wednesday')
        const Time_Reception_Thursday = document.querySelector('#Time_Reception_Thursday')
        const Time_Reception_Frieday = document.querySelector('#Time_Reception_Frieday')
        const Time_Reception_Saturday = document.querySelector('#Time_Reception_Saturday')
        const Time_Reception_Sunday = document.querySelector('#Time_Reception_Sunday')


        const Time_Restaurant_header = document.querySelector('#Time_Restaurant_header')

        const Time_Restaurant_Monday = document.querySelector('#Time_Restaurant_Monday')
        const Time_Restaurant_Tuesday = document.querySelector('#Time_Restaurant_Tuesday')
        const Time_Restaurant_Wednesday = document.querySelector('#Time_Restaurant_Wednesday')
        const Time_Restaurant_Thursday = document.querySelector('#Time_Restaurant_Thursday')
        const Time_Restaurant_Frieday = document.querySelector('#Time_Restaurant_Frieday')
        const Time_Restaurant_Saturday = document.querySelector('#Time_Restaurant_Saturday')
        const Time_Restaurant_Sunday = document.querySelector('#Time_Restaurant_Sunday')


        const followUs = document.querySelector('#followUs')
        const ContactFooterLink = document.querySelector('#ContactFooterLink')


        // Default is in Spanish

            // Hamburger/ Menu

            rooms.textContent = "Apartmentos"
            // galeria.textContent = 'Galeria'
            food.textContent = 'Restaurante Y Bar'
            // live.textContent = 'Conciertos y Eventos'
            booking.textContent = 'Reservar Ahora'

            resButton.textContent = 'Reservar Ahora'

            // Introduction Section

                APh2.textContent = 'Apartamento Rural';
                text1.textContent = 'Ofrecemos 3 apartamenos retirados para disfrutar tranquilidad y armonia.';
                text2.textContent = 'Todos los appartamentos son ensuit con cocina y sala de estar propia. Disponemos de piscina excusiva para clientes, restaurante, un muy amplio Parking. Se aceptan mascotas.'
                text3.textContent = '{"was auch immer ihr hier noch als beschreibung haben möchtet"}'
            // Concert Section

                concertH3.textContent = 'Nuestros conciertos';
                concertText.textContent = '{"hier kommt noch eine konzert text/beschreibung"}';

            // Art Section

                artH3.textContent = 'Exposición de obras de arte';
                artText.textContent = '{"hier kommt noch ein text über den künstler und die galeria"}';

            // MiniMap Section
                
                mapH3.textContent = 'Como encontrarnos';
                mapText.textContent = 'Nos encontramos tan solo 3 minutos de Mojacar Pueblo (dirección Turre) y tan solo 6 minutos de Mojacar Playa'

            // Reservation Button

                resButton.textContent = 'Reserva Ahora';
                followUs.textContent = 'Siguenos en:';      
                ContactFooterLink.textContent = 'Contacta con nosotros';

                Time_Recepcion_header.textContent = 'Horarios de Recepción';
                Time_Reception_Monday.textContent = 'Lunes';
                Time_Reception_Tuesday.textContent = 'Martes';
                Time_Reception_Wednesday.textContent = 'Miercoles';
                Time_Reception_Thursday.textContent = 'Jueves';
                Time_Reception_Frieday.textContent = 'Viernes';
                Time_Reception_Saturday.textContent = 'Sabado';
                Time_Reception_Sunday.textContent = 'Domingo';
        
                Time_Restaurant_header.textContent = 'Horarios de Restaurante';
                Time_Restaurant_Monday.textContent = 'Lunes';
                Time_Restaurant_Tuesday.textContent = 'Martes';
                Time_Restaurant_Wednesday.textContent = 'Miercoles';
                Time_Restaurant_Thursday.textContent = 'Jueves';
                Time_Restaurant_Frieday.textContent = 'Viernes';
                Time_Restaurant_Saturday.textContent = 'Sabado';
                Time_Restaurant_Sunday.textContent = 'Domingo';


        
        // Depending on the hash lenaguage will be changed


        const selectedLenguage = window.location.hash
      

        if (selectedLenguage) {

            // English

                if (selectedLenguage === '#EN') {
                    
                    document.querySelector('#EN').selected = true


                // Hamburger/ Menu

                    rooms.textContent = "Apartments"
                    // galeria.textContent = 'Gallery'
                    food.textContent = 'Restaurant and Bar'
                    // live.textContent = 'Concerts and Events'
                    booking.textContent = 'Book Now'
                

                // Introduction Section

                    APh2.textContent = '';
                    text1.textContent = '';
                    text2.textContent = '';

                // Concert Section

                    concertH3.textContent = '';
                    concertText.textContent = '';

                // Art Section

                    artH3.textContent = '';
                    artText.textContent = '';

                // MiniMap Section
                    
                    mapH3.textContent = 'How to find us';
                    mapText.textContent = 'We are only 3 minutes from Mojacar Town (direction Turre) and only 6 minutes away from Mojacar Beach'

                // Reservation Button

                    resButton.textContent = 'Book Now';
                    ContactFooterLink.textContent = 'Contact Us';
                    followUs.textContent = 'Follow us on:';

                    Time_Recepcion_header.textContent = 'Reception opening hours';
                    Time_Restaurant_header.textContent = 'Restaurant opening hours';

                    Time_Reception_Monday.textContent = 'Monday';
                    Time_Reception_Tuesday.textContent = 'Tuesday';
                    Time_Reception_Wednesday.textContent = 'Wednesday';
                    Time_Reception_Thursday.textContent = 'Thursday';
                    Time_Reception_Frieday.textContent = 'Frieday';
                    Time_Reception_Saturday.textContent = 'Saturday';
                    Time_Reception_Sunday.textContent = 'Sunday';
            
            
                    Time_Restaurant_Monday.textContent = 'Monday';
                    Time_Restaurant_Tuesday.textContent = 'Tuesday';
                    Time_Restaurant_Wednesday.textContent = 'Wednesday';
                    Time_Restaurant_Thursday.textContent = 'Thursday';
                    Time_Restaurant_Frieday.textContent = 'Frieday';
                    Time_Restaurant_Saturday.textContent = 'Saturday';
                    Time_Restaurant_Sunday.textContent = 'Sunday';



                } 
                
            // German 
                
                
                else if (selectedLenguage === '#DE') {

                    document.querySelector('#DE').selected = true


                // Hamburger/ Menu

                    rooms.textContent = "Appartements"
                    // galeria.textContent = 'Galerie'
                    food.textContent = 'Restaurant und Bar'
                    // live.textContent = 'Konzerte und Veranstaltungen'
                    booking.textContent = 'Jetzt Reservieren'
                

                // Introduction Section

                    APh2.textContent = '';
                    text1.textContent = '';
                    text2.textContent = '';

                // Concert Section

                    concertH3.textContent = '';
                    concertText.textContent = '';

                // Art Section

                    artH3.textContent = '';
                    artText.textContent = '';

                // MiniMap Section
                    
                    mapH3.textContent = 'So finden Sie uns';
                    mapText.textContent = 'Wir sind 3 Minuten von Mojacar Dorf entfernt (Richtung Turre) und nur 6 Minuten von Mojacar Strand'

                // Reservation Button

                    resButton.textContent = 'Jetzt Reservieren'
                    ContactFooterLink.textContent = 'Kontaktieren Sie Uns';
                    followUs.textContent = 'Folgen Sie uns auf:';

                    Time_Recepcion_header.textContent = 'Öffnungszeiten der Rezeption';
                    Time_Restaurant_header.textContent = 'Öffnungszeiten des Restaurants';

                    Time_Reception_Monday.textContent = 'Montag';
                    Time_Reception_Tuesday.textContent = 'Dienstag';
                    Time_Reception_Wednesday.textContent = 'Mittwoch';
                    Time_Reception_Thursday.textContent = 'Donnerstag';
                    Time_Reception_Frieday.textContent = 'Freitag';
                    Time_Reception_Saturday.textContent = 'Samstag';
                    Time_Reception_Sunday.textContent = 'Sonntag';
            
            
                    Time_Restaurant_Monday.textContent = 'Montag';
                    Time_Restaurant_Tuesday.textContent = 'Dienstag';
                    Time_Restaurant_Wednesday.textContent = 'Mittwoch';
                    Time_Restaurant_Thursday.textContent = 'Donnerstag';
                    Time_Restaurant_Frieday.textContent = 'Freitag';
                    Time_Restaurant_Saturday.textContent = 'Samstag';
                    Time_Restaurant_Sunday.textContent = 'Sonntag';
    
                } 
                
            // French
                
                
                else if (selectedLenguage === '#FR') {

                    document.querySelector('#FR').selected = true


                // Hamburger/ Menu

                    rooms.textContent = "Appartements"
                    // galeria.textContent = 'Galerie'
                    food.textContent = 'Restaurant et Bar'
                    // live.textContent = 'Concerts et événements'
                    booking.textContent = 'Réserve Maintenant'
                

                // Introduction Section

                    APh2.textContent = '';
                    text1.textContent = '';
                    text2.textContent = '';

                // Concert Section

                    concertH3.textContent = '';
                    concertText.textContent = '';

                // Art Section

                    artH3.textContent = '';
                    artText.textContent = '';

                // MiniMap Section
                    
                    mapH3.textContent = 'Comment nous trouver';
                    mapText.textContent = 'Nous sommes à 3 minutes du village de Mojacar (direction Turre) et à seulement 6 minutes de la plage de Mojacar'

                // Reservation Button

                    resButton.textContent = 'Réserve Maintenant';
                    ContactFooterLink.textContent = 'Contactez-nous';
                    followUs.textContent = 'Suivez-nous sur:';

                    Time_Recepcion_header.textContent = "Heures d'ouverture de la réception";
                    Time_Restaurant_header.textContent = "Horaires d'ouverture des restaurants";

                    Time_Reception_Monday.textContent = 'Lundi';
                    Time_Reception_Tuesday.textContent = 'Mardi ';
                    Time_Reception_Wednesday.textContent = 'Mercredi ';
                    Time_Reception_Thursday.textContent = 'Jeudi ';
                    Time_Reception_Frieday.textContent = 'Vendredi ';
                    Time_Reception_Saturday.textContent = 'Samedi ';
                    Time_Reception_Sunday.textContent = '';
            
            
                    Time_Restaurant_Monday.textContent = 'Lundi';
                    Time_Restaurant_Tuesday.textContent = 'Mardi ';
                    Time_Restaurant_Wednesday.textContent = 'Mercredi ';
                    Time_Restaurant_Thursday.textContent = 'Jeudi ';
                    Time_Restaurant_Frieday.textContent = 'Vendredi ';
                    Time_Restaurant_Saturday.textContent = 'Samedi ';
                    Time_Restaurant_Sunday.textContent = 'Dimanche ';
    
                }
            }
        


            rooms.addEventListener('click', function(e) {
            
                window.location="./Appartments.html" + window.location.hash
            });

            

            food.addEventListener('click', function(e) {
            
                window.location="./food.html" + window.location.hash
            });
