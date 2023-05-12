import { createServer } from "lwr";
import jsforce from 'jsforce';
import axios from 'axios';
import request from 'request';

    const lwrServer = createServer({serverType: "express"});
    const app = lwrServer.getInternalServer();
    let token = '';
    const conexion = {
        loginUrl: 'https://myself264-dev-ed.develop.my.salesforce.com',
        clientId: '3MVG9SOw8KERNN0_5Oh6DhCDkJbnS8pvP.MMkjns6Hmdqd.WRusXQylogzrSaWdeFoNRGg0yNiDK8anrCZo77',
        clientSecret: '7E4804339B35094FB9F2ACC80DEA028CD259D14EA80988DDF1440119671D27EE',
        redirectUri:'https://www.google.com',
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

        axios.get('https://myself264-dev-ed.develop.my.salesforce.com/services/apexrest/api/Experiencias/',
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

        ).catch(( error) => 
            console.log(error.data)
        )
    });

// Endpoint para la llamada de los estudios

// Endpoint para la llamada de los lenguajes

// Endpoint para la llamada del post un comentario


    lwrServer.listen(({port, serverMode}) => {
        console.log(`Existe conexion en el puerto ${port}`);
    }).catch((err) => {
        console.log(err);
    })
