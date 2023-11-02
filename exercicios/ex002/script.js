function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero= 'Homem'
            if(idade >=0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'imagens/criança-menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src', 'imagens/criança-menina.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/mulher-velha.jpg')
            }
        }
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}