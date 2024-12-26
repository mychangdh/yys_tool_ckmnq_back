import SQLInquire from "@/db/operate"
const getYuHun = async (req: any, res: any) => {
    const sql = 'select * from yuhun'
    const result :any = await SQLInquire(sql)
    
    res.send(JSON.parse(JSON.stringify(result)))
}
export default getYuHun