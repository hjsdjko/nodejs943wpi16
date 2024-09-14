import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 课程考勤
const KechengkaoqinModel = sequelize.define('KechengkaoqinModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	kechengmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '课程名称'
	},
	shoukejiaoshi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '授课教师'
	},
	dakaleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '打卡类型'
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
	xueyuan: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '学院'
	},
	dakashijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('dakashijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '打卡时间'
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
	tableName: 'kechengkaoqin'
})

export default KechengkaoqinModel
