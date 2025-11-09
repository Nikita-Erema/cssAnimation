document.querySelector('.collapse_button').addEventListener('click', () => {
    const text = document.querySelector('.collapse_text');

    if (!text.classList.contains('collapse_final_open')) {
        text.classList.remove('collapse_text_close');
        text.classList.add('collapse_text_open');

        text.addEventListener('animationend', () => {
            text.classList.add('collapse_final_open')
            text.classList.remove('collapse_text_open');
        }, { once: true });
    } else {
        text.classList.remove('collapse_text_open');
        text.classList.add('collapse_text_close');
    
        text.addEventListener('animationend', () => {
            text.classList.remove('collapse_final_open')
            text.classList.remove('collapse_text_close');
        }, { once: true });
    }
})