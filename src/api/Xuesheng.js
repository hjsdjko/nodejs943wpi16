import { version } from '../../package.json'
import { Router } from 'express'
import { Sequelize, Op, QueryTypes } from 'sequelize'
import sequelize from '../models/sequelize'
import toRes from '../lib/toRes'
import XueshengModel from '../models/XueshengModel'
import md5 from 'md5-node'
import util from '../lib/util'
import jwt from 'jsonwebtoken'
import moment from 'moment'
import ConfigModel from '../models/ConfigModel'
import https from 'https'
import request from 'request'
import qs from 'querystring'
import path from 'path'
import fs from 'fs'
import config from '../config.json'
const redis = require('redis')




export default ({ config, db }) => {
	let api = Router()

	// 用户登录接口
	api.all('/login', async (req, res) => {

		try {

			let pwd = req.query.password
			pwd = md5(req.query.password)
			let userinfo = await XueshengModel.findOne({ where: { xuehao: req.query.username, mima: pwd } })
			if (userinfo === null) {
				toRes.session(res, -1, '用户名或密码错误！')
				return
			}


			const token = jwt.sign(
				{
					id: userinfo.dataValues.id,
					username: userinfo.dataValues.xuehao,
					role: '学生',
                    loginUserColumn: 'xuehao',
                    tableName: 'xuesheng'
				},
				config.jwtSecret,
				{
					expiresIn: 60 * 60 * 24 * 1
				}
			)

			userinfo.dataValues.token = token
			userinfo.dataValues.role = '学生'
			userinfo.dataValues.loginUserColumn = 'xuehao'
			userinfo.dataValues.tableName = 'xuesheng'
			delete userinfo.dataValues.mima
			req.session.userinfo = userinfo


			toRes.session(res, 0, '登录成功！', token)
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})


	// 用户退出接口
	api.all('/logout', (req, res) => {
		
		req.session.destroy(err => {
			toRes.session(res, 0, '退出成功！')
		})
	})

	// 注册接口
	api.post('/register', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
			})


			req.body.mima = md5(req.body.mima)

			const userinfo = await XueshengModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '注册失败！')
			} else {

				toRes.session(res, 0, '注册成功！')
			}
		} catch(err) {
			
			toRes.session(res, -2, '请检查是否正确输入或用户名重复！', '', 200)
		}
	})

	// 获取session接口
	api.all('/session', async (req, res) => {

		try {

			toRes.record(res, 0, await XueshengModel.findOne({ where: { id: req.session.userinfo === undefined ? jwt.decode(req.headers.token).id : req.session.userinfo.id } }))
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 忘记密码（找回密码）
	api.all('/resetPass', async (req, res) => {

		try {

	    let pwd = md5('123456')

			await XueshengModel.update({
				mima: pwd
			}, {
				where: {
				  xuehao: req.query.username
				}
			})

			toRes.session(res, 0, '密码已重置为：123456')
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 分页接口（后端）
	api.get('/page', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let xuehao = req.query.xuehao
			if (xuehao) {

				if (xuehao.indexOf('%') != -1) {
					where.xuehao = {
						[Op.like]: xuehao
					}
				} else {
					where.xuehao = {
						[Op.eq]: xuehao
					}
				}
			}
			let xueshengxingming = req.query.xueshengxingming
			if (xueshengxingming) {

				if (xueshengxingming.indexOf('%') != -1) {
					where.xueshengxingming = {
						[Op.like]: xueshengxingming
					}
				} else {
					where.xueshengxingming = {
						[Op.eq]: xueshengxingming
					}
				}
			}
			let mima = req.query.mima
			if (mima) {

				if (mima.indexOf('%') != -1) {
					where.mima = {
						[Op.like]: mima
					}
				} else {
					where.mima = {
						[Op.eq]: mima
					}
				}
			}
			let xingbie = req.query.xingbie
			if (xingbie) {

				if (xingbie.indexOf('%') != -1) {
					where.xingbie = {
						[Op.like]: xingbie
					}
				} else {
					where.xingbie = {
						[Op.eq]: xingbie
					}
				}
			}
			let lianxidianhua = req.query.lianxidianhua
			if (lianxidianhua) {

				if (lianxidianhua.indexOf('%') != -1) {
					where.lianxidianhua = {
						[Op.like]: lianxidianhua
					}
				} else {
					where.lianxidianhua = {
						[Op.eq]: lianxidianhua
					}
				}
			}
			let xueyuan = req.query.xueyuan
			if (xueyuan) {

				if (xueyuan.indexOf('%') != -1) {
					where.xueyuan = {
						[Op.like]: xueyuan
					}
				} else {
					where.xueyuan = {
						[Op.eq]: xueyuan
					}
				}
			}
			let nianji = req.query.nianji
			if (nianji) {

				if (nianji.indexOf('%') != -1) {
					where.nianji = {
						[Op.like]: nianji
					}
				} else {
					where.nianji = {
						[Op.eq]: nianji
					}
				}
			}
			let banji = req.query.banji
			if (banji) {

				if (banji.indexOf('%') != -1) {
					where.banji = {
						[Op.like]: banji
					}
				} else {
					where.banji = {
						[Op.eq]: banji
					}
				}
			}
			let touxiang = req.query.touxiang
			if (touxiang) {

				if (touxiang.indexOf('%') != -1) {
					where.touxiang = {
						[Op.like]: touxiang
					}
				} else {
					where.touxiang = {
						[Op.eq]: touxiang
					}
				}
			}

			let result = await XueshengModel.findAndCountAll({
				order: [[sort, order]],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 分页接口（前端）
	api.get('/list', async (req, res) => {

		try {

			let page = parseInt(req.query.page) || 1
			let limit = parseInt(req.query.limit) || 10
			let sort = req.query.sort || 'id'
			let order = req.query.order || 'asc'

			let where = {}
			let xuehao = req.query.xuehao
			if (xuehao) {

				if (xuehao.indexOf('%') != -1) {
					where.xuehao = {
						[Op.like]: xuehao
					}
				} else {
					where.xuehao = {
						[Op.eq]: xuehao
					}
				}
			}
			let xueyuan = req.query.xueyuan
			if (xueyuan) {

				if (xueyuan.indexOf('%') != -1) {
					where.xueyuan = {
						[Op.like]: xueyuan
					}
				} else {
					where.xueyuan = {
						[Op.eq]: xueyuan
					}
				}
			}
			let nianji = req.query.nianji
			if (nianji) {

				if (nianji.indexOf('%') != -1) {
					where.nianji = {
						[Op.like]: nianji
					}
				} else {
					where.nianji = {
						[Op.eq]: nianji
					}
				}
			}
			let banji = req.query.banji
			if (banji) {

				if (banji.indexOf('%') != -1) {
					where.banji = {
						[Op.like]: banji
					}
				} else {
					where.banji = {
						[Op.eq]: banji
					}
				}
			}


			let result = await XueshengModel.findAndCountAll({
				order: [[sort, order]],
				where,
				offset: (page - 1) * limit,
				limit
			})
			
			result.currPage = page
			result.pageSize = limit

			toRes.page(res, 0, result)
		} catch(err) {
			
			toRes.session(res, 401, '您的权限不够！', '', 200)
		}
	})


	// 保存接口（后端）
	api.post('/save', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
				if(req.body[item] == '' && item == 'sfsh')  req.body[item] = '待审核'
			})


			if(req.body.mima.length != 32) {
				req.body.mima = md5(req.body.mima)
			}

			const userinfo = await XueshengModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 保存接口（前端）
	api.post('/add', async (req, res) => {

		try {

			Object.keys(req.body).forEach(item=>{
				if(req.body[item] == '')  delete req.body[item]
				if(req.body[item] == '' && item == 'sfsh')  req.body[item] = '待审核'
			})

			if (jwt.decode(req.headers.token) == null) {
				toRes.session(res, 401, '请登录后再操作', '', 401)
			}



			const userinfo = await XueshengModel.create(req.body)

			if (userinfo === null) {

				toRes.session(res, -1, '添加失败！')
			} else {

				toRes.session(res, 0, '添加成功！')
			}
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 更新接口
	api.post('/update', async (req, res) => {

		try {


			if(req.body.mima.length != 32) {
				req.body.mima = md5(req.body.mima)
			}

			await XueshengModel.update(req.body, {
				where: {
				  id: req.body.id || 0
				}
			})


			toRes.session(res, 0, '编辑成功！')
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 删除接口
	api.post('/delete', async (req, res) => {

		try {

			await XueshengModel.destroy({
				where: {
				  id: {
					[Op.in]: req.body
				  }
				}
			})

			toRes.session(res, 0, '删除成功！')
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 详情接口（后端）
	api.all('/info/:id', async (req, res) => {

		try {


			toRes.record(res, 0, await XueshengModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

    // 详情接口（前端）
	api.all('/detail/:id', async (req, res) => {

		try {


			toRes.record(res, 0, await XueshengModel.findOne({ where: { id: req.params.id } }))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 获取需要提醒的记录数接口
	api.get('/remind/:columnName/:type', async (req, res) => {

        let where = ' 1=1 '

		try {

			let sql = 'SELECT 0 AS count'
			
			if (req.params.type == 1) {
				if (req.query.remindstart) sql = "SELECT COUNT(*) AS count FROM xuesheng WHERE " + where + " AND " + req.params.columnName + " >= '" + req.query.remindstart + "'"
				if (req.query.remindend) sql = "SELECT COUNT(*) AS count FROM xuesheng WHERE " + where + " AND " + req.params.columnName + " <= '" + req.query.remindend + "'"

				if (req.query.remindstart && req.query.remindend) {
					sql = "SELECT COUNT(*) AS count FROM xuesheng WHERE " + where + " AND " + req.params.columnName + " >= '" + req.query.remindstart + "' AND " + req.params.columnName + " <= '" + req.query.remindend + "'"
				}
			}

			if (req.params.type == 2) {
				if (req.query.remindstart) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM xuesheng WHERE " + where + " AND " + req.params.columnName + " >= '" + remindStart + "'"
				}
				if (req.query.remindend) {
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM xuesheng WHERE " + where + " AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}

				if (req.query.remindstart && req.query.remindend) {
					let remindStart = util.getDateTimeFormat(0 + Number(req.query.remindstart), "yyyy-MM-dd")
					let remindEnd = util.getDateTimeFormat(req.query.remindend, "yyyy-MM-dd")
					sql = "SELECT COUNT(*) AS count FROM xuesheng WHERE " + where + " AND " + req.params.columnName + " >= '" + remindStart + "' AND " + req.params.columnName + " <= '" + remindEnd + "'"
				}
			}

			const results = await sequelize.query(sql, {
				plain: true,
				raw: true,
				type: QueryTypes.SELECT
			})

			toRes.count(res, 0, results.count)
		} catch(err) {
			
			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})










	// 分组统计接口
	api.get('/group/:columnName', async (req, res) => {

		try {

			let sql = ""
			let columnName = req.params.columnName
			// let tableName = "xuesheng"
			let where = " WHERE 1 = 1 "
			sql = "SELECT COUNT(*) AS total, " + columnName + " FROM xuesheng " + where + " GROUP BY " + columnName + " LIMIT 10" 
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 统计指定字段
	api.get('/value/:xColumnName/:yColumnName', async (req, res) => {

		try {

			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			// let tableName = "xuesheng"
			let where = " WHERE 1 = 1 "
			if ("xuesheng" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

			sql = "SELECT " + xColumnName + ", SUM(" + yColumnName + ") AS total FROM xuesheng " + where + " GROUP BY " + xColumnName + " DESC LIMIT 10"
			
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})

	// 按日期统计
	api.get('/value/:xColumnName/:yColumnName/:timeStatType', async (req, res) => {

		try {
			
			let sql = ""
			let xColumnName = req.params.xColumnName
			let yColumnName = req.params.yColumnName
			let timeStatType = req.params.timeStatType
			let tableName = "xuesheng"
			let where = " WHERE 1 = 1 "
			if ("xuesheng" == "orders") {
				where += " AND status IN ('已支付', '已发货', '已完成') ";
			}

            if (config.dbConnection.dbtype.toLowerCase() == "mysql") {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m-%d') LIMIT 10";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y-%m') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y-%m')  LIMIT 10";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(" + xColumnName + ", '%Y') " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(" + xColumnName + ", '%Y')  LIMIT 10";
            } else {
                if (timeStatType == "日")
                    sql = "SELECT DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(10)," + xColumnName + ", 120)  LIMIT 10";
                if (timeStatType == "月")
                    sql = "SELECT DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(7)," + xColumnName + ", 120)  LIMIT 10";
                if (timeStatType == "年")
                    sql = "SELECT DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120) " + xColumnName + ", sum(" + yColumnName + ") total FROM " + tableName + where + " GROUP BY DATE_FORMAT(VARCHAR(4)," + xColumnName + ", 120)  LIMIT 10";
            }
			toRes.record(res, 0, await sequelize.query(sql, {
				plain: false,
				raw: true,
				type: QueryTypes.SELECT
			}))
		} catch(err) {

			toRes.session(res, 500, '服务器错误！', '', 500)
		}
	})













	return api
}