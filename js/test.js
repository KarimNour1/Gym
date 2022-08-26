var http = require('http');
var qs = require('querystring');
var fs = require('fs');
// Create a server object
http.createServer(function (req, res) {
	
	// http header
	res.writeHead(200, {'Content-Type': 'text/html'});
	var url = req.url;
	if(url ==='/signup') {
        if (req.method == "POST")
        {
            var body = '';
            req.on('data', function(data)
            {
                body += data;
            }
            );
            req.on('end', function(){
                var post = qs.parse(body);
                var username = post["usnf"];
                var password = post["pass"];
                var confirm = post["pass2"];
                var email = post['ema'];
                fs.readFile('users.json', (err, data) =>
                {
                    if (err)
                    {
                        res.write("error");
                        res.end();
                    } else {
                        const users = JSON.parse(data);
                        const newUser = {
                            id: users.length + 1,
                            username,
                            password,
                            email
                          };
                          users.push(newUser);
                          fs.writeFile("users.json", JSON.stringify(users), (err) => 
                          {
                          
                          if (err)
                          {
                              res.write('cant write');
                              res.end();
                          }else{
                              res.write('user added');
                              res.end();
                          }
                        }
                          
                          
                          );

                    }
                }
                
                
                
                
                );
            });

        }
	}
	else if(url ==='/login') {
        if (req.method == "POST")
        {
            var body = '';
            req.on('data', function(data)
            {
                body += data;
            }
            );
            req.on('end', function(){
                var post = qs.parse(body);
                res.write(post['ema'] + " ");
                var pass = post["pass"];
                var email = post['ema'];
                fs.readFile('users.json', (err, data) =>
                {
                    if (err)
                    {
                        res.write("error");
                        res.end();
                    } else {
                        const users = JSON.parse(data);
                        const user = users.find((u) => {
                            return u.email === email && u.password === pass;
                          });
                          if (user)
                          {
                              res.write("loggin");
                              res.end();
                          }
                          else
                          {
                              res.write("you can't");
                              res.end();
                          }

                    }
                }
                
                
                
                
                );
            });

        }
	}
	else {
		res.write('Hello World!');
		res.end();
	}
}).listen(3000, function() {
	
	// The server object listens on port 3000
	console.log("server start at port 3000");
});
