import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import XueshengController from './Xuesheng'
import XinwenleixingController from './Xinwenleixing'
import XiaoyuanxinwenController from './Xiaoyuanxinwen'
import XueshengchengjiController from './Xueshengchengji'
import SusheanpaiController from './Susheanpai'
import KechengbiaoController from './Kechengbiao'
import KechengkaoqinController from './Kechengkaoqin'
import StoreupController from './Storeup'
import NewsController from './News'
import AboutusController from './Aboutus'
import SystemintroController from './Systemintro'
import DiscussxiaoyuanxinwenController from './Discussxiaoyuanxinwen'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/xuesheng', XueshengController({ config, db }))

	api.use('/xinwenleixing', XinwenleixingController({ config, db }))

	api.use('/xiaoyuanxinwen', XiaoyuanxinwenController({ config, db }))

	api.use('/xueshengchengji', XueshengchengjiController({ config, db }))

	api.use('/susheanpai', SusheanpaiController({ config, db }))

	api.use('/kechengbiao', KechengbiaoController({ config, db }))

	api.use('/kechengkaoqin', KechengkaoqinController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/aboutus', AboutusController({ config, db }))

	api.use('/systemintro', SystemintroController({ config, db }))

	api.use('/discussxiaoyuanxinwen', DiscussxiaoyuanxinwenController({ config, db }))

	return api
}
