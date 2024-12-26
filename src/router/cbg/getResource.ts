export function getResource(data:any) {
    return {
        yuhun_buff: {
            id:'yuhun_buff',
            name: '御魂BUFF',
            value: (data.yuhun_buff / 3600).toFixed(2) + '小时'
        },
        hero_summary:{
            id:'hero_summary',
            name:'式神数量',
            value:data.hero_summary
        },
        money:{
            id:'money',
            name:'金币',
            value:(data.money/ 10000).toFixed(2) +'万'
        },
        goyu:{
            id:'gouyu',
            name:'勾玉',
            value:data.goyu
        },
        gameble_card:{
            id:'gameble_card',
            name:'神秘符咒',
            value:data.gameble_card
        },
        ar_gamble_card:{
            id:'ar_gamble_card',
            name:'现实符咒',
            value:data.ar_gamble_card
        },
        strength:{
            id:'strength',
            name:'体力',
            value:data.strength
        },
        yuhun_level_15:{
            id:'yuhun_level_15',
            name:'满级御魂',
            value:data.level_15
        },
        hero_history:{
            id:'hero_history',
            name:'图鉴',
            value:data.hero_history
        },
        fengzidu:{
            id:'fengzidu',
            name:'风姿度',
            value:data.fengzidu
        },
        sign_days:{
            id:'sign_days',
            name:'签到天数',
            value:data.sign_days
        },

    }
}