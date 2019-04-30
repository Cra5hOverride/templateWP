const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mst_employee = new Schema({
    employee_id: {
		type: Number,
		required: true
	},
	user: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true
    },
    doctype: {
		type: String,
		required: true
    },
    name: {
		type: String,
		required: true
	},
	salary: {
		type: Number,
		required: true
	}
});


const Login = mongoose.model('mst_employee', mst_employee, 'mst_employee');

module.exports = Login;