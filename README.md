# Bus-Ticket-Handling
<h1>Ticket Handling System</h1>
<p>The objective of the assignment is to crete a service that perform following tasks</p>
<ul>
<li>Creata a Ticket</li>
<li>Update a Ticket</li>
<li>Edit details of a user</li>
<li> Get Status of ticket</li>
<li>List of all open tickets</li>
<li>List of all closed tickets</li>
<li>View details of ticket</li>

</ul>

<h3>Prerequisites</h3>
<h2>Backend</h2>
<ul>
<li> Node.js</li>
<li>Express</li>
<li> MongoDB</li>

</ul>

<h3> Install Dependencies</h3>
<ul>
<li> npm install express</li>
<li>npm install mongoose</li>
<li>npm install joi</li>
<li> npm install mongoose-unique-validator</li>

</ul>
<h3> Start the App</h3>
<p> node index.js</p>
<h3>API Endpoints</h3>
<ul>
<li> POST '/bus/ticket'</li>
<li>PUT '/bus/ticket/:ticket_id'</li>
<li>GET /bus/ticket/:ticket_id</li>
<li>GET /bus/tickets/open</li>
<li>GET /bus/tickets/closed</li>
<li>GET /bus/ticket/details/:ticket_id</li>
      <li>GET /bus/ticket/details/ticket_id </li>

</ul>
<h3> Postman Collections</h3>
<ol>
      <li> Create Ticket:  Creates a ticket in the ticket collection and the associated user in the user table. </li>
      <ul>
            <li><strong> API Endpoint:</strong> http://localhost:8000/bus/ticket<li>
            <li><strong>HTTP Request:</strong>POST</li>
            <li><strong>JSON Data Format:</strong> </li>
                   {<br>
                  “seat_number”: Number,<br>
                   "passenger": { <br>
 	             "name": String,<br>
                   "sex":String,<br>
                   "age": Number, <br>
                   "phone": String, <br>
                   "email": String } <br>
                  }<br>
      
      <li> <strong> Request Body:</strong> </li>
      {<br>
             "seat_number": 1,<br>
            "passenger": {<br>
 	      "name": "Yashi Bagoli",<br>
 	      "sex":"F",<br>
            "age": 22, <br>
            "phone": "9811892192",<br> 
            "email": "yashibagoli66@gmail.com"<br> 
 	
            } <br>
            }<br>

      <li> <strong> Response: </strong> </li>
      {<br>
    "is_booked": true,<br>
    "date": "2020-05-06T13:23:50.467Z",<br>
    "_id": "5eb2bcba70899a0f7c8d92b9",<br>
    "seat_number": 1,<br>
    "passenger": "5eb2bcba70899a0f7c8d92ba",<br>
    "__v": 0<br>
}<br>

</ul>

<li><strong> Update a ticket→ </strong Updates open/closed tickets/Updates user details</li>
      <li > <strong>API Endpoint  </strong> localhost:8000/bus/ticket/ticket_id</li>
      <li> <strong>HTTP Request: </strong>PUT</li>
      <li><strong>Example:</strong>localhost:8000/bus/ticket/5eb3877cb9a33a14445fa100</li>
      <li><strong></strong>JSON Body</li>
      { "is_booked": Boolean, <br>
         "Passenger":          <br>
                  { "name": String,  <br>
                    "sex": String,   <br>
                    "age": Number,   <br>
                    "phone": String,  <br>
                    "email": String    <br>
                       }             <br>
                   }                 <br>

      <li><strong>Request Body:</strong></li>
                  {  <br>
    "is_booked": false,  <br>
    "passenger": {       <br>
        "name": "Janice Shaw",       <br>
        "sex": "F",                  <br>
        "age": 100,                  <br>
        "phone": "0000000000",       <br>
        "email": "jamesbond@gmail.com"     <br>
    }                                      <br>
}                                          <br>

      <li>   Response Body:<strong></strong></li>
            
               {<br>
 	   "is_booked": false,  <br>
    	"date": "2020-05-07T03:47:28.242Z", <br>
    	"_id": "5eb3877cb9a33a14445fa100",<br>
    	"seat_number": 33,<br>
    	"passenger": "5eb3acdd9e532609d416f9db",<br>
    	"__v": 0 <br>
}<br>

      




      
          
