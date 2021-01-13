//Promesas
//resolve   --> una funcion que debemos ejecutar cuando queremos resolver una promesa
//reject    --> funcion que ejecutamos cuando queremos rechazar una promesa
//Status promises
//1.- pending
//2.- resolved
//3.- rejected

/*
function construirCallback(muroAConstruir, callback) {
    setTimeout(() => {
      muroAConstruir.construido = true;
      let error = null;
      if (muroAConstruir.construido === false) {
        error = "No se pudo construir";
      }
      callback(error, muroAConstruir);
    }, 1000);
  }

new Promise((resolve, reject) => {
  if (true) {
    resolve();
  } else {
    reject();
  }
});
*/

// un objeto promesa tiene 2 funciones
// then() que se ejecuta cuando la promesa se resolvio
// catch() que se ejecuta cuando la promesa se rechazo

// resolver => el cambio de estado de pending a resolved
// rechazar => el cambio de estado de pending a rejected

/*
function promesa() {
  return new Promise((resolve, reject) => {});
}

promesa();
*/

const muro = {
  construido: false,
  aplanado: false,
  pintado: false,
};

/*promificacion: es el proceso de volver promesa 
algo que no lo era inicialmente*/

function construir(muroAConstruir) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muroAConstruir.construido = true;
      if (!muroAConstruir.construido) {
        reject("No se pudo construir");
        return;
      }
      resolve(muroAConstruir);
    }, 1000);
  });
}

function aplanar(muroAAplanar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muroAAplanar.aplanado = true;
      if (!muroAAplanar.aplanado) {
        reject("No se pudo aplanar");
        return;
      }
      resolve(muroAAplanar);
    }, 2000);
  });
}

function pintar(muroAPintar) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      muroAPintar.pintado = true;
      if (!muroAPintar.pintado) {
        reject("No se pudo pintar");
        return;
      }
      resolve(muroAPintar);
    }, 2000);
  });
}

/*Modo 1
const promesaConstruir = construir(muro);

//tecnica chaining, chaining methods anidacion de methodos con el mismo objeto
promesaConstruir
  .then(() => {
    console.log("se resolvio :D");
    console.log("then promesaConstruie: ", promesaConstruir);
  })
  .catch(() => {
    console.log("se rechazo :c");
  });

console.log("promesaConstruir:", promesaConstruir);
*/

/*
//Modo 2 (Simplificando quitando la creacion de una variable para recibir return de una funcion)
//tecnica chaining, chaining methods anidacion de methodos con el mismo objeto
construir(muro)
  //funcion todo ok
  .then((muroConstruido) => {
    console.log("se resolvio :D", muroConstruido);

    aplanar(muroConstruido)
      .then((muroAplanado) => {
        console.log("se resolvio :D", muroAplanado);

        pintar(muroAplanado)
          .then((muroPintado) => {
            console.log("se resolvio :D", muroPintado);
          })
          //funcion algo salio mal
          .catch((error) => {
            console.log("se rechazo :c", error);
          });
      })

      .catch((error) => {
        console.log("se rechazo :c", error);
      });
  })

  .catch((error) => {
    console.log("se rechazo :c", error);
  });
  */

/*
async / await:
Donde yo uso await, 
debo marcar la funcion contenedora (del await) como asyncrona.
La funcion que esta marcada con async,
se vuelve una funcion que regresa una promesa
*/

async function principal() {
  const muroConstruido = await construir(muro);
  const muroAplanado = await aplanar(muroConstruido);
  const muroPintado = await pintar(muroAplanado);
  console.log("FIN", muroPintado);
}

principal()
  .then(() => console.log("todo cool"))
  .catch(() => console.error("falle :c "));
