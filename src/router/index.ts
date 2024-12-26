import express from 'express'
import getGodsList from './getGodsList';
import getGodsRecommend from './getGodsRecommend';
import addGodsRecommend from './getGodsRecommend/add';
import updateGodsRecommend from './getGodsRecommend/update';
import getYuHun from './getYuHun'
import deleteGodsRecommend from './getGodsRecommend/delete';
import getAnalyzAccount from './cbg/analyzAccount'
const Router = express.Router()
Router.get('/getGods', getGodsList)
Router.get('/getGodsRecommend', getGodsRecommend)
Router.post('/addGodsRecommend', addGodsRecommend)
Router.post('/updateGodsRecommend', updateGodsRecommend)
Router.get('/getYuHun', getYuHun)
Router.post('/deleteGodsRecommend', deleteGodsRecommend)
Router.get('/getAnalyzAccount', getAnalyzAccount)
export default Router