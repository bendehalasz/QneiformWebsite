//SCROLLING LIST

// Y axis scroll speed
var velocity = 2;

function update() {
    var pos = window.scrollY;

    document.querySelectorAll('.container').forEach(function(element) {
        // Subtract some from the height because of the padding
        var height = element.clientHeight - 18;
        element.style.backgroundPosition = '50% ' + Math.round((height - pos) * velocity) + 'px';
    });
}

window.addEventListener('scroll', update);


//REVEAL ANIMATION


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => 
    {
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show')
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//SCROLL ANIMATION

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 50; // Adjust this value as needed
                scrollToTarget(offsetTop);
            }
        });
    });

    function scrollToTarget(targetPosition) {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1500; // Adjust this value for the scroll duration
        let startTime;

        function animateScroll(currentTime) {
            if (!startTime) {
                startTime = currentTime;
            }

            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeInOutCubic = progress < 0.5
                ? 4 * progress ** 3
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, startPosition + distance * easeInOutCubic);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }
});


//BLUR ANIMATION

const splittedImg = document.getElementById('splitted_img');
const recruitsButton = document.getElementById('recruits');
const firmsButton = document.getElementById('firms');

const recruitsText = document.getElementById('text-recruits');
const firmsText = document.getElementById('text-firms');

        function setForRecruits() {
            if (!splittedImg.classList.contains('recruits')) {
                splittedImg.classList.add('recruits', 'blurred');
                splittedImg.classList.remove('firms');
                setTimeout(() => {
                    splittedImg.classList.remove('blurred');
                }, 300);

                recruitsButton.classList.add('active');
                firmsButton.classList.remove('active');

                recruitsText.classList.remove('hide-text');
                firmsText.classList.add('hide-text');

                


            }
        }

        function setForHiringFirms() {
            if (!splittedImg.classList.contains('firms')) {
                splittedImg.classList.add('firms', 'blurred');
                splittedImg.classList.remove('recruits');
                setTimeout(() => {
                    splittedImg.classList.remove('blurred');
                }, 300);

                firmsButton.classList.add('active');
                recruitsButton.classList.remove('active');

                recruitsText.classList.add('hide-text');
                firmsText.classList.remove('hide-text');


            }
        }