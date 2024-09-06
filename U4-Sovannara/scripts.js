function openFacebookLink(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    // Setting up event listeners for the contact action buttons
    const contactActionContainer = document.getElementById('contact-actions');

    if (document.getElementById('contact-action')) {
        document.getElementById('contact-action').addEventListener('click', () => {
            contactActionContainer.style.display = 'flex'; // Show options
        });

        document.getElementById('contact-action').addEventListener('dblclick', () => {
            contactActionContainer.style.display = 'none'; // Hide options on double-click
        });
    }

    if (document.getElementById('call')) {
        document.getElementById('call').addEventListener('click', () => {
            makeCall();
            contactActionContainer.style.display = 'none'; // Hide options after selection
        });
    }

    if (document.getElementById('save-contact')) {
        document.getElementById('save-contact').addEventListener('click', () => {
            saveContact();
            contactActionContainer.style.display = 'none'; // Hide options after selection
        });
    }

    // Dark Mode Toggle
    if (document.getElementById('toggle-dark-mode')) {
        document.getElementById('toggle-dark-mode').addEventListener('change', (event) => {
            if (event.target.checked) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        });
    }

    // Function Flip Over QR
    const qrIcon = document.getElementById('qr-icon');
    const backToMain = document.getElementById('back-to-main');
    const body = document.body;

    qrIcon.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.add('flip');
        setTimeout(() => {
            document.getElementById('main-card').style.display = 'none';
            document.getElementById('qr-card').style.display = 'block';
        }, 600); // Match the duration of the CSS transition
    });

    backToMain.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.remove('flip');
        setTimeout(() => {
            document.getElementById('qr-card').style.display = 'none';
            document.getElementById('main-card').style.display = 'block';
        }, 600); // Match the duration of the CSS transition
    });

    // Code for adding floating background icons
    const backgroundContainers = document.querySelectorAll('.background-icons');
    const iconPaths = [
        '../background/icon1.png',
        '../background/icon2.png',
        '../background/icon3.png',
        '../background/icon4.png',
        '../background/icon5.png',
        '../background/icon6.png',
        '../background/icon7.png',
        '../background/icon8.png',
        '../background/icon9.png',
        '../background/icon10.png',
        '../background/icon11.png',
        '../background/icon12.png',
        '../background/icon13.png',
        '../background/icon14.png',
        '../background/icon15.png',
        '../background/icon16.png'
    ];

    const numberOfIcons = 25;

    function createIcons(container) {
        for (let i = 0; i < numberOfIcons; i++) {
            const img = document.createElement('img');
            img.src = iconPaths[Math.floor(Math.random() * iconPaths.length)];
            img.style.position = 'absolute';
            img.style.top = Math.random() * 100 + '%';
            img.style.left = Math.random() * 100 + '%';
            img.style.width = Math.random() * 35 + 15 + 'px';
            img.style.height = 'auto';
            img.classList.add('animated-icon');
            container.appendChild(img);
        }
    }

    backgroundContainers.forEach(container => createIcons(container));

    // Profile image slider
    const profileSlider = document.getElementById('profile-slider');

    const imageFiles = [
        '../img/u2/profile1.jpg',
        '../img/u2/profile2.jpg',
        '../img/u2/profile3.jpg',
        '../img/u2/profile4.jpg',
        '../img/u2/profile5.jpg'
    ];

    function checkImageExists(url, callback) {
        const img = new Image();
        img.onload = () => callback(true);
        img.onerror = () => callback(false);
        img.src = url;
    }

    imageFiles.forEach(src => {
        checkImageExists(src, function(exists) {
            if (exists) {
                const slide = document.createElement('div');
                slide.classList.add('profile-slide');
                const img = document.createElement('img');
                img.src = src;
                slide.appendChild(img);
                profileSlider.appendChild(slide);
            }
        });
    });

    let currentSlide = 0;
    let slides = [];

    function updateSlides() {
        slides = document.querySelectorAll('.profile-slide');
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    let slideInterval = setInterval(() => {
        updateSlides();
        if (slides.length > 0) {
            nextSlide();
        }
    }, 5000); // Auto slide every 5 seconds

    // Manual slide buttons
    document.getElementById('slide-left').addEventListener('click', () => {
        clearInterval(slideInterval);
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        slideInterval = setInterval(() => {
            updateSlides();
            if (slides.length > 0) {
                nextSlide();
            }
        }, 5000); // Restart auto-slide
    });

    document.getElementById('slide-right').addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(() => {
            updateSlides();
            if (slides.length > 0) {
                nextSlide();
            }
        }, 5000); // Restart auto-slide
    });
});

// Functions for saving contact and making a call
function saveContact() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Mom SEAN Mr.
ORG:General Department of Taxation
TITLE:Network Engineer
EMAIL:seanmom@tax.gov.kh
TEL;TYPE=Smart,VOICE:+855963027019
URL:https://www.tax.gov.kh/en
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    window.URL.revokeObjectURL(url);
}

function makeCall() {
    window.location.href = "tel:+855963027019";
}
