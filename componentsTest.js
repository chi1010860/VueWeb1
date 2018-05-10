// global register 
Vue.component('gpx-testglobal', {
    template: '<div class="gpx-testglobal">全域自定義元件</div>'
});

var GpxBlock = Vue.extend({
    template: '<div class="block">Block</div>'
});

var GpxHeader = Vue.extend({
    template: '<div class=header>Header</div>',
});

var GpxMain = Vue.extend({
    template: '<div class="main">Main' +
        '<gpx-block></gpx-block>' +
        '<gpx-block></gpx-block>' +
        '<gpx-block></gpx-block>' +
        '</div>',
    components: {
        GpxBlock
    }
});

var GpxAside = Vue.extend({
    template: '<div class="aside">Aside</div>'
});

var GpxButton = Vue.extend({
    template: '<div class="gpx-button">' +
        '<input type="button" value="自定義元件" @click="count++" />' +
        ' - <span>{{ count }}</span>' +
        '</div>',
    data: function () { // 子元件裡面的data需要用function return出來
        return {
            count: 0
        }
    }
});

// create a root instance
var vm = new Vue({
    el: '#app',
    components: {
        // local register
        GpxHeader,
        GpxMain,
        GpxAside,
        GpxButton
    }
});

var vm2 = new Vue({
    el: '#app2',
    data: {
        count: 0
    },
    methods: {
        updateEvent: function () {
            this.count++;
        },
        destroyEvent: function () {
            vm2.$destroy();
        }
    },
    beforeCreate: function () {
        // 元件實體剛被建立，屬性計算之前
        console.log('beforeCreate - this.count: ', this.count);
        console.log('beforeCreate - this.$el: ', this.$el);
    },
    created: function () {
        // 元件實體已建立，屬性已綁定，但DOM還沒生成
        console.log('created - this.count: ', this.count);
        console.log('created - this.$el: ', this.$el);
    },
    beforeMount: function () {
        // template編譯成標準HTML之前
        console.log('beforeMount - this.$el: ', this.$el);
    },
    mounted: function () {
        // template編譯成標準HTML之後
        console.log('mounted - this.$el: ', this.$el);
    },
    beforeUpdate: function () {
        // 元件被更新之前
        console.log('beforeUpdate - this.count: ', this.count);
        console.log('beforeUpdate - this.$el.querySelector("h1").innerText: ', this.$el.querySelector('h1').innerText);
    },
    updated: function () {
        // 元件被更新之後
        console.log('updated - this.count: ', this.count);
        console.log('updated - this.$el.querySelector("h1").innerText: ', this.$el.querySelector('h1').innerText);
    },
    beforeDestroy: function () {
        // Destroy(Vue實體與DOM脫鉤)之前
        console.log('beforeDestroy - this.$el: ', this.$el);
    },
    destroyed: function () {
        // Destroy(Vue實體與DOM脫鉤)之後
        console.log('destroyed - this.$el: ', this.$el);
    }
});

