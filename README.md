# Description
This repository was created to add Typescript a Express Project. The original project is available [here](https://github.com/arcanjotiago/express). Additionaly in this project we stablish a standard response using the object orientation concept.

# Endpoints
-`GET`  /status   
-`POST` /calcnumber  
-`POST` /checkmail

## Requisition examples
`POST` /calcnumber 
```
curl --location --request POST 'http://localhost:3000/calcnumber?number=100'
```

`POST` /checkmail 
```
curl --location --request POST 'http://localhost:3000/checkmail?email=examplE%40example.com'
```

# Installation
```
npm install
```

# Running the app
## Development
```
npm run start:dev
```

