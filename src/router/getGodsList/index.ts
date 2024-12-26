import SQLInquire from "@/db/operate"
const getGods = async (req: any, res: any) => {
    const sql = 'select * from gods'
    const result = await SQLInquire(sql)
    res.send(result)
}
export default getGods