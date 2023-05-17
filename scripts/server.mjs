import { createServer } from "lwr";
import jsforce from 'jsforce';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

    const lwrServer = createServer({serverType: "express"});
    const app = lwrServer.getInternalServer();
    let token = '';
        const conexion = {
            loginUrl: process.env.URL,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            redirectUri: process.env.REDIRECT
        }

// EndPoint para loguearme
    app.get('/api/login', function (req, res) {
        var conn = new jsforce.Connection({
            oauth2:conexion
        });
        var username = 'portfolio@jesus.com';
        var password = 'Abreteya33LaJOECuQ6YtpgE7GccOi8qMl3';
        conn.login(username, password, function(err, userInfo) {
        if (err) { return console.error(err); }
        console.log(`Esta es la uri url ${conn.instanceUrl}`);
        token = conn.accessToken;
        });
    });

// Endpoint para la llamada al serivicio rest
    app.get('/api/experiencia/:nombre', function (req, res) {

        axios.get(process.env.URL + '/services/apexrest/api/Experiencias/',
        {
            params: {
                nombre: req.params.nombre  
            },
            headers:{
                'Authorization': 'Bearer ' + token
            }
        }
        ).then((success) => {
            res.send(JSON.parse(success.data));
        }

        ).catch(( error) => console.log(error.data))
    });

// Endpoint para la llamada de los estudios
    app.get('/api/formacion/:nombre', function (req, res) {
        axios.get(process.env.URL + '/services/apexrest/api/Formacion/',
        {
            params: {
                nombre: req.params.nombre
            },
            headers:{
                'Authorization': 'Bearer ' + token
            }
        })
        .then((success) => {
            res.send(JSON.parse(success.data));
        })
        .catch((error) => console.log(error.data))
    })

// Endpoint para la llamada de los lenguajes

// Endpoint para la llamada del post un comentario


    lwrServer.listen(({port, serverMode}) => {
        console.log(`Existe conexion en el puerto ${port}`);
    }).catch((err) => {
        console.log(err);
    })
