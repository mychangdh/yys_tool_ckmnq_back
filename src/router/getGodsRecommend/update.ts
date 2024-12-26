import SQLInquire from "@/db/operate"
const getGodsRecommend = async (req: any, res: any) => {
    let {
        type, value, id
    } = req.body
     const sql = `UPDATE  godsrecommend SET ${type}=? WHERE id=?`
    if (type === 'pvp_score' || type === 'pve_score' || type === 'sort') value = +value
   await SQLInquire(sql, [ value, +id])
    res.send('修改成功！')
}
export default getGodsRecommend