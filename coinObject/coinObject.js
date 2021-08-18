const body = document.querySelector("body");

const coin = {
    state: 0,

    flip: function () {
        this.state = Math.floor(Math.random()*2);
        return this.state;

    },

    toString: function () {
       
        return this.flip() === 0 ? "Heads" : "Tails";
    },

    toHTML: function () {
        const image = document.createElement("img");
        image.src = `./img/${this.flip()}.jpg`
        image.alt = `${this.toString()}`
        return image
    }
}

function display20Flips() {
    const results = [];
    let p = document.createElement("p");
    body.appendChild(p);
    
    for (let i = 0; i < 20; i++) {
        results.push(coin.toString())
    }

    p.innerText = `Jogadas: ${results}` 
    return results
    
}

display20Flips()

function display20Images () {
    let result = []

    for (let i = 0; i < 20; i++) {
    //result.push(coin.flip())
      result.push(coin.toHTML())
      body.appendChild(coin.toHTML())
    }
    return result

}
display20Images()


