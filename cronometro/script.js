
let segundos = 0;
let intervalo;




function start(){ 
    if (!intervalo) { 
    intervalo = setInterval(() => {
    segundos++;
    let minutos = Math.floor(segundos / 60);
    let seg = segundos % 60;
    let formatado = `${minutos.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
    document.getElementById("tempo").textContent = formatado;
}, 1000);
}
}

function stop() {
    clearInterval(intervalo);
    intervalo = null;
}

function reset() {
    stop();
    segundos = 0;
    document.getElementById("tempo").textContent = "00:00";
}

//Analisar dps

// let current = new Date()
// current.setHours(0, 0, 0, 0) 
 
// function tick() {
//   current = new Date(current.getTime() + 1000)
//   console.log(current.toTimeString().split(' ')[0])
// }
 
// setInterval(tick, 1000)