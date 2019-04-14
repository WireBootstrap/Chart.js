(function () {


    $.fn.ebChartjs = function (config) {

        var self = this;
        eb.ui.prependClass(self, "eb-chartjs eb-plugin");

        var cmp = new eb.ui.Component(this, config, _defaults(), true);
        var schema = cmp.updateFieldSchema({ series: [], labels: "labels" });

        var cfg = cmp.config();


        function _init() {

            _ensureComponent(function () {                
                cmp.bindData(_bind);
            });

        }

        function _bind() {
            
            var ctx = self.get(0);
            
            ctx = ctx.getContext("2d");

            var options = cfg.chartjs.options;

            cfg.chartjs.data = _dataset();

            if (cfg.chartjs.type == "bar")
                options.scales = $.extend(true, {
                        yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                            }
                        }]
                }, options.scales);


            var cht = new Chart(ctx, cfg.chartjs);

            cmp.ready();

        }

        function _defaults() {
            
            return {
                type: "line",
                chartjs: {
                    data: null,
                    options: {
                        maintainAspectRatio: true,
                        responsive: true
                    }
                }
            };

        }

        function _dataset() {

            /*
                series: [], labels: "labels"        
            */

            var data = cmp.data();
            cfg.chartjs.data = {};
            var d = cfg.chartjs.data;

            cfg.chartjs.type = cfg.type || cfg.chartjs.type;


            // labels

            d.labels = [];

            data.Rows.forEach(function (r) {
                d.labels.push(r[schema.labels]);
            });

            // data

            d.datasets = d.datasets || [];
            schema.series.forEach(function (series, index) {

                var title = data.getColumnTitle(series);
                var n = false;
                var ds = new eb.data.DataTable(d.datasets).where().eq("label", title).first();

                if (!ds) {
                    ds = {};
                    n = true;
                }

                if (cfg.chartjs.type == "pie") {
                    ds = $.extend({
                        backgroundColor: getColors()
                    }, ds);
                }
                else 
                    ds = $.extend(getColor(index), ds);
                

                //datasets
                ds.label = ds.label || title;
                ds.data = [];
                data.Rows.forEach(function (r) {
                    ds.data.push(r[series]);
                });

                if (n) d.datasets.push(ds);

            });

            return d;

        }

        function getColors(index) {

            var rgb = getRgbColors();
            var cs = [];

            rgb.forEach(function (c) {
                cs.push('rgb(' + c + ')');
            });

            return cs;
        }

        function getColor(index) {

            var rgb = getRgbColors();
            var c = rgb[index];

            return {
                borderColor: 'rgba('+ c +', 0.8)',
                pointBackgroundColor: 'rgba('+ c +', 0.8)',
                pointRadius: 2,
                borderWidth: 1,
                backgroundColor: 'rgba(' + c + ', 0.2)'
            };

        }       


        function getRgbColors() {

            // http://ksrowell.com/blog-visualizing-data/2012/02/02/optimal-colors-for-graphs/ 
            // https://learnui.design/tools/data-color-picker.html#divergent

            return [
                '114,147,203',
                '225,151,76',
                '132,186,91',
                '128,133,133',
                '144,103,167',
                '171,104,87',
                '204,194,16',
                '211,94,96',
                '0,135,108', //'#00876c',
                '106,170,150', //'#6aaa96',
                '174,205,194', //'#aecdc2',
                '241,241,241' //'#f1f1f1',
//                '#f0b8b8',
  //              '#e67f83',
    //            '#d43d51'
            ];


            /*
                        var cs = {
                            white: "rgba(255,255,255,1.0)"
                              , fillBlack: "rgba(45, 53, 60, 0.6)"
                              , fillBlackLight: "rgba(45, 53, 60, 0.2)"
                              , strokeBlack: "rgba(45, 53, 60, 0.8)"
                              , highlightFillBlack: "rgba(45, 53, 60, 0.8)"
                              , highlightStrokeBlack: "rgba(45, 53, 60, 1)"
                              , fillBlue: "rgba(52, 143, 226, 0.6)"
                              , fillBlueLight: "rgba(52, 143, 226, 0.2)"
                              , strokeBlue: "rgba(52, 143, 226, 0.8)"
                              , highlightFillBlue: "rgba(52, 143, 226, 0.8)"
                              , highlightStrokeBlue: "rgba(52, 143, 226, 1)"
                              , fillGrey: "rgba(182, 194, 201, 0.6)"
                              , fillGreyLight: "rgba(182, 194, 201, 0.2)"
                              , strokeGrey: "rgba(182, 194, 201, 0.8)"
                              , highlightFillGrey: "rgba(182, 194, 201, 0.8)"
                              , highlightStrokeGrey: "rgba(182, 194, 201, 1)"
                              , fillGreen: "rgba(0, 172, 172, 0.6)"
                              , fillGreenLight: "rgba(0, 172, 172, 0.2)"
                              , strokeGreen: "rgba(0, 172, 172, 0.8)"
                              , highlightFillGreen: "rgba(0, 172, 172, 0.8)"
                              , highlightStrokeGreen: "rgba(0, 172, 172, 1)"
                              , fillPurple: "rgba(114, 124, 182, 0.6)"
                              , fillPurpleLight: "rgba(114, 124, 182, 0.2)"
                              , strokePurple: "rgba(114, 124, 182, 0.8)"
                              , highlightFillPurple: "rgba(114, 124, 182, 0.8)"
                              , highlightStrokePurple: "rgba(114, 124, 182, 1)"
                              , randomScalingFactor: function () {
                                  return Math.round(100 * Math.random());
                              }
                        };
            */

        }


        function _ensureComponent(cb) {

            if (typeof Chart == 'undefined')
                eb.loadJs("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js", cb);
            else
                cb();

        }

        this.getData = function () {
            return cmp.data();
        }

        this.config = function () {
            return cfg;
        }

        this.databind = function () {
            _bind();
        }

        _init();

        return this;
    }

})();


eb.chartjs = {
    version: "1.0.8"
}
