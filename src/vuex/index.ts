import { createStore } from 'vuex'
const store = createStore({
    //状态变量
    state() {
        return {
            Token: localStorage["token"],
            NickName: localStorage["nickname"]
        }
    },
    mutations: {
        SettingToken(state: any, Token){
            state.Token = Token;
        },
        SettingNickName(state: any, NickName){
            state.NickName = NickName;
        }
    }
    //方法
})
export default store;