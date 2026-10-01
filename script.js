const viesti = "Hei ja näkemiin!";

console.log(viesti);
 
const ika = 16;

if (ika >= 18) {
    console.log("tervetuloa sivulle.");
} else {
    console.log("poistu sivulta.");
}

function laskeAlennus(hinta) {
    const uusiHinta = hinta * 0.5;
    return uusiHinta;
}

const hinta = 150;
const tulos = laskeAlennus(hinta);

console.log(tulos);

const numerot = ["1", "2", "3"];

for (let i = 0; i < numerot.length; i++) {
    console.log(numerot[i]);
}

const painike = document.getElementById("painike");

painike.addEventListener("click", function() {
    console.log("klikkaus");
    alert(" Hinta alennuksen jälkeen: " + tulos + " euroa");
});

const haeKoiraNappi = document.getElementById("haeKoira");
const tulosalue = document.getElementById("tulosalue");
const rotuValinta = document.getElementById("rotuValinta");

// Täytetään pudotusvalikko rotulistalla heti sivun latautuessa
fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const rodut = Object.keys(data.message);

        for (let i = 0; i < rodut.length; i++) {
            const optio = document.createElement("option");
            optio.value = rodut[i];
            optio.textContent = rodut[i];
            rotuValinta.appendChild(optio);
        }
    })
    .catch(function(virhe) {
        console.log(virhe);
    });

// Haetaan 5 kuvaa valitusta rodusta napin klikkauksella
haeKoiraNappi.addEventListener("click", function() {
    const valittuRotu = rotuValinta.value;

    tulosalue.innerHTML = "<p>Haetaan koiria....</p>";

    fetch("https://dog.ceo/api/breed/" + valittuRotu + "/images/random/3")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            let kuvatHtml = "";
            for (let i = 0; i < data.message.length; i++) {
                kuvatHtml += "<img src='" + data.message[i] + "' width='150'>";
            }
            tulosalue.innerHTML = kuvatHtml;
        })
        .catch(function(virhe) {
            console.log(virhe);
            tulosalue.innerHTML = "<p class='virhe'>haku ei onnistunut.</p>";
        });
});

const haeLainausNappi = document.getElementById("haeLainaus");
const lainausalue = document.getElementById("lainausalue");

haeLainausNappi.addEventListener("click", function() {
    lainausalue.innerHTML = "Haetaan Kanyen viisauksia...";

    fetch("https://api.kanye.rest/")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            lainausalue.innerHTML = data.quote;
        })
        .catch(function(virhe) {
            console.log(virhe);
            lainausalue.innerHTML = "<span class='virhe'>Haku ei onnistunut.</span>";
        });
});