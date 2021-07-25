class Produto {

    constructor(){
        this.id = 1;
        this.arrayProdutos= [];
        this.editId = null;
      
    }

    salvar()  {
        let produto = this.lerDados();

       if(this.validaCampos(produto)) {
          if(this.editId == null) {
             this.adicionar(produto);
            } else {
              this.atualizar(this.editId, produto);
            } 
       }
    
             

       
      this.listaTabela();
      this.cancelar();
       
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i=0; i < this.arrayProdutos.length; i++) {
            let tr= tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_cpf = tr.insertCell();
            let td_celular = tr.insertCell();
            let td_ações = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nome;
            td_email.innerText = this.arrayProdutos[i].email;
            td_cpf.innerText = this.arrayProdutos[i].cpf;
            td_celular.innerText = this.arrayProdutos[i].celular;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = '/Projeto 2/img/editar-imagem.png';
            imgEdit.setAttribute("onclick", "produto.preparaEdição("+ JSON.stringify(this.arrayProdutos[i]) +")");

            let imgDelete = document.createElement('img');
            imgDelete.src = '/Projeto 2/img/lixeira.icon.png';
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")");

            td_ações.appendChild(imgEdit);
            td_ações.appendChild(imgDelete);

            console.log(this.arrayProdutos);
            



        }
    }


    adicionar(produto){
        produto.cpf = parseFloat(produto.cpf)
        this.arrayProdutos.push(produto);
        this.id++;

    }

    atualizar(id, produto){
        for(let i=0; i <this.arrayProdutos.length; i++) {
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nome = produto.nome;
                this.arrayProdutos[i].email = produto.email;
                this.arrayProdutos[i].cpf = produto.;
                this.arrayProdutos[i].email = produto.email;
            }
        }
    }

    preparaEdição(dados){
        
        this.editId = dados.id;

        document.getElementById('nome').value = dados.nome;
        document.getElementById('email').value = dados.email;
        document.getElementById('cpf').value = dados.cpf;
        document.getElementById('celular').value = dados.celular;

        document.getElementById('btn1').innerText = 'Atualizar';
    }

    lerDados() {
        let produto = {}

      produto.id = this.id;  
      produto.nome =  document.getElementById('nome').value;
      produto.email =  document.getElementById('email').value;
      produto.cpf =  document.getElementById('cpf').value;
      produto.celular =  document.getElementById('celular').value;

        return produto;
    }

    validaCampos(produto){
        let msg = '';

        if(produto.nome == '') {
            msg += '- Informe o Nome do Cliente /n';
            
        }

        if(produto.email == '') {
            msg += '- Informe o e-mail do Cliente /n';
            
        }

        if(produto.cpf == '') {
            msg += '- Informe o CPF do Cliente /n';
            
        }

        if(produto.celular == '') {
            msg += '- Informe o celular do Cliente /n';
            
        }

        if(msg != '') {
            alert(msg);
            return false;
        }

        return true;

    }

    cancelar() {
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('cpf').value = '';
        document.getElementById('celular').value = '';
           
        document.getElementById('btn1').innerText = 'Salvar';
        this.editId = null;
        }

    deletar(id) {
        
      if(confirm('Deseja realmente deletar o produto do ID' + id)) { 
             let tbody = document.getElementById('tbody');

              for(let i = 0; i <this.arrayProdutos.length; i++) {
                   if(this.arrayProdutos[i].id == id) {
                        this.arrayProdutos.splice(i,1);
                         tbody.deleteRow(i);
                    }
                }

                     console.log(this.arrayProdutos);

        }
    
    }

}


var produto = new Produto()