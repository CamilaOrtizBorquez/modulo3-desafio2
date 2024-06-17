// DESAFIO - BORDER

const article = document.querySelector('.article_border');


article.addEventListener('click', () => {
    AplicarBorde();
});

function AplicarBorde(){

    if(article.style.border == "2px solid red"){
        article.style.border = "none";
    }else{
        article.style.border = "2px solid red";
    }

    console.log(article.style.border);

};