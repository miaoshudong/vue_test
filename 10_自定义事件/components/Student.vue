<template>
	<div class="student">
		<h2 >学生姓名：{{name}}</h2>
		<h2 >学生性别：{{sex}}</h2>
		<h2>number{{number}}</h2>
		<button @click="add">点我number++</button>
		<button @click="sendStudentNameToApp" >把学生名给app</button>
		<button @click="unbind">解绑atguigu事件</button>
		<button @click="death">销毁当前student组件的实例（vc）</button>
	</div>
</template>

<script>
	export default {
		name:'MyStudent',
		data() {
			return {
				name:'张三',
				sex:'男',
				number:0,
			}
		},
		methods:{
			sendStudentNameToApp(){
				//触发student组件实例身上的爱他硅谷事件
				this.$emit('atguigu',this.name)
				// this.$emit('demo')
			},
			unbind(){
				this.$off()
				// this.$off(['atguigu','demo'])
			},
			death(){
				this.$destroy()
			},
			add(){
				this.number++
			}
		}
	}
</script>

<style lang="less" scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
		.atguigu{
			font-size: 40px;
		}
	}
</style>
