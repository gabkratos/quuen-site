let txt1 = document.getElementById("Usuario");
let txt2 = document.getElementById("email");
let txt3 = document.getElementById("Senha");
let label = document.getElementById("label");

function change(){
    label.innerHTML = "Obrigado! Seu cadastro foi efetuado" ;
    const infos = [0,0,0];
    infos[0] = txt1.value;
    infos[1] = txt2.value;
    infos[2] = txt3.value;
       console.log(infos);
}

