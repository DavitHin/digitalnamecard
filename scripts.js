function addToContacts() {
    // Offer choice to call or save to phone book
    if (confirm("Press OK to save to phonebook, Cancel to call.")) {
        // Logic to save to phonebook
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
    } else {
        // Call logic
        window.location.href = "tel:+85512716369";
    }
}

document.getElementById('toggle-dark-mode').addEventListener('change', (event) => {
    if (event.target.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Function to handle Facebook link interaction based on device type
function openFacebookLink() {
    const fbURL = "https://www.facebook.com/mr.sela369/";
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check if Android
    if (/android/i.test(userAgent)) {
        const fbAppURL = `fb://page/{page_id}`; // You need to replace {page_id} with the numeric page ID
        window.open(fbAppURL, '_blank') || window.location.replace(fbURL);
    }
    // Check if iOS
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        const fbAppURL = `fb://profile/{page_id}`; // You need to replace {page_id} with the numeric page ID
        window.open(fbAppURL, '_blank') || window.location.replace(fbURL);
    }
    // Fallback for desktop and other devices
    else {
        window.open(fbURL, '_blank');
    }
}

document.querySelector('.social-icon.facebook').addEventListener('click', openFacebookLink);

// Code for floating background icons remains unchanged from your original script
document.addEventListener('DOMContentLoaded', () => {
    const backgroundContainer = document.querySelector('.background-icons');
    const iconPaths = [
        'background/icon1.png',
        'background/icon2.png',
        // Add all other paths
    ];

    for (let i = 0; i < 20; i++) { // Adjust the number of icons as needed
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
