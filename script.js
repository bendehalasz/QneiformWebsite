//SCROLLING LIST

// Y axis scroll speed
var velocity = 2;

function update() {
    var pos = window.scrollY;

    document.querySelectorAll('.scrollable-container').forEach(function(element) {
        // Subtract some from the height because of the padding
        var height = element.clientHeight - 18;
        element.style.backgroundPosition = '50% ' + Math.round((height - pos) * velocity) + 'px';
    });
}

window.addEventListener('scroll', update);


//SCROLL HIGHLIGHT

document.addEventListener('DOMContentLoaded', function () {

    function highlightNavbarLink() {
        const sections = document.querySelectorAll('section');
        let currentSectionId = '';

        sections.forEach(section => {
            const offset = section.offsetTop;
            const height = section.offsetHeight;

            if (window.scrollY >= offset - 120 && window.scrollY < offset + height) {
                currentSectionId = section.id;
            }
        });

        document.querySelectorAll('#menu-desktop li a').forEach(menuItem => {
            menuItem.classList.remove('active');
        });

        document.querySelectorAll('#menu-mobile li a').forEach(menuItem => {
            menuItem.classList.remove('active');
        });

        document.querySelector(`#menu-desktop li a[href="#${currentSectionId}"]`).classList.add('active');

        document.querySelector(`#menu-mobile li a[href="#${currentSectionId}"]`).classList.add('active');
    
    }


    highlightNavbarLink();

    window.addEventListener('scroll', highlightNavbarLink);

});


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
        const duration = 1000; // Adjust this value for the scroll duration
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

//const splittedImg = document.getElementById('splitted_img');
//const recruitsButton = document.getElementById('recruits');
//const firmsButton = document.getElementById('firms');

const recruitsText = document.getElementById('recruiters-side');
const firmsText = document.getElementById('firms-side');

        
        
        function setForRecruits() {
            if (!firmsText.classList.contains('blur')) {
                firmsText.classList.add('blur');
                recruitsText.classList.remove('blur');
  

            }
        }

        function setForHiringFirms() {
            if (!recruitsText.classList.contains('blur')) {
                firmsText.classList.remove('blur');
                recruitsText.classList.add('blur');
  

            }
        }

// TOGGLE SWITCH

function toggleSwitchChanged() {
    var toggleSwitch = document.getElementById("toggleSwitch");
    if (toggleSwitch.checked) {
      // Method to execute when the switch is ON
      console.log("Switch is ON");
      methodWhenSwitchIsOn();
    } else {
      // Method to execute when the switch is OFF
      console.log("Switch is OFF");
      methodWhenSwitchIsOff();
    }
  }

  function methodWhenSwitchIsOn() {

    const toggle_switch = document.getElementById("toggle-switch")
    toggle_switch.style.backgroundColor = "#0071F5";

    //const tilted_line = document.getElementById("tilted_line")
    //tilted_line.classList.add("tilted")

    // Implement your logic when the switch is ON
    setForHiringFirms();
  }

  function methodWhenSwitchIsOff() {

    const toggle_switch = document.getElementById("toggle-switch")
    toggle_switch.style.backgroundColor = "#004AA0";

    //const tilted_line = document.getElementById("tilted_line")
    //tilted_line.classList.remove("tilted")
    // Implement your logic when the switch is OFF
    setForRecruits();
  }


//FAVICON LIGHT DARK MODE

matcher = window.matchMedia('(prefers-color-scheme: dark)');
matcher.addListener(onUpdate);
onUpdate();

lightSchemeIcon = document.querySelector('link #light-scheme-icon');
darkSchemeIcon = document.querySelector('link #dark-scheme-icon');

function onUpdate() {
  if (matcher.matches) {
    lightSchemeIcon.remove();
    document.head.append(darkSchemeIcon);
  } else {
    document.head.append(lightSchemeIcon);
    darkSchemeIcon.remove();
  }
}
