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

    // Code for adding floating background icons
    const backgroundContainer = document.querySelector('.background-icons');
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

    const numberOfIcons = 24;

    for (let i = 0; i < numberOfIcons; i++) {
        const img = document.createElement('img');
        const randomIcon = iconPaths[Math.floor(Math.random() * iconPaths.length)];
        img.src = randomIcon;
        img.style.top = Math.random() * 100 + '%';
        img.style.left = Math.random() * 100 + '%';
        img.style.width = Math.random() * 35 + 15 + 'px'; // Random width between 35px and 50px
        img.style.height = 'auto';
        iimg.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random duration between 5s and 10s
        backgroundContainer.appendChild(img);
    }
});

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
