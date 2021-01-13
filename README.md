# Clase Callbacks y Promises

## Callbacks
    * callback recibe siempre 2 parametros
    * callback puede llamarse callback o cb
    * Sintaxis por convencion de un callback (Convencion = acuerdo general): **callback(error, data)**

    [Auxiliar Info](https://anexsoft.com/javascript-que-son-como-usar-y-ejemplos-del-uso-de-callbacks)

## Promesas
    Funciones:
        * resolve()   --> una funcion que debemos ejecutar cuando queremos resolver una promesa 
        * reject()    --> una funcion que ejecutamos cuando queremos rechazar una promesa       
    
    Status posibles de las Promesas:
        1.- pending
        2.- resolved    
        3.- rejected    

    Un objeto promesa tiene 2 funciones
    * then()  --> que se ejecuta cuando la promesa se resolvio
    * catch() --> que se ejecuta cuando la promesa se rechazo

    Promesa resuelta significa  => que cambio el estado de pending a resolved
    Promesa rechazada significa => el cambio de estado de pending a rejected

    Promificacion: Es el proceso de volver promesa algo que no lo era inicialmente

    Tecnica chaining (chaining methods): Anidacion de métodos con el mismo objeto
    ```
        promesaConstruir
            .then(() => {
            console.log("se resolvio :D");
            console.log("then promesaConstruie: ", promesaConstruir);
            })
            .catch(() => {
            console.log("se rechazo :c");
            });
    ```

    Riesgo de callback hell: Anidación excesiva de funciones haciendo el código difícil de leer y mantener.

    **¡Solucion!** Usar <<sync / await>>
        Donde yo uso await, debo marcar la funcion contenedora (del await) como asyncrona.
        La funcion que esta marcada con async, se vuelve una funcion que regresa una promesa
        ```
            async function principal() {
                const muroConstruido = await construir(muro);
                const muroAplanado = await aplanar(muroConstruido);
                const muroPintado = await pintar(muroAplanado);
                return muroPintado;
            }
            
            principal()
                .then((resultado) => console.log("todo cool", resultado))
                .catch((error) => console.error("falle :c ", error));
        ```    
[Auxiliar Info](https://platzi.com/blog/que-es-y-como-funcionan-las-promesas-en-javascript/)

--
⌨️ con ❤️ por [veroxcrown](https://github.com/veroxcrown) 😊