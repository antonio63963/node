var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root@localhost',
  password : '',
  database : 'workflow'
});
 
connection.connect();
const queryUsers_projects = "SELECT `users`.`name`, `users`.`last_name`, `projects`.`name` FROM users_project JOIN `users` ON `users`.`id` = `users_project`.`user_id` JOIN `projects`ON `projects`.`id` = `users_project`.`project_id`";

connection.query(queryUsers_projects, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();