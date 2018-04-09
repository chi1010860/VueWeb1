var app = new Vue({
    el:'#app',
    data:{
      family:[
        {son:'Chris'},
        {son:'Jason'},
        {son:'Willy'}
      ],
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      isShow: true,
      score: 60,
    }
})
  
var app2 = new Vue({
    el:"#app-2",
    data:{
        todos:[
        { text: 'a'},
        { text: 'b'},
        { text: 'c'},
        ],
        message:"What the fuck"
    },
    methods:{ // 所有function都註冊到這裡
        reverseMessage: function(){
        this.message = this.message.split('').reverse().join('')
        }
    }
})
  
function createObj(key, value){
    const obj = {};
    obj[key] = value;
    return obj;
}

const person = createObj('name','John');

console.log(person);