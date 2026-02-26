# Mi Primera App React Native

Una aplicación móvil desarrollada con **React Native** y **Expo** como parte de la clase de Diseño Móvil en la Universidad FESC. La aplicación presenta un diseño minimalista y limpio, mostrando tecnologías clave utilizadas en el desarrollo móvil moderno.

## 📱 Características Principales

- **Interfaz Minimalista**: Diseño limpio sin emojis, con bordes sutiles y transiciones suaves
- **Modal de Bienvenida**: Sistema de navegación mediante modal interactivo
- **Información de Tecnologías**: Catálogo de herramientas usadas con niveles de dificultad
- **Responsivo**: Adaptable a diferentes tamaños de pantalla
- **Tema Claro/Oscuro**: Soporte automático para temas del sistema

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework para desarrollo móvil multiplataforma
- **Expo** - Plataforma para desarrollo con React Native
- **Expo Router** - Sistema de navegación basado en ubicaciones de archivos
- **TypeScript** - JavaScript con tipos estáticos
- **StyleSheet** - Estilos nativos de React Native

## 📸 Pantallas de la App

### Pantalla de Bienvenida

Pantalla inicial que muestra la tarjeta de bienvenida elegante con el botón "Comenzar".

![Pantalla de Bienvenida](./welcome-screen.png)

### Modal de Navegación

Después de presionar "Comenzar" y confirmar en el Alert, aparece un modal atractivo con las opciones de exploración disponibles.

![Modal de Navegación](./modal-screen.png)

### Pantalla de Tecnologías

Listado completo de las tecnologías utilizadas en el proyecto, con niveles de dificultad y descripciones detalladas de cada una.

![Tecnologías](./technologies-screen.png)

### Pantalla Acerca De

Información completa del proyecto, tecnologías utilizadas y datos del desarrollador.

![Acerca De](./about-screen.png)

## 🚀 Cómo Ejecutar la Aplicación

### Requisitos Previos

- Node.js v14 o superior
- npm o yarn
- Expo CLI (opcional, pero recomendado)

### Instalación

1. Clona o descarga el proyecto
2. Navega al directorio del proyecto:

   ```bash
   cd Actividad_1
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia la aplicación con Expo:

   ```bash
   npx expo start
   ```

5. Escanea el código QR con la app de Expo Go en tu dispositivo móvil, o presiona:
   - `i` para abrir en el simulador de iOS
   - `a` para abrir en el emulador de Android
   - `w` para abrir en el navegador web

## 📁 Estructura del Proyecto

```
Actividad_1/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx    # Configuración de tabs y navegación
│   │   ├── index.tsx      # Pantalla de inicio principal
│   │   └── explore.tsx    # Pantalla de exploración
│   ├── _layout.tsx        # Layout raíz y configuración global
│   ├── about.tsx          # Pantalla Acerca De
│   ├── technologies.tsx   # Pantalla de Tecnologías
│   └── modal.tsx          # Pantalla modal
├── components/
│   ├── WelcomeCard.tsx    # Componente tarjeta de bienvenida
│   ├── TechnologyItem.tsx # Componente de item individual de tecnología
│   ├── parallax-scroll-view.tsx
│   ├── themed-text.tsx
│   └── ui/                # Componentes UI genéricos
├── constants/
│   ├── colors.ts          # Paleta de colores
│   ├── mockData.ts        # Datos de tecnologías
│   ├── theme.ts           # Configuración de tema
│   └── theme.ts           # Constantes de tema
├── hooks/
│   ├── use-color-scheme.ts    # Hook para esquema de color
│   ├── use-color-scheme.web.ts
│   └── use-theme-color.ts     # Hook para color de tema
├── assets/
│   └── images/            # Imágenes de la aplicación
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── app.json               # Configuración de Expo
└── README.md              # Este archivo
```

## 🎨 Diseño Minimalista

La aplicación sigue principios de diseño minimalista contemporáneo:

- **Paleta de colores limitada** - Solo colores esenciales
- **Bordes y separadores sutiles** - Líneas finas con transparencia
- **Espaciado consistente** - Estructura ordenada y limpia
- **Tipografía clara** - Fuentes legibles y jerarquía visual
- **Sin elementos decorativos innecesarios** - Funcionalidad pura
- **Transiciones suaves** - Animaciones fluidas y naturales

## 🔧 Flujo de la Aplicación

1. El usuario abre la app y ve la pantalla de bienvenida
2. Presiona el botón "Comenzar"
3. Se muestra un Alert de confirmación
4. Al confirmar, se abre un modal con dos opciones:
   - **Acerca De**: Muestra información del proyecto
   - **Tecnologías**: Lista todas las tecnologías utilizadas
5. Desde cualquier pantalla se puede navegar de vuelta

## 📚 Autor

**David Mauricio Rangel Báez**  
Estudiante de Ingeniería de Software  
Universidad FESC  
México

## 📅 Fecha de Creación

26 de febrero de 2026

## 📞 Contacto

Para consultas o sugerencias sobre este proyecto, contactar a través de los medios disponibles en la Universidad FESC.

## 📝 Notas

Esta es una aplicación educativa creada con fines de aprendizaje. Fue desarrollada como parte de la clase de Diseño Móvil, demostrando conceptos fundamentales de React Native como:

- Navegación con Expo Router basada en archivos
- Componentes funcionales y React Hooks
- Layouts y estilos nativos
- Gestión de estado local
- Modales e interactividad
- TypeScript para seguridad de tipos
- Tema claro/oscuro adaptativo

## 📖 Recursos Útiles

- [Documentación de Expo](https://docs.expo.dev/)
- [Documentación de React Native](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/routing/introduction/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
