Vue.component('one-component',{
    template:"<div>a component</div>"
})

var child = {
    template:"<div>two component</div>"
}

var vm = new Vue({
    el:"#main",
    data:{
        str:"1"
    },
    methods:{

    },
    components:{
        'two-component':child
    }
})

var data = {
    c: 2
}

