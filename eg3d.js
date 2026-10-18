var Ic="160";var dd=0,Tl=1,fd=2;var uu=1,Fc=2,ii=3,Xn=0,Zt=1,Vt=2;var Ai=0,Is=1,Us=2,wl=3,Rl=4,pd=5,Wi=100,md=101,gd=102,kl=103,Cl=104,bd=200,yd=201,xd=202,vd=203,Jo=204,Zo=205,_d=206,Md=207,Sd=208,Ad=209,Ed=210,Td=211,wd=212,Rd=213,kd=214,Cd=0,Ld=1,Pd=2,vr=3,Id=4,Fd=5,Dd=6,Ud=7,du=0,Nd=1,zd=2,Ei=0,Od=1,Bd=2,Hd=3,Dc=4,Gd=5,Vd=6,Ll="attached",Wd="detached",fu=300,Ns=301,zs=302,Qo=303,$o=304,Kr=306,xn=1e3,yn=1001,Aa=1002,Ht=1003,_r=1004;var xa=1005;var hn=1006,Uc=1007;var wi=1008;var Ti=1009,Xd=1010,qd=1011,Nc=1012,pu=1013,Mi=1014,si=1015,Ea=1016,mu=1017,gu=1018,Yi=1020,Yd=1021,Tn=1023,jd=1024,Kd=1025,ji=1026,Os=1027,Jd=1028,bu=1029,Zd=1030,yu=1031,xu=1033,go=33776,bo=33777,yo=33778,xo=33779,Pl=35840,Il=35841,Fl=35842,Dl=35843,vu=36196,Ul=37492,Nl=37496,zl=37808,Ol=37809,Bl=37810,Hl=37811,Gl=37812,Vl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,jl=37818,Kl=37819,Jl=37820,Zl=37821,vo=36492,Ql=36494,$l=36495,Qd=36283,eh=36284,th=36285,nh=36286,$d=2200,ef=2201,tf=2202,Bs=2300,Ji=2301,_o=2302,ks=2400,Cs=2401,Mr=2402,zc=2500,nf=2501,_u=0,Jr=1,Da=2,Mu=3e3,Ki=3001,sf=3200,af=3201,Su=0,rf=1,wn="",dt="srgb",Xt="srgb-linear",Oc="display-p3",Zr="display-p3-linear",Sr="linear",Rt="srgb",Ar="rec709",Er="p3";var cs=7680;var ih=519,of=512,cf=513,lf=514,Au=515,hf=516,uf=517,df=518,ff=519,ec=35044;var sh="300 es",tc=1035,ai=2e3,Tr=2001,ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let a=0,r=i.length;a<r;a++)i[a].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=1234567,va=Math.PI/180,Hs=180/Math.PI;function Dn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function tn(s,e,t){return Math.max(e,Math.min(t,s))}function Bc(s,e){return(s%e+e)%e}function pf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mf(s,e,t){return s!==e?(t-s)/(e-s):0}function _a(s,e,t){return(1-t)*s+t*e}function gf(s,e,t,n){return _a(s,e,1-Math.exp(-t*n))}function bf(s,e=1){return e-Math.abs(Bc(s,e*2)-e)}function yf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function xf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function vf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function _f(s,e){return s+Math.random()*(e-s)}function Mf(s){return s*(.5-Math.random())}function Sf(s){s!==void 0&&(ah=s);let e=ah+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Af(s){return s*va}function Ef(s){return s*Hs}function nc(s){return(s&s-1)===0&&s!==0}function Tf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wf(s,e,t,n,i){let a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),h=r((e+n)/2),u=a((e-n)/2),d=r((e-n)/2),p=a((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*p,o*l);break;case"YXY":s.set(c*p,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function vt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Eu={DEG2RAD:va,RAD2DEG:Hs,generateUUID:Dn,clamp:tn,euclideanModulo:Bc,mapLinear:pf,inverseLerp:mf,lerp:_a,damp:gf,pingpong:bf,smoothstep:yf,smootherstep:xf,randInt:vf,randFloat:_f,randFloatSpread:Mf,seededRandom:Sf,degToRad:Af,radToDeg:Ef,isPowerOfTwo:nc,ceilPowerOfTwo:Tf,floorPowerOfTwo:wr,setQuaternionFromProperEuler:wf,normalize:vt,denormalize:Wn},Xe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*i+e.x,this.y=a*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class s{constructor(e,t,n,i,a,r,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,c,l)}set(e,t,n,i,a,r,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],b=i[0],m=i[3],f=i[6],x=i[1],y=i[4],M=i[7],w=i[2],S=i[5],R=i[8];return a[0]=r*b+o*x+c*w,a[3]=r*m+o*y+c*S,a[6]=r*f+o*M+c*R,a[1]=l*b+h*x+u*w,a[4]=l*m+h*y+u*S,a[7]=l*f+h*M+u*R,a[2]=d*b+p*x+g*w,a[5]=d*m+p*y+g*S,a[8]=d*f+p*M+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*a*h+n*o*c+i*a*l-i*r*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,d=o*c-h*a,p=l*a-r*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*r)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*a-o*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(r*t-n*a)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,r,o){let c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mo=new ct;function Tu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rf(){let s=Ta("canvas");return s.style.display="block",s}var rh={};function Ma(s){s in rh||(rh[s]=!0,console.warn(s))}var oh=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ch=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Va={[Xt]:{transfer:Sr,primaries:Ar,toReference:s=>s,fromReference:s=>s},[dt]:{transfer:Rt,primaries:Ar,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zr]:{transfer:Sr,primaries:Er,toReference:s=>s.applyMatrix3(ch),fromReference:s=>s.applyMatrix3(oh)},[Oc]:{transfer:Rt,primaries:Er,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ch),fromReference:s=>s.applyMatrix3(oh).convertLinearToSRGB()}},kf=new Set([Xt,Zr]),pt={enabled:!0,_workingColorSpace:Xt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!kf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Va[e].toReference,i=Va[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Va[s].primaries},getTransfer:function(s){return s===wn?Sr:Va[s].transfer}};function Fs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function So(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ls,Rr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Ta("canvas")),ls.width=e.width,ls.height=e.height;let n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ta("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let r=0;r<a.length;r++)a[r]=Fs(a[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fs(t[n]/255)*255):t[n]=Fs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cf=0,kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?a.push(Ao(i[r].image)):a.push(Ao(i[r]))}else a=Ao(i);n.url=a}return t||(e.images[this.uuid]=n),n}};function Ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lf=0,Qt=class s extends ri{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=yn,i=yn,a=hn,r=wi,o=Tn,c=Ti,l=s.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Dn(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ki?dt:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xn:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xn:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?Ki:Mu}set encoding(e){Ma("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ki?dt:wn}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=fu;Qt.DEFAULT_ANISOTROPY=1;var Mt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],b=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(p+1)/2,w=(f+1)/2,S=(h+d)/4,R=(u+b)/4,O=(g+m)/4;return y>M&&y>w?y<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(y),i=S/n,a=R/n):M>w?M<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(M),n=S/i,a=O/i):w<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(w),n=R/a,i=O/a),this.set(n,i,a,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ic=class extends ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ma("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ki?dt:wn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new kr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Cr=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sc=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=a[r+0],p=a[r+1],g=a[r+2],b=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==p||h!==g){let m=1-o,f=c*d+l*p+h*g+u*b,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let w=Math.sqrt(y),S=Math.atan2(w,f*x);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w}let M=o*x;if(c=c*m+d*M,l=l*m+p*M,h=h*m+g*M,u=u*m+b*M,m===1-o){let w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,a,r){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=a[r],d=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(a/2),d=c(n/2),p=c(i/2),g=c(a/2);switch(r){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(r-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(a+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(a-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(r-i)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-a*c,this._y=i*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,a=this._z,r=this._w,o=r*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=a,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-a*i),u=2*(a*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-a*u,this.z=i+c*u+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-a*o,this.y=a*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eo=new L,lh=new nn,dn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Ln):Ln.fromBufferAttribute(a,r),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}let i=e.children;for(let a=0,r=i.length;a<r;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Xa.subVectors(this.max,la),hs.subVectors(e.a,la),us.subVectors(e.b,la),ds.subVectors(e.c,la),bi.subVectors(us,hs),yi.subVectors(ds,us),Oi.subVectors(hs,ds);let t=[0,-bi.z,bi.y,0,-yi.z,yi.y,0,-Oi.z,Oi.y,bi.z,0,-bi.x,yi.z,0,-yi.x,Oi.z,0,-Oi.x,-bi.y,bi.x,0,-yi.y,yi.x,0,-Oi.y,Oi.x,0];return!To(t,hs,us,ds,Xa)||(t=[1,0,0,0,1,0,0,0,1],!To(t,hs,us,ds,Xa))?!1:(qa.crossVectors(bi,yi),t=[qa.x,qa.y,qa.z],To(t,hs,us,ds,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Zn=[new L,new L,new L,new L,new L,new L,new L,new L],Ln=new L,Wa=new dn,hs=new L,us=new L,ds=new L,bi=new L,yi=new L,Oi=new L,la=new L,Xa=new L,qa=new L,Bi=new L;function To(s,e,t,n,i){for(let a=0,r=s.length-3;a<=r;a+=3){Bi.fromArray(s,a);let o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),c=e.dot(Bi),l=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Pf=new dn,ha=new L,wo=new L,vn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pf.setFromPoints(e).getCenter(n);let i=0;for(let a=0,r=e.length;a<r;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);let t=ha.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ha,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(wo)),this.expandByPoint(ha.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new L,Ro=new L,Ya=new L,xi=new L,ko=new L,ja=new L,Co=new L,Zi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ro.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Ro);let a=e.distanceTo(t)*.5,r=-this.direction.dot(Ya),o=xi.dot(this.direction),c=-xi.dot(Ya),l=xi.lengthSq(),h=Math.abs(1-r*r),u,d,p,g;if(h>0)if(u=r*c-o,d=r*o-c,g=a*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,p=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-a,-c),a),p=d*(d+2*c)+l):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ro).addScaledVector(Ya,d),p}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);let n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,a=e.radius*e.radius;if(i>a)return null;let r=Math.sqrt(a-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,r,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||a>i||((a>n||isNaN(n))&&(n=a),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,i,a){ko.subVectors(t,e),ja.subVectors(n,e),Co.crossVectors(ko,ja);let r=this.direction.dot(Co),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;xi.subVectors(this.origin,e);let c=o*this.direction.dot(ja.crossVectors(xi,ja));if(c<0)return null;let l=o*this.direction.dot(ko.cross(xi));if(l<0||c+l>r)return null;let h=-o*xi.dot(Co);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class s{constructor(e,t,n,i,a,r,o,c,l,h,u,d,p,g,b,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,r,o,c,l,h,u,d,p,g,b,m)}set(e,t,n,i,a,r,o,c,l,h,u,d,p,g,b,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=a,f[5]=r,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/fs.setFromMatrixColumn(e,0).length(),a=1/fs.setFromMatrixColumn(e,1).length(),r=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){let d=r*h,p=r*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+p*l,t[10]=r*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-p,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=b+d*o,t[10]=r*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-r*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=b-d*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let d=r*h,p=r*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let d=r*c,p=r*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+p,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=r*c,p=r*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=r*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(If,e,Ff)}lookAt(e,t,n){let i=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),vi.crossVectors(n,gn),vi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),vi.crossVectors(n,gn)),vi.normalize(),Ka.crossVectors(gn,vi),i[0]=vi.x,i[4]=Ka.x,i[8]=gn.x,i[1]=vi.y,i[5]=Ka.y,i[9]=gn.y,i[2]=vi.z,i[6]=Ka.z,i[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],x=n[3],y=n[7],M=n[11],w=n[15],S=i[0],R=i[4],O=i[8],v=i[12],T=i[1],U=i[5],D=i[9],se=i[13],C=i[2],H=i[6],q=i[10],te=i[14],$=i[3],V=i[7],Q=i[11],ie=i[15];return a[0]=r*S+o*T+c*C+l*$,a[4]=r*R+o*U+c*H+l*V,a[8]=r*O+o*D+c*q+l*Q,a[12]=r*v+o*se+c*te+l*ie,a[1]=h*S+u*T+d*C+p*$,a[5]=h*R+u*U+d*H+p*V,a[9]=h*O+u*D+d*q+p*Q,a[13]=h*v+u*se+d*te+p*ie,a[2]=g*S+b*T+m*C+f*$,a[6]=g*R+b*U+m*H+f*V,a[10]=g*O+b*D+m*q+f*Q,a[14]=g*v+b*se+m*te+f*ie,a[3]=x*S+y*T+M*C+w*$,a[7]=x*R+y*U+M*H+w*V,a[11]=x*O+y*D+M*q+w*Q,a[15]=x*v+y*se+M*te+w*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15];return g*(+a*c*u-i*l*u-a*o*d+n*l*d+i*o*p-n*c*p)+b*(+t*c*p-t*l*d+a*r*d-i*r*p+i*l*h-a*c*h)+m*(+t*l*u-t*o*p-a*r*u+n*r*p+a*o*h-n*l*h)+f*(-i*o*h-t*c*u+t*o*d+i*r*u-n*r*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],x=u*m*l-b*d*l+b*c*p-o*m*p-u*c*f+o*d*f,y=g*d*l-h*m*l-g*c*p+r*m*p+h*c*f-r*d*f,M=h*b*l-g*u*l+g*o*p-r*b*p-h*o*f+r*u*f,w=g*u*c-h*b*c-g*o*d+r*b*d+h*o*m-r*u*m,S=t*x+n*y+i*M+a*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return e[0]=x*R,e[1]=(b*d*a-u*m*a-b*i*p+n*m*p+u*i*f-n*d*f)*R,e[2]=(o*m*a-b*c*a+b*i*l-n*m*l-o*i*f+n*c*f)*R,e[3]=(u*c*a-o*d*a-u*i*l+n*d*l+o*i*p-n*c*p)*R,e[4]=y*R,e[5]=(h*m*a-g*d*a+g*i*p-t*m*p-h*i*f+t*d*f)*R,e[6]=(g*c*a-r*m*a-g*i*l+t*m*l+r*i*f-t*c*f)*R,e[7]=(r*d*a-h*c*a+h*i*l-t*d*l-r*i*p+t*c*p)*R,e[8]=M*R,e[9]=(g*u*a-h*b*a-g*n*p+t*b*p+h*n*f-t*u*f)*R,e[10]=(r*b*a-g*o*a+g*n*l-t*b*l-r*n*f+t*o*f)*R,e[11]=(h*o*a-r*u*a-h*n*l+t*u*l+r*n*p-t*o*p)*R,e[12]=w*R,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*R,e[14]=(g*o*i-r*b*i-g*n*c+t*b*c+r*n*m-t*o*m)*R,e[15]=(r*u*i-h*o*i+h*n*c-t*u*c-r*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,r){return this.set(1,n,a,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,u=o+o,d=a*l,p=a*h,g=a*u,b=r*h,m=r*u,f=o*u,x=c*l,y=c*h,M=c*u,w=n.x,S=n.y,R=n.z;return i[0]=(1-(b+f))*w,i[1]=(p+M)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(p-M)*S,i[5]=(1-(d+f))*S,i[6]=(m+x)*S,i[7]=0,i[8]=(g+y)*R,i[9]=(m-x)*R,i[10]=(1-(d+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,a=fs.set(i[0],i[1],i[2]).length(),r=fs.set(i[4],i[5],i[6]).length(),o=fs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Pn.copy(this);let l=1/a,h=1/r,u=1/o;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,i,a,r,o=ai){let c=this.elements,l=2*a/(t-e),h=2*a/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(o===ai)p=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===Tr)p=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,r,o=ai){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(r-a),d=(t+e)*l,p=(n+i)*h,g,b;if(o===ai)g=(r+a)*u,b=-2*u;else if(o===Tr)g=a*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fs=new L,Pn=new nt,If=new L(0,0,0),Ff=new L(1,1,1),vi=new L,Ka=new L,gn=new L,hh=new nt,uh=new nn,Gs=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,a=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-tn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uh.setFromEuler(this),this.setFromQuaternion(uh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gs.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Df=0,dh=new L,ps=new nn,$n=new nt,Ja=new L,ua=new L,Uf=new L,Nf=new nn,fh=new L(1,0,0),ph=new L(0,1,0),mh=new L(0,0,1),zf={type:"added"},Of={type:"removed"},Ct=class s extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new Gs,n=new nn,i=new L(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new ct}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(fh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(ua,Ja,this.up):$n.lookAt(Ja,ua,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),ps.setFromRotationMatrix($n),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Of)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let a=0,r=i.length;a<r;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,Nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let a=0,r=i.length;a<r;a++){let o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(a(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ct.DEFAULT_UP=new L(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new L,ei=new L,Lo=new L,ti=new L,ms=new L,gs=new L,gh=new L,Po=new L,Io=new L,Fo=new L,Za=!1,qi=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),In.subVectors(e,t),i.cross(In);let a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){In.subVectors(i,t),ei.subVectors(n,t),Lo.subVectors(e,t);let r=In.dot(In),o=In.dot(ei),c=In.dot(Lo),l=ei.dot(ei),h=ei.dot(Lo),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(r*h-o*c)*d;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getUV(e,t,n,i,a,r,o,c){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),this.getInterpolation(e,t,n,i,a,r,o,c)}static getInterpolation(e,t,n,i,a,r,o,c){return this.getBarycoord(e,t,n,i,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,ti.x),c.addScaledVector(r,ti.y),c.addScaledVector(o,ti.z),c)}static isFrontFacing(e,t,n,i){return In.subVectors(n,t),ei.subVectors(e,t),In.cross(ei).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),In.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return Za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Za=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}getInterpolation(e,t,n,i,a){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,a=this.c,r,o;ms.subVectors(i,n),gs.subVectors(a,n),Po.subVectors(e,n);let c=ms.dot(Po),l=gs.dot(Po);if(c<=0&&l<=0)return t.copy(n);Io.subVectors(e,i);let h=ms.dot(Io),u=gs.dot(Io);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(ms,r);Fo.subVectors(e,a);let p=ms.dot(Fo),g=gs.dot(Fo);if(g>=0&&p<=g)return t.copy(a);let b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(gs,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return gh.subVectors(a,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(gh,o);let f=1/(m+b+d);return r=b*f,o=d*f,t.copy(n).addScaledVector(ms,r).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Do(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Bc(e,1),t=tn(t,0,1),n=tn(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Do(r,a,e+1/3),this.g=Do(r,a,e),this.b=Do(r,a,e-1/3)}return pt.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=i[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=wu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return pt.fromWorkingColorSpace(en.copy(this),e),Math.round(tn(en.r*255,0,255))*65536+Math.round(tn(en.g*255,0,255))*256+Math.round(tn(en.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(en.copy(this),t);let n=en.r,i=en.g,a=en.b,r=Math.max(n,i,a),o=Math.min(n,i,a),c,l,h=(o+r)/2;if(o===r)c=0,l=0;else{let u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-a)/u+(i<a?6:0);break;case i:c=(a-n)/u+2;break;case a:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=dt){pt.fromWorkingColorSpace(en.copy(this),e);let t=en.r,n=en.g,i=en.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Qa);let n=_a(_i.h,Qa.h,t),i=_a(_i.s,Qa.s,t),a=_a(_i.l,Qa.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ue;Ue.NAMES=wu;var Bf=0,fn=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Dn(),this.name="",this.type="Material",this.blending=Is,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Zo,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Zo&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(a){let r=[];for(let o in a){let c=a[o];delete c.metadata,r.push(c)}return r}if(t){let a=i(e.textures),r=i(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dt=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ot=new L,$a=new Xe,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),a=vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}};var Lr=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pr=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ft=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Hf=0,En=new nt,Uo=new Ct,bs=new L,bn=new dn,da=new dn,Jt=new L,It=class s extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?Pr:Lr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new ct().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Uo.lookAt(e),Uo.updateMatrix(),this.applyMatrix4(Uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let a=t[n];bn.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];da.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(bn.min,da.min),bn.expandByPoint(Jt),Jt.addVectors(bn.max,da.max),bn.expandByPoint(Jt)):(bn.expandByPoint(da.min),bn.expandByPoint(da.max))}bn.getCenter(n);let i=0;for(let a=0,r=e.count;a<r;a++)Jt.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Jt.fromBufferAttribute(o,l),c&&(bs.fromBufferAttribute(e,l),Jt.add(bs)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,a=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<o;T++)l[T]=new L,h[T]=new L;let u=new L,d=new L,p=new L,g=new Xe,b=new Xe,m=new Xe,f=new L,x=new L;function y(T,U,D){u.fromArray(i,T*3),d.fromArray(i,U*3),p.fromArray(i,D*3),g.fromArray(r,T*2),b.fromArray(r,U*2),m.fromArray(r,D*2),d.sub(u),p.sub(u),b.sub(g),m.sub(g);let se=1/(b.x*m.y-m.x*b.y);isFinite(se)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-b.y).multiplyScalar(se),x.copy(p).multiplyScalar(b.x).addScaledVector(d,-m.x).multiplyScalar(se),l[T].add(f),l[U].add(f),l[D].add(f),h[T].add(x),h[U].add(x),h[D].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let T=0,U=M.length;T<U;++T){let D=M[T],se=D.start,C=D.count;for(let H=se,q=se+C;H<q;H+=3)y(n[H+0],n[H+1],n[H+2])}let w=new L,S=new L,R=new L,O=new L;function v(T){R.fromArray(a,T*3),O.copy(R);let U=l[T];w.copy(U),w.sub(R.multiplyScalar(R.dot(U))).normalize(),S.crossVectors(O,U);let se=S.dot(h[T])<0?-1:1;c[T*4]=w.x,c[T*4+1]=w.y,c[T*4+2]=w.z,c[T*4+3]=se}for(let T=0,U=M.length;T<U;++T){let D=M[T],se=D.start,C=D.count;for(let H=se,q=se+C;H<q;H+=3)v(n[H+0]),v(n[H+1]),v(n[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new L,a=new L,r=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,b),r.fromBufferAttribute(t,m),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,a),u.subVectors(i,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let a=this.morphAttributes;for(let o in a){let c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},a=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let a=e.morphAttributes;for(let l in a){let h=[],u=a[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bh=new nt,Hi=new Zi,er=new vn,yh=new L,ys=new L,xs=new L,vs=new L,No=new L,tr=new L,nr=new Xe,ir=new Xe,sr=new Xe,xh=new L,vh=new L,_h=new L,ar=new L,rr=new L,ze=class extends Ct{constructor(e=new It,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){let o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(a&&o){tr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){let h=o[c],u=a[c];h!==0&&(No.fromBufferAttribute(u,e),r?tr.addScaledVector(No,h):tr.addScaledVector(No.sub(t),h))}t.add(tr)}return t}raycast(e,t){let n=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(a),Hi.copy(e.ray).recast(e.near),!(er.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(er,yh)===null||Hi.origin.distanceToSquared(yh)>(e.far-e.near)**2))&&(bh.copy(a).invert(),Hi.copy(e.ray).applyMatrix4(bh),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let i,a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,w=y;M<w;M+=3){let S=o.getX(M),R=o.getX(M+1),O=o.getX(M+2);i=or(this,f,e,n,l,h,u,S,R,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let x=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=or(this,r,e,n,l,h,u,x,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=r[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,w=y;M<w;M+=3){let S=M,R=M+1,O=M+2;i=or(this,f,e,n,l,h,u,S,R,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let x=m,y=m+1,M=m+2;i=or(this,r,e,n,l,h,u,x,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Gf(s,e,t,n,i,a,r,o){let c;if(e.side===Zt?c=n.intersectTriangle(r,a,i,!0,o):c=n.intersectTriangle(i,a,r,e.side===Xn,o),c===null)return null;rr.copy(o),rr.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(rr);return l<t.near||l>t.far?null:{distance:l,point:rr.clone(),object:s}}function or(s,e,t,n,i,a,r,o,c,l){s.getVertexPosition(o,ys),s.getVertexPosition(c,xs),s.getVertexPosition(l,vs);let h=Gf(s,e,t,n,ys,xs,vs,ar);if(h){i&&(nr.fromBufferAttribute(i,o),ir.fromBufferAttribute(i,c),sr.fromBufferAttribute(i,l),h.uv=qi.getInterpolation(ar,ys,xs,vs,nr,ir,sr,new Xe)),a&&(nr.fromBufferAttribute(a,o),ir.fromBufferAttribute(a,c),sr.fromBufferAttribute(a,l),h.uv1=qi.getInterpolation(ar,ys,xs,vs,nr,ir,sr,new Xe),h.uv2=h.uv1),r&&(xh.fromBufferAttribute(r,o),vh.fromBufferAttribute(r,c),_h.fromBufferAttribute(r,l),h.normal=qi.getInterpolation(ar,ys,xs,vs,xh,vh,_h,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new L,materialIndex:0};qi.getNormal(ys,xs,vs,u.normal),h.face=u}return h}var _n=class s extends It{constructor(e=1,t=1,n=1,i=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:r};let o=this;i=Math.floor(i),a=Math.floor(a),r=Math.floor(r);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,r,a,0),g("z","y","x",1,-1,n,t,-e,r,a,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function g(b,m,f,x,y,M,w,S,R,O,v){let T=M/R,U=w/O,D=M/2,se=w/2,C=S/2,H=R+1,q=O+1,te=0,$=0,V=new L;for(let Q=0;Q<q;Q++){let ie=Q*U-se;for(let me=0;me<H;me++){let W=me*T-D;V[b]=W*x,V[m]=ie*y,V[f]=C,l.push(V.x,V.y,V.z),V[b]=0,V[m]=0,V[f]=S>0?1:-1,h.push(V.x,V.y,V.z),u.push(me/R),u.push(1-Q/O),te+=1}}for(let Q=0;Q<O;Q++)for(let ie=0;ie<R;ie++){let me=d+ie+H*Q,W=d+ie+H*(Q+1),Z=d+(ie+1)+H*(Q+1),fe=d+(ie+1)+H*Q;c.push(me,W,fe),c.push(W,Z,fe),$+=6}o.addGroup(p,$,v),p+=$,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ln(s){let e={};for(let t=0;t<s.length;t++){let n=Vs(s[t]);for(let i in n)e[i]=n[i]}return e}function Vf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ru(s){return s.getRenderTarget()===null?s.outputColorSpace:pt.workingColorSpace}var Wf={clone:Vs,merge:ln},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ir=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends Ir{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(va*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,Ms=1,ac=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Gt(_s,Ms,e,t);i.layers=this.layers,this.add(i);let a=new Gt(_s,Ms,e,t);a.layers=this.layers,this.add(a);let r=new Gt(_s,Ms,e,t);r.layers=this.layers,this.add(r);let o=new Gt(_s,Ms,e,t);o.layers=this.layers,this.add(o);let c=new Gt(_s,Ms,e,t);c.layers=this.layers,this.add(c);let l=new Gt(_s,Ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,a,r,o,c]=t;for(let l of t)this.remove(l);if(e===ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fr=class extends Qt{constructor(e,t,n,i,a,r,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ns,super(e,t,n,i,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rc=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ma("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ki?dt:wn),this.texture=new Fr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _n(5,5,5),a=new Un({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Ai});a.uniforms.tEquirect.value=t;let r=new ze(i,a),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=hn),new ac(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(a)}},zo=new L,Yf=new L,jf=new ct,Fn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=zo.subVectors(n,t).cross(Yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jf.getNormalMatrix(e),i=this.coplanarPoint(zo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gi=new vn,cr=new L,Ra=class{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,a=new Fn,r=new Fn){this.planes=[e,t,n,i,a,r]}set(e,t,n,i,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ai){let n=this.planes,i=e.elements,a=i[0],r=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],b=i[10],m=i[11],f=i[12],x=i[13],y=i[14],M=i[15];if(n[0].setComponents(c-a,d-l,m-p,M-f).normalize(),n[1].setComponents(c+a,d+l,m+p,M+f).normalize(),n[2].setComponents(c+r,d+h,m+g,M+x).normalize(),n[3].setComponents(c-r,d-h,m-g,M-x).normalize(),n[4].setComponents(c-o,d-u,m-b,M-y).normalize(),t===ai)n[5].setComponents(c+o,d+u,m+b,M+y).normalize();else if(t===Tr)n[5].setComponents(o,u,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(cr.x=i.normal.x>0?e.max.x:e.min.x,cr.y=i.normal.y>0?e.max.y:e.min.y,cr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ku(){let s=null,e=!1,t=null,n=null;function i(a,r){t(a,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function Kf(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let b;if(u instanceof Float32Array)b=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)b=s.SHORT;else if(u instanceof Uint32Array)b=s.UNSIGNED_INT;else if(u instanceof Int32Array)b=s.INT;else if(u instanceof Int8Array)b=s.BYTE;else if(u instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:b,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function a(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),p.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let b=0,m=g.length;b<m;b++){let f=g[b];t?s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):s.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):s.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,l,h),u.version=l.version}}return{get:r,remove:o,update:c}}var Mn=class s extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],b=[],m=[];for(let f=0;f<h;f++){let x=f*d-r;for(let y=0;y<l;y++){let M=y*u-a;g.push(M,-x,0),b.push(0,0,1),m.push(y/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){let y=x+l*f,M=x+l*(f+1),w=x+1+l*(f+1),S=x+1+l*f;p.push(y,M,S),p.push(M,w,S)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(b,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,um=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,km=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,i0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:Jf,alphahash_pars_fragment:Zf,alphamap_fragment:Qf,alphamap_pars_fragment:$f,alphatest_fragment:ep,alphatest_pars_fragment:tp,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:ap,begin_vertex:rp,beginnormal_vertex:op,bsdfs:cp,iridescence_fragment:lp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:fp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:bp,color_vertex:yp,common:xp,cube_uv_reflection_fragment:vp,defaultnormal_vertex:_p,displacementmap_pars_vertex:Mp,displacementmap_vertex:Sp,emissivemap_fragment:Ap,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:wp,envmap_fragment:Rp,envmap_common_pars_fragment:kp,envmap_pars_fragment:Cp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Vp,envmap_vertex:Pp,fog_vertex:Ip,fog_pars_vertex:Fp,fog_fragment:Dp,fog_pars_fragment:Up,gradientmap_pars_fragment:Np,lightmap_fragment:zp,lightmap_pars_fragment:Op,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Gp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:qp,lights_phong_pars_fragment:Yp,lights_physical_fragment:jp,lights_physical_pars_fragment:Kp,lights_fragment_begin:Jp,lights_fragment_maps:Zp,lights_fragment_end:Qp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:cm,morphcolor_vertex:lm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:fm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:bm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:xm,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:Mm,opaque_fragment:Sm,packing:Am,premultiplied_alpha_fragment:Em,project_vertex:Tm,dithering_fragment:wm,dithering_pars_fragment:Rm,roughnessmap_fragment:km,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Im,shadowmask_pars_fragment:Fm,skinbase_vertex:Dm,skinning_pars_vertex:Um,skinning_vertex:Nm,skinnormal_vertex:zm,specularmap_fragment:Om,specularmap_pars_fragment:Bm,tonemapping_fragment:Hm,tonemapping_pars_fragment:Gm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:jm,background_vert:Km,background_frag:Jm,backgroundCube_vert:Zm,backgroundCube_frag:Qm,cube_vert:$m,cube_frag:e0,depth_vert:t0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:s0,equirect_vert:a0,equirect_frag:r0,linedashed_vert:o0,linedashed_frag:c0,meshbasic_vert:l0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:d0,meshmatcap_vert:f0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:b0,meshphong_frag:y0,meshphysical_vert:x0,meshphysical_frag:v0,meshtoon_vert:_0,meshtoon_frag:M0,points_vert:S0,points_frag:A0,shadow_vert:E0,shadow_frag:T0,sprite_vert:w0,sprite_frag:R0},ve={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Vn={basic:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:ln([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:ln([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:ln([ve.points,ve.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:ln([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:ln([ve.common,ve.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:ln([ve.sprite,ve.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:ln([ve.common,ve.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:ln([ve.lights,ve.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Vn.physical={uniforms:ln([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var lr={r:0,b:0,g:0};function k0(s,e,t,n,i,a,r){let o=new Ue(0),c=a===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let x=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?b(o,c):y&&y.isColor&&(b(y,1),x=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Kr)?(h===void 0&&(h=new ze(new _n(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Vs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=pt.getTransfer(y.colorSpace)!==Rt,(u!==y||d!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ze(new Mn(2,2),new Un({name:"BackgroundMaterial",uniforms:Vs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=pt.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function b(m,f){m.getRGB(lr,Ru(s)),n.buffers.color.setClear(lr.r,lr.g,lr.b,f,r)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,b(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,b(o,c)},render:g}}function C0(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||a!==null,o={},c=m(null),l=c,h=!1;function u(C,H,q,te,$){let V=!1;if(r){let Q=b(te,q,H);l!==Q&&(l=Q,p(l.object)),V=f(C,te,q,$),V&&x(C,te,q,$)}else{let Q=H.wireframe===!0;(l.geometry!==te.id||l.program!==q.id||l.wireframe!==Q)&&(l.geometry=te.id,l.program=q.id,l.wireframe=Q,V=!0)}$!==null&&t.update($,s.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,O(C,H,q,te),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function p(C){return n.isWebGL2?s.bindVertexArray(C):a.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?s.deleteVertexArray(C):a.deleteVertexArrayOES(C)}function b(C,H,q){let te=q.wireframe===!0,$=o[C.id];$===void 0&&($={},o[C.id]=$);let V=$[H.id];V===void 0&&(V={},$[H.id]=V);let Q=V[te];return Q===void 0&&(Q=m(d()),V[te]=Q),Q}function m(C){let H=[],q=[],te=[];for(let $=0;$<i;$++)H[$]=0,q[$]=0,te[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:te,object:C,attributes:{},index:null}}function f(C,H,q,te){let $=l.attributes,V=H.attributes,Q=0,ie=q.getAttributes();for(let me in ie)if(ie[me].location>=0){let Z=$[me],fe=V[me];if(fe===void 0&&(me==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),me==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),Z===void 0||Z.attribute!==fe||fe&&Z.data!==fe.data)return!0;Q++}return l.attributesNum!==Q||l.index!==te}function x(C,H,q,te){let $={},V=H.attributes,Q=0,ie=q.getAttributes();for(let me in ie)if(ie[me].location>=0){let Z=V[me];Z===void 0&&(me==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),me==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));let fe={};fe.attribute=Z,Z&&Z.data&&(fe.data=Z.data),$[me]=fe,Q++}l.attributes=$,l.attributesNum=Q,l.index=te}function y(){let C=l.newAttributes;for(let H=0,q=C.length;H<q;H++)C[H]=0}function M(C){w(C,0)}function w(C,H){let q=l.newAttributes,te=l.enabledAttributes,$=l.attributeDivisors;q[C]=1,te[C]===0&&(s.enableVertexAttribArray(C),te[C]=1),$[C]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,H),$[C]=H)}function S(){let C=l.newAttributes,H=l.enabledAttributes;for(let q=0,te=H.length;q<te;q++)H[q]!==C[q]&&(s.disableVertexAttribArray(q),H[q]=0)}function R(C,H,q,te,$,V,Q){Q===!0?s.vertexAttribIPointer(C,H,q,$,V):s.vertexAttribPointer(C,H,q,te,$,V)}function O(C,H,q,te){if(n.isWebGL2===!1&&(C.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let $=te.attributes,V=q.getAttributes(),Q=H.defaultAttributeValues;for(let ie in V){let me=V[ie];if(me.location>=0){let W=$[ie];if(W===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){let Z=W.normalized,fe=W.itemSize,Ae=t.get(W);if(Ae===void 0)continue;let ye=Ae.buffer,Ie=Ae.type,He=Ae.bytesPerElement,ke=n.isWebGL2===!0&&(Ie===s.INT||Ie===s.UNSIGNED_INT||W.gpuType===pu);if(W.isInterleavedBufferAttribute){let Le=W.data,B=Le.stride,kt=W.offset;if(Le.isInstancedInterleavedBuffer){for(let ne=0;ne<me.locationSize;ne++)w(me.location+ne,Le.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let ne=0;ne<me.locationSize;ne++)M(me.location+ne);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let ne=0;ne<me.locationSize;ne++)R(me.location+ne,fe/me.locationSize,Ie,Z,B*He,(kt+fe/me.locationSize*ne)*He,ke)}else{if(W.isInstancedBufferAttribute){for(let Le=0;Le<me.locationSize;Le++)w(me.location+Le,W.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Le=0;Le<me.locationSize;Le++)M(me.location+Le);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Le=0;Le<me.locationSize;Le++)R(me.location+Le,fe/me.locationSize,Ie,Z,fe*He,fe/me.locationSize*Le*He,ke)}}else if(Q!==void 0){let Z=Q[ie];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(me.location,Z);break;case 3:s.vertexAttrib3fv(me.location,Z);break;case 4:s.vertexAttrib4fv(me.location,Z);break;default:s.vertexAttrib1fv(me.location,Z)}}}}S()}function v(){D();for(let C in o){let H=o[C];for(let q in H){let te=H[q];for(let $ in te)g(te[$].object),delete te[$];delete H[q]}delete o[C]}}function T(C){if(o[C.id]===void 0)return;let H=o[C.id];for(let q in H){let te=H[q];for(let $ in te)g(te[$].object),delete te[$];delete H[q]}delete o[C.id]}function U(C){for(let H in o){let q=o[H];if(q[C.id]===void 0)continue;let te=q[C.id];for(let $ in te)g(te[$].object),delete te[$];delete q[C.id]}}function D(){se(),h=!0,l!==c&&(l=c,p(l.object))}function se(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:D,resetDefaultState:se,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:M,disableUnusedAttributes:S}}function L0(s,e,t,n){let i=n.isWebGL2,a;function r(h){a=h}function o(h,u){s.drawArrays(a,h,u),t.update(u,a,1)}function c(h,u,d){if(d===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,h,u,d),t.update(u,a,d)}function l(h,u,d){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(a,h,0,u,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b];t.update(g,a,1)}}this.setMode=r,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function P0(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,M=r||e.has("OES_texture_float"),w=y&&M,S=r?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:b,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:M,floatVertexTextures:w,maxSamples:S}}function I0(s){let e=this,t=null,n=0,i=!1,a=!1,r=new Fn,o=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||a&&!m)a?h(null):l();else{let x=a?0:n,y=x*4,M=f.clippingState||null;c.value=M,M=h(g,d,y,p);for(let w=0;w!==y;++w)M[w]=t[w];f.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let f=p+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==b;++y,M+=4)r.copy(u[y]).applyMatrix4(x,o),r.normal.toArray(m,M),m[M+3]=r.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function F0(s){let e=new WeakMap;function t(r,o){return o===Qo?r.mapping=Ns:o===$o&&(r.mapping=zs),r}function n(r){if(r&&r.isTexture){let o=r.mapping;if(o===Qo||o===$o)if(e.has(r)){let c=e.get(r).texture;return t(c,r.mapping)}else{let c=r.image;if(c&&c.height>0){let l=new rc(c.height/2);return l.fromEquirectangularTexture(s,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){let o=r.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}var Ws=class extends Ir{constructor(e=-1,t=1,n=1,i=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,a=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ls=4,Mh=[.125,.215,.35,.446,.526,.582],Xi=20,Oo=new Ws,Sh=new Ue,Bo=null,Ho=0,Go=0,Vi=(1+Math.sqrt(5))/2,Ss=1/Vi,Ah=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Vi,Ss),new L(0,Vi,-Ss),new L(Ss,0,Vi),new L(-Ss,0,Vi),new L(Vi,Ss,0),new L(-Vi,Ss,0)],Xs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),this._setSize(256);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bo,Ho,Go),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ns||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Ea,format:Tn,colorSpace:Xt,depthBuffer:!1},i=Eh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,n);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(a)),this._blurMaterial=U0(a,e,t)}return i}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Oo)}_sceneToCubeUV(e,t,n,i){let o=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Sh),h.toneMapping=Ei,h.autoClear=!1;let p=new Dt({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),g=new ze(new _n,p),b=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,b=!0):(p.color.copy(Sh),b=!0);for(let f=0;f<6;f++){let x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let y=this._cubeSize;hr(i,x*y,f>2?y:0,y,y),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ns||e.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());let a=i?this._cubemapMaterial:this._equirectMaterial,r=new ze(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;let c=this._cubeSize;hr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Oo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Ah[(i-1)%Ah.length];this._blur(e,i-1,i,a,r)}t.autoClear=n}_blur(e,t,n,i,a){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",a),this._halfBlur(r,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,r,o){let c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ze(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),b=a/g,m=isFinite(a)?1+Math.floor(h*b):Xi;m>Xi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);let f=[],x=0;for(let R=0;R<Xi;++R){let O=R/b,v=Math.exp(-O*O/2);f.push(v),R===0?x+=v:R<m&&(x+=2*v)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let M=this._sizeLods[i],w=3*M*(i>y-Ls?i-y+Ls:0),S=4*(this._cubeSize-M);hr(t,w,S,3*M,2*M),c.setRenderTarget(t),c.render(u,Oo)}};function D0(s){let e=[],t=[],n=[],i=s,a=s-Ls+1+Mh.length;for(let r=0;r<a;r++){let o=Math.pow(2,i);t.push(o);let c=1/o;r>s-Ls?c=Mh[r-s+Ls-1]:r===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,b=3,m=2,f=1,x=new Float32Array(b*g*p),y=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let S=0;S<p;S++){let R=S%3*2/3-1,O=S>2?0:-1,v=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];x.set(v,b*g*S),y.set(d,m*g*S);let T=[S,S,S,S,S,S];M.set(T,f*g*S)}let w=new It;w.setAttribute("position",new bt(x,b)),w.setAttribute("uv",new bt(y,m)),w.setAttribute("faceIndex",new bt(M,f)),e.push(w),i>Ls&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eh(s,e,t){let n=new oi(s,e,t);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function U0(s,e,t){let n=new Float32Array(Xi),i=new L(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Th(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function wh(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function N0(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Qo||c===$o,h=c===Ns||c===zs;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Xs(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Xs(s));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",a),d.texture}else return null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){let c=o.target;c.removeEventListener("dispose",a);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function z0(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function O0(s,e,t,n){let i={},a=new WeakMap;function r(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,f=b.length;m<f;m++)e.remove(b[m])}d.removeEventListener("dispose",r),delete i[d.id];let p=a.get(d);p&&(e.remove(p),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let b=p[g];for(let m=0,f=b.length;m<f;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,b=0;if(p!==null){let x=p.array;b=p.version;for(let y=0,M=x.length;y<M;y+=3){let w=x[y+0],S=x[y+1],R=x[y+2];d.push(w,S,S,R,R,w)}}else if(g!==void 0){let x=g.array;b=g.version;for(let y=0,M=x.length/3-1;y<M;y+=3){let w=y+0,S=y+1,R=y+2;d.push(w,S,S,R,R,w)}}else return;let m=new(Tu(d)?Pr:Lr)(d,1);m.version=b;let f=a.get(u);f&&e.remove(f),a.set(u,m)}function h(u){let d=a.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function B0(s,e,t,n){let i=n.isWebGL2,a;function r(p){a=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,g){s.drawElements(a,g,o,p*c),t.update(g,a,1)}function u(p,g,b){if(b===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](a,g,o,p*c,b),t.update(g,a,b)}function d(p,g,b){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<b;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(a,g,0,o,p,0,b);let f=0;for(let x=0;x<b;x++)f+=g[x];t.update(f,a,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function H0(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function G0(s,e){return s[0]-e[0]}function V0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function W0(s,e,t){let n={},i=new Float32Array(8),a=new WeakMap,r=new Mt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,b=a.get(h);if(b===void 0||b.count!==g){let C=function(){D.dispose(),a.delete(h),h.removeEventListener("dispose",C)};b!==void 0&&b.texture.dispose();let x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],O=0;x===!0&&(O=1),y===!0&&(O=2),M===!0&&(O=3);let v=h.attributes.position.count*O,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let U=new Float32Array(v*T*4*g),D=new Cr(U,v,T,g);D.type=si,D.needsUpdate=!0;let se=O*4;for(let H=0;H<g;H++){let q=w[H],te=S[H],$=R[H],V=v*T*4*H;for(let Q=0;Q<q.count;Q++){let ie=Q*se;x===!0&&(r.fromBufferAttribute(q,Q),U[V+ie+0]=r.x,U[V+ie+1]=r.y,U[V+ie+2]=r.z,U[V+ie+3]=0),y===!0&&(r.fromBufferAttribute(te,Q),U[V+ie+4]=r.x,U[V+ie+5]=r.y,U[V+ie+6]=r.z,U[V+ie+7]=0),M===!0&&(r.fromBufferAttribute($,Q),U[V+ie+8]=r.x,U[V+ie+9]=r.y,U[V+ie+10]=r.z,U[V+ie+11]=$.itemSize===4?r.w:1)}}b={count:g,texture:D,size:new Xe(v,T)},a.set(h,b),h.addEventListener("dispose",C)}let m=0;for(let x=0;x<d.length;x++)m+=d[x];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",f),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",b.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<p;y++){let M=g[y];M[0]=y,M[1]=d[y]}g.sort(V0);for(let y=0;y<8;y++)y<p&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(G0);let b=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let M=o[y],w=M[0],S=M[1];w!==Number.MAX_SAFE_INTEGER&&S?(b&&h.getAttribute("morphTarget"+y)!==b[w]&&h.setAttribute("morphTarget"+y,b[w]),m&&h.getAttribute("morphNormal"+y)!==m[w]&&h.setAttribute("morphNormal"+y,m[w]),i[y]=S,f+=S):(b&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),m&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}let x=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function X0(s,e,t,n){let i=new WeakMap;function a(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function r(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}var Dr=class extends Qt{constructor(e,t,n,i,a,r,o,c,l,h){if(h=h!==void 0?h:ji,h!==ji&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ji&&(n=Mi),n===void 0&&h===Os&&(n=Yi),super(null,i,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cu=new Qt,Lu=new Dr(1,1);Lu.compareFunction=Au;var Pu=new Cr,Iu=new sc,Fu=new Fr,Rh=[],kh=[],Ch=new Float32Array(16),Lh=new Float32Array(9),Ph=new Float32Array(4);function ea(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,a=Rh[i];if(a===void 0&&(a=new Float32Array(i),Rh[i]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,s[r].toArray(a,o)}return a}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qr(s,e){let t=kh[e];t===void 0&&(t=new Int32Array(e),kh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function q0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Y0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function j0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function K0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function J0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Ph.set(n),s.uniformMatrix2fv(this.addr,!1,Ph),Yt(t,n)}}function Z0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Lh.set(n),s.uniformMatrix3fv(this.addr,!1,Lh),Yt(t,n)}}function Q0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Ch.set(n),s.uniformMatrix4fv(this.addr,!1,Ch),Yt(t,n)}}function $0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function eg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function tg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function ng(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function ig(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function ag(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function rg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function og(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let a=this.type===s.SAMPLER_2D_SHADOW?Lu:Cu;t.setTexture2D(e||a,i)}function cg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Iu,i)}function lg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fu,i)}function hg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pu,i)}function ug(s){switch(s){case 5126:return q0;case 35664:return Y0;case 35665:return j0;case 35666:return K0;case 35674:return J0;case 35675:return Z0;case 35676:return Q0;case 5124:case 35670:return $0;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return ag;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return hg}}function dg(s,e){s.uniform1fv(this.addr,e)}function fg(s,e){let t=ea(e,this.size,2);s.uniform2fv(this.addr,t)}function pg(s,e){let t=ea(e,this.size,3);s.uniform3fv(this.addr,t)}function mg(s,e){let t=ea(e,this.size,4);s.uniform4fv(this.addr,t)}function gg(s,e){let t=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bg(s,e){let t=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yg(s,e){let t=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xg(s,e){s.uniform1iv(this.addr,e)}function vg(s,e){s.uniform2iv(this.addr,e)}function _g(s,e){s.uniform3iv(this.addr,e)}function Mg(s,e){s.uniform4iv(this.addr,e)}function Sg(s,e){s.uniform1uiv(this.addr,e)}function Ag(s,e){s.uniform2uiv(this.addr,e)}function Eg(s,e){s.uniform3uiv(this.addr,e)}function Tg(s,e){s.uniform4uiv(this.addr,e)}function wg(s,e,t){let n=this.cache,i=e.length,a=Qr(t,i);qt(n,a)||(s.uniform1iv(this.addr,a),Yt(n,a));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Cu,a[r])}function Rg(s,e,t){let n=this.cache,i=e.length,a=Qr(t,i);qt(n,a)||(s.uniform1iv(this.addr,a),Yt(n,a));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Iu,a[r])}function kg(s,e,t){let n=this.cache,i=e.length,a=Qr(t,i);qt(n,a)||(s.uniform1iv(this.addr,a),Yt(n,a));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Fu,a[r])}function Cg(s,e,t){let n=this.cache,i=e.length,a=Qr(t,i);qt(n,a)||(s.uniform1iv(this.addr,a),Yt(n,a));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Pu,a[r])}function Lg(s){switch(s){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return bg;case 35676:return yg;case 5124:case 35670:return xg;case 35667:case 35671:return vg;case 35668:case 35672:return _g;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return Ag;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return Cg}}var oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ug(t.type)}},cc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lg(t.type)}},lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let a=0,r=i.length;a!==r;++a){let o=i[a];o.setValue(e,t[o.id],n)}}},Vo=/(\w+)(\])?(\[|\.)?/g;function Ih(s,e){s.seq.push(e),s.map[e.id]=e}function Pg(s,e,t){let n=s.name,i=n.length;for(Vo.lastIndex=0;;){let a=Vo.exec(n),r=Vo.lastIndex,o=a[1],c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Ih(t,l===void 0?new oc(o,s,e):new cc(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new lc(o),Ih(t,u)),t=u}}}var Ds=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let a=e.getActiveUniform(t,i),r=e.getUniformLocation(t,a.name);Pg(a,r,this)}}setValue(e,t,n,i){let a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,r=t.length;a!==r;++a){let o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,a=e.length;i!==a;++i){let r=e[i];r.id in t&&n.push(r)}return n}};function Fh(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Ig=37297,Fg=0;function Dg(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=i;r<a;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Ug(s){let e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(s),n;switch(e===t?n="":e===Er&&t===Ar?n="LinearDisplayP3ToLinearSRGB":e===Ar&&t===Er&&(n="LinearSRGBToLinearDisplayP3"),s){case Xt:case Zr:return[n,"LinearTransferOETF"];case dt:case Oc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Dh(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+Dg(s.getShaderSource(e),r)}else return i}function Ng(s,e){let t=Ug(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zg(s,e){let t;switch(e){case Od:t="Linear";break;case Bd:t="Reinhard";break;case Hd:t="OptimizedCineon";break;case Dc:t="ACESFilmic";break;case Vd:t="AgX";break;case Gd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Og(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function Bg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ps).join(`
`)}function Hg(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gg(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let a=s.getActiveAttrib(e,i),r=a.name,o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:s.getAttribLocation(e,r),locationSize:o}}return t}function Ps(s){return s!==""}function Uh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(s){return s.replace(Vg,Xg)}var Wg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xg(s,e){let t=rt[e];if(t===void 0){let n=Wg.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hc(t)}var qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(s){return s.replace(qg,Yg)}function Yg(s,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Oh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Kg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case zs:e="ENVMAP_TYPE_CUBE";break;case Kr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function Zg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case du:e="ENVMAP_BLENDING_MULTIPLY";break;case Nd:e="ENVMAP_BLENDING_MIX";break;case zd:e="ENVMAP_BLENDING_ADD";break}return e}function Qg(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function $g(s,e,t,n){let i=s.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,c=jg(t),l=Kg(t),h=Jg(t),u=Zg(t),d=Qg(t),p=t.isWebGL2?"":Og(t),g=Bg(t),b=Hg(a),m=i.createProgram(),f,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ps).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ps).join(`
`),x.length>0&&(x+=`
`)):(f=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),x=[p,Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?rt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?zg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Ng("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ps).join(`
`)),r=hc(r),r=Uh(r,t),r=Nh(r,t),o=hc(o),o=Uh(o,t),o=Nh(o,t),r=zh(r),o=zh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let M=y+f+r,w=y+x+o,S=Fh(i,i.VERTEX_SHADER,M),R=Fh(i,i.FRAGMENT_SHADER,w);i.attachShader(m,S),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(D){if(s.debug.checkShaderErrors){let se=i.getProgramInfoLog(m).trim(),C=i.getShaderInfoLog(S).trim(),H=i.getShaderInfoLog(R).trim(),q=!0,te=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,S,R);else{let $=Dh(i,S,"vertex"),V=Dh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+$+`
`+V)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(C===""||H==="")&&(te=!1);te&&(D.diagnostics={runnable:q,programLog:se,vertexShader:{log:C,prefix:f},fragmentShader:{log:H,prefix:x}})}i.deleteShader(S),i.deleteShader(R),v=new Ds(i,m),T=Gg(i,m)}let v;this.getUniforms=function(){return v===void 0&&O(this),v};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,Ig)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=R,this}var eb=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dc(e),t.set(e,n)),n}},dc=class{constructor(e){this.id=eb++,this.code=e,this.usedTimes=0}};function tb(s,e,t,n,i,a,r){let o=new wa,c=new uc,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(v){return v===0?"uv":`uv${v}`}function m(v,T,U,D,se){let C=D.fog,H=se.geometry,q=v.isMeshStandardMaterial?D.environment:null,te=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),$=te&&te.mapping===Kr?te.image.height:null,V=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=Q!==void 0?Q.length:0,me=0;H.morphAttributes.position!==void 0&&(me=1),H.morphAttributes.normal!==void 0&&(me=2),H.morphAttributes.color!==void 0&&(me=3);let W,Z,fe,Ae;if(V){let jt=Vn[V];W=jt.vertexShader,Z=jt.fragmentShader}else W=v.vertexShader,Z=v.fragmentShader,c.update(v),fe=c.getVertexShaderID(v),Ae=c.getFragmentShaderID(v);let ye=s.getRenderTarget(),Ie=se.isInstancedMesh===!0,He=se.isBatchedMesh===!0,ke=!!v.map,Le=!!v.matcap,B=!!te,kt=!!v.aoMap,ne=!!v.lightMap,N=!!v.bumpMap,ee=!!v.normalMap,Ge=!!v.displacementMap,Pe=!!v.emissiveMap,E=!!v.metalnessMap,_=!!v.roughnessMap,Y=v.anisotropy>0,de=v.clearcoat>0,ae=v.iridescence>0,ce=v.sheen>0,Re=v.transmission>0,ge=Y&&!!v.anisotropyMap,Ee=de&&!!v.clearcoatMap,De=de&&!!v.clearcoatNormalMap,Ye=de&&!!v.clearcoatRoughnessMap,he=ae&&!!v.iridescenceMap,Ce=ae&&!!v.iridescenceThicknessMap,et=ce&&!!v.sheenColorMap,je=ce&&!!v.sheenRoughnessMap,we=!!v.specularMap,Me=!!v.specularColorMap,Ke=!!v.specularIntensityMap,ot=Re&&!!v.transmissionMap,ft=Re&&!!v.thicknessMap,it=!!v.gradientMap,be=!!v.alphaMap,I=v.alphaTest>0,_e=!!v.alphaHash,xe=!!v.extensions,Oe=!!H.attributes.uv1,Be=!!H.attributes.uv2,yt=!!H.attributes.uv3,gt=Ei;return v.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(gt=s.toneMapping),{isWebGL2:h,shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:Z,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:Ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:He,instancing:Ie,instancingColor:Ie&&se.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Xt,map:ke,matcap:Le,envMap:B,envMapMode:B&&te.mapping,envMapCubeUVHeight:$,aoMap:kt,lightMap:ne,bumpMap:N,normalMap:ee,displacementMap:d&&Ge,emissiveMap:Pe,normalMapObjectSpace:ee&&v.normalMapType===rf,normalMapTangentSpace:ee&&v.normalMapType===Su,metalnessMap:E,roughnessMap:_,anisotropy:Y,anisotropyMap:ge,clearcoat:de,clearcoatMap:Ee,clearcoatNormalMap:De,clearcoatRoughnessMap:Ye,iridescence:ae,iridescenceMap:he,iridescenceThicknessMap:Ce,sheen:ce,sheenColorMap:et,sheenRoughnessMap:je,specularMap:we,specularColorMap:Me,specularIntensityMap:Ke,transmission:Re,transmissionMap:ot,thicknessMap:ft,gradientMap:it,opaque:v.transparent===!1&&v.blending===Is,alphaMap:be,alphaTest:I,alphaHash:_e,combine:v.combine,mapUv:ke&&b(v.map.channel),aoMapUv:kt&&b(v.aoMap.channel),lightMapUv:ne&&b(v.lightMap.channel),bumpMapUv:N&&b(v.bumpMap.channel),normalMapUv:ee&&b(v.normalMap.channel),displacementMapUv:Ge&&b(v.displacementMap.channel),emissiveMapUv:Pe&&b(v.emissiveMap.channel),metalnessMapUv:E&&b(v.metalnessMap.channel),roughnessMapUv:_&&b(v.roughnessMap.channel),anisotropyMapUv:ge&&b(v.anisotropyMap.channel),clearcoatMapUv:Ee&&b(v.clearcoatMap.channel),clearcoatNormalMapUv:De&&b(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&b(v.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&b(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&b(v.iridescenceThicknessMap.channel),sheenColorMapUv:et&&b(v.sheenColorMap.channel),sheenRoughnessMapUv:je&&b(v.sheenRoughnessMap.channel),specularMapUv:we&&b(v.specularMap.channel),specularColorMapUv:Me&&b(v.specularColorMap.channel),specularIntensityMapUv:Ke&&b(v.specularIntensityMap.channel),transmissionMapUv:ot&&b(v.transmissionMap.channel),thicknessMapUv:ft&&b(v.thicknessMap.channel),alphaMapUv:be&&b(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ee||Y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Be,vertexUv3s:yt,pointsUvs:se.isPoints===!0&&!!H.attributes.uv&&(ke||be),fog:!!C,useFog:v.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:se.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:me,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:gt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&pt.getTransfer(v.map.colorSpace)===Rt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vt,flipSided:v.side===Zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:xe&&v.extensions.derivatives===!0,extensionFragDepth:xe&&v.extensions.fragDepth===!0,extensionDrawBuffers:xe&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xe&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)T.push(U),T.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(x(T,v),y(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){let T=g[v.type],U;if(T){let D=Vn[T];U=Wf.clone(D.uniforms)}else U=v.uniforms;return U}function w(v,T){let U;for(let D=0,se=l.length;D<se;D++){let C=l[D];if(C.cacheKey===T){U=C,++U.usedTimes;break}}return U===void 0&&(U=new $g(s,T,v,a),l.push(U)),U}function S(v){if(--v.usedTimes===0){let T=l.indexOf(v);l[T]=l[l.length-1],l.pop(),v.destroy()}}function R(v){c.remove(v)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:w,releaseProgram:S,releaseShaderCache:R,programs:l,dispose:O}}function nb(){let s=new WeakMap;function e(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function t(a){s.delete(a)}function n(a,r,o){s.get(a)[r]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ib(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hh(){let s=[],e=0,t=[],n=[],i=[];function a(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,p,g,b,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=b,f.group=m),e++,f}function o(u,d,p,g,b,m){let f=r(u,d,p,g,b,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,g,b,m){let f=r(u,d,p,g,b,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||ib),n.length>1&&n.sort(d||Bh),i.length>1&&i.sort(d||Bh)}function h(){for(let u=e,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:a,push:o,unshift:c,finish:h,sort:l}}function sb(){let s=new WeakMap;function e(n,i){let a=s.get(n),r;return a===void 0?(r=new Hh,s.set(n,[r])):i>=a.length?(r=new Hh,a.push(r)):r=a[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function ab(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ue};break;case"SpotLight":t={position:new L,direction:new L,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function rb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var ob=0;function cb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lb(s,e){let t=new ab,n=rb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let a=new L,r=new nt,o=new nt;function c(h,u){let d=0,p=0,g=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let b=0,m=0,f=0,x=0,y=0,M=0,w=0,S=0,R=0,O=0,v=0;h.sort(cb);let T=u===!0?Math.PI:1;for(let D=0,se=h.length;D<se;D++){let C=h[D],H=C.color,q=C.intensity,te=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=H.r*q*T,p+=H.g*q*T,g+=H.b*q*T;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],q);v++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*T),C.castShadow){let Q=C.shadow,ie=n.get(C);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,i.directionalShadow[b]=ie,i.directionalShadowMap[b]=$,i.directionalShadowMatrix[b]=C.shadow.matrix,M++}i.directional[b]=V,b++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(H).multiplyScalar(q*T),V.distance=te,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[f]=V;let Q=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,Q.updateMatrices(C),C.castShadow&&O++),i.spotLightMatrix[f]=Q.matrix,C.castShadow){let ie=n.get(C);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,i.spotShadow[f]=ie,i.spotShadowMap[f]=$,S++}f++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(H).multiplyScalar(q),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[x]=V,x++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity*T),V.distance=C.distance,V.decay=C.decay,C.castShadow){let Q=C.shadow,ie=n.get(C);ie.shadowBias=Q.bias,ie.shadowNormalBias=Q.normalBias,ie.shadowRadius=Q.radius,ie.shadowMapSize=Q.mapSize,ie.shadowCameraNear=Q.camera.near,ie.shadowCameraFar=Q.camera.far,i.pointShadow[m]=ie,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=C.shadow.matrix,w++}i.point[m]=V,m++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(q*T),V.groundColor.copy(C.groundColor).multiplyScalar(q*T),i.hemi[y]=V,y++}}x>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;let U=i.hash;(U.directionalLength!==b||U.pointLength!==m||U.spotLength!==f||U.rectAreaLength!==x||U.hemiLength!==y||U.numDirectionalShadows!==M||U.numPointShadows!==w||U.numSpotShadows!==S||U.numSpotMaps!==R||U.numLightProbes!==v)&&(i.directional.length=b,i.spot.length=f,i.rectArea.length=x,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+R-O,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=v,U.directionalLength=b,U.pointLength=m,U.spotLength=f,U.rectAreaLength=x,U.hemiLength=y,U.numDirectionalShadows=M,U.numPointShadows=w,U.numSpotShadows=S,U.numSpotMaps=R,U.numLightProbes=v,i.version=ob++)}function l(h,u){let d=0,p=0,g=0,b=0,m=0,f=u.matrixWorldInverse;for(let x=0,y=h.length;x<y;x++){let M=h[x];if(M.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(f),d++}else if(M.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(f),g++}else if(M.isRectAreaLight){let w=i.rectArea[b];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),b++}else if(M.isPointLight){let w=i.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function Gh(s,e){let t=new lb(s,e),n=[],i=[];function a(){n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function hb(s,e){let t=new WeakMap;function n(a,r=0){let o=t.get(a),c;return o===void 0?(c=new Gh(s,e),t.set(a,[c])):r>=o.length?(c=new Gh(s,e),o.push(c)):c=o[r],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var fc=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ub=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,db=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fb(s,e,t){let n=new Ra,i=new Xe,a=new Xe,r=new Mt,o=new fc({depthPacking:af}),c=new pc,l={},h=t.maxTextureSize,u={[Xn]:Zt,[Zt]:Xn,[Vt]:Vt},d=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:ub,fragmentShader:db}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ze(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let f=this.type;this.render=function(S,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let v=s.getRenderTarget(),T=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ai),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let se=f!==ii&&this.type===ii,C=f===ii&&this.type!==ii;for(let H=0,q=S.length;H<q;H++){let te=S[H],$=te.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let V=$.getFrameExtents();if(i.multiply(V),a.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/V.x),i.x=a.x*V.x,$.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/V.y),i.y=a.y*V.y,$.mapSize.y=a.y)),$.map===null||se===!0||C===!0){let ie=this.type!==ii?{minFilter:Ht,magFilter:Ht}:{};$.map!==null&&$.map.dispose(),$.map=new oi(i.x,i.y,ie),$.map.texture.name=te.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();let Q=$.getViewportCount();for(let ie=0;ie<Q;ie++){let me=$.getViewport(ie);r.set(a.x*me.x,a.y*me.y,a.x*me.z,a.y*me.w),D.viewport(r),$.updateMatrices(te,ie),n=$.getFrustum(),M(R,O,$.camera,te,this.type)}$.isPointLightShadow!==!0&&this.type===ii&&x($,O),$.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(v,T,U)};function x(S,R){let O=e.update(b);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new oi(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(R,null,O,d,b,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(R,null,O,p,b,null)}function y(S,R,O,v){let T=null,U=O.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)T=U;else if(T=O.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let D=T.uuid,se=R.uuid,C=l[D];C===void 0&&(C={},l[D]=C);let H=C[se];H===void 0&&(H=T.clone(),C[se]=H,R.addEventListener("dispose",w)),T=H}if(T.visible=R.visible,T.wireframe=R.wireframe,v===ii?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:u[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let D=s.properties.get(T);D.light=O}return T}function M(S,R,O,v,T){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===ii)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld);let se=e.update(S),C=S.material;if(Array.isArray(C)){let H=se.groups;for(let q=0,te=H.length;q<te;q++){let $=H[q],V=C[$.materialIndex];if(V&&V.visible){let Q=y(S,V,v,T);S.onBeforeShadow(s,S,R,O,se,Q,$),s.renderBufferDirect(O,null,se,Q,S,$),S.onAfterShadow(s,S,R,O,se,Q,$)}}}else if(C.visible){let H=y(S,C,v,T);S.onBeforeShadow(s,S,R,O,se,H,null),s.renderBufferDirect(O,null,se,H,S,null),S.onAfterShadow(s,S,R,O,se,H,null)}}let D=S.children;for(let se=0,C=D.length;se<C;se++)M(D[se],R,O,v,T)}function w(S){S.target.removeEventListener("dispose",w);for(let O in l){let v=l[O],T=S.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}function pb(s,e,t){let n=t.isWebGL2;function i(){let I=!1,_e=new Mt,xe=null,Oe=new Mt(0,0,0,0);return{setMask:function(Be){xe!==Be&&!I&&(s.colorMask(Be,Be,Be,Be),xe=Be)},setLocked:function(Be){I=Be},setClear:function(Be,yt,gt,Ut,jt){jt===!0&&(Be*=Ut,yt*=Ut,gt*=Ut),_e.set(Be,yt,gt,Ut),Oe.equals(_e)===!1&&(s.clearColor(Be,yt,gt,Ut),Oe.copy(_e))},reset:function(){I=!1,xe=null,Oe.set(-1,0,0,0)}}}function a(){let I=!1,_e=null,xe=null,Oe=null;return{setTest:function(Be){Be?He(s.DEPTH_TEST):ke(s.DEPTH_TEST)},setMask:function(Be){_e!==Be&&!I&&(s.depthMask(Be),_e=Be)},setFunc:function(Be){if(xe!==Be){switch(Be){case Cd:s.depthFunc(s.NEVER);break;case Ld:s.depthFunc(s.ALWAYS);break;case Pd:s.depthFunc(s.LESS);break;case vr:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case Fd:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case Ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xe=Be}},setLocked:function(Be){I=Be},setClear:function(Be){Oe!==Be&&(s.clearDepth(Be),Oe=Be)},reset:function(){I=!1,_e=null,xe=null,Oe=null}}}function r(){let I=!1,_e=null,xe=null,Oe=null,Be=null,yt=null,gt=null,Ut=null,jt=null;return{setTest:function(xt){I||(xt?He(s.STENCIL_TEST):ke(s.STENCIL_TEST))},setMask:function(xt){_e!==xt&&!I&&(s.stencilMask(xt),_e=xt)},setFunc:function(xt,Lt,Kt){(xe!==xt||Oe!==Lt||Be!==Kt)&&(s.stencilFunc(xt,Lt,Kt),xe=xt,Oe=Lt,Be=Kt)},setOp:function(xt,Lt,Kt){(yt!==xt||gt!==Lt||Ut!==Kt)&&(s.stencilOp(xt,Lt,Kt),yt=xt,gt=Lt,Ut=Kt)},setLocked:function(xt){I=xt},setClear:function(xt){jt!==xt&&(s.clearStencil(xt),jt=xt)},reset:function(){I=!1,_e=null,xe=null,Oe=null,Be=null,yt=null,gt=null,Ut=null,jt=null}}}let o=new i,c=new a,l=new r,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,b=[],m=null,f=!1,x=null,y=null,M=null,w=null,S=null,R=null,O=null,v=new Ue(0,0,0),T=0,U=!1,D=null,se=null,C=null,H=null,q=null,te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,V=0,Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=V>=1):Q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=V>=2);let ie=null,me={},W=s.getParameter(s.SCISSOR_BOX),Z=s.getParameter(s.VIEWPORT),fe=new Mt().fromArray(W),Ae=new Mt().fromArray(Z);function ye(I,_e,xe,Oe){let Be=new Uint8Array(4),yt=s.createTexture();s.bindTexture(I,yt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let gt=0;gt<xe;gt++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(_e,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(_e+gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return yt}let Ie={};Ie[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ie[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ie[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ie[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),He(s.DEPTH_TEST),c.setFunc(vr),Pe(!1),E(Tl),He(s.CULL_FACE),ee(Ai);function He(I){d[I]!==!0&&(s.enable(I),d[I]=!0)}function ke(I){d[I]!==!1&&(s.disable(I),d[I]=!1)}function Le(I,_e){return p[I]!==_e?(s.bindFramebuffer(I,_e),p[I]=_e,n&&(I===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=_e),I===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=_e)),!0):!1}function B(I,_e){let xe=b,Oe=!1;if(I)if(xe=g.get(_e),xe===void 0&&(xe=[],g.set(_e,xe)),I.isWebGLMultipleRenderTargets){let Be=I.texture;if(xe.length!==Be.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,gt=Be.length;yt<gt;yt++)xe[yt]=s.COLOR_ATTACHMENT0+yt;xe.length=Be.length,Oe=!0}}else xe[0]!==s.COLOR_ATTACHMENT0&&(xe[0]=s.COLOR_ATTACHMENT0,Oe=!0);else xe[0]!==s.BACK&&(xe[0]=s.BACK,Oe=!0);Oe&&(t.isWebGL2?s.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function kt(I){return m!==I?(s.useProgram(I),m=I,!0):!1}let ne={[Wi]:s.FUNC_ADD,[md]:s.FUNC_SUBTRACT,[gd]:s.FUNC_REVERSE_SUBTRACT};if(n)ne[kl]=s.MIN,ne[Cl]=s.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(ne[kl]=I.MIN_EXT,ne[Cl]=I.MAX_EXT)}let N={[bd]:s.ZERO,[yd]:s.ONE,[xd]:s.SRC_COLOR,[Jo]:s.SRC_ALPHA,[Ed]:s.SRC_ALPHA_SATURATE,[Sd]:s.DST_COLOR,[_d]:s.DST_ALPHA,[vd]:s.ONE_MINUS_SRC_COLOR,[Zo]:s.ONE_MINUS_SRC_ALPHA,[Ad]:s.ONE_MINUS_DST_COLOR,[Md]:s.ONE_MINUS_DST_ALPHA,[Td]:s.CONSTANT_COLOR,[wd]:s.ONE_MINUS_CONSTANT_COLOR,[Rd]:s.CONSTANT_ALPHA,[kd]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(I,_e,xe,Oe,Be,yt,gt,Ut,jt,xt){if(I===Ai){f===!0&&(ke(s.BLEND),f=!1);return}if(f===!1&&(He(s.BLEND),f=!0),I!==pd){if(I!==x||xt!==U){if((y!==Wi||S!==Wi)&&(s.blendEquation(s.FUNC_ADD),y=Wi,S=Wi),xt)switch(I){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Us:s.blendFunc(s.ONE,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Us:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,w=null,R=null,O=null,v.set(0,0,0),T=0,x=I,U=xt}return}Be=Be||_e,yt=yt||xe,gt=gt||Oe,(_e!==y||Be!==S)&&(s.blendEquationSeparate(ne[_e],ne[Be]),y=_e,S=Be),(xe!==M||Oe!==w||yt!==R||gt!==O)&&(s.blendFuncSeparate(N[xe],N[Oe],N[yt],N[gt]),M=xe,w=Oe,R=yt,O=gt),(Ut.equals(v)===!1||jt!==T)&&(s.blendColor(Ut.r,Ut.g,Ut.b,jt),v.copy(Ut),T=jt),x=I,U=!1}function Ge(I,_e){I.side===Vt?ke(s.CULL_FACE):He(s.CULL_FACE);let xe=I.side===Zt;_e&&(xe=!xe),Pe(xe),I.blending===Is&&I.transparent===!1?ee(Ai):ee(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);let Oe=I.stencilWrite;l.setTest(Oe),Oe&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Y(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?He(s.SAMPLE_ALPHA_TO_COVERAGE):ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(I){D!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),D=I)}function E(I){I!==dd?(He(s.CULL_FACE),I!==se&&(I===Tl?s.cullFace(s.BACK):I===fd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ke(s.CULL_FACE),se=I}function _(I){I!==C&&($&&s.lineWidth(I),C=I)}function Y(I,_e,xe){I?(He(s.POLYGON_OFFSET_FILL),(H!==_e||q!==xe)&&(s.polygonOffset(_e,xe),H=_e,q=xe)):ke(s.POLYGON_OFFSET_FILL)}function de(I){I?He(s.SCISSOR_TEST):ke(s.SCISSOR_TEST)}function ae(I){I===void 0&&(I=s.TEXTURE0+te-1),ie!==I&&(s.activeTexture(I),ie=I)}function ce(I,_e,xe){xe===void 0&&(ie===null?xe=s.TEXTURE0+te-1:xe=ie);let Oe=me[xe];Oe===void 0&&(Oe={type:void 0,texture:void 0},me[xe]=Oe),(Oe.type!==I||Oe.texture!==_e)&&(ie!==xe&&(s.activeTexture(xe),ie=xe),s.bindTexture(I,_e||Ie[I]),Oe.type=I,Oe.texture=_e)}function Re(){let I=me[ie];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ye(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(I){fe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),fe.copy(I))}function ot(I){Ae.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Ae.copy(I))}function ft(I,_e){let xe=u.get(_e);xe===void 0&&(xe=new WeakMap,u.set(_e,xe));let Oe=xe.get(I);Oe===void 0&&(Oe=s.getUniformBlockIndex(_e,I.name),xe.set(I,Oe))}function it(I,_e){let Oe=u.get(_e).get(I);h.get(_e)!==Oe&&(s.uniformBlockBinding(_e,Oe,I.__bindingPointIndex),h.set(_e,Oe))}function be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ie=null,me={},p={},g=new WeakMap,b=[],m=null,f=!1,x=null,y=null,M=null,w=null,S=null,R=null,O=null,v=new Ue(0,0,0),T=0,U=!1,D=null,se=null,C=null,H=null,q=null,fe.set(0,0,s.canvas.width,s.canvas.height),Ae.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:He,disable:ke,bindFramebuffer:Le,drawBuffers:B,useProgram:kt,setBlending:ee,setMaterial:Ge,setFlipSided:Pe,setCullFace:E,setLineWidth:_,setPolygonOffset:Y,setScissorTest:de,activeTexture:ae,bindTexture:ce,unbindTexture:Re,compressedTexImage2D:ge,compressedTexImage3D:Ee,texImage2D:we,texImage3D:Me,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:et,texStorage3D:je,texSubImage2D:De,texSubImage3D:Ye,compressedTexSubImage2D:he,compressedTexSubImage3D:Ce,scissor:Ke,viewport:ot,reset:be}}function mb(s,e,t,n,i,a,r){let o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):Ta("canvas")}function b(E,_,Y,de){let ae=1;if((E.width>de||E.height>de)&&(ae=de/Math.max(E.width,E.height)),ae<1||_===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let ce=_?wr:Math.floor,Re=ce(ae*E.width),ge=ce(ae*E.height);u===void 0&&(u=g(Re,ge));let Ee=Y?g(Re,ge):u;return Ee.width=Re,Ee.height=ge,Ee.getContext("2d").drawImage(E,0,0,Re,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Re+"x"+ge+")."),Ee}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return nc(E.width)&&nc(E.height)}function f(E){return o?!1:E.wrapS!==yn||E.wrapT!==yn||E.minFilter!==Ht&&E.minFilter!==hn}function x(E,_){return E.generateMipmaps&&_&&E.minFilter!==Ht&&E.minFilter!==hn}function y(E){s.generateMipmap(E)}function M(E,_,Y,de,ae=!1){if(o===!1)return _;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce=_;if(_===s.RED&&(Y===s.FLOAT&&(ce=s.R32F),Y===s.HALF_FLOAT&&(ce=s.R16F),Y===s.UNSIGNED_BYTE&&(ce=s.R8)),_===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ce=s.R8UI),Y===s.UNSIGNED_SHORT&&(ce=s.R16UI),Y===s.UNSIGNED_INT&&(ce=s.R32UI),Y===s.BYTE&&(ce=s.R8I),Y===s.SHORT&&(ce=s.R16I),Y===s.INT&&(ce=s.R32I)),_===s.RG&&(Y===s.FLOAT&&(ce=s.RG32F),Y===s.HALF_FLOAT&&(ce=s.RG16F),Y===s.UNSIGNED_BYTE&&(ce=s.RG8)),_===s.RGBA){let Re=ae?Sr:pt.getTransfer(de);Y===s.FLOAT&&(ce=s.RGBA32F),Y===s.HALF_FLOAT&&(ce=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ce=Re===Rt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function w(E,_,Y){return x(E,Y)===!0||E.isFramebufferTexture&&E.minFilter!==Ht&&E.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function S(E){return E===Ht||E===_r||E===xa?s.NEAREST:s.LINEAR}function R(E){let _=E.target;_.removeEventListener("dispose",R),v(_),_.isVideoTexture&&h.delete(_)}function O(E){let _=E.target;_.removeEventListener("dispose",O),U(_)}function v(E){let _=n.get(E);if(_.__webglInit===void 0)return;let Y=E.source,de=d.get(Y);if(de){let ae=de[_.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&T(E),Object.keys(de).length===0&&d.delete(Y)}n.remove(E)}function T(E){let _=n.get(E);s.deleteTexture(_.__webglTexture);let Y=E.source,de=d.get(Y);delete de[_.__cacheKey],r.memory.textures--}function U(E){let _=E.texture,Y=n.get(E),de=n.get(_);if(de.__webglTexture!==void 0&&(s.deleteTexture(de.__webglTexture),r.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(Y.__webglFramebuffer[ae]))for(let ce=0;ce<Y.__webglFramebuffer[ae].length;ce++)s.deleteFramebuffer(Y.__webglFramebuffer[ae][ce]);else s.deleteFramebuffer(Y.__webglFramebuffer[ae]);Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[ae])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ae=0;ae<Y.__webglFramebuffer.length;ae++)s.deleteFramebuffer(Y.__webglFramebuffer[ae]);else s.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ae=0;ae<Y.__webglColorRenderbuffer.length;ae++)Y.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[ae]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ae=0,ce=_.length;ae<ce;ae++){let Re=n.get(_[ae]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),r.memory.textures--),n.remove(_[ae])}n.remove(_),n.remove(E)}let D=0;function se(){D=0}function C(){let E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function H(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function q(E,_){let Y=n.get(E);if(E.isVideoTexture&&Ge(E),E.isRenderTargetTexture===!1&&E.version>0&&Y.__version!==E.version){let de=E.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(Y,E,_);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+_)}function te(E,_){let Y=n.get(E);if(E.version>0&&Y.__version!==E.version){fe(Y,E,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+_)}function $(E,_){let Y=n.get(E);if(E.version>0&&Y.__version!==E.version){fe(Y,E,_);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+_)}function V(E,_){let Y=n.get(E);if(E.version>0&&Y.__version!==E.version){Ae(Y,E,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+_)}let Q={[xn]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[Aa]:s.MIRRORED_REPEAT},ie={[Ht]:s.NEAREST,[_r]:s.NEAREST_MIPMAP_NEAREST,[xa]:s.NEAREST_MIPMAP_LINEAR,[hn]:s.LINEAR,[Uc]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},me={[of]:s.NEVER,[ff]:s.ALWAYS,[cf]:s.LESS,[Au]:s.LEQUAL,[lf]:s.EQUAL,[df]:s.GEQUAL,[hf]:s.GREATER,[uf]:s.NOTEQUAL};function W(E,_,Y){if(Y?(s.texParameteri(E,s.TEXTURE_WRAP_S,Q[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,Q[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,Q[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ie[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ie[_.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(_.wrapS!==yn||_.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,S(_.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,S(_.minFilter)),_.minFilter!==Ht&&_.minFilter!==hn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let de=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Ht||_.minFilter!==xa&&_.minFilter!==wi||_.type===si&&e.has("OES_texture_float_linear")===!1||o===!1&&_.type===Ea&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(s.texParameterf(E,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function Z(E,_){let Y=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",R));let de=_.source,ae=d.get(de);ae===void 0&&(ae={},d.set(de,ae));let ce=H(_);if(ce!==E.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),ae[ce].usedTimes++;let Re=ae[E.__cacheKey];Re!==void 0&&(ae[E.__cacheKey].usedTimes--,Re.usedTimes===0&&T(_)),E.__cacheKey=ce,E.__webglTexture=ae[ce].texture}return Y}function fe(E,_,Y){let de=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(de=s.TEXTURE_3D);let ae=Z(E,_),ce=_.source;t.bindTexture(de,E.__webglTexture,s.TEXTURE0+Y);let Re=n.get(ce);if(ce.version!==Re.__version||ae===!0){t.activeTexture(s.TEXTURE0+Y);let ge=pt.getPrimaries(pt.workingColorSpace),Ee=_.colorSpace===wn?null:pt.getPrimaries(_.colorSpace),De=_.colorSpace===wn||ge===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Ye=f(_)&&m(_.image)===!1,he=b(_.image,Ye,!1,i.maxTextureSize);he=Pe(_,he);let Ce=m(he)||o,et=a.convert(_.format,_.colorSpace),je=a.convert(_.type),we=M(_.internalFormat,et,je,_.colorSpace,_.isVideoTexture);W(de,_,Ce);let Me,Ke=_.mipmaps,ot=o&&_.isVideoTexture!==!0&&we!==vu,ft=Re.__version===void 0||ae===!0,it=w(_,he,Ce);if(_.isDepthTexture)we=s.DEPTH_COMPONENT,o?_.type===si?we=s.DEPTH_COMPONENT32F:_.type===Mi?we=s.DEPTH_COMPONENT24:_.type===Yi?we=s.DEPTH24_STENCIL8:we=s.DEPTH_COMPONENT16:_.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===ji&&we===s.DEPTH_COMPONENT&&_.type!==Nc&&_.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Mi,je=a.convert(_.type)),_.format===Os&&we===s.DEPTH_COMPONENT&&(we=s.DEPTH_STENCIL,_.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Yi,je=a.convert(_.type))),ft&&(ot?t.texStorage2D(s.TEXTURE_2D,1,we,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,we,he.width,he.height,0,et,je,null));else if(_.isDataTexture)if(Ke.length>0&&Ce){ot&&ft&&t.texStorage2D(s.TEXTURE_2D,it,we,Ke[0].width,Ke[0].height);for(let be=0,I=Ke.length;be<I;be++)Me=Ke[be],ot?t.texSubImage2D(s.TEXTURE_2D,be,0,0,Me.width,Me.height,et,je,Me.data):t.texImage2D(s.TEXTURE_2D,be,we,Me.width,Me.height,0,et,je,Me.data);_.generateMipmaps=!1}else ot?(ft&&t.texStorage2D(s.TEXTURE_2D,it,we,he.width,he.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,he.width,he.height,et,je,he.data)):t.texImage2D(s.TEXTURE_2D,0,we,he.width,he.height,0,et,je,he.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ot&&ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,we,Ke[0].width,Ke[0].height,he.depth);for(let be=0,I=Ke.length;be<I;be++)Me=Ke[be],_.format!==Tn?et!==null?ot?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Me.width,Me.height,he.depth,et,Me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,we,Me.width,Me.height,he.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Me.width,Me.height,he.depth,et,je,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,we,Me.width,Me.height,he.depth,0,et,je,Me.data)}else{ot&&ft&&t.texStorage2D(s.TEXTURE_2D,it,we,Ke[0].width,Ke[0].height);for(let be=0,I=Ke.length;be<I;be++)Me=Ke[be],_.format!==Tn?et!==null?ot?t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,Me.width,Me.height,et,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,be,we,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(s.TEXTURE_2D,be,0,0,Me.width,Me.height,et,je,Me.data):t.texImage2D(s.TEXTURE_2D,be,we,Me.width,Me.height,0,et,je,Me.data)}else if(_.isDataArrayTexture)ot?(ft&&t.texStorage3D(s.TEXTURE_2D_ARRAY,it,we,he.width,he.height,he.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,et,je,he.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,we,he.width,he.height,he.depth,0,et,je,he.data);else if(_.isData3DTexture)ot?(ft&&t.texStorage3D(s.TEXTURE_3D,it,we,he.width,he.height,he.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,et,je,he.data)):t.texImage3D(s.TEXTURE_3D,0,we,he.width,he.height,he.depth,0,et,je,he.data);else if(_.isFramebufferTexture){if(ft)if(ot)t.texStorage2D(s.TEXTURE_2D,it,we,he.width,he.height);else{let be=he.width,I=he.height;for(let _e=0;_e<it;_e++)t.texImage2D(s.TEXTURE_2D,_e,we,be,I,0,et,je,null),be>>=1,I>>=1}}else if(Ke.length>0&&Ce){ot&&ft&&t.texStorage2D(s.TEXTURE_2D,it,we,Ke[0].width,Ke[0].height);for(let be=0,I=Ke.length;be<I;be++)Me=Ke[be],ot?t.texSubImage2D(s.TEXTURE_2D,be,0,0,et,je,Me):t.texImage2D(s.TEXTURE_2D,be,we,et,je,Me);_.generateMipmaps=!1}else ot?(ft&&t.texStorage2D(s.TEXTURE_2D,it,we,he.width,he.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,et,je,he)):t.texImage2D(s.TEXTURE_2D,0,we,et,je,he);x(_,Ce)&&y(de),Re.__version=ce.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Ae(E,_,Y){if(_.image.length!==6)return;let de=Z(E,_),ae=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+Y);let ce=n.get(ae);if(ae.version!==ce.__version||de===!0){t.activeTexture(s.TEXTURE0+Y);let Re=pt.getPrimaries(pt.workingColorSpace),ge=_.colorSpace===wn?null:pt.getPrimaries(_.colorSpace),Ee=_.colorSpace===wn||Re===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let De=_.isCompressedTexture||_.image[0].isCompressedTexture,Ye=_.image[0]&&_.image[0].isDataTexture,he=[];for(let be=0;be<6;be++)!De&&!Ye?he[be]=b(_.image[be],!1,!0,i.maxCubemapSize):he[be]=Ye?_.image[be].image:_.image[be],he[be]=Pe(_,he[be]);let Ce=he[0],et=m(Ce)||o,je=a.convert(_.format,_.colorSpace),we=a.convert(_.type),Me=M(_.internalFormat,je,we,_.colorSpace),Ke=o&&_.isVideoTexture!==!0,ot=ce.__version===void 0||de===!0,ft=w(_,Ce,et);W(s.TEXTURE_CUBE_MAP,_,et);let it;if(De){Ke&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Me,Ce.width,Ce.height);for(let be=0;be<6;be++){it=he[be].mipmaps;for(let I=0;I<it.length;I++){let _e=it[I];_.format!==Tn?je!==null?Ke?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,I,0,0,_e.width,_e.height,je,_e.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,I,Me,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,I,0,0,_e.width,_e.height,je,we,_e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,I,Me,_e.width,_e.height,0,je,we,_e.data)}}}else{it=_.mipmaps,Ke&&ot&&(it.length>0&&ft++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Me,he[0].width,he[0].height));for(let be=0;be<6;be++)if(Ye){Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,he[be].width,he[be].height,je,we,he[be].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Me,he[be].width,he[be].height,0,je,we,he[be].data);for(let I=0;I<it.length;I++){let xe=it[I].image[be].image;Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,I+1,0,0,xe.width,xe.height,je,we,xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,I+1,Me,xe.width,xe.height,0,je,we,xe.data)}}else{Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,je,we,he[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Me,je,we,he[be]);for(let I=0;I<it.length;I++){let _e=it[I];Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,I+1,0,0,je,we,_e.image[be]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,I+1,Me,je,we,_e.image[be])}}}x(_,et)&&y(s.TEXTURE_CUBE_MAP),ce.__version=ae.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ye(E,_,Y,de,ae,ce){let Re=a.convert(Y.format,Y.colorSpace),ge=a.convert(Y.type),Ee=M(Y.internalFormat,Re,ge,Y.colorSpace);if(!n.get(_).__hasExternalTextures){let Ye=Math.max(1,_.width>>ce),he=Math.max(1,_.height>>ce);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,ce,Ee,Ye,he,_.depth,0,Re,ge,null):t.texImage2D(ae,ce,Ee,Ye,he,0,Re,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),ee(_)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ae,n.get(Y).__webglTexture,0,N(_)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,ae,n.get(Y).__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(E,_,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let de=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||ee(_)){let ae=_.depthTexture;ae&&ae.isDepthTexture&&(ae.type===si?de=s.DEPTH_COMPONENT32F:ae.type===Mi&&(de=s.DEPTH_COMPONENT24));let ce=N(_);ee(_)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,de,_.width,_.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,de,_.width,_.height)}else s.renderbufferStorage(s.RENDERBUFFER,de,_.width,_.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){let de=N(_);Y&&ee(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,s.DEPTH24_STENCIL8,_.width,_.height):ee(_)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,s.DEPTH24_STENCIL8,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{let de=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let ae=0;ae<de.length;ae++){let ce=de[ae],Re=a.convert(ce.format,ce.colorSpace),ge=a.convert(ce.type),Ee=M(ce.internalFormat,Re,ge,ce.colorSpace),De=N(_);Y&&ee(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Ee,_.width,_.height):ee(_)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,Ee,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);let de=n.get(_.depthTexture).__webglTexture,ae=N(_);if(_.depthTexture.format===ji)ee(_)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(_.depthTexture.format===Os)ee(_)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function ke(E){let _=n.get(E),Y=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");He(_.__webglFramebuffer,E)}else if(Y){_.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[de]),_.__webglDepthbuffer[de]=s.createRenderbuffer(),Ie(_.__webglDepthbuffer[de],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),Ie(_.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(E,_,Y){let de=n.get(E);_!==void 0&&ye(de.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&ke(E)}function B(E){let _=E.texture,Y=n.get(E),de=n.get(_);E.addEventListener("dispose",O),E.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=_.version,r.memory.textures++);let ae=E.isWebGLCubeRenderTarget===!0,ce=E.isWebGLMultipleRenderTargets===!0,Re=m(E)||o;if(ae){Y.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer[ge]=[];for(let Ee=0;Ee<_.mipmaps.length;Ee++)Y.__webglFramebuffer[ge][Ee]=s.createFramebuffer()}else Y.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ge=0;ge<_.mipmaps.length;ge++)Y.__webglFramebuffer[ge]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(ce)if(i.drawBuffers){let ge=E.texture;for(let Ee=0,De=ge.length;Ee<De;Ee++){let Ye=n.get(ge[Ee]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&ee(E)===!1){let ge=ce?_:[_];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ge.length;Ee++){let De=ge[Ee];Y.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee]);let Ye=a.convert(De.format,De.colorSpace),he=a.convert(De.type),Ce=M(De.internalFormat,Ye,he,De.colorSpace,E.isXRRenderTarget===!0),et=N(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Ce,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(Y.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),W(s.TEXTURE_CUBE_MAP,_,Re);for(let ge=0;ge<6;ge++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)ye(Y.__webglFramebuffer[ge][Ee],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ee);else ye(Y.__webglFramebuffer[ge],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);x(_,Re)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){let ge=E.texture;for(let Ee=0,De=ge.length;Ee<De;Ee++){let Ye=ge[Ee],he=n.get(Ye);t.bindTexture(s.TEXTURE_2D,he.__webglTexture),W(s.TEXTURE_2D,Ye,Re),ye(Y.__webglFramebuffer,E,Ye,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,0),x(Ye,Re)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ge=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,de.__webglTexture),W(ge,_,Re),o&&_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)ye(Y.__webglFramebuffer[Ee],E,_,s.COLOR_ATTACHMENT0,ge,Ee);else ye(Y.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,ge,0);x(_,Re)&&y(ge),t.unbindTexture()}E.depthBuffer&&ke(E)}function kt(E){let _=m(E)||o,Y=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let de=0,ae=Y.length;de<ae;de++){let ce=Y[de];if(x(ce,_)){let Re=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ge=n.get(ce).__webglTexture;t.bindTexture(Re,ge),y(Re),t.unbindTexture()}}}function ne(E){if(o&&E.samples>0&&ee(E)===!1){let _=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],Y=E.width,de=E.height,ae=s.COLOR_BUFFER_BIT,ce=[],Re=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=n.get(E),Ee=E.isWebGLMultipleRenderTargets===!0;if(Ee)for(let De=0;De<_.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let De=0;De<_.length;De++){ce.push(s.COLOR_ATTACHMENT0+De),E.depthBuffer&&ce.push(Re);let Ye=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ye===!1&&(E.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),Ee&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[De]),Ye===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Re]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Re])),Ee){let he=n.get(_[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,Y,de,0,0,Y,de,ae,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let De=0;De<_.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,ge.__webglColorRenderbuffer[De]);let Ye=n.get(_[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function N(E){return Math.min(i.maxSamples,E.samples)}function ee(E){let _=n.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ge(E){let _=r.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Pe(E,_){let Y=E.colorSpace,de=E.format,ae=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===tc||Y!==Xt&&Y!==wn&&(pt.getTransfer(Y)===Rt?o===!1?e.has("EXT_sRGB")===!0&&de===Tn?(E.format=tc,E.minFilter=hn,E.generateMipmaps=!1):_=Rr.sRGBToLinear(_):(de!==Tn||ae!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),_}this.allocateTextureUnit=C,this.resetTextureUnits=se,this.setTexture2D=q,this.setTexture2DArray=te,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Le,this.setupRenderTarget=B,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ee}function gb(s,e,t){let n=t.isWebGL2;function i(a,r=wn){let o,c=pt.getTransfer(r);if(a===Ti)return s.UNSIGNED_BYTE;if(a===mu)return s.UNSIGNED_SHORT_4_4_4_4;if(a===gu)return s.UNSIGNED_SHORT_5_5_5_1;if(a===Xd)return s.BYTE;if(a===qd)return s.SHORT;if(a===Nc)return s.UNSIGNED_SHORT;if(a===pu)return s.INT;if(a===Mi)return s.UNSIGNED_INT;if(a===si)return s.FLOAT;if(a===Ea)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Yd)return s.ALPHA;if(a===Tn)return s.RGBA;if(a===jd)return s.LUMINANCE;if(a===Kd)return s.LUMINANCE_ALPHA;if(a===ji)return s.DEPTH_COMPONENT;if(a===Os)return s.DEPTH_STENCIL;if(a===tc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Jd)return s.RED;if(a===bu)return s.RED_INTEGER;if(a===Zd)return s.RG;if(a===yu)return s.RG_INTEGER;if(a===xu)return s.RGBA_INTEGER;if(a===go||a===bo||a===yo||a===xo)if(c===Rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===go)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===go)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===xo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Pl||a===Il||a===Fl||a===Dl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Il)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===vu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ul||a===Nl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Ul)return c===Rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Nl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===zl||a===Ol||a===Bl||a===Hl||a===Gl||a===Vl||a===Wl||a===Xl||a===ql||a===Yl||a===jl||a===Kl||a===Jl||a===Zl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===zl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ol)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Bl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Hl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Gl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Vl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Wl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Xl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ql)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Yl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===jl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Kl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Jl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Zl)return c===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===vo||a===Ql||a===$l)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===vo)return c===Rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ql)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===$l)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Qd||a===eh||a===th||a===nh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===vo)return o.COMPRESSED_RED_RGTC1_EXT;if(a===eh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===th)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===nh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Yi?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:i}}var mc=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Wt=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},bb={type:"move"},Sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),f=this._getHandJoint(l,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gc=class extends ri{constructor(e,t){super();let n=this,i=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,b=t.getContextAttributes(),m=null,f=null,x=[],y=[],M=new Xe,w=null,S=new Gt;S.layers.enable(1),S.viewport=new Mt;let R=new Gt;R.layers.enable(2),R.viewport=new Mt;let O=[S,R],v=new mc;v.layers.enable(1),v.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=x[W];return Z===void 0&&(Z=new Sa,x[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=x[W];return Z===void 0&&(Z=new Sa,x[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=x[W];return Z===void 0&&(Z=new Sa,x[W]=Z),Z.getHandSpace()};function D(W){let Z=y.indexOf(W.inputSource);if(Z===-1)return;let fe=x[Z];fe!==void 0&&(fe.update(W.inputSource,W.frame,l||r),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function se(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",se),i.removeEventListener("inputsourceschange",C);for(let W=0;W<x.length;W++){let Z=y[W];Z!==null&&(y[W]=null,x[W].disconnect(Z))}T=null,U=null,e.setRenderTarget(m),p=null,d=null,u=null,i=null,f=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",se),i.addEventListener("inputsourceschange",C),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Z={antialias:i.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new oi(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let Z=null,fe=null,Ae=null;b.depth&&(Ae=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=b.stencil?Os:ji,fe=b.stencil?Yi:Mi);let ye={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new oi(d.textureWidth,d.textureHeight,{format:Tn,type:Ti,depthTexture:new Dr(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let Ie=e.properties.get(f);Ie.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(W){for(let Z=0;Z<W.removed.length;Z++){let fe=W.removed[Z],Ae=y.indexOf(fe);Ae>=0&&(y[Ae]=null,x[Ae].disconnect(fe))}for(let Z=0;Z<W.added.length;Z++){let fe=W.added[Z],Ae=y.indexOf(fe);if(Ae===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=y.length){y.push(fe),Ae=Ie;break}else if(y[Ie]===null){y[Ie]=fe,Ae=Ie;break}if(Ae===-1)break}let ye=x[Ae];ye&&ye.connect(fe)}}let H=new L,q=new L;function te(W,Z,fe){H.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);let Ae=H.distanceTo(q),ye=Z.projectionMatrix.elements,Ie=fe.projectionMatrix.elements,He=ye[14]/(ye[10]-1),ke=ye[14]/(ye[10]+1),Le=(ye[9]+1)/ye[5],B=(ye[9]-1)/ye[5],kt=(ye[8]-1)/ye[0],ne=(Ie[8]+1)/Ie[0],N=He*kt,ee=He*ne,Ge=Ae/(-kt+ne),Pe=Ge*-kt;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Pe),W.translateZ(Ge),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let E=He+Ge,_=ke+Ge,Y=N-Pe,de=ee+(Ae-Pe),ae=Le*ke/_*E,ce=B*ke/_*E;W.projectionMatrix.makePerspective(Y,de,ae,ce,E,_),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function $(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;v.near=R.near=S.near=W.near,v.far=R.far=S.far=W.far,(T!==v.near||U!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,U=v.far);let Z=W.parent,fe=v.cameras;$(v,Z);for(let Ae=0;Ae<fe.length;Ae++)$(fe[Ae],Z);fe.length===2?te(v,S,R):v.projectionMatrix.copy(S.projectionMatrix),V(W,v,Z)};function V(W,Z,fe){fe===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Hs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let Q=null;function ie(W,Z){if(h=Z.getViewerPose(l||r),g=Z,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let Ae=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,Ae=!0);for(let ye=0;ye<fe.length;ye++){let Ie=fe[ye],He=null;if(p!==null)He=p.getViewport(Ie);else{let Le=u.getViewSubImage(d,Ie);He=Le.viewport,ye===0&&(e.setRenderTargetTextures(f,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(f))}let ke=O[ye];ke===void 0&&(ke=new Gt,ke.layers.enable(ye),ke.viewport=new Mt,O[ye]=ke),ke.matrix.fromArray(Ie.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ie.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(He.x,He.y,He.width,He.height),ye===0&&(v.matrix.copy(ke.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Ae===!0&&v.cameras.push(ke)}}for(let fe=0;fe<x.length;fe++){let Ae=y[fe],ye=x[fe];Ae!==null&&ye!==void 0&&ye.update(Ae,Z,l||r)}Q&&Q(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let me=new ku;me.setAnimationLoop(ie),this.setAnimationLoop=function(W){Q=W},this.dispose=function(){}}};function yb(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ru(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),b(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x=e.get(f).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let y=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Zt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xb(s,e,t,n){let i={},a={},r=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,y){let M=y.program;n.uniformBlockBinding(x,M)}function l(x,y){let M=i[x.id];M===void 0&&(g(x),M=h(x),i[x.id]=M,x.addEventListener("dispose",m));let w=y.program;n.updateUBOMapping(x,w);let S=e.render.frame;a[x.id]!==S&&(d(x),a[x.id]=S)}function h(x){let y=u();x.__bindingPointIndex=y;let M=s.createBuffer(),w=x.__size,S=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,M),M}function u(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let y=i[x.id],M=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let S=0,R=M.length;S<R;S++){let O=Array.isArray(M[S])?M[S]:[M[S]];for(let v=0,T=O.length;v<T;v++){let U=O[v];if(p(U,S,v,w)===!0){let D=U.__offset,se=Array.isArray(U.value)?U.value:[U.value],C=0;for(let H=0;H<se.length;H++){let q=se[H],te=b(q);typeof q=="number"||typeof q=="boolean"?(U.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,D+C,U.__data)):q.isMatrix3?(U.__data[0]=q.elements[0],U.__data[1]=q.elements[1],U.__data[2]=q.elements[2],U.__data[3]=0,U.__data[4]=q.elements[3],U.__data[5]=q.elements[4],U.__data[6]=q.elements[5],U.__data[7]=0,U.__data[8]=q.elements[6],U.__data[9]=q.elements[7],U.__data[10]=q.elements[8],U.__data[11]=0):(q.toArray(U.__data,C),C+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,y,M,w){let S=x.value,R=y+"_"+M;if(w[R]===void 0)return typeof S=="number"||typeof S=="boolean"?w[R]=S:w[R]=S.clone(),!0;{let O=w[R];if(typeof S=="number"||typeof S=="boolean"){if(O!==S)return w[R]=S,!0}else if(O.equals(S)===!1)return O.copy(S),!0}return!1}function g(x){let y=x.uniforms,M=0,w=16;for(let R=0,O=y.length;R<O;R++){let v=Array.isArray(y[R])?y[R]:[y[R]];for(let T=0,U=v.length;T<U;T++){let D=v[T],se=Array.isArray(D.value)?D.value:[D.value];for(let C=0,H=se.length;C<H;C++){let q=se[C],te=b(q),$=M%w;$!==0&&w-$<te.boundary&&(M+=w-$),D.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=te.storage}}}let S=M%w;return S>0&&(M+=w-S),x.__size=M,x.__cache={},this}function b(x){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){let y=x.target;y.removeEventListener("dispose",m);let M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete a[y.id]}function f(){for(let x in i)s.deleteBuffer(i[x]);r=[],i={},a={}}return{bind:c,update:l,dispose:f}}var ka=class{constructor(e={}){let{canvas:t=Rf(),context:n=null,depth:i=!0,stencil:a=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;let p=new Uint32Array(4),g=new Int32Array(4),b=null,m=null,f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;let y=this,M=!1,w=0,S=0,R=null,O=-1,v=null,T=new Mt,U=new Mt,D=null,se=new Ue(0),C=0,H=t.width,q=t.height,te=1,$=null,V=null,Q=new Mt(0,0,H,q),ie=new Mt(0,0,H,q),me=!1,W=new Ra,Z=!1,fe=!1,Ae=null,ye=new nt,Ie=new Xe,He=new L,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return R===null?te:1}let B=n;function kt(A,z){for(let j=0;j<A.length;j++){let K=A[j],X=t.getContext(K,z);if(X!==null)return X}return null}try{let A={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ic}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",_e,!1),B===null){let z=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&z.shift(),B=kt(z,A),B===null)throw kt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,N,ee,Ge,Pe,E,_,Y,de,ae,ce,Re,ge,Ee,De,Ye,he,Ce,et,je,we,Me,Ke,ot;function ft(){ne=new z0(B),N=new P0(B,ne,e),ne.init(N),Me=new gb(B,ne,N),ee=new pb(B,ne,N),Ge=new H0(B),Pe=new nb,E=new mb(B,ne,ee,Pe,N,Me,Ge),_=new F0(y),Y=new N0(y),de=new Kf(B,N),Ke=new C0(B,ne,de,N),ae=new O0(B,de,Ge,Ke),ce=new X0(B,ae,de,Ge),et=new W0(B,N,E),Ye=new I0(Pe),Re=new tb(y,_,Y,ne,N,Ke,Ye),ge=new yb(y,Pe),Ee=new sb,De=new hb(ne,N),Ce=new k0(y,_,Y,ee,ce,d,c),he=new fb(y,ce,N),ot=new xb(B,Ge,N,ee),je=new L0(B,ne,Ge,N),we=new B0(B,ne,Ge,N),Ge.programs=Re.programs,y.capabilities=N,y.extensions=ne,y.properties=Pe,y.renderLists=Ee,y.shadowMap=he,y.state=ee,y.info=Ge}ft();let it=new gc(y,B);this.xr=it,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(H,q,!1))},this.getSize=function(A){return A.set(H,q)},this.setSize=function(A,z,j=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,q=z,t.width=Math.floor(A*te),t.height=Math.floor(z*te),j===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(H*te,q*te).floor()},this.setDrawingBufferSize=function(A,z,j){H=A,q=z,te=j,t.width=Math.floor(A*j),t.height=Math.floor(z*j),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,z,j,K){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,z,j,K),ee.viewport(T.copy(Q).multiplyScalar(te).floor())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,z,j,K){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,z,j,K),ee.scissor(U.copy(ie).multiplyScalar(te).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){ee.setScissorTest(me=A)},this.setOpaqueSort=function(A){$=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(A=!0,z=!0,j=!0){let K=0;if(A){let X=!1;if(R!==null){let Se=R.texture.format;X=Se===xu||Se===yu||Se===bu}if(X){let Se=R.texture.type,Fe=Se===Ti||Se===Mi||Se===Nc||Se===Yi||Se===mu||Se===gu,Ve=Ce.getClearColor(),We=Ce.getClearAlpha(),Qe=Ve.r,Je=Ve.g,$e=Ve.b;Fe?(p[0]=Qe,p[1]=Je,p[2]=$e,p[3]=We,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=Qe,g[1]=Je,g[2]=$e,g[3]=We,B.clearBufferiv(B.COLOR,0,g))}else K|=B.COLOR_BUFFER_BIT}z&&(K|=B.DEPTH_BUFFER_BIT),j&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ee.dispose(),De.dispose(),Pe.dispose(),_.dispose(),Y.dispose(),ce.dispose(),Ke.dispose(),ot.dispose(),Re.dispose(),it.dispose(),it.removeEventListener("sessionstart",jt),it.removeEventListener("sessionend",xt),Ae&&(Ae.dispose(),Ae=null),Lt.stop()};function be(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let A=Ge.autoReset,z=he.enabled,j=he.autoUpdate,K=he.needsUpdate,X=he.type;ft(),Ge.autoReset=A,he.enabled=z,he.autoUpdate=j,he.needsUpdate=K,he.type=X}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xe(A){let z=A.target;z.removeEventListener("dispose",xe),Oe(z)}function Oe(A){Be(A),Pe.remove(A)}function Be(A){let z=Pe.get(A).programs;z!==void 0&&(z.forEach(function(j){Re.releaseProgram(j)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,j,K,X,Se){z===null&&(z=ke);let Fe=X.isMesh&&X.matrixWorld.determinant()<0,Ve=aa(A,z,j,K,X);ee.setMaterial(K,Fe);let We=j.index,Qe=1;if(K.wireframe===!0){if(We=ae.getWireframeAttribute(j),We===void 0)return;Qe=2}let Je=j.drawRange,$e=j.attributes.position,At=Je.start*Qe,un=(Je.start+Je.count)*Qe;Se!==null&&(At=Math.max(At,Se.start*Qe),un=Math.min(un,(Se.start+Se.count)*Qe)),We!==null?(At=Math.max(At,0),un=Math.min(un,We.count)):$e!=null&&(At=Math.max(At,0),un=Math.min(un,$e.count));let Nt=un-At;if(Nt<0||Nt===1/0)return;Ke.setup(X,K,Ve,j,We);let An,Et=je;if(We!==null&&(An=de.get(We),Et=we,Et.setIndex(An)),X.isMesh)K.wireframe===!0?(ee.setLineWidth(K.wireframeLinewidth*Le()),Et.setMode(B.LINES)):Et.setMode(B.TRIANGLES);else if(X.isLine){let st=K.linewidth;st===void 0&&(st=1),ee.setLineWidth(st*Le()),X.isLineSegments?Et.setMode(B.LINES):X.isLineLoop?Et.setMode(B.LINE_LOOP):Et.setMode(B.LINE_STRIP)}else X.isPoints?Et.setMode(B.POINTS):X.isSprite&&Et.setMode(B.TRIANGLES);if(X.isBatchedMesh)Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)Et.renderInstances(At,Nt,X.count);else if(j.isInstancedBufferGeometry){let st=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,oa=Math.min(j.instanceCount,st);Et.renderInstances(At,Nt,oa)}else Et.render(At,Nt)};function yt(A,z,j){A.transparent===!0&&A.side===Vt&&A.forceSinglePass===!1?(A.side=Zt,A.needsUpdate=!0,Ui(A,z,j),A.side=Xn,A.needsUpdate=!0,Ui(A,z,j),A.side=Vt):Ui(A,z,j)}this.compile=function(A,z,j=null){j===null&&(j=A),m=De.get(j),m.init(),x.push(m),j.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),A!==j&&A.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(m.pushLight(X),X.castShadow&&m.pushShadow(X))}),m.setupLights(y._useLegacyLights);let K=new Set;return A.traverse(function(X){let Se=X.material;if(Se)if(Array.isArray(Se))for(let Fe=0;Fe<Se.length;Fe++){let Ve=Se[Fe];yt(Ve,j,X),K.add(Ve)}else yt(Se,j,X),K.add(Se)}),x.pop(),m=null,K},this.compileAsync=function(A,z,j=null){let K=this.compile(A,z,j);return new Promise(X=>{function Se(){if(K.forEach(function(Fe){Pe.get(Fe).currentProgram.isReady()&&K.delete(Fe)}),K.size===0){X(A);return}setTimeout(Se,10)}ne.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let gt=null;function Ut(A){gt&&gt(A)}function jt(){Lt.stop()}function xt(){Lt.start()}let Lt=new ku;Lt.setAnimationLoop(Ut),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(A){gt=A,it.setAnimationLoop(A),A===null?Lt.stop():Lt.start()},it.addEventListener("sessionstart",jt),it.addEventListener("sessionend",xt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(z),z=it.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,z,R),m=De.get(A,x.length),m.init(),x.push(m),ye.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W.setFromProjectionMatrix(ye),fe=this.localClippingEnabled,Z=Ye.init(this.clippingPlanes,fe),b=Ee.get(A,f.length),b.init(),f.push(b),Kt(A,z,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort($,V),this.info.render.frame++,Z===!0&&Ye.beginShadows();let j=m.state.shadowsArray;if(he.render(j,A,z),Z===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ce.render(b,A),m.setupLights(y._useLegacyLights),z.isArrayCamera){let K=z.cameras;for(let X=0,Se=K.length;X<Se;X++){let Fe=K[X];ss(b,A,Fe,Fe.viewport)}}else ss(b,A,z);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(y,A,z),Ke.resetDefaultState(),O=-1,v=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,f.pop(),f.length>0?b=f[f.length-1]:b=null};function Kt(A,z,j,K){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){K&&He.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);let Fe=ce.update(A),Ve=A.material;Ve.visible&&b.push(A,Fe,Ve,j,He.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){let Fe=ce.update(A),Ve=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),He.copy(A.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),He.copy(Fe.boundingSphere.center)),He.applyMatrix4(A.matrixWorld).applyMatrix4(ye)),Array.isArray(Ve)){let We=Fe.groups;for(let Qe=0,Je=We.length;Qe<Je;Qe++){let $e=We[Qe],At=Ve[$e.materialIndex];At&&At.visible&&b.push(A,Fe,At,j,He.z,$e)}}else Ve.visible&&b.push(A,Fe,Ve,j,He.z,null)}}let Se=A.children;for(let Fe=0,Ve=Se.length;Fe<Ve;Fe++)Kt(Se[Fe],z,j,K)}function ss(A,z,j,K){let X=A.opaque,Se=A.transmissive,Fe=A.transparent;m.setupLightsView(j),Z===!0&&Ye.setGlobalState(y.clippingPlanes,j),Se.length>0&&as(X,Se,z,j),K&&ee.viewport(T.copy(K)),X.length>0&&Di(X,z,j),Se.length>0&&Di(Se,z,j),Fe.length>0&&Di(Fe,z,j),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function as(A,z,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;let Se=N.isWebGL2;Ae===null&&(Ae=new oi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?Ea:Ti,minFilter:wi,samples:Se?4:0})),y.getDrawingBufferSize(Ie),Se?Ae.setSize(Ie.x,Ie.y):Ae.setSize(wr(Ie.x),wr(Ie.y));let Fe=y.getRenderTarget();y.setRenderTarget(Ae),y.getClearColor(se),C=y.getClearAlpha(),C<1&&y.setClearColor(16777215,.5),y.clear();let Ve=y.toneMapping;y.toneMapping=Ei,Di(A,j,K),E.updateMultisampleRenderTarget(Ae),E.updateRenderTargetMipmap(Ae);let We=!1;for(let Qe=0,Je=z.length;Qe<Je;Qe++){let $e=z[Qe],At=$e.object,un=$e.geometry,Nt=$e.material,An=$e.group;if(Nt.side===Vt&&At.layers.test(K.layers)){let Et=Nt.side;Nt.side=Zt,Nt.needsUpdate=!0,za(At,j,K,un,Nt,An),Nt.side=Et,Nt.needsUpdate=!0,We=!0}}We===!0&&(E.updateMultisampleRenderTarget(Ae),E.updateRenderTargetMipmap(Ae)),y.setRenderTarget(Fe),y.setClearColor(se,C),y.toneMapping=Ve}function Di(A,z,j){let K=z.isScene===!0?z.overrideMaterial:null;for(let X=0,Se=A.length;X<Se;X++){let Fe=A[X],Ve=Fe.object,We=Fe.geometry,Qe=K===null?Fe.material:K,Je=Fe.group;Ve.layers.test(j.layers)&&za(Ve,z,j,We,Qe,Je)}}function za(A,z,j,K,X,Se){A.onBeforeRender(y,z,j,K,X,Se),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(y,z,j,K,A,Se),X.transparent===!0&&X.side===Vt&&X.forceSinglePass===!1?(X.side=Zt,X.needsUpdate=!0,y.renderBufferDirect(j,z,K,X,A,Se),X.side=Xn,X.needsUpdate=!0,y.renderBufferDirect(j,z,K,X,A,Se),X.side=Vt):y.renderBufferDirect(j,z,K,X,A,Se),A.onAfterRender(y,z,j,K,X,Se)}function Ui(A,z,j){z.isScene!==!0&&(z=ke);let K=Pe.get(A),X=m.state.lights,Se=m.state.shadowsArray,Fe=X.state.version,Ve=Re.getParameters(A,X.state,Se,z,j),We=Re.getProgramCacheKey(Ve),Qe=K.programs;K.environment=A.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(A.isMeshStandardMaterial?Y:_).get(A.envMap||K.environment),Qe===void 0&&(A.addEventListener("dispose",xe),Qe=new Map,K.programs=Qe);let Je=Qe.get(We);if(Je!==void 0){if(K.currentProgram===Je&&K.lightsStateVersion===Fe)return Ba(A,Ve),Je}else Ve.uniforms=Re.getUniforms(A),A.onBuild(j,Ve,y),A.onBeforeCompile(Ve,y),Je=Re.acquireProgram(Ve,We),Qe.set(We,Je),K.uniforms=Ve.uniforms;let $e=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Ye.uniform),Ba(A,Ve),K.needsLights=uo(A),K.lightsStateVersion=Fe,K.needsLights&&($e.ambientLightColor.value=X.state.ambient,$e.lightProbe.value=X.state.probe,$e.directionalLights.value=X.state.directional,$e.directionalLightShadows.value=X.state.directionalShadow,$e.spotLights.value=X.state.spot,$e.spotLightShadows.value=X.state.spotShadow,$e.rectAreaLights.value=X.state.rectArea,$e.ltc_1.value=X.state.rectAreaLTC1,$e.ltc_2.value=X.state.rectAreaLTC2,$e.pointLights.value=X.state.point,$e.pointLightShadows.value=X.state.pointShadow,$e.hemisphereLights.value=X.state.hemi,$e.directionalShadowMap.value=X.state.directionalShadowMap,$e.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$e.spotShadowMap.value=X.state.spotShadowMap,$e.spotLightMatrix.value=X.state.spotLightMatrix,$e.spotLightMap.value=X.state.spotLightMap,$e.pointShadowMap.value=X.state.pointShadowMap,$e.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Je,K.uniformsList=null,Je}function Oa(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Ds.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Ba(A,z){let j=Pe.get(A);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function aa(A,z,j,K,X){z.isScene!==!0&&(z=ke),E.resetTextureUnits();let Se=z.fog,Fe=K.isMeshStandardMaterial?z.environment:null,Ve=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xt,We=(K.isMeshStandardMaterial?Y:_).get(K.envMap||Fe),Qe=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Je=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),$e=!!j.morphAttributes.position,At=!!j.morphAttributes.normal,un=!!j.morphAttributes.color,Nt=Ei;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=y.toneMapping);let An=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Et=An!==void 0?An.length:0,st=Pe.get(K),oa=m.state.lights;if(Z===!0&&(fe===!0||A!==v)){let rn=A===v&&K.id===O;Ye.setState(K,A,rn)}let Tt=!1;K.version===st.__version?(st.needsLights&&st.lightsStateVersion!==oa.state.version||st.outputColorSpace!==Ve||X.isBatchedMesh&&st.batching===!1||!X.isBatchedMesh&&st.batching===!0||X.isInstancedMesh&&st.instancing===!1||!X.isInstancedMesh&&st.instancing===!0||X.isSkinnedMesh&&st.skinning===!1||!X.isSkinnedMesh&&st.skinning===!0||X.isInstancedMesh&&st.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&st.instancingColor===!1&&X.instanceColor!==null||st.envMap!==We||K.fog===!0&&st.fog!==Se||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Ye.numPlanes||st.numIntersection!==Ye.numIntersection)||st.vertexAlphas!==Qe||st.vertexTangents!==Je||st.morphTargets!==$e||st.morphNormals!==At||st.morphColors!==un||st.toneMapping!==Nt||N.isWebGL2===!0&&st.morphTargetsCount!==Et)&&(Tt=!0):(Tt=!0,st.__version=K.version);let On=st.currentProgram;Tt===!0&&(On=Ui(K,z,X));let Ha=!1,mi=!1,Ni=!1,zt=On.getUniforms(),Bn=st.uniforms;if(ee.useProgram(On.program)&&(Ha=!0,mi=!0,Ni=!0),K.id!==O&&(O=K.id,mi=!0),Ha||v!==A){zt.setValue(B,"projectionMatrix",A.projectionMatrix),zt.setValue(B,"viewMatrix",A.matrixWorldInverse);let rn=zt.map.cameraPosition;rn!==void 0&&rn.setValue(B,He.setFromMatrixPosition(A.matrixWorld)),N.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&zt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,mi=!0,Ni=!0)}if(X.isSkinnedMesh){zt.setOptional(B,X,"bindMatrix"),zt.setOptional(B,X,"bindMatrixInverse");let rn=X.skeleton;rn&&(N.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),zt.setValue(B,"boneTexture",rn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(zt.setOptional(B,X,"batchingTexture"),zt.setValue(B,"batchingTexture",X._matricesTexture,E));let zi=j.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0&&N.isWebGL2===!0)&&et.update(X,j,On),(mi||st.receiveShadow!==X.receiveShadow)&&(st.receiveShadow=X.receiveShadow,zt.setValue(B,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Bn.envMap.value=We,Bn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),mi&&(zt.setValue(B,"toneMappingExposure",y.toneMappingExposure),st.needsLights&&ra(Bn,Ni),Se&&K.fog===!0&&ge.refreshFogUniforms(Bn,Se),ge.refreshMaterialUniforms(Bn,K,te,q,Ae),Ds.upload(B,Oa(st),Bn,E)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ds.upload(B,Oa(st),Bn,E),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&zt.setValue(B,"center",X.center),zt.setValue(B,"modelViewMatrix",X.modelViewMatrix),zt.setValue(B,"normalMatrix",X.normalMatrix),zt.setValue(B,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let rn=K.uniformsGroups;for(let Hn=0,rs=rn.length;Hn<rs;Hn++)if(N.isWebGL2){let Ga=rn[Hn];ot.update(Ga,On),ot.bind(Ga,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function ra(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function uo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,z,j){Pe.get(A.texture).__webglTexture=z,Pe.get(A.depthTexture).__webglTexture=j;let K=Pe.get(A);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){let j=Pe.get(A);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,j=0){R=A,w=z,S=j;let K=!0,X=null,Se=!1,Fe=!1;if(A){let We=Pe.get(A);We.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(B.FRAMEBUFFER,null),K=!1):We.__webglFramebuffer===void 0?E.setupRenderTarget(A):We.__hasExternalTextures&&E.rebindTextures(A,Pe.get(A.texture).__webglTexture,Pe.get(A.depthTexture).__webglTexture);let Qe=A.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Fe=!0);let Je=Pe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[z])?X=Je[z][j]:X=Je[z],Se=!0):N.isWebGL2&&A.samples>0&&E.useMultisampledRTT(A)===!1?X=Pe.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[j]:X=Je,T.copy(A.viewport),U.copy(A.scissor),D=A.scissorTest}else T.copy(Q).multiplyScalar(te).floor(),U.copy(ie).multiplyScalar(te).floor(),D=me;if(ee.bindFramebuffer(B.FRAMEBUFFER,X)&&N.drawBuffers&&K&&ee.drawBuffers(A,X),ee.viewport(T),ee.scissor(U),ee.setScissorTest(D),Se){let We=Pe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,We.__webglTexture,j)}else if(Fe){let We=Pe.get(A.texture),Qe=z||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.__webglTexture,j||0,Qe)}O=-1},this.readRenderTargetPixels=function(A,z,j,K,X,Se,Fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Pe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){ee.bindFramebuffer(B.FRAMEBUFFER,Ve);try{let We=A.texture,Qe=We.format,Je=We.type;if(Qe!==Tn&&Me.convert(Qe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=Je===Ea&&(ne.has("EXT_color_buffer_half_float")||N.isWebGL2&&ne.has("EXT_color_buffer_float"));if(Je!==Ti&&Me.convert(Je)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===si&&(N.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-K&&j>=0&&j<=A.height-X&&B.readPixels(z,j,K,X,Me.convert(Qe),Me.convert(Je),Se)}finally{let We=R!==null?Pe.get(R).__webglFramebuffer:null;ee.bindFramebuffer(B.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(A,z,j=0){let K=Math.pow(2,-j),X=Math.floor(z.image.width*K),Se=Math.floor(z.image.height*K);E.setTexture2D(z,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,A.x,A.y,X,Se),ee.unbindTexture()},this.copyTextureToTexture=function(A,z,j,K=0){let X=z.image.width,Se=z.image.height,Fe=Me.convert(j.format),Ve=Me.convert(j.type);E.setTexture2D(j,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment),z.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,K,A.x,A.y,X,Se,Fe,Ve,z.image.data):z.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,K,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Fe,z.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,K,A.x,A.y,Fe,Ve,z.image),K===0&&j.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(A,z,j,K,X=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Se=A.max.x-A.min.x+1,Fe=A.max.y-A.min.y+1,Ve=A.max.z-A.min.z+1,We=Me.convert(K.format),Qe=Me.convert(K.type),Je;if(K.isData3DTexture)E.setTexture3D(K,0),Je=B.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)E.setTexture2DArray(K,0),Je=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);let $e=B.getParameter(B.UNPACK_ROW_LENGTH),At=B.getParameter(B.UNPACK_IMAGE_HEIGHT),un=B.getParameter(B.UNPACK_SKIP_PIXELS),Nt=B.getParameter(B.UNPACK_SKIP_ROWS),An=B.getParameter(B.UNPACK_SKIP_IMAGES),Et=j.isCompressedTexture?j.mipmaps[X]:j.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Et.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,A.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,A.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,A.min.z),j.isDataTexture||j.isData3DTexture?B.texSubImage3D(Je,X,z.x,z.y,z.z,Se,Fe,Ve,We,Qe,Et.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Je,X,z.x,z.y,z.z,Se,Fe,Ve,We,Et.data)):B.texSubImage3D(Je,X,z.x,z.y,z.z,Se,Fe,Ve,We,Qe,Et),B.pixelStorei(B.UNPACK_ROW_LENGTH,$e),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At),B.pixelStorei(B.UNPACK_SKIP_PIXELS,un),B.pixelStorei(B.UNPACK_SKIP_ROWS,Nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,An),X===0&&K.generateMipmaps&&B.generateMipmap(Je),ee.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),ee.unbindTexture()},this.resetState=function(){w=0,S=0,R=null,ee.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Oc?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?Ki:Mu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ki?dt:Xt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},bc=class extends ka{};bc.prototype.isWebGL1Renderer=!0;var Ur=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qs=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ys=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new L,Qi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),a=vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$i=class extends fn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},As,fa=new L,Es=new L,Ts=new L,ws=new Xe,pa=new Xe,Du=new nt,ur=new L,ma=new L,dr=new L,Vh=new Xe,Wo=new Xe,Wh=new Xe,js=class extends Ct{constructor(e=new $i){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ys(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Qi(n,3,0,!1)),As.setAttribute("uv",new Qi(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new Xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Du.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ts.z);let n=this.material.rotation,i,a;n!==0&&(a=Math.cos(n),i=Math.sin(n));let r=this.center;fr(ur.set(-.5,-.5,0),Ts,r,Es,i,a),fr(ma.set(.5,-.5,0),Ts,r,Es,i,a),fr(dr.set(.5,.5,0),Ts,r,Es,i,a),Vh.set(0,0),Wo.set(1,0),Wh.set(1,1);let o=e.ray.intersectTriangle(ur,ma,dr,!1,fa);if(o===null&&(fr(ma.set(-.5,.5,0),Ts,r,Es,i,a),Wo.set(0,1),o=e.ray.intersectTriangle(ur,dr,ma,!1,fa),o===null))return;let c=e.ray.origin.distanceTo(fa);c<e.near||c>e.far||t.push({distance:c,point:fa.clone(),uv:qi.getInterpolation(fa,ur,ma,dr,Vh,Wo,Wh,new Xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fr(s,e,t,n,i,a){ws.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(pa.x=a*ws.x-i*ws.y,pa.y=i*ws.x+a*ws.y):pa.copy(ws),s.copy(e),s.x+=pa.x,s.y+=pa.y,s.applyMatrix4(Du)}var Xh=new L,qh=new Mt,Yh=new Mt,vb=new L,jh=new nt,pr=new L,Xo=new vn,Kh=new nt,qo=new Zi,Nr=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ll,this.bindMatrix=new nt,this.bindMatrixInverse=new nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pr),this.boundingBox.expandByPoint(pr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pr),this.boundingSphere.expandByPoint(pr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),e.ray.intersectsSphere(Xo)!==!1&&(Kh.copy(i).invert(),qo.copy(e.ray).applyMatrix4(Kh),!(this.boundingBox!==null&&qo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ll?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;qh.fromBufferAttribute(i.attributes.skinIndex,e),Yh.fromBufferAttribute(i.attributes.skinWeight,e),Xh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){let r=Yh.getComponent(a);if(r!==0){let o=qh.getComponent(a);jh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(vb.copy(Xh).applyMatrix4(jh),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Ca=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},yc=class extends Qt{constructor(e=null,t=1,n=1,i,a,r,o,c,l=Ht,h=Ht,u,d){super(null,r,o,c,l,h,i,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jh=new nt,_b=new nt,zr=class s{constructor(e=[],t=[]){this.uuid=Dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new nt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new nt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let a=0,r=e.length;a<r;a++){let o=e[a]?e[a].matrixWorld:_b;Jh.multiplyMatrices(o,t[a]),Jh.toArray(n,a*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new yc(t,e,e,Tn,si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let a=e.bones[n],r=t[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new Ca),this.bones.push(r),this.boneInverses.push(new nt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,a=t.length;i<a;i++){let r=t[i];e.bones.push(r.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},es=class extends bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Rs=new nt,Zh=new nt,mr=[],Qh=new dn,Mb=new nt,ga=new ze,ba=new vn,Ks=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),Qh.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Qh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),ba.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(ba)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ga.geometry=this.geometry,ga.material=this.material,ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(n),e.ray.intersectsSphere(ba)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,Rs),Zh.multiplyMatrices(n,Rs),ga.matrixWorld=Zh,ga.raycast(e,mr);for(let r=0,o=mr.length;r<o;r++){let c=mr[r];c.instanceId=a,c.object=this,t.push(c)}mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ci=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$h=new L,eu=new L,tu=new nt,Yo=new Zi,gr=new vn,Ri=class extends Ct{constructor(e=new It,t=new ci){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)$h.fromBufferAttribute(t,i-1),eu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$h.distanceTo(eu);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(i),gr.radius+=a,e.ray.intersectsSphere(gr)===!1)return;tu.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(tu);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new L,h=new L,u=new L,d=new L,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let f=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let y=f,M=x-1;y<M;y+=p){let w=g.getX(y),S=g.getX(y+1);if(l.fromBufferAttribute(m,w),h.fromBufferAttribute(m,S),Yo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,r.start),x=Math.min(m.count,r.start+r.count);for(let y=f,M=x-1;y<M;y+=p){if(l.fromBufferAttribute(m,y),h.fromBufferAttribute(m,y+1),Yo.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){let o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}},nu=new L,iu=new L,Js=class extends Ri{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)nu.fromBufferAttribute(t,i),iu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+nu.distanceTo(iu);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Or=class extends Ri{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},La=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},su=new nt,xc=new Zi,br=new vn,yr=new L,Br=class extends Ct{constructor(e=new It,t=new La){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(i),br.radius+=a,e.ray.intersectsSphere(br)===!1)return;su.copy(i).invert(),xc.copy(e.ray).applyMatrix4(su);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=d,b=p;g<b;g++){let m=l.getX(g);yr.fromBufferAttribute(u,m),au(yr,m,c,i,e,t,this)}}else{let d=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let g=d,b=p;g<b;g++)yr.fromBufferAttribute(u,g),au(yr,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=i.length;a<r;a++){let o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function au(s,e,t,n,i,a,r){let o=xc.distanceSqToPoint(s);if(o<t){let c=new L;xc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:r})}}var sn=class extends Qt{constructor(e,t,n,i,a,r,o,c,l){super(e,t,n,i,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class s extends It{constructor(e=1,t=1,n=1,i=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),a=Math.floor(a);let h=[],u=[],d=[],p=[],g=0,b=[],m=n/2,f=0;x(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(p,2));function x(){let M=new L,w=new L,S=0,R=(t-e)/n;for(let O=0;O<=a;O++){let v=[],T=O/a,U=T*(t-e)+e;for(let D=0;D<=i;D++){let se=D/i,C=se*c+o,H=Math.sin(C),q=Math.cos(C);w.x=U*H,w.y=-T*n+m,w.z=U*q,u.push(w.x,w.y,w.z),M.set(H,R,q).normalize(),d.push(M.x,M.y,M.z),p.push(se,1-T),v.push(g++)}b.push(v)}for(let O=0;O<i;O++)for(let v=0;v<a;v++){let T=b[v][O],U=b[v+1][O],D=b[v+1][O+1],se=b[v][O+1];h.push(T,U,se),h.push(U,D,se),S+=6}l.addGroup(f,S,0),f+=S}function y(M){let w=g,S=new Xe,R=new L,O=0,v=M===!0?e:t,T=M===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*T,0),d.push(0,T,0),p.push(.5,.5),g++;let U=g;for(let D=0;D<=i;D++){let C=D/i*c+o,H=Math.cos(C),q=Math.sin(C);R.x=v*q,R.y=m*T,R.z=v*H,u.push(R.x,R.y,R.z),d.push(0,T,0),S.x=H*.5+.5,S.y=q*.5*T+.5,p.push(S.x,S.y),g++}for(let D=0;D<i;D++){let se=w+D,C=U+D;M===!0?h.push(C,C+1,se):h.push(C+1,C,se),O+=3}l.addGroup(f,O,M===!0?1:2),f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Pa=class s extends It{constructor(e=.5,t=1,n=32,i=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:a,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/i,p=new L,g=new Xe;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){let f=a+m/n*r;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<i;b++){let m=b*(n+1);for(let f=0;f<n;f++){let x=f+m,y=x,M=x+n+1,w=x+n+2,S=x+1;o.push(y,M,S),o.push(M,w,S)}}this.setIndex(o),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ts=class s extends It{constructor(e=1,t=32,n=16,i=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(r+o,Math.PI),l=0,h=[],u=new L,d=new L,p=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){let x=[],y=f/n,M=0;f===0&&r===0?M=.5/t:f===n&&c===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let S=w/t;u.x=-e*Math.cos(i+S*a)*Math.sin(r+y*o),u.y=e*Math.cos(r+y*o),u.z=e*Math.sin(i+S*a)*Math.sin(r+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(S+M,1-y),x.push(l++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){let y=h[f][x+1],M=h[f][x],w=h[f+1][x],S=h[f+1][x+1];(f!==0||r>0)&&p.push(y,M,S),(f!==n-1||c<Math.PI)&&p.push(M,w,S)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(b,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var St=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends St{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function xr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ab(s){function e(i,a){return s[i]-s[a]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ru(s,e,t){let n=s.length,i=new s.constructor(n);for(let a=0,r=0;r!==n;++a){let o=t[a]*e;for(let c=0;c!==e;++c)i[r++]=s[o+c]}return i}function Uu(s,e,t,n){let i=1,a=s[0];for(;a!==void 0&&a[n]===void 0;)a=s[i++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push.apply(t,r)),a=s[i++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=s[i++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=s[i++];while(a!==void 0)}var ki=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],a=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=a)){let o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=a,a=t[--n-1],e>=a)break t}r=n,n=0;break n}break e}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,i)}return this.interpolate_(n,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i;for(let r=0;r!==i;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vc=class extends ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ks,endingEnd:ks}}intervalChanged_(e,t,n){let i=this.parameterPositions,a=e-2,r=e+1,o=i[a],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Cs:a=e,o=2*t-n;break;case Mr:a=i.length-2,o=t+i[a]-i[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Cs:r=e,c=2*n-t;break;case Mr:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(e,t,n,i){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,x=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*b+.5*g,M=p*m-p*b;for(let w=0;w!==o;++w)a[w]=f*r[h+w]+x*r[l+w]+y*r[c+w]+M*r[u+w];return a}},Hr=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)a[d]=r[l+d]*u+r[c+d]*h;return a}},_c=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xr(t,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xr(e.times,Array),values:xr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Bs:t=this.InterpolantFactoryMethodDiscrete;break;case Ji:t=this.InterpolantFactoryMethodLinear;break;case _o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Ji;case this.InterpolantFactoryMethodSmooth:return _o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,a=0,r=i-1;for(;a!==i&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==i){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&Sb(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_o,a=e.length-1,r=1;for(let o=1;o<a;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[p+g]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let u=o*n,d=r*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Ji;var Ci=class extends kn{};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Bs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends kn{};Gr.prototype.ValueTypeName="color";var hi=class extends kn{};hi.prototype.ValueTypeName="number";var Mc=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)nn.slerpFlat(a,0,r,l-o,r,l,c);return a}},qn=class extends kn{InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}};qn.prototype.ValueTypeName="quaternion";qn.prototype.DefaultInterpolation=Ji;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends kn{};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Bs;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends kn{};ui.prototype.ValueTypeName="vector";var Zs=class{constructor(e,t=-1,n,i=zc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Dn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Tb(n[r]).scale(i));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,r=n.length;a!==r;++a)t.push(kn.toJSON(n[a]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let a=t.length,r=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);let h=Ab(c);c=ru(c,1,h),l=ru(l,1,h),!i&&c[0]===0&&(c.push(a),l.push(l[0])),r.push(new hi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(a);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let r=[];for(let o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,p,g,b){if(p.length!==0){let m=[],f=[];Uu(p,m,f,g),m.length!==0&&b.push(new u(d,m,f))}},i=[],a=e.name||"default",r=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)p[d[g].morphTargets[b]]=-1;for(let b in p){let m=[],f=[];for(let x=0;x!==d[g].morphTargets.length;++x){let y=d[g];m.push(y.time),f.push(y.morphTarget===b?1:0)}i.push(new hi(".morphTargetInfluence["+b+"]",m,f))}c=p.length*r}else{let p=".bones["+t[u].name+"]";n(ui,p+".position",d,"pos",i),n(qn,p+".quaternion",d,"rot",i),n(ui,p+".scale",d,"scl",i)}}return i.length===0?null:new this(a,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Eb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hi;case"vector":case"vector2":case"vector3":case"vector4":return ui;case"color":return Gr;case"quaternion":return qn;case"bool":case"boolean":return Ci;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Tb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Eb(s.type);if(s.times===void 0){let t=[],n=[];Uu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Sc=class{constructor(e,t,n){let i=this,a=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,a===!1&&i.onStart!==void 0&&i.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},wb=new Sc,di=class{constructor(e){this.manager=e!==void 0?e:wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var ni={},Ac=class extends Error{constructor(e,t){super(e),this.response=t}},Ia=class extends di{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=Si.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:i});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ni[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0,b=0,m=new ReadableStream({start(f){x();function x(){u.read().then(({done:y,value:M})=>{if(y)f.close();else{b+=M.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let S=0,R=h.length;S<R;S++){let O=h[S];O.onProgress&&O.onProgress(w)}f.enqueue(M),x()}})}}});return new Response(m)}else throw new Ac(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Si.add(e,l);let h=ni[e];delete ni[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ni[e];if(h===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ec=class extends di{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=Si.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;let o=Ta("img");function c(){h(),Si.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){h(),i&&i(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}};var Vr=class extends di{constructor(e){super(e)}load(e,t,n,i){let a=new Qt,r=new Ec(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}},Qs=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Wr=class extends Qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},jo=new nt,ou=new L,cu=new L,Fa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ra,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ou.setFromMatrixPosition(e.matrixWorld),t.position.copy(ou),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Tc=class extends Fa{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||i!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xr=class extends Qs{constructor(e,t,n=0,i=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Tc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},lu=new nt,ya=new L,Ko=new L,wc=class extends Fa{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ya.setFromMatrixPosition(e.matrixWorld),n.position.copy(ya),Ko.copy(n.position),Ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ko),n.updateMatrixWorld(),i.makeTranslation(-ya.x,-ya.y,-ya.z),lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu)}},$s=class extends Qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Rc=class extends Fa{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Pi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var qr=class extends di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,r=Si.get(e);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Si.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Si.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Si.add(e,c),a.manager.itemStart(e)}};var kc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,a,r;switch(t){case"quaternion":i=this._slerp,a=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,a=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,a=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=a,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,a=e*i+i,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[a+o]=n[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(n,a,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,a=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-a,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let a=n,r=i;a!==r;++a)t[a]=t[i+a%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,a){if(i>=.5)for(let r=0;r!==a;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,a){let r=this._workIndex*a;nn.multiplyQuaternionsFlat(e,r,e,t,e,n),nn.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,a){let r=1-i;for(let o=0;o!==a;++o){let c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,a){for(let r=0;r!==a;++r){let o=t+r;e[o]=e[o]+e[n+r]*i}}},Gc="\\[\\]\\.:\\/",Rb=new RegExp("["+Gc+"]","g"),Vc="[^"+Gc+"]",kb="[^"+Gc.replace("\\.","")+"]",Cb=/((?:WC+[\/:])*)/.source.replace("WC",Vc),Lb=/(WCOD+)?/.source.replace("WCOD",kb),Pb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),Ib=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),Fb=new RegExp("^"+Cb+Lb+Pb+Ib+"$"),Db=["material","materials","bones","map"],Cc=class{constructor(e,t,n){let i=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=n.length;i!==a;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rb,"")}static parseTrackName(e){let t=Fb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let a=n.nodeName.substring(i+1);Db.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,a=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Cc;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let a=t.tracks,r=a.length,o=new Array(r),c={endingStart:ks,endingEnd:ks};for(let l=0;l!==r;++l){let h=a[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ef,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,a=e._clip.duration,r=a/i,o=i/a;e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,a=i.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=a,c[1]=a+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let a=this._startTime;if(a!==null){let c=(e-a)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case nf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case zc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,a=this._loopCount,r=n===tf;if(e===0)return a===-1?i:r&&(a&1)===1?t-i:i;if(n===$d){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,a+=Math.abs(o);let c=this.repetitions-a;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=a,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(r&&(a&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Cs,i.endingEnd=Cs):(e?i.endingStart=this.zeroSlopeAtStart?Cs:ks:i.endingStart=Mr,t?i.endingEnd=this.zeroSlopeAtEnd?Cs:ks:i.endingEnd=Mr)}_scheduleFading(e,t,n){let i=this._mixer,a=i.time,r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,c=r.sampleValues;return o[0]=a,c[0]=t,o[1]=a+e,c[1]=n,this}},Ub=new Float32Array(1),Yr=class extends ri{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,a=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==a;++u){let d=i[u],p=d.name,g=h[p];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;g=new kc(_t.create(n,p,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),r[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,a=this._actionsByClip[i];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let a=t[n];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let a=t[n];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,a=this._actionsByClip,r=a[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let a=e._clip.uuid,r=this._actionsByClip,o=r[a],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete r[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let a=t[n];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,a=this._bindings,r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,a=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[a],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,a=t[i];e._cacheIndex=i,t[i]=e,a._cacheIndex=n,t[n]=a}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Hr(new Float32Array(2),new Float32Array(2),1,Ub),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,a=t[i];e.__cacheIndex=i,t[i]=e,a.__cacheIndex=n,t[n]=a}clipAction(e,t,n){let i=t||this._root,a=i.uuid,r=typeof e=="string"?Zs.findByName(i,e):e,o=r!==null?r.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=zc),c!==void 0){let u=c.actionByRoot[a];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;let h=new Lc(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,a),h}existingAction(e,t){let n=t||this._root,i=n.uuid,a=typeof e=="string"?Zs.findByName(n,e):e,r=a?a.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,a=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,a,r);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,a=i[n];if(a!==void 0){let r=a.knownActions;for(let o=0,c=r.length;o!==c;++o){let l=r[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,a=i[t];if(a!==void 0)for(let r in a){let o=a[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var jr=class{constructor(e,t,n=0,i=1/0){this.ray=new Zi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Pc(e,this,n,t),n.sort(hu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,a=e.length;i<a;i++)Pc(e[i],this,n,t);return n.sort(hu),n}};function hu(s,e){return s.distance-e.distance}function Pc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let a=0,r=i.length;a<r;a++)Pc(i[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);var tt={y:105,x1:30.34,x2:37.66,h:2.44},Nn=(s,e)=>Math.hypot(s[0]-e[0],s[1]-e[1]),Sn=(s,e,t)=>s+(e-s)*t,Yn=(s,e,t)=>Math.max(e,Math.min(t,s));function fi(s,e){let t=[0];for(let a=1;a<s.length;a++)t.push(t[a-1]+Nn(s[a],s[a-1]));let n=t[t.length-1]||1,i=[];for(let a=0;a<e;a++){let r=n*a/(e-1),o=1;for(;o<t.length-1&&t[o]<r;)o++;let c=t[o-1],l=t[o],h=l>c?(r-c)/(l-c):0;i.push([Sn(s[o-1][0],s[o][0],h),Sn(s[o-1][1],s[o][1],h)])}return i}function Nu(s,e){let t=fi(s,16),n=fi(e,16),i=0;for(let r=0;r<16;r++)i+=Nn(t[r],n[r]);let a=i/16;return a<2.2?3:a<4.6?2:1}function zu(s,e){if(s.length<2)return null;let t=fi(s,44);for(let i=0;i<2;i++)t=t.map((a,r)=>r===0||r===t.length-1?a:[(t[r-1][0]+2*a[0]+t[r+1][0])/4,(t[r-1][1]+2*a[1]+t[r+1][1])/4]);if(e){let i=-1;for(let a=1;a<t.length;a++)if(t[a][1]>=tt.y){i=a;break}if(i>0){let a=t[i-1],r=t[i],o=(tt.y-a[1])/(r[1]-a[1]||1e-6);t=t.slice(0,i),t.push([Sn(a[0],r[0],o),tt.y])}else{let a=t[Math.max(0,t.length-4)],r=t[t.length-1],o=r[1]-a[1];if(o<=.05)return null;let c=(tt.y-r[1])/o;t.push([r[0]+(r[0]-a[0])*c,tt.y])}}let n=[0];for(let i=1;i<t.length;i++)n.push(n[i-1]+Nn(t[i],t[i-1]));return{p:t,Ls:n,top:n[n.length-1]||1}}function Ou(s,e){let t=Math.max(0,Math.min(1,e))*s.top,n=1;for(;n<s.Ls.length-1&&s.Ls[n]<t;)n++;let i=s.Ls[n-1],a=s.Ls[n],r=a>i?(t-i)/(a-i):0;return[Sn(s.p[n-1][0],s.p[n][0],r),Sn(s.p[n-1][1],s.p[n][1],r)]}var $r=9.81,Xc=.0125,Bu=1.1,jn=1/240;function Hu(s,e){let t=Math.ceil(e.T/jn)+(e.uzat?Math.ceil(e.uzat/jn):0),n=new Float32Array(t+1),i=new Float32Array(t+1),a=new Float32Array(t+1),r=e.S[0],o=e.S[1],c=e.z0,l=s[0],h=s[1],u=s[2];n[0]=r,i[0]=o,a[0]=c;for(let d=1;d<=t;d++){let p=Math.hypot(l,h)||1e-6,g=Math.hypot(p,u),b=0,m=0,f=0;e.yer?(b=-l/p*Bu,m=-h/p*Bu):(b=-Xc*g*l,m=-Xc*g*h,f=-$r-Xc*g*u);let x=e.yan;b+=h/p*x,m+=-l/p*x,l+=b*jn,h+=m*jn,u+=f*jn,r+=l*jn,o+=h*jn,c+=u*jn,e.yer?c=.11:c<.11&&(c=.11,u<0&&(u=-u*.5,l*=.8,h*=.8)),n[d]=r,i[d]=o,a[d]=c}return{X:n,Y:i,Z:a,n:t,dt:jn,T:e.T}}function Nb(s){let e=Math.round(s.T/jn),t=s.E[0]-s.S[0],n=s.E[1]-s.S[1],i=s.yer?[t/s.T,n/s.T,0]:[t/s.T,n/s.T,(s.zE-s.z0+.5*$r*s.T*s.T)/s.T],a;for(let o=0;o<9;o++){a=Hu(i,Object.assign({},s,{uzat:0}));let c=s.E[0]-a.X[e],l=s.E[1]-a.Y[e],h=(s.zE||.11)-a.Z[e];if(Math.abs(c)+Math.abs(l)+(s.yer?0:Math.abs(h))<.02)break;i=[i[0]+c/s.T,i[1]+l/s.T,s.yer?0:i[2]+h/s.T]}a=Hu(i,s),a.v0=i;let r=0;for(let o=0;o<=Math.min(e,a.n);o++)r=Math.max(r,a.Z[o]);return a.tepe=r,a}function qc(s,e){let t=Math.max(0,e)*s.T/s.dt,n=Math.min(s.n-1,Math.floor(t)),i=Math.min(1,t-n);return[Sn(s.X[n],s.X[n+1],i),Sn(s.Y[n],s.Y[n+1],i),Sn(s.Z[n],s.Z[n+1],i)]}function zb(s){let e=s.p[0],t=s.p[s.p.length-1],n=t[0]-e[0],i=t[1]-e[1],a=Math.hypot(n,i)||1,r=0;for(let o of s.p){let c=((o[0]-e[0])*i-(o[1]-e[1])*n)/a;Math.abs(c)>Math.abs(r)&&(r=c)}return r}function Ob(s,e,t,n){return s?e?"kafa":t?"vole":n>3?"asirt":n>1.6?"yarim":"yer":n>2.2?"hava":n>1.2?"yarim":"yer"}function Bb(s,e){if(s===e||s==="surus")return!0;let t={yer:"a",yarim:"ab",hava:"b",asirt:"b",vole:"v",rovasata:"v",kafa:"k",balik:"k"};return!!(t[s]&&t[e]&&[...t[s]].some(n=>t[e].includes(n)))}var eo=class s{constructor(e){this.sev=e,this.olay=[],this.kur()}kur(){let e=this.sev;this.ata=Object.entries(e.a).map(([i,a])=>({k:i,x:a[0],y:a[1],vx:0,vy:0,yol:null,yi:0,v:7})),this.def=e.d.map((i,a)=>({k:"d"+a,x:i[0],y:i[1],ix:i[0],iy:i[1],is:i[2],vx:0,vy:0}));let t=e.kal[1]||104.4;this.kal={k:"kal",x:e.kal[0],y:t,ix:e.kal[0],iy:t,dal:0,dalis:0,vx:0,vy:0},this.sahip=e.top,this.adim=0,this.puan=[],this.ucus=null,this.durum="bekle",this.sonuc=null,this.zaman=0;let n=this.oyuncu(e.top);this.top={x:n.x,y:n.y+.7,z:0,dz:0},this.alZ=0,this.olay.push({t:"kur"})}oyuncu(e){return this.ata.find(t=>t.k===e)}kopya(){let e=Object.create(s.prototype),t=n=>JSON.parse(JSON.stringify(n));return Object.assign(e,{kolay:this.kolay,sev:this.sev,olay:[],ata:t(this.ata),def:t(this.def),kal:t(this.kal),top:t(this.top),ucus:this.ucus?Object.assign(t(Object.assign({},this.ucus,{tr:null,Y:null})),{tr:this.ucus.tr,Y:this.ucus.Y}):null,bitisTur:this.bitisTur,surus:this.surus?Object.assign({},this.surus):null,sahip:this.sahip,adim:this.adim,puan:this.puan.slice(),durum:this.durum,sonuc:null,zaman:this.zaman,alZ:this.alZ}),e}otoGuc(e){let t=this.adimV().tur||"yer",n=t==="hava"||t==="asirt"?[1,.9,.8]:t==="yarim"?[.5,.6,.4]:[0,.15,.3];for(let i of n){let a=this.kopya();if(!a.vur(e,i))continue;let r=0;for(;a.durum==="ucus"&&r<900;)a.adimla(1/60),r++;if(a.durum==="bekle"||a.sonuc&&a.sonuc.gol)return i}return n[0]}adimV(){return this.sev.adim[Math.min(this.adim,this.sev.adim.length-1)]}hedefNokta(){let e=this.adimV();if(e.hedef==="gol")return[34,105];if(e.hedef==="surus")return e.yol[e.yol.length-1];let t=this.oyuncu(e.hedef),n=(e.kos||{})[e.hedef];return n?n[n.length-1]:[t.x,t.y]}vur(e,t){if(this.durum!=="bekle")return!1;let n=this.adimV(),i=[this.top.x,this.top.y];if(n.hedef==="surus"){let U=this.oyuncu(this.sahip),D=zu([i,...e.slice(1)],!1);if(!D||D.top<2)return!1;this.surus={Y:D,s:0,k:U.k,hiz:this.kolay?7.4:8.2},this.ata.forEach(C=>{let H=(n.kos||{})[C.k];C.yol=H&&C.k!==U.k?H.map(q=>q.slice()):null,C.yi=0,C.yol&&(C.yol[0]=[C.x,C.y],C.v=7.2)});let se=Nu([i,...e.slice(1)],n.yol);return this.puan.push(se),this.turlar=(this.turlar||[]).concat([{gercek:"surus",beklenen:"surus"}]),this.durum="surus",this.olay.push({t:"surus"}),!0}let a=n.hedef==="gol",r=zu([i,...e.slice(1)],a);if(!r)return!1;let o=r.p[r.p.length-1].slice(),c=1-Yn(t,0,1),l=Math.max(1,Nn(i,o)),h=this.bitisTur,u=a&&(h==="kafa"||h==="balik"||!h&&this.alZ>1.6),d=a&&!u&&this.alZ>.45,p=a&&this.alZ>.45?this.alZ:.11,g=c>.6?0:c>.3?1:2,b,m,f=!1;if(a){let U=Yn(26+l*.3,28,37),D=u?g===2?11:Sn(14,20,c):d?Sn(U*.72,U-2,c):Sn(U*.62,U,c);m=u?g===0?.35:g===1?1.3:2.1:g===0?.32:g===1?1.75:2.1,b=r.top/D,g===2&&!u&&!d&&(b=Math.max(b,Math.sqrt(8*3.4/$r)*.62+l/30))}else{let U=g===0?Yn(8+r.top*.38,10,24):Yn(8+r.top*.24,11,19),D=this.oyuncu(n.hedef),se=(n.kos||{})[n.hedef],C=U;if(D&&se){let $=Nn([D.x,D.y],se[1]||se[0]);for(let Q=2;Q<se.length;Q++)$+=Nn(se[Q],se[Q-1]);let V=$/7.6;C=Yn(r.top/Math.max(.35,V),Math.max(9,U*.7),U*1.15)}b=r.top/C;let H=this.sev.adim[this.adim+1],q=H&&H.hedef==="gol"?H.tur:null,te=q==="kafa"||q==="balik"?1.95:q==="vole"||q==="rovasata"?q==="rovasata"?1.35:.95:.2;if(g===0)f=!0,m=.11;else{let $=g===1?Yn(1.1+l*.05,1.4,2.8):Yn(2.4+l*.17,3.6,13);b=Math.max(b,2*Math.sqrt(2*Math.max(.3,$-Math.min($-.2,te*.5))/$r)),m=g===2||g===1?Math.max(.15,Math.min(te,$-.3)):.2}}let x=zb(r),y=Math.max(-.22*l,Math.min(.22*l,x)),M=-8*y/(b*b),w=Nb({S:i,z0:p,E:o,zE:m,T:b,yan:M,yer:f,uzat:a?.6:0}),S=w.tepe,R=S>2.2;this.ucus={Y:r,S:i,E:o,tr:w,tepe:S,z0:p,sut:a,kafa:u,vole:d,t:0,sure:b,hava:R,gecen:0,kimden:this.sahip,al:!1,sert:c,yer:f},this.ata.forEach(U=>{let D=(n.kos||{})[U.k];if(U.yol=D?D.map(se=>se.slice()):null,U.yi=0,U.yol){U.yol[0]=[U.x,U.y];let se=0;for(let C=1;C<U.yol.length;C++)se+=Nn(U.yol[C],U.yol[C-1]);U.v=Yn(se/Math.max(.3,b),4,U.k===n.hedef?11:9)}});let O=a&&this.bitisTur?this.bitisTur:Ob(a,u,d,S),v=n.tur||"yer",T=Nu([i,...e.slice(1)],n.yol);return Bb(O,v)||(T=Math.max(1,T-1)),this.puan.push(T),this.turlar=(this.turlar||[]).concat([{gercek:O,beklenen:v}]),this.sahip=null,this.durum="ucus",this.olay.push({t:"vurus",sut:a,kafa:u,vole:d,sert:c,hava:R,yuk:t,tur:n.tur}),!0}kos(e,t){let n=e.x,i=e.y;if(e.yol){let a=(e.v||7)*t;for(;a>0&&e.yi<e.yol.length-1;){let r=e.yol[e.yi+1],o=Nn([e.x,e.y],r);o<=a?(e.x=r[0],e.y=r[1],e.yi++,a-=o):(e.x+=(r[0]-e.x)/o*a,e.y+=(r[1]-e.y)/o*a,a=0)}}e.vx=(e.x-n)/t,e.vy=(e.y-i)/t}adimla(e){this.zaman+=e;let t=this.sev,n=this.kal;if(this.durum==="bekle"){let c=n.ix+(this.top.x-34)*.1;n.x+=(c-n.x)*Math.min(1,e*4),n.vx=0,n.vy=0,n.dal=0,this.ata.forEach(h=>{h.vx=0,h.vy=0}),this.def.forEach(h=>{h.vx=0,h.vy=0});let l=this.oyuncu(this.sahip);l&&(this.top.x=l.x,this.top.y=l.y+.7,this.top.z=this.alZ>.45?this.alZ:0);return}if(this.durum==="surus")return this.surusAdim(e);if(this.durum!=="ucus"){this.ata.forEach(c=>this.kos(c,e));return}let i=this.ucus;if(i.gecen+=e,i.t=i.sut?i.gecen/i.sure:Math.min(1,i.gecen/i.sure),i.sut&&i.t>1.6){this.bitir(!1,"Kale d\u0131\u015F\u0131",{});return}this.ata.forEach(c=>this.kos(c,e));let a=qc(i.tr,i.t),r={x:this.top.x,y:this.top.y,z:this.top.z};this.top={x:a[0],y:a[1],z:a[2]};let o=!i.sut&&this.oyuncu(this.adimV().hedef);for(let c of this.def){let l=c.x,h=c.y,u,d,p;if(c.is==="top"){let f=null,x=1e9;for(let R=0;R<=12;R++){let O=qc(i.tr,Math.min(.8,Math.max(i.t,R/12*.8))),v=Nn(O,[c.x,c.y]);v<x&&(x=v,f=O)}let y=f[0]-c.ix,M=f[1]-c.iy,w=Math.hypot(y,M),S=i.sut?.6:1.6;u=c.ix+(w>S?y/w*S:y),d=c.iy+(w>S?M/w*S:M),p=this.kolay?2.6:3.6}else{let f=this.oyuncu(c.is);if(!f)continue;u=f.x,d=f.y+1.9,p=5.2}let g=Math.hypot(u-c.x,d-c.y);if(g>.3){let f=Math.min(g,p*e)/g;c.x+=(u-c.x)*f,c.y+=(d-c.y)*f}c.vx=(c.x-l)/e,c.vy=(c.y-h)/e;let b=Math.hypot(this.top.x-c.x,this.top.y-c.y),m=o&&Math.hypot(this.top.x-o.x,this.top.y-o.y)<1.8;if(i.t>.04&&i.t<1&&!m&&c.is!==i.kimden&&b<(i.sut?.85:this.kolay?.8:1.05)&&this.top.z<(i.sut?1:i.hava?2.1:1.3)){this.bitir(!1,"Rakip araya girdi",{kesen:c.k});return}}if(i.sut){if(i.gecen>.3){let c=null,l=0;for(let d=0;d<=60;d++){let p=qc(i.tr,d/50);if(p[1]>=n.y){c=p[0],l=p[2];break}}c==null&&(c=i.E[0]),i.kz=l,c=Yn(c,tt.x1-.5,tt.x2+.5);let h=c-n.x,u=n.x;n.x+=Math.sign(h)*Math.min(Math.abs(h),(this.kolay?2.3:2.9)*e),n.vx=(n.x-u)/e,n.dal=Yn((n.x-n.ix)/1.6,-1,1),n.dalis=Math.min(1,n.dalis+e*3)}if(r.y<n.y&&this.top.y>=n.y){let c=this.top.z>1.6?.7:.9+Math.abs(n.dal)*.5;if(Math.abs(this.top.x-n.x)<c&&this.top.z<2.35){this.bitir(!1,"Kaleci kurtard\u0131",{kurtaris:!0});return}}if(r.y<tt.y&&this.top.y>=tt.y){let c=(tt.y-r.y)/(this.top.y-r.y||1e-6),l=Sn(r.x,this.top.x,c),h=Sn(r.z,this.top.z,c);this.top.x=l,this.top.y=tt.y,this.top.z=h,l<tt.x1||l>tt.x2?this.bitir(!1,l<tt.x1-.4||l>tt.x2+.4?"Dire\u011Fin d\u0131\u015F\u0131":"Direkten d\xF6nd\xFC",{direk:Math.abs(l-tt.x1)<.4||Math.abs(l-tt.x2)<.4}):h>tt.h?this.bitir(!1,h<tt.h+.25?"\xDCst direkten d\xF6nd\xFC":"\xDCstten auta",{direk:h<tt.h+.25}):this.bitir(!0,"GOL!",{gx:l,gz:h})}return}if(i.t>=1){let c=o,l=c?c.yol?c.yol[c.yol.length-1]:[c.x,c.y]:null;if(c&&!i.al&&(Math.hypot(c.x-this.top.x,c.y-this.top.y)<2.7||Nn(l,[this.top.x,this.top.y])<2.8)&&(i.al=!0,this.alZ=0),i.al&&c.yol&&c.yi<c.yol.length-1&&Math.hypot(c.x-this.top.x,c.y-this.top.y)>1.2){i.bekledi=!0,this.top.z=.11;return}if(i.al){let h=this.sev.adim[this.adim+1],u=h&&h.hedef==="gol"?h.tur:null;this.alZ=(u==="kafa"||u==="balik")&&i.tepe>1.6?u==="balik"?.9:1.95:u==="rovasata"&&i.tepe>1.2?1.35:u==="vole"&&i.tepe>1?.95:0,this.bitisTur=this.alZ>0?u:null,this.sahip=c.k,this.ucus=null,this.adim++,this.durum="bekle",this.alZ||(this.bitisTur=null),this.olay.push({t:"aldi",k:c.k,puan:this.puan[this.puan.length-1]})}else this.bitir(!1,c&&Nn(l,[this.top.x,this.top.y])<7?"Pas arkada\u015F\u0131na ula\u015Fmad\u0131":"Pas bo\u015Fa gitti",{})}}surusAdim(e){let t=this.surus,n=this.oyuncu(t.k),i=n.x,a=n.y;t.s=Math.min(t.Y.top,t.s+t.hiz*e);let r=t.s/t.Y.top,o=Ou(t.Y,r),c=Ou(t.Y,Math.max(0,(t.s-.75)/t.Y.top));this.top={x:o[0],y:o[1],z:.11},n.x=c[0],n.y=c[1],n.vx=(n.x-i)/e,n.vy=(n.y-a)/e,this.ata.forEach(l=>{l!==n&&this.kos(l,e)});for(let l of this.def){let h=l.x,u=l.y,d=l.is==="top"||l.is===t.k?o[0]:l.ix,p=l.is==="top"||l.is===t.k?o[1]:l.iy,g=l.is===t.k?6:2.6,b=d-l.ix,m=p-l.iy,f=Math.hypot(b,m),x=l.ix+(f>g?b/f*g:b),y=l.iy+(f>g?m/f*g:m),M=l.is===t.k?this.kolay?5.4:6.2:this.kolay?2.8:3.6,w=Math.hypot(x-l.x,y-l.y);if(w>.2){let S=Math.min(w,M*e)/w;l.x+=(x-l.x)*S,l.y+=(y-l.y)*S}if(l.vx=(l.x-h)/e,l.vy=(l.y-u)/e,t.s>1.5&&Math.hypot(this.top.x-l.x,this.top.y-l.y)<(this.kolay?.7:.9)){this.bitir(!1,"Top kapt\u0131r\u0131ld\u0131",{kesen:l.k});return}}t.s>=t.Y.top&&(this.surus=null,this.adim++,this.durum="bekle",this.alZ=0,this.bitisTur=null,this.olay.push({t:"aldi",k:n.k,puan:this.puan[this.puan.length-1]}))}bitir(e,t,n){if(this.durum="bitti",this.sonuc=Object.assign({gol:e,m:t},n),e){let i=this.puan.reduce((a,r)=>a+r,0)/this.puan.length;this.sonuc.yildiz=this.puan.every(a=>a===3)?3:i>=2?2:1}this.olay.push({t:"bitti",gol:e,m:t})}};var F={brezilya:{f:"#F7D23C",s:"#1E4FA8",c:"#F4F4F4",k:"#1E8A3A"},italya:{f:"#2F5FA8",s:"#F4F4F4",c:"#2F5FA8",k:"#1d1d1d"},hollanda:{f:"#F08A1C",s:"#F4F4F4",c:"#F08A1C",k:"#1d1d1d"},arjantin:{f:"#8EC9F0",cz:"#F4F4F4",s:"#1d1d1d",c:"#F4F4F4",k:"#2f2f2f"},bAlmanya:{f:"#F4F4F4",s:"#1d1d1d",c:"#F4F4F4",k:"#2f2f2f"},almanya:{f:"#F4F4F4",s:"#1d1d1d",c:"#F4F4F4",k:"#E8B21C"},sscb:{f:"#D72828",s:"#F4F4F4",c:"#D72828",k:"#1d1d1d"},ingiltere:{f:"#F4F4F4",s:"#1E2A5A",c:"#F4F4F4",k:"#2E8B57"},ingiltereK:{f:"#C8102E",s:"#F4F4F4",c:"#C8102E",k:"#2E8B57"},belcika:{f:"#C8102E",s:"#C8102E",c:"#C8102E",k:"#1d1d1d"},yunanistan:{f:"#1E4FA8",s:"#1E4FA8",c:"#1E4FA8",k:"#F2D23C"},portekiz:{f:"#B5121B",s:"#1E6B3A",c:"#B5121B",k:"#1d1d1d"},liverpool:{f:"#C8102E",s:"#C8102E",c:"#C8102E",k:"#2f2f2f"},milan:{f:"#F4F4F4",s:"#F4F4F4",c:"#F4F4F4",k:"#F2D23C"},milanEv:{f:"#C8102E",cz:"#1d1d1d",s:"#F4F4F4",c:"#1d1d1d",k:"#F2D23C"},ispanya:{f:"#C8102E",s:"#1E2A5A",c:"#1E2A5A",k:"#F2D23C"},ispanyaLac:{f:"#1E2A5A",s:"#1E2A5A",c:"#1E2A5A",k:"#F2D23C"},barcelona:{f:"#A50044",cz:"#004D98",s:"#004D98",c:"#A50044",k:"#F2D23C"},manu:{f:"#C8102E",s:"#F4F4F4",c:"#1d1d1d",k:"#2E8B57"},manuB:{f:"#F4F4F4",s:"#F4F4F4",c:"#F4F4F4",k:"#2E8B57"},fransa:{f:"#1E2A5A",s:"#F4F4F4",c:"#C8102E",k:"#F2D23C"},fransaB:{f:"#F4F4F4",s:"#1E2A5A",c:"#C8102E",k:"#F2D23C"},sirbistan:{f:"#2F5FA8",s:"#F4F4F4",c:"#2F5FA8",k:"#1d1d1d"},meksika:{f:"#1E6B3A",s:"#F4F4F4",c:"#C8102E",k:"#F2D23C"},bulgaristan:{f:"#F4F4F4",s:"#1E6B3A",c:"#F4F4F4",k:"#C8102E"},isvec:{f:"#F7D23C",s:"#1E4FA8",c:"#F7D23C",k:"#1d1d1d"},cekya:{f:"#C8102E",s:"#F4F4F4",c:"#1E2A5A",k:"#1d1d1d"},hirvatistan:{f:"#F4F4F4",cz:"#C8102E",s:"#F4F4F4",c:"#1E2A5A",k:"#1d1d1d"},turkiye:{f:"#E30A17",s:"#F4F4F4",c:"#E30A17",k:"#1d1d1d"},turkiyeB:{f:"#F4F4F4",s:"#F4F4F4",c:"#E30A17",k:"#1d1d1d"},gurcistan:{f:"#F4F4F4",s:"#F4F4F4",c:"#C8102E",k:"#1d1d1d"},avusturya:{f:"#C8102E",s:"#F4F4F4",c:"#C8102E",k:"#1d1d1d"},kolombiya:{f:"#F7D23C",s:"#1E2A5A",c:"#C8102E",k:"#1d1d1d"},uruguay:{f:"#7FB5E6",s:"#1d1d1d",c:"#1d1d1d",k:"#F2D23C"},uruguayB:{f:"#F4F4F4",s:"#1d1d1d",c:"#F4F4F4",k:"#F2D23C"},senegal:{f:"#F4F4F4",s:"#F4F4F4",c:"#1E8A3A",k:"#F2D23C"},guneyKore:{f:"#C8102E",s:"#1E2A5A",c:"#C8102E",k:"#F2D23C"},kamerun:{f:"#1E8A3A",s:"#C8102E",c:"#F7D23C",k:"#1d1d1d"},danimarka:{f:"#C8102E",s:"#F4F4F4",c:"#C8102E",k:"#1d1d1d"},irlanda:{f:"#1E8A3A",s:"#F4F4F4",c:"#1E8A3A",k:"#1d1d1d"},realMadrid:{f:"#F4F4F4",s:"#F4F4F4",c:"#F4F4F4",k:"#1d1d1d"},leverkusen:{f:"#C8102E",s:"#1d1d1d",c:"#1d1d1d",k:"#F2D23C"},bayern:{f:"#C8102E",s:"#C8102E",c:"#C8102E",k:"#F2D23C"},dortmund:{f:"#F7D23C",s:"#1d1d1d",c:"#F7D23C",k:"#2E8B57"},juventus:{f:"#F4F4F4",cz:"#1d1d1d",s:"#1d1d1d",c:"#1d1d1d",k:"#F2D23C"},juventusB:{f:"#1d1d1d",s:"#1d1d1d",c:"#1d1d1d",k:"#F2D23C"},manCity:{f:"#8EC9F0",s:"#F4F4F4",c:"#8EC9F0",k:"#2f2f2f"},qpr:{f:"#1E4FA8",cz:"#F4F4F4",s:"#F4F4F4",c:"#F4F4F4",k:"#2f2f2f"},atletico:{f:"#C8102E",cz:"#F4F4F4",s:"#1E2A5A",c:"#1E2A5A",k:"#F2D23C"},chelsea:{f:"#1E4FA8",s:"#1E4FA8",c:"#F4F4F4",k:"#2f2f2f"},inter:{f:"#1E4FA8",cz:"#1d1d1d",s:"#1d1d1d",c:"#1d1d1d",k:"#F2D23C"},psg:{f:"#1E2A5A",s:"#1E2A5A",c:"#1E2A5A",k:"#F2D23C"},porto:{f:"#1E4FA8",cz:"#F4F4F4",s:"#1E4FA8",c:"#1E4FA8",k:"#F2D23C"},monaco:{f:"#C8102E",s:"#F4F4F4",c:"#C8102E",k:"#1d1d1d"},hamburg:{f:"#F4F4F4",s:"#C8102E",c:"#1E2A5A",k:"#1d1d1d"},steaua:{f:"#C8102E",s:"#1E2A5A",c:"#C8102E",k:"#1d1d1d"},japonya:{f:"#1E3A8A",s:"#F4F4F4",c:"#1E3A8A",k:"#F2D23C"},isvicre:{f:"#D52B1E",s:"#F4F4F4",c:"#D52B1E",k:"#1d1d1d"},valencia:{f:"#F4F4F4",s:"#1d1d1d",c:"#1d1d1d",k:"#F28C28"},villarreal:{f:"#F7D23C",s:"#F7D23C",c:"#F7D23C",k:"#1d1d1d"},getafe:{f:"#1E4FA8",s:"#1E4FA8",c:"#1E4FA8",k:"#F2D23C"},portsmouth:{f:"#1E4FA8",s:"#F4F4F4",c:"#C8102E",k:"#2f2f2f"},gAfrika:{f:"#F7D23C",s:"#1E8A3A",c:"#F7D23C",k:"#1d1d1d"},wolfsburg:{f:"#4CA84C",s:"#F4F4F4",c:"#4CA84C",k:"#1d1d1d"},athletic:{f:"#C8102E",cz:"#F4F4F4",s:"#1d1d1d",c:"#1d1d1d",k:"#2E8B57"},benfica:{f:"#C8102E",s:"#F4F4F4",c:"#C8102E",k:"#1d1d1d"},galatasaray:{f:"#FDB912",cz:"#A90432",s:"#A90432",c:"#A90432",k:"#1d1d1d"},iran:{f:"#F4F4F4",s:"#F4F4F4",c:"#F4F4F4",k:"#2E8B57"},galler:{f:"#C8102E",s:"#C8102E",c:"#C8102E",k:"#2E8B57"},iskocya:{f:"#1E2A5A",s:"#F4F4F4",c:"#1E2A5A",k:"#F2D23C"},suudi:{f:"#1E8A3A",s:"#1E8A3A",c:"#1E8A3A",k:"#F2D23C"},slovakya:{f:"#1E4FA8",s:"#1E4FA8",c:"#1E4FA8",k:"#2f2f2f"},atalanta:{f:"#1E4FA8",cz:"#1d1d1d",s:"#1d1d1d",c:"#1d1d1d",k:"#F2D23C"},roma:{f:"#8E1F2F",s:"#8E1F2F",c:"#1d1d1d",k:"#F2D23C"},tottenham:{f:"#F4F4F4",s:"#1E2A5A",c:"#F4F4F4",k:"#F2D23C"},ajax:{f:"#F4F4F4",cz:"#C8102E",s:"#F4F4F4",c:"#F4F4F4",k:"#1d1d1d"},polonya:{f:"#C8102E",s:"#C8102E",c:"#C8102E",k:"#1d1d1d"}},re=s=>Object.assign({kal:[34,104.4]},s),le=(s,e,t,n)=>({hedef:s,tur:e,yol:t,kos:n}),oe=(s,e)=>({hedef:"gol",tur:s,yol:e}),pn=(s,e)=>({hedef:"surus",tur:"yer",yol:s,kos:e}),zn=[67.5,104.5],ta=[.5,104.5],mt="D\xFCnya Kupas\u0131",Bt="Avrupa \u015Eampiyonas\u0131",lt="\u015Eampiyonlar Ligi",Hb=[re({id:"2000",yil:2e3,tarih:"02.07.2000",mac:"Fransa \u2013 \u0130talya",skor:"2 \u2013 1",kupa:Bt,asama:"Final",yer:"Rotterdam",golcu:"Trezeguet",baslik:"Alt\u0131n gol",not:"Soldan \xE7izgiye in, geriye \xE7evir. Sol \xE7aprazdaki forvet voleyle tavana.",biz:F.fransa,onlar:F.italya,a:{P:[12,98],T:[26,92]},d:[[18,99,"P"],[31.1,97.1,"top"],[26,96,"T"],[38,97,"top"]],kal:[32,104.4],top:"P",adim:[le("T","yer",[[12,98],[26.5,94]],{T:[[26,92],[26.5,94]]}),oe("yarim",[[26.5,94],[35.5,105]])]}),re({id:"2002a",yil:2002,tarih:"21.06.2002",mac:"Brezilya \u2013 \u0130ngiltere",skor:"2 \u2013 1",kupa:mt,asama:"\xC7eyrek final",yer:"Shizuoka",golcu:"Ronaldinho",baslik:"Kaleciyi a\u015Fan frikik",not:"Kaleci \xF6nde. Yava\u015F ve kavisli \xE7iz: top y\xFCkselip kaleciyi a\u015Fs\u0131n, \xFCst k\xF6\u015Feye d\xFC\u015Fs\xFCn.",biz:F.brezilya,onlar:F.ingiltere,a:{R:[50,72]},d:[[45,81,"top"],[43.4,81.7,"top"],[41.8,82.4,"top"]],kal:[35,99.5],top:"R",adim:[oe("asirt",[[50,72],[38,91],[31.2,105]])]}),re({id:"2002c",yil:2002,tarih:"15.05.2002",mac:"Real Madrid \u2013 Bayer Leverkusen",skor:"2 \u2013 1",kupa:lt,asama:"Final",yer:"Glasgow",golcu:"Zidane",baslik:"Sol ayakla vole",not:"Sol bekten g\xF6ky\xFCz\xFCne giden orta; ceza yay\u0131ndaki 10 numara d\xFC\u015Fen topa voleyle.",biz:F.realMadrid,onlar:F.leverkusen,a:{C:[10,88],Z:[32,86]},d:[[30,92,"top"],[38,90,"Z"],[14,92,"C"],[42,96,"top"]],sol:["C"],top:"C",adim:[le("Z","yarim",[[10,88],[20,92],[32,88]],{Z:[[32,86],[32,88]]}),oe("vole",[[32,88],[36.9,105]])]}),re({id:"2002e",yil:2002,tarih:"29.06.2002",mac:"T\xFCrkiye \u2013 G\xFCney Kore",skor:"1 \u2013 0",kupa:mt,asama:"\xDC\xE7\xFCnc\xFCl\xFCk ma\xE7\u0131",yer:"Daegu",golcu:"Hakan \u015E\xFCk\xFCr",baslik:"11. saniye",not:"Kap\u0131lan top; yan\u0131ndaki forvete ver, o da ilk vuru\u015Fta k\xF6\u015Feye.",biz:F.turkiyeB,onlar:F.guneyKore,a:{I:[26,82],H:[36,86]},d:[[32,90,"top"],[40,90,"H"],[28,86,"I"],[46,92,"top"]],top:"I",adim:[le("H","yer",[[26,82],[36,86]]),oe("yer",[[36,86],[31.2,105]])]}),re({id:"2004",yil:2004,tarih:"04.07.2004",mac:"Yunanistan \u2013 Portekiz",skor:"1 \u2013 0",kupa:Bt,asama:"Final",yer:"Lizbon",golcu:"Charisteas",baslik:"Kornerden kafa",not:"Sa\u011F kornerden ceza sahas\u0131na havadan, ko\u015Fan forvet kafayla.",biz:F.yunanistan,onlar:F.portekiz,a:{B:zn,C:[42,94]},d:[[38,98,"top"],[44,98,"C"],[32,99,"top"],[36,94,"top"],[60,100,"top"]],kal:[34.5,104.2],top:"B",adim:[le("C","hava",[zn,[52,100],[37,99.5]],{C:[[42,94],[37,99.5]]}),oe("kafa",[[37,99.5],[32.5,105]])]}),re({id:"2005b",yil:2005,tarih:"25.05.2005",mac:"Liverpool \u2013 Milan",skor:"3 \u2013 1",kupa:lt,asama:"Final",yer:"\u0130stanbul",golcu:"Gerrard",baslik:"Geri d\xF6n\xFC\u015F ba\u015Fl\u0131yor",not:"Soldan ikinci deneme ortas\u0131; ceza sahas\u0131na dalan kaptan arkaya kafayla.",biz:F.liverpool,onlar:F.milan,a:{R:[6,88],G:[34,84]},d:[[30,94,"top"],[38,94,"top"],[34,88,"G"],[10,90,"R"]],top:"R",adim:[le("G","hava",[[6,88],[20,94],[33,93]],{G:[[34,84],[33,93]]}),oe("kafa",[[33,93],[36.8,105]])]}),re({id:"2006",yil:2006,tarih:"16.06.2006",mac:"Arjantin \u2013 S\u0131rbistan-Karada\u011F",skor:"2 \u2013 0",kupa:mt,asama:"Grup",yer:"Gelsenkirchen",golcu:"Cambiasso",baslik:"24 pasl\u0131 gol",not:"K\u0131sa paslar, topuk, bitiri\u015F. Rakipler yak\u0131n: \xE7izgiyi aralardan ge\xE7ir.",biz:F.arjantin,onlar:F.sirbistan,a:{C:[28,70],R:[42,76],H:[36,90]},d:[[34.4,75.4,"top"],[34,84,"top"],[40,92,"H"],[28,86,"C"],[46,84,"R"]],top:"C",adim:[le("R","yer",[[28,70],[42,76]],{C:[[28,70],[30,80]]}),le("H","yer",[[42,76],[36,90]],{C:[[30,80],[31,90]]}),le("C","yer",[[36,90],[32,95]],{C:[[31,90],[32,95]]}),oe("yarim",[[32,95],[36.8,105]])]}),re({id:"2006b",yil:2006,tarih:"30.06.2006",mac:"Almanya \u2013 Arjantin",skor:"1 \u2013 1",kupa:mt,asama:"\xC7eyrek final",yer:"Berlin",golcu:"Klose",baslik:"Uzatmaya ta\u015F\u0131yan kafa",not:"\u0130\xE7eri derin pas, kafayla yana indirilir; arkadan gelen golc\xFC kafayla k\xF6\u015Feye.",biz:F.almanya,onlar:F.arjantin,a:{B:[40,78],O:[30,94],K:[38,90]},d:[[32,96,"O"],[40,94,"K"],[44,98,"top"],[36,84,"B"]],top:"B",adim:[le("O","hava",[[40,78],[30,94]]),le("K","hava",[[30,94],[35,99]],{K:[[38,90],[35,99]]}),oe("kafa",[[35,99],[36.6,105]])]}),re({id:"2006d",yil:2006,tarih:"04.07.2006",mac:"\u0130talya \u2013 Almanya",skor:"1 \u2013 0",kupa:mt,asama:"Yar\u0131 final",yer:"Dortmund",golcu:"Grosso",baslik:"K\u0131v\u0131rarak",not:"Bakmadan verilen pas; sa\u011F \xE7aprazdaki bek k\u0131v\u0131rarak uzak k\xF6\u015Feye.",biz:F.italya,onlar:F.almanya,a:{P:[40,90],G:[46,96]},d:[[40.9,94.1,"top"],[36,98,"top"],[48,99,"G"],[34,92,"P"]],top:"P",adim:[le("G","yer",[[40,90],[46,96]]),oe("yarim",[[46,96],[38,101],[30.9,105]])]}),re({id:"2006f",yil:2006,tarih:"01.07.2006",mac:"Fransa \u2013 Brezilya",skor:"1 \u2013 0",kupa:mt,asama:"\xC7eyrek final",yer:"Frankfurt",golcu:"Henry",baslik:"Arka direk volesi",not:"Soldan serbest vuru\u015F uzak dire\u011Fe; kimsenin almad\u0131\u011F\u0131 ko\u015Fucu voleyle.",biz:F.fransaB,onlar:F.brezilya,a:{Z:[14,70],H:[54,90]},d:[[36,94,"top"],[30,96,"top"],[42,96,"top"],[50,94,"top"]],top:"Z",adim:[le("H","yarim",[[14,70],[34,90],[48,99]],{H:[[54,90],[48,99]]}),oe("vole",[[48,99],[36.5,105]])]}),re({id:"2008",yil:2008,tarih:"29.06.2008",mac:"\u0130spanya \u2013 Almanya",skor:"1 \u2013 0",kupa:Bt,asama:"Final",yer:"Viyana",golcu:"Torres",baslik:"Arkaya ko\u015Fu",not:"Stoperle bek aras\u0131na yerden ara pas\u0131. Kaleci \xE7\u0131k\u0131yor, yan\u0131ndan al\xE7ak.",biz:F.ispanya,onlar:F.almanya,a:{X:[34,66],F:[44,78]},d:[[40,82,"F"],[30,84,"top"],[34,72,"X"],[48,86,"top"]],kal:[35,101.5],top:"X",adim:[le("F","yer",[[34,66],[40,95]],{F:[[44,78],[40,95]]}),oe("yer",[[40,95],[32,105]])]}),re({id:"2008b",yil:2008,tarih:"20.06.2008",mac:"T\xFCrkiye \u2013 H\u0131rvatistan",skor:"1 \u2013 1",kupa:Bt,asama:"\xC7eyrek final",yer:"Viyana",golcu:"Semih \u015Eent\xFCrk",baslik:"Son saniyede umut",not:"Kalecinin uzun vuru\u015Fu ceza sahas\u0131na d\xFC\u015Fer; d\xF6nen forvet \xFCst k\xF6\u015Feye.",biz:F.turkiye,onlar:F.hirvatistan,a:{R:[34,40],S:[30,84]},d:[[34,86,"S"],[26,90,"top"],[40,90,"top"],[28.6,77.9,"top"]],top:"R",adim:[le("S","hava",[[34,40],[30,90]],{S:[[30,84],[30,90]]}),oe("yarim",[[30,90],[36.9,105]])]}),re({id:"2008c",yil:2008,tarih:"15.06.2008",mac:"T\xFCrkiye \u2013 \xC7ekya",skor:"3 \u2013 2",kupa:Bt,asama:"Grup",yer:"Cenevre",golcu:"Nihat",baslik:"\xDC\xE7 dakikada iki gol",not:"Sa\u011Fdan i\xE7eri pas; sol \xE7aprazdaki forvet k\u0131v\u0131rarak \xFCst k\xF6\u015Feye.",biz:F.turkiye,onlar:F.cekya,a:{H:[44,74],N:[28,84]},d:[[32,88,"N"],[40,86,"top"],[24,92,"top"],[42,78,"H"]],top:"H",adim:[le("N","yer",[[44,74],[28,84]]),oe("yarim",[[28,84],[36.9,105]])]}),re({id:"2009",yil:2009,tarih:"27.05.2009",mac:"Barcelona \u2013 Manchester United",skor:"2 \u2013 0",kupa:lt,asama:"Final",yer:"Roma",golcu:"Messi",baslik:"Kafayla a\u015F\u0131rtma",not:"Sa\u011Fdan havadan orta, ceza noktas\u0131n\u0131n \xF6n\xFCnde y\xFCkselen forvet kaleciyi kafayla a\u015F\u0131rts\u0131n.",biz:F.barcelona,onlar:F.manuB,a:{X:[54,80],M:[36,90]},d:[[40,94,"M"],[30,94,"top"],[52,84,"X"],[44,90,"top"]],kal:[34,102.8],top:"X",adim:[le("M","hava",[[54,80],[44,92],[36,96]],{M:[[36,90],[36,96]]}),oe("kafa",[[36,96],[32.5,105]])]}),re({id:"2009b",yil:2009,tarih:"06.05.2009",mac:"Chelsea \u2013 Barcelona",skor:"1 \u2013 1",kupa:lt,asama:"Yar\u0131 final",yer:"Londra",golcu:"Iniesta",baslik:"93. dakika",not:"Sa\u011Fdan geriye; ceza yay\u0131ndaki orta saha ilk vuru\u015Fta \xFCst k\xF6\u015Feye.",biz:F.barcelona,onlar:F.chelsea,a:{M:[50,88],I:[38,84]},d:[[46,92,"M"],[36,92,"top"],[30,90,"top"],[40,80,"I"]],top:"M",adim:[le("I","yer",[[50,88],[38,84]]),oe("yarim",[[38,84],[36.9,105]])]}),re({id:"2010",yil:2010,tarih:"11.07.2010",mac:"\u0130spanya \u2013 Hollanda",skor:"1 \u2013 0",kupa:mt,asama:"Final",yer:"Johannesburg",golcu:"Iniesta",baslik:"116. dakika",not:"Kanattan i\xE7eri, sonra ko\u015Fan arkada\u015F\u0131n \xF6n\xFCne. Kaleci yak\u0131n direkte.",biz:F.ispanyaLac,onlar:F.hollanda,a:{N:[56,70],F:[42,80],I:[50,86]},d:[[47.5,90,"top"],[36.5,91.3,"I"],[48,82,"F"],[30,92,"top"]],kal:[34.8,104.4],top:"N",adim:[le("F","yer",[[56,70],[42,80]]),le("I","yer",[[42,80],[45,96]],{I:[[50,86],[45,96]]}),oe("yer",[[45,96],[31.2,105]])]}),re({id:"2010b",yil:2010,tarih:"07.07.2010",mac:"\u0130spanya \u2013 Almanya",skor:"1 \u2013 0",kupa:mt,asama:"Yar\u0131 final",yer:"Durban",golcu:"Puyol",baslik:"Stoperin kafas\u0131",not:"Soldan korner; ceza sahas\u0131na dalan stoper sert bir kafayla.",biz:F.ispanya,onlar:F.almanya,a:{X:ta,P:[38,90]},d:[[30,98,"top"],[36,98,"top"],[40,94,"P"],[24,100,"top"]],top:"X",adim:[le("P","hava",[ta,[18,98],[35,97]],{P:[[38,90],[35,97]]}),oe("kafa",[[35,97],[31,105]])]}),re({id:"2010c",yil:2010,tarih:"06.07.2010",mac:"Hollanda \u2013 Uruguay",skor:"1 \u2013 0",kupa:mt,asama:"Yar\u0131 final",yer:"Cape Town",golcu:"van Bronckhorst",baslik:"40 metreden",not:"Sola k\u0131sa pas; kaptan 40 metreden sert ve kavisli, \xFCst k\xF6\u015Feye.",biz:F.hollanda,onlar:F.uruguay,a:{V:[30,64],B:[16,72]},d:[[20,78,"B"],[30,78,"top"],[40,82,"top"],[26,88,"top"]],top:"V",adim:[le("B","yer",[[30,64],[16,72]]),oe("yarim",[[16,72],[37.2,105]])]}),re({id:"2011",yil:2011,tarih:"28.05.2011",mac:"Barcelona \u2013 Manchester United",skor:"2 \u2013 1",kupa:lt,asama:"Final",yer:"Londra",golcu:"Messi",baslik:"Ceza sahas\u0131 d\u0131\u015F\u0131ndan",not:"K\u0131sa pas, sonra 22 metreden sert ve yerden.",biz:F.barcelona,onlar:F.manuB,a:{I:[30,70],M:[37,79],V:[52,82],P:[20,86]},d:[[34,86,"M"],[40,84,"top"],[28,88,"P"],[46,88,"V"],[36,74,"I"]],top:"I",adim:[le("M","yer",[[30,70],[36,82]],{M:[[37,79],[36,82]]}),oe("yer",[[36,82],[30.9,105]])]}),re({id:"2011b",yil:2011,tarih:"12.02.2011",mac:"Manchester United \u2013 Manchester City",skor:"2 \u2013 1",kupa:"Premier Lig",asama:"27. hafta",yer:"Manchester",golcu:"Rooney",baslik:"R\xF6va\u015Fata",not:"Sa\u011Fdan sekip y\xFCkselen orta; ceza noktas\u0131 \xF6n\xFCnde r\xF6va\u015Fata.",biz:F.manu,onlar:F.manCity,a:{N:[58,90],R:[36,92]},d:[[32,96,"top"],[40,96,"top"],[36,88,"R"],[54,94,"N"]],top:"N",adim:[le("R","yarim",[[58,90],[46,94],[36,94]],{R:[[36,92],[36,94]]}),oe("rovasata",[[36,94],[32,105]])]}),re({id:"2012",yil:2012,tarih:"01.07.2012",mac:"\u0130spanya \u2013 \u0130talya",skor:"2 \u2013 0",kupa:Bt,asama:"Final",yer:"Kiev",golcu:"Jordi Alba",baslik:"Bindirmeyle gelen gol",not:"Sol bek arkaya ko\u015Fuyor; pas\u0131 stoperlerin aras\u0131ndan, ko\u015Funun sonuna at.",biz:F.ispanya,onlar:F.italya,a:{X:[36,66],A:[16,76],T:[40,80],F:[30,78]},d:[[19,88,"top"],[31,88,"F"],[40,86,"T"],[20,82,"A"],[46,74,"X"]],top:"X",adim:[le("A","yer",[[36,66],[22,95]],{A:[[16,76],[22,95]]}),oe("yer",[[22,95],[36.5,105]])]}),re({id:"2012c",yil:2012,tarih:"13.05.2012",mac:"Manchester City \u2013 QPR",skor:"3 \u2013 2",kupa:"Premier Lig",asama:"Son hafta",yer:"Manchester",golcu:"Ag\xFCero",baslik:"93:20",not:"Ver-ka\xE7: ceza sahas\u0131ndaki forvete ver, d\xFC\u015Ferken geri verdi\u011Fi topu sa\u011Fdan sert vur.",biz:F.manCity,onlar:F.qpr,a:{A:[40,84],B:[38,92]},d:[[36,96,"B"],[44,92,"top"],[30,94,"top"],[42,80,"A"]],top:"A",adim:[le("B","yer",[[40,84],[38,92]],{A:[[40,84],[44,96]]}),le("A","yer",[[38,92],[44,96]],{A:[[44,96],[44,96.5]]}),oe("yarim",[[44,96.5],[37,105]])]}),re({id:"2013",yil:2013,tarih:"25.05.2013",mac:"Bayern M\xFCnih \u2013 Dortmund",skor:"2 \u2013 1",kupa:lt,asama:"Final",yer:"Londra",golcu:"Robben",baslik:"Topukla a\xE7\u0131lan yol",not:"Topukla arkaya b\u0131rak\u0131lan top; kanat oyuncusu araya dal\u0131p kalecinin yan\u0131ndan.",biz:F.bayern,onlar:F.dortmund,a:{R:[30,90],A:[42,84]},d:[[33.1,95.2,"top"],[40,92,"A"],[28,94,"R"],[44,98,"top"]],top:"R",adim:[le("A","yer",[[30,90],[38,96]],{A:[[42,84],[38,96]]}),oe("yer",[[38,96],[31,105]])]}),re({id:"2014a",yil:2014,tarih:"13.06.2014",mac:"Hollanda \u2013 \u0130spanya",skor:"1 \u2013 1",kupa:mt,asama:"Grup",yer:"Salvador",golcu:"van Persie",baslik:"U\xE7an kafa",not:"Soldan \xE7ok uzun, havadan. Ko\u015Fan forvet kafayla kalecinin \xFCst\xFCnden a\u015F\u0131rts\u0131n.",biz:F.hollanda,onlar:F.ispanya,a:{B:[16,64],V:[40,84]},d:[[36,88,"V"],[30,86,"top"],[44,86,"top"],[22,70,"B"]],kal:[36.6,101],top:"B",adim:[le("V","hava",[[16,64],[37,95]],{V:[[40,84],[37,95]]}),oe("balik",[[37,95],[32.6,105]])]}),re({id:"2014c",yil:2014,tarih:"28.06.2014",mac:"Kolombiya \u2013 Uruguay",skor:"1 \u2013 0",kupa:mt,asama:"Son 16",yer:"Rio de Janeiro",golcu:"James",baslik:"G\xF6\u011F\xFCs ve vole",not:"Kafayla indirilen top; ceza yay\u0131nda g\xF6\u011F\xFCsle kontrol, d\xF6nerek vole \xFCst dire\u011Fin alt\u0131ndan.",biz:F.kolombiya,onlar:F.uruguayB,a:{A:[46,96],J:[36,88]},d:[[40,92,"top"],[30,92,"top"],[44,98,"A"],[34,84,"J"]],top:"A",adim:[le("J","yarim",[[46,96],[40,92],[36,88]]),oe("vole",[[36,88],[37.1,105]])]}),re({id:"2014b",yil:2014,tarih:"13.07.2014",mac:"Almanya \u2013 Arjantin",skor:"1 \u2013 0",kupa:mt,asama:"Final",yer:"Rio de Janeiro",golcu:"G\xF6tze",baslik:"Final gol\xFC",not:"Soldan havadan orta, ceza sahas\u0131nda g\xF6\u011F\xFCsle yumu\u015Fat, vole.",biz:F.almanya,onlar:F.arjantin,a:{S:[8,86],G:[38,88],K:[44,80]},d:[[26,95,"G"],[33,96,"top"],[40,92,"K"],[16,88,"S"]],top:"S",adim:[le("G","yarim",[[9,87],[22,99],[32,98]],{S:[[8,86],[9,92]],G:[[38,88],[32,98]]}),oe("vole",[[32,98],[36.6,105]])]}),re({id:"2014d",yil:2014,tarih:"24.05.2014",mac:"Real Madrid \u2013 Atl\xE9tico Madrid",skor:"1 \u2013 1",kupa:lt,asama:"Final",yer:"Lizbon",golcu:"Sergio Ramos",baslik:"92:48",not:"Soldan d\u0131\u015Fa d\xF6nen korner; markaj\u0131ndan kopan stoper sert bir kafayla alt k\xF6\u015Feye.",biz:F.realMadrid,onlar:F.atletico,a:{M:ta,R:[28,92]},d:[[34,98,"top"],[28,96,"R"],[38,99,"top"],[22,100,"top"]],top:"M",adim:[le("R","hava",[ta,[16,99],[31,97]],{R:[[28,92],[31,97]]}),oe("kafa",[[31,97],[36.6,105]])]}),re({id:"2015",yil:2015,tarih:"06.06.2015",mac:"Juventus \u2013 Barcelona",skor:"0 \u2013 1",kupa:lt,asama:"Final",yer:"Berlin",golcu:"Rakiti\u0107",baslik:"D\xF6rd\xFCnc\xFC dakika",not:"Soldan ceza sahas\u0131na giren Iniesta geriye \xE7evirir; arkadan gelen orta saha tek dokunu\u015Fla sa\u011F k\xF6\u015Feye.",biz:F.barcelona,onlar:F.juventusB,a:{I:[22,96],R:[34,91]},d:[[28,99.6,"top"],[38,98,"top"],[22,100,"I"],[34,87,"R"]],top:"I",adim:[le("R","yer",[[22,96],[33,97]],{R:[[34,91],[33,97]]}),oe("yer",[[33,97],[37,105]])]}),re({id:"2016",yil:2016,tarih:"10.07.2016",mac:"Portekiz \u2013 Fransa",skor:"1 \u2013 0",kupa:Bt,asama:"Final",yer:"Saint-Denis",golcu:"\xC9der",baslik:"Uzatmada uzaktan",not:"K\u0131sa pas, sonra 25 metreden al\xE7ak ve sert, kalecinin soluna.",biz:F.portekiz,onlar:F.fransaB,a:{M:[34,70],E:[37,79]},d:[[37,84,"E"],[30,86,"top"],[44,86,"top"],[34,74,"M"]],top:"M",adim:[le("E","yer",[[34,70],[37,79]]),oe("yer",[[37,79],[31.1,105]])]}),re({id:"2017",yil:2017,tarih:"03.06.2017",mac:"Juventus \u2013 Real Madrid",skor:"1 \u2013 1",kupa:lt,asama:"Final",yer:"Cardiff",golcu:"Mand\u017Euki\u0107",baslik:"G\xF6\u011F\xFCs ve r\xF6va\u015Fata",not:"Soldan havadan orta; g\xF6\u011F\xFCsle y\xFCkseltip s\u0131rt\u0131 d\xF6n\xFCk r\xF6va\u015Fata.",biz:F.juventus,onlar:F.realMadrid,a:{S:[12,92],M:[38,92]},d:[[34,96,"top"],[42,95,"M"],[16,94,"S"],[28,98,"top"]],top:"S",adim:[le("M","yarim",[[12,92],[26,96],[37,94]],{M:[[38,92],[37,94]]}),oe("rovasata",[[37,94],[31.5,105]])]}),re({id:"2018",yil:2018,tarih:"30.06.2018",mac:"Fransa \u2013 Arjantin",skor:"2 \u2013 2",kupa:mt,asama:"Son 16",yer:"Kazan",golcu:"Pavard",baslik:"D\u0131\u015F ayakla vole",not:"Soldan havadan geriye d\xFC\u015Fen orta; sa\u011Fdan gelen bek d\u0131\u015F ayakla falsolu vole.",biz:F.fransa,onlar:F.arjantin,a:{H:[8,88],P:[54,82]},d:[[44,90,"top"],[36,94,"top"],[12,92,"H"],[50,84,"P"]],top:"H",adim:[le("P","yarim",[[8,88],[34,93],[48,88]],{P:[[54,82],[48,88]]}),oe("vole",[[48,88],[41,97],[31.5,105]])]}),re({id:"2018b",yil:2018,tarih:"26.05.2018",mac:"Real Madrid \u2013 Liverpool",skor:"2 \u2013 1",kupa:lt,asama:"Final",yer:"Kiev",golcu:"Bale",baslik:"Finalde r\xF6va\u015Fata",not:"Soldan yar\u0131m y\xFCkseklikte orta; ceza sahas\u0131nda havalan\u0131p r\xF6va\u015Fata.",biz:F.realMadrid,onlar:F.liverpool,a:{M:[10,90],B:[36,92]},d:[[32,96,"top"],[40,96,"B"],[14,93,"M"],[26,98,"top"]],sol:["M"],top:"M",adim:[le("B","yarim",[[10,90],[24,94],[35,94]],{B:[[36,92],[35,94]]}),oe("rovasata",[[35,94],[36.9,105]])]}),re({id:"2018c",yil:2018,tarih:"15.07.2018",mac:"Fransa \u2013 H\u0131rvatistan",skor:"4 \u2013 1",kupa:mt,asama:"Final",yer:"Moskova",golcu:"Mbapp\xE9",baslik:"Gen\xE7 y\u0131ld\u0131z\u0131n final gol\xFC",not:"Soldan i\xE7eri; ceza yay\u0131ndaki gen\xE7 forvet al\xE7ak ve sert, kalecinin solundan.",biz:F.fransaB,onlar:F.hirvatistan,a:{H:[12,88],M:[30,82]},d:[[34,88,"M"],[24,92,"top"],[16,92,"H"],[40,92,"top"]],top:"H",adim:[le("M","yer",[[12,88],[30,82]]),oe("yer",[[30,82],[36.4,105]])]}),re({id:"2019",yil:2019,tarih:"07.05.2019",mac:"Liverpool \u2013 Barcelona",skor:"4 \u2013 0",kupa:lt,asama:"Yar\u0131 final",yer:"Liverpool",golcu:"Origi",baslik:"K\xF6\u015Fe vuru\u015Fu s\xFCrprizi",not:"Herkes geri d\xF6nerken korneri h\u0131zl\u0131ca yerden kullan; ceza sahas\u0131ndaki forvet ilk vuru\u015Fta.",biz:F.liverpool,onlar:F.barcelona,a:{T:zn,O:[36,97]},d:[[30,99,"top"],[45,95,"top"],[34,91,"top"],[48,103.5,"top"]],top:"T",adim:[le("O","yer",[zn,[36,97]]),oe("yer",[[36,97],[33,105]])]}),re({id:"2020",yil:2020,tarih:"23.08.2020",mac:"Bayern M\xFCnih \u2013 PSG",skor:"1 \u2013 0",kupa:lt,asama:"Final",yer:"Lizbon",golcu:"Coman",baslik:"Arka direk kafas\u0131",not:"Sa\u011Fdan havadan arka dire\u011Fe; bo\u015F kalan kanat oyuncusu kafayla ters k\xF6\u015Feye.",biz:F.bayern,onlar:F.psg,a:{K:[52,88],C:[30,90]},d:[[36,96,"top"],[42,94,"top"],[32,94,"C"],[50,92,"K"]],top:"K",adim:[le("C","hava",[[52,88],[40,96],[31,97]],{C:[[30,90],[31,97]]}),oe("kafa",[[31,97],[36.5,105]])]}),re({id:"2021",yil:2021,tarih:"11.07.2021",mac:"\u0130ngiltere \u2013 \u0130talya",skor:"1 \u2013 0",kupa:Bt,asama:"Final",yer:"Londra",golcu:"Shaw",baslik:"\u0130kinci dakika",not:"Sa\u011Fa geni\u015F a\xE7\u0131lan top; sa\u011F bekin ortas\u0131, soldan dalan bek voleyle dire\u011Fe de\u011Fip a\u011Flara.",biz:F.ingiltere,onlar:F.italya,a:{K:[38,58],T:[60,76],S:[14,70]},d:[[46,78,"top"],[32,84,"top"],[56,80,"T"],[22,84,"top"]],top:"K",adim:[le("T","hava",[[38,58],[60,76]]),le("S","yarim",[[60,76],[40,90],[22,94]],{S:[[14,70],[22,94]]}),oe("vole",[[22,94],[36.7,105]])]}),re({id:"2022",yil:2022,tarih:"18.12.2022",mac:"Arjantin \u2013 Fransa",skor:"2 \u2013 0",kupa:mt,asama:"Final",yer:"Lusail",golcu:"Di Mar\xEDa",baslik:"Final kontra ata\u011F\u0131",not:"Kendi yar\u0131 sahas\u0131ndan tek dokunu\u015Fla ileri, ortadan ko\u015Fan orta sahaya, o da soldan gelen kanad\u0131n \xF6n\xFCne. Uzak direk.",biz:F.arjantin,onlar:F.fransa,a:{M:[30,44],J:[38,54],A:[34,60],D:[12,70]},d:[[42,57,"J"],[46,70,"top"],[37,86,"top"],[18,88,"top"],[28,50,"M"]],kal:[34.5,104.4],top:"M",adim:[le("J","yer",[[30,44],[38,54]]),le("A","yer",[[38,54],[38,76]],{A:[[34,60],[38,76]]}),le("D","yer",[[38,76],[22,92]],{D:[[12,70],[22,92]]}),oe("yer",[[22,92],[36.6,105]])]}),re({id:"2022b",yil:2022,tarih:"18.12.2022",mac:"Fransa \u2013 Arjantin",skor:"2 \u2013 2",kupa:mt,asama:"Final",yer:"Lusail",golcu:"Mbapp\xE9",baslik:"Doksan saniyede ikinci",not:"Ver-ka\xE7: ceza yay\u0131na havadan indirilen topa ilk vuru\u015Fta vole.",biz:F.fransa,onlar:F.arjantin,a:{K:[30,80],T:[36,90]},d:[[40,92,"T"],[30,92,"top"],[34,84,"K"],[44,96,"top"]],top:"K",adim:[le("T","yer",[[30,80],[36,90]],{K:[[30,80],[32,86]]}),le("K","yarim",[[36,90],[32,86]],{K:[[32,86],[32,86.5]]}),oe("vole",[[32,86.5],[31,105]])]}),re({id:"2022c",yil:2022,tarih:"09.12.2022",mac:"Hollanda \u2013 Arjantin",skor:"0 \u2013 1",kupa:mt,asama:"\xC7eyrek final",yer:"Lusail",golcu:"Molina",baslik:"Bakmadan pas",not:"Ortada d\xF6nen 10 numara bakmadan iki savunmac\u0131n\u0131n aras\u0131ndan; sa\u011F bek ko\u015Fusunu bitirip k\xF6\u015Feye.",biz:F.arjantin,onlar:F.hollanda,a:{M:[40,78],N:[52,80]},d:[[46,86,"N"],[36,86,"top"],[30,90,"top"],[42,74,"M"]],top:"M",adim:[le("N","yer",[[40,78],[44,96]],{N:[[52,80],[44,96]]}),oe("yer",[[44,96],[32.5,105]])]}),re({id:"2023",yil:2023,tarih:"10.06.2023",mac:"Manchester City \u2013 Inter",skor:"1 \u2013 0",kupa:lt,asama:"Final",yer:"\u0130stanbul",golcu:"Rodri",baslik:"Finali kazand\u0131ran vuru\u015F",not:"Sa\u011Fdan ceza sahas\u0131na giren oyuncu geriye; ceza yay\u0131ndaki orta saha plase vuru\u015Fla k\xF6\u015Feye.",biz:F.manCity,onlar:F.inter,a:{A:[42,72],B:[54,96],R:[36,88]},d:[[50,98,"B"],[40,94,"top"],[30,94,"top"],[36,84,"R"]],top:"A",adim:[le("B","yer",[[42,72],[54,96]]),le("R","yer",[[54,96],[36,88]]),oe("yer",[[36,88],[31,105]])]}),re({id:"2024a",yil:2024,tarih:"14.07.2024",mac:"\u0130spanya \u2013 \u0130ngiltere",skor:"2 \u2013 1",kupa:Bt,asama:"Final",yer:"Berlin",golcu:"Oyarzabal",baslik:"86. dakika",not:"Soldan bek ortas\u0131 yerden; ceza sahas\u0131na ko\u015Fan forvet aya\u011F\u0131n\u0131n ucuyla.",biz:F.ispanya,onlar:F.ingiltere,a:{M:[10,90],O:[34,90]},d:[[27,93,"top"],[39,95,"top"],[37,92,"O"],[14,94,"M"]],top:"M",adim:[le("O","yer",[[10,90],[34,99]],{O:[[34,90],[34,99]]}),oe("yer",[[34,99],[36,105]])]}),re({id:"2024b",yil:2024,tarih:"14.07.2024",mac:"\u0130spanya \u2013 \u0130ngiltere",skor:"1 \u2013 0",kupa:Bt,asama:"Final",yer:"Berlin",golcu:"Nico Williams",baslik:"Kanattan kanada",not:"Sa\u011Fdan i\xE7eri giren gen\xE7 kanat, soldan ko\u015Fan kanada; tek vuru\u015Fla uzak k\xF6\u015Fe.",biz:F.ispanya,onlar:F.ingiltere,a:{Y:[50,88],W:[24,86]},d:[[27,96,"W"],[40,94.5,"top"],[48,91,"Y"],[34,96.5,"top"]],top:"Y",adim:[le("W","yer",[[50,88],[24,92]],{W:[[24,86],[24,92]]}),oe("yer",[[24,92],[36.4,105]])]}),re({id:"2024c",yil:2024,tarih:"09.07.2024",mac:"\u0130spanya \u2013 Fransa",skor:"1 \u2013 1",kupa:Bt,asama:"Yar\u0131 final",yer:"M\xFCnih",golcu:"Yamal",baslik:"16 ya\u015F\u0131nda f\xFCze",not:"Sa\u011F \xE7aprazda topu alan gen\xE7 kanat i\xE7eri k\u0131v\u0131rarak dire\u011Fin i\xE7inden \xFCst k\xF6\u015Feye.",biz:F.ispanya,onlar:F.fransaB,a:{O:[32,80],Y:[46,84]},d:[[44,90,"Y"],[36,90,"top"],[30,92,"top"],[34,76,"O"]],top:"O",adim:[le("Y","yer",[[32,80],[46,84]]),oe("yarim",[[46,84],[40,96],[31.3,105]])]}),re({id:"2024d",yil:2024,tarih:"18.06.2024",mac:"T\xFCrkiye \u2013 G\xFCrcistan",skor:"2 \u2013 1",kupa:Bt,asama:"Grup",yer:"Dortmund",golcu:"Arda G\xFCler",baslik:"Sol ayakla roket",not:"Sa\u011F kanatta topu alan gen\xE7 oyun kurucu i\xE7eri kat edip uzaktan k\u0131v\u0131rarak \xFCst k\xF6\u015Feye.",biz:F.turkiye,onlar:F.gurcistan,a:{K:[38,72],A:[52,79]},d:[[52,82,"A"],[38,88,"top"],[30,90,"top"],[38,76,"K"]],top:"K",adim:[le("A","yer",[[38,72],[46,84]],{A:[[52,79],[46,84]]}),oe("yarim",[[46,84],[42,93],[31.4,105]])]}),re({id:"2024e",yil:2024,tarih:"02.07.2024",mac:"T\xFCrkiye \u2013 Avusturya",skor:"1 \u2013 0",kupa:Bt,asama:"Son 16",yer:"Leipzig",golcu:"Demiral",baslik:"\u0130lk dakikada",not:"57. saniye. Arda'n\u0131n kornerinde kaleci topa dokunur, top \xF6n\xFCne d\xFC\u015Fer: yak\u0131ndan ayakla.",biz:F.turkiye,onlar:F.avusturya,a:{A:zn,D:[38,96]},d:[[34,99,"top"],[40,99,"D"],[30,98,"top"],[46.2,97.2,"top"]],top:"A",adim:[le("D","hava",[zn,[50,101],[37.5,100]],{D:[[38,96],[37.5,100]]}),oe("yer",[[37.5,100],[33,105]])]}),re({id:"2024f",yil:2024,tarih:"01.06.2024",mac:"Real Madrid \u2013 Dortmund",skor:"1 \u2013 0",kupa:lt,asama:"Final",yer:"Londra",golcu:"Carvajal",baslik:"Kornerden yak\u0131n direk",not:"Soldan korner; yak\u0131n dire\u011Fe ko\u015Fan sa\u011F bek kafayla uzak k\xF6\u015Feye \xE7evirir.",biz:F.realMadrid,onlar:F.dortmund,a:{K:ta,C:[34,94]},d:[[28.5,102.5,"top"],[39,98,"top"],[36,95,"C"],[21,96,"top"]],top:"K",adim:[le("C","hava",[ta,[18,100],[31,99]],{C:[[34,94],[31,99]]}),oe("kafa",[[31,99],[36.5,105]])]}),re({id:"2002f",yil:2002,tarih:"22.06.2002",mac:"T\xFCrkiye \u2013 Senegal",skor:"1 \u2013 0",kupa:mt,asama:"\xC7eyrek final",yer:"Osaka",golcu:"\u0130lhan Mans\u0131z",baslik:"Alt\u0131n gol",not:"Sa\u011F kanattan yar\u0131m y\xFCkseklikte orta; ceza sahas\u0131na giren yedek forvet voleyle.",biz:F.turkiye,onlar:F.senegal,a:{U:[58,90],I:[38,88]},d:[[34,94,"top"],[42,92,"I"],[54,94,"U"],[28,96,"top"]],top:"U",adim:[le("I","yarim",[[58,90],[46,94],[37,95]],{I:[[38,88],[37,95]]}),oe("vole",[[37,95],[31.5,105]])]}),re({id:"2002g",yil:2002,tarih:"18.06.2002",mac:"T\xFCrkiye \u2013 Japonya",skor:"1 \u2013 0",kupa:mt,asama:"Son 16",yer:"Miyagi",golcu:"\xDCmit Davala",baslik:"Kornerden kafa",not:"Sa\u011F kornerden havadan; yak\u0131n dire\u011Fe ko\u015Fan sa\u011F bek kafayla.",biz:F.turkiyeB,onlar:F.japonya,a:{E:zn,U:[42,94]},d:[[32,99,"top"],[44,97,"U"],[28,96,"top"],[48,103,"top"]],top:"E",adim:[le("U","hava",[zn,[50,100],[39,99]],{U:[[42,94],[39,99]]}),oe("kafa",[[39,99],[31.2,105]])]}),re({id:"2008e",yil:2008,tarih:"15.06.2008",mac:"T\xFCrkiye \u2013 \u0130svi\xE7re",skor:"2 \u2013 1",kupa:Bt,asama:"Grup",yer:"Basel",golcu:"Arda Turan",baslik:"92. dakika",not:"Ortadan sola pas; ceza yay\u0131n\u0131n solundaki oyuncu al\xE7ak ve kavisli uzak k\xF6\u015Feye.",biz:F.turkiyeB,onlar:F.isvicre,a:{S:[40,76],A:[28,84]},d:[[32,88,"A"],[40,88,"top"],[24,94,"top"],[42,72,"S"]],top:"S",adim:[le("A","yer",[[40,76],[28,84]]),oe("yer",[[28,84],[36.8,105]])]}),re({id:"2012d",yil:2012,tarih:"19.05.2012",mac:"Chelsea \u2013 Bayern M\xFCnih",skor:"1 \u2013 1",kupa:lt,asama:"Final",yer:"M\xFCnih",golcu:"Drogba",baslik:"88. dakika kafas\u0131",not:"Sa\u011Fdan Mata'n\u0131n korneri; yak\u0131n dire\u011Fe ko\u015Fan forvet sert bir kafayla.",biz:F.chelsea,onlar:F.bayern,a:{M:zn,D:[36,94]},d:[[40,102.5,"top"],[30,98,"top"],[36,95,"D"],[46,96,"top"]],top:"M",adim:[le("D","hava",[zn,[52,100],[37,99]],{D:[[36,94],[37,99]]}),oe("kafa",[[37,99],[36.8,105]])]}),re({id:"2018e",yil:2018,tarih:"02.07.2018",mac:"Bel\xE7ika \u2013 Japonya",skor:"3 \u2013 2",kupa:mt,asama:"Son 16",yer:"Rostov",golcu:"Chadli",baslik:"94. dakika kontras\u0131",not:"Ortadan sa\u011Fa uzun ko\u015Fu; bekin yerden ortas\u0131, ortadaki forvet topu b\u0131rak\u0131r, arkadan gelen bitirir.",biz:F.belcika,onlar:F.japonya,a:{K:[34,60],M:[60,70],C:[24,86]},d:[[44,66,"top"],[38,80,"top"],[30,92,"top"],[56,74,"M"]],top:"K",adim:[le("M","yer",[[34,60],[58,90]],{M:[[60,70],[58,90]]}),le("C","yer",[[58,90],[32,98]],{C:[[24,86],[32,98]]}),oe("yer",[[32,98],[36.5,105]])]}),re({id:"2022d",yil:2022,tarih:"24.11.2022",mac:"Brezilya \u2013 S\u0131rbistan",skor:"2 \u2013 0",kupa:mt,asama:"Grup",yer:"Lusail",golcu:"Richarlison",baslik:"Makas",not:"Soldan d\u0131\u015F ayakla yar\u0131m y\xFCkseklikte orta; s\u0131rt\u0131 d\xF6n\xFCk forvet tek ayakla kontrol edip makas vole.",biz:F.brezilya,onlar:F.sirbistan,a:{V:[10,88],R:[36,94]},d:[[32,98,"top"],[40,97,"R"],[14,92,"V"],[44,100,"top"]],top:"V",adim:[le("R","yarim",[[10,88],[24,94],[35,95]],{R:[[36,94],[35,95]]}),oe("rovasata",[[35,95],[31.6,105]])]}),re({id:"2001",yil:2001,tarih:"17.06.2001",mac:"Barcelona \u2013 Valencia",skor:"3 \u2013 2",kupa:"La Liga",asama:"Son hafta",yer:"Barcelona",golcu:"Rivaldo",baslik:"Son dakika r\xF6va\u015Fatas\u0131",not:"89. dakika. Uzun topu g\xF6\u011Fs\xFCyle y\xFCkselt, ceza sahas\u0131 \xE7izgisinden r\xF6va\u015Fatayla k\xF6\u015Feye.",biz:F.barcelona,onlar:F.valencia,no:{R:10,B:4},a:{B:[30,62],R:[38,82]},d:[[30,90,"top"],[44,92,"top"],[38,76,"B"],[26,84,"top"]],top:"B",adim:[le("R","hava",[[30,62],[37,87]],{R:[[38,82],[37,87]]}),oe("rovasata",[[37,87],[31,105]])]}),re({id:"2005c",yil:2005,tarih:"08.03.2005",mac:"Chelsea \u2013 Barcelona",skor:"3 \u2013 2",kupa:lt,asama:"Son 16",yer:"Londra",golcu:"Ronaldinho",baslik:"Ayak ucuyla",not:"Ceza sahas\u0131 \xF6n\xFCnde topu al, savunma dururken haz\u0131rl\u0131ks\u0131z ayak ucuyla k\xF6\u015Feye.",biz:F.barcelona,onlar:F.chelsea,no:{R:10,I:24},a:{I:[30,76],R:[38,86]},d:[[35,91.5,"top"],[42,92.5,"top"],[38,82,"R"],[28,90,"top"]],top:"I",adim:[le("R","yer",[[30,76],[38,87]]),oe("yer",[[38,87],[37.2,105]])]}),re({id:"2006g",yil:2006,tarih:"25.11.2006",mac:"Barcelona \u2013 Villarreal",skor:"4 \u2013 0",kupa:"La Liga",asama:"Lig",yer:"Barcelona",golcu:"Ronaldinho",baslik:"G\xF6\u011F\xFCs ve r\xF6va\u015Fata",not:"Havadan gelen topu g\xF6\u011Fs\xFCnle kontrol et, s\u0131rt\u0131n kaleye d\xF6n\xFCkken r\xF6va\u015Fata.",biz:F.barcelona,onlar:F.villarreal,no:{R:10,X:6},a:{X:[24,70],R:[36,86]},d:[[30,94,"top"],[42,94,"top"],[46,84,"top"]],top:"X",adim:[le("R","hava",[[24,70],[35,90]],{R:[[36,86],[35,90]]}),oe("rovasata",[[35,90],[36.6,105]])]}),re({id:"2007",yil:2007,tarih:"18.04.2007",mac:"Barcelona \u2013 Getafe",skor:"2 \u2013 0",kupa:"Kral Kupas\u0131",asama:"Yar\u0131 final",yer:"Barcelona",golcu:"Messi",baslik:"Altm\u0131\u015F metrelik ko\u015Fu",not:"Kendi yar\u0131 sahandan sa\u011F kanattan ba\u015Fla, d\xF6rt oyuncuyu ve kaleciyi ge\xE7, dar a\xE7\u0131dan bitir.",biz:F.barcelona,onlar:F.getafe,no:{M:19},a:{M:[50,50]},d:[[43,60,"top"],[58,70,"top"],[40,80,"top"],[53,90,"top"]],kal:[36,102.6],top:"M",adim:[pn([[50,50],[52,62],[49,75],[47,88],[46,97],[45,100.5]]),oe("yer",[[45,100.5],[34,105]])]}),re({id:"2008f",yil:2008,tarih:"30.01.2008",mac:"Manchester United \u2013 Portsmouth",skor:"2 \u2013 0",kupa:"Premier Lig",asama:"Lig",yer:"Manchester",golcu:"Ronaldo",baslik:"D\xF6nmeyen frikik",not:"Otuz metreden serbest vuru\u015F: topa d\xFCz vur, havada titreyerek baraj\u0131n \xFCst\xFCnden k\xF6\u015Feye d\xFC\u015Fs\xFCn.",biz:F.manu,onlar:F.portsmouth,no:{R:7},a:{R:[42,78]},d:[[40.2,87.3,"top"],[40.8,87.2,"top"],[41.4,87.1,"top"]],kal:[33.6,104.4],top:"R",adim:[oe("yarim",[[42,78],[31.5,105]])]}),re({id:"2008g",yil:2008,tarih:"21.05.2008",mac:"Manchester United \u2013 Chelsea",skor:"1 \u2013 0",kupa:lt,asama:"Final",yer:"Moskova",golcu:"Ronaldo",baslik:"Moskova'da kafa",not:"Sa\u011Fdan bekin ortas\u0131; arka dire\u011Fe dalan 7 numara kafayla k\xF6\u015Feye.",biz:F.manu,onlar:F.chelsea,no:{R:7,W:6},a:{W:[58,84],R:[34,90]},d:[[36,95,"top"],[42,96,"top"],[54,86,"W"],[28,95,"top"]],top:"W",adim:[le("R","hava",[[58,84],[44,94],[31.5,97]],{R:[[34,90],[31.5,97]]}),oe("kafa",[[31.5,97],[35.5,105]])]}),re({id:"2009c",yil:2009,tarih:"15.04.2009",mac:"Porto \u2013 Manchester United",skor:"0 \u2013 1",kupa:lt,asama:"\xC7eyrek final",yer:"Porto",golcu:"Ronaldo",baslik:"K\u0131rk metrelik f\xFCze",not:"K\u0131sa pas\u0131 al, hi\xE7 durmadan 35 metreden \xFCst k\xF6\u015Feye.",biz:F.manuB,onlar:F.porto,no:{R:7,A:8},a:{A:[30,62],R:[37,69]},d:[[30,80,"top"],[42,82,"top"],[36,90,"top"],[38,74,"R"]],top:"A",adim:[le("R","yer",[[30,62],[37,69]]),oe("yarim",[[37,69],[31.2,105]])]}),re({id:"2022j",yil:2022,tarih:"04.12.2022",mac:"Fransa \u2013 Polonya",skor:"3 \u2013 0",kupa:mt,asama:"Son 16",yer:"Doha",golcu:"Mbapp\xE9",baslik:"\xDCst k\xF6\u015Feye f\xFCze",not:"Sol \xE7aprazda pas\u0131 al, bir ad\u0131m i\xE7eri, sa\u011F ayakla uzak \xFCst k\xF6\u015Feye k\u0131v\u0131r.",biz:F.fransa,onlar:F.polonya,no:{M:10,T:12},a:{T:[16,78],M:[14,86]},d:[[26,95,"top"],[32,92,"top"],[22,98,"top"],[20,82,"T"]],top:"T",adim:[le("M","yer",[[16,78],[17,90]],{M:[[14,86],[17,90]]}),oe("yarim",[[17,90],[26,99],[37.2,105]])]}),re({id:"2010g",yil:2010,tarih:"22.05.2010",mac:"Bayern M\xFCnih \u2013 Inter",skor:"0 \u2013 2",kupa:lt,asama:"Final",yer:"Madrid",golcu:"Milito",baslik:"Stoperi yere oturt",not:"Soldan pas\u0131 al, stoperi \xE7al\u0131mla ge\xE7, uzak k\xF6\u015Feye bitir.",biz:F.inter,onlar:F.bayern,no:{M:22,E:9},a:{E:[24,78],M:[36,82]},d:[[42.9,88.9,"top"],[30,92,"top"],[36,96,"top"]],top:"E",adim:[le("M","yer",[[24,78],[38,88]],{M:[[36,82],[38,88]]}),pn([[38,88],[43,92],[41,96]]),oe("yer",[[41,96],[31.5,105]])]}),re({id:"2011c",yil:2011,tarih:"27.04.2011",mac:"Real Madrid \u2013 Barcelona",skor:"0 \u2013 2",kupa:lt,asama:"Yar\u0131 final",yer:"Madrid",golcu:"Messi",baslik:"Bernab\xE9u'da slalom",not:"Ortadan topu al, d\xF6rt Madrid oyuncusunun aras\u0131ndan s\xFCr, kalecinin yak\u0131n\u0131ndan g\xF6nder.",biz:F.barcelona,onlar:F.realMadrid,no:{M:10,B:16},a:{B:[34,56],M:[40,64]},d:[[46,70,"top"],[36,78,"top"],[50,84,"top"],[38,90,"top"]],kal:[37.5,103.6],top:"B",adim:[le("M","yer",[[34,56],[40,64]]),pn([[40,64],[43,74],[45,84],[44,93],[42,98]]),oe("yer",[[42,98],[36.6,105]])]}),re({id:"2012e",yil:2012,tarih:"24.04.2012",mac:"Barcelona \u2013 Chelsea",skor:"2 \u2013 2",kupa:lt,asama:"Yar\u0131 final",yer:"Barcelona",golcu:"Torres",baslik:"Bo\u015F kaleye uzun ko\u015Fu",not:"Uzakla\u015Ft\u0131r\u0131lan top orta sahada; tek ba\u015F\u0131na ko\u015F, \xE7\u0131kan kaleciyi \xE7al\u0131mla ge\xE7, bo\u015F kaleye.",biz:F.chelsea,onlar:F.barcelona,no:{F:9},a:{F:[34,52]},d:[[44,50,"top"],[24,52,"top"]],kal:[35,93],top:"F",adim:[pn([[34,52],[34,68],[34,84],[33,91],[29,96]]),oe("yer",[[29,96],[33,105]])]}),re({id:"2012f",yil:2012,tarih:"24.04.2012",mac:"Barcelona \u2013 Chelsea",skor:"2 \u2013 1",kupa:lt,asama:"Yar\u0131 final",yer:"Barcelona",golcu:"Ramires",baslik:"Camp Nou'da a\u015F\u0131rtma",not:"Ortadan sa\u011Fdaki ko\u015Fuya ara pas\u0131; \xE7\u0131kan kalecinin \xFCst\xFCnden yava\u015F\xE7a a\u015F\u0131rt.",biz:F.chelsea,onlar:F.barcelona,no:{R:7,L:8},a:{L:[36,62],R:[48,68]},d:[[38.7,76.5,"top"],[30,82,"top"],[46,62,"L"]],kal:[40,99],top:"L",adim:[le("R","yer",[[36,62],[47,88]],{R:[[48,68],[47,88]]}),oe("asirt",[[47,88],[34.5,105]])]}),re({id:"2012g",yil:2012,tarih:"28.06.2012",mac:"Almanya \u2013 \u0130talya",skor:"0 \u2013 2",kupa:Bt,asama:"Yar\u0131 final",yer:"Var\u015Fova",golcu:"Balotelli",baslik:"Formas\u0131n\u0131 \xE7\u0131karan gol",not:"Geriden uzun top; savunman\u0131n arkas\u0131na ka\xE7, 18 metreden \xFCst k\xF6\u015Feye f\xFCze.",biz:F.italya,onlar:F.almanya,no:{B:9,M:18},a:{M:[38,50],B:[44,72]},d:[[36,80,"top"],[48,80,"top"],[30,88,"top"]],top:"M",adim:[le("B","hava",[[38,50],[40,86]],{B:[[44,72],[40,86]]}),oe("yarim",[[40,86],[36.6,105]])]}),re({id:"2012h",yil:2012,tarih:"09.05.2012",mac:"Atl\xE9tico Madrid \u2013 Athletic",skor:"1 \u2013 0",kupa:"Avrupa Ligi",asama:"Final",yer:"B\xFCkre\u015F",golcu:"Falcao",baslik:"Sol ayakla k\u0131v\u0131rarak",not:"Sa\u011F \xE7aprazda topu al, sol aya\u011F\u0131na \xE7evir, uzak \xFCst k\xF6\u015Feye k\u0131v\u0131r.",biz:F.atletico,onlar:F.athletic,no:{F:9,A:10},a:{A:[38,78],F:[50,86]},d:[[44,92,"top"],[36,94,"top"],[54,90,"F"]],top:"A",adim:[le("F","yer",[[38,78],[48,91]],{F:[[50,86],[48,91]]}),oe("yarim",[[48,91],[42,98],[31.3,105]])]}),re({id:"2013b",yil:2013,tarih:"24.04.2013",mac:"Dortmund \u2013 Real Madrid",skor:"3 \u2013 1",kupa:lt,asama:"Yar\u0131 final",yer:"Dortmund",golcu:"Lewandowski",baslik:"D\xF6n\xFCp tavana",not:"Soldan gelen pas\u0131 ceza sahas\u0131nda al, d\xF6n ve tavana g\xF6nder.",biz:F.dortmund,onlar:F.realMadrid,no:{L:9,R:11},a:{R:[22,88],L:[34,90]},d:[[30,96,"top"],[40,97,"top"],[28,90,"R"]],top:"R",adim:[le("L","yer",[[22,88],[34,94]],{L:[[34,90],[34,94]]}),oe("yarim",[[34,94],[36.4,105]])]}),re({id:"2013c",yil:2013,tarih:"15.05.2013",mac:"Benfica \u2013 Chelsea",skor:"1 \u2013 2",kupa:"Avrupa Ligi",asama:"Final",yer:"Amsterdam",golcu:"Ivanovi\u0107",baslik:"93. dakikada kafa",not:"Sa\u011F kornerden havadan; arkadan ko\u015Fan bek kafayla topu uzak k\xF6\u015Feye d\xFC\u015F\xFCr\xFCr.",biz:F.chelsea,onlar:F.benfica,no:{I:2,M:10},a:{M:zn,I:[40,91]},d:[[34,98,"top"],[30,96,"top"],[42,99,"top"]],top:"M",adim:[le("I","hava",[[67.5,104.5],[50,100],[38.5,96]],{I:[[40,91],[38.5,96]]}),oe("kafa",[[38.5,96],[31,105]])]}),re({id:"2013d",yil:2013,tarih:"11.12.2013",mac:"Galatasaray \u2013 Juventus",skor:"1 \u2013 0",kupa:lt,asama:"Grup",yer:"\u0130stanbul",golcu:"Sneijder",baslik:"Karda gelen gol",not:"Karl\u0131 zeminde forvet topu indirir; arkadan gelen 10 numara al\xE7ak ve uzak k\xF6\u015Feye.",biz:F.galatasaray,onlar:F.juventus,no:{S:10,D:11},a:{D:[42,94],S:[36,86]},d:[[46,96,"D"],[32,95,"top"],[36,99,"top"]],top:"D",adim:[le("S","yer",[[42,94],[38,90]],{S:[[36,86],[38,90]]}),oe("yer",[[38,90],[31,105]])]}),re({id:"2014e",yil:2014,tarih:"19.06.2014",mac:"Uruguay \u2013 \u0130ngiltere",skor:"2 \u2013 1",kupa:mt,asama:"Grup",yer:"S\xE3o Paulo",golcu:"Su\xE1rez",baslik:"Savunman\u0131n arkas\u0131nda",not:"Kalecinin uzun vuru\u015Fu; sekip \xF6ne d\xFC\u015Fen topa ko\u015F, yak\u0131n dire\u011Fin \xFCst\xFCne bitir.",biz:F.uruguay,onlar:F.ingiltere,no:{S:9,M:1},a:{M:[34,24],S:[30,74]},d:[[38,80,"top"],[44,84,"top"],[34,86,"top"]],top:"M",adim:[le("S","hava",[[34,24],[28,92]],{S:[[30,74],[28,92]]}),oe("yarim",[[28,92],[31.2,105]])]}),re({id:"2014f",yil:2014,tarih:"21.06.2014",mac:"Arjantin \u2013 \u0130ran",skor:"1 \u2013 0",kupa:mt,asama:"Grup",yer:"Belo Horizonte",golcu:"Messi",baslik:"91. dakikada k\u0131v\u0131rma",not:"Sa\u011F kanatta topu al, i\xE7eri s\xFCr, sol ayakla b\xFCt\xFCn savunman\u0131n \xFCst\xFCnden uzak k\xF6\u015Feye k\u0131v\u0131r.",biz:F.arjantin,onlar:F.iran,no:{M:10},a:{M:[52,80]},d:[[36,89,"top"],[30,91,"top"],[48,92,"top"],[40,94,"top"],[56,86,"top"]],top:"M",adim:[pn([[52,80],[48,83],[45,85]]),oe("yarim",[[45,85],[40,96],[31.5,105]])]}),re({id:"2014g",yil:2014,tarih:"16.04.2014",mac:"Barcelona \u2013 Real Madrid",skor:"1 \u2013 2",kupa:"Kral Kupas\u0131",asama:"Final",yer:"Valencia",golcu:"Bale",baslik:"Sahan\u0131n d\u0131\u015F\u0131ndan ko\u015Fu",not:"Sol kanatta topu \xF6ne it, stoperi sahan\u0131n d\u0131\u015F\u0131ndan ge\xE7, kalecinin bacak aras\u0131ndan.",biz:F.realMadrid,onlar:F.barcelona,no:{B:11},a:{B:[14,54]},d:[[10,64,"top"],[24,84,"top"],[34,92,"top"]],kal:[30,103],top:"B",adim:[pn([[14,54],[5,66],[1,78],[6,89],[16,95],[23,98]]),oe("yer",[[23,98],[32.6,105]])]}),re({id:"2015b",yil:2015,tarih:"06.05.2015",mac:"Barcelona \u2013 Bayern M\xFCnih",skor:"2 \u2013 0",kupa:lt,asama:"Yar\u0131 final",yer:"Barcelona",golcu:"Messi",baslik:"Stoper yere d\xFC\u015Ft\xFC",not:"Sa\u011F \xE7aprazda stoperi \xE7al\u0131mla yere oturt, \xE7\u0131kan kalecinin \xFCst\xFCnden a\u015F\u0131rt.",biz:F.barcelona,onlar:F.bayern,no:{M:10,R:4},a:{R:[38,74],M:[50,84]},d:[[46,88,"top"],[38,92,"top"]],kal:[40,101],top:"R",adim:[le("M","yer",[[38,74],[50,88]],{M:[[50,84],[50,88]]}),pn([[50,88],[46,92],[42.5,96]]),oe("asirt",[[42.5,96],[34.5,105]])]}),re({id:"2015c",yil:2015,tarih:"30.05.2015",mac:"Athletic \u2013 Barcelona",skor:"0 \u2013 1",kupa:"Kral Kupas\u0131",asama:"Final",yer:"Barcelona",golcu:"Messi",baslik:"\xC7izgi boyunca d\xF6rt ki\u015Fi",not:"Sa\u011F \xE7izgide \xFC\xE7 oyuncunun aras\u0131ndan s\u0131yr\u0131l, i\xE7eri gir, yak\u0131n direkten bitir.",biz:F.barcelona,onlar:F.athletic,no:{M:10},a:{M:[60,60]},d:[[55,66,"top"],[57,80,"top"],[48,88,"top"],[40,92,"top"]],top:"M",adim:[pn([[60,60],[63.5,70],[61,80],[54,88],[47,94],[44,96]]),oe("yer",[[44,96],[37,105]])]}),re({id:"2015d",yil:2015,tarih:"22.09.2015",mac:"Bayern M\xFCnih \u2013 Wolfsburg",skor:"5 \u2013 1",kupa:"Bundesliga",asama:"Lig",yer:"M\xFCnih",golcu:"Lewandowski",baslik:"Dokuz dakikada be\u015F gol",not:"Sa\u011Fdan y\xFCkselen orta; havada yan d\xF6n\xFCp makas vuru\u015Fla be\u015Finci gol.",biz:F.bayern,onlar:F.wolfsburg,no:{L:9,C:11},a:{C:[60,88],L:[36,92]},d:[[30,96,"top"],[42,98,"top"],[56,90,"C"]],top:"C",adim:[le("L","yarim",[[60,88],[48,94],[35,95]],{L:[[36,92],[35,95]]}),oe("rovasata",[[35,95],[31,105]])]}),re({id:"2015e",yil:2015,tarih:"15.04.2015",mac:"PSG \u2013 Barcelona",skor:"0 \u2013 2",kupa:lt,asama:"\xC7eyrek final",yer:"Paris",golcu:"Su\xE1rez",baslik:"\u0130ki kez bacak aras\u0131",not:"Topu al, stoperi iki kez bacak aras\u0131ndan ge\xE7, tavana vur.",biz:F.barcelona,onlar:F.psg,no:{S:9,I:8},a:{I:[36,78],S:[44,86]},d:[[36.7,95.5,"top"],[32,94,"top"]],top:"I",adim:[le("S","yer",[[36,78],[44,88]],{S:[[44,86],[44,88]]}),pn([[44,88],[41,93],[39.5,97]]),oe("yarim",[[39.5,97],[36.5,105]])]}),re({id:"2016b",yil:2016,tarih:"06.07.2016",mac:"Portekiz \u2013 Galler",skor:"1 \u2013 0",kupa:Bt,asama:"Yar\u0131 final",yer:"Lyon",golcu:"Ronaldo",baslik:"2.5 metrelik s\u0131\xE7ray\u0131\u015F",not:"Soldan havadan orta; herkesten y\xFCkse\u011Fe \xE7\u0131k, kafayla yere vur.",biz:F.portekiz,onlar:F.galler,no:{R:7,G:5},a:{G:[12,88],R:[37,91]},d:[[33,97,"top"],[40,98,"top"],[16,90,"G"]],top:"G",adim:[le("R","hava",[[12,88],[24,95],[35.5,96]],{R:[[37,91],[35.5,96]]}),oe("kafa",[[35.5,96],[36.6,105]])]}),re({id:"2017b",yil:2017,tarih:"08.03.2017",mac:"Barcelona \u2013 PSG",skor:"4 \u2013 1",kupa:lt,asama:"Son 16",yer:"Barcelona",golcu:"Neymar",baslik:"Geri d\xF6n\xFC\u015F\xFCn friki\u011Fi",not:"88. dakika. Ceza sahas\u0131 \xF6n\xFCnden baraj\u0131n \xFCst\xFCnden \xFCst k\xF6\u015Feye.",biz:F.barcelona,onlar:F.psg,no:{N:11},a:{N:[40,80]},d:[[38.5,89,"top"],[38,89.2,"top"],[37.5,89.4,"top"],[37,89.6,"top"]],kal:[33.5,104.4],top:"N",adim:[oe("yarim",[[40,80],[31.4,105]])]}),re({id:"2017c",yil:2017,tarih:"08.03.2017",mac:"Barcelona \u2013 PSG",skor:"6 \u2013 1",kupa:lt,asama:"Son 16",yer:"Barcelona",golcu:"Sergi Roberto",baslik:"Alt\u0131nc\u0131 gol, 95. dakika",not:"Ortadan havadan a\u015F\u0131rtma pas; ceza sahas\u0131na dalan oyuncu uzan\u0131p ayak ucuyla.",biz:F.barcelona,onlar:F.psg,no:{N:11,R:20},a:{N:[34,80],R:[42,90]},d:[[30,96,"top"],[44,96,"top"],[36,92,"top"]],top:"N",adim:[le("R","hava",[[34,80],[37,99]],{R:[[42,90],[37,99]]}),oe("vole",[[37,99],[36.5,105]])]}),re({id:"2018f",yil:2018,tarih:"03.04.2018",mac:"Juventus \u2013 Real Madrid",skor:"0 \u2013 2",kupa:lt,asama:"\xC7eyrek final",yer:"Torino",golcu:"Ronaldo",baslik:"Juventus taraftar\u0131 ayakta",not:"Sa\u011Fdan havadan orta; iki metreden y\xFCksekte r\xF6va\u015Fata, Buffon k\u0131m\u0131ldayamaz.",biz:F.realMadrid,onlar:F.juventusB,no:{R:7,C:2},a:{C:[57,88],R:[36,90]},d:[[30,95,"top"],[40,97,"top"],[53,90,"C"]],top:"C",adim:[le("R","hava",[[57,88],[46,94],[35,95]],{R:[[36,90],[35,95]]}),oe("rovasata",[[35,95],[31,105]])]}),re({id:"2018g",yil:2018,tarih:"15.06.2018",mac:"Portekiz \u2013 \u0130spanya",skor:"3 \u2013 3",kupa:mt,asama:"Grup",yer:"So\xE7i",golcu:"Ronaldo",baslik:"88. dakika friki\u011Fi",not:"Baraj\u0131n \xFCst\xFCnden k\u0131v\u0131r, \xFCst k\xF6\u015Feye: hat-trick.",biz:F.portekiz,onlar:F.ispanya,no:{R:7},a:{R:[41,80]},d:[[39.6,89,"top"],[39,89.2,"top"],[38.4,89.4,"top"],[37.8,89.6,"top"]],kal:[34.4,104.4],top:"R",adim:[oe("yarim",[[41,80],[37.3,105]])]}),re({id:"2018h",yil:2018,tarih:"23.06.2018",mac:"Almanya \u2013 \u0130sve\xE7",skor:"2 \u2013 1",kupa:mt,asama:"Grup",yer:"So\xE7i",golcu:"Kroos",baslik:"95. dakika, dar a\xE7\u0131",not:"Sol \xE7aprazda k\u0131sa frikik: arkada\u015F\u0131n topu durdurur, sen uzak \xFCst k\xF6\u015Feye k\u0131v\u0131r\u0131rs\u0131n.",biz:F.almanya,onlar:F.isvec,no:{K:8,M:11},a:{K:[13,89],M:[15,91]},d:[[20,95,"top"],[21,94,"top"],[22,93,"top"]],kal:[33.5,104.4],top:"K",adim:[le("M","yer",[[13,89],[15,91]]),oe("yarim",[[15,91],[25,101],[37.3,105]])]}),re({id:"2018i",yil:2018,tarih:"25.06.2018",mac:"\u0130ran \u2013 Portekiz",skor:"0 \u2013 1",kupa:mt,asama:"Grup",yer:"Saransk",golcu:"Quaresma",baslik:"Trivela",not:"Sa\u011F \xE7aprazda d\u0131\u015F ayakla vur: top d\u0131\u015Far\u0131dan dolan\u0131p uzak \xFCst k\xF6\u015Feye girer.",biz:F.portekiz,onlar:F.iran,no:{Q:20,A:16},a:{A:[54,80],Q:[52,88]},d:[[42,92,"top"],[36,94,"top"],[48,96,"top"]],top:"A",adim:[le("Q","yer",[[54,80],[51,90]],{Q:[[52,88],[51,90]]}),oe("yarim",[[51,90],[43,99.2],[31.3,105]])]}),re({id:"2018j",yil:2018,tarih:"21.06.2018",mac:"Arjantin \u2013 H\u0131rvatistan",skor:"0 \u2013 2",kupa:mt,asama:"Grup",yer:"Nijni Novgorod",golcu:"Modri\u0107",baslik:"Ceza sahas\u0131 d\u0131\u015F\u0131ndan",not:"Ceza yay\u0131n\u0131n sa\u011F\u0131nda savunmac\u0131y\u0131 sola \xE7ekip uzak k\xF6\u015Feye k\u0131v\u0131r.",biz:F.hirvatistan,onlar:F.arjantin,no:{M:10,R:7},a:{R:[50,78],M:[42,84]},d:[[38,90,"top"],[44,92,"top"],[44,86,"M"]],top:"R",adim:[le("M","yer",[[50,78],[42,84]]),oe("yarim",[[42,84],[36,97],[31.3,105]])]}),re({id:"2018k",yil:2018,tarih:"24.04.2018",mac:"Liverpool \u2013 Roma",skor:"1 \u2013 0",kupa:lt,asama:"Yar\u0131 final",yer:"Liverpool",golcu:"Salah",baslik:"Eski tak\u0131m\u0131na k\u0131v\u0131rma",not:"Sa\u011F \xE7aprazda topu al, sol ayakla dire\u011Fin i\xE7inden uzak \xFCst k\xF6\u015Feye.",biz:F.liverpool,onlar:F.roma,no:{S:11,F:9},a:{F:[40,84],S:[50,86]},d:[[44,94,"top"],[38,92,"top"],[54,90,"S"]],top:"F",adim:[le("S","yer",[[40,84],[49,89]],{S:[[50,86],[49,89]]}),oe("yarim",[[49,89],[43,98],[31.4,105]])]}),re({id:"2019b",yil:2019,tarih:"01.05.2019",mac:"Barcelona \u2013 Liverpool",skor:"3 \u2013 0",kupa:lt,asama:"Yar\u0131 final",yer:"Barcelona",golcu:"Messi",baslik:"600. gol, otuz metreden",not:"Otuz metreden serbest vuru\u015F: sol ayakla k\u0131v\u0131r, \xFCst k\xF6\u015Feye.",biz:F.barcelona,onlar:F.liverpool,no:{M:10},a:{M:[39,75]},d:[[37.5,84,"top"],[37,84.2,"top"],[36.5,84.4,"top"],[36,84.6,"top"]],kal:[33.6,104.4],top:"M",adim:[oe("yarim",[[39,75],[35,92],[37.3,105]])]}),re({id:"2019c",yil:2019,tarih:"08.05.2019",mac:"Ajax \u2013 Tottenham",skor:"2 \u2013 3",kupa:lt,asama:"Yar\u0131 final",yer:"Amsterdam",golcu:"Lucas Moura",baslik:"96. dakikada hat-trick",not:"Ceza sahas\u0131na gelen top; sol ayakla ilk vuru\u015Fta k\xF6\u015Feye.",biz:F.tottenham,onlar:F.ajax,no:{L:27,A:20},a:{A:[36,90],L:[30,88]},d:[[34,96,"top"],[38,95,"top"],[26,92,"top"]],top:"A",adim:[le("L","yer",[[36,90],[31,93]],{L:[[30,88],[31,93]]}),oe("yer",[[31,93],[36.6,105]])]}),re({id:"2021c",yil:2021,tarih:"29.05.2021",mac:"Manchester City \u2013 Chelsea",skor:"0 \u2013 1",kupa:lt,asama:"Final",yer:"Porto",golcu:"Havertz",baslik:"Kaleciyi ge\xE7, bo\u015F kale",not:"Ortadan derin pas; arkaya ko\u015F, kaleciyi \xE7al\u0131mla ge\xE7, bo\u015F kaleye yuvarla.",biz:F.chelsea,onlar:F.manCity,no:{H:29,M:19},a:{M:[38,60],H:[32,70]},d:[[42,76,"top"],[26,80,"top"]],kal:[34,95],top:"M",adim:[le("H","yer",[[38,60],[36,92]],{H:[[32,70],[36,92]]}),pn([[36,92],[38.5,96],[40,98.5]]),oe("yer",[[40,98.5],[35,105]])]}),re({id:"2021d",yil:2021,tarih:"14.06.2021",mac:"\u0130sko\xE7ya \u2013 \xC7ekya",skor:"0 \u2013 2",kupa:Bt,asama:"Grup",yer:"Glasgow",golcu:"Schick",baslik:"Orta sahadan",not:"Kaleci \xF6nde. Orta \xE7izginin hemen \xF6n\xFCnden a\u015F\u0131rt: 45 metre.",biz:F.cekya,onlar:F.iskocya,no:{S:10},a:{S:[26,58]},d:[[30,70,"top"],[40,74,"top"]],kal:[33,96.5],top:"S",adim:[oe("asirt",[[26,58],[34.6,105]])]}),re({id:"2022e",yil:2022,tarih:"28.05.2022",mac:"Liverpool \u2013 Real Madrid",skor:"0 \u2013 1",kupa:lt,asama:"Final",yer:"Paris",golcu:"Vin\xEDcius",baslik:"Arka direkte tek dokunu\u015F",not:"Sa\u011Fdan ceza sahas\u0131na sert ve yerden; arka dire\u011Fe s\u0131zan kanat tek dokunu\u015Fla.",biz:F.realMadrid,onlar:F.liverpool,no:{V:20,F:15},a:{F:[54,88],V:[26,92]},d:[[39,100.6,"top"],[34,96,"top"],[50,90,"F"]],kal:[37.2,103.6],top:"F",adim:[le("V","yer",[[54,88],[42,96],[30,101]],{V:[[26,92],[30,101]]}),oe("yer",[[30,101],[33,105]])]}),re({id:"2022f",yil:2022,tarih:"26.11.2022",mac:"Arjantin \u2013 Meksika",skor:"1 \u2013 0",kupa:mt,asama:"Grup",yer:"Lusail",golcu:"Messi",baslik:"Turnuvay\u0131 a\xE7an \u015Fut",not:"Sa\u011Fdan pas\u0131 ceza yay\u0131n\u0131n \xF6n\xFCnde al, sol ayakla al\xE7ak ve sert, k\xF6\u015Feye.",biz:F.arjantin,onlar:F.meksika,no:{M:10,D:11},a:{D:[48,80],M:[36,82]},d:[[34,90,"top"],[40,92,"top"],[30,88,"top"],[37.6,77.7,"M"]],top:"D",adim:[le("M","yer",[[48,80],[36,84]]),oe("yer",[[36,84],[37.4,105]])]}),re({id:"2022g",yil:2022,tarih:"22.11.2022",mac:"Arjantin \u2013 Suudi Arabistan",skor:"1 \u2013 2",kupa:mt,asama:"Grup",yer:"Lusail",golcu:"Al-Dawsari",baslik:"D\xFCnyay\u0131 \u015Fa\u015F\u0131rtan gol",not:"Sol \xE7aprazda iki adam\u0131 ge\xE7, sa\u011F ayakla uzak \xFCst k\xF6\u015Feye k\u0131v\u0131r.",biz:F.suudi,onlar:F.arjantin,no:{D:10},a:{D:[16,84]},d:[[23,95,"top"],[30,92,"top"],[18,92,"top"]],top:"D",adim:[pn([[16,84],[19,87],[21,89]]),oe("yarim",[[21,89],[30,98],[37,105]])]}),re({id:"2022h",yil:2022,tarih:"09.12.2022",mac:"H\u0131rvatistan \u2013 Brezilya",skor:"0 \u2013 1",kupa:mt,asama:"\xC7eyrek final",yer:"Er-Reyyan",golcu:"Neymar",baslik:"Ver-ka\xE7, kaleciyi ge\xE7",not:"Ortadan arkada\u015F\u0131na ver, geri al, kaleciyi \xE7al\u0131mla ge\xE7, tavana.",biz:F.brezilya,onlar:F.hirvatistan,no:{N:10,P:7},a:{N:[30,76],P:[38,86]},d:[[30,92,"top"],[42,94,"top"]],kal:[36,99.5],top:"N",adim:[le("P","yer",[[30,76],[38,86]],{N:[[30,76],[35,93]]}),le("N","yer",[[38,86],[35,93]],{N:[[35,93],[35,93.5]]}),pn([[35,93.5],[39,97],[40,100]]),oe("yarim",[[40,100],[35.5,105]])]}),re({id:"2022i",yil:2022,tarih:"14.09.2022",mac:"Manchester City \u2013 Dortmund",skor:"2 \u2013 1",kupa:lt,asama:"Grup",yer:"Manchester",golcu:"Haaland",baslik:"U\xE7an vole",not:"Sa\u011Fdan d\u0131\u015F ayakla orta; alt\u0131 pas \xF6n\xFCnde havaya uzan\u0131p topu kaleye g\xF6nder.",biz:F.manCity,onlar:F.dortmund,no:{H:9,C:7},a:{C:[58,86],H:[38,93]},d:[[32,98,"top"],[42,100,"top"],[54,88,"C"]],top:"C",adim:[le("H","yarim",[[58,86],[48,95],[37,99]],{H:[[38,93],[37,99]]}),oe("vole",[[37,99],[33,105]])]}),re({id:"2024g",yil:2024,tarih:"30.06.2024",mac:"\u0130ngiltere \u2013 Slovakya",skor:"1 \u2013 1",kupa:Bt,asama:"Son 16",yer:"Gelsenkirchen",golcu:"Bellingham",baslik:"95. dakika r\xF6va\u015Fatas\u0131",not:"Uzun ta\xE7 at\u0131\u015F\u0131 kafayla geri gelir; s\u0131rt\u0131n kaleye d\xF6n\xFCk, r\xF6va\u015Fatayla e\u015Fitle.",biz:F.ingiltere,onlar:F.slovakya,no:{B:10,G:6},a:{G:[42,97],B:[35,90]},d:[[30,96,"top"],[38,99,"top"],[44,99,"G"]],top:"G",adim:[le("B","hava",[[42,97],[35,94]],{B:[[35,90],[35,94]]}),oe("rovasata",[[35,94],[32,105]])]}),re({id:"2024h",yil:2024,tarih:"01.06.2024",mac:"Dortmund \u2013 Real Madrid",skor:"0 \u2013 2",kupa:lt,asama:"Final",yer:"Londra",golcu:"Vin\xEDcius",baslik:"Finali bitiren vuru\u015F",not:"Ortadan ara pas\u0131; ceza sahas\u0131nda sol ayakla sa\u011F alt k\xF6\u015Feye.",biz:F.realMadrid,onlar:F.dortmund,no:{V:7,B:5},a:{B:[38,80],V:[28,84]},d:[[37.3,90.4,"top"],[42,92,"top"],[30,92,"top"]],top:"B",adim:[le("V","yer",[[38,80],[33,95]],{V:[[28,84],[33,95]]}),oe("yer",[[33,95],[37.2,105]])]}),re({id:"2024i",yil:2024,tarih:"18.06.2024",mac:"T\xFCrkiye \u2013 G\xFCrcistan",skor:"1 \u2013 0",kupa:Bt,asama:"Grup",yer:"Dortmund",golcu:"Mert M\xFCld\xFCr",baslik:"Turnuvan\u0131n en g\xFCzel volesi",not:"Uzakla\u015Ft\u0131r\u0131lan top ceza sahas\u0131 d\u0131\u015F\u0131na d\xFC\u015Fer; hi\xE7 bekletmeden voleyle uzak \xFCst k\xF6\u015Feye.",biz:F.turkiye,onlar:F.gurcistan,no:{M:18,K:20},a:{K:[22,96],M:[48,84]},d:[[36,92,"top"],[30,96,"top"],[40,96,"top"]],top:"K",adim:[le("M","yarim",[[22,96],[34,90],[46,86]],{M:[[48,84],[46,86]]}),oe("vole",[[46,86],[31.2,105]])]}),re({id:"2024j",yil:2024,tarih:"26.06.2024",mac:"\xC7ekya \u2013 T\xFCrkiye",skor:"0 \u2013 1",kupa:Bt,asama:"Grup",yer:"Hamburg",golcu:"Hakan \xC7alhano\u011Flu",baslik:"Kaptandan uzak \u015Fut",not:"Ceza sahas\u0131 \xF6n\xFCnde topu al, sert ve al\xE7ak, k\xF6\u015Feye.",biz:F.turkiye,onlar:F.cekya,no:{H:10,K:7},a:{K:[52,80],H:[40,82]},d:[[34.7,89.5,"top"],[44,92,"top"],[30,90,"top"]],top:"K",adim:[le("H","yer",[[52,80],[40,83]]),oe("yer",[[40,83],[31.3,105]])]}),re({id:"2024k",yil:2024,tarih:"22.05.2024",mac:"Atalanta \u2013 Leverkusen",skor:"2 \u2013 0",kupa:"Avrupa Ligi",asama:"Final",yer:"Dublin",golcu:"Lookman",baslik:"51 ma\xE7l\u0131k seriyi bitiren gol",not:"Sol \xE7aprazda stoperi ge\xE7, sa\u011F ayakla uzak \xFCst k\xF6\u015Feye k\u0131v\u0131r.",biz:F.atalanta,onlar:F.leverkusen,no:{L:11},a:{L:[16,84]},d:[[22,92,"top"],[30,94,"top"],[20,80,"top"]],top:"L",adim:[pn([[16,84],[20,86],[23,88]]),oe("yarim",[[23,88],[31,98],[37,105]])]}),re({id:"2025",yil:2025,tarih:"30.04.2025",mac:"Barcelona \u2013 Inter",skor:"1 \u2013 2",kupa:lt,asama:"Yar\u0131 final",yer:"Barcelona",golcu:"Yamal",baslik:"17 ya\u015F\u0131nda dire\u011Fin i\xE7inden",not:"Sa\u011F kanattan i\xE7eri s\xFCr, sol ayakla k\u0131v\u0131r: top dire\u011Fe \xE7arp\u0131p a\u011Flara.",biz:F.barcelona,onlar:F.inter,no:{Y:19},a:{Y:[56,82]},d:[[50,90,"top"],[42,92,"top"],[38,90,"top"],[56,88,"top"]],top:"Y",adim:[pn([[56,82],[51,85],[47.5,86]]),oe("yarim",[[47.5,86],[40,96],[31.2,105]])]})],Gu=s=>(s.tarih||"").split(".").reverse().join("")+String((s.skor||"").split("\u2013").reduce((e,t)=>e+(+t||0),0)).padStart(2,"0"),an=Hb.slice().sort((s,e)=>s.yil-e.yil||Gu(s).localeCompare(Gu(e)));var to=class extends qs{constructor(e=null){super();let t=new _n;t.deleteAttribute("uv");let n=new St({side:Zt}),i=new St,a=5;e!==null&&e._useLegacyLights===!1&&(a=900);let r=new $s(16777215,a,28,2);r.position.set(.418,16.199,.3),this.add(r);let o=new ze(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new ze(t,i);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new ze(t,i);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new ze(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new ze(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new ze(t,i);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let p=new ze(t,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new ze(t,na(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let b=new ze(t,na(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(.1,2.425,2.751),this.add(b);let m=new ze(t,na(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new ze(t,na(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let x=new ze(t,na(20));x.position.set(3.235,11.486,-12.541),x.scale.set(2.5,2,.1),this.add(x);let y=new ze(t,na(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function na(s){let e=new Dt;return e.color.setScalar(s),e}function Wu(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),a={},r={},o=s[0].morphTargetsRelative,c=new It,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in a){let u=Vu(a[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let b=0;b<r[h].length;++b)p.push(r[h][b][d]);let g=Vu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Vu(s){let e,t,n,i=-1,a=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.array.length}let r=new e(a),o=0;for(let l=0;l<s.length;++l)r.set(s[l].array,o),o+=s[l].array.length;let c=new bt(r,t,n);return i!==void 0&&(c.gpuType=i),c}function Yc(s,e){if(e===_u)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Da||e===Jr){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Da)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let a=s.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var qe=(s,e,t=0)=>new L(s-34,t,52.5-e),Xu=s=>[s.x+34,52.5-s.z];function io(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,t}function Gb(s){let a=io(Math.round(1848),Math.round(2662)),r=a.getContext("2d"),o=b=>(b+8)*22,c=b=>(113-b)*22;for(let b=0;b<22;b++){let m=-8+b*5.5;r.fillStyle=b%2?"#3a9a3e":"#46ab47",r.fillRect(0,c(m+121/22),a.width,121/22*22+1)}let l=r.getImageData(0,0,a.width,a.height),h=l.data;for(let b=0;b<h.length;b+=4){let m=(Math.random()-.5)*14;h[b]+=m*.6,h[b+1]+=m,h[b+2]+=m*.5}r.putImageData(l,0,0);for(let b=0;b<9e4;b++){let m=Math.random()*a.width,f=Math.random()*a.height;r.fillStyle=Math.random()<.5?"rgba(255,255,255,.05)":"rgba(0,30,0,.07)",r.fillRect(m,f,1,2+Math.random()*3)}for(let b=0;b<40;b++){let m=Math.random()*a.width,f=Math.random()*a.height,x=(8+Math.random()*20)*22,y=r.createRadialGradient(m,f,0,m,f,x),M=Math.random()<.5;y.addColorStop(0,M?"rgba(255,255,200,.05)":"rgba(0,40,0,.06)"),y.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=y,r.fillRect(m-x,f-x,x*2,x*2)}r.save(),r.fillStyle="rgba(0,18,6,.30)";let u=o(-8),d=o(13);r.beginPath(),r.moveTo(u,0),r.lineTo(d,0);for(let b=0;b<=a.height;b+=22*9)r.lineTo(d+Math.sin(b/(22*9)*Math.PI)*22*1.2,b);r.lineTo(u,a.height),r.closePath(),r.fill(),r.globalCompositeOperation="destination-out",r.fillStyle="rgba(0,0,0,.55)";for(let b=22*2;b<a.height;b+=22*9)r.beginPath(),r.moveTo(u,b),r.lineTo(d,b+22*4.5),r.lineTo(d,b+22*5.3),r.lineTo(u,b+22*.8),r.closePath(),r.fill(),r.beginPath(),r.moveTo(u,b+22*4.5),r.lineTo(d,b),r.lineTo(d,b+22*.8),r.lineTo(u,b+22*5.3),r.closePath(),r.fill();r.restore(),r.strokeStyle="rgba(255,255,255,.92)",r.lineWidth=.12*22,r.lineCap="round";let p=b=>{r.beginPath(),b.forEach((m,f)=>f?r.lineTo(o(m[0]),c(m[1])):r.moveTo(o(m[0]),c(m[1]))),r.stroke()};p([[0,0],[68,0],[68,105],[0,105],[0,0]]),p([[0,52.5],[68,52.5]]),r.beginPath(),r.arc(o(34),c(52.5),9.15*22,0,Math.PI*2),r.stroke(),r.fillStyle="#fff",[[34,52.5],[34,11],[34,94]].forEach(b=>{r.beginPath(),r.arc(o(b[0]),c(b[1]),.22*22,0,Math.PI*2),r.fill()});for(let[b,m]of[[105,-1],[0,1]]){p([[13.84,b],[13.84,b+m*16.5],[54.16,b+m*16.5],[54.16,b]]),p([[24.84,b],[24.84,b+m*5.5],[43.16,b+m*5.5],[43.16,b]]);let f=b+m*11,x=Math.acos(5.5/9.15);r.beginPath(),m<0?r.arc(o(34),c(f),9.15*22,x,Math.PI-x):r.arc(o(34),c(f),9.15*22,Math.PI+x,Math.PI*2-x),r.stroke()}for(let[b,m]of[[0,0],[68,0],[0,105],[68,105]])r.beginPath(),r.arc(o(b),c(m),1*22,0,Math.PI*2),r.stroke();let g=new sn(a);return g.colorSpace=dt,g.anisotropy=s,g.generateMipmaps=!0,{t:g,W:84,H:121,pay:8}}function Vb(){let s=io(256,256),e=s.getContext("2d");e.fillStyle="rgb(128,128,128)",e.fillRect(0,0,256,256);for(let n=0;n<9e3;n++){let i=Math.random()*256,a=Math.random()*256,r=2+Math.random()*5,o=(Math.random()-.5)*.5,c=95+Math.random()*70;if(e.strokeStyle="rgba("+(c*.92|0)+","+(c|0)+","+(c*.85|0)+",.55)",e.lineWidth=.8,e.beginPath(),e.moveTo(i,a),e.lineTo(i+Math.sin(o)*r,a-Math.cos(o)*r),e.stroke(),i<8||a<8||i>248||a>248)for(let[l,h]of[[256,0],[-256,0],[0,256],[0,-256]])e.beginPath(),e.moveTo(i+l,a+h),e.lineTo(i+l+Math.sin(o)*r,a+h-Math.cos(o)*r),e.stroke()}let t=new sn(s);return t.wrapS=t.wrapT=xn,t}function Wb(){let s=io(1024,64),e=s.getContext("2d"),t=[["YOKLUK","#2c943c","#ffffff"],["ESK\u0130 GOLLER","#142c1c","#8ccc9c"],["K\u0130M VAR K\u0130M YOK","#DB4B48","#FFD6B3"],["YOKLUK","#F7C948","#142c1c"]],n=s.width/t.length;t.forEach(([a,r,o],c)=>{e.fillStyle=r,e.fillRect(c*n,0,n,64),e.fillStyle=o,e.font="800 34px system-ui,sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a,c*n+n/2,34)});let i=new sn(s);return i.colorSpace=dt,i.wrapS=xn,i}function Xb(){let s=new ts(400,32,16),e=new Un({side:Zt,depthWrite:!1,uniforms:{ust:{value:new Ue("#0b1630")},alt:{value:new Ue("#3a5a78")}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 ust; uniform vec3 alt; varying vec3 vP; void main(){ float h = clamp(vP.y*1.6+0.15,0.0,1.0); vec3 c = mix(alt, ust, pow(h,0.7)); gl_FragColor = vec4(c,1.0); }"});return new ze(s,e)}var no=class{constructor(e,t,n){this.g=new Wt,e.add(this.g),this.yon=n;let i=new St({color:16777215,roughness:.35,metalness:.1}),a=.07,r=tt.x2-tt.x1,o=tt.h,c=2.2,l=new li(a,a,o,12),h=new li(a,a,r+a*2,12);for(let w of[tt.x1,tt.x2]){let S=new ze(l,i);S.position.copy(qe(w,t,o/2)),S.castShadow=!0,this.g.add(S)}let u=new ze(h,i);u.rotation.z=Math.PI/2,u.position.copy(qe(34,t,o)),u.castShadow=!0,this.g.add(u);let d=new St({color:14540253,roughness:.6});for(let w of[tt.x1,tt.x2]){let S=qe(w,t,o),R=qe(w,t+n*c,0),O=S.distanceTo(R),v=new ze(new li(.03,.03,O,6),d);v.position.copy(S).add(R).multiplyScalar(.5),v.lookAt(R),v.rotateX(Math.PI/2),this.g.add(v)}this.y=t,this.d=c,this.nx=34,this.nz=12;let p=[],g=[],b=(w,S,R)=>(p.push(w,S,R),p.length/3-1),m=[];for(let w=0;w<=this.nz;w++){let S=[];for(let R=0;R<=this.nx;R++){let O=tt.x1+r*R/this.nx,v=o*w/this.nz,T=t+n*(c*(1-.15*(1-w/this.nz))-.25*(w/this.nz));S.push(b(O,T,v))}m.push(S)}for(let w=0;w<=this.nz;w++)for(let S=0;S<=this.nx;S++)S<this.nx&&g.push(m[w][S],m[w][S+1]),w<this.nz&&g.push(m[w][S],m[w+1][S]);let f=[],x=6;for(let w=0;w<=x;w++){let S=[];for(let R=0;R<=this.nx;R++){let O=tt.x1+r*R/this.nx;S.push(b(O,t+n*(c-.25)*w/x,o-0))}f.push(S)}for(let w=0;w<=x;w++)for(let S=0;S<=this.nx;S++)S<this.nx&&g.push(f[w][S],f[w][S+1]),w<x&&g.push(f[w][S],f[w+1][S]);for(let w of[tt.x1,tt.x2]){let S=[];for(let R=0;R<=this.nz;R++){let O=[];for(let v=0;v<=x;v++){let T=o*R/this.nz,U=(c*(1-.15*(1-R/this.nz))-.25*(R/this.nz))*v/x;O.push(b(w,t+n*U,T))}S.push(O)}for(let R=0;R<=this.nz;R++)for(let O=0;O<=x;O++)O<x&&g.push(S[R][O],S[R][O+1]),R<this.nz&&g.push(S[R][O],S[R+1][O])}this.ham=new Float32Array(p);let y=new It,M=new Float32Array(p.length);for(let w=0;w<p.length;w+=3){let S=qe(p[w],p[w+1],p[w+2]);M[w]=S.x,M[w+1]=S.y,M[w+2]=S.z}this.ilk=M.slice(),y.setAttribute("position",new bt(M,3)),y.setIndex(g),this.file=new Js(y,new ci({color:16777215,transparent:!0,opacity:.78})),this.g.add(this.file),this.vuruk=null}carp(e,t){this.vuruk={x:e,z:t,t:0}}guncelle(e){if(!this.vuruk)return;let t=this.vuruk;t.t+=e;let n=this.file.geometry.attributes.position,i=n.array,a=this.ilk,r=Math.max(0,Math.sin(Math.min(1,t.t/.08)*Math.PI/2))*Math.exp(-Math.max(0,t.t-.08)*2.6)*.75*(1+.25*Math.sin(t.t*26)*Math.exp(-t.t*4)),o=qe(t.x,this.y,t.z);for(let c=0;c<i.length;c+=3){let l=a[c]-o.x,h=a[c+1]-o.y,u=l*l+h*h,d=r*Math.exp(-u/.9);i[c]=a[c],i[c+1]=a[c+1],i[c+2]=a[c+2]-this.yon*d}n.needsUpdate=!0,t.t>2.5&&(this.vuruk=null,i.set(a),n.needsUpdate=!0)}};function qu(s,e){let t=e.capabilities.getMaxAnisotropy();s.add(Xb());let n=new ze(new Mn(220,260),new St({color:2383150,roughness:1}));n.rotation.x=-Math.PI/2,n.position.y=-.02,n.receiveShadow=!0,s.add(n);let i=Gb(t),a=new St({map:i.t,roughness:.88,metalness:0}),r=Vb();r.anisotropy=t,a.onBeforeCompile=V=>{V.uniforms.tDetay={value:r},V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDun;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vDun = (modelMatrix * vec4(transformed, 1.0)).xyz;`),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tDetay; varying vec3 vDun;`).replace("#include <map_fragment>",`#include <map_fragment>
        vec3 dt = texture2D(tDetay, vDun.xz * 0.55).rgb, dt2 = texture2D(tDetay, vDun.xz * 0.07 + 0.31).rgb;
        diffuseColor.rgb *= mix(vec3(1.0), dt * 1.9, 0.55) * mix(1.0, dt2.g * 2.0, 0.25);
        // bi\xE7me \u015Feritleri bak\u0131\u015F y\xF6n\xFCne g\xF6re parlar/karar\u0131r
        float serit = step(0.5, fract((vDun.z + 60.5) / 11.0));
        vec3 bak = normalize(cameraPosition - vDun);
        diffuseColor.rgb *= 1.0 + (serit - 0.5) * 0.14 * sign(bak.z + 0.001);`)};let o=new ze(new Mn(i.W,i.H),a);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,s.add(o);let c=Wb(),l=new St({map:c,emissive:16777215,emissiveMap:c,emissiveIntensity:.35,roughness:.6}),h=(V,Q,ie,me)=>{let W=c.clone();W.needsUpdate=!0,W.repeat.set(ie/24,1);let Z=new ze(new _n(ie,.95,.15),l.clone());Z.material.map=W,Z.material.emissiveMap=W,Z.position.copy(qe(V,Q,.48)),Z.rotation.y=me,Z.castShadow=!0,s.add(Z)};h(34,109.5,60,0),h(34,-4.5,60,0),h(-4,52.5,100,Math.PI/2),h(72,52.5,100,Math.PI/2);let u=new St({color:2767406,roughness:.9}),d=new St({color:1713181,roughness:.8,metalness:.2}),p=[],g=(V,Q,ie,me,W)=>{let Z=new Wt;Z.position.copy(qe(V,Q,0)),Z.rotation.y=me,s.add(Z);for(let ye=0;ye<W;ye++){let Ie=new ze(new _n(ie,.6+ye*.62,.9),u);Ie.position.set(0,(.6+ye*.62)/2,-ye*.9),Ie.receiveShadow=!0,Z.add(Ie);for(let He=0;He<ie/.62-1;He++)Math.random()<.93&&p.push({g:Z,x:-ie/2+.5+He*.62+(Math.random()-.5)*.1,y:.6+ye*.62+.3,z:-ye*.9+.05,r:ye})}let fe=new ze(new _n(ie+2,.5,W*.9+3),d);fe.position.set(0,W*.62+7,-W*.45+.5),Z.add(fe);let Ae=new ze(new _n(ie,W*.62+7,.6),u);Ae.position.set(0,(W*.62+7)/2,-W*.9-.3),Z.add(Ae)};g(34,113,76,0,16),g(34,-8,76,Math.PI,16),g(-9,52.5,112,Math.PI/2,16),g(77,52.5,112,-Math.PI/2,16);let b=["#d9d4c8","#2c943c","#8ccc9c","#F7C948","#C8102E","#1E4FA8","#F4F4F4","#1d1d1d","#E9B48F","#7a5a3a","#F08A1C","#8EC9F0"],m=new li(.17,.21,.5,6);m.translate(0,-.06,0);let f=new ts(.11,8,6);f.translate(0,.3,0);let x=Wu([m,f]),y=new St({roughness:.9}),M={value:0},w={value:0};y.onBeforeCompile=V=>{V.uniforms.uZipla=M,V.uniforms.uZaman=w,V.vertexShader=`uniform float uZipla; uniform float uZaman;
`+V.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 float fz = fract(sin(float(gl_InstanceID)*12.9898)*43758.5453); transformed.y += uZipla * abs(sin(uZaman*9.0 + fz*6.28)) * 0.35 + sin(uZaman*1.3+fz*20.0)*0.015;`)};let S=new Ks(x,y,p.length),R=new nt,O=new Ue,v=new L;p.forEach((V,Q)=>{V.g.updateMatrixWorld(!0),v.set(V.x,V.y,V.z).applyMatrix4(V.g.matrixWorld),R.makeRotationY(V.g.rotation.y),R.setPosition(v),S.setMatrixAt(Q,R),O.set(b[Math.random()*b.length|0]).multiplyScalar(.55+Math.random()*.5),S.setColorAt(Q,O)}),s.add(S);let T=[["#2c943c","#ffffff"],["#F7C948","#142c1c"],["#C8102E","#ffffff"],["#1E4FA8","#F7C948"],["#ffffff","#2c943c"]];for(let[V,Q,ie,me]of[[34,113,70,0],[34,-8,70,Math.PI],[-9,52.5,100,Math.PI/2],[77,52.5,100,-Math.PI/2]]){let W=new Wt;W.position.copy(qe(V,Q,0)),W.rotation.y=me,s.add(W);for(let Z=-ie/2+4;Z<ie/2-3;Z+=7+Math.random()*5){let[fe,Ae]=T[Math.random()*T.length|0],ye=document.createElement("canvas");ye.width=64,ye.height=32;let Ie=ye.getContext("2d");Ie.fillStyle=fe,Ie.fillRect(0,0,64,32),Ie.fillStyle=Ae,Math.random()<.5?Ie.fillRect(0,11,64,10):Ie.fillRect(22,0,20,32);let He=new sn(ye);He.colorSpace=dt;let ke=new ze(new Mn(3.4,1.7),new St({map:He,side:Vt,roughness:.9}));ke.position.set(Z,1.4+Math.random()*.6+(Math.random()*3|0)*1.9,.48-(Math.random()*3|0)*1.6),ke.rotation.y=Math.PI,ke.rotation.z=(Math.random()-.5)*.08,W.add(ke)}}let U=new St({color:2502698,roughness:.7,metalness:.4}),D=new Dt({color:16774877}),se=new $i({map:qb(),color:16773836,transparent:!0,depthWrite:!1,blending:Us});for(let[V,Q]of[[-14,-14],[82,-14],[-14,119],[82,119]]){let ie=new ze(new li(.5,.8,34,8),U);ie.position.copy(qe(V,Q,17)),s.add(ie);let me=new ze(new _n(6,3,.6),U);me.position.copy(qe(V,Q,35)),me.lookAt(qe(34,52.5,0)),s.add(me);for(let Z=0;Z<3;Z++)for(let fe=0;fe<2;fe++){let Ae=new ze(new Mn(1.4,1.1),D);Ae.position.set(-1.8+Z*1.8,-.6+fe*1.3,.31),me.add(Ae)}let W=new js(se);W.scale.set(26,26,1),W.position.copy(qe(V,Q,35.5)),s.add(W)}let C=new St({color:16238920,side:Vt});for(let[V,Q]of[[0,0],[68,0],[0,105],[68,105]]){let ie=new ze(new li(.025,.025,1.5,6),new St({color:16777215}));ie.position.copy(qe(V,Q,.75)),ie.castShadow=!0,s.add(ie);let me=new ze(new Mn(.45,.32),C);me.position.copy(qe(V,Q,1.33)).add(new L(.24,0,0)),s.add(me)}let H=[new no(s,105,1),new no(s,0,-1)];s.add(new Wr(14675711,2775600,.95));try{let V=new Xs(e);s.environment=V.fromScene(new to,.04).texture,s.environmentIntensity=.35,V.dispose()}catch{}let q=new ns(16774368,2.3);q.position.set(25,55,20),q.castShadow=!0,q.shadow.mapSize.set(2048,2048);let te=q.shadow.camera;te.left=-32,te.right=32,te.top=32,te.bottom=-32,te.near=10,te.far=140,q.shadow.bias=-4e-4,q.shadow.normalBias=.02,s.add(q),s.add(q.target);let $=new ns(12572927,.55);return $.position.set(-30,30,-40),s.add($),s.fog=new Ur(2110026,140,380),{kaleler:H,gunes:q,zipla:M,zaman:w}}function qb(){let s=io(128,128),e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,240,1)"),t.addColorStop(.25,"rgba(255,245,210,.55)"),t.addColorStop(1,"rgba(255,240,200,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new sn(s)}var so=class extends di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new el(t)}),this.register(function(t){return new ll(t)}),this.register(function(t){return new hl(t)}),this.register(function(t){return new ul(t)}),this.register(function(t){return new nl(t)}),this.register(function(t){return new il(t)}),this.register(function(t){return new sl(t)}),this.register(function(t){return new al(t)}),this.register(function(t){return new $c(t)}),this.register(function(t){return new rl(t)}),this.register(function(t){return new tl(t)}),this.register(function(t){return new cl(t)}),this.register(function(t){return new ol(t)}),this.register(function(t){return new Zc(t)}),this.register(function(t){return new dl(t)}),this.register(function(t){return new fl(t)})}load(e,t,n,i){let a=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let l=Pi.extractUrlBase(e);r=Pi.resolveURL(l,this.path)}else r=Pi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Ia(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a,r={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Zu){try{r[ht.KHR_BINARY_GLTF]=new pl(e)}catch(u){i&&i(u);return}a=JSON.parse(r[ht.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new _l(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){let u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case ht.KHR_MATERIALS_UNLIT:r[u]=new Qc;break;case ht.KHR_DRACO_MESH_COMPRESSION:r[u]=new ml(a,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:r[u]=new gl;break;case ht.KHR_MESH_QUANTIZATION:r[u]=new bl;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}};function Yb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Zc=class{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e],l,h=new Ue(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ns(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $s(h),l.distance=u;break;case"spot":l=new Xr(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Qc=class{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){let i=[];e.color=new Ue(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Xt),e.opacity=r[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",a.baseColorTexture,dt))}return Promise.all(i)}},$c=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}},el=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(o,o)}return Promise.all(a)}},tl=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}},nl=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;let r=i.extensions[this.name];if(r.sheenColorFactor!==void 0){let o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Xt)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,dt)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}},il=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}},sl=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;let o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(o[0],o[1],o[2],Xt),Promise.all(a)}},al=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}},rl=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));let o=r.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(o[0],o[1],o[2],Xt),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,dt)),Promise.all(a)}},ol=class{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],r=i.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}},cl=class{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Rn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}},ll=class{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let a=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}},hl=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;let r=a.extensions[t],o=i.images[r.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ul=class{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;let r=a.extensions[t],o=i.images[r.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},dl=class{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){let p=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},fl=class{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Cn.TRIANGLES&&l.mode!==Cn.TRIANGLE_STRIP&&l.mode!==Cn.TRIANGLE_FAN&&l.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],c={};for(let l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let g of u){let b=new nt,m=new L,f=new nn,x=new L(1,1,1),y=new Ks(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,M),c.SCALE&&x.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,b.compose(m,f,x));for(let M in c)if(M==="_COLOR_0"){let w=c[M];y.instanceColor=new es(w.array,w.itemSize,w.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);Ct.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Zu="glTF",Ua=12,Yu={JSON:1313821514,BIN:5130562},pl=class{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ua),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ua,a=new DataView(e,Ua),r=0;for(;r<i;){let o=a.getUint32(r,!0);r+=4;let c=a.getUint32(r,!0);if(r+=4,c===Yu.JSON){let l=new Uint8Array(e,Ua+r,o);this.content=n.decode(l)}else if(c===Yu.BIN){let l=Ua+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ml=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(let h in r){let u=xl[h]||h.toLowerCase();o[u]=r[h]}for(let h in e.attributes){let u=xl[h]||h.toLowerCase();if(r[h]!==void 0){let d=n.accessors[e.attributes[h]],p=ia[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let g in p.attributes){let b=p.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(p)},o,l,Xt,d)})})}},gl=class{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},bl=class{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}},ao=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,i){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,b=g-l,m=-2*p+3*d,f=p-d,x=1-m,y=f-d+u;for(let M=0;M!==o;M++){let w=r[b+M+o],S=r[b+M+c]*h,R=r[g+M+o],O=r[g+M]*h;a[M]=x*w+y*S+m*R+f*O}return a}},jb=new nn,yl=class extends ao{interpolate_(e,t,n,i){let a=super.interpolate_(e,t,n,i);return jb.fromArray(a).normalize().toArray(a),a}},Cn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ia={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ju={9728:Ht,9729:hn,9984:_r,9985:Uc,9986:xa,9987:wi},Ku={33071:yn,33648:Aa,10497:xn},jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Kb={CUBICSPLINE:void 0,LINEAR:Ji,STEP:Bs},Kc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new St({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),s.DefaultMaterial}function is(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Zb(s,e,t){let n=!1,i=!1,a=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(a=!0),n&&i&&a)break}if(!n&&!i&&!a)return Promise.resolve(s);let r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;r.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(a){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),a&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Qb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $b(s){let e,t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jc(t.attributes):e=s.indices+":"+Jc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jc(s.targets[n]);return e}function Jc(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function vl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ey(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var ty=new nt,_l=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,a=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&a<98?this.textureLoader=new Vr(this.options.manager):this.textureLoader=new qr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ia(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return is(a,o,i),Fi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){let r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){let r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),a=(r,o)=>{let c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(let[l,h]of r.children.entries())a(h,o.children[l])};return a(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(a,r){n.load(Pi.resolveURL(t.uri,i.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let r=jc[i.type],o=ia[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new bt(l,r,c))}let a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(r){let o=r[0],c=jc[i.type],l=ia[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(p&&p!==u){let f=Math.floor(d/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,y=t.cache.get(x);y||(b=new l(o,f*p,i.count*p/h),y=new Ys(b,p/h),t.cache.add(x,y)),m=new Qi(y,c,d%p/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new bt(b,c,g);if(i.sparse!==void 0){let f=jc.SCALAR,x=ia[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,w=new x(r[1],y,i.sparse.count*f),S=new l(r[2],M,i.sparse.count*c);o!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized));for(let R=0,O=w.length;R<O;R++){let v=w[R];if(m.setX(v,S[R*c]),c>=2&&m.setY(v,S[R*c+1]),c>=3&&m.setZ(v,S[R*c+2]),c>=4&&m.setW(v,S[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a],o=this.textureLoader;if(r.uri){let c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){let i=this,a=this.json,r=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(a.samplers||{})[r.sampler]||{};return h.magFilter=ju[d.magFilter]||hn,h.minFilter=ju[d.minFilter]||wi,h.wrapS=Ku[d.wrapS]||xn,h.wrapT=Ku[d.wrapT]||xn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let r=i.images[e],o=self.URL||self.webkitURL,c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Qt(b);m.needsUpdate=!0,d(m)}),t.load(Pi.resolveURL(u,a.path),g,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=r.mimeType||ey(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[ht.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=a.associations.get(r);r=a.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new La,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ci,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||a||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return St}loadMaterial(e){let t=this,n=this.json,i=this.extensions,a=n.materials[e],r,o={},c=a.extensions||{},l=[];if(c[ht.KHR_MATERIALS_UNLIT]){let u=i[ht.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{let u=a.pbrMetallicRoughness||{};if(o.color=new Ue(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Xt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Vt);let h=a.alphaMode||Kc.OPAQUE;if(h===Kc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Kc.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Dt&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Xe(1,1),a.normalTexture.scale!==void 0)){let u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&r!==Dt&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Dt){let u=a.emissiveFactor;o.emissive=new Ue().setRGB(u[0],u[1],u[2],Xt)}return a.emissiveTexture!==void 0&&r!==Dt&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,dt)),Promise.all(l).then(function(){let u=new r(o);return a.name&&(u.name=a.name),Fi(u,a),t.associations.set(u,{materials:e}),a.extensions&&is(i,u,a),u})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function a(o){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ju(c,o,t)})}let r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=$b(l),u=i[h];if(u)r.push(u.promise);else{let d;l.extensions&&l.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=Ju(new It,l,t),i[h]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,i=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let c=0,l=r.length;c<l;c++){let h=r[c].material===void 0?Jb(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let b=h[p],m=r[p],f,x=l[p];if(m.mode===Cn.TRIANGLES||m.mode===Cn.TRIANGLE_STRIP||m.mode===Cn.TRIANGLE_FAN||m.mode===void 0)f=a.isSkinnedMesh===!0?new Nr(b,x):new ze(b,x),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Cn.TRIANGLE_STRIP?f.geometry=Yc(f.geometry,Jr):m.mode===Cn.TRIANGLE_FAN&&(f.geometry=Yc(f.geometry,Da));else if(m.mode===Cn.LINES)f=new Js(b,x);else if(m.mode===Cn.LINE_STRIP)f=new Ri(b,x);else if(m.mode===Cn.LINE_LOOP)f=new Or(b,x);else if(m.mode===Cn.POINTS)f=new Br(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Qb(f,a),f.name=t.createUniqueName(a.name||"mesh_"+e),Fi(f,a),m.extensions&&is(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return a.extensions&&is(i,u[0],a),u[0];let d=new Wt;a.extensions&&is(i,d,a),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Eu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ws(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,a=t.joints.length;i<a;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let a=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u){o.push(u);let d=new nt;a!==null&&d.fromArray(a.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],g=i.samplers[p.sampler],b=p.target,m=b.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],g=u[2],b=u[3],m=u[4],f=[];for(let x=0,y=d.length;x<y;x++){let M=d[x],w=p[x],S=g[x],R=b[x],O=m[x];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let v=n._createAnimationTracks(M,w,S,R,O);if(v)for(let T=0;T<v.length;T++)f.push(v[T])}return new Zs(a,void 0,f)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(a){let r=n._getNodeRef(n.meshCache,i.mesh,a);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([a,Promise.all(r),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,ty)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let a=t.nodes[e],r=a.name?i.createUniqueName(a.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(l){return i._getNodeRef(i.cameraCache,a.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new Ca:l.length>1?h=new Wt:l.length===1?h=l[0]:h=new Ct,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=r),Fi(h,a),a.extensions&&is(n,h,a),a.matrix!==void 0){let u=new nt;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,a=new Wt;n.name&&(a.name=i.createUniqueName(n.name)),Fi(a,n),n.extensions&&is(t,a,n);let r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)a.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof fn||d instanceof Qt)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(a),a})}_createAnimationTracks(e,t,n,i,a){let r=[],o=e.name?e.name:e.uuid,c=[];Ii[a.path]===Ii.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ii[a.path]){case Ii.weights:l=hi;break;case Ii.rotation:l=qn;break;case Ii.position:case Ii.scale:l=ui;break;default:switch(n.itemSize){case 1:l=hi;break;case 2:case 3:default:l=ui;break}break}let h=i.interpolation!==void 0?Kb[i.interpolation]:Ji,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let g=new l(c[d]+"."+Ii[a.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),r.push(g)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=vl(t.constructor),i=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)i[a]=t[a]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof qn?yl:ao;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ny(s,e,t){let n=e.attributes,i=new dn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let h=vl(ia[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let a=e.targets;if(a!==void 0){let o=new L,c=new L;for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let b=vl(ia[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let r=new vn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=r}function Ju(s,e,t){let n=e.attributes,i=[];function a(r,o){return t.getDependency("accessor",r).then(function(c){s.setAttribute(o,c)})}for(let r in n){let o=xl[r]||r.toLowerCase();o in s.attributes||i.push(a(n[r],o))}if(e.indices!==void 0&&!s.index){let r=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(r)}return pt.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Fi(s,e),ny(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Zb(s,e.targets,t):s})}var Qu=function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,a,r=WebAssembly.instantiate(o(i),{}).then(function(f){a=f.instance,a.exports.__wasm_call_ctors()});function o(f){for(var x=new Uint8Array(f.length),y=0;y<f.length;++y){var M=f.charCodeAt(y);x[y]=M>96?M-97:M>64?M-39:M+4}for(var w=0,y=0;y<f.length;++y)x[w++]=x[y]<60?n[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,w)}function c(f,x,y,M,w,S){var R=a.exports.sbrk,O=y+3&-4,v=R(O*M),T=R(w.length),U=new Uint8Array(a.exports.memory.buffer);U.set(w,T);var D=f(v,y,M,T,w.length);if(D==0&&S&&S(v,O,M),x.set(U.subarray(v,v+y*M)),R(v-R(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(f){var x={object:new Worker(f),pending:0,requests:{}};return x.object.onmessage=function(y){var M=y.data;x.pending-=M.count,x.requests[M.id][M.action](M.value),delete x.requests[M.id]},x}function g(f){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),y=new Blob([x],{type:"text/javascript"}),M=URL.createObjectURL(y),w=0;w<f;++w)u[w]=p(M);URL.revokeObjectURL(M)}function b(f,x,y,M,w){for(var S=u[0],R=1;R<u.length;++R)u[R].pending<S.pending&&(S=u[R]);return new Promise(function(O,v){var T=new Uint8Array(y),U=d++;S.pending+=f,S.requests[U]={resolve:O,reject:v},S.object.postMessage({id:U,count:f,size:x,source:T,mode:M,filter:w},[T.buffer])})}function m(f){r.then(function(){var x=f.data;try{var y=new Uint8Array(x.count*x.size);c(a.exports[x.mode],y,x.count,x.size,x.source,a.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:y},[y.buffer])}catch(M){self.postMessage({id:x.id,count:x.count,action:"reject",value:M})}})}return{ready:r,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,x,y,M,w){c(a.exports.meshopt_decodeVertexBuffer,f,x,y,M,a.exports[l[w]])},decodeIndexBuffer:function(f,x,y,M){c(a.exports.meshopt_decodeIndexBuffer,f,x,y,M)},decodeIndexSequence:function(f,x,y,M){c(a.exports.meshopt_decodeIndexSequence,f,x,y,M)},decodeGltfBuffer:function(f,x,y,M,w,S){c(a.exports[h[w]],f,x,y,M,a.exports[l[S]])},decodeGltfBufferAsync:function(f,x,y,M,w){return u.length>0?b(f,x,y,h[M],l[w]):r.then(function(){var S=new Uint8Array(f*x);return c(a.exports[h[M]],S,f,x,y,a.exports[l[w]]),S})}}}();function $u(s){let e=new Map,t=new Map,n=s.clone();return ed(s,n,function(i,a){e.set(a,i),t.set(i,a)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let a=i,r=e.get(i),o=r.skeleton.bones;a.skeleton=r.skeleton.clone(),a.bindMatrix.copy(r.bindMatrix),a.skeleton.bones=o.map(function(c){return t.get(c)}),a.bind(a.skeleton,a.bindMatrix)}),n}function ed(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)ed(s.children[n],e.children[n],t)}var Kn=null;async function ad(s){if(Kn)return Kn;let e=new so;e.setMeshoptDecoder(Qu);let t=await new Promise((r,o)=>{s instanceof ArrayBuffer?e.parse(s,"",r,o):e.load(s,r,void 0,o)}),n=r=>t.animations.find(o=>o.name===r);t.scene.updateMatrixWorld(!0);let i=new dn;t.scene.traverse(r=>{if(r.isSkinnedMesh&&!r.geometry.attributes.bind){r.skeleton.update();let o=r.geometry.attributes.position,c=new Float32Array(o.count*3),l=new L;for(let h=0;h<o.count;h++)l.fromBufferAttribute(o,h),r.applyBoneTransform(h,l),l.applyMatrix4(r.matrixWorld),c[h*3]=l.x,c[h*3+1]=l.y,c[h*3+2]=l.z,i.expandByPoint(l);r.geometry.setAttribute("bind",new bt(c,3))}});let a=1.806/Math.max(.01,i.max.y-i.min.y);return t.scene.traverse(r=>{if(r.isSkinnedMesh){let o=r.geometry.attributes.bind.array;for(let c=0;c<o.length;c+=3)o[c]*=a,o[c+1]=(o[c+1]-i.min.y)*a,o[c+2]*=a}}),typeof window<"u"&&(window.__kutu=[i.min.toArray(),i.max.toArray()]),Kn={sahne:t.scene,kos:n("run"),dur:n("idle"),yuru:n("walk")},Kn}var td=["#E8B08A","#C68C64","#8A5838","#F0C6A2","#B07246","#6E4128"],nd=["#20160f","#121212","#4a321e","#6e4a28","#0b0b0b","#8a6a3a"],pi=s=>new Ue(s);function sy(s){let e=new St({roughness:.62,metalness:0}),t={uF:{value:pi(s.f)},uF2:{value:pi(s.cz||s.f)},uCiz:{value:s.cz?1:0},uS:{value:pi(s.s)},uC:{value:pi(s.c)},uT:{value:pi(s.ten)},uH:{value:pi(s.sac)},uK:{value:pi(s.krampon||"#151515")},uE:{value:pi(s.eldiven||s.ten)},uKol:{value:s.uzunKol?1:0}};return e.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 bind; varying vec3 vB;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vB = bind;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vB; uniform vec3 uF,uF2,uS,uC,uT,uH,uK,uE; uniform float uCiz,uKol;
vec3 bolge(){
  float y = vB.y, ax = abs(vB.x), z = vB.z;
  // kollar (T-poz: yatay)
  if(ax > 0.2 && y > 1.2){
    if(ax > 0.74) return uE;                      // el / eldiven
    if(ax < 0.42 || uKol > 0.5) return mix(uF, uF2, uCiz * step(0.5, fract(vB.x * 9.0)));
    return uT;
  }
  if(y > 1.56){ if(y > 1.72 || (y > 1.6 && z < 0.035)) return uH; return uT; } // sa\xE7 / y\xFCz
  if(y > 1.43) return uT;                          // boyun
  if(y > 0.93){                                    // g\xF6vde
    float st = uCiz * step(0.5, fract(vB.x * 9.0));
    float yaka = smoothstep(1.405, 1.42, y);
    return mix(mix(uF, uF2, st), uF2, yaka * 0.6);
  }
  if(y > 0.69) return uS;                          // \u015Fort
  if(y > 0.5) return uT;                           // diz \xFCst\xFC
  if(y > 0.075) return uC;                         // tozluk
  return uK;                                       // krampon
}`).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( bolge(), opacity );")},e.customProgramCacheKey=()=>"forma",e}function ay(s,e){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d");n.fillStyle=e,n.font="900 44px system-ui,sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText(String(s),32,35);let i=new sn(t);return i.colorSpace=dt,i}var ry=s=>{let e=pi(s);return e.r*.3+e.g*.59+e.b*.11>.6},ro={hazir:{RightUpLeg:[-.15,0,0],LeftUpLeg:[-.15,0,0],RightLeg:[.35,0,0],LeftLeg:[.35,0,0],Spine:[.15,0,0]},vurGeri:{RightUpLeg:[.85,0,.1],RightLeg:[1.7,0,0],LeftUpLeg:[-.35,0,0],LeftLeg:[.55,0,0],Spine:[-.15,.15,0],Spine1:[0,.1,0],LeftArm:[0,0,1.15],RightArm:[0,0,-.5],RightFoot:[.5,0,0],kok:{rx:-.1,ry:-.38,y:-.06}},vurInis:{RightUpLeg:[-.4,0,0],RightLeg:[.5,0,0],LeftUpLeg:[.3,0,0],LeftLeg:[.7,0,0],Spine:[.2,0,0],LeftArm:[0,0,.4],RightArm:[0,0,-.2],kok:{y:-.05,ry:.25}},vurAn:{RightUpLeg:[-1.1,0,0],RightLeg:[.12,0,0],LeftUpLeg:[-.25,0,0],LeftLeg:[.45,0,0],Spine:[.32,-.1,0],Spine1:[.1,-.1,0],LeftArm:[0,0,1],RightArm:[0,0,-.2],RightFoot:[.75,0,0],kok:{rx:.14,ry:.18,y:-.04}},vurSon:{RightUpLeg:[-1.7,0,0],RightLeg:[.3,0,0],LeftUpLeg:[.1,0,0],LeftLeg:[.6,0,0],Spine:[.1,-.15,0],LeftArm:[0,0,.8],RightArm:[0,0,-.35],RightFoot:[.6,0,0],LeftFoot:[.5,0,0],kok:{y:.14,ry:.35,rx:-.05}},pasGeri:{RightUpLeg:[.45,0,-.25],RightLeg:[.9,0,0],Spine:[.05,0,0],LeftArm:[0,0,-.9],RightArm:[0,0,.95]},pasAn:{RightUpLeg:[-.65,0,-.35],RightLeg:[.15,0,0],Spine:[.22,0,0],LeftArm:[0,0,-.8],RightArm:[0,0,1],kok:{rx:.06}},kafaHaz:{RightUpLeg:[-.3,0,0],LeftUpLeg:[-.3,0,0],RightLeg:[.9,0,0],LeftLeg:[.9,0,0],Spine:[.25,0,0],LeftArm:[0,0,-.9],RightArm:[0,0,.9],kok:{y:-.15}},kafaHava:{RightUpLeg:[.1,0,0],LeftUpLeg:[-.5,0,0],RightLeg:[.7,0,0],LeftLeg:[1,0,0],Spine:[-.35,0,0],Spine1:[-.15,0,0],Neck:[-.35,0,0],LeftArm:[0,0,.1],RightArm:[0,0,-.1],kok:{y:.55}},kafaVur:{RightUpLeg:[.15,0,0],LeftUpLeg:[-.35,0,0],RightLeg:[.9,0,0],LeftLeg:[.8,0,0],Spine:[.35,0,0],Spine1:[.2,0,0],Neck:[.5,0,0],LeftArm:[0,0,-.2],RightArm:[0,0,.2],kok:{y:.6,rx:.1}},balikUc:{RightUpLeg:[.35,0,0],LeftUpLeg:[.3,0,0],RightLeg:[.2,0,0],LeftLeg:[.3,0,0],Spine:[-.25,0,0],Neck:[-.6,0,0],LeftArm:[0,0,-.6],RightArm:[0,0,.6],kok:{y:.75,rx:1.35,ileri:1}},balikYer:{RightUpLeg:[.2,0,0],LeftUpLeg:[.2,0,0],RightLeg:[.6,0,0],LeftLeg:[.6,0,0],Spine:[-.35,0,0],Neck:[-.5,0,0],LeftArm:[0,0,-.2],RightArm:[0,0,.2],kok:{y:.18,rx:1.5,ileri:2}},voleHaz:{RightUpLeg:[.2,0,-.8],RightLeg:[1.3,0,0],LeftLeg:[.4,0,0],Spine:[0,0,.3],LeftArm:[0,0,.1],RightArm:[0,0,.2],kok:{rz:.35,ry:-.5}},voleAn:{RightUpLeg:[-.7,0,-1.35],RightLeg:[.15,0,0],LeftLeg:[.35,0,0],Spine:[.1,0,.4],LeftArm:[0,0,.2],RightArm:[0,0,.1],RightFoot:[.6,0,0],kok:{rz:.6,ry:-.25,y:.08}},rovHaz:{RightUpLeg:[-.4,0,0],LeftUpLeg:[-.6,0,0],RightLeg:[.8,0,0],LeftLeg:[1,0,0],Spine:[-.2,0,0],LeftArm:[0,0,.2],RightArm:[0,0,-.2],kok:{y:.3,rx:-.5}},rovSalla:{LeftUpLeg:[-1.9,0,0],LeftLeg:[.2,0,0],RightUpLeg:[-.3,0,0],RightLeg:[1.2,0,0],Spine:[.3,0,0],Neck:[.45,0,0],LeftArm:[0,0,-.2],RightArm:[0,0,.2],kok:{y:1.05,rx:-1.6}},rovVur:{RightUpLeg:[-2.3,0,0],RightLeg:[.05,0,0],LeftUpLeg:[.1,0,0],LeftLeg:[.6,0,0],Spine:[.35,0,0],Neck:[.5,0,0],RightFoot:[.6,0,0],LeftArm:[0,0,-.1],RightArm:[0,0,.1],kok:{y:1.15,rx:-2.35}},rovDus:{RightUpLeg:[-.9,0,0],LeftUpLeg:[-.7,0,0],RightLeg:[.5,0,0],LeftLeg:[.6,0,0],Spine:[.15,0,0],LeftArm:[0,0,.4],RightArm:[0,0,-.4],kok:{y:.18,rx:-1.5}},kaleHaz:{RightUpLeg:[-.5,0,-.28],LeftUpLeg:[-.5,0,.28],RightLeg:[.9,0,0],LeftLeg:[.9,0,0],Spine:[.38,0,0],LeftArm:[0,0,.55],RightArm:[0,0,-.55],LeftForeArm:[0,0,.4],RightForeArm:[0,0,-.4],kok:{y:-.18}},kaleDal:{RightUpLeg:[-.2,0,-.15],LeftUpLeg:[.05,0,.25],RightLeg:[.35,0,0],LeftLeg:[.15,0,0],Spine:[-.05,0,.1],Spine1:[0,0,.1],Neck:[-.2,0,0],LeftArm:[0,.2,2.75],RightArm:[0,-.2,-2.75],LeftForeArm:[0,0,.1],RightForeArm:[0,0,-.1],kok:{y:.75,rz:1.35,yan:.55,rx:.1}},kaleYer:{RightUpLeg:[-.5,0,-.1],LeftUpLeg:[-.3,0,.2],RightLeg:[.9,0,0],LeftLeg:[.6,0,0],Spine:[.1,0,.15],LeftArm:[0,.2,2.6],RightArm:[0,-.2,-2.3],kok:{y:.15,rz:1.5,yan:.75}},kaleSicra:{RightUpLeg:[-.7,0,-.35],LeftUpLeg:[-.6,0,.35],RightLeg:[1.3,0,0],LeftLeg:[1.2,0,0],Spine:[.3,0,.15],LeftArm:[0,0,1.4],RightArm:[0,0,-1.4],kok:{y:-.3,rz:.3,yan:.1}},kontrol:{RightUpLeg:[-.55,0,-.35],RightLeg:[.6,0,0],LeftLeg:[.35,0,0],Spine:[.25,0,0],Neck:[.35,0,0],LeftArm:[0,0,-.9],RightArm:[0,0,.9],RightFoot:[-.3,0,0]},sevKos:{LeftArm:[0,0,-.15],RightArm:[0,0,.15],Spine:[-.15,0,0],Neck:[-.3,0,0]},sevKay:{RightUpLeg:[-.25,0,-.3],LeftUpLeg:[-.25,0,.3],RightLeg:[2.1,0,0],LeftLeg:[2.1,0,0],Spine:[-.45,0,0],Spine1:[-.2,0,0],Neck:[-.55,0,0],LeftArm:[0,0,.85],RightArm:[0,0,-.85],kok:{y:-.42,rx:-.25}},sevZipla:{RightUpLeg:[-.4,0,0],LeftUpLeg:[.2,0,0],RightLeg:[1.2,0,0],LeftLeg:[.5,0,0],Spine:[-.25,0,0],Neck:[-.4,0,0],LeftArm:[0,0,1.3],RightArm:[0,0,-1.3],kok:{y:.45}}},oy={vur:{s:.85,k:[[0,"hazir"],[.16,"vurGeri"],[.27,"vurAn"],[.43,"vurSon"],[.62,"vurInis"]]},pas:{s:.5,k:[[0,"hazir"],[.13,"pasGeri"],[.24,"pasAn"],[.36,"pasAn"]]},kafa:{s:.85,k:[[0,"kafaHaz"],[.18,"kafaHava"],[.36,"kafaVur"],[.62,"hazir"]]},balik:{s:1.25,k:[[0,"kafaHaz"],[.2,"balikUc"],[.6,"balikYer"],[1.05,"balikYer"]]},vole:{s:.8,k:[[0,"hazir"],[.2,"voleHaz"],[.36,"voleAn"],[.58,"voleAn"]]},rovasata:{s:1.5,k:[[0,"hazir"],[.18,"rovHaz"],[.42,"rovSalla"],[.56,"rovVur"],[.95,"rovDus"],[1.3,"rovDus"]]},dal:{s:2.2,k:[[0,"kaleHaz"],[.1,"kaleSicra"],[.36,"kaleDal"],[.62,"kaleDal"],[.95,"kaleYer"],[2,"kaleYer"]]},kontrol:{s:.5,k:[[0,"hazir"],[.12,"kontrol"],[.3,"kontrol"]]},kay:{s:3.2,k:[[0,"sevKos"],[.5,"sevKay"],[2.9,"sevKay"]]},zipla:{s:2.2,k:[[0,"sevZipla"],[.35,"sevKos"],[.7,"sevZipla"],[1.05,"sevKos"],[1.4,"sevZipla"],[1.9,"sevKos"]]}},cy=["Hips","Spine","Spine1","Spine2","Neck","Head","LeftArm","RightArm","LeftForeArm","RightForeArm","LeftUpLeg","RightUpLeg","LeftLeg","RightLeg","LeftFoot","RightFoot"],ly=s=>s*s*(3-2*s),id=new nn,sd=new Gs;function hy(s,e){let t=s.k,n=t[0],i=t[0];for(let d=0;d<t.length;d++)e>=t[d][0]&&(n=t[d],i=t[d+1]||t[d]);let a=i===n?0:ly(Math.min(1,(e-n[0])/(i[0]-n[0]))),r=ro[n[1]],o=ro[i[1]],c={},l={};for(let d of new Set([...Object.keys(r),...Object.keys(o)])){if(d==="kok")continue;let p=r[d]||[0,0,0],g=o[d]||[0,0,0];c[d]=[p[0]+(g[0]-p[0])*a,p[1]+(g[1]-p[1])*a,p[2]+(g[2]-p[2])*a]}let h=r.kok||{},u=o.kok||{};for(let d of["y","rx","rz","ry","ileri","yan"])l[d]=(h[d]||0)+((u[d]||0)-(h[d]||0))*a;return{o:c,kok:l}}var sa=class{constructor(e,t,n,i){if(!Kn)throw new Error("oyuncu modeli y\xFCklenmedi");this.kaleci=!!n;let a=this.g=new Wt;e.add(a),this.kok=new Wt,this.kok.position.y=.98,a.add(this.kok);let r=this.m=$u(Kn.sahne);r.position.y=-.98,this.kok.add(r);let o=td[Math.random()*td.length|0],c=nd[Math.random()*nd.length|0],l=sy(n?{f:t.k,s:"#1d1d1d",c:t.k,ten:o,sac:c,eldiven:"#F2C230",uzunKol:!0}:{f:t.f,cz:t.cz,s:t.s,c:t.c,ten:o,sac:c});r.traverse(d=>{d.isMesh&&(d.material=l,d.castShadow=!0,d.receiveShadow=!1,d.frustumCulled=!1)}),this.b={};for(let d of cy)this.b[d]=r.getObjectByName("mixamorig"+d);r.updateMatrixWorld(!0);let h=n?t.k:t.f,u=new ze(new Mn(.26,.26),new Dt({map:ay(n?1:i||2+(Math.random()*10|0),ry(h)?"#1d1d1d":"#ffffff"),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));u.position.set(0,1.24,-.125),u.rotation.y=Math.PI,r.add(u),r.updateMatrixWorld(!0),this.b.Spine2.attach(u),this.mx=new Yr(r),this.aKos=this.mx.clipAction(Kn.kos),this.aDur=this.mx.clipAction(Kn.dur),this.aKos.play(),this.aDur.play(),this.aKos.setEffectiveWeight(0),this.aDur.setEffectiveWeight(1),this.aKos.time=Math.random()*Kn.kos.duration,this.aDur.time=Math.random()*Kn.dur.duration,this.yon=0,this.h=null,this.ht=0,this.agirlik=0,this.sevinc=0,this.dalis=0,this.dalYon=0,this.hiz=0,this.isaret=null}oynat(e,t){this.h=oy[e],this.ht=t||0,this.hAd=e,this.donuk=!1}temas(e){if(e==="surus")return .02;let t={vur:.27,pas:.24,kafa:.36,balik:.32,vole:.36,rovasata:.56}[e]||.25;return Math.max(.05,t-(this.donuk?this.donukT:0))}vur(){this.oynat("vur")}pas(){this.oynat("pas")}kafa(){this.oynat("kafa")}balik(){this.oynat("balik")}vole(){this.oynat("vole")}rovasata(){this.oynat("rovasata")}sev(e){this.oynat(e||"kay")}dal(e,t){this.dalYon=e,this.dalYK=t==null?1:Math.max(.45,Math.min(1.7,.35+t*.55)),this.oynat("dal")}goster(e){this.g.visible=e}guncelle(e,t,n,i,a,r){let o=Math.hypot(i,a);this.hiz+=(o-this.hiz)*Math.min(1,e*8),this.g.position.copy(qe(t,n,0));let c=this.yon;o>.4?c=Math.atan2(i,a):r&&(c=Math.atan2(r[0]-t,r[1]-n));let l=c-this.yon;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;(!this.h||this.hAd==="kay"||this.hAd==="zipla")&&(this.yon+=l*Math.min(1,e*9)),this.g.rotation.y=Math.PI-this.yon;let h=Math.min(1,this.hiz/2.2);this.aKos.setEffectiveWeight(h),this.aDur.setEffectiveWeight(1-h),this.aKos.setEffectiveTimeScale(Math.max(.55,Math.min(1.5,this.hiz/6.2))),this.mx.update(e);let u=this.kok;if(u.position.set(0,.98,0),u.rotation.set(0,0,0),this.kaleci&&!this.h&&(this.uygula(ro.kaleHaz,null,.85),this.kokUygula(ro.kaleHaz.kok,.85)),this.h){this.donuk?this.ht=this.donukT+Math.sin(performance.now()/260)*.012:this.ht+=e;let d=this.h.s;if(this.ht>=d)this.h=null;else{let p=Math.min(1,this.ht/.06)*Math.min(1,(d-this.ht)/.22),{o:g,kok:b}=hy(this.h,this.ht);this.uygula(g,null,p),this.kokUygula(b,p)}}this.sevinc>0&&!this.h&&this.oynat(Math.random()<.5?"kay":"zipla")}uygula(e,t,n){let i=this.ayna&&this.h&&this.hAd!=="dal";for(let a in e){if(a==="kok")continue;let r=i?a.startsWith("Left")?"Right"+a.slice(4):a.startsWith("Right")?"Left"+a.slice(5):a:a,o=this.b[r];if(!o)continue;let c=e[a],l=i?-1:1;sd.set(c[0]*n,c[1]*n*l,c[2]*n*l),id.setFromEuler(sd),o.quaternion.multiply(id)}}kokUygula(e,t){if(!e)return;let n=this.kok,i=this.hAd==="dal"&&this.dalYK||1;n.position.y=.98+(e.y||0)*t*(e.y>0?i:1),n.position.z=(e.ileri||0)*t,n.position.x=(e.yan||0)*t*(this.dalYon||0)*-1,n.rotation.x=(e.rx||0)*t,n.rotation.z=(e.rz||0)*t*(this.hAd==="dal"?-(this.dalYon||1)*Math.max(.7,1.12-.18*i):1);let a=this.ayna&&this.hAd!=="dal"?-1:1;n.rotation.y=(e.ry||0)*t*a,this.hAd!=="dal"&&(n.rotation.z*=a)}};var oo=class{constructor(){this.ac=null,this.acik=!0;try{this.acik=localStorage.getItem("eg-ses")!=="0"}catch{}}baslat(){if(this.ac){this.ac.state==="suspended"&&this.ac.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ac=new e;this.ana=t.createGain(),this.ana.gain.value=this.acik?.9:0,this.ana.connect(t.destination);let n=t.sampleRate*3,i=t.createBuffer(1,n,t.sampleRate),a=i.getChannelData(0),r=0;for(let b=0;b<n;b++){let m=Math.random()*2-1;r=(r+.02*m)/1.02,a[b]=r*3.5}this.kahve=i;let o=t.createBuffer(1,t.sampleRate,t.sampleRate),c=o.getChannelData(0);for(let b=0;b<c.length;b++)c[b]=Math.random()*2-1;this.beyaz=o;let l=t.createBufferSource();l.buffer=i,l.loop=!0;let h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=520,h.Q.value=.6,this.kalabalik=t.createGain(),this.kalabalik.gain.value=.22;let u=t.createOscillator(),d=t.createGain();u.frequency.value=.13,d.gain.value=.06,u.connect(d),d.connect(this.kalabalik.gain),u.start(),l.connect(h),h.connect(this.kalabalik),this.kalabalik.connect(this.ana),l.start();let p=t.createBufferSource();p.buffer=i,p.loop=!0,p.playbackRate.value=1.6;let g=t.createBiquadFilter();g.type="bandpass",g.frequency.value=900,g.Q.value=.8,this.cosku=t.createGain(),this.cosku.gain.value=0,p.connect(g),g.connect(this.cosku),this.cosku.connect(this.ana),p.start()}ac_kapa(e){this.acik=e;try{localStorage.setItem("eg-ses",e?"1":"0")}catch{}this.ana&&this.ana.gain.setTargetAtTime(e?.9:0,this.ac.currentTime,.05)}vurus(e){let t=this.ac;if(!t)return;let n=t.currentTime,i=t.createOscillator(),a=t.createGain();i.type="sine",i.frequency.setValueAtTime(150,n),i.frequency.exponentialRampToValueAtTime(48,n+.12),a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.5+e*.5,n+.006),a.gain.exponentialRampToValueAtTime(1e-4,n+.16),i.connect(a),a.connect(this.ana),i.start(n),i.stop(n+.2),this.patla(.05,2400,.25+e*.2)}patla(e,t,n){let i=this.ac;if(!i)return;let a=i.currentTime,r=i.createBufferSource();r.buffer=this.beyaz;let o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=t,o.Q.value=.9;let c=i.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(1e-4,a+e),r.connect(o),o.connect(c),c.connect(this.ana),r.start(a),r.stop(a+e+.02)}dokunus(){this.patla(.06,900,.18)}file(){this.patla(.5,3200,.35),this.patla(.25,700,.3)}direk(){let e=this.ac;if(!e)return;let t=e.currentTime;[880,1320,2010].forEach((n,i)=>{let a=e.createOscillator(),r=e.createGain();a.frequency.value=n,r.gain.setValueAtTime(.18/(i+1),t),r.gain.exponentialRampToValueAtTime(1e-4,t+.9),a.connect(r),r.connect(this.ana),a.start(t),a.stop(t+1)})}duduk(e){let t=this.ac;if(!t)return;let n=t.currentTime,i=t.createOscillator(),a=t.createGain(),r=t.createOscillator(),o=t.createGain();i.frequency.value=2850,r.frequency.value=38,o.gain.value=140,r.connect(o),o.connect(i.frequency);let c=e?.9:.35;a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.22,n+.03),a.gain.setValueAtTime(.22,n+c),a.gain.exponentialRampToValueAtTime(1e-4,n+c+.08),i.connect(a),a.connect(this.ana),i.start(n),r.start(n),i.stop(n+c+.1),r.stop(n+c+.1)}gol(){if(!this.ac)return;let e=this.ac.currentTime;this.cosku.gain.cancelScheduledValues(e),this.cosku.gain.setValueAtTime(this.cosku.gain.value,e),this.cosku.gain.linearRampToValueAtTime(.75,e+.4),this.cosku.gain.setTargetAtTime(0,e+3.2,1.2),this.kalabalik.gain.setTargetAtTime(.38,e,.2),this.kalabalik.gain.setTargetAtTime(.22,e+4,1.5)}of(){if(!this.ac)return;let e=this.ac.currentTime;this.cosku.gain.cancelScheduledValues(e),this.cosku.gain.setValueAtTime(0,e),this.cosku.gain.linearRampToValueAtTime(.3,e+.25),this.cosku.gain.setTargetAtTime(0,e+.6,.4)}durdur(){this.ac&&this.ac.suspend()}};var uy=`
.egx{position:absolute;inset:0;z-index:40;background:#0b1a10;color:#8ccc9c;font-family:var(--govde,system-ui,sans-serif);overflow:hidden;touch-action:none;user-select:none;-webkit-user-select:none}
.egx canvas{position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none}
.egx-vin{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 45%,rgba(0,0,0,0) 55%,rgba(0,0,0,.38) 100%)}
.egx button{font:inherit;color:inherit;border:0;background:none;cursor:pointer}
.egx-ust{position:absolute;left:0;right:0;top:0;padding:calc(10px + env(safe-area-inset-top,0px)) 10px 0;display:flex;align-items:flex-start;gap:6px;pointer-events:none}
.egx-ust>*{pointer-events:auto}
.egx-yuv{width:42px;height:42px;border-radius:21px;background:rgba(10,24,14,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:grid;place-items:center;color:#8ccc9c;font-size:24px;line-height:1;flex:none}
.egx-yuv svg{width:21px;height:21px}
.egx-baslik{flex:1;min-width:0;text-align:center;background:rgba(10,24,14,.72);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-radius:21px;padding:5px 10px 7px;line-height:1.15}
.egx-baslik b{display:block;font-family:var(--kalin,system-ui);font-weight:400;font-size:18px;color:#fff}
.egx-baslik small{display:block;font-size:11.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.egx-adim{display:flex;gap:4px;justify-content:center;margin-top:4px}
.egx-adim i{width:16px;height:4px;border-radius:2px;background:rgba(140,204,156,.3)}
.egx-adim i.ok{background:#8ccc9c}.egx-adim i.su{background:#F7C948}
.egx-ipucu{position:absolute;left:12px;right:12px;bottom:calc(16px + env(safe-area-inset-bottom,0px));background:rgba(10,24,14,.8);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-radius:18px;padding:10px 14px;text-align:center;pointer-events:none;transition:opacity .3s}
.egx-ipucu b{display:block;color:#fff;font-size:14.5px;line-height:1.3}
.egx-ipucu span{display:block;font-size:12px;margin-top:3px}
.egx-not{position:absolute;left:0;right:0;top:34%;text-align:center;font-family:var(--kalin,system-ui);font-size:36px;font-style:italic;color:#fff;text-shadow:0 3px 0 rgba(0,0,0,.35),0 6px 24px rgba(0,0,0,.45);pointer-events:none;opacity:0;transform:scale(.6) rotate(-4deg);transition:opacity .2s,transform .4s cubic-bezier(.2,1.8,.4,1);letter-spacing:.02em}
.egx-not.var{opacity:1;transform:rotate(-4deg)}
.egx-not.m{color:#F7C948}.egx-not.i{color:#8ccc9c}
.egx-not small{display:block;font-family:var(--govde,system-ui);font-style:normal;font-size:14px;font-weight:700;color:#fff;margin-top:6px}
.egx-halka{position:absolute;width:64px;height:64px;margin:-32px 0 0 -32px;border-radius:50%;pointer-events:none;display:none;background:conic-gradient(var(--hr,#FF8A1E) calc(var(--y,0)*360deg),rgba(255,255,255,.22) 0);-webkit-mask:radial-gradient(circle,transparent 24px,#000 25px);mask:radial-gradient(circle,transparent 24px,#000 25px);filter:drop-shadow(0 2px 6px rgba(0,0,0,.4))}
.egx-etiket{position:absolute;padding:5px 11px;border-radius:12px;background:rgba(10,24,14,.85);color:#fff;font-size:13px;font-weight:700;pointer-events:none;transform:translate(-50%,-150%);display:none;white-space:nowrap}
.egx-bant{position:absolute;left:10px;top:calc(10px + env(safe-area-inset-top,0px));display:none;align-items:stretch;border-radius:6px;overflow:hidden;box-shadow:0 6px 20px rgba(0,0,0,.4);font-weight:800;font-size:13px;letter-spacing:.04em}
.egx-bant span{padding:6px 9px;color:#fff;display:flex;align-items:center;gap:6px}
.egx-bant .lg{background:#2c943c}.egx-bant .t{background:#0b1a10}.egx-bant .s{background:#F7C948;color:#142c1c}
.egx-bant i{width:10px;height:10px;border-radius:2px;display:inline-block}
.egx-tekrar{position:absolute;right:10px;top:calc(12px + env(safe-area-inset-top,0px));background:#C8102E;color:#fff;font-weight:800;font-size:11px;letter-spacing:.1em;padding:5px 9px;border-radius:5px;display:none}
.egx-bilet{position:absolute;left:50%;bottom:calc(92px + env(safe-area-inset-bottom,0px));width:min(86%,330px);transform:translate(-50%,30px);opacity:0;transition:transform .5s cubic-bezier(.2,1.2,.3,1),opacity .4s;background:#f4f1e6;color:#1a2a1f;border-radius:14px;box-shadow:0 18px 40px rgba(0,0,0,.45);overflow:hidden;pointer-events:none}
.egx-bilet.var{transform:translate(-50%,0);opacity:1}
.egx-bilet .ust{display:flex;justify-content:space-between;align-items:center;padding:7px 12px;background:#142c1c;color:#8ccc9c;font-size:11px;font-weight:700;letter-spacing:.06em}
.egx-bilet .tak{display:flex;align-items:center;justify-content:center;gap:10px;padding:12px 10px 4px;font-family:var(--kalin,system-ui);font-size:21px;line-height:1.1;text-align:center}
.egx-bilet .tak i{width:26px;height:18px;border-radius:3px;flex:none;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}
.egx-bilet .tur{text-align:center;font-weight:700;font-size:13px;padding:0 10px 10px}
.egx-bilet .alt{display:flex;justify-content:space-between;border-top:2px dashed rgba(20,44,28,.25);padding:8px 12px;font-size:12px;font-weight:700}
.egx-ekran{position:absolute;inset:0;display:flex;flex-direction:column;overflow-y:auto;-webkit-overflow-scrolling:touch;touch-action:pan-y}
.egx-giris{align-items:center;justify-content:flex-end;padding:0 24px calc(44px + env(safe-area-inset-bottom,0px));background:linear-gradient(to bottom,rgba(11,26,16,0) 28%,rgba(11,26,16,.94) 70%)}
.egx-logo{font-family:var(--kalin,system-ui);font-size:clamp(48px,15vw,66px);line-height:.92;color:#fff;text-align:center;text-shadow:0 6px 30px rgba(0,0,0,.5)}
.egx-logo span{display:block;color:#8ccc9c}
.egx-alt{text-align:center;font-size:15px;line-height:1.45;margin:14px 0 20px;max-width:320px}
.egx-buyuk{width:min(100%,320px);border-radius:999px;background:#8ccc9c!important;color:#142c1c!important;font-weight:800;font-size:18px;padding:16px;box-shadow:0 10px 30px rgba(0,0,0,.35)}
.egx-ikinci{width:min(100%,320px);border-radius:999px;background:rgba(140,204,156,.14)!important;font-weight:700;font-size:15px;padding:13px;margin-top:10px}
.egx-toplam{margin-top:16px;font-size:14px;font-weight:700}
.egx-toplam i{font-style:normal;color:#F7C948}
.egx-secim{background:#0b1a10f0;padding:calc(64px + env(safe-area-inset-top,0px)) 0 calc(30px + env(safe-area-inset-bottom,0px))}
.egx-secim h1{font-family:var(--kalin,system-ui);font-weight:400;font-size:34px;color:#fff;text-align:center;margin:0 0 4px}
.egx-secim>p{text-align:center;margin:0 0 12px;font-size:13.5px}
.egx-mod{display:flex;margin:0 16px 12px;background:#1c3a25;border-radius:999px;padding:4px;flex:none}
.egx-mod button{flex:1;border-radius:999px;padding:9px;font-weight:800;font-size:14px}
.egx-mod button.sec{background:#8ccc9c!important;color:#142c1c!important}
.egx-donem{display:flex;gap:8px;overflow-x:auto;padding:0 16px 14px;scrollbar-width:none;flex:none}
.egx-donem::-webkit-scrollbar{display:none}
.egx-donem button{flex:none;border-radius:999px;padding:8px 14px;background:#1c3a25!important;font-weight:700;font-size:13.5px;white-space:nowrap}
.egx-donem button.sec{background:#F7C948!important;color:#142c1c!important}
.egx-kartlar{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 14px}
.egx-kart{position:relative;border-radius:16px;overflow:hidden;background:#f4f1e6!important;color:#1a2a1f!important;text-align:left;padding:0;display:flex;flex-direction:column;box-shadow:0 8px 20px rgba(0,0,0,.25)}
.egx-kart .ust{display:flex;justify-content:space-between;align-items:center;padding:6px 10px;background:#142c1c;color:#8ccc9c;font-size:10.5px;font-weight:800;letter-spacing:.05em}
.egx-kart .tk{display:flex;align-items:center;gap:6px;padding:10px 10px 2px}
.egx-kart .tk i{width:20px;height:14px;border-radius:2px;flex:none;box-shadow:inset 0 0 0 1px rgba(0,0,0,.15)}
.egx-kart .tk b{font-family:var(--kalin,system-ui);font-weight:400;font-size:24px;line-height:1}
.egx-kart .ic{padding:4px 10px 10px;display:flex;flex-direction:column;gap:2px;flex:1}
.egx-kart .ic strong{font-size:13.5px;font-weight:800;line-height:1.2}
.egx-kart .ic small{font-size:11px;line-height:1.3;opacity:.75}
.egx-kart .yl{margin-top:auto;padding-top:6px;font-size:16px;letter-spacing:1px;border-top:2px dashed rgba(20,44,28,.2)}
.egx-yl i{font-style:normal;color:rgba(20,44,28,.22)}.egx-yl i.d{color:#E2A21A}
.egx-gazete{position:absolute;left:50%;bottom:calc(14px + env(safe-area-inset-bottom,0px));width:min(92%,360px);transform:translate(-50%,120%);transition:transform .6s cubic-bezier(.2,1.1,.3,1);background:#f4f1e6;color:#1a2a1f;border-radius:10px;box-shadow:0 24px 60px rgba(0,0,0,.55);padding:12px 14px 12px;rotate:-1.2deg}
.egx-gazete.var{transform:translate(-50%,0)}
.egx-gazete .mast{display:flex;align-items:center;justify-content:space-between;border-bottom:3px double #1a2a1f;padding-bottom:6px}
.egx-gazete .mast b{background:#C8102E;color:#fff;font-family:var(--kalin,system-ui);font-weight:400;font-size:17px;padding:2px 8px;border-radius:3px}
.egx-gazete .mast span{font-size:22px;letter-spacing:2px}
.egx-gazete h2{font-family:var(--kalin,system-ui);font-weight:400;font-size:30px;line-height:1;margin:8px 0 4px;text-transform:uppercase}
.egx-gazete p{margin:0 0 6px;font-size:12.5px;line-height:1.35;font-family:Georgia,serif}
.egx-gazete .pn{display:flex;gap:6px;flex-wrap:wrap;margin:4px 0 8px}
.egx-gazete .pn span{font-size:11px;font-weight:800;background:#142c1c;color:#8ccc9c;border-radius:6px;padding:3px 7px}
.egx-gazete .bt{display:flex;gap:8px}
.egx-gazete .bt button{flex:1;border-radius:10px;background:#142c1c!important;color:#8ccc9c!important;font-weight:800;font-size:14px;padding:11px 6px}
.egx-gazete .bt button.ana{background:#2c943c!important;color:#fff!important}
.egx-sonuc{align-items:center;justify-content:center;background:rgba(6,14,9,.5);padding:24px}
.egx-kutu{width:min(100%,340px);background:#1c3a25;border-radius:28px;padding:22px 20px 16px;text-align:center;box-shadow:0 30px 70px rgba(0,0,0,.5)}
.egx-kutu h2{font-family:var(--kalin,system-ui);font-weight:400;font-size:30px;margin:0;color:#fff;line-height:1.05}
.egx-kutu .yil{font-weight:700;margin:8px 0 4px}
.egx-kutu p{margin:0 0 14px;font-size:14px;line-height:1.45}
.egx-kutu button{display:block;width:100%;border-radius:999px;background:#0b1a10!important;font-weight:700;font-size:15.5px;padding:13px;margin-top:8px}
.egx-kutu button.ana{background:#8ccc9c!important;color:#142c1c!important}
.egx-yukleniyor{position:absolute;inset:0;display:grid;place-items:center;font-weight:700;color:#8ccc9c}
`;function Pt(s,e,t){let n=document.createElement(s);return e&&(n.className=e),t!=null&&(n.innerHTML=t),n}var dy=s=>'<span class="egx-yl">'+[0,1,2].map(e=>'<i class="'+(e<s?"d":"")+'">\u2605</i>').join("")+"</span>",Ml=["","FENA DE\u011E\u0130L","\u0130Y\u0130!","M\xDCKEMMEL!"],rd={3:["D\xFCnya klas\u0131 bitiri\u015F!","B\xFCy\xFCleyici gol!","Tarih tekerr\xFCr etti!"],2:["Harika gol!","Kale y\u0131k\u0131ld\u0131!"],1:["Gol geldi!","A\u011Flar havaland\u0131!"]},co=s=>s.trim().toLocaleUpperCase("tr").replace(/[^A-ZÇĞİÖŞÜ]/g,"").slice(0,3),lo=s=>s.mac.split("\u2013").map(e=>e.trim());function Na(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,t}function fy(){let s=Na(256,128),e=s.getContext("2d");e.fillStyle="#f7f7f7",e.fillRect(0,0,256,128),e.fillStyle="#1b1b1b";for(let n=0;n<12;n++){let i=n%6*44+(n>=6?22:0),a=n>=6?88:36;e.beginPath();for(let r=0;r<5;r++){let o=-Math.PI/2+r*Math.PI*2/5;e.lineTo(i+Math.cos(o)*13,a+Math.sin(o)*13)}e.closePath(),e.fill()}e.fillRect(0,0,256,6),e.fillRect(0,122,256,6);let t=new sn(s);return t.colorSpace=dt,t}function py(){let s=Na(128,128),e=s.getContext("2d");return e.lineJoin="round",e.lineCap="round",e.strokeStyle="rgba(0,0,0,.35)",e.lineWidth=20,e.beginPath(),e.moveTo(26,40),e.lineTo(64,84),e.lineTo(102,40),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=13,e.beginPath(),e.moveTo(26,36),e.lineTo(64,80),e.lineTo(102,36),e.stroke(),new sn(s)}function my(s){let e=Na(64,64),t=e.getContext("2d");return t.lineCap="round",t.strokeStyle=s,t.lineWidth=9,t.beginPath(),t.moveTo(14,14),t.lineTo(50,50),t.moveTo(50,14),t.lineTo(14,50),t.stroke(),new sn(e)}function gy(s){let e=Na(64,8),t=e.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,s||34,8);let n=new sn(e);return n.wrapS=xn,n}function ho(){let s=Na(64,64),e=s.getContext("2d");e.fillStyle="#fff",e.beginPath(),e.arc(20,32,16,0,Math.PI*2),e.fill();let t=new sn(s);return t.wrapS=xn,t}function by(s,e,t,n){let i=s.length;if(i<2)return null;n=n||1;let a=new Float32Array(i*6),r=new Float32Array(i*4),o=[],c=0;for(let h=0;h<i;h++){let u=s[Math.max(0,h-1)],d=s[Math.min(i-1,h+1)],p=d.x-u.x,g=d.z-u.z,b=Math.hypot(p,g)||1,m=-g/b*e/2,f=p/b*e/2;h&&(c+=Math.hypot(s[h].x-s[h-1].x,s[h].z-s[h-1].z));let x=s[h],y=(x.y||0)+(t||.03);if(a.set([x.x+m,y,x.z+f,x.x-m,y,x.z-f],h*6),r.set([c/n,0,c/n,1],h*4),h<i-1){let M=h*2;o.push(M,M+1,M+2,M+1,M+3,M+2)}}let l=new It;return l.setAttribute("position",new bt(a,3)),l.setAttribute("uv",new bt(r,2)),l.setIndex(o),l.computeBoundingSphere(),l}function Vy(s,e){let t=Pt("style",null,uy);document.head.appendChild(t);let n=Pt("div","egx");s.appendChild(n);let i=Pt("canvas");n.appendChild(i),n.appendChild(Pt("div","egx-vin"));let a=Pt("div","egx-yukleniyor","Stadyum haz\u0131rlan\u0131yor\u2026");n.appendChild(a);let r=new ka({canvas:i,antialias:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.shadowMap.enabled=!0,r.shadowMap.type=Fc,r.toneMapping=Dc,r.toneMappingExposure=.95,r.outputColorSpace=dt;let o=new qs,c=new Gt(46,1,.1,900),l=qu(o,r),h=new oo,u=new ze(new ts(.19,24,16),new St({map:fy(),roughness:.45}));u.castShadow=!0,o.add(u);let d=22,p=new It;p.setAttribute("position",new bt(new Float32Array(d*3),3));let g=new Float32Array(d*3);for(let k=0;k<d;k++){let P=1-k/d;g.set([P,P,P],k*3)}p.setAttribute("color",new bt(g,3));let b=new Ri(p,new ci({vertexColors:!0,transparent:!0,opacity:.7,blending:Us,depthWrite:!1}));b.frustumCulled=!1,o.add(b);let m=[],f=new js(new $i({map:py(),depthTest:!1,transparent:!0}));f.scale.set(1.3,1.3,1),f.renderOrder=10,o.add(f);let x=k=>new Dt({color:k,transparent:!0,opacity:.95,depthWrite:!1,side:Vt}),y=Object.assign(x(16238920),{});y.map=ho(),y.alphaTest=.4;let M=x(9357567);M.map=ho(),M.alphaTest=.4,M.opacity=.85;let w=new Dt({color:9357567,transparent:!0,opacity:.9,depthWrite:!1,side:Vt}),S=x(16747038);S.map=gy(30);let R=x(16777215);R.opacity=.75;let O=x(16777215);O.map=ho(),O.alphaTest=.4;let v=x(16238920);v.map=ho(),v.alphaTest=.4;let T=new Dt({map:my("#ffffff"),color:16738906,transparent:!0,depthWrite:!1,side:Vt}),U=[],D={kosu:[],ciz:null,ucan:null,ideal:[]},se=new ze(new Pa(.62,.85,40),new Dt({color:16777215,transparent:!0,opacity:.65,depthWrite:!1,side:Vt}));se.rotation.x=-Math.PI/2,o.add(se);let C=new Wt;o.add(C);let H=k=>{for(;k.children.length;){let P=k.children.pop();P.geometry&&P.geometry.dispose()}},q=(k,P,G,ue,pe,J)=>{let Te=by(P,G,pe,J);if(!Te)return null;let at=new ze(Te,ue);return at.renderOrder=5,k.add(at),at},te=Pt("div","egx-ust");n.appendChild(te);let $=Pt("button","egx-yuv","\u2039");$.setAttribute("aria-label","Geri"),te.appendChild($);let V=Pt("div","egx-baslik");te.appendChild(V);let Q=Pt("button","egx-yuv",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/></svg>');Q.setAttribute("aria-label","Harita"),te.appendChild(Q);let ie=Pt("button","egx-yuv",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/></svg>');ie.setAttribute("aria-label","Ba\u015Ftan"),te.appendChild(ie);let me=Pt("button","egx-yuv");me.setAttribute("aria-label","Ses"),te.appendChild(me);let W=()=>{me.innerHTML=h.acik?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9l5 6M22 9l-5 6"/></svg>'};W();let Z=Pt("div","egx-ipucu");n.appendChild(Z);let fe=Pt("div","egx-halka");n.appendChild(fe);let Ae=Pt("div","egx-not");n.appendChild(Ae);let ye=Pt("div","egx-etiket");n.appendChild(ye);let Ie=Pt("div","egx-bant");n.appendChild(Ie);let He=Pt("div","egx-tekrar","TEKRAR");n.appendChild(He);let ke=Pt("div","egx-bilet");n.appendChild(ke);let Le=null,B=null,kt=k=>{te.style.display=k?"":"none",Z.style.display=k?"":"none"},ne=null,N=null,ee="menu",Ge=0,Pe=[],E=[],_=0,Y=null,de=!1,ae=!1,ce=null,Re=0,ge=null,Ee=null,De=null,Ye=0,he="vur",Ce=null,et=null,je=null,we="amator",Me="giris";try{we=localStorage.getItem("eg-mod")||"amator"}catch{}let Ke=k=>we==="pro"?k+"p":k,ot={pos:new L(30,60,90),bak:new L(0,0,-20)};function ft(k,P,G,ue){Ae.className="egx-not "+(G||""),Ae.innerHTML=k+(P?"<small>"+P+"</small>":""),Ae.offsetWidth,Ae.classList.add("var"),clearTimeout(Y),Y=setTimeout(()=>Ae.classList.remove("var"),ue||1100)}let it=new Set(["Messi","Yamal","Arda G\xFCler","Rivaldo","Robben","Bale","Di Mar\xEDa","Salah","Zidane","Trezeguet","Grosso","James","G\xF6tze","Shaw","Jordi Alba","Lucas Moura","Havertz","Schick","Falcao","Haaland","Oyarzabal","Nico Williams","van Bronckhorst"]);function be(k){let P=new Set(k.sol||[]),G=k.top,ue=k.top;for(let pe of k.adim)pe.hedef==="gol"?ue=G:pe.hedef!=="surus"&&(G=pe.hedef);return it.has(k.golcu)&&k.golcu!=="Vin\xEDcius"&&P.add(ue),k.golcu==="Vin\xEDcius"&&k.id==="2024h"&&P.add(ue),P}function I(){Pe.forEach(ue=>o.remove(ue.g)),Pe=[];let k=ne.no||{},P=be(ne);N.ata.forEach(ue=>{let pe=new sa(o,ne.biz,!1,k[ue.k]);pe.ref=ue,pe.tip="ata",pe.ayna=P.has(ue.k),Pe.push(pe)}),N.def.forEach(ue=>{let pe=new sa(o,ne.onlar,!1);pe.ref=ue,pe.tip="def",Pe.push(pe)});let G=new sa(o,ne.onlar,!0);G.ref=N.kal,G.tip="kal",Pe.push(G)}function _e(k){Hn(),rs(),ce=null,ne=k,N=new eo(k),N.kolay=we!=="pro",Re=0,ge=null,I(),E=[],m=[],et=null,xe(),Ut()}function xe(){if(!ne)return;let k=N?N.adim:0;V.innerHTML="<b>"+(ne.golcu?ne.golcu+" \xB7 ":"")+ne.yil+"</b><small>"+ne.mac+" \xB7 "+ne.baslik+'</small><div class="egx-adim">'+ne.adim.map((P,G)=>'<i class="'+(G<k?"ok":G===k?"su":"")+'"></i>').join("")+"</div>"}function Oe(){if(ae)return;if(Z.style.opacity=1,ee==="harita"){Z.innerHTML=Me==="giris"?"<b>"+ne.not+"</b><span>Ger\xE7ek gol b\xF6yle at\u0131ld\u0131 \xB7 Ba\u015Flamak i\xE7in dokun</span>":"<b>\u0130deal \xE7izgi bu</b><span>Devam etmek i\xE7in dokun</span>";return}if(ee!=="bekle"){Z.style.opacity=0;return}let k=N.adimV(),P=k.hedef==="gol",G=N.bitisTur,ue=k.hedef==="surus"?"Topu s\xFCr! Mavi noktalar\u0131 izleyip halkaya kadar \xE7iz":P?G==="rovasata"?"R\xF6va\u015Fata! Havadayken kaleye \xE7iz":G==="balik"?"Bal\u0131klama! Kaleye \xE7iz":G==="kafa"?"Kafa! Toptan kaleye \xE7izgi \xE7ek":G==="vole"?"Vole! Toptan kaleye \xE7izgi \xE7ek":"\u015Eut! Toptan kaleye \xE7izgi \xE7ek":"Toptan i\u015Faretli arkada\u015F\u0131na \xE7izgi \xE7ek",pe="Hemen \xE7iz: yerden \xB7 Topa bas\u0131l\u0131 tut, halka dolsun: havadan \xB7 Kavisli \xE7iz: falso";Z.innerHTML="<b>"+ue+"</b><span>"+pe+"</span>"}function Be(){if(ee="harita",Ge=0,kt(!0),Q.style.visibility="hidden",ie.style.visibility="hidden",Kt(),Oe(),Me==="giris"){let[k,P]=lo(ne),G=an.indexOf(ne)+1;ke.innerHTML='<div class="ust"><span>'+ne.kupa.toLocaleUpperCase("tr")+"</span><span>"+G+"/"+an.length+'</span></div><div class="tak"><i style="background:linear-gradient(90deg,'+ne.biz.f+" 0 50%,"+(ne.biz.cz||ne.biz.s)+' 50%)"></i>'+k+" \u2013 "+P+'<i style="background:linear-gradient(90deg,'+ne.onlar.f+" 0 50%,"+(ne.onlar.cz||ne.onlar.s)+' 50%)"></i></div><div class="tur">'+(ne.golcu?'<b style="font-size:15px">'+ne.golcu+"</b><br>":"")+(ne.asama?ne.asama+" \xB7 ":"")+ne.baslik+'</div><div class="alt"><span>'+(ne.tarih||ne.yil)+"</span><span>"+(ne.yer||"ESK\u0130 GOLLER")+"</span><span>"+(we==="pro"?"PROFESYONEL":"AMAT\xD6R")+"</span></div>",setTimeout(()=>ke.classList.add("var"),300)}H(C)}function yt(){H(C);let k=Me==="giris"?Math.max(0,Ge-1.6):Ge;N.def.forEach(G=>{let ue=new ze(new Mn(3.2,3.2),T);ue.rotation.x=-Math.PI/2,ue.position.copy(qe(G.x,G.y,.08)),C.add(ue)}),(Me==="giris"?ne.adim.map((G,ue)=>[G,ue]):[[N.adimV(),0]]).forEach(([G,ue])=>{Object.entries(G.kos||{}).forEach(([Ne,Ze])=>{let ut=Ze;if(Me!=="giris"){let wt=N.oyuncu(Ne);ut=Ze.map(on=>on.slice()),ut[0]=[wt.x,wt.y]}q(C,fi(ut,24).map(wt=>qe(wt[0],wt[1])),.7,y,.06,1.4)});let pe=Math.max(0,Math.min(1,(k-ue*.9)/.8));if(pe<=0)return;let J=G.yol;Me!=="giris"&&(J=G.yol.map(Ne=>Ne.slice()),J[0]=[N.top.x,N.top.y]);let Te=fi(J,48),at=Math.max(2,Math.round(pe*48));q(C,Te.slice(0,at).map(Ne=>qe(Ne[0],Ne[1])),1.3,G.hedef==="gol"?v:O,.09,1.6)})}function gt(){H(C),ke.classList.remove("var")}function Ut(){Hn(),Kt(),gt(),N.kur(),N.kolay=!0,I(),E=[],ae=!0,ee="bekle",Ge=0,kt(!0),Q.style.visibility="hidden",ie.style.visibility="hidden";let[k,P]=lo(ne),G=an.indexOf(ne)+1;ke.innerHTML='<div class="ust"><span>'+ne.kupa.toLocaleUpperCase("tr")+"</span><span>"+G+"/"+an.length+'</span></div><div class="tak"><i style="background:linear-gradient(90deg,'+ne.biz.f+" 0 50%,"+(ne.biz.cz||ne.biz.s)+' 50%)"></i>'+k+" \u2013 "+P+'<i style="background:linear-gradient(90deg,'+ne.onlar.f+" 0 50%,"+(ne.onlar.cz||ne.onlar.s)+' 50%)"></i></div><div class="tur">'+(ne.golcu?'<b style="font-size:15px">'+ne.golcu+"</b><br>":"")+(ne.asama?ne.asama+" \xB7 ":"")+ne.baslik+'</div><div class="alt"><span>'+(ne.tarih||ne.yil)+"</span><span>"+(ne.yer||"ESK\u0130 GOLLER")+"</span><span>"+(we==="pro"?"PROFESYONEL":"AMAT\xD6R")+"</span></div>",ke.classList.add("var"),setTimeout(()=>ke.classList.remove("var"),1800),Z.style.opacity=1,Z.innerHTML="<b>Ger\xE7ek gol b\xF6yle at\u0131ld\u0131</b><span>\u0130zle, sonra ayn\u0131s\u0131n\u0131 sen at \xB7 Ge\xE7mek i\xE7in dokun</span>"}function jt(){ae&&(ae=!1,De=null,ke.classList.remove("var"),Ie.style.display="none",Pe.forEach(k=>{k.h=null,k.daldi=!1,k.donuk=!1}),N.kolay=we!=="pro",Lt(!1),de=!0,ft("SIRA SENDE","Ayn\u0131s\u0131n\u0131 at","i",1200))}function xt(){let k=N.adimV(),P=k.yol.map(J=>J.slice());P[0]=[N.top.x,N.top.y];let G=[];for(let J=0;J<P.length-1;J++)for(let Te=0;Te<1;Te+=.1)G.push([P[J][0]+(P[J+1][0]-P[J][0])*Te,P[J][1]+(P[J+1][1]-P[J][1])*Te]);G.push(P[P.length-1]);let ue={yer:.1,yarim:.5,hava:.92,asirt:.92}[k.tur]??.5,pe=ue;for(let J of[ue,.1,.5,.92,.3,.7,.2,.6,1]){let Te=N.kopya();if(!Te.vur(G,J))continue;let at=0;for(;(Te.durum==="ucus"||Te.durum==="surus")&&at<3e3;)Te.adimla(1/120),at++;if(Te.durum==="bekle"||Te.sonuc&&Te.sonuc.gol){pe=J;break}}A(G,pe)}function Lt(k){gt(),k||(N.kur(),I(),E=[],ce=null),ee="bekle",Ge=0,Q.style.visibility="",ie.style.visibility="",kt(!0),xe(),Oe(),as(),k||h.duduk(!1)}function Kt(){D.kosu.forEach(k=>{o.remove(k),k.geometry.dispose()}),D.kosu=[],["ciz","ucan"].forEach(k=>{D[k]&&(o.remove(D[k]),D[k].geometry.dispose(),D[k]=null)}),ss()}function ss(){D.ideal.forEach(k=>{o.remove(k),k.geometry.dispose()}),D.ideal=[]}function as(){if(D.kosu.forEach(P=>{o.remove(P),P.geometry.dispose()}),D.kosu=[],ee!=="bekle")return;let k=N.adimV();if(k.hedef==="surus"){let P=k.yol.map(J=>J.slice());P[0]=[N.top.x,N.top.y];let G=q(o,fi(P,32).map(J=>qe(J[0],J[1])),.75,M,.05,1.2);G&&D.kosu.push(G);let ue=P[P.length-1],pe=new ze(new Pa(.9,1.35,36),w);pe.rotation.x=-Math.PI/2,pe.position.copy(qe(ue[0],ue[1],.06)),pe.renderOrder=6,o.add(pe),pe.geometry.computeBoundingSphere(),D.kosu.push(pe)}Object.entries(k.kos||{}).forEach(([P,G])=>{let ue=N.oyuncu(P);if(!ue)return;let pe=G.map(Te=>Te.slice());pe[0]=[ue.x,ue.y];let J=q(o,fi(pe,28).map(Te=>qe(Te[0],Te[1])),.55,y,.05,1.1);J&&D.kosu.push(J)})}let Di=new jr,za=new Fn(new L(0,1,0),0),Ui=new Xe,Oa=new L;function Ba(k,P){let G=i.getBoundingClientRect();Ui.set((k-G.left)/G.width*2-1,-((P-G.top)/G.height)*2+1),Di.setFromCamera(Ui,c);let ue=Di.ray.intersectPlane(za,Oa);return ue?ue.clone():null}function aa(k){let P=k.clone().project(c),G=i.getBoundingClientRect();return[G.left+(P.x+1)/2*G.width,G.top+(1-P.y)/2*G.height]}function ra(){D.ciz&&(o.remove(D.ciz),D.ciz.geometry.dispose(),D.ciz=null),!(!Ce||Ce.dunya.length<2)&&(D.ciz=q(o,Ce.dunya,.5,S,.07,1))}i.addEventListener("pointerdown",k=>{if(h.baslat(),ee==="harita"){Ge>(Me==="giris"?.35:.2)&&Lt(Me!=="giris");return}if(ae){jt();return}if(ee==="tekrar"||ee==="gol"){if(B)return;po();return}if(ee!=="bekle")return;let P=aa(u.position),G=i.getBoundingClientRect();if(k.clientY-G.top<G.height*.42&&Math.hypot(k.clientX-P[0],k.clientY-P[1])>80){Ee={x:k.clientX,yaw:Re},i.setPointerCapture(k.pointerId);return}if(Math.hypot(k.clientX-P[0],k.clientY-P[1])>80){ft("","\xC7izgiye topun \xFCst\xFCnden ba\u015Fla","",900);return}i.setPointerCapture(k.pointerId),Ce={ekran:[[k.clientX,k.clientY,performance.now()]],dunya:[u.position.clone().setY(0)],basT:performance.now(),yuk:0,kilit:!1,x0:k.clientX,y0:k.clientY},At()}),i.addEventListener("pointermove",k=>{if(Ee){Re=Math.max(-1.2,Math.min(1.2,Ee.yaw+(k.clientX-Ee.x)*.006));return}if(!Ce)return;let P=Ce.ekran[Ce.ekran.length-1];if(Math.hypot(k.clientX-P[0],k.clientY-P[1])<4)return;let G=Ba(k.clientX,k.clientY);if(G){G.x=Math.max(-42,Math.min(42,G.x)),G.z=Math.max(-56.5,G.z),Ce.ekran.push([k.clientX,k.clientY,performance.now()]),Ce.dunya.push(G),ra(),!Ce.kilit&&Math.hypot(k.clientX-Ce.x0,k.clientY-Ce.y0)>12&&(Ce.kilit=!0);{let ue=n.getBoundingClientRect();ye.style.left=k.clientX-ue.left+"px",ye.style.top=k.clientY-ue.top+"px",At()}}});let uo=()=>{if(Ee){Ee=null;return}if(ye.style.display="none",fe.style.display="none",!Ce)return;let k=Ce;Ce=null;let P=0;for(let pe=1;pe<k.dunya.length;pe++)P+=k.dunya[pe].distanceTo(k.dunya[pe-1]);if(P<1.8){ra();return}let G=k.dunya.map(Xu),ue=Ve[Je(k.yuk)];A(G,ue,!0)};function A(k,P,G){let ue=N.sahip,pe=Pe.find(at=>at.tip==="ata"&&at.ref.k===ue),J=Se(),Te=pe?pe.temas(J):0;pe&&J!=="surus"&&pe.oynat(J,pe.donuk?pe.donukT:0),pe&&(pe.donuk=!1),ee="vurus",Ge=0,he=J,De={yol:k,v:P,vurucu:ue,sure:Te},as(),Z.style.opacity=0,D.ucan&&(o.remove(D.ucan),D.ucan.geometry.dispose()),D.ucan=G?D.ciz:null,D.ciz=null,D.ucan&&(D.ucan.material=R.clone())}let z=null;function j(){let k=N.ucus;if(!k||!k.tr)return;let P=k.tr,G=1;for(;G<P.n&&P.Y[G]<tt.y;)G++;let ue=Math.max(0,G-2),pe=(G-ue)*P.dt;z={x:N.top.x,y:N.top.y,z:N.top.z,vx:(P.X[G]-P.X[ue])/pe,vy:(P.Y[G]-P.Y[ue])/pe,vz:(P.Z[G]-P.Z[ue])/pe,vurdu:!1}}function K(k){let P=z;if(!P)return;let G=6,ue=k/G;for(let pe=0;pe<G;pe++){P.vz-=9.81*ue,P.x+=P.vx*ue,P.y+=P.vy*ue,P.z+=P.vz*ue;let J=tt.y+2-.25*Math.min(1,P.z/tt.h);!P.vurdu&&P.y>=J&&(P.y=J,P.vurdu=!0,l.kaleler[0].carp(P.x,P.z),h.file(),P.vy=-Math.abs(P.vy)*.12,P.vx*=.25,P.vz=Math.min(P.vz,0)*.3),P.y>J&&(P.y=J),P.x<tt.x1+.12&&(P.x=tt.x1+.12,P.vx=Math.abs(P.vx)*.2),P.x>tt.x2-.12&&(P.x=tt.x2-.12,P.vx=-Math.abs(P.vx)*.2),P.z>tt.h-.12&&(P.z=tt.h-.12,P.vz=-Math.abs(P.vz)*.2),P.z<.11&&(P.z=.11,P.vz<0&&(P.vz=-P.vz*.35),P.vx*=.8,P.vy*=.8)}N.top.x=P.x,N.top.y=P.y,N.top.z=P.z}function X(){let k=Pe.find(ue=>ue.tip==="ata"&&ue.ref.k===N.sahip);if(!k)return;let P=N.bitisTur;if(!P||N.adimV().hedef!=="gol"){k.donuk=!1;return}let G={kafa:["kafa",.2],balik:["balik",.18],vole:["vole",.24],rovasata:["rovasata",.46]}[P];G&&(k.oynat(G[0],G[1]),k.donuk=!0,k.donukT=G[1],ft(P==="rovasata"?"R\xD6VA\u015EATA!":P==="balik"?"BALIKLAMA!":P==="kafa"?"KAFA!":"VOLE!",ae?"":"Havadayken kaleye \xE7iz","m",1300))}function Se(){let k=N.adimV(),P=k.hedef==="gol",G=N.bitisTur;return P&&G?G==="kafa"?"kafa":G==="balik"?"balik":G==="rovasata"?"rovasata":"vole":P?"vur":k.hedef==="surus"?"surus":k.tur==="yer"?"pas":"vur"}function Fe(){let k=De;De=null,k&&(ce={o:N.kopya(),kayit:E.length},N.vur(k.yol,k.v)?(N.ucus&&(N.ucus.har=he),ee="ucus",Ge=0,Oe(),m=[],Ye=N.ucus&&N.ucus.sut?.35:N.ucus?.12:0,N.ucus?h.vurus(N.ucus.sert):(h.dokunus&&h.dokunus(),D.ucan&&(o.remove(D.ucan),D.ucan.geometry.dispose(),D.ucan=null))):(ee="bekle",Ge=0,Oe(),D.ucan&&(o.remove(D.ucan),D.ucan.geometry.dispose(),D.ucan=null)))}i.addEventListener("pointerup",uo),i.addEventListener("pointercancel",()=>{Ce=null,ye.style.display="none",fe.style.display="none",ra()});let Ve=[.1,.5,.92],We=["Yerden","Yar\u0131m","Havadan"],Qe=["#FF8A1E","#FFC04A","#8EC8FF"],Je=k=>k<.3?0:k<.72?1:2;function $e(){if(!Ce||Ce.kilit)return;let k=(performance.now()-Ce.basT)/1e3;Ce.yuk=Math.max(0,Math.min(1,(k-.16)/.8)),At()}function At(){if(!Ce)return;let k=n.getBoundingClientRect(),P=aa(u.position),G=Je(Ce.yuk);fe.style.display=Ce.kilit&&Ce.yuk===0?"none":"block",fe.style.left=P[0]-k.left+"px",fe.style.top=P[1]-k.top+"px",fe.style.setProperty("--y",Ce.yuk.toFixed(3)),fe.style.setProperty("--hr",Qe[G]),ye.style.display="block",Ce.kilit||(ye.style.left=P[0]-k.left+"px",ye.style.top=P[1]-k.top-34+"px"),ye.textContent=We[G],ye.style.background=G?"rgba(10,24,14,.88)":"",ye.style.color=Qe[G],S.color.set(Qe[G]),Ce.bz!==G&&(Ce.bz!==void 0&&navigator.vibrate&&navigator.vibrate(12),Ce.bz=G)}function un(k){let P=0;for(;P<k.length-2&&Math.hypot(k[P][0]-k[0][0],k[P][1]-k[0][1])<8;)P++;k=k.slice(Math.max(0,P-1));let G=0;for(let pe=1;pe<k.length;pe++)G+=Math.hypot(k[pe][0]-k[pe-1][0],k[pe][1]-k[pe-1][1]);let ue=Math.max(.06,(k[k.length-1][2]-k[0][2])/1e3);return{L:G,v:G/ue*(390/Math.max(320,Math.min(520,i.clientWidth)))}}Q.onclick=()=>{ee==="bekle"&&(Me="adim",Be())},ie.onclick=()=>{(ee==="bekle"||ee==="ucus")&&(Kt(),Lt(!1))},me.onclick=()=>{h.baslat(),h.ac_kapa(!h.acik),W()},$.onclick=()=>{if(ee==="harita"&&Me!=="giris"){Lt(!0);return}os()};function Nt(){for(let k of N.olay.splice(0)){if(k.t==="aldi"){h.dokunus();{let P=Pe.find(G=>G.tip==="ata"&&G.ref.k===k.k);P&&!N.bitisTur&&P.oynat("kontrol")}ft(Ml[k.puan],null,k.puan===3?"m":k.puan===2?"i":"",1e3),xe(),D.ucan&&(o.remove(D.ucan),D.ucan.geometry.dispose(),D.ucan=null)}if(k.t==="bitti"){let P=N.sonuc;if(D.ucan&&(o.remove(D.ucan),D.ucan.geometry.dispose(),D.ucan=null),P.gol&&j(),ae){if(P.gol){ft("GOL!",ne.golcu||"","m",1400);let G=Pe.find(ue=>ue.tip==="ata"&&ue.ref.k===N.ucus.kimden);G&&setTimeout(()=>G.sev("kay"),300)}ee="gosteriSon",Ge=0;continue}if(P.gol){h.gol(),ee="gol",Ge=0,kt(!1);let G=N.puan[N.puan.length-1];ft("GOOOL!",Ml[G],"m",2e3);let ue=Pe.find(Te=>Te.tip==="ata"&&Te.ref.k===N.ucus.kimden);setTimeout(()=>{ue&&ee==="gol"&&ue.sev("kay"),Pe.forEach(Te=>{Te.tip==="ata"&&Te!==ue&&ee==="gol"&&Te.sev("zipla")})},350),et={yildiz:P.yildiz,puan:N.puan.slice(),eski:e.yildiz(Ke(ne.id))},P.yildiz>et.eski&&e.kaydet(Ke(ne.id),P.yildiz);let[pe,J]=lo(ne);Ie.innerHTML='<span class="lg">GOL</span><span class="t"><i style="background:'+ne.biz.f+'"></i>'+co(pe)+'</span><span class="s">'+(ne.skor||"1 \u2013 0")+'</span><span class="t">'+co(J)+'<i style="background:'+ne.onlar.f+'"></i></span>',Ie.style.display="flex"}else P.direk?h.direk():P.kurtaris?h.of():h.duduk(!1),ee="kayip",Ge=0,ft(P.m.toLocaleUpperCase("tr"),null,"",1600)}}}function An(){E.push({ata:N.ata.map(k=>[k.x,k.y,k.vx,k.vy]),def:N.def.map(k=>[k.x,k.y,k.vx,k.vy]),kal:[N.kal.x,N.kal.y,N.kal.vx,N.kal.dalis||0,N.kal.dal||0],top:[N.top.x,N.top.y,N.top.z],vur:N.ucus?N.ucus.kimden:null,yeni:N.ucus&&N.ucus.gecen<.02,sut:N.ucus&&N.ucus.sut,har:N.ucus?N.ucus.har:null})}function Et(){ee="tekrar",Ge=0,_=0,He.style.display="block",kt(!1),setTimeout(()=>{ee==="tekrar"&&!B&&po()},900),Pe.forEach(k=>{k.sevinc=0,k.h=null,k.daldi=!1}),E.forEach(k=>k._o=0),ss(),ne.adim.forEach(k=>{let P=q(o,fi(k.yol,48).map(G=>qe(G[0],G[1])),.8,k.hedef==="gol"?v:O,.08,1.6);P&&D.ideal.push(P)})}function st(k,P){let G=[P.top[0],P.top[1]],ue=0,pe=0;Pe.forEach(Ze=>{let ut,wt,on,mn;if(Ze.tip==="ata")[ut,wt,on,mn]=P.ata[ue++];else if(Ze.tip==="def")[ut,wt,on,mn]=P.def[pe++];else{ut=P.kal[0],wt=P.kal[1],on=0,mn=0;let gi=P.kal[3]>0&&(Math.abs(P.kal[2])>.6||Math.abs(P.kal[4])>.35);gi&&!Ze.daldi&&(Ze.daldi=!0,Ze.dal(Math.sign(P.kal[2])||Math.sign(P.kal[4])||1,N&&N.ucus?N.ucus.kz:.8)),!gi&&P.kal[3]<=0&&(Ze.daldi=!1)}let Jn=G;Ze.tip==="ata"&&ee==="bekle"&&N&&Ze.ref.k===N.sahip&&(Jn=N.hedefNokta()),Ze.guncelle(k,ut,wt,on,mn,Jn)});let J=qe(P.top[0],P.top[1],P.top[2]+.19),Te=u.position.clone();u.position.copy(J);let at=J.clone().sub(Te);if(at.length()>1e-4&&at.length()<5){let Ze=new L(at.z,0,-at.x).normalize();u.rotateOnWorldAxis(Ze,at.length()/.19)}ee==="ucus"||ee==="tekrar"||ee==="gol"?(m.unshift(J.clone()),m.length>d&&(m.length=d)):m=[];let Ne=p.attributes.position.array;for(let Ze=0;Ze<d;Ze++){let ut=m[Math.min(Ze,m.length-1)]||J;Ne.set([ut.x,ut.y,ut.z],Ze*3)}p.attributes.position.needsUpdate=!0,b.visible=m.length>2}function oa(){return{ata:N.ata.map(k=>[k.x,k.y,k.vx,k.vy]),def:N.def.map(k=>[k.x,k.y,k.vx,k.vy]),kal:[N.kal.x,N.kal.y,N.kal.vx,N.kal.dalis||0,N.kal.dal||0],top:[N.top.x,N.top.y,N.top.z]}}let Tt=(k,P,G,ue)=>k.lerp(P,1-Math.exp(-G*ue)),On=()=>n.clientHeight>n.clientWidth;function Ha(k,P){let G=qe(P.top[0],P.top[1],0),ue=new L(0,1,0),pe=On()?1.12:1,J,Te,at=3;if(ae&&ee!=="menu"){let Ze=qe(34,105,0).clone().sub(G);Ze.y=0,Ze.normalize();let ut=new L(-Ze.z,0,Ze.x).multiplyScalar(G.x>0?-1:1);J=G.clone().addScaledVector(Ze,-31*pe).addScaledVector(ut,9).addScaledVector(ue,24*pe),Te=G.clone().addScaledVector(Ze,11).setY(0),at=2.2}else if(ee==="menu"){let Ne=Ge*.05+.6,Ze=qe(34,66,0);J=new L(Ze.x+Math.sin(Ne)*70,30,Ze.z+Math.cos(Ne)*70),Te=qe(34,72,2),at=1}else if(ee==="harita")if(Me==="giris"&&Ge<1.6)J=qe(34,40,130*pe),Te=qe(34,62,0),at=2.5;else{let Ne=[[34,105]];(Me==="giris"?ne.adim:[N.adimV()]).forEach(Gn=>{Gn.yol.forEach(mo=>Ne.push(mo)),Object.values(Gn.kos||{}).forEach(mo=>mo.forEach(ud=>Ne.push(ud)))}),Me!=="giris"&&Ne.push([N.top.x,N.top.y]);let ut=1e9,wt=-1e9,on=1e9,mn=-1e9;Ne.forEach(Gn=>{ut=Math.min(ut,Gn[0]),wt=Math.max(wt,Gn[0]),on=Math.min(on,Gn[1]),mn=Math.max(mn,Gn[1])});let Jn=(ut+wt)/2,gi=(on+mn)/2,ca=Math.max((wt-ut)*(On()?2:.9),(mn-on)*1.05,26)+10;J=qe(Jn,gi-ca*.32,ca*1.08),Te=qe(Jn,gi+1,0),at=2.2}else if(ee==="bekle"||ee==="vurus"){let Ne=N.hedefNokta(),Ze=qe(Ne[0],Ne[1],0),ut=Ze.clone().sub(G);ut.y=0;let wt=ut.length();wt<4&&(ut=qe(34,105,0).sub(G)),ut.y=0,ut.normalize();let on=new L(-ut.z,0,ut.x).multiplyScalar(G.x>0?-1:1),mn=N.bitisTur&&N.adimV().hedef==="gol",Jn=(6.8+wt*.25)*pe,gi=(5.6+wt*.21)*pe,ca=.3;if(mn&&(Jn=6.2*pe,gi=2.4*pe,ca=.55),J=G.clone().addScaledVector(ut,-Jn).addScaledVector(on,Jn*ca).addScaledVector(ue,gi),Te=G.clone().lerp(Ze,mn?.28:.4).setY(mn?1.4:.3),at=2.6,Re){let Gn=J.clone().sub(G);Gn.applyAxisAngle(ue,Re),J=G.clone().add(Gn)}ge={pos:J.clone(),bak:Te.clone(),top:G.clone()}}else if(ee==="ucus"||ee==="kayip"){let Ne=N.ucus,Ze=Ne?qe(Ne.E[0],Ne.E[1],0).sub(qe(Ne.S[0],Ne.S[1],0)):qe(34,105,0).sub(G);Ze.y=0,Ze.length()<1&&Ze.set(0,0,-1),Ze.normalize();let ut=Ne&&Ne.sut;if(ge&&ut)J=ge.pos.clone().lerp(G.clone().setY(ge.pos.y),.18),J.y=Math.max(J.y,3.6),Te=ge.bak.clone().lerp(G,.45).setY(.8),at=2;else if(ge){let wt=G.clone().sub(ge.top);J=ge.pos.clone().add(wt.multiplyScalar(.92)),Te=ge.bak.clone().add(G.clone().sub(ge.top)).lerp(G,.35).setY(.5),at=2.2}else{let wt=10*pe,on=8*pe;J=G.clone().addScaledVector(Ze,-wt).addScaledVector(ue,on),Te=G.clone().addScaledVector(Ze,8).setY(.5),at=2.4}}else if(ee==="gol"){let Ne=N.sonuc,Ze=(Ne.gx||34)<34?1:-1;J=qe(34+Ze*9,96.5,3),Te=qe(Ne.gx||34,104.6,1),at=1.4}else if(ee==="tekrar"||ee==="sonuc"){let Ne=E[Math.min(E.length-1,_|0)]||{top:[34,100,0],sut:!0},Ze=qe(Ne.top[0],Ne.top[1],0),ut=Ne.top[1]>90&&Ne.sut;if(ut&&Ne.top[1]>104.6){let wt=Ne.top[0]<34?1:-1;J=qe(34+wt*6,98.5,1.9),Te=qe(Ne.top[0],Ne.top[1],Math.max(.5,Ne.top[2])),at=2.4}else ut?(J=qe(34+(Ne.top[0]-34)*.35,111.5,2),Te=qe(Ne.top[0],Ne.top[1]-3,Math.max(.6,Ne.top[2])),at=3):(J=new L(-46,22,Ze.z+4),Te=Ze.clone().setY(1),at=2.2)}else J=ot.pos.clone(),Te=ot.bak.clone();if(ee!=="menu"&&ee!=="harita"&&(J.x=Math.max(-40,Math.min(40,J.x)),J.z=Math.max(-57,Math.min(70,J.z))),de&&(ot.pos.copy(J),ot.bak.copy(Te),de=!1),Tt(ot.pos,J,at,k),Tt(ot.bak,Te,at+.6,k),c.position.copy(ot.pos),Ye>0){Ye=Math.max(0,Ye-k*1.6);let Ne=Ye*Ye*.35;c.position.x+=(Math.random()-.5)*Ne,c.position.y+=(Math.random()-.5)*Ne}c.lookAt(ot.bak),l.gunes.target.position.copy(G),l.gunes.position.copy(G).add(new L(25,55,20))}let mi=performance.now(),Ni=0,zt=!0,Bn=!0;function zi(){let k=n.getBoundingClientRect();r.setSize(k.width,k.height,!1),c.aspect=k.width/Math.max(1,k.height),c.fov=k.width<k.height?54:40,c.updateProjectionMatrix()}window.addEventListener("resize",zi);function rn(k){if(!zt)return;Ni=requestAnimationFrame(rn),$e();let P=Math.min(.05,(k-mi)/1e3)*(ae?2.3:1);mi=k,Ge+=P,l.zaman.value+=P,l.zipla.value+=((ee==="gol"||ee==="tekrar"||ee==="sonuc"?1:0)-l.zipla.value)*Math.min(1,P*3);let G;if(N&&ee!=="menu"){if(ae&&ee==="bekle"&&Ge>.2&&!De&&xt(),ee==="gosteriSon"&&(K(P),N.ata.forEach(J=>N.kos(J,P)),Ge>1.3&&jt()),ee==="vurus"&&(N.adimla(0),Ge>=(De?De.sure:0)&&Fe()),ee==="ucus"){let J=P;for(;J>1e-6&&(N.durum==="ucus"||N.durum==="surus");){let Te=Math.min(.008333333333333333,J);N.adimla(Te),J-=Te}An(),D.ucan&&(D.ucan.material.opacity=Math.max(.15,.75-Ge*.5)),N.durum==="bekle"&&(ee="bekle",Ge=0,Oe(),as(),xe(),X())}else if(ee==="gol"){let J=P;K(P),N.ata.forEach(Te=>N.kos(Te,J)),An(),Ge>1.8&&Et()}else ee==="kayip"?(N.ata.forEach(J=>N.kos(J,P)),Ge>1.15&&!Le&&cd()):(ee==="bekle"||ee==="harita")&&N.adimla(P);if(Nt(),ee==="tekrar"||ee==="sonuc"){let J=E[Math.min(E.length-1,_|0)],Te=J.top[1]>92&&J.sut;if(_+=P*60*(Te?.35:.85),J.yeni&&J.vur&&!J._o){J._o=1;let at=Pe.find(Ne=>Ne.tip==="ata"&&Ne.ref.k===J.vur);if(at){let Ne=J.har||"vur";at.oynat(Ne,Math.max(0,at.temas(Ne)-.02))}h.vurus(.6)}G=J,_>=E.length-1+70&&(_=0,E.forEach(at=>at._o=0),B||po())}else G=oa();st(P,G);let ue=ee==="bekle",pe=N.adimV();if(f.visible=ue&&pe.hedef!=="gol"&&pe.hedef!=="surus",f.visible){let J=N.oyuncu(pe.hedef);f.position.copy(qe(J.x,J.y,2.75+Math.sin(Ge*5)*.12))}if(se.visible=ue&&!Ce&&!(N.alZ>.4),se.visible){se.position.copy(u.position).setY(.04);let J=1+Math.sin(Ge*5)*.14;se.scale.set(J,J,1)}ee==="harita"&&yt()}else G={top:[34,52.5,0]};l.kaleler.forEach(ue=>ue.guncelle(P)),Ha(P,G),r.render(o,c),Bn&&(Bn=!1)}function Hn(){Le&&(Le.remove(),Le=null)}function rs(){B&&(B.remove(),B=null),Ie.style.display="none",He.style.display="none",ss()}let Ga=()=>an.reduce((k,P)=>k+e.yildiz(P.id)+e.yildiz(P.id+"p"),0);function Sl(){ae=!1,ee="menu",Ge=0,Hn(),rs(),kt(!1),Kt(),gt(),Pe.forEach(k=>o.remove(k.g)),Pe=[],N=null}function Al(){Sl(),Le=Pt("div","egx-ekran egx-giris"),Le.innerHTML=`<div class="egx-logo">ESK\u0130<span>GOLLER</span></div><p class="egx-alt">2000'den bug\xFCne 100 efsane gol. Paslar\u0131 \xE7iz, topu s\xFCr, gol\xFC kendin bitir.</p><button class="egx-buyuk" data-k="oyna">Oyna</button><button class="egx-ikinci" data-k="sira">Y\u0131ld\u0131z s\u0131ralamas\u0131</button><button class="egx-ikinci" data-k="kapat">Futbola d\xF6n</button><p class="egx-toplam"><i>\u2605</i> `+Ga()+" / "+an.length*6+" y\u0131ld\u0131z</p>",n.appendChild(Le),Le.querySelector("[data-k=oyna]").onclick=()=>{h.baslat(),os()},Le.querySelector("[data-k=sira]").onclick=()=>e.siralama&&e.siralama(),Le.querySelector("[data-k=kapat]").onclick=()=>El()}let yy=["\xDCmit Davala","\u0130lhan Mans\u0131z","Hakan \u015E\xFCk\xFCr","Arda Turan","Nihat","Semih \u015Eent\xFCrk","Arda G\xFCler","Demiral","Mert M\xFCld\xFCr","Hakan \xC7alhano\u011Flu","Sneijder"],od=["La Liga","Premier Lig","Bundesliga","Kral Kupas\u0131"],fo=[["Hepsi",k=>!0],["\u015Eampiyonlar Ligi",k=>k.kupa==="\u015Eampiyonlar Ligi"],["Avrupa Ligi",k=>k.kupa==="Avrupa Ligi"],["Yerel lig",k=>od.includes(k.kupa)],["D\xFCnya Kupas\u0131",k=>k.kupa==="D\xFCnya Kupas\u0131"],["Avrupa Kupas\u0131",k=>k.kupa==="Avrupa \u015Eampiyonas\u0131"]];function os(){Sl(),Le=Pt("div","egx-ekran egx-secim");let k=Pt("button","egx-yuv","\u2039");k.style.cssText="position:absolute;left:12px;top:calc(12px + env(safe-area-inset-top,0px))",k.onclick=Al;let P=je||fo[0][0],G=fo.find(J=>J[0]===P),pe='<h1>Goller</h1><p><span style="color:#F7C948">\u2605</span> '+an.reduce((J,Te)=>J+e.yildiz(Ke(Te.id)),0)+" / "+an.length*3+'</p><div class="egx-mod"><button data-m="amator" class="'+(we==="amator"?"sec":"")+'">Amat\xF6r</button><button data-m="pro" class="'+(we==="pro"?"sec":"")+'">Profesyonel</button></div><div class="egx-donem">'+fo.map(J=>'<button data-d="'+J[0]+'" class="'+(J[0]===P?"sec":"")+'">'+J[0]+"</button>").join("")+'</div><div class="egx-kartlar">';an.filter(G[1]).forEach(J=>{let[Te,at]=lo(J);pe+='<button class="egx-kart" data-s="'+J.id+'"><div class="ust"><span>'+J.yil+"</span><span>"+(an.indexOf(J)+1)+"/"+an.length+'</span></div><div class="tk"><i style="background:linear-gradient(90deg,'+J.biz.f+" 0 50%,"+(J.biz.cz||J.biz.s)+' 50%)"></i><b>'+co(Te)+"\u2013"+co(at)+'</b></div><div class="ic"><strong>'+(J.golcu?J.golcu+" \xB7 ":"")+J.baslik+"</strong><small>"+J.mac+" \xB7 "+J.kupa+'</small><div class="yl">'+dy(e.yildiz(Ke(J.id)))+"</div></div></button>"}),pe+="</div>",Le.innerHTML=pe,Le.appendChild(k),n.appendChild(Le),Le.querySelectorAll("[data-d]").forEach(J=>J.onclick=()=>{je=J.dataset.d,os()}),Le.querySelectorAll("[data-m]").forEach(J=>J.onclick=()=>{we=J.dataset.m;try{localStorage.setItem("eg-mod",we)}catch{}os()}),Le.querySelectorAll("[data-s]").forEach(J=>J.onclick=()=>{h.baslat(),_e(an.find(Te=>Te.id===J.dataset.s))})}function po(){if(B)return;let k=et||{yildiz:1,puan:[],eski:0},P=an.indexOf(ne),G=an[P+1],ue=rd[k.yildiz][Math.random()*rd[k.yildiz].length|0];B=Pt("div","egx-gazete"),B.innerHTML='<div class="mast"><b>ESK\u0130 GOLLER</b><span>'+[0,1,2].map(J=>'<i style="font-style:normal;color:'+(J<k.yildiz?"#E2A21A":"rgba(20,44,28,.2)")+'">\u2605</i>').join("")+"</span></div><h2>"+ue+"</h2><p>"+(ne.golcu?ne.golcu+", ":"")+ne.yil+" \xB7 "+ne.mac+", "+ne.kupa.toLocaleLowerCase("tr")+". "+(k.yildiz===3?"\xC7izgiler ger\xE7e\u011Finin ayn\u0131s\u0131.":"Noktal\u0131 \xE7izgi ger\xE7ek gol\xFCn yolu; ona ne kadar yak\u0131n \xE7izersen o kadar y\u0131ld\u0131z.")+(k.eski>k.yildiz?" Rekorun "+k.eski+" y\u0131ld\u0131z.":k.eski&&k.yildiz>k.eski?" Yeni rekor!":"")+'</p><div class="pn">'+k.puan.map((J,Te)=>"<span>"+(Te===k.puan.length-1?"Bitiri\u015F":Te+1+". pas")+": "+Ml[J].replace("!","")+"</span>").join("")+'</div><div class="bt"><button data-k="cik">Goller</button><button data-k="tekrar">Tekrar</button>'+(G?'<button class="ana" data-k="sonraki">Sonraki \u203A</button>':"")+"</div>",n.appendChild(B),requestAnimationFrame(()=>requestAnimationFrame(()=>B&&B.classList.add("var")));let pe=J=>B.querySelector("[data-k="+J+"]");pe("cik").onclick=()=>os(),pe("tekrar").onclick=()=>{rs(),ee="menu",Lt(!1)},G&&(pe("sonraki").onclick=()=>{rs(),_e(G)})}function cd(){Le=Pt("div","egx-ekran egx-sonuc");let k=N.sonuc;Le.innerHTML='<div class="egx-kutu"><h2>'+k.m+'</h2><p class="yil">'+ne.yil+" \xB7 "+ne.baslik+"</p><p>Son hareketi geri sar\u0131p yeniden dene ya da pozisyonu ba\u015Ftan ba\u015Flat.</p>"+(ce?'<button class="ana" data-k="geri">\u27F2 Geri sar</button>':"")+'<button class="'+(ce?"":"ana")+'" data-k="tekrar">Tekrar dene</button><button data-k="harita">Haritay\u0131 g\xF6r</button><button data-k="liste">Goller</button></div>',n.appendChild(Le),kt(!1),Le.querySelector("[data-k=tekrar]").onclick=()=>{Hn(),Kt(),Lt(!1)};let P=Le.querySelector("[data-k=geri]");P&&(P.onclick=()=>ld()),Le.querySelector("[data-k=harita]").onclick=()=>{Hn(),Kt(),N.kur(),I(),E=[],Me="giris",Be()},Le.querySelector("[data-k=liste]").onclick=()=>os()}function ld(){if(!ce)return;Hn(),Kt(),N=ce.o.kopya(),N.olay=[],E.length=ce.kayit;let P=0,G=0;Pe.forEach(ue=>{ue.tip==="ata"?ue.ref=N.ata[P++]:ue.tip==="def"?ue.ref=N.def[G++]:ue.ref=N.kal,ue.h=null,ue.daldi=!1,ue.donuk=!1}),ee="bekle",Ge=0,kt(!0),xe(),Oe(),as(),X(),ft("GER\u0130 SARILDI","Bu hareketi yeniden dene","i",1e3)}function El(){zt=!1,cancelAnimationFrame(Ni),window.removeEventListener("resize",zi),h.durdur(),r.dispose();try{r.forceContextLoss()}catch{}n.remove(),t.remove(),e.kapat&&e.kapat()}zi(),Ni=requestAnimationFrame(rn);let hd=e.model||(typeof window<"u"&&window.__EG_MODEL?Uint8Array.from(atob(window.__EG_MODEL),k=>k.charCodeAt(0)).buffer:"./oyuncu.glb?v=40");return ad(hd).then(()=>{a.remove(),zt&&Al()}).catch(k=>{a.textContent="Oyuncular y\xFCklenemedi: "+k.message}),{kapat:El,_test:{get oyun(){return N},get mod(){return ee},bolumBaslat:_e,oyunaBasla:Lt,kamera:c,ekranda:aa,topM:u}}}var Wy=an.map(s=>s.id);export{Wy as SEVIYE_IDLER,Vy as eskiGollerAc};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
