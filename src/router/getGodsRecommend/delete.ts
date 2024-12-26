import SQLInquire from "@/db/operate"
const getGodsRecommend = async (req: any, res: any) => {
    let {
        id
    } = req.query
    const sql = `DELETE FROM godsrecommend  WHERE id=?;`
   await SQLInquire(sql, id)
    res.send('删除成功！')
}
export default getGodsRecommend