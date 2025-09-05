import{w as je,f as qe,D as R,b as Ze,i as Qe,t as Je,q as et,v as tt,Q as nt,S as rt}from"./web-SALwWEIV.js";import{u as I}from"./canvasSize-Cx0VbMN-.js";import{u as ot,a as oe,b as it}from"./theme-4QPW1Br_.js";import{u as st}from"./fullscreen-Dd_xPGN0.js";/* @license twgl.js 5.5.4 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */const G=5120,N=5121,H=5122,W=5123,Y=5124,X=5125,K=5126,at=32819,ct=32820,ft=33635,ut=5131,lt=33640,mt=35899,dt=35902,At=36269,yt=34042,fe={};{const e=fe;e[G]=Int8Array,e[N]=Uint8Array,e[H]=Int16Array,e[W]=Uint16Array,e[Y]=Int32Array,e[X]=Uint32Array,e[K]=Float32Array,e[at]=Uint16Array,e[ct]=Uint16Array,e[ft]=Uint16Array,e[ut]=Uint16Array,e[lt]=Uint32Array,e[mt]=Uint32Array,e[dt]=Uint32Array,e[At]=Uint32Array,e[yt]=Uint32Array}function ue(e){if(e instanceof Int8Array)return G;if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)return N;if(e instanceof Int16Array)return H;if(e instanceof Uint16Array)return W;if(e instanceof Int32Array)return Y;if(e instanceof Uint32Array)return X;if(e instanceof Float32Array)return K;throw new Error("unsupported typed array type")}function le(e){if(e===Int8Array)return G;if(e===Uint8Array||e===Uint8ClampedArray)return N;if(e===Int16Array)return H;if(e===Uint16Array)return W;if(e===Int32Array)return Y;if(e===Uint32Array)return X;if(e===Float32Array)return K;throw new Error("unsupported typed array type")}function Tt(e){const t=fe[e];if(!t)throw new Error("unknown gl type");return t}const $=typeof SharedArrayBuffer<"u"?function(t){return t&&t.buffer&&(t.buffer instanceof ArrayBuffer||t.buffer instanceof SharedArrayBuffer)}:function(t){return t&&t.buffer&&t.buffer instanceof ArrayBuffer};function St(...e){console.error(...e)}const ie=new Map;function me(e,t){if(!e||typeof e!="object")return!1;let n=ie.get(t);n||(n=new WeakMap,ie.set(t,n));let i=n.get(e);if(i===void 0){const r=Object.prototype.toString.call(e);i=r.substring(8,r.length-1)===t,n.set(e,i)}return i}function pt(e,t){return typeof WebGLBuffer<"u"&&me(t,"WebGLBuffer")}function de(e,t){return typeof WebGLTexture<"u"&&me(t,"WebGLTexture")}const Ae=35044,x=34962,vt=34963,ht=34660,Et=5120,bt=5121,xt=5122,_t=5123,It=5124,Nt=5125,ye=5126,Te={attribPrefix:""};function Bt(e,t,n,i,r){e.bindBuffer(t,n),e.bufferData(t,i,r||Ae)}function Se(e,t,n,i){if(pt(e,t))return t;n=n||x;const r=e.createBuffer();return Bt(e,n,r,t,i),r}function pe(e){return e==="indices"}function Ft(e){return e===Int8Array||e===Uint8Array}function Rt(e){return e.length?e:e.data}const Ct=/coord|texture/i,Ut=/color|colour/i;function wt(e,t){let n;if(Ct.test(e)?n=2:Ut.test(e)?n=4:n=3,t%n>0)throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);return n}function Dt(e,t,n){return e.numComponents||e.size||wt(t,n||Rt(e).length)}function ve(e,t){if($(e))return e;if($(e.data))return e.data;Array.isArray(e)&&(e={data:e});let n=e.type?j(e.type):void 0;return n||(pe(t)?n=Uint16Array:n=Float32Array),new n(e.data)}function gt(e){return typeof e=="number"?e:e?le(e):ye}function j(e){return typeof e=="number"?Tt(e):e||Float32Array}function zt(e,t){return{buffer:t.buffer,numValues:2*3*4,type:gt(t.type),arrayType:j(t.type)}}function Lt(e,t){const n=t.data||t,i=j(t.type),r=n*i.BYTES_PER_ELEMENT,s=e.createBuffer();return e.bindBuffer(x,s),e.bufferData(x,r,t.drawType||Ae),{buffer:s,numValues:n,type:le(i),arrayType:i}}function Pt(e,t,n){const i=ve(t,n);return{arrayType:i.constructor,buffer:Se(e,i,void 0,t.drawType),type:ue(i),numValues:0}}function Mt(e,t){const n={};return Object.keys(t).forEach(function(i){if(!pe(i)){const r=t[i],s=r.attrib||r.name||r.attribName||Te.attribPrefix+i;if(r.value){if(!Array.isArray(r.value)&&!$(r.value))throw new Error("array.value is not array or typedarray");n[s]={value:r.value}}else{let c;r.buffer&&r.buffer instanceof WebGLBuffer?c=zt:typeof r=="number"||typeof r.data=="number"?c=Lt:c=Pt;const{buffer:o,type:f,numValues:a,arrayType:l}=c(e,r,i),m=r.normalize!==void 0?r.normalize:Ft(l),d=Dt(r,i,a);n[s]={buffer:o,numComponents:d,type:f,normalize:m,stride:r.stride||0,offset:r.offset||0,divisor:r.divisor===void 0?void 0:r.divisor,drawType:r.drawType}}}}),e.bindBuffer(x,null),n}function kt(e,t){return t===Et||t===bt?1:t===xt||t===_t?2:t===It||t===Nt||t===ye?4:0}const V=["position","positions","a_position"];function Ot(e,t){let n,i;for(i=0;i<V.length&&(n=V[i],!(n in t||(n=Te.attribPrefix+n,n in t)));++i);i===V.length&&(n=Object.keys(t)[0]);const r=t[n];if(!r.buffer)return 1;e.bindBuffer(x,r.buffer);const s=e.getBufferParameter(x,ht);e.bindBuffer(x,null);const c=kt(e,r.type),o=s/c,f=r.numComponents||r.size,a=o/f;if(a%1!==0)throw new Error(`numComponents ${f} not correct for length ${length}`);return a}function Vt(e,t,n){const i=Mt(e,t),r=Object.assign({},n||{});r.attribs=Object.assign({},n?n.attribs:{},i);const s=t.indices;if(s){const c=ve(s,"indices");r.indices=Se(e,c,vt),r.numElements=c.length,r.elementType=ue(c)}else r.numElements||(r.numElements=Ot(e,r.attribs));return r}function q(e){return!!e.texStorage2D}const $t=function(){const e={},t={};function n(i){const r=i.constructor.name;if(!e[r]){for(const s in i)if(typeof i[s]=="number"){const c=t[i[s]];t[i[s]]=c?`${c} | ${s}`:s}e[r]=!0}}return function(r,s){return n(r),t[s]||(typeof s=="number"?`0x${s.toString(16)}`:s)}}(),Z=St;function he(e){return typeof document<"u"&&document.getElementById?document.getElementById(e):null}const C=33984,U=34962,Gt=34963,Ht=35713,Wt=35714,Yt=35632,Xt=35633,Kt=35981,Ee=35718,jt=35721,qt=35971,Zt=35382,Qt=35396,Jt=35398,en=35392,tn=35395,w=5126,be=35664,xe=35665,_e=35666,Q=5124,Ie=35667,Ne=35668,Be=35669,Fe=35670,Re=35671,Ce=35672,Ue=35673,we=35674,De=35675,ge=35676,nn=35678,rn=35680,on=35679,sn=35682,an=35685,cn=35686,fn=35687,un=35688,ln=35689,mn=35690,dn=36289,An=36292,yn=36293,J=5125,ze=36294,Le=36295,Pe=36296,Tn=36298,Sn=36299,pn=36300,vn=36303,hn=36306,En=36307,bn=36308,xn=36311,D=3553,g=34067,ee=32879,z=35866,u={};function Me(e,t){return u[t].bindPoint}function _n(e,t){return function(n){e.uniform1f(t,n)}}function In(e,t){return function(n){e.uniform1fv(t,n)}}function Nn(e,t){return function(n){e.uniform2fv(t,n)}}function Bn(e,t){return function(n){e.uniform3fv(t,n)}}function Fn(e,t){return function(n){e.uniform4fv(t,n)}}function ke(e,t){return function(n){e.uniform1i(t,n)}}function Oe(e,t){return function(n){e.uniform1iv(t,n)}}function Ve(e,t){return function(n){e.uniform2iv(t,n)}}function $e(e,t){return function(n){e.uniform3iv(t,n)}}function Ge(e,t){return function(n){e.uniform4iv(t,n)}}function Rn(e,t){return function(n){e.uniform1ui(t,n)}}function Cn(e,t){return function(n){e.uniform1uiv(t,n)}}function Un(e,t){return function(n){e.uniform2uiv(t,n)}}function wn(e,t){return function(n){e.uniform3uiv(t,n)}}function Dn(e,t){return function(n){e.uniform4uiv(t,n)}}function gn(e,t){return function(n){e.uniformMatrix2fv(t,!1,n)}}function zn(e,t){return function(n){e.uniformMatrix3fv(t,!1,n)}}function Ln(e,t){return function(n){e.uniformMatrix4fv(t,!1,n)}}function Pn(e,t){return function(n){e.uniformMatrix2x3fv(t,!1,n)}}function Mn(e,t){return function(n){e.uniformMatrix3x2fv(t,!1,n)}}function kn(e,t){return function(n){e.uniformMatrix2x4fv(t,!1,n)}}function On(e,t){return function(n){e.uniformMatrix4x2fv(t,!1,n)}}function Vn(e,t){return function(n){e.uniformMatrix3x4fv(t,!1,n)}}function $n(e,t){return function(n){e.uniformMatrix4x3fv(t,!1,n)}}function S(e,t,n,i){const r=Me(e,t);return q(e)?function(s){let c,o;!s||de(e,s)?(c=s,o=null):(c=s.texture,o=s.sampler),e.uniform1i(i,n),e.activeTexture(C+n),e.bindTexture(r,c),e.bindSampler(n,o)}:function(s){e.uniform1i(i,n),e.activeTexture(C+n),e.bindTexture(r,s)}}function p(e,t,n,i,r){const s=Me(e,t),c=new Int32Array(r);for(let o=0;o<r;++o)c[o]=n+o;return q(e)?function(o){e.uniform1iv(i,c),o.forEach(function(f,a){e.activeTexture(C+c[a]);let l,m;!f||de(e,f)?(l=f,m=null):(l=f.texture,m=f.sampler),e.bindSampler(n,m),e.bindTexture(s,l)})}:function(o){e.uniform1iv(i,c),o.forEach(function(f,a){e.activeTexture(C+c[a]),e.bindTexture(s,f)})}}u[w]={Type:Float32Array,size:4,setter:_n,arraySetter:In};u[be]={Type:Float32Array,size:8,setter:Nn,cols:2};u[xe]={Type:Float32Array,size:12,setter:Bn,cols:3};u[_e]={Type:Float32Array,size:16,setter:Fn,cols:4};u[Q]={Type:Int32Array,size:4,setter:ke,arraySetter:Oe};u[Ie]={Type:Int32Array,size:8,setter:Ve,cols:2};u[Ne]={Type:Int32Array,size:12,setter:$e,cols:3};u[Be]={Type:Int32Array,size:16,setter:Ge,cols:4};u[J]={Type:Uint32Array,size:4,setter:Rn,arraySetter:Cn};u[ze]={Type:Uint32Array,size:8,setter:Un,cols:2};u[Le]={Type:Uint32Array,size:12,setter:wn,cols:3};u[Pe]={Type:Uint32Array,size:16,setter:Dn,cols:4};u[Fe]={Type:Uint32Array,size:4,setter:ke,arraySetter:Oe};u[Re]={Type:Uint32Array,size:8,setter:Ve,cols:2};u[Ce]={Type:Uint32Array,size:12,setter:$e,cols:3};u[Ue]={Type:Uint32Array,size:16,setter:Ge,cols:4};u[we]={Type:Float32Array,size:32,setter:gn,rows:2,cols:2};u[De]={Type:Float32Array,size:48,setter:zn,rows:3,cols:3};u[ge]={Type:Float32Array,size:64,setter:Ln,rows:4,cols:4};u[an]={Type:Float32Array,size:32,setter:Pn,rows:2,cols:3};u[cn]={Type:Float32Array,size:32,setter:kn,rows:2,cols:4};u[fn]={Type:Float32Array,size:48,setter:Mn,rows:3,cols:2};u[un]={Type:Float32Array,size:48,setter:Vn,rows:3,cols:4};u[ln]={Type:Float32Array,size:64,setter:On,rows:4,cols:2};u[mn]={Type:Float32Array,size:64,setter:$n,rows:4,cols:3};u[nn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:D};u[rn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:g};u[on]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:ee};u[sn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:D};u[dn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:z};u[An]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:z};u[yn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:g};u[Tn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:D};u[Sn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:ee};u[pn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:g};u[vn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:z};u[hn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:D};u[En]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:ee};u[bn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:g};u[xn]={Type:null,size:0,setter:S,arraySetter:p,bindPoint:z};function L(e,t){return function(n){if(n.value)switch(e.disableVertexAttribArray(t),n.value.length){case 4:e.vertexAttrib4fv(t,n.value);break;case 3:e.vertexAttrib3fv(t,n.value);break;case 2:e.vertexAttrib2fv(t,n.value);break;case 1:e.vertexAttrib1fv(t,n.value);break;default:throw new Error("the length of a float constant value must be between 1 and 4!")}else e.bindBuffer(U,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribPointer(t,n.numComponents||n.size,n.type||w,n.normalize||!1,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,n.divisor||0)}}function E(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4iv(t,n.value);else throw new Error("The length of an integer constant value must be 4!");else e.bindBuffer(U,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||Q,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,n.divisor||0)}}function P(e,t){return function(n){if(n.value)if(e.disableVertexAttribArray(t),n.value.length===4)e.vertexAttrib4uiv(t,n.value);else throw new Error("The length of an unsigned integer constant value must be 4!");else e.bindBuffer(U,n.buffer),e.enableVertexAttribArray(t),e.vertexAttribIPointer(t,n.numComponents||n.size,n.type||J,n.stride||0,n.offset||0),e.vertexAttribDivisor&&e.vertexAttribDivisor(t,n.divisor||0)}}function te(e,t,n){const i=n.size,r=n.count;return function(s){e.bindBuffer(U,s.buffer);const c=s.size||s.numComponents||i,o=c/r,f=s.type||w,l=u[f].size*c,m=s.normalize||!1,d=s.offset||0,A=l/r;for(let T=0;T<r;++T)e.enableVertexAttribArray(t+T),e.vertexAttribPointer(t+T,o,f,m,l,d+A*T),e.vertexAttribDivisor&&e.vertexAttribDivisor(t+T,s.divisor||0)}}const y={};y[w]={size:4,setter:L};y[be]={size:8,setter:L};y[xe]={size:12,setter:L};y[_e]={size:16,setter:L};y[Q]={size:4,setter:E};y[Ie]={size:8,setter:E};y[Ne]={size:12,setter:E};y[Be]={size:16,setter:E};y[J]={size:4,setter:P};y[ze]={size:8,setter:P};y[Le]={size:12,setter:P};y[Pe]={size:16,setter:P};y[Fe]={size:4,setter:E};y[Re]={size:8,setter:E};y[Ce]={size:12,setter:E};y[Ue]={size:16,setter:E};y[we]={size:4,setter:te,count:2};y[De]={size:9,setter:te,count:3};y[ge]={size:16,setter:te,count:4};const Gn=/ERROR:\s*\d+:(\d+)/gi;function Hn(e,t="",n=0){const i=[...t.matchAll(Gn)],r=new Map(i.map((s,c)=>{const o=parseInt(s[1]),f=i[c+1],a=f?f.index:t.length,l=t.substring(s.index,a);return[o-1,l]}));return e.split(`
`).map((s,c)=>{const o=r.get(c);return`${c+1+n}: ${s}${o?`

^^^ ${o}`:""}`}).join(`
`)}const se=/^[ \t]*\n/;function He(e){let t=0;return se.test(e)&&(t=1,e=e.replace(se,"")),{lineOffset:t,shaderSource:e}}function Wn(e,t){return e.errorCallback(t),e.callback&&setTimeout(()=>{e.callback(`${t}
${e.errors.join(`
`)}`)}),null}function Yn(e,t,n,i){if(i=i||Z,!e.getShaderParameter(n,Ht)){const s=e.getShaderInfoLog(n),{lineOffset:c,shaderSource:o}=He(e.getShaderSource(n)),f=`${Hn(o,s,c)}
Error compiling ${$t(e,t)}: ${s}`;return i(f),f}return""}function ne(e,t,n){let i,r,s;if(typeof t=="function"&&(n=t,t=void 0),typeof e=="function")n=e,e=void 0;else if(e&&!Array.isArray(e)){const a=e;n=a.errorCallback,e=a.attribLocations,i=a.transformFeedbackVaryings,r=a.transformFeedbackMode,s=a.callback}const c=n||Z,o=[],f={errorCallback(a,...l){o.push(a),c(a,...l)},transformFeedbackVaryings:i,transformFeedbackMode:r,callback:s,errors:o};{let a={};Array.isArray(e)?e.forEach(function(l,m){a[l]=t?t[m]:m}):a=e||{},f.attribLocations=a}return f}const Xn=["VERTEX_SHADER","FRAGMENT_SHADER"];function Kn(e,t){if(t.indexOf("frag")>=0)return Yt;if(t.indexOf("vert")>=0)return Xt}function jn(e,t,n){const i=e.getAttachedShaders(t);for(const r of i)n.has(r)&&e.deleteShader(r);e.deleteProgram(t)}const qn=(e=0)=>new Promise(t=>setTimeout(t,e));function Zn(e,t,n){const i=e.createProgram(),{attribLocations:r,transformFeedbackVaryings:s,transformFeedbackMode:c}=ne(n);for(let o=0;o<t.length;++o){let f=t[o];if(typeof f=="string"){const a=he(f),l=a?a.text:f;let m=e[Xn[o]];a&&a.type&&(m=Kn(e,a.type)||m),f=e.createShader(m),e.shaderSource(f,He(l).shaderSource),e.compileShader(f),e.attachShader(i,f)}}Object.entries(r).forEach(([o,f])=>e.bindAttribLocation(i,f,o));{let o=s;o&&(o.attribs&&(o=o.attribs),Array.isArray(o)||(o=Object.keys(o)),e.transformFeedbackVaryings(i,o,c||Kt))}return e.linkProgram(i),i}function Qn(e,t,n,i,r){const s=ne(n,i,r),c=new Set(t),o=Zn(e,t,s);function f(a,l){const m=er(a,l,s.errorCallback);return m&&jn(a,l,c),m}if(s.callback){Jn(e,o).then(()=>{const a=f(e,o);s.callback(a,a?void 0:o)});return}return f(e,o)?void 0:o}async function Jn(e,t){const n=e.getExtension("KHR_parallel_shader_compile"),i=n?(s,c)=>s.getProgramParameter(c,n.COMPLETION_STATUS_KHR):()=>!0;let r=0;do await qn(r),r=1e3/60;while(!i(e,t))}function er(e,t,n){if(n=n||Z,!e.getProgramParameter(t,Wt)){const r=e.getProgramInfoLog(t);n(`Error in program linking: ${r}`);const c=e.getAttachedShaders(t).map(o=>Yn(e,e.getShaderParameter(o,e.SHADER_TYPE),o,n));return`${r}
${c.filter(o=>o).join(`
`)}`}}function tr(e,t,n,i,r){return Qn(e,t,n,i,r)}function We(e){const t=e.name;return t.startsWith("gl_")||t.startsWith("webgl_")}const nr=/(\.|\[|]|\w+)/g,rr=e=>e>="0"&&e<="9";function or(e,t,n,i){const r=e.split(nr).filter(o=>o!=="");let s=0,c="";for(;;){const o=r[s++];c+=o;const f=rr(o[0]),a=f?parseInt(o):o;if(f&&(c+=r[s++]),s===r.length){n[a]=t;break}else{const m=r[s++],d=m==="[",A=n[a]||(d?[]:{});n[a]=A,n=A,i[c]=i[c]||function(T){return function(b){Ye(T,b)}}(A),c+=m}}}function ir(e,t){let n=0;function i(o,f,a){const l=f.name.endsWith("[0]"),m=f.type,d=u[m];if(!d)throw new Error(`unknown type: 0x${m.toString(16)}`);let A;if(d.bindPoint){const T=n;n+=f.size,l?A=d.arraySetter(e,m,T,a,f.size):A=d.setter(e,m,T,a,f.size)}else d.arraySetter&&l?A=d.arraySetter(e,a):A=d.setter(e,a);return A.location=a,A}const r={},s={},c=e.getProgramParameter(t,Ee);for(let o=0;o<c;++o){const f=e.getActiveUniform(t,o);if(We(f))continue;let a=f.name;a.endsWith("[0]")&&(a=a.substr(0,a.length-3));const l=e.getUniformLocation(t,f.name);if(l){const m=i(t,f,l);r[a]=m,or(a,m,s,r)}}return r}function sr(e,t){const n={},i=e.getProgramParameter(t,qt);for(let r=0;r<i;++r){const s=e.getTransformFeedbackVarying(t,r);n[s.name]={index:r,type:s.type,size:s.size}}return n}function ar(e,t){const n=e.getProgramParameter(t,Ee),i=[],r=[];for(let o=0;o<n;++o){r.push(o),i.push({});const f=e.getActiveUniform(t,o);i[o].name=f.name}[["UNIFORM_TYPE","type"],["UNIFORM_SIZE","size"],["UNIFORM_BLOCK_INDEX","blockNdx"],["UNIFORM_OFFSET","offset"]].forEach(function(o){const f=o[0],a=o[1];e.getActiveUniforms(t,r,e[f]).forEach(function(l,m){i[m][a]=l})});const s={},c=e.getProgramParameter(t,Zt);for(let o=0;o<c;++o){const f=e.getActiveUniformBlockName(t,o),a={index:e.getUniformBlockIndex(t,f),usedByVertexShader:e.getActiveUniformBlockParameter(t,o,Qt),usedByFragmentShader:e.getActiveUniformBlockParameter(t,o,Jt),size:e.getActiveUniformBlockParameter(t,o,en),uniformIndices:e.getActiveUniformBlockParameter(t,o,tn)};a.used=a.usedByVertexShader||a.usedByFragmentShader,s[f]=a}return{blockSpecs:s,uniformData:i}}function Ye(e,t){for(const n in t){const i=e[n];typeof i=="function"?i(t[n]):Ye(e[n],t[n])}}function Xe(e,...t){const n=e.uniformSetters||e,i=t.length;for(let r=0;r<i;++r){const s=t[r];if(Array.isArray(s)){const c=s.length;for(let o=0;o<c;++o)Xe(n,s[o])}else for(const c in s){const o=n[c];o&&o(s[c])}}}function cr(e,t){const n={},i=e.getProgramParameter(t,jt);for(let r=0;r<i;++r){const s=e.getActiveAttrib(t,r);if(We(s))continue;const c=e.getAttribLocation(t,s.name),o=y[s.type],f=o.setter(e,c,o);f.location=c,n[s.name]=f}return n}function fr(e,t){for(const n in t){const i=e[n];i&&i(t[n])}}function ur(e,t,n){n.vertexArrayObject?e.bindVertexArray(n.vertexArrayObject):(fr(t.attribSetters||t,n.attribs),n.indices&&e.bindBuffer(Gt,n.indices))}function ae(e,t){const n=ir(e,t),i=cr(e,t),r={program:t,uniformSetters:n,attribSetters:i};return q(e)&&(r.uniformBlockSpec=ar(e,t),r.transformFeedbackInfo=sr(e,t)),r}const lr=/\s|{|}|;/;function mr(e,t,n,i,r){const s=ne(n,i,r),c=[];if(t=t.map(function(a){if(!lr.test(a)){const l=he(a);if(l)a=l.text;else{const m=`no element with id: ${a}`;s.errorCallback(m),c.push(m)}}return a}),c.length)return Wn(s,"");const o=s.callback;o&&(s.callback=(a,l)=>{o(a,a?void 0:ae(e,l))});const f=tr(e,t,s);return f?ae(e,f):null}const dr=4,ce=5123;function Ar(e,t,n,i,r,s){n=n===void 0?dr:n;const c=t.indices,o=t.elementType,f=i===void 0?t.numElements:i;r=r===void 0?0:r,o||c?s!==void 0?e.drawElementsInstanced(n,f,o===void 0?ce:t.elementType,r,s):e.drawElements(n,f,o===void 0?ce:t.elementType,r):s!==void 0?e.drawArraysInstanced(n,r,f,s):e.drawArrays(n,r,f)}const yr=`// This file is based on https://github.com/brybrant/lava-lamp
// Original license: GNU General Public License v3.0
// See LICENSE file for details.
// Modifications:
// - Include uBackgroundColor and uLavaColor
// - Add noise overlay shader


precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uCameraPosition;
uniform vec3 uBackgroundColor;
uniform vec3 uLavaColor;

// Based on https://www.shadertoy.com/view/fsKXDm

// Noise functions
// Based on https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
float rand(vec2 n) { 
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u*u*(3.0-2.0*u);
  
  float res = mix(
    mix(rand(ip), rand(ip+vec2(1.0,0.0)), u.x),
    mix(rand(ip+vec2(0.0,1.0)), rand(ip+vec2(1.0,1.0)), u.x), u.y);
  return res*res;
}

#define MAX_STEPS 30
#define MAX_DIST 30.0
#define MIN_DIST 1.5
vec4 sphere = vec4(0.0, 0.0, 0.0, 1.0);
vec3 lightpos = vec3(-30.0, 2.0, 0.0);
float ballspeed = 0.125;

float opSmoothUnion(float d1, float d2, float k) {
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float getDist(vec3 raypos) {
  float time = uTime * ballspeed;
  float botPlane = raypos.y + 2.0;
  float topPlane = 2.0 - raypos.y;

  float sphereMiddle = length(
    raypos - vec3(
      0.0,
      sin(time + 2.0) * 3.0,
      sin(time)
    )
  ) - 1.5;

  float sphereRight = length(
    raypos - vec3(
      -1.0,
      sin(time) * 2.0,
      4.0 + cos(time)
    )
  ) - 1.5;

  float sphereLeft = length(
    raypos - vec3(
      -1.0,
      sin(time + 4.0) * 2.0,
      -4.0 - cos(time)
    )
  ) - 1.5;

  float sphereBackRight = length(
    raypos - vec3(
      3.0,
      sin(time * 0.75 + 6.0) * 2.0,
      2.5 - cos(time * 0.75)
    )
  ) - 2.0;

  float sphereBackLeft = length(
    raypos - vec3(
      3.0,
      sin(time * 0.75 + 9.0) * 2.0,
      -2.5 + cos(time * 0.75 + 3.0)
    )
  ) - 2.0;

  float dist = opSmoothUnion(botPlane, topPlane, 1.0);
  dist = opSmoothUnion(dist, sphereMiddle, 1.0);
  dist = opSmoothUnion(dist, sphereRight, 1.0);
  dist = opSmoothUnion(dist, sphereLeft, 1.0);
  dist = opSmoothUnion(dist, sphereBackRight, 1.0);
  dist = opSmoothUnion(dist, sphereBackLeft, 1.0);
  
  return dist;
}

vec3 getNormal(vec3 p) {
  return normalize(sphere.xyz - p);
}

float getLight(vec3 p) {
  vec3 lightdir = normalize(lightpos - p);
  vec3 normal = getNormal(p);
  float diff = dot(normal,lightdir);
  return diff;
}

float raymarch(vec3 camera, vec3 dir) {
  float dist = 1.5;

  for (int i = 0; i < MAX_STEPS; i++) {
    vec3 pos = camera + dir * dist;
    float stepdist = getDist(pos);
    dist += stepdist;
    if (dist > MAX_DIST || dist < MIN_DIST) break;
  }

  return dist;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - uResolution.xy * 0.5) / uResolution.y;
  vec3 col = vec3(0.0);

  vec3 camera = uCameraPosition;

  vec3 ray = vec3(1.0, uv.y, uv.x);

  float d = raymarch(camera, normalize(ray));

  vec3 p = camera + ray * d;

  float diff = getLight(p);

  col += vec3(1.0 - diff);
  col = col * 0.5;
  
  // Generate noise with extremely decreased scale (extremely large pattern)
  float noiseScale = 0.7; // Decreased by 1000% from 11.11
  float noiseValue = noise(gl_FragCoord.xy / noiseScale + uTime * 0.01);
  
  // Add a second layer of noise for more detail
  float noiseValue2 = noise(gl_FragCoord.xy / (noiseScale * 0.3) + vec2(uTime * 0.02, -uTime * 0.01));
  
  // Add a third layer for even more fine detail
  float noiseValue3 = noise(gl_FragCoord.xy / (noiseScale * 0.1) + vec2(-uTime * 0.03, uTime * 0.02));
  
  // Blend all noise layers with different weights
  noiseValue = (noiseValue * 0.5 + noiseValue2 * 0.3 + noiseValue3 * 0.2);
  
  // Apply noise to the final color
  vec3 finalColor = mix(
    uBackgroundColor,
    uLavaColor,
    col
  );
  
  // Blend noise with the final color - increased strength for more visibility
  float noiseStrength = 0.06; // Increased strength to make it more noticeable
  finalColor = mix(finalColor, finalColor * (1.0 - noiseStrength) + vec3(noiseValue) * noiseStrength, 0.95);
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`,Tr=`// This file is based on https://github.com/brybrant/lava-lamp
// Original license: GNU General Public License v3.0
// See LICENSE file for details.

attribute vec4 position;

void main() {
  gl_Position = position;
}
`;function Sr(e={}){let{backgroundColor:t=[.427,.157,.851],lavaColor:n=[2,.8,-.6]}=e;const i=Math.PI/180,r=6,s=90*i,c=270*i,o=Math.sin(s)*r,f=[o*Math.sin(c),Math.cos(s)*r,o*Math.cos(c)],a=document.getElementById("background");if(!(a instanceof HTMLCanvasElement))return console.error("Canvas element #background not found or is not an HTMLCanvasElement."),{start:()=>{},stop:()=>{},renderSingleFrame:()=>{},updateColors:()=>{},restart:()=>{},webglNotAvailable:!0};const l=a,m={alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!0},d=l.getContext("webgl2",m)||l.getContext("webgl",m);if(!d)return console.error("WebGL context not available on the canvas element."),{start:()=>{},stop:()=>{},renderSingleFrame:()=>{},updateColors:()=>{},restart:()=>{},webglNotAvailable:!0};const A=mr(d,[Tr,yr]);d.useProgram(A.program);const b=Vt(d,{position:[-1,-1,0,1,-1,0,-1,1,0,-1,1,0,1,-1,0,1,1,0]});ur(d,A,b);function B(){const h=I.getCurrentDimensions();l.width=h.width,l.height=h.height,d.viewport(0,0,h.width,h.height)}window.addEventListener("resize",B),B();let v=null,M=Math.round(300*Math.random()),F=0;function _(h,k=!1){if(!k&&F>0){const O=(h-F)*.001;M+=O}k||(F=h);const re=I.getCurrentDimensions(),Ke={uTime:M/2,uResolution:[re.width,re.height],uCameraPosition:f,uBackgroundColor:t,uLavaColor:n};try{Xe(A,Ke),Ar(d,b)}catch(O){return console.error(O),cancelAnimationFrame(v)}k||(v=requestAnimationFrame(_))}return{webglNotAvailable:!1,start:()=>(v||(F=0,v=requestAnimationFrame(_)),v),stop:()=>{v&&(cancelAnimationFrame(v),v=null)},renderSingleFrame:()=>{v&&(cancelAnimationFrame(v),v=null),_(performance.now(),!0)},updateColors:h=>{h.backgroundColor&&(t=h.backgroundColor),h.lavaColor&&(n=h.lavaColor),v||_(performance.now(),!0)},restart:()=>{M=Math.round(300*Math.random()),v||_(performance.now(),!0)}}}var pr=Je('<div id=background-container class="fixed inset-0 w-screen h-screen flex items-center justify-center"><canvas id=background>');function xr(){const{currentTheme:e}=it(),{isAnimationOn:t,webglNotAvailable:n,setWebglNotAvailable:i,shouldRestart:r,setShouldRestart:s}=ot();st();const{selectedPreset:c,customWidth:o,customHeight:f}=I;let a=null;const l=()=>{a&&!t()&&a.renderSingleFrame()},m=()=>{a&&!a.webglNotAvailable&&document.getElementById("background")&&window.dispatchEvent(new Event("resize"))};return je(()=>{const d=oe[e()];if(a=Sr(d),a.webglNotAvailable){i(!0);return}t()?a.start():a.renderSingleFrame(),window.addEventListener("resize",l)}),qe(()=>{a&&!a.webglNotAvailable&&a.stop(),window.removeEventListener("resize",l)}),R(()=>{!a||a.webglNotAvailable||(t()?a.start():a.renderSingleFrame())}),R(()=>{if(!a||a.webglNotAvailable)return;const d=e(),A=oe[d];A&&a.updateColors(A)}),R(()=>{c(),o(),f(),m()}),R(()=>{r()&&a&&(a.restart(),s(!1))}),Ze(rt,{get when(){return!n()},get children(){var d=Qe(pr),A=d.firstChild;return et(T=>{var b=c()==="Auto (Window Size)"?"w-full h-full":"",B=c()!=="Auto (Window Size)"?{width:`${I.getCurrentDimensions().width}px`,height:`${I.getCurrentDimensions().height}px`,"max-width":"100vw","max-height":"100vh"}:{};return b!==T.e&&tt(A,T.e=b),T.t=nt(A,B,T.t),T},{e:void 0,t:void 0}),d}})}export{xr as default};
