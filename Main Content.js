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
    

// Text and information

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



    //Horizontal animation off concert pictures

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('horizontalAnimation')}, 400)
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

    const art_text = document.querySelector('#art_text-container')

    const art_img = document.querySelector('#paintingsPicture')

    function check_width(media_q_769) {
        if (media_q_769.matches) { 
            swapElements(art_text, art_img)
        } else {
            swapElements(art_img,art_text)
        }
      }
      
      var media_q_769 = window.matchMedia("(min-width: 769px)")

      if (media_q_769.matches) {
        check_width(media_q_769)
      }
      media_q_769.addEventListener("change", check_width) 

