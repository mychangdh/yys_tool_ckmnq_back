import express from 'express';
import bodyParser from 'body-parser';
import router from './router'
import config from '../config';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router)
 
app.listen(config.PORT,()=>{
  console.log(`http://127.0.0.1:${config.PORT}`);
  
})


export default app
