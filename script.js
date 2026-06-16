const mainBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
mainBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

emailjs.init("8uf_qfUlCvzgSKrfU")
const form = document.getElementById("contactForm");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    emailjs.send("service_lt17i79","template_i6c1mzz",{
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        type: document.getElementById("type").value,
        message: document.getElementById("message").value
    })
    .then(()=>{

    showSuccessAlert();
    form.reset();

    })
    .catch(function(){
        showFailureAlert();
        console.error(error);
    });
});
function showSuccessAlert(){

    const alertBox =
    document.getElementById("successAlert");

    alertBox.classList.add("show");

    setTimeout(() => {

        alertBox.classList.remove("show");

    }, 5000);

}
function showFailureAlert(){

    const alertBox =
    document.getElementById("failureAlert");

    alertBox.classList.add("show");

    setTimeout(() => {

        alertBox.classList.remove("show");

    }, 5000);

}
function closeAlert(){

    document
        .getElementById("successAlert")
        .classList.remove("show");

}
const observer =
new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
                "reveal"
            );

        }

    });

});

const hiddenElements =
document.querySelectorAll(
".hidden-right,.hidden-left,.hidden-zoom,.hidden-fade,.hidden-skill1,.hidden-skill2,.hidden-skill3"
);

hiddenElements.forEach(el=>{

    observer.observe(el);

});