import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 宿舍安排
const SusheanpaiModel = sequelize.define('SusheanpaiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
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
	xingbie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '性别'
	},
	xueyuan: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学院'
	},
	nianji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '年级'
	},
	banji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '班级'
	},
	qinshihao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '寝室号'
	},
	chuangweihao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '床位号'
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
	tableName: 'susheanpai'
})

export default SusheanpaiModel
