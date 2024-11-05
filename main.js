$(document).ready(function() {
    navbuttons(".about","/about");
    navbuttons('.project',"/project");
    navbuttons('.skills',"/skills");
    navbuttons('.blog',"/blogs");
    navbuttons('.resume',"/resume");
    navbuttons('.contact',"/contact");
    navblankbuttons('.git','https://github.com/aeondromach');
    navblankbuttons('.linked','/error')
});

document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("leftList");
    const headings = document.querySelectorAll("h2, h3, h4, h5");

    headings.forEach(heading => {
        const id = heading.textContent.replace(/\s+/g, '-').toLowerCase();
        heading.id = id; // Set the ID for the heading

        const li = document.createElement("li");
        switch (heading.tagName) {
            case 'H2':
                li.innerHTML = `<a class="tableOfContents leftListh2" href="#${id}">${heading.textContent}</a>`;
                li.className = "leftListh2";
                break;
            case 'H3':
                li.innerHTML = `<a class="tableOfContents leftListh3" href="#${id}">${heading.textContent}</a>`;
                li.className = "leftListh3";
                break;
            case 'H4':
                li.innerHTML = `<a class="tableOfContents leftListh4" href="#${id}">${heading.textContent}</a>`;
                li.className = "leftListh4"
                break;
            case 'H5':
                li.innerHTML = `<a class="tableOfContents leftListh5" href="#${id}">${heading.textContent}</a>`;
                li.className = "leftListh5"
                break;
        }

        list.appendChild(li);
    });
});

function navbuttons(take, give) {
    if ($(take).length > 0) {
        $(take).on("click", function() {
            location.href = give;
        });
    }
}

function navblankbuttons(take, give) {
    if ($(take).length > 0) {
        $(take).on("click", function() {
            window.open(give, "_blank");
        });
    }
}