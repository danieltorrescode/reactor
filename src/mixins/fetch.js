export default {
    data() 
    {
        return{
            url:this.$App.baseUrl,
            fetchHeaders:{
                'Authorization': `${localStorage.getItem("token")}`
            },
            fetchContent:{},
            response: null
        }
    },
    methods:{

        request(method,resource,data) {
            let url = `${this.url}${resource}`
            
            let body = {}

            if ( JSON.stringify(data) != '{}' ){
                body ={
                    body: JSON.stringify(data)                 
                }
            }

            let content = {
                method: method,
                headers:{
                    'Content-Type': 'application/json',
                    ...this.fetchHeaders
                },
                ...body,
                ...this.fetchContent
            }
            
            return fetch(url,content).then(
                res => this.checkResponse(res)
            )
            .then(resp => resp)
            .catch(error => {
                console.error('Error:', error)
                this.showMessage(error,"error")
            });

        },
        checkResponse(resp){
            // console.log(resp)
            if(resp.status == "401"){
                this.logout(resp.statusText)
            }else{
                return resp.json()
            }
        },
        authenticate(){
            if('token' in this.response){
                let token = this.response.token
                let user = this.response.user

                localStorage.setItem("token",token)
                localStorage.setItem("user",JSON.stringify(user))

                this.showMessage(this.response.text,"success")

                this.$store.commit('setUser')
                this.$router.push("/")
            }else{

                this.showMessage(this.response.text,"error")
            }
        },
        logout(message){
            localStorage.removeItem("token")
            localStorage.setItem("user","{}")
            this.$store.commit('setUser')
            this.$router.push("/")
            this.showMessage(message,"error")
        },
        showMessage(message,type){
            this.$store.commit('setMessageColor', type)
            this.$store.commit('setMessageShow', true)
            this.$store.commit('setMessageText', message)
            this.$store.dispatch('cleanMessage')
        }

    } 
}
