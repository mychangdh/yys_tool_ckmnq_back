import mysql from 'mysql'
const conn = mysql.createConnection({
    user: 'root',          //用户名
    password: 'root',	//密码
    host: 'localhost',		//主机（默认都是local host）
    database: 'yys_gods'       //数据库名
})

export default conn
