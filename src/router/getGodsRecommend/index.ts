import SQLInquire from "@/db/operate"
const getGodsRecommend = async (req: any, res: any) => {
    const sql = 'select * from godsrecommend'
    const result :any = await SQLInquire(sql)
    res.send(JSON.parse(JSON.stringify(result)).sort((x:any,y:any)=>x.sort - y.sort))
}
export default getGodsRecommend