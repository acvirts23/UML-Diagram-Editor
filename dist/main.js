/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/jsplumb.min.js":
/*!*****************************!*\
  !*** ./dist/jsplumb.min.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){function a(a,b){return[-a[0][b]+3*a[1][b]+-3*a[2][b]+a[3][b],3*a[0][b]-6*a[1][b]+3*a[2][b],-3*a[0][b]+3*a[1][b],a[0][b]]}function b(b){return[a(b,"x"),a(b,"y")]}function c(a){return 0>a?-1:a>0?1:0}function d(a,b,d,e){var f,g,h=b/a,i=d/a,j=e/a,k=(3*i-Math.pow(h,2))/9,l=(9*h*i-27*j-2*Math.pow(h,3))/54,m=Math.pow(k,3)+Math.pow(l,2),n=[];if(m>=0)f=c(l+Math.sqrt(m))*Math.pow(Math.abs(l+Math.sqrt(m)),1/3),g=c(l-Math.sqrt(m))*Math.pow(Math.abs(l-Math.sqrt(m)),1/3),n[0]=-h/3+(f+g),n[1]=-h/3-(f+g)/2,n[2]=-h/3-(f+g)/2,0!==Math.abs(Math.sqrt(3)*(f-g)/2)&&(n[1]=-1,n[2]=-1);else{var o=Math.acos(l/Math.sqrt(-Math.pow(k,3)));n[0]=2*Math.sqrt(-k)*Math.cos(o/3)-h/3,n[1]=2*Math.sqrt(-k)*Math.cos((o+2*Math.PI)/3)-h/3,n[2]=2*Math.sqrt(-k)*Math.cos((o+4*Math.PI)/3)-h/3}for(var p=0;3>p;p++)(n[p]<0||n[p]>1)&&(n[p]=-1);return n}"undefined"==typeof Math.sgn&&(Math.sgn=function(a){return 0==a?0:a>0?1:-1});var e={subtract:function(a,b){return{x:a.x-b.x,y:a.y-b.y}},dotProduct:function(a,b){return a.x*b.x+a.y*b.y},square:function(a){return Math.sqrt(a.x*a.x+a.y*a.y)},scale:function(a,b){return{x:a.x*b,y:a.y*b}}},f=64,g=Math.pow(2,-f-1),h=function(a,b){for(var c=[],d=j(a,b),f=b.length-1,g=2*f-1,h=k(d,g,c,0),i=e.subtract(a,b[0]),l=e.square(i),m=0,n=0;h>n;n++){i=e.subtract(a,o(b,f,c[n],null,null));var p=e.square(i);l>p&&(l=p,m=c[n])}return i=e.subtract(a,b[f]),p=e.square(i),l>p&&(l=p,m=1),{location:m,distance:l}},i=function(a,b){var c=h(a,b);return{point:o(b,b.length-1,c.location,null,null),location:c.location}},j=function(a,b){for(var c=b.length-1,d=2*c-1,f=[],g=[],h=[],i=[],j=[[1,.6,.3,.1],[.4,.6,.6,.4],[.1,.3,.6,1]],k=0;c>=k;k++)f[k]=e.subtract(b[k],a);for(var k=0;c-1>=k;k++)g[k]=e.subtract(b[k+1],b[k]),g[k]=e.scale(g[k],3);for(var l=0;c-1>=l;l++)for(var m=0;c>=m;m++)h[l]||(h[l]=[]),h[l][m]=e.dotProduct(g[l],f[m]);for(k=0;d>=k;k++)i[k]||(i[k]=[]),i[k].y=0,i[k].x=parseFloat(k)/d;for(var n=c,o=c-1,p=0;n+o>=p;p++){var q=Math.max(0,p-o),r=Math.min(p,n);for(k=q;r>=k;k++){var s=p-k;i[k+s].y+=h[s][k]*j[s][k]}}return i},k=function(a,b,c,d){var e,g,h=[],i=[],j=[],p=[];switch(l(a,b)){case 0:return 0;case 1:if(d>=f)return c[0]=(a[0].x+a[b].x)/2,1;if(m(a,b))return c[0]=n(a,b),1}o(a,b,.5,h,i),e=k(h,b,j,d+1),g=k(i,b,p,d+1);for(var q=0;e>q;q++)c[q]=j[q];for(var q=0;g>q;q++)c[q+e]=p[q];return e+g},l=function(a,b){var c,d,e=0;c=d=Math.sgn(a[0].y);for(var f=1;b>=f;f++)c=Math.sgn(a[f].y),c!=d&&e++,d=c;return e},m=function(a,b){var c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s;i=a[0].y-a[b].y,j=a[b].x-a[0].x,k=a[0].x*a[b].y-a[b].x*a[0].y;var t,u;t=u=0;for(var v=1;b>v;v++){var w=i*a[v].x+j*a[v].y+k;w>t?t=w:u>w&&(u=w)}return n=0,o=1,p=0,q=i,r=j,s=k-t,l=n*r-q*o,m=1/l,d=(o*s-r*p)*m,q=i,r=j,s=k-u,l=n*r-q*o,m=1/l,e=(o*s-r*p)*m,f=Math.min(d,e),h=Math.max(d,e),c=h-f,g>c?1:0},n=function(a,b){var c=1,d=0,e=a[b].x-a[0].x,f=a[b].y-a[0].y,g=a[0].x-0,h=a[0].y-0,i=e*d-f*c,j=1/i,k=(e*h-f*g)*j;return 0+c*k},o=function(a,b,c,d,e){for(var f=[[]],g=0;b>=g;g++)f[0][g]=a[g];for(var h=1;b>=h;h++)for(var g=0;b-h>=g;g++)f[h]||(f[h]=[]),f[h][g]||(f[h][g]={}),f[h][g].x=(1-c)*f[h-1][g].x+c*f[h-1][g+1].x,f[h][g].y=(1-c)*f[h-1][g].y+c*f[h-1][g+1].y;if(null!=d)for(g=0;b>=g;g++)d[g]=f[g][0];if(null!=e)for(g=0;b>=g;g++)e[g]=f[b-g][g];return f[b][0]},p={},q=function(a){var b=p[a];if(!b){b=[];var c=function(){return function(b){return Math.pow(b,a)}},d=function(){return function(b){return Math.pow(1-b,a)}},e=function(a){return function(b){return a}},f=function(){return function(a){return a}},g=function(){return function(a){return 1-a}},h=function(a){return function(b){for(var c=1,d=0;d<a.length;d++)c*=a[d](b);return c}};b.push(new c);for(var i=1;a>i;i++){for(var j=[new e(a)],k=0;a-i>k;k++)j.push(new f);for(var k=0;i>k;k++)j.push(new g);b.push(new h(j))}b.push(new d),p[a]=b}return b},r=function(a,b){for(var c=q(a.length-1),d=0,e=0,f=0;f<a.length;f++)d+=a[f].x*c[f](b),e+=a[f].y*c[f](b);return{x:d,y:e}},s=function(a,b){return Math.sqrt(Math.pow(a.x-b.x,2)+Math.pow(a.y-b.y,2))},t=function(a){return a[0].x===a[1].x&&a[0].y===a[1].y},u=function(a,b,c){if(t(a))return{point:a[0],location:b};for(var d=r(a,b),e=0,f=b,g=c>0?1:-1,h=null;e<Math.abs(c);)f+=.005*g,h=r(a,f),e+=s(h,d),d=h;return{point:h,location:f}},v=function(a){if(t(a))return 0;for(var b=r(a,0),c=0,d=0,e=1,f=null;1>d;)d+=.005*e,f=r(a,d),c+=s(f,b),b=f;return c},w=function(a,b,c){return u(a,b,c).point},x=function(a,b,c){return u(a,b,c).location},y=function(a,b){var c=r(a,b),d=r(a.slice(0,a.length-1),b),e=d.y-c.y,f=d.x-c.x;return 0===e?1/0:Math.atan(e/f)},z=function(a,b,c){var d=u(a,b,c);return d.location>1&&(d.location=1),d.location<0&&(d.location=0),y(a,d.location)},A=function(a,b,c,d){d=null==d?0:d;var e=u(a,b,d),f=y(a,e.location),g=Math.atan(-1/f),h=c/2*Math.sin(g),i=c/2*Math.cos(g);return[{x:e.point.x+i,y:e.point.y+h},{x:e.point.x-i,y:e.point.y-h}]},B=function(a,c,e,f,g){var h=f-c,i=a-e,j=a*(c-f)+c*(e-a),k=b(g),l=[h*k[0][0]+i*k[1][0],h*k[0][1]+i*k[1][1],h*k[0][2]+i*k[1][2],h*k[0][3]+i*k[1][3]+j],m=d.apply(null,l),n=[];if(null!=m)for(var o=0;3>o;o++){var p,q=m[o],r=Math.pow(q,2),s=Math.pow(q,3),t=[k[0][0]*s+k[0][1]*r+k[0][2]*q+k[0][3],k[1][0]*s+k[1][1]*r+k[1][2]*q+k[1][3]];p=e-a!==0?(t[0]-a)/(e-a):(t[1]-c)/(f-c),q>=0&&1>=q&&p>=0&&1>=p&&n.push(t)}return n},C=function(a,b,c,d,e){var f=[];return f.push.apply(f,B(a,b,a+c,b,e)),f.push.apply(f,B(a+c,b,a+c,b+d,e)),f.push.apply(f,B(a+c,b+d,a,b+d,e)),f.push.apply(f,B(a,b+d,a,b,e)),f},D=function(a,b){var c=[];return c.push.apply(c,B(a.x,a.y,a.x+a.w,a.y,b)),c.push.apply(c,B(a.x+a.w,a.y,a.x+a.w,a.y+a.h,b)),c.push.apply(c,B(a.x+a.w,a.y+a.h,a.x,a.y+a.h,b)),c.push.apply(c,B(a.x,a.y+a.h,a.x,a.y,b)),c},E=this.jsBezier={distanceFromCurve:h,gradientAtPoint:y,gradientAtPointAlongCurveFrom:z,nearestPointOnCurve:i,pointOnCurve:r,pointAlongCurveFrom:w,perpendicularToCurveAt:A,locationAlongCurveFrom:x,getLength:v,lineIntersection:B,boxIntersection:C,boundingBoxIntersection:D,version:"0.9.0"}; true&&(exports.jsBezier=E)}).call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.Biltong={version:"0.4.0"}; true&&(exports.Biltong=b);var c=function(a){return"[object Array]"===Object.prototype.toString.call(a)},d=function(a,b,d){return a=c(a)?a:[a.x,a.y],b=c(b)?b:[b.x,b.y],d(a,b)},e=b.gradient=function(a,b){return d(a,b,function(a,b){return b[0]==a[0]?b[1]>a[1]?1/0:-(1/0):b[1]==a[1]?b[0]>a[0]?0:-0:(b[1]-a[1])/(b[0]-a[0])})},f=(b.normal=function(a,b){return-1/e(a,b)},b.lineLength=function(a,b){return d(a,b,function(a,b){return Math.sqrt(Math.pow(b[1]-a[1],2)+Math.pow(b[0]-a[0],2))})},b.quadrant=function(a,b){return d(a,b,function(a,b){return b[0]>a[0]?b[1]>a[1]?2:1:b[0]==a[0]?b[1]>a[1]?2:1:b[1]>a[1]?3:4})}),g=(b.theta=function(a,b){return d(a,b,function(a,b){var c=e(a,b),d=Math.atan(c),g=f(a,b);return(4==g||3==g)&&(d+=Math.PI),0>d&&(d+=2*Math.PI),d})},b.intersects=function(a,b){var c=a.x,d=a.x+a.w,e=a.y,f=a.y+a.h,g=b.x,h=b.x+b.w,i=b.y,j=b.y+b.h;return g>=c&&d>=g&&i>=e&&f>=i||h>=c&&d>=h&&i>=e&&f>=i||g>=c&&d>=g&&j>=e&&f>=j||h>=c&&d>=g&&j>=e&&f>=j||c>=g&&h>=c&&e>=i&&j>=e||d>=g&&h>=d&&e>=i&&j>=e||c>=g&&h>=c&&f>=i&&j>=f||d>=g&&h>=c&&f>=i&&j>=f},b.encloses=function(a,b,c){var d=a.x,e=a.x+a.w,f=a.y,g=a.y+a.h,h=b.x,i=b.x+b.w,j=b.y,k=b.y+b.h,l=function(a,b,d,e){return c?b>=a&&d>=e:b>a&&d>e};return l(d,h,e,i)&&l(f,j,g,k)},[null,[1,-1],[1,1],[-1,1],[-1,-1]]),h=[null,[-1,-1],[-1,1],[1,1],[1,-1]];b.pointOnLine=function(a,b,c){var d=e(a,b),i=f(a,b),j=c>0?g[i]:h[i],k=Math.atan(d),l=Math.abs(c*Math.sin(k))*j[1],m=Math.abs(c*Math.cos(k))*j[0];return{x:a.x+m,y:a.y+l}},b.perpendicularLineTo=function(a,b,c){var d=e(a,b),f=Math.atan(-1/d),g=c/2*Math.sin(f),h=c/2*Math.cos(f);return[{x:b.x+h,y:b.y+g},{x:b.x-h,y:b.y-g}]}}.call("undefined"!=typeof window?window:this),function(){"use strict";function a(a,b,c,d,e,f,g,h){return new Touch({target:b,identifier:J(),pageX:c,pageY:d,screenX:e,screenY:f,clientX:g||e,clientY:h||f})}function b(){var a=[];return Array.prototype.push.apply(a,arguments),a.item=function(a){return this[a]},a}function c(c,d,e,f,g,h,i,j){return b(a.apply(null,arguments))}var d=this,e=function(a,b,c){c=c||a.parentNode;for(var d=c.querySelectorAll(b),e=0;e<d.length;e++)if(d[e]===a)return!0;return!1},f=function(a){return"string"==typeof a||a.constructor===String?document.getElementById(a):a},g=function(a){return a.srcElement||a.target},h=function(a,b,c,d){if(d){if("undefined"!=typeof a.path&&a.path.indexOf)return{path:a.path,end:a.path.indexOf(c)};var e={path:[],end:-1},f=function(a){e.path.push(a),a===c?e.end=e.path.length-1:null!=a.parentNode&&f(a.parentNode)};return f(b),e}return{path:[b],end:1}},i=function(a,b){for(var c=0,d=a.length;d>c&&a[c]!=b;c++);c<a.length&&a.splice(c,1)},j=1,k=function(a,b,c){var d=j++;return a.__ta=a.__ta||{},a.__ta[b]=a.__ta[b]||{},a.__ta[b][d]=c,c.__tauid=d,d},l=function(a,b,c){if(a.__ta&&a.__ta[b]&&delete a.__ta[b][c.__tauid],c.__taExtra){for(var d=0;d<c.__taExtra.length;d++)H(a,c.__taExtra[d][0],c.__taExtra[d][1]);c.__taExtra.length=0}c.__taUnstore&&c.__taUnstore()},m=function(a,b,c,d){if(null==a)return c;var f=a.split(","),i=function(d){i.__tauid=c.__tauid;var j=g(d),k=j,l=h(d,j,b,null!=a);if(-1!=l.end)for(var m=0;m<l.end;m++){k=l.path[m];for(var n=0;n<f.length;n++)e(k,f[n],b)&&c.apply(k,arguments)}};return n(c,d,i),i},n=function(a,b,c){a.__taExtra=a.__taExtra||[],a.__taExtra.push([b,c])},o=function(a,b,c,d){if(u&&w[b]){var e=m(d,a,c,w[b]);G(a,w[b],e,c)}"focus"===b&&null==a.getAttribute("tabindex")&&a.setAttribute("tabindex","1"),G(a,b,m(d,a,c,b),c)},p=function(a,b,c,d){if(null==a.__taSmartClicks){var e=function(b){a.__tad=A(b)},f=function(b){a.__tau=A(b)},h=function(b){if(a.__tad&&a.__tau&&a.__tad[0]===a.__tau[0]&&a.__tad[1]===a.__tau[1])for(var c=0;c<a.__taSmartClicks.length;c++)a.__taSmartClicks[c].apply(g(b),[b])};o(a,"mousedown",e,d),o(a,"mouseup",f,d),o(a,"click",h,d),a.__taSmartClicks=[]}a.__taSmartClicks.push(c),c.__taUnstore=function(){i(a.__taSmartClicks,c)}},q={tap:{touches:1,taps:1},dbltap:{touches:1,taps:2},contextmenu:{touches:2,taps:1}},r=function(a,b){return function(c,d,f,j){if("contextmenu"==d&&v)o(c,d,f,j);else{if(null==c.__taTapHandler){var k=c.__taTapHandler={tap:[],dbltap:[],contextmenu:[],down:!1,taps:0,downSelectors:[]},l=function(d){for(var f=g(d),i=h(d,f,c,null!=j),l=!1,m=0;m<i.end;m++){if(l)return;f=i.path[m];for(var o=0;o<k.downSelectors.length;o++)if(null==k.downSelectors[o]||e(f,k.downSelectors[o],c)){k.down=!0,setTimeout(n,a),setTimeout(p,b),l=!0;break}}},m=function(a){if(k.down){var b,d,f=g(a);k.taps++;var i=F(a);for(var j in q)if(q.hasOwnProperty(j)){var l=q[j];if(l.touches===i&&(1===l.taps||l.taps===k.taps))for(var m=0;m<k[j].length;m++){d=h(a,f,c,null!=k[j][m][1]);for(var n=0;n<d.end;n++)if(b=d.path[n],null==k[j][m][1]||e(b,k[j][m][1],c)){k[j][m][0].apply(b,[a]);break}}}}},n=function(){k.down=!1},p=function(){k.taps=0};o(c,"mousedown",l),o(c,"mouseup",m)}c.__taTapHandler.downSelectors.push(j),c.__taTapHandler[d].push([f,j]),f.__taUnstore=function(){i(c.__taTapHandler[d],f)}}}},s=function(a,b,c,d){for(var e in c.__tamee[a])c.__tamee[a].hasOwnProperty(e)&&c.__tamee[a][e].apply(d,[b])},t=function(){var a=[];return function(b,c,d,f){if(!b.__tamee){b.__tamee={over:!1,mouseenter:[],mouseexit:[]};var h=function(c){var d=g(c);(null==f&&d==b&&!b.__tamee.over||e(d,f,b)&&(null==d.__tamee||!d.__tamee.over))&&(s("mouseenter",c,b,d),d.__tamee=d.__tamee||{},d.__tamee.over=!0,a.push(d))},i=function(c){for(var d=g(c),f=0;f<a.length;f++)d!=a[f]||e(c.relatedTarget||c.toElement,"*",d)||(d.__tamee.over=!1,a.splice(f,1),s("mouseexit",c,b,d))};G(b,"mouseover",m(f,b,h,"mouseover"),h),G(b,"mouseout",m(f,b,i,"mouseout"),i)}d.__taUnstore=function(){delete b.__tamee[c][d.__tauid]},k(b,c,d),b.__tamee[c][d.__tauid]=d}},u="ontouchstart"in document.documentElement,v="onmousedown"in document.documentElement,w={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"},x=function(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return a}(),y=x>-1&&9>x,z=function(a,b){if(null==a)return[0,0];var c=E(a),d=D(c,0);return[d[b+"X"],d[b+"Y"]]},A=function(a){return null==a?[0,0]:y?[a.clientX+document.documentElement.scrollLeft,a.clientY+document.documentElement.scrollTop]:z(a,"page")},B=function(a){return z(a,"screen")},C=function(a){return z(a,"client")},D=function(a,b){return a.item?a.item(b):a[b]},E=function(a){return a.touches&&a.touches.length>0?a.touches:a.changedTouches&&a.changedTouches.length>0?a.changedTouches:a.targetTouches&&a.targetTouches.length>0?a.targetTouches:[a]},F=function(a){return E(a).length},G=function(a,b,c,d){if(k(a,b,c),d.__tauid=c.__tauid,a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent){var e=b+c.__tauid;a["e"+e]=c,a[e]=function(){a["e"+e]&&a["e"+e](window.event)},a.attachEvent("on"+b,a[e])}},H=function(a,b,c){null!=c&&I(a,function(){var d=f(this);if(l(d,b,c),null!=c.__tauid)if(d.removeEventListener)d.removeEventListener(b,c,!1),u&&w[b]&&d.removeEventListener(w[b],c,!1);else if(this.detachEvent){var e=b+c.__tauid;d[e]&&d.detachEvent("on"+b,d[e]),d[e]=null,d["e"+e]=null}c.__taTouchProxy&&H(a,c.__taTouchProxy[1],c.__taTouchProxy[0])})},I=function(a,b){if(null!=a){a="undefined"!=typeof Window&&"unknown"!=typeof a.top&&a==a.top?[a]:"string"!=typeof a&&null==a.tagName&&null!=a.length?a:"string"==typeof a?document.querySelectorAll(a):[a];for(var c=0;c<a.length;c++)b.apply(a[c])}},J=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})};d.Mottle=function(a){a=a||{};var b=a.clickThreshold||250,d=a.dblClickThreshold||450,e=new t,g=new r(b,d),h=a.smartClicks,i=function(a,b,c,d){null!=c&&I(a,function(){var a=f(this);h&&"click"===b?p(a,b,c,d):"tap"===b||"dbltap"===b||"contextmenu"===b?g(a,b,c,d):"mouseenter"===b||"mouseexit"==b?e(a,b,c,d):o(a,b,c,d)})};this.remove=function(a){return I(a,function(){var a=f(this);if(a.__ta)for(var b in a.__ta)if(a.__ta.hasOwnProperty(b))for(var c in a.__ta[b])a.__ta[b].hasOwnProperty(c)&&H(a,b,a.__ta[b][c]);a.parentNode&&a.parentNode.removeChild(a)}),this},this.on=function(a,b,c,d){var e=arguments[0],f=4==arguments.length?arguments[2]:null,g=arguments[1],h=arguments[arguments.length-1];return i(e,g,h,f),this},this.off=function(a,b,c){return H(a,b,c),this},this.trigger=function(a,b,d,e){var g=v&&("undefined"==typeof MouseEvent||null==d||d.constructor===MouseEvent),h=u&&!v&&w[b]?w[b]:b,i=!(u&&!v&&w[b]),j=A(d),k=B(d),l=C(d);return I(a,function(){var a,m=f(this);d=d||{screenX:k[0],screenY:k[1],clientX:l[0],clientY:l[1]};var n=function(a){e&&(a.payload=e)},o={TouchEvent:function(a){var b=c(window,m,0,j[0],j[1],k[0],k[1],l[0],l[1]),d=a.initTouchEvent||a.initEvent;d(h,!0,!0,window,null,k[0],k[1],l[0],l[1],!1,!1,!1,!1,b,b,b,1,0)},MouseEvents:function(a){a.initMouseEvent(h,!0,!0,window,0,k[0],k[1],l[0],l[1],!1,!1,!1,!1,1,m)}};if(document.createEvent){var p=!i&&!g&&u&&w[b],q=p?"TouchEvent":"MouseEvents";a=document.createEvent(q),o[q](a),n(a),m.dispatchEvent(a)}else document.createEventObject&&(a=document.createEventObject(),a.eventType=a.eventName=h,a.screenX=k[0],a.screenY=k[1],a.clientX=l[0],a.clientY=l[1],n(a),m.fireEvent("on"+h,a))}),this}},d.Mottle.consume=function(a,b){a.stopPropagation?a.stopPropagation():a.returnValue=!1,!b&&a.preventDefault&&a.preventDefault()},d.Mottle.pageLocation=A,d.Mottle.setForceTouchEvents=function(a){u=a},d.Mottle.setForceMouseEvents=function(a){v=a},d.Mottle.version="0.8.0", true&&(exports.Mottle=d.Mottle)}.call("undefined"==typeof window?this:window),function(){"use strict";var a=this,b=function(a,b,c){return-1===a.indexOf(b)?(c?a.unshift(b):a.push(b),!0):!1},c=function(a,b){var c=a.indexOf(b);-1!==c&&a.splice(c,1)},d=function(a,b){for(var c=[],d=0;d<a.length;d++)-1===b.indexOf(a[d])&&c.push(a[d]);return c},e=function(a){return null==a?!1:"string"==typeof a||a.constructor===String},f=function(a){var b=a.getBoundingClientRect(),c=document.body,d=document.documentElement,e=window.pageYOffset||d.scrollTop||c.scrollTop,f=window.pageXOffset||d.scrollLeft||c.scrollLeft,g=d.clientTop||c.clientTop||0,h=d.clientLeft||c.clientLeft||0,i=b.top+e-g,j=b.left+f-h;return{top:Math.round(i),left:Math.round(j)}},g=function(a,b,c){c=c||a.parentNode;for(var d=c.querySelectorAll(b),e=0;e<d.length;e++)if(d[e]===a)return!0;return!1},h=function(a,b,c){if(g(b,c,a))return b;for(var d=b.parentNode;null!=d&&d!==a;){if(g(d,c,a))return d;d=d.parentNode}},i=function(a,b,c){for(var d=null,e=b.getAttribute("katavorio-draggable"),f=null!=e?"[katavorio-draggable='"+e+"'] ":"",i=0;i<a.length;i++)if(d=h(b,c,f+a[i].selector),null!=d){if(a[i].filter){var j=g(c,a[i].filter,d),k=a[i].filterExclude===!0;if(k&&!j||j)return null}return[a[i],d]}return null},j=function(){var a=-1;if("Microsoft Internet Explorer"===navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return a}(),k=10,l=10,m=j>-1&&9>j,n=9===j,o=function(a){if(m)return[a.clientX+document.documentElement.scrollLeft,a.clientY+document.documentElement.scrollTop];var b=q(a),c=p(b,0);return n?[c.pageX||c.clientX,c.pageY||c.clientY]:[c.pageX,c.pageY]},p=function(a,b){return a.item?a.item(b):a[b]},q=function(a){return a.touches&&a.touches.length>0?a.touches:a.changedTouches&&a.changedTouches.length>0?a.changedTouches:a.targetTouches&&a.targetTouches.length>0?a.targetTouches:[a]},r={delegatedDraggable:"katavorio-delegated-draggable",draggable:"katavorio-draggable",droppable:"katavorio-droppable",drag:"katavorio-drag",selected:"katavorio-drag-selected",active:"katavorio-drag-active",hover:"katavorio-drag-hover",noSelect:"katavorio-drag-no-select",ghostProxy:"katavorio-ghost-proxy",clonedDrag:"katavorio-clone-drag"},s="katavorio-drag-scope",t=["stop","start","drag","drop","over","out","beforeStart"],u=function(){},v=function(){return!0},w=function(a,b,c){for(var d=0;d<a.length;d++)a[d]!=c&&b(a[d])},x=function(a,b,c,d){w(a,function(a){a.setActive(b),b&&a.updatePosition(),c&&a.setHover(d,b)})},y=function(a,b){if(null!=a){a=e(a)||null!=a.tagName||null==a.length?[a]:a;for(var c=0;c<a.length;c++)b.apply(a[c],[a[c]])}},z=function(a){a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.returnValue=!1},A="input,textarea,select,button,option",B=function(a,b,c){var d=a.srcElement||a.target;return!g(d,c.getInputFilterSelector(),b)},C=function(a,b,c,d){this.params=b||{},this.el=a,this.params.addClass(this.el,this._class),this.uuid=H();var e=!0;return this.setEnabled=function(a){e=a},this.isEnabled=function(){return e},this.toggleEnabled=function(){e=!e},this.setScope=function(a){this.scopes=a?a.split(/\s+/):[d]},this.addScope=function(a){var b={};y(this.scopes,function(a){b[a]=!0}),y(a?a.split(/\s+/):[],function(a){b[a]=!0}),this.scopes=[];for(var c in b)this.scopes.push(c)},this.removeScope=function(a){var b={};y(this.scopes,function(a){b[a]=!0}),y(a?a.split(/\s+/):[],function(a){delete b[a]}),this.scopes=[];for(var c in b)this.scopes.push(c)},this.toggleScope=function(a){var b={};y(this.scopes,function(a){b[a]=!0}),y(a?a.split(/\s+/):[],function(a){b[a]?delete b[a]:b[a]=!0}),this.scopes=[];for(var c in b)this.scopes.push(c)},this.setScope(b.scope),this.k=b.katavorio,b.katavorio},D=function(){return!0},E=function(){return!1},F=function(a,b,c,d){this._class=c.draggable;var h=C.apply(this,arguments);this.rightButtonCanDrag=this.params.rightButtonCanDrag;var j,m,n,p,q=[0,0],s=null,t=null,u=[0,0],w=!1,y=[0,0],A=this.params.consumeStartEvent!==!1,F=this.el,G=this.params.clone,J=(this.params.scroll,b.multipleDrop!==!1),K=!1,L=b.ghostProxy===!0?D:b.ghostProxy&&"function"==typeof b.ghostProxy?b.ghostProxy:E,M=function(a){return a.cloneNode(!0)},N=null,O=[],P=null,Q=b.ghostProxyParent;if(b.selector){var R=a.getAttribute("katavorio-draggable");null==R&&(R=""+(new Date).getTime(),a.setAttribute("katavorio-draggable",R)),O.push(b)}var S=b.snapThreshold,T=function(a,b,c,d,e){var f=Math.floor(a[0]/b),g=b*f,h=g+b,i=Math.abs(a[0]-g)<=d?g:Math.abs(h-a[0])<=d?h:a[0],j=Math.floor(a[1]/c),k=c*j,l=k+c,m=Math.abs(a[1]-k)<=e?k:Math.abs(l-a[1])<=e?l:a[1];return[i,m]};this.posses=[],this.posseRoles={},this.toGrid=function(a){if(null==this.params.grid)return a;var b=this.params.grid?this.params.grid[0]/2:S?S:k/2,c=this.params.grid?this.params.grid[1]/2:S?S:l/2;return T(a,this.params.grid[0],this.params.grid[1],b,c)},this.snap=function(a,b){if(null!=F){a=a||(this.params.grid?this.params.grid[0]:k),b=b||(this.params.grid?this.params.grid[1]:l);var c=this.params.getPosition(F),d=this.params.grid?this.params.grid[0]/2:S,e=this.params.grid?this.params.grid[1]/2:S,f=T(c,a,b,d,e);return this.params.setPosition(F,f),f}},this.setUseGhostProxy=function(a){L=a?D:E};var U,V=function(a){return b.allowNegative===!1?[Math.max(0,a[0]),Math.max(0,a[1])]:a},W=function(a){U="function"==typeof a?a:a?function(a,b,c,d){return V([Math.max(0,Math.min(c.w-d[0],a[0])),Math.max(0,Math.min(c.h-d[1],a[1]))])}.bind(this):function(a){return V(a)}}.bind(this);W("function"==typeof this.params.constrain?this.params.constrain:this.params.constrain||this.params.containment),this.setConstrain=function(a){W(a)};var X;this.setRevert=function(a){X=a},this.params.revert&&(X=this.params.revert);var Y=function(a){return"function"==typeof a?(a._katavorioId=H(),a._katavorioId):a},Z={},$=function(a){for(var b in Z){var c=Z[b],d=c[0](a);if(c[1]&&(d=!d),!d)return!1}return!0},_=this.setFilter=function(b,c){if(b){var d=Y(b);Z[d]=[function(c){var d,f=c.srcElement||c.target;return e(b)?d=g(f,b,a):"function"==typeof b&&(d=b(c,a)),d},c!==!1]}};this.addFilter=_,this.removeFilter=function(a){var b="function"==typeof a?a._katavorioId:a;delete Z[b]};this.clearAllFilters=function(){Z={}},this.canDrag=this.params.canDrag||v;var aa,ba=[],ca=[];this.addSelector=function(a){a.selector&&O.push(a)},this.downListener=function(a){if(!a.defaultPrevented){var b=this.rightButtonCanDrag||3!==a.which&&2!==a.button;if(b&&this.isEnabled()&&this.canDrag()){var d=$(a)&&B(a,this.el,this.k);if(d){if(P=null,N=null,O.length>0){var e=i(O,this.el,a.target||a.srcElement);if(null!=e&&(P=e[0],N=e[1]),null==N)return}else N=this.el;if(G)if(F=N.cloneNode(!0),this.params.addClass(F,r.clonedDrag),F.setAttribute("id",null),F.style.position="absolute",null!=this.params.parent){var g=this.params.getPosition(this.el);F.style.left=g[0]+"px",F.style.top=g[1]+"px",this.params.parent.appendChild(F)}else{var j=f(N);F.style.left=j.left+"px",F.style.top=j.top+"px",document.body.appendChild(F)}else F=N;A&&z(a),q=o(a),F&&F.parentNode&&(y=[F.parentNode.scrollLeft,F.parentNode.scrollTop]),this.params.bind(document,"mousemove",this.moveListener),this.params.bind(document,"mouseup",this.upListener),h.markSelection(this),h.markPosses(this),this.params.addClass(document.body,c.noSelect),ea("beforeStart",{el:this.el,pos:s,e:a,drag:this})}else this.params.consumeFilteredEvents&&z(a)}}}.bind(this),this.moveListener=function(a){if(q){if(!w){var b=ea("start",{el:this.el,pos:s,e:a,drag:this});if(b!==!1){if(!q)return;this.mark(!0),w=!0}else this.abort()}if(q){ca.length=0;var c=o(a),d=c[0]-q[0],e=c[1]-q[1],f=this.params.ignoreZoom?1:h.getZoom();F&&F.parentNode&&(d+=F.parentNode.scrollLeft-y[0],e+=F.parentNode.scrollTop-y[1]),d/=f,e/=f,this.moveBy(d,e,a),h.updateSelection(d,e,this),h.updatePosses(d,e,this)}}}.bind(this),this.upListener=function(a){q&&(q=null,this.params.unbind(document,"mousemove",this.moveListener),this.params.unbind(document,"mouseup",this.upListener),this.params.removeClass(document.body,c.noSelect),this.unmark(a),h.unmarkSelection(this,a),h.unmarkPosses(this,a),this.stop(a),h.notifyPosseDragStop(this,a),w=!1,ca.length=0,G?(F&&F.parentNode&&F.parentNode.removeChild(F),F=null):X&&X(F,this.params.getPosition(F))===!0&&(this.params.setPosition(F,s),ea("revert",F)))}.bind(this),this.getFilters=function(){return Z},this.abort=function(){null!=q&&this.upListener()},this.getDragElement=function(a){return a?N||this.el:F||this.el};var da={start:[],drag:[],stop:[],over:[],out:[],beforeStart:[],revert:[]};b.events.start&&da.start.push(b.events.start),b.events.beforeStart&&da.beforeStart.push(b.events.beforeStart),b.events.stop&&da.stop.push(b.events.stop),b.events.drag&&da.drag.push(b.events.drag),b.events.revert&&da.revert.push(b.events.revert),this.on=function(a,b){da[a]&&da[a].push(b)},this.off=function(a,b){if(da[a]){for(var c=[],d=0;d<da[a].length;d++)da[a][d]!==b&&c.push(da[a][d]);da[a]=c}};var ea=function(a,b){var c=null;if(P&&P[a])c=P[a](b);else if(da[a])for(var d=0;d<da[a].length;d++)try{var e=da[a][d](b);null!=e&&(c=e)}catch(f){}return c};this.notifyStart=function(a){ea("start",{el:this.el,pos:this.params.getPosition(F),e:a,drag:this})},this.stop=function(a,b){if(b||w){var c=[],d=h.getSelection(),e=this.params.getPosition(F);if(d.length>0)for(var f=0;f<d.length;f++){var g=this.params.getPosition(d[f].el);c.push([d[f].el,{left:g[0],top:g[1]},d[f]])}else c.push([F,{left:e[0],top:e[1]},this]);ea("stop",{el:F,pos:fa||e,finalPos:e,e:a,drag:this,selection:c})}},this.mark=function(a){s=this.params.getPosition(F),t=this.params.getPosition(F,!0),u=[t[0]-s[0],t[1]-s[1]],this.size=this.params.getSize(F),ba=h.getMatchingDroppables(this),x(ba,!0,!1,this),this.params.addClass(F,this.params.dragClass||c.drag);var b;b=this.params.getConstrainingRectangle?this.params.getConstrainingRectangle(F):this.params.getSize(F.parentNode),aa={w:b[0],h:b[1]},n=0,p=0,a&&h.notifySelectionDragStart(this)};var fa;this.unmark=function(a,d){if(x(ba,!1,!0,this),K&&L(N,F)?(fa=[F.offsetLeft-n,F.offsetTop-p],F.parentNode.removeChild(F),F=N):fa=null,this.params.removeClass(F,this.params.dragClass||c.drag),ba.length=0,K=!1,!d){ca.length>0&&fa&&b.setPosition(N,fa),ca.sort(I);for(var e=0;e<ca.length;e++){var f=ca[e].drop(this,a);if(f===!0)break}}},this.moveBy=function(a,c,d){ca.length=0;var e=this.toGrid([s[0]+a,s[1]+c]),f=U(e,F,aa,this.size);if(L(this.el,F))if(e[0]!==f[0]||e[1]!==f[1]){if(!K){var g=M(N);b.addClass(g,r.ghostProxy),Q?(Q.appendChild(g),j=b.getPosition(N.parentNode,!0),m=b.getPosition(b.ghostProxyParent,!0),n=j[0]-m[0],p=j[1]-m[1]):N.parentNode.appendChild(g),F=g,K=!0}f=e}else K&&(F.parentNode.removeChild(F),F=N,K=!1,j=null,m=null,n=0,p=0);var h={x:f[0],y:f[1],w:this.size[0],h:this.size[1]},i={x:h.x+u[0],y:h.y+u[1],w:h.w,h:h.h},k=null;this.params.setPosition(F,[f[0]+n,f[1]+p]);for(var l=0;l<ba.length;l++){var o={x:ba[l].pagePosition[0],y:ba[l].pagePosition[1],w:ba[l].size[0],h:ba[l].size[1]};this.params.intersects(i,o)&&(J||null==k||k===ba[l].el)&&ba[l].canDrop(this)?(k||(k=ba[l].el),ca.push(ba[l]),ba[l].setHover(this,!0,d)):ba[l].isHover()&&ba[l].setHover(this,!1,d)}ea("drag",{el:this.el,pos:f,e:d,drag:this})},this.destroy=function(){this.params.unbind(this.el,"mousedown",this.downListener),this.params.unbind(document,"mousemove",this.moveListener),this.params.unbind(document,"mouseup",this.upListener),this.downListener=null,this.upListener=null,this.moveListener=null},this.params.bind(this.el,"mousedown",this.downListener),this.params.handle?_(this.params.handle,!1):_(this.params.filter,this.params.filterExclude)},G=function(a,b,c,d){this._class=c.droppable,this.params=b||{},this.rank=b.rank||0,this._activeClass=this.params.activeClass||c.active,this._hoverClass=this.params.hoverClass||c.hover,C.apply(this,arguments);var e=!1;this.allowLoopback=this.params.allowLoopback!==!1,this.setActive=function(a){this.params[a?"addClass":"removeClass"](this.el,this._activeClass)},this.updatePosition=function(){this.position=this.params.getPosition(this.el),this.pagePosition=this.params.getPosition(this.el,!0),this.size=this.params.getSize(this.el)},this.canDrop=this.params.canDrop||function(a){return!0},this.isHover=function(){return e},this.setHover=function(a,b,c){(b||null==this.el._katavorioDragHover||this.el._katavorioDragHover===a.el._katavorio)&&(this.params[b?"addClass":"removeClass"](this.el,this._hoverClass),this.el._katavorioDragHover=b?a.el._katavorio:null,e!==b&&this.params.events[b?"over":"out"]({el:this.el,e:c,drag:a,drop:this}),e=b)},this.drop=function(a,b){return this.params.events.drop({drag:a,e:b,drop:this})},this.destroy=function(){this._class=null,this._activeClass=null,this._hoverClass=null,e=null}},H=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})},I=function(a,b){return a.rank<b.rank?1:a.rank>b.rank?-1:0},J=function(a){return null==a?null:(a="string"==typeof a||a.constructor===String?document.getElementById(a):a,null==a?null:(a._katavorio=a._katavorio||H(),a))};a.Katavorio=function(a){var f=[],g={};this._dragsByScope={},this._dropsByScope={};var h=1,i=function(a,b){y(a,function(a){for(var c=0;c<a.scopes.length;c++)b[a.scopes[c]]=b[a.scopes[c]]||[],b[a.scopes[c]].push(a)})},j=function(b,c){var d=0;return y(b,function(b){for(var e=0;e<b.scopes.length;e++)if(c[b.scopes[e]]){var f=a.indexOf(c[b.scopes[e]],b);-1!==f&&(c[b.scopes[e]].splice(f,1),d++)}}),d>0},k=(this.getMatchingDroppables=function(a){for(var b=[],c={},d=0;d<a.scopes.length;d++){var e=this._dropsByScope[a.scopes[d]];if(e)for(var f=0;f<e.length;f++)!e[f].canDrop(a)||c[e[f].uuid]||!e[f].allowLoopback&&e[f].el===a.el||(c[e[f].uuid]=!0,b.push(e[f]))}return b.sort(I),b},function(b){b=b||{};var c,d={events:{}};for(c in a)d[c]=a[c];for(c in b)d[c]=b[c];for(c=0;c<t.length;c++)d.events[t[c]]=b[t[c]]||u;return d.katavorio=this,d}.bind(this)),l=function(a,b){for(var c=0;c<t.length;c++)b[t[c]]&&a.on(t[c],b[t[c]])}.bind(this),m={},n=a.css||{},o=a.scope||s;for(var p in r)m[p]=r[p];for(var p in n)m[p]=n[p];var q=a.inputFilterSelector||A;this.getInputFilterSelector=function(){return q},this.setInputFilterSelector=function(a){return q=a,this},this.draggable=function(b,c){var d=[];return y(b,function(b){if(b=J(b),null!=b)if(null==b._katavorioDrag){var e=k(c);b._katavorioDrag=new F(b,e,m,o),i(b._katavorioDrag,this._dragsByScope),d.push(b._katavorioDrag),a.addClass(b,e.selector?m.delegatedDraggable:m.draggable)}else l(b._katavorioDrag,c)}.bind(this)),d},this.droppable=function(b,c){var d=[];return y(b,function(b){if(b=J(b),null!=b){var e=new G(b,k(c),m,o);b._katavorioDrop=b._katavorioDrop||[],b._katavorioDrop.push(e),i(e,this._dropsByScope),d.push(e),a.addClass(b,m.droppable)}}.bind(this)),d},this.select=function(b){return y(b,function(){var b=J(this);b&&b._katavorioDrag&&(g[b._katavorio]||(f.push(b._katavorioDrag),g[b._katavorio]=[b,f.length-1],a.addClass(b,m.selected)))}),this},this.deselect=function(b){return y(b,function(){var b=J(this);if(b&&b._katavorio){var c=g[b._katavorio];if(c){for(var d=[],e=0;e<f.length;e++)f[e].el!==b&&d.push(f[e]);f=d,delete g[b._katavorio],a.removeClass(b,m.selected)}}}),this},this.deselectAll=function(){for(var b in g){var c=g[b];a.removeClass(c[0],m.selected)}f.length=0,g={}},this.markSelection=function(a){w(f,function(a){a.mark()},a)},this.markPosses=function(a){a.posses&&y(a.posses,function(b){a.posseRoles[b]&&C[b]&&w(C[b].members,function(a){a.mark()},a)})},this.unmarkSelection=function(a,b){w(f,function(a){a.unmark(b)},a)},this.unmarkPosses=function(a,b){a.posses&&y(a.posses,function(c){a.posseRoles[c]&&C[c]&&w(C[c].members,function(a){a.unmark(b,!0)},a)})},this.getSelection=function(){return f.slice(0)},this.updateSelection=function(a,b,c){w(f,function(c){c.moveBy(a,b)},c)};var v=function(a,b){b.posses&&y(b.posses,function(c){b.posseRoles[c]&&C[c]&&w(C[c].members,function(b){a(b)},b)})};this.updatePosses=function(a,b,c){v(function(c){c.moveBy(a,b)},c)},this.notifyPosseDragStop=function(a,b){v(function(a){a.stop(b,!0)},a)},this.notifySelectionDragStop=function(a,b){w(f,function(a){a.stop(b,!0)},a)},this.notifySelectionDragStart=function(a,b){w(f,function(a){a.notifyStart(b)},a)},this.setZoom=function(a){h=a},this.getZoom=function(){return h};var x=function(a,b,c,d){y(a,function(a){j(a,c),a[d](b),i(a,c)})};y(["set","add","remove","toggle"],function(a){
this[a+"Scope"]=function(b,c){x(b._katavorioDrag,c,this._dragsByScope,a+"Scope"),x(b._katavorioDrop,c,this._dropsByScope,a+"Scope")}.bind(this),this[a+"DragScope"]=function(b,c){x(b.constructor===F?b:b._katavorioDrag,c,this._dragsByScope,a+"Scope")}.bind(this),this[a+"DropScope"]=function(b,c){x(b.constructor===G?b:b._katavorioDrop,c,this._dropsByScope,a+"Scope")}.bind(this)}.bind(this)),this.snapToGrid=function(a,b){for(var c in this._dragsByScope)w(this._dragsByScope[c],function(c){c.snap(a,b)})},this.getDragsForScope=function(a){return this._dragsByScope[a]},this.getDropsForScope=function(a){return this._dropsByScope[a]};var z=function(a,b,c){if(a=J(a),a[b]){var d=f.indexOf(a[b]);d>=0&&f.splice(d,1),j(a[b],c)&&y(a[b],function(a){a.destroy()}),delete a[b]}},B=function(a,b,c,d){a=J(a),a[b]&&a[b].off(c,d)};this.elementRemoved=function(a){this.destroyDraggable(a),this.destroyDroppable(a)},this.destroyDraggable=function(a,b,c){1===arguments.length?z(a,"_katavorioDrag",this._dragsByScope):B(a,"_katavorioDrag",b,c)},this.destroyDroppable=function(a,b,c){1===arguments.length?z(a,"_katavorioDrop",this._dropsByScope):B(a,"_katavorioDrop",b,c)},this.reset=function(){this._dragsByScope={},this._dropsByScope={},f=[],g={},C={}};var C={},D=function(a,c,d){var f=e(c)?c:c.id,g=e(c)?!0:c.active!==!1,h=C[f]||function(){var a={name:f,members:[]};return C[f]=a,a}();return y(a,function(a){if(a._katavorioDrag){if(d&&null!=a._katavorioDrag.posseRoles[h.name])return;b(h.members,a._katavorioDrag),b(a._katavorioDrag.posses,h.name),a._katavorioDrag.posseRoles[h.name]=g}}),h};this.addToPosse=function(a,b){for(var c=[],d=1;d<arguments.length;d++)c.push(D(a,arguments[d]));return 1===c.length?c[0]:c},this.setPosse=function(a,b){for(var c=[],e=1;e<arguments.length;e++)c.push(D(a,arguments[e],!0).name);return y(a,function(a){if(a._katavorioDrag){var b=d(a._katavorioDrag.posses,c),e=[];Array.prototype.push.apply(e,a._katavorioDrag.posses);for(var f=0;f<b.length;f++)this.removeFromPosse(a,b[f])}}.bind(this)),1===c.length?c[0]:c},this.removeFromPosse=function(a,b){if(arguments.length<2)throw new TypeError("No posse id provided for remove operation");for(var d=1;d<arguments.length;d++)b=arguments[d],y(a,function(a){if(a._katavorioDrag&&a._katavorioDrag.posses){var d=a._katavorioDrag;y(b,function(a){c(C[a].members,d),c(d.posses,a),delete d.posseRoles[a]})}})},this.removeFromAllPosses=function(a){y(a,function(a){if(a._katavorioDrag&&a._katavorioDrag.posses){var b=a._katavorioDrag;y(b.posses,function(a){c(C[a].members,b)}),b.posses.length=0,b.posseRoles={}}})},this.setPosseState=function(a,b,c){var d=C[b];d&&y(a,function(a){a._katavorioDrag&&a._katavorioDrag.posses&&(a._katavorioDrag.posseRoles[d.name]=c)})}},a.Katavorio.version="1.0.0", true&&(exports.Katavorio=a.Katavorio)}.call("undefined"!=typeof window?window:this),function(){function a(a){return"[object Array]"===Object.prototype.toString.call(a)}function b(a){return"[object Number]"===Object.prototype.toString.call(a)}function c(a){return"string"==typeof a}function d(a){return"boolean"==typeof a}function e(a){return null==a}function f(a){return null==a?!1:"[object Object]"===Object.prototype.toString.call(a)}function g(a){return"[object Date]"===Object.prototype.toString.call(a)}function h(a){return"[object Function]"===Object.prototype.toString.call(a)}function i(a){return h(a)&&null!=a.name&&a.name.length>0}function j(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function k(b){if(c(b))return""+b;if(d(b))return!!b;if(g(b))return new Date(b.getTime());if(h(b))return b;if(a(b)){for(var e=[],i=0;i<b.length;i++)e.push(k(b[i]));return e}if(f(b)){var j={};for(var l in b)j[l]=k(b[l]);return j}return b}function l(b,e,g,h){var i,j,l={},m={};for(g=g||[],h=h||[],j=0;j<g.length;j++)l[g[j]]=!0;for(j=0;j<h.length;j++)m[h[j]]=!0;var n=k(b);for(j in e)if(null==n[j]||m[j])n[j]=e[j];else if(c(e[j])||d(e[j]))l[j]?(i=[],i.push.apply(i,a(n[j])?n[j]:[n[j]]),i.push.apply(i,d(e[j])?e[j]:[e[j]]),n[j]=i):n[j]=e[j];else if(a(e[j]))i=[],a(n[j])&&i.push.apply(i,n[j]),i.push.apply(i,e[j]),n[j]=i;else if(f(e[j])){f(n[j])||(n[j]={});for(var o in e[j])n[j][o]=e[j][o]}return n}function m(a,b,c){if(null!=a){var d=a,e=d;return b.replace(/([^\.])+/g,function(a,b,d,f){var g=a.match(/([^\[0-9]+){1}(\[)([0-9+])/),h=d+a.length>=f.length,i=function(){return e[g[1]]||function(){return e[g[1]]=[],e[g[1]]}()};if(h)g?i()[g[3]]=c:e[a]=c;else if(g){var j=i();e=j[g[3]]||function(){return j[g[3]]={},j[g[3]]}()}else e=e[a]||function(){return e[a]={},e[a]}();return""}),a}}function n(a,b,c){for(var d=0;d<c.length;d++){var e=c[d][0][c[d][1]].apply(c[d][0],c[d][2]);if(e===b)return e}return a}function o(b,d,e,g){var i=function(a){var b=a.match(/(\${.*?})/g);if(null!=b)for(var c=0;c<b.length;c++){var e=d[b[c].substring(2,b[c].length-1)]||"";null!=e&&(a=a.replace(b[c],e))}return a},j=function(b){if(null!=b){if(c(b))return i(b);if(!h(b)||g||null!=e&&0!==(b.name||"").indexOf(e)){if(a(b)){for(var k=[],l=0;l<b.length;l++)k.push(j(b[l]));return k}if(f(b)){var m={};for(var n in b)m[n]=j(b[n]);return m}return b}return b(d)}};return j(b)}function p(a,b){if(a)for(var c=0;c<a.length;c++)if(b(a[c]))return c;return-1}function q(a,b){var c=p(a,b);return c>-1&&a.splice(c,1),-1!==c}function r(a,b){var c=a.indexOf(b);return c>-1&&a.splice(c,1),-1!==c}function s(a,b,c){-1===p(a,c)&&a.push(b)}function t(a,b,c,d){var e=a[b];return null==e&&(e=[],a[b]=e),e[d?"unshift":"push"](c),e}function u(a,b,c){return-1===a.indexOf(b)?(c?a.unshift(b):a.push(b),!0):!1}function v(b,c,d){var e;c=a(c)?c:[c];var f=function(a){for(var c=a.__proto__;null!=c;)if(null!=c.prototype){for(var d in c.prototype)c.prototype.hasOwnProperty(d)&&!b.prototype.hasOwnProperty(d)&&(b.prototype[d]=c.prototype[d]);c=c.prototype.__proto__}else c=null};for(e=0;e<c.length;e++){for(var g in c[e].prototype)c[e].prototype.hasOwnProperty(g)&&!b.prototype.hasOwnProperty(g)&&(b.prototype[g]=c[e].prototype[g]);f(c[e])}var h=function(a,b){return function(){for(e=0;e<c.length;e++)c[e].prototype[a]&&c[e].prototype[a].apply(this,arguments);return b.apply(this,arguments)}},i=function(a){for(var c in a)b.prototype[c]=h(c,a[c])};if(arguments.length>2)for(e=2;e<arguments.length;e++)i(arguments[e]);return b}function w(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})}function x(a){if(null==a)return null;for(var b=a.replace(/^\s\s*/,""),c=/\s/,d=b.length;c.test(b.charAt(--d)););return b.slice(0,d+1)}function y(a,b){a=null==a.length||"string"==typeof a?[a]:a;for(var c=0;c<a.length;c++)b(a[c])}function z(a,b){for(var c=[],d=0;d<a.length;d++)c.push(b(a[d]));return c}function A(a,b,c){c=c||"parent";var d=function(a){return a?b[a]:null},e=function(a){return a?d(a[c]):null},f=function(a,b){if(null==a)return b;var c=["anchor","anchors","cssClass","connector","paintStyle","hoverPaintStyle","endpoint","endpoints"];"override"===b.mergeStrategy&&Array.prototype.push.apply(c,["events","overlays"]);var d=l(a,b,[],c);return f(e(a),d)},g=function(a){if(null==a)return{};if("string"==typeof a)return d(a);if(a.length){for(var b=!1,c=0,e=void 0;!b&&c<a.length;)e=g(a[c]),e?b=!0:c++;return e}},h=g(a);return h?f(e(h),h):{}}function B(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];if(E.logEnabled&&"undefined"!=typeof console)try{var c=arguments[arguments.length-1];console.log(c)}catch(d){}}function C(a,b,c){return function(){var d=null;try{null!=b&&(d=b.apply(this,arguments))}catch(e){B("jsPlumb function failed : "+e)}if(null!=a&&(null==c||d!==c))try{d=a.apply(this,arguments)}catch(e){B("wrapped function failed : "+e)}return d}}var D=this;D.jsPlumbUtil=D.jsPlumbUtil||{};var E=D.jsPlumbUtil; true&&(exports.jsPlumbUtil=E),E.isArray=a,E.isNumber=b,E.isString=c,E.isBoolean=d,E.isNull=e,E.isObject=f,E.isDate=g,E.isFunction=h,E.isNamedFunction=i,E.isEmpty=j,E.clone=k,E.merge=l,E.replace=m,E.functionChain=n,E.populate=o,E.findWithFunction=p,E.removeWithFunction=q,E.remove=r,E.addWithFunction=s,E.addToList=t,E.suggest=u,E.extend=v,E.uuid=w,E.fastTrim=x,E.each=y,E.map=z,E.mergeWithParents=A,E.logEnabled=!0,E.log=B,E.wrap=C;var F=function(){function a(){var a=this;this._listeners={},this.eventsSuspended=!1,this.tick=!1,this.eventsToDieOn={ready:!0},this.queue=[],this.bind=function(b,c,d){var e=function(b){t(a._listeners,b,c,d),c.__jsPlumb=c.__jsPlumb||{},c.__jsPlumb[w()]=b};if("string"==typeof b)e(b);else if(null!=b.length)for(var f=0;f<b.length;f++)e(b[f]);return a},this.fire=function(a,b,c){if(this.tick)this.queue.unshift(arguments);else{if(this.tick=!0,!this.eventsSuspended&&this._listeners[a]){var d=this._listeners[a].length,e=0,f=!1,g=null;if(!this.shouldFireEvent||this.shouldFireEvent(a,b,c))for(;!f&&d>e&&g!==!1;){if(this.eventsToDieOn[a])this._listeners[a][e].apply(this,[b,c]);else try{g=this._listeners[a][e].apply(this,[b,c])}catch(h){B("jsPlumb: fire failed for event "+a+" : "+h)}e++,(null==this._listeners||null==this._listeners[a])&&(f=!0)}}this.tick=!1,this._drain()}return this},this._drain=function(){var b=a.queue.pop();b&&a.fire.apply(a,b)},this.unbind=function(a,b){if(0===arguments.length)this._listeners={};else if(1===arguments.length){if("string"==typeof a)delete this._listeners[a];else if(a.__jsPlumb){var c=void 0;for(var d in a.__jsPlumb)c=a.__jsPlumb[d],r(this._listeners[c]||[],a)}}else 2===arguments.length&&r(this._listeners[a]||[],b);return this},this.getListener=function(b){return a._listeners[b]},this.setSuspendEvents=function(b){a.eventsSuspended=b},this.isSuspendEvents=function(){return a.eventsSuspended},this.silently=function(b){a.setSuspendEvents(!0);try{b()}catch(c){B("Cannot execute silent function "+c)}a.setSuspendEvents(!1)},this.cleanupListeners=function(){for(var b in a._listeners)a._listeners[b]=null}}return a}();E.EventGenerator=F}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this;a.jsPlumbUtil.matchesSelector=function(a,b,c){c=c||a.parentNode;for(var d=c.querySelectorAll(b),e=0;e<d.length;e++)if(d[e]===a)return!0;return!1},a.jsPlumbUtil.consume=function(a,b){a.stopPropagation?a.stopPropagation():a.returnValue=!1,!b&&a.preventDefault&&a.preventDefault()},a.jsPlumbUtil.sizeElement=function(a,b,c,d,e){a&&(a.style.height=e+"px",a.height=e,a.style.width=d+"px",a.width=d,a.style.left=b+"px",a.style.top=c+"px")}}.call("undefined"!=typeof window?window:this),function(){var a={deriveAnchor:function(a,b,c,d){return{top:["TopRight","TopLeft"],bottom:["BottomRight","BottomLeft"]}[a][b]}},b=this,c=function(a){this.count=0,this.instance=a,this.lists={},this.instance.addList=function(a,b){return this.listManager.addList(a,b)},this.instance.removeList=function(a){this.listManager.removeList(a)},this.instance.bind("manageElement",function(a){for(var b=this.instance.getSelector(a.el,"[jtk-scrollable-list]"),c=0;c<b.length;c++)this.addList(b[c])}.bind(this)),this.instance.bind("unmanageElement",function(a){this.removeList(a.el)}),this.instance.bind("connection",function(a,b){null==b&&(this._maybeUpdateParentList(a.source),this._maybeUpdateParentList(a.target))}.bind(this))};b.jsPlumbListManager=c,c.prototype={addList:function(b,c){var e=this.instance.extend({},a);c=this.instance.extend(e,c||{});var f=[this.instance.getInstanceIndex(),this.count++].join("_");this.lists[f]=new d(this.instance,b,c,f)},removeList:function(a){var b=this.lists[a._jsPlumbList];b&&(b.destroy(),delete this.lists[a._jsPlumbList])},_maybeUpdateParentList:function(a){for(var b=a.parentNode,c=this.instance.getContainer();null!=b&&b!==c;){if(null!=b._jsPlumbList&&null!=this.lists[b._jsPlumbList])return void b._jsPlumbScrollHandler();b=b.parentNode}}};var d=function(a,b,c,d){function e(a,b,d,e){return c.anchor?c.anchor:c.deriveAnchor(a,b,d,e)}function f(a,b,d,e){return c.deriveEndpoint?c.deriveEndpoint(a,b,d,e):c.endpoint?c.endpoint:d.type}function g(b){for(var c=b.parentNode,d=a.getContainer();null!=c&&c!==d;){if(a.hasClass(c,"jtk-managed"))return void a.recalculateOffsets(c);c=c.parentNode}}b._jsPlumbList=d;var h=function(c){for(var d=a.getSelector(b,".jtk-managed"),h=a.getId(b),i=0;i<d.length;i++){if(d[i].offsetTop<b.scrollTop)d[i]._jsPlumbProxies||(d[i]._jsPlumbProxies=d[i]._jsPlumbProxies||[],a.select({source:d[i]}).each(function(c){a.proxyConnection(c,0,b,h,function(){return f("top",0,c.endpoints[0],c)},function(){return e("top",0,c.endpoints[0],c)}),d[i]._jsPlumbProxies.push([c,0])}),a.select({target:d[i]}).each(function(c){a.proxyConnection(c,1,b,h,function(){return f("top",1,c.endpoints[1],c)},function(){return e("top",1,c.endpoints[1],c)}),d[i]._jsPlumbProxies.push([c,1])}));else if(d[i].offsetTop>b.scrollTop+b.offsetHeight)d[i]._jsPlumbProxies||(d[i]._jsPlumbProxies=d[i]._jsPlumbProxies||[],a.select({source:d[i]}).each(function(c){a.proxyConnection(c,0,b,h,function(){return f("bottom",0,c.endpoints[0],c)},function(){return e("bottom",0,c.endpoints[0],c)}),d[i]._jsPlumbProxies.push([c,0])}),a.select({target:d[i]}).each(function(c){a.proxyConnection(c,1,b,h,function(){return f("bottom",1,c.endpoints[1],c)},function(){return e("bottom",1,c.endpoints[1],c)}),d[i]._jsPlumbProxies.push([c,1])}));else if(d[i]._jsPlumbProxies){for(var j=0;j<d[i]._jsPlumbProxies.length;j++)a.unproxyConnection(d[i]._jsPlumbProxies[j][0],d[i]._jsPlumbProxies[j][1],h);delete d[i]._jsPlumbProxies}a.revalidate(d[i])}g(b)};a.setAttribute(b,"jtk-scrollable-list","true"),b._jsPlumbScrollHandler=h,a.on(b,"scroll",h),h(),this.destroy=function(){a.off(b,"scroll",h),delete b._jsPlumbScrollHandler;for(var c=a.getSelector(b,".jtk-managed"),d=a.getId(b),e=0;e<c.length;e++)if(c[e]._jsPlumbProxies){for(var f=0;f<c[e]._jsPlumbProxies.length;f++)a.unproxyConnection(c[e]._jsPlumbProxies[f][0],c[e]._jsPlumbProxies[f][1],d);delete c[e]._jsPlumbProxies}}}}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumbUtil,c=function(){return""+(new Date).getTime()},d=function(a){if(a._jsPlumb.paintStyle&&a._jsPlumb.hoverPaintStyle){var b={};o.extend(b,a._jsPlumb.paintStyle),o.extend(b,a._jsPlumb.hoverPaintStyle),delete a._jsPlumb.hoverPaintStyle,b.gradient&&a._jsPlumb.paintStyle.fill&&delete b.gradient,a._jsPlumb.hoverPaintStyle=b}},e=["tap","dbltap","click","dblclick","mouseover","mouseout","mousemove","mousedown","mouseup","contextmenu"],f=function(a,b,c,d){var e=a.getAttachedElements();if(e)for(var f=0,g=e.length;g>f;f++)d&&d===e[f]||e[f].setHover(b,!0,c)},g=function(a){return null==a?null:a.split(" ")},h=function(a,b,c){for(var d in b)a[d]=c},i=function(a,c,d){if(a.getDefaultType){var e=a.getTypeDescriptor(),f={},g=a.getDefaultType(),i=b.merge({},g);h(f,g,"__default");for(var j=0,k=a._jsPlumb.types.length;k>j;j++){var l=a._jsPlumb.types[j];if("__default"!==l){var m=a._jsPlumb.instance.getType(l,e);if(null!=m){var n=["anchor","anchors","connector","paintStyle","hoverPaintStyle","endpoint","endpoints","connectorOverlays","connectorStyle","connectorHoverStyle","endpointStyle","endpointHoverStyle"],o=[];"override"===m.mergeStrategy?Array.prototype.push.apply(n,["events","overlays","cssClass"]):o.push("cssClass"),i=b.merge(i,m,o,n),h(f,m,l)}}}c&&(i=b.populate(i,c,"_")),a.applyType(i,d,f),d||a.repaint()}},j=a.jsPlumbUIComponent=function(a){b.EventGenerator.apply(this,arguments);var c=this,d=arguments,e=c.idPrefix,f=e+(new Date).getTime();this._jsPlumb={instance:a._jsPlumb,parameters:a.parameters||{},paintStyle:null,hoverPaintStyle:null,paintStyleInUse:null,hover:!1,beforeDetach:a.beforeDetach,beforeDrop:a.beforeDrop,overlayPlacements:[],hoverClass:a.hoverClass||a._jsPlumb.Defaults.HoverClass,types:[],typeCache:{}},this.cacheTypeItem=function(a,b,c){this._jsPlumb.typeCache[c]=this._jsPlumb.typeCache[c]||{},this._jsPlumb.typeCache[c][a]=b},this.getCachedTypeItem=function(a,b){return this._jsPlumb.typeCache[b]?this._jsPlumb.typeCache[b][a]:null},this.getId=function(){return f};var g=a.overlays||[],h={};if(this.defaultOverlayKeys){for(var i=0;i<this.defaultOverlayKeys.length;i++)Array.prototype.push.apply(g,this._jsPlumb.instance.Defaults[this.defaultOverlayKeys[i]]||[]);for(i=0;i<g.length;i++){var j=o.convertToFullOverlaySpec(g[i]);h[j[1].id]=j}}var k={overlays:h,parameters:a.parameters||{},scope:a.scope||this._jsPlumb.instance.getDefaultScope()};if(this.getDefaultType=function(){return k},this.appendToDefaultType=function(a){for(var b in a)k[b]=a[b]},a.events)for(var l in a.events)c.bind(l,a.events[l]);this.clone=function(){var a=Object.create(this.constructor.prototype);return this.constructor.apply(a,d),a}.bind(this),this.isDetachAllowed=function(a){var c=!0;if(this._jsPlumb.beforeDetach)try{c=this._jsPlumb.beforeDetach(a)}catch(d){b.log("jsPlumb: beforeDetach callback failed",d)}return c},this.isDropAllowed=function(a,c,d,e,f,g,h){var i=this._jsPlumb.instance.checkCondition("beforeDrop",{sourceId:a,targetId:c,scope:d,connection:e,dropEndpoint:f,source:g,target:h});if(this._jsPlumb.beforeDrop)try{i=this._jsPlumb.beforeDrop({sourceId:a,targetId:c,scope:d,connection:e,dropEndpoint:f,source:g,target:h})}catch(j){b.log("jsPlumb: beforeDrop callback failed",j)}return i};var m=[];this.setListenerComponent=function(a){for(var b=0;b<m.length;b++)m[b][3]=a}},k=function(a,b){var c=a._jsPlumb.types[b],d=a._jsPlumb.instance.getType(c,a.getTypeDescriptor());null!=d&&d.cssClass&&a.canvas&&a._jsPlumb.instance.removeClass(a.canvas,d.cssClass)};b.extend(a.jsPlumbUIComponent,b.EventGenerator,{getParameter:function(a){return this._jsPlumb.parameters[a]},setParameter:function(a,b){this._jsPlumb.parameters[a]=b},getParameters:function(){return this._jsPlumb.parameters},setParameters:function(a){this._jsPlumb.parameters=a},getClass:function(){return o.getClass(this.canvas)},hasClass:function(a){return o.hasClass(this.canvas,a)},addClass:function(a){o.addClass(this.canvas,a)},removeClass:function(a){o.removeClass(this.canvas,a)},updateClasses:function(a,b){o.updateClasses(this.canvas,a,b)},setType:function(a,b,c){this.clearTypes(),this._jsPlumb.types=g(a)||[],i(this,b,c)},getType:function(){return this._jsPlumb.types},reapplyTypes:function(a,b){i(this,a,b)},hasType:function(a){return-1!==this._jsPlumb.types.indexOf(a)},addType:function(a,b,c){var d=g(a),e=!1;if(null!=d){for(var f=0,h=d.length;h>f;f++)this.hasType(d[f])||(this._jsPlumb.types.push(d[f]),e=!0);e&&i(this,b,c)}},removeType:function(a,b,c){var d=g(a),e=!1,f=function(a){var b=this._jsPlumb.types.indexOf(a);return-1!==b?(k(this,b),this._jsPlumb.types.splice(b,1),!0):!1}.bind(this);if(null!=d){for(var h=0,j=d.length;j>h;h++)e=f(d[h])||e;e&&i(this,b,c)}},clearTypes:function(a,b){for(var c=this._jsPlumb.types.length,d=0;c>d;d++)k(this,0),this._jsPlumb.types.splice(0,1);i(this,a,b)},toggleType:function(a,b,c){var d=g(a);if(null!=d){for(var e=0,f=d.length;f>e;e++){var h=this._jsPlumb.types.indexOf(d[e]);-1!==h?(k(this,h),this._jsPlumb.types.splice(h,1)):this._jsPlumb.types.push(d[e])}i(this,b,c)}},applyType:function(a,b){if(this.setPaintStyle(a.paintStyle,b),this.setHoverPaintStyle(a.hoverPaintStyle,b),a.parameters)for(var c in a.parameters)this.setParameter(c,a.parameters[c]);this._jsPlumb.paintStyleInUse=this.getPaintStyle()},setPaintStyle:function(a,b){this._jsPlumb.paintStyle=a,this._jsPlumb.paintStyleInUse=this._jsPlumb.paintStyle,d(this),b||this.repaint()},getPaintStyle:function(){return this._jsPlumb.paintStyle},setHoverPaintStyle:function(a,b){this._jsPlumb.hoverPaintStyle=a,d(this),b||this.repaint()},getHoverPaintStyle:function(){return this._jsPlumb.hoverPaintStyle},destroy:function(a){(a||null==this.typeId)&&(this.cleanupListeners(),this.clone=null,this._jsPlumb=null)},isHover:function(){return this._jsPlumb.hover},setHover:function(a,b,d){if(this._jsPlumb&&!this._jsPlumb.instance.currentlyDragging&&!this._jsPlumb.instance.isHoverSuspended()){this._jsPlumb.hover=a;var e=a?"addClass":"removeClass";null!=this.canvas&&(null!=this._jsPlumb.instance.hoverClass&&this._jsPlumb.instance[e](this.canvas,this._jsPlumb.instance.hoverClass),null!=this._jsPlumb.hoverClass&&this._jsPlumb.instance[e](this.canvas,this._jsPlumb.hoverClass)),null!=this._jsPlumb.hoverPaintStyle&&(this._jsPlumb.paintStyleInUse=a?this._jsPlumb.hoverPaintStyle:this._jsPlumb.paintStyle,this._jsPlumb.instance.isSuspendDrawing()||(d=d||c(),this.repaint({timestamp:d,recalc:!1}))),this.getAttachedElements&&!b&&f(this,a,c(),this)}}});var l=0,m=function(){var a=l+1;return l++,a},n=a.jsPlumbInstance=function(d){this.version="2.12.3",this.Defaults={Anchor:"Bottom",Anchors:[null,null],ConnectionsDetachable:!0,ConnectionOverlays:[],Connector:"Bezier",Container:null,DoNotThrowErrors:!1,DragOptions:{},DropOptions:{},Endpoint:"Dot",EndpointOverlays:[],Endpoints:[null,null],EndpointStyle:{fill:"#456"},EndpointStyles:[null,null],EndpointHoverStyle:null,EndpointHoverStyles:[null,null],HoverPaintStyle:null,LabelStyle:{color:"black"},LogEnabled:!1,Overlays:[],MaxConnections:1,PaintStyle:{"stroke-width":4,stroke:"#456"},ReattachConnections:!1,RenderMode:"svg",Scope:"jsPlumb_DefaultScope"},d&&o.extend(this.Defaults,d),this.logEnabled=this.Defaults.LogEnabled,this._connectionTypes={},this._endpointTypes={},b.EventGenerator.apply(this);var f=this,g=m(),h=f.bind,i={},k=1,l=function(a){if(null==a)return null;if(3===a.nodeType||8===a.nodeType)return{el:a,text:!0};var c=f.getElement(a);return{el:c,id:b.isString(a)&&null==c?a:T(c)}};this.getInstanceIndex=function(){return g},this.setZoom=function(a,b){return k=a,f.fire("zoom",k),b&&f.repaintEverything(),!0},this.getZoom=function(){return k};for(var n in this.Defaults)i[n]=this.Defaults[n];var p,q=[];this.unbindContainer=function(){if(null!=p&&q.length>0)for(var a=0;a<q.length;a++)f.off(p,q[a][0],q[a][1])},this.setContainer=function(a){this.unbindContainer(),a=this.getElement(a),this.select().each(function(b){b.moveParent(a)}),this.selectEndpoints().each(function(b){b.moveParent(a)});var b=p;p=a,q.length=0;for(var c={endpointclick:"endpointClick",endpointdblclick:"endpointDblClick"},d=function(a,b,d){var e=b.srcElement||b.target,g=(e&&e.parentNode?e.parentNode._jsPlumb:null)||(e?e._jsPlumb:null)||(e&&e.parentNode&&e.parentNode.parentNode?e.parentNode.parentNode._jsPlumb:null);if(g){g.fire(a,g,b);var h=d?c[d+a]||a:a;f.fire(h,g.component||g,b)}},g=function(a,b,c){q.push([a,c]),f.on(p,a,b,c)},h=function(a){g(a,".jtk-connector",function(b){d(a,b)}),g(a,".jtk-endpoint",function(b){d(a,b,"endpoint")}),g(a,".jtk-overlay",function(b){d(a,b)})},i=0;i<e.length;i++)h(e[i]);for(var j in w){var k=w[j].el;k.parentNode===b&&(b.removeChild(k),p.appendChild(k))}},this.getContainer=function(){return p},this.bind=function(a,b){"ready"===a&&s?b():h.apply(f,[a,b])},f.importDefaults=function(a){for(var b in a)f.Defaults[b]=a[b];return a.Container&&f.setContainer(a.Container),f},f.restoreDefaults=function(){return f.Defaults=o.extend({},i),f};var r=null,s=!1,t=[],u={},v={},w={},x={},y={},z=!1,A=[],B=!1,C=null,D=this.Defaults.Scope,E=1,F=function(){return""+E++},G=function(a,b){p?p.appendChild(a):b?this.getElement(b).appendChild(a):this.appendToRoot(a)}.bind(this),H=function(a,b,d,e){if(!B){var g,h=T(a),i=f.getDragManager();i&&(g=i.getElementsForDraggable(h)),null==d&&(d=c());var j=oa({elId:h,offset:b,recalc:!1,timestamp:d});if(g&&j&&j.o)for(var k in g)oa({elId:g[k].id,offset:{left:j.o.left+g[k].offset.left,top:j.o.top+g[k].offset.top},recalc:!1,timestamp:d});if(f.anchorManager.redraw(h,b,d,null,e),g)for(var l in g)f.anchorManager.redraw(g[l].id,b,d,g[l].offset,e,!0)}},I=function(a){return v[a]},J=function(a,b){for(var c=a.scope.split(/\s/),d=b.scope.split(/\s/),e=0;e<c.length;e++)for(var f=0;f<d.length;f++)if(d[f]===c[e])return!0;return!1},K=function(a,b){var c=o.extend({},a);for(var d in b)b[d]&&(c[d]=b[d]);return c},L=function(a,c){var d=o.extend({},a);if(c&&o.extend(d,c),d.source&&(d.source.endpoint?d.sourceEndpoint=d.source:d.source=f.getElement(d.source)),d.target&&(d.target.endpoint?d.targetEndpoint=d.target:d.target=f.getElement(d.target)),a.uuids&&(d.sourceEndpoint=I(a.uuids[0]),d.targetEndpoint=I(a.uuids[1])),d.sourceEndpoint&&d.sourceEndpoint.isFull())return void b.log(f,"could not add connection; source endpoint is full");if(d.targetEndpoint&&d.targetEndpoint.isFull())return void b.log(f,"could not add connection; target endpoint is full");if(!d.type&&d.sourceEndpoint&&(d.type=d.sourceEndpoint.connectionType),d.sourceEndpoint&&d.sourceEndpoint.connectorOverlays){d.overlays=d.overlays||[];for(var e=0,g=d.sourceEndpoint.connectorOverlays.length;g>e;e++)d.overlays.push(d.sourceEndpoint.connectorOverlays[e])}d.sourceEndpoint&&d.sourceEndpoint.scope&&(d.scope=d.sourceEndpoint.scope),!d["pointer-events"]&&d.sourceEndpoint&&d.sourceEndpoint.connectorPointerEvents&&(d["pointer-events"]=d.sourceEndpoint.connectorPointerEvents);var h=function(a,b,c){var e=K(b,{anchor:d.anchors?d.anchors[c]:d.anchor,endpoint:d.endpoints?d.endpoints[c]:d.endpoint,paintStyle:d.endpointStyles?d.endpointStyles[c]:d.endpointStyle,hoverPaintStyle:d.endpointHoverStyles?d.endpointHoverStyles[c]:d.endpointHoverStyle});return delete e.label,f.addEndpoint(a,e)},i=function(a,b,c,e){if(d[a]&&!d[a].endpoint&&!d[a+"Endpoint"]&&!d.newConnection){var f=T(d[a]),g=c[f];if(g=g?g[e]:null){if(!g.enabled)return!1;var i=null!=g.endpoint&&g.endpoint._jsPlumb?g.endpoint:h(d[a],g.def,b);if(i.isFull())return!1;d[a+"Endpoint"]=i,!d.scope&&g.def.scope&&(d.scope=g.def.scope),g.uniqueEndpoint?g.endpoint?i.finalEndpoint=g.endpoint:(g.endpoint=i,i.setDeleteOnEmpty(!1)):i.setDeleteOnEmpty(!0),0===b&&g.def.connectorOverlays&&(d.overlays=d.overlays||[],Array.prototype.push.apply(d.overlays,g.def.connectorOverlays))}}};return i("source",0,this.sourceEndpointDefinitions,d.type||"default")!==!1&&i("target",1,this.targetEndpointDefinitions,d.type||"default")!==!1?(d.sourceEndpoint&&d.targetEndpoint&&(J(d.sourceEndpoint,d.targetEndpoint)||(d=null)),d):void 0}.bind(f),M=function(a){var b=f.Defaults.ConnectionType||f.getDefaultConnectionType();a._jsPlumb=f,a.newConnection=M,a.newEndpoint=O,a.endpointsByUUID=v,a.endpointsByElement=u,a.finaliseConnection=N,a.id="con_"+F();var c=new b(a);return c.isDetachable()&&(c.endpoints[0].initDraggable("_jsPlumbSource"),c.endpoints[1].initDraggable("_jsPlumbTarget")),c},N=f.finaliseConnection=function(a,b,c,d){if(b=b||{},a.suspendedEndpoint||t.push(a),a.pending=null,a.endpoints[0].isTemporarySource=!1,d!==!1&&f.anchorManager.newConnection(a),H(a.source),!b.doNotFireConnectionEvent&&b.fireEvent!==!1){var e={connection:a,source:a.source,target:a.target,sourceId:a.sourceId,targetId:a.targetId,sourceEndpoint:a.endpoints[0],targetEndpoint:a.endpoints[1]};f.fire("connection",e,c)}},O=function(a,b){var c=f.Defaults.EndpointType||o.Endpoint,d=o.extend({},a);d._jsPlumb=f,d.newConnection=M,d.newEndpoint=O,d.endpointsByUUID=v,d.endpointsByElement=u,d.fireDetachEvent=W,d.elementId=b||T(d.source);var e=new c(d);return e.id="ep_"+F(),na(d.elementId,d.source),o.headless||f.getDragManager().endpointAdded(d.source,b),e},P=function(a,b,c){var d=u[a];if(d&&d.length)for(var e=0,f=d.length;f>e;e++){for(var g=0,h=d[e].connections.length;h>g;g++){var i=b(d[e].connections[g]);if(i)return}c&&c(d[e])}},Q=function(a,b,c){b="block"===b;var d=null;c&&(d=function(a){a.setVisible(b,!0,!0)});var e=l(a);P(e.id,function(a){if(b&&c){var d=a.sourceId===e.id?1:0;a.endpoints[d].isVisible()&&a.setVisible(!0)}else a.setVisible(b)},d)},R=function(a,b){var c=null;b&&(c=function(a){var b=a.isVisible();a.setVisible(!b)}),P(a,function(a){var b=a.isVisible();a.setVisible(!b)},c)},S=function(a){var b=x[a];return b?{o:b,s:A[a]}:oa({elId:a})},T=function(a,c,d){if(b.isString(a))return a;if(null==a)return null;var e=f.getAttribute(a,"id");return e&&"undefined"!==e||(2===arguments.length&&void 0!==arguments[1]?e=c:(1===arguments.length||3===arguments.length&&!arguments[2])&&(e="jsPlumb_"+g+"_"+F()),d||f.setAttribute(a,"id",e)),e};this.setConnectionBeingDragged=function(a){z=a},this.isConnectionBeingDragged=function(){return z},this.getManagedElements=function(){return w},this.connectorClass="jtk-connector",this.connectorOutlineClass="jtk-connector-outline",this.connectedClass="jtk-connected",this.hoverClass="jtk-hover",this.endpointClass="jtk-endpoint",this.endpointConnectedClass="jtk-endpoint-connected",this.endpointFullClass="jtk-endpoint-full",this.endpointDropAllowedClass="jtk-endpoint-drop-allowed",this.endpointDropForbiddenClass="jtk-endpoint-drop-forbidden",this.overlayClass="jtk-overlay",this.draggingClass="jtk-dragging",this.elementDraggingClass="jtk-element-dragging",this.sourceElementDraggingClass="jtk-source-element-dragging",this.targetElementDraggingClass="jtk-target-element-dragging",this.endpointAnchorClassPrefix="jtk-endpoint-anchor",this.hoverSourceClass="jtk-source-hover",this.hoverTargetClass="jtk-target-hover",this.dragSelectClass="jtk-drag-select",this.Anchors={},this.Connectors={svg:{}},this.Endpoints={svg:{}},this.Overlays={svg:{}},this.ConnectorRenderers={},this.SVG="svg",this.addEndpoint=function(a,c,d){d=d||{};var e=o.extend({},d);o.extend(e,c),e.endpoint=e.endpoint||f.Defaults.Endpoint,e.paintStyle=e.paintStyle||f.Defaults.EndpointStyle;for(var g=[],h=b.isArray(a)||null!=a.length&&!b.isString(a)?a:[a],i=0,j=h.length;j>i;i++){e.source=f.getElement(h[i]),la(e.source);var k=T(e.source),l=O(e,k),m=na(k,e.source).info.o;b.addToList(u,k,l),B||l.paint({anchorLoc:l.anchor.compute({xy:[m.left,m.top],wh:A[k],element:l,timestamp:C}),timestamp:C}),g.push(l)}return 1===g.length?g[0]:g},this.addEndpoints=function(a,c,d){for(var e=[],g=0,h=c.length;h>g;g++){var i=f.addEndpoint(a,c[g],d);b.isArray(i)?Array.prototype.push.apply(e,i):e.push(i)}return e},this.animate=function(a,c,d){if(!this.animationSupported)return!1;d=d||{};var e=f.getElement(a),g=T(e),h=o.animEvents.step,i=o.animEvents.complete;d[h]=b.wrap(d[h],function(){f.revalidate(g)}),d[i]=b.wrap(d[i],function(){f.revalidate(g)}),f.doAnimate(e,c,d)},this.checkCondition=function(a,c){var d=f.getListener(a),e=!0;if(d&&d.length>0){var g=Array.prototype.slice.call(arguments,1);try{for(var h=0,i=d.length;i>h;h++)e=e&&d[h].apply(d[h],g)}catch(j){b.log(f,"cannot check condition ["+a+"]"+j)}}return e},this.connect=function(a,c){var d,e=L(a,c);if(e){if(null==e.source&&null==e.sourceEndpoint)return void b.log("Cannot establish connection - source does not exist");if(null==e.target&&null==e.targetEndpoint)return void b.log("Cannot establish connection - target does not exist");la(e.source),d=M(e),N(d,e)}return d};var U=[{el:"source",elId:"sourceId",epDefs:"sourceEndpointDefinitions"},{el:"target",elId:"targetId",epDefs:"targetEndpointDefinitions"}],V=function(a,b,c,d){var e,f,g,h=U[c],i=a[h.elId],j=(a[h.el],a.endpoints[c]),k={index:c,originalSourceId:0===c?i:a.sourceId,newSourceId:a.sourceId,originalTargetId:1===c?i:a.targetId,newTargetId:a.targetId,connection:a};if(b.constructor===o.Endpoint)e=b,e.addConnection(a),b=e.element;else if(f=T(b),g=this[h.epDefs][f],f===a[h.elId])e=null;else if(g)for(var l in g){if(!g[l].enabled)return;e=null!=g[l].endpoint&&g[l].endpoint._jsPlumb?g[l].endpoint:this.addEndpoint(b,g[l].def),g[l].uniqueEndpoint&&(g[l].endpoint=e),e.addConnection(a)}else e=a.makeEndpoint(0===c,b,f);return null!=e&&(j.detachFromConnection(a),a.endpoints[c]=e,a[h.el]=e.element,a[h.elId]=e.elementId,k[0===c?"newSourceId":"newTargetId"]=e.elementId,X(k),d||a.repaint()),k.element=b,k}.bind(this);this.setSource=function(a,b,c){var d=V(a,b,0,c);this.anchorManager.sourceChanged(d.originalSourceId,d.newSourceId,a,d.el)},this.setTarget=function(a,b,c){var d=V(a,b,1,c);this.anchorManager.updateOtherEndpoint(d.originalSourceId,d.originalTargetId,d.newTargetId,a)},this.deleteEndpoint=function(a,b,c){var d="string"==typeof a?v[a]:a;return d&&f.deleteObject({endpoint:d,dontUpdateHover:b,deleteAttachedObjects:c}),f},this.deleteEveryEndpoint=function(){var a=f.setSuspendDrawing(!0);for(var b in u){var c=u[b];if(c&&c.length)for(var d=0,e=c.length;e>d;d++)f.deleteEndpoint(c[d],!0)}u={},w={},v={},x={},y={},f.anchorManager.reset();var g=f.getDragManager();return g&&g.reset(),
a||f.setSuspendDrawing(!1),f};var W=function(a,b,c){var d=f.Defaults.ConnectionType||f.getDefaultConnectionType(),e=a.constructor===d,g=e?{connection:a,source:a.source,target:a.target,sourceId:a.sourceId,targetId:a.targetId,sourceEndpoint:a.endpoints[0],targetEndpoint:a.endpoints[1]}:a;b&&f.fire("connectionDetached",g,c),f.fire("internal.connectionDetached",g,c),f.anchorManager.connectionDetached(g)},X=f.fireMoveEvent=function(a,b){f.fire("connectionMoved",a,b)};this.unregisterEndpoint=function(a){a._jsPlumb.uuid&&(v[a._jsPlumb.uuid]=null),f.anchorManager.deleteEndpoint(a);for(var b in u){var c=u[b];if(c){for(var d=[],e=0,g=c.length;g>e;e++)c[e]!==a&&d.push(c[e]);u[b]=d}u[b].length<1&&delete u[b]}};var Y="isDetachAllowed",Z="beforeDetach",$="checkCondition";this.deleteConnection=function(a,c){return null!=a&&(c=c||{},c.force||b.functionChain(!0,!1,[[a.endpoints[0],Y,[a]],[a.endpoints[1],Y,[a]],[a,Y,[a]],[f,$,[Z,a]]]))?(a.setHover(!1),W(a,!a.pending&&c.fireEvent!==!1,c.originalEvent),a.endpoints[0].detachFromConnection(a),a.endpoints[1].detachFromConnection(a),b.removeWithFunction(t,function(b){return a.id===b.id}),a.cleanup(),a.destroy(),!0):!1},this.deleteEveryConnection=function(a){a=a||{};var b=t.length,c=0;return f.batch(function(){for(var d=0;b>d;d++)c+=f.deleteConnection(t[0],a)?1:0}),c},this.deleteConnectionsForElement=function(a,b){b=b||{},a=f.getElement(a);var c=T(a),d=u[c];if(d&&d.length)for(var e=0,g=d.length;g>e;e++)d[e].deleteEveryConnection(b);return f},this.deleteObject=function(a){var c={endpoints:{},connections:{},endpointCount:0,connectionCount:0},d=a.deleteAttachedObjects!==!1,e=function(b){null!=b&&null==c.connections[b.id]&&(a.dontUpdateHover||null==b._jsPlumb||b.setHover(!1),c.connections[b.id]=b,c.connectionCount++)},g=function(b){if(null!=b&&null==c.endpoints[b.id]&&(a.dontUpdateHover||null==b._jsPlumb||b.setHover(!1),c.endpoints[b.id]=b,c.endpointCount++,d))for(var f=0;f<b.connections.length;f++){var g=b.connections[f];e(g)}};a.connection?e(a.connection):g(a.endpoint);for(var h in c.connections){var i=c.connections[h];if(i._jsPlumb){b.removeWithFunction(t,function(a){return i.id===a.id}),W(i,a.fireEvent===!1?!1:!i.pending,a.originalEvent);var j=null==a.deleteAttachedObjects?null:!a.deleteAttachedObjects;i.endpoints[0].detachFromConnection(i,null,j),i.endpoints[1].detachFromConnection(i,null,j),i.cleanup(!0),i.destroy(!0)}}for(var k in c.endpoints){var l=c.endpoints[k];l._jsPlumb&&(f.unregisterEndpoint(l),l.cleanup(!0),l.destroy(!0))}return c};var _=function(a,b,c,d){for(var e=0,f=a.length;f>e;e++)a[e][b].apply(a[e],c);return d(a)},aa=function(a,b,c){for(var d=[],e=0,f=a.length;f>e;e++)d.push([a[e][b].apply(a[e],c),a[e]]);return d},ba=function(a,b,c){return function(){return _(a,b,arguments,c)}},ca=function(a,b){return function(){return aa(a,b,arguments)}},da=function(a,b){var c=[];if(a)if("string"==typeof a){if("*"===a)return a;c.push(a)}else if(b)c=a;else if(a.length)for(var d=0,e=a.length;e>d;d++)c.push(l(a[d]).id);else c.push(l(a).id);return c},ea=function(a,b,c){return"*"===a?!0:a.length>0?-1!==a.indexOf(b):!c};this.getConnections=function(a,b){a?a.constructor===String&&(a={scope:a}):a={};for(var c=a.scope||f.getDefaultScope(),d=da(c,!0),e=da(a.source),g=da(a.target),h=!b&&d.length>1?{}:[],i=function(a,c){if(!b&&d.length>1){var e=h[a];null==e&&(e=h[a]=[]),e.push(c)}else h.push(c)},j=0,k=t.length;k>j;j++){var l=t[j],m=l.proxies&&l.proxies[0]?l.proxies[0].originalEp.elementId:l.sourceId,n=l.proxies&&l.proxies[1]?l.proxies[1].originalEp.elementId:l.targetId;ea(d,l.scope)&&ea(e,m)&&ea(g,n)&&i(l.scope,l)}return h};var fa=function(a,b){return function(c){for(var d=0,e=a.length;e>d;d++)c(a[d]);return b(a)}},ga=function(a){return function(b){return a[b]}},ha=function(a,b){var c,d,e={length:a.length,each:fa(a,b),get:ga(a)},f=["setHover","removeAllOverlays","setLabel","addClass","addOverlay","removeOverlay","removeOverlays","showOverlay","hideOverlay","showOverlays","hideOverlays","setPaintStyle","setHoverPaintStyle","setSuspendEvents","setParameter","setParameters","setVisible","repaint","addType","toggleType","removeType","removeClass","setType","bind","unbind"],g=["getLabel","getOverlay","isHover","getParameter","getParameters","getPaintStyle","getHoverPaintStyle","isVisible","hasType","getType","isSuspendEvents"];for(c=0,d=f.length;d>c;c++)e[f[c]]=ba(a,f[c],b);for(c=0,d=g.length;d>c;c++)e[g[c]]=ca(a,g[c]);return e},ia=function(a){var b=ha(a,ia);return o.extend(b,{setDetachable:ba(a,"setDetachable",ia),setReattach:ba(a,"setReattach",ia),setConnector:ba(a,"setConnector",ia),"delete":function(){for(var b=0,c=a.length;c>b;b++)f.deleteConnection(a[b])},isDetachable:ca(a,"isDetachable"),isReattach:ca(a,"isReattach")})},ja=function(a){var b=ha(a,ja);return o.extend(b,{setEnabled:ba(a,"setEnabled",ja),setAnchor:ba(a,"setAnchor",ja),isEnabled:ca(a,"isEnabled"),deleteEveryConnection:function(){for(var b=0,c=a.length;c>b;b++)a[b].deleteEveryConnection()},"delete":function(){for(var b=0,c=a.length;c>b;b++)f.deleteEndpoint(a[b])}})};this.select=function(a){return a=a||{},a.scope=a.scope||"*",ia(a.connections||f.getConnections(a,!0))},this.selectEndpoints=function(a){a=a||{},a.scope=a.scope||"*";var b=!a.element&&!a.source&&!a.target,c=b?"*":da(a.element),d=b?"*":da(a.source),e=b?"*":da(a.target),f=da(a.scope,!0),g=[];for(var h in u){var i=ea(c,h,!0),j=ea(d,h,!0),k="*"!==d,l=ea(e,h,!0),m="*"!==e;if(i||j||l)a:for(var n=0,o=u[h].length;o>n;n++){var p=u[h][n];if(ea(f,p.scope,!0)){var q=k&&d.length>0&&!p.isSource,r=m&&e.length>0&&!p.isTarget;if(q||r)continue a;g.push(p)}}}return ja(g)},this.getAllConnections=function(){return t},this.getDefaultScope=function(){return D},this.getEndpoint=I,this.getEndpoints=function(a){return u[l(a).id]||[]},this.getDefaultEndpointType=function(){return o.Endpoint},this.getDefaultConnectionType=function(){return o.Connection},this.getId=T,this.draw=H,this.info=l,this.appendElement=G;var ka=!1;this.isHoverSuspended=function(){return ka},this.setHoverSuspended=function(a){ka=a},this.hide=function(a,b){return Q(a,"none",b),f},this.idstamp=F;var la=function(a){if(!p&&a){var b=f.getElement(a);b.offsetParent&&f.setContainer(b.offsetParent)}},ma=function(){f.Defaults.Container&&f.setContainer(f.Defaults.Container)},na=f.manage=function(a,b,c){return w[a]||(w[a]={el:b,endpoints:[],connections:[]},w[a].info=oa({elId:a,timestamp:C}),f.addClass(b,"jtk-managed"),c||f.fire("manageElement",{id:a,info:w[a].info,el:b})),w[a]},oa=(f.unmanage=function(a){if(w[a]){var b=w[a].el;f.removeClass(b,"jtk-managed"),delete w[a],f.fire("unmanageElement",{id:a,el:b})}},function(a){var b,c=a.timestamp,d=a.recalc,e=a.offset,g=a.elId;return B&&!c&&(c=C),!d&&c&&c===y[g]?{o:a.offset||x[g],s:A[g]}:(d||!e&&null==x[g]?(b=w[g]?w[g].el:null,null!=b&&(A[g]=f.getSize(b),x[g]=f.getOffset(b),y[g]=c)):(x[g]=e||x[g],null==A[g]&&(b=w[g].el,null!=b&&(A[g]=f.getSize(b))),y[g]=c),x[g]&&!x[g].right&&(x[g].right=x[g].left+A[g][0],x[g].bottom=x[g].top+A[g][1],x[g].width=A[g][0],x[g].height=A[g][1],x[g].centerx=x[g].left+x[g].width/2,x[g].centery=x[g].top+x[g].height/2),{o:x[g],s:A[g]})});this.updateOffset=oa,this.init=function(){s||(ma(),f.anchorManager=new a.jsPlumb.AnchorManager({jsPlumbInstance:f}),s=!0,f.fire("ready",f))}.bind(this),this.log=r,this.jsPlumbUIComponent=j,this.makeAnchor=function(){var c,d=function(b,c){if(a.jsPlumb.Anchors[b])return new a.jsPlumb.Anchors[b](c);if(!f.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown anchor type '"+b+"'"}};if(0===arguments.length)return null;var e=arguments[0],g=arguments[1],h=(arguments[2],null);if(e.compute&&e.getOrientation)return e;if("string"==typeof e)h=d(arguments[0],{elementId:g,jsPlumbInstance:f});else if(b.isArray(e))if(b.isArray(e[0])||b.isString(e[0]))2===e.length&&b.isObject(e[1])?b.isString(e[0])?(c=a.jsPlumb.extend({elementId:g,jsPlumbInstance:f},e[1]),h=d(e[0],c)):(c=a.jsPlumb.extend({elementId:g,jsPlumbInstance:f,anchors:e[0]},e[1]),h=new a.jsPlumb.DynamicAnchor(c)):h=new o.DynamicAnchor({anchors:e,selector:null,elementId:g,jsPlumbInstance:f});else{var i={x:e[0],y:e[1],orientation:e.length>=4?[e[2],e[3]]:[0,0],offsets:e.length>=6?[e[4],e[5]]:[0,0],elementId:g,jsPlumbInstance:f,cssClass:7===e.length?e[6]:null};h=new a.jsPlumb.Anchor(i),h.clone=function(){return new a.jsPlumb.Anchor(i)}}return h.id||(h.id="anchor_"+F()),h},this.makeAnchors=function(c,d,e){for(var g=[],h=0,i=c.length;i>h;h++)"string"==typeof c[h]?g.push(a.jsPlumb.Anchors[c[h]]({elementId:d,jsPlumbInstance:e})):b.isArray(c[h])&&g.push(f.makeAnchor(c[h],d,e));return g},this.makeDynamicAnchor=function(b,c){return new a.jsPlumb.DynamicAnchor({anchors:b,selector:c,elementId:null,jsPlumbInstance:f})},this.targetEndpointDefinitions={},this.sourceEndpointDefinitions={};var pa=function(a,b,c,d,e){for(var f=a.target||a.srcElement,g=!1,h=d.getSelector(b,c),i=0;i<h.length;i++)if(h[i]===f){g=!0;break}return e?!g:g},qa=function(c,d,e,g,h){var i=new j(d),k=d._jsPlumb.EndpointDropHandler({jsPlumb:f,enabled:function(){return c.def.enabled},isFull:function(){var a=f.select({target:c.id}).length;return c.def.maxConnections>0&&a>=c.def.maxConnections},element:c.el,elementId:c.id,isSource:g,isTarget:h,addClass:function(a){f.addClass(c.el,a)},removeClass:function(a){f.removeClass(c.el,a)},onDrop:function(a){var b=a.endpoints[0];b.anchor.unlock()},isDropAllowed:function(){return i.isDropAllowed.apply(i,arguments)},isRedrop:function(a){return null!=a.suspendedElement&&null!=a.suspendedEndpoint&&a.suspendedEndpoint.element===c.el},getEndpoint:function(b){var e=c.def.endpoint;if(null==e||null==e._jsPlumb){var g=f.deriveEndpointAndAnchorSpec(b.getType().join(" "),!0),h=g.endpoints?a.jsPlumb.extend(d,{endpoint:c.def.def.endpoint||g.endpoints[1]}):d;g.anchors&&(h=a.jsPlumb.extend(h,{anchor:c.def.def.anchor||g.anchors[1]})),e=f.addEndpoint(c.el,h),e._mtNew=!0}if(d.uniqueEndpoint&&(c.def.endpoint=e),e.setDeleteOnEmpty(!0),b.isDetachable()&&e.initDraggable(),null!=e.anchor.positionFinder){var i=f.getUIPosition(arguments,f.getZoom()),j=f.getOffset(c.el),k=f.getSize(c.el),l=null==i?[0,0]:e.anchor.positionFinder(i,j,k,e.anchor.constructorParams);e.anchor.x=l[0],e.anchor.y=l[1]}return e},maybeCleanup:function(a){a._mtNew&&0===a.connections.length?f.deleteObject({endpoint:a}):delete a._mtNew}}),l=a.jsPlumb.dragEvents.drop;return e.scope=e.scope||d.scope||f.Defaults.Scope,e[l]=b.wrap(e[l],k,!0),e.rank=d.rank||0,h&&(e[a.jsPlumb.dragEvents.over]=function(){return!0}),d.allowLoopback===!1&&(e.canDrop=function(a){var b=a.getDragElement()._jsPlumbRelatedElement;return b!==c.el}),f.initDroppable(c.el,e,"internal"),k};this.makeTarget=function(b,c,d){var e=a.jsPlumb.extend({_jsPlumb:this},d);a.jsPlumb.extend(e,c);for(var g=e.maxConnections||-1,h=function(b){var c=l(b),d=c.id,h=a.jsPlumb.extend({},e.dropOptions||{}),i=e.connectionType||"default";this.targetEndpointDefinitions[d]=this.targetEndpointDefinitions[d]||{},la(d),c.el._isJsPlumbGroup&&null==h.rank&&(h.rank=-1);var j={def:a.jsPlumb.extend({},e),uniqueEndpoint:e.uniqueEndpoint,maxConnections:g,enabled:!0};e.createEndpoint&&(j.uniqueEndpoint=!0,j.endpoint=f.addEndpoint(b,j.def),j.endpoint.setDeleteOnEmpty(!1)),c.def=j,this.targetEndpointDefinitions[d][i]=j,qa(c,e,h,e.isSource===!0,!0),c.el._katavorioDrop[c.el._katavorioDrop.length-1].targetDef=j}.bind(this),i=b.length&&b.constructor!==String?b:[b],j=0,k=i.length;k>j;j++)h(i[j]);return this},this.unmakeTarget=function(a,b){var c=l(a);return f.destroyDroppable(c.el,"internal"),b||delete this.targetEndpointDefinitions[c.id],this},this.makeSource=function(c,d,e){var g=a.jsPlumb.extend({_jsPlumb:this},e);a.jsPlumb.extend(g,d);var h=g.connectionType||"default",i=f.deriveEndpointAndAnchorSpec(h);g.endpoint=g.endpoint||i.endpoints[0],g.anchor=g.anchor||i.anchors[0];for(var j=g.maxConnections||-1,m=g.onMaxConnections,n=function(d){var e=d.id,i=this.getElement(d.el);this.sourceEndpointDefinitions[e]=this.sourceEndpointDefinitions[e]||{},la(e);var l={def:a.jsPlumb.extend({},g),uniqueEndpoint:g.uniqueEndpoint,maxConnections:j,enabled:!0};g.createEndpoint&&(l.uniqueEndpoint=!0,l.endpoint=f.addEndpoint(c,l.def),l.endpoint.setDeleteOnEmpty(!1)),this.sourceEndpointDefinitions[e][h]=l,d.def=l;var n=a.jsPlumb.dragEvents.stop,o=a.jsPlumb.dragEvents.drag,p=a.jsPlumb.extend({},g.dragOptions||{}),q=p.drag,r=p.stop,s=null,t=!1;p.scope=p.scope||g.scope,p[o]=b.wrap(p[o],function(){q&&q.apply(this,arguments),t=!1}),p[n]=b.wrap(p[n],function(){if(r&&r.apply(this,arguments),this.currentlyDragging=!1,null!=s._jsPlumb){var a=g.anchor||this.Defaults.Anchor,b=s.anchor,c=s.connections[0],d=this.makeAnchor(a,e,this),h=s.element;if(null!=d.positionFinder){var i=f.getOffset(h),j=this.getSize(h),k={left:i.left+b.x*j[0],top:i.top+b.y*j[1]},l=d.positionFinder(k,i,j,d.constructorParams);d.x=l[0],d.y=l[1]}s.setAnchor(d,!0),s.repaint(),this.repaint(s.elementId),null!=c&&this.repaint(c.targetId)}}.bind(this));var u=function(c){if(3!==c.which&&2!==c.button){var l=this.sourceEndpointDefinitions[e][h];if(l.enabled){if(e=this.getId(this.getElement(d.el)),g.filter){var n=b.isString(g.filter)?pa(c,d.el,g.filter,this,g.filterExclude):g.filter(c,d.el);if(n===!1)return}var o=this.select({source:e}).length;if(l.maxConnections>=0&&o>=l.maxConnections)return m&&m({element:d.el,maxConnections:j},c),!1;var q=a.jsPlumb.getPositionOnElement(c,i,k),r={};a.jsPlumb.extend(r,l.def),r.isTemporarySource=!0,r.anchor=[q[0],q[1],0,0],r.dragOptions=p,l.def.scope&&(r.scope=l.def.scope),s=this.addEndpoint(e,r),t=!0,s.setDeleteOnEmpty(!0),l.uniqueEndpoint&&(l.endpoint?s.finalEndpoint=l.endpoint:(l.endpoint=s,s.setDeleteOnEmpty(!1)));var u=function(){f.off(s.canvas,"mouseup",u),f.off(d.el,"mouseup",u),t&&(t=!1,f.deleteEndpoint(s))};f.on(s.canvas,"mouseup",u),f.on(d.el,"mouseup",u);var v={};if(l.def.extract)for(var w in l.def.extract){var x=(c.srcElement||c.target).getAttribute(w);x&&(v[l.def.extract[w]]=x)}f.trigger(s.canvas,"mousedown",c,v),b.consume(c)}}}.bind(this);this.on(d.el,"mousedown",u),l.trigger=u,g.filter&&(b.isString(g.filter)||b.isFunction(g.filter))&&f.setDragFilter(d.el,g.filter);var v=a.jsPlumb.extend({},g.dropOptions||{});qa(d,g,v,!0,g.isTarget===!0)}.bind(this),o=c.length&&c.constructor!==String?c:[c],p=0,q=o.length;q>p;p++)n(l(o[p]));return this},this.unmakeSource=function(a,b,c){var d=l(a);f.destroyDroppable(d.el,"internal");var e=this.sourceEndpointDefinitions[d.id];if(e)for(var g in e)if(null==b||b===g){var h=e[g].trigger;h&&f.off(d.el,"mousedown",h),c||delete this.sourceEndpointDefinitions[d.id][g]}return this},this.unmakeEverySource=function(){for(var a in this.sourceEndpointDefinitions)f.unmakeSource(a,null,!0);return this.sourceEndpointDefinitions={},this};var ra=function(a,c,d){c=b.isArray(c)?c:[c];var e=T(a);d=d||"default";for(var f=0;f<c.length;f++){var g=this[c[f]][e];if(g&&g[d])return g[d].def.scope||this.Defaults.Scope}}.bind(this),sa=function(a,c,d,e){d=b.isArray(d)?d:[d];var f=T(a);e=e||"default";for(var g=0;g<d.length;g++){var h=this[d[g]][f];h&&h[e]&&(h[e].def.scope=c)}}.bind(this);this.getScope=function(a,b){return ra(a,["sourceEndpointDefinitions","targetEndpointDefinitions"])},this.getSourceScope=function(a){return ra(a,"sourceEndpointDefinitions")},this.getTargetScope=function(a){return ra(a,"targetEndpointDefinitions")},this.setScope=function(a,b,c){this.setSourceScope(a,b,c),this.setTargetScope(a,b,c)},this.setSourceScope=function(a,b,c){sa(a,b,"sourceEndpointDefinitions",c),this.setDragScope(a,b)},this.setTargetScope=function(a,b,c){sa(a,b,"targetEndpointDefinitions",c),this.setDropScope(a,b)},this.unmakeEveryTarget=function(){for(var a in this.targetEndpointDefinitions)f.unmakeTarget(a,!0);return this.targetEndpointDefinitions={},this};var ta=function(a,c,d,e,g){var h,i,j,k="source"===a?this.sourceEndpointDefinitions:this.targetEndpointDefinitions;if(g=g||"default",c.length&&!b.isString(c)){h=[];for(var m=0,n=c.length;n>m;m++)i=l(c[m]),k[i.id]&&k[i.id][g]&&(h[m]=k[i.id][g].enabled,j=e?!h[m]:d,k[i.id][g].enabled=j,f[j?"removeClass":"addClass"](i.el,"jtk-"+a+"-disabled"))}else{i=l(c);var o=i.id;k[o]&&k[o][g]&&(h=k[o][g].enabled,j=e?!h:d,k[o][g].enabled=j,f[j?"removeClass":"addClass"](i.el,"jtk-"+a+"-disabled"))}return h}.bind(this),ua=function(a,c){return b.isString(a)||!a.length?c.apply(this,[a]):a.length?c.apply(this,[a[0]]):void 0}.bind(this);this.toggleSourceEnabled=function(a,b){return ta("source",a,null,!0,b),this.isSourceEnabled(a,b)},this.setSourceEnabled=function(a,b,c){return ta("source",a,b,null,c)},this.isSource=function(a,b){return b=b||"default",ua(a,function(a){var c=this.sourceEndpointDefinitions[l(a).id];return null!=c&&null!=c[b]}.bind(this))},this.isSourceEnabled=function(a,b){return b=b||"default",ua(a,function(a){var c=this.sourceEndpointDefinitions[l(a).id];return c&&c[b]&&c[b].enabled===!0}.bind(this))},this.toggleTargetEnabled=function(a,b){return ta("target",a,null,!0,b),this.isTargetEnabled(a,b)},this.isTarget=function(a,b){return b=b||"default",ua(a,function(a){var c=this.targetEndpointDefinitions[l(a).id];return null!=c&&null!=c[b]}.bind(this))},this.isTargetEnabled=function(a,b){return b=b||"default",ua(a,function(a){var c=this.targetEndpointDefinitions[l(a).id];return c&&c[b]&&c[b].enabled===!0}.bind(this))},this.setTargetEnabled=function(a,b,c){return ta("target",a,b,null,c)},this.ready=function(a){f.bind("ready",a)};var va=function(a,b){if("object"==typeof a&&a.length)for(var c=0,d=a.length;d>c;c++)b(a[c]);else b(a);return f};this.repaint=function(a,b,c){return va(a,function(a){H(a,b,c)})},this.revalidate=function(a,b,c){return va(a,function(a){var d=c?a:f.getId(a);f.updateOffset({elId:d,recalc:!0,timestamp:b});var e=f.getDragManager();e&&e.updateOffsets(d),f.repaint(a)})},this.repaintEverything=function(){var a,b=c();for(a in u)f.updateOffset({elId:a,recalc:!0,timestamp:b});for(a in u)H(a,null,b);return this},this.removeAllEndpoints=function(a,b,c){c=c||[];var d=function(a){var e,g,h=l(a),i=u[h.id];if(i)for(c.push(h),e=0,g=i.length;g>e;e++)f.deleteEndpoint(i[e],!1);if(delete u[h.id],b&&h.el&&3!==h.el.nodeType&&8!==h.el.nodeType)for(e=0,g=h.el.childNodes.length;g>e;e++)d(h.el.childNodes[e])};return d(a),this};var wa=function(a,b){f.removeAllEndpoints(a.id,!0,b);for(var c=f.getDragManager(),d=function(a){c&&c.elementRemoved(a.id),f.anchorManager.clearFor(a.id),f.anchorManager.removeFloatingConnection(a.id),f.isSource(a.el)&&f.unmakeSource(a.el),f.isTarget(a.el)&&f.unmakeTarget(a.el),f.destroyDraggable(a.el),f.destroyDroppable(a.el),delete f.floatingConnections[a.id],delete w[a.id],delete x[a.id],a.el&&(f.removeElement(a.el),a.el._jsPlumb=null)},e=1;e<b.length;e++)d(b[e]);d(a)};this.remove=function(a,b){var c=l(a),d=[];return c.text?c.el.parentNode.removeChild(c.el):c.id&&f.batch(function(){wa(c,d)},b===!0),f},this.empty=function(a,b){var c=[],d=function(a,b){var e=l(a);if(e.text)e.el.parentNode.removeChild(e.el);else if(e.el){for(;e.el.childNodes.length>0;)d(e.el.childNodes[0]);b||wa(e,c)}};return f.batch(function(){d(a,!0)},b===!1),f},this.reset=function(a){f.silently(function(){ka=!1,f.removeAllGroups(),f.removeGroupManager(),f.deleteEveryEndpoint(),a||f.unbind(),this.targetEndpointDefinitions={},this.sourceEndpointDefinitions={},t.length=0,this.doReset&&this.doReset()}.bind(this))};var xa=function(a){a.canvas&&a.canvas.parentNode&&a.canvas.parentNode.removeChild(a.canvas),a.cleanup(),a.destroy()};this.clear=function(){f.select().each(xa),f.selectEndpoints().each(xa),u={},v={}},this.setDefaultScope=function(a){return D=a,f},this.deriveEndpointAndAnchorSpec=function(a,b){for(var c=((b?"":"default ")+a).split(/[\s]/),d=null,e=null,g=null,h=null,i=0;i<c.length;i++){var j=f.getType(c[i],"connection");j&&(j.endpoints&&(d=j.endpoints),j.endpoint&&(e=j.endpoint),j.anchors&&(h=j.anchors),j.anchor&&(g=j.anchor))}return{endpoints:d?d:[e,e],anchors:h?h:[g,g]}},this.setId=function(a,c,d){var e;b.isString(a)?e=a:(a=this.getElement(a),e=this.getId(a));var f=this.getConnections({source:e,scope:"*"},!0),g=this.getConnections({target:e,scope:"*"},!0);c=""+c,d?a=this.getElement(c):(a=this.getElement(e),this.setAttribute(a,"id",c)),u[c]=u[e]||[];for(var h=0,i=u[c].length;i>h;h++)u[c][h].setElementId(c),u[c][h].setReferenceElement(a);delete u[e],this.sourceEndpointDefinitions[c]=this.sourceEndpointDefinitions[e],delete this.sourceEndpointDefinitions[e],this.targetEndpointDefinitions[c]=this.targetEndpointDefinitions[e],delete this.targetEndpointDefinitions[e],this.anchorManager.changeId(e,c);var j=this.getDragManager();j&&j.changeId(e,c),w[c]=w[e],delete w[e];var k=function(b,d,e){for(var f=0,g=b.length;g>f;f++)b[f].endpoints[d].setElementId(c),b[f].endpoints[d].setReferenceElement(a),b[f][e+"Id"]=c,b[f][e]=a};k(f,0,"source"),k(g,1,"target"),this.repaint(c)},this.setDebugLog=function(a){r=a},this.setSuspendDrawing=function(a,b){var c=B;return B=a,C=a?(new Date).getTime():null,b&&this.repaintEverything(),c},this.isSuspendDrawing=function(){return B},this.getSuspendedAt=function(){return C},this.batch=function(a,c){var d=this.isSuspendDrawing();d||this.setSuspendDrawing(!0);try{a()}catch(e){b.log("Function run while suspended failed",e)}d||this.setSuspendDrawing(!1,!c)},this.doWhileSuspended=this.batch,this.getCachedData=S,this.timestamp=c,this.show=function(a,b){return Q(a,"block",b),f},this.toggleVisible=R,this.addListener=this.bind;var ya=[];this.registerFloatingConnection=function(a,c,d){ya[a.id]=c,b.addToList(u,a.id,d)},this.getFloatingConnectionFor=function(a){return ya[a]},this.listManager=new a.jsPlumbListManager(this)};b.extend(a.jsPlumbInstance,b.EventGenerator,{setAttribute:function(a,b,c){this.setAttribute(a,b,c)},getAttribute:function(b,c){return this.getAttribute(a.jsPlumb.getElement(b),c)},convertToFullOverlaySpec:function(a){return b.isString(a)&&(a=[a,{}]),a[1].id=a[1].id||b.uuid(),a},registerConnectionType:function(b,c){if(this._connectionTypes[b]=a.jsPlumb.extend({},c),c.overlays){for(var d={},e=0;e<c.overlays.length;e++){var f=this.convertToFullOverlaySpec(c.overlays[e]);d[f[1].id]=f}this._connectionTypes[b].overlays=d}},registerConnectionTypes:function(a){for(var b in a)this.registerConnectionType(b,a[b])},registerEndpointType:function(b,c){if(this._endpointTypes[b]=a.jsPlumb.extend({},c),c.overlays){for(var d={},e=0;e<c.overlays.length;e++){var f=this.convertToFullOverlaySpec(c.overlays[e]);d[f[1].id]=f}this._endpointTypes[b].overlays=d}},registerEndpointTypes:function(a){for(var b in a)this.registerEndpointType(b,a[b])},getType:function(a,b){return"connection"===b?this._connectionTypes[a]:this._endpointTypes[a]},setIdChanged:function(a,b){this.setId(a,b,!0)},setParent:function(a,b){var c=this.getElement(a),d=this.getId(c),e=this.getElement(b),f=this.getId(e),g=this.getDragManager();c.parentNode.removeChild(c),e.appendChild(c),g&&g.setParent(c,d,e,f)},extend:function(a,b,c){var d;if(c)for(d=0;d<c.length;d++)a[c[d]]=b[c[d]];else for(d in b)a[d]=b[d];return a},floatingConnections:{},getFloatingAnchorIndex:function(a){return a.endpoints[0].isFloating()?0:a.endpoints[1].isFloating()?1:-1},proxyConnection:function(a,b,c,d,e,f){var g,h=a.endpoints[b].elementId,i=a.endpoints[b];a.proxies=a.proxies||[],g=a.proxies[b]?a.proxies[b].ep:this.addEndpoint(c,{endpoint:e(a,b),anchor:f(a,b),parameters:{isProxyEndpoint:!0}}),g.setDeleteOnEmpty(!0),a.proxies[b]={ep:g,originalEp:i},0===b?this.anchorManager.sourceChanged(h,d,a,c):(this.anchorManager.updateOtherEndpoint(a.endpoints[0].elementId,h,d,a),a.target=c,a.targetId=d),i.detachFromConnection(a,null,!0),g.connections=[a],a.endpoints[b]=g,i.setVisible(!1),a.setVisible(!0),this.revalidate(c)},unproxyConnection:function(a,b,c){if(null!=a._jsPlumb&&null!=a.proxies&&null!=a.proxies[b]){var d=a.proxies[b].originalEp.element,e=a.proxies[b].originalEp.elementId;a.endpoints[b]=a.proxies[b].originalEp,0===b?this.anchorManager.sourceChanged(c,e,a,d):(this.anchorManager.updateOtherEndpoint(a.endpoints[0].elementId,c,e,a),a.target=d,a.targetId=e),a.proxies[b].ep.detachFromConnection(a,null),a.proxies[b].originalEp.addConnection(a),a.isVisible()&&a.proxies[b].originalEp.setVisible(!0),delete a.proxies[b]}}});var o=new n;a.jsPlumb=o,o.getInstance=function(a,b){var c=new n(a);if(b)for(var d in b)c[d]=b[d];return c.init(),c},o.each=function(a,b){if(null!=a)if("string"==typeof a)b(o.getElement(a));else if(null!=a.length)for(var c=0;c<a.length;c++)b(o.getElement(a[c]));else b(a)}, true&&(exports.jsPlumb=o)}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d="__label",e=function(a,c){var e={cssClass:c.cssClass,labelStyle:a.labelStyle,id:d,component:a,_jsPlumb:a._jsPlumb.instance},f=b.extend(e,c);return new(b.Overlays[a._jsPlumb.instance.getRenderMode()].Label)(f)},f=function(a,d){var e=null;if(c.isArray(d)){var f=d[0],g=b.extend({component:a,_jsPlumb:a._jsPlumb.instance},d[1]);3===d.length&&b.extend(g,d[2]),e=new(b.Overlays[a._jsPlumb.instance.getRenderMode()][f])(g)}else e=d.constructor===String?new(b.Overlays[a._jsPlumb.instance.getRenderMode()][d])({component:a,_jsPlumb:a._jsPlumb.instance}):d;return e.id=e.id||c.uuid(),a.cacheTypeItem("overlay",e,e.id),a._jsPlumb.overlays[e.id]=e,e};b.OverlayCapableJsPlumbUIComponent=function(b){a.jsPlumbUIComponent.apply(this,arguments),this._jsPlumb.overlays={},this._jsPlumb.overlayPositions={},b.label&&(this.getDefaultType().overlays[d]=["Label",{label:b.label,location:b.labelLocation||this.defaultLabelLocation||.5,labelStyle:b.labelStyle||this._jsPlumb.instance.Defaults.LabelStyle,id:d}]),this.setListenerComponent=function(a){if(this._jsPlumb)for(var b in this._jsPlumb.overlays)this._jsPlumb.overlays[b].setListenerComponent(a)}},b.OverlayCapableJsPlumbUIComponent.applyType=function(a,b){if(b.overlays){var c,d={};for(c in b.overlays){var e=a._jsPlumb.overlays[b.overlays[c][1].id];if(e)e.updateFrom(b.overlays[c][1]),d[b.overlays[c][1].id]=!0;else{var f=a.getCachedTypeItem("overlay",b.overlays[c][1].id);null!=f?(f.reattach(a._jsPlumb.instance,a),f.setVisible(!0),f.updateFrom(b.overlays[c][1]),a._jsPlumb.overlays[f.id]=f):f=a.addOverlay(b.overlays[c],!0),d[f.id]=!0}}for(c in a._jsPlumb.overlays)null==d[a._jsPlumb.overlays[c].id]&&a.removeOverlay(a._jsPlumb.overlays[c].id,!0)}},c.extend(b.OverlayCapableJsPlumbUIComponent,a.jsPlumbUIComponent,{setHover:function(a,b){if(this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged())for(var c in this._jsPlumb.overlays)this._jsPlumb.overlays[c][a?"addClass":"removeClass"](this._jsPlumb.instance.hoverClass)},addOverlay:function(a,b){var d=f(this,a);if(this.getData&&"Label"===d.type&&c.isArray(a)){var e=this.getData(),g=a[1];if(e){var h=g.labelLocationAttribute||"labelLocation",i=e?e[h]:null;i&&(d.loc=i)}}return b||this.repaint(),d},getOverlay:function(a){return this._jsPlumb.overlays[a]},getOverlays:function(){return this._jsPlumb.overlays},hideOverlay:function(a){var b=this.getOverlay(a);b&&b.hide()},hideOverlays:function(){for(var a in this._jsPlumb.overlays)this._jsPlumb.overlays[a].hide()},showOverlay:function(a){var b=this.getOverlay(a);b&&b.show()},showOverlays:function(){for(var a in this._jsPlumb.overlays)this._jsPlumb.overlays[a].show()},removeAllOverlays:function(a){for(var b in this._jsPlumb.overlays)this._jsPlumb.overlays[b].cleanup&&this._jsPlumb.overlays[b].cleanup();this._jsPlumb.overlays={},this._jsPlumb.overlayPositions=null,this._jsPlumb.overlayPlacements={},a||this.repaint()},removeOverlay:function(a,b){var c=this._jsPlumb.overlays[a];c&&(c.setVisible(!1),!b&&c.cleanup&&c.cleanup(),delete this._jsPlumb.overlays[a],this._jsPlumb.overlayPositions&&delete this._jsPlumb.overlayPositions[a],this._jsPlumb.overlayPlacements&&delete this._jsPlumb.overlayPlacements[a])},removeOverlays:function(){for(var a=0,b=arguments.length;b>a;a++)this.removeOverlay(arguments[a])},moveParent:function(a){if(this.bgCanvas&&(this.bgCanvas.parentNode.removeChild(this.bgCanvas),a.appendChild(this.bgCanvas)),this.canvas&&this.canvas.parentNode){this.canvas.parentNode.removeChild(this.canvas),a.appendChild(this.canvas);for(var b in this._jsPlumb.overlays)if(this._jsPlumb.overlays[b].isAppendedAtTopLevel){var c=this._jsPlumb.overlays[b].getElement();c.parentNode.removeChild(c),a.appendChild(c)}}},getLabel:function(){var a=this.getOverlay(d);return null!=a?a.getLabel():null},getLabelOverlay:function(){return this.getOverlay(d)},setLabel:function(a){var b=this.getOverlay(d);if(b)a.constructor===String||a.constructor===Function?b.setLabel(a):(a.label&&b.setLabel(a.label),a.location&&b.setLocation(a.location));else{var c=a.constructor===String||a.constructor===Function?{label:a}:a;b=e(this,c),this._jsPlumb.overlays[d]=b}this._jsPlumb.instance.isSuspendDrawing()||this.repaint()},cleanup:function(a){for(var b in this._jsPlumb.overlays)this._jsPlumb.overlays[b].cleanup(a),this._jsPlumb.overlays[b].destroy(a);a&&(this._jsPlumb.overlays={},this._jsPlumb.overlayPositions=null)},setVisible:function(a){this[a?"showOverlays":"hideOverlays"]()},setAbsoluteOverlayPosition:function(a,b){this._jsPlumb.overlayPositions[a.id]=b},getAbsoluteOverlayPosition:function(a){return this._jsPlumb.overlayPositions?this._jsPlumb.overlayPositions[a.id]:null},_clazzManip:function(a,b,c){if(!c)for(var d in this._jsPlumb.overlays)this._jsPlumb.overlays[d][a+"Class"](b)},addClass:function(a,b){this._clazzManip("add",a,b)},removeClass:function(a,b){this._clazzManip("remove",a,b)}})}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=function(a,b,c){var d=!1;return{drag:function(){if(d)return d=!1,!0;if(b.element){var e=c.getUIPosition(arguments,c.getZoom());null!=e&&c.setPosition(b.element,e),c.repaint(b.element,e),a.paint({anchorPoint:a.anchor.getCurrentLocation({element:a})})}},stopDrag:function(){d=!0}}},e=function(a,b,c,d){var e=b.createElement("div",{position:"absolute"});b.appendElement(e);var f=b.getId(e);b.setPosition(e,c),e.style.width=d[0]+"px",e.style.height=d[1]+"px",b.manage(f,e,!0),a.id=f,a.element=e},f=function(a,c,d,e,f,g,h,i){var j=new b.FloatingAnchor({reference:c,referenceCanvas:e,jsPlumbInstance:g});return h({paintStyle:a,endpoint:d,anchor:j,source:f,scope:i})},g=["connectorStyle","connectorHoverStyle","connectorOverlays","connector","connectionType","connectorClass","connectorHoverClass"],h=function(a,b){var c=0;if(null!=b)for(var d=0;d<a.connections.length;d++)if(a.connections[d].sourceId===b||a.connections[d].targetId===b){c=d;break}return a.connections[c]};b.Endpoint=function(a){var i=a._jsPlumb,j=a.newConnection,k=a.newEndpoint;this.idPrefix="_jsplumb_e_",this.defaultLabelLocation=[.5,.5],this.defaultOverlayKeys=["Overlays","EndpointOverlays"],b.OverlayCapableJsPlumbUIComponent.apply(this,arguments),this.appendToDefaultType({connectionType:a.connectionType,maxConnections:null==a.maxConnections?this._jsPlumb.instance.Defaults.MaxConnections:a.maxConnections,paintStyle:a.endpointStyle||a.paintStyle||a.style||this._jsPlumb.instance.Defaults.EndpointStyle||b.Defaults.EndpointStyle,hoverPaintStyle:a.endpointHoverStyle||a.hoverPaintStyle||this._jsPlumb.instance.Defaults.EndpointHoverStyle||b.Defaults.EndpointHoverStyle,connectorStyle:a.connectorStyle,connectorHoverStyle:a.connectorHoverStyle,connectorClass:a.connectorClass,connectorHoverClass:a.connectorHoverClass,connectorOverlays:a.connectorOverlays,connector:a.connector,connectorTooltip:a.connectorTooltip}),this._jsPlumb.enabled=!(a.enabled===!1),this._jsPlumb.visible=!0,this.element=b.getElement(a.source),this._jsPlumb.uuid=a.uuid,this._jsPlumb.floatingEndpoint=null;var l=null;this._jsPlumb.uuid&&(a.endpointsByUUID[this._jsPlumb.uuid]=this),this.elementId=a.elementId,this.dragProxy=a.dragProxy,this._jsPlumb.connectionCost=a.connectionCost,this._jsPlumb.connectionsDirected=a.connectionsDirected,this._jsPlumb.currentAnchorClass="",this._jsPlumb.events={};var m=a.deleteOnEmpty===!0;this.setDeleteOnEmpty=function(a){m=a};var n=function(){var a=i.endpointAnchorClassPrefix+"-"+this._jsPlumb.currentAnchorClass;this._jsPlumb.currentAnchorClass=this.anchor.getCssClass();
var c=i.endpointAnchorClassPrefix+(this._jsPlumb.currentAnchorClass?"-"+this._jsPlumb.currentAnchorClass:"");this.removeClass(a),this.addClass(c),b.updateClasses(this.element,c,a)}.bind(this);this.prepareAnchor=function(a){var b=this._jsPlumb.instance.makeAnchor(a,this.elementId,i);return b.bind("anchorChanged",function(a){this.fire("anchorChanged",{endpoint:this,anchor:a}),n()}.bind(this)),b},this.setPreparedAnchor=function(a,b){return this._jsPlumb.instance.continuousAnchorFactory.clear(this.elementId),this.anchor=a,n(),b||this._jsPlumb.instance.repaint(this.elementId),this},this.setAnchor=function(a,b){var c=this.prepareAnchor(a);return this.setPreparedAnchor(c,b),this};var o=function(a){if(this.connections.length>0)for(var b=0;b<this.connections.length;b++)this.connections[b].setHover(a,!1);else this.setHover(a)}.bind(this);this.bind("mouseover",function(){o(!0)}),this.bind("mouseout",function(){o(!1)}),a._transient||this._jsPlumb.instance.anchorManager.add(this,this.elementId),this.prepareEndpoint=function(d,e){var f,g=function(a,c){var d=i.getRenderMode();if(b.Endpoints[d][a])return new b.Endpoints[d][a](c);if(!i.Defaults.DoNotThrowErrors)throw{msg:"jsPlumb: unknown endpoint type '"+a+"'"}},h={_jsPlumb:this._jsPlumb.instance,cssClass:a.cssClass,container:a.container,tooltip:a.tooltip,connectorTooltip:a.connectorTooltip,endpoint:this};return c.isString(d)?f=g(d,h):c.isArray(d)?(h=c.merge(d[1],h),f=g(d[0],h)):f=d.clone(),f.clone=function(){return c.isString(d)?g(d,h):c.isArray(d)?(h=c.merge(d[1],h),g(d[0],h)):void 0}.bind(this),f.typeId=e,f},this.setEndpoint=function(a,b){var c=this.prepareEndpoint(a);this.setPreparedEndpoint(c,!0)},this.setPreparedEndpoint=function(a,b){null!=this.endpoint&&(this.endpoint.cleanup(),this.endpoint.destroy()),this.endpoint=a,this.type=this.endpoint.type,this.canvas=this.endpoint.canvas},b.extend(this,a,g),this.isSource=a.isSource||!1,this.isTemporarySource=a.isTemporarySource||!1,this.isTarget=a.isTarget||!1,this.connections=a.connections||[],this.connectorPointerEvents=a["connector-pointer-events"],this.scope=a.scope||i.getDefaultScope(),this.timestamp=null,this.reattachConnections=a.reattach||i.Defaults.ReattachConnections,this.connectionsDetachable=i.Defaults.ConnectionsDetachable,(a.connectionsDetachable===!1||a.detachable===!1)&&(this.connectionsDetachable=!1),this.dragAllowedWhenFull=a.dragAllowedWhenFull!==!1,a.onMaxConnections&&this.bind("maxConnections",a.onMaxConnections),this.addConnection=function(a){this.connections.push(a),this[(this.connections.length>0?"add":"remove")+"Class"](i.endpointConnectedClass),this[(this.isFull()?"add":"remove")+"Class"](i.endpointFullClass)},this.detachFromConnection=function(a,b,c){b=null==b?this.connections.indexOf(a):b,b>=0&&(this.connections.splice(b,1),this[(this.connections.length>0?"add":"remove")+"Class"](i.endpointConnectedClass),this[(this.isFull()?"add":"remove")+"Class"](i.endpointFullClass)),!c&&m&&0===this.connections.length&&i.deleteObject({endpoint:this,fireEvent:!1,deleteAttachedObjects:c!==!0})},this.deleteEveryConnection=function(a){for(var b=this.connections.length,c=0;b>c;c++)i.deleteConnection(this.connections[0],a)},this.detachFrom=function(a,b,c){for(var d=[],e=0;e<this.connections.length;e++)(this.connections[e].endpoints[1]===a||this.connections[e].endpoints[0]===a)&&d.push(this.connections[e]);for(var f=0,g=d.length;g>f;f++)i.deleteConnection(d[0]);return this},this.getElement=function(){return this.element},this.setElement=function(d){var e=this._jsPlumb.instance.getId(d),f=this.elementId;return c.removeWithFunction(a.endpointsByElement[this.elementId],function(a){return a.id===this.id}.bind(this)),this.element=b.getElement(d),this.elementId=i.getId(this.element),i.anchorManager.rehomeEndpoint(this,f,this.element),i.dragManager.endpointAdded(this.element),c.addToList(a.endpointsByElement,e,this),this},this.makeInPlaceCopy=function(){var b=this.anchor.getCurrentLocation({element:this}),c=this.anchor.getOrientation(this),d=this.anchor.getCssClass(),e={bind:function(){},compute:function(){return[b[0],b[1]]},getCurrentLocation:function(){return[b[0],b[1]]},getOrientation:function(){return c},getCssClass:function(){return d}};return k({dropOptions:a.dropOptions,anchor:e,source:this.element,paintStyle:this.getPaintStyle(),endpoint:a.hideOnDrag?"Blank":this.endpoint,_transient:!0,scope:this.scope,reference:this})},this.connectorSelector=function(){return this.connections[0]},this.setStyle=this.setPaintStyle,this.paint=function(a){a=a||{};var b=a.timestamp,c=!(a.recalc===!1);if(!b||this.timestamp!==b){var d=i.updateOffset({elId:this.elementId,timestamp:b}),e=a.offset?a.offset.o:d.o;if(null!=e){var f=a.anchorPoint,g=a.connectorPaintStyle;if(null==f){var j=a.dimensions||d.s,k={xy:[e.left,e.top],wh:j,element:this,timestamp:b};if(c&&this.anchor.isDynamic&&this.connections.length>0){var l=h(this,a.elementWithPrecedence),m=l.endpoints[0]===this?1:0,n=0===m?l.sourceId:l.targetId,o=i.getCachedData(n),p=o.o,q=o.s;k.index=0===m?1:0,k.connection=l,k.txy=[p.left,p.top],k.twh=q,k.tElement=l.endpoints[m]}else this.connections.length>0&&(k.connection=this.connections[0]);f=this.anchor.compute(k)}this.endpoint.compute(f,this.anchor.getOrientation(this),this._jsPlumb.paintStyleInUse,g||this.paintStyleInUse),this.endpoint.paint(this._jsPlumb.paintStyleInUse,this.anchor),this.timestamp=b;for(var r in this._jsPlumb.overlays)if(this._jsPlumb.overlays.hasOwnProperty(r)){var s=this._jsPlumb.overlays[r];s.isVisible()&&(this._jsPlumb.overlayPlacements[r]=s.draw(this.endpoint,this._jsPlumb.paintStyleInUse),s.paint(this._jsPlumb.overlayPlacements[r]))}}}},this.getTypeDescriptor=function(){return"endpoint"},this.isVisible=function(){return this._jsPlumb.visible},this.repaint=this.paint;var p=!1;this.initDraggable=function(){if(!p&&b.isDragSupported(this.element)){var g,h={id:null,element:null},m=null,n=!1,o=null,q=d(this,h,i),r=a.dragOptions||{},s={},t=b.dragEvents.start,u=b.dragEvents.stop,v=b.dragEvents.drag,w=b.dragEvents.beforeStart,x=function(a){g=a.e.payload||{}},y=function(c){m=this.connectorSelector();var d=!0;this.isEnabled()||(d=!1),null!=m||this.isSource||this.isTemporarySource||(d=!1),!this.isSource||!this.isFull()||null!=m&&this.dragAllowedWhenFull||(d=!1),null==m||m.isDetachable(this)||(this.isFull()?d=!1:m=null);var l=i.checkCondition(null==m?"beforeDrag":"beforeStartDetach",{endpoint:this,source:this.element,sourceId:this.elementId,connection:m});if(l===!1?d=!1:"object"==typeof l?b.extend(l,g||{}):l=g||{},d===!1)return i.stopDrag&&i.stopDrag(this.canvas),q.stopDrag(),!1;for(var p=0;p<this.connections.length;p++)this.connections[p].setHover(!1);this.addClass("endpointDrag"),i.setConnectionBeingDragged(!0),m&&!this.isFull()&&this.isSource&&(m=null),i.updateOffset({elId:this.elementId});var r=this._jsPlumb.instance.getOffset(this.canvas),s=this.canvas,t=this._jsPlumb.instance.getSize(this.canvas);e(h,i,r,t),i.setAttributes(this.canvas,{dragId:h.id,elId:this.elementId});var u=this.dragProxy||this.endpoint;if(null==this.dragProxy&&null!=this.connectionType){var v=this._jsPlumb.instance.deriveEndpointAndAnchorSpec(this.connectionType);v.endpoints[1]&&(u=v.endpoints[1])}var w=this._jsPlumb.instance.makeAnchor("Center");w.isFloating=!0,this._jsPlumb.floatingEndpoint=f(this.getPaintStyle(),w,u,this.canvas,h.element,i,k,this.scope);var x=this._jsPlumb.floatingEndpoint.anchor;if(null==m)this.setHover(!1,!1),m=j({sourceEndpoint:this,targetEndpoint:this._jsPlumb.floatingEndpoint,source:this.element,target:h.element,anchors:[this.anchor,this._jsPlumb.floatingEndpoint.anchor],paintStyle:a.connectorStyle,hoverPaintStyle:a.connectorHoverStyle,connector:a.connector,overlays:a.connectorOverlays,type:this.connectionType,cssClass:this.connectorClass,hoverClass:this.connectorHoverClass,scope:a.scope,data:l}),m.pending=!0,m.addClass(i.draggingClass),this._jsPlumb.floatingEndpoint.addClass(i.draggingClass),this._jsPlumb.floatingEndpoint.anchor=x,i.fire("connectionDrag",m),i.anchorManager.newConnection(m);else{n=!0,m.setHover(!1);var y=m.endpoints[0].id===this.id?0:1;this.detachFromConnection(m,null,!0);var z=i.getDragScope(s);i.setAttribute(this.canvas,"originalScope",z),i.fire("connectionDrag",m),0===y?(o=[m.source,m.sourceId,s,z],i.anchorManager.sourceChanged(m.endpoints[y].elementId,h.id,m,h.element)):(o=[m.target,m.targetId,s,z],m.target=h.element,m.targetId=h.id,i.anchorManager.updateOtherEndpoint(m.sourceId,m.endpoints[y].elementId,m.targetId,m)),m.suspendedEndpoint=m.endpoints[y],m.suspendedElement=m.endpoints[y].getElement(),m.suspendedElementId=m.endpoints[y].elementId,m.suspendedElementType=0===y?"source":"target",m.suspendedEndpoint.setHover(!1),this._jsPlumb.floatingEndpoint.referenceEndpoint=m.suspendedEndpoint,m.endpoints[y]=this._jsPlumb.floatingEndpoint,m.addClass(i.draggingClass),this._jsPlumb.floatingEndpoint.addClass(i.draggingClass)}i.registerFloatingConnection(h,m,this._jsPlumb.floatingEndpoint),i.currentlyDragging=!0}.bind(this),z=function(){if(i.setConnectionBeingDragged(!1),m&&null!=m.endpoints){var a=i.getDropEvent(arguments),b=i.getFloatingAnchorIndex(m);if(m.endpoints[0===b?1:0].anchor.unlock(),m.removeClass(i.draggingClass),this._jsPlumb&&(m.deleteConnectionNow||m.endpoints[b]===this._jsPlumb.floatingEndpoint)&&n&&m.suspendedEndpoint){0===b?(m.floatingElement=m.source,m.floatingId=m.sourceId,m.floatingEndpoint=m.endpoints[0],m.floatingIndex=0,m.source=o[0],m.sourceId=o[1]):(m.floatingElement=m.target,m.floatingId=m.targetId,m.floatingEndpoint=m.endpoints[1],m.floatingIndex=1,m.target=o[0],m.targetId=o[1]);var c=this._jsPlumb.floatingEndpoint;i.setDragScope(o[2],o[3]),m.endpoints[b]=m.suspendedEndpoint,m.isReattach()||m._forceReattach||m._forceDetach||!i.deleteConnection(m,{originalEvent:a})?(m.setHover(!1),m._forceDetach=null,m._forceReattach=null,this._jsPlumb.floatingEndpoint.detachFromConnection(m),m.suspendedEndpoint.addConnection(m),1===b?i.anchorManager.updateOtherEndpoint(m.sourceId,m.floatingId,m.targetId,m):i.anchorManager.sourceChanged(m.floatingId,m.sourceId,m,m.source),i.repaint(o[1])):i.deleteObject({endpoint:c})}this.deleteAfterDragStop?i.deleteObject({endpoint:this}):this._jsPlumb&&this.paint({recalc:!1}),i.fire("connectionDragStop",m,a),m.pending&&i.fire("connectionAborted",m,a),i.currentlyDragging=!1,m.suspendedElement=null,m.suspendedEndpoint=null,m=null}h&&h.element&&i.remove(h.element,!1,!1),l&&i.deleteObject({endpoint:l}),this._jsPlumb&&(this.canvas.style.visibility="visible",this.anchor.unlock(),this._jsPlumb.floatingEndpoint=null)}.bind(this);r=b.extend(s,r),r.scope=this.scope||r.scope,r[w]=c.wrap(r[w],x,!1),r[t]=c.wrap(r[t],y,!1),r[v]=c.wrap(r[v],q.drag),r[u]=c.wrap(r[u],z),r.multipleDrop=!1,r.canDrag=function(){return this.isSource||this.isTemporarySource||this.connections.length>0&&this.connectionsDetachable!==!1}.bind(this),i.initDraggable(this.canvas,r,"internal"),this.canvas._jsPlumbRelatedElement=this.element,p=!0}};var q=a.endpoint||this._jsPlumb.instance.Defaults.Endpoint||b.Defaults.Endpoint;this.setEndpoint(q,!0);var r=a.anchor?a.anchor:a.anchors?a.anchors:i.Defaults.Anchor||"Top";this.setAnchor(r,!0);var s=["default",a.type||""].join(" ");this.addType(s,a.data,!0),this.canvas=this.endpoint.canvas,this.canvas._jsPlumb=this,this.initDraggable();var t=function(d,e,f,g){if(b.isDropSupported(this.element)){var h=a.dropOptions||i.Defaults.DropOptions||b.Defaults.DropOptions;h=b.extend({},h),h.scope=h.scope||this.scope;var j=b.dragEvents.drop,k=b.dragEvents.over,l=b.dragEvents.out,m=this,n=i.EndpointDropHandler({getEndpoint:function(){return m},jsPlumb:i,enabled:function(){return null!=f?f.isEnabled():!0},isFull:function(){return f.isFull()},element:this.element,elementId:this.elementId,isSource:this.isSource,isTarget:this.isTarget,addClass:function(a){m.addClass(a)},removeClass:function(a){m.removeClass(a)},isDropAllowed:function(){return m.isDropAllowed.apply(m,arguments)},reference:g,isRedrop:function(a,b){return a.suspendedEndpoint&&b.reference&&a.suspendedEndpoint.id===b.reference.id}});h[j]=c.wrap(h[j],n,!0),h[k]=c.wrap(h[k],function(){var a=b.getDragObject(arguments),c=i.getAttribute(b.getElement(a),"dragId"),d=i.getFloatingConnectionFor(c);if(null!=d){var e=i.getFloatingAnchorIndex(d),f=this.isTarget&&0!==e||d.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id===d.suspendedEndpoint.id;if(f){var g=i.checkCondition("checkDropAllowed",{sourceEndpoint:d.endpoints[e],targetEndpoint:this,connection:d});this[(g?"add":"remove")+"Class"](i.endpointDropAllowedClass),this[(g?"remove":"add")+"Class"](i.endpointDropForbiddenClass),d.endpoints[e].anchor.over(this.anchor,this)}}}.bind(this)),h[l]=c.wrap(h[l],function(){var a=b.getDragObject(arguments),c=null==a?null:i.getAttribute(b.getElement(a),"dragId"),d=c?i.getFloatingConnectionFor(c):null;if(null!=d){var e=i.getFloatingAnchorIndex(d),f=this.isTarget&&0!==e||d.suspendedEndpoint&&this.referenceEndpoint&&this.referenceEndpoint.id===d.suspendedEndpoint.id;f&&(this.removeClass(i.endpointDropAllowedClass),this.removeClass(i.endpointDropForbiddenClass),d.endpoints[e].anchor.out())}}.bind(this)),i.initDroppable(d,h,"internal",e)}}.bind(this);return this.anchor.isFloating||t(this.canvas,!(a._transient||this.anchor.isFloating),this,a.reference),this},c.extend(b.Endpoint,b.OverlayCapableJsPlumbUIComponent,{setVisible:function(a,b,c){if(this._jsPlumb.visible=a,this.canvas&&(this.canvas.style.display=a?"block":"none"),this[a?"showOverlays":"hideOverlays"](),!b)for(var d=0;d<this.connections.length;d++)if(this.connections[d].setVisible(a),!c){var e=this===this.connections[d].endpoints[0]?1:0;1===this.connections[d].endpoints[e].connections.length&&this.connections[d].endpoints[e].setVisible(a,!0,!0)}},getAttachedElements:function(){return this.connections},applyType:function(a,c){this.setPaintStyle(a.endpointStyle||a.paintStyle,c),this.setHoverPaintStyle(a.endpointHoverStyle||a.hoverPaintStyle,c),null!=a.maxConnections&&(this._jsPlumb.maxConnections=a.maxConnections),a.scope&&(this.scope=a.scope),b.extend(this,a,g),null!=a.cssClass&&this.canvas&&this._jsPlumb.instance.addClass(this.canvas,a.cssClass),b.OverlayCapableJsPlumbUIComponent.applyType(this,a)},isEnabled:function(){return this._jsPlumb.enabled},setEnabled:function(a){this._jsPlumb.enabled=a},cleanup:function(){var a=this._jsPlumb.instance.endpointAnchorClassPrefix+(this._jsPlumb.currentAnchorClass?"-"+this._jsPlumb.currentAnchorClass:"");b.removeClass(this.element,a),this.anchor=null,this.endpoint.cleanup(!0),this.endpoint.destroy(),this.endpoint=null,this._jsPlumb.instance.destroyDraggable(this.canvas,"internal"),this._jsPlumb.instance.destroyDroppable(this.canvas,"internal")},setHover:function(a){this.endpoint&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()&&this.endpoint.setHover(a)},isFull:function(){return 0===this._jsPlumb.maxConnections?!0:!(this.isFloating()||this._jsPlumb.maxConnections<0||this.connections.length<this._jsPlumb.maxConnections)},isFloating:function(){return null!=this.anchor&&this.anchor.isFloating},isConnectedTo:function(a){var b=!1;if(a)for(var c=0;c<this.connections.length;c++)if(this.connections[c].endpoints[1]===a||this.connections[c].endpoints[0]===a){b=!0;break}return b},getConnectionCost:function(){return this._jsPlumb.connectionCost},setConnectionCost:function(a){this._jsPlumb.connectionCost=a},areConnectionsDirected:function(){return this._jsPlumb.connectionsDirected},setConnectionsDirected:function(a){this._jsPlumb.connectionsDirected=a},setElementId:function(a){this.elementId=a,this.anchor.elementId=a},setReferenceElement:function(a){this.element=b.getElement(a)},setDragAllowedWhenFull:function(a){this.dragAllowedWhenFull=a},equals:function(a){return this.anchor.equals(a.anchor)},getUuid:function(){return this._jsPlumb.uuid},computeAnchor:function(a){return this.anchor.compute(a)}}),a.jsPlumbInstance.prototype.EndpointDropHandler=function(a){return function(b){var d=a.jsPlumb;a.removeClass(d.endpointDropAllowedClass),a.removeClass(d.endpointDropForbiddenClass);var e=d.getDropEvent(arguments),f=d.getDragObject(arguments),g=d.getAttribute(f,"dragId"),h=(d.getAttribute(f,"elId"),d.getAttribute(f,"originalScope")),i=d.getFloatingConnectionFor(g);if(null!=i){var j=null!=i.suspendedEndpoint;if(!j||null!=i.suspendedEndpoint._jsPlumb){var k=a.getEndpoint(i);if(null!=k){if(a.isRedrop(i,a))return i._forceReattach=!0,i.setHover(!1),void(a.maybeCleanup&&a.maybeCleanup(k));var l=d.getFloatingAnchorIndex(i);if(0===l&&!a.isSource||1===l&&!a.isTarget)return void(a.maybeCleanup&&a.maybeCleanup(k));a.onDrop&&a.onDrop(i),h&&d.setDragScope(f,h);var m=a.isFull(b);if(m&&k.fire("maxConnections",{endpoint:this,connection:i,maxConnections:k._jsPlumb.maxConnections},e),!m&&a.enabled()){var n=!0;0===l?(i.floatingElement=i.source,i.floatingId=i.sourceId,i.floatingEndpoint=i.endpoints[0],i.floatingIndex=0,i.source=a.element,i.sourceId=a.elementId):(i.floatingElement=i.target,i.floatingId=i.targetId,i.floatingEndpoint=i.endpoints[1],i.floatingIndex=1,i.target=a.element,i.targetId=a.elementId),j&&i.suspendedEndpoint.id!==k.id&&(i.isDetachAllowed(i)&&i.endpoints[l].isDetachAllowed(i)&&i.suspendedEndpoint.isDetachAllowed(i)&&d.checkCondition("beforeDetach",i)||(n=!1));var o=function(b){i.endpoints[l].detachFromConnection(i),i.suspendedEndpoint&&i.suspendedEndpoint.detachFromConnection(i),i.endpoints[l]=k,k.addConnection(i);var f=k.getParameters();for(var g in f)i.setParameter(g,f[g]);if(j){var h=i.suspendedEndpoint.elementId;d.fireMoveEvent({index:l,originalSourceId:0===l?h:i.sourceId,newSourceId:0===l?k.elementId:i.sourceId,originalTargetId:1===l?h:i.targetId,newTargetId:1===l?k.elementId:i.targetId,originalSourceEndpoint:0===l?i.suspendedEndpoint:i.endpoints[0],newSourceEndpoint:0===l?k:i.endpoints[0],originalTargetEndpoint:1===l?i.suspendedEndpoint:i.endpoints[1],newTargetEndpoint:1===l?k:i.endpoints[1],connection:i},e)}else f.draggable&&d.initDraggable(this.element,a.dragOptions,"internal",d);if(1===l?d.anchorManager.updateOtherEndpoint(i.sourceId,i.floatingId,i.targetId,i):d.anchorManager.sourceChanged(i.floatingId,i.sourceId,i,i.source),i.endpoints[0].finalEndpoint){var m=i.endpoints[0];m.detachFromConnection(i),i.endpoints[0]=i.endpoints[0].finalEndpoint,i.endpoints[0].addConnection(i)}c.isObject(b)&&i.mergeData(b),d.finaliseConnection(i,null,e,!1),i.setHover(!1),d.revalidate(i.endpoints[0].element)}.bind(this),p=function(){i.suspendedEndpoint&&(i.endpoints[l]=i.suspendedEndpoint,i.setHover(!1),i._forceDetach=!0,0===l?(i.source=i.suspendedEndpoint.element,i.sourceId=i.suspendedEndpoint.elementId):(i.target=i.suspendedEndpoint.element,i.targetId=i.suspendedEndpoint.elementId),i.suspendedEndpoint.addConnection(i),1===l?d.anchorManager.updateOtherEndpoint(i.sourceId,i.floatingId,i.targetId,i):d.anchorManager.sourceChanged(i.floatingId,i.sourceId,i,i.source),d.repaint(i.sourceId),i._forceDetach=!1)};if(n=n&&a.isDropAllowed(i.sourceId,i.targetId,i.scope,i,k))return o(n),!0;p()}a.maybeCleanup&&a.maybeCleanup(k),d.currentlyDragging=!1}}}}}}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=function(a,d,e,f,g){if(b.Connectors[d]=b.Connectors[d]||{},null==b.Connectors[d][e]){if(null==b.Connectors[e]){if(a.Defaults.DoNotThrowErrors)return null;throw new TypeError("jsPlumb: unknown connector type '"+e+"'")}b.Connectors[d][e]=function(){b.Connectors[e].apply(this,arguments),b.ConnectorRenderers[d].apply(this,arguments)},c.extend(b.Connectors[d][e],[b.Connectors[e],b.ConnectorRenderers[d]])}return new b.Connectors[d][e](f,g)},e=function(a,b,c){return a?c.makeAnchor(a,b,c):null},f=function(a,b,d,e){null!=b&&(b._jsPlumbConnections=b._jsPlumbConnections||{},e?delete b._jsPlumbConnections[a.id]:b._jsPlumbConnections[a.id]=!0,c.isEmpty(b._jsPlumbConnections)?d.removeClass(b,d.connectedClass):d.addClass(b,d.connectedClass))};b.Connection=function(a){var d=a.newEndpoint;this.id=a.id,this.connector=null,this.idPrefix="_jsplumb_c_",this.defaultLabelLocation=.5,this.defaultOverlayKeys=["Overlays","ConnectionOverlays"],this.previousConnection=a.previousConnection,this.source=b.getElement(a.source),this.target=b.getElement(a.target),b.OverlayCapableJsPlumbUIComponent.apply(this,arguments),a.sourceEndpoint?(this.source=a.sourceEndpoint.getElement(),this.sourceId=a.sourceEndpoint.elementId):this.sourceId=this._jsPlumb.instance.getId(this.source),a.targetEndpoint?(this.target=a.targetEndpoint.getElement(),this.targetId=a.targetEndpoint.elementId):this.targetId=this._jsPlumb.instance.getId(this.target),this.scope=a.scope,this.endpoints=[],this.endpointStyles=[];var e=this._jsPlumb.instance;e.manage(this.sourceId,this.source),e.manage(this.targetId,this.target),this._jsPlumb.visible=!0,this._jsPlumb.params={cssClass:a.cssClass,container:a.container,"pointer-events":a["pointer-events"],editorParams:a.editorParams,overlays:a.overlays},this._jsPlumb.lastPaintedAt=null,this.bind("mouseover",function(){this.setHover(!0)}.bind(this)),this.bind("mouseout",function(){this.setHover(!1)}.bind(this)),this.makeEndpoint=function(b,c,f,g,h){return f=f||this._jsPlumb.instance.getId(c),this.prepareEndpoint(e,d,this,g,b?0:1,a,c,f,h)},a.type&&(a.endpoints=a.endpoints||this._jsPlumb.instance.deriveEndpointAndAnchorSpec(a.type).endpoints);var f=this.makeEndpoint(!0,this.source,this.sourceId,a.sourceEndpoint),g=this.makeEndpoint(!1,this.target,this.targetId,a.targetEndpoint);f&&c.addToList(a.endpointsByElement,this.sourceId,f),g&&c.addToList(a.endpointsByElement,this.targetId,g),this.scope||(this.scope=this.endpoints[0].scope),null!=a.deleteEndpointsOnEmpty&&(this.endpoints[0].setDeleteOnEmpty(a.deleteEndpointsOnEmpty),this.endpoints[1].setDeleteOnEmpty(a.deleteEndpointsOnEmpty));var h=e.Defaults.ConnectionsDetachable;a.detachable===!1&&(h=!1),this.endpoints[0].connectionsDetachable===!1&&(h=!1),this.endpoints[1].connectionsDetachable===!1&&(h=!1);var i=a.reattach||this.endpoints[0].reattachConnections||this.endpoints[1].reattachConnections||e.Defaults.ReattachConnections;this.appendToDefaultType({detachable:h,reattach:i,paintStyle:this.endpoints[0].connectorStyle||this.endpoints[1].connectorStyle||a.paintStyle||e.Defaults.PaintStyle||b.Defaults.PaintStyle,hoverPaintStyle:this.endpoints[0].connectorHoverStyle||this.endpoints[1].connectorHoverStyle||a.hoverPaintStyle||e.Defaults.HoverPaintStyle||b.Defaults.HoverPaintStyle});var j=e.getSuspendedAt();if(!e.isSuspendDrawing()){var k=e.getCachedData(this.sourceId),l=k.o,m=k.s,n=e.getCachedData(this.targetId),o=n.o,p=n.s,q=j||e.timestamp(),r=this.endpoints[0].anchor.compute({xy:[l.left,l.top],wh:m,element:this.endpoints[0],elementId:this.endpoints[0].elementId,txy:[o.left,o.top],twh:p,tElement:this.endpoints[1],timestamp:q});this.endpoints[0].paint({anchorLoc:r,timestamp:q}),r=this.endpoints[1].anchor.compute({xy:[o.left,o.top],wh:p,element:this.endpoints[1],elementId:this.endpoints[1].elementId,txy:[l.left,l.top],twh:m,tElement:this.endpoints[0],timestamp:q}),this.endpoints[1].paint({anchorLoc:r,timestamp:q})}this.getTypeDescriptor=function(){return"connection"},this.getAttachedElements=function(){return this.endpoints},this.isDetachable=function(a){return this._jsPlumb.detachable===!1?!1:null!=a?a.connectionsDetachable===!0:this._jsPlumb.detachable===!0},this.setDetachable=function(a){this._jsPlumb.detachable=a===!0},this.isReattach=function(){return this._jsPlumb.reattach===!0||this.endpoints[0].reattachConnections===!0||this.endpoints[1].reattachConnections===!0},this.setReattach=function(a){this._jsPlumb.reattach=a===!0},this._jsPlumb.cost=a.cost||this.endpoints[0].getConnectionCost(),this._jsPlumb.directed=a.directed,null==a.directed&&(this._jsPlumb.directed=this.endpoints[0].areConnectionsDirected());var s=b.extend({},this.endpoints[1].getParameters());b.extend(s,this.endpoints[0].getParameters()),b.extend(s,this.getParameters()),this.setParameters(s),this.setConnector(this.endpoints[0].connector||this.endpoints[1].connector||a.connector||e.Defaults.Connector||b.Defaults.Connector,!0);var t=null!=a.data&&c.isObject(a.data)?a.data:{};this.getData=function(){return t},this.setData=function(a){t=a||{}},this.mergeData=function(a){t=b.extend(t,a)};var u=["default",this.endpoints[0].connectionType,this.endpoints[1].connectionType,a.type].join(" ");/[^\s]/.test(u)&&this.addType(u,a.data,!0),this.updateConnectedClass()},c.extend(b.Connection,b.OverlayCapableJsPlumbUIComponent,{applyType:function(a,c,d){var e=null;null!=a.connector&&(e=this.getCachedTypeItem("connector",d.connector),null==e&&(e=this.prepareConnector(a.connector,d.connector),this.cacheTypeItem("connector",e,d.connector)),this.setPreparedConnector(e)),null!=a.detachable&&this.setDetachable(a.detachable),null!=a.reattach&&this.setReattach(a.reattach),a.scope&&(this.scope=a.scope),null!=a.cssClass&&this.canvas&&this._jsPlumb.instance.addClass(this.canvas,a.cssClass);var f=null;a.anchor?(f=this.getCachedTypeItem("anchors",d.anchor),null==f&&(f=[this._jsPlumb.instance.makeAnchor(a.anchor),this._jsPlumb.instance.makeAnchor(a.anchor)],this.cacheTypeItem("anchors",f,d.anchor))):a.anchors&&(f=this.getCachedTypeItem("anchors",d.anchors),null==f&&(f=[this._jsPlumb.instance.makeAnchor(a.anchors[0]),this._jsPlumb.instance.makeAnchor(a.anchors[1])],this.cacheTypeItem("anchors",f,d.anchors))),null!=f&&(this.endpoints[0].anchor=f[0],this.endpoints[1].anchor=f[1],this.endpoints[1].anchor.isDynamic&&this._jsPlumb.instance.repaint(this.endpoints[1].elementId)),b.OverlayCapableJsPlumbUIComponent.applyType(this,a)},addClass:function(a,b){b&&(this.endpoints[0].addClass(a),this.endpoints[1].addClass(a),this.suspendedEndpoint&&this.suspendedEndpoint.addClass(a)),this.connector&&this.connector.addClass(a)},removeClass:function(a,b){b&&(this.endpoints[0].removeClass(a),this.endpoints[1].removeClass(a),this.suspendedEndpoint&&this.suspendedEndpoint.removeClass(a)),this.connector&&this.connector.removeClass(a)},isVisible:function(){return this._jsPlumb.visible},setVisible:function(a){this._jsPlumb.visible=a,this.connector&&this.connector.setVisible(a),this.repaint()},cleanup:function(){this.updateConnectedClass(!0),this.endpoints=null,this.source=null,this.target=null,null!=this.connector&&(this.connector.cleanup(!0),this.connector.destroy(!0)),this.connector=null},updateConnectedClass:function(a){this._jsPlumb&&(f(this,this.source,this._jsPlumb.instance,a),f(this,this.target,this._jsPlumb.instance,a))},setHover:function(b){this.connector&&this._jsPlumb&&!this._jsPlumb.instance.isConnectionBeingDragged()&&(this.connector.setHover(b),a.jsPlumb[b?"addClass":"removeClass"](this.source,this._jsPlumb.instance.hoverSourceClass),a.jsPlumb[b?"addClass":"removeClass"](this.target,this._jsPlumb.instance.hoverTargetClass))},getUuids:function(){return[this.endpoints[0].getUuid(),this.endpoints[1].getUuid()]},getCost:function(){return this._jsPlumb?this._jsPlumb.cost:-(1/0)},setCost:function(a){this._jsPlumb.cost=a},isDirected:function(){return this._jsPlumb.directed},getConnector:function(){return this.connector},prepareConnector:function(a,b){var e,f={_jsPlumb:this._jsPlumb.instance,cssClass:this._jsPlumb.params.cssClass,container:this._jsPlumb.params.container,"pointer-events":this._jsPlumb.params["pointer-events"]},g=this._jsPlumb.instance.getRenderMode();return c.isString(a)?e=d(this._jsPlumb.instance,g,a,f,this):c.isArray(a)&&(e=1===a.length?d(this._jsPlumb.instance,g,a[0],f,this):d(this._jsPlumb.instance,g,a[0],c.merge(a[1],f),this)),null!=b&&(e.typeId=b),e},setPreparedConnector:function(a,b,c,d){if(this.connector!==a){var e,f="";if(null!=this.connector&&(e=this.connector,f=e.getClass(),this.connector.cleanup(),this.connector.destroy()),this.connector=a,d&&this.cacheTypeItem("connector",a,d),this.canvas=this.connector.canvas,this.bgCanvas=this.connector.bgCanvas,this.connector.reattach(this._jsPlumb.instance),this.addClass(f),this.canvas&&(this.canvas._jsPlumb=this),this.bgCanvas&&(this.bgCanvas._jsPlumb=this),null!=e)for(var g=this.getOverlays(),h=0;h<g.length;h++)g[h].transfer&&g[h].transfer(this.connector);c||this.setListenerComponent(this.connector),b||this.repaint()}},setConnector:function(a,b,c,d){var e=this.prepareConnector(a,d);this.setPreparedConnector(e,b,c,d)},paint:function(a){if(!this._jsPlumb.instance.isSuspendDrawing()&&this._jsPlumb.visible){a=a||{};var b=a.timestamp,c=!1,d=c?this.sourceId:this.targetId,e=c?this.targetId:this.sourceId,f=c?0:1,g=c?1:0;if(null==b||b!==this._jsPlumb.lastPaintedAt){var h=this._jsPlumb.instance.updateOffset({elId:e}).o,i=this._jsPlumb.instance.updateOffset({elId:d}).o,j=this.endpoints[g],k=this.endpoints[f],l=j.anchor.getCurrentLocation({xy:[h.left,h.top],wh:[h.width,h.height],element:j,timestamp:b}),m=k.anchor.getCurrentLocation({xy:[i.left,i.top],wh:[i.width,i.height],element:k,timestamp:b});this.connector.resetBounds(),this.connector.compute({sourcePos:l,targetPos:m,sourceOrientation:j.anchor.getOrientation(j),targetOrientation:k.anchor.getOrientation(k),sourceEndpoint:this.endpoints[g],targetEndpoint:this.endpoints[f],"stroke-width":this._jsPlumb.paintStyleInUse.strokeWidth,sourceInfo:h,targetInfo:i});var n={minX:1/0,minY:1/0,maxX:-(1/0),maxY:-(1/0)};for(var o in this._jsPlumb.overlays)if(this._jsPlumb.overlays.hasOwnProperty(o)){var p=this._jsPlumb.overlays[o];p.isVisible()&&(this._jsPlumb.overlayPlacements[o]=p.draw(this.connector,this._jsPlumb.paintStyleInUse,this.getAbsoluteOverlayPosition(p)),n.minX=Math.min(n.minX,this._jsPlumb.overlayPlacements[o].minX),n.maxX=Math.max(n.maxX,this._jsPlumb.overlayPlacements[o].maxX),n.minY=Math.min(n.minY,this._jsPlumb.overlayPlacements[o].minY),n.maxY=Math.max(n.maxY,this._jsPlumb.overlayPlacements[o].maxY))}var q=parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth||1)/2,r=parseFloat(this._jsPlumb.paintStyleInUse.strokeWidth||0),s={xmin:Math.min(this.connector.bounds.minX-(q+r),n.minX),ymin:Math.min(this.connector.bounds.minY-(q+r),n.minY),xmax:Math.max(this.connector.bounds.maxX+(q+r),n.maxX),ymax:Math.max(this.connector.bounds.maxY+(q+r),n.maxY)};this.connector.paintExtents=s,this.connector.paint(this._jsPlumb.paintStyleInUse,null,s);for(var t in this._jsPlumb.overlays)if(this._jsPlumb.overlays.hasOwnProperty(t)){var u=this._jsPlumb.overlays[t];u.isVisible()&&u.paint(this._jsPlumb.overlayPlacements[t],s)}}this._jsPlumb.lastPaintedAt=b}},repaint:function(a){var b=jsPlumb.extend(a||{},{});b.elId=this.sourceId,this.paint(b)},prepareEndpoint:function(a,c,d,f,g,h,i,j,k){var l;if(f)d.endpoints[g]=f,f.addConnection(d);else{h.endpoints||(h.endpoints=[null,null]);var m=k||h.endpoints[g]||h.endpoint||a.Defaults.Endpoints[g]||b.Defaults.Endpoints[g]||a.Defaults.Endpoint||b.Defaults.Endpoint;h.endpointStyles||(h.endpointStyles=[null,null]),h.endpointHoverStyles||(h.endpointHoverStyles=[null,null]);var n=h.endpointStyles[g]||h.endpointStyle||a.Defaults.EndpointStyles[g]||b.Defaults.EndpointStyles[g]||a.Defaults.EndpointStyle||b.Defaults.EndpointStyle;null==n.fill&&null!=h.paintStyle&&(n.fill=h.paintStyle.stroke),null==n.outlineStroke&&null!=h.paintStyle&&(n.outlineStroke=h.paintStyle.outlineStroke),null==n.outlineWidth&&null!=h.paintStyle&&(n.outlineWidth=h.paintStyle.outlineWidth);var o=h.endpointHoverStyles[g]||h.endpointHoverStyle||a.Defaults.EndpointHoverStyles[g]||b.Defaults.EndpointHoverStyles[g]||a.Defaults.EndpointHoverStyle||b.Defaults.EndpointHoverStyle;null!=h.hoverPaintStyle&&(null==o&&(o={}),null==o.fill&&(o.fill=h.hoverPaintStyle.stroke));var p=h.anchors?h.anchors[g]:h.anchor?h.anchor:e(a.Defaults.Anchors[g],j,a)||e(b.Defaults.Anchors[g],j,a)||e(a.Defaults.Anchor,j,a)||e(b.Defaults.Anchor,j,a),q=h.uuids?h.uuids[g]:null;l=c({paintStyle:n,hoverPaintStyle:o,endpoint:m,connections:[d],uuid:q,anchor:p,source:i,scope:h.scope,reattach:h.reattach||a.Defaults.ReattachConnections,detachable:h.detachable||a.Defaults.ConnectionsDetachable}),null==f&&l.setDeleteOnEmpty(!0),d.endpoints[g]=l,h.drawEndpoints===!1&&l.setVisible(!1,!0,!0)}return l},replaceEndpoint:function(a,b){
var c=this.endpoints[a],d=c.elementId,e=this._jsPlumb.instance.getEndpoints(d),f=e.indexOf(c),g=this.makeEndpoint(0===a,c.element,d,null,b);this.endpoints[a]=g,e.splice(f,1,g),this._jsPlumb.instance.deleteObject({endpoint:c,deleteAttachedObjects:!1}),this._jsPlumb.instance.fire("endpointReplaced",{previous:c,current:g}),this._jsPlumb.instance.anchorManager.updateOtherEndpoint(this.endpoints[0].elementId,this.endpoints[1].elementId,this.endpoints[1].elementId,this)}})}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumbUtil,c=a.jsPlumb;c.AnchorManager=function(a){var d={},e={},f={},g={},h=this,i={},j=a.jsPlumbInstance,k={},l=function(a,b,c,d,e,f,g){for(var h=[],i=b[e?0:1]/(d.length+1),j=0;j<d.length;j++){var k=(j+1)*i,l=f*b[e?1:0];g&&(k=b[e?0:1]-k);var m=e?k:l,n=c[0]+m,o=m/b[0],p=e?l:k,q=c[1]+p,r=p/b[1];h.push([n,q,o,r,d[j][1],d[j][2]])}return h},m=function(a){return function(b,c){var d=!0;return d=a?b[0][0]<c[0][0]:b[0][0]>c[0][0],d===!1?-1:1}},n=function(a,b){var c=a[0][0]<0?-Math.PI-a[0][0]:Math.PI-a[0][0],d=b[0][0]<0?-Math.PI-b[0][0]:Math.PI-b[0][0];return c>d?1:-1},o={top:function(a,b){return a[0]>b[0]?1:-1},right:m(!0),bottom:m(!0),left:n},p=function(a,b){return a.sort(b)},q=function(a,b){var c=j.getCachedData(a),d=c.s,g=c.o,h=function(b,c,d,g,h,i,j){if(g.length>0)for(var k=p(g,o[b]),m="right"===b||"top"===b,n=l(b,c,d,k,h,i,m),q=function(a,b){e[a.id]=[b[0],b[1],b[2],b[3]],f[a.id]=j},r=0;r<n.length;r++){var s=n[r][4],t=s.endpoints[0].elementId===a,u=s.endpoints[1].elementId===a;t&&q(s.endpoints[0],n[r]),u&&q(s.endpoints[1],n[r])}};h("bottom",d,[g.left,g.top],b.bottom,!0,1,[0,1]),h("top",d,[g.left,g.top],b.top,!0,0,[0,-1]),h("left",d,[g.left,g.top],b.left,!1,0,[-1,0]),h("right",d,[g.left,g.top],b.right,!1,1,[1,0])};this.reset=function(){d={},g={},i={}},this.addFloatingConnection=function(a,b){k[a]=b},this.removeFloatingConnection=function(a){delete k[a]},this.newConnection=function(a){var d=a.sourceId,e=a.targetId,f=a.endpoints,h=!0,i=function(i,j,k,l,m){d===e&&k.isContinuous&&(a._jsPlumb.instance.removeElement(f[1].canvas),h=!1),b.addToList(g,l,[m,j,k.constructor===c.DynamicAnchor])};i(0,f[0],f[0].anchor,e,a),h&&i(1,f[1],f[1].anchor,d,a)};var r=function(a){!function(a,c){if(a){var d=function(a){return a[4]===c};b.removeWithFunction(a.top,d),b.removeWithFunction(a.left,d),b.removeWithFunction(a.bottom,d),b.removeWithFunction(a.right,d)}}(i[a.elementId],a.id)};this.connectionDetached=function(a,c){var d=a.connection||a,e=a.sourceId,f=a.targetId,i=d.endpoints,j=function(a,c,d,e,f){b.removeWithFunction(g[e],function(a){return a[0].id===f.id})};j(1,i[1],i[1].anchor,e,d),j(0,i[0],i[0].anchor,f,d),d.floatingId&&(j(d.floatingIndex,d.floatingEndpoint,d.floatingEndpoint.anchor,d.floatingId,d),r(d.floatingEndpoint)),r(d.endpoints[0]),r(d.endpoints[1]),c||(h.redraw(d.sourceId),d.targetId!==d.sourceId&&h.redraw(d.targetId))},this.add=function(a,c){b.addToList(d,c,a)},this.changeId=function(a,b){g[b]=g[a],d[b]=d[a],delete g[a],delete d[a]},this.getConnectionsFor=function(a){return g[a]||[]},this.getEndpointsFor=function(a){return d[a]||[]},this.deleteEndpoint=function(a){b.removeWithFunction(d[a.elementId],function(b){return b.id===a.id}),r(a)},this.clearFor=function(a){delete d[a],d[a]=[]};var s=function(c,d,e,f,g,h,i,j,k,l,m,n){var o,p,q=-1,r=-1,s=f.endpoints[i],t=s.id,u=[1,0][i],v=[[d,e],f,g,h,t],w=c[k],x=s._continuousAnchorEdge?c[s._continuousAnchorEdge]:null;if(x){var y=b.findWithFunction(x,function(a){return a[4]===t});if(-1!==y)for(x.splice(y,1),o=0;o<x.length;o++)p=x[o][1],b.addWithFunction(m,p,function(a){return a.id===p.id}),b.addWithFunction(n,x[o][1].endpoints[i],function(a){return a.id===p.endpoints[i].id}),b.addWithFunction(n,x[o][1].endpoints[u],function(a){return a.id===p.endpoints[u].id})}for(o=0;o<w.length;o++)p=w[o][1],1===a.idx&&w[o][3]===h&&-1===r&&(r=o),b.addWithFunction(m,p,function(a){return a.id===p.id}),b.addWithFunction(n,w[o][1].endpoints[i],function(a){return a.id===p.endpoints[i].id}),b.addWithFunction(n,w[o][1].endpoints[u],function(a){return a.id===p.endpoints[u].id});if(-1!==q)w[q]=v;else{var z=j?-1!==r?r:0:w.length;w.splice(z,0,v)}s._continuousAnchorEdge=k};this.updateOtherEndpoint=function(a,d,e,f){var h=b.findWithFunction(g[a],function(a){return a[0].id===f.id}),i=b.findWithFunction(g[d],function(a){return a[0].id===f.id});-1!==h&&(g[a][h][0]=f,g[a][h][1]=f.endpoints[1],g[a][h][2]=f.endpoints[1].anchor.constructor===c.DynamicAnchor),i>-1&&(g[d].splice(i,1),b.addToList(g,e,[f,f.endpoints[0],f.endpoints[0].anchor.constructor===c.DynamicAnchor])),f.updateConnectedClass()},this.sourceChanged=function(a,d,e,f){if(a!==d){e.sourceId=d,e.source=f,b.removeWithFunction(g[a],function(a){return a[0].id===e.id});var h=b.findWithFunction(g[e.targetId],function(a){return a[0].id===e.id});h>-1&&(g[e.targetId][h][0]=e,g[e.targetId][h][1]=e.endpoints[0],g[e.targetId][h][2]=e.endpoints[0].anchor.constructor===c.DynamicAnchor),b.addToList(g,d,[e,e.endpoints[1],e.endpoints[1].anchor.constructor===c.DynamicAnchor]),e.endpoints[1].anchor.isContinuous&&(e.source===e.target?e._jsPlumb.instance.removeElement(e.endpoints[1].canvas):null==e.endpoints[1].canvas.parentNode&&e._jsPlumb.instance.appendElement(e.endpoints[1].canvas)),e.updateConnectedClass()}},this.rehomeEndpoint=function(a,b,c){var e=d[b]||[],f=j.getId(c);if(f!==b){var g=e.indexOf(a);if(g>-1){var i=e.splice(g,1)[0];h.add(i,f)}}for(var k=0;k<a.connections.length;k++)a.connections[k].sourceId===b?h.sourceChanged(b,a.elementId,a.connections[k],a.element):a.connections[k].targetId===b&&(a.connections[k].targetId=a.elementId,a.connections[k].target=a.element,h.updateOtherEndpoint(a.connections[k].sourceId,b,a.elementId,a.connections[k]))},this.redraw=function(a,e,f,h,l,m){if(!j.isSuspendDrawing()){var n=d[a]||[],o=g[a]||[],p=[],r=[],t=[];f=f||j.timestamp(),h=h||{left:0,top:0},e&&(e={left:e.left+h.left,top:e.top+h.top});for(var u=j.updateOffset({elId:a,offset:e,recalc:!1,timestamp:f}),v={},w=0;w<o.length;w++){var x=o[w][0],y=x.sourceId,z=x.targetId,A=x.endpoints[0].anchor.isContinuous,B=x.endpoints[1].anchor.isContinuous;if(A||B){var C=y+"_"+z,D=v[C],E=x.sourceId===a?1:0;A&&!i[y]&&(i[y]={top:[],right:[],bottom:[],left:[]}),B&&!i[z]&&(i[z]={top:[],right:[],bottom:[],left:[]}),a!==z&&j.updateOffset({elId:z,timestamp:f}),a!==y&&j.updateOffset({elId:y,timestamp:f});var F=j.getCachedData(z),G=j.getCachedData(y);z===y&&(A||B)?(s(i[y],-Math.PI/2,0,x,!1,z,0,!1,"top",y,p,r),s(i[z],-Math.PI/2,0,x,!1,y,1,!1,"top",z,p,r)):(D||(D=this.calculateOrientation(y,z,G.o,F.o,x.endpoints[0].anchor,x.endpoints[1].anchor,x),v[C]=D),A&&s(i[y],D.theta,0,x,!1,z,0,!1,D.a[0],y,p,r),B&&s(i[z],D.theta2,-1,x,!0,y,1,!0,D.a[1],z,p,r)),A&&b.addWithFunction(t,y,function(a){return a===y}),B&&b.addWithFunction(t,z,function(a){return a===z}),b.addWithFunction(p,x,function(a){return a.id===x.id}),(A&&0===E||B&&1===E)&&b.addWithFunction(r,x.endpoints[E],function(a){return a.id===x.endpoints[E].id})}}for(w=0;w<n.length;w++)0===n[w].connections.length&&n[w].anchor.isContinuous&&(i[a]||(i[a]={top:[],right:[],bottom:[],left:[]}),s(i[a],-Math.PI/2,0,{endpoints:[n[w],n[w]],paint:function(){}},!1,a,0,!1,n[w].anchor.getDefaultFace(),a,p,r),b.addWithFunction(t,a,function(b){return b===a}));for(w=0;w<t.length;w++)q(t[w],i[t[w]]);for(w=0;w<n.length;w++)n[w].paint({timestamp:f,offset:u,dimensions:u.s,recalc:m!==!0});for(w=0;w<r.length;w++){var H=j.getCachedData(r[w].elementId);r[w].paint({timestamp:null,offset:H,dimensions:H.s})}for(w=0;w<o.length;w++){var I=o[w][1];if(I.anchor.constructor===c.DynamicAnchor){I.paint({elementWithPrecedence:a,timestamp:f}),b.addWithFunction(p,o[w][0],function(a){return a.id===o[w][0].id});for(var J=0;J<I.connections.length;J++)I.connections[J]!==o[w][0]&&b.addWithFunction(p,I.connections[J],function(a){return a.id===I.connections[J].id})}else b.addWithFunction(p,o[w][0],function(a){return a.id===o[w][0].id})}var K=k[a];for(K&&K.paint({timestamp:f,recalc:!1,elId:a}),w=0;w<p.length;w++)p[w].paint({elId:a,timestamp:null,recalc:!1,clearEdits:l})}};var t=function(a){b.EventGenerator.apply(this),this.type="Continuous",this.isDynamic=!0,this.isContinuous=!0;for(var c=a.faces||["top","right","bottom","left"],d=!(a.clockwise===!1),g={},h={top:"bottom",right:"left",left:"right",bottom:"top"},i={top:"right",right:"bottom",left:"top",bottom:"left"},j={top:"left",right:"top",left:"bottom",bottom:"right"},k=d?i:j,l=d?j:i,m=a.cssClass||"",n=null,o=null,p=["left","right"],q=["top","bottom"],r=null,s=0;s<c.length;s++)g[c[s]]=!0;this.getDefaultFace=function(){return 0===c.length?"top":c[0]},this.isRelocatable=function(){return!0},this.isSnapOnRelocate=function(){return!0},this.verifyEdge=function(a){return g[a]?a:g[h[a]]?h[a]:g[k[a]]?k[a]:g[l[a]]?l[a]:a},this.isEdgeSupported=function(a){return null==r?null==o?g[a]===!0:o===a:-1!==r.indexOf(a)},this.setCurrentFace=function(a,b){n=a,b&&null!=o&&(o=n)},this.getCurrentFace=function(){return n},this.getSupportedFaces=function(){var a=[];for(var b in g)g[b]&&a.push(b);return a},this.lock=function(){o=n},this.unlock=function(){o=null},this.isLocked=function(){return null!=o},this.lockCurrentAxis=function(){null!=n&&(r="left"===n||"right"===n?p:q)},this.unlockCurrentAxis=function(){r=null},this.compute=function(a){return e[a.element.id]||[0,0]},this.getCurrentLocation=function(a){return e[a.element.id]||[0,0]},this.getOrientation=function(a){return f[a.id]||[0,0]},this.getCssClass=function(){return m}};j.continuousAnchorFactory={get:function(a){return new t(a)},clear:function(a){delete e[a]}}},c.AnchorManager.prototype.calculateOrientation=function(a,b,c,d,e,f){var g={HORIZONTAL:"horizontal",VERTICAL:"vertical",DIAGONAL:"diagonal",IDENTITY:"identity"},h=["left","top","right","bottom"];if(a===b)return{orientation:g.IDENTITY,a:["top","top"]};var i=Math.atan2(d.centery-c.centery,d.centerx-c.centerx),j=Math.atan2(c.centery-d.centery,c.centerx-d.centerx),k=[],l={};!function(a,b){for(var c=0;c<a.length;c++)l[a[c]]={left:[b[c].left,b[c].centery],right:[b[c].right,b[c].centery],top:[b[c].centerx,b[c].top],bottom:[b[c].centerx,b[c].bottom]}}(["source","target"],[c,d]);for(var m=0;m<h.length;m++)for(var n=0;n<h.length;n++)k.push({source:h[m],target:h[n],dist:Biltong.lineLength(l.source[h[m]],l.target[h[n]])});k.sort(function(a,b){return a.dist<b.dist?-1:a.dist>b.dist?1:0});for(var o=k[0].source,p=k[0].target,q=0;q<k.length&&(o=!e.isContinuous||e.isEdgeSupported(k[q].source)?k[q].source:null,p=!f.isContinuous||f.isEdgeSupported(k[q].target)?k[q].target:null,null==o||null==p);q++);return e.isContinuous&&e.setCurrentFace(o),f.isContinuous&&f.setCurrentFace(p),{a:[o,p],theta:i,theta2:j}},c.Anchor=function(a){this.x=a.x||0,this.y=a.y||0,this.elementId=a.elementId,this.cssClass=a.cssClass||"",this.userDefinedLocation=null,this.orientation=a.orientation||[0,0],this.lastReturnValue=null,this.offsets=a.offsets||[0,0],this.timestamp=null;var c=a.relocatable!==!1;this.isRelocatable=function(){return c},this.setRelocatable=function(a){c=a};var d=a.snapOnRelocate!==!1;this.isSnapOnRelocate=function(){return d};var e=!1;this.lock=function(){e=!0},this.unlock=function(){e=!1},this.isLocked=function(){return e},b.EventGenerator.apply(this),this.compute=function(a){var b=a.xy,c=a.wh,d=a.timestamp;return a.clearUserDefinedLocation&&(this.userDefinedLocation=null),d&&d===this.timestamp?this.lastReturnValue:(null!=this.userDefinedLocation?this.lastReturnValue=this.userDefinedLocation:this.lastReturnValue=[b[0]+this.x*c[0]+this.offsets[0],b[1]+this.y*c[1]+this.offsets[1],this.x,this.y],this.timestamp=d,this.lastReturnValue)},this.getCurrentLocation=function(a){return a=a||{},null==this.lastReturnValue||null!=a.timestamp&&this.timestamp!==a.timestamp?this.compute(a):this.lastReturnValue},this.setPosition=function(a,b,c,d,f){(!e||f)&&(this.x=a,this.y=b,this.orientation=[c,d],this.lastReturnValue=null)}},b.extend(c.Anchor,b.EventGenerator,{equals:function(a){if(!a)return!1;var b=a.getOrientation(),c=this.getOrientation();return this.x===a.x&&this.y===a.y&&this.offsets[0]===a.offsets[0]&&this.offsets[1]===a.offsets[1]&&c[0]===b[0]&&c[1]===b[1]},getUserDefinedLocation:function(){return this.userDefinedLocation},setUserDefinedLocation:function(a){this.userDefinedLocation=a},clearUserDefinedLocation:function(){this.userDefinedLocation=null},getOrientation:function(){return this.orientation},getCssClass:function(){return this.cssClass}}),c.FloatingAnchor=function(a){c.Anchor.apply(this,arguments);var b=a.reference,d=a.referenceCanvas,e=c.getSize(d),f=0,g=0,h=null,i=null;this.orientation=null,this.x=0,this.y=0,this.isFloating=!0,this.compute=function(a){var b=a.xy,c=[b[0]+e[0]/2,b[1]+e[1]/2];return i=c,c},this.getOrientation=function(a){if(h)return h;var c=b.getOrientation(a);return[Math.abs(c[0])*f*-1,Math.abs(c[1])*g*-1]},this.over=function(a,b){h=a.getOrientation(b)},this.out=function(){h=null},this.getCurrentLocation=function(a){return null==i?this.compute(a):i}},b.extend(c.FloatingAnchor,c.Anchor);var d=function(a,b,d){return a.constructor===c.Anchor?a:b.makeAnchor(a,d,b)};c.DynamicAnchor=function(a){c.Anchor.apply(this,arguments),this.isDynamic=!0,this.anchors=[],this.elementId=a.elementId,this.jsPlumbInstance=a.jsPlumbInstance;for(var b=0;b<a.anchors.length;b++)this.anchors[b]=d(a.anchors[b],this.jsPlumbInstance,this.elementId);this.getAnchors=function(){return this.anchors};var e=this.anchors.length>0?this.anchors[0]:null,f=e,g=this,h=function(a,b,c,d,e){var f=d[0]+a.x*e[0],g=d[1]+a.y*e[1],h=d[0]+e[0]/2,i=d[1]+e[1]/2;return Math.sqrt(Math.pow(b-f,2)+Math.pow(c-g,2))+Math.sqrt(Math.pow(h-f,2)+Math.pow(i-g,2))},i=a.selector||function(a,b,c,d,e){for(var f=c[0]+d[0]/2,g=c[1]+d[1]/2,i=-1,j=1/0,k=0;k<e.length;k++){var l=h(e[k],f,g,a,b);j>l&&(i=k+0,j=l)}return e[i]};this.compute=function(a){var b=a.xy,c=a.wh,d=a.txy,h=a.twh;this.timestamp=a.timestamp;var j=g.getUserDefinedLocation();return null!=j?j:this.isLocked()||null==d||null==h?e.compute(a):(a.timestamp=null,e=i(b,c,d,h,this.anchors),this.x=e.x,this.y=e.y,e!==f&&this.fire("anchorChanged",e),f=e,e.compute(a))},this.getCurrentLocation=function(a){return this.getUserDefinedLocation()||(null!=e?e.getCurrentLocation(a):null)},this.getOrientation=function(a){return null!=e?e.getOrientation(a):[0,0]},this.over=function(a,b){null!=e&&e.over(a,b)},this.out=function(){null!=e&&e.out()},this.setAnchor=function(a){e=a},this.getCssClass=function(){return e&&e.getCssClass()||""},this.setAnchorCoordinates=function(a){var b=jsPlumbUtil.findWithFunction(this.anchors,function(b){return b.x===a[0]&&b.y===a[1]});return-1!==b?(this.setAnchor(this.anchors[b]),!0):!1}},b.extend(c.DynamicAnchor,c.Anchor);var e=function(a,b,d,e,f,g){c.Anchors[f]=function(c){var h=c.jsPlumbInstance.makeAnchor([a,b,d,e,0,0],c.elementId,c.jsPlumbInstance);return h.type=f,g&&g(h,c),h}};e(.5,0,0,-1,"TopCenter"),e(.5,1,0,1,"BottomCenter"),e(0,.5,-1,0,"LeftMiddle"),e(1,.5,1,0,"RightMiddle"),e(.5,0,0,-1,"Top"),e(.5,1,0,1,"Bottom"),e(0,.5,-1,0,"Left"),e(1,.5,1,0,"Right"),e(.5,.5,0,0,"Center"),e(1,0,0,-1,"TopRight"),e(1,1,0,1,"BottomRight"),e(0,0,0,-1,"TopLeft"),e(0,1,0,1,"BottomLeft"),c.Defaults.DynamicAnchors=function(a){return a.jsPlumbInstance.makeAnchors(["TopCenter","RightMiddle","BottomCenter","LeftMiddle"],a.elementId,a.jsPlumbInstance)},c.Anchors.AutoDefault=function(a){var b=a.jsPlumbInstance.makeDynamicAnchor(c.Defaults.DynamicAnchors(a));return b.type="AutoDefault",b};var f=function(a,b){c.Anchors[a]=function(c){var d=c.jsPlumbInstance.makeAnchor(["Continuous",{faces:b}],c.elementId,c.jsPlumbInstance);return d.type=a,d}};c.Anchors.Continuous=function(a){return a.jsPlumbInstance.continuousAnchorFactory.get(a)},f("ContinuousLeft",["left"]),f("ContinuousTop",["top"]),f("ContinuousBottom",["bottom"]),f("ContinuousRight",["right"]),e(0,0,0,0,"Assign",function(a,b){var c=b.position||"Fixed";a.positionFinder=c.constructor===String?b.jsPlumbInstance.AnchorPositionFinders[c]:c,a.constructorParams=b}),a.jsPlumbInstance.prototype.AnchorPositionFinders={Fixed:function(a,b,c){return[(a.left-b.left)/c[0],(a.top-b.top)/c[1]]},Grid:function(a,b,c,d){var e=a.left-b.left,f=a.top-b.top,g=c[0]/d.grid[0],h=c[1]/d.grid[1],i=Math.floor(e/g),j=Math.floor(f/h);return[(i*g+g/2)/c[0],(j*h+h/2)/c[1]]}},c.Anchors.Perimeter=function(a){a=a||{};var b=a.anchorCount||60,c=a.shape;if(!c)throw new Error("no shape supplied to Perimeter Anchor type");var d=function(){for(var a=.5,c=2*Math.PI/b,d=0,e=[],f=0;b>f;f++){var g=a+a*Math.sin(d),h=a+a*Math.cos(d);e.push([g,h,0,0]),d+=c}return e},e=function(a){for(var c=b/a.length,d=[],e=function(a,e,f,g,h,i,j){c=b*h;for(var k=(f-a)/c,l=(g-e)/c,m=0;c>m;m++)d.push([a+k*m,e+l*m,null==i?0:i,null==j?0:j])},f=0;f<a.length;f++)e.apply(null,a[f]);return d},f=function(a){for(var b=[],c=0;c<a.length;c++)b.push([a[c][0],a[c][1],a[c][2],a[c][3],1/a.length,a[c][4],a[c][5]]);return e(b)},g=function(){return f([[0,0,1,0,0,-1],[1,0,1,1,1,0],[1,1,0,1,0,1],[0,1,0,0,-1,0]])},h={Circle:d,Ellipse:d,Diamond:function(){return f([[.5,0,1,.5],[1,.5,.5,1],[.5,1,0,.5],[0,.5,.5,0]])},Rectangle:g,Square:g,Triangle:function(){return f([[.5,0,1,1],[1,1,0,1],[0,1,.5,0]])},Path:function(a){for(var b=a.points,c=[],d=0,f=0;f<b.length-1;f++){var g=Math.sqrt(Math.pow(b[f][2]-b[f][0])+Math.pow(b[f][3]-b[f][1]));d+=g,c.push([b[f][0],b[f][1],b[f+1][0],b[f+1][1],g])}for(var h=0;h<c.length;h++)c[h][4]=c[h][4]/d;return e(c)}},i=function(a,b){for(var c=[],d=b/180*Math.PI,e=0;e<a.length;e++){var f=a[e][0]-.5,g=a[e][1]-.5;c.push([.5+(f*Math.cos(d)-g*Math.sin(d)),.5+(f*Math.sin(d)+g*Math.cos(d)),a[e][2],a[e][3]])}return c};if(!h[c])throw new Error("Shape ["+c+"] is unknown by Perimeter Anchor type");var j=h[c](a);a.rotation&&(j=i(j,a.rotation));var k=a.jsPlumbInstance.makeDynamicAnchor(j);return k.type="Perimeter",k}}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=a.Biltong;b.Segments={AbstractSegment:function(a){this.params=a,this.findClosestPointOnPath=function(a,b){return{d:1/0,x:null,y:null,l:null}},this.getBounds=function(){return{minX:Math.min(a.x1,a.x2),minY:Math.min(a.y1,a.y2),maxX:Math.max(a.x1,a.x2),maxY:Math.max(a.y1,a.y2)}},this.lineIntersection=function(a,b,c,d){return[]},this.boxIntersection=function(a,b,c,d){var e=[];return e.push.apply(e,this.lineIntersection(a,b,a+c,b)),e.push.apply(e,this.lineIntersection(a+c,b,a+c,b+d)),e.push.apply(e,this.lineIntersection(a+c,b+d,a,b+d)),e.push.apply(e,this.lineIntersection(a,b+d,a,b)),e},this.boundingBoxIntersection=function(a){return this.boxIntersection(a.x,a.y,a.w,a.y)}},Straight:function(a){var c,e,f,g,h,i,j,k=(b.Segments.AbstractSegment.apply(this,arguments),function(){c=Math.sqrt(Math.pow(h-g,2)+Math.pow(j-i,2)),e=d.gradient({x:g,y:i},{x:h,y:j}),f=-1/e});this.type="Straight",this.getLength=function(){return c},this.getGradient=function(){return e},this.getCoordinates=function(){return{x1:g,y1:i,x2:h,y2:j}},this.setCoordinates=function(a){g=a.x1,i=a.y1,h=a.x2,j=a.y2,k()},this.setCoordinates({x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2}),this.getBounds=function(){return{minX:Math.min(g,h),minY:Math.min(i,j),maxX:Math.max(g,h),maxY:Math.max(i,j)}},this.pointOnPath=function(a,b){if(0!==a||b){if(1!==a||b){var e=b?a>0?a:c+a:a*c;return d.pointOnLine({x:g,y:i},{x:h,y:j},e)}return{x:h,y:j}}return{x:g,y:i}},this.gradientAtPoint=function(a){return e},this.pointAlongPathFrom=function(a,b,c){var e=this.pointOnPath(a,c),f=0>=b?{x:g,y:i}:{x:h,y:j};return 0>=b&&Math.abs(b)>1&&(b*=-1),d.pointOnLine(e,f,b)};var l=function(a,b,c){return c>=Math.min(a,b)&&c<=Math.max(a,b)},m=function(a,b,c){return Math.abs(c-a)<Math.abs(c-b)?a:b};this.findClosestPointOnPath=function(a,b){var k={d:1/0,x:null,y:null,l:null,x1:g,x2:h,y1:i,y2:j};if(0===e)k.y=i,k.x=l(g,h,a)?a:m(g,h,a);else if(e===1/0||e===-(1/0))k.x=g,k.y=l(i,j,b)?b:m(i,j,b);else{var n=i-e*g,o=b-f*a,p=(o-n)/(e-f),q=e*p+n;k.x=l(g,h,p)?p:m(g,h,p),k.y=l(i,j,q)?q:m(i,j,q)}var r=d.lineLength([k.x,k.y],[g,i]);return k.d=d.lineLength([a,b],[k.x,k.y]),k.l=r/c,k};var n=function(a,b,c){return c>b?a>=b&&c>=a:b>=a&&a>=c},o=n;this.lineIntersection=function(a,b,c,f){var k=Math.abs(d.gradient({x:a,y:b},{x:c,y:f})),l=Math.abs(e),m=l===1/0?g:i-l*g,n=[],p=k===1/0?a:b-k*a;if(k!==l)if(k===1/0&&0===l)o(a,g,h)&&o(i,b,f)&&(n=[a,i]);else if(0===k&&l===1/0)o(b,i,j)&&o(g,a,c)&&(n=[g,b]);else{var q,r;k===1/0?(q=a,o(q,g,h)&&(r=l*a+m,o(r,b,f)&&(n=[q,r]))):0===k?(r=b,o(r,i,j)&&(q=(b-m)/l,o(q,a,c)&&(n=[q,r]))):(q=(p-m)/(l-k),r=l*q+m,o(q,g,h)&&o(r,i,j)&&(n=[q,r]))}return n},this.boxIntersection=function(a,b,c,d){var e=[];return e.push.apply(e,this.lineIntersection(a,b,a+c,b)),e.push.apply(e,this.lineIntersection(a+c,b,a+c,b+d)),e.push.apply(e,this.lineIntersection(a+c,b+d,a,b+d)),e.push.apply(e,this.lineIntersection(a,b+d,a,b)),e},this.boundingBoxIntersection=function(a){return this.boxIntersection(a.x,a.y,a.w,a.h)}},Arc:function(a){var c=(b.Segments.AbstractSegment.apply(this,arguments),function(b,c){return d.theta([a.cx,a.cy],[b,c])}),e=function(a,b){if(a.anticlockwise){var c=a.startAngle<a.endAngle?a.startAngle+f:a.startAngle,d=Math.abs(c-a.endAngle);return c-d*b}var e=a.endAngle<a.startAngle?a.endAngle+f:a.endAngle,g=Math.abs(e-a.startAngle);return a.startAngle+g*b},f=2*Math.PI;this.radius=a.r,this.anticlockwise=a.ac,this.type="Arc",a.startAngle&&a.endAngle?(this.startAngle=a.startAngle,this.endAngle=a.endAngle,this.x1=a.cx+this.radius*Math.cos(a.startAngle),this.y1=a.cy+this.radius*Math.sin(a.startAngle),this.x2=a.cx+this.radius*Math.cos(a.endAngle),this.y2=a.cy+this.radius*Math.sin(a.endAngle)):(this.startAngle=c(a.x1,a.y1),this.endAngle=c(a.x2,a.y2),this.x1=a.x1,this.y1=a.y1,this.x2=a.x2,this.y2=a.y2),this.endAngle<0&&(this.endAngle+=f),this.startAngle<0&&(this.startAngle+=f);var g=this.endAngle<this.startAngle?this.endAngle+f:this.endAngle;this.sweep=Math.abs(g-this.startAngle),this.anticlockwise&&(this.sweep=f-this.sweep);var h=2*Math.PI*this.radius,i=this.sweep/f,j=h*i;this.getLength=function(){return j},this.getBounds=function(){return{minX:a.cx-a.r,maxX:a.cx+a.r,minY:a.cy-a.r,maxY:a.cy+a.r}};var k=1e-10,l=function(a){var b=Math.floor(a),c=Math.ceil(a);return k>a-b?b:k>c-a?c:a};this.pointOnPath=function(b,c){if(0===b)return{x:this.x1,y:this.y1,theta:this.startAngle};if(1===b)return{x:this.x2,y:this.y2,theta:this.endAngle};c&&(b/=j);var d=e(this,b),f=a.cx+a.r*Math.cos(d),g=a.cy+a.r*Math.sin(d);return{x:l(f),y:l(g),theta:d}},this.gradientAtPoint=function(b,c){var e=this.pointOnPath(b,c),f=d.normal([a.cx,a.cy],[e.x,e.y]);return this.anticlockwise||f!==1/0&&f!==-(1/0)||(f*=-1),f},this.pointAlongPathFrom=function(b,c,d){var e=this.pointOnPath(b,d),f=c/h*2*Math.PI,g=this.anticlockwise?-1:1,i=e.theta+g*f,j=a.cx+this.radius*Math.cos(i),k=a.cy+this.radius*Math.sin(i);return{x:j,y:k}}},Bezier:function(c){this.curve=[{x:c.x1,y:c.y1},{x:c.cp1x,y:c.cp1y},{x:c.cp2x,y:c.cp2y},{x:c.x2,y:c.y2}];b.Segments.AbstractSegment.apply(this,arguments);this.bounds={minX:Math.min(c.x1,c.x2,c.cp1x,c.cp2x),minY:Math.min(c.y1,c.y2,c.cp1y,c.cp2y),maxX:Math.max(c.x1,c.x2,c.cp1x,c.cp2x),maxY:Math.max(c.y1,c.y2,c.cp1y,c.cp2y)},this.type="Bezier";var d=function(b,c,d){return d&&(c=a.jsBezier.locationAlongCurveFrom(b,c>0?0:1,c)),c};this.pointOnPath=function(b,c){return b=d(this.curve,b,c),a.jsBezier.pointOnCurve(this.curve,b)},this.gradientAtPoint=function(b,c){return b=d(this.curve,b,c),a.jsBezier.gradientAtPoint(this.curve,b)},this.pointAlongPathFrom=function(b,c,e){return b=d(this.curve,b,e),a.jsBezier.pointAlongCurveFrom(this.curve,b,c)},this.getLength=function(){return a.jsBezier.getLength(this.curve)},this.getBounds=function(){return this.bounds},this.findClosestPointOnPath=function(b,c){var d=a.jsBezier.nearestPointOnCurve({x:b,y:c},this.curve);return{d:Math.sqrt(Math.pow(d.point.x-b,2)+Math.pow(d.point.y-c,2)),x:d.point.x,y:d.point.y,l:1-d.location,s:this}},this.lineIntersection=function(b,c,d,e){return a.jsBezier.lineIntersection(b,c,d,e,this.curve)}}},b.SegmentRenderer={getPath:function(a,b){return{Straight:function(b){var c=a.getCoordinates();return(b?"M "+c.x1+" "+c.y1+" ":"")+"L "+c.x2+" "+c.y2},Bezier:function(b){var c=a.params;return(b?"M "+c.x2+" "+c.y2+" ":"")+"C "+c.cp2x+" "+c.cp2y+" "+c.cp1x+" "+c.cp1y+" "+c.x1+" "+c.y1},Arc:function(b){var c=a.params,d=a.sweep>Math.PI?1:0,e=a.anticlockwise?0:1;return(b?"M"+a.x1+" "+a.y1+" ":"")+"A "+a.radius+" "+c.r+" 0 "+d+","+e+" "+a.x2+" "+a.y2}}[a.type](b)}};var e=function(){this.resetBounds=function(){this.bounds={minX:1/0,minY:1/0,maxX:-(1/0),maxY:-(1/0)}},this.resetBounds()};b.Connectors.AbstractConnector=function(a){e.apply(this,arguments);var f=[],g=0,h=[],i=[],j=a.stub||0,k=c.isArray(j)?j[0]:j,l=c.isArray(j)?j[1]:j,m=a.gap||0,n=c.isArray(m)?m[0]:m,o=c.isArray(m)?m[1]:m,p=null,q=null;this.getPathData=function(){for(var a="",c=0;c<f.length;c++)a+=b.SegmentRenderer.getPath(f[c],0===c),a+=" ";return a},this.findSegmentForPoint=function(a,b){for(var c={d:1/0,s:null,x:null,y:null,l:null},d=0;d<f.length;d++){var e=f[d].findClosestPointOnPath(a,b);e.d<c.d&&(c.d=e.d,c.l=e.l,c.x=e.x,c.y=e.y,c.s=f[d],c.x1=e.x1,c.x2=e.x2,c.y1=e.y1,c.y2=e.y2,c.index=d,c.connectorLocation=h[d][0]+e.l*(h[d][1]-h[d][0]))}return c},this.lineIntersection=function(a,b,c,d){for(var e=[],g=0;g<f.length;g++)e.push.apply(e,f[g].lineIntersection(a,b,c,d));return e},this.boxIntersection=function(a,b,c,d){for(var e=[],g=0;g<f.length;g++)e.push.apply(e,f[g].boxIntersection(a,b,c,d));return e},this.boundingBoxIntersection=function(a){for(var b=[],c=0;c<f.length;c++)b.push.apply(b,f[c].boundingBoxIntersection(a));return b};var r=function(){for(var a=0,b=0;b<f.length;b++){var c=f[b].getLength();i[b]=c/g,h[b]=[a,a+=c/g]}},s=function(a,b){b&&(a=a>0?a/g:(g+a)/g);for(var c=h.length-1,d=1,e=0;e<h.length;e++)if(h[e][1]>=a){c=e,d=1===a?1:0===a?0:(a-h[e][0])/i[e];break}return{segment:f[c],proportion:d,index:c}},t=function(a,c,d){if(d.x1!==d.x2||d.y1!==d.y2){var e=new b.Segments[c](d);f.push(e),g+=e.getLength(),a.updateBounds(e)}},u=function(){g=f.length=h.length=i.length=0};this.setSegments=function(a){p=[],g=0;for(var b=0;b<a.length;b++)p.push(a[b]),g+=a[b].getLength()},this.getLength=function(){return g};var v=function(a){this.strokeWidth=a.strokeWidth;var b=d.quadrant(a.sourcePos,a.targetPos),c=a.targetPos[0]<a.sourcePos[0],e=a.targetPos[1]<a.sourcePos[1],f=a.strokeWidth||1,g=a.sourceEndpoint.anchor.getOrientation(a.sourceEndpoint),h=a.targetEndpoint.anchor.getOrientation(a.targetEndpoint),i=c?a.targetPos[0]:a.sourcePos[0],j=e?a.targetPos[1]:a.sourcePos[1],m=Math.abs(a.targetPos[0]-a.sourcePos[0]),p=Math.abs(a.targetPos[1]-a.sourcePos[1]);if(0===g[0]&&0===g[1]||0===h[0]&&0===h[1]){var q=m>p?0:1,r=[1,0][q];g=[],h=[],g[q]=a.sourcePos[q]>a.targetPos[q]?-1:1,h[q]=a.sourcePos[q]>a.targetPos[q]?1:-1,g[r]=0,h[r]=0}var s=c?m+n*g[0]:n*g[0],t=e?p+n*g[1]:n*g[1],u=c?o*h[0]:m+o*h[0],v=e?o*h[1]:p+o*h[1],w=g[0]*h[0]+g[1]*h[1],x={sx:s,sy:t,tx:u,ty:v,lw:f,xSpan:Math.abs(u-s),ySpan:Math.abs(v-t),mx:(s+u)/2,my:(t+v)/2,so:g,to:h,x:i,y:j,w:m,h:p,segment:b,startStubX:s+g[0]*k,startStubY:t+g[1]*k,endStubX:u+h[0]*l,endStubY:v+h[1]*l,isXGreaterThanStubTimes2:Math.abs(s-u)>k+l,isYGreaterThanStubTimes2:Math.abs(t-v)>k+l,opposite:-1===w,perpendicular:0===w,orthogonal:1===w,sourceAxis:0===g[0]?"y":"x",points:[i,j,m,p,s,t,u,v],stubs:[k,l]};return x.anchorOrientation=x.opposite?"opposite":x.orthogonal?"orthogonal":"perpendicular",x};this.getSegments=function(){return f},this.updateBounds=function(a){var b=a.getBounds();this.bounds.minX=Math.min(this.bounds.minX,b.minX),this.bounds.maxX=Math.max(this.bounds.maxX,b.maxX),this.bounds.minY=Math.min(this.bounds.minY,b.minY),this.bounds.maxY=Math.max(this.bounds.maxY,b.maxY)};return this.pointOnPath=function(a,b){var c=s(a,b);return c.segment&&c.segment.pointOnPath(c.proportion,!1)||[0,0]},this.gradientAtPoint=function(a,b){var c=s(a,b);return c.segment&&c.segment.gradientAtPoint(c.proportion,!1)||0},this.pointAlongPathFrom=function(a,b,c){var d=s(a,c);return d.segment&&d.segment.pointAlongPathFrom(d.proportion,b,!1)||[0,0]},this.compute=function(a){q=v.call(this,a),u(),this._compute(q,a),this.x=q.points[0],this.y=q.points[1],this.w=q.points[2],this.h=q.points[3],this.segment=q.segment,r()},{addSegment:t,prepareCompute:v,sourceStub:k,targetStub:l,maxStub:Math.max(k,l),sourceGap:n,targetGap:o,maxGap:Math.max(n,o)}},c.extend(b.Connectors.AbstractConnector,e),b.Endpoints.AbstractEndpoint=function(a){e.apply(this,arguments);var b=this.compute=function(a,b,c,d){var e=this._compute.apply(this,arguments);return this.x=e[0],this.y=e[1],this.w=e[2],this.h=e[3],this.bounds.minX=this.x,this.bounds.minY=this.y,this.bounds.maxX=this.x+this.w,this.bounds.maxY=this.y+this.h,e};return{compute:b,cssClass:a.cssClass}},c.extend(b.Endpoints.AbstractEndpoint,e),b.Endpoints.Dot=function(a){this.type="Dot";b.Endpoints.AbstractEndpoint.apply(this,arguments);a=a||{},this.radius=a.radius||10,this.defaultOffset=.5*this.radius,this.defaultInnerRadius=this.radius/3,this._compute=function(a,b,c,d){this.radius=c.radius||this.radius;var e=a[0]-this.radius,f=a[1]-this.radius,g=2*this.radius,h=2*this.radius;if(c.stroke){var i=c.strokeWidth||1;e-=i,f-=i,g+=2*i,h+=2*i}return[e,f,g,h,this.radius]}},c.extend(b.Endpoints.Dot,b.Endpoints.AbstractEndpoint),b.Endpoints.Rectangle=function(a){this.type="Rectangle";b.Endpoints.AbstractEndpoint.apply(this,arguments);a=a||{},this.width=a.width||20,this.height=a.height||20,this._compute=function(a,b,c,d){var e=c.width||this.width,f=c.height||this.height,g=a[0]-e/2,h=a[1]-f/2;return[g,h,e,f]}},c.extend(b.Endpoints.Rectangle,b.Endpoints.AbstractEndpoint);var f=function(a){b.jsPlumbUIComponent.apply(this,arguments),this._jsPlumb.displayElements=[]};c.extend(f,b.jsPlumbUIComponent,{getDisplayElements:function(){return this._jsPlumb.displayElements},appendDisplayElement:function(a){this._jsPlumb.displayElements.push(a)}}),b.Endpoints.Image=function(d){this.type="Image",f.apply(this,arguments),b.Endpoints.AbstractEndpoint.apply(this,arguments);var e=d.onload,g=d.src||d.url,h=d.cssClass?" "+d.cssClass:"";this._jsPlumb.img=new Image,this._jsPlumb.ready=!1,this._jsPlumb.initialized=!1,this._jsPlumb.deleted=!1,this._jsPlumb.widthToUse=d.width,this._jsPlumb.heightToUse=d.height,this._jsPlumb.endpoint=d.endpoint,this._jsPlumb.img.onload=function(){null!=this._jsPlumb&&(this._jsPlumb.ready=!0,this._jsPlumb.widthToUse=this._jsPlumb.widthToUse||this._jsPlumb.img.width,this._jsPlumb.heightToUse=this._jsPlumb.heightToUse||this._jsPlumb.img.height,e&&e(this))}.bind(this),this._jsPlumb.endpoint.setImage=function(a,b){var c=a.constructor===String?a:a.src;e=b,this._jsPlumb.img.src=c,null!=this.canvas&&this.canvas.setAttribute("src",this._jsPlumb.img.src)}.bind(this),this._jsPlumb.endpoint.setImage(g,e),this._compute=function(a,b,c,d){return this.anchorPoint=a,this._jsPlumb.ready?[a[0]-this._jsPlumb.widthToUse/2,a[1]-this._jsPlumb.heightToUse/2,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse]:[0,0,0,0]},this.canvas=b.createElement("img",{position:"absolute",margin:0,padding:0,outline:0},this._jsPlumb.instance.endpointClass+h),this._jsPlumb.widthToUse&&this.canvas.setAttribute("width",this._jsPlumb.widthToUse),this._jsPlumb.heightToUse&&this.canvas.setAttribute("height",this._jsPlumb.heightToUse),this._jsPlumb.instance.appendElement(this.canvas),this.actuallyPaint=function(a,b,d){if(!this._jsPlumb.deleted){this._jsPlumb.initialized||(this.canvas.setAttribute("src",this._jsPlumb.img.src),this.appendDisplayElement(this.canvas),this._jsPlumb.initialized=!0);var e=this.anchorPoint[0]-this._jsPlumb.widthToUse/2,f=this.anchorPoint[1]-this._jsPlumb.heightToUse/2;c.sizeElement(this.canvas,e,f,this._jsPlumb.widthToUse,this._jsPlumb.heightToUse)}},this.paint=function(b,c){null!=this._jsPlumb&&(this._jsPlumb.ready?this.actuallyPaint(b,c):a.setTimeout(function(){this.paint(b,c)}.bind(this),200))}},c.extend(b.Endpoints.Image,[f,b.Endpoints.AbstractEndpoint],{cleanup:function(a){a&&(this._jsPlumb.deleted=!0,this.canvas&&this.canvas.parentNode.removeChild(this.canvas),this.canvas=null);
}}),b.Endpoints.Blank=function(a){b.Endpoints.AbstractEndpoint.apply(this,arguments);this.type="Blank",f.apply(this,arguments),this._compute=function(a,b,c,d){return[a[0],a[1],10,0]};var d=a.cssClass?" "+a.cssClass:"";this.canvas=b.createElement("div",{display:"block",width:"1px",height:"1px",background:"transparent",position:"absolute"},this._jsPlumb.instance.endpointClass+d),this._jsPlumb.instance.appendElement(this.canvas),this.paint=function(a,b){c.sizeElement(this.canvas,this.x,this.y,this.w,this.h)}},c.extend(b.Endpoints.Blank,[b.Endpoints.AbstractEndpoint,f],{cleanup:function(){this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}}),b.Endpoints.Triangle=function(a){this.type="Triangle",b.Endpoints.AbstractEndpoint.apply(this,arguments);var c=this;a=a||{},a.width=a.width||55,a.height=a.height||55,this.width=a.width,this.height=a.height,this._compute=function(a,b,d,e){var f=d.width||c.width,g=d.height||c.height,h=a[0]-f/2,i=a[1]-g/2;return[h,i,f,g]}};var g=b.Overlays.AbstractOverlay=function(a){this.visible=!0,this.isAppendedAtTopLevel=!0,this.component=a.component,this.loc=null==a.location?.5:a.location,this.endpointLoc=null==a.endpointLocation?[.5,.5]:a.endpointLocation,this.visible=a.visible!==!1};g.prototype={cleanup:function(a){a&&(this.component=null,this.canvas=null,this.endpointLoc=null)},reattach:function(a,b){},setVisible:function(a){this.visible=a,this.component.repaint()},isVisible:function(){return this.visible},hide:function(){this.setVisible(!1)},show:function(){this.setVisible(!0)},incrementLocation:function(a){this.loc+=a,this.component.repaint()},setLocation:function(a){this.loc=a,this.component.repaint()},getLocation:function(){return this.loc},updateFrom:function(){}},b.Overlays.Arrow=function(a){this.type="Arrow",g.apply(this,arguments),this.isAppendedAtTopLevel=!1,a=a||{};var e=this;this.length=a.length||20,this.width=a.width||20,this.id=a.id,this.direction=(a.direction||1)<0?-1:1;var f=a.paintStyle||{"stroke-width":1},h=a.foldback||.623;this.computeMaxSize=function(){return 1.5*e.width},this.elementCreated=function(c,d){if(this.path=c,a.events)for(var e in a.events)b.on(c,e,a.events[e])},this.draw=function(a,b){var e,g,i,j,k;if(a.pointAlongPathFrom){if(c.isString(this.loc)||this.loc>1||this.loc<0){var l=parseInt(this.loc,10),m=this.loc<0?1:0;e=a.pointAlongPathFrom(m,l,!1),g=a.pointAlongPathFrom(m,l-this.direction*this.length/2,!1),i=d.pointOnLine(e,g,this.length)}else if(1===this.loc){if(e=a.pointOnPath(this.loc),g=a.pointAlongPathFrom(this.loc,-this.length),i=d.pointOnLine(e,g,this.length),-1===this.direction){var n=i;i=e,e=n}}else if(0===this.loc){if(i=a.pointOnPath(this.loc),g=a.pointAlongPathFrom(this.loc,this.length),e=d.pointOnLine(i,g,this.length),-1===this.direction){var o=i;i=e,e=o}}else e=a.pointAlongPathFrom(this.loc,this.direction*this.length/2),g=a.pointOnPath(this.loc),i=d.pointOnLine(e,g,this.length);j=d.perpendicularLineTo(e,i,this.width),k=d.pointOnLine(e,i,h*this.length);var p={hxy:e,tail:j,cxy:k},q=f.stroke||b.stroke,r=f.fill||b.stroke,s=f.strokeWidth||b.strokeWidth;return{component:a,d:p,"stroke-width":s,stroke:q,fill:r,minX:Math.min(e.x,j[0].x,j[1].x),maxX:Math.max(e.x,j[0].x,j[1].x),minY:Math.min(e.y,j[0].y,j[1].y),maxY:Math.max(e.y,j[0].y,j[1].y)}}return{component:a,minX:0,maxX:0,minY:0,maxY:0}}},c.extend(b.Overlays.Arrow,g,{updateFrom:function(a){this.length=a.length||this.length,this.width=a.width||this.width,this.direction=null!=a.direction?a.direction:this.direction,this.foldback=a.foldback||this.foldback},cleanup:function(){this.path&&this.canvas&&this.canvas.removeChild(this.path)}}),b.Overlays.PlainArrow=function(a){a=a||{};var c=b.extend(a,{foldback:1});b.Overlays.Arrow.call(this,c),this.type="PlainArrow"},c.extend(b.Overlays.PlainArrow,b.Overlays.Arrow),b.Overlays.Diamond=function(a){a=a||{};var c=a.length||40,d=b.extend(a,{length:c/2,foldback:2});b.Overlays.Arrow.call(this,d),this.type="Diamond"},c.extend(b.Overlays.Diamond,b.Overlays.Arrow);var h=function(a,b){return(null==a._jsPlumb.cachedDimensions||b)&&(a._jsPlumb.cachedDimensions=a.getDimensions()),a._jsPlumb.cachedDimensions},i=function(a){b.jsPlumbUIComponent.apply(this,arguments),g.apply(this,arguments);var d=this.fire;this.fire=function(){d.apply(this,arguments),this.component&&this.component.fire.apply(this.component,arguments)},this.detached=!1,this.id=a.id,this._jsPlumb.div=null,this._jsPlumb.initialised=!1,this._jsPlumb.component=a.component,this._jsPlumb.cachedDimensions=null,this._jsPlumb.create=a.create,this._jsPlumb.initiallyInvisible=a.visible===!1,this.getElement=function(){if(null==this._jsPlumb.div){var c=this._jsPlumb.div=b.getElement(this._jsPlumb.create(this._jsPlumb.component));c.style.position="absolute",jsPlumb.addClass(c,this._jsPlumb.instance.overlayClass+" "+(this.cssClass?this.cssClass:a.cssClass?a.cssClass:"")),this._jsPlumb.instance.appendElement(c),this._jsPlumb.instance.getId(c),this.canvas=c;var d="translate(-50%, -50%)";c.style.webkitTransform=d,c.style.mozTransform=d,c.style.msTransform=d,c.style.oTransform=d,c.style.transform=d,c._jsPlumb=this,a.visible===!1&&(c.style.display="none")}return this._jsPlumb.div},this.draw=function(a,b,d){var e=h(this);if(null!=e&&2===e.length){var f={x:0,y:0};if(d)f={x:d[0],y:d[1]};else if(a.pointOnPath){var g=this.loc,i=!1;(c.isString(this.loc)||this.loc<0||this.loc>1)&&(g=parseInt(this.loc,10),i=!0),f=a.pointOnPath(g,i)}else{var j=this.loc.constructor===Array?this.loc:this.endpointLoc;f={x:j[0]*a.w,y:j[1]*a.h}}var k=f.x-e[0]/2,l=f.y-e[1]/2;return{component:a,d:{minx:k,miny:l,td:e,cxy:f},minX:k,maxX:k+e[0],minY:l,maxY:l+e[1]}}return{minX:0,maxX:0,minY:0,maxY:0}}};c.extend(i,[b.jsPlumbUIComponent,g],{getDimensions:function(){return[1,1]},setVisible:function(a){this._jsPlumb.div&&(this._jsPlumb.div.style.display=a?"block":"none",a&&this._jsPlumb.initiallyInvisible&&(h(this,!0),this.component.repaint(),this._jsPlumb.initiallyInvisible=!1))},clearCachedDimensions:function(){this._jsPlumb.cachedDimensions=null},cleanup:function(a){a?null!=this._jsPlumb.div&&(this._jsPlumb.div._jsPlumb=null,this._jsPlumb.instance.removeElement(this._jsPlumb.div)):(this._jsPlumb&&this._jsPlumb.div&&this._jsPlumb.div.parentNode&&this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div),this.detached=!0)},reattach:function(a,b){null!=this._jsPlumb.div&&a.getContainer().appendChild(this._jsPlumb.div),this.detached=!1},computeMaxSize:function(){var a=h(this);return Math.max(a[0],a[1])},paint:function(a,b){this._jsPlumb.initialised||(this.getElement(),a.component.appendDisplayElement(this._jsPlumb.div),this._jsPlumb.initialised=!0,this.detached&&this._jsPlumb.div.parentNode.removeChild(this._jsPlumb.div)),this._jsPlumb.div.style.left=a.component.x+a.d.minx+"px",this._jsPlumb.div.style.top=a.component.y+a.d.miny+"px"}}),b.Overlays.Custom=function(a){this.type="Custom",i.apply(this,arguments)},c.extend(b.Overlays.Custom,i),b.Overlays.GuideLines=function(){var a=this;a.length=50,a.strokeWidth=5,this.type="GuideLines",g.apply(this,arguments),b.jsPlumbUIComponent.apply(this,arguments),this.draw=function(b,c){var e=b.pointAlongPathFrom(a.loc,a.length/2),f=b.pointOnPath(a.loc),g=d.pointOnLine(e,f,a.length),h=d.perpendicularLineTo(e,g,40),i=d.perpendicularLineTo(g,e,20);return{connector:b,head:e,tail:g,headLine:i,tailLine:h,minX:Math.min(e.x,g.x,i[0].x,i[1].x),minY:Math.min(e.y,g.y,i[0].y,i[1].y),maxX:Math.max(e.x,g.x,i[0].x,i[1].x),maxY:Math.max(e.y,g.y,i[0].y,i[1].y)}}},b.Overlays.Label=function(a){this.labelStyle=a.labelStyle;this.cssClass=null!=this.labelStyle?this.labelStyle.cssClass:null;var c=b.extend({create:function(){return b.createElement("div")}},a);if(b.Overlays.Custom.call(this,c),this.type="Label",this.label=a.label||"",this.labelText=null,this.labelStyle){var d=this.getElement();if(this.labelStyle.font=this.labelStyle.font||"12px sans-serif",d.style.font=this.labelStyle.font,d.style.color=this.labelStyle.color||"black",this.labelStyle.fill&&(d.style.background=this.labelStyle.fill),this.labelStyle.borderWidth>0){var e=this.labelStyle.borderStyle?this.labelStyle.borderStyle:"black";d.style.border=this.labelStyle.borderWidth+"px solid "+e}this.labelStyle.padding&&(d.style.padding=this.labelStyle.padding)}},c.extend(b.Overlays.Label,b.Overlays.Custom,{cleanup:function(a){a&&(this.div=null,this.label=null,this.labelText=null,this.cssClass=null,this.labelStyle=null)},getLabel:function(){return this.label},setLabel:function(a){this.label=a,this.labelText=null,this.clearCachedDimensions(),this.update(),this.component.repaint()},getDimensions:function(){return this.update(),i.prototype.getDimensions.apply(this,arguments)},update:function(){if("function"==typeof this.label){var a=this.label(this);this.getElement().innerHTML=a.replace(/\r\n/g,"<br/>")}else null==this.labelText&&(this.labelText=this.label,this.getElement().innerHTML=this.labelText.replace(/\r\n/g,"<br/>"))},updateFrom:function(a){null!=a.label&&this.setLabel(a.label)}})}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumbUtil,c=a.jsPlumbInstance,d="jtk-group-collapsed",e="jtk-group-expanded",f="[jtk-group-content]",g="elementDraggable",h="stop",i="revert",j="_groupManager",k="_jsPlumbGroup",l="_jsPlumbGroupDrag",m="group:addMember",n="group:removeMember",o="group:add",p="group:remove",q="group:expand",r="group:collapse",s="groupDragStop",t="connectionMoved",u="internal.connectionDetached",v="removeAll",w="orphanAll",x="show",y="hide",z=function(a){function c(a){delete a.proxies;var c,d=i[a.id];null!=d&&(c=function(b){return b.id===a.id},b.removeWithFunction(d.connections.source,c),b.removeWithFunction(d.connections.target,c),delete i[a.id]),d=j[a.id],null!=d&&(c=function(b){return b.id===a.id},b.removeWithFunction(d.connections.source,c),b.removeWithFunction(d.connections.target,c),delete j[a.id])}function f(b,c){for(var d=b.getMembers(),e=0;e<d.length;e++)a[c?x:y](d[e],!0)}function g(b){var c=b.getMembers(),d=a.getConnections({source:c,scope:"*"},!0),e=a.getConnections({target:c,scope:"*"},!0),f={};b.connections.source.length=0,b.connections.target.length=0;var g=function(a){for(var c=0;c<a.length;c++)f[a[c].id]||(f[a[c].id]=!0,a[c].source._jsPlumbGroup===b?(a[c].target._jsPlumbGroup!==b&&b.connections.source.push(a[c]),i[a[c].id]=b):a[c].target._jsPlumbGroup===b&&(b.connections.target.push(a[c]),j[a[c].id]=b))};g(d),g(e)}var h={},i={},j={},l=this;a.bind("connection",function(a){null!=a.source[k]&&null!=a.target[k]&&a.source[k]===a.target[k]?(i[a.connection.id]=a.source[k],j[a.connection.id]=a.source[k]):(null!=a.source[k]&&(b.suggest(a.source[k].connections.source,a.connection),i[a.connection.id]=a.source[k]),null!=a.target[k]&&(b.suggest(a.target[k].connections.target,a.connection),j[a.connection.id]=a.target[k]))}),a.bind(u,function(a){c(a.connection)}),a.bind(t,function(a){var b=0===a.index?i:j,c=b[a.connection.id];if(c){var d=c.connections[0===a.index?"source":"target"],e=d.indexOf(a.connection);-1!==e&&d.splice(e,1)}}),this.addGroup=function(b){a.addClass(b.getEl(),e),h[b.id]=b,b.manager=this,g(b),a.fire(o,{group:b})},this.addToGroup=function(b,c,d){if(b=this.getGroup(b)){var e=b.getEl();if(c._isJsPlumbGroup)return;var f=c._jsPlumbGroup;if(f!==b){var g=a.getOffset(c,!0),h=b.collapsed?a.getOffset(e,!0):a.getOffset(b.getDragArea(),!0);null!=f&&(f.remove(c,!1,d,!1,b),l.updateConnectionsForGroup(f)),b.add(c,d);var i=function(a,c){var d=0===c?1:0;a.each(function(a){a.setVisible(!1),a.endpoints[d].element._jsPlumbGroup===b?(a.endpoints[d].setVisible(!1),s(a,d,b)):(a.endpoints[c].setVisible(!1),n(a,c,b))})};b.collapsed&&(i(a.select({source:c}),0),i(a.select({target:c}),1));var j=a.getId(c);a.dragManager.setParent(c,j,e,a.getId(e),g);var k={left:g.left-h.left,top:g.top-h.top};if(a.setPosition(c,k),a.dragManager.revalidateParent(c,j,g),l.updateConnectionsForGroup(b),a.revalidate(j),!d){var o={group:b,el:c,pos:k};f&&(o.sourceGroup=f),a.fire(m,o)}}}},this.removeFromGroup=function(a,b,c){a=this.getGroup(a),a&&a.remove(b,null,c)},this.getGroup=function(a){var c=a;if(b.isString(a)&&(c=h[a],null==c))throw new TypeError("No such group ["+a+"]");return c},this.getGroups=function(){var a=[];for(var b in h)a.push(h[b]);return a},this.removeGroup=function(b,c,d,e){b=this.getGroup(b),this.expandGroup(b,!0);var f=b[c?v:w](d,e);return a.remove(b.getEl()),delete h[b.id],delete a._groups[b.id],a.fire(p,{group:b}),f},this.removeAllGroups=function(a,b,c){for(var d in h)this.removeGroup(h[d],a,b,c)};var n=function(b,c,d){var e=b.endpoints[0===c?1:0].element;if(!e[k]||e[k].shouldProxy()||!e[k].collapsed){var f=d.getEl(),g=a.getId(f);a.proxyConnection(b,c,f,g,function(a,b){return d.getEndpoint(a,b)},function(a,b){return d.getAnchor(a,b)})}};this.collapseGroup=function(b){if(b=this.getGroup(b),null!=b&&!b.collapsed){var c=b.getEl();if(f(b,!1),b.shouldProxy()){var g=function(a,c){for(var d=0;d<a.length;d++){var e=a[d];n(e,c,b)}};g(b.connections.source,0),g(b.connections.target,1)}b.collapsed=!0,a.removeClass(c,e),a.addClass(c,d),a.revalidate(c),a.fire(r,{group:b})}};var s=function(b,c,d){a.unproxyConnection(b,c,a.getId(d.getEl()))};this.expandGroup=function(b,c){if(b=this.getGroup(b),null!=b&&b.collapsed){var g=b.getEl();if(f(b,!0),b.shouldProxy()){var h=function(a,c){for(var d=0;d<a.length;d++){var e=a[d];s(e,c,b)}};h(b.connections.source,0),h(b.connections.target,1)}b.collapsed=!1,a.addClass(g,e),a.removeClass(g,d),a.revalidate(g),this.repaintGroup(b),c||a.fire(q,{group:b})}},this.repaintGroup=function(b){b=this.getGroup(b);for(var c=b.getMembers(),d=0;d<c.length;d++)a.revalidate(c[d])},this.updateConnectionsForGroup=g,this.refreshAllGroups=function(){for(var b in h)g(h[b]),a.dragManager.updateOffsets(a.getId(h[b].getEl()))}},A=function(c,d){function e(a){return a.offsetParent}function j(a,b){var d=e(a),f=c.getSize(d),g=c.getSize(a),h=b[0],i=h+g[0],j=b[1],k=j+g[1];return i>0&&h<f[0]&&k>0&&j<f[1]}function m(a){var b=c.getId(a),d=c.getOffset(a);return a.parentNode.removeChild(a),c.getContainer().appendChild(a),c.setPosition(a,d),delete a._jsPlumbGroup,q(a),c.dragManager.clearParent(a,b),[b,d]}function o(a){var b=null;if(!j(a.el,a.pos)){var d=a.el._jsPlumbGroup;A?c.remove(a.el):b=m(a.el),d.remove(a.el)}return b}function p(a){var b=c.getId(a);c.revalidate(a),c.dragManager.revalidateParent(a,b)}function q(a){a._katavorioDrag&&((A||z)&&a._katavorioDrag.off(h,o),A||z||!y||(a._katavorioDrag.off(i,p),a._katavorioDrag.setRevert(null)))}function r(a){a._katavorioDrag&&((A||z)&&a._katavorioDrag.on(h,o),x&&a._katavorioDrag.setConstrain(!0),w&&a._katavorioDrag.setUseGhostProxy(!0),A||z||!y||(a._katavorioDrag.on(i,p),a._katavorioDrag.setRevert(function(a,b){return!j(a,b)})))}var t=this,u=d.el;this.getEl=function(){return u},this.id=d.id||b.uuid(),u._isJsPlumbGroup=!0;var v=this.getDragArea=function(){var a=c.getSelector(u,f);return a&&a.length>0?a[0]:u},w=d.ghost===!0,x=w||d.constrain===!0,y=d.revert!==!1,z=d.orphan===!0,A=d.prune===!0,B=d.dropOverride===!0,C=d.proxied!==!1,D=[];if(this.connections={source:[],target:[],internal:[]},this.getAnchor=function(a,b){return d.anchor||"Continuous"},this.getEndpoint=function(a,b){return d.endpoint||["Dot",{radius:10}]},this.collapsed=!1,d.draggable!==!1){var E={stop:function(a){c.fire(s,jsPlumb.extend(a,{group:t}))},scope:l};d.dragOptions&&a.jsPlumb.extend(E,d.dragOptions),c.draggable(d.el,E)}d.droppable!==!1&&c.droppable(d.el,{drop:function(a){var b=a.drag.el;if(!b._isJsPlumbGroup){var d=b._jsPlumbGroup;if(d!==t){if(null!=d&&d.overrideDrop(b,t))return;c.getGroupManager().addToGroup(t,b,!1)}}}});var F=function(a,b){for(var c=null==a.nodeType?a:[a],d=0;d<c.length;d++)b(c[d])};this.overrideDrop=function(a,b){return B&&(y||A||z)},this.add=function(a,b){var d=v();F(a,function(a){if(null!=a._jsPlumbGroup){if(a._jsPlumbGroup===t)return;a._jsPlumbGroup.remove(a,!0,b,!1)}a._jsPlumbGroup=t,D.push(a),c.isAlreadyDraggable(a)&&r(a),a.parentNode!==d&&d.appendChild(a)}),c.getGroupManager().updateConnectionsForGroup(t)},this.remove=function(a,d,e,f,g){F(a,function(a){if(delete a._jsPlumbGroup,b.removeWithFunction(D,function(b){return b===a}),d)try{t.getDragArea().removeChild(a)}catch(f){jsPlumbUtil.log("Could not remove element from Group "+f)}if(q(a),!e){var h={group:t,el:a};g&&(h.targetGroup=g),c.fire(n,h)}}),f||c.getGroupManager().updateConnectionsForGroup(t)},this.removeAll=function(a,b){for(var d=0,e=D.length;e>d;d++){var f=D[0];t.remove(f,a,b,!0),c.remove(f,!0)}D.length=0,c.getGroupManager().updateConnectionsForGroup(t)},this.orphanAll=function(){for(var a={},b=0;b<D.length;b++){var c=m(D[b]);a[c[0]]=c[1]}return D.length=0,a},this.getMembers=function(){return D},u[k]=this,c.bind(g,function(a){a.el._jsPlumbGroup===this&&r(a.el)}.bind(this)),this.shouldProxy=function(){return C},c.getGroupManager().addGroup(this)};c.prototype.addGroup=function(a){var b=this;if(b._groups=b._groups||{},null!=b._groups[a.id])throw new TypeError("cannot create Group ["+a.id+"]; a Group with that ID exists");if(null!=a.el[k])throw new TypeError("cannot create Group ["+a.id+"]; the given element is already a Group");var c=new A(b,a);return b._groups[c.id]=c,a.collapsed&&this.collapseGroup(c),c},c.prototype.addToGroup=function(a,b,c){var d=function(b){var d=this.getId(b);this.manage(d,b),this.getGroupManager().addToGroup(a,b,c)}.bind(this);if(Array.isArray(b))for(var e=0;e<b.length;e++)d(b[e]);else d(b)},c.prototype.removeFromGroup=function(a,b,c){this.getGroupManager().removeFromGroup(a,b,c)},c.prototype.removeGroup=function(a,b,c,d){return this.getGroupManager().removeGroup(a,b,c,d)},c.prototype.removeAllGroups=function(a,b,c){this.getGroupManager().removeAllGroups(a,b,c)},c.prototype.getGroup=function(a){return this.getGroupManager().getGroup(a)},c.prototype.getGroups=function(){return this.getGroupManager().getGroups()},c.prototype.expandGroup=function(a){this.getGroupManager().expandGroup(a)},c.prototype.collapseGroup=function(a){this.getGroupManager().collapseGroup(a)},c.prototype.repaintGroup=function(a){this.getGroupManager().repaintGroup(a)},c.prototype.toggleGroup=function(a){a=this.getGroupManager().getGroup(a),null!=a&&this.getGroupManager()[a.collapsed?"expandGroup":"collapseGroup"](a)},c.prototype.getGroupManager=function(){var a=this[j];return null==a&&(a=this[j]=new z(this)),a},c.prototype.removeGroupManager=function(){delete this[j]},c.prototype.getGroupFor=function(a){return a=this.getElement(a),a?a[k]:void 0}}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d="Straight",e="Arc",f=function(a){this.type="Flowchart",a=a||{},a.stub=null==a.stub?30:a.stub;var c,f,g=b.Connectors.AbstractConnector.apply(this,arguments),h=null==a.midpoint?.5:a.midpoint,i=a.alwaysRespectStubs===!0,j=null,k=null,l=null!=a.cornerRadius?a.cornerRadius:0,m=(a.loopbackRadius||25,function(a){return 0>a?-1:0===a?0:1}),n=function(a){return[m(a[2]-a[0]),m(a[3]-a[1])]},o=function(a,b,c,d){if(j!==b||k!==c){var e=null==j?d.sx:j,f=null==k?d.sy:k,g=e===b?"v":"h";j=b,k=c,a.push([e,f,b,c,g])}},p=function(a){return Math.sqrt(Math.pow(a[0]-a[2],2)+Math.pow(a[1]-a[3],2))},q=function(a){var b=[];return b.push.apply(b,a),b},r=function(a,b,c){for(var f,h,i,j=null,k=0;k<b.length-1;k++){if(j=j||q(b[k]),f=q(b[k+1]),h=n(j),i=n(f),l>0&&j[4]!==f[4]){var m=Math.min(p(j),p(f)),o=Math.min(l,m/2);j[2]-=h[0]*o,j[3]-=h[1]*o,f[0]+=i[0]*o,f[1]+=i[1]*o;var r=h[1]===i[0]&&1===i[0]||h[1]===i[0]&&0===i[0]&&h[0]!==i[1]||h[1]===i[0]&&-1===i[0],s=f[1]>j[3]?1:-1,t=f[0]>j[2]?1:-1,u=s===t,v=u&&r||!u&&!r?f[0]:j[2],w=u&&r||!u&&!r?j[3]:f[1];g.addSegment(a,d,{x1:j[0],y1:j[1],x2:j[2],y2:j[3]}),g.addSegment(a,e,{r:o,x1:j[2],y1:j[3],x2:f[0],y2:f[1],cx:v,cy:w,ac:r})}else{var x=j[2]===j[0]?0:j[2]>j[0]?c.lw/2:-(c.lw/2),y=j[3]===j[1]?0:j[3]>j[1]?c.lw/2:-(c.lw/2);g.addSegment(a,d,{x1:j[0]-x,y1:j[1]-y,x2:j[2]+x,y2:j[3]+y})}j=f}null!=f&&g.addSegment(a,d,{x1:f[0],y1:f[1],x2:f[2],y2:f[3]})};this._compute=function(a,b){c=[],j=null,k=null,f=null;var d=function(){return[a.startStubX,a.startStubY,a.endStubX,a.endStubY]},e={perpendicular:d,orthogonal:d,opposite:function(b){var c=a,d="x"===b?0:1,e={x:function(){return 1===c.so[d]&&(c.startStubX>c.endStubX&&c.tx>c.startStubX||c.sx>c.endStubX&&c.tx>c.sx)||-1===c.so[d]&&(c.startStubX<c.endStubX&&c.tx<c.startStubX||c.sx<c.endStubX&&c.tx<c.sx)},y:function(){return 1===c.so[d]&&(c.startStubY>c.endStubY&&c.ty>c.startStubY||c.sy>c.endStubY&&c.ty>c.sy)||-1===c.so[d]&&(c.startStubY<c.endStubY&&c.ty<c.startStubY||c.sy<c.endStubY&&c.ty<c.sy)}};return!i&&e[b]()?{x:[(a.sx+a.tx)/2,a.startStubY,(a.sx+a.tx)/2,a.endStubY],y:[a.startStubX,(a.sy+a.ty)/2,a.endStubX,(a.sy+a.ty)/2]}[b]:[a.startStubX,a.startStubY,a.endStubX,a.endStubY]}},l=e[a.anchorOrientation](a.sourceAxis),m="x"===a.sourceAxis?0:1,n="x"===a.sourceAxis?1:0,p=l[m],q=l[n],s=l[m+2],t=l[n+2];o(c,l[0],l[1],a);var u=a.startStubX+(a.endStubX-a.startStubX)*h,v=a.startStubY+(a.endStubY-a.startStubY)*h,w={x:[0,1],y:[1,0]},x={perpendicular:function(b){var c=a,d={x:[[[1,2,3,4],null,[2,1,4,3]],null,[[4,3,2,1],null,[3,4,1,2]]],y:[[[3,2,1,4],null,[2,3,4,1]],null,[[4,1,2,3],null,[1,4,3,2]]]},e={x:[[c.startStubX,c.endStubX],null,[c.endStubX,c.startStubX]],y:[[c.startStubY,c.endStubY],null,[c.endStubY,c.startStubY]]},f={x:[[u,c.startStubY],[u,c.endStubY]],y:[[c.startStubX,v],[c.endStubX,v]]},g={x:[[c.endStubX,c.startStubY]],y:[[c.startStubX,c.endStubY]]},h={x:[[c.startStubX,c.endStubY],[c.endStubX,c.endStubY]],y:[[c.endStubX,c.startStubY],[c.endStubX,c.endStubY]]},i={x:[[c.startStubX,v],[c.endStubX,v],[c.endStubX,c.endStubY]],y:[[u,c.startStubY],[u,c.endStubY],[c.endStubX,c.endStubY]]},j={x:[c.startStubY,c.endStubY],y:[c.startStubX,c.endStubX]},k=w[b][0],l=w[b][1],m=c.so[k]+1,n=c.to[l]+1,o=-1===c.to[l]&&j[b][1]<j[b][0]||1===c.to[l]&&j[b][1]>j[b][0],p=e[b][m][0],q=e[b][m][1],r=d[b][m][n];return c.segment===r[3]||c.segment===r[2]&&o?f[b]:c.segment===r[2]&&p>q?g[b]:c.segment===r[2]&&q>=p||c.segment===r[1]&&!o?i[b]:c.segment===r[0]||c.segment===r[1]&&o?h[b]:void 0},orthogonal:function(b,c,d,e,f){var g=a,h={x:-1===g.so[0]?Math.min(c,e):Math.max(c,e),y:-1===g.so[1]?Math.min(c,e):Math.max(c,e)}[b];return{x:[[h,d],[h,f],[e,f]],y:[[d,h],[f,h],[f,e]]}[b]},opposite:function(c,d,e,f){var h=a,i={x:"y",y:"x"}[c],j={x:"height",y:"width"}[c],k=h["is"+c.toUpperCase()+"GreaterThanStubTimes2"];if(b.sourceEndpoint.elementId===b.targetEndpoint.elementId){var l=e+(1-b.sourceEndpoint.anchor[i])*b.sourceInfo[j]+g.maxStub;return{x:[[d,l],[f,l]],y:[[l,d],[l,f]]}[c]}return!k||1===h.so[m]&&d>f||-1===h.so[m]&&f>d?{x:[[d,v],[f,v]],y:[[u,d],[u,f]]}[c]:1===h.so[m]&&f>d||-1===h.so[m]&&d>f?{x:[[u,h.sy],[u,h.ty]],y:[[h.sx,v],[h.tx,v]]}[c]:void 0}},y=x[a.anchorOrientation](a.sourceAxis,p,q,s,t);if(y)for(var z=0;z<y.length;z++)o(c,y[z][0],y[z][1],a);o(c,l[2],l[3],a),o(c,a.tx,a.ty,a),r(this,c,a)}};b.Connectors.Flowchart=f,c.extend(b.Connectors.Flowchart,b.Connectors.AbstractConnector)}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil;b.Connectors.AbstractBezierConnector=function(a){a=a||{};var c,d=a.showLoopback!==!1,e=(a.curviness||10,a.margin||5),f=(a.proximityLimit||80,a.orientation&&"clockwise"===a.orientation),g=a.loopbackRadius||25,h=!1;return this._compute=function(a,b){var i=b.sourcePos,j=b.targetPos,k=Math.abs(i[0]-j[0]),l=Math.abs(i[1]-j[1]);if(d&&b.sourceEndpoint.elementId===b.targetEndpoint.elementId){h=!0;var m=b.sourcePos[0],n=b.sourcePos[1]-e,o=m,p=n-g,q=o-g,r=p-g;k=2*g,l=2*g,a.points[0]=q,a.points[1]=r,a.points[2]=k,a.points[3]=l,c.addSegment(this,"Arc",{loopback:!0,x1:m-q+4,y1:n-r,startAngle:0,endAngle:2*Math.PI,r:g,ac:!f,x2:m-q-4,y2:n-r,cx:o-q,cy:p-r})}else h=!1,this._computeBezier(a,b,i,j,k,l)},c=b.Connectors.AbstractConnector.apply(this,arguments)},c.extend(b.Connectors.AbstractBezierConnector,b.Connectors.AbstractConnector);var d=function(a){a=a||{},this.type="Bezier";var c=b.Connectors.AbstractBezierConnector.apply(this,arguments),d=a.curviness||150,e=10;this.getCurviness=function(){return d},this._findControlPoint=function(a,b,c,f,g,h,i){var j=h[0]!==i[0]||h[1]===i[1],k=[];return j?(0===i[0]?k.push(c[0]<b[0]?a[0]+e:a[0]-e):k.push(a[0]+d*i[0]),0===i[1]?k.push(c[1]<b[1]?a[1]+e:a[1]-e):k.push(a[1]+d*h[1])):(0===h[0]?k.push(b[0]<c[0]?a[0]+e:a[0]-e):k.push(a[0]-d*h[0]),0===h[1]?k.push(b[1]<c[1]?a[1]+e:a[1]-e):k.push(a[1]+d*i[1])),k},this._computeBezier=function(a,b,d,e,f,g){var h,i,j=d[0]<e[0]?f:0,k=d[1]<e[1]?g:0,l=d[0]<e[0]?0:f,m=d[1]<e[1]?0:g;h=this._findControlPoint([j,k],d,e,b.sourceEndpoint,b.targetEndpoint,a.so,a.to),i=this._findControlPoint([l,m],e,d,b.targetEndpoint,b.sourceEndpoint,a.to,a.so),c.addSegment(this,"Bezier",{x1:j,y1:k,x2:l,y2:m,cp1x:h[0],cp1y:h[1],cp2x:i[0],cp2y:i[1]})}};b.Connectors.Bezier=d,c.extend(d,b.Connectors.AbstractBezierConnector)}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=function(a,b,c,d){return c>=a&&b>=d?1:c>=a&&d>=b?2:a>=c&&d>=b?3:4},e=function(a,b,c,d,e,f,g,h,i){return i>=h?[a,b]:1===c?d[3]<=0&&e[3]>=1?[a+(d[2]<.5?-1*f:f),b]:d[2]>=1&&e[2]<=0?[a,b+(d[3]<.5?-1*g:g)]:[a+-1*f,b+-1*g]:2===c?d[3]>=1&&e[3]<=0?[a+(d[2]<.5?-1*f:f),b]:d[2]>=1&&e[2]<=0?[a,b+(d[3]<.5?-1*g:g)]:[a+f,b+-1*g]:3===c?d[3]>=1&&e[3]<=0?[a+(d[2]<.5?-1*f:f),b]:d[2]<=0&&e[2]>=1?[a,b+(d[3]<.5?-1*g:g)]:[a+-1*f,b+-1*g]:4===c?d[3]<=0&&e[3]>=1?[a+(d[2]<.5?-1*f:f),b]:d[2]<=0&&e[2]>=1?[a,b+(d[3]<.5?-1*g:g)]:[a+f,b+-1*g]:void 0},f=function(a){a=a||{},this.type="StateMachine";var c,f=b.Connectors.AbstractBezierConnector.apply(this,arguments),g=a.curviness||10,h=a.margin||5,i=a.proximityLimit||80;a.orientation&&"clockwise"===a.orientation;this._computeBezier=function(a,b,j,k,l,m){var n=b.sourcePos[0]<b.targetPos[0]?0:l,o=b.sourcePos[1]<b.targetPos[1]?0:m,p=b.sourcePos[0]<b.targetPos[0]?l:0,q=b.sourcePos[1]<b.targetPos[1]?m:0;0===b.sourcePos[2]&&(n-=h),1===b.sourcePos[2]&&(n+=h),0===b.sourcePos[3]&&(o-=h),1===b.sourcePos[3]&&(o+=h),0===b.targetPos[2]&&(p-=h),1===b.targetPos[2]&&(p+=h),0===b.targetPos[3]&&(q-=h),1===b.targetPos[3]&&(q+=h);var r,s,t,u,v=(n+p)/2,w=(o+q)/2,x=d(n,o,p,q),y=Math.sqrt(Math.pow(p-n,2)+Math.pow(q-o,2));c=e(v,w,x,b.sourcePos,b.targetPos,g,g,y,i),r=c[0],s=c[0],t=c[1],u=c[1],f.addSegment(this,"Bezier",{x1:p,y1:q,x2:n,y2:o,cp1x:r,cp1y:t,cp2x:s,cp2y:u})}};b.Connectors.StateMachine=f,c.extend(f,b.Connectors.AbstractBezierConnector)}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d="Straight",e=function(a){this.type=d;var c=b.Connectors.AbstractConnector.apply(this,arguments);this._compute=function(a,b){c.addSegment(this,d,{x1:a.sx,y1:a.sy,x2:a.startStubX,y2:a.startStubY}),c.addSegment(this,d,{x1:a.startStubX,y1:a.startStubY,x2:a.endStubX,y2:a.endStubY}),c.addSegment(this,d,{x1:a.endStubX,y1:a.endStubY,x2:a.tx,y2:a.ty})}};b.Connectors.Straight=e,c.extend(e,b.Connectors.AbstractConnector)}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d={"stroke-linejoin":"stroke-linejoin","stroke-dashoffset":"stroke-dashoffset","stroke-linecap":"stroke-linecap"},e="stroke-dasharray",f="dashstyle",g="linearGradient",h="radialGradient",i="defs",j="fill",k="stop",l="stroke",m="stroke-width",n="style",o="none",p="jsplumb_gradient_",q="strokeWidth",r={svg:"http://www.w3.org/2000/svg"},s=function(a,b){for(var c in b)a.setAttribute(c,""+b[c])},t=function(a,c){return c=c||{},c.version="1.1",c.xmlns=r.svg,b.createElementNS(r.svg,a,null,null,c)},u=function(a){return"position:absolute;left:"+a[0]+"px;top:"+a[1]+"px"},v=function(a){for(var b=a.querySelectorAll(" defs,linearGradient,radialGradient"),c=0;c<b.length;c++)b[c].parentNode.removeChild(b[c])},w=function(a,b,c,d,e){var f=p+e._jsPlumb.instance.idstamp();v(a);var m;m=c.gradient.offset?t(h,{id:f}):t(g,{id:f,gradientUnits:"userSpaceOnUse"});var n=t(i);a.appendChild(n),n.appendChild(m);for(var o=0;o<c.gradient.stops.length;o++){var q=1===e.segment||2===e.segment?o:c.gradient.stops.length-1-o,r=c.gradient.stops[q][1],s=t(k,{offset:Math.floor(100*c.gradient.stops[o][0])+"%","stop-color":r});m.appendChild(s)}var u=c.stroke?l:j;b.setAttribute(u,"url(#"+f+")")},x=function(a,b,c,g,h){if(b.setAttribute(j,c.fill?c.fill:o),b.setAttribute(l,c.stroke?c.stroke:o),c.gradient?w(a,b,c,g,h):(v(a),b.setAttribute(n,"")),c.strokeWidth&&b.setAttribute(m,c.strokeWidth),c[f]&&c[q]&&!c[e]){var i=-1===c[f].indexOf(",")?" ":",",k=c[f].split(i),p="";k.forEach(function(a){p+=Math.floor(a*c.strokeWidth)+i}),b.setAttribute(e,p)}else c[e]&&b.setAttribute(e,c[e]);for(var r in d)c[r]&&b.setAttribute(d[r],c[r])},y=function(a,b,c){a.childNodes.length>c?a.insertBefore(b,a.childNodes[c]):a.appendChild(b)};c.svg={node:t,attr:s,pos:u};var z=function(a){var d=a.pointerEventsSpec||"all",e={};b.jsPlumbUIComponent.apply(this,a.originalArgs),this.canvas=null,this.path=null,this.svg=null,this.bgCanvas=null;var f=a.cssClass+" "+(a.originalArgs[0].cssClass||""),g={style:"",width:0,height:0,"pointer-events":d,position:"absolute"};this.svg=t("svg",g),a.useDivWrapper?(this.canvas=b.createElement("div",{position:"absolute"}),c.sizeElement(this.canvas,0,0,1,1),this.canvas.className=f):(s(this.svg,{"class":f}),this.canvas=this.svg),a._jsPlumb.appendElement(this.canvas,a.originalArgs[0].parent),a.useDivWrapper&&this.canvas.appendChild(this.svg);var h=[this.canvas];return this.getDisplayElements=function(){return h},this.appendDisplayElement=function(a){h.push(a)},this.paint=function(b,d,f){if(null!=b){var g,h=[this.x,this.y],i=[this.w,this.h];null!=f&&(f.xmin<0&&(h[0]+=f.xmin),f.ymin<0&&(h[1]+=f.ymin),i[0]=f.xmax+(f.xmin<0?-f.xmin:0),i[1]=f.ymax+(f.ymin<0?-f.ymin:0)),a.useDivWrapper?(c.sizeElement(this.canvas,h[0],h[1],i[0],i[1]),h[0]=0,h[1]=0,g=u([0,0])):g=u([h[0],h[1]]),e.paint.apply(this,arguments),s(this.svg,{style:g,width:i[0]||0,height:i[1]||0})}},{renderer:e}};c.extend(z,b.jsPlumbUIComponent,{cleanup:function(a){a||null==this.typeId?(this.canvas&&(this.canvas._jsPlumb=null),this.svg&&(this.svg._jsPlumb=null),this.bgCanvas&&(this.bgCanvas._jsPlumb=null),this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.bgCanvas&&this.bgCanvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.svg=null,this.canvas=null,this.path=null,this.group=null):(this.canvas&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas),this.bgCanvas&&this.bgCanvas.parentNode&&this.bgCanvas.parentNode.removeChild(this.bgCanvas))},reattach:function(a){var b=a.getContainer();this.canvas&&null==this.canvas.parentNode&&b.appendChild(this.canvas),this.bgCanvas&&null==this.bgCanvas.parentNode&&b.appendChild(this.bgCanvas)},setVisible:function(a){this.canvas&&(this.canvas.style.display=a?"block":"none")}}),b.ConnectorRenderers.svg=function(a){var c=this,d=z.apply(this,[{cssClass:a._jsPlumb.connectorClass,originalArgs:arguments,pointerEventsSpec:"none",_jsPlumb:a._jsPlumb}]);d.renderer.paint=function(d,e,f){var g=c.getSegments(),h="",i=[0,0];if(f.xmin<0&&(i[0]=-f.xmin),f.ymin<0&&(i[1]=-f.ymin),g.length>0){h=c.getPathData();var j={d:h,transform:"translate("+i[0]+","+i[1]+")","pointer-events":a["pointer-events"]||"visibleStroke"},k=null,l=[c.x,c.y,c.w,c.h];if(d.outlineStroke){var m=d.outlineWidth||1,n=d.strokeWidth+2*m;k=b.extend({},d),delete k.gradient,k.stroke=d.outlineStroke,k.strokeWidth=n,null==c.bgPath?(c.bgPath=t("path",j),b.addClass(c.bgPath,b.connectorOutlineClass),y(c.svg,c.bgPath,0)):s(c.bgPath,j),x(c.svg,c.bgPath,k,l,c)}null==c.path?(c.path=t("path",j),y(c.svg,c.path,d.outlineStroke?1:0)):s(c.path,j),x(c.svg,c.path,d,l,c)}}},c.extend(b.ConnectorRenderers.svg,z);var A=b.SvgEndpoint=function(a){var c=z.apply(this,[{cssClass:a._jsPlumb.endpointClass,originalArgs:arguments,pointerEventsSpec:"all",useDivWrapper:!0,_jsPlumb:a._jsPlumb}]);c.renderer.paint=function(a){var c=b.extend({},a);c.outlineStroke&&(c.stroke=c.outlineStroke),null==this.node?(this.node=this.makeNode(c),this.svg.appendChild(this.node)):null!=this.updateNode&&this.updateNode(this.node),
x(this.svg,this.node,c,[this.x,this.y,this.w,this.h],this),u(this.node,[this.x,this.y])}.bind(this)};c.extend(A,z),b.Endpoints.svg.Dot=function(){b.Endpoints.Dot.apply(this,arguments),A.apply(this,arguments),this.makeNode=function(a){return t("circle",{cx:this.w/2,cy:this.h/2,r:this.radius})},this.updateNode=function(a){s(a,{cx:this.w/2,cy:this.h/2,r:this.radius})}},c.extend(b.Endpoints.svg.Dot,[b.Endpoints.Dot,A]),b.Endpoints.svg.Rectangle=function(){b.Endpoints.Rectangle.apply(this,arguments),A.apply(this,arguments),this.makeNode=function(a){return t("rect",{width:this.w,height:this.h})},this.updateNode=function(a){s(a,{width:this.w,height:this.h})}},c.extend(b.Endpoints.svg.Rectangle,[b.Endpoints.Rectangle,A]),b.Endpoints.svg.Image=b.Endpoints.Image,b.Endpoints.svg.Blank=b.Endpoints.Blank,b.Overlays.svg.Label=b.Overlays.Label,b.Overlays.svg.Custom=b.Overlays.Custom;var B=function(a,c){a.apply(this,c),b.jsPlumbUIComponent.apply(this,c),this.isAppendedAtTopLevel=!1;this.path=null,this.paint=function(a,b){if(a.component.svg&&b){null==this.path&&(this.path=t("path",{"pointer-events":"all"}),a.component.svg.appendChild(this.path),this.elementCreated&&this.elementCreated(this.path,a.component),this.canvas=a.component.svg);var e=c&&1===c.length?c[0].cssClass||"":"",f=[0,0];b.xmin<0&&(f[0]=-b.xmin),b.ymin<0&&(f[1]=-b.ymin),s(this.path,{d:d(a.d),"class":e,stroke:a.stroke?a.stroke:null,fill:a.fill?a.fill:null,transform:"translate("+f[0]+","+f[1]+")"})}};var d=function(a){return isNaN(a.cxy.x)||isNaN(a.cxy.y)?"":"M"+a.hxy.x+","+a.hxy.y+" L"+a.tail[0].x+","+a.tail[0].y+" L"+a.cxy.x+","+a.cxy.y+" L"+a.tail[1].x+","+a.tail[1].y+" L"+a.hxy.x+","+a.hxy.y};this.transfer=function(a){a.canvas&&this.path&&this.path.parentNode&&(this.path.parentNode.removeChild(this.path),a.canvas.appendChild(this.path))}};c.extend(B,[b.jsPlumbUIComponent,b.Overlays.AbstractOverlay],{cleanup:function(a){null!=this.path&&(a?this._jsPlumb.instance.removeElement(this.path):this.path.parentNode&&this.path.parentNode.removeChild(this.path))},reattach:function(a,b){this.path&&b.canvas&&b.canvas.appendChild(this.path)},setVisible:function(a){null!=this.path&&(this.path.style.display=a?"block":"none")}}),b.Overlays.svg.Arrow=function(){B.apply(this,[b.Overlays.Arrow,arguments])},c.extend(b.Overlays.svg.Arrow,[b.Overlays.Arrow,B]),b.Overlays.svg.PlainArrow=function(){B.apply(this,[b.Overlays.PlainArrow,arguments])},c.extend(b.Overlays.svg.PlainArrow,[b.Overlays.PlainArrow,B]),b.Overlays.svg.Diamond=function(){B.apply(this,[b.Overlays.Diamond,arguments])},c.extend(b.Overlays.svg.Diamond,[b.Overlays.Diamond,B]),b.Overlays.svg.GuideLines=function(){var a,c,d=null,e=this;b.Overlays.GuideLines.apply(this,arguments),this.paint=function(b,g){null==d&&(d=t("path"),b.connector.svg.appendChild(d),e.attachListeners(d,b.connector),e.attachListeners(d,e),a=t("path"),b.connector.svg.appendChild(a),e.attachListeners(a,b.connector),e.attachListeners(a,e),c=t("path"),b.connector.svg.appendChild(c),e.attachListeners(c,b.connector),e.attachListeners(c,e));var h=[0,0];g.xmin<0&&(h[0]=-g.xmin),g.ymin<0&&(h[1]=-g.ymin),s(d,{d:f(b.head,b.tail),stroke:"red",fill:null,transform:"translate("+h[0]+","+h[1]+")"}),s(a,{d:f(b.tailLine[0],b.tailLine[1]),stroke:"blue",fill:null,transform:"translate("+h[0]+","+h[1]+")"}),s(c,{d:f(b.headLine[0],b.headLine[1]),stroke:"green",fill:null,transform:"translate("+h[0]+","+h[1]+")"})};var f=function(a,b){return"M "+a.x+","+a.y+" L"+b.x+","+b.y}},c.extend(b.Overlays.svg.GuideLines,b.Overlays.GuideLines)}.call("undefined"!=typeof window?window:this),function(){"use strict";var a=this,b=a.jsPlumb,c=a.jsPlumbUtil,d=a.Katavorio,e=a.Biltong,f=function(b){var c=b._mottle;return c||(c=b._mottle=new a.Mottle),c},g=function(a,c){c=c||"main";var f="_katavorio_"+c,g=a[f],h=a.getEventManager();return g||(g=new d({bind:h.on,unbind:h.off,getSize:b.getSize,getConstrainingRectangle:function(a){return[a.parentNode.scrollWidth,a.parentNode.scrollHeight]},getPosition:function(b,c){var d=a.getOffset(b,c,b._katavorioDrag?b.offsetParent:null);return[d.left,d.top]},setPosition:function(a,b){a.style.left=b[0]+"px",a.style.top=b[1]+"px"},addClass:b.addClass,removeClass:b.removeClass,intersects:e.intersects,indexOf:function(a,b){return a.indexOf(b)},scope:a.getDefaultScope(),css:{noSelect:a.dragSelectClass,droppable:"jtk-droppable",draggable:"jtk-draggable",drag:"jtk-drag",selected:"jtk-drag-selected",active:"jtk-drag-active",hover:"jtk-drag-hover",ghostProxy:"jtk-ghost-proxy"}}),g.setZoom(a.getZoom()),a[f]=g,a.bind("zoom",g.setZoom)),g},h=function(a){var b=a.el._jsPlumbDragOptions,c=!0;return b.canDrag&&(c=b.canDrag()),c&&(this.setHoverSuspended(!0),this.select({source:a.el}).addClass(this.elementDraggingClass+" "+this.sourceElementDraggingClass,!0),this.select({target:a.el}).addClass(this.elementDraggingClass+" "+this.targetElementDraggingClass,!0),this.setConnectionBeingDragged(!0)),c},i=function(a){var b=this.getUIPosition(arguments,this.getZoom());if(null!=b){var c=a.el._jsPlumbDragOptions;this.draw(a.el,b,null,!0),c._dragging&&this.addClass(a.el,"jtk-dragged"),c._dragging=!0}},j=function(a){for(var b,c=a.selection,d=function(a){null!=a[1]&&(b=this.getUIPosition([{el:a[2].el,pos:[a[1].left,a[1].top]}]),this.draw(a[2].el,b)),delete a[0]._jsPlumbDragOptions._dragging,this.removeClass(a[0],"jtk-dragged"),this.select({source:a[2].el}).removeClass(this.elementDraggingClass+" "+this.sourceElementDraggingClass,!0),this.select({target:a[2].el}).removeClass(this.elementDraggingClass+" "+this.targetElementDraggingClass,!0),this.getDragManager().dragEnded(a[2].el)}.bind(this),e=0;e<c.length;e++)d(c[e]);this.setHoverSuspended(!1),this.setConnectionBeingDragged(!1)},k=function(a,b){var d=function(d){if(null!=b[d]){if(c.isString(b[d])){var e=b[d].match(/-=/)?-1:1,f=b[d].substring(2);return a[d]+e*f}return b[d]}return a[d]};return[d("left"),d("top")]},l=function(a,b){if(null==b)return[0,0];var c=q(b),d=p(c,0);return[d[a+"X"],d[a+"Y"]]},m=l.bind(this,"page"),n=l.bind(this,"screen"),o=l.bind(this,"client"),p=function(a,b){return a.item?a.item(b):a[b]},q=function(a){return a.touches&&a.touches.length>0?a.touches:a.changedTouches&&a.changedTouches.length>0?a.changedTouches:a.targetTouches&&a.targetTouches.length>0?a.targetTouches:[a]},r=function(a){var b={},c=[],d={},e={},f={};this.register=function(g){var h,i=a.getId(g);b[i]||(b[i]=g,c.push(g),d[i]={});var j=function(b){if(b)for(var c=0;c<b.childNodes.length;c++)if(3!==b.childNodes[c].nodeType&&8!==b.childNodes[c].nodeType){var k=jsPlumb.getElement(b.childNodes[c]),l=a.getId(b.childNodes[c],null,!0);if(l&&e[l]&&e[l]>0){h||(h=a.getOffset(g));var m=a.getOffset(k);d[i][l]={id:l,offset:{left:m.left-h.left,top:m.top-h.top}},f[l]=i}j(b.childNodes[c])}};j(g)},this.updateOffsets=function(b,c){if(null!=b){c=c||{};var e,g=jsPlumb.getElement(b),h=a.getId(g),i=d[h];if(i)for(var j in i)if(i.hasOwnProperty(j)){var k=jsPlumb.getElement(j),l=c[j]||a.getOffset(k);if(null==k.offsetParent&&null!=d[h][j])continue;e||(e=a.getOffset(g)),d[h][j]={id:j,offset:{left:l.left-e.left,top:l.top-e.top}},f[j]=h}}},this.endpointAdded=function(c,g){g=g||a.getId(c);var h=document.body,i=c.parentNode;for(e[g]=e[g]?e[g]+1:1;null!=i&&i!==h;){var j=a.getId(i,null,!0);if(j&&b[j]){var k=a.getOffset(i);if(null==d[j][g]){var l=a.getOffset(c);d[j][g]={id:g,offset:{left:l.left-k.left,top:l.top-k.top}},f[g]=j}break}i=i.parentNode}},this.endpointDeleted=function(a){if(e[a.elementId]&&(e[a.elementId]--,e[a.elementId]<=0))for(var b in d)d.hasOwnProperty(b)&&d[b]&&(delete d[b][a.elementId],delete f[a.elementId])},this.changeId=function(a,b){d[b]=d[a],d[a]={},f[b]=f[a],f[a]=null},this.getElementsForDraggable=function(a){return d[a]},this.elementRemoved=function(a){var b=f[a];b&&(delete d[b][a],delete f[a])},this.reset=function(){b={},c=[],d={},e={}},this.dragEnded=function(b){if(null!=b.offsetParent){var c=a.getId(b),d=f[c];d&&this.updateOffsets(d)}},this.setParent=function(b,c,e,g,h){var i=f[c];d[g]||(d[g]={});var j=a.getOffset(e),k=h||a.getOffset(b);i&&d[i]&&delete d[i][c],d[g][c]={id:c,offset:{left:k.left-j.left,top:k.top-j.top}},f[c]=g},this.clearParent=function(a,b){var c=f[b];c&&(delete d[c][b],delete f[b])},this.revalidateParent=function(b,c,d){var e=f[c];if(e){var g={};g[c]=d,this.updateOffsets(e,g),a.revalidate(e)}},this.getDragAncestor=function(b){var c=jsPlumb.getElement(b),d=a.getId(c),e=f[d];return e?jsPlumb.getElement(e):null}},s=function(a,b,d){b=c.fastTrim(b),"undefined"!=typeof a.className.baseVal?a.className.baseVal=b:a.className=b;try{var e=a.classList;if(null!=e){for(;e.length>0;)e.remove(e.item(0));for(var f=0;f<d.length;f++)d[f]&&e.add(d[f])}}catch(g){c.log("JSPLUMB: cannot set class list",g)}},t=function(a){return"undefined"==typeof a.className.baseVal?a.className:a.className.baseVal},u=function(a,b,d){b=null==b?[]:c.isArray(b)?b:b.split(/\s+/),d=null==d?[]:c.isArray(d)?d:d.split(/\s+/);var e=t(a),f=e.split(/\s+/),g=function(a,b){for(var c=0;c<b.length;c++)if(a)-1===f.indexOf(b[c])&&f.push(b[c]);else{var d=f.indexOf(b[c]);-1!==d&&f.splice(d,1)}};g(!0,b),g(!1,d),s(a,f.join(" "),f)};a.jsPlumb.extend(a.jsPlumbInstance.prototype,{headless:!1,pageLocation:m,screenLocation:n,clientLocation:o,getDragManager:function(){return null==this.dragManager&&(this.dragManager=new r(this)),this.dragManager},recalculateOffsets:function(a){this.getDragManager().updateOffsets(a)},createElement:function(a,b,c,d){return this.createElementNS(null,a,b,c,d)},createElementNS:function(a,b,c,d,e){var f,g=null==a?document.createElement(b):document.createElementNS(a,b);c=c||{};for(f in c)g.style[f]=c[f];d&&(g.className=d),e=e||{};for(f in e)g.setAttribute(f,""+e[f]);return g},getAttribute:function(a,b){return null!=a.getAttribute?a.getAttribute(b):null},setAttribute:function(a,b,c){null!=a.setAttribute&&a.setAttribute(b,c)},setAttributes:function(a,b){for(var c in b)b.hasOwnProperty(c)&&a.setAttribute(c,b[c])},appendToRoot:function(a){document.body.appendChild(a)},getRenderModes:function(){return["svg"]},getClass:t,addClass:function(a,b){jsPlumb.each(a,function(a){u(a,b)})},hasClass:function(a,b){return a=jsPlumb.getElement(a),a.classList?a.classList.contains(b):-1!==t(a).indexOf(b)},removeClass:function(a,b){jsPlumb.each(a,function(a){u(a,null,b)})},toggleClass:function(a,b){jsPlumb.hasClass(a,b)?jsPlumb.removeClass(a,b):jsPlumb.addClass(a,b)},updateClasses:function(a,b,c){jsPlumb.each(a,function(a){u(a,b,c)})},setClass:function(a,b){null!=b&&jsPlumb.each(a,function(a){s(a,b,b.split(/\s+/))})},setPosition:function(a,b){a.style.left=b.left+"px",a.style.top=b.top+"px"},getPosition:function(a){var b=function(b){var c=a.style[b];return c?c.substring(0,c.length-2):0};return{left:b("left"),top:b("top")}},getStyle:function(a,b){return"undefined"!=typeof window.getComputedStyle?getComputedStyle(a,null).getPropertyValue(b):a.currentStyle[b]},getSelector:function(a,b){var c=null;return c=1===arguments.length?null!=a.nodeType?a:document.querySelectorAll(a):a.querySelectorAll(b)},getOffset:function(a,b,c){a=jsPlumb.getElement(a),c=c||this.getContainer();for(var d={left:a.offsetLeft,top:a.offsetTop},e=b||null!=c&&a!==c&&a.offsetParent!==c?a.offsetParent:null,f=function(a){null!=a&&a!==document.body&&(a.scrollTop>0||a.scrollLeft>0)&&(d.left-=a.scrollLeft,d.top-=a.scrollTop)}.bind(this);null!=e;)d.left+=e.offsetLeft,d.top+=e.offsetTop,f(e),e=b?e.offsetParent:e.offsetParent===c?null:e.offsetParent;if(null!=c&&!b&&(c.scrollTop>0||c.scrollLeft>0)){var g=null!=a.offsetParent?this.getStyle(a.offsetParent,"position"):"static",h=this.getStyle(a,"position");"absolute"!==h&&"fixed"!==h&&"absolute"!==g&&"fixed"!==g&&(d.left-=c.scrollLeft,d.top-=c.scrollTop)}return d},getPositionOnElement:function(a,b,c){var d="undefined"!=typeof b.getBoundingClientRect?b.getBoundingClientRect():{left:0,top:0,width:0,height:0},e=document.body,f=document.documentElement,g=window.pageYOffset||f.scrollTop||e.scrollTop,h=window.pageXOffset||f.scrollLeft||e.scrollLeft,i=f.clientTop||e.clientTop||0,j=f.clientLeft||e.clientLeft||0,k=0,l=0,m=d.top+g-i+k*c,n=d.left+h-j+l*c,o=jsPlumb.pageLocation(a),p=d.width||b.offsetWidth*c,q=d.height||b.offsetHeight*c,r=(o[0]-n)/p,s=(o[1]-m)/q;return[r,s]},getAbsolutePosition:function(a){var b=function(b){var c=a.style[b];return c?parseFloat(c.substring(0,c.length-2)):void 0};return[b("left"),b("top")]},setAbsolutePosition:function(a,b,c,d){c?this.animate(a,{left:"+="+(b[0]-c[0]),top:"+="+(b[1]-c[1])},d):(a.style.left=b[0]+"px",a.style.top=b[1]+"px")},getSize:function(a){return[a.offsetWidth,a.offsetHeight]},getWidth:function(a){return a.offsetWidth},getHeight:function(a){return a.offsetHeight},getRenderMode:function(){return"svg"},draggable:function(a,b){var d;return a=c.isArray(a)||null!=a.length&&!c.isString(a)?a:[a],Array.prototype.slice.call(a).forEach(function(a){d=this.info(a),d.el&&this._initDraggableIfNecessary(d.el,!0,b,d.id,!0)}.bind(this)),this},snapToGrid:function(a,b,c){var d=[],e=function(a){var e=this.info(a);if(null!=e.el&&e.el._katavorioDrag){var f=e.el._katavorioDrag.snap(b,c);this.revalidate(e.el),d.push([e.el,f])}}.bind(this);if(1===arguments.length||3===arguments.length)e(a,b,c);else{var f=this.getManagedElements();for(var g in f)e(g,arguments[0],arguments[1])}return d},initDraggable:function(a,b,c){g(this,c).draggable(a,b),a._jsPlumbDragOptions=b},destroyDraggable:function(a,b){g(this,b).destroyDraggable(a),delete a._jsPlumbDragOptions},unbindDraggable:function(a,b,c,d){g(this,d).destroyDraggable(a,b,c)},setDraggable:function(a,b){return jsPlumb.each(a,function(a){this.isDragSupported(a)&&(this._draggableStates[this.getAttribute(a,"id")]=b,this.setElementDraggable(a,b))}.bind(this))},_draggableStates:{},toggleDraggable:function(a){var b;return jsPlumb.each(a,function(a){var c=this.getAttribute(a,"id");return b=null==this._draggableStates[c]?!1:this._draggableStates[c],b=!b,this._draggableStates[c]=b,this.setDraggable(a,b),b}.bind(this)),b},_initDraggableIfNecessary:function(a,b,d,e,f){if(!jsPlumb.headless){var g=null==b?!1:b;if(g&&jsPlumb.isDragSupported(a,this)){var k=d||this.Defaults.DragOptions;if(k=jsPlumb.extend({},k),jsPlumb.isAlreadyDraggable(a,this))d.force&&this.initDraggable(a,k);else{var l=jsPlumb.dragEvents.drag,m=jsPlumb.dragEvents.stop,n=jsPlumb.dragEvents.start;this.manage(e,a),k[n]=c.wrap(k[n],h.bind(this)),k[l]=c.wrap(k[l],i.bind(this)),k[m]=c.wrap(k[m],j.bind(this));var o=this.getId(a);this._draggableStates[o]=!0;var p=this._draggableStates[o];k.disabled=null==p?!1:!p,this.initDraggable(a,k),this.getDragManager().register(a),f&&this.fire("elementDraggable",{el:a,options:k})}}}},animationSupported:!0,getElement:function(a){return null==a?null:(a="string"==typeof a?a:null!=a.length&&null==a.enctype?a[0]:a,"string"==typeof a?document.getElementById(a):a)},removeElement:function(a){g(this).elementRemoved(a),this.getEventManager().remove(a)},doAnimate:function(a,c,d){d=d||{};var e=this.getOffset(a),f=k(e,c),g=f[0]-e.left,h=f[1]-e.top,i=d.duration||250,j=15,l=i/j,m=j/i*g,n=j/i*h,o=0,p=setInterval(function(){b.setPosition(a,{left:e.left+m*(o+1),top:e.top+n*(o+1)}),null!=d.step&&d.step(o,Math.ceil(l)),o++,o>=l&&(window.clearInterval(p),null!=d.complete&&d.complete())},j)},destroyDroppable:function(a,b){g(this,b).destroyDroppable(a)},unbindDroppable:function(a,b,c,d){g(this,d).destroyDroppable(a,b,c)},droppable:function(a,b){a=c.isArray(a)||null!=a.length&&!c.isString(a)?a:[a];var d;return b=b||{},b.allowLoopback=!1,Array.prototype.slice.call(a).forEach(function(a){d=this.info(a),d.el&&this.initDroppable(d.el,b)}.bind(this)),this},initDroppable:function(a,b,c){g(this,c).droppable(a,b)},isAlreadyDraggable:function(a){return null!=a._katavorioDrag},isDragSupported:function(a,b){return!0},isDropSupported:function(a,b){return!0},isElementDraggable:function(a){return a=b.getElement(a),a._katavorioDrag&&a._katavorioDrag.isEnabled()},getDragObject:function(a){return a[0].drag.getDragElement()},getDragScope:function(a){return a._katavorioDrag&&a._katavorioDrag.scopes.join(" ")||""},getDropEvent:function(a){return a[0].e},getUIPosition:function(a,b){var c=a[0].el;if(null==c.offsetParent)return null;var d=a[0].finalPos||a[0].pos,e={left:d[0],top:d[1]};if(c._katavorioDrag&&c.offsetParent!==this.getContainer()){var f=this.getOffset(c.offsetParent);e.left+=f.left,e.top+=f.top}return e},setDragFilter:function(a,b,c){a._katavorioDrag&&a._katavorioDrag.setFilter(b,c)},setElementDraggable:function(a,c){a=b.getElement(a),a._katavorioDrag&&a._katavorioDrag.setEnabled(c)},setDragScope:function(a,b){a._katavorioDrag&&a._katavorioDrag.k.setDragScope(a,b)},setDropScope:function(a,b){a._katavorioDrop&&a._katavorioDrop.length>0&&a._katavorioDrop[0].k.setDropScope(a,b)},addToPosse:function(a,c){var d=Array.prototype.slice.call(arguments,1),e=g(this);b.each(a,function(a){a=[b.getElement(a)],a.push.apply(a,d),e.addToPosse.apply(e,a)})},setPosse:function(a,c){var d=Array.prototype.slice.call(arguments,1),e=g(this);b.each(a,function(a){a=[b.getElement(a)],a.push.apply(a,d),e.setPosse.apply(e,a)})},removeFromPosse:function(a,c){var d=Array.prototype.slice.call(arguments,1),e=g(this);b.each(a,function(a){a=[b.getElement(a)],a.push.apply(a,d),e.removeFromPosse.apply(e,a)})},removeFromAllPosses:function(a){var c=g(this);b.each(a,function(a){c.removeFromAllPosses(b.getElement(a))})},setPosseState:function(a,c,d){var e=g(this);b.each(a,function(a){e.setPosseState(b.getElement(a),c,d)})},dragEvents:{start:"start",stop:"stop",drag:"drag",step:"step",over:"over",out:"out",drop:"drop",complete:"complete",beforeStart:"beforeStart"},animEvents:{step:"step",complete:"complete"},stopDrag:function(a){a._katavorioDrag&&a._katavorioDrag.abort()},addToDragSelection:function(a){g(this).select(a)},removeFromDragSelection:function(a){g(this).deselect(a)},clearDragSelection:function(){g(this).deselectAll()},trigger:function(a,b,c,d){this.getEventManager().trigger(a,b,c,d)},doReset:function(){for(var a in this)0===a.indexOf("_katavorio_")&&this[a].reset()},getEventManager:function(){return f(this)},on:function(a,b,c){return this.getEventManager().on.apply(this,arguments),this},off:function(a,b,c){return this.getEventManager().off.apply(this,arguments),this}});var v=function(a){var b=function(){/complete|loaded|interactive/.test(document.readyState)&&"undefined"!=typeof document.body&&null!=document.body?a():setTimeout(b,9)};b()};v(b.init)}.call("undefined"!=typeof window?window:this);

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/buffer/node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/buffer/node_modules/isarray/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/buffer/node_modules/isarray/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/js-yaml/index.js":
/*!***************************************!*\
  !*** ./node_modules/js-yaml/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var yaml = __webpack_require__(/*! ./lib/js-yaml.js */ "./node_modules/js-yaml/lib/js-yaml.js");


module.exports = yaml;


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml.js":
/*!*********************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var loader = __webpack_require__(/*! ./js-yaml/loader */ "./node_modules/js-yaml/lib/js-yaml/loader.js");
var dumper = __webpack_require__(/*! ./js-yaml/dumper */ "./node_modules/js-yaml/lib/js-yaml/dumper.js");


function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}


module.exports.Type                = __webpack_require__(/*! ./js-yaml/type */ "./node_modules/js-yaml/lib/js-yaml/type.js");
module.exports.Schema              = __webpack_require__(/*! ./js-yaml/schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");
module.exports.FAILSAFE_SCHEMA     = __webpack_require__(/*! ./js-yaml/schema/failsafe */ "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js");
module.exports.JSON_SCHEMA         = __webpack_require__(/*! ./js-yaml/schema/json */ "./node_modules/js-yaml/lib/js-yaml/schema/json.js");
module.exports.CORE_SCHEMA         = __webpack_require__(/*! ./js-yaml/schema/core */ "./node_modules/js-yaml/lib/js-yaml/schema/core.js");
module.exports.DEFAULT_SAFE_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js");
module.exports.DEFAULT_FULL_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/default_full */ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js");
module.exports.load                = loader.load;
module.exports.loadAll             = loader.loadAll;
module.exports.safeLoad            = loader.safeLoad;
module.exports.safeLoadAll         = loader.safeLoadAll;
module.exports.dump                = dumper.dump;
module.exports.safeDump            = dumper.safeDump;
module.exports.YAMLException       = __webpack_require__(/*! ./js-yaml/exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js");

// Deprecated schema names from JS-YAML 2.0.x
module.exports.MINIMAL_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/failsafe */ "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js");
module.exports.SAFE_SCHEMA    = __webpack_require__(/*! ./js-yaml/schema/default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js");
module.exports.DEFAULT_SCHEMA = __webpack_require__(/*! ./js-yaml/schema/default_full */ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js");

// Deprecated functions from JS-YAML 1.x.x
module.exports.scan           = deprecated('scan');
module.exports.parse          = deprecated('parse');
module.exports.compose        = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/common.js":
/*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/common.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


module.exports.isNothing      = isNothing;
module.exports.isObject       = isObject;
module.exports.toArray        = toArray;
module.exports.repeat         = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend         = extend;


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/dumper.js":
/*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/dumper.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*eslint-disable no-use-before-define*/

var common              = __webpack_require__(/*! ./common */ "./node_modules/js-yaml/lib/js-yaml/common.js");
var YAMLException       = __webpack_require__(/*! ./exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js");
var DEFAULT_FULL_SCHEMA = __webpack_require__(/*! ./schema/default_full */ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js");
var DEFAULT_SAFE_SCHEMA = __webpack_require__(/*! ./schema/default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js");

var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}

function State(options) {
  this.schema        = options['schema'] || DEFAULT_FULL_SCHEMA;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== 0xFEFF /* BOM */)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// Simplified test for values allowed after the first character in plain style.
function isPlainSafe(c) {
  // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
  // where nb-char ::= c-printable - b-char - c-byte-order-mark.
  return isPrintable(c) && c !== 0xFEFF
    // - c-flow-indicator
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // - ":" - "#"
    && c !== CHAR_COLON
    && c !== CHAR_SHARP;
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  return isPrintable(c) && c !== 0xFEFF
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
  var i;
  var char;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(string.charCodeAt(0))
          && !isWhitespace(string.charCodeAt(string.length - 1));

  if (singleLineOnly) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char);
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char);
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    return plain && !testAmbiguousType(string)
      ? STYLE_PLAIN : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey) {
  state.dump = (function () {
    if (string.length === 0) {
      return "''";
    }
    if (!state.noCompatMode &&
        DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
      return "'" + string + "'";
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string, lineWidth) + '"';
      default:
        throw new YAMLException('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char, nextChar;
  var escapeSeq;

  for (var i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
    if (char >= 0xD800 && char <= 0xDBFF/* high surrogate */) {
      nextChar = string.charCodeAt(i + 1);
      if (nextChar >= 0xDC00 && nextChar <= 0xDFFF/* low surrogate */) {
        // Combine the surrogate pair and store it escaped.
        result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);
        // Advance index one extra since we already used that char here.
        i++; continue;
      }
    }
    escapeSeq = ESCAPE_SEQUENCES[char];
    result += !escapeSeq && isPrintable(char)
      ? string[i]
      : escapeSeq || encodeHex(char);
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level, object[index], false, false)) {
      if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    // Write only valid elements.
    if (writeNode(state, level + 1, object[index], true, true)) {
      if (!compact || index !== 0) {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = state.condenseFlow ? '"' : '';

    if (index !== 0) pairBuffer += ', ';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new YAMLException('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || index !== 0) {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      state.tag = explicit ? type.tag : '?';

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      var arrayLevel = (state.noArrayIndent && (level > 0)) ? level - 1 : level;
      if (block && (state.dump.length !== 0)) {
        writeBlockSequence(state, arrayLevel, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, arrayLevel, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey);
      }
    } else {
      if (state.skipInvalid) return false;
      throw new YAMLException('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      state.dump = '!<' + state.tag + '> ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

  return '';
}

function safeDump(input, options) {
  return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}

module.exports.dump     = dump;
module.exports.safeDump = safeDump;


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/exception.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/exception.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// YAML error class. http://stackoverflow.com/questions/8458984
//


function YAMLException(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;


YAMLException.prototype.toString = function toString(compact) {
  var result = this.name + ': ';

  result += this.reason || '(unknown reason)';

  if (!compact && this.mark) {
    result += ' ' + this.mark.toString();
  }

  return result;
};


module.exports = YAMLException;


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/loader.js":
/*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/loader.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*eslint-disable max-len,no-use-before-define*/

var common              = __webpack_require__(/*! ./common */ "./node_modules/js-yaml/lib/js-yaml/common.js");
var YAMLException       = __webpack_require__(/*! ./exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js");
var Mark                = __webpack_require__(/*! ./mark */ "./node_modules/js-yaml/lib/js-yaml/mark.js");
var DEFAULT_SAFE_SCHEMA = __webpack_require__(/*! ./schema/default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js");
var DEFAULT_FULL_SCHEMA = __webpack_require__(/*! ./schema/default_full */ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js");


var _hasOwnProperty = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || DEFAULT_FULL_SCHEMA;
  this.onWarning = options['onWarning'] || null;
  this.legacy    = options['legacy']    || false;
  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  return new YAMLException(
    message,
    new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty.call(overridableKeys, keyNode) &&
        _hasOwnProperty.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }
    _result[keyNode] = valueNode;
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = {},
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _pos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = {},
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.
    _pos = state.position;

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }

    } else {
      break; // Reading is done. Go to the epilogue.
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if (state.lineIndent > nodeIndent && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!state.anchorMap.hasOwnProperty(alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag !== null && state.tag !== '!') {
    if (state.tag === '?') {
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
        type = state.implicitTypes[typeIndex];

        // Implicit resolving is not allowed for non-scalar types, and '?'
        // non-specific tag is only assigned to plain scalars. So, it isn't
        // needed to check for 'kind' conformity.

        if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
          state.result = type.construct(state.result);
          state.tag = type.tag;
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];

      if (state.result !== null && type.kind !== state.kind) {
        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
      }

      if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
      } else {
        state.result = type.construct(state.result);
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State(input, options);

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll(input, iterator, options) {
  var documents = loadDocuments(input, options), index, length;

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new YAMLException('expected a single document in the stream, but found more');
}


function safeLoadAll(input, output, options) {
  if (typeof output === 'function') {
    loadAll(input, output, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
  } else {
    return loadAll(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
  }
}


function safeLoad(input, options) {
  return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}


module.exports.loadAll     = loadAll;
module.exports.load        = load;
module.exports.safeLoadAll = safeLoadAll;
module.exports.safeLoad    = safeLoad;


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/mark.js":
/*!**************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/mark.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var common = __webpack_require__(/*! ./common */ "./node_modules/js-yaml/lib/js-yaml/common.js");


function Mark(name, buffer, position, line, column) {
  this.name     = name;
  this.buffer   = buffer;
  this.position = position;
  this.line     = line;
  this.column   = column;
}


Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
  var head, start, tail, end, snippet;

  if (!this.buffer) return null;

  indent = indent || 4;
  maxLength = maxLength || 75;

  head = '';
  start = this.position;

  while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
    start -= 1;
    if (this.position - start > (maxLength / 2 - 1)) {
      head = ' ... ';
      start += 5;
      break;
    }
  }

  tail = '';
  end = this.position;

  while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
    end += 1;
    if (end - this.position > (maxLength / 2 - 1)) {
      tail = ' ... ';
      end -= 5;
      break;
    }
  }

  snippet = this.buffer.slice(start, end);

  return common.repeat(' ', indent) + head + snippet + tail + '\n' +
         common.repeat(' ', indent + this.position - start + head.length) + '^';
};


Mark.prototype.toString = function toString(compact) {
  var snippet, where = '';

  if (this.name) {
    where += 'in "' + this.name + '" ';
  }

  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

  if (!compact) {
    snippet = this.getSnippet();

    if (snippet) {
      where += ':\n' + snippet;
    }
  }

  return where;
};


module.exports = Mark;


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema.js":
/*!****************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*eslint-disable max-len*/

var common        = __webpack_require__(/*! ./common */ "./node_modules/js-yaml/lib/js-yaml/common.js");
var YAMLException = __webpack_require__(/*! ./exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js");
var Type          = __webpack_require__(/*! ./type */ "./node_modules/js-yaml/lib/js-yaml/type.js");


function compileList(schema, name, result) {
  var exclude = [];

  schema.include.forEach(function (includedSchema) {
    result = compileList(includedSchema, name, result);
  });

  schema[name].forEach(function (currentType) {
    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
        exclude.push(previousIndex);
      }
    });

    result.push(currentType);
  });

  return result.filter(function (type, index) {
    return exclude.indexOf(index) === -1;
  });
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
      }, index, length;

  function collectType(type) {
    result[type.kind][type.tag] = result['fallback'][type.tag] = type;
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema(definition) {
  this.include  = definition.include  || [];
  this.implicit = definition.implicit || [];
  this.explicit = definition.explicit || [];

  this.implicit.forEach(function (type) {
    if (type.loadKind && type.loadKind !== 'scalar') {
      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }
  });

  this.compiledImplicit = compileList(this, 'implicit', []);
  this.compiledExplicit = compileList(this, 'explicit', []);
  this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
}


Schema.DEFAULT = null;


Schema.create = function createSchema() {
  var schemas, types;

  switch (arguments.length) {
    case 1:
      schemas = Schema.DEFAULT;
      types = arguments[0];
      break;

    case 2:
      schemas = arguments[0];
      types = arguments[1];
      break;

    default:
      throw new YAMLException('Wrong number of arguments for Schema.create function');
  }

  schemas = common.toArray(schemas);
  types = common.toArray(types);

  if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
    throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
  }

  if (!types.every(function (type) { return type instanceof Type; })) {
    throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
  }

  return new Schema({
    include: schemas,
    explicit: types
  });
};


module.exports = Schema;


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/core.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/core.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.





var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");


module.exports = new Schema({
  include: [
    __webpack_require__(/*! ./json */ "./node_modules/js-yaml/lib/js-yaml/schema/json.js")
  ]
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/default_full.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.





var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");


module.exports = Schema.DEFAULT = new Schema({
  include: [
    __webpack_require__(/*! ./default_safe */ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js")
  ],
  explicit: [
    __webpack_require__(/*! ../type/js/undefined */ "./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js"),
    __webpack_require__(/*! ../type/js/regexp */ "./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js"),
    __webpack_require__(/*! ../type/js/function */ "./node_modules/js-yaml/lib/js-yaml/type/js/function.js")
  ]
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)





var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");


module.exports = new Schema({
  include: [
    __webpack_require__(/*! ./core */ "./node_modules/js-yaml/lib/js-yaml/schema/core.js")
  ],
  implicit: [
    __webpack_require__(/*! ../type/timestamp */ "./node_modules/js-yaml/lib/js-yaml/type/timestamp.js"),
    __webpack_require__(/*! ../type/merge */ "./node_modules/js-yaml/lib/js-yaml/type/merge.js")
  ],
  explicit: [
    __webpack_require__(/*! ../type/binary */ "./node_modules/js-yaml/lib/js-yaml/type/binary.js"),
    __webpack_require__(/*! ../type/omap */ "./node_modules/js-yaml/lib/js-yaml/type/omap.js"),
    __webpack_require__(/*! ../type/pairs */ "./node_modules/js-yaml/lib/js-yaml/type/pairs.js"),
    __webpack_require__(/*! ../type/set */ "./node_modules/js-yaml/lib/js-yaml/type/set.js")
  ]
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js":
/*!*************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346





var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");


module.exports = new Schema({
  explicit: [
    __webpack_require__(/*! ../type/str */ "./node_modules/js-yaml/lib/js-yaml/type/str.js"),
    __webpack_require__(/*! ../type/seq */ "./node_modules/js-yaml/lib/js-yaml/type/seq.js"),
    __webpack_require__(/*! ../type/map */ "./node_modules/js-yaml/lib/js-yaml/type/map.js")
  ]
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/json.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/schema/json.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.





var Schema = __webpack_require__(/*! ../schema */ "./node_modules/js-yaml/lib/js-yaml/schema.js");


module.exports = new Schema({
  include: [
    __webpack_require__(/*! ./failsafe */ "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js")
  ],
  implicit: [
    __webpack_require__(/*! ../type/null */ "./node_modules/js-yaml/lib/js-yaml/type/null.js"),
    __webpack_require__(/*! ../type/bool */ "./node_modules/js-yaml/lib/js-yaml/type/bool.js"),
    __webpack_require__(/*! ../type/int */ "./node_modules/js-yaml/lib/js-yaml/type/int.js"),
    __webpack_require__(/*! ../type/float */ "./node_modules/js-yaml/lib/js-yaml/type/float.js")
  ]
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type.js":
/*!**************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var YAMLException = __webpack_require__(/*! ./exception */ "./node_modules/js-yaml/lib/js-yaml/exception.js");

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.tag          = tag;
  this.kind         = options['kind']         || null;
  this.resolve      = options['resolve']      || function () { return true; };
  this.construct    = options['construct']    || function (data) { return data; };
  this.instanceOf   = options['instanceOf']   || null;
  this.predicate    = options['predicate']    || null;
  this.represent    = options['represent']    || null;
  this.defaultStyle = options['defaultStyle'] || null;
  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

module.exports = Type;


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/binary.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/binary.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;

/*eslint-disable no-bitwise*/

var NodeBuffer;

try {
  // A trick for browserified version, to not include `Buffer` shim
  var _require = require;
  NodeBuffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js").Buffer;
} catch (__) {}

var Type       = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");


// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  // Wrap into Buffer for NodeJS and leave Array for browser
  if (NodeBuffer) {
    // Support node 6.+ Buffer API when available
    return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
  }

  return result;
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(object) {
  return NodeBuffer && NodeBuffer.isBuffer(object);
}

module.exports = new Type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/bool.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/bool.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

module.exports = new Type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/float.js":
/*!********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__(/*! ../common */ "./node_modules/js-yaml/lib/js-yaml/common.js");
var Type   = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // 20:59
  '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign, base, digits;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;
  digits = [];

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;

  } else if (value.indexOf(':') >= 0) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseFloat(v, 10));
    });

    value = 0.0;
    base = 1;

    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });

    return sign * value;

  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/int.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__(/*! ../common */ "./node_modules/js-yaml/lib/js-yaml/common.js");
var Type   = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }

    // base 8
    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_') continue;
      if (!isOctCode(data.charCodeAt(index))) return false;
      hasDigits = true;
    }
    return hasDigits && ch !== '_';
  }

  // base 10 (except 0) or base 60

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (ch === ':') break;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  // if !base60 - done;
  if (ch !== ':') return true;

  // base60 almost not used, no needs to optimize
  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch, base, digits = [];

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value, 16);
    return sign * parseInt(value, 8);
  }

  if (value.indexOf(':') !== -1) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseInt(v, 10));
    });

    value = 0;
    base = 1;

    digits.forEach(function (d) {
      value += (d * base);
      base *= 60;
    });

    return sign * value;

  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0'  + obj.toString(8) : '-0'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/js/function.js":
/*!**************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/js/function.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;

var esprima;

// Browserified version does not have esprima
//
// 1. For node.js just require module as deps
// 2. For browser try to require mudule via external AMD system.
//    If not found - try to fallback to window.esprima. If not
//    found too - then fail to parse.
//
try {
  // workaround to exclude package from browserify list.
  var _require = require;
  esprima = __webpack_require__(/*! esprima */ "./node_modules/js-yaml/node_modules/esprima/dist/esprima.js");
} catch (_) {
  /*global window */
  if (typeof window !== 'undefined') esprima = window.esprima;
}

var Type = __webpack_require__(/*! ../../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveJavascriptFunction(data) {
  if (data === null) return false;

  try {
    var source = '(' + data + ')',
        ast    = esprima.parse(source, { range: true });

    if (ast.type                    !== 'Program'             ||
        ast.body.length             !== 1                     ||
        ast.body[0].type            !== 'ExpressionStatement' ||
        (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
          ast.body[0].expression.type !== 'FunctionExpression')) {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

function constructJavascriptFunction(data) {
  /*jslint evil:true*/

  var source = '(' + data + ')',
      ast    = esprima.parse(source, { range: true }),
      params = [],
      body;

  if (ast.type                    !== 'Program'             ||
      ast.body.length             !== 1                     ||
      ast.body[0].type            !== 'ExpressionStatement' ||
      (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
        ast.body[0].expression.type !== 'FunctionExpression')) {
    throw new Error('Failed to resolve function');
  }

  ast.body[0].expression.params.forEach(function (param) {
    params.push(param.name);
  });

  body = ast.body[0].expression.body.range;

  // Esprima's ranges include the first '{' and the last '}' characters on
  // function expressions. So cut them out.
  if (ast.body[0].expression.body.type === 'BlockStatement') {
    /*eslint-disable no-new-func*/
    return new Function(params, source.slice(body[0] + 1, body[1] - 1));
  }
  // ES6 arrow functions can omit the BlockStatement. In that case, just return
  // the body.
  /*eslint-disable no-new-func*/
  return new Function(params, 'return ' + source.slice(body[0], body[1]));
}

function representJavascriptFunction(object /*, style*/) {
  return object.toString();
}

function isFunction(object) {
  return Object.prototype.toString.call(object) === '[object Function]';
}

module.exports = new Type('tag:yaml.org,2002:js/function', {
  kind: 'scalar',
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js":
/*!************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveJavascriptRegExp(data) {
  if (data === null) return false;
  if (data.length === 0) return false;

  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // if regexp starts with '/' it can have modifiers and must be properly closed
  // `/foo/gim` - modifiers tail can be maximum 3 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];

    if (modifiers.length > 3) return false;
    // if expression starts with /, is should be properly terminated
    if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
  }

  return true;
}

function constructJavascriptRegExp(data) {
  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // `/foo/gim` - tail can be maximum 4 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];
    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
  }

  return new RegExp(regexp, modifiers);
}

function representJavascriptRegExp(object /*, style*/) {
  var result = '/' + object.source + '/';

  if (object.global) result += 'g';
  if (object.multiline) result += 'm';
  if (object.ignoreCase) result += 'i';

  return result;
}

function isRegExp(object) {
  return Object.prototype.toString.call(object) === '[object RegExp]';
}

module.exports = new Type('tag:yaml.org,2002:js/regexp', {
  kind: 'scalar',
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js":
/*!***************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveJavascriptUndefined() {
  return true;
}

function constructJavascriptUndefined() {
  /*eslint-disable no-undefined*/
  return undefined;
}

function representJavascriptUndefined() {
  return '';
}

function isUndefined(object) {
  return typeof object === 'undefined';
}

module.exports = new Type('tag:yaml.org,2002:js/undefined', {
  kind: 'scalar',
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/map.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

module.exports = new Type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/merge.js":
/*!********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/merge.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/null.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/null.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

module.exports = new Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; }
  },
  defaultStyle: 'lowercase'
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/omap.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/omap.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/pairs.js":
/*!********************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/pairs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var _toString = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/seq.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/seq.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

module.exports = new Type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/set.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

module.exports = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/str.js":
/*!******************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/str.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

module.exports = new Type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});


/***/ }),

/***/ "./node_modules/js-yaml/lib/js-yaml/type/timestamp.js":
/*!************************************************************!*\
  !*** ./node_modules/js-yaml/lib/js-yaml/type/timestamp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__(/*! ../type */ "./node_modules/js-yaml/lib/js-yaml/type.js");

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});


/***/ }),

/***/ "./node_modules/js-yaml/node_modules/esprima/dist/esprima.js":
/*!*******************************************************************!*\
  !*** ./node_modules/js-yaml/node_modules/esprima/dist/esprima.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
/* istanbul ignore next */
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/* istanbul ignore if */
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	  Copyright JS Foundation and other contributors, https://js.foundation/

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	Object.defineProperty(exports, "__esModule", { value: true });
	var comment_handler_1 = __webpack_require__(1);
	var jsx_parser_1 = __webpack_require__(3);
	var parser_1 = __webpack_require__(8);
	var tokenizer_1 = __webpack_require__(15);
	function parse(code, options, delegate) {
	    var commentHandler = null;
	    var proxyDelegate = function (node, metadata) {
	        if (delegate) {
	            delegate(node, metadata);
	        }
	        if (commentHandler) {
	            commentHandler.visit(node, metadata);
	        }
	    };
	    var parserDelegate = (typeof delegate === 'function') ? proxyDelegate : null;
	    var collectComment = false;
	    if (options) {
	        collectComment = (typeof options.comment === 'boolean' && options.comment);
	        var attachComment = (typeof options.attachComment === 'boolean' && options.attachComment);
	        if (collectComment || attachComment) {
	            commentHandler = new comment_handler_1.CommentHandler();
	            commentHandler.attach = attachComment;
	            options.comment = true;
	            parserDelegate = proxyDelegate;
	        }
	    }
	    var isModule = false;
	    if (options && typeof options.sourceType === 'string') {
	        isModule = (options.sourceType === 'module');
	    }
	    var parser;
	    if (options && typeof options.jsx === 'boolean' && options.jsx) {
	        parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
	    }
	    else {
	        parser = new parser_1.Parser(code, options, parserDelegate);
	    }
	    var program = isModule ? parser.parseModule() : parser.parseScript();
	    var ast = program;
	    if (collectComment && commentHandler) {
	        ast.comments = commentHandler.comments;
	    }
	    if (parser.config.tokens) {
	        ast.tokens = parser.tokens;
	    }
	    if (parser.config.tolerant) {
	        ast.errors = parser.errorHandler.errors;
	    }
	    return ast;
	}
	exports.parse = parse;
	function parseModule(code, options, delegate) {
	    var parsingOptions = options || {};
	    parsingOptions.sourceType = 'module';
	    return parse(code, parsingOptions, delegate);
	}
	exports.parseModule = parseModule;
	function parseScript(code, options, delegate) {
	    var parsingOptions = options || {};
	    parsingOptions.sourceType = 'script';
	    return parse(code, parsingOptions, delegate);
	}
	exports.parseScript = parseScript;
	function tokenize(code, options, delegate) {
	    var tokenizer = new tokenizer_1.Tokenizer(code, options);
	    var tokens;
	    tokens = [];
	    try {
	        while (true) {
	            var token = tokenizer.getNextToken();
	            if (!token) {
	                break;
	            }
	            if (delegate) {
	                token = delegate(token);
	            }
	            tokens.push(token);
	        }
	    }
	    catch (e) {
	        tokenizer.errorHandler.tolerate(e);
	    }
	    if (tokenizer.errorHandler.tolerant) {
	        tokens.errors = tokenizer.errors();
	    }
	    return tokens;
	}
	exports.tokenize = tokenize;
	var syntax_1 = __webpack_require__(2);
	exports.Syntax = syntax_1.Syntax;
	// Sync with *.json manifests.
	exports.version = '4.0.1';


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var syntax_1 = __webpack_require__(2);
	var CommentHandler = (function () {
	    function CommentHandler() {
	        this.attach = false;
	        this.comments = [];
	        this.stack = [];
	        this.leading = [];
	        this.trailing = [];
	    }
	    CommentHandler.prototype.insertInnerComments = function (node, metadata) {
	        //  innnerComments for properties empty block
	        //  `function a() {/** comments **\/}`
	        if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
	            var innerComments = [];
	            for (var i = this.leading.length - 1; i >= 0; --i) {
	                var entry = this.leading[i];
	                if (metadata.end.offset >= entry.start) {
	                    innerComments.unshift(entry.comment);
	                    this.leading.splice(i, 1);
	                    this.trailing.splice(i, 1);
	                }
	            }
	            if (innerComments.length) {
	                node.innerComments = innerComments;
	            }
	        }
	    };
	    CommentHandler.prototype.findTrailingComments = function (metadata) {
	        var trailingComments = [];
	        if (this.trailing.length > 0) {
	            for (var i = this.trailing.length - 1; i >= 0; --i) {
	                var entry_1 = this.trailing[i];
	                if (entry_1.start >= metadata.end.offset) {
	                    trailingComments.unshift(entry_1.comment);
	                }
	            }
	            this.trailing.length = 0;
	            return trailingComments;
	        }
	        var entry = this.stack[this.stack.length - 1];
	        if (entry && entry.node.trailingComments) {
	            var firstComment = entry.node.trailingComments[0];
	            if (firstComment && firstComment.range[0] >= metadata.end.offset) {
	                trailingComments = entry.node.trailingComments;
	                delete entry.node.trailingComments;
	            }
	        }
	        return trailingComments;
	    };
	    CommentHandler.prototype.findLeadingComments = function (metadata) {
	        var leadingComments = [];
	        var target;
	        while (this.stack.length > 0) {
	            var entry = this.stack[this.stack.length - 1];
	            if (entry && entry.start >= metadata.start.offset) {
	                target = entry.node;
	                this.stack.pop();
	            }
	            else {
	                break;
	            }
	        }
	        if (target) {
	            var count = target.leadingComments ? target.leadingComments.length : 0;
	            for (var i = count - 1; i >= 0; --i) {
	                var comment = target.leadingComments[i];
	                if (comment.range[1] <= metadata.start.offset) {
	                    leadingComments.unshift(comment);
	                    target.leadingComments.splice(i, 1);
	                }
	            }
	            if (target.leadingComments && target.leadingComments.length === 0) {
	                delete target.leadingComments;
	            }
	            return leadingComments;
	        }
	        for (var i = this.leading.length - 1; i >= 0; --i) {
	            var entry = this.leading[i];
	            if (entry.start <= metadata.start.offset) {
	                leadingComments.unshift(entry.comment);
	                this.leading.splice(i, 1);
	            }
	        }
	        return leadingComments;
	    };
	    CommentHandler.prototype.visitNode = function (node, metadata) {
	        if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
	            return;
	        }
	        this.insertInnerComments(node, metadata);
	        var trailingComments = this.findTrailingComments(metadata);
	        var leadingComments = this.findLeadingComments(metadata);
	        if (leadingComments.length > 0) {
	            node.leadingComments = leadingComments;
	        }
	        if (trailingComments.length > 0) {
	            node.trailingComments = trailingComments;
	        }
	        this.stack.push({
	            node: node,
	            start: metadata.start.offset
	        });
	    };
	    CommentHandler.prototype.visitComment = function (node, metadata) {
	        var type = (node.type[0] === 'L') ? 'Line' : 'Block';
	        var comment = {
	            type: type,
	            value: node.value
	        };
	        if (node.range) {
	            comment.range = node.range;
	        }
	        if (node.loc) {
	            comment.loc = node.loc;
	        }
	        this.comments.push(comment);
	        if (this.attach) {
	            var entry = {
	                comment: {
	                    type: type,
	                    value: node.value,
	                    range: [metadata.start.offset, metadata.end.offset]
	                },
	                start: metadata.start.offset
	            };
	            if (node.loc) {
	                entry.comment.loc = node.loc;
	            }
	            node.type = type;
	            this.leading.push(entry);
	            this.trailing.push(entry);
	        }
	    };
	    CommentHandler.prototype.visit = function (node, metadata) {
	        if (node.type === 'LineComment') {
	            this.visitComment(node, metadata);
	        }
	        else if (node.type === 'BlockComment') {
	            this.visitComment(node, metadata);
	        }
	        else if (this.attach) {
	            this.visitNode(node, metadata);
	        }
	    };
	    return CommentHandler;
	}());
	exports.CommentHandler = CommentHandler;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Syntax = {
	    AssignmentExpression: 'AssignmentExpression',
	    AssignmentPattern: 'AssignmentPattern',
	    ArrayExpression: 'ArrayExpression',
	    ArrayPattern: 'ArrayPattern',
	    ArrowFunctionExpression: 'ArrowFunctionExpression',
	    AwaitExpression: 'AwaitExpression',
	    BlockStatement: 'BlockStatement',
	    BinaryExpression: 'BinaryExpression',
	    BreakStatement: 'BreakStatement',
	    CallExpression: 'CallExpression',
	    CatchClause: 'CatchClause',
	    ClassBody: 'ClassBody',
	    ClassDeclaration: 'ClassDeclaration',
	    ClassExpression: 'ClassExpression',
	    ConditionalExpression: 'ConditionalExpression',
	    ContinueStatement: 'ContinueStatement',
	    DoWhileStatement: 'DoWhileStatement',
	    DebuggerStatement: 'DebuggerStatement',
	    EmptyStatement: 'EmptyStatement',
	    ExportAllDeclaration: 'ExportAllDeclaration',
	    ExportDefaultDeclaration: 'ExportDefaultDeclaration',
	    ExportNamedDeclaration: 'ExportNamedDeclaration',
	    ExportSpecifier: 'ExportSpecifier',
	    ExpressionStatement: 'ExpressionStatement',
	    ForStatement: 'ForStatement',
	    ForOfStatement: 'ForOfStatement',
	    ForInStatement: 'ForInStatement',
	    FunctionDeclaration: 'FunctionDeclaration',
	    FunctionExpression: 'FunctionExpression',
	    Identifier: 'Identifier',
	    IfStatement: 'IfStatement',
	    ImportDeclaration: 'ImportDeclaration',
	    ImportDefaultSpecifier: 'ImportDefaultSpecifier',
	    ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
	    ImportSpecifier: 'ImportSpecifier',
	    Literal: 'Literal',
	    LabeledStatement: 'LabeledStatement',
	    LogicalExpression: 'LogicalExpression',
	    MemberExpression: 'MemberExpression',
	    MetaProperty: 'MetaProperty',
	    MethodDefinition: 'MethodDefinition',
	    NewExpression: 'NewExpression',
	    ObjectExpression: 'ObjectExpression',
	    ObjectPattern: 'ObjectPattern',
	    Program: 'Program',
	    Property: 'Property',
	    RestElement: 'RestElement',
	    ReturnStatement: 'ReturnStatement',
	    SequenceExpression: 'SequenceExpression',
	    SpreadElement: 'SpreadElement',
	    Super: 'Super',
	    SwitchCase: 'SwitchCase',
	    SwitchStatement: 'SwitchStatement',
	    TaggedTemplateExpression: 'TaggedTemplateExpression',
	    TemplateElement: 'TemplateElement',
	    TemplateLiteral: 'TemplateLiteral',
	    ThisExpression: 'ThisExpression',
	    ThrowStatement: 'ThrowStatement',
	    TryStatement: 'TryStatement',
	    UnaryExpression: 'UnaryExpression',
	    UpdateExpression: 'UpdateExpression',
	    VariableDeclaration: 'VariableDeclaration',
	    VariableDeclarator: 'VariableDeclarator',
	    WhileStatement: 'WhileStatement',
	    WithStatement: 'WithStatement',
	    YieldExpression: 'YieldExpression'
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
/* istanbul ignore next */
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var character_1 = __webpack_require__(4);
	var JSXNode = __webpack_require__(5);
	var jsx_syntax_1 = __webpack_require__(6);
	var Node = __webpack_require__(7);
	var parser_1 = __webpack_require__(8);
	var token_1 = __webpack_require__(13);
	var xhtml_entities_1 = __webpack_require__(14);
	token_1.TokenName[100 /* Identifier */] = 'JSXIdentifier';
	token_1.TokenName[101 /* Text */] = 'JSXText';
	// Fully qualified element name, e.g. <svg:path> returns "svg:path"
	function getQualifiedElementName(elementName) {
	    var qualifiedName;
	    switch (elementName.type) {
	        case jsx_syntax_1.JSXSyntax.JSXIdentifier:
	            var id = elementName;
	            qualifiedName = id.name;
	            break;
	        case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
	            var ns = elementName;
	            qualifiedName = getQualifiedElementName(ns.namespace) + ':' +
	                getQualifiedElementName(ns.name);
	            break;
	        case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
	            var expr = elementName;
	            qualifiedName = getQualifiedElementName(expr.object) + '.' +
	                getQualifiedElementName(expr.property);
	            break;
	        /* istanbul ignore next */
	        default:
	            break;
	    }
	    return qualifiedName;
	}
	var JSXParser = (function (_super) {
	    __extends(JSXParser, _super);
	    function JSXParser(code, options, delegate) {
	        return _super.call(this, code, options, delegate) || this;
	    }
	    JSXParser.prototype.parsePrimaryExpression = function () {
	        return this.match('<') ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
	    };
	    JSXParser.prototype.startJSX = function () {
	        // Unwind the scanner before the lookahead token.
	        this.scanner.index = this.startMarker.index;
	        this.scanner.lineNumber = this.startMarker.line;
	        this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
	    };
	    JSXParser.prototype.finishJSX = function () {
	        // Prime the next lookahead.
	        this.nextToken();
	    };
	    JSXParser.prototype.reenterJSX = function () {
	        this.startJSX();
	        this.expectJSX('}');
	        // Pop the closing '}' added from the lookahead.
	        if (this.config.tokens) {
	            this.tokens.pop();
	        }
	    };
	    JSXParser.prototype.createJSXNode = function () {
	        this.collectComments();
	        return {
	            index: this.scanner.index,
	            line: this.scanner.lineNumber,
	            column: this.scanner.index - this.scanner.lineStart
	        };
	    };
	    JSXParser.prototype.createJSXChildNode = function () {
	        return {
	            index: this.scanner.index,
	            line: this.scanner.lineNumber,
	            column: this.scanner.index - this.scanner.lineStart
	        };
	    };
	    JSXParser.prototype.scanXHTMLEntity = function (quote) {
	        var result = '&';
	        var valid = true;
	        var terminated = false;
	        var numeric = false;
	        var hex = false;
	        while (!this.scanner.eof() && valid && !terminated) {
	            var ch = this.scanner.source[this.scanner.index];
	            if (ch === quote) {
	                break;
	            }
	            terminated = (ch === ';');
	            result += ch;
	            ++this.scanner.index;
	            if (!terminated) {
	                switch (result.length) {
	                    case 2:
	                        // e.g. '&#123;'
	                        numeric = (ch === '#');
	                        break;
	                    case 3:
	                        if (numeric) {
	                            // e.g. '&#x41;'
	                            hex = (ch === 'x');
	                            valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
	                            numeric = numeric && !hex;
	                        }
	                        break;
	                    default:
	                        valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
	                        valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
	                        break;
	                }
	            }
	        }
	        if (valid && terminated && result.length > 2) {
	            // e.g. '&#x41;' becomes just '#x41'
	            var str = result.substr(1, result.length - 2);
	            if (numeric && str.length > 1) {
	                result = String.fromCharCode(parseInt(str.substr(1), 10));
	            }
	            else if (hex && str.length > 2) {
	                result = String.fromCharCode(parseInt('0' + str.substr(1), 16));
	            }
	            else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
	                result = xhtml_entities_1.XHTMLEntities[str];
	            }
	        }
	        return result;
	    };
	    // Scan the next JSX token. This replaces Scanner#lex when in JSX mode.
	    JSXParser.prototype.lexJSX = function () {
	        var cp = this.scanner.source.charCodeAt(this.scanner.index);
	        // < > / : = { }
	        if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
	            var value = this.scanner.source[this.scanner.index++];
	            return {
	                type: 7 /* Punctuator */,
	                value: value,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: this.scanner.index - 1,
	                end: this.scanner.index
	            };
	        }
	        // " '
	        if (cp === 34 || cp === 39) {
	            var start = this.scanner.index;
	            var quote = this.scanner.source[this.scanner.index++];
	            var str = '';
	            while (!this.scanner.eof()) {
	                var ch = this.scanner.source[this.scanner.index++];
	                if (ch === quote) {
	                    break;
	                }
	                else if (ch === '&') {
	                    str += this.scanXHTMLEntity(quote);
	                }
	                else {
	                    str += ch;
	                }
	            }
	            return {
	                type: 8 /* StringLiteral */,
	                value: str,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: start,
	                end: this.scanner.index
	            };
	        }
	        // ... or .
	        if (cp === 46) {
	            var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
	            var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
	            var value = (n1 === 46 && n2 === 46) ? '...' : '.';
	            var start = this.scanner.index;
	            this.scanner.index += value.length;
	            return {
	                type: 7 /* Punctuator */,
	                value: value,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: start,
	                end: this.scanner.index
	            };
	        }
	        // `
	        if (cp === 96) {
	            // Only placeholder, since it will be rescanned as a real assignment expression.
	            return {
	                type: 10 /* Template */,
	                value: '',
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: this.scanner.index,
	                end: this.scanner.index
	            };
	        }
	        // Identifer can not contain backslash (char code 92).
	        if (character_1.Character.isIdentifierStart(cp) && (cp !== 92)) {
	            var start = this.scanner.index;
	            ++this.scanner.index;
	            while (!this.scanner.eof()) {
	                var ch = this.scanner.source.charCodeAt(this.scanner.index);
	                if (character_1.Character.isIdentifierPart(ch) && (ch !== 92)) {
	                    ++this.scanner.index;
	                }
	                else if (ch === 45) {
	                    // Hyphen (char code 45) can be part of an identifier.
	                    ++this.scanner.index;
	                }
	                else {
	                    break;
	                }
	            }
	            var id = this.scanner.source.slice(start, this.scanner.index);
	            return {
	                type: 100 /* Identifier */,
	                value: id,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: start,
	                end: this.scanner.index
	            };
	        }
	        return this.scanner.lex();
	    };
	    JSXParser.prototype.nextJSXToken = function () {
	        this.collectComments();
	        this.startMarker.index = this.scanner.index;
	        this.startMarker.line = this.scanner.lineNumber;
	        this.startMarker.column = this.scanner.index - this.scanner.lineStart;
	        var token = this.lexJSX();
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.line = this.scanner.lineNumber;
	        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
	        if (this.config.tokens) {
	            this.tokens.push(this.convertToken(token));
	        }
	        return token;
	    };
	    JSXParser.prototype.nextJSXText = function () {
	        this.startMarker.index = this.scanner.index;
	        this.startMarker.line = this.scanner.lineNumber;
	        this.startMarker.column = this.scanner.index - this.scanner.lineStart;
	        var start = this.scanner.index;
	        var text = '';
	        while (!this.scanner.eof()) {
	            var ch = this.scanner.source[this.scanner.index];
	            if (ch === '{' || ch === '<') {
	                break;
	            }
	            ++this.scanner.index;
	            text += ch;
	            if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                ++this.scanner.lineNumber;
	                if (ch === '\r' && this.scanner.source[this.scanner.index] === '\n') {
	                    ++this.scanner.index;
	                }
	                this.scanner.lineStart = this.scanner.index;
	            }
	        }
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.line = this.scanner.lineNumber;
	        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
	        var token = {
	            type: 101 /* Text */,
	            value: text,
	            lineNumber: this.scanner.lineNumber,
	            lineStart: this.scanner.lineStart,
	            start: start,
	            end: this.scanner.index
	        };
	        if ((text.length > 0) && this.config.tokens) {
	            this.tokens.push(this.convertToken(token));
	        }
	        return token;
	    };
	    JSXParser.prototype.peekJSXToken = function () {
	        var state = this.scanner.saveState();
	        this.scanner.scanComments();
	        var next = this.lexJSX();
	        this.scanner.restoreState(state);
	        return next;
	    };
	    // Expect the next JSX token to match the specified punctuator.
	    // If not, an exception will be thrown.
	    JSXParser.prototype.expectJSX = function (value) {
	        var token = this.nextJSXToken();
	        if (token.type !== 7 /* Punctuator */ || token.value !== value) {
	            this.throwUnexpectedToken(token);
	        }
	    };
	    // Return true if the next JSX token matches the specified punctuator.
	    JSXParser.prototype.matchJSX = function (value) {
	        var next = this.peekJSXToken();
	        return next.type === 7 /* Punctuator */ && next.value === value;
	    };
	    JSXParser.prototype.parseJSXIdentifier = function () {
	        var node = this.createJSXNode();
	        var token = this.nextJSXToken();
	        if (token.type !== 100 /* Identifier */) {
	            this.throwUnexpectedToken(token);
	        }
	        return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
	    };
	    JSXParser.prototype.parseJSXElementName = function () {
	        var node = this.createJSXNode();
	        var elementName = this.parseJSXIdentifier();
	        if (this.matchJSX(':')) {
	            var namespace = elementName;
	            this.expectJSX(':');
	            var name_1 = this.parseJSXIdentifier();
	            elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
	        }
	        else if (this.matchJSX('.')) {
	            while (this.matchJSX('.')) {
	                var object = elementName;
	                this.expectJSX('.');
	                var property = this.parseJSXIdentifier();
	                elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
	            }
	        }
	        return elementName;
	    };
	    JSXParser.prototype.parseJSXAttributeName = function () {
	        var node = this.createJSXNode();
	        var attributeName;
	        var identifier = this.parseJSXIdentifier();
	        if (this.matchJSX(':')) {
	            var namespace = identifier;
	            this.expectJSX(':');
	            var name_2 = this.parseJSXIdentifier();
	            attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
	        }
	        else {
	            attributeName = identifier;
	        }
	        return attributeName;
	    };
	    JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
	        var node = this.createJSXNode();
	        var token = this.nextJSXToken();
	        if (token.type !== 8 /* StringLiteral */) {
	            this.throwUnexpectedToken(token);
	        }
	        var raw = this.getTokenRaw(token);
	        return this.finalize(node, new Node.Literal(token.value, raw));
	    };
	    JSXParser.prototype.parseJSXExpressionAttribute = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('{');
	        this.finishJSX();
	        if (this.match('}')) {
	            this.tolerateError('JSX attributes must only be assigned a non-empty expression');
	        }
	        var expression = this.parseAssignmentExpression();
	        this.reenterJSX();
	        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
	    };
	    JSXParser.prototype.parseJSXAttributeValue = function () {
	        return this.matchJSX('{') ? this.parseJSXExpressionAttribute() :
	            this.matchJSX('<') ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
	    };
	    JSXParser.prototype.parseJSXNameValueAttribute = function () {
	        var node = this.createJSXNode();
	        var name = this.parseJSXAttributeName();
	        var value = null;
	        if (this.matchJSX('=')) {
	            this.expectJSX('=');
	            value = this.parseJSXAttributeValue();
	        }
	        return this.finalize(node, new JSXNode.JSXAttribute(name, value));
	    };
	    JSXParser.prototype.parseJSXSpreadAttribute = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('{');
	        this.expectJSX('...');
	        this.finishJSX();
	        var argument = this.parseAssignmentExpression();
	        this.reenterJSX();
	        return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
	    };
	    JSXParser.prototype.parseJSXAttributes = function () {
	        var attributes = [];
	        while (!this.matchJSX('/') && !this.matchJSX('>')) {
	            var attribute = this.matchJSX('{') ? this.parseJSXSpreadAttribute() :
	                this.parseJSXNameValueAttribute();
	            attributes.push(attribute);
	        }
	        return attributes;
	    };
	    JSXParser.prototype.parseJSXOpeningElement = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('<');
	        var name = this.parseJSXElementName();
	        var attributes = this.parseJSXAttributes();
	        var selfClosing = this.matchJSX('/');
	        if (selfClosing) {
	            this.expectJSX('/');
	        }
	        this.expectJSX('>');
	        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
	    };
	    JSXParser.prototype.parseJSXBoundaryElement = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('<');
	        if (this.matchJSX('/')) {
	            this.expectJSX('/');
	            var name_3 = this.parseJSXElementName();
	            this.expectJSX('>');
	            return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
	        }
	        var name = this.parseJSXElementName();
	        var attributes = this.parseJSXAttributes();
	        var selfClosing = this.matchJSX('/');
	        if (selfClosing) {
	            this.expectJSX('/');
	        }
	        this.expectJSX('>');
	        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
	    };
	    JSXParser.prototype.parseJSXEmptyExpression = function () {
	        var node = this.createJSXChildNode();
	        this.collectComments();
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.line = this.scanner.lineNumber;
	        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
	        return this.finalize(node, new JSXNode.JSXEmptyExpression());
	    };
	    JSXParser.prototype.parseJSXExpressionContainer = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('{');
	        var expression;
	        if (this.matchJSX('}')) {
	            expression = this.parseJSXEmptyExpression();
	            this.expectJSX('}');
	        }
	        else {
	            this.finishJSX();
	            expression = this.parseAssignmentExpression();
	            this.reenterJSX();
	        }
	        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
	    };
	    JSXParser.prototype.parseJSXChildren = function () {
	        var children = [];
	        while (!this.scanner.eof()) {
	            var node = this.createJSXChildNode();
	            var token = this.nextJSXText();
	            if (token.start < token.end) {
	                var raw = this.getTokenRaw(token);
	                var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
	                children.push(child);
	            }
	            if (this.scanner.source[this.scanner.index] === '{') {
	                var container = this.parseJSXExpressionContainer();
	                children.push(container);
	            }
	            else {
	                break;
	            }
	        }
	        return children;
	    };
	    JSXParser.prototype.parseComplexJSXElement = function (el) {
	        var stack = [];
	        while (!this.scanner.eof()) {
	            el.children = el.children.concat(this.parseJSXChildren());
	            var node = this.createJSXChildNode();
	            var element = this.parseJSXBoundaryElement();
	            if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
	                var opening = element;
	                if (opening.selfClosing) {
	                    var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
	                    el.children.push(child);
	                }
	                else {
	                    stack.push(el);
	                    el = { node: node, opening: opening, closing: null, children: [] };
	                }
	            }
	            if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
	                el.closing = element;
	                var open_1 = getQualifiedElementName(el.opening.name);
	                var close_1 = getQualifiedElementName(el.closing.name);
	                if (open_1 !== close_1) {
	                    this.tolerateError('Expected corresponding JSX closing tag for %0', open_1);
	                }
	                if (stack.length > 0) {
	                    var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
	                    el = stack[stack.length - 1];
	                    el.children.push(child);
	                    stack.pop();
	                }
	                else {
	                    break;
	                }
	            }
	        }
	        return el;
	    };
	    JSXParser.prototype.parseJSXElement = function () {
	        var node = this.createJSXNode();
	        var opening = this.parseJSXOpeningElement();
	        var children = [];
	        var closing = null;
	        if (!opening.selfClosing) {
	            var el = this.parseComplexJSXElement({ node: node, opening: opening, closing: closing, children: children });
	            children = el.children;
	            closing = el.closing;
	        }
	        return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
	    };
	    JSXParser.prototype.parseJSXRoot = function () {
	        // Pop the opening '<' added from the lookahead.
	        if (this.config.tokens) {
	            this.tokens.pop();
	        }
	        this.startJSX();
	        var element = this.parseJSXElement();
	        this.finishJSX();
	        return element;
	    };
	    JSXParser.prototype.isStartOfExpression = function () {
	        return _super.prototype.isStartOfExpression.call(this) || this.match('<');
	    };
	    return JSXParser;
	}(parser_1.Parser));
	exports.JSXParser = JSXParser;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	// See also tools/generate-unicode-regex.js.
	var Regex = {
	    // Unicode v8.0.0 NonAsciiIdentifierStart:
	    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
	    // Unicode v8.0.0 NonAsciiIdentifierPart:
	    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
	};
	exports.Character = {
	    /* tslint:disable:no-bitwise */
	    fromCodePoint: function (cp) {
	        return (cp < 0x10000) ? String.fromCharCode(cp) :
	            String.fromCharCode(0xD800 + ((cp - 0x10000) >> 10)) +
	                String.fromCharCode(0xDC00 + ((cp - 0x10000) & 1023));
	    },
	    // https://tc39.github.io/ecma262/#sec-white-space
	    isWhiteSpace: function (cp) {
	        return (cp === 0x20) || (cp === 0x09) || (cp === 0x0B) || (cp === 0x0C) || (cp === 0xA0) ||
	            (cp >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(cp) >= 0);
	    },
	    // https://tc39.github.io/ecma262/#sec-line-terminators
	    isLineTerminator: function (cp) {
	        return (cp === 0x0A) || (cp === 0x0D) || (cp === 0x2028) || (cp === 0x2029);
	    },
	    // https://tc39.github.io/ecma262/#sec-names-and-keywords
	    isIdentifierStart: function (cp) {
	        return (cp === 0x24) || (cp === 0x5F) ||
	            (cp >= 0x41 && cp <= 0x5A) ||
	            (cp >= 0x61 && cp <= 0x7A) ||
	            (cp === 0x5C) ||
	            ((cp >= 0x80) && Regex.NonAsciiIdentifierStart.test(exports.Character.fromCodePoint(cp)));
	    },
	    isIdentifierPart: function (cp) {
	        return (cp === 0x24) || (cp === 0x5F) ||
	            (cp >= 0x41 && cp <= 0x5A) ||
	            (cp >= 0x61 && cp <= 0x7A) ||
	            (cp >= 0x30 && cp <= 0x39) ||
	            (cp === 0x5C) ||
	            ((cp >= 0x80) && Regex.NonAsciiIdentifierPart.test(exports.Character.fromCodePoint(cp)));
	    },
	    // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
	    isDecimalDigit: function (cp) {
	        return (cp >= 0x30 && cp <= 0x39); // 0..9
	    },
	    isHexDigit: function (cp) {
	        return (cp >= 0x30 && cp <= 0x39) ||
	            (cp >= 0x41 && cp <= 0x46) ||
	            (cp >= 0x61 && cp <= 0x66); // a..f
	    },
	    isOctalDigit: function (cp) {
	        return (cp >= 0x30 && cp <= 0x37); // 0..7
	    }
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var jsx_syntax_1 = __webpack_require__(6);
	/* tslint:disable:max-classes-per-file */
	var JSXClosingElement = (function () {
	    function JSXClosingElement(name) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
	        this.name = name;
	    }
	    return JSXClosingElement;
	}());
	exports.JSXClosingElement = JSXClosingElement;
	var JSXElement = (function () {
	    function JSXElement(openingElement, children, closingElement) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXElement;
	        this.openingElement = openingElement;
	        this.children = children;
	        this.closingElement = closingElement;
	    }
	    return JSXElement;
	}());
	exports.JSXElement = JSXElement;
	var JSXEmptyExpression = (function () {
	    function JSXEmptyExpression() {
	        this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
	    }
	    return JSXEmptyExpression;
	}());
	exports.JSXEmptyExpression = JSXEmptyExpression;
	var JSXExpressionContainer = (function () {
	    function JSXExpressionContainer(expression) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
	        this.expression = expression;
	    }
	    return JSXExpressionContainer;
	}());
	exports.JSXExpressionContainer = JSXExpressionContainer;
	var JSXIdentifier = (function () {
	    function JSXIdentifier(name) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
	        this.name = name;
	    }
	    return JSXIdentifier;
	}());
	exports.JSXIdentifier = JSXIdentifier;
	var JSXMemberExpression = (function () {
	    function JSXMemberExpression(object, property) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
	        this.object = object;
	        this.property = property;
	    }
	    return JSXMemberExpression;
	}());
	exports.JSXMemberExpression = JSXMemberExpression;
	var JSXAttribute = (function () {
	    function JSXAttribute(name, value) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
	        this.name = name;
	        this.value = value;
	    }
	    return JSXAttribute;
	}());
	exports.JSXAttribute = JSXAttribute;
	var JSXNamespacedName = (function () {
	    function JSXNamespacedName(namespace, name) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
	        this.namespace = namespace;
	        this.name = name;
	    }
	    return JSXNamespacedName;
	}());
	exports.JSXNamespacedName = JSXNamespacedName;
	var JSXOpeningElement = (function () {
	    function JSXOpeningElement(name, selfClosing, attributes) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
	        this.name = name;
	        this.selfClosing = selfClosing;
	        this.attributes = attributes;
	    }
	    return JSXOpeningElement;
	}());
	exports.JSXOpeningElement = JSXOpeningElement;
	var JSXSpreadAttribute = (function () {
	    function JSXSpreadAttribute(argument) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
	        this.argument = argument;
	    }
	    return JSXSpreadAttribute;
	}());
	exports.JSXSpreadAttribute = JSXSpreadAttribute;
	var JSXText = (function () {
	    function JSXText(value, raw) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXText;
	        this.value = value;
	        this.raw = raw;
	    }
	    return JSXText;
	}());
	exports.JSXText = JSXText;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.JSXSyntax = {
	    JSXAttribute: 'JSXAttribute',
	    JSXClosingElement: 'JSXClosingElement',
	    JSXElement: 'JSXElement',
	    JSXEmptyExpression: 'JSXEmptyExpression',
	    JSXExpressionContainer: 'JSXExpressionContainer',
	    JSXIdentifier: 'JSXIdentifier',
	    JSXMemberExpression: 'JSXMemberExpression',
	    JSXNamespacedName: 'JSXNamespacedName',
	    JSXOpeningElement: 'JSXOpeningElement',
	    JSXSpreadAttribute: 'JSXSpreadAttribute',
	    JSXText: 'JSXText'
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var syntax_1 = __webpack_require__(2);
	/* tslint:disable:max-classes-per-file */
	var ArrayExpression = (function () {
	    function ArrayExpression(elements) {
	        this.type = syntax_1.Syntax.ArrayExpression;
	        this.elements = elements;
	    }
	    return ArrayExpression;
	}());
	exports.ArrayExpression = ArrayExpression;
	var ArrayPattern = (function () {
	    function ArrayPattern(elements) {
	        this.type = syntax_1.Syntax.ArrayPattern;
	        this.elements = elements;
	    }
	    return ArrayPattern;
	}());
	exports.ArrayPattern = ArrayPattern;
	var ArrowFunctionExpression = (function () {
	    function ArrowFunctionExpression(params, body, expression) {
	        this.type = syntax_1.Syntax.ArrowFunctionExpression;
	        this.id = null;
	        this.params = params;
	        this.body = body;
	        this.generator = false;
	        this.expression = expression;
	        this.async = false;
	    }
	    return ArrowFunctionExpression;
	}());
	exports.ArrowFunctionExpression = ArrowFunctionExpression;
	var AssignmentExpression = (function () {
	    function AssignmentExpression(operator, left, right) {
	        this.type = syntax_1.Syntax.AssignmentExpression;
	        this.operator = operator;
	        this.left = left;
	        this.right = right;
	    }
	    return AssignmentExpression;
	}());
	exports.AssignmentExpression = AssignmentExpression;
	var AssignmentPattern = (function () {
	    function AssignmentPattern(left, right) {
	        this.type = syntax_1.Syntax.AssignmentPattern;
	        this.left = left;
	        this.right = right;
	    }
	    return AssignmentPattern;
	}());
	exports.AssignmentPattern = AssignmentPattern;
	var AsyncArrowFunctionExpression = (function () {
	    function AsyncArrowFunctionExpression(params, body, expression) {
	        this.type = syntax_1.Syntax.ArrowFunctionExpression;
	        this.id = null;
	        this.params = params;
	        this.body = body;
	        this.generator = false;
	        this.expression = expression;
	        this.async = true;
	    }
	    return AsyncArrowFunctionExpression;
	}());
	exports.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;
	var AsyncFunctionDeclaration = (function () {
	    function AsyncFunctionDeclaration(id, params, body) {
	        this.type = syntax_1.Syntax.FunctionDeclaration;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = false;
	        this.expression = false;
	        this.async = true;
	    }
	    return AsyncFunctionDeclaration;
	}());
	exports.AsyncFunctionDeclaration = AsyncFunctionDeclaration;
	var AsyncFunctionExpression = (function () {
	    function AsyncFunctionExpression(id, params, body) {
	        this.type = syntax_1.Syntax.FunctionExpression;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = false;
	        this.expression = false;
	        this.async = true;
	    }
	    return AsyncFunctionExpression;
	}());
	exports.AsyncFunctionExpression = AsyncFunctionExpression;
	var AwaitExpression = (function () {
	    function AwaitExpression(argument) {
	        this.type = syntax_1.Syntax.AwaitExpression;
	        this.argument = argument;
	    }
	    return AwaitExpression;
	}());
	exports.AwaitExpression = AwaitExpression;
	var BinaryExpression = (function () {
	    function BinaryExpression(operator, left, right) {
	        var logical = (operator === '||' || operator === '&&');
	        this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
	        this.operator = operator;
	        this.left = left;
	        this.right = right;
	    }
	    return BinaryExpression;
	}());
	exports.BinaryExpression = BinaryExpression;
	var BlockStatement = (function () {
	    function BlockStatement(body) {
	        this.type = syntax_1.Syntax.BlockStatement;
	        this.body = body;
	    }
	    return BlockStatement;
	}());
	exports.BlockStatement = BlockStatement;
	var BreakStatement = (function () {
	    function BreakStatement(label) {
	        this.type = syntax_1.Syntax.BreakStatement;
	        this.label = label;
	    }
	    return BreakStatement;
	}());
	exports.BreakStatement = BreakStatement;
	var CallExpression = (function () {
	    function CallExpression(callee, args) {
	        this.type = syntax_1.Syntax.CallExpression;
	        this.callee = callee;
	        this.arguments = args;
	    }
	    return CallExpression;
	}());
	exports.CallExpression = CallExpression;
	var CatchClause = (function () {
	    function CatchClause(param, body) {
	        this.type = syntax_1.Syntax.CatchClause;
	        this.param = param;
	        this.body = body;
	    }
	    return CatchClause;
	}());
	exports.CatchClause = CatchClause;
	var ClassBody = (function () {
	    function ClassBody(body) {
	        this.type = syntax_1.Syntax.ClassBody;
	        this.body = body;
	    }
	    return ClassBody;
	}());
	exports.ClassBody = ClassBody;
	var ClassDeclaration = (function () {
	    function ClassDeclaration(id, superClass, body) {
	        this.type = syntax_1.Syntax.ClassDeclaration;
	        this.id = id;
	        this.superClass = superClass;
	        this.body = body;
	    }
	    return ClassDeclaration;
	}());
	exports.ClassDeclaration = ClassDeclaration;
	var ClassExpression = (function () {
	    function ClassExpression(id, superClass, body) {
	        this.type = syntax_1.Syntax.ClassExpression;
	        this.id = id;
	        this.superClass = superClass;
	        this.body = body;
	    }
	    return ClassExpression;
	}());
	exports.ClassExpression = ClassExpression;
	var ComputedMemberExpression = (function () {
	    function ComputedMemberExpression(object, property) {
	        this.type = syntax_1.Syntax.MemberExpression;
	        this.computed = true;
	        this.object = object;
	        this.property = property;
	    }
	    return ComputedMemberExpression;
	}());
	exports.ComputedMemberExpression = ComputedMemberExpression;
	var ConditionalExpression = (function () {
	    function ConditionalExpression(test, consequent, alternate) {
	        this.type = syntax_1.Syntax.ConditionalExpression;
	        this.test = test;
	        this.consequent = consequent;
	        this.alternate = alternate;
	    }
	    return ConditionalExpression;
	}());
	exports.ConditionalExpression = ConditionalExpression;
	var ContinueStatement = (function () {
	    function ContinueStatement(label) {
	        this.type = syntax_1.Syntax.ContinueStatement;
	        this.label = label;
	    }
	    return ContinueStatement;
	}());
	exports.ContinueStatement = ContinueStatement;
	var DebuggerStatement = (function () {
	    function DebuggerStatement() {
	        this.type = syntax_1.Syntax.DebuggerStatement;
	    }
	    return DebuggerStatement;
	}());
	exports.DebuggerStatement = DebuggerStatement;
	var Directive = (function () {
	    function Directive(expression, directive) {
	        this.type = syntax_1.Syntax.ExpressionStatement;
	        this.expression = expression;
	        this.directive = directive;
	    }
	    return Directive;
	}());
	exports.Directive = Directive;
	var DoWhileStatement = (function () {
	    function DoWhileStatement(body, test) {
	        this.type = syntax_1.Syntax.DoWhileStatement;
	        this.body = body;
	        this.test = test;
	    }
	    return DoWhileStatement;
	}());
	exports.DoWhileStatement = DoWhileStatement;
	var EmptyStatement = (function () {
	    function EmptyStatement() {
	        this.type = syntax_1.Syntax.EmptyStatement;
	    }
	    return EmptyStatement;
	}());
	exports.EmptyStatement = EmptyStatement;
	var ExportAllDeclaration = (function () {
	    function ExportAllDeclaration(source) {
	        this.type = syntax_1.Syntax.ExportAllDeclaration;
	        this.source = source;
	    }
	    return ExportAllDeclaration;
	}());
	exports.ExportAllDeclaration = ExportAllDeclaration;
	var ExportDefaultDeclaration = (function () {
	    function ExportDefaultDeclaration(declaration) {
	        this.type = syntax_1.Syntax.ExportDefaultDeclaration;
	        this.declaration = declaration;
	    }
	    return ExportDefaultDeclaration;
	}());
	exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
	var ExportNamedDeclaration = (function () {
	    function ExportNamedDeclaration(declaration, specifiers, source) {
	        this.type = syntax_1.Syntax.ExportNamedDeclaration;
	        this.declaration = declaration;
	        this.specifiers = specifiers;
	        this.source = source;
	    }
	    return ExportNamedDeclaration;
	}());
	exports.ExportNamedDeclaration = ExportNamedDeclaration;
	var ExportSpecifier = (function () {
	    function ExportSpecifier(local, exported) {
	        this.type = syntax_1.Syntax.ExportSpecifier;
	        this.exported = exported;
	        this.local = local;
	    }
	    return ExportSpecifier;
	}());
	exports.ExportSpecifier = ExportSpecifier;
	var ExpressionStatement = (function () {
	    function ExpressionStatement(expression) {
	        this.type = syntax_1.Syntax.ExpressionStatement;
	        this.expression = expression;
	    }
	    return ExpressionStatement;
	}());
	exports.ExpressionStatement = ExpressionStatement;
	var ForInStatement = (function () {
	    function ForInStatement(left, right, body) {
	        this.type = syntax_1.Syntax.ForInStatement;
	        this.left = left;
	        this.right = right;
	        this.body = body;
	        this.each = false;
	    }
	    return ForInStatement;
	}());
	exports.ForInStatement = ForInStatement;
	var ForOfStatement = (function () {
	    function ForOfStatement(left, right, body) {
	        this.type = syntax_1.Syntax.ForOfStatement;
	        this.left = left;
	        this.right = right;
	        this.body = body;
	    }
	    return ForOfStatement;
	}());
	exports.ForOfStatement = ForOfStatement;
	var ForStatement = (function () {
	    function ForStatement(init, test, update, body) {
	        this.type = syntax_1.Syntax.ForStatement;
	        this.init = init;
	        this.test = test;
	        this.update = update;
	        this.body = body;
	    }
	    return ForStatement;
	}());
	exports.ForStatement = ForStatement;
	var FunctionDeclaration = (function () {
	    function FunctionDeclaration(id, params, body, generator) {
	        this.type = syntax_1.Syntax.FunctionDeclaration;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = generator;
	        this.expression = false;
	        this.async = false;
	    }
	    return FunctionDeclaration;
	}());
	exports.FunctionDeclaration = FunctionDeclaration;
	var FunctionExpression = (function () {
	    function FunctionExpression(id, params, body, generator) {
	        this.type = syntax_1.Syntax.FunctionExpression;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = generator;
	        this.expression = false;
	        this.async = false;
	    }
	    return FunctionExpression;
	}());
	exports.FunctionExpression = FunctionExpression;
	var Identifier = (function () {
	    function Identifier(name) {
	        this.type = syntax_1.Syntax.Identifier;
	        this.name = name;
	    }
	    return Identifier;
	}());
	exports.Identifier = Identifier;
	var IfStatement = (function () {
	    function IfStatement(test, consequent, alternate) {
	        this.type = syntax_1.Syntax.IfStatement;
	        this.test = test;
	        this.consequent = consequent;
	        this.alternate = alternate;
	    }
	    return IfStatement;
	}());
	exports.IfStatement = IfStatement;
	var ImportDeclaration = (function () {
	    function ImportDeclaration(specifiers, source) {
	        this.type = syntax_1.Syntax.ImportDeclaration;
	        this.specifiers = specifiers;
	        this.source = source;
	    }
	    return ImportDeclaration;
	}());
	exports.ImportDeclaration = ImportDeclaration;
	var ImportDefaultSpecifier = (function () {
	    function ImportDefaultSpecifier(local) {
	        this.type = syntax_1.Syntax.ImportDefaultSpecifier;
	        this.local = local;
	    }
	    return ImportDefaultSpecifier;
	}());
	exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
	var ImportNamespaceSpecifier = (function () {
	    function ImportNamespaceSpecifier(local) {
	        this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
	        this.local = local;
	    }
	    return ImportNamespaceSpecifier;
	}());
	exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
	var ImportSpecifier = (function () {
	    function ImportSpecifier(local, imported) {
	        this.type = syntax_1.Syntax.ImportSpecifier;
	        this.local = local;
	        this.imported = imported;
	    }
	    return ImportSpecifier;
	}());
	exports.ImportSpecifier = ImportSpecifier;
	var LabeledStatement = (function () {
	    function LabeledStatement(label, body) {
	        this.type = syntax_1.Syntax.LabeledStatement;
	        this.label = label;
	        this.body = body;
	    }
	    return LabeledStatement;
	}());
	exports.LabeledStatement = LabeledStatement;
	var Literal = (function () {
	    function Literal(value, raw) {
	        this.type = syntax_1.Syntax.Literal;
	        this.value = value;
	        this.raw = raw;
	    }
	    return Literal;
	}());
	exports.Literal = Literal;
	var MetaProperty = (function () {
	    function MetaProperty(meta, property) {
	        this.type = syntax_1.Syntax.MetaProperty;
	        this.meta = meta;
	        this.property = property;
	    }
	    return MetaProperty;
	}());
	exports.MetaProperty = MetaProperty;
	var MethodDefinition = (function () {
	    function MethodDefinition(key, computed, value, kind, isStatic) {
	        this.type = syntax_1.Syntax.MethodDefinition;
	        this.key = key;
	        this.computed = computed;
	        this.value = value;
	        this.kind = kind;
	        this.static = isStatic;
	    }
	    return MethodDefinition;
	}());
	exports.MethodDefinition = MethodDefinition;
	var Module = (function () {
	    function Module(body) {
	        this.type = syntax_1.Syntax.Program;
	        this.body = body;
	        this.sourceType = 'module';
	    }
	    return Module;
	}());
	exports.Module = Module;
	var NewExpression = (function () {
	    function NewExpression(callee, args) {
	        this.type = syntax_1.Syntax.NewExpression;
	        this.callee = callee;
	        this.arguments = args;
	    }
	    return NewExpression;
	}());
	exports.NewExpression = NewExpression;
	var ObjectExpression = (function () {
	    function ObjectExpression(properties) {
	        this.type = syntax_1.Syntax.ObjectExpression;
	        this.properties = properties;
	    }
	    return ObjectExpression;
	}());
	exports.ObjectExpression = ObjectExpression;
	var ObjectPattern = (function () {
	    function ObjectPattern(properties) {
	        this.type = syntax_1.Syntax.ObjectPattern;
	        this.properties = properties;
	    }
	    return ObjectPattern;
	}());
	exports.ObjectPattern = ObjectPattern;
	var Property = (function () {
	    function Property(kind, key, computed, value, method, shorthand) {
	        this.type = syntax_1.Syntax.Property;
	        this.key = key;
	        this.computed = computed;
	        this.value = value;
	        this.kind = kind;
	        this.method = method;
	        this.shorthand = shorthand;
	    }
	    return Property;
	}());
	exports.Property = Property;
	var RegexLiteral = (function () {
	    function RegexLiteral(value, raw, pattern, flags) {
	        this.type = syntax_1.Syntax.Literal;
	        this.value = value;
	        this.raw = raw;
	        this.regex = { pattern: pattern, flags: flags };
	    }
	    return RegexLiteral;
	}());
	exports.RegexLiteral = RegexLiteral;
	var RestElement = (function () {
	    function RestElement(argument) {
	        this.type = syntax_1.Syntax.RestElement;
	        this.argument = argument;
	    }
	    return RestElement;
	}());
	exports.RestElement = RestElement;
	var ReturnStatement = (function () {
	    function ReturnStatement(argument) {
	        this.type = syntax_1.Syntax.ReturnStatement;
	        this.argument = argument;
	    }
	    return ReturnStatement;
	}());
	exports.ReturnStatement = ReturnStatement;
	var Script = (function () {
	    function Script(body) {
	        this.type = syntax_1.Syntax.Program;
	        this.body = body;
	        this.sourceType = 'script';
	    }
	    return Script;
	}());
	exports.Script = Script;
	var SequenceExpression = (function () {
	    function SequenceExpression(expressions) {
	        this.type = syntax_1.Syntax.SequenceExpression;
	        this.expressions = expressions;
	    }
	    return SequenceExpression;
	}());
	exports.SequenceExpression = SequenceExpression;
	var SpreadElement = (function () {
	    function SpreadElement(argument) {
	        this.type = syntax_1.Syntax.SpreadElement;
	        this.argument = argument;
	    }
	    return SpreadElement;
	}());
	exports.SpreadElement = SpreadElement;
	var StaticMemberExpression = (function () {
	    function StaticMemberExpression(object, property) {
	        this.type = syntax_1.Syntax.MemberExpression;
	        this.computed = false;
	        this.object = object;
	        this.property = property;
	    }
	    return StaticMemberExpression;
	}());
	exports.StaticMemberExpression = StaticMemberExpression;
	var Super = (function () {
	    function Super() {
	        this.type = syntax_1.Syntax.Super;
	    }
	    return Super;
	}());
	exports.Super = Super;
	var SwitchCase = (function () {
	    function SwitchCase(test, consequent) {
	        this.type = syntax_1.Syntax.SwitchCase;
	        this.test = test;
	        this.consequent = consequent;
	    }
	    return SwitchCase;
	}());
	exports.SwitchCase = SwitchCase;
	var SwitchStatement = (function () {
	    function SwitchStatement(discriminant, cases) {
	        this.type = syntax_1.Syntax.SwitchStatement;
	        this.discriminant = discriminant;
	        this.cases = cases;
	    }
	    return SwitchStatement;
	}());
	exports.SwitchStatement = SwitchStatement;
	var TaggedTemplateExpression = (function () {
	    function TaggedTemplateExpression(tag, quasi) {
	        this.type = syntax_1.Syntax.TaggedTemplateExpression;
	        this.tag = tag;
	        this.quasi = quasi;
	    }
	    return TaggedTemplateExpression;
	}());
	exports.TaggedTemplateExpression = TaggedTemplateExpression;
	var TemplateElement = (function () {
	    function TemplateElement(value, tail) {
	        this.type = syntax_1.Syntax.TemplateElement;
	        this.value = value;
	        this.tail = tail;
	    }
	    return TemplateElement;
	}());
	exports.TemplateElement = TemplateElement;
	var TemplateLiteral = (function () {
	    function TemplateLiteral(quasis, expressions) {
	        this.type = syntax_1.Syntax.TemplateLiteral;
	        this.quasis = quasis;
	        this.expressions = expressions;
	    }
	    return TemplateLiteral;
	}());
	exports.TemplateLiteral = TemplateLiteral;
	var ThisExpression = (function () {
	    function ThisExpression() {
	        this.type = syntax_1.Syntax.ThisExpression;
	    }
	    return ThisExpression;
	}());
	exports.ThisExpression = ThisExpression;
	var ThrowStatement = (function () {
	    function ThrowStatement(argument) {
	        this.type = syntax_1.Syntax.ThrowStatement;
	        this.argument = argument;
	    }
	    return ThrowStatement;
	}());
	exports.ThrowStatement = ThrowStatement;
	var TryStatement = (function () {
	    function TryStatement(block, handler, finalizer) {
	        this.type = syntax_1.Syntax.TryStatement;
	        this.block = block;
	        this.handler = handler;
	        this.finalizer = finalizer;
	    }
	    return TryStatement;
	}());
	exports.TryStatement = TryStatement;
	var UnaryExpression = (function () {
	    function UnaryExpression(operator, argument) {
	        this.type = syntax_1.Syntax.UnaryExpression;
	        this.operator = operator;
	        this.argument = argument;
	        this.prefix = true;
	    }
	    return UnaryExpression;
	}());
	exports.UnaryExpression = UnaryExpression;
	var UpdateExpression = (function () {
	    function UpdateExpression(operator, argument, prefix) {
	        this.type = syntax_1.Syntax.UpdateExpression;
	        this.operator = operator;
	        this.argument = argument;
	        this.prefix = prefix;
	    }
	    return UpdateExpression;
	}());
	exports.UpdateExpression = UpdateExpression;
	var VariableDeclaration = (function () {
	    function VariableDeclaration(declarations, kind) {
	        this.type = syntax_1.Syntax.VariableDeclaration;
	        this.declarations = declarations;
	        this.kind = kind;
	    }
	    return VariableDeclaration;
	}());
	exports.VariableDeclaration = VariableDeclaration;
	var VariableDeclarator = (function () {
	    function VariableDeclarator(id, init) {
	        this.type = syntax_1.Syntax.VariableDeclarator;
	        this.id = id;
	        this.init = init;
	    }
	    return VariableDeclarator;
	}());
	exports.VariableDeclarator = VariableDeclarator;
	var WhileStatement = (function () {
	    function WhileStatement(test, body) {
	        this.type = syntax_1.Syntax.WhileStatement;
	        this.test = test;
	        this.body = body;
	    }
	    return WhileStatement;
	}());
	exports.WhileStatement = WhileStatement;
	var WithStatement = (function () {
	    function WithStatement(object, body) {
	        this.type = syntax_1.Syntax.WithStatement;
	        this.object = object;
	        this.body = body;
	    }
	    return WithStatement;
	}());
	exports.WithStatement = WithStatement;
	var YieldExpression = (function () {
	    function YieldExpression(argument, delegate) {
	        this.type = syntax_1.Syntax.YieldExpression;
	        this.argument = argument;
	        this.delegate = delegate;
	    }
	    return YieldExpression;
	}());
	exports.YieldExpression = YieldExpression;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var assert_1 = __webpack_require__(9);
	var error_handler_1 = __webpack_require__(10);
	var messages_1 = __webpack_require__(11);
	var Node = __webpack_require__(7);
	var scanner_1 = __webpack_require__(12);
	var syntax_1 = __webpack_require__(2);
	var token_1 = __webpack_require__(13);
	var ArrowParameterPlaceHolder = 'ArrowParameterPlaceHolder';
	var Parser = (function () {
	    function Parser(code, options, delegate) {
	        if (options === void 0) { options = {}; }
	        this.config = {
	            range: (typeof options.range === 'boolean') && options.range,
	            loc: (typeof options.loc === 'boolean') && options.loc,
	            source: null,
	            tokens: (typeof options.tokens === 'boolean') && options.tokens,
	            comment: (typeof options.comment === 'boolean') && options.comment,
	            tolerant: (typeof options.tolerant === 'boolean') && options.tolerant
	        };
	        if (this.config.loc && options.source && options.source !== null) {
	            this.config.source = String(options.source);
	        }
	        this.delegate = delegate;
	        this.errorHandler = new error_handler_1.ErrorHandler();
	        this.errorHandler.tolerant = this.config.tolerant;
	        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
	        this.scanner.trackComment = this.config.comment;
	        this.operatorPrecedence = {
	            ')': 0,
	            ';': 0,
	            ',': 0,
	            '=': 0,
	            ']': 0,
	            '||': 1,
	            '&&': 2,
	            '|': 3,
	            '^': 4,
	            '&': 5,
	            '==': 6,
	            '!=': 6,
	            '===': 6,
	            '!==': 6,
	            '<': 7,
	            '>': 7,
	            '<=': 7,
	            '>=': 7,
	            '<<': 8,
	            '>>': 8,
	            '>>>': 8,
	            '+': 9,
	            '-': 9,
	            '*': 11,
	            '/': 11,
	            '%': 11
	        };
	        this.lookahead = {
	            type: 2 /* EOF */,
	            value: '',
	            lineNumber: this.scanner.lineNumber,
	            lineStart: 0,
	            start: 0,
	            end: 0
	        };
	        this.hasLineTerminator = false;
	        this.context = {
	            isModule: false,
	            await: false,
	            allowIn: true,
	            allowStrictDirective: true,
	            allowYield: true,
	            firstCoverInitializedNameError: null,
	            isAssignmentTarget: false,
	            isBindingElement: false,
	            inFunctionBody: false,
	            inIteration: false,
	            inSwitch: false,
	            labelSet: {},
	            strict: false
	        };
	        this.tokens = [];
	        this.startMarker = {
	            index: 0,
	            line: this.scanner.lineNumber,
	            column: 0
	        };
	        this.lastMarker = {
	            index: 0,
	            line: this.scanner.lineNumber,
	            column: 0
	        };
	        this.nextToken();
	        this.lastMarker = {
	            index: this.scanner.index,
	            line: this.scanner.lineNumber,
	            column: this.scanner.index - this.scanner.lineStart
	        };
	    }
	    Parser.prototype.throwError = function (messageFormat) {
	        var values = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            values[_i - 1] = arguments[_i];
	        }
	        var args = Array.prototype.slice.call(arguments, 1);
	        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
	            assert_1.assert(idx < args.length, 'Message reference must be in range');
	            return args[idx];
	        });
	        var index = this.lastMarker.index;
	        var line = this.lastMarker.line;
	        var column = this.lastMarker.column + 1;
	        throw this.errorHandler.createError(index, line, column, msg);
	    };
	    Parser.prototype.tolerateError = function (messageFormat) {
	        var values = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            values[_i - 1] = arguments[_i];
	        }
	        var args = Array.prototype.slice.call(arguments, 1);
	        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
	            assert_1.assert(idx < args.length, 'Message reference must be in range');
	            return args[idx];
	        });
	        var index = this.lastMarker.index;
	        var line = this.scanner.lineNumber;
	        var column = this.lastMarker.column + 1;
	        this.errorHandler.tolerateError(index, line, column, msg);
	    };
	    // Throw an exception because of the token.
	    Parser.prototype.unexpectedTokenError = function (token, message) {
	        var msg = message || messages_1.Messages.UnexpectedToken;
	        var value;
	        if (token) {
	            if (!message) {
	                msg = (token.type === 2 /* EOF */) ? messages_1.Messages.UnexpectedEOS :
	                    (token.type === 3 /* Identifier */) ? messages_1.Messages.UnexpectedIdentifier :
	                        (token.type === 6 /* NumericLiteral */) ? messages_1.Messages.UnexpectedNumber :
	                            (token.type === 8 /* StringLiteral */) ? messages_1.Messages.UnexpectedString :
	                                (token.type === 10 /* Template */) ? messages_1.Messages.UnexpectedTemplate :
	                                    messages_1.Messages.UnexpectedToken;
	                if (token.type === 4 /* Keyword */) {
	                    if (this.scanner.isFutureReservedWord(token.value)) {
	                        msg = messages_1.Messages.UnexpectedReserved;
	                    }
	                    else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
	                        msg = messages_1.Messages.StrictReservedWord;
	                    }
	                }
	            }
	            value = token.value;
	        }
	        else {
	            value = 'ILLEGAL';
	        }
	        msg = msg.replace('%0', value);
	        if (token && typeof token.lineNumber === 'number') {
	            var index = token.start;
	            var line = token.lineNumber;
	            var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
	            var column = token.start - lastMarkerLineStart + 1;
	            return this.errorHandler.createError(index, line, column, msg);
	        }
	        else {
	            var index = this.lastMarker.index;
	            var line = this.lastMarker.line;
	            var column = this.lastMarker.column + 1;
	            return this.errorHandler.createError(index, line, column, msg);
	        }
	    };
	    Parser.prototype.throwUnexpectedToken = function (token, message) {
	        throw this.unexpectedTokenError(token, message);
	    };
	    Parser.prototype.tolerateUnexpectedToken = function (token, message) {
	        this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
	    };
	    Parser.prototype.collectComments = function () {
	        if (!this.config.comment) {
	            this.scanner.scanComments();
	        }
	        else {
	            var comments = this.scanner.scanComments();
	            if (comments.length > 0 && this.delegate) {
	                for (var i = 0; i < comments.length; ++i) {
	                    var e = comments[i];
	                    var node = void 0;
	                    node = {
	                        type: e.multiLine ? 'BlockComment' : 'LineComment',
	                        value: this.scanner.source.slice(e.slice[0], e.slice[1])
	                    };
	                    if (this.config.range) {
	                        node.range = e.range;
	                    }
	                    if (this.config.loc) {
	                        node.loc = e.loc;
	                    }
	                    var metadata = {
	                        start: {
	                            line: e.loc.start.line,
	                            column: e.loc.start.column,
	                            offset: e.range[0]
	                        },
	                        end: {
	                            line: e.loc.end.line,
	                            column: e.loc.end.column,
	                            offset: e.range[1]
	                        }
	                    };
	                    this.delegate(node, metadata);
	                }
	            }
	        }
	    };
	    // From internal representation to an external structure
	    Parser.prototype.getTokenRaw = function (token) {
	        return this.scanner.source.slice(token.start, token.end);
	    };
	    Parser.prototype.convertToken = function (token) {
	        var t = {
	            type: token_1.TokenName[token.type],
	            value: this.getTokenRaw(token)
	        };
	        if (this.config.range) {
	            t.range = [token.start, token.end];
	        }
	        if (this.config.loc) {
	            t.loc = {
	                start: {
	                    line: this.startMarker.line,
	                    column: this.startMarker.column
	                },
	                end: {
	                    line: this.scanner.lineNumber,
	                    column: this.scanner.index - this.scanner.lineStart
	                }
	            };
	        }
	        if (token.type === 9 /* RegularExpression */) {
	            var pattern = token.pattern;
	            var flags = token.flags;
	            t.regex = { pattern: pattern, flags: flags };
	        }
	        return t;
	    };
	    Parser.prototype.nextToken = function () {
	        var token = this.lookahead;
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.line = this.scanner.lineNumber;
	        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
	        this.collectComments();
	        if (this.scanner.index !== this.startMarker.index) {
	            this.startMarker.index = this.scanner.index;
	            this.startMarker.line = this.scanner.lineNumber;
	            this.startMarker.column = this.scanner.index - this.scanner.lineStart;
	        }
	        var next = this.scanner.lex();
	        this.hasLineTerminator = (token.lineNumber !== next.lineNumber);
	        if (next && this.context.strict && next.type === 3 /* Identifier */) {
	            if (this.scanner.isStrictModeReservedWord(next.value)) {
	                next.type = 4 /* Keyword */;
	            }
	        }
	        this.lookahead = next;
	        if (this.config.tokens && next.type !== 2 /* EOF */) {
	            this.tokens.push(this.convertToken(next));
	        }
	        return token;
	    };
	    Parser.prototype.nextRegexToken = function () {
	        this.collectComments();
	        var token = this.scanner.scanRegExp();
	        if (this.config.tokens) {
	            // Pop the previous token, '/' or '/='
	            // This is added from the lookahead token.
	            this.tokens.pop();
	            this.tokens.push(this.convertToken(token));
	        }
	        // Prime the next lookahead.
	        this.lookahead = token;
	        this.nextToken();
	        return token;
	    };
	    Parser.prototype.createNode = function () {
	        return {
	            index: this.startMarker.index,
	            line: this.startMarker.line,
	            column: this.startMarker.column
	        };
	    };
	    Parser.prototype.startNode = function (token, lastLineStart) {
	        if (lastLineStart === void 0) { lastLineStart = 0; }
	        var column = token.start - token.lineStart;
	        var line = token.lineNumber;
	        if (column < 0) {
	            column += lastLineStart;
	            line--;
	        }
	        return {
	            index: token.start,
	            line: line,
	            column: column
	        };
	    };
	    Parser.prototype.finalize = function (marker, node) {
	        if (this.config.range) {
	            node.range = [marker.index, this.lastMarker.index];
	        }
	        if (this.config.loc) {
	            node.loc = {
	                start: {
	                    line: marker.line,
	                    column: marker.column,
	                },
	                end: {
	                    line: this.lastMarker.line,
	                    column: this.lastMarker.column
	                }
	            };
	            if (this.config.source) {
	                node.loc.source = this.config.source;
	            }
	        }
	        if (this.delegate) {
	            var metadata = {
	                start: {
	                    line: marker.line,
	                    column: marker.column,
	                    offset: marker.index
	                },
	                end: {
	                    line: this.lastMarker.line,
	                    column: this.lastMarker.column,
	                    offset: this.lastMarker.index
	                }
	            };
	            this.delegate(node, metadata);
	        }
	        return node;
	    };
	    // Expect the next token to match the specified punctuator.
	    // If not, an exception will be thrown.
	    Parser.prototype.expect = function (value) {
	        var token = this.nextToken();
	        if (token.type !== 7 /* Punctuator */ || token.value !== value) {
	            this.throwUnexpectedToken(token);
	        }
	    };
	    // Quietly expect a comma when in tolerant mode, otherwise delegates to expect().
	    Parser.prototype.expectCommaSeparator = function () {
	        if (this.config.tolerant) {
	            var token = this.lookahead;
	            if (token.type === 7 /* Punctuator */ && token.value === ',') {
	                this.nextToken();
	            }
	            else if (token.type === 7 /* Punctuator */ && token.value === ';') {
	                this.nextToken();
	                this.tolerateUnexpectedToken(token);
	            }
	            else {
	                this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
	            }
	        }
	        else {
	            this.expect(',');
	        }
	    };
	    // Expect the next token to match the specified keyword.
	    // If not, an exception will be thrown.
	    Parser.prototype.expectKeyword = function (keyword) {
	        var token = this.nextToken();
	        if (token.type !== 4 /* Keyword */ || token.value !== keyword) {
	            this.throwUnexpectedToken(token);
	        }
	    };
	    // Return true if the next token matches the specified punctuator.
	    Parser.prototype.match = function (value) {
	        return this.lookahead.type === 7 /* Punctuator */ && this.lookahead.value === value;
	    };
	    // Return true if the next token matches the specified keyword
	    Parser.prototype.matchKeyword = function (keyword) {
	        return this.lookahead.type === 4 /* Keyword */ && this.lookahead.value === keyword;
	    };
	    // Return true if the next token matches the specified contextual keyword
	    // (where an identifier is sometimes a keyword depending on the context)
	    Parser.prototype.matchContextualKeyword = function (keyword) {
	        return this.lookahead.type === 3 /* Identifier */ && this.lookahead.value === keyword;
	    };
	    // Return true if the next token is an assignment operator
	    Parser.prototype.matchAssign = function () {
	        if (this.lookahead.type !== 7 /* Punctuator */) {
	            return false;
	        }
	        var op = this.lookahead.value;
	        return op === '=' ||
	            op === '*=' ||
	            op === '**=' ||
	            op === '/=' ||
	            op === '%=' ||
	            op === '+=' ||
	            op === '-=' ||
	            op === '<<=' ||
	            op === '>>=' ||
	            op === '>>>=' ||
	            op === '&=' ||
	            op === '^=' ||
	            op === '|=';
	    };
	    // Cover grammar support.
	    //
	    // When an assignment expression position starts with an left parenthesis, the determination of the type
	    // of the syntax is to be deferred arbitrarily long until the end of the parentheses pair (plus a lookahead)
	    // or the first comma. This situation also defers the determination of all the expressions nested in the pair.
	    //
	    // There are three productions that can be parsed in a parentheses pair that needs to be determined
	    // after the outermost pair is closed. They are:
	    //
	    //   1. AssignmentExpression
	    //   2. BindingElements
	    //   3. AssignmentTargets
	    //
	    // In order to avoid exponential backtracking, we use two flags to denote if the production can be
	    // binding element or assignment target.
	    //
	    // The three productions have the relationship:
	    //
	    //   BindingElements ⊆ AssignmentTargets ⊆ AssignmentExpression
	    //
	    // with a single exception that CoverInitializedName when used directly in an Expression, generates
	    // an early error. Therefore, we need the third state, firstCoverInitializedNameError, to track the
	    // first usage of CoverInitializedName and report it when we reached the end of the parentheses pair.
	    //
	    // isolateCoverGrammar function runs the given parser function with a new cover grammar context, and it does not
	    // effect the current flags. This means the production the parser parses is only used as an expression. Therefore
	    // the CoverInitializedName check is conducted.
	    //
	    // inheritCoverGrammar function runs the given parse function with a new cover grammar context, and it propagates
	    // the flags outside of the parser. This means the production the parser parses is used as a part of a potential
	    // pattern. The CoverInitializedName check is deferred.
	    Parser.prototype.isolateCoverGrammar = function (parseFunction) {
	        var previousIsBindingElement = this.context.isBindingElement;
	        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
	        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
	        this.context.isBindingElement = true;
	        this.context.isAssignmentTarget = true;
	        this.context.firstCoverInitializedNameError = null;
	        var result = parseFunction.call(this);
	        if (this.context.firstCoverInitializedNameError !== null) {
	            this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
	        }
	        this.context.isBindingElement = previousIsBindingElement;
	        this.context.isAssignmentTarget = previousIsAssignmentTarget;
	        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
	        return result;
	    };
	    Parser.prototype.inheritCoverGrammar = function (parseFunction) {
	        var previousIsBindingElement = this.context.isBindingElement;
	        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
	        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
	        this.context.isBindingElement = true;
	        this.context.isAssignmentTarget = true;
	        this.context.firstCoverInitializedNameError = null;
	        var result = parseFunction.call(this);
	        this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
	        this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
	        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
	        return result;
	    };
	    Parser.prototype.consumeSemicolon = function () {
	        if (this.match(';')) {
	            this.nextToken();
	        }
	        else if (!this.hasLineTerminator) {
	            if (this.lookahead.type !== 2 /* EOF */ && !this.match('}')) {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	            this.lastMarker.index = this.startMarker.index;
	            this.lastMarker.line = this.startMarker.line;
	            this.lastMarker.column = this.startMarker.column;
	        }
	    };
	    // https://tc39.github.io/ecma262/#sec-primary-expression
	    Parser.prototype.parsePrimaryExpression = function () {
	        var node = this.createNode();
	        var expr;
	        var token, raw;
	        switch (this.lookahead.type) {
	            case 3 /* Identifier */:
	                if ((this.context.isModule || this.context.await) && this.lookahead.value === 'await') {
	                    this.tolerateUnexpectedToken(this.lookahead);
	                }
	                expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node.Identifier(this.nextToken().value));
	                break;
	            case 6 /* NumericLiteral */:
	            case 8 /* StringLiteral */:
	                if (this.context.strict && this.lookahead.octal) {
	                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
	                }
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                token = this.nextToken();
	                raw = this.getTokenRaw(token);
	                expr = this.finalize(node, new Node.Literal(token.value, raw));
	                break;
	            case 1 /* BooleanLiteral */:
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                token = this.nextToken();
	                raw = this.getTokenRaw(token);
	                expr = this.finalize(node, new Node.Literal(token.value === 'true', raw));
	                break;
	            case 5 /* NullLiteral */:
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                token = this.nextToken();
	                raw = this.getTokenRaw(token);
	                expr = this.finalize(node, new Node.Literal(null, raw));
	                break;
	            case 10 /* Template */:
	                expr = this.parseTemplateLiteral();
	                break;
	            case 7 /* Punctuator */:
	                switch (this.lookahead.value) {
	                    case '(':
	                        this.context.isBindingElement = false;
	                        expr = this.inheritCoverGrammar(this.parseGroupExpression);
	                        break;
	                    case '[':
	                        expr = this.inheritCoverGrammar(this.parseArrayInitializer);
	                        break;
	                    case '{':
	                        expr = this.inheritCoverGrammar(this.parseObjectInitializer);
	                        break;
	                    case '/':
	                    case '/=':
	                        this.context.isAssignmentTarget = false;
	                        this.context.isBindingElement = false;
	                        this.scanner.index = this.startMarker.index;
	                        token = this.nextRegexToken();
	                        raw = this.getTokenRaw(token);
	                        expr = this.finalize(node, new Node.RegexLiteral(token.regex, raw, token.pattern, token.flags));
	                        break;
	                    default:
	                        expr = this.throwUnexpectedToken(this.nextToken());
	                }
	                break;
	            case 4 /* Keyword */:
	                if (!this.context.strict && this.context.allowYield && this.matchKeyword('yield')) {
	                    expr = this.parseIdentifierName();
	                }
	                else if (!this.context.strict && this.matchKeyword('let')) {
	                    expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
	                }
	                else {
	                    this.context.isAssignmentTarget = false;
	                    this.context.isBindingElement = false;
	                    if (this.matchKeyword('function')) {
	                        expr = this.parseFunctionExpression();
	                    }
	                    else if (this.matchKeyword('this')) {
	                        this.nextToken();
	                        expr = this.finalize(node, new Node.ThisExpression());
	                    }
	                    else if (this.matchKeyword('class')) {
	                        expr = this.parseClassExpression();
	                    }
	                    else {
	                        expr = this.throwUnexpectedToken(this.nextToken());
	                    }
	                }
	                break;
	            default:
	                expr = this.throwUnexpectedToken(this.nextToken());
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-array-initializer
	    Parser.prototype.parseSpreadElement = function () {
	        var node = this.createNode();
	        this.expect('...');
	        var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
	        return this.finalize(node, new Node.SpreadElement(arg));
	    };
	    Parser.prototype.parseArrayInitializer = function () {
	        var node = this.createNode();
	        var elements = [];
	        this.expect('[');
	        while (!this.match(']')) {
	            if (this.match(',')) {
	                this.nextToken();
	                elements.push(null);
	            }
	            else if (this.match('...')) {
	                var element = this.parseSpreadElement();
	                if (!this.match(']')) {
	                    this.context.isAssignmentTarget = false;
	                    this.context.isBindingElement = false;
	                    this.expect(',');
	                }
	                elements.push(element);
	            }
	            else {
	                elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
	                if (!this.match(']')) {
	                    this.expect(',');
	                }
	            }
	        }
	        this.expect(']');
	        return this.finalize(node, new Node.ArrayExpression(elements));
	    };
	    // https://tc39.github.io/ecma262/#sec-object-initializer
	    Parser.prototype.parsePropertyMethod = function (params) {
	        this.context.isAssignmentTarget = false;
	        this.context.isBindingElement = false;
	        var previousStrict = this.context.strict;
	        var previousAllowStrictDirective = this.context.allowStrictDirective;
	        this.context.allowStrictDirective = params.simple;
	        var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
	        if (this.context.strict && params.firstRestricted) {
	            this.tolerateUnexpectedToken(params.firstRestricted, params.message);
	        }
	        if (this.context.strict && params.stricted) {
	            this.tolerateUnexpectedToken(params.stricted, params.message);
	        }
	        this.context.strict = previousStrict;
	        this.context.allowStrictDirective = previousAllowStrictDirective;
	        return body;
	    };
	    Parser.prototype.parsePropertyMethodFunction = function () {
	        var isGenerator = false;
	        var node = this.createNode();
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = true;
	        var params = this.parseFormalParameters();
	        var method = this.parsePropertyMethod(params);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
	    };
	    Parser.prototype.parsePropertyMethodAsyncFunction = function () {
	        var node = this.createNode();
	        var previousAllowYield = this.context.allowYield;
	        var previousAwait = this.context.await;
	        this.context.allowYield = false;
	        this.context.await = true;
	        var params = this.parseFormalParameters();
	        var method = this.parsePropertyMethod(params);
	        this.context.allowYield = previousAllowYield;
	        this.context.await = previousAwait;
	        return this.finalize(node, new Node.AsyncFunctionExpression(null, params.params, method));
	    };
	    Parser.prototype.parseObjectPropertyKey = function () {
	        var node = this.createNode();
	        var token = this.nextToken();
	        var key;
	        switch (token.type) {
	            case 8 /* StringLiteral */:
	            case 6 /* NumericLiteral */:
	                if (this.context.strict && token.octal) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
	                }
	                var raw = this.getTokenRaw(token);
	                key = this.finalize(node, new Node.Literal(token.value, raw));
	                break;
	            case 3 /* Identifier */:
	            case 1 /* BooleanLiteral */:
	            case 5 /* NullLiteral */:
	            case 4 /* Keyword */:
	                key = this.finalize(node, new Node.Identifier(token.value));
	                break;
	            case 7 /* Punctuator */:
	                if (token.value === '[') {
	                    key = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    this.expect(']');
	                }
	                else {
	                    key = this.throwUnexpectedToken(token);
	                }
	                break;
	            default:
	                key = this.throwUnexpectedToken(token);
	        }
	        return key;
	    };
	    Parser.prototype.isPropertyKey = function (key, value) {
	        return (key.type === syntax_1.Syntax.Identifier && key.name === value) ||
	            (key.type === syntax_1.Syntax.Literal && key.value === value);
	    };
	    Parser.prototype.parseObjectProperty = function (hasProto) {
	        var node = this.createNode();
	        var token = this.lookahead;
	        var kind;
	        var key = null;
	        var value = null;
	        var computed = false;
	        var method = false;
	        var shorthand = false;
	        var isAsync = false;
	        if (token.type === 3 /* Identifier */) {
	            var id = token.value;
	            this.nextToken();
	            computed = this.match('[');
	            isAsync = !this.hasLineTerminator && (id === 'async') &&
	                !this.match(':') && !this.match('(') && !this.match('*') && !this.match(',');
	            key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node.Identifier(id));
	        }
	        else if (this.match('*')) {
	            this.nextToken();
	        }
	        else {
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	        }
	        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
	        if (token.type === 3 /* Identifier */ && !isAsync && token.value === 'get' && lookaheadPropertyKey) {
	            kind = 'get';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            this.context.allowYield = false;
	            value = this.parseGetterMethod();
	        }
	        else if (token.type === 3 /* Identifier */ && !isAsync && token.value === 'set' && lookaheadPropertyKey) {
	            kind = 'set';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            value = this.parseSetterMethod();
	        }
	        else if (token.type === 7 /* Punctuator */ && token.value === '*' && lookaheadPropertyKey) {
	            kind = 'init';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            value = this.parseGeneratorMethod();
	            method = true;
	        }
	        else {
	            if (!key) {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	            kind = 'init';
	            if (this.match(':') && !isAsync) {
	                if (!computed && this.isPropertyKey(key, '__proto__')) {
	                    if (hasProto.value) {
	                        this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
	                    }
	                    hasProto.value = true;
	                }
	                this.nextToken();
	                value = this.inheritCoverGrammar(this.parseAssignmentExpression);
	            }
	            else if (this.match('(')) {
	                value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
	                method = true;
	            }
	            else if (token.type === 3 /* Identifier */) {
	                var id = this.finalize(node, new Node.Identifier(token.value));
	                if (this.match('=')) {
	                    this.context.firstCoverInitializedNameError = this.lookahead;
	                    this.nextToken();
	                    shorthand = true;
	                    var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    value = this.finalize(node, new Node.AssignmentPattern(id, init));
	                }
	                else {
	                    shorthand = true;
	                    value = id;
	                }
	            }
	            else {
	                this.throwUnexpectedToken(this.nextToken());
	            }
	        }
	        return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
	    };
	    Parser.prototype.parseObjectInitializer = function () {
	        var node = this.createNode();
	        this.expect('{');
	        var properties = [];
	        var hasProto = { value: false };
	        while (!this.match('}')) {
	            properties.push(this.parseObjectProperty(hasProto));
	            if (!this.match('}')) {
	                this.expectCommaSeparator();
	            }
	        }
	        this.expect('}');
	        return this.finalize(node, new Node.ObjectExpression(properties));
	    };
	    // https://tc39.github.io/ecma262/#sec-template-literals
	    Parser.prototype.parseTemplateHead = function () {
	        assert_1.assert(this.lookahead.head, 'Template literal must start with a template head');
	        var node = this.createNode();
	        var token = this.nextToken();
	        var raw = token.value;
	        var cooked = token.cooked;
	        return this.finalize(node, new Node.TemplateElement({ raw: raw, cooked: cooked }, token.tail));
	    };
	    Parser.prototype.parseTemplateElement = function () {
	        if (this.lookahead.type !== 10 /* Template */) {
	            this.throwUnexpectedToken();
	        }
	        var node = this.createNode();
	        var token = this.nextToken();
	        var raw = token.value;
	        var cooked = token.cooked;
	        return this.finalize(node, new Node.TemplateElement({ raw: raw, cooked: cooked }, token.tail));
	    };
	    Parser.prototype.parseTemplateLiteral = function () {
	        var node = this.createNode();
	        var expressions = [];
	        var quasis = [];
	        var quasi = this.parseTemplateHead();
	        quasis.push(quasi);
	        while (!quasi.tail) {
	            expressions.push(this.parseExpression());
	            quasi = this.parseTemplateElement();
	            quasis.push(quasi);
	        }
	        return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
	    };
	    // https://tc39.github.io/ecma262/#sec-grouping-operator
	    Parser.prototype.reinterpretExpressionAsPattern = function (expr) {
	        switch (expr.type) {
	            case syntax_1.Syntax.Identifier:
	            case syntax_1.Syntax.MemberExpression:
	            case syntax_1.Syntax.RestElement:
	            case syntax_1.Syntax.AssignmentPattern:
	                break;
	            case syntax_1.Syntax.SpreadElement:
	                expr.type = syntax_1.Syntax.RestElement;
	                this.reinterpretExpressionAsPattern(expr.argument);
	                break;
	            case syntax_1.Syntax.ArrayExpression:
	                expr.type = syntax_1.Syntax.ArrayPattern;
	                for (var i = 0; i < expr.elements.length; i++) {
	                    if (expr.elements[i] !== null) {
	                        this.reinterpretExpressionAsPattern(expr.elements[i]);
	                    }
	                }
	                break;
	            case syntax_1.Syntax.ObjectExpression:
	                expr.type = syntax_1.Syntax.ObjectPattern;
	                for (var i = 0; i < expr.properties.length; i++) {
	                    this.reinterpretExpressionAsPattern(expr.properties[i].value);
	                }
	                break;
	            case syntax_1.Syntax.AssignmentExpression:
	                expr.type = syntax_1.Syntax.AssignmentPattern;
	                delete expr.operator;
	                this.reinterpretExpressionAsPattern(expr.left);
	                break;
	            default:
	                // Allow other node type for tolerant parsing.
	                break;
	        }
	    };
	    Parser.prototype.parseGroupExpression = function () {
	        var expr;
	        this.expect('(');
	        if (this.match(')')) {
	            this.nextToken();
	            if (!this.match('=>')) {
	                this.expect('=>');
	            }
	            expr = {
	                type: ArrowParameterPlaceHolder,
	                params: [],
	                async: false
	            };
	        }
	        else {
	            var startToken = this.lookahead;
	            var params = [];
	            if (this.match('...')) {
	                expr = this.parseRestElement(params);
	                this.expect(')');
	                if (!this.match('=>')) {
	                    this.expect('=>');
	                }
	                expr = {
	                    type: ArrowParameterPlaceHolder,
	                    params: [expr],
	                    async: false
	                };
	            }
	            else {
	                var arrow = false;
	                this.context.isBindingElement = true;
	                expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
	                if (this.match(',')) {
	                    var expressions = [];
	                    this.context.isAssignmentTarget = false;
	                    expressions.push(expr);
	                    while (this.lookahead.type !== 2 /* EOF */) {
	                        if (!this.match(',')) {
	                            break;
	                        }
	                        this.nextToken();
	                        if (this.match(')')) {
	                            this.nextToken();
	                            for (var i = 0; i < expressions.length; i++) {
	                                this.reinterpretExpressionAsPattern(expressions[i]);
	                            }
	                            arrow = true;
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: expressions,
	                                async: false
	                            };
	                        }
	                        else if (this.match('...')) {
	                            if (!this.context.isBindingElement) {
	                                this.throwUnexpectedToken(this.lookahead);
	                            }
	                            expressions.push(this.parseRestElement(params));
	                            this.expect(')');
	                            if (!this.match('=>')) {
	                                this.expect('=>');
	                            }
	                            this.context.isBindingElement = false;
	                            for (var i = 0; i < expressions.length; i++) {
	                                this.reinterpretExpressionAsPattern(expressions[i]);
	                            }
	                            arrow = true;
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: expressions,
	                                async: false
	                            };
	                        }
	                        else {
	                            expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
	                        }
	                        if (arrow) {
	                            break;
	                        }
	                    }
	                    if (!arrow) {
	                        expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
	                    }
	                }
	                if (!arrow) {
	                    this.expect(')');
	                    if (this.match('=>')) {
	                        if (expr.type === syntax_1.Syntax.Identifier && expr.name === 'yield') {
	                            arrow = true;
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: [expr],
	                                async: false
	                            };
	                        }
	                        if (!arrow) {
	                            if (!this.context.isBindingElement) {
	                                this.throwUnexpectedToken(this.lookahead);
	                            }
	                            if (expr.type === syntax_1.Syntax.SequenceExpression) {
	                                for (var i = 0; i < expr.expressions.length; i++) {
	                                    this.reinterpretExpressionAsPattern(expr.expressions[i]);
	                                }
	                            }
	                            else {
	                                this.reinterpretExpressionAsPattern(expr);
	                            }
	                            var parameters = (expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr]);
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: parameters,
	                                async: false
	                            };
	                        }
	                    }
	                    this.context.isBindingElement = false;
	                }
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-left-hand-side-expressions
	    Parser.prototype.parseArguments = function () {
	        this.expect('(');
	        var args = [];
	        if (!this.match(')')) {
	            while (true) {
	                var expr = this.match('...') ? this.parseSpreadElement() :
	                    this.isolateCoverGrammar(this.parseAssignmentExpression);
	                args.push(expr);
	                if (this.match(')')) {
	                    break;
	                }
	                this.expectCommaSeparator();
	                if (this.match(')')) {
	                    break;
	                }
	            }
	        }
	        this.expect(')');
	        return args;
	    };
	    Parser.prototype.isIdentifierName = function (token) {
	        return token.type === 3 /* Identifier */ ||
	            token.type === 4 /* Keyword */ ||
	            token.type === 1 /* BooleanLiteral */ ||
	            token.type === 5 /* NullLiteral */;
	    };
	    Parser.prototype.parseIdentifierName = function () {
	        var node = this.createNode();
	        var token = this.nextToken();
	        if (!this.isIdentifierName(token)) {
	            this.throwUnexpectedToken(token);
	        }
	        return this.finalize(node, new Node.Identifier(token.value));
	    };
	    Parser.prototype.parseNewExpression = function () {
	        var node = this.createNode();
	        var id = this.parseIdentifierName();
	        assert_1.assert(id.name === 'new', 'New expression must start with `new`');
	        var expr;
	        if (this.match('.')) {
	            this.nextToken();
	            if (this.lookahead.type === 3 /* Identifier */ && this.context.inFunctionBody && this.lookahead.value === 'target') {
	                var property = this.parseIdentifierName();
	                expr = new Node.MetaProperty(id, property);
	            }
	            else {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	        }
	        else {
	            var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
	            var args = this.match('(') ? this.parseArguments() : [];
	            expr = new Node.NewExpression(callee, args);
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        return this.finalize(node, expr);
	    };
	    Parser.prototype.parseAsyncArgument = function () {
	        var arg = this.parseAssignmentExpression();
	        this.context.firstCoverInitializedNameError = null;
	        return arg;
	    };
	    Parser.prototype.parseAsyncArguments = function () {
	        this.expect('(');
	        var args = [];
	        if (!this.match(')')) {
	            while (true) {
	                var expr = this.match('...') ? this.parseSpreadElement() :
	                    this.isolateCoverGrammar(this.parseAsyncArgument);
	                args.push(expr);
	                if (this.match(')')) {
	                    break;
	                }
	                this.expectCommaSeparator();
	                if (this.match(')')) {
	                    break;
	                }
	            }
	        }
	        this.expect(')');
	        return args;
	    };
	    Parser.prototype.parseLeftHandSideExpressionAllowCall = function () {
	        var startToken = this.lookahead;
	        var maybeAsync = this.matchContextualKeyword('async');
	        var previousAllowIn = this.context.allowIn;
	        this.context.allowIn = true;
	        var expr;
	        if (this.matchKeyword('super') && this.context.inFunctionBody) {
	            expr = this.createNode();
	            this.nextToken();
	            expr = this.finalize(expr, new Node.Super());
	            if (!this.match('(') && !this.match('.') && !this.match('[')) {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	        }
	        else {
	            expr = this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
	        }
	        while (true) {
	            if (this.match('.')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('.');
	                var property = this.parseIdentifierName();
	                expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
	            }
	            else if (this.match('(')) {
	                var asyncArrow = maybeAsync && (startToken.lineNumber === this.lookahead.lineNumber);
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = false;
	                var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
	                expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
	                if (asyncArrow && this.match('=>')) {
	                    for (var i = 0; i < args.length; ++i) {
	                        this.reinterpretExpressionAsPattern(args[i]);
	                    }
	                    expr = {
	                        type: ArrowParameterPlaceHolder,
	                        params: args,
	                        async: true
	                    };
	                }
	            }
	            else if (this.match('[')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('[');
	                var property = this.isolateCoverGrammar(this.parseExpression);
	                this.expect(']');
	                expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
	            }
	            else if (this.lookahead.type === 10 /* Template */ && this.lookahead.head) {
	                var quasi = this.parseTemplateLiteral();
	                expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
	            }
	            else {
	                break;
	            }
	        }
	        this.context.allowIn = previousAllowIn;
	        return expr;
	    };
	    Parser.prototype.parseSuper = function () {
	        var node = this.createNode();
	        this.expectKeyword('super');
	        if (!this.match('[') && !this.match('.')) {
	            this.throwUnexpectedToken(this.lookahead);
	        }
	        return this.finalize(node, new Node.Super());
	    };
	    Parser.prototype.parseLeftHandSideExpression = function () {
	        assert_1.assert(this.context.allowIn, 'callee of new expression always allow in keyword.');
	        var node = this.startNode(this.lookahead);
	        var expr = (this.matchKeyword('super') && this.context.inFunctionBody) ? this.parseSuper() :
	            this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
	        while (true) {
	            if (this.match('[')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('[');
	                var property = this.isolateCoverGrammar(this.parseExpression);
	                this.expect(']');
	                expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
	            }
	            else if (this.match('.')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('.');
	                var property = this.parseIdentifierName();
	                expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
	            }
	            else if (this.lookahead.type === 10 /* Template */ && this.lookahead.head) {
	                var quasi = this.parseTemplateLiteral();
	                expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
	            }
	            else {
	                break;
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-update-expressions
	    Parser.prototype.parseUpdateExpression = function () {
	        var expr;
	        var startToken = this.lookahead;
	        if (this.match('++') || this.match('--')) {
	            var node = this.startNode(startToken);
	            var token = this.nextToken();
	            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
	            if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
	                this.tolerateError(messages_1.Messages.StrictLHSPrefix);
	            }
	            if (!this.context.isAssignmentTarget) {
	                this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
	            }
	            var prefix = true;
	            expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        else {
	            expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
	            if (!this.hasLineTerminator && this.lookahead.type === 7 /* Punctuator */) {
	                if (this.match('++') || this.match('--')) {
	                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
	                        this.tolerateError(messages_1.Messages.StrictLHSPostfix);
	                    }
	                    if (!this.context.isAssignmentTarget) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
	                    }
	                    this.context.isAssignmentTarget = false;
	                    this.context.isBindingElement = false;
	                    var operator = this.nextToken().value;
	                    var prefix = false;
	                    expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
	                }
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-unary-operators
	    Parser.prototype.parseAwaitExpression = function () {
	        var node = this.createNode();
	        this.nextToken();
	        var argument = this.parseUnaryExpression();
	        return this.finalize(node, new Node.AwaitExpression(argument));
	    };
	    Parser.prototype.parseUnaryExpression = function () {
	        var expr;
	        if (this.match('+') || this.match('-') || this.match('~') || this.match('!') ||
	            this.matchKeyword('delete') || this.matchKeyword('void') || this.matchKeyword('typeof')) {
	            var node = this.startNode(this.lookahead);
	            var token = this.nextToken();
	            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
	            expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
	            if (this.context.strict && expr.operator === 'delete' && expr.argument.type === syntax_1.Syntax.Identifier) {
	                this.tolerateError(messages_1.Messages.StrictDelete);
	            }
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        else if (this.context.await && this.matchContextualKeyword('await')) {
	            expr = this.parseAwaitExpression();
	        }
	        else {
	            expr = this.parseUpdateExpression();
	        }
	        return expr;
	    };
	    Parser.prototype.parseExponentiationExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
	        if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match('**')) {
	            this.nextToken();
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	            var left = expr;
	            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
	            expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression('**', left, right));
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-exp-operator
	    // https://tc39.github.io/ecma262/#sec-multiplicative-operators
	    // https://tc39.github.io/ecma262/#sec-additive-operators
	    // https://tc39.github.io/ecma262/#sec-bitwise-shift-operators
	    // https://tc39.github.io/ecma262/#sec-relational-operators
	    // https://tc39.github.io/ecma262/#sec-equality-operators
	    // https://tc39.github.io/ecma262/#sec-binary-bitwise-operators
	    // https://tc39.github.io/ecma262/#sec-binary-logical-operators
	    Parser.prototype.binaryPrecedence = function (token) {
	        var op = token.value;
	        var precedence;
	        if (token.type === 7 /* Punctuator */) {
	            precedence = this.operatorPrecedence[op] || 0;
	        }
	        else if (token.type === 4 /* Keyword */) {
	            precedence = (op === 'instanceof' || (this.context.allowIn && op === 'in')) ? 7 : 0;
	        }
	        else {
	            precedence = 0;
	        }
	        return precedence;
	    };
	    Parser.prototype.parseBinaryExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
	        var token = this.lookahead;
	        var prec = this.binaryPrecedence(token);
	        if (prec > 0) {
	            this.nextToken();
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	            var markers = [startToken, this.lookahead];
	            var left = expr;
	            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
	            var stack = [left, token.value, right];
	            var precedences = [prec];
	            while (true) {
	                prec = this.binaryPrecedence(this.lookahead);
	                if (prec <= 0) {
	                    break;
	                }
	                // Reduce: make a binary expression from the three topmost entries.
	                while ((stack.length > 2) && (prec <= precedences[precedences.length - 1])) {
	                    right = stack.pop();
	                    var operator = stack.pop();
	                    precedences.pop();
	                    left = stack.pop();
	                    markers.pop();
	                    var node = this.startNode(markers[markers.length - 1]);
	                    stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
	                }
	                // Shift.
	                stack.push(this.nextToken().value);
	                precedences.push(prec);
	                markers.push(this.lookahead);
	                stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
	            }
	            // Final reduce to clean-up the stack.
	            var i = stack.length - 1;
	            expr = stack[i];
	            var lastMarker = markers.pop();
	            while (i > 1) {
	                var marker = markers.pop();
	                var lastLineStart = lastMarker && lastMarker.lineStart;
	                var node = this.startNode(marker, lastLineStart);
	                var operator = stack[i - 1];
	                expr = this.finalize(node, new Node.BinaryExpression(operator, stack[i - 2], expr));
	                i -= 2;
	                lastMarker = marker;
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-conditional-operator
	    Parser.prototype.parseConditionalExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
	        if (this.match('?')) {
	            this.nextToken();
	            var previousAllowIn = this.context.allowIn;
	            this.context.allowIn = true;
	            var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            this.context.allowIn = previousAllowIn;
	            this.expect(':');
	            var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-assignment-operators
	    Parser.prototype.checkPatternParam = function (options, param) {
	        switch (param.type) {
	            case syntax_1.Syntax.Identifier:
	                this.validateParam(options, param, param.name);
	                break;
	            case syntax_1.Syntax.RestElement:
	                this.checkPatternParam(options, param.argument);
	                break;
	            case syntax_1.Syntax.AssignmentPattern:
	                this.checkPatternParam(options, param.left);
	                break;
	            case syntax_1.Syntax.ArrayPattern:
	                for (var i = 0; i < param.elements.length; i++) {
	                    if (param.elements[i] !== null) {
	                        this.checkPatternParam(options, param.elements[i]);
	                    }
	                }
	                break;
	            case syntax_1.Syntax.ObjectPattern:
	                for (var i = 0; i < param.properties.length; i++) {
	                    this.checkPatternParam(options, param.properties[i].value);
	                }
	                break;
	            default:
	                break;
	        }
	        options.simple = options.simple && (param instanceof Node.Identifier);
	    };
	    Parser.prototype.reinterpretAsCoverFormalsList = function (expr) {
	        var params = [expr];
	        var options;
	        var asyncArrow = false;
	        switch (expr.type) {
	            case syntax_1.Syntax.Identifier:
	                break;
	            case ArrowParameterPlaceHolder:
	                params = expr.params;
	                asyncArrow = expr.async;
	                break;
	            default:
	                return null;
	        }
	        options = {
	            simple: true,
	            paramSet: {}
	        };
	        for (var i = 0; i < params.length; ++i) {
	            var param = params[i];
	            if (param.type === syntax_1.Syntax.AssignmentPattern) {
	                if (param.right.type === syntax_1.Syntax.YieldExpression) {
	                    if (param.right.argument) {
	                        this.throwUnexpectedToken(this.lookahead);
	                    }
	                    param.right.type = syntax_1.Syntax.Identifier;
	                    param.right.name = 'yield';
	                    delete param.right.argument;
	                    delete param.right.delegate;
	                }
	            }
	            else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === 'await') {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	            this.checkPatternParam(options, param);
	            params[i] = param;
	        }
	        if (this.context.strict || !this.context.allowYield) {
	            for (var i = 0; i < params.length; ++i) {
	                var param = params[i];
	                if (param.type === syntax_1.Syntax.YieldExpression) {
	                    this.throwUnexpectedToken(this.lookahead);
	                }
	            }
	        }
	        if (options.message === messages_1.Messages.StrictParamDupe) {
	            var token = this.context.strict ? options.stricted : options.firstRestricted;
	            this.throwUnexpectedToken(token, options.message);
	        }
	        return {
	            simple: options.simple,
	            params: params,
	            stricted: options.stricted,
	            firstRestricted: options.firstRestricted,
	            message: options.message
	        };
	    };
	    Parser.prototype.parseAssignmentExpression = function () {
	        var expr;
	        if (!this.context.allowYield && this.matchKeyword('yield')) {
	            expr = this.parseYieldExpression();
	        }
	        else {
	            var startToken = this.lookahead;
	            var token = startToken;
	            expr = this.parseConditionalExpression();
	            if (token.type === 3 /* Identifier */ && (token.lineNumber === this.lookahead.lineNumber) && token.value === 'async') {
	                if (this.lookahead.type === 3 /* Identifier */ || this.matchKeyword('yield')) {
	                    var arg = this.parsePrimaryExpression();
	                    this.reinterpretExpressionAsPattern(arg);
	                    expr = {
	                        type: ArrowParameterPlaceHolder,
	                        params: [arg],
	                        async: true
	                    };
	                }
	            }
	            if (expr.type === ArrowParameterPlaceHolder || this.match('=>')) {
	                // https://tc39.github.io/ecma262/#sec-arrow-function-definitions
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                var isAsync = expr.async;
	                var list = this.reinterpretAsCoverFormalsList(expr);
	                if (list) {
	                    if (this.hasLineTerminator) {
	                        this.tolerateUnexpectedToken(this.lookahead);
	                    }
	                    this.context.firstCoverInitializedNameError = null;
	                    var previousStrict = this.context.strict;
	                    var previousAllowStrictDirective = this.context.allowStrictDirective;
	                    this.context.allowStrictDirective = list.simple;
	                    var previousAllowYield = this.context.allowYield;
	                    var previousAwait = this.context.await;
	                    this.context.allowYield = true;
	                    this.context.await = isAsync;
	                    var node = this.startNode(startToken);
	                    this.expect('=>');
	                    var body = void 0;
	                    if (this.match('{')) {
	                        var previousAllowIn = this.context.allowIn;
	                        this.context.allowIn = true;
	                        body = this.parseFunctionSourceElements();
	                        this.context.allowIn = previousAllowIn;
	                    }
	                    else {
	                        body = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    }
	                    var expression = body.type !== syntax_1.Syntax.BlockStatement;
	                    if (this.context.strict && list.firstRestricted) {
	                        this.throwUnexpectedToken(list.firstRestricted, list.message);
	                    }
	                    if (this.context.strict && list.stricted) {
	                        this.tolerateUnexpectedToken(list.stricted, list.message);
	                    }
	                    expr = isAsync ? this.finalize(node, new Node.AsyncArrowFunctionExpression(list.params, body, expression)) :
	                        this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
	                    this.context.strict = previousStrict;
	                    this.context.allowStrictDirective = previousAllowStrictDirective;
	                    this.context.allowYield = previousAllowYield;
	                    this.context.await = previousAwait;
	                }
	            }
	            else {
	                if (this.matchAssign()) {
	                    if (!this.context.isAssignmentTarget) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
	                    }
	                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
	                        var id = expr;
	                        if (this.scanner.isRestrictedWord(id.name)) {
	                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
	                        }
	                        if (this.scanner.isStrictModeReservedWord(id.name)) {
	                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
	                        }
	                    }
	                    if (!this.match('=')) {
	                        this.context.isAssignmentTarget = false;
	                        this.context.isBindingElement = false;
	                    }
	                    else {
	                        this.reinterpretExpressionAsPattern(expr);
	                    }
	                    token = this.nextToken();
	                    var operator = token.value;
	                    var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(operator, expr, right));
	                    this.context.firstCoverInitializedNameError = null;
	                }
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-comma-operator
	    Parser.prototype.parseExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
	        if (this.match(',')) {
	            var expressions = [];
	            expressions.push(expr);
	            while (this.lookahead.type !== 2 /* EOF */) {
	                if (!this.match(',')) {
	                    break;
	                }
	                this.nextToken();
	                expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
	            }
	            expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-block
	    Parser.prototype.parseStatementListItem = function () {
	        var statement;
	        this.context.isAssignmentTarget = true;
	        this.context.isBindingElement = true;
	        if (this.lookahead.type === 4 /* Keyword */) {
	            switch (this.lookahead.value) {
	                case 'export':
	                    if (!this.context.isModule) {
	                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
	                    }
	                    statement = this.parseExportDeclaration();
	                    break;
	                case 'import':
	                    if (!this.context.isModule) {
	                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
	                    }
	                    statement = this.parseImportDeclaration();
	                    break;
	                case 'const':
	                    statement = this.parseLexicalDeclaration({ inFor: false });
	                    break;
	                case 'function':
	                    statement = this.parseFunctionDeclaration();
	                    break;
	                case 'class':
	                    statement = this.parseClassDeclaration();
	                    break;
	                case 'let':
	                    statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
	                    break;
	                default:
	                    statement = this.parseStatement();
	                    break;
	            }
	        }
	        else {
	            statement = this.parseStatement();
	        }
	        return statement;
	    };
	    Parser.prototype.parseBlock = function () {
	        var node = this.createNode();
	        this.expect('{');
	        var block = [];
	        while (true) {
	            if (this.match('}')) {
	                break;
	            }
	            block.push(this.parseStatementListItem());
	        }
	        this.expect('}');
	        return this.finalize(node, new Node.BlockStatement(block));
	    };
	    // https://tc39.github.io/ecma262/#sec-let-and-const-declarations
	    Parser.prototype.parseLexicalBinding = function (kind, options) {
	        var node = this.createNode();
	        var params = [];
	        var id = this.parsePattern(params, kind);
	        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
	            if (this.scanner.isRestrictedWord(id.name)) {
	                this.tolerateError(messages_1.Messages.StrictVarName);
	            }
	        }
	        var init = null;
	        if (kind === 'const') {
	            if (!this.matchKeyword('in') && !this.matchContextualKeyword('of')) {
	                if (this.match('=')) {
	                    this.nextToken();
	                    init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                }
	                else {
	                    this.throwError(messages_1.Messages.DeclarationMissingInitializer, 'const');
	                }
	            }
	        }
	        else if ((!options.inFor && id.type !== syntax_1.Syntax.Identifier) || this.match('=')) {
	            this.expect('=');
	            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	        }
	        return this.finalize(node, new Node.VariableDeclarator(id, init));
	    };
	    Parser.prototype.parseBindingList = function (kind, options) {
	        var list = [this.parseLexicalBinding(kind, options)];
	        while (this.match(',')) {
	            this.nextToken();
	            list.push(this.parseLexicalBinding(kind, options));
	        }
	        return list;
	    };
	    Parser.prototype.isLexicalDeclaration = function () {
	        var state = this.scanner.saveState();
	        this.scanner.scanComments();
	        var next = this.scanner.lex();
	        this.scanner.restoreState(state);
	        return (next.type === 3 /* Identifier */) ||
	            (next.type === 7 /* Punctuator */ && next.value === '[') ||
	            (next.type === 7 /* Punctuator */ && next.value === '{') ||
	            (next.type === 4 /* Keyword */ && next.value === 'let') ||
	            (next.type === 4 /* Keyword */ && next.value === 'yield');
	    };
	    Parser.prototype.parseLexicalDeclaration = function (options) {
	        var node = this.createNode();
	        var kind = this.nextToken().value;
	        assert_1.assert(kind === 'let' || kind === 'const', 'Lexical declaration must be either let or const');
	        var declarations = this.parseBindingList(kind, options);
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
	    };
	    // https://tc39.github.io/ecma262/#sec-destructuring-binding-patterns
	    Parser.prototype.parseBindingRestElement = function (params, kind) {
	        var node = this.createNode();
	        this.expect('...');
	        var arg = this.parsePattern(params, kind);
	        return this.finalize(node, new Node.RestElement(arg));
	    };
	    Parser.prototype.parseArrayPattern = function (params, kind) {
	        var node = this.createNode();
	        this.expect('[');
	        var elements = [];
	        while (!this.match(']')) {
	            if (this.match(',')) {
	                this.nextToken();
	                elements.push(null);
	            }
	            else {
	                if (this.match('...')) {
	                    elements.push(this.parseBindingRestElement(params, kind));
	                    break;
	                }
	                else {
	                    elements.push(this.parsePatternWithDefault(params, kind));
	                }
	                if (!this.match(']')) {
	                    this.expect(',');
	                }
	            }
	        }
	        this.expect(']');
	        return this.finalize(node, new Node.ArrayPattern(elements));
	    };
	    Parser.prototype.parsePropertyPattern = function (params, kind) {
	        var node = this.createNode();
	        var computed = false;
	        var shorthand = false;
	        var method = false;
	        var key;
	        var value;
	        if (this.lookahead.type === 3 /* Identifier */) {
	            var keyToken = this.lookahead;
	            key = this.parseVariableIdentifier();
	            var init = this.finalize(node, new Node.Identifier(keyToken.value));
	            if (this.match('=')) {
	                params.push(keyToken);
	                shorthand = true;
	                this.nextToken();
	                var expr = this.parseAssignmentExpression();
	                value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
	            }
	            else if (!this.match(':')) {
	                params.push(keyToken);
	                shorthand = true;
	                value = init;
	            }
	            else {
	                this.expect(':');
	                value = this.parsePatternWithDefault(params, kind);
	            }
	        }
	        else {
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            this.expect(':');
	            value = this.parsePatternWithDefault(params, kind);
	        }
	        return this.finalize(node, new Node.Property('init', key, computed, value, method, shorthand));
	    };
	    Parser.prototype.parseObjectPattern = function (params, kind) {
	        var node = this.createNode();
	        var properties = [];
	        this.expect('{');
	        while (!this.match('}')) {
	            properties.push(this.parsePropertyPattern(params, kind));
	            if (!this.match('}')) {
	                this.expect(',');
	            }
	        }
	        this.expect('}');
	        return this.finalize(node, new Node.ObjectPattern(properties));
	    };
	    Parser.prototype.parsePattern = function (params, kind) {
	        var pattern;
	        if (this.match('[')) {
	            pattern = this.parseArrayPattern(params, kind);
	        }
	        else if (this.match('{')) {
	            pattern = this.parseObjectPattern(params, kind);
	        }
	        else {
	            if (this.matchKeyword('let') && (kind === 'const' || kind === 'let')) {
	                this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
	            }
	            params.push(this.lookahead);
	            pattern = this.parseVariableIdentifier(kind);
	        }
	        return pattern;
	    };
	    Parser.prototype.parsePatternWithDefault = function (params, kind) {
	        var startToken = this.lookahead;
	        var pattern = this.parsePattern(params, kind);
	        if (this.match('=')) {
	            this.nextToken();
	            var previousAllowYield = this.context.allowYield;
	            this.context.allowYield = true;
	            var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            this.context.allowYield = previousAllowYield;
	            pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
	        }
	        return pattern;
	    };
	    // https://tc39.github.io/ecma262/#sec-variable-statement
	    Parser.prototype.parseVariableIdentifier = function (kind) {
	        var node = this.createNode();
	        var token = this.nextToken();
	        if (token.type === 4 /* Keyword */ && token.value === 'yield') {
	            if (this.context.strict) {
	                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
	            }
	            else if (!this.context.allowYield) {
	                this.throwUnexpectedToken(token);
	            }
	        }
	        else if (token.type !== 3 /* Identifier */) {
	            if (this.context.strict && token.type === 4 /* Keyword */ && this.scanner.isStrictModeReservedWord(token.value)) {
	                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
	            }
	            else {
	                if (this.context.strict || token.value !== 'let' || kind !== 'var') {
	                    this.throwUnexpectedToken(token);
	                }
	            }
	        }
	        else if ((this.context.isModule || this.context.await) && token.type === 3 /* Identifier */ && token.value === 'await') {
	            this.tolerateUnexpectedToken(token);
	        }
	        return this.finalize(node, new Node.Identifier(token.value));
	    };
	    Parser.prototype.parseVariableDeclaration = function (options) {
	        var node = this.createNode();
	        var params = [];
	        var id = this.parsePattern(params, 'var');
	        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
	            if (this.scanner.isRestrictedWord(id.name)) {
	                this.tolerateError(messages_1.Messages.StrictVarName);
	            }
	        }
	        var init = null;
	        if (this.match('=')) {
	            this.nextToken();
	            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	        }
	        else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
	            this.expect('=');
	        }
	        return this.finalize(node, new Node.VariableDeclarator(id, init));
	    };
	    Parser.prototype.parseVariableDeclarationList = function (options) {
	        var opt = { inFor: options.inFor };
	        var list = [];
	        list.push(this.parseVariableDeclaration(opt));
	        while (this.match(',')) {
	            this.nextToken();
	            list.push(this.parseVariableDeclaration(opt));
	        }
	        return list;
	    };
	    Parser.prototype.parseVariableStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('var');
	        var declarations = this.parseVariableDeclarationList({ inFor: false });
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.VariableDeclaration(declarations, 'var'));
	    };
	    // https://tc39.github.io/ecma262/#sec-empty-statement
	    Parser.prototype.parseEmptyStatement = function () {
	        var node = this.createNode();
	        this.expect(';');
	        return this.finalize(node, new Node.EmptyStatement());
	    };
	    // https://tc39.github.io/ecma262/#sec-expression-statement
	    Parser.prototype.parseExpressionStatement = function () {
	        var node = this.createNode();
	        var expr = this.parseExpression();
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ExpressionStatement(expr));
	    };
	    // https://tc39.github.io/ecma262/#sec-if-statement
	    Parser.prototype.parseIfClause = function () {
	        if (this.context.strict && this.matchKeyword('function')) {
	            this.tolerateError(messages_1.Messages.StrictFunction);
	        }
	        return this.parseStatement();
	    };
	    Parser.prototype.parseIfStatement = function () {
	        var node = this.createNode();
	        var consequent;
	        var alternate = null;
	        this.expectKeyword('if');
	        this.expect('(');
	        var test = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            consequent = this.parseIfClause();
	            if (this.matchKeyword('else')) {
	                this.nextToken();
	                alternate = this.parseIfClause();
	            }
	        }
	        return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
	    };
	    // https://tc39.github.io/ecma262/#sec-do-while-statement
	    Parser.prototype.parseDoWhileStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('do');
	        var previousInIteration = this.context.inIteration;
	        this.context.inIteration = true;
	        var body = this.parseStatement();
	        this.context.inIteration = previousInIteration;
	        this.expectKeyword('while');
	        this.expect('(');
	        var test = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	        }
	        else {
	            this.expect(')');
	            if (this.match(';')) {
	                this.nextToken();
	            }
	        }
	        return this.finalize(node, new Node.DoWhileStatement(body, test));
	    };
	    // https://tc39.github.io/ecma262/#sec-while-statement
	    Parser.prototype.parseWhileStatement = function () {
	        var node = this.createNode();
	        var body;
	        this.expectKeyword('while');
	        this.expect('(');
	        var test = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            body = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            var previousInIteration = this.context.inIteration;
	            this.context.inIteration = true;
	            body = this.parseStatement();
	            this.context.inIteration = previousInIteration;
	        }
	        return this.finalize(node, new Node.WhileStatement(test, body));
	    };
	    // https://tc39.github.io/ecma262/#sec-for-statement
	    // https://tc39.github.io/ecma262/#sec-for-in-and-for-of-statements
	    Parser.prototype.parseForStatement = function () {
	        var init = null;
	        var test = null;
	        var update = null;
	        var forIn = true;
	        var left, right;
	        var node = this.createNode();
	        this.expectKeyword('for');
	        this.expect('(');
	        if (this.match(';')) {
	            this.nextToken();
	        }
	        else {
	            if (this.matchKeyword('var')) {
	                init = this.createNode();
	                this.nextToken();
	                var previousAllowIn = this.context.allowIn;
	                this.context.allowIn = false;
	                var declarations = this.parseVariableDeclarationList({ inFor: true });
	                this.context.allowIn = previousAllowIn;
	                if (declarations.length === 1 && this.matchKeyword('in')) {
	                    var decl = declarations[0];
	                    if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
	                        this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, 'for-in');
	                    }
	                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
	                    this.nextToken();
	                    left = init;
	                    right = this.parseExpression();
	                    init = null;
	                }
	                else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
	                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
	                    this.nextToken();
	                    left = init;
	                    right = this.parseAssignmentExpression();
	                    init = null;
	                    forIn = false;
	                }
	                else {
	                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
	                    this.expect(';');
	                }
	            }
	            else if (this.matchKeyword('const') || this.matchKeyword('let')) {
	                init = this.createNode();
	                var kind = this.nextToken().value;
	                if (!this.context.strict && this.lookahead.value === 'in') {
	                    init = this.finalize(init, new Node.Identifier(kind));
	                    this.nextToken();
	                    left = init;
	                    right = this.parseExpression();
	                    init = null;
	                }
	                else {
	                    var previousAllowIn = this.context.allowIn;
	                    this.context.allowIn = false;
	                    var declarations = this.parseBindingList(kind, { inFor: true });
	                    this.context.allowIn = previousAllowIn;
	                    if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword('in')) {
	                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
	                        this.nextToken();
	                        left = init;
	                        right = this.parseExpression();
	                        init = null;
	                    }
	                    else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
	                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
	                        this.nextToken();
	                        left = init;
	                        right = this.parseAssignmentExpression();
	                        init = null;
	                        forIn = false;
	                    }
	                    else {
	                        this.consumeSemicolon();
	                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
	                    }
	                }
	            }
	            else {
	                var initStartToken = this.lookahead;
	                var previousAllowIn = this.context.allowIn;
	                this.context.allowIn = false;
	                init = this.inheritCoverGrammar(this.parseAssignmentExpression);
	                this.context.allowIn = previousAllowIn;
	                if (this.matchKeyword('in')) {
	                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
	                    }
	                    this.nextToken();
	                    this.reinterpretExpressionAsPattern(init);
	                    left = init;
	                    right = this.parseExpression();
	                    init = null;
	                }
	                else if (this.matchContextualKeyword('of')) {
	                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
	                    }
	                    this.nextToken();
	                    this.reinterpretExpressionAsPattern(init);
	                    left = init;
	                    right = this.parseAssignmentExpression();
	                    init = null;
	                    forIn = false;
	                }
	                else {
	                    if (this.match(',')) {
	                        var initSeq = [init];
	                        while (this.match(',')) {
	                            this.nextToken();
	                            initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
	                        }
	                        init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
	                    }
	                    this.expect(';');
	                }
	            }
	        }
	        if (typeof left === 'undefined') {
	            if (!this.match(';')) {
	                test = this.parseExpression();
	            }
	            this.expect(';');
	            if (!this.match(')')) {
	                update = this.parseExpression();
	            }
	        }
	        var body;
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            body = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            var previousInIteration = this.context.inIteration;
	            this.context.inIteration = true;
	            body = this.isolateCoverGrammar(this.parseStatement);
	            this.context.inIteration = previousInIteration;
	        }
	        return (typeof left === 'undefined') ?
	            this.finalize(node, new Node.ForStatement(init, test, update, body)) :
	            forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) :
	                this.finalize(node, new Node.ForOfStatement(left, right, body));
	    };
	    // https://tc39.github.io/ecma262/#sec-continue-statement
	    Parser.prototype.parseContinueStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('continue');
	        var label = null;
	        if (this.lookahead.type === 3 /* Identifier */ && !this.hasLineTerminator) {
	            var id = this.parseVariableIdentifier();
	            label = id;
	            var key = '$' + id.name;
	            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
	                this.throwError(messages_1.Messages.UnknownLabel, id.name);
	            }
	        }
	        this.consumeSemicolon();
	        if (label === null && !this.context.inIteration) {
	            this.throwError(messages_1.Messages.IllegalContinue);
	        }
	        return this.finalize(node, new Node.ContinueStatement(label));
	    };
	    // https://tc39.github.io/ecma262/#sec-break-statement
	    Parser.prototype.parseBreakStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('break');
	        var label = null;
	        if (this.lookahead.type === 3 /* Identifier */ && !this.hasLineTerminator) {
	            var id = this.parseVariableIdentifier();
	            var key = '$' + id.name;
	            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
	                this.throwError(messages_1.Messages.UnknownLabel, id.name);
	            }
	            label = id;
	        }
	        this.consumeSemicolon();
	        if (label === null && !this.context.inIteration && !this.context.inSwitch) {
	            this.throwError(messages_1.Messages.IllegalBreak);
	        }
	        return this.finalize(node, new Node.BreakStatement(label));
	    };
	    // https://tc39.github.io/ecma262/#sec-return-statement
	    Parser.prototype.parseReturnStatement = function () {
	        if (!this.context.inFunctionBody) {
	            this.tolerateError(messages_1.Messages.IllegalReturn);
	        }
	        var node = this.createNode();
	        this.expectKeyword('return');
	        var hasArgument = (!this.match(';') && !this.match('}') &&
	            !this.hasLineTerminator && this.lookahead.type !== 2 /* EOF */) ||
	            this.lookahead.type === 8 /* StringLiteral */ ||
	            this.lookahead.type === 10 /* Template */;
	        var argument = hasArgument ? this.parseExpression() : null;
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ReturnStatement(argument));
	    };
	    // https://tc39.github.io/ecma262/#sec-with-statement
	    Parser.prototype.parseWithStatement = function () {
	        if (this.context.strict) {
	            this.tolerateError(messages_1.Messages.StrictModeWith);
	        }
	        var node = this.createNode();
	        var body;
	        this.expectKeyword('with');
	        this.expect('(');
	        var object = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            body = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            body = this.parseStatement();
	        }
	        return this.finalize(node, new Node.WithStatement(object, body));
	    };
	    // https://tc39.github.io/ecma262/#sec-switch-statement
	    Parser.prototype.parseSwitchCase = function () {
	        var node = this.createNode();
	        var test;
	        if (this.matchKeyword('default')) {
	            this.nextToken();
	            test = null;
	        }
	        else {
	            this.expectKeyword('case');
	            test = this.parseExpression();
	        }
	        this.expect(':');
	        var consequent = [];
	        while (true) {
	            if (this.match('}') || this.matchKeyword('default') || this.matchKeyword('case')) {
	                break;
	            }
	            consequent.push(this.parseStatementListItem());
	        }
	        return this.finalize(node, new Node.SwitchCase(test, consequent));
	    };
	    Parser.prototype.parseSwitchStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('switch');
	        this.expect('(');
	        var discriminant = this.parseExpression();
	        this.expect(')');
	        var previousInSwitch = this.context.inSwitch;
	        this.context.inSwitch = true;
	        var cases = [];
	        var defaultFound = false;
	        this.expect('{');
	        while (true) {
	            if (this.match('}')) {
	                break;
	            }
	            var clause = this.parseSwitchCase();
	            if (clause.test === null) {
	                if (defaultFound) {
	                    this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
	                }
	                defaultFound = true;
	            }
	            cases.push(clause);
	        }
	        this.expect('}');
	        this.context.inSwitch = previousInSwitch;
	        return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
	    };
	    // https://tc39.github.io/ecma262/#sec-labelled-statements
	    Parser.prototype.parseLabelledStatement = function () {
	        var node = this.createNode();
	        var expr = this.parseExpression();
	        var statement;
	        if ((expr.type === syntax_1.Syntax.Identifier) && this.match(':')) {
	            this.nextToken();
	            var id = expr;
	            var key = '$' + id.name;
	            if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
	                this.throwError(messages_1.Messages.Redeclaration, 'Label', id.name);
	            }
	            this.context.labelSet[key] = true;
	            var body = void 0;
	            if (this.matchKeyword('class')) {
	                this.tolerateUnexpectedToken(this.lookahead);
	                body = this.parseClassDeclaration();
	            }
	            else if (this.matchKeyword('function')) {
	                var token = this.lookahead;
	                var declaration = this.parseFunctionDeclaration();
	                if (this.context.strict) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
	                }
	                else if (declaration.generator) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
	                }
	                body = declaration;
	            }
	            else {
	                body = this.parseStatement();
	            }
	            delete this.context.labelSet[key];
	            statement = new Node.LabeledStatement(id, body);
	        }
	        else {
	            this.consumeSemicolon();
	            statement = new Node.ExpressionStatement(expr);
	        }
	        return this.finalize(node, statement);
	    };
	    // https://tc39.github.io/ecma262/#sec-throw-statement
	    Parser.prototype.parseThrowStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('throw');
	        if (this.hasLineTerminator) {
	            this.throwError(messages_1.Messages.NewlineAfterThrow);
	        }
	        var argument = this.parseExpression();
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ThrowStatement(argument));
	    };
	    // https://tc39.github.io/ecma262/#sec-try-statement
	    Parser.prototype.parseCatchClause = function () {
	        var node = this.createNode();
	        this.expectKeyword('catch');
	        this.expect('(');
	        if (this.match(')')) {
	            this.throwUnexpectedToken(this.lookahead);
	        }
	        var params = [];
	        var param = this.parsePattern(params);
	        var paramMap = {};
	        for (var i = 0; i < params.length; i++) {
	            var key = '$' + params[i].value;
	            if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
	                this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
	            }
	            paramMap[key] = true;
	        }
	        if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
	            if (this.scanner.isRestrictedWord(param.name)) {
	                this.tolerateError(messages_1.Messages.StrictCatchVariable);
	            }
	        }
	        this.expect(')');
	        var body = this.parseBlock();
	        return this.finalize(node, new Node.CatchClause(param, body));
	    };
	    Parser.prototype.parseFinallyClause = function () {
	        this.expectKeyword('finally');
	        return this.parseBlock();
	    };
	    Parser.prototype.parseTryStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('try');
	        var block = this.parseBlock();
	        var handler = this.matchKeyword('catch') ? this.parseCatchClause() : null;
	        var finalizer = this.matchKeyword('finally') ? this.parseFinallyClause() : null;
	        if (!handler && !finalizer) {
	            this.throwError(messages_1.Messages.NoCatchOrFinally);
	        }
	        return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
	    };
	    // https://tc39.github.io/ecma262/#sec-debugger-statement
	    Parser.prototype.parseDebuggerStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('debugger');
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.DebuggerStatement());
	    };
	    // https://tc39.github.io/ecma262/#sec-ecmascript-language-statements-and-declarations
	    Parser.prototype.parseStatement = function () {
	        var statement;
	        switch (this.lookahead.type) {
	            case 1 /* BooleanLiteral */:
	            case 5 /* NullLiteral */:
	            case 6 /* NumericLiteral */:
	            case 8 /* StringLiteral */:
	            case 10 /* Template */:
	            case 9 /* RegularExpression */:
	                statement = this.parseExpressionStatement();
	                break;
	            case 7 /* Punctuator */:
	                var value = this.lookahead.value;
	                if (value === '{') {
	                    statement = this.parseBlock();
	                }
	                else if (value === '(') {
	                    statement = this.parseExpressionStatement();
	                }
	                else if (value === ';') {
	                    statement = this.parseEmptyStatement();
	                }
	                else {
	                    statement = this.parseExpressionStatement();
	                }
	                break;
	            case 3 /* Identifier */:
	                statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
	                break;
	            case 4 /* Keyword */:
	                switch (this.lookahead.value) {
	                    case 'break':
	                        statement = this.parseBreakStatement();
	                        break;
	                    case 'continue':
	                        statement = this.parseContinueStatement();
	                        break;
	                    case 'debugger':
	                        statement = this.parseDebuggerStatement();
	                        break;
	                    case 'do':
	                        statement = this.parseDoWhileStatement();
	                        break;
	                    case 'for':
	                        statement = this.parseForStatement();
	                        break;
	                    case 'function':
	                        statement = this.parseFunctionDeclaration();
	                        break;
	                    case 'if':
	                        statement = this.parseIfStatement();
	                        break;
	                    case 'return':
	                        statement = this.parseReturnStatement();
	                        break;
	                    case 'switch':
	                        statement = this.parseSwitchStatement();
	                        break;
	                    case 'throw':
	                        statement = this.parseThrowStatement();
	                        break;
	                    case 'try':
	                        statement = this.parseTryStatement();
	                        break;
	                    case 'var':
	                        statement = this.parseVariableStatement();
	                        break;
	                    case 'while':
	                        statement = this.parseWhileStatement();
	                        break;
	                    case 'with':
	                        statement = this.parseWithStatement();
	                        break;
	                    default:
	                        statement = this.parseExpressionStatement();
	                        break;
	                }
	                break;
	            default:
	                statement = this.throwUnexpectedToken(this.lookahead);
	        }
	        return statement;
	    };
	    // https://tc39.github.io/ecma262/#sec-function-definitions
	    Parser.prototype.parseFunctionSourceElements = function () {
	        var node = this.createNode();
	        this.expect('{');
	        var body = this.parseDirectivePrologues();
	        var previousLabelSet = this.context.labelSet;
	        var previousInIteration = this.context.inIteration;
	        var previousInSwitch = this.context.inSwitch;
	        var previousInFunctionBody = this.context.inFunctionBody;
	        this.context.labelSet = {};
	        this.context.inIteration = false;
	        this.context.inSwitch = false;
	        this.context.inFunctionBody = true;
	        while (this.lookahead.type !== 2 /* EOF */) {
	            if (this.match('}')) {
	                break;
	            }
	            body.push(this.parseStatementListItem());
	        }
	        this.expect('}');
	        this.context.labelSet = previousLabelSet;
	        this.context.inIteration = previousInIteration;
	        this.context.inSwitch = previousInSwitch;
	        this.context.inFunctionBody = previousInFunctionBody;
	        return this.finalize(node, new Node.BlockStatement(body));
	    };
	    Parser.prototype.validateParam = function (options, param, name) {
	        var key = '$' + name;
	        if (this.context.strict) {
	            if (this.scanner.isRestrictedWord(name)) {
	                options.stricted = param;
	                options.message = messages_1.Messages.StrictParamName;
	            }
	            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
	                options.stricted = param;
	                options.message = messages_1.Messages.StrictParamDupe;
	            }
	        }
	        else if (!options.firstRestricted) {
	            if (this.scanner.isRestrictedWord(name)) {
	                options.firstRestricted = param;
	                options.message = messages_1.Messages.StrictParamName;
	            }
	            else if (this.scanner.isStrictModeReservedWord(name)) {
	                options.firstRestricted = param;
	                options.message = messages_1.Messages.StrictReservedWord;
	            }
	            else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
	                options.stricted = param;
	                options.message = messages_1.Messages.StrictParamDupe;
	            }
	        }
	        /* istanbul ignore next */
	        if (typeof Object.defineProperty === 'function') {
	            Object.defineProperty(options.paramSet, key, { value: true, enumerable: true, writable: true, configurable: true });
	        }
	        else {
	            options.paramSet[key] = true;
	        }
	    };
	    Parser.prototype.parseRestElement = function (params) {
	        var node = this.createNode();
	        this.expect('...');
	        var arg = this.parsePattern(params);
	        if (this.match('=')) {
	            this.throwError(messages_1.Messages.DefaultRestParameter);
	        }
	        if (!this.match(')')) {
	            this.throwError(messages_1.Messages.ParameterAfterRestParameter);
	        }
	        return this.finalize(node, new Node.RestElement(arg));
	    };
	    Parser.prototype.parseFormalParameter = function (options) {
	        var params = [];
	        var param = this.match('...') ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
	        for (var i = 0; i < params.length; i++) {
	            this.validateParam(options, params[i], params[i].value);
	        }
	        options.simple = options.simple && (param instanceof Node.Identifier);
	        options.params.push(param);
	    };
	    Parser.prototype.parseFormalParameters = function (firstRestricted) {
	        var options;
	        options = {
	            simple: true,
	            params: [],
	            firstRestricted: firstRestricted
	        };
	        this.expect('(');
	        if (!this.match(')')) {
	            options.paramSet = {};
	            while (this.lookahead.type !== 2 /* EOF */) {
	                this.parseFormalParameter(options);
	                if (this.match(')')) {
	                    break;
	                }
	                this.expect(',');
	                if (this.match(')')) {
	                    break;
	                }
	            }
	        }
	        this.expect(')');
	        return {
	            simple: options.simple,
	            params: options.params,
	            stricted: options.stricted,
	            firstRestricted: options.firstRestricted,
	            message: options.message
	        };
	    };
	    Parser.prototype.matchAsyncFunction = function () {
	        var match = this.matchContextualKeyword('async');
	        if (match) {
	            var state = this.scanner.saveState();
	            this.scanner.scanComments();
	            var next = this.scanner.lex();
	            this.scanner.restoreState(state);
	            match = (state.lineNumber === next.lineNumber) && (next.type === 4 /* Keyword */) && (next.value === 'function');
	        }
	        return match;
	    };
	    Parser.prototype.parseFunctionDeclaration = function (identifierIsOptional) {
	        var node = this.createNode();
	        var isAsync = this.matchContextualKeyword('async');
	        if (isAsync) {
	            this.nextToken();
	        }
	        this.expectKeyword('function');
	        var isGenerator = isAsync ? false : this.match('*');
	        if (isGenerator) {
	            this.nextToken();
	        }
	        var message;
	        var id = null;
	        var firstRestricted = null;
	        if (!identifierIsOptional || !this.match('(')) {
	            var token = this.lookahead;
	            id = this.parseVariableIdentifier();
	            if (this.context.strict) {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
	                }
	            }
	            else {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictFunctionName;
	                }
	                else if (this.scanner.isStrictModeReservedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictReservedWord;
	                }
	            }
	        }
	        var previousAllowAwait = this.context.await;
	        var previousAllowYield = this.context.allowYield;
	        this.context.await = isAsync;
	        this.context.allowYield = !isGenerator;
	        var formalParameters = this.parseFormalParameters(firstRestricted);
	        var params = formalParameters.params;
	        var stricted = formalParameters.stricted;
	        firstRestricted = formalParameters.firstRestricted;
	        if (formalParameters.message) {
	            message = formalParameters.message;
	        }
	        var previousStrict = this.context.strict;
	        var previousAllowStrictDirective = this.context.allowStrictDirective;
	        this.context.allowStrictDirective = formalParameters.simple;
	        var body = this.parseFunctionSourceElements();
	        if (this.context.strict && firstRestricted) {
	            this.throwUnexpectedToken(firstRestricted, message);
	        }
	        if (this.context.strict && stricted) {
	            this.tolerateUnexpectedToken(stricted, message);
	        }
	        this.context.strict = previousStrict;
	        this.context.allowStrictDirective = previousAllowStrictDirective;
	        this.context.await = previousAllowAwait;
	        this.context.allowYield = previousAllowYield;
	        return isAsync ? this.finalize(node, new Node.AsyncFunctionDeclaration(id, params, body)) :
	            this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
	    };
	    Parser.prototype.parseFunctionExpression = function () {
	        var node = this.createNode();
	        var isAsync = this.matchContextualKeyword('async');
	        if (isAsync) {
	            this.nextToken();
	        }
	        this.expectKeyword('function');
	        var isGenerator = isAsync ? false : this.match('*');
	        if (isGenerator) {
	            this.nextToken();
	        }
	        var message;
	        var id = null;
	        var firstRestricted;
	        var previousAllowAwait = this.context.await;
	        var previousAllowYield = this.context.allowYield;
	        this.context.await = isAsync;
	        this.context.allowYield = !isGenerator;
	        if (!this.match('(')) {
	            var token = this.lookahead;
	            id = (!this.context.strict && !isGenerator && this.matchKeyword('yield')) ? this.parseIdentifierName() : this.parseVariableIdentifier();
	            if (this.context.strict) {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
	                }
	            }
	            else {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictFunctionName;
	                }
	                else if (this.scanner.isStrictModeReservedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictReservedWord;
	                }
	            }
	        }
	        var formalParameters = this.parseFormalParameters(firstRestricted);
	        var params = formalParameters.params;
	        var stricted = formalParameters.stricted;
	        firstRestricted = formalParameters.firstRestricted;
	        if (formalParameters.message) {
	            message = formalParameters.message;
	        }
	        var previousStrict = this.context.strict;
	        var previousAllowStrictDirective = this.context.allowStrictDirective;
	        this.context.allowStrictDirective = formalParameters.simple;
	        var body = this.parseFunctionSourceElements();
	        if (this.context.strict && firstRestricted) {
	            this.throwUnexpectedToken(firstRestricted, message);
	        }
	        if (this.context.strict && stricted) {
	            this.tolerateUnexpectedToken(stricted, message);
	        }
	        this.context.strict = previousStrict;
	        this.context.allowStrictDirective = previousAllowStrictDirective;
	        this.context.await = previousAllowAwait;
	        this.context.allowYield = previousAllowYield;
	        return isAsync ? this.finalize(node, new Node.AsyncFunctionExpression(id, params, body)) :
	            this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
	    };
	    // https://tc39.github.io/ecma262/#sec-directive-prologues-and-the-use-strict-directive
	    Parser.prototype.parseDirective = function () {
	        var token = this.lookahead;
	        var node = this.createNode();
	        var expr = this.parseExpression();
	        var directive = (expr.type === syntax_1.Syntax.Literal) ? this.getTokenRaw(token).slice(1, -1) : null;
	        this.consumeSemicolon();
	        return this.finalize(node, directive ? new Node.Directive(expr, directive) : new Node.ExpressionStatement(expr));
	    };
	    Parser.prototype.parseDirectivePrologues = function () {
	        var firstRestricted = null;
	        var body = [];
	        while (true) {
	            var token = this.lookahead;
	            if (token.type !== 8 /* StringLiteral */) {
	                break;
	            }
	            var statement = this.parseDirective();
	            body.push(statement);
	            var directive = statement.directive;
	            if (typeof directive !== 'string') {
	                break;
	            }
	            if (directive === 'use strict') {
	                this.context.strict = true;
	                if (firstRestricted) {
	                    this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
	                }
	                if (!this.context.allowStrictDirective) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
	                }
	            }
	            else {
	                if (!firstRestricted && token.octal) {
	                    firstRestricted = token;
	                }
	            }
	        }
	        return body;
	    };
	    // https://tc39.github.io/ecma262/#sec-method-definitions
	    Parser.prototype.qualifiedPropertyName = function (token) {
	        switch (token.type) {
	            case 3 /* Identifier */:
	            case 8 /* StringLiteral */:
	            case 1 /* BooleanLiteral */:
	            case 5 /* NullLiteral */:
	            case 6 /* NumericLiteral */:
	            case 4 /* Keyword */:
	                return true;
	            case 7 /* Punctuator */:
	                return token.value === '[';
	            default:
	                break;
	        }
	        return false;
	    };
	    Parser.prototype.parseGetterMethod = function () {
	        var node = this.createNode();
	        var isGenerator = false;
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = !isGenerator;
	        var formalParameters = this.parseFormalParameters();
	        if (formalParameters.params.length > 0) {
	            this.tolerateError(messages_1.Messages.BadGetterArity);
	        }
	        var method = this.parsePropertyMethod(formalParameters);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
	    };
	    Parser.prototype.parseSetterMethod = function () {
	        var node = this.createNode();
	        var isGenerator = false;
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = !isGenerator;
	        var formalParameters = this.parseFormalParameters();
	        if (formalParameters.params.length !== 1) {
	            this.tolerateError(messages_1.Messages.BadSetterArity);
	        }
	        else if (formalParameters.params[0] instanceof Node.RestElement) {
	            this.tolerateError(messages_1.Messages.BadSetterRestParameter);
	        }
	        var method = this.parsePropertyMethod(formalParameters);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
	    };
	    Parser.prototype.parseGeneratorMethod = function () {
	        var node = this.createNode();
	        var isGenerator = true;
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = true;
	        var params = this.parseFormalParameters();
	        this.context.allowYield = false;
	        var method = this.parsePropertyMethod(params);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
	    };
	    // https://tc39.github.io/ecma262/#sec-generator-function-definitions
	    Parser.prototype.isStartOfExpression = function () {
	        var start = true;
	        var value = this.lookahead.value;
	        switch (this.lookahead.type) {
	            case 7 /* Punctuator */:
	                start = (value === '[') || (value === '(') || (value === '{') ||
	                    (value === '+') || (value === '-') ||
	                    (value === '!') || (value === '~') ||
	                    (value === '++') || (value === '--') ||
	                    (value === '/') || (value === '/='); // regular expression literal
	                break;
	            case 4 /* Keyword */:
	                start = (value === 'class') || (value === 'delete') ||
	                    (value === 'function') || (value === 'let') || (value === 'new') ||
	                    (value === 'super') || (value === 'this') || (value === 'typeof') ||
	                    (value === 'void') || (value === 'yield');
	                break;
	            default:
	                break;
	        }
	        return start;
	    };
	    Parser.prototype.parseYieldExpression = function () {
	        var node = this.createNode();
	        this.expectKeyword('yield');
	        var argument = null;
	        var delegate = false;
	        if (!this.hasLineTerminator) {
	            var previousAllowYield = this.context.allowYield;
	            this.context.allowYield = false;
	            delegate = this.match('*');
	            if (delegate) {
	                this.nextToken();
	                argument = this.parseAssignmentExpression();
	            }
	            else if (this.isStartOfExpression()) {
	                argument = this.parseAssignmentExpression();
	            }
	            this.context.allowYield = previousAllowYield;
	        }
	        return this.finalize(node, new Node.YieldExpression(argument, delegate));
	    };
	    // https://tc39.github.io/ecma262/#sec-class-definitions
	    Parser.prototype.parseClassElement = function (hasConstructor) {
	        var token = this.lookahead;
	        var node = this.createNode();
	        var kind = '';
	        var key = null;
	        var value = null;
	        var computed = false;
	        var method = false;
	        var isStatic = false;
	        var isAsync = false;
	        if (this.match('*')) {
	            this.nextToken();
	        }
	        else {
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            var id = key;
	            if (id.name === 'static' && (this.qualifiedPropertyName(this.lookahead) || this.match('*'))) {
	                token = this.lookahead;
	                isStatic = true;
	                computed = this.match('[');
	                if (this.match('*')) {
	                    this.nextToken();
	                }
	                else {
	                    key = this.parseObjectPropertyKey();
	                }
	            }
	            if ((token.type === 3 /* Identifier */) && !this.hasLineTerminator && (token.value === 'async')) {
	                var punctuator = this.lookahead.value;
	                if (punctuator !== ':' && punctuator !== '(' && punctuator !== '*') {
	                    isAsync = true;
	                    token = this.lookahead;
	                    key = this.parseObjectPropertyKey();
	                    if (token.type === 3 /* Identifier */ && token.value === 'constructor') {
	                        this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
	                    }
	                }
	            }
	        }
	        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
	        if (token.type === 3 /* Identifier */) {
	            if (token.value === 'get' && lookaheadPropertyKey) {
	                kind = 'get';
	                computed = this.match('[');
	                key = this.parseObjectPropertyKey();
	                this.context.allowYield = false;
	                value = this.parseGetterMethod();
	            }
	            else if (token.value === 'set' && lookaheadPropertyKey) {
	                kind = 'set';
	                computed = this.match('[');
	                key = this.parseObjectPropertyKey();
	                value = this.parseSetterMethod();
	            }
	        }
	        else if (token.type === 7 /* Punctuator */ && token.value === '*' && lookaheadPropertyKey) {
	            kind = 'init';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            value = this.parseGeneratorMethod();
	            method = true;
	        }
	        if (!kind && key && this.match('(')) {
	            kind = 'init';
	            value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
	            method = true;
	        }
	        if (!kind) {
	            this.throwUnexpectedToken(this.lookahead);
	        }
	        if (kind === 'init') {
	            kind = 'method';
	        }
	        if (!computed) {
	            if (isStatic && this.isPropertyKey(key, 'prototype')) {
	                this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
	            }
	            if (!isStatic && this.isPropertyKey(key, 'constructor')) {
	                if (kind !== 'method' || !method || (value && value.generator)) {
	                    this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
	                }
	                if (hasConstructor.value) {
	                    this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
	                }
	                else {
	                    hasConstructor.value = true;
	                }
	                kind = 'constructor';
	            }
	        }
	        return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
	    };
	    Parser.prototype.parseClassElementList = function () {
	        var body = [];
	        var hasConstructor = { value: false };
	        this.expect('{');
	        while (!this.match('}')) {
	            if (this.match(';')) {
	                this.nextToken();
	            }
	            else {
	                body.push(this.parseClassElement(hasConstructor));
	            }
	        }
	        this.expect('}');
	        return body;
	    };
	    Parser.prototype.parseClassBody = function () {
	        var node = this.createNode();
	        var elementList = this.parseClassElementList();
	        return this.finalize(node, new Node.ClassBody(elementList));
	    };
	    Parser.prototype.parseClassDeclaration = function (identifierIsOptional) {
	        var node = this.createNode();
	        var previousStrict = this.context.strict;
	        this.context.strict = true;
	        this.expectKeyword('class');
	        var id = (identifierIsOptional && (this.lookahead.type !== 3 /* Identifier */)) ? null : this.parseVariableIdentifier();
	        var superClass = null;
	        if (this.matchKeyword('extends')) {
	            this.nextToken();
	            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
	        }
	        var classBody = this.parseClassBody();
	        this.context.strict = previousStrict;
	        return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
	    };
	    Parser.prototype.parseClassExpression = function () {
	        var node = this.createNode();
	        var previousStrict = this.context.strict;
	        this.context.strict = true;
	        this.expectKeyword('class');
	        var id = (this.lookahead.type === 3 /* Identifier */) ? this.parseVariableIdentifier() : null;
	        var superClass = null;
	        if (this.matchKeyword('extends')) {
	            this.nextToken();
	            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
	        }
	        var classBody = this.parseClassBody();
	        this.context.strict = previousStrict;
	        return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
	    };
	    // https://tc39.github.io/ecma262/#sec-scripts
	    // https://tc39.github.io/ecma262/#sec-modules
	    Parser.prototype.parseModule = function () {
	        this.context.strict = true;
	        this.context.isModule = true;
	        this.scanner.isModule = true;
	        var node = this.createNode();
	        var body = this.parseDirectivePrologues();
	        while (this.lookahead.type !== 2 /* EOF */) {
	            body.push(this.parseStatementListItem());
	        }
	        return this.finalize(node, new Node.Module(body));
	    };
	    Parser.prototype.parseScript = function () {
	        var node = this.createNode();
	        var body = this.parseDirectivePrologues();
	        while (this.lookahead.type !== 2 /* EOF */) {
	            body.push(this.parseStatementListItem());
	        }
	        return this.finalize(node, new Node.Script(body));
	    };
	    // https://tc39.github.io/ecma262/#sec-imports
	    Parser.prototype.parseModuleSpecifier = function () {
	        var node = this.createNode();
	        if (this.lookahead.type !== 8 /* StringLiteral */) {
	            this.throwError(messages_1.Messages.InvalidModuleSpecifier);
	        }
	        var token = this.nextToken();
	        var raw = this.getTokenRaw(token);
	        return this.finalize(node, new Node.Literal(token.value, raw));
	    };
	    // import {<foo as bar>} ...;
	    Parser.prototype.parseImportSpecifier = function () {
	        var node = this.createNode();
	        var imported;
	        var local;
	        if (this.lookahead.type === 3 /* Identifier */) {
	            imported = this.parseVariableIdentifier();
	            local = imported;
	            if (this.matchContextualKeyword('as')) {
	                this.nextToken();
	                local = this.parseVariableIdentifier();
	            }
	        }
	        else {
	            imported = this.parseIdentifierName();
	            local = imported;
	            if (this.matchContextualKeyword('as')) {
	                this.nextToken();
	                local = this.parseVariableIdentifier();
	            }
	            else {
	                this.throwUnexpectedToken(this.nextToken());
	            }
	        }
	        return this.finalize(node, new Node.ImportSpecifier(local, imported));
	    };
	    // {foo, bar as bas}
	    Parser.prototype.parseNamedImports = function () {
	        this.expect('{');
	        var specifiers = [];
	        while (!this.match('}')) {
	            specifiers.push(this.parseImportSpecifier());
	            if (!this.match('}')) {
	                this.expect(',');
	            }
	        }
	        this.expect('}');
	        return specifiers;
	    };
	    // import <foo> ...;
	    Parser.prototype.parseImportDefaultSpecifier = function () {
	        var node = this.createNode();
	        var local = this.parseIdentifierName();
	        return this.finalize(node, new Node.ImportDefaultSpecifier(local));
	    };
	    // import <* as foo> ...;
	    Parser.prototype.parseImportNamespaceSpecifier = function () {
	        var node = this.createNode();
	        this.expect('*');
	        if (!this.matchContextualKeyword('as')) {
	            this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
	        }
	        this.nextToken();
	        var local = this.parseIdentifierName();
	        return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
	    };
	    Parser.prototype.parseImportDeclaration = function () {
	        if (this.context.inFunctionBody) {
	            this.throwError(messages_1.Messages.IllegalImportDeclaration);
	        }
	        var node = this.createNode();
	        this.expectKeyword('import');
	        var src;
	        var specifiers = [];
	        if (this.lookahead.type === 8 /* StringLiteral */) {
	            // import 'foo';
	            src = this.parseModuleSpecifier();
	        }
	        else {
	            if (this.match('{')) {
	                // import {bar}
	                specifiers = specifiers.concat(this.parseNamedImports());
	            }
	            else if (this.match('*')) {
	                // import * as foo
	                specifiers.push(this.parseImportNamespaceSpecifier());
	            }
	            else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword('default')) {
	                // import foo
	                specifiers.push(this.parseImportDefaultSpecifier());
	                if (this.match(',')) {
	                    this.nextToken();
	                    if (this.match('*')) {
	                        // import foo, * as foo
	                        specifiers.push(this.parseImportNamespaceSpecifier());
	                    }
	                    else if (this.match('{')) {
	                        // import foo, {bar}
	                        specifiers = specifiers.concat(this.parseNamedImports());
	                    }
	                    else {
	                        this.throwUnexpectedToken(this.lookahead);
	                    }
	                }
	            }
	            else {
	                this.throwUnexpectedToken(this.nextToken());
	            }
	            if (!this.matchContextualKeyword('from')) {
	                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
	                this.throwError(message, this.lookahead.value);
	            }
	            this.nextToken();
	            src = this.parseModuleSpecifier();
	        }
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
	    };
	    // https://tc39.github.io/ecma262/#sec-exports
	    Parser.prototype.parseExportSpecifier = function () {
	        var node = this.createNode();
	        var local = this.parseIdentifierName();
	        var exported = local;
	        if (this.matchContextualKeyword('as')) {
	            this.nextToken();
	            exported = this.parseIdentifierName();
	        }
	        return this.finalize(node, new Node.ExportSpecifier(local, exported));
	    };
	    Parser.prototype.parseExportDeclaration = function () {
	        if (this.context.inFunctionBody) {
	            this.throwError(messages_1.Messages.IllegalExportDeclaration);
	        }
	        var node = this.createNode();
	        this.expectKeyword('export');
	        var exportDeclaration;
	        if (this.matchKeyword('default')) {
	            // export default ...
	            this.nextToken();
	            if (this.matchKeyword('function')) {
	                // export default function foo () {}
	                // export default function () {}
	                var declaration = this.parseFunctionDeclaration(true);
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	            else if (this.matchKeyword('class')) {
	                // export default class foo {}
	                var declaration = this.parseClassDeclaration(true);
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	            else if (this.matchContextualKeyword('async')) {
	                // export default async function f () {}
	                // export default async function () {}
	                // export default async x => x
	                var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	            else {
	                if (this.matchContextualKeyword('from')) {
	                    this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
	                }
	                // export default {};
	                // export default [];
	                // export default (1 + 2);
	                var declaration = this.match('{') ? this.parseObjectInitializer() :
	                    this.match('[') ? this.parseArrayInitializer() : this.parseAssignmentExpression();
	                this.consumeSemicolon();
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	        }
	        else if (this.match('*')) {
	            // export * from 'foo';
	            this.nextToken();
	            if (!this.matchContextualKeyword('from')) {
	                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
	                this.throwError(message, this.lookahead.value);
	            }
	            this.nextToken();
	            var src = this.parseModuleSpecifier();
	            this.consumeSemicolon();
	            exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
	        }
	        else if (this.lookahead.type === 4 /* Keyword */) {
	            // export var f = 1;
	            var declaration = void 0;
	            switch (this.lookahead.value) {
	                case 'let':
	                case 'const':
	                    declaration = this.parseLexicalDeclaration({ inFor: false });
	                    break;
	                case 'var':
	                case 'class':
	                case 'function':
	                    declaration = this.parseStatementListItem();
	                    break;
	                default:
	                    this.throwUnexpectedToken(this.lookahead);
	            }
	            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
	        }
	        else if (this.matchAsyncFunction()) {
	            var declaration = this.parseFunctionDeclaration();
	            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
	        }
	        else {
	            var specifiers = [];
	            var source = null;
	            var isExportFromIdentifier = false;
	            this.expect('{');
	            while (!this.match('}')) {
	                isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword('default');
	                specifiers.push(this.parseExportSpecifier());
	                if (!this.match('}')) {
	                    this.expect(',');
	                }
	            }
	            this.expect('}');
	            if (this.matchContextualKeyword('from')) {
	                // export {default} from 'foo';
	                // export {foo} from 'foo';
	                this.nextToken();
	                source = this.parseModuleSpecifier();
	                this.consumeSemicolon();
	            }
	            else if (isExportFromIdentifier) {
	                // export {default}; // missing fromClause
	                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
	                this.throwError(message, this.lookahead.value);
	            }
	            else {
	                // export {foo};
	                this.consumeSemicolon();
	            }
	            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
	        }
	        return exportDeclaration;
	    };
	    return Parser;
	}());
	exports.Parser = Parser;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	// Ensure the condition is true, otherwise throw an error.
	// This is only to have a better contract semantic, i.e. another safety net
	// to catch a logic error. The condition shall be fulfilled in normal case.
	// Do NOT use this to enforce a certain condition on any user input.
	Object.defineProperty(exports, "__esModule", { value: true });
	function assert(condition, message) {
	    /* istanbul ignore if */
	    if (!condition) {
	        throw new Error('ASSERT: ' + message);
	    }
	}
	exports.assert = assert;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable:max-classes-per-file */
	Object.defineProperty(exports, "__esModule", { value: true });
	var ErrorHandler = (function () {
	    function ErrorHandler() {
	        this.errors = [];
	        this.tolerant = false;
	    }
	    ErrorHandler.prototype.recordError = function (error) {
	        this.errors.push(error);
	    };
	    ErrorHandler.prototype.tolerate = function (error) {
	        if (this.tolerant) {
	            this.recordError(error);
	        }
	        else {
	            throw error;
	        }
	    };
	    ErrorHandler.prototype.constructError = function (msg, column) {
	        var error = new Error(msg);
	        try {
	            throw error;
	        }
	        catch (base) {
	            /* istanbul ignore else */
	            if (Object.create && Object.defineProperty) {
	                error = Object.create(base);
	                Object.defineProperty(error, 'column', { value: column });
	            }
	        }
	        /* istanbul ignore next */
	        return error;
	    };
	    ErrorHandler.prototype.createError = function (index, line, col, description) {
	        var msg = 'Line ' + line + ': ' + description;
	        var error = this.constructError(msg, col);
	        error.index = index;
	        error.lineNumber = line;
	        error.description = description;
	        return error;
	    };
	    ErrorHandler.prototype.throwError = function (index, line, col, description) {
	        throw this.createError(index, line, col, description);
	    };
	    ErrorHandler.prototype.tolerateError = function (index, line, col, description) {
	        var error = this.createError(index, line, col, description);
	        if (this.tolerant) {
	            this.recordError(error);
	        }
	        else {
	            throw error;
	        }
	    };
	    return ErrorHandler;
	}());
	exports.ErrorHandler = ErrorHandler;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	// Error messages should be identical to V8.
	exports.Messages = {
	    BadGetterArity: 'Getter must not have any formal parameters',
	    BadSetterArity: 'Setter must have exactly one formal parameter',
	    BadSetterRestParameter: 'Setter function argument must not be a rest parameter',
	    ConstructorIsAsync: 'Class constructor may not be an async method',
	    ConstructorSpecialMethod: 'Class constructor may not be an accessor',
	    DeclarationMissingInitializer: 'Missing initializer in %0 declaration',
	    DefaultRestParameter: 'Unexpected token =',
	    DuplicateBinding: 'Duplicate binding %0',
	    DuplicateConstructor: 'A class may only have one constructor',
	    DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
	    ForInOfLoopInitializer: '%0 loop variable declaration may not have an initializer',
	    GeneratorInLegacyContext: 'Generator declarations are not allowed in legacy contexts',
	    IllegalBreak: 'Illegal break statement',
	    IllegalContinue: 'Illegal continue statement',
	    IllegalExportDeclaration: 'Unexpected token',
	    IllegalImportDeclaration: 'Unexpected token',
	    IllegalLanguageModeDirective: 'Illegal \'use strict\' directive in function with non-simple parameter list',
	    IllegalReturn: 'Illegal return statement',
	    InvalidEscapedReservedWord: 'Keyword must not contain escaped characters',
	    InvalidHexEscapeSequence: 'Invalid hexadecimal escape sequence',
	    InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
	    InvalidLHSInForIn: 'Invalid left-hand side in for-in',
	    InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
	    InvalidModuleSpecifier: 'Unexpected token',
	    InvalidRegExp: 'Invalid regular expression',
	    LetInLexicalBinding: 'let is disallowed as a lexically bound name',
	    MissingFromClause: 'Unexpected token',
	    MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
	    NewlineAfterThrow: 'Illegal newline after throw',
	    NoAsAfterImportNamespace: 'Unexpected token',
	    NoCatchOrFinally: 'Missing catch or finally after try',
	    ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
	    Redeclaration: '%0 \'%1\' has already been declared',
	    StaticPrototype: 'Classes may not have static property named prototype',
	    StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
	    StrictDelete: 'Delete of an unqualified identifier in strict mode.',
	    StrictFunction: 'In strict mode code, functions can only be declared at top level or inside a block',
	    StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
	    StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
	    StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
	    StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
	    StrictModeWith: 'Strict mode code may not include a with statement',
	    StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
	    StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
	    StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
	    StrictReservedWord: 'Use of future reserved word in strict mode',
	    StrictVarName: 'Variable name may not be eval or arguments in strict mode',
	    TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
	    UnexpectedEOS: 'Unexpected end of input',
	    UnexpectedIdentifier: 'Unexpected identifier',
	    UnexpectedNumber: 'Unexpected number',
	    UnexpectedReserved: 'Unexpected reserved word',
	    UnexpectedString: 'Unexpected string',
	    UnexpectedTemplate: 'Unexpected quasi %0',
	    UnexpectedToken: 'Unexpected token %0',
	    UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
	    UnknownLabel: 'Undefined label \'%0\'',
	    UnterminatedRegExp: 'Invalid regular expression: missing /'
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var assert_1 = __webpack_require__(9);
	var character_1 = __webpack_require__(4);
	var messages_1 = __webpack_require__(11);
	function hexValue(ch) {
	    return '0123456789abcdef'.indexOf(ch.toLowerCase());
	}
	function octalValue(ch) {
	    return '01234567'.indexOf(ch);
	}
	var Scanner = (function () {
	    function Scanner(code, handler) {
	        this.source = code;
	        this.errorHandler = handler;
	        this.trackComment = false;
	        this.isModule = false;
	        this.length = code.length;
	        this.index = 0;
	        this.lineNumber = (code.length > 0) ? 1 : 0;
	        this.lineStart = 0;
	        this.curlyStack = [];
	    }
	    Scanner.prototype.saveState = function () {
	        return {
	            index: this.index,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart
	        };
	    };
	    Scanner.prototype.restoreState = function (state) {
	        this.index = state.index;
	        this.lineNumber = state.lineNumber;
	        this.lineStart = state.lineStart;
	    };
	    Scanner.prototype.eof = function () {
	        return this.index >= this.length;
	    };
	    Scanner.prototype.throwUnexpectedToken = function (message) {
	        if (message === void 0) { message = messages_1.Messages.UnexpectedTokenIllegal; }
	        return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
	    };
	    Scanner.prototype.tolerateUnexpectedToken = function (message) {
	        if (message === void 0) { message = messages_1.Messages.UnexpectedTokenIllegal; }
	        this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
	    };
	    // https://tc39.github.io/ecma262/#sec-comments
	    Scanner.prototype.skipSingleLineComment = function (offset) {
	        var comments = [];
	        var start, loc;
	        if (this.trackComment) {
	            comments = [];
	            start = this.index - offset;
	            loc = {
	                start: {
	                    line: this.lineNumber,
	                    column: this.index - this.lineStart - offset
	                },
	                end: {}
	            };
	        }
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            ++this.index;
	            if (character_1.Character.isLineTerminator(ch)) {
	                if (this.trackComment) {
	                    loc.end = {
	                        line: this.lineNumber,
	                        column: this.index - this.lineStart - 1
	                    };
	                    var entry = {
	                        multiLine: false,
	                        slice: [start + offset, this.index - 1],
	                        range: [start, this.index - 1],
	                        loc: loc
	                    };
	                    comments.push(entry);
	                }
	                if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
	                    ++this.index;
	                }
	                ++this.lineNumber;
	                this.lineStart = this.index;
	                return comments;
	            }
	        }
	        if (this.trackComment) {
	            loc.end = {
	                line: this.lineNumber,
	                column: this.index - this.lineStart
	            };
	            var entry = {
	                multiLine: false,
	                slice: [start + offset, this.index],
	                range: [start, this.index],
	                loc: loc
	            };
	            comments.push(entry);
	        }
	        return comments;
	    };
	    Scanner.prototype.skipMultiLineComment = function () {
	        var comments = [];
	        var start, loc;
	        if (this.trackComment) {
	            comments = [];
	            start = this.index - 2;
	            loc = {
	                start: {
	                    line: this.lineNumber,
	                    column: this.index - this.lineStart - 2
	                },
	                end: {}
	            };
	        }
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            if (character_1.Character.isLineTerminator(ch)) {
	                if (ch === 0x0D && this.source.charCodeAt(this.index + 1) === 0x0A) {
	                    ++this.index;
	                }
	                ++this.lineNumber;
	                ++this.index;
	                this.lineStart = this.index;
	            }
	            else if (ch === 0x2A) {
	                // Block comment ends with '*/'.
	                if (this.source.charCodeAt(this.index + 1) === 0x2F) {
	                    this.index += 2;
	                    if (this.trackComment) {
	                        loc.end = {
	                            line: this.lineNumber,
	                            column: this.index - this.lineStart
	                        };
	                        var entry = {
	                            multiLine: true,
	                            slice: [start + 2, this.index - 2],
	                            range: [start, this.index],
	                            loc: loc
	                        };
	                        comments.push(entry);
	                    }
	                    return comments;
	                }
	                ++this.index;
	            }
	            else {
	                ++this.index;
	            }
	        }
	        // Ran off the end of the file - the whole thing is a comment
	        if (this.trackComment) {
	            loc.end = {
	                line: this.lineNumber,
	                column: this.index - this.lineStart
	            };
	            var entry = {
	                multiLine: true,
	                slice: [start + 2, this.index],
	                range: [start, this.index],
	                loc: loc
	            };
	            comments.push(entry);
	        }
	        this.tolerateUnexpectedToken();
	        return comments;
	    };
	    Scanner.prototype.scanComments = function () {
	        var comments;
	        if (this.trackComment) {
	            comments = [];
	        }
	        var start = (this.index === 0);
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            if (character_1.Character.isWhiteSpace(ch)) {
	                ++this.index;
	            }
	            else if (character_1.Character.isLineTerminator(ch)) {
	                ++this.index;
	                if (ch === 0x0D && this.source.charCodeAt(this.index) === 0x0A) {
	                    ++this.index;
	                }
	                ++this.lineNumber;
	                this.lineStart = this.index;
	                start = true;
	            }
	            else if (ch === 0x2F) {
	                ch = this.source.charCodeAt(this.index + 1);
	                if (ch === 0x2F) {
	                    this.index += 2;
	                    var comment = this.skipSingleLineComment(2);
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                    start = true;
	                }
	                else if (ch === 0x2A) {
	                    this.index += 2;
	                    var comment = this.skipMultiLineComment();
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                }
	                else {
	                    break;
	                }
	            }
	            else if (start && ch === 0x2D) {
	                // U+003E is '>'
	                if ((this.source.charCodeAt(this.index + 1) === 0x2D) && (this.source.charCodeAt(this.index + 2) === 0x3E)) {
	                    // '-->' is a single-line comment
	                    this.index += 3;
	                    var comment = this.skipSingleLineComment(3);
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                }
	                else {
	                    break;
	                }
	            }
	            else if (ch === 0x3C && !this.isModule) {
	                if (this.source.slice(this.index + 1, this.index + 4) === '!--') {
	                    this.index += 4; // `<!--`
	                    var comment = this.skipSingleLineComment(4);
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                }
	                else {
	                    break;
	                }
	            }
	            else {
	                break;
	            }
	        }
	        return comments;
	    };
	    // https://tc39.github.io/ecma262/#sec-future-reserved-words
	    Scanner.prototype.isFutureReservedWord = function (id) {
	        switch (id) {
	            case 'enum':
	            case 'export':
	            case 'import':
	            case 'super':
	                return true;
	            default:
	                return false;
	        }
	    };
	    Scanner.prototype.isStrictModeReservedWord = function (id) {
	        switch (id) {
	            case 'implements':
	            case 'interface':
	            case 'package':
	            case 'private':
	            case 'protected':
	            case 'public':
	            case 'static':
	            case 'yield':
	            case 'let':
	                return true;
	            default:
	                return false;
	        }
	    };
	    Scanner.prototype.isRestrictedWord = function (id) {
	        return id === 'eval' || id === 'arguments';
	    };
	    // https://tc39.github.io/ecma262/#sec-keywords
	    Scanner.prototype.isKeyword = function (id) {
	        switch (id.length) {
	            case 2:
	                return (id === 'if') || (id === 'in') || (id === 'do');
	            case 3:
	                return (id === 'var') || (id === 'for') || (id === 'new') ||
	                    (id === 'try') || (id === 'let');
	            case 4:
	                return (id === 'this') || (id === 'else') || (id === 'case') ||
	                    (id === 'void') || (id === 'with') || (id === 'enum');
	            case 5:
	                return (id === 'while') || (id === 'break') || (id === 'catch') ||
	                    (id === 'throw') || (id === 'const') || (id === 'yield') ||
	                    (id === 'class') || (id === 'super');
	            case 6:
	                return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
	                    (id === 'switch') || (id === 'export') || (id === 'import');
	            case 7:
	                return (id === 'default') || (id === 'finally') || (id === 'extends');
	            case 8:
	                return (id === 'function') || (id === 'continue') || (id === 'debugger');
	            case 10:
	                return (id === 'instanceof');
	            default:
	                return false;
	        }
	    };
	    Scanner.prototype.codePointAt = function (i) {
	        var cp = this.source.charCodeAt(i);
	        if (cp >= 0xD800 && cp <= 0xDBFF) {
	            var second = this.source.charCodeAt(i + 1);
	            if (second >= 0xDC00 && second <= 0xDFFF) {
	                var first = cp;
	                cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	            }
	        }
	        return cp;
	    };
	    Scanner.prototype.scanHexEscape = function (prefix) {
	        var len = (prefix === 'u') ? 4 : 2;
	        var code = 0;
	        for (var i = 0; i < len; ++i) {
	            if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
	                code = code * 16 + hexValue(this.source[this.index++]);
	            }
	            else {
	                return null;
	            }
	        }
	        return String.fromCharCode(code);
	    };
	    Scanner.prototype.scanUnicodeCodePointEscape = function () {
	        var ch = this.source[this.index];
	        var code = 0;
	        // At least, one hex digit is required.
	        if (ch === '}') {
	            this.throwUnexpectedToken();
	        }
	        while (!this.eof()) {
	            ch = this.source[this.index++];
	            if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
	                break;
	            }
	            code = code * 16 + hexValue(ch);
	        }
	        if (code > 0x10FFFF || ch !== '}') {
	            this.throwUnexpectedToken();
	        }
	        return character_1.Character.fromCodePoint(code);
	    };
	    Scanner.prototype.getIdentifier = function () {
	        var start = this.index++;
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            if (ch === 0x5C) {
	                // Blackslash (U+005C) marks Unicode escape sequence.
	                this.index = start;
	                return this.getComplexIdentifier();
	            }
	            else if (ch >= 0xD800 && ch < 0xDFFF) {
	                // Need to handle surrogate pairs.
	                this.index = start;
	                return this.getComplexIdentifier();
	            }
	            if (character_1.Character.isIdentifierPart(ch)) {
	                ++this.index;
	            }
	            else {
	                break;
	            }
	        }
	        return this.source.slice(start, this.index);
	    };
	    Scanner.prototype.getComplexIdentifier = function () {
	        var cp = this.codePointAt(this.index);
	        var id = character_1.Character.fromCodePoint(cp);
	        this.index += id.length;
	        // '\u' (U+005C, U+0075) denotes an escaped character.
	        var ch;
	        if (cp === 0x5C) {
	            if (this.source.charCodeAt(this.index) !== 0x75) {
	                this.throwUnexpectedToken();
	            }
	            ++this.index;
	            if (this.source[this.index] === '{') {
	                ++this.index;
	                ch = this.scanUnicodeCodePointEscape();
	            }
	            else {
	                ch = this.scanHexEscape('u');
	                if (ch === null || ch === '\\' || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) {
	                    this.throwUnexpectedToken();
	                }
	            }
	            id = ch;
	        }
	        while (!this.eof()) {
	            cp = this.codePointAt(this.index);
	            if (!character_1.Character.isIdentifierPart(cp)) {
	                break;
	            }
	            ch = character_1.Character.fromCodePoint(cp);
	            id += ch;
	            this.index += ch.length;
	            // '\u' (U+005C, U+0075) denotes an escaped character.
	            if (cp === 0x5C) {
	                id = id.substr(0, id.length - 1);
	                if (this.source.charCodeAt(this.index) !== 0x75) {
	                    this.throwUnexpectedToken();
	                }
	                ++this.index;
	                if (this.source[this.index] === '{') {
	                    ++this.index;
	                    ch = this.scanUnicodeCodePointEscape();
	                }
	                else {
	                    ch = this.scanHexEscape('u');
	                    if (ch === null || ch === '\\' || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
	                        this.throwUnexpectedToken();
	                    }
	                }
	                id += ch;
	            }
	        }
	        return id;
	    };
	    Scanner.prototype.octalToDecimal = function (ch) {
	        // \0 is not octal escape sequence
	        var octal = (ch !== '0');
	        var code = octalValue(ch);
	        if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
	            octal = true;
	            code = code * 8 + octalValue(this.source[this.index++]);
	            // 3 digits are only allowed when string starts
	            // with 0, 1, 2, 3
	            if ('0123'.indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
	                code = code * 8 + octalValue(this.source[this.index++]);
	            }
	        }
	        return {
	            code: code,
	            octal: octal
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-names-and-keywords
	    Scanner.prototype.scanIdentifier = function () {
	        var type;
	        var start = this.index;
	        // Backslash (U+005C) starts an escaped character.
	        var id = (this.source.charCodeAt(start) === 0x5C) ? this.getComplexIdentifier() : this.getIdentifier();
	        // There is no keyword or literal with only one character.
	        // Thus, it must be an identifier.
	        if (id.length === 1) {
	            type = 3 /* Identifier */;
	        }
	        else if (this.isKeyword(id)) {
	            type = 4 /* Keyword */;
	        }
	        else if (id === 'null') {
	            type = 5 /* NullLiteral */;
	        }
	        else if (id === 'true' || id === 'false') {
	            type = 1 /* BooleanLiteral */;
	        }
	        else {
	            type = 3 /* Identifier */;
	        }
	        if (type !== 3 /* Identifier */ && (start + id.length !== this.index)) {
	            var restore = this.index;
	            this.index = start;
	            this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
	            this.index = restore;
	        }
	        return {
	            type: type,
	            value: id,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-punctuators
	    Scanner.prototype.scanPunctuator = function () {
	        var start = this.index;
	        // Check for most common single-character punctuators.
	        var str = this.source[this.index];
	        switch (str) {
	            case '(':
	            case '{':
	                if (str === '{') {
	                    this.curlyStack.push('{');
	                }
	                ++this.index;
	                break;
	            case '.':
	                ++this.index;
	                if (this.source[this.index] === '.' && this.source[this.index + 1] === '.') {
	                    // Spread operator: ...
	                    this.index += 2;
	                    str = '...';
	                }
	                break;
	            case '}':
	                ++this.index;
	                this.curlyStack.pop();
	                break;
	            case ')':
	            case ';':
	            case ',':
	            case '[':
	            case ']':
	            case ':':
	            case '?':
	            case '~':
	                ++this.index;
	                break;
	            default:
	                // 4-character punctuator.
	                str = this.source.substr(this.index, 4);
	                if (str === '>>>=') {
	                    this.index += 4;
	                }
	                else {
	                    // 3-character punctuators.
	                    str = str.substr(0, 3);
	                    if (str === '===' || str === '!==' || str === '>>>' ||
	                        str === '<<=' || str === '>>=' || str === '**=') {
	                        this.index += 3;
	                    }
	                    else {
	                        // 2-character punctuators.
	                        str = str.substr(0, 2);
	                        if (str === '&&' || str === '||' || str === '==' || str === '!=' ||
	                            str === '+=' || str === '-=' || str === '*=' || str === '/=' ||
	                            str === '++' || str === '--' || str === '<<' || str === '>>' ||
	                            str === '&=' || str === '|=' || str === '^=' || str === '%=' ||
	                            str === '<=' || str === '>=' || str === '=>' || str === '**') {
	                            this.index += 2;
	                        }
	                        else {
	                            // 1-character punctuators.
	                            str = this.source[this.index];
	                            if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
	                                ++this.index;
	                            }
	                        }
	                    }
	                }
	        }
	        if (this.index === start) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 7 /* Punctuator */,
	            value: str,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
	    Scanner.prototype.scanHexLiteral = function (start) {
	        var num = '';
	        while (!this.eof()) {
	            if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
	                break;
	            }
	            num += this.source[this.index++];
	        }
	        if (num.length === 0) {
	            this.throwUnexpectedToken();
	        }
	        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 6 /* NumericLiteral */,
	            value: parseInt('0x' + num, 16),
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    Scanner.prototype.scanBinaryLiteral = function (start) {
	        var num = '';
	        var ch;
	        while (!this.eof()) {
	            ch = this.source[this.index];
	            if (ch !== '0' && ch !== '1') {
	                break;
	            }
	            num += this.source[this.index++];
	        }
	        if (num.length === 0) {
	            // only 0b or 0B
	            this.throwUnexpectedToken();
	        }
	        if (!this.eof()) {
	            ch = this.source.charCodeAt(this.index);
	            /* istanbul ignore else */
	            if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
	                this.throwUnexpectedToken();
	            }
	        }
	        return {
	            type: 6 /* NumericLiteral */,
	            value: parseInt(num, 2),
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    Scanner.prototype.scanOctalLiteral = function (prefix, start) {
	        var num = '';
	        var octal = false;
	        if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
	            octal = true;
	            num = '0' + this.source[this.index++];
	        }
	        else {
	            ++this.index;
	        }
	        while (!this.eof()) {
	            if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
	                break;
	            }
	            num += this.source[this.index++];
	        }
	        if (!octal && num.length === 0) {
	            // only 0o or 0O
	            this.throwUnexpectedToken();
	        }
	        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 6 /* NumericLiteral */,
	            value: parseInt(num, 8),
	            octal: octal,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    Scanner.prototype.isImplicitOctalLiteral = function () {
	        // Implicit octal, unless there is a non-octal digit.
	        // (Annex B.1.1 on Numeric Literals)
	        for (var i = this.index + 1; i < this.length; ++i) {
	            var ch = this.source[i];
	            if (ch === '8' || ch === '9') {
	                return false;
	            }
	            if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                return true;
	            }
	        }
	        return true;
	    };
	    Scanner.prototype.scanNumericLiteral = function () {
	        var start = this.index;
	        var ch = this.source[start];
	        assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'), 'Numeric literal must start with a decimal digit or a decimal point');
	        var num = '';
	        if (ch !== '.') {
	            num = this.source[this.index++];
	            ch = this.source[this.index];
	            // Hex number starts with '0x'.
	            // Octal number starts with '0'.
	            // Octal number in ES6 starts with '0o'.
	            // Binary number in ES6 starts with '0b'.
	            if (num === '0') {
	                if (ch === 'x' || ch === 'X') {
	                    ++this.index;
	                    return this.scanHexLiteral(start);
	                }
	                if (ch === 'b' || ch === 'B') {
	                    ++this.index;
	                    return this.scanBinaryLiteral(start);
	                }
	                if (ch === 'o' || ch === 'O') {
	                    return this.scanOctalLiteral(ch, start);
	                }
	                if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                    if (this.isImplicitOctalLiteral()) {
	                        return this.scanOctalLiteral(ch, start);
	                    }
	                }
	            }
	            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                num += this.source[this.index++];
	            }
	            ch = this.source[this.index];
	        }
	        if (ch === '.') {
	            num += this.source[this.index++];
	            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                num += this.source[this.index++];
	            }
	            ch = this.source[this.index];
	        }
	        if (ch === 'e' || ch === 'E') {
	            num += this.source[this.index++];
	            ch = this.source[this.index];
	            if (ch === '+' || ch === '-') {
	                num += this.source[this.index++];
	            }
	            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                    num += this.source[this.index++];
	                }
	            }
	            else {
	                this.throwUnexpectedToken();
	            }
	        }
	        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 6 /* NumericLiteral */,
	            value: parseFloat(num),
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-literals-string-literals
	    Scanner.prototype.scanStringLiteral = function () {
	        var start = this.index;
	        var quote = this.source[start];
	        assert_1.assert((quote === '\'' || quote === '"'), 'String literal must starts with a quote');
	        ++this.index;
	        var octal = false;
	        var str = '';
	        while (!this.eof()) {
	            var ch = this.source[this.index++];
	            if (ch === quote) {
	                quote = '';
	                break;
	            }
	            else if (ch === '\\') {
	                ch = this.source[this.index++];
	                if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                    switch (ch) {
	                        case 'u':
	                            if (this.source[this.index] === '{') {
	                                ++this.index;
	                                str += this.scanUnicodeCodePointEscape();
	                            }
	                            else {
	                                var unescaped_1 = this.scanHexEscape(ch);
	                                if (unescaped_1 === null) {
	                                    this.throwUnexpectedToken();
	                                }
	                                str += unescaped_1;
	                            }
	                            break;
	                        case 'x':
	                            var unescaped = this.scanHexEscape(ch);
	                            if (unescaped === null) {
	                                this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
	                            }
	                            str += unescaped;
	                            break;
	                        case 'n':
	                            str += '\n';
	                            break;
	                        case 'r':
	                            str += '\r';
	                            break;
	                        case 't':
	                            str += '\t';
	                            break;
	                        case 'b':
	                            str += '\b';
	                            break;
	                        case 'f':
	                            str += '\f';
	                            break;
	                        case 'v':
	                            str += '\x0B';
	                            break;
	                        case '8':
	                        case '9':
	                            str += ch;
	                            this.tolerateUnexpectedToken();
	                            break;
	                        default:
	                            if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                                var octToDec = this.octalToDecimal(ch);
	                                octal = octToDec.octal || octal;
	                                str += String.fromCharCode(octToDec.code);
	                            }
	                            else {
	                                str += ch;
	                            }
	                            break;
	                    }
	                }
	                else {
	                    ++this.lineNumber;
	                    if (ch === '\r' && this.source[this.index] === '\n') {
	                        ++this.index;
	                    }
	                    this.lineStart = this.index;
	                }
	            }
	            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                break;
	            }
	            else {
	                str += ch;
	            }
	        }
	        if (quote !== '') {
	            this.index = start;
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 8 /* StringLiteral */,
	            value: str,
	            octal: octal,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-template-literal-lexical-components
	    Scanner.prototype.scanTemplate = function () {
	        var cooked = '';
	        var terminated = false;
	        var start = this.index;
	        var head = (this.source[start] === '`');
	        var tail = false;
	        var rawOffset = 2;
	        ++this.index;
	        while (!this.eof()) {
	            var ch = this.source[this.index++];
	            if (ch === '`') {
	                rawOffset = 1;
	                tail = true;
	                terminated = true;
	                break;
	            }
	            else if (ch === '$') {
	                if (this.source[this.index] === '{') {
	                    this.curlyStack.push('${');
	                    ++this.index;
	                    terminated = true;
	                    break;
	                }
	                cooked += ch;
	            }
	            else if (ch === '\\') {
	                ch = this.source[this.index++];
	                if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                    switch (ch) {
	                        case 'n':
	                            cooked += '\n';
	                            break;
	                        case 'r':
	                            cooked += '\r';
	                            break;
	                        case 't':
	                            cooked += '\t';
	                            break;
	                        case 'u':
	                            if (this.source[this.index] === '{') {
	                                ++this.index;
	                                cooked += this.scanUnicodeCodePointEscape();
	                            }
	                            else {
	                                var restore = this.index;
	                                var unescaped_2 = this.scanHexEscape(ch);
	                                if (unescaped_2 !== null) {
	                                    cooked += unescaped_2;
	                                }
	                                else {
	                                    this.index = restore;
	                                    cooked += ch;
	                                }
	                            }
	                            break;
	                        case 'x':
	                            var unescaped = this.scanHexEscape(ch);
	                            if (unescaped === null) {
	                                this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
	                            }
	                            cooked += unescaped;
	                            break;
	                        case 'b':
	                            cooked += '\b';
	                            break;
	                        case 'f':
	                            cooked += '\f';
	                            break;
	                        case 'v':
	                            cooked += '\v';
	                            break;
	                        default:
	                            if (ch === '0') {
	                                if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                                    // Illegal: \01 \02 and so on
	                                    this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
	                                }
	                                cooked += '\0';
	                            }
	                            else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                                // Illegal: \1 \2
	                                this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
	                            }
	                            else {
	                                cooked += ch;
	                            }
	                            break;
	                    }
	                }
	                else {
	                    ++this.lineNumber;
	                    if (ch === '\r' && this.source[this.index] === '\n') {
	                        ++this.index;
	                    }
	                    this.lineStart = this.index;
	                }
	            }
	            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                ++this.lineNumber;
	                if (ch === '\r' && this.source[this.index] === '\n') {
	                    ++this.index;
	                }
	                this.lineStart = this.index;
	                cooked += '\n';
	            }
	            else {
	                cooked += ch;
	            }
	        }
	        if (!terminated) {
	            this.throwUnexpectedToken();
	        }
	        if (!head) {
	            this.curlyStack.pop();
	        }
	        return {
	            type: 10 /* Template */,
	            value: this.source.slice(start + 1, this.index - rawOffset),
	            cooked: cooked,
	            head: head,
	            tail: tail,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
	    Scanner.prototype.testRegExp = function (pattern, flags) {
	        // The BMP character to use as a replacement for astral symbols when
	        // translating an ES6 "u"-flagged pattern to an ES5-compatible
	        // approximation.
	        // Note: replacing with '\uFFFF' enables false positives in unlikely
	        // scenarios. For example, `[\u{1044f}-\u{10440}]` is an invalid
	        // pattern that would not be detected by this substitution.
	        var astralSubstitute = '\uFFFF';
	        var tmp = pattern;
	        var self = this;
	        if (flags.indexOf('u') >= 0) {
	            tmp = tmp
	                .replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function ($0, $1, $2) {
	                var codePoint = parseInt($1 || $2, 16);
	                if (codePoint > 0x10FFFF) {
	                    self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
	                }
	                if (codePoint <= 0xFFFF) {
	                    return String.fromCharCode(codePoint);
	                }
	                return astralSubstitute;
	            })
	                .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
	        }
	        // First, detect invalid regular expressions.
	        try {
	            RegExp(tmp);
	        }
	        catch (e) {
	            this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
	        }
	        // Return a regular expression object for this pattern-flag pair, or
	        // `null` in case the current environment doesn't support the flags it
	        // uses.
	        try {
	            return new RegExp(pattern, flags);
	        }
	        catch (exception) {
	            /* istanbul ignore next */
	            return null;
	        }
	    };
	    Scanner.prototype.scanRegExpBody = function () {
	        var ch = this.source[this.index];
	        assert_1.assert(ch === '/', 'Regular expression literal must start with a slash');
	        var str = this.source[this.index++];
	        var classMarker = false;
	        var terminated = false;
	        while (!this.eof()) {
	            ch = this.source[this.index++];
	            str += ch;
	            if (ch === '\\') {
	                ch = this.source[this.index++];
	                // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
	                if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                    this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
	                }
	                str += ch;
	            }
	            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
	            }
	            else if (classMarker) {
	                if (ch === ']') {
	                    classMarker = false;
	                }
	            }
	            else {
	                if (ch === '/') {
	                    terminated = true;
	                    break;
	                }
	                else if (ch === '[') {
	                    classMarker = true;
	                }
	            }
	        }
	        if (!terminated) {
	            this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
	        }
	        // Exclude leading and trailing slash.
	        return str.substr(1, str.length - 2);
	    };
	    Scanner.prototype.scanRegExpFlags = function () {
	        var str = '';
	        var flags = '';
	        while (!this.eof()) {
	            var ch = this.source[this.index];
	            if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
	                break;
	            }
	            ++this.index;
	            if (ch === '\\' && !this.eof()) {
	                ch = this.source[this.index];
	                if (ch === 'u') {
	                    ++this.index;
	                    var restore = this.index;
	                    var char = this.scanHexEscape('u');
	                    if (char !== null) {
	                        flags += char;
	                        for (str += '\\u'; restore < this.index; ++restore) {
	                            str += this.source[restore];
	                        }
	                    }
	                    else {
	                        this.index = restore;
	                        flags += 'u';
	                        str += '\\u';
	                    }
	                    this.tolerateUnexpectedToken();
	                }
	                else {
	                    str += '\\';
	                    this.tolerateUnexpectedToken();
	                }
	            }
	            else {
	                flags += ch;
	                str += ch;
	            }
	        }
	        return flags;
	    };
	    Scanner.prototype.scanRegExp = function () {
	        var start = this.index;
	        var pattern = this.scanRegExpBody();
	        var flags = this.scanRegExpFlags();
	        var value = this.testRegExp(pattern, flags);
	        return {
	            type: 9 /* RegularExpression */,
	            value: '',
	            pattern: pattern,
	            flags: flags,
	            regex: value,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    Scanner.prototype.lex = function () {
	        if (this.eof()) {
	            return {
	                type: 2 /* EOF */,
	                value: '',
	                lineNumber: this.lineNumber,
	                lineStart: this.lineStart,
	                start: this.index,
	                end: this.index
	            };
	        }
	        var cp = this.source.charCodeAt(this.index);
	        if (character_1.Character.isIdentifierStart(cp)) {
	            return this.scanIdentifier();
	        }
	        // Very common: ( and ) and ;
	        if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
	            return this.scanPunctuator();
	        }
	        // String literal starts with single quote (U+0027) or double quote (U+0022).
	        if (cp === 0x27 || cp === 0x22) {
	            return this.scanStringLiteral();
	        }
	        // Dot (.) U+002E can also start a floating-point number, hence the need
	        // to check the next character.
	        if (cp === 0x2E) {
	            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
	                return this.scanNumericLiteral();
	            }
	            return this.scanPunctuator();
	        }
	        if (character_1.Character.isDecimalDigit(cp)) {
	            return this.scanNumericLiteral();
	        }
	        // Template literals start with ` (U+0060) for template head
	        // or } (U+007D) for template middle or template tail.
	        if (cp === 0x60 || (cp === 0x7D && this.curlyStack[this.curlyStack.length - 1] === '${')) {
	            return this.scanTemplate();
	        }
	        // Possible identifier start in a surrogate pair.
	        if (cp >= 0xD800 && cp < 0xDFFF) {
	            if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
	                return this.scanIdentifier();
	            }
	        }
	        return this.scanPunctuator();
	    };
	    return Scanner;
	}());
	exports.Scanner = Scanner;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TokenName = {};
	exports.TokenName[1 /* BooleanLiteral */] = 'Boolean';
	exports.TokenName[2 /* EOF */] = '<end>';
	exports.TokenName[3 /* Identifier */] = 'Identifier';
	exports.TokenName[4 /* Keyword */] = 'Keyword';
	exports.TokenName[5 /* NullLiteral */] = 'Null';
	exports.TokenName[6 /* NumericLiteral */] = 'Numeric';
	exports.TokenName[7 /* Punctuator */] = 'Punctuator';
	exports.TokenName[8 /* StringLiteral */] = 'String';
	exports.TokenName[9 /* RegularExpression */] = 'RegularExpression';
	exports.TokenName[10 /* Template */] = 'Template';


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	// Generated by generate-xhtml-entities.js. DO NOT MODIFY!
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.XHTMLEntities = {
	    quot: '\u0022',
	    amp: '\u0026',
	    apos: '\u0027',
	    gt: '\u003E',
	    nbsp: '\u00A0',
	    iexcl: '\u00A1',
	    cent: '\u00A2',
	    pound: '\u00A3',
	    curren: '\u00A4',
	    yen: '\u00A5',
	    brvbar: '\u00A6',
	    sect: '\u00A7',
	    uml: '\u00A8',
	    copy: '\u00A9',
	    ordf: '\u00AA',
	    laquo: '\u00AB',
	    not: '\u00AC',
	    shy: '\u00AD',
	    reg: '\u00AE',
	    macr: '\u00AF',
	    deg: '\u00B0',
	    plusmn: '\u00B1',
	    sup2: '\u00B2',
	    sup3: '\u00B3',
	    acute: '\u00B4',
	    micro: '\u00B5',
	    para: '\u00B6',
	    middot: '\u00B7',
	    cedil: '\u00B8',
	    sup1: '\u00B9',
	    ordm: '\u00BA',
	    raquo: '\u00BB',
	    frac14: '\u00BC',
	    frac12: '\u00BD',
	    frac34: '\u00BE',
	    iquest: '\u00BF',
	    Agrave: '\u00C0',
	    Aacute: '\u00C1',
	    Acirc: '\u00C2',
	    Atilde: '\u00C3',
	    Auml: '\u00C4',
	    Aring: '\u00C5',
	    AElig: '\u00C6',
	    Ccedil: '\u00C7',
	    Egrave: '\u00C8',
	    Eacute: '\u00C9',
	    Ecirc: '\u00CA',
	    Euml: '\u00CB',
	    Igrave: '\u00CC',
	    Iacute: '\u00CD',
	    Icirc: '\u00CE',
	    Iuml: '\u00CF',
	    ETH: '\u00D0',
	    Ntilde: '\u00D1',
	    Ograve: '\u00D2',
	    Oacute: '\u00D3',
	    Ocirc: '\u00D4',
	    Otilde: '\u00D5',
	    Ouml: '\u00D6',
	    times: '\u00D7',
	    Oslash: '\u00D8',
	    Ugrave: '\u00D9',
	    Uacute: '\u00DA',
	    Ucirc: '\u00DB',
	    Uuml: '\u00DC',
	    Yacute: '\u00DD',
	    THORN: '\u00DE',
	    szlig: '\u00DF',
	    agrave: '\u00E0',
	    aacute: '\u00E1',
	    acirc: '\u00E2',
	    atilde: '\u00E3',
	    auml: '\u00E4',
	    aring: '\u00E5',
	    aelig: '\u00E6',
	    ccedil: '\u00E7',
	    egrave: '\u00E8',
	    eacute: '\u00E9',
	    ecirc: '\u00EA',
	    euml: '\u00EB',
	    igrave: '\u00EC',
	    iacute: '\u00ED',
	    icirc: '\u00EE',
	    iuml: '\u00EF',
	    eth: '\u00F0',
	    ntilde: '\u00F1',
	    ograve: '\u00F2',
	    oacute: '\u00F3',
	    ocirc: '\u00F4',
	    otilde: '\u00F5',
	    ouml: '\u00F6',
	    divide: '\u00F7',
	    oslash: '\u00F8',
	    ugrave: '\u00F9',
	    uacute: '\u00FA',
	    ucirc: '\u00FB',
	    uuml: '\u00FC',
	    yacute: '\u00FD',
	    thorn: '\u00FE',
	    yuml: '\u00FF',
	    OElig: '\u0152',
	    oelig: '\u0153',
	    Scaron: '\u0160',
	    scaron: '\u0161',
	    Yuml: '\u0178',
	    fnof: '\u0192',
	    circ: '\u02C6',
	    tilde: '\u02DC',
	    Alpha: '\u0391',
	    Beta: '\u0392',
	    Gamma: '\u0393',
	    Delta: '\u0394',
	    Epsilon: '\u0395',
	    Zeta: '\u0396',
	    Eta: '\u0397',
	    Theta: '\u0398',
	    Iota: '\u0399',
	    Kappa: '\u039A',
	    Lambda: '\u039B',
	    Mu: '\u039C',
	    Nu: '\u039D',
	    Xi: '\u039E',
	    Omicron: '\u039F',
	    Pi: '\u03A0',
	    Rho: '\u03A1',
	    Sigma: '\u03A3',
	    Tau: '\u03A4',
	    Upsilon: '\u03A5',
	    Phi: '\u03A6',
	    Chi: '\u03A7',
	    Psi: '\u03A8',
	    Omega: '\u03A9',
	    alpha: '\u03B1',
	    beta: '\u03B2',
	    gamma: '\u03B3',
	    delta: '\u03B4',
	    epsilon: '\u03B5',
	    zeta: '\u03B6',
	    eta: '\u03B7',
	    theta: '\u03B8',
	    iota: '\u03B9',
	    kappa: '\u03BA',
	    lambda: '\u03BB',
	    mu: '\u03BC',
	    nu: '\u03BD',
	    xi: '\u03BE',
	    omicron: '\u03BF',
	    pi: '\u03C0',
	    rho: '\u03C1',
	    sigmaf: '\u03C2',
	    sigma: '\u03C3',
	    tau: '\u03C4',
	    upsilon: '\u03C5',
	    phi: '\u03C6',
	    chi: '\u03C7',
	    psi: '\u03C8',
	    omega: '\u03C9',
	    thetasym: '\u03D1',
	    upsih: '\u03D2',
	    piv: '\u03D6',
	    ensp: '\u2002',
	    emsp: '\u2003',
	    thinsp: '\u2009',
	    zwnj: '\u200C',
	    zwj: '\u200D',
	    lrm: '\u200E',
	    rlm: '\u200F',
	    ndash: '\u2013',
	    mdash: '\u2014',
	    lsquo: '\u2018',
	    rsquo: '\u2019',
	    sbquo: '\u201A',
	    ldquo: '\u201C',
	    rdquo: '\u201D',
	    bdquo: '\u201E',
	    dagger: '\u2020',
	    Dagger: '\u2021',
	    bull: '\u2022',
	    hellip: '\u2026',
	    permil: '\u2030',
	    prime: '\u2032',
	    Prime: '\u2033',
	    lsaquo: '\u2039',
	    rsaquo: '\u203A',
	    oline: '\u203E',
	    frasl: '\u2044',
	    euro: '\u20AC',
	    image: '\u2111',
	    weierp: '\u2118',
	    real: '\u211C',
	    trade: '\u2122',
	    alefsym: '\u2135',
	    larr: '\u2190',
	    uarr: '\u2191',
	    rarr: '\u2192',
	    darr: '\u2193',
	    harr: '\u2194',
	    crarr: '\u21B5',
	    lArr: '\u21D0',
	    uArr: '\u21D1',
	    rArr: '\u21D2',
	    dArr: '\u21D3',
	    hArr: '\u21D4',
	    forall: '\u2200',
	    part: '\u2202',
	    exist: '\u2203',
	    empty: '\u2205',
	    nabla: '\u2207',
	    isin: '\u2208',
	    notin: '\u2209',
	    ni: '\u220B',
	    prod: '\u220F',
	    sum: '\u2211',
	    minus: '\u2212',
	    lowast: '\u2217',
	    radic: '\u221A',
	    prop: '\u221D',
	    infin: '\u221E',
	    ang: '\u2220',
	    and: '\u2227',
	    or: '\u2228',
	    cap: '\u2229',
	    cup: '\u222A',
	    int: '\u222B',
	    there4: '\u2234',
	    sim: '\u223C',
	    cong: '\u2245',
	    asymp: '\u2248',
	    ne: '\u2260',
	    equiv: '\u2261',
	    le: '\u2264',
	    ge: '\u2265',
	    sub: '\u2282',
	    sup: '\u2283',
	    nsub: '\u2284',
	    sube: '\u2286',
	    supe: '\u2287',
	    oplus: '\u2295',
	    otimes: '\u2297',
	    perp: '\u22A5',
	    sdot: '\u22C5',
	    lceil: '\u2308',
	    rceil: '\u2309',
	    lfloor: '\u230A',
	    rfloor: '\u230B',
	    loz: '\u25CA',
	    spades: '\u2660',
	    clubs: '\u2663',
	    hearts: '\u2665',
	    diams: '\u2666',
	    lang: '\u27E8',
	    rang: '\u27E9'
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var error_handler_1 = __webpack_require__(10);
	var scanner_1 = __webpack_require__(12);
	var token_1 = __webpack_require__(13);
	var Reader = (function () {
	    function Reader() {
	        this.values = [];
	        this.curly = this.paren = -1;
	    }
	    // A function following one of those tokens is an expression.
	    Reader.prototype.beforeFunctionExpression = function (t) {
	        return ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
	            'return', 'case', 'delete', 'throw', 'void',
	            // assignment operators
	            '=', '+=', '-=', '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=',
	            '&=', '|=', '^=', ',',
	            // binary/unary operators
	            '+', '-', '*', '**', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
	            '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
	            '<=', '<', '>', '!=', '!=='].indexOf(t) >= 0;
	    };
	    // Determine if forward slash (/) is an operator or part of a regular expression
	    // https://github.com/mozilla/sweet.js/wiki/design
	    Reader.prototype.isRegexStart = function () {
	        var previous = this.values[this.values.length - 1];
	        var regex = (previous !== null);
	        switch (previous) {
	            case 'this':
	            case ']':
	                regex = false;
	                break;
	            case ')':
	                var keyword = this.values[this.paren - 1];
	                regex = (keyword === 'if' || keyword === 'while' || keyword === 'for' || keyword === 'with');
	                break;
	            case '}':
	                // Dividing a function by anything makes little sense,
	                // but we have to check for that.
	                regex = false;
	                if (this.values[this.curly - 3] === 'function') {
	                    // Anonymous function, e.g. function(){} /42
	                    var check = this.values[this.curly - 4];
	                    regex = check ? !this.beforeFunctionExpression(check) : false;
	                }
	                else if (this.values[this.curly - 4] === 'function') {
	                    // Named function, e.g. function f(){} /42/
	                    var check = this.values[this.curly - 5];
	                    regex = check ? !this.beforeFunctionExpression(check) : true;
	                }
	                break;
	            default:
	                break;
	        }
	        return regex;
	    };
	    Reader.prototype.push = function (token) {
	        if (token.type === 7 /* Punctuator */ || token.type === 4 /* Keyword */) {
	            if (token.value === '{') {
	                this.curly = this.values.length;
	            }
	            else if (token.value === '(') {
	                this.paren = this.values.length;
	            }
	            this.values.push(token.value);
	        }
	        else {
	            this.values.push(null);
	        }
	    };
	    return Reader;
	}());
	var Tokenizer = (function () {
	    function Tokenizer(code, config) {
	        this.errorHandler = new error_handler_1.ErrorHandler();
	        this.errorHandler.tolerant = config ? (typeof config.tolerant === 'boolean' && config.tolerant) : false;
	        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
	        this.scanner.trackComment = config ? (typeof config.comment === 'boolean' && config.comment) : false;
	        this.trackRange = config ? (typeof config.range === 'boolean' && config.range) : false;
	        this.trackLoc = config ? (typeof config.loc === 'boolean' && config.loc) : false;
	        this.buffer = [];
	        this.reader = new Reader();
	    }
	    Tokenizer.prototype.errors = function () {
	        return this.errorHandler.errors;
	    };
	    Tokenizer.prototype.getNextToken = function () {
	        if (this.buffer.length === 0) {
	            var comments = this.scanner.scanComments();
	            if (this.scanner.trackComment) {
	                for (var i = 0; i < comments.length; ++i) {
	                    var e = comments[i];
	                    var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
	                    var comment = {
	                        type: e.multiLine ? 'BlockComment' : 'LineComment',
	                        value: value
	                    };
	                    if (this.trackRange) {
	                        comment.range = e.range;
	                    }
	                    if (this.trackLoc) {
	                        comment.loc = e.loc;
	                    }
	                    this.buffer.push(comment);
	                }
	            }
	            if (!this.scanner.eof()) {
	                var loc = void 0;
	                if (this.trackLoc) {
	                    loc = {
	                        start: {
	                            line: this.scanner.lineNumber,
	                            column: this.scanner.index - this.scanner.lineStart
	                        },
	                        end: {}
	                    };
	                }
	                var startRegex = (this.scanner.source[this.scanner.index] === '/') && this.reader.isRegexStart();
	                var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
	                this.reader.push(token);
	                var entry = {
	                    type: token_1.TokenName[token.type],
	                    value: this.scanner.source.slice(token.start, token.end)
	                };
	                if (this.trackRange) {
	                    entry.range = [token.start, token.end];
	                }
	                if (this.trackLoc) {
	                    loc.end = {
	                        line: this.scanner.lineNumber,
	                        column: this.scanner.index - this.scanner.lineStart
	                    };
	                    entry.loc = loc;
	                }
	                if (token.type === 9 /* RegularExpression */) {
	                    var pattern = token.pattern;
	                    var flags = token.flags;
	                    entry.regex = { pattern: pattern, flags: flags };
	                }
	                this.buffer.push(entry);
	            }
	        }
	        return this.buffer.shift();
	    };
	    return Tokenizer;
	}());
	exports.Tokenizer = Tokenizer;


/***/ }
/******/ ])
});
;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/backEnd.ts":
/*!************************!*\
  !*** ./src/backEnd.ts ***!
  \************************/
/*! exports provided: backEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backEnd", function() { return backEnd; });
/* harmony import */ var _classBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classBlock */ "./src/classBlock.ts");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_1__);


class backEnd {
    constructor() {
        this.userClasses = new Map();
    }
    help(cmd) {
        switch (cmd) {
            case "clear":
                return ">clear\n"
                    + " Clears terminal log";
            case "help":
                return ">help <command>\n"
                    + " Is helpful";
            case "create":
                return ">create <classname>\n"
                    + " Creates a block";
            case "addvar":
                return ">addvar <targetclass> <type> <var>\n"
                    + " Adds a variable to target class";
            case "editvartype":
                return ">editvartype <targetclass> <newtype> <targetvar>\n"
                    + " Changes the type of the target variable";
            case "delvar":
                return ">delvar <targetclass> <var>\n"
                    + " Deletes a variable from target class";
            case "addfun":
                return ">addvar <targetclass> <var>\n"
                    + " Adds a function to target class";
            case "delfun":
                return ">create <classname>\n"
                    + " Deletes a function from target class";
            case "delete":
                return ">delete <classname>\n"
                    + " Deletes target class";
            case "print":
                return ">print <targetclass>\n"
                    + " Prints information on target class";
            case "printall":
                return ">printall\n"
                    + " Prints all current classes and their information";
            case "rename":
                return ">rename <targetclass> <newname>\n"
                    + " Changes a classes name";
            case "save":
                return ">save\n"
                    + " Prompts user to save diagram as .yml file";
            case "load":
                return ">load\n"
                    + " Loads diagram from loaded .yml file";
            case "removeparent":
                return ">removeparent <targetclass>\n"
                    + " Removes the parent of a classblock.";
            case "addparent":
                return ">addparent <targetclass> <parentclass> <relationship>\n"
                    + " Adds a parent to a classblock.";
            case "getparent":
                return ">getparent <targetclass>\n"
                    + " Returns the parent of a classblock.";
            case "deletechild":
                return ">deletechild <targetclass> <childclass>\n"
                    + " Removes a specific child from a classblock.";
            case "getchildren":
                return ">getchildren <targetclass>\n"
                    + " Returns all of the children for a classblock.";
            case "addchild":
                return ">addchild <targetclass> <childclass> <relationship>\n"
                    + " Adds a child to a classblock.";
            case "modrel":
                return ">modrel <parentclass> <childclass> <relationship>";
            default:
                return cmd + " is not a command";
        }
    }
    doCommand(command) {
        let args = (command.split(/\s{1,}/));
        args[0] = args[0].toLocaleLowerCase();
        switch (args[0]) {
            case "help":
                if (args.length > 1) {
                    return [this.help(args[1]), true];
                }
                else {
                    return ["list of commands\n"
                            + ">clear\n"
                            + ">create\n"
                            + ">delete\n"
                            + ">rename\n"
                            + ">addvar\n"
                            + ">delvar\n"
                            + ">editvartype\n"
                            + ">addfun\n"
                            + ">delfun\n"
                            + ">print\n"
                            + ">printall\n"
                            + ">save\n"
                            + ">load\n"
                            + ">addchild\n"
                            + ">deletechild\n"
                            + ">getchildren\n"
                            + ">addparent\n"
                            + ">getparent\n"
                            + ">removeparent\n"
                            + ">modrel\n"
                            + "type >help <command> for instructions on that command", true];
                }
            case "create":
                if (this.userClasses.has(args[1])) {
                    return ["Name already in use. Please enter unique name.", false];
                }
                else if (args.length < 2 || args[1] == "") {
                    return ["Please enter a name after create, type <help> <create> for more info", false];
                }
                else {
                    this.userClasses.set(args[1], new _classBlock__WEBPACK_IMPORTED_MODULE_0__["classBlock"](args[1]));
                    return [this.userClasses.get(args[1]).getName() + " created", true];
                }
            case "delete":
                if (args.length != 2) {
                    return ["Please use this format: >delete <targetclass>", false];
                }
                else if (!this.userClasses.has(args[1])) {
                    return [args[1] + " class does not exist", false];
                }
                else {
                    return [this.deleteClassBlock(args[1]), true];
                }
            case "addvar":
                if (this.userClasses.has(args[1])) {
                    if (args.length < 4 || args[3] == "") {
                        return ["Please enter a target class, type, and name after addvar, type <help> <addvar> for more info", false];
                    }
                    else if (this.userClasses.get(args[1]).setVar(args[2], args[3])) {
                        return ["Var <" + args[2] + "> " + args[3] + " added to " + args[1], true];
                    }
                    else {
                        return ["Var " + args[3] + " already exists in " + args[1], false];
                    }
                }
                else {
                    return [args[1] + " class does not exist", false];
                }
            case "editvartype":
                if (this.userClasses.has(args[1])) {
                    if (args.length < 4 || args[3] == "") {
                        return ["Please enter a target class, new type, and variable after editvartype, type <help> <editvartype> for more info", false];
                    }
                    else if (this.userClasses.get(args[1]).editVar(args[2], args[3])) {
                        return ["Var " + args[3] + " is now type <" + args[2] + "> in " + args[1], true];
                    }
                }
                else {
                    return [args[1] + " class does not exist", false];
                }
            case "delvar":
                if (this.userClasses.has(args[1])) {
                    if (this.userClasses.get(args[1]).removeVar(args[2])) {
                        return ["Var " + args[2] + " deleted from " + args[1], true];
                    }
                    else {
                        return ["Var " + args[2] + " does not exist in " + args[1], false];
                    }
                }
                else {
                    return [args[1] + " class does not exist", false];
                }
            case "addfun":
                if (this.userClasses.has(args[1])) {
                    if (this.userClasses.get(args[1]).setFun(args[2])) {
                        return ["Fun " + args[2] + " added to " + args[1], true];
                    }
                    else {
                        return ["Fun " + args[2] + " already exists in " + args[1], false];
                    }
                }
                else {
                    return [args[1] + " class does not exist", false];
                }
            case "delfun":
                if (this.userClasses.has(args[1])) {
                    if (this.userClasses.get(args[1]).removeFun(args[2])) {
                        return ["Fun " + args[2] + " deleted from " + args[1], true];
                    }
                    else {
                        return ["Fun " + args[2] + " does not exist in " + args[1], false];
                    }
                }
                else {
                    return [args[1] + " class does not exist", false];
                }
            case "print":
                if (this.userClasses.has(args[1])) {
                    return [this.userClasses.get(args[1]).print(), true];
                }
                else {
                    return [args[1] + " class does not exist", false];
                }
            case "printall":
                let newLines = this.userClasses.size;
                let blocks = "";
                this.userClasses.forEach((block) => {
                    blocks += block.print();
                    if (newLines > 1) {
                        blocks += "\n";
                        --newLines;
                    }
                });
                return [blocks, true];
            case "rename":
                if (args.length != 3) {
                    return ["Please use this format: >rename <targetclass> <newname>", false];
                }
                else if (!this.userClasses.has(args[1])) {
                    return [args[1] + " does not exist", false];
                }
                return [this.rename(args[1], args[2]), true];
            case "save":
                this.saveFile();
                return ["Saving", true];
            case "load":
                this.selectFile();
                return ["Loading", true];
            case "addparent":
                if (args.length != 4) {
                    return ["format: >addparent <targetclass> <parentclass> <relationship>", false];
                }
                else if (!this.userClasses.has(args[1])) {
                    return [args[1] + " does not exist", false];
                }
                else if (!this.userClasses.has(args[2])) {
                    return [args[2] + " does not exist", false];
                }
                return [this.addParent(args[1], args[2], args[3]), true];
            case "getparent":
                if (args.length != 2) {
                    return ["format: >getparent <targetclass>", false];
                }
                else if (!this.userClasses.has(args[1])) {
                    return [args[1] + " does not exist", false];
                }
                return [this.getParent(args[1]), true];
            case "removeparent":
                if (args.length != 2) {
                    return ["format: >removeparent <targetclass>", false];
                }
                else if (!this.userClasses.has(args[1])) {
                    return [args[1] + " does not exist", false];
                }
                return [this.removeParent(args[1]), true];
            case "addchild":
                if (args.length != 4) {
                    return ["format: >addchild <targetclass> <childclass> <relationship>", false];
                }
                else if (!this.userClasses.has(args[1])) {
                    return [args[1] + " does not exist", false];
                }
                else if (!this.userClasses.has(args[2])) {
                    return [args[2] + " does not exist", false];
                }
                return [this.addChild(args[1], args[2], args[3]), true];
            case "getchildren":
                if (args.length != 2) {
                    return ["format: >getchildren <targetclass>", false];
                }
                else if (!this.userClasses.has(args[1])) {
                    return [args[1] + " does not exist", false];
                }
                return [this.getChildren(args[1]), true];
            case "deletechild":
                if (args.length != 3) {
                    return ["format: >deletechild <targetclass> <childclass>", false];
                }
                else if (!this.userClasses.has(args[1])) {
                    return [args[1] + " does not exist", false];
                }
                else if (!this.userClasses.has(args[2])) {
                    return [args[2] + " does not exist", false];
                }
                return [this.deleteChild(args[1], args[2]), true];
            case "modrel":
                if (args.length != 4) {
                    return ["format: >modrel <targetclass> <childclass> <relationship>", false];
                }
                else if (!this.userClasses.has(args[1])) {
                    return [args[1] + " does not exist", false];
                }
                else if (!this.userClasses.has(args[2])) {
                    return [args[2] + " does not exist", false];
                }
                else if (!(args[3] === "strong" ||
                    args[3] === "weak" ||
                    args[3] === "is-a" ||
                    args[3] === "impl")) {
                    return [args[3] + " is not a valid relationship", false];
                }
                return [this.modifyRelationship(args[1], args[2], args[3]), true];
            default:
                return [args[0] + " is not a command", false];
        }
    }
    deleteClassBlock(targetClass) {
        var target = this.userClasses.get(targetClass);
        if (target.getChildren().length > 0) {
            target.getChildren().forEach(child => {
                var c = this.userClasses.get(child[0]);
                c.removeParent();
                if (child[1] === "strong") {
                    this.userClasses.delete(child[0]);
                }
            });
        }
        if (target.getParent()[0] != null) {
            this.userClasses.get(target.getParent()[0]).removeChild(targetClass);
        }
        this.userClasses.delete(targetClass);
        return (targetClass + " has been deleted.");
    }
    getChildren(targetClass) {
        var temp = this.userClasses.get(targetClass).getChildren();
        var children = new Array();
        if (temp.length <= 0) {
            return ("This class has no children");
        }
        for (var c in temp) {
            children.push(temp[c][0]);
        }
        return ("children: " + children);
    }
    addChild(targetClass, childClass, relationship) {
        var target = this.userClasses.get(targetClass);
        var child = this.userClasses.get(childClass);
        if (target.getParent()[0] === childClass) {
            return (targetClass + " is already a child of " + childClass);
        }
        target.addChild(childClass, relationship);
        child.setParent(targetClass, relationship);
        return ("added " + childClass + " as a child to " + targetClass + ".");
    }
    deleteChild(targetClass, childClass) {
        if ((this.userClasses.get(targetClass).getChildIndex(childClass)) > -1) {
            this.userClasses.get(targetClass).removeChild(childClass);
            this.userClasses.get(childClass).removeParent();
            return ("Removed " + childClass + " from the children's array of " + targetClass + ".");
        }
        return (childClass + " is not a child of " + targetClass + ".");
    }
    getParent(targetClass) {
        if (this.userClasses.get(targetClass).getParent()[0] == null) {
            return ("There is no parent class for " + targetClass + ".");
        }
        return ("The parent of " + targetClass + " is " + this.userClasses.get(targetClass).getParent() + ".");
    }
    addParent(targetClass, parentClass, relationship) {
        var target = this.userClasses.get(targetClass);
        var parent = this.userClasses.get(parentClass);
        if (parent.getParent()[0] === targetClass) {
            return (targetClass + " is already the parent of " + parentClass);
        }
        target.setParent(parentClass, relationship);
        parent.addChild(targetClass, relationship);
        return ("Added " + parentClass + " as the parent for " + targetClass);
    }
    removeParent(targetClass) {
        var parent = this.userClasses.get(targetClass).getParent()[0];
        this.userClasses.get(parent).removeChild(targetClass);
        this.userClasses.get(targetClass).removeParent();
        return ("Removed the parent of " + targetClass + ".");
    }
    modifyRelationship(parentClass, childClass, relationship) {
        var target = this.userClasses.get(parentClass);
        var child = this.userClasses.get(childClass);
        var children = target.getChildren();
        var index = target.getChildIndex(childClass);
        if (index < 0) {
            return false;
        }
        children[index][1] = relationship;
        child.getParent()[1] = relationship;
        return ("Changed the relationship of " + parentClass + " and " + childClass + " to " + relationship + ".");
    }
    rename(oldName, newName) {
        if (this.userClasses.has(newName)) {
            return "Please enter a unique class name";
        }
        else {
            this.userClasses.get(oldName).setName(newName);
            this.userClasses.set(newName, this.userClasses.get(oldName));
            this.userClasses.delete(oldName);
            return ("Changed the name of class " + oldName + " to " + newName);
        }
    }
    loadFile() {
        let inputFile = $("#inputFile");
        var file = inputFile.prop('files')[0];
    }
    selectFile() {
        $("#inputFile").click();
    }
    saveFile() {
        let diagramYaml = Object(js_yaml__WEBPACK_IMPORTED_MODULE_1__["safeDump"])(Array.from(this.userClasses));
        var uriContent = "data:application/octet-stream," + encodeURIComponent(diagramYaml);
        document.getElementById("link").outerHTML = "<a id=\"link\" href=" + uriContent + " download=\"diagram.yml\" class=\"hidden\">click me</a>";
        document.getElementById("link").click();
    }
}


/***/ }),

/***/ "./src/classBlock.ts":
/*!***************************!*\
  !*** ./src/classBlock.ts ***!
  \***************************/
/*! exports provided: classBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classBlock", function() { return classBlock; });
class classBlock {
    constructor(name) {
        this.vars = new Array();
        this.funs = new Array();
        this.parent = [null, null];
        this.children = new Array();
        this.name = name;
    }
    print() {
        let classOut = "Class : " + this.name;
        if (this.vars.length > 0) {
            classOut += " Variables :";
            this.vars.forEach(function (i) {
                classOut += " <" + i[0] + "> " + i[1];
            });
        }
        if (this.funs.length > 0) {
            classOut += " Functions :";
            this.funs.forEach(function (i) {
                classOut += " " + i;
            });
        }
        if (this.parent[0] != null) {
            classOut += " Parent : " + this.parent[0] + "(" + this.parent[1] + ")";
        }
        if (this.children.length > 0) {
            classOut += " Children :";
            this.children.forEach(function (i) {
                classOut += " " + i[0] + "(" + i[1] + ")";
            });
        }
        return classOut;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
        return true;
    }
    setVar(type, vari) {
        if (this.isVar(vari) != -1)
            return false;
        this.vars.push([type, vari]);
        return true;
    }
    editVar(type, vari) {
        let index = this.isVar(vari);
        if (index == -1)
            return false;
        this.vars[index][0] = type;
        return true;
    }
    isVar(vari) {
        for (let i = 0; i < this.vars.length; ++i) {
            if (this.vars[i][1] == vari)
                return i;
        }
        return -1;
    }
    removeVar(vari) {
        let index = this.isVar(vari);
        if (index == -1)
            return false;
        this.vars.splice(index, 1);
        return true;
    }
    setFun(func) {
        if (this.isFun(func))
            return false;
        this.funs.push(func);
        return true;
    }
    isFun(func) {
        return (this.funs.indexOf(func) != -1);
    }
    removeFun(func) {
        let index = this.funs.indexOf(func);
        if (index == -1)
            return false;
        this.funs.splice(index, 1);
        return true;
    }
    getFun() {
        return this.funs;
    }
    getVars() {
        return this.vars;
    }
    setParent(parent, relationship) {
        this.parent[0] = parent;
        this.parent[1] = relationship;
        return true;
    }
    removeParent() {
        this.parent = [null, null];
        return true;
    }
    getParent() {
        return this.parent;
    }
    addChild(child, relationship) {
        this.children.push([child, relationship]);
        return true;
    }
    getChildren() {
        return this.children;
    }
    getChildIndex(child) {
        if (this.children.length < 1) {
            return -1;
        }
        for (var c in this.children) {
            if (this.children[c][0] === child) {
                return c;
            }
        }
    }
    removeChild(child) {
        var index = this.children.indexOf([child]);
        this.children.splice(index, 1);
        return true;
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backEnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backEnd */ "./src/backEnd.ts");

let back = new _backEnd__WEBPACK_IMPORTED_MODULE_0__["backEnd"]();
let command = $("#command");
let jsPlumb = __webpack_require__(/*! ../dist/jsplumb.min.js */ "./dist/jsplumb.min.js").jsPlumb;
$(function () {
    let log = $("#log");
    let command = $("#command");
    let pi = jsPlumb.getInstance({
        anchor: "Continuous",
        Endpoint: ["Dot", { radius: 3 }],
        HoverPaintStyle: { stroke: "#1e8151", strokeWidth: 2 },
    });
    log.val("UML Terminal\n>help");
    command.focus();
    function addBlock(name, load = false) {
        if (name.indexOf(" ") > 0) {
            alert("Please enter Class name without spaces");
            return;
        }
        let className = $('[name="' + name + '"]').attr('name');
        if (className != undefined) {
            alert("Please enter a unique class name");
            return;
        }
        name = name.replace(/<\/?[^>]+(>|$)/g, "");
        if (load == true) {
            $("#blockArea").append("<div class= \"classblock\" id=" + name + " name =" + name + "> <strong>" + name + "</strong>" + "</div>");
            $("#" + name).append("<div class= \"variables\" > " + "<i> Variables </i>" + "</div");
            $("#" + name).append("<div class= \"functions\"> " + "<i> Functions </i>" + "</div");
        }
        if (name && back.doCommand("create " + name)[1]) {
            $("#blockArea").append("<div class= \"classblock\" id=" + name + " name =" + name + "> " + "<strong>" + name + "</strong>" + "</div>");
            $("#" + name).append("<div class= \"variables\" > " + "<i> Variables </i>" + "</div");
            $("#" + name).append("<div class= \"functions\"> " + "<i> Functions </i>" + "</div");
        }
    }
    $("#add").click(function () {
        let name = prompt("Please enter class name", "Class");
        addBlock(name);
    });
    $("#deleteClassInfo").click(function () {
        let name = prompt("Please enter the name of the class you would like to delete functions/variables from", "Class");
        let className = $('[name="' + name + '"]');
        let delOption = prompt("would you like to delete a function or an variable? Type 'variable' or 'function' without quotes");
        delOption = delOption.toLowerCase().trim();
        if (delOption == 'variable') {
            let delVar = prompt("What is the name of the variable you'd like to delete? ");
            delVar = delVar.toLowerCase().trim();
            $('[name="' + name + '"] .variables').children().each(function () {
                let editVariable = $(this).text().split("]");
                console.log(editVariable[0]);
                console.log(editVariable[1]);
                if (editVariable[1] === delVar
                    && back.doCommand("delvar " + name + " " + delVar)[1]) {
                    $(this).remove();
                }
            });
        }
        else if (delOption == "function") {
            let delFun = prompt("What is the name of the function you'd like to delete?");
            delFun = delFun.toLowerCase().trim();
            $('[name="' + name + '"] .functions').children().each(function () {
                console.log("did a thing");
                let deleteText = $(this).text();
                let newString = deleteText.substr(deleteText.indexOf(" ") + 1, deleteText.length);
                let check = newString.substr(0, newString.indexOf("("));
                console.log(check);
                if (check.toLowerCase().trim() === delFun
                    && back.doCommand("delfun " + name + " " + check)[1]) {
                    $(this).remove();
                }
            });
        }
    });
    $("#editClassInfo").click(function () {
        let name = prompt("Please enter the name of the class you would like to edit", "Class");
        let className = $('[name="' + name + '"]');
        if (name == null) {
            return;
        }
        else if (className.attr('name') == undefined) {
            alert("Cannot edit nonexistent class");
            return;
        }
        let editOption = prompt("would you like to edit a function or an variable? Type 'variable' or 'function' without quotes");
        if (editOption == "variable") {
            let itemToEdit = prompt("What is the name of the variable you want to edit?");
            let whatToEdit = prompt("Would you like to edit the name, the type or both? (Please enter 'name' or 'type'");
            if (whatToEdit == "name") {
                let newName = prompt("What would you like to rename it to?");
                $('[name="' + name + '"] .variables').children().each(function () {
                    let editVariable = $(this).text().split("]");
                    if (editVariable[1] == itemToEdit) {
                        editVariable[1] = newName;
                        console.log(editVariable[0]);
                        console.log(editVariable[1]);
                        $(this).html("<strong>" + editVariable[0] + "]</strong>" + newName);
                    }
                });
            }
            else if (whatToEdit == "type") {
                let newType = prompt("What is the new type of this variable?");
                $('[name="' + name + '"] .variables').children().each(function () {
                    let editVariable = $(this).text().split("]");
                    if (editVariable[1] == itemToEdit) {
                        $(this).html("<strong>[" + newType + "]</strong>" + editVariable[1]);
                    }
                });
            }
        }
        else if (editOption == "function") {
            let itemToEdit = prompt("What is the name of the function you'd like to edit?");
            if ($('[name="' + name + '"] .functions').children() == undefined) {
                prompt("Cannot edit a function that doesn't exist");
            }
            else {
                let whatToEdit = prompt("Would you like to edit the name, the return type or the parameters? (Please enter 'name', 'type' or 'parameters' ");
                if (whatToEdit == "name") {
                    let newName = prompt("What would you like to rename it to? (Don't include parentheses)");
                    $('[name="' + name + '"] .functions').children().each(function () {
                        let editFunction = $(this).text().split(" ");
                        if (editFunction[1] === itemToEdit) {
                            editFunction[1] = newName;
                            $(this).html("<i>" + editFunction[0] + "</i> " + editFunction[1] + " <strong>" + editFunction[2] + "</strong>");
                        }
                    });
                }
                else if (whatToEdit == "type") {
                    let newType = prompt("What is the new return type for this function?");
                    $('[name="' + name + '"] .functions').children().each(function () {
                        let editFunction = $(this).text().split(" ");
                        if (editFunction[1] === itemToEdit) {
                            editFunction[0] = newType;
                            $(this).html("<li><i>" + editFunction[0] + "</i> " + editFunction[1] + " <strong>" + editFunction[2] + "</strong> </li>");
                        }
                    });
                }
                else if (whatToEdit == "parameters") {
                    let newParams = prompt("What are the new parameters for this function? (Enter without spaces, ex: 'interest,rate,balance')");
                    $('[name="' + name + '"] .functions').children().each(function () {
                        let editFunction = $(this).text().split(" ");
                        if (editFunction[1] === itemToEdit) {
                            editFunction[2] = newParams;
                            $(this).html("<li><i>" + editFunction[0] + "</i> " + editFunction[1] + " <strong>(" + editFunction[2] + ")</strong> </li>");
                        }
                    });
                }
            }
        }
    });
    $("#renameClass").click(function () {
        let oldName = prompt("What is the name of the class you want to rename?");
        if (back.userClasses.get(oldName)) {
            let newName = prompt("What would you like to rename it to?");
            back.userClasses.get(oldName).setName(newName);
            back.userClasses.set(newName, back.userClasses.get(oldName));
            $('[name="' + oldName + '"] strong').text(newName);
            $('[name="' + oldName + '"]').attr("name", newName);
            back.userClasses.delete(oldName);
        }
        else {
            alert("You can't rename classes that don't exist");
        }
    });
    $("#save").click(function () {
        back.doCommand("save");
    });
    $("#load").click(function () {
        back.doCommand("load");
    });
    function addFunction(name, input, load = false) {
        let className = $('[name="' + name + '"]').attr('name');
        if (load == true) {
            $('[name="' + className + '"]').append("<li>" + input + "()</li>");
            return;
        }
        if (className != undefined) {
            let input = prompt("Please enter the function you'd like to add to " + name);
            let parameters = prompt("Please enter the parameters separated by a comma (no spaces between them");
            let returnType = prompt("What is the return type?");
            if (returnType.trim() == undefined || returnType.trim() == "") {
                returnType = "void";
            }
            let inputSplit = input.split(" ");
            inputSplit.forEach(function (fun) {
                if (fun && back.doCommand("addfun " + className + " " + fun)[1]) {
                    $('[name="' + className + '"] .functions').append("<li><i>" + returnType + "</i> " + fun + " (<strong>" + parameters + "</strong>) </li>");
                }
            });
        }
        else {
            alert("Cannot add functions to a class that doesn't exist");
        }
    }
    $("#functionButton").click(function () {
        let name = prompt("Please enter the name of the class you'd like to add a function to", "Class");
        if (name == null) {
            return;
        }
        addFunction(name);
    });
    function addVariable(name, input, load = false) {
        let className = $('[name="' + name + '"]').attr('name');
        if (load == true) {
            $('[name="' + className + '"] .variables').append("<li>" + "<strong>&lt;" + input[0] + "&gt;</strong>" + input[1] + "</li>");
            return;
        }
        if (className != undefined) {
            let input = prompt("Please enter the variable you would like to add to " + name);
            let type = prompt("What is the type of this variable?");
            if (input && type && back.doCommand("addvar " + className + " " + type + " " + input)[1]) {
                $('[name="' + className + '"] .variables').append("<li>" + "<strong>[" + type + "]</strong>" + input + "</li>");
            }
            else {
                alert("Please enter a valid variable name/type");
            }
        }
        else {
            alert("Cannot add variable. Class \"" + name + "\" doesn't exist");
        }
    }
    $("#variableButton").click(function () {
        let name = prompt("Please enter the name of the class you'd like to add a variable to");
        if (name == null || name == undefined) {
            return;
        }
        else {
            addVariable(name);
        }
    });
    function addChild(name) {
        let parentDiv = $('[name="' + name + '"]').attr("name");
        if (parentDiv != undefined) {
            let childName = prompt("Please enter the name of the new child block");
            let rType = prompt("relationship type");
            while (!(rType === "strong" ||
                rType === "weak" ||
                rType === "is-a" ||
                rType === "impl")) {
                rType = prompt('please enter a correct category\nstrong, weak, is-a, impl');
            }
            let oType = prompt("o type");
            if (childName == undefined || childName == null) {
                alert("Please enter a valid child name");
                return;
            }
            else {
                if (!back.userClasses.has(childName)) {
                    addBlock(childName);
                }
                var shape = "PlainArrow";
                if (rType === 'strong' || rType === 'weak') {
                    shape = "Diamond";
                }
                var ep1 = pi.addEndpoint(name, {
                    connectorOverlays: [
                        [shape, { width: 10, length: 30, location: 1, id: "connection" }]
                    ],
                });
                var ep2 = pi.addEndpoint(childName);
                var conn = pi.connect({
                    source: ep1,
                    target: ep2,
                });
                conn.setLabel(function (c) {
                    return oType;
                });
            }
        }
        else {
            alert("Cannot add a child to a class that doesn't exist");
        }
    }
    $("#child").click(function () {
        let name = prompt("Please enter the name of the class you'd like to add a child to", "Class");
        addChild(name);
    });
    $("#addRelationship").click(function () {
        let name = prompt("Please enter the name of the classes you'd like to add a relationship between, followed by the type of relationship (Please enter the parent first, followed by the child, than the relationship type, separated by spaces) <Parent> <Child> <Relationship>");
        let inputSplit = name.split(" ");
        back.addChild(inputSplit[0], inputSplit[1], inputSplit[2]);
        let parent = $('[name="' + inputSplit[0] + '"]').attr("name");
        let child = inputSplit[1];
        let rType = inputSplit[2];
        rType = rType.toLowerCase();
        if (parent != undefined) {
            console.log("Inside parent != undefined");
            while (!(rType === "strong" ||
                rType === "weak" ||
                rType === "is-a" ||
                rType === "impl")) {
                rType = prompt('please enter a correct category\nstrong, weak, is-a, impl');
            }
            if (child == undefined || child == null) {
                console.log("Inside child == undefined || child == null");
                alert("Please enter a valid child name");
                return;
            }
            else {
                if (!back.userClasses.has(child)) {
                    addBlock(child);
                }
                var ep1 = pi.addEndpoint(parent, {
                    connectorOverlays: [
                        ["PlainArrow", { width: 10, length: 30, location: 1, id: "arrow" }],
                        ["Label", { label: rType, id: "quantifier" }]
                    ],
                });
                var ep2 = pi.addEndpoint(child);
                pi.connect({ source: ep1, target: ep2 });
            }
        }
        else {
            alert("Cannot add a child to a class that doesn't exist");
        }
    });
    $("#deleteRelationship").click(function () {
        let name = prompt("Please enter the name of the two classes you'd like to delete the relationship from, separated by a space(<Parent> <Child>)");
        let inputSplit = name.split(" ");
        let child = inputSplit[0];
        let parent = inputSplit[1];
        let relationshipType = 'NA';
        if (relationshipType == "strong") {
            back.deleteChild(child, parent);
            jsPlumb.remove(parent);
        }
        else {
        }
        if (back.getParent(parent)) {
            back.deleteChild(child, parent);
            back.removeParent(parent);
        }
        else {
            alert("There is no parent for " + parent + "named " + child);
        }
    });
    function deleteClass(name) {
        let classToDelete = $('[name="' + name + '"]');
        if (back.userClasses.get(name)) {
            if (confirm("Are you sure you want to delete this class?") && back.doCommand("delete " + name)[1]) {
                pi.remove(name);
                $('[name="' + name + '"]').remove();
            }
        }
        else {
            alert("Class \"" + name + "\" does not exist, please enter a valid class name");
        }
    }
    $("#delete").click(function () {
        let name = prompt("Please enter the name of the class you'd like to delete");
        deleteClass(name);
    });
    $("#editRelationship").click(function () {
        let name = prompt("Please enter the name of the two classes you'd like to edit the relationship between, followed by the new type of relationship, separated by a space(<Parent> <Child> <Relationship>)");
        let inputSplit = name.split(" ");
        let parent = $('[name="' + inputSplit[0] + '"]').attr("name");
        let child = inputSplit[1];
        let rType = inputSplit[2];
        if (parent != undefined) {
            console.log("Inside parent != undefined");
            while (!(rType === "strong" ||
                rType === "weak" ||
                rType === "is-a" ||
                rType === "impl")) {
                rType = prompt('please enter a correct category\nstrong, weak, is-a, impl');
            }
            if (child == undefined || child == null) {
                console.log("Inside child == undefined || child == null");
                alert("Please enter a valid child name");
                return;
            }
            else {
                if (!back.userClasses.has(child)) {
                    back.modifyRelationship(parent, child, rType);
                    addBlock(child);
                }
                var ep1 = pi.addEndpoint(parent, {
                    connectorOverlays: [
                        ["PlainArrow", { width: 10, length: 30, location: 1, id: "arrow" }],
                        ["Label", { label: rType, id: "quantifier" }]
                    ],
                });
                var ep2 = pi.addEndpoint(child);
                pi.connect({ source: ep1, target: ep2 });
            }
        }
        else {
            alert("Cannot add a child to a class that doesn't exist");
        }
    });
    $('#blockArea').on("mousedown", ".classblock", function (e) {
        dragBlock();
    });
    $('#blockArea').on("mouseup", ".classblock", function (e) {
        let checkBlock = $(this).position();
        console.log(checkBlock.left, checkBlock.top);
        if (checkBlock.top < 0) {
            console.log("we got to check the top");
            $(this).css("top", "10px");
        }
        if (checkBlock.left < 75) {
            console.log("we got to check the left");
            $(this).css("left", "25px");
        }
    });
    function dragBlock() {
        let classBlock = jsPlumb.getInstance();
        classBlock.draggable($(".classblock"), {
            drag: function () {
                pi.repaintEverything();
            }
        });
    }
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    $("#inputFile").on("change", function () {
        if ($("#blockArea") != undefined) {
            $("#blockArea").html("");
            sleep(500).then(() => {
                for (let key of Array.from(back.userClasses.keys())) {
                    addBlock(key, true);
                    let variables = back.userClasses.get(key).getVars();
                    let functions = back.userClasses.get(key).getFun();
                    variables.forEach(function (value) {
                        addVariable(key, value, true);
                    });
                    functions.forEach(function (value) {
                        addFunction(key, value, true);
                    });
                }
            });
        }
    });
    command.on('keypress', function (e) {
        if (e.which === 13) {
            if (command.val() == "clear") {
                log.val("");
                command.val("");
            }
            else if (command.val() == "")
                apdLog("", log);
            else {
                apdLog(">" + command.val(), log);
                apdLog(back.doCommand(command.val())[0], log);
                log.scrollTop(log[0].scrollHeight);
                command.val("");
            }
        }
    });
});
function apdLog(newText, log) {
    log.val(log.val() + "\n" + newText);
}


/***/ })

/******/ });