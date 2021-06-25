/*
    This file would normally be in a private repo,
    or hosted in a seperate private repo from the
    main public facing code. 
    For the purposes of showcasing this project
    this will remain public. 
    This feature and code may be removed at any time.
*/

exports.handler = function( event, context, callback ){
    const password = 'javascript';
    const secretContent = `
    <h3>Welcome to the Secret Area!</h3>
    <p>Here we can tell you that the sky is <strong>blue</strong>, and that grass is <strong>green</strong>.
    `

    let body;

    if(event.body){
        body = JSON.parse(event.body);
    }else{
        body = {}
    }

    if( body.password == password){
        callback(null, { 
            statusCode: 200,
            body: secretContent
        });
    }else{
        callback(null, { 
            statusCode: 401,
        });
    }

}