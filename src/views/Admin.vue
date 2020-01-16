<template>
    <div class="admin">
        <main>
            <div class="main-inner">
                <div class="content">
                    <div class="post-expand">
                        <div class="posts-collapse">
                            <div class="login">
                                <h1>登录</h1>

                                <p>用户名:<input type="text" v-model="name"></p>
                                <p>密码:<input type="password" v-model="pwd"></p>

                                <button @click="login" class="btn bg-danger">登录</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "Admin",
        data: function () {
            return {
                name:'',
                pwd:''
            }
        },

        methods: {
            login: function () {
                let _this = this
                this.$http.request({
                    url: _this.$url + 'login/',
                    method: 'post',
                    data:{'name':_this.name,'pwd':_this.pwd}
                }).then(function (response) {
                    // console.log(response.data)
                    alert(_this.$store.state.id)
                    if(response.data.status==100){
                        //往stort.js的state的字典中写入值
                        // _this.$store.state.name=_this.name
                        // _this.$store.state.token=response.data.token
                        //调用store下的某个方法,用commit,第一个参数是方法名,第二个参数是参数
                        _this.$store.commit('login',response)
                    }
                    alert(_this.$store.state.id)

                }).catch(function () {
                    // console.log(response)
                })

            },

        },
    }
</script>

<style lang="scss" scoped>
    .content {
        min-height: 320px;
        margin-top:50px;
        .posts-expand {
            padding-top: 40px;
        }
        .posts-collapse {
            position: relative;
            margin-left: 55px;
            top: -10px;
            /*opacity: 0;*/
            animation: down 0.5s 0.5s linear;
            animation-fill-mode: both;
            &::after {
                content: ' ';
                position: absolute;
                top: 20px;
                left: 0;
                margin-left: -2px;
                width: 4px;
                height: 100%;
                background: #f5f5f5;
                z-index: -1;
            }
        }
    }

    @media screen and(min-width: 300px)and (max-width:768px) {
        .content {
            .posts-collapse {
                margin: 0 20px;
            }
        }
    }

</style>