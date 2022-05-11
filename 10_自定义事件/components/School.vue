<template>
	<div class="school">
		<h2 >学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolNameToApp">把学校名给app</button>
	</div>
</template>

<script>
	export default {
		name:'MySchool',
		props:['getSchoolName'],
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		methods: {
			sendSchoolNameToApp(){

				this.getSchoolName(this.name)
			}
			
		},
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>