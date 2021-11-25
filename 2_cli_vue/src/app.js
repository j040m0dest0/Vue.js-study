const MyNameApp = {
    data() {
        return {
            name: "",
            texto:"",
            idade: 22,
            input_name:"",
            input_texto:""
        }
    },
    //link de vento por uma diretiva do vue
    methods:{
        submitForm(e){
            e.preventDefault();

            console.log(this.input_name);
            this.name = this.input_name
            this.texto = this.input_texto

        }
    }
}


Vue.createApp(MyNameApp).mount("#app");
