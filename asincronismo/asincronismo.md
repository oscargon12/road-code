# Asincronismo

JS corre una tarea a la vez
Ejemplo aeropuerto:

```
Pista = Thread Hilo
Torre de control = Event loop
Aviones que entran = tareas
Aviones que salen = tareas
El event loop controla que no entren o salgan más de dos aviones
```

### Memory heap

Espacio de memoria compartido para toda la aplicación

## Inicializando repo

**git init** = Inicia reporitorio local

**npm init** = Permite establecer datos del proyecto (Nombre, descripción, entry point scr/index.js)

**Code .**

## Configurando Scripts

Voy a package.json y en los scripts elimino test y creo:

```
"callback": "node src/callback/index.js"
```

Para no tener que escribir eso cada vez que se quiera ejecutar

Luego, para ejecutar el script en node se corre con

```
npm run callback
```

Que es el nombre del script

## Creando callbacks
