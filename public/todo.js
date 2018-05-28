// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
    apiKey: "AIzaSyC-h4qsg8kSLbD9XCdfaKWh4cQNZ5I1rMs",
    authDomain: "caca77.firebaseapp.com",
    databaseURL: "https://caca77.firebaseio.com",
    projectId: "caca77",
    storageBucket: "caca77.appspot.com",
};
firebase.initializeApp(config);

var app = new Vue({
    el: "#app",
    data: {
        todoDB: "",
        newTodo: "",
        todos: []
    },
    methods: {
        newElement: function () {
            if (this.newTodo == "") return
            this.todoDB.push({
                isArchive: false,
                isChecked: false,
                todo: this.newTodo
            });
            this.newTodo = "";
        },
        addKeyPress: function (e) {
            e = e || window.event;
            if (e.keyCode == 13) {
                document.getElementById("btnAdd").click();
            }
        },
        check: function (e) {
            const vm = this;
            e.target.classList.toggle("checked");
            let index = e.target.id;
            let newItem;
            vm.todoDB
                .once("value")
                .then(function (snapshot) {
                    let item = snapshot.child(index).val();
                    newItem = {
                        isArchive: item.isArchive,
                        isChecked: !item.isChecked,
                        todo: item.todo
                    };
                })
                .then(function () {
                    return vm.todoDB.child(index).set(newItem);
                });
        },
        cancel: function (e) {
            this.todoDB.child(e.target.id).remove();
        }
    },
    created: function () {
        const vm = this
        var db = firebase.database().ref("/todos/");
        vm.todoDB = db;
    },
    mounted: function () {
        const vm = this;
        vm.todoDB.on("value", function (snapshot) {
            vm.todos = snapshot.val();
        });
    },
    updated: function () {
        const vm = this
        for (let key in vm.todos) {
            if (vm.todos[key].isChecked) {
                document.getElementById(key).classList.add("checked");
            } else {
                document.getElementById(key).classList.remove("checked");
            }
        }
    }
})