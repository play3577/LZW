'use strict';

var loadNetwork = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(styleName) {
        var keras_model, keras_model_meta, buffer, network, cn;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 0;
                        // return _context.abrupt('return', lastNetwork);

                    case 2:
                        _context.next = 4;
                        return loadJSON('gom.proto.json');

                    case 4:
                        keras_model = _context.sent;
                        _context.next = 7;
                        return loadJSON('gom.meta.json');

                    case 7:
                        keras_model_meta = _context.sent;
                        _context.next = 10;
                        return loadBuffer('gom.buf', { progressContainer: document.querySelector('.progress') });

                    case 10:
                        buffer = _context.sent;
                        _context.next = 11;

                        return import_keras_network(keras_model, keras_model_meta, buffer);
                    
                    case 11:
                        network = _context.sent;
                        console.log(network);
                        _context.next = 12;

                        var dat = new Float32Array(19*19*18);
                        var input = ndarray(dat, [19, 19, 18]); // .hi(null, null, 18).transpose(1, 0, 2).step(1, -1, 1);
                        console.log(input);
                        console.log("WTF");
                        return compile(gl, network, {
                            main_input: input,
                            layerPause: true,
                            progressContainer: document.querySelector('.progress')
                        });                       
                    
                    case 12:
                        cn = _context.sent;
                        compiledNet = cn;
                        var dat = new Float32Array(19*19*18);
                        var input = ndarray(dat, [19, 19, 18]); // .hi(null, null, 18).transpose(1, 0, 2).step(1, -1, 1);
                        return _context.abrupt('return', compiledNet);

                    case 15:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function loadNetwork(_x3) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function kill_title() {
    var titleel = document.querySelector('.canvas-wrap.title');
    if (titleel) titleel.parentElement.removeChild(titleel);
}

var style = 'udnie';

var last = void 0;

var canvas = document.getElementById('stylize-canvas');
var gl = TF.createGL(canvas),
    OutputTensor = TF.OutputTensor,
    Tensor = TF.Tensor,
    InPlaceTensor = TF.InPlaceTensor;

var C;

var compiledNet = void 0;
var lastNetwork = void 0;

function formatNumber(number) {
    number = String(number).split('.');
    return number[0].replace(/(?=(?:\d{3})+$)(?!\b)/g, ',') + (number[1] ? '.' + number[1] : '');
}

$(document).ready(function() {        
    console.log("Loading GO ...");
    loadNetwork("Wave");
    console.log("[DONE]");
    // console.log(network);
});

