import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 校园新闻
const XiaoyuanxinwenModel = sequelize.define('XiaoyuanxinwenModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	xinwenbiaoti: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '新闻标题'
	},
	fengmian: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '封面'
	},
	xinwenleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '新闻类型'
	},
	zebian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '责编'
	},
	fabushijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('fabushijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '发布时间'
	},
	zixunneirong: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '资讯内容'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'xiaoyuanxinwen'
})

export default XiaoyuanxinwenModel
