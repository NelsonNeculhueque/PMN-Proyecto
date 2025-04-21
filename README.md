# 📚 CapacitApp - Plataforma de Capacitación Empresarial

CapacitApp es una aplicación web enfocada en ofrecer un sistema de capacitación intuitivo y moderno para empresas. Su objetivo es permitir a los empleados acceder a cursos, visualizar catálogos, gestionar sus calendarios de formación y revisar sus calificaciones, todo desde un mismo entorno.

---

## 🧑‍💼 Autor del Proyecto

- **Nombre:** Nelson Neculhueque  
- **Nombre original del proyecto:** Sistema de Capacitación Empresarial  
- **Nombre final del proyecto:** CapacitApp

---

## 🎯 Objetivo del Proyecto

El propósito de CapacitApp es **beneficiar a las empresas y sus trabajadores** mediante una plataforma que facilite el acceso a contenidos educativos y procesos de capacitación interna. 

La aplicación permite a los usuarios:

- Iniciar sesión .
- Navegar entre diferentes secciones como cursos, catálogos de formación, calendarios de actividades y calificaciones.
- Acceder a contenidos de manera sencilla, gracias a una interfaz clara e intuitiva.

---

## 🛠️ Tecnologías Utilizadas

CapacitApp fue desarrollada utilizando tecnologías modernas del ecosistema web:

| Herramienta | Uso |
|-------------|-----|
| **React** | Librería principal para construir la interfaz de usuario |
| **React Router** | Manejo de rutas y navegación entre pantallas |
| **JavaScript / JSX** | Lenguaje principal para el desarrollo de componentes |
| **HTML & CSS** | Estructura y estilo básico de la interfaz |
| **Vercel** | Plataforma utilizada para desplegar la aplicación en línea |

---

## 🧭 Estructura de Navegación

La navegación dentro de CapacitApp está diseñada para ser fluida y coherente. El flujo principal es:

1. **Login**: Pantalla de autenticación del usuario.
2. **Panel Principal**: Desde aquí, el usuario puede acceder a distintas secciones mediante la barra de navegación lateral.

Las secciones disponibles en el panel son:

- **Inicio / Panel**
- **Cursos**
- **Catálogo**
- **Calendario**
- **Notas**

Cada sección es un componente independiente, facilitando la escalabilidad del proyecto.

---

## 📁 Organización del Proyecto

El proyecto está organizado en base a buenas prácticas para aplicaciones React:

```plaintext
/src
├── components
│   ├── Login.jsx            # Pantalla de inicio de sesión
│   ├── Panel.jsx            # Panel de navegación general
│   ├── Cursos.jsx           # Sección de cursos disponibles
│   ├── Catalogo.jsx         # Catálogo de capacitaciones
│   ├── Calendario.jsx       # Calendario de actividades
│   └── Notas.jsx            # Sección para visualizar notas
├── App.js                   # Componente raíz que contiene las rutas
└── index.js                 # Punto de entrada de la aplicación
