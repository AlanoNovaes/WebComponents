class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        // base do component
        const componentRoot = document.createElement("h1");
        // Aqui eu declaro que todo texto do h1 vai ser atribuido pelo titulo utilizando uma Prop chamada titulo
        componentRoot.textContent = this.getAttribute("titulo");
        // estilizar o component
        const style = document.createElement("style");
        style.textContent = `
        h1{
            color: red;
        }
        `
        //enviar para a shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style);
    }
}

customElements.define("titulo-dinamico", TituloDinamico);