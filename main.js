document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.to-load');
    var i = 0;
    sleep(200)
    while (i < elements.length) {
        var element = elements[i];
        element.classList.add('loaded');
        i++;
    }
});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}