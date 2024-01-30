const faqButtonArrays = ['button-1', 'button-2', 'button-3', 'button-4'];
for (let i = 0; i < faqButtonArrays.length; i++) {
    const click = faqButtonArrays[i];
    const clickFaqButton = document.getElementById(click);
    const answers = document.getElementById('answer' + i);
    const iconMinus = document.querySelector('.icon-minus' + i);
    const iconPlus = document.querySelector('.icon-plus' + i);
    clickFaqButton.addEventListener('click', () => {
        const isExpanded = clickFaqButton.attributes['aria-expanded'].value === 'true';
        answers.classList.toggle('hide');
        if (isExpanded) {
            clickFaqButton.ariaExpanded = 'false';
            iconMinus.style.display = 'none';
            iconPlus.style.display = 'block';
        } else {
            clickFaqButton.ariaExpanded = 'true'
            iconMinus.style.display = 'block';
            iconPlus.style.display = 'none';
            answers.focus();
        };

    });
};