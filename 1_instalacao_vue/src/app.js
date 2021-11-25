const MyNameApp = {
    data() {
        return {
            name: "",
            idade: 22,
            input_name:""
        }
    },
    //link de vento por uma diretiva do vue
    methods:{
        submitForm(e){
            e.preventDefault();

            console.log(this.input_name);
            this.name = this.input_name
        }
    }
}


Vue.createApp(MyNameApp).mount("#app");
