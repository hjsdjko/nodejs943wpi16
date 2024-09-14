import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 课程表
const KechengbiaoModel = sequelize.define('KechengbiaoModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	xuenianxueqi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学年学期'
	},
	shoukejiaoshi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '授课教师'
	},
	kechenghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '课程号'
	},
	kechengmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '课程名称'
	},
	kebiaoleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '课表类型'
	},
	zhouci: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '周次'
	},
	jieci: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '节次'
	},
	soukedidian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '搜课地点'
	},
	xuehao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学号'
	},
	xueshengxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学生姓名'
	},
	userid: {
		type: DataTypes.BIGINT,
		defaultValue: 0,
		allowNull: true,
		comment: '用户id'
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
	tableName: 'kechengbiao'
})

export default KechengbiaoModel
