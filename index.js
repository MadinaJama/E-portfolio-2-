//template_pw1aeh7
//service_t7cc9og
//WdhMayKwCpLEiHgLZ

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";

   emailjs
   .sendForm(
       'service_t7cc9og',
       'template_pw1aeh7',
       event.target,
        'WdhMayKwCpLEiHgLZ'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
   }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
        "The meial service is temporarily unavailable. Please contact me directly on email@email.com"
    )
   })

}