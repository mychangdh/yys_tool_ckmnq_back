import { urlParamsToObject, randomHead, returnIp } from './function'
import { getAccountData } from "./getAccountData"
import { getResource } from "./getResource"
import { getYuhun } from "./getYuhun"
import https from 'https'
import qs from 'querystring'
const getAnalyzAccount = async (req: any, resd: any) => {
    try {
        const url = req.query.url || ''
        const data = urlParamsToObject(url)
        const hostList = data.hostName.split('/')
        const body = qs.stringify({
            view_loc: data.query.view_loc,
            ordersn: hostList[hostList.length - 1],
            serverid: hostList[hostList.length - 2],
            h5_device: 'android',
            from_shareid: data.query.from_shareid,
            app_client: 'other',
            exter: 'cn.bing.com'
        })
        const options = {
            hostname: 'yys.cbg.163.com',
            port: 443,
            path: 'https://yys.cbg.163.com/cgi/api/get_equip_detail?client_type=h5',
            method: 'POST',
            headers: {
                'Sec-Ch-Ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128"',
                'Sec-Ch-Ua-Mobile': '?1',
                'Sec-Ch-Ua-Platform': '"Android"',
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'X-Requested-With': 'XMLHttpRequest',
                'Priority': 'u=1, i',
                "Connection": "keep-alive",
                "Content-Length": body.length,
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                "User-Agent": randomHead(),
                "X-Forwarded-For": returnIp()
            }
        }
        const requests = https.request(options, function (res) {
            res.setEncoding('utf-8');
            var json = "";
            console.log(res.statusCode);
            res.on("data", function (chunk) {
                json += chunk;
            })
            res.on("end", function () {
                const d = JSON.parse(getAccountData(JSON.parse(json)))
                resd.send({
                    code: 200,
                    mesg: '成功',
                    data: {
                        resource: getResource(d),
                        yuhunList: getYuhun(d)
                    }
                })
            })
        })

        requests.on("error", function () {
            resd.send({
                code: 404,
                mesg: '失败',
                data: '被网易拉黑了,过几天再试试吧'
            })
        })
        requests.write(body)
    }
    catch (err) {
        console.log(err,13);
        
        resd.send({
            code: 404,
            mesg: '失败',
            data: '地址错误或者被网易拉黑'
        })
    }
}
export default getAnalyzAccount