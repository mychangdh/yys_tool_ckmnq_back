import SQLInquire from "@/db/operate"
const getGodsRecommend = async (req: any, res: any) => {
    const sql = `INSERT INTO godsrecommend (name,level,shishen_id,pvp_score,pvp_content,pve_score,pve_content,sort)
                 VALUES (?,?,?,?,?,?,?,?);`
    const {
        name, level, shishen_id,pvp_score, pvp_content, pve_score, pve_content,sort
    } = req.body
    await SQLInquire(sql, [name, level,shishen_id, +pvp_score, pvp_content, +pve_score, pve_content,+sort])
    res.send('添加成功！')
}
export default getGodsRecommend