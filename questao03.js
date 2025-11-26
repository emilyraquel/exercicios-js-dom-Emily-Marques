function cadastrarUsuario() {
            const nome = document.getElementById('nome').value;
            const dataNascimento = document.getElementById('dataNasc').value;
            const rua = document.getElementById('rua').value;
            const numero = document.getElementById('numero').value;
            const cidade = document.getElementById('cidade').value;
            const estado = document.getElementById('uf').value;

        
            let dataFormatada = dataNascimento;
            if(dataNascimento) {
                const partesData = dataNascimento.split('-');
                dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;
            }

            
            const frase = `${nome} nasceu no dia ${dataFormatada} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;

          
            const elementoResultado = document.getElementById('resultado');
            elementoResultado.innerText = frase;

            
            elementoResultado.style.color = 'green';
            elementoResultado.style.fontSize = '24px';
        }

        
        document.getElementById('cadastrar').addEventListener('click', cadastrarUsuario);
