function mudarForma(){
    var div = document.getElementById("forma");
            var botao = document.getElementById("btn-forma");

           
            if (div.style.borderRadius === "0%") {
                
              
                div.style.borderRadius = "50%";
            
                botao.innerText = "Mudar forma";

            } else {
                div.style.borderRadius = "0%";
                
                botao.innerText = "Retornar forma original";
            }
        }