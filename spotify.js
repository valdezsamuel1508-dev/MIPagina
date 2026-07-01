const playBtn = document.getElementById("play-btn");

const titulo = document.getElementById("titulo");

const artista = document.getElementById("artista");

const cover = document.getElementById("cover");

const changeBtn = document.getElementById("change-btn");

const repeatBtn = document.getElementById("repeat-btn");

const audio = document.getElementById("audio");

const progress = document.getElementById("progress");

const time = document.getElementById("time");

const volume = document.getElementById("volume");

let volumenGuardado =
localStorage.getItem("volumen") || 1;

const nextBtn = document.getElementById("next-btn");

const prevBtn = document.getElementById("prev-btn");

const cards = document.querySelector(".cards");

const search = document.getElementById("search");

const verFavoritos = document.getElementById("ver-favoritos");

const verTodas = document.getElementById("ver-todas");

const volumeIcon = document.getElementById("volume-icon");

const verRecientes = document.getElementById("ver-recientes");

const themeBtn = document.getElementById("theme-btn");

const queueList = document.getElementById("queue-list");

const playlistName = document.getElementById("playlist-name");

const crearPlaylistBtn = document.getElementById("crear-playlist");

const playlistsDiv = document.getElementById("playlists");

const sectionTitle = document.getElementById("section-title");

const backBtn = document.getElementById("back-btn");

const forwardBtn = document.getElementById("forward-btn");

const inicioBtn = document.getElementById("inicio-btn");

const buscarBtn = document.getElementById("buscar-btn");

const bibliotecaBtn = document.getElementById("biblioteca-btn");

let reproduciendo = false;

let repetir =
JSON.parse(
    localStorage.getItem("repetir")
) || false;

let shuffle =
JSON.parse(
    localStorage.getItem("shuffle")
) || false;

let indice = Number(
    localStorage.getItem("ultimaCancion")
) || 0;

let favoritos =
JSON.parse(localStorage.getItem("favoritos")) || [];

let recientes =
JSON.parse(localStorage.getItem("recientes")) || [];

let playlists =
JSON.parse(localStorage.getItem("playlists")) || [];

let tema =
localStorage.getItem("tema") || "oscuro";

const canciones = [

    {
        titulo: "No hay condena",
        artista: "La Feria",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song.MP3"
    },

    {
        titulo: "Girasol",
        artista: "La Feria",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song2.MP3"
    },

    {
        titulo: "Lo que quieras tú",
        artista: "La Feria ft. Redimi2",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song3.MP3"
    },

    {
        titulo: "Desapercibida",
        artista: "La Feria",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song4.MP3"
    },

    {
        titulo: "Más que suficiente",
        artista: "La Feria",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song5.MP3"
    },

    {
        titulo: "Laberintos",
        artista: "La Feria ft. Majo y Dan",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song6.MP3"
    },

    {
        titulo: "Incondicional",
        artista: "La Feria",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song7.MP3"
    },

    {
        titulo: "Te estoy esperando",
        artista: "La Feria",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song8.MP3"
    },

    {
        titulo: "Y dime",
        artista: "La Feria",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song9.MP3"
    },

    {
        titulo: "Libertad",
        artista: "La Feria",
        album: "No hay condena",
        imagen: "img/nohaycondena.jpg",
        audio: "music/song10.MP3"
    },

    {
        titulo: "Te quiero",
        artista: "Majo y Dan",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/song11.MP3"
    },

    {
        titulo: "Encontrarte",
        artista: "Majo y Dan & Madiel Lara",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song12.MP3"
    },

    {
        titulo: "Vamos bien",
        artista: "Majo y Dan",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song13.MP3"
    },

    {
        titulo: "Sol en día nublado",
        artista: "Majo y Dan & Vaes",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song14.MP3"
    },

    {
        titulo: "Tu valor",
        artista: "Majo y Dan",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song15.MP3"
    },

    {
        titulo: "No me pidan",
        artista: "Majo y Dan",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song16.MP3"
    },

    {
        titulo: "Un día a la vez",
        artista: "Majo y Dan",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song17.MP3"
    },

    {
        titulo: "Tú me ves",
        artista: "Majo y Dan",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song18.MP3"
    },

    {
        titulo: "Juró volver",
        artista: "Majo y Dan",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song19.MP3"
    },

    {
        titulo: "Qué sería",
        artista: "Majo y Dan",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song20.MP3"
    },

    {
        titulo: "El secreto",
        artista: "Majo y Dan",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song21.MP3"
    },

    {
        titulo: "Jardín",
        artista: "Majo y Dan & Carla Morrison",
        album: "Días contigo",
        imagen: "img/diascontigo.jpg",
        audio: "music/Song22.MP3"
    },

    {
        titulo: "Still Rolling Stones",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song23.MP3"
    },

    {
        titulo: "Rescue",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song24.MP3"
    },

    {
        titulo: "This girl",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song25.MP3"
    },

    {
        titulo: "Your wings",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song26.MP3"
    },

    {
        titulo: "You say",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song27.MP3"
    },

    {
        titulo: "Everything",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song28.MP3"
    },

    {
        titulo: "Love like this",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song29.MP3"
    },

    {
        titulo: "Look up child",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song30.MP3"
    },

    {
        titulo: "Losing my religion",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song31.MP3"
    },

    {
        titulo: "Remember",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song32.MP3"
    },

    {
        titulo: "Rebel heart",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song33.MP3"
    },

    {
        titulo: "Inevitable",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song34.MP3"
    },

    {
        titulo: "Turn your eyes upon Jesus",
        artista: "Lauren Daigle",
        album: "Look up child",
        imagen: "img/lookup.jpg",
        audio: "music/Song35.MP3"
    }
    
];

if(tema === "claro"){

    document.body.classList.add("light-mode");

    themeBtn.innerHTML =
    "☀️ Modo Claro";

}else{

    themeBtn.innerHTML =
    "🌙 Modo Oscuro";

}


function mostrarAlbumes(guardar = true){

    if(guardar){
        guardarVista("albumes");
    }

    cards.innerHTML = "";

    const albumes = [...new Set(
        canciones.map(cancion => cancion.album)
    )];

    albumes.forEach(nombreAlbum => {

        const cancionesAlbum = canciones.filter(
            cancion => cancion.album === nombreAlbum
        );

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `

            <img src="${cancionesAlbum[0].imagen}">

            <h3>${nombreAlbum}</h3>

            <p>${cancionesAlbum.length} canciones</p>

        `;

        card.addEventListener("click", () => {

            guardarVista("album", cancionesAlbum);
            mostrarCards(cancionesAlbum);

            sectionTitle.innerHTML =
            `💿 Álbum: ${nombreAlbum}`;

        });

        cards.appendChild(card);

    });

}

function guardarVista(tipo, datos = null){

    historial = historial.slice(
        0,
        posicionHistorial + 1
    );

    historial.push({
        tipo,
        datos
    });

    posicionHistorial++;

}

function cargarCancion(){

    titulo.innerHTML = canciones[indice].titulo;

    artista.innerHTML = canciones[indice].artista;

    document.title = `▶ ${canciones[indice].titulo} - ${canciones[indice].artista}`;

    cover.src = canciones[indice].imagen;

    audio.src = canciones[indice].audio;

    audio.play();

    reproduciendo = true;

    playBtn.classList.remove("fa-play");

    playBtn.classList.add("fa-pause");

    actualizarCardActiva()

    if(!recientes.includes(canciones[indice].titulo)){

    recientes.unshift(
        canciones[indice].titulo
    );

    if(recientes.length > 15){
        recientes.pop();
    }

}else{

    recientes = recientes.filter(
        cancion =>
        cancion !== canciones[indice].titulo
    );

    recientes.unshift(
        canciones[indice].titulo
    );

    if(recientes.length > 15){
        recientes.pop();
    }

}

localStorage.setItem(
    "recientes",
    JSON.stringify(recientes)
);

localStorage.setItem(
    "ultimaCancion",
    indice
);

actualizarQueue();

}

function actualizarCardActiva(){

    document
    .querySelectorAll(".card")
    .forEach((card, i) => {

        card.classList.remove("activa");

        if(i === indice){

            card.classList.add("activa");

        }

    });

}

function mostrarNotificacion(texto){

    const notificacion =
    document.createElement("div");

    notificacion.classList.add(
        "notificacion"
    );

    notificacion.innerHTML = texto;

    document.body.appendChild(
        notificacion
    );

    setTimeout(() => {

        notificacion.remove();

    }, 2000);

}

function actualizarQueue(){

    if(shuffle){

    queueList.innerHTML = `
        <p>🔀 Modo aleatorio activado</p>
        <p>Las siguientes canciones se elegirán al azar</p>
    `;

    return;

    }
    
    queueList.innerHTML = "";

    const reproduciendoAhora =
    document.createElement("p");

    reproduciendoAhora.innerHTML =
    `🎵 Reproduciendo: ${canciones[indice].titulo}`;

    queueList.appendChild(
        reproduciendoAhora
    );

    const titulo =
    document.createElement("h4");

    titulo.textContent = "Siguientes:";

    queueList.appendChild(titulo);

    const siguientes = [];

    for(let i = indiceListaActual + 1;
        i < listaActual.length;
        i++){

        siguientes.push(listaActual[i]);

    }

    for(let i = 0;
        i < indiceListaActual;
        i++){

        siguientes.push(listaActual[i]);

    }

    siguientes.forEach(cancion => {

        const item =
        document.createElement("p");

        item.textContent =
        `${cancion.titulo} - ${cancion.artista}`;

        queueList.appendChild(item);

    });

}

let playlistAbierta = null;

let playlistSeleccionada = null;

let listaActual = canciones;

let indiceListaActual = 0;

let historial = [];

let posicionHistorial = -1;

function mostrarPlaylists(){

    playlistsDiv.innerHTML = "";

    playlists.forEach(playlist => {

        const div =
        document.createElement("div");

        div.classList.add("playlist");

        const primeraCancion = canciones.find(
            cancion =>
            playlist.canciones.includes(cancion.titulo)
        );

        const portada = primeraCancion
            ? primeraCancion.imagen
            : "img/nohaycondena.jpg";

        div.innerHTML = `
            <img src="${portada}" class="playlist-cover">
            <h3>${playlist.nombre}</h3>
            <p>${playlist.canciones.length} canciones</p>
            <button class="edit-playlist">✏️</button>
            <button class="delete-playlist">🗑️</button>
        `;

        playlistsDiv.appendChild(div);

        const deletePlaylistBtn =
        div.querySelector(".delete-playlist");

        const editPlaylistBtn =
        div.querySelector(".edit-playlist");

editPlaylistBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    const nuevoNombre = prompt(
        "Nuevo nombre de la playlist:",
        playlist.nombre
    );

    if(!nuevoNombre) return;

    playlist.nombre = nuevoNombre.trim();

    localStorage.setItem(
        "playlists",
        JSON.stringify(playlists)
    );

    mostrarPlaylists();

    mostrarNotificacion(
        "✏️ Playlist renombrada"
    );

    });

deletePlaylistBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    const confirmar = confirm(
        `¿Eliminar la playlist "${playlist.nombre}"?`
    );

    if(!confirmar) return;

    playlists = playlists.filter(
        p => p.nombre !== playlist.nombre
    );

    localStorage.setItem(
        "playlists",
        JSON.stringify(playlists)
    );

    if(
        playlistSeleccionada &&
        playlistSeleccionada.nombre === playlist.nombre
    ){
        playlistSeleccionada = null;
        playlistAbierta = null;
        mostrarCards();
    }

    mostrarPlaylists();

    mostrarNotificacion(
        "🗑️ Playlist eliminada"
    );

    });

        div.addEventListener("click", () => {

    if(playlistAbierta === playlist.nombre){

        cards.innerHTML = "";
        playlistAbierta = null;
        return;
    }

    const cancionesPlaylist = canciones.filter(
        cancion =>
        playlist.canciones.includes(
            cancion.titulo
        )
    );

    guardarVista("playlist", {
    nombre: playlist.nombre,
    canciones: cancionesPlaylist
    });

    mostrarCards(cancionesPlaylist);

    playlistAbierta = playlist.nombre;

    playlistSeleccionada = playlist;

    sectionTitle.innerHTML = `🎵 Playlist: ${playlist.nombre}`;

    });

    });

}

function mostrarBiblioteca(){

    cards.innerHTML = "";

    sectionTitle.innerHTML =
    "📚 Tu Biblioteca";

    const favoritosCard =
    document.createElement("div");

    favoritosCard.classList.add("card");

    favoritosCard.innerHTML = `
        <h3>💚 Favoritos</h3>
        <p>${favoritos.length} canciones</p>
    `;

    favoritosCard.addEventListener("click", () => {

        const cancionesFavoritas =
        canciones.filter(cancion =>
            favoritos.includes(cancion.titulo)
        );

        mostrarCards(cancionesFavoritas);

        sectionTitle.innerHTML =
        "💚 Mis Favoritos";

    });

    cards.appendChild(favoritosCard);

    const recientesCard =
    document.createElement("div");

    recientesCard.classList.add("card");

    recientesCard.innerHTML = `
        <h3>🕒 Recientes</h3>
        <p>${recientes.length} canciones</p>
    `;

    recientesCard.addEventListener("click", () => {

        const cancionesRecientes =
        recientes.map(titulo =>
            canciones.find(
                cancion =>
                cancion.titulo === titulo
            )
        );

        mostrarCards(
            cancionesRecientes.filter(
                cancion => cancion
            )
        );

        sectionTitle.innerHTML =
        "🕒 Recientes";

    });

    cards.appendChild(recientesCard);

    playlists.forEach(playlist => {

        const card =
        document.createElement("div");

        card.classList.add("card");

        const primeraCancion =
        canciones.find(cancion =>
            playlist.canciones.includes(
                cancion.titulo
            )
        );

        const portada =
        primeraCancion
        ? primeraCancion.imagen
        : "img/nohaycondena.jpg";

        card.innerHTML = `
            <img src="${portada}">
            <h3>${playlist.nombre}</h3>
            <p>${playlist.canciones.length} canciones</p>
        `;

        card.addEventListener("click", () => {

            const cancionesPlaylist =
            canciones.filter(cancion =>
                playlist.canciones.includes(
                    cancion.titulo
                )
            );

            playlistSeleccionada =
            playlist;

            mostrarCards(
                cancionesPlaylist
            );

            sectionTitle.innerHTML =
            "🎵 Playlist: " +
            playlist.nombre;

        });

        cards.appendChild(card);

    });

}

function mostrarCards(lista = canciones){

    listaActual = lista;

    cards.innerHTML = "";

    lista.forEach((cancion, i) => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

        <img src="${cancion.imagen}">

        <h3>${cancion.titulo}</h3>

        <p>${cancion.artista}</p>

        <button class="fav-btn">❤</button>

        <button class="playlist-btn">➕</button>

        <button class="delete-btn">🗑️</button>

    `;

    const favBtn = card.querySelector(".fav-btn");

    const playlistBtn = card.querySelector(".playlist-btn");

    const deleteBtn = card.querySelector(".delete-btn");

    deleteBtn.style.display = "none";

    if(playlistSeleccionada){

    deleteBtn.style.display = "inline-block";

    }

    if(favoritos.includes(cancion.titulo)){

        favBtn.innerHTML = "💚";

    }else{

        favBtn.innerHTML = "❤";

    }

    favBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    if(favoritos.includes(cancion.titulo)){

        favoritos = favoritos.filter(
            fav => fav !== cancion.titulo
        );

        favBtn.innerHTML = "❤";

        mostrarNotificacion(
    "❌ Eliminada de favoritos"
    );

    }else{

        favoritos.push(cancion.titulo);

        favBtn.innerHTML = "💚";

        mostrarNotificacion(
    "✅ Agregada a favoritos"
    );

    }

    localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
    );

});

deleteBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    if(!playlistSeleccionada) return;

    playlistSeleccionada.canciones =
    playlistSeleccionada.canciones.filter(
        titulo => titulo !== cancion.titulo
    );

    localStorage.setItem(
        "playlists",
        JSON.stringify(playlists)
    );

    const cancionesPlaylist =
    canciones.filter(song =>
        playlistSeleccionada.canciones.includes(
            song.titulo
        )
    );

    mostrarCards(cancionesPlaylist);

    mostrarPlaylists();

});

playlistBtn.addEventListener("click", (e) => {

    e.stopPropagation();

    if(playlists.length === 0){

        alert("Primero crea una playlist");
        return;

    }

    const nombres = playlists.map(
        playlist => playlist.nombre
    );

    const seleccion = prompt(
        "¿A qué playlist deseas agregarla?\n\n" +
        nombres.join("\n")
    );

    if(!seleccion) return;

    const playlistElegida = playlists.find(
        playlist =>
        playlist.nombre.toLowerCase() ===
        seleccion.toLowerCase()
    );

    if(!playlistElegida){

        mostrarNotificacion(
            "❌ Playlist no encontrada"
        );

        return;

    }

    if(
        playlistElegida.canciones.includes(
            cancion.titulo
        )
    ){

        mostrarNotificacion(
            "⚠️ Esa canción ya está en la playlist"
        );

        return;

    }

    playlistElegida.canciones.push(
        cancion.titulo
    );

    localStorage.setItem(
        "playlists",
        JSON.stringify(playlists)
    );

    mostrarPlaylists();

    mostrarNotificacion(
        `➕ Agregada a ${playlistElegida.nombre}`
    );

});

    card.addEventListener("click", () => {

    indice = canciones.findIndex(
        song =>
        song.titulo === cancion.titulo
    );

    indiceListaActual = listaActual.findIndex(
        song =>
        song.titulo === cancion.titulo    
    );

    cargarCancion();

    document
    .querySelectorAll(".card")
    .forEach(c => c.classList.remove("activa"));

    card.classList.add("activa");

    });

    cards.appendChild(card);

});


}
 
function restaurarVista(vista){

    if(vista.tipo === "albumes"){

        mostrarAlbumes(false);
        sectionTitle.innerHTML =
        "💿 Álbumes";

    }

    else if(vista.tipo === "album"){

        mostrarCards(vista.datos);

        sectionTitle.innerHTML =
        `💿 Álbum: ${vista.datos[0].album}`;

    }

    else if(vista.tipo === "favoritos"){

        mostrarCards(vista.datos);

        sectionTitle.innerHTML =
        "💚 Mis Favoritos";

    }

    else if(vista.tipo === "recientes"){

        mostrarCards(vista.datos);

        sectionTitle.innerHTML =
        "🕒 Recientes";

    }

    else if(vista.tipo === "todas"){

        mostrarAlbumes(false);

        sectionTitle.innerHTML =
        "💿 Álbumes";

    }

    else if(vista.tipo === "playlist"){

        mostrarCards(vista.datos.canciones);

        sectionTitle.innerHTML =
        `🎵 Playlist: ${vista.datos.nombre}`;

    }

}

playBtn.addEventListener("click", () => {

    if(reproduciendo === false){

        audio.play();

        document.title = `▶ ${canciones[indice].titulo} - ${canciones[indice].artista}`;

        playBtn.classList.remove("fa-play");

        playBtn.classList.add("fa-pause");

        reproduciendo = true;

    }else{

        audio.pause();

        document.title = "⏸ Spotify Clon";

        playBtn.classList.remove("fa-pause");

        playBtn.classList.add("fa-play");

        reproduciendo = false;
    }

});

audio.addEventListener("timeupdate", () => {

    progress.max = audio.duration;

    progress.value = audio.currentTime;

});

progress.addEventListener("input", () => {

    audio.currentTime = progress.value;

});

changeBtn.addEventListener("click", () => {

    shuffle = !shuffle;

    localStorage.setItem(
        "shuffle",
        JSON.stringify(shuffle)
    );

    if(shuffle){

        changeBtn.style.color = "#1db954";

    }else{

        changeBtn.style.color = "white";

    }

});

prevBtn.addEventListener("click", () => {

    indiceListaActual--;

    if(indiceListaActual < 0){

        indiceListaActual =
        listaActual.length - 1;

    }

    const anterior =
    listaActual[indiceListaActual];

    indice = canciones.findIndex(
        song =>
        song.titulo === anterior.titulo
    );

    cargarCancion();

});

nextBtn.addEventListener("click", () => {

    if(shuffle){

        indiceListaActual =
        Math.floor(
            Math.random() *
            listaActual.length
        );

    }else{

        indiceListaActual++;

        if(
            indiceListaActual >=
            listaActual.length
        ){

            indiceListaActual = 0;

        }

    }

    const siguiente =
    listaActual[indiceListaActual];

    indice = canciones.findIndex(
        song =>
        song.titulo === siguiente.titulo
    );

    cargarCancion();

});

mostrarAlbumes();

mostrarPlaylists();

cargarCancion();

audio.pause();

audio.volume = volumenGuardado;
volume.value = volumenGuardado;

playBtn.classList.remove("fa-pause");
playBtn.classList.add("fa-play");

reproduciendo = false;

if(repetir){

    repeatBtn.style.color = "#1db954";

}

if(shuffle){

    changeBtn.style.color = "#1db954";

}

audio.addEventListener("ended", () => {

    if(repetir){

        audio.currentTime = 0;
        audio.play();

    }else{

        if(shuffle){

            indiceListaActual = Math.floor(
                Math.random() * listaActual.length
            );

        }else{

            indiceListaActual++;

            if(
                indiceListaActual >=
                listaActual.length
            ){

                indiceListaActual = 0;

            }

        }

        const siguiente =
        listaActual[indiceListaActual];

        indice = canciones.findIndex(
            song =>
            song.titulo === siguiente.titulo
        );

        cargarCancion();

    }

});
volume.addEventListener("input", () => {

    audio.volume = volume.value;

    localStorage.setItem(
    "volumen",
    volume.value
    );

    if(volume.value == 0){

        volumeIcon.classList.remove(
            "fa-volume-high",
            "fa-volume-low"
        );

        volumeIcon.classList.add(
            "fa-volume-xmark"
        );

    }else if(volume.value < 0.5){

        volumeIcon.classList.remove(
            "fa-volume-high",
            "fa-volume-xmark"
        );

        volumeIcon.classList.add(
            "fa-volume-low"
        );

    }else{

        volumeIcon.classList.remove(
            "fa-volume-low",
            "fa-volume-xmark"
        );

        volumeIcon.classList.add(
            "fa-volume-high"
        );

    }

});

audio.addEventListener("timeupdate", () => {

    progress.max = audio.duration;
    progress.value = audio.currentTime;

    let actualMin = Math.floor(audio.currentTime / 60);
    let actualSeg = Math.floor(audio.currentTime % 60);

    let totalMin = Math.floor(audio.duration / 60) || 0;
    let totalSeg = Math.floor(audio.duration % 60) || 0;

    if(actualSeg < 10){
        actualSeg = "0" + actualSeg;
    }

    if(totalSeg < 10){
        totalSeg = "0" + totalSeg;
    }

    time.innerHTML =
    `${actualMin}:${actualSeg} / ${totalMin}:${totalSeg}`;

});

search.addEventListener("input", () => {

    const texto = search.value.toLowerCase();

    const resultado = canciones.filter(cancion =>

        cancion.titulo.toLowerCase().includes(texto) ||

        cancion.artista.toLowerCase().includes(texto)

    );

    mostrarCards(resultado);

});

repeatBtn.addEventListener("click", () => {

    repetir = !repetir;

    localStorage.setItem(
    "repetir",
    JSON.stringify(repetir)
    );

    if(repetir){

        repeatBtn.style.color = "#1db954";

    }else{

        repeatBtn.style.color = "white";

    }

});

verFavoritos.addEventListener("click", () => {

    sectionTitle.innerHTML = "💚 Mis Favoritos";
    playlistSeleccionada = null;
    playlistAbierta = null;

    const cancionesFavoritas = canciones.filter(cancion =>

        favoritos.includes(cancion.titulo)

    );

    guardarVista("favoritos", cancionesFavoritas);
    mostrarCards(cancionesFavoritas);

});

verTodas.addEventListener("click", () => {

    sectionTitle.innerHTML = "💿 Álbumes";

    playlistSeleccionada = null;
    playlistAbierta = null;

    guardarVista("todas");
    mostrarAlbumes();

});

volumeIcon.addEventListener("click", () => {

    if(audio.volume > 0){

        audio.volume = 0;

        volume.value = 0;

        volumeIcon.classList.remove(
            "fa-volume-high",
            "fa-volume-low"
        );

        volumeIcon.classList.add(
            "fa-volume-xmark"
        );

    }else{

        audio.volume = 1;

        volume.value = 1;

        volumeIcon.classList.remove(
            "fa-volume-xmark"
        );

        volumeIcon.classList.add(
            "fa-volume-high"
        );

    }

});

verRecientes.addEventListener("click", () => {

    sectionTitle.innerHTML = "🕒 Recientes";
    playlistSeleccionada = null;
    playlistAbierta = null;

    const cancionesRecientes = recientes.map(
        tituloReciente =>

        canciones.find(
            cancion =>
            cancion.titulo === tituloReciente
        )

    );

    guardarVista("recientes", cancionesRecientes);
    mostrarCards(
    cancionesRecientes.filter(
        cancion => cancion !== undefined
    )
);

});

crearPlaylistBtn.addEventListener("click", () => {

    const nombre =
    playlistName.value.trim();

    if(nombre === "") return;

    if(
    playlists.some(
        playlist =>
        playlist.nombre.toLowerCase() ===
        nombre.toLowerCase()
    )
    ){
    mostrarNotificacion(
        "⚠️ Ya existe una playlist con ese nombre"
    );
    return;
    }

    playlists.push({

        nombre: nombre,

        canciones: []

    });

    localStorage.setItem(

        "playlists",

        JSON.stringify(playlists)

    );

    mostrarPlaylists();

    playlistName.value = "";

});

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );

    if(
        document.body.classList.contains(
            "light-mode"
        )
    ){

        localStorage.setItem(
            "tema",
            "claro"
        );

        themeBtn.innerHTML =
        "☀️ Modo Claro";

    }else{

        localStorage.setItem(
            "tema",
            "oscuro"
        );

        themeBtn.innerHTML =
        "🌙 Modo Oscuro";

    }

});

backBtn.addEventListener("click", () => {

    if(posicionHistorial <= 0) return;

    posicionHistorial--;

    restaurarVista(
        historial[posicionHistorial]
    );

});

forwardBtn.addEventListener("click", () => {

    if(
        posicionHistorial >=
        historial.length - 1
    ) return;

    posicionHistorial++;

    restaurarVista(
        historial[posicionHistorial]
    );

});

inicioBtn.addEventListener("click", (e) => {

    e.preventDefault();

    playlistSeleccionada = null;
    playlistAbierta = null;

    sectionTitle.innerHTML =
    "💿 Álbumes";

    guardarVista("albumes");

    mostrarAlbumes();

});

buscarBtn.addEventListener("click", (e) => {

    e.preventDefault();

    search.focus();

});

bibliotecaBtn.addEventListener("click", (e) => {

    e.preventDefault();

    playlistAbierta = null;
    playlistSeleccionada = null;

    mostrarBiblioteca();

});