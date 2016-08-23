"use strict";
window.language || (window.language = {});
var lang = $('#lang').text().trim();

if (lang == "EN") {
    window.language = "EN";
} else {
    window.language = "FR";
}
window.location.href = "/#home";
