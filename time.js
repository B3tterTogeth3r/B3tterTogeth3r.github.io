var datum;
'use strict';

function init() {
    datum = new Date();
    document.getElementById('loc').innerHTML = datum.toLocaleString('de-DE');
}
document.addEventListener("DOMContentLoaded", function() {
    init();
});
init();