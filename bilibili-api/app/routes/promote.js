import Router from 'koa-router'
import axios from 'axios'
import { promote, promoteAd } from './urlConfig'

const router = Router()

// 推广
router.get('/promote', async (ctx, next) => {
  let response = await axios.get(promote)
  ctx.body = response.data
})

router.get('/promoteAd', async (ctx, next) => {
  let response = await axios.get(promoteAd)
  ctx.body = response.data
})

export default router
