var dat = new Float32Array(19*19*18);
for(i = 0; i < 19*19*18; i++) dat[i] = i;

var input = ndarray(dat, [18, 19, 19]); // .hi(null, null, 18).transpose(1, 0, 2).step(1, -1, 1);

newinput = input.transpose(1, 2, 0);

run(gl, compiledNet, { main_input: newinput, layerPause: false });
compiledNet.info["residual8+relu8"].output.read().data


a = compiledNet.info["conv2d0"].output.read();

qq = a.transpose(2,0,1);

qq.get(0,0,0);

b = compiledNet.info["residual8+relu8"].output.read();
b.shape


bb = b.transpose(2, 0, 1);

a = compiledNet.info['pol!bn'].output.read();

b = compiledNet.info['pol!flatten'].output.read();


kn = compiledNet.network[1].kernel;

ss = 0.0;
for (inc = 0; inc < 18; inc++) {
for (i = 0; i < 2; i++) {
for (j = 0; j < 2; j++) {
    ss = ss + kn.get(i, j, inc);
}
}
}
console.log(ss);