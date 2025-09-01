// === CONFIGURACIÓN DE GITHUB ===
const GITHUB_USER = "psycologiamaru-cmyk";           // Tu usuario de GitHub
const GITHUB_REPO = "analisis-de-beck.com";         // Nombre de tu repositorio
const GITHUB_FILE = "resultados.csv";               // Archivo CSV
const GITHUB_TOKEN = "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"; // Tu token personal

// URL pública para leer (jsDelivr)
const URL_PUBLICA = `https://cdn.jsdelivr.net/gh/${GITHUB_USER}/${GITHUB_REPO}/${GITHUB_FILE}`;

// URL de la API de GitHub para leer/escribir
const URL_API = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${GITHUB_FILE}`;

// === PREGUNTAS Y TÍTULOS BDI ===
const titulosBDI = [
  "Tristeza", "Pesimismo", "Fracaso", "Pérdida de Placer", "Sentimientos de Culpa",
  "Sentimientos de Castigo", "Disconformidad con uno mismo.", "Autocrítica",
  "Pensamientos o Deseos Suicidas", "Llanto", "Agitación", "Pérdida de Interés",
  "Indecisión", "Desvalorización", "Pérdida de Energía", "Cambios en los Hábitos de Sueño",
  "Irritabilidad", "Cambios en el Apetito", "Dificultad de Concentración",
  "Cansancio o Fatiga", "Pérdida de Interés en el Sexo"
];

const preguntasBDI = [
  ["No me siento triste.", "Me siento triste gran parte del tiempo.", "Me siento triste todo el tiempo.", "Me siento tan triste o soy tan infeliz que no puedo soportarlo."],
  ["No estoy desalentado respecto de mi futuro.", "Me siento más desalentado respecto de mi futuro que lo que solía estarlo.", "No espero que las cosas funcionen para mí.", "Siento que no hay esperanza para mi futuro y que sólo puede empeorar."],
  ["No me siento como un fracasado.", "He fracasado más de lo que hubiera debido.", "Cuando miro hacia atrás, veo muchos fracasos.", "Siento que como persona soy un fracaso total."],
  ["Obtengo tanto placer como siempre por las cosas de las que disfruto.", "No disfruto tanto de las cosas como solía hacerlo.", "Obtengo muy poco placer de las cosas que solía disfrutar.", "No puedo obtener ningún placer de las cosas de las que solía disfrutar."],
  ["No me siento particularmente culpable.", "Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.", "Me siento bastante culpable la mayor parte del tiempo.", "Me siento culpable todo el tiempo."],
  ["No siento que esté siendo castigado.", "Siento que tal vez pueda ser castigado.", "Espero ser castigado.", "Siento que estoy siendo castigado."],
  ["Siento acerca de mí lo mismo que siempre.", "He perdido la confianza en mí mismo.", "Estoy decepcionado conmigo mismo.", "No me gusto a mí mismo."],
  ["No me critico ni me culpo más de lo habitual.", "Estoy más crítico conmigo mismo de lo que solía estarlo.", "Me critico a mí mismo por todos mis errores.", "Me culpo a mí mismo por todo lo malo que sucede."],
  ["No tengo ningún pensamiento de matarme.", "He tenido pensamientos de matarme, pero no lo haría.", "Querría matarme.", "Me mataría si tuviera la oportunidad de hacerlo."],
  ["No lloro más de lo que solía hacerlo.", "Lloro más de lo que solía hacerlo.", "Lloro por cualquier pequeñez.", "Siento ganas de llorar pero no puedo."],
  ["No estoy más inquieto o tenso que lo habitual.", "Me siento más inquieto o tenso que lo habitual.", "Estoy tan inquieto o agitado que me es difícil quedarme quieto.", "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo."],
  ["No he perdido el interés en otras actividades o personas.", "Estoy menos interesado que antes en otras personas o cosas.", "He perdido casi todo el interés en otras personas o cosas.", "Me es difícil interesarme por algo."],
  ["Tomo mis propias decisiones tan bien como siempre.", "Me resulta más difícil que de costumbre tomar decisiones.", "Encuentro mucha más dificultad que antes para tomar decisiones.", "Tengo problemas para tomar cualquier decisión."],
  ["No siento que yo no sea valioso.", "No me considero a mí mismo tan valioso y útil como solía considerarme.", "Me siento menos valioso cuando me comparo con otros.", "Siento que no valgo nada."],
  ["Tengo tanta energía como siempre.", "Tengo menos energía que la que solía tener.", "No tengo suficiente energía para hacer demasiado.", "No tengo energía suficiente para hacer nada."],
  ["No he experimentado ningún cambio en mis hábitos de sueño.", "Duermo un poco más o menos que lo habitual.", "Duermo mucho más o mucho menos que lo habitual.", "Duermo la mayor parte del día o me despierto muy temprano y no puedo volver a dormir."],
  ["No estoy más irritable que lo habitual.", "Estoy más irritable que lo habitual.", "Estoy mucho más irritable que lo habitual.", "Estoy irritable todo el tiempo."],
  ["No he experimentado ningún cambio en mi apetito.", "Mi apetito es un poco menor o mayor que lo habitual.", "Mi apetito es mucho menor o mayor que lo habitual.", "No tengo apetito en absoluto o quiero comer todo el día."],
  ["Puedo concentrarme tan bien como siempre.", "No puedo concentrarme tan bien como habitualmente.", "Me es difícil mantener la mente en algo por mucho tiempo.", "Encuentro que no puedo concentrarme en nada."],
  ["No estoy más cansado o fatigado que lo habitual.", "Me fatigo o me canso más fácilmente que lo habitual.", "Estoy demasiado fatigado para hacer muchas cosas.", "Estoy demasiado fatigado para hacer la mayoría de las cosas que solía hacer."],
  ["No he notado ningún cambio reciente en mi interés por el sexo.", "Estoy menos interesado en el sexo de lo que solía estarlo.", "Estoy mucho menos interesado en el sexo.", "He perdido completamente el interés en el sexo."]
];

// === PREGUNTAS BAI ===
const preguntasBAI = [
  "Torpe o entumecido", "Acalorado", "Con temblor en las piernas", "Incapaz de relajarse",
  "Con temor a que ocurra lo peor", "Mareado, o que se le va la cabeza", "Con latidos del corazón fuertes y acelerados",
  "Inestable", "Atemorizado o asustado", "Nervioso", "Con sensación de bloqueo", "Con temblores en las manos",
  "Inquieto, inseguro", "Con miedo a perder el control", "Con sensación de ahogo", "Con temor a morir",
  "Con miedo", "Con problemas digestivos", "Con desvanecimientos", "Con rubor facial", "Con sudores, fríos o calientes"
];

const nivelesBAI = ["En absoluto", "Levemente", "Moderadamente", "Severamente"];

// === FUNCIONES GLOBALES ===
function mostrar(id) {
  document.querySelectorAll('main > div').forEach(d => d.style.display = 'none');
  const elemento = document.getElementById(id);
  if (elemento) elemento.style.display = 'block';
}

// === PARTE DEL ALUMNO ===
function comenzar() {
  const nombre1 = document.getElementById("nombreAlumno1").value.trim();
  const nombre2 = document.getElementById("nombreAlumno2").value.trim();
  const apellido1 = document.getElementById("apellidoAlumno1").value.trim();
  const apellido2 = document.getElementById("apellidoAlumno2").value.trim();
  const correo = document.getElementById("correoAlumno").value.trim();

  if (!nombre1) return alert("Por favor ingresa tu primer nombre.");
  if (!apellido1) return alert("Por favor ingresa tu primer apellido.");
  if (!correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) return alert("Por favor ingresa un correo válido.");

  const nombreCompleto = `${nombre1} ${nombre2} ${apellido1} ${apellido2}`.replace(/\s+/g, ' ').trim();

  window.datosAlumno = { 
    nombre: nombreCompleto,
    correo: correo 
  };

  cargarPreguntasBDI();
  mostrar("evaluacionBDI");
}

function cargarPreguntasBDI() {
  const bdi = document.getElementById("preguntasBDI");
  bdi.innerHTML = "";
  preguntasBDI.forEach((grupo, i) => {
    let html = `<div class='question'><p><strong>${i+1}. ${titulosBDI[i]}</strong></p>`;
    grupo.forEach((texto, j) => {
      html += `<label><input type='radio' name='bdi${i}' value='${j}'> ${texto}</label><br>`;
    });
    html += `</div>`;
    bdi.innerHTML += html;
  });
}

function cargarPreguntasBAI() {
  const bai = document.getElementById("preguntasBAI");
  bai.innerHTML = "";
  preguntasBAI.forEach((texto, i) => {
    let html = `<div class='question'><p><strong>${i+1}. ${texto}</strong></p>`;
    nivelesBAI.forEach((nivel, j) => {
      html += `<label><input type='radio' name='bai${i}' value='${j}'> ${j} ${nivel}</label><br>`;
    });
    html += `</div>`;
    bai.innerHTML += html;
  });
}

function enviarBDI() {
  const respuestas = [];
  for (let i = 0; i < preguntasBDI.length; i++) {
    const r = document.querySelector(`input[name='bdi${i}']:checked`);
    if (!r) return alert("Completa todas las preguntas de depresión.");
    respuestas.push(parseInt(r.value));
  }
  window.respuestasBDI = respuestas;
  cargarPreguntasBAI();
  mostrar("evaluacionBAI");
}

// === GUARDAR EN CSV EN GITHUB (CREA O ACTUALIZA) ===
async function enviarBAI() {
  const respuestasBAI = [];
  for (let i = 0; i < preguntasBAI.length; i++) {
    const r = document.querySelector(`input[name='bai${i}']:checked`);
    if (!r) return alert("Completa todas las preguntas de ansiedad.");
    respuestasBAI.push(parseInt(r.value));
  }

  const totalBDI = respuestasBDI.reduce((a, b) => a + b, 0);
  const totalBAI = respuestasBAI.reduce((a, b) => a + b, 0);

  const nivelBDI = totalBDI < 14 ? "Depresión mínima" : totalBDI < 20 ? "Depresión leve" : totalBDI < 29 ? "Depresión moderada" : "Depresión severa";
  const nivelBAI = totalBAI <= 21 ? "Ansiedad muy baja" : totalBAI <= 35 ? "Ansiedad moderada" : "Ansiedad severa";

  const orientacion = (totalBDI >= 20 || totalBAI >= 36)
    ? "\nPuedes acercarte al área de psicopedagogía (primer edificio, primer piso, lado derecho, al lado de coordinación) para recibir apoyo personalizado."
    : "";

  const texto = `Nombre: ${window.datosAlumno.nombre}
Correo: ${window.datosAlumno.correo}
Fecha: ${new Date().toLocaleString("es-ES")}

Inventario de Depresión de Beck (BDI)
Puntaje: ${totalBDI}
Interpretación: ${nivelBDI}

Inventario de Ansiedad de Beck (BAI)
Puntaje: ${totalBAI}
Interpretación: ${nivelBAI}${orientacion}`;

  document.getElementById("textoResultado").textContent = texto;

  try {
    // Intentar leer el archivo CSV desde GitHub
    const res = await fetch(URL_API, {
      headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
    });

    let contenidoActual = "Nombre,Correo,Fecha,TotalBDI,TotalBAI,RespuestasBDI,RespuestasBAI\n";
    let sha = undefined;

    if (res.ok) {
      const data = await res.json();
      contenidoActual = atob(data.content); // Decodificar de base64
      sha = data.sha;
    }
    // Si no existe, se creará con el encabezado

    // Crear nueva fila CSV
    const fila = [
      `"${window.datosAlumno.nombre.replace(/"/g, '""')}"`,
      `"${window.datosAlumno.correo.replace(/"/g, '""')}"`,
      `"${new Date().toLocaleString("es-ES").replace(/"/g, '""')}"`,
      totalBDI,
      totalBAI,
      `"${respuestasBDI.join(';')}"`,
      `"${respuestasBAI.join(';')}"`
    ].join(",");

    const nuevoContenido = contenidoActual + fila + "\n";

    // Codificar a Base64 correctamente
    const encoder = new TextEncoder();
    const bytes = encoder.encode(nuevoContenido);
    const base64Content = btoa(String.fromCharCode(...bytes));

    // Guardar en GitHub (PUT)
    await fetch(URL_API, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: `Nuevo resultado: ${window.datosAlumno.nombre}`,
        content: base64Content,
        sha // será undefined si es nuevo → GitHub lo crea
      })
    });

    mostrar("resultado");
  } catch (err) {
    console.error("Error al guardar en GitHub:", err);
    alert("No se pudo guardar en línea, pero puedes ver tu resultado.");
    mostrar("resultado");
  }
}

function descargarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const texto = document.getElementById("textoResultado").innerText;
  const lines = doc.splitTextToSize(texto, 180);
  doc.text(10, 20, lines);
  const nombreArchivo = window.datosAlumno.nombre.replace(/\s+/g, "_");
  doc.save(`resultado_${nombreArchivo}.pdf`);
}

// === ADMIN: CARGAR CSV Y MOSTRAR ===
async function accederAdmin() {
  const usuario = document.getElementById("usuarioAdmin").value.trim();
  const clave = document.getElementById("claveAdmin").value.trim();

  if (usuario === "administradorPSY" && clave === "12345") {
    mostrar("adminPanel");
    await cargarResultadosAdmin();
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

async function cargarResultadosAdmin() {
  const tabla = document.getElementById("tablaAdmin");
  tabla.innerHTML = "<tr><td colspan='7'>Cargando desde CSV...</td></tr>";

  try {
    const response = await fetch(URL_PUBLICA);
    if (!response.ok) throw new Error("No se pudo cargar el CSV");

    const texto = await response.text();
    const lineas = texto.trim().split("\n");

    if (lineas.length <= 1) {
      tabla.innerHTML = "<tr><td colspan='7'>No hay resultados registrados.</td></tr>";
      return;
    }

    // Eliminar encabezado
    const filas = lineas.slice(1);

    tabla.innerHTML = "";

    filas.reverse().forEach(linea => {
      const campos = linea.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      if (campos.length < 7) return;

      const [nombre, correo, fecha, totalBDI, totalBAI] = campos;

      const nivelBDI = parseInt(totalBDI) < 14 ? "Sin síntomas" :
                      parseInt(totalBDI) < 20 ? "Leve" :
                      parseInt(totalBDI) < 29 ? "Moderado" : "Grave";

      const nivelBAI = parseInt(totalBAI) <= 21 ? "Sin síntomas" :
                      parseInt(totalBAI) <= 35 ? "Moderado" : "Grave";

      const colorBDI = parseInt(totalBDI) >= 29 ? 'red' : parseInt(totalBDI) >= 20 ? 'orange' : 'green';
      const colorBAI = parseInt(totalBAI) > 35 ? 'red' : parseInt(totalBAI) > 21 ? 'orange' : 'green';

      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${nombre.replace(/"/g, '')}</td>
        <td>${correo.replace(/"/g, '')}</td>
        <td>${fecha.replace(/"/g, '')}</td>
        <td>${totalBAI} (${nivelBAI})</td>
        <td>${totalBDI} (${nivelBDI})</td>
        <td style="text-align: left; padding: 8px; font-size: 13px;">
          <strong style="color: ${colorBDI};">Depresión:</strong> ${nivelBDI} (${totalBDI}/84)<br>
          <strong style="color: ${colorBAI};">Ansiedad:</strong> ${nivelBAI} (${totalBAI}/66)
        </td>
        <td><button onclick="alert('El usuario descarga su propio PDF')">PDF</button></td>
      `;
      tabla.appendChild(fila);
    });
  } catch (err) {
    tabla.innerHTML = "<tr><td colspan='7'>Error al cargar datos.</td></tr>";
    console.error("Error al cargar CSV:", err);
  }
}

function filtrarResultados() {
  const filtro = document.getElementById("buscadorAdmin").value.toLowerCase();
  const filas = document.querySelectorAll("#tablaAdmin tr");
  filas.forEach(fila => {
    const texto = fila.textContent.toLowerCase();
    fila.style.display = texto.includes(filtro) ? "" : "none";
  });
}

function cerrarSesion() {
  mostrar("adminLogin");
  document.getElementById("usuarioAdmin").value = "";
  document.getElementById("claveAdmin").value = "";
}

// === ONLOAD ===
window.onload = function () {
  if (document.getElementById("inicio")) {
    mostrar("inicio");
  } else if (document.getElementById("adminLogin")) {
    mostrar("adminLogin");
  }
};
