// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterPush=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var l=function(r,e,t){var n,l,s,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),s="get"in t,p="set"in t,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},s=n,p=l,v=t()?s:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g,h=/./;var m=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},x="function"==typeof Symbol?Symbol.toStringTag:"",T=_,O=x,S=w;var V=j,k=function(r){var e,t,n;if(null==r)return S.call(r);t=r[O],e=T(r,O);try{r[O]=void 0}catch(e){return S.call(r)}return n=S.call(r),e?r[O]=t:delete r[O],n},I=y()?k:V,A=Boolean.prototype.toString;var F=I,R=function(r){try{return A.call(r),!0}catch(r){return!1}},$=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||($?R(r):"[object Boolean]"===F(r)))},C=m,N=M;var B=d,G=function(r){return C(r)||N(r)},L=M;B(G,"isPrimitive",m),B(G,"isObject",L);var Z=G;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof U?U:null;module.exports=Y;var D=Z.isPrimitive,q=W,H=X,J=z,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=h,ir=er,or=tr;var ar=function(){return"function"==typeof nr||"object"==typeof or||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;d(cr,"REGEXP",ur());var fr=cr,lr=I;var sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)};var pr=function(r){return null!==r&&"object"==typeof r};d(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var vr=pr;var gr=I,dr=fr.REGEXP,hr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return hr(r)?"Buffer":t},br=mr;var yr=mr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},Er=function(r){return yr(r).toLowerCase()},jr=ar()?Er:wr;var Pr=function(r){return"function"===jr(r)},_r=Pr;var xr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&_r(r.next)},Tr=_;var Or=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Tr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var Sr=function(r){return"string"==typeof r},Vr=String.prototype.valueOf;var kr=I,Ir=function(r){try{return Vr.call(r),!0}catch(r){return!1}},Ar=y();var Fr=function(r){return"object"==typeof r&&(r instanceof String||(Ar?Ir(r):"[object String]"===kr(r)))},Rr=Sr,$r=Fr;var Mr=d,Cr=function(r){return Rr(r)||$r(r)},Nr=Fr;Mr(Cr,"isPrimitive",Sr),Mr(Cr,"isObject",Nr);var Br=Cr,Gr=Math.floor;var Lr=function(r){return Gr(r)===r},Zr=Lr;var Wr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Zr(r.length)&&r.length>=0&&r.length<=9007199254740991};var Xr=function(r){return"number"==typeof r},zr=Number,Ur=zr.prototype.toString;var Yr=I,Dr=zr,qr=function(r){try{return Ur.call(r),!0}catch(r){return!1}},Hr=y();var Jr=function(r){return"object"==typeof r&&(r instanceof Dr||(Hr?qr(r):"[object Number]"===Yr(r)))},Kr=Xr,Qr=Jr;var re=d,ee=function(r){return Kr(r)||Qr(r)},te=Jr;re(ee,"isPrimitive",Xr),re(ee,"isObject",te);var ne=ee,ie=Number.POSITIVE_INFINITY,oe=zr.NEGATIVE_INFINITY,ae=ie,ue=oe,ce=Lr;var fe=function(r){return r<ae&&r>ue&&ce(r)},le=ne.isPrimitive,se=fe;var pe=function(r){return le(r)&&se(r)},ve=ne.isObject,ge=fe;var de=function(r){return ve(r)&&ge(r.valueOf())},he=pe,me=de;var be=d,ye=function(r){return he(r)||me(r)},we=de;be(ye,"isPrimitive",pe),be(ye,"isObject",we);var Ee=ye;var je=function(r){return r!=r},Pe=ne.isPrimitive,_e=je;var xe=function(r){return Pe(r)&&_e(r)},Te=ne.isObject,Oe=je;var Se=function(r){return Te(r)&&Oe(r.valueOf())},Ve=xe,ke=Se;var Ie=d,Ae=function(r){return Ve(r)||ke(r)},Fe=Se;Ie(Ae,"isPrimitive",xe),Ie(Ae,"isObject",Fe);var Re=Wr,$e=Ee.isPrimitive,Me=Br.isPrimitive,Ce=Ae.isPrimitive;var Ne=function(r,e,t){var n,i,o;if(!Re(r)&&!Me(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!$e(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Me(r)){if(!Me(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ce(e)){for(o=i;o<n;o++)if(Ce(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Be=Ne,Ge=Br.isPrimitive;var Le=function(r){if(!Ge(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ze=Br.isPrimitive;var We=function(r){if(!Ze(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Xe=Le,ze=We,Ue=Br.isPrimitive;var Ye=function(r){return Ue(r)&&r===ze(r)&&r!==Xe(r)},De=ie,qe=oe;var He=function(r){return r==r&&r>qe&&r<De},Je=Ee.isPrimitive;var Ke=function(r){return Je(r)&&r>=0},Qe=Ee.isObject;var rt=function(r){return Qe(r)&&r.valueOf()>=0},et=Ke,tt=rt;var nt=d,it=function(r){return et(r)||tt(r)},ot=rt;nt(it,"isPrimitive",Ke),nt(it,"isObject",ot);var at=it.isPrimitive,ut=Br.isPrimitive;var ct=function(r,e){var t,n;if(!ut(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!at(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ft=Ee.isPrimitive,lt=Br.isPrimitive;var st=function(r,e,t){var n,i;if(!lt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!lt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ft(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},pt=ct,vt=st;var gt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(vt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+pt("0",i):pt("0",i)+r,n&&(r="-"+r)),r},dt=Ye,ht=We,mt=Le,bt=He,yt=ne.isPrimitive,wt=gt;var Et=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!bt(n)){if(!yt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=wt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=wt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=dt(r.specifier)?ht(t):mt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},jt=Br.isPrimitive,Pt=/[-\/\\^$*+?.()|[\]{}]/g;var _t=function(r){var e,t;if(!jt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Pt,"\\$&"):(e=(e=r.substring(1,t)).replace(Pt,"\\$&"),r=r[0]+e+r.substring(t))},xt=RegExp.prototype.exec;var Tt=I,Ot=function(r){try{return xt.call(r),!0}catch(r){return!1}},St=y();var Vt=_t,kt=Pr,It=Br.isPrimitive,At=function(r){return"object"==typeof r&&(r instanceof RegExp||(St?Ot(r):"[object RegExp]"===Tt(r)))};var Ft=Ye,Rt=We,$t=Le,Mt=function(r,e,t){if(!It(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(It(e))e=Vt(e),e=new RegExp(e,"g");else if(!At(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!It(t)&&!kt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Ct=He,Nt=ne.isPrimitive,Bt=function(r){return Math.abs(r)},Gt=/e\+(\d)$/,Lt=/e-(\d)$/,Zt=/^(\d+)$/,Wt=/^(\d+)e/,Xt=/\.0$/,zt=/\.0*e/,Ut=/(\..*[^0])0*e/;var Yt=function(r){var e,t,n=parseFloat(r.arg);if(!Ct(n)){if(!Nt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Bt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Mt(t,Ut,"$1e"),t=Mt(t,zt,"e"),t=Mt(t,Xt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Mt(t,Gt,"e+0$1"),t=Mt(t,Lt,"e-0$1"),r.alternate&&(t=Mt(t,Zt,"$1."),t=Mt(t,Wt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Ft(r.specifier)?Rt(t):$t(t)},Dt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var qt=ct;var Ht=Br.isPrimitive,Jt=Be,Kt=je,Qt=Et,rn=Yt,en=function(r){var e,t,n,i,o;for(e=0,n=[],o=Dt.exec(r);o;)(t=r.slice(e,Dt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Dt.lastIndex,o=Dt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},tn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+qt(" ",n):qt(" ",n)+r},nn=gt,on=String.fromCharCode;var an=function(r){var e,t,n,i,o,a,u,c,f;if(!Ht(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=en(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Ht(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Jt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Kt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Kt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Qt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Kt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Kt(o)?String(n.arg):on(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=rn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=nn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=tn(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},un=d,cn=Pr,fn=xr,ln=Or,sn=an;var pn=function r(e){var t,n,i,o,a;if(!fn(e))throw new TypeError(sn("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));for(t=[],a=1;a<arguments.length;a++)t.push(arguments[a]);return o=0,a=-1,un(n={},"next",u),un(n,"return",c),ln&&cn(e[ln])&&un(n,ln,f),n;function u(){var r;return 2===o?{done:!0}:1===o?(a+=1)>=t.length?(o=2,i):{value:t[a],done:!1}:(r=e.next()).done?(o=1,(a+=1)>=t.length?(o=2,r):(i=r,{value:t[a],done:!1})):{value:r.value,done:!1}}function c(r){return o=2,arguments.length?{value:r,done:!0}:{done:!0}}function f(){var n,i;for(n=[e[ln]()],i=0;i<t.length;i++)n.push(t[i]);return r.apply(null,n)}};return pn}));
//# sourceMappingURL=bundle.js.map
