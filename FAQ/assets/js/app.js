let faqs = Array.from(document.querySelectorAll('.faq'));

const faqToggle = (event) => {
    const faq = event.currentTarget;

    if(faq.classList.contains('active')){
        faqs.map(faq => faq.classList.remove('active'))
    } else{
        faqs.map(faq => faq.classList.remove('active'))
        faq.classList.add('active')
    }   
}

faqs.map(faq => faq.addEventListener('click', faqToggle))
