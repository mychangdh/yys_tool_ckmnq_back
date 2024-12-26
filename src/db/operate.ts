import mysql from '.'
const SQLInquire = (sql: string, arr: any[] = []) => {
    return new Promise((resolve, reject) => {
        mysql.query(sql, arr, (err, result) => {
            if (err){
                reject(err)
                return 
            }
            if (result) resolve(result)
            else resolve('操作成功！')
        })
    })
}
export default SQLInquire