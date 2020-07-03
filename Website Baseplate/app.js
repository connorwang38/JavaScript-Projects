const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links');
});

const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        articles.forEach(function (article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

const abtns = document.querySelectorAll('.question-btn');

abtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});