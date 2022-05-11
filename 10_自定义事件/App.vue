<template>
	<div class="app">
		<h1 >{{msg}}</h1>
		<h2>学生姓名是：{{studentName}}</h2>
		<School :getSchoolName="getSchoolName"/>
		<!-- <Student v-on:atguigu="getStudentName"/> -->
		<!-- <Student @atguigu="getStudentName" /> -->
		<Student ref="student"></Student>
	</div>
</template>

<script>
	import Student from './components/Student.vue'
	import School from './components/School.vue'

	export default {
		name:'App',
		components:{ School, Student, },
		data() {
			return {
				msg:'你好啊!',
				studentName:'',
			}
		},
		methods: {
			getSchoolName(name){
				console.log('App收到了学校名字:'+name)
			},
			getStudentName(name){
				console.log('App收到了学生名:',name);
				this.studentName=name

			},
			
		},
		
		mounted(){
			this.$refs.student.$on('atguigu',this.getStudentName)
		}
	}
</script>

<style scoped>
	.app{
		background-color: grey;
		padding: 5px;
	}
</style>
