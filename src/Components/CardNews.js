class Cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    // O build é o que vai construir a parte dos elementos HTML
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");
   
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "../assets/foto-default.jpg";
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    // e o styles vai aplicar os estilos
    styles() {
        const style = document.createElement("style")
        style.textContent = `
        .card {
            width: 80%;
            box-shadow: -1px 7px 41px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: -1px 7px 41px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: -1px 7px 41px 0px rgba(0, 0, 0, 0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left>span {
            font-weight: 400;
        }
        
        /* Aqui eu acesso diretamente o h1 p e span dentro da div card left  */
        .card__left>a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left>p {
            color: rgb(40, 39, 39);
        }
        img {
            width: 200px;
        }
        `

        return style;
    }
}

customElements.define("card-news", Cardnews);