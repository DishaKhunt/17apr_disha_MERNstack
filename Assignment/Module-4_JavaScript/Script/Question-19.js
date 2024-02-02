let slides = document.querySelectorAll('.box');
        let currentSlide = 0;
        const slideCount = slides.length;
        //next-previous button
        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        
        function showSlide(n) {
            slides[currentSlide].classList.remove('active');
            currentSlide = (n + slideCount) % slideCount;
            slides[currentSlide].classList.add('active');


            // blure slide
            const offset = -((currentSlide - 2) * (33));
            document.querySelector('.slider').style.transform = `translateX(${offset}%)`;

       
            for (let i = 0; i < slides.length; i++) {
                if (i !== currentSlide) {
                    slides[i].style.filter = 'blur(2px)';
                } else {
                    slides[i].style.filter = 'none';
                }
            }
        }
       
        setInterval(nextSlide, 4000);
