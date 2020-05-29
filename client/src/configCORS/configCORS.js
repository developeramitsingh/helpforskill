const configCors = {	
					    origin: ["http://localhost:5000"],
					    allowedHeaders: [
					      "Content-Type",
					      "Authorization",
					      "x-auth-token",
					      "Access-Control-Allow-Methods",
					      "Access-Control-Request-Headers",
					      "Access-Control-Allow-Origin"
					      
        					
					    ],
					    crossdomain:true,
					    credentials: true,
					    enablePreflight: true,
					    headers:{}
					  }

export default configCors;					  