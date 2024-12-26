export const nameToId = {
    '攻击': 'attackAdditionVal',
    '攻击加成': 'attackAdditionRate',
    '生命': 'maxHpAdditionVal',
    '生命加成': 'maxHpAdditionRate',
    '防御': 'defenseAdditionVal',
    '防御加成': 'defenseAdditionRate',
    '速度': 'speedAdditionVal',
    '暴击': 'critRateAdditionVal',
    '暴击伤害': 'critPowerAdditionVal',
    '效果命中': 'debuffEnhance',
    '效果抵抗': 'debuffResist'
} as const
export const IdToName = {
    attackAdditionVal: '攻击',
    attackAdditionRate: '攻击加成',
    maxHpAdditionVal: '生命',
    maxHpAdditionRate: '生命加成',
    defenseAdditionVal: '防御',
    defenseAdditionRate: '防御加成',
    speedAdditionVal: '速度',
    critRateAdditionVal: '暴击',
    critPowerAdditionVal: '暴击伤害',
    debuffEnhance: '效果命中',
    debuffResist: '效果抵抗'
} as const
const maxAtt = {
    attackAdditionVal: 27,
    attackAdditionRate: 3,
    maxHpAdditionVal: 114,
    maxHpAdditionRate: 3,
    defenseAdditionVal: 5,
    defenseAdditionRate: 3,
    speedAdditionVal: 3,
    critRateAdditionVal: 3,
    critPowerAdditionVal: 4,
    debuffEnhance: 4,
    debuffResist: 4
}
function getValule(name: keyof typeof nameToId, data: any) {
    const id = nameToId[name]
    const numArr = data.filter((ite: any) => {
        
        return ite[0] === id
    })
    let sum = 0
    numArr.forEach((p:any)=>{
        sum+=p[1]
    })
    return sum * maxAtt[id]
}
type keyType = keyof typeof nameToId
// 格式化御魂
export function getYuhun(data: any) {

    const yuhun = Object.values(data.inventory).map((item: any) => {
        const subAtts = []
        for (let i = 1; i < item.attrs.length; i++) {
            subAtts.push({
                id: nameToId[item.attrs[i][0] as keyType],
                name: item.attrs[i][0],
                showValue: item.attrs[i][1],
                value: getValule(item.attrs[i][0], item.rattr)
            })
        }
        const single_attr = item.single_attr ? {
            id: nameToId[item.single_attr[0] as keyType],
            name: item.single_attr[0],
            showValue: item.single_attr[1],
            value: parseFloat(item.single_attr[1])
        } : undefined
        return {
            name: item.name,
            level: item.level,
            yuhun_id: item.suitid,
            qua: item.qua,
            pos: item.pos,
            data: {
                mainAtt: {
                    id: nameToId[item.attrs[0][0] as keyType],
                    name: item.attrs[0][0],
                    showValue: item.attrs[0][1],
                    value: parseFloat(item.attrs[0][1])
                },
                subAtts,
                single_attr
            },

        }
    })
    return yuhun
}