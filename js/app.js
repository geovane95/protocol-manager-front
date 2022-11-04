function alterarImagem(){
    let img = document.getElementById("imgmutavel");
    if(img.src.includes("Horarios")){
        console.log("Entrei");
        img.src = "img/Cursos.png"; 
    }else{
        img.src = "img/Horarios.png"; 
    }
}		