document.addEventListener('DOMContentLoaded', function() {
    const contactActionContainer = document.getElementById('contact-actions');

    document.getElementById('contact-action').addEventListener('click', () => {
        contactActionContainer.style.display = 'block'; // Show options
    });

    document.getElementById('call').addEventListener('click', () => {
        window.location.href = "tel:+85512716369";
        contactActionContainer.style.display = 'none'; // Hide options after selection
    });

    document.getElementById('save-contact').addEventListener('click', saveContact);
    document.getElementById('cancel-contact').addEventListener('click', () => {
        contactActionContainer.style.display = 'none'; // Hide options
    });
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
    contactActionContainer.style.display = 'none'; // Hide options
}


// Dark Mode Toggle
document.getElementById('toggle-dark-mode').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Function to handle Facebook link interaction based on device type
function openFacebookLink() {
    const fbURL = "https://facebook.com/mr.sela369/";
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        // Attempt to open Facebook app on Android devices
        window.open('fb://facewebmodal/f?href=' + encodeURIComponent(fbURL), '_blank');
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // Attempt to open Facebook app on iOS devices
        window.open('fb://profile/' + encodeURIComponent(fbURL));
    } else {
        // Default to opening in a new tab for desktops and others
        window.open(fbURL, '_blank');
    }
}

document.querySelector('.social-icon.facebook').addEventListener('click', openFacebookLink);

// Code for adding floating background icons
document.addEventListener('DOMContentLoaded', () => {
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

    const numberOfIcons = 20;

    for (let i = 0; i < numberOfIcons; i++) {
        const img = document.createElement('img');
        img.src = iconPaths[Math.floor(Math.random() * iconPaths.length)];
        img.style.position = 'absolute';
        img.style.top = Math.random() * 100 + '%';
        img.style.left = Math.random() * 100 + '%';
        img.style.width = Math.random() * 35 + 15 + 'px';
        img.style.height = 'auto';
        img.style.animation = 'bounce 10s infinite alternate';
        backgroundContainer.appendChild(img);
    }
});
