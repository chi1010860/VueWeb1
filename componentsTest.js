// global register 
Vue.component('gpx-testglobal', {
    template: '<div class="gpx-testglobal">全域自定義元件</div>'
});
var vmgg = new Vue({
    el: '#app2'
});

var GpxBlock = Vue.extend({
    template: '<div class="block">Block</div>'
});

var GpxHeader = Vue.extend({
    template: '<div class=header>Header</div>'
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

// create a root instance
var vm = new Vue({
    el: '#app',
    components: {
        // local register
        GpxHeader,
        GpxMain,
        GpxAside,
        GpxButton: {
            template: '<div class="gpx-button">' +
                '<input type="button" value="自定義元件" />' +
                '</div>'
        },
    }
});



