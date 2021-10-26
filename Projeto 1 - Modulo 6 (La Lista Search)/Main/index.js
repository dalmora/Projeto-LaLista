let btn = document.getElementById("btn");
btn.addEventListener('click', searchTeam)

document.getElementById("teamName")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("btn").click();
    }
});

function searchTeam() {
	
	const nomeDoTime = document.querySelector('#teamName').value;
	
	fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${nomeDoTime}`).then(res => res.json()).then(data => {


		var content = document.getElementById("content")

		content.innerHTML = '';

		for (let i = 0; i < data.teams.length; i++) {

			content.innerHTML += `<div class='geralUm' id = '${data.teams[i].idTeam}' onclick="teamInfo(this.id)">
			<img src="${data.teams[i].strTeamBadge}" alt="Não Possui">
			<p>${data.teams[i].idTeam}</p> 
			<p>${data.teams[i].strTeam}</p>
			<p>${data.teams[i].strSport}</p>
			<p>${data.teams[i].strLeague}</p> 
			</div>`
		}
		const geral = document.querySelectorAll('.geralUm')

		geral.forEach(element => {
			element.className = 'geralDois'

			
		})
	})
}

 

function teamInfo(teamID) {
	
	fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamID}`).then(res => res.json()).then(data => {

		content.innerHTML = '';

		for (let i = 0; i < data.teams.length; i++) {

			var Logo = data.teams[i].strTeamBadge
			var Banner = data.teams[i].strTeamBanner
			var stadiumThumb = data.teams[i].strStadiumThumb
			var stadiumDescription = data.teams[i].strStadiumDescription
			var TeamJersey = data.teams[i].strTeamJersey
			var Fanart1 = data.teams[i].strTeamFanart1
			var Fanart2 = data.teams[i].strTeamFanart2
			var Fanart3 = data.teams[i].strTeamFanart3
			var Fanart4 = data.teams[i].strTeamFanart4

			if (Logo == null || undefined) {
				Logo = 'logo.png'
			}

			if (Banner == null || undefined) {
				Banner = 'banner.png'
			}

			if (stadiumThumb == null || undefined) {
				stadiumThumb = 'stadium.png'
			}

			if (stadiumDescription == null || undefined) {
				stadiumDescription = 'Sem descrição de estádio'
			}
			if (TeamJersey == null || undefined) {
				TeamJersey = 'Logo genérico.png'
			}

			if (Fanart1 == null || undefined) {
				Fanart1 = 'Logo genérico.png'
			}

			if (Fanart2 == null || undefined) {
				Fanart2 = 'Logo genérico.png'
			}

			if (Fanart3 == null || undefined) {
				Fanart3 = 'Logo genérico.png'
			}

			if (Fanart4 == null || undefined) {
				Fanart4 = 'Logo genérico.png'
			}

			content.innerHTML = `<div id='${data.teams[i].idTeam}' onclick="teamInfo(this.id)">
				<div class="bannerPlace">
				<img src="${Banner}" alt="Não Possui">
				</div>
				<img src="${Logo}" alt="Não Possui">
				<div class="infoPlace">
				<p>${data.teams[i].strTeam}</p>
				<p><strong>Pais: </strong>${data.teams[i].strCountry}</p>
				<p><strong>Liga:</strong> ${data.teams[i].strLeague}</p>
				<p><strong>Modalidade: </strong>${data.teams[i].strSport}</p> 
				<p><strong>Estádio: </strong>${data.teams[i].strStadium}</p>
				<p><strong>Capacidade: </strong>${data.teams[i].intStadiumCapacity}</p>
				<p><strong>Local: </strong>${data.teams[i].strStadiumLocation}</p>
				</div>
				<div class="texto1">
				<p><strong>Descrição:</strong> ${data.teams[i].strDescriptionEN}</p>
				</div>
				<div class="texto2">
				<p><strong>Descrição do Estádio: </strong>${stadiumDescription}</p>
				</div>
				<div class="galeria">
				<img src="${Logo}" alt="Não Possui">
				<img src="${stadiumThumb}" alt="Não Possui">
				<img src="${Fanart1}" alt="Não Possui">
				<img src="${Fanart2}" alt="Não Possui">
				<img src="${Fanart3}" alt="Não Possui">
				<img src="${Fanart4}" alt="Não Possui">
				<img src="${TeamJersey}" alt="Não Possui">
				</div>
				<div class="sociais">
				<h3>Redes Sociais</h3>
				<a href='https://${data.teams[i].strYoutube}'>
					<img src='https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-5-2.png'>
				</a>
				<a href='https://${data.teams[i].strFacebook}'>
					<img src='https://img2.gratispng.com/20180712/wth/kisspng-modernfold-social-media-facebook-computer-icons-yo-face-book-logo-5b47d76ab76f82.4705523515314348587514.jpg'>
				</a> 
				<a href='https://${data.teams[i].strInstagram}'>
					<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'>
				</a>
				<a href='https://${data.teams[i].strTwitter}'>
					<img src='https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png'>
				</a>
				</div>
			</div>`
		}
		const galeria = document.querySelectorAll('.galeria')

		galeria.forEach(element => {
			element.className = 'galeria'
		})
	})
}


