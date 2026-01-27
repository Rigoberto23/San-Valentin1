const app = document.getElementById("app");

const recuerdos = [
  { tipo: "foto", src: "img1.jpeg", frase: "Tu sonrisa es mi lugar favorito ❤️" },
  { tipo: "foto", src: "img2.jpeg", frase: "Así se ve alguien cuando ilumina mi vida ✨" },
  { tipo: "video", src: "vid1.mp4", frase: "Este momento vive en mi corazón 🎥💕" },
  { tipo: "foto", src: "img3.jpeg", frase: "No necesito más, si eres tú 💖" },
  { tipo: "video", src: "vid2.mp4", frase: "Cada risa contigo vale oro 😍" },
  { tipo: "foto", src: "img4.jpeg", frase: "Siempre tú, en todas mis versiones 💫" },
  { tipo: "video", src: "vid3.mp4", frase: "Contigo todo tiene sentido 💕" },
  { tipo: "foto", src: "img5.jpeg", frase: "Te elijo hoy y siempre ❤️" }
];

let indice = 0;

/* 🟣 CARTITA */
function mostrarCartita() {
  app.innerHTML = `
    <div class="center fade-in">
      <div class="cartita-overlay">
        <div class="dedicatoria">
          <span>De Rigoberto</span>
          <span>Para Alexa</span>
        </div>

        <p>Te tengo una sorpresa…</p>
        <p>No es por una fecha.</p>
        <p>Es porque te amo ❤️</p>

        <button onclick="mostrarRazones()">Descubrir 💌</button>
      </div>
    </div>
  `;
}

/* 💖 RAZONES */
function mostrarRazones() {
  app.innerHTML = `
    <div class="center fade-in">
      <div class="razones-overlay">
        <h2>Razones por las que te amo</h2>

        <div class="razones-grid">
          <div>Porque eres tú 💕</div>
          <div>Porque tu sonrisa me calma ✨</div>
          <div>Porque contigo soy yo 💫</div>
          <div>Porque haces hogar mi caos 🫶</div>
        </div>

        <button onclick="iniciarRecuerdos()">Continuar 💕</button>
      </div>
    </div>
  `;
}

/* 📸🎥 RECUERDOS */
function iniciarRecuerdos() {
  indice = 0;
  mostrarRecuerdo();
}

function mostrarRecuerdo() {
  app.innerHTML = "";

  const cont = document.createElement("div");
  cont.className = "center fade-in";

  let media;
  const item = recuerdos[indice];

  if (item.tipo === "foto") {
    media = document.createElement("img");
    media.src = item.src;
    media.className = "photo";
  } else {
    media = document.createElement("video");
    media.src = item.src;
    media.className = "video";
    media.autoplay = true;
    media.loop = true;
    media.muted = true;
    media.controls = true;
  }

  const frase = document.createElement("div");
  frase.className = "frase";
  frase.innerText = item.frase;

  const btn = document.createElement("button");
  btn.innerText = indice < recuerdos.length - 1 ? "Siguiente 💕" : "Final ❤️";

  cont.append(media, frase, btn);
  app.appendChild(cont);

  setTimeout(() => media.classList.add("show"), 100);

  btn.onclick = () => {
    indice++;
    indice < recuerdos.length ? mostrarRecuerdo() : mostrarFinal();
  };
}

function mostrarFinal() {
  app.innerHTML = `
    <div class="center fade-in">
      <h1>Te amo ❤️</h1>
      <p>Gracias por existir en mi vida.</p>
      <b>Rigoberto</b>
    </div>
  `;
}

/* 🚀 ARRANCA */
mostrarCartita();




