/*
Create a webpage that has a checkbox. If the checkbox is
checked, make a photo appear. If it is not, make it disappear.
*/


const checkbox = document.querySelector('#checkbox')
const photo = document.querySelector('#bulb-img');
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        photo.style.display = 'block';
    } else {
        photo.style.display = 'none';
    }
})

