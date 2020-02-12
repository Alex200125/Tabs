class Options {
    constructor(height = 2, width = 2, bg = "yellow", fontSize = 2 + "px", textAlign = "center", text = 'text') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.text = text;
    }
    addDivTextStyle() {
       let mb = document.querySelector('.main-block');
           
        let div = document.createElement("div"); // add element div
        div.textContent = `${this.text}`; // add text
        div.classList.add("main-block-link"); // add class
        div.style.cssText = `height: ${this.height};
            width: ${this.width};
            background-color: ${this.bg};
            font-size: ${this.fontSize};
            text-align: ${this.textAlign};
        `;
        mb.appendChild(div); // div in block
    }
}

const op = new Options(10, 15, "green", 25, "left", "boku dekirudayo!");
op.addDivTextStyle();

Options.prototype.object = {
    svoystvo: "Свойство",
    method: function() {
        console.log("i am function");
    }
};

const op2 = new Options(10, 15, "green", 25, "left", op.object);
op2.addDivTextStyle();
