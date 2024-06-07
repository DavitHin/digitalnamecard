function addToContacts() {
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

// Dark Mode Toggle
document.getElementById('toggle-dark-mode').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Floating background icons animation
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
        // Add more paths as needed
    ];
    
    const numberOfIcons = 20; // Number of icons to display

    for (let i = 0; i < numberOfIcons; i++) {
        const img = document.createElement('img');
        const randomIcon = iconPaths[Math.floor(Math.random() * iconPaths.length)];
        img.src = randomIcon;
        img.style.top = Math.random() * 100 + '%';
        img.style.left = Math.random() * 100 + '%';
        img.style.width = Math.random() * 35 + 15 + 'px'; // Random width between 35px and 50px
        img.style.height = 'auto';
        img.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random duration between 5s and 10s
        backgroundContainer.appendChild(img);
    }
});

// Detect device and open Facebook link accordingly
function openFacebookLink(url) {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        window.location.href = 'fb://facewebmodal/f?href=' + encodeURIComponent(url);
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = 'fb://profile?id=' + extractFacebookId(url);
    } else {
        window.location.href = url;
    }
}

function extractFacebookId(url) {
    const match = url.match(/facebook\.com\/(?:profile\.php\?id=)?([^\/?&]+)/);
    return match ? match[1] : url;
}
