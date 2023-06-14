// Acordeon toggler

    const cards = document.querySelectorAll('.card_container')

    cards.forEach(card => {
        card.addEventListener('click',(e) => {
        
                    cards.forEach(element => {
                        element.classList = 'card_container hidde_picture'
                    });
                
                    e.target.classList.toggle('show_picture') 
                    e.target.classList.toggle('hidde_picture') 

                })
        });



        // Custom media @media to move show inner picture in acordeon to the left so it stay centered when responsive

            window.addEventListener('resize',() => {
                let width = screen.width;
                let height = screen.height;
                const show_picture = document.querySelector('.show_picture img')


                if (width >= 769 && width <= 1220 && height >=300 && height <= 570) {

                    show_picture.style.position= "relative";

                    const move_pic_left = ((width - 1200)/2)/10 + ((700 - height)/2)/10

                    if (move_pic_left < 0) {

                        show_picture.style.left= `${move_pic_left}%`
                        
                    } 
                    } else {
                        show_picture.style.left= "0"
                    }
            })


    // Wellcome spin and change letters-leanguage

        let greetingCounter = 0;
        let font_num = 0;


        const greetingsList = ['Bienvenidos', 'Herzlich willkommen', 'Bienvenue','Ben arrivato', 'Bem-vindo', 'Välkommen', 'Vítejte' ]

        const myFonts = ['Covered By Your Grace','Bruno Ace SC', 'Mogra','Gloria Hallelujah','Permanent Marker','Rock Salt', 'Rubik Puddles','Homemade Apple' ]

        function Lang_Font(){

            const wellcomeLetterConatiner = document.querySelector('#WellcomeLetters');

            wellcomeLetterConatiner.style.fontFamily = myFonts[font_num];
            
            wellcomeLetterConatiner.textContent = greetingsList[greetingCounter];


            if (greetingCounter < greetingsList.length -1){
                greetingCounter++;
            } else {
                greetingCounter = 0;
            }

            if (font_num > myFonts.length - 1) {
                font_num = 0;
            } else {
                font_num++
            }
        }

                
            // set a timer of 10 sec 
            setInterval(Lang_Font, 10000)

            // run it once at page opening
                Lang_Font()



    //Horizontal animation of pictures

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('horizontalAnimation')}, 1000)
                }


                // else {
                //     entry.target.classList.remove('horizontalAnimation')
                // }

            })
        })

        const concertPictures = document.querySelectorAll('.liveMusicPics');
        concertPictures.forEach((pic) => observer.observe(pic));






// Hide reservation Button when drop down menu is shown
    
    const menuCheckBox = document.querySelector('#menu-toggle')
    
    menuCheckBox.addEventListener('click', () =>{
        if (resButton.style.display === 'none'){
            resButton.style.display = 'flex'
                } else {
            resButton.style.display = 'none'
        }
    })



    // Switch art text and picture from position


    function swapElements(el1, el2) {
        let prev1 = el1.previousSibling;
        let prev2 = el2.previousSibling;
    
        prev1.after(el2);
        prev2.after(el1);
    }

    const art_text = document.querySelector('#art_text-container');
    const art_img = document.querySelector('#paintingsPicture');

    let media_q_width_769px = window.matchMedia("(min-width: 769px)");
    let media_q_height_600px = window.matchMedia("(min-height: 600px)");

    let big_screnn = false;


    function check_width() {
        if (media_q_width_769px.matches && media_q_height_600px.matches) { 
            swapElements(art_text, art_img)
            big_screnn = true
        } else {
            if (big_screnn) {
                swapElements(art_text, art_img);
                big_screnn = false;
            }
        }
      }
      
        media_q_width_769px.addEventListener("change", check_width) 

        check_width()
