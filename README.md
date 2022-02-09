# Proyecto módulo 3 y 4: Truthy && the Booleans

Proyecto realizado para el tercer y cuarto módulo del bootcamp de Adalab.

En este proyecto se nos ha facilitado un proyecto realizado por otras compañeras, lo hemos pasado a React y hemos desarrollado nuestro primer servidor web.

[Proyecto heredado: Truthy && the Booleans](http://beta.adalab.es/project-promo-o-module-2-team-2/)

## Componentes:

- Mireia Suero 👉🏼 https://github.com/mireiasuefra

- Rocio Dols 👉🏼 https://github.com/RocioDols

- Paula de la Victoria 👉🏼 https://github.com/pauladelavictoria

- Noelia PH 👉🏼 https://github.com/NoeliaPH

- Ico Lizhen 👉🏼 https://github.com/icoliz

[Kanban de nuestro proyecto](https://github.com/Adalab/Adalab-project-promo-o-module-4-team-8/projects/1)

## React :rocket:

Estudiamos el proyecto heredado, lo analizamos e hicimos los ajustes necesarios para adaptarlo a React:

- [x] Migramos el proyecto heredado de nuestras compañeras.
- [x] Dividimos la aplicación en componentes y utilizamos `props` y `lifting` para utilizar sus propiedades en componentes hijas.
- [x] Implementamos la funcionalidad del formulario (paletas, campos del formulario, preview, paletas, desplegables y botón de reset) utilizando las variables estado de React y vigilamos cambios con las interacciones de la usuaria.
- [x] Actualizamos el componente de la imagen.
- [x] Implementamos el `Local Storage`.
- [x] Realizamos una petición al servidor para publicar nuestra tarjeta e incluimos la funcionalidad de compartir en Twitter.
- [x] Utilizamos `Router` para cargar nuestra landing.

## Node JS :computer:

Tras finalizar nuestra aplicación en React, creamos un servidor para poder personalizar su respuesta:

- [x] Utilizamos librerías para facilitar la implementación del back-end. [^1]
- [x] Creamos una API para poder crear las tarjetas y un endpoint para poder acceder a ellas.
- [x] Realizamos comprobaciones sobre la información recibida y enviamos una respuesta al front.
- [x] Creamos un servidor de estáticos para el front y sus estilos.
- [x] Creamos un motor de plantillas para las tarjetas creadas.
- [x] Guardamos las tarjetas en una base de datos (`SQLite`). Esta información se puede recuperar para volver a verla.

[^1]: `Express JS` y `cors` para montar un servidor, `uuid` para crear identificadores únicos para nuestra base de datos, `EJS` para la plantilla de nuestras tarjetas
