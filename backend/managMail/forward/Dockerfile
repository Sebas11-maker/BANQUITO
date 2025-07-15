# Usa la imagen base oficial de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración de la aplicación (package.json, package-lock.json)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente del microservicio al contenedor
COPY . .

# Expón el puerto 3600 en el que la aplicación se ejecuta
EXPOSE 3616

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
