var app = new Vue({
    el: "#app",
    data: {
        isBroken: false,
    },
    methods: {
        playSound: function () {
            var r = Math.ceil(Math.random() * 100);
            if (!this.isBroken){
                if (r <= 20) {
                    this.playMothercake();
                }
                else {
                    this.playLove();
                }
            }
            else {
                this.playMothercake();
            }
        },
        playLove: function(){
            var love = new Audio("./sounds/love.mp3");
            love.play();
        },
        playMothercake: function() {
            var mothercake = new Audio("./sounds/mothercake.mp3");
            mothercake.play();
            this.isBroken = true;
        },
        playRepair: function() {
            var repair = new Audio("./sounds/repair.mp3");
            repair.play();
            this.isBroken = false;
        }
    }
})