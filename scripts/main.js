function shareOnWhatsApp() {
    let websiteURL = encodeURIComponent('YourRecipeWebsiteURL');
    window.location.href = `https://wa.me/?text=Check out this amazing Recipe Website: ${websiteURL}`;
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', true);
    alert('Cookies Accepted!');
}
