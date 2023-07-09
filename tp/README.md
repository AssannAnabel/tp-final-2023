

## ACTIVITY CARD

Fabricio Cordoba, Santiago Garda, Anabel Assann

**Presentación:**
¡Bienvenidos a nuestro proyecto de tarjetas de tareas con React! En este proyecto, hemos creado una aplicación intuitiva y fácil de usar que te permite organizar tus tareas de manera eficiente y recordar tus actividades diarias.
Nuestras tarjetas de tareas te ayudarán a mantener todo en orden.

**Tecnologías:**
	**React
	html
	css**
***Operaciones CRUD
Rutas Protegidas***

*~~**Dependencias Instaladas:***~~

**Node.js:**
Entorno de ejecución para ejecutar aplicaciones Javascript.
**React con Vit**: => `npm create vite@latest (nombre del proyecto) -- --template react`
ejecutar*=> cd nombre de la carpeta principal => `npm run dev`
npm i react-router-dom` => import {Routes,Route} from 'react-router-dom'
nos facilita el proceso de definir las rutas de navegación dentro de nuestra aplicación
- **React/icons**
para instalar:=>`npm install react-icons --save`
import { IconName } from "react-icons/" (entre las llaves el nombre del icono que se eligió)
- **id para las tarjetas**

`npm i uuid` => import{ v4 as uuidv4} from ‘uuid’

 - ***característica: Responsive***

**Trabajamos con MockApi**  UrlMockApi:
[https://647dd4d6af984710854a6fcc.mockapi.io/user-card]

Instrucciones de uso:

Al entrar al proyecto empezaran con nuestro Login de la pagina con usuarios ya registrados:

- Email: santi_mj09@hotmail.com

- Contraseña: 123456

- Email: assannanabel@gmail.com

- Contraseña: ana123

- Email": fabricio_007_22@hotmail.com

	Contraseña: 951325463,

O bien pueden ir a Registrarse y llenar el formulario de registro, una vez registrado volverán al respectivo Login donde ya podran iniciar sesión con su email y contraseña.

Una vez iniciado sesion pobra ver la pagina principal donde arriba de todo esta el Header con el logo de la pagina, las secciones "Inicio", "Nosotros" y "Contacto".

En Inicio es donde vas a poder administrar tanto tu cuenta para cambiar tus datos y como tus tareas donde podrás agregar un titulo en general en cada uno de ellas, al agregar tareas podrás hacerle click para marcarla como "tarea completada" y la opción de poder eliminar también.

En "Nosotros" podrás ver la informacion del proyecto y los integrantes de quienes la hicieron.

Y en "Contacto" tendras un formulario donde podras mandarnos un mensaje.
