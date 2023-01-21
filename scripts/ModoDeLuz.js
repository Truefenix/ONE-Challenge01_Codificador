document.getElementById('banner-noturno').style.display = "none";
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

if (darkThemeMq.matches) {
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {style.setAttribute('disabled', 'true');})

    // Aparecer e Desaparecer
    document.getElementById('banner-noturno').style.display = "none";
    document.getElementById('banner-logo').style.display = "";

} else {
    const alternateStyles = document.querySelectorAll('.alternate-style');
    alternateStyles.forEach((style) => {style.removeAttribute('disabled');})

    document.getElementById('banner-noturno').style.display = "";
    document.getElementById('banner-logo').style.display = "none";
}