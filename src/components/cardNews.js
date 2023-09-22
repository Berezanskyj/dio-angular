class cardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'}); 
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        //criando a div container
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute("class", "card");


        //criando a div do card_left
        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", "card__left");

        //criando os elementos
        const autor = document.createElement("span")
        //setando as props da tag
        autor.textContent = "Autor: " + (this.getAttribute("autor") || "Anônimo");

        const linkTittle = document.createElement("a");
        linkTittle.textContent = this.getAttribute("tittle")
        // definindo props do nativas do html
        // atributo getAttribute "renomeia" a tag -- href => link-url
        linkTittle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p")
        newsContent.textContent = this.getAttribute("content")

        //adicionando os elementos
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTittle);
        cardLeft.appendChild(newsContent);

        //criando a div do card_right
        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img")
        // definindo props do nativas do html
        newsImage.src = this.getAttribute("photo") || "assets/default-profile-photo.jpg"
        newsImage.alt = "Foto da noticia"

        cardRight.appendChild(newsImage)

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style")
        style.textContent =  `
        .card{
            width: 80%;
            /* border: 1px solid gray; */
            box-shadow: 10px 15px 41px -7px rgba(0,0,0,0.75);
            -webkit-box-shadow: 10px 15px 41px -7px rgba(0,0,0,0.75);
            -moz-box-shadow: 10px 15px 41px -7px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        /* .card__left, .card__right{
            border: 1px solid blue;
        } */
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > span {
            font-weight: 400;
        }
        
        .card__left > h1{
            margin-top: 15px;
            font-size: 25px;
        }
        
        .card__left > p {
            color: #707070;
        }

        .card__left > a {
            text-decoration: none;
        }
    
    
        `


        return style
    }
}

customElements.define('card-news', cardNews)