/*!
 * VERSION: 0.2.0
 * DATE: 2016-10-20
 * GIT:https://github.com/shrekshrek/orienter
 *
 * @author: Shrek.wang, shrekshrek@gmail.com
 **/

(function (factory) {

    var root = (typeof self == 'object' && self.self == self && self) ||
        (typeof global == 'object' && global.global == global && global);

    if (typeof define === 'function' && define.amd) {
        define(['exports'], function (exports) {
            root.Orienter = factory(root, exports);
        });
    } else if (typeof exports !== 'undefined') {
        factory(root, exports);
    } else {
        root.Orienter = factory(root, {});
    }

}(function (root, Orienter) {

    Orienter = function () {
        this.initialize.apply(this, arguments);
    };

    Orienter.prototype = {
        lon: 0,
        lat: 0,
        direction: 0,
        fix: 0,
        os: '',
        initialize: function (config) {
            var _config = config || {};

            this.orient = _config.orient || function(){};
            this.change = _config.change || function(){};

            this._orient = this.orientHandler.bind(this);
            this._change = this.changeHandler.bind(this);

            this.lon = 0;
            this.lat = 0;
            this.direction = window.orientation || 0;

            switch (this.direction) {
                case 0:
                    this.fix = 0;
                    break;
                case 90:
                    this.fix = -270;
                    break;
                case -90:
                    this.fix = -90;
                    break;
            }

            if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                this.os = 'ios';
            } else {
                this.os = (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux')) ? 'android' : '';
            }
        },

        init: function () {
            window.addEventListener('deviceorientation', this._orient, false);
            window.addEventListener('orientationchange', this._change, false);
        },

        destroy: function () {
            window.removeEventListener('deviceorientation', this._orient, false);
            window.removeEventListener('orientationchange', this._change, false);
        },

        changeHandler: function (event) {
            this.direction = window.orientation;

            this.change(this.direction);
        },

        changeDirectionTo: function (n) {
            this.direction = n;
        },

        orientHandler: function (event) {
            switch (this.os) {
                case 'ios':
                    switch (this.direction) {
                        case 0:
                            this.lon = event.alpha + event.gamma;
                            if (event.beta > 0) this.lat = event.beta - 90;
                            break;
                        case 90:
                            if (event.gamma < 0) {
                                this.lon = event.alpha - 90;
                            } else {
                                this.lon = event.alpha - 270;
                            }
                            if (event.gamma > 0) {
                                this.lat = 90 - event.gamma;
                            } else {
                                this.lat = -90 - event.gamma;
                            }
                            break;
                        case -90:
                            if (event.gamma < 0) {
                                this.lon = event.alpha - 90;
                            } else {
                                this.lon = event.alpha - 270;
                            }
                            if (event.gamma < 0) {
                                this.lat = 90 + event.gamma;
                            } else {
                                this.lat = -90 + event.gamma;
                            }
                            break;
                    }
                    break;
                case 'android':
                    switch (this.direction) {
                        case 0:
                            this.lon = event.alpha + event.gamma + 30;
                            if (event.gamma > 90) {
                                this.lat = 90 - event.beta;
                            } else {
                                this.lat = event.beta - 90;
                            }
                            break;
                        case 90:
                            this.lon = event.alpha - 230;
                            if (event.gamma > 0) {
                                this.lat = 270 - event.gamma;
                            } else {
                                this.lat = -90 - event.gamma;
                            }
                            break;
                        case -90:
                            this.lon = event.alpha - 180;
                            this.lat = -90 + event.gamma;
                            break;
                    }
                    break;
            }

            this.lon += this.fix;
            this.lon %= 360;
            if (this.lon < 0) this.lon += 360;

            this.lon = Math.round(this.lon);
            this.lat = Math.round(this.lat);

            this.orient.apply(this, [{
                a: Math.round(event.alpha),
                b: Math.round(event.beta),
                g: Math.round(event.gamma),
                lon: this.lon,
                lat: this.lat,
                dir: this.direction
            }]);
        }

    };

    return Orienter;
}));
