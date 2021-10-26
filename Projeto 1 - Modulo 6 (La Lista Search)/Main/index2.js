var btn2 = document.getElementById('btn2')
btn2.addEventListener('click', searchPlayer)

document.getElementById("playerName")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("btn2").click();
    }
});

function searchPlayer() {
	
	const nomeDoJogador = document.querySelector('#playerName').value;
	
	fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${nomeDoJogador}`).then(res => res.json()).then(data => {


		var content2 = document.getElementById("content2");
		content2.innerHTML = '';

		for (let i = 0; i < data.player.length; i++) {

			const divMain = document.createElement('div');
			divMain.setAttribute('class', 'mainClass');
			divMain.setAttribute('onclick', 'playerInfo(' + data.player[i].idPlayer + ')');
			divMain.id = data.player[i].idPlayer

			if (data.player[i].strCutout == null || data.player[i].strCutout == undefined) {
				data.player[i].strCutout = 'unnamed.png'
			}

			if (data.player[i].strTeam == '_Retired Soccer') {
				data.player[i].strTeam = 'Aposentado'
			}

			const divImagem = document.createElement('div');
			divImagem.setAttribute('class', 'imgIcone');


			const imagemIcone = document.createElement('img');
			imagemIcone.src = data.player[i].strCutout
			divImagem.append(imagemIcone)
			divMain.append(divImagem);

			const divInfo = document.createElement('div');
			divInfo.setAttribute('class', 'divInfo');

			const playerId = document.createElement('p');
			playerId.textContent = data.player[i].idPlayer
			divInfo.append(playerId)

			const playerName = document.createElement('p');
			playerName.textContent = data.player[i].strPlayer
			divInfo.append(playerName)

			const playerTeam = document.createElement('p');
			playerTeam.textContent = data.player[i].strTeam
			divInfo.append(playerTeam)

			divMain.append(divInfo);

			document.getElementById('content2').append(divMain)

		}
	})
}



function playerInfo(playerID) {
	fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${playerID}`).then(res => res.json()).then(data => {

		var content2 = document.getElementById("content2");
		var jogador = data.players[0]
		content2.innerHTML = '';

		var iD = jogador.idPlayer
		var foto = jogador.strThumb
		var time = jogador.strTeam
		var peso = jogador.strWeight


		if (iD == null || iD == undefined) {
			iD = 'ID Inexistente'
		}

		if (foto == null || foto == undefined) {
			foto = 'unnamed.png'
		}


		if (time == '_Retired Soccer') {
			time = 'Aposentado'
		}

		const divMain2 = document.createElement('div');
		divMain2.setAttribute('class', 'mainClass2');
		divMain2.id = jogador.idPlayer;
		content2.append(divMain2);

		const thumbPlayer = document.createElement('img');
		thumbPlayer.src = foto
		divMain2.append(thumbPlayer);

		const divText = document.createElement('div');
		divText.setAttribute('class', 'mainText');
		divText.id = jogador.idPlayer;
		divMain2.append(divText);

		const divText2 = document.createElement('div');
		divText2.setAttribute('class', 'mainText');
		divText2.id = jogador.idPlayer;
		divMain2.append(divText2);

		if (jogador.strPlayer != '') {
			const playerName = document.createElement('p');
			playerName.textContent = `Nome: ${jogador.strPlayer}`
			divText.append(playerName);
		}

		if (jogador.strNationality != '') {
			const playerNacionalidade = document.createElement('p');
			playerNacionalidade.textContent = `Nacionalidade: ${jogador.strNationality}`
			divText.append(playerNacionalidade);
		}

		if (jogador.dateBorn != '') {
			const playerBorn = document.createElement('p');
			playerBorn.textContent = `Data de Nascimento: ${jogador.dateBorn}`
			divText.append(playerBorn);
		}

		if (jogador.strBirthLocation != '') {
			const playerBirth = document.createElement('p');
			playerBirth.textContent = `Local de Nascimento: ${jogador.strBirthLocation}`
			divText.append(playerBirth);
		}

		if (jogador.strHeight != '') {
			const playerHeight = document.createElement('p');
			playerHeight.textContent = `Altura: ${jogador.strHeight}`
			divText.append(playerHeight);
		}

		if (peso != '') {
			const playerWeight = document.createElement('p');
			playerWeight.textContent = `Peso: ${peso}`
			divText.append(playerWeight);
		}
		if (jogador.strPosition != '') {
			const playerPosition = document.createElement('p');
			playerPosition.textContent = `Posição: ${jogador.strPosition}`
			divText.append(playerPosition);
		}
		if (time != '') {
			const playerTeam = document.createElement('p');
			playerTeam.textContent = `Time: ${time}`
			divText.append(playerTeam);
		}
		if (jogador.strDescriptionEN != '') {
			const playerDescription = document.createElement('p');
			playerDescription.textContent = `Descrição: ${jogador.strDescriptionEN}`
			divText2.append(playerDescription);
		}

		const divGaleria = document.createElement('div');
		divGaleria.setAttribute('class', 'divGaleria');

		if (jogador.strThumb != null) {
			const imagemThumb = document.createElement('img');
			imagemThumb.src = jogador.strThumb
			divGaleria.append(imagemThumb)
		}

		if (jogador.Cutout != null) {
			const imagemCutout = document.createElement('img');
			imagemCutout.src = jogador.strCutout
			divGaleria.append(imagemCutout)
		}

		if (jogador.strRender != null) {
			const imagemRender = document.createElement('img');
			imagemRender.src = jogador.strRender
			divGaleria.append(imagemRender)
		}

		if (jogador.strFanart1 != null) {
			const imagemFanart1 = document.createElement('img');
			imagemFanart1.src = jogador.strFanart1
			divGaleria.append(imagemFanart1)
		}

		if (jogador.strFanart2 != null) {
			const imagemFanart2 = document.createElement('img');
			imagemFanart2.src = jogador.strFanart2
			divGaleria.append(imagemFanart2)
		}

		if (jogador.strFanart3 != null) {
			const imagemFanart3 = document.createElement('img');
			imagemFanart3.src = jogador.strFanart3
			divGaleria.append(imagemFanart3)
		}

		if (jogador.strFanart4 != null) {
			const imagemFanart4 = document.createElement('img');
			imagemFanart4.src = jogador.strFanart4
			divGaleria.append(imagemFanart4)
		}

		divMain2.append(divGaleria)



		const iframeDiv = document.createElement('div');
		iframeDiv.setAttribute('class', 'iframeDiv');
		divMain2.append(iframeDiv)

		const iframe = document.createElement('iframe');
		iframe.src = 'https://www.zoom.com.br/search?q=camisa ' + jogador.strPlayer
		iframeDiv.append(iframe);

	}
	)
}
