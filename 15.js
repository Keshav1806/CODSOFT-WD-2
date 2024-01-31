let tablinks = document.getElementsByClassName("tablink");
let tabinfos = document.getElementsByClassName("tabinfo");
for (let tablink of tablinks) {
    tablink.addEventListener("click", function (event) {
        opentab(event, this.dataset.tab);
    });
}
function opentab(event, tab) {
    for (let tablink of tablinks) {
        tablink.classList.remove("activelink");
    }
    for (let tabinfo of tabinfos) {
        tabinfo.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    let tabinfo = document.getElementById(tab);
    tabinfo.classList.add("activetab");
}
