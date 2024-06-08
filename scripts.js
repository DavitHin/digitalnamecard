document.addEventListener('DOMContentLoaded', function() {
    // Setting up event listeners for the contact action buttons
    const contactActionContainer = document.getElementById('contact-actions');

    if (document.getElementById('contact-action')) {
        document.getElementById('contact-action').addEventListener('click', () => {
            contactActionContainer.style.display = 'flex'; // Show options
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

    if (document.getElementById('cancel-contact')) {
        document.getElementById('cancel-contact').addEventListener('click', () => {
            contactActionContainer.style.display = 'none'; // Hide options
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

    // Function to handle Facebook link interaction based on device type
    function openFacebookLink() {
        const fbURL = "https://facebook.com/mr.sela369/";
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
            // Attempt to open Facebook app on Android devices
            window.open('fb://facewebmodal/f?href=' + encodeURIComponent(fbURL), '_blank');
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            // Attempt to open Facebook app on iOS devices
            window.open('fb://profile/' + encodeURIComponent(fbURL), '_blank');
        } else {
            // Default to opening in a new tab for desktops and others
            window.open(fbURL, '_blank');
        }
    }

    if (document.querySelector('.social-icon.facebook')) {
        document.querySelector('.social-icon.facebook').addEventListener('click', openFacebookLink);
    }

    // Code for adding floating background icons within the body
    const backgroundContainer = document.querySelector('.background-icons');
    const cardBackgroundContainer = document.querySelector('.card-background-icons');
    const iconPaths = [
        'background/icon1.png',
        'background/icon2.png',
        'background/icon3.png',
        'background/icon4.png',
        'background/icon5.png',
        'background/icon6.png',
        'background/icon7.png',
        'background/icon8.png',
        'background/icon9.png',
        'background/icon10.png',
        'background/icon11.png',
        'background/icon12.png'
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
            img.style.animation = 'float 10s infinite alternate, rotate 20s linear infinite, scale 10s ease-in-out infinite alternate, bounce 5s infinite linear';
            container.appendChild(img);
        }
    }

    createIcons(backgroundContainer);
    createIcons(cardBackgroundContainer);

    // Profile image slider
    const profileSlider = document.getElementById('profile-slider');

    const imageFiles = [
        'img/profile1.jpg',
        'img/profile2.jpg',
        'img/profile3.jpg',
        'img/profile4.jpg',
        'img/profile5.jpg'
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

    // Pause on click
    profileSlider.addEventListener('click', () => {
        clearInterval(slideInterval);
    });

    // Move to next slide on double click
    profileSlider.addEventListener('dblclick', () => {
        nextSlide();
    });

    // Resume auto-slide on clicking outside the profile slider
    document.addEventListener('click', (event) => {
        if (!profileSlider.contains(event.target)) {
            slideInterval = setInterval(() => {
                updateSlides();
                if (slides.length > 0) {
                    nextSlide();
                }
            }, 3000);
        }
    });

    // Manual slide buttons (optional)
    // document.getElementById('slide-left').addEventListener('click', () => {
    //     clearInterval(slideInterval);
    //     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    //     showSlide(currentSlide);
    // });

    // document.getElementById('slide-right').addEventListener('click', () => {
    //     clearInterval(slideInterval);
    //     nextSlide();
    // });

    // Existing code...
});

// Functions for saving contact and making a call
function saveContact() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Sela HIN Mr.
ORG:General Department of Taxation
TITLE:Network Engineer
EMAIL:hinsela@tax.gov.kh
TEL;TYPE=Cellcard,VOICE:+85512716369
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
    window.location.href = "tel:+85512716369";
}
