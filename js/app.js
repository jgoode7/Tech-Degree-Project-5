window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
});

const img = document.getElementsByTagName('a');
const input = document.getElementById('search-bar')

input.addEventListener('keyup', search => {
    const searchInput = search.target.value.toLowerCase();
    for( i = 0; i < img.length; i++) {
        const inputValue = img[i].getAttribute('data-caption');
        if (inputValue.toLocaleLowerCase().indexOf(searchInput) > -1) {
            img[i].style.display = "";
        } else {
            img[i].style.display= "none";
        }
    }
});