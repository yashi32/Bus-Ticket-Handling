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
            <li><strong>JSON Data Format:</strong> 
                   {
                  “seat_number”: Number,
                   "passenger": {
 	             "name": String,
                   "sex":String,
                   "age": Number, 
                   "phone": String, 
                   "email": String } 
                  }
      </ul>
      </ol>



      
          
