const senhaIpt = document.getElementById("senha")

const senha = senhaIpt.value;

addEventListener('keyup', (e) => { if(e === "Enter"){

    const senhaIpt = document.getElementById("senha")

    const senha = senhaIpt.value;

    if(senha == "pedro"){
        alert("Hi!")
    } else {alert("errado")}
}
});