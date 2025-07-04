
# BanQuito - Arquitectura de Microservicios 🚀

Este proyecto implementa una solución bancaria usando **24 microservicios independientes**, cada uno encapsulando una funcionalidad específica del dominio de negocio de una banca móvil.

---

## 📦 Estructura del Proyecto

- `managAccount/` → Servicios relacionados con cuentas.
- `managClient/` → Servicios para gestión de clientes.
- `managMail/` → Servicios de notificaciones por correo.
- Cada microservicio tiene su propio:
  - `Dockerfile`
  - `.env`
  - `package.json`
  - `index.js` o `app.js`

---

## 🐳 Requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## ▶️ Cómo ejecutar el proyecto

Desde la carpeta `backend/`, ejecuta:

```bash
docker-compose up --build
```

Esto levantará:
- MongoDB
- Los 24 microservicios
- Cada uno en su propio contenedor

---

## 🌐 Puertos asignados

Cada microservicio escucha en un puerto único a partir del **3001**.  
Ejemplos:
- `generateAccountNumber` → http://localhost:3001
- `getAccount` → http://localhost:3002
- ...
- `welcomeBanquito` → http://localhost:3024

---

## 🧪 Pruebas

Puedes usar herramientas como:
- [Postman](https://www.postman.com/)
- [curl](https://curl.se/)

Para probar endpoints individuales:
```bash
curl http://localhost:3001/
```

---

## 🔐 Base de Datos

Todos los microservicios se conectan a:
```
mongodb://mongo:27017/banquito
```

La base de datos se levanta automáticamente vía Docker.

---

## 🧰 Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Docker
- Docker Compose

---

## 🧠 Autor y créditos

Proyecto desarrollado como parte de entrega académica.  
Cada microservicio fue implementado de forma modular y desplegable siguiendo principios de arquitectura de microservicios.
