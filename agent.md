# Atlas Gym Backend Agent Guide 🏋️‍♂️

Este proyecto es el backend para **Atlas Gym**, desarrollado con el framework **NestJS**. Proporciona una API robusta para la gestión de un gimnasio, incluyendo usuarios, membresías, reservas de clases y notificaciones.

## 🛠 Stack Tecnológico

- **Core:** [NestJS](https://nestjs.com/) (Node.js framework)
- **Lenguaje:** TypeScript
- **Base de Datos:** PostgreSQL
- **ORM:** TypeORM
- **Autenticación:** Passport.js (JWT)
- **Entorno de Desarrollo:** Docker (para la base de datos)

## 📁 Estructura del Proyecto (`src/`)

El backend está organizado de forma modular siguiendo las mejores prácticas de NestJS:

- **`auth/`**: Gestión de autenticación, estrategias (JWT), guardias y decoradores.
- **`user/`**: CRUD de usuarios y roles.
- **`member-profile/`**: Información detallada y perfiles de los socios del gimnasio.
- **`plan/`**: Gestión de planes de membresía y precios.
- **`slot/`**: Definición de horarios y espacios disponibles para entrenamientos.
- **`booking/`**: Sistema de reservas para que los socios se inscriban en los slots disponibles.
- **`mail/`**: Servicio de envío de correos electrónicos (notificaciones, confirmaciones).

## 🚀 Cómo empezar

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```
2.  **Configurar variables de entorno:**
    Copia el archivo `.env.template` a `.env` y completa los datos de conexión a la base de datos PostgreSQL.
3.  **Levantar servicios (DB):**
    ```bash
    docker-compose up -d
    ```
4.  **Iniciar en modo desarrollo:**
    ```bash
    npm run start:dev
    ```

## 📋 Características principales

- **Gestión de Socios:** Perfiles personalizados y seguimiento de suscripciones.
- **Sistema de Reservas:** Control de aforo mediante slots de tiempo.
- **Membresías Flexibles:** Definición de distintos planes de acceso.
- **Seguridad:** Rutas protegidas mediante roles y autenticación JWT.
