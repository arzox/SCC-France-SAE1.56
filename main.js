document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.to-load');
    var i = 0;
    while (i < elements.length) {
        var element = elements[i];
        element.classList.add('loaded');
        i++;
    }
});