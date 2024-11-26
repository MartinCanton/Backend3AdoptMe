# Backend3 Adopt Me 

## Proyecto realizado en motivo de la Cursada de Backend 3 - Coderhouse

Este proyecto nos permite utilizar datos de prueba de usuarios y mascotas mediante la biblioteca Faker. 
Se ingresan datos masivamente para facilitar los test con datos ficticios.


## Instalación:
1.  Descargar o clonar el repositorio. 
2.  Instalar dependencias:
    ```bash
    npm install
    ```
3.  Crear archivo .env en la raíz del proyecto. *** Ver Referencia de variables en .env.example *** **Las variables para el proyecto se dieron al momento de entregar el repositorio**
4.  Ejecutar:
    ```bash
    npm run dev
    ```

## Endpoints:

**GET**
<br>
Para generar y devolver 50 Mascotas:
/api/mocks/mockingpets 
<br>
Para generar y devolver 50  Users:
/api/mocks/mockingusers

**POST**
<br>
Genera e inserta los datos en la DB:
/api/mocks/generateData 





