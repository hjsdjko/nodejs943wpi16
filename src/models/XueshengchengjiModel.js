import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 学生成绩
const XueshengchengjiModel = sequelize.define('XueshengchengjiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	biaoti: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '标题'
	},
	shijuanmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '试卷名称'
	},
	kemu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '科目'
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
	chengji: {
		type: DataTypes.DOUBLE,
		defaultValue: 0,
		allowNull: true,
		comment: '成绩'
	},
	dengjishijian: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('dengjishijian')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '登记时间'
	},
	pingyu: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '评语'
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
	tableName: 'xueshengchengji'
})

export default XueshengchengjiModel
