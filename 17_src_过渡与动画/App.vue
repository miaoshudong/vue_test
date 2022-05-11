<template>
	<div id="root">
		<GunTest />
		<GunTest2/>
		<GunTest3/>
	</div>
</template>

<script>

	import GunTest from './components/GunTest'
	import GunTest2 from './components/GunTest2'
	import GunTest3 from './components/GunTest3'

	export default {
		name:'App',
		components:{GunTest,GunTest2,GunTest3},
		data() {
			return {
				//由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
				todos:[
					{id:'001',title:'抽烟',done:true},
					{id:'002',title:'喝酒',done:false},
					{id:'003',title:'开车',done:true}
				]
				
			}
		},
		}
</script>

<style>
	
</style>
