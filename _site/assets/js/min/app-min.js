/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!function(t,e){"use strict";"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t);
// Pass this if window is not defined yet
}("undefined"!=typeof window?window:this,function(x,t){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function m(t,e,n){var i,o=(e=e||st).createElement("script");if(o.text=t,n)for(i in wt)n[i]&&(o[i]=n[i]);e.head.appendChild(o).parentNode.removeChild(o)}function g(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?ft[ht.call(t)]||"object":typeof t;
// Support: Android <=2.3 only (functionish RegExp)
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
function a(t){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var e=!!t&&"length"in t&&t.length,n=g(t);return!yt(t)&&!bt(t)&&("array"===n||0===e||"number"==typeof e&&0<e&&e-1 in t)}function u(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()}
// Implement the identical functionality for filter and not
function e(t,n,i){return yt(n)?kt.grep(t,function(t,e){return!!n.call(t,e,t)!==i}):
// Single element
n.nodeType?kt.grep(t,function(t){return t===n!==i}):
// Arraylike of elements (jQuery, arguments, Array)
"string"!=typeof n?kt.grep(t,function(t){return-1<dt.call(n,t)!==i}):kt.filter(n,t,i)}function n(t,e){for(;(t=t[e])&&1!==t.nodeType;);return t}
// Convert String-formatted options into Object-formatted ones
function c(t){var n={};return kt.each(t.match(Lt)||[],function(t,e){n[e]=!0}),n}
/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */function d(t){return t}function f(t){throw t}function l(t,e,n,i){var o;try{
// Check for promise aspect first to privilege synchronous behavior
t&&yt(o=t.promise)?o.call(t).done(e).fail(n):t&&yt(o=t.then)?o.call(t,e,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
e.apply(void 0,[t].slice(i));
// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(t){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[t])}}
// The ready event handler and self cleanup method
function i(){st.removeEventListener("DOMContentLoaded",i),x.removeEventListener("load",i),kt.ready()}
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
// Used by camelCase as callback to replace()
function o(t,e){return e.toUpperCase()}
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function h(t){return t.replace(Ht,"ms-").replace(Rt,o)}function r(){this.expando=kt.expando+r.uid++}function s(t){return"true"===t||"false"!==t&&("null"===t?null:
// Only convert to a number if it doesn't change the string
t===+t+""?+t:Bt.test(t)?JSON.parse(t):t)}function p(t,e,n){var i;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===t.nodeType)if(i="data-"+e.replace(Wt,"-$&").toLowerCase(),"string"==typeof(n=t.getAttribute(i))){try{n=s(n)}catch(t){}
// Make sure we set the data so it isn't changed later
Ft.set(t,e,n)}else n=void 0;return n}function v(t,e,n,i){var o,r,s=20,a=i?function(){return i.cur()}:function(){return kt.css(t,e,"")},l=a(),u=n&&n[3]||(kt.cssNumber[e]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(kt.cssNumber[e]||"px"!==u&&+l)&&Ut.exec(kt.css(t,e));if(c&&c[3]!==u){for(
// Support: Firefox <=54
// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
l/=2,
// Trust units reported by jQuery.css
u=u||c[3],
// Iteratively approximate from a nonzero starting point
c=+l||1;s--;)
// Evaluate and update our best guess (doubling guesses that zero out).
// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
kt.style(t,e,c+u),(1-r)*(1-(r=a()/l||.5))<=0&&(s=0),c/=r;c*=2,kt.style(t,e,c+u),
// Make sure we update the tween properties later on
n=n||[]}return n&&(c=+c||+l||0,
// Apply relative offset (+=/-=) if specified
o=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=o)),o}function y(t){var e,n=t.ownerDocument,i=t.nodeName,o=Vt[i];return o||(e=n.body.appendChild(n.createElement(i)),o=kt.css(e,"display"),e.parentNode.removeChild(e),"none"===o&&(o="block"),Vt[i]=o)}function b(t,e){
// Determine new display value for elements that need to change
for(var n,i,o=[],r=0,s=t.length;r<s;r++)(i=t[r]).style&&(n=i.style.display,e?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(o[r]=It.get(i,"display")||null,o[r]||(i.style.display="")),""===i.style.display&&Yt(i)&&(o[r]=y(i))):"none"!==n&&(o[r]="none",
// Remember what we're overwriting
It.set(i,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(r=0;r<s;r++)null!=o[r]&&(t[r].style.display=o[r]);return t}function w(t,e){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==t.getElementsByTagName?t.getElementsByTagName(e||"*"):void 0!==t.querySelectorAll?t.querySelectorAll(e||"*"):[],void 0===e||e&&u(t,e)?kt.merge([t],n):n}
// Mark scripts as having already been evaluated
function $(t,e){for(var n=0,i=t.length;n<i;n++)It.set(t[n],"globalEval",!e||It.get(e[n],"globalEval"))}function k(t,e,n,i,o){for(var r,s,a,l,u,c,d=e.createDocumentFragment(),f=[],h=0,p=t.length;h<p;h++)if((r=t[h])||0===r)
// Add nodes directly
if("object"===g(r))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
kt.merge(f,r.nodeType?[r]:r);
// Convert non-html into a text node
else if(ee.test(r)){for(s=s||d.appendChild(e.createElement("div")),
// Deserialize a standard representation
a=(Zt.exec(r)||["",""])[1].toLowerCase(),l=te[a]||te._default,s.innerHTML=l[1]+kt.htmlPrefilter(r)+l[2],
// Descend through wrappers to the right content
c=l[0];c--;)s=s.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
kt.merge(f,s.childNodes),
// Ensure the created nodes are orphaned (#12392)
(
// Remember the top-level container
s=d.firstChild).textContent=""}else f.push(e.createTextNode(r));
// Convert html into DOM nodes
// Remove wrapper from fragment
for(d.textContent="",h=0;r=f[h++];)
// Skip elements already in the context collection (trac-4087)
if(i&&-1<kt.inArray(r,i))o&&o.push(r);else
// Capture executables
if(u=kt.contains(r.ownerDocument,r),
// Append to fragment
s=w(d.appendChild(r),"script"),
// Preserve script evaluation history
u&&$(s),n)for(c=0;r=s[c++];)Jt.test(r.type||"")&&n.push(r);return d}function _(){return!0}function j(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function C(){try{return st.activeElement}catch(t){}}function T(t,e,n,i,o,r){var s,a;
// Types can be a map of types/handlers
if("object"==typeof e){for(a in
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
i=i||n,n=void 0),e)T(t,a,n,i,e[a],r);return t}if(null==i&&null==o?(
// ( types, fn )
o=n,i=n=void 0):null==o&&("string"==typeof n?(
// ( types, selector, fn )
o=i,i=void 0):(
// ( types, data, fn )
o=i,i=n,n=void 0)),!1===o)o=j;else if(!o)return t;return 1===r&&(s=o,
// Use same guid so caller can remove using origFn
(o=function(t){
// Can use an empty set, since event contains the info
return kt().off(t),s.apply(this,arguments)}).guid=s.guid||(s.guid=kt.guid++)),t.each(function(){kt.event.add(this,e,o,i,n)})}
/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
// Prefer a tbody over its parent table for containing new rows
function O(t,e){return u(t,"table")&&u(11!==e.nodeType?e:e.firstChild,"tr")&&kt(t).children("tbody")[0]||t}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function S(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function E(t){return"true/"===(t.type||"").slice(0,5)?t.type=t.type.slice(5):t.removeAttribute("type"),t}function z(t,e){var n,i,o,r,s,a,l,u;if(1===e.nodeType){
// 1. Copy private data: events, handlers, etc.
if(It.hasData(t)&&(r=It.access(t),s=It.set(e,r),u=r.events))for(o in delete s.handle,s.events={},u)for(n=0,i=u[o].length;n<i;n++)kt.event.add(e,o,u[o][n]);
// 2. Copy user data
Ft.hasData(t)&&(a=Ft.access(t),l=kt.extend({},a),Ft.set(e,l))}}
// Fix IE bugs, see support tests
function A(t,e){var n=e.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Xt.test(t.type)?e.checked=t.checked:"input"!==n&&"textarea"!==n||(e.defaultValue=t.defaultValue)}function P(n,i,o,r){
// Flatten any nested arrays
i=ut.apply([],i);var t,e,s,a,l,u,c=0,d=n.length,f=d-1,h=i[0],p=yt(h);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||1<d&&"string"==typeof h&&!vt.checkClone&&de.test(h))return n.each(function(t){var e=n.eq(t);p&&(i[0]=h.call(this,t,e.html())),P(e,i,o,r)});if(d&&(e=(t=k(i,n[0].ownerDocument,!1,n,r)).firstChild,1===t.childNodes.length&&(t=e),e||r)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(a=(s=kt.map(w(t,"script"),S)).length;c<d;c++)l=t,c!==f&&(l=kt.clone(l,!0,!0),
// Keep references to cloned scripts for later restoration
a&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
kt.merge(s,w(l,"script"))),o.call(n[c],l,c);if(a)
// Evaluate executable scripts on first document insertion
for(u=s[s.length-1].ownerDocument,
// Reenable scripts
kt.map(s,E),c=0;c<a;c++)l=s[c],Jt.test(l.type||"")&&!It.access(l,"globalEval")&&kt.contains(u,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?
// Optional AJAX dependency, but won't run scripts if not present
kt._evalUrl&&kt._evalUrl(l.src):m(l.textContent.replace(fe,""),u,l))}return n}function L(t,e,n){for(var i,o=e?kt.filter(e,t):t,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||kt.cleanData(w(i)),i.parentNode&&(n&&kt.contains(i.ownerDocument,i)&&$(w(i,"script")),i.parentNode.removeChild(i));return t}function D(t,e,n){var i,o,r,s,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
a=t.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
return(n=n||pe(t))&&(""!==(s=n.getPropertyValue(e)||n[e])||kt.contains(t.ownerDocument,t)||(s=kt.style(t,e)),
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
!vt.pixelBoxStyles()&&he.test(s)&&me.test(e)&&(
// Remember the original values
i=a.width,o=a.minWidth,r=a.maxWidth,
// Put in the new values to get a computed value out
a.minWidth=a.maxWidth=a.width=s,s=n.width,
// Revert the changed values
a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
s+"":s}function q(t,e){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){if(!t())
// Hook needed; redefine it so that the support test is not executed again.
return(this.get=e).apply(this,arguments);
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get}}}
// Return a css property mapped to a potentially vendor prefixed property
function M(t){
// Shortcut for names that are not vendor prefixed
if(t in $e)return t;
// Check for vendor prefixed names
for(var e=t[0].toUpperCase()+t.slice(1),n=we.length;n--;)if((t=we[n]+e)in $e)return t}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function H(t){var e=kt.cssProps[t];return e||(e=kt.cssProps[t]=M(t)||t),e}function R(t,e,n){
// Any relative (+/-) values have already been
// normalized at this point
var i=Ut.exec(e);return i?
// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,i[2]-(n||0))+(i[3]||"px"):e}function N(t,e,n,i,o,r){var s="width"===e?1:0,a=0,l=0;
// Adjustment may not be necessary
if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)
// Both box models exclude margin
"margin"===n&&(l+=kt.css(t,n+Qt[s],!0,o)),
// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
i?(
// For "content", subtract padding
"content"===n&&(l-=kt.css(t,"padding"+Qt[s],!0,o)),
// For "content" or "padding", subtract border
"margin"!==n&&(l-=kt.css(t,"border"+Qt[s]+"Width",!0,o))):(
// Add padding
l+=kt.css(t,"padding"+Qt[s],!0,o),
// For "border" or "margin", add border
"padding"!==n?l+=kt.css(t,"border"+Qt[s]+"Width",!0,o):a+=kt.css(t,"border"+Qt[s]+"Width",!0,o));
// Account for positive content-box scroll gutter when requested by providing computedVal
return!i&&0<=r&&(
// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
// Assuming integer scroll gutter, subtract the rest and round down
l+=Math.max(0,Math.ceil(t["offset"+e[0].toUpperCase()+e.slice(1)]-r-l-a-.5))),l}function I(t,e,n){
// Start with computed style
var i=pe(t),o=D(t,e,i),r="border-box"===kt.css(t,"boxSizing",!1,i),s=r;
// Support: Firefox <=54
// Return a confounding non-pixel value or feign ignorance, as appropriate.
if(he.test(o)){if(!n)return o;o="auto"}
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Adjust for the element's box model
return s=s&&(vt.boxSizingReliable()||o===t.style[e]),
// Fall back to offsetWidth/offsetHeight when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Support: Android <=4.1 - 4.3 only
// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
("auto"===o||!parseFloat(o)&&"inline"===kt.css(t,"display",!1,i))&&(o=t["offset"+e[0].toUpperCase()+e.slice(1)],
// offsetWidth/offsetHeight provide border-box values
s=!0),(
// Normalize "" and auto
o=parseFloat(o)||0)+N(t,e,n||(r?"border":"content"),s,i,
// Provide the current computed size to request scroll gutter calculation (gh-3589)
o)+"px"}function F(t,e,n,i,o){return new F.prototype.init(t,e,n,i,o)}function B(){xe&&(!1===st.hidden&&x.requestAnimationFrame?x.requestAnimationFrame(B):x.setTimeout(B,kt.fx.interval),kt.fx.tick())}
// Animations created synchronously will run synchronously
function W(){return x.setTimeout(function(){ke=void 0}),ke=Date.now()}
// Generate parameters to create a standard animation
function G(t,e){var n,i=0,o={height:t};
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
for(e=e?1:0;i<4;i+=2-e)o["margin"+(n=Qt[i])]=o["padding"+n]=t;return e&&(o.opacity=o.width=t),o}function U(t,e,n){for(var i,o=(K.tweeners[e]||[]).concat(K.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,e,t))
// We're done with this property
return i}function Q(t,e,n){var i,o,r,s,a,l,u,c,d="width"in e||"height"in e,f=this,h={},p=t.style,m=t.nodeType&&Yt(t),g=It.get(t,"fxshow");
// Queue-skipping animations hijack the fx hooks
// Detect show/hide animations
for(i in n.queue||(null==(s=kt._queueHooks(t,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,f.always(function(){
// Ensure the complete handler is called before this completes
f.always(function(){s.unqueued--,kt.queue(t,"fx").length||s.empty.fire()})})),e)if(o=e[i],_e.test(o)){if(delete e[i],r=r||"toggle"===o,o===(m?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==o||!g||void 0===g[i])continue;m=!0}h[i]=g&&g[i]||kt.style(t,i)}
// Bail out if this is a no-op like .hide().hide()
if((l=!kt.isEmptyObject(e))||!kt.isEmptyObject(h))for(i in
// Restrict "overflow" and "display" styles during box animations
d&&1===t.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 15
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY and Edge just mirrors
// the overflowX value there.
n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(
// Identify a display type, preferring old show/hide data over the CSS cascade
u=g&&g.display)&&(u=It.get(t,"display")),"none"===(c=kt.css(t,"display"))&&(u?c=u:(
// Get nonempty value(s) by temporarily forcing visibility
b([t],!0),u=t.style.display||u,c=kt.css(t,"display"),b([t]))),
// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=u)&&"none"===kt.css(t,"float")&&(
// Restore the original display value at the end of pure show/hide animations
l||(f.done(function(){p.display=u}),null==u&&(c=p.display,u="none"===c?"":c)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",f.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),
// Implement show/hide animations
l=!1,h)
// General show/hide setup for this element animation
l||(g?"hidden"in g&&(m=g.hidden):g=It.access(t,"fxshow",{display:u}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
r&&(g.hidden=!m),
// Show elements before animating them
m&&b([t],!0)
/* eslint-disable no-loop-func */,f.done(function(){for(i in
/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
m||b([t]),It.remove(t,"fxshow"),h)kt.style(t,i,h[i])})),
// Per-property setup
l=U(m?g[i]:0,i,f),i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}function Y(t,e){var n,i,o,r,s;
// camelCase, specialEasing and expand cssHook pass
for(n in t)if(o=e[i=h(n)],r=t[n],Array.isArray(r)&&(o=r[1],r=t[n]=r[0]),n!==i&&(t[i]=r,delete t[n]),(s=kt.cssHooks[i])&&"expand"in s)
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in r=s.expand(r),delete t[i],r)n in t||(t[n]=r[n],e[n]=o);else e[i]=o}function K(s,t,e){var n,a,i=0,o=K.prefilters.length,l=kt.Deferred().always(function(){
// Don't match elem in the :animated selector
delete r.elem}),r=function(){if(a)return!1;for(var t=ke||W(),e=Math.max(0,u.startTime+u.duration-t),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
n,i=1-(e/u.duration||0),o=0,r=u.tweens.length;o<r;o++)u.tweens[o].run(i);
// If there's more to do, yield
return l.notifyWith(s,[u,i,e]),i<1&&r?e:(
// If this was an empty animation, synthesize a final progress notification
r||l.notifyWith(s,[u,1,0]),
// Resolve the animation and report its conclusion
l.resolveWith(s,[u]),!1)},u=l.promise({elem:s,props:kt.extend({},t),opts:kt.extend(!0,{specialEasing:{},easing:kt.easing._default},e),originalProperties:t,originalOptions:e,startTime:ke||W(),duration:e.duration,tweens:[],createTween:function(t,e){var n=kt.Tween(s,u.opts,t,e,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(n),n},stop:function(t){var e=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
n=t?u.tweens.length:0;if(a)return this;for(a=!0;e<n;e++)u.tweens[e].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(l.notifyWith(s,[u,1,0]),l.resolveWith(s,[u,t])):l.rejectWith(s,[u,t]),this}}),c=u.props;for(Y(c,u.opts.specialEasing);i<o;i++)if(n=K.prefilters[i].call(u,s,c,u.opts))return yt(n.stop)&&(kt._queueHooks(u.elem,u.opts.queue).stop=n.stop.bind(n)),n;return kt.map(c,U,u),yt(u.opts.start)&&u.opts.start.call(s,u),
// Attach callbacks from options
u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),kt.fx.timer(kt.extend(r,{elem:s,anim:u,queue:u.opts.queue})),u}
// Strip and collapse whitespace according to HTML spec
// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
function V(t){var e;return(t.match(Lt)||[]).join(" ")}function X(t){return t.getAttribute&&t.getAttribute("class")||""}function Z(t){return Array.isArray(t)?t:"string"==typeof t&&t.match(Lt)||[]}function J(n,t,i,o){var e;if(Array.isArray(t))
// Serialize array item.
kt.each(t,function(t,e){i||Re.test(n)?
// Treat each array item as a scalar.
o(n,e):
// Item is non-scalar (array or object), encode its numeric index.
J(n+"["+("object"==typeof e&&null!=e?t:"")+"]",e,i,o)});else if(i||"object"!==g(t))
// Serialize scalar item.
o(n,t);else
// Serialize object item.
for(e in t)J(n+"["+e+"]",t[e],i,o)}
// Serialize an array of form elements or a set of
// key/values into a query string
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function tt(r){
// dataTypeExpression is optional and defaults to "*"
return function(t,e){"string"!=typeof t&&(e=t,t="*");var n,i=0,o=t.toLowerCase().match(Lt)||[];if(yt(e))
// For each dataType in the dataTypeExpression
for(;n=o[i++];)
// Prepend if requested
"+"===n[0]?(n=n.slice(1)||"*",(r[n]=r[n]||[]).unshift(e)):(r[n]=r[n]||[]).push(e)}}
// Base inspection function for prefilters and transports
function et(e,o,r,s){function a(t){var i;return l[t]=!0,kt.each(e[t]||[],function(t,e){var n=e(o,r,s);return"string"!=typeof n||u||l[n]?u?!(i=n):void 0:(o.dataTypes.unshift(n),a(n),!1)}),i}var l={},u=e===Xe;return a(o.dataTypes[0])||!l["*"]&&a("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function nt(t,e){var n,i,o=kt.ajaxSettings.flatOptions||{};for(n in e)void 0!==e[n]&&((o[n]?t:i||(i={}))[n]=e[n]);return i&&kt.extend(!0,t,i),t}
/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function it(t,e,n){
// Remove auto dataType and get content-type in the process
for(var i,o,r,s,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=t.mimeType||e.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}
// Check to see if we have a response for the expected dataType
if(l[0]in n)r=l[0];else{
// Try convertible dataTypes
for(o in n){if(!l[0]||t.converters[o+" "+l[0]]){r=o;break}s||(s=o)}
// Or just use first one
r=r||s}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(r)return r!==l[0]&&l.unshift(r),n[r]}
/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ot(t,e,n,i){var o,r,s,a,l,u={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=t.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(s in t.converters)u[s.toLowerCase()]=t.converters[s];
// Convert to each sequential dataType
for(r=c.shift();r;)if(t.responseFields[r]&&(n[t.responseFields[r]]=e),
// Apply the dataFilter if provided
!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=r,r=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===r)r=l;
// Convert response if prev dataType is non-auto and differs from current
else if("*"!==l&&l!==r){
// If none found, seek a pair
if(!(
// Seek a direct converter
s=u[l+" "+r]||u["* "+r]))for(o in u)if((
// If conv2 outputs current
a=o.split(" "))[1]===r&&(
// If prev can be converted to accepted input
s=u[l+" "+a[0]]||u["* "+a[0]])){
// Condense equivalence converters
!0===s?s=u[o]:!0!==u[o]&&(r=a[0],c.unshift(a[1]));break}
// Apply converter (if not an equivalence)
if(!0!==s)
// Unless errors are allowed to bubble, catch and return them
if(s&&t.throws)e=s(e);else try{e=s(e)}catch(t){return{state:"parsererror",error:s?t:"No conversion from "+l+" to "+r}}}return{state:"success",data:e}}var rt=[],st=x.document,at=Object.getPrototypeOf,lt=rt.slice,ut=rt.concat,ct=rt.push,dt=rt.indexOf,ft={},ht=ft.toString,pt=ft.hasOwnProperty,mt=pt.toString,gt=mt.call(Object),vt={},yt=function t(e){
// Support: Chrome <=57, Firefox <=52
// In some browsers, typeof returns "function" for HTML <object> elements
// (i.e., `typeof document.createElement( "object" ) === "function"`).
// We don't want to classify *any* DOM node as a function.
return"function"==typeof e&&"number"!=typeof e.nodeType},bt=function t(e){return null!=e&&e===e.window},wt={type:!0,src:!0,noModule:!0},$t="3.3.1",
// Define a local copy of jQuery
kt=function(t,e){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new kt.fn.init(t,e)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;kt.fn=kt.prototype={
// The current version of jQuery being used
jquery:$t,constructor:kt,
// The default length of a jQuery object is 0
length:0,toArray:function(){return lt.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(t){
// Return all the elements in a clean array
return null==t?lt.call(this):t<0?this[t+this.length]:this[t];
// Return just the one element from the set
},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(t){
// Build a new jQuery matched element set
var e=kt.merge(this.constructor(),t);
// Add the old object onto the stack (as a reference)
// Return the newly-formed element set
return e.prevObject=this,e},
// Execute a callback for every element in the matched set.
each:function(t){return kt.each(this,t)},map:function(n){return this.pushStack(kt.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return this.pushStack(lt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(t<0?e:0);return this.pushStack(0<=n&&n<e?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ct,sort:rt.sort,splice:rt.splice},kt.extend=kt.fn.extend=function(t){var e,n,i,o,r,s,a=t||{},l=1,u=arguments.length,c=!1;
// Handle a deep copy situation
for("boolean"==typeof a&&(c=a,
// Skip the boolean and the target
a=arguments[l]||{},l++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||yt(a)||(a={}),
// Extend jQuery itself if only one argument is passed
l===u&&(a=this,l--);l<u;l++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[l]))
// Extend the base object
for(n in e)i=a[n],
// Prevent never-ending loop
a!==(o=e[n])&&(
// Recurse if we're merging plain objects or arrays
c&&o&&(kt.isPlainObject(o)||(r=Array.isArray(o)))?(s=r?(r=!1,i&&Array.isArray(i)?i:[]):i&&kt.isPlainObject(i)?i:{},
// Never move original objects, clone them
a[n]=kt.extend(c,s,o)):void 0!==o&&(a[n]=o));
// Return the modified object
return a},kt.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+($t+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var e,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
return!(!t||"[object Object]"!==ht.call(t))&&(
// Objects with no prototype (e.g., `Object.create( null )`) are plain
!(e=at(t))||"function"==typeof(
// Objects with prototype are plain iff they were constructed by a global Object function
n=pt.call(e,"constructor")&&e.constructor)&&mt.call(n)===gt)},isEmptyObject:function(t){
/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var e;for(e in t)return!1;return!0},
// Evaluates a script in a global context
globalEval:function(t){m(t)},each:function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n&&!1!==e.call(t[i],i,t[i]);i++);else for(i in t)if(!1===e.call(t[i],i,t[i]))break;return t},
// Support: Android <=4.0 only
trim:function(t){return null==t?"":(t+"").replace(xt,"")},
// results is for internal usage only
makeArray:function(t,e){var n=e||[];return null!=t&&(a(Object(t))?kt.merge(n,"string"==typeof t?[t]:t):ct.call(n,t)),n},inArray:function(t,e,n){return null==e?-1:dt.call(e,t,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(t,e){for(var n=+e.length,i=0,o=t.length;i<n;i++)t[o++]=e[i];return t.length=o,t},grep:function(t,e,n){
// Go through the array, only saving the items
// that pass the validator function
for(var i,o=[],r=0,s=t.length,a=!n;r<s;r++)(i=!e(t[r],r))!==a&&o.push(t[r]);return o},
// arg is for internal usage only
map:function(t,e,n){var i,o,r=0,s=[];
// Go through the array, translating each of the items to their new values
if(a(t))for(i=t.length;r<i;r++)null!=(o=e(t[r],r,n))&&s.push(o);
// Go through every key on the object,
else for(r in t)null!=(o=e(t[r],r,n))&&s.push(o);
// Flatten any nested arrays
return ut.apply([],s)},
// A global GUID counter for objects
guid:1,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:vt}),"function"==typeof Symbol&&(kt.fn[Symbol.iterator]=rt[Symbol.iterator]),
// Populate the class2type map
kt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){ft["[object "+e+"]"]=e.toLowerCase()});var _t=
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(n){function w(t,e,n,i){var o,r,s,a,l,u,c,d=e&&e.ownerDocument,
// nodeType defaults to 9, since context defaults to document
f=e?e.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof t||!t||1!==f&&9!==f&&11!==f)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!i&&((e?e.ownerDocument||e:I)!==P&&A(e),e=e||P,D)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==f&&(l=vt.exec(t)))
// ID selector
if(o=l[1]){
// Document context
if(9===f){if(!(s=e.getElementById(o)))return n;
// Element context
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(s.id===o)return n.push(s),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(d&&(s=d.getElementById(o))&&R(e,s)&&s.id===o)return n.push(s),n;
// Type selector
}else{if(l[2])return Z.apply(n,e.getElementsByTagName(t)),n;
// Class selector
if((o=l[3])&&k.getElementsByClassName&&e.getElementsByClassName)return Z.apply(n,e.getElementsByClassName(o)),n}
// Take advantage of querySelectorAll
if(k.qsa&&!U[t+" "]&&(!q||!q.test(t))){if(1!==f)d=e,c=t;else if("object"!==e.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(a=e.getAttribute("id"))?a=a.replace($t,kt):e.setAttribute("id",a=N),r=(
// Prefix every selector in the list
u=C(t)).length;r--;)u[r]="#"+a+" "+p(u[r]);c=u.join(","),
// Expand context for sibling selectors
d=yt.test(t)&&h(e.parentNode)||e}if(c)try{return Z.apply(n,d.querySelectorAll(c)),n}catch(t){}finally{a===N&&e.removeAttribute("id")}}}
// All others
return O(t.replace(at,"$1"),e,n,i)}
/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function t(){function n(t,e){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
return i.push(t+" ")>x.cacheLength&&
// Only keep the most recent entries
delete n[i.shift()],n[t+" "]=e}var i=[];return n}
/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function l(t){return t[N]=!0,t}
/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function o(t){var e=P.createElement("fieldset");try{return!!t(e)}catch(t){return!1}finally{
// Remove from its parent by default
e.parentNode&&e.parentNode.removeChild(e),
// release memory in IE
e=null}}
/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function e(t,e){for(var n=t.split("|"),i=n.length;i--;)x.attrHandle[n[i]]=e}
/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function u(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&t.sourceIndex-e.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(i)return i;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}
/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function i(n){return function(t){var e;return"input"===t.nodeName.toLowerCase()&&t.type===n}}
/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function r(n){return function(t){var e=t.nodeName.toLowerCase();return("input"===e||"button"===e)&&t.type===n}}
/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function s(e){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
return"form"in t?
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
t.parentNode&&!1===t.disabled?
// Option elements defer to a parent optgroup if present
"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||
// Where there is no isDisabled, check manually
/* jshint -W018 */
t.isDisabled!==!e&&_t(t)===e:t.disabled===e:"label"in t&&t.disabled===e;
// Remaining elements are neither :enabled nor :disabled
}}
/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function a(s){return l(function(r){return r=+r,l(function(t,e){
// Match elements found at the specified indexes
for(var n,i=s([],t.length,r),o=i.length;o--;)t[n=i[o]]&&(t[n]=!(e[n]=t[n]))})})}
/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function h(t){return t&&void 0!==t.getElementsByTagName&&t}
// Expose support vars for convenience
// Easy API for creating new setFilters
function c(){}function p(t){for(var e=0,n=t.length,i="";e<n;e++)i+=t[e].value;return i}function d(a,t,e){var l=t.dir,u=t.next,c=u||l,d=e&&"parentNode"===c,f=B++;return t.first?
// Check against closest ancestor/preceding element
function(t,e,n){for(;t=t[l];)if(1===t.nodeType||d)return a(t,e,n);return!1}:
// Check against all ancestor/preceding elements
function(t,e,n){var i,o,r,s=[F,f];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(n){for(;t=t[l];)if((1===t.nodeType||d)&&a(t,e,n))return!0}else for(;t=t[l];)if(1===t.nodeType||d)if(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=t[N]||(t[N]={}))[t.uniqueID]||(r[t.uniqueID]={}),u&&u===t.nodeName.toLowerCase())t=t[l]||t;else{if((i=o[c])&&i[0]===F&&i[1]===f)
// Assign to newCache so results back-propagate to previous elements
return s[2]=i[2];
// A match means we're done; a fail means we have to keep checking
if((
// Reuse newcache so results back-propagate to previous elements
o[c]=s)[2]=a(t,e,n))return!0}return!1}}function f(o){return 1<o.length?function(t,e,n){for(var i=o.length;i--;)if(!o[i](t,e,n))return!1;return!0}:o[0]}function y(t,e,n){for(var i=0,o=e.length;i<o;i++)w(t,e[i],n);return n}function $(t,e,n,i,o){for(var r,s=[],a=0,l=t.length,u=null!=e;a<l;a++)(r=t[a])&&(n&&!n(r,i,o)||(s.push(r),u&&e.push(a)));return s}function b(h,p,m,g,v,t){return g&&!g[N]&&(g=b(g)),v&&!v[N]&&(v=b(v,t)),l(function(t,e,n,i){var o,r,s,a=[],l=[],u=e.length,
// Get initial elements from seed or context
c=t||y(p||"*",n.nodeType?[n]:n,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
d=!h||!t&&p?c:$(c,a,h,n,i),f=m?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
v||(t?h:u||g)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
e:d;
// Find primary matches
// Apply postFilter
if(m&&m(d,f,n,i),g)for(o=$(f,l),g(o,[],n,i),
// Un-match failing elements by moving them back to matcherIn
r=o.length;r--;)(s=o[r])&&(f[l[r]]=!(d[l[r]]=s));if(t){if(v||h){if(v){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
o=[],r=f.length;r--;)(s=f[r])&&
// Restore matcherIn since elem is not yet a final match
o.push(d[r]=s);v(null,f=[],o,i)}
// Move matched elements from seed to results to keep them synchronized
for(r=f.length;r--;)(s=f[r])&&-1<(o=v?tt(t,s):a[r])&&(t[o]=!(e[o]=s))}
// Add elements to results, through postFinder if defined
}else f=$(f===e?f.splice(u,f.length):f),v?v(null,e,f,i):Z.apply(e,f)})}function m(t){for(var o,e,n,i=t.length,r=x.relative[t[0].type],s=r||x.relative[" "],a=r?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
l=d(function(t){return t===o},s,!0),u=d(function(t){return-1<tt(o,t)},s,!0),c=[function(t,e,n){var i=!r&&(n||e!==S)||((o=e).nodeType?l(t,e,n):u(t,e,n));
// Avoid hanging onto element (issue #299)
return o=null,i}];a<i;a++)if(e=x.relative[t[a].type])c=[d(f(c),e)];else{
// Return special upon seeing a positional matcher
if((e=x.filter[t[a].type].apply(null,t[a].matches))[N]){for(
// Find the next relative operator (if any) for proper handling
n=++a;n<i&&!x.relative[t[n].type];n++);return b(1<a&&f(c),1<a&&p(
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(at,"$1"),e,a<n&&m(t.slice(a,n)),n<i&&m(t=t.slice(n)),n<i&&p(t))}c.push(e)}return f(c)}function g(g,v){var y=0<v.length,b=0<g.length,t=function(t,e,n,i,o){var r,s,a,l=0,u="0",c=t&&[],d=[],f=S,
// We must always have either seed elements or outermost context
h=t||b&&x.find.TAG("*",o),
// Use integer dirruns iff this is the outermost matcher
p=F+=null==f?1:Math.random()||.1,m=h.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(o&&(S=e===P||e||o);u!==m&&null!=(r=h[u]);u++){if(b&&r){for(s=0,e||r.ownerDocument===P||(A(r),n=!D);a=g[s++];)if(a(r,e||P,n)){i.push(r);break}o&&(F=p)}
// Track unmatched elements for set filters
y&&(
// They will have gone through all possible matchers
(r=!a&&r)&&l--,
// Lengthen the array for every element, matched or not
t&&c.push(r))}
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(l+=u,y&&u!==l){for(s=0;a=v[s++];)a(c,d,e,n);if(t){
// Reintegrate element matches to eliminate the need for sorting
if(0<l)for(;u--;)c[u]||d[u]||(d[u]=V.call(i));
// Discard index placeholder values to get only actual matches
d=$(d)}
// Add matches to results
Z.apply(i,d),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
o&&!t&&0<d.length&&1<l+v.length&&w.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return o&&(F=p,S=f),c};return y?l(t):t}var v,k,x,_,j,C,T,O,S,E,z,
// Local document vars
A,P,L,D,q,M,H,R,
// Instance-specific data
N="sizzle"+1*new Date,I=n.document,F=0,B=0,W=t(),G=t(),U=t(),Q=function(t,e){return t===e&&(z=!0),0},
// Instance methods
Y={}.hasOwnProperty,K=[],V=K.pop,X=K.push,Z=K.push,J=K.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
tt=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]===e)return n;return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
nt="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
it="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ot="\\["+nt+"*("+it+")(?:"+nt+
// Operator (capture 2)
"*([*^$|!~]?=)"+nt+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+nt+"*\\]",rt=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
st=new RegExp(nt+"+","g"),at=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),lt=new RegExp("^"+nt+"*,"+nt+"*"),ut=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ct=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(rt),ft=new RegExp("^"+it+"$"),ht={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it+"|[*])"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+et+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},pt=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,gt=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,yt=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
bt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),wt=function(t,e,n){var i="0x"+e-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return i!=i||n?e:i<0?
// BMP codepoint
String.fromCharCode(i+65536):
// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(i>>10|55296,1023&i|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
$t=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,kt=function(t,e){return e?
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t;
// Other potentially-special ASCII characters get backslash-escaped
},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
xt=function(){A()},_t=d(function(t){return!0===t.disabled&&("form"in t||"label"in t)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{Z.apply(K=J.call(I.childNodes),I.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
K[I.childNodes.length].nodeType}catch(t){Z={apply:K.length?
// Leverage slice if possible
function(t,e){X.apply(t,J.call(e))}:
// Support: IE<9
// Otherwise append directly
function(t,e){
// Can't trust NodeList.length
for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}
// Add button/input type pseudos
for(v in k=w.support={},
/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
j=w.isXML=function(t){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},
/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
A=w.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:I;
// Return early if doc is invalid or already selected
return i!==P&&9===i.nodeType&&i.documentElement&&(
// Update global variables
L=(P=i).documentElement,D=!j(P),
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
I!==P&&(n=P.defaultView)&&n.top!==n&&(
// Support: IE 11, Edge
n.addEventListener?n.addEventListener("unload",xt,!1):n.attachEvent&&n.attachEvent("onunload",xt)),
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
k.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
k.getElementsByTagName=o(function(t){return t.appendChild(P.createComment("")),!t.getElementsByTagName("*").length}),
// Support: IE<9
k.getElementsByClassName=gt.test(P.getElementsByClassName),
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
k.getById=o(function(t){return L.appendChild(t).id=N,!P.getElementsByName||!P.getElementsByName(N).length}),
// ID filter and find
k.getById?(x.filter.ID=function(t){var e=t.replace(bt,wt);return function(t){return t.getAttribute("id")===e}},x.find.ID=function(t,e){if(void 0!==e.getElementById&&D){var n=e.getElementById(t);return n?[n]:[]}}):(x.filter.ID=function(t){var n=t.replace(bt,wt);return function(t){var e=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return e&&e.value===n}},
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
x.find.ID=function(t,e){if(void 0!==e.getElementById&&D){var n,i,o,r=e.getElementById(t);if(r){if((
// Verify the id attribute
n=r.getAttributeNode("id"))&&n.value===t)return[r];
// Fall back on getElementsByName
for(o=e.getElementsByName(t),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===t)return[r]}return[]}}),
// Tag
x.find.TAG=k.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):k.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
r=e.getElementsByTagName(t);
// Filter out possible comments
if("*"!==t)return r;for(;n=r[o++];)1===n.nodeType&&i.push(n);return i},
// Class
x.find.CLASS=k.getElementsByClassName&&function(t,e){if(void 0!==e.getElementsByClassName&&D)return e.getElementsByClassName(t)},
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
M=[],
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
q=[],(k.qsa=gt.test(P.querySelectorAll))&&(
// Build QSA regex
// Regex strategy adopted from Diego Perini
o(function(t){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
L.appendChild(t).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
t.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+nt+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
t.querySelectorAll("[selected]").length||q.push("\\["+nt+"*(?:value|"+et+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
t.querySelectorAll("[id~="+N+"-]").length||q.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
t.querySelectorAll(":checked").length||q.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
t.querySelectorAll("a#"+N+"+*").length||q.push(".#.+[+~]")}),o(function(t){t.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var e=P.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
t.querySelectorAll("[name=d]").length&&q.push("name"+nt+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==t.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
L.appendChild(t).disabled=!0,2!==t.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
t.querySelectorAll("*,:x"),q.push(",.*:")})),(k.matchesSelector=gt.test(H=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&o(function(t){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
k.disconnectedMatch=H.call(t,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
H.call(t,"[s!='']:x"),M.push("!=",rt)}),q=q.length&&new RegExp(q.join("|")),M=M.length&&new RegExp(M.join("|")),
/* Contains
	---------------------------------------------------------------------- */
e=gt.test(L.compareDocumentPosition),
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
R=e||gt.test(L.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
Q=e?function(t,e){
// Flag for duplicate removal
if(t===e)return z=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(
// Disconnected nodes
1&(
// Calculate position if both inputs belong to the same document
n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):
// Otherwise we know they are disconnected
1)||!k.sortDetached&&e.compareDocumentPosition(t)===n?
// Choose the first element that is related to our preferred document
t===P||t.ownerDocument===I&&R(I,t)?-1:e===P||e.ownerDocument===I&&R(I,e)?1:E?tt(E,t)-tt(E,e):0:4&n?-1:1)}:function(t,e){
// Exit early if the nodes are identical
if(t===e)return z=!0,0;var n,i=0,o=t.parentNode,r=e.parentNode,s=[t],a=[e];
// Parentless nodes are either documents or disconnected
if(!o||!r)return t===P?-1:e===P?1:o?-1:r?1:E?tt(E,t)-tt(E,e):0;
// If the nodes are siblings, we can do a quick check
// Otherwise we need full lists of their ancestors for comparison
if(o===r)return u(t,e);for(n=t;n=n.parentNode;)s.unshift(n);for(n=e;n=n.parentNode;)a.unshift(n);
// Walk down the tree looking for a discrepancy
for(;s[i]===a[i];)i++;return i?
// Do a sibling check if the nodes have a common ancestor
u(s[i],a[i]):
// Otherwise nodes in our document sort first
s[i]===I?-1:a[i]===I?1:0}),P},w.matches=function(t,e){return w(t,null,null,e)},w.matchesSelector=function(t,e){if(
// Set document vars if needed
(t.ownerDocument||t)!==P&&A(t),
// Make sure that attribute selectors are quoted
e=e.replace(ct,"='$1']"),k.matchesSelector&&D&&!U[e+" "]&&(!M||!M.test(e))&&(!q||!q.test(e)))try{var n=H.call(t,e);
// IE 9's matchesSelector returns false on disconnected nodes
if(n||k.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
t.document&&11!==t.document.nodeType)return n}catch(t){}return 0<w(e,P,null,[t]).length},w.contains=function(t,e){
// Set document vars if needed
return(t.ownerDocument||t)!==P&&A(t),R(t,e)},w.attr=function(t,e){
// Set document vars if needed
(t.ownerDocument||t)!==P&&A(t);var n=x.attrHandle[e.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
i=n&&Y.call(x.attrHandle,e.toLowerCase())?n(t,e,!D):void 0;return void 0!==i?i:k.attributes||!D?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},w.escape=function(t){return(t+"").replace($t,kt)},w.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},
/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
w.uniqueSort=function(t){var e,n=[],i=0,o=0;
// Unless we *know* we can detect duplicates, assume their presence
if(z=!k.detectDuplicates,E=!k.sortStable&&t.slice(0),t.sort(Q),z){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return E=null,t},
/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
_=w.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof t.textContent)return t.textContent;
// Traverse its children
for(t=t.firstChild;t;t=t.nextSibling)n+=_(t)}else if(3===o||4===o)return t.nodeValue;
// Do not include comment or processing instruction nodes
}else
// If no nodeType, this is expected to be an array
for(;e=t[i++];)
// Do not traverse comment nodes
n+=_(e);return n},(x=w.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:l,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(bt,wt),
// Move the given value to match[3] whether quoted or unquoted
t[3]=(t[3]||t[4]||t[5]||"").replace(bt,wt),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){
/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(
// nth-* requires argument
t[3]||w.error(t[0]),
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&w.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return ht.CHILD.test(t[0])?null:(
// Accept quoted arguments as-is
t[3]?t[2]=t[4]||t[5]||"":n&&dt.test(n)&&(
// Get excess from tokenize (recursively)
e=C(n,!0))&&(
// advance to the next closing parenthesis
e=n.indexOf(")",n.length-e)-n.length)&&(
// excess is a negative index
t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(bt,wt).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=W[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&W(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(n,i,o){return function(t){var e=w.attr(t,n);return null==e?"!="===i:!i||(e+="","="===i?e===o:"!="===i?e!==o:"^="===i?o&&0===e.indexOf(o):"*="===i?o&&-1<e.indexOf(o):"$="===i?o&&e.slice(-o.length)===o:"~="===i?-1<(" "+e.replace(st," ")+" ").indexOf(o):"|="===i&&(e===o||e.slice(0,o.length+1)===o+"-"))}},CHILD:function(p,t,e,m,g){var v="nth"!==p.slice(0,3),y="last"!==p.slice(-4),b="of-type"===t;return 1===m&&0===g?
// Shortcut for :nth-*(n)
function(t){return!!t.parentNode}:function(t,e,n){var i,o,r,s,a,l,u=v!==y?"nextSibling":"previousSibling",c=t.parentNode,d=b&&t.nodeName.toLowerCase(),f=!n&&!b,h=!1;if(c){
// :(first|last|only)-(child|of-type)
if(v){for(;u;){for(s=t;s=s[u];)if(b?s.nodeName.toLowerCase()===d:1===s.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
l=u="only"===p&&!l&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(l=[y?c.firstChild:c.lastChild],y&&f){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
h=(a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=(s=c)[N]||(s[N]={}))[s.uniqueID]||(r[s.uniqueID]={}))[p]||[])[0]===F&&i[1])&&i[2],s=a&&c.childNodes[a];s=++a&&s&&s[u]||(
// Fallback to seeking `elem` from the start
h=a=0)||l.pop();)
// When found, cache indexes on `parent` and break
if(1===s.nodeType&&++h&&s===t){o[p]=[F,a,h];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
f&&(h=a=(i=(
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=(
// ...in a gzip-friendly way
s=t)[N]||(s[N]={}))[s.uniqueID]||(r[s.uniqueID]={}))[p]||[])[0]===F&&i[1]),!1===h)
// Use the same loop as above to seek `elem` from the start
for(;(s=++a&&s&&s[u]||(h=a=0)||l.pop())&&((b?s.nodeName.toLowerCase()!==d:1!==s.nodeType)||!++h||(
// Cache the index of each encountered element
f&&((
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
o=(r=s[N]||(s[N]={}))[s.uniqueID]||(r[s.uniqueID]={}))[p]=[F,h]),s!==t)););
// Incorporate the offset, then check against cycle size
return(h-=g)===m||h%m==0&&0<=h/m}}},PSEUDO:function(t,r){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var e,s=x.pseudos[t]||x.setFilters[t.toLowerCase()]||w.error("unsupported pseudo: "+t);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
return s[N]?s(r):
// But maintain support for old signatures
1<s.length?(e=[t,t,"",r],x.setFilters.hasOwnProperty(t.toLowerCase())?l(function(t,e){for(var n,i=s(t,r),o=i.length;o--;)t[n=tt(t,i[o])]=!(e[n]=i[o])}):function(t){return s(t,0,e)}):s}},pseudos:{
// Potentially complex pseudos
not:l(function(t){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var i=[],o=[],a=T(t.replace(at,"$1"));return a[N]?l(function(t,e,n,i){
// Match elements unmatched by `matcher`
for(var o,r=a(t,null,i,[]),s=t.length;s--;)(o=r[s])&&(t[s]=!(e[s]=o))}):function(t,e,n){return i[0]=t,a(i,null,n,o),
// Don't keep the element (issue #299)
i[0]=null,!o.pop()}}),has:l(function(e){return function(t){return 0<w(e,t).length}}),contains:l(function(e){return e=e.replace(bt,wt),function(t){return-1<(t.textContent||t.innerText||_(t)).indexOf(e)}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:l(function(n){
// lang value must be a valid identifier
return ft.test(n||"")||w.error("unsupported lang: "+n),n=n.replace(bt,wt).toLowerCase(),function(t){var e;do{if(e=D?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(e=e.toLowerCase())===n||0===e.indexOf(n+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var e=n.location&&n.location.hash;return e&&e.slice(1)===t.id},root:function(t){return t===L},focus:function(t){return t===P.activeElement&&(!P.hasFocus||P.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},
// Boolean properties
enabled:s(!1),disabled:s(!0),checked:function(t){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){
// Accessing this property makes selected-by-default
// options in Safari work properly
return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},
// Contents
empty:function(t){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!x.pseudos.empty(t)},
// Element/input types
header:function(t){return mt.test(t.nodeName)},input:function(t){return pt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},
// Position-in-collection
first:a(function(){return[0]}),last:a(function(t,e){return[e-1]}),eq:a(function(t,e,n){return[n<0?n+e:n]}),even:a(function(t,e){for(var n=0;n<e;n+=2)t.push(n);return t}),odd:a(function(t,e){for(var n=1;n<e;n+=2)t.push(n);return t}),lt:a(function(t,e,n){for(var i=n<0?n+e:n;0<=--i;)t.push(i);return t}),gt:a(function(t,e,n){for(var i=n<0?n+e:n;++i<e;)t.push(i);return t})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[v]=i(v);for(v in{submit:!0,reset:!0})x.pseudos[v]=r(v);return c.prototype=x.filters=x.pseudos,x.setFilters=new c,C=w.tokenize=function(t,e){var n,i,o,r,s,a,l,u=G[t+" "];if(u)return e?0:u.slice(0);for(s=t,a=[],l=x.preFilter;s;){
// Filters
for(r in
// Comma and first run
n&&!(i=lt.exec(s))||(i&&(
// Don't consume trailing commas as valid
s=s.slice(i[0].length)||s),a.push(o=[])),n=!1,
// Combinators
(i=ut.exec(s))&&(n=i.shift(),o.push({value:n,
// Cast descendant combinators to space
type:i[0].replace(at," ")}),s=s.slice(n.length)),x.filter)!(i=ht[r].exec(s))||l[r]&&!(i=l[r](i))||(n=i.shift(),o.push({value:n,type:r,matches:i}),s=s.slice(n.length));if(!n)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return e?s.length:s?w.error(t):
// Cache the tokens
G(t,a).slice(0)},T=w.compile=function(t,e/* Internal Use Only */){var n,i=[],o=[],r=U[t+" "];if(!r){for(
// Generate a function of recursive functions that can be used to check each element
e||(e=C(t)),n=e.length;n--;)(r=m(e[n]))[N]?i.push(r):o.push(r);
// Cache the compiled function
// Save selector and tokenization
(r=U(t,g(o,i))).selector=t}return r},
/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
O=w.select=function(t,e,n,i){var o,r,s,a,l,u="function"==typeof t&&t,c=!i&&C(t=u.selector||t);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===c.length){if(2<(
// Reduce context if the leading compound selector is an ID
r=c[0]=c[0].slice(0)).length&&"ID"===(s=r[0]).type&&9===e.nodeType&&D&&x.relative[r[1].type]){if(!(e=(x.find.ID(s.matches[0].replace(bt,wt),e)||[])[0]))return n;
// Precompiled matchers will still verify ancestry, so step up a level
u&&(e=e.parentNode),t=t.slice(r.shift().value.length)}
// Fetch a seed set for right-to-left matching
for(o=ht.needsContext.test(t)?0:r.length;o--&&(s=r[o],!x.relative[a=s.type]);)if((l=x.find[a])&&(i=l(s.matches[0].replace(bt,wt),yt.test(r[0].type)&&h(e.parentNode)||e))){if(
// If seed is empty or no tokens remain, we can return early
r.splice(o,1),!(t=i.length&&p(r)))return Z.apply(n,i),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(u||T(t,c))(i,e,!D,n,!e||yt.test(t)&&h(e.parentNode)||e),n},
// One-time assignments
// Sort stability
k.sortStable=N.split("").sort(Q).join("")===N,
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
k.detectDuplicates=!!z,
// Initialize against the default document
A(),
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
k.sortDetached=o(function(t){
// Should return 1, but returns 4 (following)
return 1&t.compareDocumentPosition(P.createElement("fieldset"))}),
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||e("type|href|height|width",function(t,e,n){if(!n)return t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
k.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||e("value",function(t,e,n){if(!n&&"input"===t.nodeName.toLowerCase())return t.defaultValue}),
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
o(function(t){return null==t.getAttribute("disabled")})||e(et,function(t,e,n){var i;if(!n)return!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),w}(x);kt.find=_t,kt.expr=_t.selectors,
// Deprecated
kt.expr[":"]=kt.expr.pseudos,kt.uniqueSort=kt.unique=_t.uniqueSort,kt.text=_t.getText,kt.isXMLDoc=_t.isXML,kt.contains=_t.contains,kt.escapeSelector=_t.escape;var jt=function(t,e,n){for(var i=[],o=void 0!==n;(t=t[e])&&9!==t.nodeType;)if(1===t.nodeType){if(o&&kt(t).is(n))break;i.push(t)}return i},Ct=function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n},Tt=kt.expr.match.needsContext,Ot=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;kt.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?kt.find.matchesSelector(i,t)?[i]:[]:kt.find.matches(t,kt.grep(e,function(t){return 1===t.nodeType}))},kt.fn.extend({find:function(t){var e,n,i=this.length,o=this;if("string"!=typeof t)return this.pushStack(kt(t).filter(function(){for(e=0;e<i;e++)if(kt.contains(o[e],this))return!0}));for(n=this.pushStack([]),e=0;e<i;e++)kt.find(t,o[e],n);return 1<i?kt.uniqueSort(n):n},filter:function(t){return this.pushStack(e(this,t||[],!1))},not:function(t){return this.pushStack(e(this,t||[],!0))},is:function(t){return!!e(this,
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
"string"==typeof t&&Tt.test(t)?kt(t):t||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var St,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Et=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,zt;
// Give the init function the jQuery prototype for later instantiation
(kt.fn.init=function(t,e,n){var i,o;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!t)return this;
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
// Handle HTML strings
if(n=n||St,"string"!=typeof t)return t.nodeType?(this[0]=t,this.length=1,this):yt(t)?void 0!==n.ready?n.ready(t):
// Execute immediately if ready is not present
t(kt):kt.makeArray(t,this);
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
i="<"===t[0]&&">"===t[t.length-1]&&3<=t.length?[null,t,null]:Et.exec(t))||!i[1]&&e)return!e||e.jquery?(e||n).find(t):this.constructor(e).find(t);
// HANDLE: $(DOMElement)
// HANDLE: $(html) -> $(array)
if(i[1]){
// HANDLE: $(html, props)
if(e=e instanceof kt?e[0]:e,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
kt.merge(this,kt.parseHTML(i[1],e&&e.nodeType?e.ownerDocument||e:st,!0)),Ot.test(i[1])&&kt.isPlainObject(e))for(i in e)
// Properties of context are called as methods if possible
yt(this[i])?this[i](e[i]):this.attr(i,e[i]);return this;
// HANDLE: $(#id)
}
// HANDLE: $(expr, $(...))
return(o=st.getElementById(i[2]))&&(
// Inject the element directly into the jQuery object
this[0]=o,this.length=1),this}).prototype=kt.fn,
// Initialize central reference
St=kt(st);var At=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
Pt={children:!0,contents:!0,next:!0,prev:!0};kt.fn.extend({has:function(t){var e=kt(t,this),n=e.length;return this.filter(function(){for(var t=0;t<n;t++)if(kt.contains(this,e[t]))return!0})},closest:function(t,e){var n,i=0,o=this.length,r=[],s="string"!=typeof t&&kt(t);
// Positional selectors never match, since there's no _selection_ context
if(!Tt.test(t))for(;i<o;i++)for(n=this[i];n&&n!==e;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(s?-1<s.index(n):
// Don't pass non-elements to Sizzle
1===n.nodeType&&kt.find.matchesSelector(n,t))){r.push(n);break}return this.pushStack(1<r.length?kt.uniqueSort(r):r)},
// Determine the position of an element within the set
index:function(t){
// No argument, return index in parent
return t?
// Index in selector
"string"==typeof t?dt.call(kt(t),this[0]):dt.call(this,
// If it receives a jQuery object, the first element is used
t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(kt.uniqueSort(kt.merge(this.get(),kt(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),kt.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return jt(t,"parentNode")},parentsUntil:function(t,e,n){return jt(t,"parentNode",n)},next:function(t){return n(t,"nextSibling")},prev:function(t){return n(t,"previousSibling")},nextAll:function(t){return jt(t,"nextSibling")},prevAll:function(t){return jt(t,"previousSibling")},nextUntil:function(t,e,n){return jt(t,"nextSibling",n)},prevUntil:function(t,e,n){return jt(t,"previousSibling",n)},siblings:function(t){return Ct((t.parentNode||{}).firstChild,t)},children:function(t){return Ct(t.firstChild)},contents:function(t){return u(t,"iframe")?t.contentDocument:(
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
u(t,"template")&&(t=t.content||t),kt.merge([],t.childNodes))}},function(i,o){kt.fn[i]=function(t,e){var n=kt.map(this,o,t);return"Until"!==i.slice(-5)&&(e=t),e&&"string"==typeof e&&(n=kt.filter(e,n)),1<this.length&&(
// Remove duplicates
Pt[i]||kt.uniqueSort(n),
// Reverse order for parents* and prev-derivatives
At.test(i)&&n.reverse()),this.pushStack(n)}});var Lt=/[^\x20\t\r\n\f]+/g;kt.Callbacks=function(i){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
i="string"==typeof i?c(i):kt.extend({},i);var// Flag to know if list is currently firing
n,
// Last fire value for non-forgettable lists
t,
// Flag to know if list was already fired
e,
// Flag to prevent firing
o,
// Actual callback list
r=[],
// Queue of execution data for repeatable lists
s=[],
// Index of currently firing callback (modified by add/remove as needed)
a=-1,
// Fire callbacks
l=function(){for(
// Enforce single-firing
o=o||i.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
e=n=!0;s.length;a=-1)for(t=s.shift();++a<r.length;)
// Run callback and check for early termination
!1===r[a].apply(t[0],t[1])&&i.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
a=r.length,t=!1);
// Forget the data if we're done with it
i.memory||(t=!1),n=!1,
// Clean up if we're done firing for good
o&&(
// Keep an empty list if we have data for future add calls
r=t?[]:"")},
// Actual Callbacks object
u={
// Add a callback or a collection of callbacks to the list
add:function(){return r&&(
// If we have memory from a past run, we should fire after adding
t&&!n&&(a=r.length-1,s.push(t)),function n(t){kt.each(t,function(t,e){yt(e)?i.unique&&u.has(e)||r.push(e):e&&e.length&&"string"!==g(e)&&
// Inspect recursively
n(e)})}(arguments),t&&!n&&l()),this},
// Remove a callback from the list
remove:function(){return kt.each(arguments,function(t,e){for(var n;-1<(n=kt.inArray(e,r,n));)r.splice(n,1),
// Handle firing indexes
n<=a&&a--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(t){return t?-1<kt.inArray(t,r):0<r.length},
// Remove all callbacks from the list
empty:function(){return r&&(r=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return o=s=[],r=t="",this},disabled:function(){return!r},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return o=s=[],t||n||(r=t=""),this},locked:function(){return!!o},
// Call all callbacks with the given context and arguments
fireWith:function(t,e){return o||(e=[t,(e=e||[]).slice?e.slice():e],s.push(e),n||l()),this},
// Call all the callbacks with the given arguments
fire:function(){return u.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!e}};return u},kt.extend({Deferred:function(t){var r=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",kt.Callbacks("memory"),kt.Callbacks("memory"),2],["resolve","done",kt.Callbacks("once memory"),kt.Callbacks("once memory"),0,"resolved"],["reject","fail",kt.Callbacks("once memory"),kt.Callbacks("once memory"),1,"rejected"]],o="pending",s={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},catch:function(t){return s.then(null,t)},
// Keep pipe for back-compat
pipe:function(){var o=arguments;return kt.Deferred(function(i){kt.each(r,function(t,e){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var n=yt(o[e[4]])&&o[e[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
a[e[1]](function(){var t=n&&n.apply(this,arguments);t&&yt(t.promise)?t.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[e[0]+"With"](this,n?[t]:arguments)})}),o=null}).promise()},then:function(e,n,i){function l(o,r,s,a){return function(){var n=this,i=arguments,t=function(){var t,e;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(o<u)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((t=s.apply(n,i))===r.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
e=t&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof t||"function"==typeof t)&&t.then,
// Handle a returned thenable
yt(e)?
// Special processors (notify) just wait for resolution
a?e.call(t,l(u,r,d,a),l(u,r,f,a)):(
// ...and disregard older resolution values
u++,e.call(t,l(u,r,d,a),l(u,r,f,a),l(u,r,d,r.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
s!==d&&(n=void 0,i=[t]),
// Process the value(s)
// Default process is resolve
(a||r.resolveWith)(n,i))}},
// Only normal processors (resolve) catch and reject exceptions
e=a?t:function(){try{t()}catch(t){kt.Deferred.exceptionHook&&kt.Deferred.exceptionHook(t,e.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
u<=o+1&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
s!==f&&(n=void 0,i=[t]),r.rejectWith(n,i))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
o?e():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
kt.Deferred.getStackHook&&(e.stackTrace=kt.Deferred.getStackHook()),x.setTimeout(e))}}var u=0;return kt.Deferred(function(t){
// progress_handlers.add( ... )
r[0][3].add(l(0,t,yt(i)?i:d,t.notifyWith)),
// fulfilled_handlers.add( ... )
r[1][3].add(l(0,t,yt(e)?e:d)),
// rejected_handlers.add( ... )
r[2][3].add(l(0,t,yt(n)?n:f))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(t){return null!=t?kt.extend(t,s):s}},a={};
// Add list-specific methods
// All done!
return kt.each(r,function(t,e){var n=e[2],i=e[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
s[e[1]]=n.add,
// Handle state
i&&n.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
o=i},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
r[3-t][2].disable,
// rejected_handlers.disable
// fulfilled_handlers.disable
r[3-t][3].disable,
// progress_callbacks.lock
r[0][2].lock,
// progress_handlers.lock
r[0][3].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
n.add(e[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
a[e[0]]=function(){return a[e[0]+"With"](this===a?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
a[e[0]+"With"]=n.fireWith}),
// Make the deferred a promise
s.promise(a),
// Call given func if any
t&&t.call(a,a),a},
// Deferred helper
when:function(t){var
// count of uncompleted subordinates
n=arguments.length,
// count of unprocessed arguments
e=n,
// subordinate fulfillment data
i=Array(e),o=lt.call(arguments),
// the master Deferred
r=kt.Deferred(),
// subordinate callback factory
s=function(e){return function(t){i[e]=this,o[e]=1<arguments.length?lt.call(arguments):t,--n||r.resolveWith(i,o)}};
// Single- and empty arguments are adopted like Promise.resolve
if(n<=1&&(l(t,r.done(s(e)).resolve,r.reject,!n),"pending"===r.state()||yt(o[e]&&o[e].then)))return r.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;e--;)l(o[e],s(e),r.reject);return r.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Dt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;kt.Deferred.exceptionHook=function(t,e){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
x.console&&x.console.warn&&t&&Dt.test(t.name)&&x.console.warn("jQuery.Deferred exception: "+t.message,t.stack,e)},kt.readyException=function(t){x.setTimeout(function(){throw t})};
// The deferred used on DOM ready
var qt=kt.Deferred();kt.fn.ready=function(t){return qt.then(t).catch(function(t){kt.readyException(t)}),this},kt.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(t){
// Abort if there are pending holds or we're already ready
(!0===t?--kt.readyWait:kt.isReady)||(
// Remember that the DOM is ready
kt.isReady=!0)!==t&&0<--kt.readyWait||
// If there are functions bound, to execute
qt.resolveWith(st,[kt])}}),kt.ready.then=qt.then,"complete"===st.readyState||"loading"!==st.readyState&&!st.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
x.setTimeout(kt.ready):(
// Use the handy event callback
st.addEventListener("DOMContentLoaded",i),
// A fallback to window.onload, that will always work
x.addEventListener("load",i));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Mt=function(t,e,n,i,o,r,s){var a=0,l=t.length,u=null==n;
// Sets many values
if("object"===g(n))for(a in o=!0,n)Mt(t,e,a,n[a],!0,r,s);
// Sets one value
else if(void 0!==i&&(o=!0,yt(i)||(s=!0),u&&(
// Bulk operations run against the entire set
e=s?(e.call(t,i),null):(u=e,function(t,e,n){return u.call(kt(t),n)})),e))for(;a<l;a++)e(t[a],n,s?i:i.call(t[a],a,e(t[a],n)));return o?t:
// Gets
u?e.call(t):l?e(t[0],n):r},Ht=/^-ms-/,Rt=/-([a-z])/g,Nt=function(t){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===t.nodeType||9===t.nodeType||!+t.nodeType};
// Matches dashed string for camelizing
r.uid=1,r.prototype={cache:function(t){
// Check if the owner object already has a cache
var e=t[this.expando];
// If not, create one
return e||(e={},
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
Nt(t)&&(
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
t.nodeType?t[this.expando]=e:Object.defineProperty(t,this.expando,{value:e,configurable:!0}))),e},set:function(t,e,n){var i,o=this.cache(t);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof e)o[h(e)]=n;
// Handle: [ owner, { properties } ] args
else
// Copy the properties one-by-one to the cache object
for(i in e)o[h(i)]=e[i];return o},get:function(t,e){return void 0===e?this.cache(t):
// Always use camelCase key (gh-2257)
t[this.expando]&&t[this.expando][h(e)]},access:function(t,e,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
return void 0===e||e&&"string"==typeof e&&void 0===n?this.get(t,e):(
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(t,e,n),void 0!==n?n:e)},remove:function(t,e){var n,i=t[this.expando];if(void 0!==i){if(void 0!==e){n=(
// Support array or space separated string of keys
// If key is an array of keys...
// We always set camelCase keys, so remove that.
e=Array.isArray(e)?e.map(h):(e=h(e))in i?[e]:e.match(Lt)||[]).length;for(;n--;)delete i[e[n]]}
// Remove the expando if there's no more data
(void 0===e||kt.isEmptyObject(i))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var e=t[this.expando];return void 0!==e&&!kt.isEmptyObject(e)}};var It=new r,Ft=new r,Bt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Wt=/[A-Z]/g;kt.extend({hasData:function(t){return Ft.hasData(t)||It.hasData(t)},data:function(t,e,n){return Ft.access(t,e,n)},removeData:function(t,e){Ft.remove(t,e)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(t,e,n){return It.access(t,e,n)},_removeData:function(t,e){It.remove(t,e)}}),kt.fn.extend({data:function(n,t){var e,i,o,r=this[0],s=r&&r.attributes;
// Gets all values
if(void 0!==n)
// Sets multiple values
return"object"==typeof n?this.each(function(){Ft.set(this,n)}):Mt(this,function(t){var e;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(r&&void 0===t)return void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
e=Ft.get(r,n))?e:void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
e=p(r,n))?e:
// We tried really hard, but the data doesn't exist.
void 0;
// Set the data...
this.each(function(){
// We always store the camelCased key
Ft.set(this,n,t)})},null,t,1<arguments.length,null,!0);if(this.length&&(o=Ft.get(r),1===r.nodeType&&!It.get(r,"hasDataAttrs"))){for(e=s.length;e--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
s[e]&&0===(i=s[e].name).indexOf("data-")&&(i=h(i.slice(5)),p(r,i,o[i]));It.set(r,"hasDataAttrs",!0)}return o},removeData:function(t){return this.each(function(){Ft.remove(this,t)})}}),kt.extend({queue:function(t,e,n){var i;if(t)return e=(e||"fx")+"queue",i=It.get(t,e),
// Speed up dequeue by getting out quickly if this is just a lookup
n&&(!i||Array.isArray(n)?i=It.access(t,e,kt.makeArray(n)):i.push(n)),i||[]},dequeue:function(t,e){e=e||"fx";var n=kt.queue(t,e),i=n.length,o=n.shift(),r=kt._queueHooks(t,e),s=function(){kt.dequeue(t,e)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===o&&(o=n.shift(),i--),o&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===e&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete r.stop,o.call(t,s,r)),!i&&r&&r.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(t,e){var n=e+"queueHooks";return It.get(t,n)||It.access(t,n,{empty:kt.Callbacks("once memory").add(function(){It.remove(t,[e+"queue",n])})})}}),kt.fn.extend({queue:function(e,n){var t=2;return"string"!=typeof e&&(n=e,e="fx",t--),arguments.length<t?kt.queue(this[0],e):void 0===n?this:this.each(function(){var t=kt.queue(this,e,n);
// Ensure a hooks for this queue
kt._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&kt.dequeue(this,e)})},dequeue:function(t){return this.each(function(){kt.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(t,e){var n,i=1,o=kt.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";s--;)(n=It.get(r[s],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}});var Gt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ut=new RegExp("^(?:([+-])=|)("+Gt+")([a-z%]*)$","i"),Qt=["Top","Right","Bottom","Left"],Yt=function(t,e){
// Inline style trumps all
return"none"===(
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
t=e||t).style.display||""===t.style.display&&
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
kt.contains(t.ownerDocument,t)&&"none"===kt.css(t,"display")},Kt=function(t,e,n,i){var o,r,s={};
// Remember the old values, and insert the new ones
for(r in e)s[r]=t.style[r],t.style[r]=e[r];
// Revert the old values
for(r in o=n.apply(t,i||[]),e)t.style[r]=s[r];return o},Vt={};kt.fn.extend({show:function(){return b(this,!0)},hide:function(){return b(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Yt(this)?kt(this).show():kt(this).hide()})}});var Xt=/^(?:checkbox|radio)$/i,Zt=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Jt=/^$|^module$|\/(?:java|ecma)script/i,te={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
te.optgroup=te.option,te.tbody=te.tfoot=te.colgroup=te.caption=te.thead,te.th=te.td;var ee=/<|&#?\w+;/,ne,ie,oe;ie=st.createDocumentFragment().appendChild(st.createElement("div")),
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
(oe=st.createElement("input")).setAttribute("type","radio"),oe.setAttribute("checked","checked"),oe.setAttribute("name","t"),ie.appendChild(oe),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
vt.checkClone=ie.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
ie.innerHTML="<textarea>x</textarea>",vt.noCloneChecked=!!ie.cloneNode(!0).lastChild.defaultValue;var re=st.documentElement,se=/^key/,ae=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,le=/^([^.]*)(?:\.(.+)|)/;kt.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,u,c,d,f,h,p,m,g=It.get(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(g)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(n=(r=n).handler,o=r.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
o&&kt.find.matchesSelector(re,o),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=kt.guid++),
// Init the element's event structure and main handler, if this is the first
(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==kt&&kt.event.triggered!==t.type?kt.event.dispatch.apply(e,arguments):void 0}),u=(
// Handle multiple events separated by a space
t=(t||"").match(Lt)||[""]).length;u--;)h=m=(a=le.exec(t[u])||[])[1],p=(a[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
h&&(
// If event changes its type, use the special event handlers for the changed type
d=kt.event.special[h]||{},
// If selector defined, determine special event api type, otherwise given type
h=(o?d.delegateType:d.bindType)||h,
// Update special based on newly reset type
d=kt.event.special[h]||{},
// handleObj is passed to all event handlers
c=kt.extend({type:h,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&kt.expr.match.needsContext.test(o),namespace:p.join(".")},r),
// Init the event handler queue if we're the first
(f=l[h])||((f=l[h]=[]).delegateCount=0,
// Only use addEventListener if the special events handler returns false
d.setup&&!1!==d.setup.call(e,i,p,s)||e.addEventListener&&e.addEventListener(h,s)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
o?f.splice(f.delegateCount++,0,c):f.push(c),
// Keep track of which events have ever been used, for event optimization
kt.event.global[h]=!0)},
// Detach an event or set of events from an element
remove:function(t,e,n,i,o){var r,s,a,l,u,c,d,f,h,p,m,g=It.hasData(t)&&It.get(t);if(g&&(l=g.events)){for(u=(
// Once for each type.namespace in types; type may be omitted
e=(e||"").match(Lt)||[""]).length;u--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=m=(a=le.exec(e[u])||[])[1],p=(a[2]||"").split(".").sort(),h){for(d=kt.event.special[h]||{},f=l[h=(i?d.delegateType:d.bindType)||h]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
s=r=f.length;r--;)c=f[r],!o&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(f.splice(r,1),c.selector&&f.delegateCount--,d.remove&&d.remove.call(t,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
s&&!f.length&&(d.teardown&&!1!==d.teardown.call(t,p,g.handle)||kt.removeEvent(t,h,g.handle),delete l[h])}else for(h in l)kt.event.remove(t,h+e[u],n,i,!0);
// Remove data and the expando if it's no longer used
kt.isEmptyObject(l)&&It.remove(t,"handle events")}},dispatch:function(t){
// Make a writable jQuery.Event from the native event object
var e=kt.event.fix(t),n,i,o,r,s,a,l=new Array(arguments.length),u=(It.get(this,"events")||{})[e.type]||[],c=kt.event.special[e.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
l[0]=e,n=1;n<arguments.length;n++)l[n]=arguments[n];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(
// Determine handlers
a=kt.event.handlers.call(this,e,u),
// Run delegates first; they may want to stop propagation beneath us
n=0;(r=a[n++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,i=0;(s=r.handlers[i++])&&!e.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
e.rnamespace&&!e.rnamespace.test(s.namespace)||(e.handleObj=s,e.data=s.data,void 0!==(o=((kt.event.special[s.origType]||{}).handle||s.handler).apply(r.elem,l))&&!1===(e.result=o)&&(e.preventDefault(),e.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(t,e){var n,i,o,r,s,a=[],l=e.delegateCount,u=t.target;
// Find delegate handlers
if(l&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
u.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===t.type&&1<=t.button))for(;u!==this;u=u.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===u.nodeType&&("click"!==t.type||!0!==u.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[
// Don't conflict with Object.prototype properties (#13203)
o=(i=e[n]).selector+" "]&&(s[o]=i.needsContext?-1<kt(o,this).index(u):kt.find(o,this,null,[u]).length),s[o]&&r.push(i);r.length&&a.push({elem:u,handlers:r})}
// Add the remaining (directly-bound) handlers
return u=this,l<e.length&&a.push({elem:u,handlers:e.slice(l)}),a},addProp:function(e,t){Object.defineProperty(kt.Event.prototype,e,{enumerable:!0,configurable:!0,get:yt(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(t){return t[kt.expando]?t:new kt.Event(t)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==C()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===C()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&u(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(t){return u(t.target,"a")}},beforeunload:{postDispatch:function(t){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}},kt.removeEvent=function(t,e,n){
// This "if" is needed for plain objects
t.removeEventListener&&t.removeEventListener(e,n)},kt.Event=function(t,e){
// Allow instantiation without the 'new' keyword
if(!(this instanceof kt.Event))return new kt.Event(t,e);
// Event object
t&&t.type?(this.originalEvent=t,this.type=t.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&
// Support: Android <=2.3 only
!1===t.returnValue?_:j,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=t.target&&3===t.target.nodeType?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,
// Put explicitly provided properties onto the event object
e&&kt.extend(this,e),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=t&&t.timeStamp||Date.now(),
// Mark it as fixed
this[kt.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
kt.Event.prototype={constructor:kt.Event,isDefaultPrevented:j,isPropagationStopped:j,isImmediatePropagationStopped:j,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=_,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=_,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=_,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
kt.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(t){var e=t.button;
// Add which for key events
return null==t.which&&se.test(t.type)?null!=t.charCode?t.charCode:t.keyCode:
// Add which for click: 1 === left; 2 === middle; 3 === right
!t.which&&void 0!==e&&ae.test(t.type)?1&e?1:2&e?3:4&e?2:0:t.which}},kt.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
kt.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,r){kt.event.special[t]={delegateType:r,bindType:r,handle:function(t){var e,n=this,i=t.relatedTarget,o=t.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===n||kt.contains(n,i))||(t.type=o.origType,e=o.handler.apply(this,arguments),t.type=r),e}}}),kt.fn.extend({on:function(t,e,n,i){return T(this,t,e,n,i)},one:function(t,e,n,i){return T(this,t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)
// ( event )  dispatched jQuery.Event
return i=t.handleObj,kt(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"!=typeof t)return!1!==e&&"function"!=typeof e||(
// ( types [, fn] )
n=e,e=void 0),!1===n&&(n=j),this.each(function(){kt.event.remove(this,t,n,e)});
// ( types-object [, selector] )
for(o in t)this.off(o,e,t[o]);return this}});var
/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
ue=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13 only
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ce=/<script|<style|<link/i,
// checked="checked" or checked
de=/checked\s*(?:[^=]|=\s*.checked.)/i,fe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;kt.extend({htmlPrefilter:function(t){return t.replace(ue,"<$1></$2>")},clone:function(t,e,n){var i,o,r,s,a=t.cloneNode(!0),l=kt.contains(t.ownerDocument,t);
// Fix IE cloning issues
if(!(vt.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||kt.isXMLDoc(t)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
s=w(a),i=0,o=(r=w(t)).length;i<o;i++)A(r[i],s[i]);
// Copy the events from the original to the clone
if(e)if(n)for(r=r||w(t),s=s||w(a),i=0,o=r.length;i<o;i++)z(r[i],s[i]);else z(t,a);
// Preserve script evaluation history
// Return the cloned set
return 0<(s=w(a,"script")).length&&$(s,!l&&w(t,"script")),a},cleanData:function(t){for(var e,n,i,o=kt.event.special,r=0;void 0!==(n=t[r]);r++)if(Nt(n)){if(e=n[It.expando]){if(e.events)for(i in e.events)o[i]?kt.event.remove(n,i):kt.removeEvent(n,i,e.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[It.expando]=void 0}n[Ft.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Ft.expando]=void 0)}}}),kt.fn.extend({detach:function(t){return L(this,t,!0)},remove:function(t){return L(this,t)},text:function(t){return Mt(this,function(t){return void 0===t?kt.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=t)})},null,t,arguments.length)},append:function(){return P(this,arguments,function(t){var e;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||O(this,t).appendChild(t)})},prepend:function(){return P(this,arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=O(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return P(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return P(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,e=0;null!=(t=this[e]);e++)1===t.nodeType&&(
// Prevent memory leaks
kt.cleanData(w(t,!1)),
// Remove any remaining nodes
t.textContent="");return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return kt.clone(this,t,e)})},html:function(t){return Mt(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t&&1===e.nodeType)return e.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof t&&!ce.test(t)&&!te[(Zt.exec(t)||["",""])[1].toLowerCase()]){t=kt.htmlPrefilter(t);try{for(;n<i;n++)
// Remove element nodes and prevent memory leaks
1===(e=this[n]||{}).nodeType&&(kt.cleanData(w(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var n=[];
// Make the changes, replacing each non-ignored context element with the new content
return P(this,arguments,function(t){var e=this.parentNode;kt.inArray(this,n)<0&&(kt.cleanData(w(this)),e&&e.replaceChild(t,this));
// Force callback invocation
},n)}}),kt.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,s){kt.fn[t]=function(t){for(var e,n=[],i=kt(t),o=i.length-1,r=0;r<=o;r++)e=r===o?this:this.clone(!0),kt(i[r])[s](e),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ct.apply(n,e.get());return this.pushStack(n)}});var he=new RegExp("^("+Gt+")(?!px)[a-z%]+$","i"),pe=function(t){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var e=t.ownerDocument.defaultView;return e&&e.opener||(e=x),e.getComputedStyle(t)},me=new RegExp(Qt.join("|"),"i");!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function t(){
// This is a singleton, we need to execute it only once
if(l){a.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(a).appendChild(l);var t=x.getComputedStyle(l);n="1%"!==t.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
s=12===e(t.marginLeft),
// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
// Some styles come back with percentage values, even though they shouldn't
l.style.right="60%",r=36===e(t.right),
// Support: IE 9 - 11 only
// Detect misreporting of content dimensions for box-sizing:border-box elements
i=36===e(t.width),
// Support: IE 9 only
// Detect overflow:scroll screwiness (gh-3699)
l.style.position="absolute",o=36===l.offsetWidth||"absolute",re.removeChild(a),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
l=null}}function e(t){return Math.round(parseFloat(t))}var n,i,o,r,s,a=st.createElement("div"),l=st.createElement("div");
// Finish early in limited (non-browser) environments
l.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",vt.clearCloneStyle="content-box"===l.style.backgroundClip,kt.extend(vt,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),r},pixelPosition:function(){return t(),n},reliableMarginLeft:function(){return t(),s},scrollboxSize:function(){return t(),o}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
ge=/^(none|table(?!-c[ea]).+)/,ve=/^--/,ye={position:"absolute",visibility:"hidden",display:"block"},be={letterSpacing:"0",fontWeight:"400"},we=["Webkit","Moz","ms"],$e=st.createElement("div").style;kt.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(t,e){if(e){
// We should always get a number back from opacity
var n=D(t,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{},
// Get and set the style property on a DOM Node
style:function(t,e,n,i){
// Don't set styles on text and comment nodes
if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){
// Make sure that we're working with the right name
var o,r,s,a=h(e),l=ve.test(e),u=t.style;
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
// Check if we're setting a value
if(l||(e=H(a)),
// Gets hook for the prefixed version, then unprefixed version
s=kt.cssHooks[e]||kt.cssHooks[a],void 0===n)
// If a hook was provided get the non-computed value from there
return s&&"get"in s&&void 0!==(o=s.get(t,!1,i))?o:u[e];
// Otherwise just get the value from the style object
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===(r=typeof n)&&(o=Ut.exec(n))&&o[1]&&(n=v(t,e,o),
// Fixes bug #9237
r="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n==n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===r&&(n+=o&&o[3]||(kt.cssNumber[a]?"":"px")),
// background-* props affect original clone's values
vt.clearCloneStyle||""!==n||0!==e.indexOf("background")||(u[e]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
s&&"set"in s&&void 0===(n=s.set(t,n,i))||(l?u.setProperty(e,n):u[e]=n))}},css:function(t,e,n,i){var o,r,s,a=h(e),l;
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Make numeric if forced or a qualifier was provided and val looks numeric
return ve.test(e)||(e=H(a)),
// If a hook was provided get the computed value from there
(
// Try prefixed name followed by the unprefixed name
s=kt.cssHooks[e]||kt.cssHooks[a])&&"get"in s&&(o=s.get(t,!0,n)),
// Otherwise, if a way to get the computed value exists, use that
void 0===o&&(o=D(t,e,i)),
// Convert "normal" to computed value
"normal"===o&&e in be&&(o=be[e]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),kt.each(["height","width"],function(t,a){kt.cssHooks[a]={get:function(t,e,n){if(e)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return!ge.test(kt.css(t,"display"))||
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
t.getClientRects().length&&t.getBoundingClientRect().width?I(t,a,n):Kt(t,ye,function(){return I(t,a,n)})},set:function(t,e,n){var i,o=pe(t),r="border-box"===kt.css(t,"boxSizing",!1,o),s=n&&N(t,a,n,r,o);
// Account for unreliable border-box dimensions by comparing offset* to computed and
// faking a content-box to get border and padding (gh-3699)
return r&&vt.scrollboxSize()===o.position&&(s-=Math.ceil(t["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(o[a])-N(t,a,"border",!1,o)-.5)),
// Convert to pixels if value adjustment is needed
s&&(i=Ut.exec(e))&&"px"!==(i[3]||"px")&&(t.style[a]=e,e=kt.css(t,a)),R(t,e,s)}}}),kt.cssHooks.marginLeft=q(vt.reliableMarginLeft,function(t,e){if(e)return(parseFloat(D(t,"marginLeft"))||t.getBoundingClientRect().left-Kt(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
kt.each({margin:"",padding:"",border:"Width"},function(o,r){kt.cssHooks[o+r]={expand:function(t){for(var e=0,n={},
// Assumes a single number if not a string
i="string"==typeof t?t.split(" "):[t];e<4;e++)n[o+Qt[e]+r]=i[e]||i[e-2]||i[0];return n}},"margin"!==o&&(kt.cssHooks[o+r].set=R)}),kt.fn.extend({css:function(t,e){return Mt(this,function(t,e,n){var i,o,r={},s=0;if(Array.isArray(e)){for(i=pe(t),o=e.length;s<o;s++)r[e[s]]=kt.css(t,e[s],!1,i);return r}return void 0!==n?kt.style(t,e,n):kt.css(t,e)},t,e,1<arguments.length)}}),(kt.Tween=F).prototype={constructor:F,init:function(t,e,n,i,o,r){this.elem=t,this.prop=n,this.easing=o||kt.easing._default,this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=r||(kt.cssNumber[n]?"":"px")},cur:function(){var t=F.propHooks[this.prop];return t&&t.get?t.get(this):F.propHooks._default.get(this)},run:function(t){var e,n=F.propHooks[this.prop];return this.options.duration?this.pos=e=kt.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=e=t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):F.propHooks._default.set(this),this}},F.prototype.init.prototype=F.prototype,F.propHooks={_default:{get:function(t){var e;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
return 1!==t.elem.nodeType||null!=t.elem[t.prop]&&null==t.elem.style[t.prop]?t.elem[t.prop]:(
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
e=kt.css(t.elem,t.prop,""))&&"auto"!==e?e:0},set:function(t){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
kt.fx.step[t.prop]?kt.fx.step[t.prop](t):1!==t.elem.nodeType||null==t.elem.style[kt.cssProps[t.prop]]&&!kt.cssHooks[t.prop]?t.elem[t.prop]=t.now:kt.style(t.elem,t.prop,t.now+t.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
F.propHooks.scrollTop=F.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},kt.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},_default:"swing"},kt.fx=F.prototype.init,
// Back compat <1.8 extension point
kt.fx.step={};var ke,xe,_e=/^(?:toggle|show|hide)$/,je=/queueHooks$/,Ce,Te,Oe;kt.Animation=kt.extend(K,{tweeners:{"*":[function(t,e){var n=this.createTween(t,e);return v(n.elem,t,Ut.exec(e),n),n}]},tweener:function(t,e){for(var n,i=0,o=(t=yt(t)?(e=t,["*"]):t.match(Lt)).length;i<o;i++)n=t[i],K.tweeners[n]=K.tweeners[n]||[],K.tweeners[n].unshift(e)},prefilters:[Q],prefilter:function(t,e){e?K.prefilters.unshift(t):K.prefilters.push(t)}}),kt.speed=function(t,e,n){var i=t&&"object"==typeof t?kt.extend({},t):{complete:n||!n&&e||yt(t)&&t,duration:t,easing:n&&e||e&&!yt(e)&&e};
// Go to the end state if fx are off
return kt.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in kt.fx.speeds?i.duration=kt.fx.speeds[i.duration]:i.duration=kt.fx.speeds._default),
// Normalize opt.queue - true/undefined/null -> "fx"
null!=i.queue&&!0!==i.queue||(i.queue="fx"),
// Queueing
i.old=i.complete,i.complete=function(){yt(i.old)&&i.old.call(this),i.queue&&kt.dequeue(this,i.queue)},i},kt.fn.extend({fadeTo:function(t,e,n,i){
// Show any hidden elements after setting opacity to 0
return this.filter(Yt).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(e,t,n,i){var o=kt.isEmptyObject(e),r=kt.speed(t,n,i),s=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=K(this,kt.extend({},e),r);
// Empty animations, or finishing resolves immediately
(o||It.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(o,t,r){var s=function(t){var e=t.stop;delete t.stop,e(r)};return"string"!=typeof o&&(r=t,t=o,o=void 0),t&&!1!==o&&this.queue(o||"fx",[]),this.each(function(){var t=!0,e=null!=o&&o+"queueHooks",n=kt.timers,i=It.get(this);if(e)i[e]&&i[e].stop&&s(i[e]);else for(e in i)i[e]&&i[e].stop&&je.test(e)&&s(i[e]);for(e=n.length;e--;)n[e].elem!==this||null!=o&&n[e].queue!==o||(n[e].anim.stop(r),t=!1,n.splice(e,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!t&&r||kt.dequeue(this,o)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var t,e=It.get(this),n=e[s+"queue"],i=e[s+"queueHooks"],o=kt.timers,r=n?n.length:0;
// Enable finishing flag on private data
// Look for any active animations, and finish them
for(e.finish=!0,
// Empty the queue first
kt.queue(this,s,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===s&&(o[t].anim.stop(!0),o.splice(t,1));
// Look for any animations in the old queue and finish them
for(t=0;t<r;t++)n[t]&&n[t].finish&&n[t].finish.call(this);
// Turn off finishing flag
delete e.finish})}}),kt.each(["toggle","show","hide"],function(t,i){var o=kt.fn[i];kt.fn[i]=function(t,e,n){return null==t||"boolean"==typeof t?o.apply(this,arguments):this.animate(G(i,!0),t,e,n)}}),
// Generate shortcuts for custom animations
kt.each({slideDown:G("show"),slideUp:G("hide"),slideToggle:G("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,i){kt.fn[t]=function(t,e,n){return this.animate(i,t,e,n)}}),kt.timers=[],kt.fx.tick=function(){var t,e=0,n=kt.timers;for(ke=Date.now();e<n.length;e++)
// Run the timer and safely remove it when done (allowing for external removal)
(t=n[e])()||n[e]!==t||n.splice(e--,1);n.length||kt.fx.stop(),ke=void 0},kt.fx.timer=function(t){kt.timers.push(t),kt.fx.start()},kt.fx.interval=13,kt.fx.start=function(){xe||(xe=!0,B())},kt.fx.stop=function(){xe=null},kt.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
kt.fn.delay=function(i,t){return i=kt.fx&&kt.fx.speeds[i]||i,t=t||"fx",this.queue(t,function(t,e){var n=x.setTimeout(t,i);e.stop=function(){x.clearTimeout(n)}})},Ce=st.createElement("input"),Oe=st.createElement("select").appendChild(st.createElement("option")),Ce.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
vt.checkOn=""!==Ce.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
vt.optSelected=Oe.selected,(
// Support: IE <=11 only
// An input loses its value after becoming a radio
Ce=st.createElement("input")).value="t",Ce.type="radio",vt.radioValue="t"===Ce.value;var Se,Ee=kt.expr.attrHandle;kt.fn.extend({attr:function(t,e){return Mt(this,kt.attr,t,e,1<arguments.length)},removeAttr:function(t){return this.each(function(){kt.removeAttr(this,t)})}}),kt.extend({attr:function(t,e,n){var i,o,r=t.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)
// Fallback to prop when attributes are not supported
return void 0===t.getAttribute?kt.prop(t,e,n):(
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
1===r&&kt.isXMLDoc(t)||(o=kt.attrHooks[e.toLowerCase()]||(kt.expr.match.bool.test(e)?Se:void 0)),void 0!==n?null===n?void kt.removeAttr(t,e):o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:(t.setAttribute(e,n+""),n):o&&"get"in o&&null!==(i=o.get(t,e))?i:null==(i=kt.find.attr(t,e))?void 0:i)},attrHooks:{type:{set:function(t,e){if(!vt.radioValue&&"radio"===e&&u(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}},removeAttr:function(t,e){var n,i=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
o=e&&e.match(Lt);if(o&&1===t.nodeType)for(;n=o[i++];)t.removeAttribute(n)}}),
// Hooks for boolean attributes
Se={set:function(t,e,n){return!1===e?
// Remove boolean attributes when set to false
kt.removeAttr(t,n):t.setAttribute(n,n),n}},kt.each(kt.expr.match.bool.source.match(/\w+/g),function(t,e){var s=Ee[e]||kt.find.attr;Ee[e]=function(t,e,n){var i,o,r=e.toLowerCase();return n||(
// Avoid an infinite loop by temporarily removing this function from the getter
o=Ee[r],Ee[r]=i,i=null!=s(t,e,n)?r:null,Ee[r]=o),i}});var ze=/^(?:input|select|textarea|button)$/i,Ae=/^(?:a|area)$/i;kt.fn.extend({prop:function(t,e){return Mt(this,kt.prop,t,e,1<arguments.length)},removeProp:function(t){return this.each(function(){delete this[kt.propFix[t]||t]})}}),kt.extend({prop:function(t,e,n){var i,o,r=t.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==r&&8!==r&&2!==r)return 1===r&&kt.isXMLDoc(t)||(
// Fix name and attach hooks
e=kt.propFix[e]||e,o=kt.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var e=kt.find.attr(t,"tabindex");return e?parseInt(e,10):ze.test(t.nodeName)||Ae.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
vt.optSelected||(kt.propHooks.selected={get:function(t){
/* eslint no-unused-expressions: "off" */
var e=t.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(t){
/* eslint no-unused-expressions: "off" */
var e=t.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),kt.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){kt.propFix[this.toLowerCase()]=this}),kt.fn.extend({addClass:function(e){var t,n,i,o,r,s,a,l=0;if(yt(e))return this.each(function(t){kt(this).addClass(e.call(this,t,X(this)))});if((t=Z(e)).length)for(;n=this[l++];)if(o=X(n),i=1===n.nodeType&&" "+V(o)+" "){for(s=0;r=t[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");
// Only assign if different to avoid unneeded rendering.
o!==(a=V(i))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,o,r,s,a,l=0;if(yt(e))return this.each(function(t){kt(this).removeClass(e.call(this,t,X(this)))});if(!arguments.length)return this.attr("class","");if((t=Z(e)).length)for(;n=this[l++];)if(o=X(n),
// This expression is here for better compressibility (see addClass)
i=1===n.nodeType&&" "+V(o)+" "){for(s=0;r=t[s++];)
// Remove *all* instances
for(;-1<i.indexOf(" "+r+" ");)i=i.replace(" "+r+" "," ");
// Only assign if different to avoid unneeded rendering.
o!==(a=V(i))&&n.setAttribute("class",a)}return this},toggleClass:function(o,e){var r=typeof o,s="string"===r||Array.isArray(o);return"boolean"==typeof e&&s?e?this.addClass(o):this.removeClass(o):yt(o)?this.each(function(t){kt(this).toggleClass(o.call(this,t,X(this),e),e)}):this.each(function(){var t,e,n,i;if(s)for(
// Toggle individual class names
e=0,n=kt(this),i=Z(o);t=i[e++];)
// Check each className given, space separated list
n.hasClass(t)?n.removeClass(t):n.addClass(t);
// Toggle whole class name
else void 0!==o&&"boolean"!==r||((t=X(this))&&
// Store className if set
It.set(this,"__className__",t),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",t||!1===o?"":It.get(this,"__className__")||""))})},hasClass:function(t){var e,n,i=0;for(e=" "+t+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+V(X(n))+" ").indexOf(e))return!0;return!1}});var Pe=/\r/g;kt.fn.extend({val:function(n){var i,t,o,e=this[0];return arguments.length?(o=yt(n),this.each(function(t){var e;1===this.nodeType&&(
// Treat null/undefined as ""; convert numbers to string
null==(e=o?n.call(this,t,kt(this).val()):n)?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=kt.map(e,function(t){return null==t?"":t+""})),
// If set returns undefined, fall back to normal setting
(i=kt.valHooks[this.type]||kt.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,e,"value")||(this.value=e))})):e?(i=kt.valHooks[e.type]||kt.valHooks[e.nodeName.toLowerCase()])&&"get"in i&&void 0!==(t=i.get(e,"value"))?t:
// Handle most common string cases
"string"==typeof(t=e.value)?t.replace(Pe,""):null==t?"":t:void 0}}),kt.extend({valHooks:{option:{get:function(t){var e=kt.find.attr(t,"value");return null!=e?e:
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
V(kt.text(t))}},select:{get:function(t){var e,n,i,o=t.options,r=t.selectedIndex,s="select-one"===t.type,a=s?null:[],l=s?r+1:o.length;
// Loop through all the selected options
for(i=r<0?l:s?r:0;i<l;i++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(((n=o[i]).selected||i===r)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!u(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
e=kt(n).val(),s)return e;
// Multi-Selects return an array
a.push(e)}return a},set:function(t,e){for(var n,i,o=t.options,r=kt.makeArray(e),s=o.length;s--;)
/* eslint-disable no-cond-assign */
((i=o[s]).selected=-1<kt.inArray(kt.valHooks.option.get(i),r))&&(n=!0)
/* eslint-enable no-cond-assign */;
// Force browsers to behave consistently when non-matching value is set
return n||(t.selectedIndex=-1),r}}}}),
// Radios and checkboxes getter/setter
kt.each(["radio","checkbox"],function(){kt.valHooks[this]={set:function(t,e){if(Array.isArray(e))return t.checked=-1<kt.inArray(kt(t).val(),e)}},vt.checkOn||(kt.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})}),
// Return jQuery for attributes-only inclusion
vt.focusin="onfocusin"in x;var Le=/^(?:focusinfocus|focusoutblur)$/,De=function(t){t.stopPropagation()};kt.extend(kt.event,{trigger:function(t,e,n,i){var o,r,s,a,l,u,c,d,f=[n||st],h=pt.call(t,"type")?t.type:t,p=pt.call(t,"namespace")?t.namespace.split("."):[];
// Don't do events on text and comment nodes
if(r=d=s=n=n||st,3!==n.nodeType&&8!==n.nodeType&&!Le.test(h+kt.event.triggered)&&(-1<h.indexOf(".")&&(
// Namespaced trigger; create a regexp to match event type in handle()
h=(p=h.split(".")).shift(),p.sort()),l=h.indexOf(":")<0&&"on"+h,
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
(
// Caller can pass in a jQuery.Event object, Object, or just an event type string
t=t[kt.expando]?t:new kt.Event(h,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=p.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
t.result=void 0,t.target||(t.target=n),
// Clone any incoming data and prepend the event, creating the handler arg list
e=null==e?[t]:kt.makeArray(e,[t]),
// Allow special events to draw outside the lines
c=kt.event.special[h]||{},i||!c.trigger||!1!==c.trigger.apply(n,e))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!c.noBubble&&!bt(n)){for(a=c.delegateType||h,Le.test(a+h)||(r=r.parentNode);r;r=r.parentNode)f.push(r),s=r;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
s===(n.ownerDocument||st)&&f.push(s.defaultView||s.parentWindow||x)}
// Fire handlers on the event path
for(o=0;(r=f[o++])&&!t.isPropagationStopped();)d=r,t.type=1<o?a:c.bindType||h,(
// jQuery handler
u=(It.get(r,"events")||{})[t.type]&&It.get(r,"handle"))&&u.apply(r,e),(
// Native handler
u=l&&r[l])&&u.apply&&Nt(r)&&(t.result=u.apply(r,e),!1===t.result&&t.preventDefault());return t.type=h,
// If nobody prevented the default action, do it now
i||t.isDefaultPrevented()||c._default&&!1!==c._default.apply(f.pop(),e)||!Nt(n)||
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
l&&yt(n[h])&&!bt(n)&&(
// Don't re-trigger an onFOO event when we call its FOO() method
(s=n[l])&&(n[l]=null),
// Prevent re-triggering of the same event, since we already bubbled it above
kt.event.triggered=h,t.isPropagationStopped()&&d.addEventListener(h,De),n[h](),t.isPropagationStopped()&&d.removeEventListener(h,De),kt.event.triggered=void 0,s&&(n[l]=s)),t.result}
// focus/blur morphs to focusin/out; ensure we're not firing them right now
},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(t,e,n){var i=kt.extend(new kt.Event,n,{type:t,isSimulated:!0});kt.event.trigger(i,null,e)}}),kt.fn.extend({trigger:function(t,e){return this.each(function(){kt.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];if(n)return kt.event.trigger(t,e,n,!0)}}),
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
vt.focusin||kt.each({focus:"focusin",blur:"focusout"},function(n,i){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var o=function(t){kt.event.simulate(i,t.target,kt.event.fix(t))};kt.event.special[i]={setup:function(){var t=this.ownerDocument||this,e=It.access(t,i);e||t.addEventListener(n,o,!0),It.access(t,i,(e||0)+1)},teardown:function(){var t=this.ownerDocument||this,e=It.access(t,i)-1;e?It.access(t,i,e):(t.removeEventListener(n,o,!0),It.remove(t,i))}}});var qe=x.location,Me=Date.now(),He=/\?/;
// Cross-browser xml parsing
kt.parseXML=function(t){var e;if(!t||"string"!=typeof t)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{e=(new x.DOMParser).parseFromString(t,"text/xml")}catch(t){e=void 0}return e&&!e.getElementsByTagName("parsererror").length||kt.error("Invalid XML: "+t),e};var Re=/\[\]$/,Ne=/\r?\n/g,Ie=/^(?:submit|button|image|reset|file)$/i,Fe=/^(?:input|select|textarea|keygen)/i;kt.param=function(t,e){var n,i=[],o=function(t,e){
// If value is a function, invoke it and use its return value
var n=yt(e)?e():e;i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(t)||t.jquery&&!kt.isPlainObject(t))
// Serialize the form elements
kt.each(t,function(){o(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in t)J(n,t[n],e,o);
// Return the resulting serialization
return i.join("&")},kt.fn.extend({serialize:function(){return kt.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var t=kt.prop(this,"elements");return t?kt.makeArray(t):this}).filter(function(){var t=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!kt(this).is(":disabled")&&Fe.test(this.nodeName)&&!Ie.test(t)&&(this.checked||!Xt.test(t))}).map(function(t,e){var n=kt(this).val();return null==n?null:Array.isArray(n)?kt.map(n,function(t){return{name:e.name,value:t.replace(Ne,"\r\n")}}):{name:e.name,value:n.replace(Ne,"\r\n")}}).get()}});var Be=/%20/g,We=/#.*$/,Ge=/([?&])_=[^&]*/,Ue=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
Qe=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ye=/^(?:GET|HEAD)$/,Ke=/^\/\//,
/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
Ve={},
/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Xe={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Ze="*/".concat("*"),
// Anchor tag for parsing the document origin
Je=st.createElement("a");Je.href=qe.href,kt.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:qe.href,type:"GET",isLocal:Qe.test(qe.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",
/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Ze,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":kt.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(t,e){return e?
// Building a settings object
nt(nt(t,kt.ajaxSettings),e):
// Extending ajaxSettings
nt(kt.ajaxSettings,t)},ajaxPrefilter:tt(Ve),ajaxTransport:tt(Xe),
// Main method
ajax:function(t,e){
// Callback for when everything is done
function n(t,e,n,i){var o,r,s,a,l,u=e;
// Ignore repeat invocations
p||(p=!0,
// Clear timeout if it exists
h&&x.clearTimeout(h),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
c=void 0,
// Cache response headers
f=i||"",
// Set readyState
k.readyState=0<t?4:0,
// Determine if successful
o=200<=t&&t<300||304===t,
// Get response data
n&&(a=it(g,k,n)),
// Convert no matter what (that way responseXXX fields are always set)
a=ot(g,a,k,o),
// If successful, handle type chaining
o?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&((l=k.getResponseHeader("Last-Modified"))&&(kt.lastModified[d]=l),(l=k.getResponseHeader("etag"))&&(kt.etag[d]=l)),
// if no content
204===t||"HEAD"===g.type?u="nocontent":304===t?u="notmodified":(u=a.state,r=a.data,o=!(s=a.error))):(
// Extract error from statusText and normalize for non-aborts
s=u,!t&&u||(u="error",t<0&&(t=0))),
// Set data for the fake xhr object
k.status=t,k.statusText=(e||u)+"",
// Success/Error
o?b.resolveWith(v,[r,u,k]):b.rejectWith(v,[k,u,s]),
// Status-dependent callbacks
k.statusCode($),$=void 0,m&&y.trigger(o?"ajaxSuccess":"ajaxError",[k,g,o?r:s]),
// Complete
w.fireWith(v,[k,u]),m&&(y.trigger("ajaxComplete",[k,g]),
// Handle the global AJAX counter
--kt.active||kt.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof t&&(e=t,t=void 0),
// Force options to be an object
e=e||{};var c,
// URL without anti-cache param
d,
// Response headers
f,i,
// timeout handle
h,
// Url cleanup var
o,
// Request state (becomes false upon send and true upon completion)
p,
// To know if global events are to be dispatched
m,
// Loop variable
r,
// uncached part of the url
s,
// Create the final options object
g=kt.ajaxSetup({},e),
// Callbacks context
v=g.context||g,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
y=g.context&&(v.nodeType||v.jquery)?kt(v):kt.event,
// Deferreds
b=kt.Deferred(),w=kt.Callbacks("once memory"),
// Status-dependent callbacks
$=g.statusCode||{},
// Headers (they are sent all at once)
a={},l={},
// Default abort message
u="canceled",
// Fake xhr
k={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(t){var e;if(p){if(!i)for(i={};e=Ue.exec(f);)i[e[1].toLowerCase()]=e[2];e=i[t.toLowerCase()]}return null==e?null:e},
// Raw string
getAllResponseHeaders:function(){return p?f:null},
// Caches the header
setRequestHeader:function(t,e){return null==p&&(t=l[t.toLowerCase()]=l[t.toLowerCase()]||t,a[t]=e),this},
// Overrides response content-type header
overrideMimeType:function(t){return null==p&&(g.mimeType=t),this},
// Status-dependent callbacks
statusCode:function(t){var e;if(t)if(p)
// Execute the appropriate callbacks
k.always(t[k.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(e in t)$[e]=[$[e],t[e]];return this},
// Cancel the request
abort:function(t){var e=t||u;return c&&c.abort(e),n(0,e),this}};
// Attach deferreds
// A cross-domain request is in order when the origin doesn't match the current origin.
if(b.promise(k),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
g.url=((t||g.url||qe.href)+"").replace(Ke,qe.protocol+"//"),
// Alias method option to type as per ticket #12004
g.type=e.method||e.type||g.method||g.type,
// Extract dataTypes list
g.dataTypes=(g.dataType||"*").toLowerCase().match(Lt)||[""],null==g.crossDomain){o=st.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 15
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{o.href=g.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
o.href=o.href,g.crossDomain=Je.protocol+"//"+Je.host!=o.protocol+"//"+o.host}catch(t){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
g.crossDomain=!0}}
// Convert data if not already a string
// If request was aborted inside a prefilter, stop there
if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=kt.param(g.data,g.traditional)),
// Apply prefilters
et(Ve,g,e,k),p)return k;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
// Check for headers option
for(r in
// Watch for a new set of requests
(m=kt.event&&g.global)&&0==kt.active++&&kt.event.trigger("ajaxStart"),
// Uppercase the type
g.type=g.type.toUpperCase(),
// Determine if request has content
g.hasContent=!Ye.test(g.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
d=g.url.replace(We,""),
// More options handling for requests with no content
g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(Be,"+")):(
// Remember the hash so we can put it back
s=g.url.slice(d.length),
// If data is available and should be processed, append data to url
g.data&&(g.processData||"string"==typeof g.data)&&(d+=(He.test(d)?"&":"?")+g.data,
// #9682: remove data so that it's not used in an eventual retry
delete g.data),
// Add or update anti-cache param if needed
!1===g.cache&&(d=d.replace(Ge,"$1"),s=(He.test(d)?"&":"?")+"_="+Me+++s),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
g.url=d+s),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
g.ifModified&&(kt.lastModified[d]&&k.setRequestHeader("If-Modified-Since",kt.lastModified[d]),kt.etag[d]&&k.setRequestHeader("If-None-Match",kt.etag[d])),
// Set the correct header, if data is being sent
(g.data&&g.hasContent&&!1!==g.contentType||e.contentType)&&k.setRequestHeader("Content-Type",g.contentType),
// Set the Accepts header for the server, depending on the dataType
k.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Ze+"; q=0.01":""):g.accepts["*"]),g.headers)k.setRequestHeader(r,g.headers[r]);
// Allow custom headers/mimetypes and early abort
if(g.beforeSend&&(!1===g.beforeSend.call(v,k,g)||p))
// Abort if not done already and return
return k.abort();
// Aborting is no longer a cancellation
// If no transport, we auto-abort
if(u="abort",
// Install callbacks on deferreds
w.add(g.complete),k.done(g.success),k.fail(g.error),
// Get transport
c=et(Xe,g,e,k)){
// If request was aborted inside ajaxSend, stop there
if(k.readyState=1,
// Send global event
m&&y.trigger("ajaxSend",[k,g]),p)return k;
// Timeout
g.async&&0<g.timeout&&(h=x.setTimeout(function(){k.abort("timeout")},g.timeout));try{p=!1,c.send(a,n)}catch(t){
// Rethrow post-completion exceptions
if(p)throw t;
// Propagate others as results
n(-1,t)}}else n(-1,"No Transport");return k},getJSON:function(t,e,n){return kt.get(t,e,n,"json")},getScript:function(t,e){return kt.get(t,void 0,e,"script")}}),kt.each(["get","post"],function(t,o){kt[o]=function(t,e,n,i){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return yt(e)&&(i=i||n,n=e,e=void 0),kt.ajax(kt.extend({url:t,type:o,dataType:i,data:e,success:n},kt.isPlainObject(t)&&t))}}),kt._evalUrl=function(t){return kt.ajax({url:t,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},kt.fn.extend({wrapAll:function(t){var e;return this[0]&&(yt(t)&&(t=t.call(this[0])),
// The elements to wrap the target around
e=kt(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstElementChild;)t=t.firstElementChild;return t}).append(this)),this},wrapInner:function(n){return yt(n)?this.each(function(t){kt(this).wrapInner(n.call(this,t))}):this.each(function(){var t=kt(this),e=t.contents();e.length?e.wrapAll(n):t.append(n)})},wrap:function(e){var n=yt(e);return this.each(function(t){kt(this).wrapAll(n?e.call(this,t):e)})},unwrap:function(t){return this.parent(t).not("body").each(function(){kt(this).replaceWith(this.childNodes)}),this}}),kt.expr.pseudos.hidden=function(t){return!kt.expr.pseudos.visible(t)},kt.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},kt.ajaxSettings.xhr=function(){try{return new x.XMLHttpRequest}catch(t){}};var tn={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},en=kt.ajaxSettings.xhr();vt.cors=!!en&&"withCredentials"in en,vt.ajax=en=!!en,kt.ajaxTransport(function(o){var r,s;
// Cross domain only allowed if supported through XMLHttpRequest
if(vt.cors||en&&!o.crossDomain)return{send:function(t,e){var n,i=o.xhr();
// Apply custom fields if provided
if(i.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)i[n]=o.xhrFields[n];
// Override mime type if needed
// Set headers
for(n in o.mimeType&&i.overrideMimeType&&i.overrideMimeType(o.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
o.crossDomain||t["X-Requested-With"]||(t["X-Requested-With"]="XMLHttpRequest"),t)i.setRequestHeader(n,t[n]);
// Callback
r=function(t){return function(){r&&(r=s=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===t?i.abort():"error"===t?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof i.status?e(0,"error"):e(
// File: protocol always yields status 0; see #8605, #14207
i.status,i.statusText):e(tn[i.status]||i.status,i.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},
// Listen to events
i.onload=r(),s=i.onerror=i.ontimeout=r("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==i.onabort?i.onabort=s:i.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===i.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
x.setTimeout(function(){r&&s()})},
// Create the abort callback
r=r("abort");try{
// Do send the request (this may raise an exception)
i.send(o.hasContent&&o.data||null)}catch(t){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(r)throw t}},abort:function(){r&&r()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
kt.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),
// Install script dataType
kt.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return kt.globalEval(t),t}}}),
// Handle cache's special case and crossDomain
kt.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),
// Bind script tag hack transport
kt.ajaxTransport("script",function(n){var i,o;
// This transport only deals with cross domain requests
if(n.crossDomain)return{send:function(t,e){i=kt("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",o=function(t){i.remove(),o=null,t&&e("error"===t.type?404:200,t.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
st.head.appendChild(i[0])},abort:function(){o&&o()}}});var nn=[],on=/(=)\?(?=&|$)|\?\?/,rn;
// Default jsonp settings
kt.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=nn.pop()||kt.expando+"_"+Me++;return this[t]=!0,t}}),
// Detect, normalize options and install callbacks for jsonp requests
kt.ajaxPrefilter("json jsonp",function(t,e,n){var i,o,r,s=!1!==t.jsonp&&(on.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(t.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===t.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
return i=t.jsonpCallback=yt(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,
// Insert callback into url or form data
s?t[s]=t[s].replace(on,"$1"+i):!1!==t.jsonp&&(t.url+=(He.test(t.url)?"&":"?")+t.jsonp+"="+i),
// Use data converter to retrieve json after script execution
t.converters["script json"]=function(){return r||kt.error(i+" was not called"),r[0]},
// Force json dataType
t.dataTypes[0]="json",
// Install callback
o=x[i],x[i]=function(){r=arguments},
// Clean-up function (fires after converters)
n.always(function(){
// If previous value didn't exist - remove it
void 0===o?kt(x).removeProp(i):x[i]=o,
// Save back as free
t[i]&&(
// Make sure that re-using the options doesn't screw things around
t.jsonpCallback=e.jsonpCallback,
// Save the callback name for future use
nn.push(i)),
// Call if it was a function and we have a response
r&&yt(o)&&o(r[0]),r=o=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
vt.createHTMLDocument=((rn=st.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===rn.childNodes.length),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
kt.parseHTML=function(t,e,n){return"string"!=typeof t?[]:(
// Single tag
"boolean"==typeof e&&(n=e,e=!1),e||(
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
vt.createHTMLDocument?((
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
i=(e=st.implementation.createHTMLDocument("")).createElement("base")).href=st.location.href,e.head.appendChild(i)):e=st),r=!n&&[],(o=Ot.exec(t))?[e.createElement(o[1])]:(o=k([t],e,r),r&&r.length&&kt(r).remove(),kt.merge([],o.childNodes)));var i,o,r},
/**
 * Load a url into a page
 */
kt.fn.load=function(t,e,n){var i,o,r,s=this,a=t.indexOf(" ");return-1<a&&(i=V(t.slice(a)),t=t.slice(0,a)),
// If it's a function
yt(e)?(
// We assume that it's the callback
n=e,e=void 0):e&&"object"==typeof e&&(o="POST"),
// If we have elements to modify, make the request
0<s.length&&kt.ajax({url:t,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:o||"GET",dataType:"html",data:e}).done(function(t){
// Save response for use in complete callback
r=arguments,s.html(i?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
kt("<div>").append(kt.parseHTML(t)).find(i):
// Otherwise use the full result
t)}).always(n&&function(t,e){s.each(function(){n.apply(this,r||[t.responseText,e,t])})}),this},
// Attach a bunch of functions for handling common AJAX events
kt.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){kt.fn[e]=function(t){return this.on(e,t)}}),kt.expr.pseudos.animated=function(e){return kt.grep(kt.timers,function(t){return e===t.elem}).length},kt.offset={setOffset:function(t,e,n){var i,o,r,s,a,l,u,c=kt.css(t,"position"),d=kt(t),f={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(t.style.position="relative"),a=d.offset(),r=kt.css(t,"top"),l=kt.css(t,"left"),
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
o=(u=("absolute"===c||"fixed"===c)&&-1<(r+l).indexOf("auto"))?(s=(i=d.position()).top,i.left):(s=parseFloat(r)||0,parseFloat(l)||0),yt(e)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
e=e.call(t,n,kt.extend({},a))),null!=e.top&&(f.top=e.top-a.top+s),null!=e.left&&(f.left=e.left-a.left+o),"using"in e?e.using.call(t,f):d.css(f)}},kt.fn.extend({
// offset() relates an element's border box to the document origin
offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){kt.offset.setOffset(this,e,t)});var t,n,i=this[0];return i?
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
i.getClientRects().length?(
// Get document-relative position by adding viewport scroll to viewport-relative gBCR
t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},
// position() relates an element's margin box to its offset parent's padding box
// This corresponds to the behavior of CSS absolute positioning
position:function(){if(this[0]){var t,e,n,i=this[0],o={top:0,left:0};
// position:fixed elements are offset from the viewport, which itself always has zero offset
if("fixed"===kt.css(i,"position"))
// Assume position:fixed implies availability of getBoundingClientRect
e=i.getBoundingClientRect();else{for(e=this.offset(),
// Account for the *real* offset parent, which can be the document or its root element
// when a statically positioned element is identified
n=i.ownerDocument,t=i.offsetParent||n.documentElement;t&&(t===n.body||t===n.documentElement)&&"static"===kt.css(t,"position");)t=t.parentNode;t&&t!==i&&1===t.nodeType&&(
// Incorporate borders into its offset, since they are outside its content origin
(o=kt(t).offset()).top+=kt.css(t,"borderTopWidth",!0),o.left+=kt.css(t,"borderLeftWidth",!0))}
// Subtract parent offsets and element margins
return{top:e.top-o.top-kt.css(i,"marginTop",!0),left:e.left-o.left-kt.css(i,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&"static"===kt.css(t,"position");)t=t.offsetParent;return t||re})}}),
// Create scrollLeft and scrollTop methods
kt.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,o){var r="pageYOffset"===o;kt.fn[e]=function(t){return Mt(this,function(t,e,n){
// Coalesce documents and windows
var i;if(bt(t)?i=t:9===t.nodeType&&(i=t.defaultView),void 0===n)return i?i[o]:t[e];i?i.scrollTo(r?i.pageXOffset:n,r?n:i.pageYOffset):t[e]=n},e,t,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
kt.each(["top","left"],function(t,n){kt.cssHooks[n]=q(vt.pixelPosition,function(t,e){if(e)
// If curCSS returns percentage, fallback to offset
return e=D(t,n),he.test(e)?kt(t).position()[n]+"px":e})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
kt.each({Height:"height",Width:"width"},function(s,a){kt.each({padding:"inner"+s,content:a,"":"outer"+s},function(i,r){
// Margin is only for outerHeight, outerWidth
kt.fn[r]=function(t,e){var n=arguments.length&&(i||"boolean"!=typeof t),o=i||(!0===t||!0===e?"margin":"border");return Mt(this,function(t,e,n){var i;return bt(t)?0===r.indexOf("outer")?t["inner"+s]:t.document.documentElement["client"+s]:
// Get document width or height
9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+s],i["scroll"+s],t.body["offset"+s],i["offset"+s],i["client"+s])):void 0===n?
// Get width or height on the element, requesting but not forcing parseFloat
kt.css(t,e,o):
// Set width or height on the element
kt.style(t,e,n,o)},a,n?t:void 0,n)}})}),kt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,n){
// Handle event binding
kt.fn[n]=function(t,e){return 0<arguments.length?this.on(n,null,t,e):this.trigger(n)}}),kt.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)}}),kt.fn.extend({bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}}),
// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
kt.proxy=function(t,e){var n,i,o;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof e&&(n=t[e],e=t,t=n),yt(t))
// Simulated bind
return i=lt.call(arguments,2),
// Set the guid of unique handler to the same of original handler, so it can be removed
(o=function(){return t.apply(e||this,i.concat(lt.call(arguments)))}).guid=t.guid=t.guid||kt.guid++,o},kt.holdReady=function(t){t?kt.readyWait++:kt.ready(!0)},kt.isArray=Array.isArray,kt.parseJSON=JSON.parse,kt.nodeName=u,kt.isFunction=yt,kt.isWindow=bt,kt.camelCase=h,kt.type=g,kt.now=Date.now,kt.isNumeric=function(t){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var e=kt.type(t);return("number"===e||"string"===e)&&
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(t-parseFloat(t))},
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return kt});var
// Map over jQuery in case of overwrite
sn=x.jQuery,
// Map over the $ in case of overwrite
an=x.$;return kt.noConflict=function(t){return x.$===kt&&(x.$=an),t&&x.jQuery===kt&&(x.jQuery=sn),kt},
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
t||(x.jQuery=x.$=kt),kt}),function t(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Swup=n():e.Swup=n()}(window,function(){/******/
return function(n){
/******/
/******/ // The require function
/******/function o(t){
/******/
/******/ // Check if module is in cache
/******/if(i[t])
/******/return i[t].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var e=i[t]={
/******/i:t,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[t].call(e.exports,e,e.exports,o),
/******/
/******/ // Flag the module as loaded
/******/e.l=!0,e.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/ // webpackBootstrap
/******/ // The module cache
/******/var i={};
/******/
/******/
/******/ // Load entry module and return exports
/******/return o.m=n,
/******/
/******/ // expose the module cache
/******/o.c=i,
/******/
/******/ // define getter function for harmony exports
/******/o.d=function(t,e,n){
/******/o.o(t,e)||
/******/Object.defineProperty(t,e,{enumerable:!0,get:n})
/******/},
/******/
/******/ // define __esModule on exports
/******/o.r=function(t){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(t,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/o.t=function(e,t){
/******/if(
/******/1&t&&(e=o(e)),8&t)return e;
/******/if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;
/******/var n=Object.create(null);
/******/
/******/if(o.r(n),
/******/Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));
/******/return n;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=function(e){
/******/var t=e&&e.__esModule?
/******/function t(){return e.default}:
/******/function t(){return e};
/******/
/******/return o.d(t,"a",t),t;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},
/******/
/******/ // __webpack_public_path__
/******/o.p="",o(o.s=2);
/******/}
/************************************************************************/
/******/([
/* 0 */
/***/function(t,e,n){"use strict";function i(t,e){var n=1<arguments.length&&void 0!==e?e:document;return"string"!=typeof t?t:n.querySelector(t)}function o(t,e
/***/){var n=1<arguments.length&&void 0!==e?e:document;return"string"!=typeof t?t:Array.prototype.slice.call(n.querySelectorAll(t))}Object.defineProperty(e,"__esModule",{value:!0}),e.query=i,e.queryAll=o},
/* 1 */
/***/function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),r=function(){function t(){i(this,t),this.link=document.createElement("a")}return o(t,[{key:"setPath",value:function t(e){this.link.href=e}},{key:"getPath",value:function t(){var e=this.link.pathname;return"/"!=e[0]&&(e="/"+e),e}},{key:"getAddress",value:function t(){var e=this.link.pathname+this.link.search;return"/"!=e[0]&&(e="/"+e),e}},{key:"getHash",value:function t(){return this.link.hash}}]),t}();e.default=r},
/* 2 */
/***/function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o,r=i(n(3));t.exports=r.default},
/* 3 */
/***/function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),a,l=i(n(4)),u,c=i(n(6)),d,f=i(n(1)),h,p=i(n(7)),m,g=i(n(8)),v,y=i(n(9)),b,w=i(n(10)),$,k=i(n(11)),x,_=i(n(12)),j,C=i(n(13)),T,O=i(n(14)),S,E=i(n(15)),z,A=i(n(16)),P,L=i(n(17)),D,q=i(n(18)),M,H=i(n(19)),R,N=i(n(20)),I,F=i(n(21)),B,W=i(n(22)),G,U=i(n(23)),Q,Y=i(n(24)),K,V=i(n(25)),X=function(){function i(t){o(this,i);
// default options
var e={cache:!0,animationSelector:'[class*="transition-"]',elements:["#swup"],pageClassPrefix:"",debugMode:!1,scroll:!0,doScrollingRightAway:!1,animateScroll:!0,scrollFriction:.3,scrollAcceleration:.04,preload:!0,support:!0,plugins:[],skipPopStateHandling:function t(e){return!e.state||"swup"!=e.state.source},animateHistoryBrowsing:!1,LINK_SELECTOR:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',FORM_SELECTOR:"form[data-swup-form]"
/**
             * current transition object
             */};this.transition={};var n=r({},e,t);
/**
         * handler arrays
         */this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],hoverLink:[],openPageInNewTab:[],pageLoaded:[],pagePreloaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],scrollDone:[],scrollStart:[],serverError:[],submitForm:[],willReplaceContent:[]},
/**
         * helper variables
         */
// id of element to scroll to after render
this.scrollToElement=null,
// promise used for preload, so no new loading of the same page starts while page is loading
this.preloadPromise=null,
// save options
this.options=n,
// plugins array
this.plugins=[],
/**
         * make modules accessible in instance
         */
this.getUrl=O.default,this.cache=new c.default,this.link=new f.default,this.transitionEndEvent=(0,p.default)(),this.getDataFromHtml=y.default,this.getPage=g.default,this.scrollTo=E.default,this.loadPage=w.default,this.renderPage=k.default,this.createState=_.default,this.triggerEvent=C.default,this.classify=A.default,this.doScrolling=L.default,this.markSwupElements=q.default,this.on=H.default,this.off=N.default,this.updateTransition=F.default,this.preloadPage=W.default,this.preloadPages=U.default,this.usePlugin=Y.default,this.log=V.default,this.enable=this.enable,this.destroy=this.destroy,
// attach instance to window in debug mode
this.options.debugMode&&(window.swup=this),this.getUrl(),this.enable()}return s(i,[{key:"enable",value:function t(){var e=this;
/**
             * support check
             */if(this.options.support){
// check pushState support
if(!("pushState"in window.history))return void console.warn("pushState is not supported");
// check transitionEnd support
if(!(0,p.default)())return void console.warn("transitionEnd detection is not supported");
// check Promise support
if(this.transitionEndEvent=(0,p.default)(),"undefined"==typeof Promise||-1===Promise.toString().indexOf("[native code]"))return void console.warn("Promise is not supported")}
// variable to keep event listeners from "delegate"
this.delegatedListeners={},
/**
             * link click handler
             */
this.delegatedListeners.click=(0,l.default)(document,this.options.LINK_SELECTOR,"click",this.linkClickHandler.bind(this)),
/**
             * link mouseover handler (preload)
             */
this.delegatedListeners.mouseover=(0,l.default)(document.body,this.options.LINK_SELECTOR,"mouseover",this.linkMouseoverHandler.bind(this)),
/**
             * form submit handler
             */
this.delegatedListeners.formSubmit=(0,l.default)(document,this.options.FORM_SELECTOR,"submit",this.formSubmitHandler.bind(this)),
/**
             * popstate handler
             */
window.addEventListener("popstate",this.popStateHandler.bind(this));
/**
             * initial save to cache
             */
var n=this.getDataFromHtml(document.documentElement.outerHTML);n.url=this.currentUrl,this.options.cache&&this.cache.cacheUrl(n,this.options.debugMode)
/**
             * mark swup blocks in html
             */,this.markSwupElements(document.documentElement),
/**
             * enable plugins from options
             */
this.options.plugins.forEach(function(t){return e.usePlugin(t)}),
/**
             * modify initial history record
             */
window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),
/**
             * Disable browser scroll control on popstates when animateHistoryBrowsing option is enabled
             */
this.options.animateHistoryBrowsing&&(window.history.scrollRestoration="manual")
/**
             * trigger enabled event
             */,this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),
/**
             * trigger page view event
             */
this.triggerEvent("pageView"),
/**
             * preload pages if possible
             */
this.preloadPages()}},{key:"destroy",value:function t(){
// remove delegated listeners
this.delegatedListeners.click.destroy(),this.delegatedListeners.mouseover.destroy(),
// remove popstate listener
window.removeEventListener("popstate",this.popStateHandler.bind(this)),
// empty cache
this.cache.empty(),
// remove swup data atributes from blocks
document.querySelectorAll("[data-swup]").forEach(function(t){delete t.dataset.swup}),
// remove handlers
this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function t(e){
// no control key pressed
if(e.metaKey)
// open in new tab (do nothing)
this.triggerEvent("openPageInNewTab",e);else
// index of pressed button needs to be checked because Firefox triggers click on all mouse buttons
if(0===e.button){this.triggerEvent("clickLink",e);var n=new f.default;if(e.preventDefault(),n.setPath(e.delegateTarget.href),n.getAddress()==this.currentUrl||""==n.getAddress())
// link to the same URL
if(""!=n.getHash()){
// link to the same URL with hash
this.triggerEvent("samePageWithHash",e);var i=document.querySelector(n.getHash());if(null!=i){
// referenced element found
if(this.options.scroll){var o=i.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,o)}history.replaceState({url:n.getAddress()+n.getHash(),random:Math.random(),source:"swup"},document.title,n.getAddress()+n.getHash())}else
// referenced element not found
console.warn("Element for offset not found ("+n.getHash()+")")}else
// link to the same URL without hash
this.triggerEvent("samePage",e),this.options.scroll&&this.scrollTo(document.body,0,1);else{
// link to different url
""!=n.getHash()&&(this.scrollToElement=n.getHash());
// get custom transition from data
var r=e.delegateTarget.dataset.swupTransition;
// load page
this.loadPage({url:n.getAddress(),customTransition:r},!1)}}}},{key:"linkMouseoverHandler",value:function t(r){var s=this;if(this.triggerEvent("hoverLink",r),this.options.preload){var a=new f.default;a.setPath(r.delegateTarget.href),a.getAddress()==this.currentUrl||this.cache.exists(a.getAddress())||null!=this.preloadPromise||(this.preloadPromise=new Promise(function(i,o){s.getPage({url:a.getAddress()},function(t,e){if(500===e.status)return s.triggerEvent("serverError",r),void o(a.getAddress());
// get json data
var n=s.getDataFromHtml(t,e);null!=n?(n.url=a.getAddress(),s.cache.cacheUrl(n,s.options.debugMode),s.triggerEvent("pagePreloaded",r),i(),s.preloadPromise=null):o(a.getAddress())})}),this.preloadPromise.route=a.getAddress())}}},{key:"formSubmitHandler",value:function t(e){
// no control key pressed
if(e.metaKey)this.triggerEvent("openFormSubmitInNewTab",e);else{this.triggerEvent("submitForm",e),e.preventDefault();var n=e.target,i=new FormData(n),o=new f.default;if(o.setPath(n.action),""!=o.getHash()&&(this.scrollToElement=o.getHash()),"get"!=n.method.toLowerCase())
// remove page from cache
this.cache.remove(o.getAddress()),
// send data
this.loadPage({url:o.getAddress(),method:n.method,data:i});else{
// create base url
var r=o.getAddress()||window.location.href,s=n.querySelectorAll("input, select");-1==r.indexOf("?")?r+="?":r+="&",
// add form data to url
s.forEach(function(t){"checkbox"==t.type||"radio"==t.type?t.checked&&(r+=encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)+"&"):r+=encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)+"&"}),
// remove last "&"
r=r.slice(0,-1),
// remove page from cache
this.cache.remove(r),
// send data
this.loadPage({url:r})}}}},{key:"popStateHandler",value:function t(e){var n=new f.default;this.options.skipPopStateHandling(e)||(n.setPath(e.state?e.state.url:window.location.pathname),""!=n.getHash()?this.scrollToElement=n.getHash():e.preventDefault(),this.triggerEvent("popState",e),this.loadPage({url:n.getAddress()},e))}}]),i}();e.default=X},
/* 4 */
/***/function(t,e,n){
/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function i(t,e,n,i,o){var r=s.apply(this,arguments);return t.addEventListener(n,r,o),{destroy:function(){t.removeEventListener(n,r,o)}}}
/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */function s(e,n,t,i){return function(t){t.delegateTarget=o(t.target,n),t.delegateTarget&&i.call(e,t)}}var o=n(5);t.exports=i},
/* 5 */
/***/function(t,e){
/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function n(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;
/**
 * A polyfill for Element.matches()
 */if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=n},
/* 6 */
/***/function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),r=function(){function t(){i(this,t),this.pages={},this.count=0,this.last=null}return o(t,[{key:"cacheUrl",value:function t(e,n){this.count++,e.url in this.pages==!1&&(this.pages[e.url]=e),this.last=this.pages[e.url],n&&this.displayCache()}},{key:"getPage",value:function t(e){return this.pages[e]}},{key:"displayCache",value:function t(){for(var e in console.groupCollapsed("Cache ("+Object.keys(this.pages).length+")"),this.pages)console.log(this.pages[e]);console.groupEnd()}},{key:"exists",value:function t(e){return e in this.pages}},{key:"empty",value:function t(e){this.pages={},this.count=0,this.last=null,e&&console.log("Cache cleared")}},{key:"remove",value:function t(e){delete this.pages[e]}}]),t}();e.default=r},
/* 7 */
/***/function(t,e,n){"use strict";t.exports=function t(){var e=document.createElement("div"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in n)if(void 0!==e.style[i])return n[i];return!1}},
/* 8 */
/***/function(t,e,n){"use strict";var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};t.exports=function(t,e){var n=1<arguments.length&&void 0!==e&&e,i={url:window.location.pathname+window.location.search,method:"GET",data:null},o=s({},i,t),r=new XMLHttpRequest;return r.onreadystatechange=function(){4===r.readyState&&(500!==r.status?n(r.responseText,r):n(null,r))},r.open(o.method,o.url,!0),r.setRequestHeader("X-Requested-With","swup"),r.send(o.data),r}},
/* 9 */
/***/function(t,e,n){"use strict";var l=n(0);t.exports=function(t,e){var n=this,i=t.replace("<body",'<div id="swupBody"').replace("</body>","</div>"),o=document.createElement("div"),r;o.innerHTML=i;for(var s=[],a=0;a<this.options.elements.length;a++){if(null==o.querySelector(this.options.elements[a]))return console.warn("Element "+this.options.elements[a]+" is not found in cached page."),null;(0,l.queryAll)(this.options.elements[a]).forEach(function(t,e){(0,l.queryAll)(n.options.elements[a],o)[e].dataset.swup=s.length,s.push((0,l.queryAll)(n.options.elements[a],o)[e].outerHTML)})}return{title:o.querySelector("title").innerText,pageClass:o.querySelector("#swupBody").className,originalContent:t,blocks:s,responseURL:null!=e?e.responseURL:window.location.href}}},
/* 10 */
/***/function(t,e,n){"use strict";var a=n(0),l=Array.prototype.forEach;t.exports=function(r,t){var s=this;
// scrolling
this.options.doScrollingRightAway&&!this.scrollToElement&&this.doScrolling(t);
// create array for storing animation promises
var e=[];
// set transition object
if(null!=r.customTransition?(this.updateTransition(window.location.pathname,r.url,r.customTransition),document.documentElement.classList.add("to-"+this.classify(r.customTransition))):this.updateTransition(window.location.pathname,r.url),!t||this.options.animateHistoryBrowsing){
// start animation
this.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),t&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+this.classify(r.url));
// detect animation end
var n=(0,a.queryAll)(this.options.animationSelector);
// create pop element with or without anchor
if(l.call(n,function(n){var t=new Promise(function(e){n.addEventListener(s.transitionEndEvent,function(t){n==t.target&&e()})});e.push(t)}),Promise.all(e).then(function(){s.triggerEvent("animationOutDone")}),null!=this.scrollToElement)var i=r.url+this.scrollToElement;else var i=r.url;t||this.createState(i)}else
// proceed without animating
this.triggerEvent("animationSkipped");if(this.cache.exists(r.url)){var o=new Promise(function(t){t()});this.triggerEvent("pageRetrievedFromCache")}else if(this.preloadPromise&&this.preloadPromise.route==r.url)var o=this.preloadPromise;else var o=new Promise(function(i,o){s.getPage(r,function(t,e){if(500===e.status)return s.triggerEvent("serverError"),void o(r.url);
// get json data
var n=s.getDataFromHtml(t,e);null!=n?(n.url=r.url,
// render page
s.cache.cacheUrl(n,s.options.debugMode),s.triggerEvent("pageLoaded"),i()):o(r.url)})});Promise.all(e.concat([o])).then(function(){
// render page
s.renderPage(s.cache.getPage(r.url),t),s.preloadPromise=null}).catch(function(t){
// rewrite the skipPopStateHandling function to redirect manually when the history.go is processed
s.options.skipPopStateHandling=function(){return window.location=t,!0},
// go back to the actual page were still at
window.history.go(-1)})}},
/* 11 */
/***/function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(0),o,l=i(n(1)),u=Array.prototype.forEach;t.exports=function(t,e){var i=this;document.documentElement.classList.remove("is-leaving");
// replace state in case the url was redirected
var n=new l.default;n.setPath(t.responseURL),window.location.pathname!==n.getPath()&&window.history.replaceState({url:n.getPath(),random:Math.random(),source:"swup"},document.title,n.getPath()),
// only add for non-popstate transitions
e&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent");
// replace blocks
for(var o=0;o<t.blocks.length;o++)document.body.querySelector('[data-swup="'+o+'"]').outerHTML=t.blocks[o];
// set title
document.title=t.title,
// handle classes after render
// remove
!1!==this.options.pageClassPrefix&&document.body.className.split(" ").forEach(function(t){
// empty string for page class
""!=t&&t.includes(i.options.pageClassPrefix)&&document.body.classList.remove(t)}),
// add
""!=t.pageClass&&t.pageClass.split(" ").forEach(function(t){""!=t&&t.includes(i.options.pageClassPrefix)&&document.body.classList.add(t)}),this.triggerEvent("contentReplaced"),this.triggerEvent("pageView"),this.options.cache||this.cache.empty(this.options.debugMode),setTimeout(function(){e&&!i.options.animateHistoryBrowsing||(i.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))},10),
// scrolling
this.options.doScrollingRightAway&&!this.scrollToElement||this.doScrolling(e);
// detect animation end
var r=(0,a.queryAll)(this.options.animationSelector),s=[];u.call(r,function(n){var t=new Promise(function(e){n.addEventListener(i.transitionEndEvent,function(t){n==t.target&&e()})});s.push(t)}),
//preload pages if possible
this.preloadPages(),e&&!this.options.animateHistoryBrowsing||Promise.all(s).then(function(){i.triggerEvent("animationInDone"),
// remove "to-{page}" classes
document.documentElement.className.split(" ").forEach(function(t){(new RegExp("^to-").test(t)||"is-changing"===t||"is-rendering"===t||"is-popstate"===t)&&document.documentElement.classList.remove(t)})}),
// update current url
this.getUrl(),
// reset scroll-to element
this.scrollToElement=null}},
/* 12 */
/***/function(t,e,n){"use strict";t.exports=function(t){window.history.pushState({url:t||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,t||window.location.href.split(window.location.hostname)[1])}},
/* 13 */
/***/function(t,e,n){"use strict";t.exports=function(t,e){this.options.debugMode&&e?(console.groupCollapsed("%cswup:%c"+t,"color: #343434","color: #009ACD"),console.log(e),console.groupEnd()):this.options.debugMode&&console.log("%cswup:%c"+t,"color: #343434","color: #009ACD"),
// call saved handlers with "on" method and pass originalEvent object if available
this._handlers[t].forEach(function(t){try{t(e)}catch(t){console.error(t)}});
// trigger event on document with prefix "swup:"
var n=new CustomEvent("swup:"+t,{detail:t});document.dispatchEvent(n)}},
/* 14 */
/***/function(t,e,n){"use strict";t.exports=function(){this.currentUrl=window.location.pathname+window.location.search}},
/* 15 */
/***/function(t,e,n){"use strict";t.exports=function(t,e,n){function i(){return document.body.scrollTop||document.documentElement.scrollTop}function o(){var t=f-u,e;return g(t*l),u+=c*=a,t}var r=this,s=2<arguments.length&&void 0!==n?n:this.options.animateScroll,a=1-this.options.scrollFriction,l=this.options.scrollAcceleration,u=0,c=0,d=0,f=0,h=0,p=null,m=function t(){var e=o();v(),1===h&&u<d||-1===h&&d<u?p=requestAnimationFrame(t):(window.scrollTo(0,d),r.triggerEvent("scrollDone"))},g=function t(e){c+=e},v=function t(){window.scrollTo(0,u)};window.addEventListener("mousewheel",function(t){p&&(cancelAnimationFrame(p),p=null)},{passive:!0});var y=function t(e,n){u=i(),f=e+(h=e<u?-1:1),c=0,u!=(d=e)?m():r.triggerEvent("scrollDone")};this.triggerEvent("scrollStart"),0==s?(window.scrollTo(0,e),this.triggerEvent("scrollDone")):y(e)}},
/* 16 */
/***/function(t,e,n){"use strict";t.exports=function(t){var e=t.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");// Trim - from end of text
return"/"==e[0]&&(e=e.splice(1)),""==e&&(e="homepage"),e}},
/* 17 */
/***/function(t,e,n){"use strict";t.exports=function(t){if(this.options.scroll&&(!t||this.options.animateHistoryBrowsing))if(null!=this.scrollToElement){var e=document.querySelector(this.scrollToElement);if(null!=e){var n=e.getBoundingClientRect().top+window.pageYOffset;this.scrollTo(document.body,n)}else console.warn("Element for offset not found ("+this.scrollToElement+")");this.scrollToElement=null}else this.scrollTo(document.body,0)}},
/* 18 */
/***/function(t,e,n){"use strict";var s=n(0);t.exports=function(n){for(var i=this,o=0,r=0;r<this.options.elements.length;r++)null==n.querySelector(this.options.elements[r])?console.warn("Element "+this.options.elements[r]+" is not in current page."):(0,s.queryAll)(this.options.elements[r]).forEach(function(t,e){(0,s.queryAll)(i.options.elements[r],n)[e].dataset.swup=o,o++})}},
/* 19 */
/***/function(t,e,n){"use strict";t.exports=function t(e,n){this._handlers[e]?this._handlers[e].push(n):console.warn("Unsupported event "+e+".")}},
/* 20 */
/***/function(t,e,n){"use strict";t.exports=function t(e,n){var i=this;if(null!=e)if(null!=n)if(this._handlers[e]&&this._handlers[e].filter(function(t){return t===n}).length){var o=this._handlers[e].filter(function(t){return t===n})[0],r=this._handlers[e].indexOf(o);-1<r&&this._handlers[e].splice(r,1)}else console.warn("Handler for event '"+e+"' no found.");else this._handlers[e]=[];else Object.keys(this._handlers).forEach(function(t){i._handlers[t]=[]})}},
/* 21 */
/***/function(t,e,n){"use strict";t.exports=function(t,e,n){
// homepage case
"/"==t&&(t="/homepage"),"/"==e&&(e="/homepage"),
// transition routes
this.transition={from:t.replace("/",""),to:e.replace("/","")},n&&(this.transition.custom=n)}},
/* 22 */
/***/function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o,r=i(n(1));t.exports=function(t){var i=this,o=new r.default;o.setPath(t),o.getAddress()==this.currentUrl||this.cache.exists(o.getAddress())||null!=this.preloadPromise||this.getPage({url:o.getAddress()},function(t,e){if(500!==e.status){
// get json data
var n=i.getDataFromHtml(t,e);null!=n&&(n.url=o.getAddress(),i.cache.cacheUrl(n,i.options.debugMode),i.triggerEvent("pagePreloaded"))}else i.triggerEvent("serverError")})}},
/* 23 */
/***/function(t,e,n){"use strict";var i=n(0);t.exports=function(){var e=this;this.options.preload&&(0,i.queryAll)("[data-swup-preload]").forEach(function(t){e.preloadPage(t.href)})}},
/* 24 */
/***/function(t,e,n){"use strict";t.exports=function(t,e){var i=this;e=Object.assign({},t.options,e),t.options=e;var n=function t(){var e=i.cache.getPage(window.location.pathname+window.location.search),n=document.createElement("html");return n.innerHTML=e.originalContent,n};return this.plugins.push(t),t.exec(e,this,n),this.plugins}},
/* 25 */
/***/function(t,e,n){"use strict";t.exports=function(t){this.options.debugMode&&console.log(t+"%c","color: #009ACD")}}
/******/])}),function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AOS=e():t.AOS=e()}(this,function(){return function(n){function i(t){if(o[t])return o[t].exports;var e=o[t]={exports:{},id:t,loaded:!1};return n[t].call(e.exports,e,e.exports,i),e.loaded=!0,e.exports}var o={};return i.m=n,i.c=o,i.p="dist/",i(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r,s,a=i((i(n(1)),n(6))),l,u=i(n(7)),c,d=i(n(8)),f,h=i(n(9)),p,m=i(n(10)),g,v=i(n(11)),y,b=i(n(14)),w=[],$=!1,k={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},x=function(t){var e;if(0<arguments.length&&void 0!==t&&t&&($=!0),$)return w=(0,v.default)(w,k),(0,m.default)(w,k.once),w},_=function(){w=(0,b.default)(),x()},j=function(){w.forEach(function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")})},C=function(t){return!0===t||"mobile"===t&&h.default.mobile()||"phone"===t&&h.default.phone()||"tablet"===t&&h.default.tablet()||"function"==typeof t&&!0===t()},T=function(t){k=o(k,t),w=(0,b.default)();var e=document.all&&!window.atob;return C(k.disable)||e?j():(k.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),k.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",k.easing),document.querySelector("body").setAttribute("data-aos-duration",k.duration),document.querySelector("body").setAttribute("data-aos-delay",k.delay),"DOMContentLoaded"===k.startEvent&&-1<["complete","interactive"].indexOf(document.readyState)?x(!0):"load"===k.startEvent?window.addEventListener(k.startEvent,function(){x(!0)}):document.addEventListener(k.startEvent,function(){x(!0)}),window.addEventListener("resize",(0,u.default)(x,k.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(x,k.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,m.default)(w,k.once)},k.throttleDelay)),k.disableMutationObserver||d.default.ready("[data-aos]",_),w)};t.exports={init:T,refresh:x,refreshHard:_}},function(t,e){},,,,,function(y,t){(function(t){"use strict";function r(i,o,t){function n(t){var e=f,n=h;return f=h=void 0,y=t,m=i.apply(n,e)}function r(t){return y=t,g=setTimeout(a,o),b?n(t):m}function e(t){var e,n,i=o-(t-v);return w?C(i,p-(t-y)):i}function s(t){var e=t-v,n;return void 0===v||o<=e||e<0||w&&p<=t-y}function a(){var t=T();return s(t)?l(t):void(g=setTimeout(a,e(t)))}function l(t){return g=void 0,$&&f?n(t):(f=h=void 0,m)}function u(){void 0!==g&&clearTimeout(g),f=v=h=g=void(y=0)}function c(){return void 0===g?m:l(T())}function d(){var t=T(),e=s(t);if(f=arguments,h=this,v=t,e){if(void 0===g)return r(v);if(w)return g=setTimeout(a,o),n(v)}return void 0===g&&(g=setTimeout(a,o)),m}var f,h,p,m,g,v,y=0,b=!1,w=!1,$=!0;if("function"!=typeof i)throw new TypeError(_);return o=x(o)||0,k(t)&&(b=!!t.leading,p=(w="maxWait"in t)?j(x(t.maxWait)||0,o):p,$="trailing"in t?!!t.trailing:$),d.cancel=u,d.flush=c,d}function e(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError(_);return k(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),r(t,e,{leading:i,maxWait:e,trailing:o})}function k(t){var e=void 0===t?"undefined":o(t);return!!t&&("object"==e||"function"==e)}function n(t){return!!t&&"object"==(void 0===t?"undefined":o(t))}function i(t){return"symbol"==(void 0===t?"undefined":o(t))||n(t)&&v.call(t)==a}function x(t){if("number"==typeof t)return t;if(i(t))return s;if(k(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=k(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=c.test(t);return n||d.test(t)?f(t.slice(2),n?2:8):u.test(t)?s:+t}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_="Expected a function",s=NaN,a="[object Symbol]",l=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,f=parseInt,h="object"==(void 0===t?"undefined":o(t))&&t&&t.Object===Object&&t,p="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,m=h||p||Function("return this")(),g,v=Object.prototype.toString,j=Math.max,C=Math.min,T=function(){return m.Date.now()};y.exports=e}).call(t,function(){return this}())},function(v,t){(function(t){"use strict";function e(i,o,t){function n(t){var e=f,n=h;return f=h=void 0,y=t,m=i.apply(n,e)}function r(t){return y=t,g=setTimeout(a,o),b?n(t):m}function e(t){var e,n,i=o-(t-v);return w?C(i,p-(t-y)):i}function s(t){var e=t-v,n;return void 0===v||o<=e||e<0||w&&p<=t-y}function a(){var t=T();return s(t)?l(t):void(g=setTimeout(a,e(t)))}function l(t){return g=void 0,$&&f?n(t):(f=h=void 0,m)}function u(){void 0!==g&&clearTimeout(g),f=v=h=g=void(y=0)}function c(){return void 0===g?m:l(T())}function d(){var t=T(),e=s(t);if(f=arguments,h=this,v=t,e){if(void 0===g)return r(v);if(w)return g=setTimeout(a,o),n(v)}return void 0===g&&(g=setTimeout(a,o)),m}var f,h,p,m,g,v,y=0,b=!1,w=!1,$=!0;if("function"!=typeof i)throw new TypeError(_);return o=x(o)||0,k(t)&&(b=!!t.leading,p=(w="maxWait"in t)?j(x(t.maxWait)||0,o):p,$="trailing"in t?!!t.trailing:$),d.cancel=u,d.flush=c,d}function k(t){var e=void 0===t?"undefined":o(t);return!!t&&("object"==e||"function"==e)}function n(t){return!!t&&"object"==(void 0===t?"undefined":o(t))}function i(t){return"symbol"==(void 0===t?"undefined":o(t))||n(t)&&g.call(t)==s}function x(t){if("number"==typeof t)return t;if(i(t))return r;if(k(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=k(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var n=u.test(t);return n||c.test(t)?d(t.slice(2),n?2:8):l.test(t)?r:+t}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_="Expected a function",r=NaN,s="[object Symbol]",a=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,f="object"==(void 0===t?"undefined":o(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,p=f||h||Function("return this")(),m,g=Object.prototype.toString,j=Math.max,C=Math.min,T=function(){return p.Date.now()};v.exports=e}).call(t,function(){return this}())},function(t,e){"use strict";function o(t){var e=void 0,n=void 0,i=void 0;for(e=0;e<t.length;e+=1){if((n=t[e]).dataset&&n.dataset.aos)return!0;if(i=n.children&&o(n.children))return!0}return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(){return!!r()}function i(t,e){var n=window.document,i,o=new(r())(s);a=e,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(t){t&&t.forEach(function(t){var e=Array.prototype.slice.call(t.addedNodes),n=Array.prototype.slice.call(t.removedNodes),i;if(o(e.concat(n)))return a()})}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){};e.default={isSupported:n,ready:i}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function t(){n(this,t)}return o(t,[{key:"phone",value:function(){var t=i();return!(!r.test(t)&&!s.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=i();return!(!a.test(t)&&!l.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e,n){var i=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!n&&"true"!==i)&&t.node.classList.remove("aos-animate")},n=function(t,n){var i=window.pageYOffset,o=window.innerHeight;t.forEach(function(t,e){r(t,o+i,n)})};e.default=n},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,r=i(n(12)),s=function(t,n){return t.forEach(function(t,e){t.node.classList.add("aos-init"),t.position=(0,r.default)(t.node,n.offset)}),t};e.default=s},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o,s=i(n(13)),r=function(t,e){var n=0,i=0,o=window.innerHeight,r={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(i=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(t=document.querySelectorAll(r.anchor)[0]),n=(0,s.default)(t).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=t.offsetHeight/2;break;case"bottom-bottom":n+=t.offsetHeight;break;case"top-center":n+=o/2;break;case"bottom-center":n+=o/2+t.offsetHeight;break;case"center-center":n+=o/2+t.offsetHeight/2;break;case"top-top":n+=o;break;case"bottom-top":n+=t.offsetHeight+o;break;case"center-top":n+=t.offsetHeight/2+o}return r.anchorPlacement||r.offset||isNaN(e)||(i=e),n+i};e.default=r},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}};e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(t){return{node:t}})};e.default=n}])}),function t(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],n);else{var i="object"==typeof exports?n(require("jquery")):n(e.jQuery);for(var o in i)("object"==typeof exports?exports:e)[o]=i[o]}}(window,function(n){/******/
return function(n){
/******/
/******/ // The require function
/******/function o(t){
/******/
/******/ // Check if module is in cache
/******/if(i[t])
/******/return i[t].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var e=i[t]={
/******/i:t,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return n[t].call(e.exports,e,e.exports,o),
/******/
/******/ // Flag the module as loaded
/******/e.l=!0,e.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/ // webpackBootstrap
/******/ // The module cache
/******/var i={};
/******/
/******/
/******/ // Load entry module and return exports
/******/return o.m=n,
/******/
/******/ // expose the module cache
/******/o.c=i,
/******/
/******/ // define getter function for harmony exports
/******/o.d=function(t,e,n){
/******/o.o(t,e)||
/******/Object.defineProperty(t,e,{enumerable:!0,get:n})
/******/},
/******/
/******/ // define __esModule on exports
/******/o.r=function(t){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(t,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/o.t=function(e,t){
/******/if(
/******/1&t&&(e=o(e)),8&t)return e;
/******/if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;
/******/var n=Object.create(null);
/******/
/******/if(o.r(n),
/******/Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));
/******/return n;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/o.n=function(e){
/******/var t=e&&e.__esModule?
/******/function t(){return e.default}:
/******/function t(){return e};
/******/
/******/return o.d(t,"a",t),t;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},
/******/
/******/ // __webpack_public_path__
/******/o.p="",o(o.s=0);
/******/}
/************************************************************************/
/******/({
/***/"./js/entries/foundation.js":
/*!**********************************!*\
  !*** ./js/entries/foundation.js ***!
  \**********************************/
/*! exports provided: Foundation, CoreUtils, Box, onImagesLoaded, Keyboard, MediaQuery, Motion, Nest, Timer, Touch, Triggers, Abide, Accordion, AccordionMenu, Drilldown, Dropdown, DropdownMenu, Equalizer, Interchange, Magellan, OffCanvas, Orbit, ResponsiveMenu, ResponsiveToggle, Reveal, Slider, SmoothScroll, Sticky, Tabs, Toggler, Tooltip, ResponsiveAccordionTabs, default */
/***/function(t,e,n){"use strict";n.r(e);
/* harmony import */var i=n(/*! jquery */"jquery"),o=/* */n.n(i),r=n(/*! ../foundation.core */"./js/foundation.core.js");
/* harmony import */
/* harmony reexport (safe) */n.d(e,"Foundation",function(){return r.Foundation});
/* harmony import */var s=n(/*! ../foundation.core.utils */"./js/foundation.core.utils.js");
/* harmony reexport (module object) */n.d(e,"CoreUtils",function(){return s});
/* harmony import */var a=n(/*! ../foundation.util.box */"./js/foundation.util.box.js");
/* harmony reexport (safe) */n.d(e,"Box",function(){return a.Box});
/* harmony import */var l=n(/*! ../foundation.util.imageLoader */"./js/foundation.util.imageLoader.js");
/* harmony reexport (safe) */n.d(e,"onImagesLoaded",function(){return l.onImagesLoaded});
/* harmony import */var u=n(/*! ../foundation.util.keyboard */"./js/foundation.util.keyboard.js");
/* harmony reexport (safe) */n.d(e,"Keyboard",function(){return u.Keyboard});
/* harmony import */var c=n(/*! ../foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js");
/* harmony reexport (safe) */n.d(e,"MediaQuery",function(){return c.MediaQuery});
/* harmony import */var d=n(/*! ../foundation.util.motion */"./js/foundation.util.motion.js");
/* harmony reexport (safe) */n.d(e,"Motion",function(){return d.Motion});
/* harmony import */var f=n(/*! ../foundation.util.nest */"./js/foundation.util.nest.js");
/* harmony reexport (safe) */n.d(e,"Nest",function(){return f.Nest});
/* harmony import */var h=n(/*! ../foundation.util.timer */"./js/foundation.util.timer.js");
/* harmony reexport (safe) */n.d(e,"Timer",function(){return h.Timer});
/* harmony import */var p=n(/*! ../foundation.util.touch */"./js/foundation.util.touch.js");
/* harmony reexport (safe) */n.d(e,"Touch",function(){return p.Touch});
/* harmony import */var m=n(/*! ../foundation.util.triggers */"./js/foundation.util.triggers.js");
/* harmony reexport (safe) */n.d(e,"Triggers",function(){return m.Triggers});
/* harmony import */var g=n(/*! ../foundation.abide */"./js/foundation.abide.js");
/* harmony reexport (safe) */n.d(e,"Abide",function(){return g.Abide});
/* harmony import */var v=n(/*! ../foundation.accordion */"./js/foundation.accordion.js");
/* harmony reexport (safe) */n.d(e,"Accordion",function(){return v.Accordion});
/* harmony import */var y=n(/*! ../foundation.accordionMenu */"./js/foundation.accordionMenu.js");
/* harmony reexport (safe) */n.d(e,"AccordionMenu",function(){return y.AccordionMenu});
/* harmony import */var b=n(/*! ../foundation.drilldown */"./js/foundation.drilldown.js");
/* harmony reexport (safe) */n.d(e,"Drilldown",function(){return b.Drilldown});
/* harmony import */var w=n(/*! ../foundation.dropdown */"./js/foundation.dropdown.js");
/* harmony reexport (safe) */n.d(e,"Dropdown",function(){return w.Dropdown});
/* harmony import */var $=n(/*! ../foundation.dropdownMenu */"./js/foundation.dropdownMenu.js");
/* harmony reexport (safe) */n.d(e,"DropdownMenu",function(){return $.DropdownMenu});
/* harmony import */var k=n(/*! ../foundation.equalizer */"./js/foundation.equalizer.js");
/* harmony reexport (safe) */n.d(e,"Equalizer",function(){return k.Equalizer});
/* harmony import */var x=n(/*! ../foundation.interchange */"./js/foundation.interchange.js");
/* harmony reexport (safe) */n.d(e,"Interchange",function(){return x.Interchange});
/* harmony import */var _=n(/*! ../foundation.magellan */"./js/foundation.magellan.js");
/* harmony reexport (safe) */n.d(e,"Magellan",function(){return _.Magellan});
/* harmony import */var j=n(/*! ../foundation.offcanvas */"./js/foundation.offcanvas.js");
/* harmony reexport (safe) */n.d(e,"OffCanvas",function(){return j.OffCanvas});
/* harmony import */var C=n(/*! ../foundation.orbit */"./js/foundation.orbit.js");
/* harmony reexport (safe) */n.d(e,"Orbit",function(){return C.Orbit});
/* harmony import */var T=n(/*! ../foundation.responsiveMenu */"./js/foundation.responsiveMenu.js");
/* harmony reexport (safe) */n.d(e,"ResponsiveMenu",function(){return T.ResponsiveMenu});
/* harmony import */var O=n(/*! ../foundation.responsiveToggle */"./js/foundation.responsiveToggle.js");
/* harmony reexport (safe) */n.d(e,"ResponsiveToggle",function(){return O.ResponsiveToggle});
/* harmony import */var S=n(/*! ../foundation.reveal */"./js/foundation.reveal.js");
/* harmony reexport (safe) */n.d(e,"Reveal",function(){return S.Reveal});
/* harmony import */var E=n(/*! ../foundation.slider */"./js/foundation.slider.js");
/* harmony reexport (safe) */n.d(e,"Slider",function(){return E.Slider});
/* harmony import */var z=n(/*! ../foundation.smoothScroll */"./js/foundation.smoothScroll.js");
/* harmony reexport (safe) */n.d(e,"SmoothScroll",function(){return z.SmoothScroll});
/* harmony import */var A=n(/*! ../foundation.sticky */"./js/foundation.sticky.js");
/* harmony reexport (safe) */n.d(e,"Sticky",function(){return A.Sticky});
/* harmony import */var P=n(/*! ../foundation.tabs */"./js/foundation.tabs.js");
/* harmony reexport (safe) */n.d(e,"Tabs",function(){return P.Tabs});
/* harmony import */var L=n(/*! ../foundation.toggler */"./js/foundation.toggler.js");
/* harmony reexport (safe) */n.d(e,"Toggler",function(){return L.Toggler});
/* harmony import */var D=n(/*! ../foundation.tooltip */"./js/foundation.tooltip.js");
/* harmony reexport (safe) */n.d(e,"Tooltip",function(){return D.Tooltip});
/* harmony import */var q=n(/*! ../foundation.responsiveAccordionTabs */"./js/foundation.responsiveAccordionTabs.js");
/* harmony reexport (safe) */n.d(e,"ResponsiveAccordionTabs",function(){return q.ResponsiveAccordionTabs}),r.Foundation.addToJquery(o.a),// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
r.Foundation.rtl=s.rtl,r.Foundation.GetYoDigits=s.GetYoDigits,r.Foundation.transitionend=s.transitionend,r.Foundation.RegExpEscape=s.RegExpEscape,r.Foundation.onLoad=s.onLoad,r.Foundation.Box=a.Box,r.Foundation.onImagesLoaded=l.onImagesLoaded,r.Foundation.Keyboard=u.Keyboard,r.Foundation.MediaQuery=c.MediaQuery,r.Foundation.Motion=d.Motion,r.Foundation.Move=d.Move,r.Foundation.Nest=f.Nest,r.Foundation.Timer=h.Timer,// Touch and Triggers previously were almost purely sede effect driven,
// so no need to add it to Foundation, just init them.
p.Touch.init(o.a),m.Triggers.init(o.a,r.Foundation),c.MediaQuery._init(),r.Foundation.plugin(g.Abide,"Abide"),r.Foundation.plugin(v.Accordion,"Accordion"),r.Foundation.plugin(y.AccordionMenu,"AccordionMenu"),r.Foundation.plugin(b.Drilldown,"Drilldown"),r.Foundation.plugin(w.Dropdown,"Dropdown"),r.Foundation.plugin($.DropdownMenu,"DropdownMenu"),r.Foundation.plugin(k.Equalizer,"Equalizer"),r.Foundation.plugin(x.Interchange,"Interchange"),r.Foundation.plugin(_.Magellan,"Magellan"),r.Foundation.plugin(j.OffCanvas,"OffCanvas"),r.Foundation.plugin(C.Orbit,"Orbit"),r.Foundation.plugin(T.ResponsiveMenu,"ResponsiveMenu"),r.Foundation.plugin(O.ResponsiveToggle,"ResponsiveToggle"),r.Foundation.plugin(S.Reveal,"Reveal"),r.Foundation.plugin(E.Slider,"Slider"),r.Foundation.plugin(z.SmoothScroll,"SmoothScroll"),r.Foundation.plugin(A.Sticky,"Sticky"),r.Foundation.plugin(P.Tabs,"Tabs"),r.Foundation.plugin(L.Toggler,"Toggler"),r.Foundation.plugin(D.Tooltip,"Tooltip"),r.Foundation.plugin(q.ResponsiveAccordionTabs,"ResponsiveAccordionTabs"),
/* harmony default export */e.default=r.Foundation},
/***/"./js/foundation.abide.js":
/*!********************************!*\
  !*** ./js/foundation.abide.js ***!
  \********************************/
/*! exports provided: Abide */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Abide module.
 * @module foundation.abide
 */n.r(e),
/* harmony export (binding) */n.d(e,"Abide",function(){return g});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=
/* */
function(t){function o(){return r(this,o),a(this,u(o).apply(this,arguments))}return c(o,t),s(o,[{key:"_setup",
/**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n
/**
     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
     * @private
     */){var i=1<arguments.length&&void 0!==n?n:{};this.$element=e,this.options=h.a.extend(!0,{},o.defaults,this.$element.data(),i),this.className="Abide",// ie9 back compat
this._init()}},{key:"_init",value:function t(){var n=this;this.$inputs=h.a.merge(// Consider as input to validate:
this.$element.find("input").not("[type=submit]"),// * all input fields expect submit
this.$element.find("textarea, select"));var e=this.$element.find("[data-abide-error]");// Add a11y attributes to all fields
this.options.a11yAttributes&&(this.$inputs.each(function(t,e){return n.addA11yAttributes(h()(e))}),e.each(function(t,e){return n.addGlobalErrorA11yAttributes(h()(e))})),this._events()}
/**
     * Initializes events for Abide.
     * @private
     */},{key:"_events",value:function t(){var e=this;this.$element.off(".abide").on("reset.zf.abide",function(){e.resetForm()}).on("submit.zf.abide",function(){return e.validateForm()}),"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",function(t){e.validateInput(h()(t.target))}),this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",function(t){e.validateInput(h()(t.target))}),this.options.validateOnBlur&&this.$inputs.off("blur.zf.abide").on("blur.zf.abide",function(t){e.validateInput(h()(t.target))})}
/**
     * Calls necessary functions to update Abide upon DOM change
     * @private
     */},{key:"_reflow",value:function t(){this._init()}
/**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"requiredCheck",value:function t(e){if(!e.attr("required"))return!0;var n=!0;switch(e[0].type){case"checkbox":n=e[0].checked;break;case"select":case"select-one":case"select-multiple":var i=e.find("option:selected");i.length&&i.val()||(n=!1);break;default:e.val()&&e.val().length||(n=!1)}return n}
/**
     * Get:
     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @returns {Object} jQuery object with the selector.
     */},{key:"findFormError",value:function t(e){var n=e[0].id,i=e.siblings(this.options.formErrorSelector);return i.length||(i=e.parent().find(this.options.formErrorSelector)),n&&(i=i.add(this.$element.find('[data-form-error-for="'.concat(n,'"]')))),i}
/**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findLabel",value:function t(e){var n=e[0].id,i=this.$element.find('label[for="'.concat(n,'"]'));return i.length?i:e.closest("label")}
/**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findRadioLabels",value:function t(e){var o=this,n=e.map(function(t,e){var n=e.id,i=o.$element.find('label[for="'.concat(n,'"]'));return i.length||(i=h()(e).closest("label")),i[0]});return h()(n)}
/**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     */},{key:"addErrorClasses",value:function t(e){var n=this.findLabel(e),i=this.findFormError(e);n.length&&n.addClass(this.options.labelErrorClass),i.length&&i.addClass(this.options.formErrorClass),e.addClass(this.options.inputErrorClass).attr({"data-invalid":"","aria-invalid":!0})}
/**
     * Adds [for] and [role=alert] attributes to all form error targetting $el,
     * and [aria-describedby] attribute to $el toward the first form error.
     * @param {Object} $el - jQuery object
     */},{key:"addA11yAttributes",value:function t(e){var n=this.findFormError(e),i=n.filter("label"),o=n.first();if(n.length){// Set [aria-describedby] on the input toward the first form error if it is not set
if(void 0===e.attr("aria-describedby")){
// Get the first error ID or create one
var r=o.attr("id");void 0===r&&(r=Object(m.GetYoDigits)(6,"abide-error"),o.attr("id",r)),e.attr("aria-describedby",r)}if(i.filter("[for]").length<i.length){
// Get the input ID or create one
var s=e.attr("id");void 0===s&&(s=Object(m.GetYoDigits)(6,"abide-input"),e.attr("id",s)),// For each label targeting $el, set [for] if it is not set.
i.each(function(t,e){var n=h()(e);void 0===n.attr("for")&&n.attr("for",s)})}// For each error targeting $el, set [role=alert] if it is not set.
n.each(function(t,e){var n=h()(e);void 0===n.attr("role")&&n.attr("role","alert")}).end()}}
/**
     * Adds [aria-live] attribute to the given global form error $el.
     * @param {Object} $el - jQuery object to add the attribute to
     */},{key:"addGlobalErrorA11yAttributes",value:function t(e){void 0===e.attr("aria-live")&&e.attr("aria-live",this.options.a11yErrorLevel)}
/**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */},{key:"removeRadioErrorClasses",value:function t(e){var n=this.$element.find(':radio[name="'.concat(e,'"]')),i=this.findRadioLabels(n),o=this.findFormError(n);i.length&&i.removeClass(this.options.labelErrorClass),o.length&&o.removeClass(this.options.formErrorClass),n.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */},{key:"removeErrorClasses",value:function t(e){
// radios need to clear all of the els
if("radio"==e[0].type)return this.removeRadioErrorClasses(e.attr("name"));var n=this.findLabel(e),i=this.findFormError(e);n.length&&n.removeClass(this.options.labelErrorClass),i.length&&i.removeClass(this.options.formErrorClass),e.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */},{key:"validateInput",value:function t(e){var n=this.requiredCheck(e),i=!1,o=!0,r=e.attr("data-validator"),s=!0;// don't validate ignored inputs or hidden inputs or disabled inputs
if(e.is("[data-abide-ignore]")||e.is('[type="hidden"]')||e.is("[disabled]"))return!0;switch(e[0].type){case"radio":i=this.validateRadio(e.attr("name"));break;case"checkbox":i=n;break;case"select":case"select-one":case"select-multiple":i=n;break;default:i=this.validateText(e)}r&&(o=this.matchValidation(e,r,e.attr("required"))),e.attr("data-equalto")&&(s=this.options.validators.equalTo(e));var a=-1===[n,i,o,s].indexOf(!1),l=(a?"valid":"invalid")+".zf.abide";if(a){
// Re-validate inputs that depend on this one with equalto
var u=this.$element.find('[data-equalto="'.concat(e.attr("id"),'"]'));if(u.length){var c=this;u.each(function(){h()(this).val()&&c.validateInput(h()(this))})}}return this[a?"removeErrorClasses":"addErrorClasses"](e),
/**
       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
       * Trigger includes the DOM element of the input.
       * @event Abide#valid
       * @event Abide#invalid
       */
e.trigger(l,[e]),a}
/**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */},{key:"validateForm",value:function t(){var i=this,e=[],n=this;this.$inputs.each(function(){e.push(n.validateInput(h()(this)))});var o=-1===e.indexOf(!1);return this.$element.find("[data-abide-error]").each(function(t,e){var n=h()(e);// Ensure a11y attributes are set
i.options.a11yAttributes&&i.addGlobalErrorA11yAttributes(n),// Show or hide the error
n.css("display",o?"none":"block")}),
/**
       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
       * Trigger includes the element of the form.
       * @event Abide#formvalid
       * @event Abide#forminvalid
       */
this.$element.trigger((o?"formvalid":"forminvalid")+".zf.abide",[this.$element]),o}
/**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */},{key:"validateText",value:function t(e,n){
// A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
n=n||e.attr("pattern")||e.attr("type");var i=e.val(),o=!1;return i.length?
// If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
o=this.options.patterns.hasOwnProperty(n)?this.options.patterns[n].test(i):n===e.attr("type")||new RegExp(n).test(i):e.prop("required")||(o=!0),o}
/**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */},{key:"validateRadio",value:function t(e){
// If at least one radio in the group has the `required` attribute, the group is considered required
// Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
var n=this.$element.find(':radio[name="'.concat(e,'"]')),i=!1,o=!1;// For the group to be required, at least one radio needs to be required
return n.each(function(t,e){h()(e).attr("required")&&(o=!0)}),o||(i=!0),i||
// For the group to be valid, at least one radio needs to be checked
n.each(function(t,e){h()(e).prop("checked")&&(i=!0)}),i}
/**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */},{key:"matchValidation",value:function t(e,n,i){var o=this,r;return i=!!i,-1===n.split(" ").map(function(t){return o.options.validators[t](e,i,e.parent())}).indexOf(!1)}
/**
     * Resets form inputs and styles
     * @fires Abide#formreset
     */},{key:"resetForm",value:function t(){var e=this.$element,n=this.options;h()(".".concat(n.labelErrorClass),e).not("small").removeClass(n.labelErrorClass),h()(".".concat(n.inputErrorClass),e).not("small").removeClass(n.inputErrorClass),h()("".concat(n.formErrorSelector,".").concat(n.formErrorClass)).removeClass(n.formErrorClass),e.find("[data-abide-error]").css("display","none"),h()(":input",e).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({"data-invalid":null,"aria-invalid":null}),h()(":input:radio",e).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),h()(":input:checkbox",e).not("[data-abide-ignore]").prop("checked",!1).attr({"data-invalid":null,"aria-invalid":null}),
/**
       * Fires when the form has been reset.
       * @event Abide#formreset
       */
e.trigger("formreset.zf.abide",[e])}
/**
     * Destroys an instance of Abide.
     * Removes error styles and classes from elements, without resetting their values.
     */},{key:"_destroy",value:function t(){var e=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none"),this.$inputs.off(".abide").each(function(){e.removeErrorClasses(h()(this))})}}]),o}(p.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
g.defaults={
/**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
validateOn:"fieldChange",
/**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
labelErrorClass:"is-invalid-label",
/**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
inputErrorClass:"is-invalid-input",
/**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
formErrorSelector:".form-error",
/**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
formErrorClass:"is-visible",
/**
   * If true, automatically insert when possible:
   * - `[aria-describedby]` on fields
   * - `[role=alert]` on form errors and `[for]` on form error labels
   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
   * @option
   * @type {boolean}
   * @default true
   */
a11yAttributes:!0,
/**
   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
   * Options are: 'assertive', 'polite' and 'off'/null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */
a11yErrorLevel:"assertive",
/**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
liveValidate:!1,
/**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
validateOnBlur:!1,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,
// amex, visa, diners
card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,
// http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
// From CommonRegexJS (@talyssonoc)
// https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
// For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
url:/^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
// abc.de
domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
// YYYY-MM-DD
date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
// HH:MM:SS
time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
// MM/DD/YYYY
month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
// DD/MM/YYYY
day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
// #FFF or #FFFFFF
color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
// Domain || URL
website:{test:function t(e){return g.defaults.patterns.domain.test(e)||g.defaults.patterns.url.test(e)}}},
/**
   * Optional validation functions to be used. `equalTo` being the only default included function.
   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
   * el : The jQuery element to validate.
   * required : Boolean value of the required attribute be present or not.
   * parent : The direct parent of the input.
   * @option
   */
validators:{equalTo:function t(e,n,i){return h()("#".concat(e.attr("data-equalto"))).val()===e.val()}}}},
/***/"./js/foundation.accordion.js":
/*!************************************!*\
  !*** ./js/foundation.accordion.js ***!
  \************************************/
/*! exports provided: Accordion */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Accordion module.
 * @module foundation.accordion
 * @requires foundation.util.keyboard
 */n.r(e),
/* harmony export (binding) */n.d(e,"Accordion",function(){return v});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g,v=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Accordion",// ie9 back compat
this._init(),m.Keyboard.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous"})}
/**
     * Initializes the accordion by animating the preset active pane(s).
     * @private
     */},{key:"_init",value:function t(){var o=this;this._isInitializing=!0,this.$element.attr("role","tablist"),this.$tabs=this.$element.children("[data-accordion-item]"),this.$tabs.each(function(t,e){var n=h()(e),i=n.children("[data-tab-content]"),o=i[0].id||Object(p.GetYoDigits)(6,"accordion"),r=e.id?"".concat(e.id,"-label"):"".concat(o,"-label");n.find("a:first").attr({"aria-controls":o,role:"tab",id:r,"aria-expanded":!1,"aria-selected":!1}),i.attr({role:"tabpanel","aria-labelledby":r,"aria-hidden":!0,id:o})});var e=this.$element.find(".is-active").children("[data-tab-content]");e.length&&(
// Save up the initial hash to return to it later when going back in history
this._initialAnchor=e.prev("a").attr("href"),this._openSingleTab(e)),this._checkDeepLink=function(){var t=window.location.hash;if(!t.length){
// If we are still initializing and there is no anchor, then there is nothing to do
if(o._isInitializing)return;// Otherwise, move to the initial anchor
o._initialAnchor&&(t=o._initialAnchor)}var e=t&&h()(t),n=t&&o.$element.find('[href$="'.concat(t,'"]')),i=!(!e.length||!n.length);// If there is an anchor for the hash, open it (if not already active)
e&&n&&n.length?n.parent("[data-accordion-item]").hasClass("is-active")||o._openSingleTab(e):o._closeAllTabs(),i&&(
// Roll up a little to show the titles
o.options.deepLinkSmudge&&Object(p.onLoad)(h()(window),function(){var t=o.$element.offset();h()("html, body").animate({scrollTop:t.top},o.options.deepLinkSmudgeDelay)})
/**
           * Fires when the plugin has deeplinked at pageload
           * @event Accordion#deeplink
           */,o.$element.trigger("deeplink.zf.accordion",[n,e]))},//use browser to open a tab, if it exists in this tabset
this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}
/**
     * Adds event handlers for items within the accordion.
     * @private
     */},{key:"_events",value:function t(){var o=this;this.$tabs.each(function(){var n=h()(this),i=n.children("[data-tab-content]");i.length&&n.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",function(t){t.preventDefault(),o.toggle(i)}).on("keydown.zf.accordion",function(e){m.Keyboard.handleKey(e,"Accordion",{toggle:function t(){o.toggle(i)},next:function t(){var e=n.next().find("a").focus();o.options.multiExpand||e.trigger("click.zf.accordion")},previous:function t(){var e=n.prev().find("a").focus();o.options.multiExpand||e.trigger("click.zf.accordion")},handled:function t(){e.preventDefault(),e.stopPropagation()}})})}),this.options.deepLink&&h()(window).on("hashchange",this._checkDeepLink)}
/**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */},{key:"toggle",value:function t(e){if(e.closest("[data-accordion]").is("[disabled]"))console.info("Cannot toggle an accordion that is disabled.");else//either replace or update browser history
if(e.parent().hasClass("is-active")?this.up(e):this.down(e),this.options.deepLink){var n=e.prev("a").attr("href");this.options.updateHistory?history.pushState({},"",n):history.replaceState({},"",n)}}
/**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     */},{key:"down",value:function t(e){e.closest("[data-accordion]").is("[disabled]")?console.info("Cannot call down on an accordion that is disabled."):this.options.multiExpand?this._openTab(e):this._openSingleTab(e)}
/**
     * Closes the tab defined by `$target`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */},{key:"up",value:function t(e){if(this.$element.is("[disabled]"))console.info("Cannot call up on an accordion that is disabled.");else{// Don't close the item if it is already closed
var n=e.parent();if(n.hasClass("is-active")){// Don't close the item if there is no other active item (unless with `allowAllClosed`)
var i=n.siblings();(this.options.allowAllClosed||i.hasClass("is-active"))&&this._closeTab(e)}}}
/**
     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @function
     * @private
     */},{key:"_openSingleTab",value:function t(e){
// Close all the others active tabs.
var n=this.$element.children(".is-active").children("[data-tab-content]");n.length&&this._closeTab(n.not(e)),// Then open the target.
this._openTab(e)}
/**
     * Opens the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     * @private
     */},{key:"_openTab",value:function t(e){var n=this,i=e.parent(),o=e.attr("aria-labelledby");e.attr("aria-hidden",!1),i.addClass("is-active"),h()("#".concat(o)).attr({"aria-expanded":!0,"aria-selected":!0}),e.slideDown(this.options.slideSpeed,function(){
/**
         * Fires when the tab is done opening.
         * @event Accordion#down
         */
n.$element.trigger("down.zf.accordion",[e])})}
/**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeTab",value:function t(e){var n=this,i=e.parent(),o=e.attr("aria-labelledby");e.attr("aria-hidden",!0),i.removeClass("is-active"),h()("#".concat(o)).attr({"aria-expanded":!1,"aria-selected":!1}),e.slideUp(this.options.slideSpeed,function(){
/**
         * Fires when the tab is done collapsing up.
         * @event Accordion#up
         */
n.$element.trigger("up.zf.accordion",[e])})}
/**
     * Closes all active tabs
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeAllTabs",value:function t(){var e=this.$element.children(".is-active").children("[data-tab-content]");e.length&&this._closeTab(e)}
/**
     * Destroys an instance of an accordion.
     * @fires Accordion#destroyed
     * @function
     */},{key:"_destroy",value:function t(){this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display",""),this.$element.find("a").off(".zf.accordion"),this.options.deepLink&&h()(window).off("hashchange",this._checkDeepLink)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */v.defaults={
/**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,
/**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
multiExpand:!1,
/**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
allowAllClosed:!1,
/**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:!1,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:!1}},
/***/"./js/foundation.accordionMenu.js":
/*!****************************************!*\
  !*** ./js/foundation.accordionMenu.js ***!
  \****************************************/
/*! exports provided: AccordionMenu */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * AccordionMenu module.
 * @module foundation.accordionMenu
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 */n.r(e),
/* harmony export (binding) */n.d(e,"AccordionMenu",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v,y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="AccordionMenu",// ie9 back compat
this._init(),p.Keyboard.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll"})}
/**
     * Initializes the accordion menu by hiding all nested menus.
     * @private
     */},{key:"_init",value:function t(){m.Nest.Feather(this.$element,"accordion");var s=this;this.$element.find("[data-submenu]").not(".is-active").slideUp(0),//.find('a').css('padding-left', '1rem');
this.$element.attr({role:"tree","aria-multiselectable":this.options.multiOpen}),this.$menuLinks=this.$element.find(".is-accordion-submenu-parent"),this.$menuLinks.each(function(){var t=this.id||Object(g.GetYoDigits)(6,"acc-menu-link"),e=h()(this),n=e.children("[data-submenu]"),i=n[0].id||Object(g.GetYoDigits)(6,"acc-menu"),o=n.hasClass("is-active"),r;s.options.parentLink&&e.children("a").clone().prependTo(n).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');s.options.submenuToggle?(e.addClass("has-submenu-toggle"),e.children("a").after('<button id="'+t+'" class="submenu-toggle" aria-controls="'+i+'" aria-expanded="'+o+'" title="'+s.options.submenuToggleText+'"><span class="submenu-toggle-text">'+s.options.submenuToggleText+"</span></button>")):e.attr({"aria-controls":i,"aria-expanded":o,id:t}),n.attr({"aria-labelledby":t,"aria-hidden":!o,role:"group",id:i})}),this.$element.find("li").attr({role:"treeitem"});var e=this.$element.find(".is-active");if(e.length){var s=this;e.each(function(){s.down(h()(this))})}this._events()}
/**
     * Adds event handlers for items within the menu.
     * @private
     */},{key:"_events",value:function t(){var a=this;this.$element.find("li").each(function(){var e=h()(this).children("[data-submenu]");e.length&&(a.options.submenuToggle?h()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(t){a.toggle(e)}):h()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",function(t){t.preventDefault(),a.toggle(e)}))}).on("keydown.zf.accordionmenu",function(n){var e=h()(this),i=e.parent("ul").children("li"),o,r,s=e.children("[data-submenu]");i.each(function(t){if(h()(this).is(e))return o=i.eq(Math.max(0,t-1)).find("a").first(),r=i.eq(Math.min(t+1,i.length-1)).find("a").first(),h()(this).children("[data-submenu]:visible").length&&(
// has open sub menu
r=e.find("li:first-child").find("a").first()),h()(this).is(":first-child")?
// is first element of sub menu
o=e.parents("li").first().find("a").first():o.parents("li").first().children("[data-submenu]:visible").length&&(
// if previous element has open sub menu
o=o.parents("li").find("li:last-child").find("a").first()),void(h()(this).is(":last-child")&&(
// is last element of sub menu
r=e.parents("li").first().next("li").find("a").first()))}),p.Keyboard.handleKey(n,"AccordionMenu",{open:function t(){s.is(":hidden")&&(a.down(s),s.find("li").first().find("a").first().focus())},close:function t(){s.length&&!s.is(":hidden")?
// close active sub of this item
a.up(s):e.parent("[data-submenu]").length&&(
// close currently open sub
a.up(e.parent("[data-submenu]")),e.parents("li").first().find("a").first().focus())},up:function t(){return o.focus(),!0},down:function t(){return r.focus(),!0},toggle:function t(){return!a.options.submenuToggle&&(e.children("[data-submenu]").length?(a.toggle(e.children("[data-submenu]")),!0):void 0)},closeAll:function t(){a.hideAll()},handled:function t(e){e&&n.preventDefault(),n.stopImmediatePropagation()}})})}
/**
     * Closes all panes of the menu.
     * @function
     */},{key:"hideAll",value:function t(){this.up(this.$element.find("[data-submenu]"))}
/**
     * Opens all panes of the menu.
     * @function
     */},{key:"showAll",value:function t(){this.down(this.$element.find("[data-submenu]"))}
/**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */},{key:"toggle",value:function t(e){e.is(":animated")||(e.is(":hidden")?this.down(e):this.up(e))}
/**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */},{key:"down",value:function t(e){var n=this;this.options.multiOpen||this.up(this.$element.find(".is-active").not(e.parentsUntil(this.$element).add(e))),e.addClass("is-active").attr({"aria-hidden":!1}),this.options.submenuToggle?e.prev(".submenu-toggle").attr({"aria-expanded":!0}):e.parent(".is-accordion-submenu-parent").attr({"aria-expanded":!0}),e.slideDown(this.options.slideSpeed,function(){
/**
         * Fires when the menu is done opening.
         * @event AccordionMenu#down
         */
n.$element.trigger("down.zf.accordionMenu",[e])})}
/**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */},{key:"up",value:function t(e){var n=this,i=e.find("[data-submenu]"),o=e.add(i);i.slideUp(0),o.removeClass("is-active").attr("aria-hidden",!0),this.options.submenuToggle?o.prev(".submenu-toggle").attr("aria-expanded",!1):o.parent(".is-accordion-submenu-parent").attr("aria-expanded",!1),e.slideUp(this.options.slideSpeed,function(){
/**
         * Fires when the menu is done collapsing up.
         * @event AccordionMenu#up
         */
n.$element.trigger("up.zf.accordionMenu",[e])})}
/**
     * Destroys an instance of accordion menu.
     * @fires AccordionMenu#destroyed
     */},{key:"_destroy",value:function t(){this.$element.find("[data-submenu]").slideDown(0).css("display",""),this.$element.find("a").off("click.zf.accordionMenu"),this.$element.find("[data-is-parent-link]").detach(),this.options.submenuToggle&&(this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"),this.$element.find(".submenu-toggle").remove()),m.Nest.Burn(this.$element,"accordion")}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */y.defaults={
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:!1,
/**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,
/**
   * Adds a separate submenu toggle button. This allows the parent item to have a link.
   * @option
   * @example true
   */
submenuToggle:!1,
/**
   * The text used for the submenu toggle if enabled. This is used for screen readers only.
   * @option
   * @example true
   */
submenuToggleText:"Toggle menu",
/**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
multiOpen:!0}},
/***/"./js/foundation.core.js":
/*!*******************************!*\
  !*** ./js/foundation.core.js ***!
  \*******************************/
/*! exports provided: Foundation */
/***/function(t,e,n){"use strict";function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}// Polyfill to get the name of a function in IE9
function l(t){if(void 0!==Function.prototype.name)return void 0===t.prototype?t.constructor.name:t.prototype.constructor.name;var e,n=/function\s([^(]{1,})\(/.exec(t.toString());return n&&1<n.length?n[1].trim():""}function s(t){return"true"===t||"false"!==t&&(isNaN(1*t)?t:parseFloat(t))}// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function u(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Foundation",function(){return f});
/* harmony import */var i=n(/*! jquery */"jquery"),c=/* */n.n(i),o=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),d=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),r,f={version:"6.5.1",
/**
   * Stores initialized plugins.
   */
_plugins:{},
/**
   * Stores generated unique ids for plugin instances
   */
_uuids:[],
/**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
plugin:function t(e,n){
// Object key to use when adding to global Foundation object
// Examples: Foundation.Reveal, Foundation.OffCanvas
var i=n||l(e),o=u(i);// Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
// Examples: data-reveal, data-off-canvas
// Add to the Foundation object and the plugins list (for reflowing)
this._plugins[o]=this[i]=e},
/**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
registerPlugin:function t(e,n){var i=n?u(n):l(e.constructor).toLowerCase();e.uuid=Object(o.GetYoDigits)(6,i),e.$element.attr("data-".concat(i))||e.$element.attr("data-".concat(i),e.uuid),e.$element.data("zfPlugin")||e.$element.data("zfPlugin",e)
/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */,e.$element.trigger("init.zf.".concat(i)),this._uuids.push(e.uuid)},
/**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
unregisterPlugin:function t(e){var n=u(l(e.$element.data("zfPlugin").constructor));for(var i in this._uuids.splice(this._uuids.indexOf(e.uuid),1),e.$element.removeAttr("data-".concat(n)).removeData("zfPlugin")
/**
     * Fires when the plugin has been destroyed.
     * @event Plugin#destroyed
     */.trigger("destroyed.zf.".concat(n)),e)e[i]=null;//clean up script to prep for garbage collection.
},
/**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
reInit:function t(e){var n=e instanceof c.a;try{if(n)e.each(function(){c()(this).data("zfPlugin")._init()});else{var i=a(e),o=this,r;({object:function t(e){e.forEach(function(t){t=u(t),c()("[data-"+t+"]").foundation("_init")})},string:function t(){e=u(e),c()("[data-"+e+"]").foundation("_init")},undefined:function t(){this.object(Object.keys(o._plugins))}})[i](e)}}catch(t){console.error(t)}finally{return e}},
/**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
reflow:function t(i,e){
// If plugins is undefined, just grab everything
void 0===e?e=Object.keys(this._plugins):"string"==typeof e&&(e=[e]);var r=this;// Iterate through each plugin
c.a.each(e,function(t,n){
// Get the current plugin
var o=r._plugins[n],e;// Localize the search to all elements inside elem, as well as elem itself, unless elem === document
// For each plugin found, initialize it
c()(i).find("[data-"+n+"]").addBack("[data-"+n+"]").each(function(){var t=c()(this),i={};// Don't double-dip on plugins
if(t.data("zfPlugin"))console.warn("Tried to initialize "+n+" on an element that already has a Foundation plugin.");else{if(t.attr("data-options"))var e=t.attr("data-options").split(";").forEach(function(t,e){var n=t.split(":").map(function(t){return t.trim()});n[0]&&(i[n[0]]=s(n[1]))});try{t.data("zfPlugin",new o(c()(this),i))}catch(t){console.error(t)}finally{return}}})})},getFnName:l,addToJquery:function t(s){
// TODO: consider not making this a jQuery function
// TODO: need way to reflow vs. re-initialize
/**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
var e=function t(n){var e=a(n),i=s(".no-js");if(i.length&&i.removeClass("no-js"),"undefined"===e)
//needs to initialize the Foundation object, or an individual plugin.
d.MediaQuery._init(),f.reflow(this);else{if("string"!==e)
//error for invalid argument type
throw new TypeError("We're sorry, ".concat(e," is not a valid parameter. You must use a string representing the method you wish to invoke."));
//an individual method to invoke on a plugin or group of plugins
var o=Array.prototype.slice.call(arguments,1),r=this.data("zfPlugin");//collect all the arguments, if necessary
//determine the class of plugin
if(void 0===r||void 0===r[n])
//error for no class or no method
throw new ReferenceError("We're sorry, '"+n+"' is not an available method for "+(r?l(r):"this element")+".");
//make sure both the class and method exist
1===this.length?
//if there's only one, call it directly.
r[n].apply(r,o):this.each(function(t,e){
//otherwise loop through the jQuery collection and invoke the method on each
r[n].apply(s(e).data("zfPlugin"),o)})}return this};return s.fn.foundation=e,s}};
/* harmony import */f.util={
/**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
throttle:function t(n,i){var o=null;return function(){var t=this,e=arguments;null===o&&(o=setTimeout(function(){n.apply(t,e),o=null},i))}}},window.Foundation=f,// Polyfill for requestAnimationFrame
function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(i+16,e);return setTimeout(function(){t(i=n)},n-e)},window.cancelAnimationFrame=clearTimeout}
/**
   * Polyfill for performance.now, required by rAF
   */window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function t(){return Date.now()-this.start}})}(),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)
// closest thing possible to the ECMAScript 5
// internal IsCallable function
throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),i=this,o=function t(){},t=function t(){return i.apply(this instanceof o?this:e,n.concat(Array.prototype.slice.call(arguments)))};return this.prototype&&(
// native functions don't have a prototype
o.prototype=this.prototype),t.prototype=new o,t})},
/***/"./js/foundation.core.plugin.js":
/*!**************************************!*\
  !*** ./js/foundation.core.plugin.js ***!
  \**************************************/
/*! exports provided: Plugin */
/***/function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}
// Abstract class for providing lifecycle hooks. Expect plugins to define AT LEAST
// {function} _setup (replaces previous constructor),
// {function} _destroy (replaces previous destroy)
// Convert PascalCase to kebab-case
// Thank you: http://stackoverflow.com/a/8955580
function s(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function a(t){return void 0!==t.constructor.name?s(t.constructor.name):s(t.className)}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Plugin",function(){return d});
/* harmony import */var l=n(/*! jquery */"jquery"),u=/* */n.n(l),c=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),d=
/* */
function(){function i(t,e){o(this,i),this._setup(t,e);var n=a(this);this.uuid=Object(c.GetYoDigits)(6,n),this.$element.attr("data-".concat(n))||this.$element.attr("data-".concat(n),this.uuid),this.$element.data("zfPlugin")||this.$element.data("zfPlugin",this)
/**
     * Fires when the plugin has initialized.
     * @event Plugin#init
     */,this.$element.trigger("init.zf.".concat(n))}return r(i,[{key:"destroy",value:function t(){this._destroy();var e=a(this);for(var n in this.$element.removeAttr("data-".concat(e)).removeData("zfPlugin")
/**
       * Fires when the plugin has been destroyed.
       * @event Plugin#destroyed
       */.trigger("destroyed.zf.".concat(e)),this)this[n]=null;//clean up script to prep for garbage collection.
}}]),i}();
/* harmony import */},
/***/"./js/foundation.core.utils.js":
/*!*************************************!*\
  !*** ./js/foundation.core.utils.js ***!
  \*************************************/
/*! exports provided: rtl, GetYoDigits, RegExpEscape, transitionend, onLoad, ignoreMousedisappear */
/***/function(t,e,n){"use strict";
// Core Foundation Utilities, utilized in a number of places.
/**
 * Returns a boolean for RTL support
 */
function i(){return"rtl"===c()("html").attr("dir")}
/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */function o(t,e){return t=t||6,Math.round(Math.pow(36,t+1)-Math.random()*Math.pow(36,t)).toString(36).slice(1)+(e?"-".concat(e):"")}
/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */function r(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function s(t){var e={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"},n=document.createElement("div"),i;for(var o in e)void 0!==n.style[o]&&(i=e[o]);return i||(i=setTimeout(function(){t.triggerHandler("transitionend",[t])},1),"transitionend")}
/**
 * Return an event type to listen for window load.
 *
 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
 * If `handler` is passed, attach it to the event on `$elem`.
 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */function a(e,t){var n="complete"===document.readyState,i=(n?"_didLoad":"load")+".zf.util.onLoad",o=function t(){return e.triggerHandler(i)};return e&&(t&&e.one(i,t),n?setTimeout(o):c()(window).one("load",o)),i}
/**
 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
 */function l(s,t
/***/){var e=1<arguments.length&&void 0!==t?t:{},n=e.ignoreLeaveWindow,a=void 0!==n&&n,i=e.ignoreReappear,l=void 0!==i&&i;return function t(n){for(var e=arguments.length,i=new Array(1<e?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];var r=s.bind.apply(s,[this,n].concat(i));// The mouse left: call the given callback if the mouse entered elsewhere
if(null!==n.relatedTarget)return r();// Otherwise, check if the mouse actually left the window.
// In firefox if the user switched between windows, the window sill have the focus by the time
// the event is triggered. We have to debounce the event to test this case.
setTimeout(function t(){if(!a&&document.hasFocus&&!document.hasFocus())return r();// Otherwise, wait for the mouse to reeapear outside of the element,
l||c()(document).one("mouseenter",function t(e){c()(n.currentTarget).has(e.target).length||(
// Fill where the mouse finally entered.
n.relatedTarget=e.target,r())})},0)}}n.r(e),
/* harmony export (binding) */n.d(e,"rtl",function(){return i}),
/* harmony export (binding) */n.d(e,"GetYoDigits",function(){return o}),
/* harmony export (binding) */n.d(e,"RegExpEscape",function(){return r}),
/* harmony export (binding) */n.d(e,"transitionend",function(){return s}),
/* harmony export (binding) */n.d(e,"onLoad",function(){return a}),
/* harmony export (binding) */n.d(e,"ignoreMousedisappear",function(){return l});
/* harmony import */var u=n(/*! jquery */"jquery"),c=/* */n.n(u);
/* harmony import */},
/***/"./js/foundation.drilldown.js":
/*!************************************!*\
  !*** ./js/foundation.drilldown.js ***!
  \************************************/
/*! exports provided: Drilldown */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Drilldown module.
 * @module foundation.drilldown
 * @requires foundation.util.keyboard
 * @requires foundation.util.nest
 * @requires foundation.util.box
 */n.r(e),
/* harmony export (binding) */n.d(e,"Drilldown",function(){return b});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),y,b=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Drilldown",// ie9 back compat
this._init(),p.Keyboard.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close",TAB:"down",SHIFT_TAB:"up"})}
/**
     * Initializes the drilldown by creating jQuery collections of elements
     * @private
     */},{key:"_init",value:function t(){m.Nest.Feather(this.$element,"drilldown"),this.options.autoApplyClass&&this.$element.addClass("drilldown"),this.$element.attr({role:"tree","aria-multiselectable":!1}),this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a"),this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role","group"),this.$menuItems=this.$element.find("li").not(".js-drilldown-back").attr("role","treeitem").find("a"),// Set the main menu as current by default (unless a submenu is selected)
// Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu
this.$currentMenu=this.$element,this.$element.attr("data-mutate",this.$element.attr("data-drilldown")||Object(g.GetYoDigits)(6,"drilldown")),this._prepareMenu(),this._registerEvents(),this._keyboardEvents()}
/**
     * prepares drilldown menu by setting attributes to links and elements
     * sets a min height to prevent content jumping
     * wraps the element if not already wrapped
     * @private
     * @function
     */},{key:"_prepareMenu",value:function t(){var n=this;// if(!this.options.holdOpen){
//   this._menuLinkEvents();
// }
this.$submenuAnchors.each(function(){var t=h()(this),e=t.parent();n.options.parentLink&&t.clone().prependTo(e.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'),t.data("savedHref",t.attr("href")).removeAttr("href").attr("tabindex",0),t.children("[data-submenu]").attr({"aria-hidden":!0,tabindex:0,role:"group"}),n._events(t)}),this.$submenus.each(function(){var t=h()(this),e;if(!t.find(".js-drilldown-back").length)switch(n.options.backButtonPosition){case"bottom":t.append(n.options.backButton);break;case"top":t.prepend(n.options.backButton);break;default:console.error("Unsupported backButtonPosition value '"+n.options.backButtonPosition+"'")}n._back(t)}),this.$submenus.addClass("invisible"),this.options.autoHeight||this.$submenus.addClass("drilldown-submenu-cover-previous"),// create a wrapper on element if it doesn't exist.
this.$element.parent().hasClass("is-drilldown")||(this.$wrapper=h()(this.options.wrapper).addClass("is-drilldown"),this.options.animateHeight&&this.$wrapper.addClass("animate-height"),this.$element.wrap(this.$wrapper)),// set wrapper
this.$wrapper=this.$element.parent(),this.$wrapper.css(this._getMaxDims())}},{key:"_resize",value:function t(){this.$wrapper.css({"max-width":"none","min-height":"none"}),// _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths
this.$wrapper.css(this._getMaxDims())}
/**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */},{key:"_events",value:function t(n){var i=this;n.off("click.zf.drilldown").on("click.zf.drilldown",function(t){if(h()(t.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&(t.stopImmediatePropagation(),t.preventDefault()),// if(e.target !== e.currentTarget.firstElementChild){
//   return false;
// }
i._show(n.parent("li")),i.options.closeOnClick){var e=h()("body");e.off(".zf.drilldown").on("click.zf.drilldown",function(t){t.target===i.$element[0]||h.a.contains(i.$element[0],t.target)||(t.preventDefault(),i._hideAll(),e.off(".zf.drilldown"))})}})}
/**
     * Adds event handlers to the menu element.
     * @function
     * @private
     */},{key:"_registerEvents",value:function t(){this.options.scrollTop&&(this._bindHandler=this._scrollTop.bind(this),this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown",this._bindHandler)),this.$element.on("mutateme.zf.trigger",this._resize.bind(this))}
/**
     * Scroll to Top of Element or data-scroll-top-element
     * @function
     * @fires Drilldown#scrollme
     */},{key:"_scrollTop",value:function t(){var e=this,n=""!=e.options.scrollTopElement?h()(e.options.scrollTopElement):e.$element,i=parseInt(n.offset().top+e.options.scrollTopOffset,10);h()("html, body").stop(!0).animate({scrollTop:i},e.options.animationDuration,e.options.animationEasing,function(){
/**
          * Fires after the menu has scrolled
          * @event Drilldown#scrollme
          */
this===h()("html")[0]&&e.$element.trigger("scrollme.zf.drilldown")})}
/**
     * Adds keydown event listener to `li`'s in the menu.
     * @private
     */},{key:"_keyboardEvents",value:function t(){var s=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown",function(n){var e=h()(this),i=e.parent("li").parent("ul").children("li").children("a"),o,r;i.each(function(t){if(h()(this).is(e))return o=i.eq(Math.max(0,t-1)),void(r=i.eq(Math.min(t+1,i.length-1)))}),p.Keyboard.handleKey(n,"Drilldown",{next:function t(){if(e.is(s.$submenuAnchors))return s._show(e.parent("li")),e.parent("li").one(Object(g.transitionend)(e),function(){e.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0},previous:function t(){return s._hide(e.parent("li").parent("ul")),e.parent("li").parent("ul").one(Object(g.transitionend)(e),function(){setTimeout(function(){e.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0},up:function t(){// Don't tap focus on first element in root ul
return o.focus(),!e.is(s.$element.find("> li:first-child > a"))},down:function t(){// Don't tap focus on last element in root ul
return r.focus(),!e.is(s.$element.find("> li:last-child > a"))},close:function t(){
// Don't close on element in root ul
e.is(s.$element.find("> li > a"))||(s._hide(e.parent().parent()),e.parent().parent().siblings("a").focus())},open:function t(){return(!s.options.parentLink||!e.attr("href"))&&(e.is(s.$menuItems)?e.is(s.$submenuAnchors)?(
// Sub menu item
s._show(e.parent("li")),e.parent("li").one(Object(g.transitionend)(e),function(){e.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}),!0):void 0:(
// not menu item means back button
s._hide(e.parent("li").parent("ul")),e.parent("li").parent("ul").one(Object(g.transitionend)(e),function(){setTimeout(function(){e.parent("li").parent("ul").parent("li").children("a").first().focus()},1)}),!0))},handled:function t(e){e&&n.preventDefault(),n.stopImmediatePropagation()}})})}
/**
     * Closes all open elements, and returns to root menu.
     * @function
     * @fires Drilldown#closed
     */},{key:"_hideAll",value:function t(){var e=this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");this.options.autoHeight&&this.$wrapper.css({height:e.parent().closest("ul").data("calcHeight")}),e.one(Object(g.transitionend)(e),function(t){e.removeClass("is-active is-closing")}),
/**
       * Fires when the menu is fully closed.
       * @event Drilldown#closed
       */
this.$element.trigger("closed.zf.drilldown")}
/**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */},{key:"_back",value:function t(n){var i=this;n.off("click.zf.drilldown"),n.children(".js-drilldown-back").on("click.zf.drilldown",function(t){t.stopImmediatePropagation(),// console.log('mouseup on back');
i._hide(n);// If there is a parent submenu, call show
var e=n.parent("li").parent("ul").parent("li");e.length&&i._show(e)})}
/**
     * Adds event listener to menu items w/o submenus to close open menus on click.
     * @function
     * @private
     */},{key:"_menuLinkEvents",value:function t(){var e=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",function(t){
// e.stopImmediatePropagation();
setTimeout(function(){e._hideAll()},0)})}
/**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setShowSubMenuClasses",value:function t(e,n){e.addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),e.parent("li").attr("aria-expanded",!0),!0===n&&this.$element.trigger("open.zf.drilldown",[e])}
/**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setHideSubMenuClasses",value:function t(e,n){e.removeClass("is-active").addClass("invisible").attr("aria-hidden",!0),e.parent("li").attr("aria-expanded",!1),!0===n&&e.trigger("hide.zf.drilldown",[e])}
/**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */},{key:"_showMenu",value:function t(n,i){var o=this,e;// Reset drilldown
// If target menu is root, focus first link & exit
if(this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each(function(t){o._setHideSubMenuClasses(h()(this))}),(// Save the menu as the currently displayed one.
this.$currentMenu=n).is("[data-drilldown]"))return!0===i&&n.find('li[role="treeitem"] > a').first().focus(),void(this.options.autoHeight&&this.$wrapper.css("height",n.data("calcHeight")));// Find all submenus on way to root incl. the element itself
var r=n.children().first().parentsUntil("[data-drilldown]","[data-submenu]");// Open target menu and all submenus on its way to root
r.each(function(t){
// Update height of first child (target menu) if autoHeight option true
0===t&&o.options.autoHeight&&o.$wrapper.css("height",h()(this).data("calcHeight"));var e=t==r.length-1;// Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
// Last child makes sure the event gets always triggered even if going through several menus
!0===e&&h()(this).one(Object(g.transitionend)(h()(this)),function(){!0===i&&n.find('li[role="treeitem"] > a').first().focus()}),o._setShowSubMenuClasses(h()(this),e)})}
/**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
     */},{key:"_show",value:function t(e){var n=e.children("[data-submenu]");e.attr("aria-expanded",!0),(this.$currentMenu=n).addClass("is-active").removeClass("invisible").attr("aria-hidden",!1),this.options.autoHeight&&this.$wrapper.css({height:n.data("calcHeight")})
/**
       * Fires when the submenu has opened.
       * @event Drilldown#open
       */,this.$element.trigger("open.zf.drilldown",[e])}
/**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
     */},{key:"_hide",value:function t(e){this.options.autoHeight&&this.$wrapper.css({height:e.parent().closest("ul").data("calcHeight")});var n=this;e.parent("li").attr("aria-expanded",!1),e.attr("aria-hidden",!0),e.addClass("is-closing").one(Object(g.transitionend)(e),function(){e.removeClass("is-active is-closing"),e.blur().addClass("invisible")}),
/**
       * Fires when the submenu has closed.
       * @event Drilldown#hide
       */
e.trigger("hide.zf.drilldown",[e])}
/**
     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
     * Prevents content jumping.
     * @function
     * @private
     */},{key:"_getMaxDims",value:function t(){var n=0,e={},i=this;// Recalculate menu heights and total max height
return this.$submenus.add(this.$element).each(function(){var t=h()(this).children("li").length,e=v.Box.GetDimensions(this).height;n=n<e?e:n,i.options.autoHeight&&h()(this).data("calcHeight",e)}),this.options.autoHeight?e.height=this.$currentMenu.data("calcHeight"):e["min-height"]="".concat(n,"px"),e["max-width"]="".concat(this.$element[0].getBoundingClientRect().width,"px"),e}
/**
     * Destroys the Drilldown Menu
     * @function
     */},{key:"_destroy",value:function t(){this.options.scrollTop&&this.$element.off(".zf.drilldown",this._bindHandler),this._hideAll(),this.$element.off("mutateme.zf.trigger"),m.Nest.Burn(this.$element,"drilldown"),this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"),this.$submenuAnchors.each(function(){h()(this).off(".zf.drilldown")}),this.$element.find("[data-is-parent-link]").detach(),this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"),this.$element.find("a").each(function(){var t=h()(this);t.removeAttr("tabindex"),t.data("savedHref")&&t.attr("href",t.data("savedHref")).removeData("savedHref")})}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */b.defaults={
/**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolian}
   * @default true
   */
autoApplyClass:!0,
/**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
/**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
backButtonPosition:"top",
/**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
wrapper:"<div></div>",
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:!1,
/**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:!1,
/**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
autoHeight:!1,
/**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
animateHeight:!1,
/**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
scrollTop:!1,
/**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
scrollTopElement:"",
/**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
scrollTopOffset:0,
/**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
animationEasing:"swing"}},
/***/"./js/foundation.dropdown.js":
/*!***********************************!*\
  !*** ./js/foundation.dropdown.js ***!
  \***********************************/
/*! exports provided: Dropdown */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function t(e,n,i){var o=c(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(i):r.value}})(t,e,n||t)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return(h=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Dropdown module.
 * @module foundation.dropdown
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.triggers
 */n.r(e),
/* harmony export (binding) */n.d(e,"Dropdown",function(){return w});
/* harmony import */var p=n(/*! jquery */"jquery"),m=/* */n.n(p),g=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),v=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),y=n(/*! ./foundation.positionable */"./js/foundation.positionable.js"),b=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),w=
/* */
function(t){function i(){return o(this,i),a(this,d(i).apply(this,arguments))}return f(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=m.a.extend({},i.defaults,this.$element.data(),n),this.className="Dropdown",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
b.Triggers.init(m.a),this._init(),g.Keyboard.register("Dropdown",{ENTER:"toggle",SPACE:"toggle",ESCAPE:"close"})}
/**
     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
     * @function
     * @private
     */},{key:"_init",value:function t(){var e=this.$element.attr("id");this.$anchors=m()('[data-toggle="'.concat(e,'"]')).length?m()('[data-toggle="'.concat(e,'"]')):m()('[data-open="'.concat(e,'"]')),this.$anchors.attr({"aria-controls":e,"data-is-focus":!1,"data-yeti-box":e,"aria-haspopup":!0,"aria-expanded":!1}),this._setCurrentAnchor(this.$anchors.first()),this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null,// Set [aria-labelledby] on the Dropdown if it is not set
void 0===this.$element.attr("aria-labelledby")&&(
// Get the anchor ID or create one
void 0===this.$currentAnchor.attr("id")&&this.$currentAnchor.attr("id",Object(v.GetYoDigits)(6,"dd-anchor")),this.$element.attr("aria-labelledby",this.$currentAnchor.attr("id"))),this.$element.attr({"aria-hidden":"true","data-yeti-box":e,"data-resize":e}),u(d(i.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function t(){
// handle legacy classnames
var e=this.$element[0].className.match(/(top|left|right|bottom)/g);return e?e[0]:"bottom"}},{key:"_getDefaultAlignment",value:function t(){
// handle legacy float approach
var e=/float-(\S+)/.exec(this.$currentAnchor.attr("class"));return e?e[1]:u(d(i.prototype),"_getDefaultAlignment",this).call(this)}
/**
     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
     * Recursively calls itself if a collision is detected, with a new position class.
     * @function
     * @private
     */},{key:"_setPosition",value:function t(){this.$element.removeClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment)),u(d(i.prototype),"_setPosition",this).call(this,this.$currentAnchor,this.$element,this.$parent),this.$element.addClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment))}
/**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */},{key:"_setCurrentAnchor",value:function t(e){this.$currentAnchor=m()(e)}
/**
     * Adds event listeners to the element utilizing the triggers utility library.
     * @function
     * @private
     */},{key:"_events",value:function t(){var i=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)}),this.$anchors.off("click.zf.trigger").on("click.zf.trigger",function(){i._setCurrentAnchor(this)}),this.options.hover&&(this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){i._setCurrentAnchor(this);var t=m()("body").data();void 0!==t.whatinput&&"mouse"!==t.whatinput||(clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.open(),i.$anchors.data("hover",!0)},i.options.hoverDelay))}).on("mouseleave.zf.dropdown",Object(v.ignoreMousedisappear)(function(){clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.close(),i.$anchors.data("hover",!1)},i.options.hoverDelay)})),this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",function(){clearTimeout(i.timeout)}).on("mouseleave.zf.dropdown",Object(v.ignoreMousedisappear)(function(){clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.close(),i.$anchors.data("hover",!1)},i.options.hoverDelay)}))),this.$anchors.add(this.$element).on("keydown.zf.dropdown",function(e){var n=m()(this),t=g.Keyboard.findFocusable(i.$element);g.Keyboard.handleKey(e,"Dropdown",{open:function t(){n.is(i.$anchors)&&!n.is("input, textarea")&&(i.open(),i.$element.attr("tabindex",-1).focus(),e.preventDefault())},close:function t(){i.close(),i.$anchors.focus()}})})}
/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function t(){var e=m()(document.body).not(this.$element),n=this;e.off("click.zf.dropdown").on("click.zf.dropdown",function(t){n.$anchors.is(t.target)||n.$anchors.find(t.target).length||n.$element.is(t.target)||n.$element.find(t.target).length||(n.close(),e.off("click.zf.dropdown"))})}
/**
     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
     * @function
     * @fires Dropdown#closeme
     * @fires Dropdown#show
     */},{key:"open",value:function t(){if(
// var _this = this;
/**
       * Fires to close other open dropdowns, typically when dropdown is opening
       * @event Dropdown#closeme
       */
this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id")),this.$anchors.addClass("hover").attr({"aria-expanded":!0}),// this.$element/*.show()*/;
this.$element.addClass("is-opening"),this._setPosition(),this.$element.removeClass("is-opening").addClass("is-open").attr({"aria-hidden":!1}),this.options.autoFocus){var e=g.Keyboard.findFocusable(this.$element);e.length&&e.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler(),this.options.trapFocus&&g.Keyboard.trapFocus(this.$element)
/**
       * Fires once the dropdown is visible.
       * @event Dropdown#show
       */,this.$element.trigger("show.zf.dropdown",[this.$element])}
/**
     * Closes the open dropdown pane.
     * @function
     * @fires Dropdown#hide
     */},{key:"close",value:function t(){if(!this.$element.hasClass("is-open"))return!1;this.$element.removeClass("is-open").attr({"aria-hidden":!0}),this.$anchors.removeClass("hover").attr("aria-expanded",!1),
/**
       * Fires once the dropdown is no longer visible.
       * @event Dropdown#hide
       */
this.$element.trigger("hide.zf.dropdown",[this.$element]),this.options.trapFocus&&g.Keyboard.releaseFocus(this.$element)}
/**
     * Toggles the dropdown pane's visibility.
     * @function
     */},{key:"toggle",value:function t(){if(this.$element.hasClass("is-open")){if(this.$anchors.data("hover"))return;this.close()}else this.open()}
/**
     * Destroys the dropdown.
     * @function
     */},{key:"_destroy",value:function t(){this.$element.off(".zf.trigger").hide(),this.$anchors.off(".zf.dropdown"),m()(document.body).off("click.zf.dropdown")}}]),i}(y.Positionable);
/* harmony import */w.defaults={
/**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
parentClass:null,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
hoverDelay:250,
/**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
hover:!1,
/**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
hoverPane:!1,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:!0,
/**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:!1,
/**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:!1,
/**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:!1}},
/***/"./js/foundation.dropdownMenu.js":
/*!***************************************!*\
  !*** ./js/foundation.dropdownMenu.js ***!
  \***************************************/
/*! exports provided: DropdownMenu */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * DropdownMenu module.
 * @module foundation.dropdown-menu
 * @requires foundation.util.keyboard
 * @requires foundation.util.box
 * @requires foundation.util.nest
 */n.r(e),
/* harmony export (binding) */n.d(e,"DropdownMenu",function(){return b});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),v=n(/*! ./foundation.util.nest */"./js/foundation.util.nest.js"),y=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),b=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="DropdownMenu",// ie9 back compat
this._init(),g.Keyboard.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}
/**
     * Initializes the plugin, and calls _prepareMenu
     * @private
     * @function
     */},{key:"_init",value:function t(){v.Nest.Feather(this.$element,"dropdown");var e=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"),this.$menuItems=this.$element.find('[role="menuitem"]'),this.$tabs=this.$element.children('[role="menuitem"]'),this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass),"auto"===this.options.alignment?this.$element.hasClass(this.options.rightClass)||Object(m.rtl)()||this.$element.parents(".top-bar-right").is("*")?(this.options.alignment="right",e.addClass("opens-left")):(this.options.alignment="left",e.addClass("opens-right")):"right"===this.options.alignment?e.addClass("opens-left"):e.addClass("opens-right"),this.changed=!1,this._events()}},{key:"_isVertical",value:function t(){return"block"===this.$tabs.css("display")||"column"===this.$element.css("flex-direction")}},{key:"_isRtl",value:function t(){return this.$element.hasClass("align-right")||Object(m.rtl)()&&!this.$element.hasClass("align-left")}
/**
     * Adds event listeners to elements within the menu
     * @private
     * @function
     */},{key:"_events",value:function t(){var d=this,s="ontouchstart"in window||void 0!==window.ontouchstart,a="is-dropdown-submenu-parent",e=function t(e){var n=h()(e.target).parentsUntil("ul",".".concat(a)),i=n.hasClass(a),o="true"===n.attr("data-is-click"),r=n.children(".is-dropdown-submenu");if(i)if(o){if(!d.options.closeOnClick||!d.options.clickOpen&&!s||d.options.forceFollow&&s)return;e.stopImmediatePropagation(),e.preventDefault(),d._hide(n)}else e.preventDefault(),e.stopImmediatePropagation(),d._show(r),n.add(n.parentsUntil(d.$element,".".concat(a))).attr("data-is-click",!0)};// used for onClick and in the keyboard handlers
(this.options.clickOpen||s)&&this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu",e),// Handle Leaf element Clicks
d.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownmenu",function(t){var e,n;h()(this).hasClass(a)||d._hide()}),this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownmenu",function(t){var e=h()(this),n;e.hasClass(a)&&(clearTimeout(e.data("_delay")),e.data("_delay",setTimeout(function(){d._show(e.children(".is-dropdown-submenu"))},d.options.hoverDelay)))}).on("mouseleave.zf.dropdownMenu",Object(m.ignoreMousedisappear)(function(t){var e=h()(this),n;if(e.hasClass(a)&&d.options.autoclose){if("true"===e.attr("data-is-click")&&d.options.clickOpen)return!1;clearTimeout(e.data("_delay")),e.data("_delay",setTimeout(function(){d._hide(e)},d.options.closingTime))}})),this.$menuItems.on("keydown.zf.dropdownmenu",function(n){var i=h()(n.target).parentsUntil("ul",'[role="menuitem"]'),t=-1<d.$tabs.index(i),e=t?d.$tabs:i.siblings("li").add(i),o,r;e.each(function(t){if(h()(this).is(i))return o=e.eq(t-1),void(r=e.eq(t+1))});var s=function t(){r.children("a:first").focus(),n.preventDefault()},a=function t(){o.children("a:first").focus(),n.preventDefault()},l=function t(){var e=i.children("ul.is-dropdown-submenu");e.length&&(d._show(e),i.find("li > a:first").focus(),n.preventDefault())},u=function t(){
//if ($element.is(':first-child')) {
var e=i.parent("ul").parent("li");e.children("a:first").focus(),d._hide(e),n.preventDefault()},c={open:l,close:function t(){d._hide(d.$element),d.$menuItems.eq(0).children("a").focus(),// focus to first element
n.preventDefault()},handled:function t(){n.stopImmediatePropagation()}};t?d._isVertical()?
// vertical menu
d._isRtl()?
// right aligned
h.a.extend(c,{down:s,up:a,next:u,previous:l}):
// left aligned
h.a.extend(c,{down:s,up:a,next:l,previous:u}):
// horizontal menu
d._isRtl()?
// right aligned
h.a.extend(c,{next:a,previous:s,down:l,up:u}):
// left aligned
h.a.extend(c,{next:s,previous:a,down:l,up:u}):
// not tabs -> one sub
d._isRtl()?
// right aligned
h.a.extend(c,{next:u,previous:l,down:s,up:a}):
// left aligned
h.a.extend(c,{next:l,previous:u,down:s,up:a}),g.Keyboard.handleKey(n,"DropdownMenu",c)})}
/**
     * Adds an event handler to the body to close any dropdowns on a click.
     * @function
     * @private
     */},{key:"_addBodyHandler",value:function t(){var n=h()(document.body),i=this;n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu",function(t){var e;i.$element.find(t.target).length||(i._hide(),n.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))})}
/**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires Dropdownmenu#show
     */},{key:"_show",value:function t(n){var e=this.$tabs.index(this.$tabs.filter(function(t,e){return 0<h()(e).find(n).length})),i=n.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(i,e),n.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");var o=y.Box.ImNotTouchingYou(n,null,!0);if(!o){var r="left"===this.options.alignment?"-right":"-left",s=n.parent(".is-dropdown-submenu-parent");s.removeClass("opens".concat(r)).addClass("opens-".concat(this.options.alignment)),(o=y.Box.ImNotTouchingYou(n,null,!0))||s.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"),this.changed=!0}n.css("visibility",""),this.options.closeOnClick&&this._addBodyHandler()
/**
       * Fires when the new dropdown pane is visible.
       * @event Dropdownmenu#show
       */,this.$element.trigger("show.zf.dropdownmenu",[n])}
/**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @private
     */},{key:"_hide",value:function t(e,n){var i,o;if((i=e&&e.length?e:void 0!==n?this.$tabs.not(function(t,e){return t===n}):this.$element).hasClass("is-active")||0<i.find(".is-active").length){if(i.find("li.is-active").add(i).attr({"data-is-click":!1}).removeClass("is-active"),i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"),this.changed||i.find("opens-inner").length){var r="left"===this.options.alignment?"right":"left";i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(r)),this.changed=!1}
/**
         * Fires when the open menus are closed.
         * @event Dropdownmenu#hide
         */this.$element.trigger("hide.zf.dropdownmenu",[i])}}
/**
     * Destroys the plugin.
     * @function
     */},{key:"_destroy",value:function t(){this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"),h()(document.body).off(".zf.dropdownmenu"),v.Nest.Burn(this.$element,"dropdown")}}]),i}(p.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
b.defaults={
/**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:!1,
/**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
autoclose:!0,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
hoverDelay:50,
/**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
clickOpen:!1,
/**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */
closingTime:500,
/**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClickInside:!0,
/**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
verticalClass:"vertical",
/**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
rightClass:"align-right",
/**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
forceFollow:!0}},
/***/"./js/foundation.equalizer.js":
/*!************************************!*\
  !*** ./js/foundation.equalizer.js ***!
  \************************************/
/*! exports provided: Equalizer */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Equalizer module.
 * @module foundation.equalizer
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.imageLoader if equalizer contains images
 */n.r(e),
/* harmony export (binding) */n.d(e,"Equalizer",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v,y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Equalizer",// ie9 back compat
this._init()}
/**
     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function t(){var e=this.$element.attr("data-equalizer")||"",n=this.$element.find('[data-equalizer-watch="'.concat(e,'"]'));p.MediaQuery._init(),this.$watched=n.length?n:this.$element.find("[data-equalizer-watch]"),this.$element.attr("data-resize",e||Object(g.GetYoDigits)(6,"eq")),this.$element.attr("data-mutate",e||Object(g.GetYoDigits)(6,"eq")),this.hasNested=0<this.$element.find("[data-equalizer]").length,this.isNested=0<this.$element.parentsUntil(document.body,"[data-equalizer]").length,this.isOn=!1,this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var i=this.$element.find("img"),o;this.options.equalizeOn?(o=this._checkMQ(),h()(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))):this._events(),(void 0!==o&&!1===o||void 0===o)&&(i.length?Object(m.onImagesLoaded)(i,this._reflow.bind(this)):this._reflow())}
/**
     * Removes event listeners if the breakpoint is too small.
     * @private
     */},{key:"_pauseEvents",value:function t(){this.isOn=!1,this.$element.off({".zf.equalizer":this._bindHandler.onPostEqualizedBound,"resizeme.zf.trigger":this._bindHandler.onResizeMeBound,"mutateme.zf.trigger":this._bindHandler.onResizeMeBound})}
/**
     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
     * @private
     */},{key:"_onResizeMe",value:function t(e){this._reflow()}
/**
     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
     * @private
     */},{key:"_onPostEqualized",value:function t(e){e.target!==this.$element[0]&&this._reflow()}
/**
     * Initializes events for Equalizer.
     * @private
     */},{key:"_events",value:function t(){var e=this;this._pauseEvents(),this.hasNested?this.$element.on("postequalized.zf.equalizer",this._bindHandler.onPostEqualizedBound):(this.$element.on("resizeme.zf.trigger",this._bindHandler.onResizeMeBound),this.$element.on("mutateme.zf.trigger",this._bindHandler.onResizeMeBound)),this.isOn=!0}
/**
     * Checks the current breakpoint to the minimum required size.
     * @private
     */},{key:"_checkMQ",value:function t(){var e=!p.MediaQuery.is(this.options.equalizeOn);return e?this.isOn&&(this._pauseEvents(),this.$watched.css("height","auto")):this.isOn||this._events(),e}
/**
     * A noop version for the plugin
     * @private
     */},{key:"_killswitch",value:function t(){}
/**
     * Calls necessary functions to update Equalizer upon DOM change
     * @private
     */},{key:"_reflow",value:function t(){if(!this.options.equalizeOnStack&&this._isStacked())return this.$watched.css("height","auto"),!1;this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this))}
/**
     * Manually determines if the first 2 elements are *NOT* stacked.
     * @private
     */},{key:"_isStacked",value:function t(){return!this.$watched[0]||!this.$watched[1]||this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */},{key:"getHeights",value:function t(e){for(var n=[],i=0,o=this.$watched.length;i<o;i++)this.$watched[i].style.height="auto",n.push(this.$watched[i].offsetHeight);e(n)}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */},{key:"getHeightsByRow",value:function t(e){var n=this.$watched.length?this.$watched.first().offset().top:0,i=[],o=0;//group by Row
i[o]=[];for(var r=0,s=this.$watched.length;r<s;r++){this.$watched[r].style.height="auto";//maybe could use this.$watched[i].offsetTop
var a=h()(this.$watched[r]).offset().top;a!=n&&(i[++o]=[],n=a),i[o].push([this.$watched[r],this.$watched[r].offsetHeight])}for(var l=0,u=i.length;l<u;l++){var c=h()(i[l]).map(function(){return this[1]}).get(),d=Math.max.apply(null,c);i[l].push(d)}e(i)}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */},{key:"applyHeight",value:function t(e){var n=Math.max.apply(null,e);
/**
       * Fires before the heights are applied
       * @event Equalizer#preequalized
       */this.$element.trigger("preequalized.zf.equalizer"),this.$watched.css("height",n),
/**
       * Fires when the heights have been applied
       * @event Equalizer#postequalized
       */
this.$element.trigger("postequalized.zf.equalizer")}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */},{key:"applyHeightByRow",value:function t(e){
/**
       * Fires before the heights are applied
       */
this.$element.trigger("preequalized.zf.equalizer");for(var n=0,i=e.length;n<i;n++){var o=e[n].length,r=e[n][o-1];if(o<=2)h()(e[n][0][0]).css({height:"auto"});else{
/**
          * Fires before the heights per row are applied
          * @event Equalizer#preequalizedrow
          */
this.$element.trigger("preequalizedrow.zf.equalizer");for(var s=0,a=o-1;s<a;s++)h()(e[n][s][0]).css({height:r});
/**
          * Fires when the heights per row have been applied
          * @event Equalizer#postequalizedrow
          */this.$element.trigger("postequalizedrow.zf.equalizer")}}
/**
       * Fires when the heights have been applied
       */this.$element.trigger("postequalized.zf.equalizer")}
/**
     * Destroys an instance of Equalizer.
     * @function
     */},{key:"_destroy",value:function t(){this._pauseEvents(),this.$watched.css("height","auto")}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
y.defaults={
/**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeOnStack:!1,
/**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeByRow:!1,
/**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
equalizeOn:""}},
/***/"./js/foundation.interchange.js":
/*!**************************************!*\
  !*** ./js/foundation.interchange.js ***!
  \**************************************/
/*! exports provided: Interchange */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Interchange module.
 * @module foundation.interchange
 * @requires foundation.util.mediaQuery
 */n.r(e),
/* harmony export (binding) */n.d(e,"Interchange",function(){return v});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=
/* */
function(t){function l(){return o(this,l),a(this,u(l).apply(this,arguments))}return c(l,t),s(l,[{key:"_setup",
/**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},l.defaults,n),this.rules=[],this.currentPath="",this.className="Interchange",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
     * @function
     * @private
     */},{key:"_init",value:function t(){p.MediaQuery._init();var e=this.$element[0].id||Object(g.GetYoDigits)(6,"interchange");this.$element.attr({"data-resize":e,id:e}),this._addBreakpoints(),this._generateRules(),this._reflow()}
/**
     * Initializes events for Interchange.
     * @function
     * @private
     */},{key:"_events",value:function t(){var e=this;this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(){return e._reflow()})}
/**
     * Calls necessary functions to update Interchange upon DOM change
     * @function
     * @private
     */},{key:"_reflow",value:function t(){var e;// Iterate through each rule, but only save the last match
for(var n in this.rules)if(this.rules.hasOwnProperty(n)){var i=this.rules[n];window.matchMedia(i.query).matches&&(e=i)}e&&this.replace(e.path)}
/**
     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
     * @function
     * @private
     */},{key:"_addBreakpoints",value:function t(){for(var e in p.MediaQuery.queries)if(p.MediaQuery.queries.hasOwnProperty(e)){var n=p.MediaQuery.queries[e];l.SPECIAL_QUERIES[n.name]=n.value}}
/**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @param {Object} element - jQuery object that is an Interchange instance
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */},{key:"_generateRules",value:function t(e){var n=[],i;for(var o in i="string"==typeof(i=this.options.rules?this.options.rules:this.$element.data("interchange"))?i.match(/\[.*?, .*?\]/g):i)if(i.hasOwnProperty(o)){var r=i[o].slice(1,-1).split(", "),s=r.slice(0,-1).join(""),a=r[r.length-1];l.SPECIAL_QUERIES[a]&&(a=l.SPECIAL_QUERIES[a]),n.push({path:s,query:a})}this.rules=n}
/**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */},{key:"replace",value:function t(e){if(this.currentPath!==e){var n=this,i="replaced.zf.interchange";// Replacing images
"IMG"===this.$element[0].nodeName?this.$element.attr("src",e).on("load",function(){n.currentPath=e}).trigger(i):e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)?(e=e.replace(/\(/g,"%28").replace(/\)/g,"%29"),this.$element.css({"background-image":"url("+e+")"}).trigger(i)):h.a.get(e,function(t){n.$element.html(t).trigger(i),h()(t).foundation(),n.currentPath=e});
/**
       * Fires when content in an Interchange element is done being loaded.
       * @event Interchange#replaced
       */
// this.$element.trigger('replaced.zf.interchange');
}}
/**
     * Destroys an instance of interchange.
     * @function
     */},{key:"_destroy",value:function t(){this.$element.off("resizeme.zf.trigger")}}]),l}(m.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
v.defaults={
/**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
rules:null},v.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"}},
/***/"./js/foundation.magellan.js":
/*!***********************************!*\
  !*** ./js/foundation.magellan.js ***!
  \***********************************/
/*! exports provided: Magellan */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Magellan module.
 * @module foundation.magellan
 * @requires foundation.smoothScroll
 */n.r(e),
/* harmony export (binding) */n.d(e,"Magellan",function(){return v});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.smoothScroll */"./js/foundation.smoothScroll.js"),v=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Magellan",// ie9 back compat
this._init(),this.calcPoints()}
/**
     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
     * @private
     */},{key:"_init",value:function t(){var e=this.$element[0].id||Object(p.GetYoDigits)(6,"magellan"),n=this;this.$targets=h()("[data-magellan-target]"),this.$links=this.$element.find("a"),this.$element.attr({"data-resize":e,"data-scroll":e,id:e}),this.$active=h()(),this.scrollPos=parseInt(window.pageYOffset,10),this._events()}
/**
     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
     * Can be invoked if new elements are added or the size of a location changes.
     * @function
     */},{key:"calcPoints",value:function t(){var n=this,e=document.body,i=document.documentElement;this.points=[],this.winHeight=Math.round(Math.max(window.innerHeight,i.clientHeight)),this.docHeight=Math.round(Math.max(e.scrollHeight,e.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight)),this.$targets.each(function(){var t=h()(this),e=Math.round(t.offset().top-n.options.threshold);t.targetPoint=e,n.points.push(e)})}
/**
     * Initializes events for Magellan.
     * @private
     */},{key:"_events",value:function t(){var n=this,e=h()("html, body"),i={duration:n.options.animationDuration,easing:n.options.animationEasing};h()(window).one("load",function(){n.options.deepLinking&&location.hash&&n.scrollToLoc(location.hash),n.calcPoints(),n._updateActive()}),n.onLoadListener=Object(p.onLoad)(h()(window),function(){n.$element.on({"resizeme.zf.trigger":n.reflow.bind(n),"scrollme.zf.trigger":n._updateActive.bind(n)}).on("click.zf.magellan",'a[href^="#"]',function(t){t.preventDefault();var e=this.getAttribute("href");n.scrollToLoc(e)})}),this._deepLinkScroll=function(t){n.options.deepLinking&&n.scrollToLoc(window.location.hash)},h()(window).on("hashchange",this._deepLinkScroll)}
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */},{key:"scrollToLoc",value:function t(e){this._inTransition=!0;var n=this,i={animationEasing:this.options.animationEasing,animationDuration:this.options.animationDuration,threshold:this.options.threshold,offset:this.options.offset};g.SmoothScroll.scrollToLoc(e,i,function(){n._inTransition=!1})}
/**
     * Calls necessary functions to update Magellan upon DOM change
     * @function
     */},{key:"reflow",value:function t(){this.calcPoints(),this._updateActive()}
/**
     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
     * @private
     * @function
     * @fires Magellan#update
     */},{key:"_updateActive",value:function t(){var n=this;if(!this._inTransition){var i=parseInt(window.pageYOffset,10),o=this.scrollPos>i,e;// Before the first point: no link
if((this.scrollPos=i)<this.points[0]);else if(i+this.winHeight===this.docHeight)e=this.points.length-1;else{var r=this.points.filter(function(t,e){return t-n.options.offset-(o?n.options.threshold:0)<=i});e=r.length?r.length-1:0}// Get the new active link
var s=this.$active,a="";void 0!==e?(this.$active=this.$links.filter('[href="#'+this.$targets.eq(e).data("magellan-target")+'"]'),this.$active.length&&(a=this.$active[0].getAttribute("href"))):this.$active=h()();var l=!(!this.$active.length&&!s.length||this.$active.is(s)),u=a!==window.location.hash;// Update the hash (it may have changed with the same active link)
if(// Update the active link element
l&&(s.removeClass(this.options.activeClass),this.$active.addClass(this.options.activeClass)),this.options.deepLinking&&u)if(window.history.pushState){
// Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
var c=a||window.location.pathname+window.location.search;window.history.pushState(null,null,c)}else window.location.hash=a;l&&
/**
         * Fires when magellan is finished updating to the new active element.
         * @event Magellan#update
         */
this.$element.trigger("update.zf.magellan",[this.$active])}}
/**
     * Destroys an instance of Magellan and resets the url of the window.
     * @function
     */},{key:"_destroy",value:function t(){if(this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass),this.options.deepLinking){var e=this.$active[0].getAttribute("href");window.location.hash.replace(e,"")}h()(window).off("hashchange",this._deepLinkScroll),this.onLoadListener&&h()(window).off(this.onLoadListener)}}]),i}(m.Plugin);
/* harmony import */
/**
 * Default settings for plugin
 */
v.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
activeClass:"is-active",
/**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
deepLinking:!1,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0}},
/***/"./js/foundation.offcanvas.js":
/*!************************************!*\
  !*** ./js/foundation.offcanvas.js ***!
  \************************************/
/*! exports provided: OffCanvas */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * OffCanvas module.
 * @module foundation.offcanvas
 * @requires foundation.util.keyboard
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */n.r(e),
/* harmony export (binding) */n.d(e,"OffCanvas",function(){return b});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b=
/* */
function(t){function o(){return r(this,o),a(this,u(o).apply(this,arguments))}return c(o,t),s(o,[{key:"_setup",
/**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){var i=this;this.className="OffCanvas",// ie9 back compat
this.$element=e,this.options=h.a.extend({},o.defaults,this.$element.data(),n),this.contentClasses={base:[],reveal:[]},this.$lastTrigger=h()(),this.$triggers=h()(),this.position="left",this.$content=h()(),this.nested=!!this.options.nested,// Defines the CSS transition/position classes of the off-canvas content container.
h()(["push","overlap"]).each(function(t,e){i.contentClasses.base.push("has-transition-"+e)}),h()(["left","right","top","bottom"]).each(function(t,e){i.contentClasses.base.push("has-position-"+e),i.contentClasses.reveal.push("has-reveal-"+e)}),// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(h.a),g.MediaQuery._init(),this._init(),this._events(),m.Keyboard.register("OffCanvas",{ESCAPE:"close"})}
/**
     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
     * @function
     * @private
     */},{key:"_init",value:function t(){var e=this.$element.attr("id");// Add an overlay over the content if necessary
if(this.$element.attr("aria-hidden","true"),// Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)
this.options.contentId?this.$content=h()("#"+this.options.contentId):this.$element.siblings("[data-off-canvas-content]").length?this.$content=this.$element.siblings("[data-off-canvas-content]").first():this.$content=this.$element.closest("[data-off-canvas-content]").first(),this.options.contentId?this.options.contentId&&null===this.options.nested&&
// Warning if using content ID without setting the nested option
// Once the element is nested it is required to work properly in this case
console.warn("Remember to use the nested option if using the content ID option!"):
// Assume that the off-canvas element is nested if it isn't a sibling of the content
this.nested=0===this.$element.siblings("[data-off-canvas-content]").length,!0===this.nested&&(
// Force transition overlap if nested
this.options.transition="overlap",// Remove appropriate classes if already assigned in markup
this.$element.removeClass("is-transition-push")),this.$element.addClass("is-transition-".concat(this.options.transition," is-closed")),// Find triggers that affect this element and add aria-expanded to them
this.$triggers=h()(document).find('[data-open="'+e+'"], [data-close="'+e+'"], [data-toggle="'+e+'"]').attr("aria-expanded","false").attr("aria-controls",e),// Get position by checking for related CSS class
this.position=this.$element.is(".position-left, .position-top, .position-right, .position-bottom")?this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1]:this.position,!0===this.options.contentOverlay){var n=document.createElement("div"),i="fixed"===h()(this.$element).css("position")?"is-overlay-fixed":"is-overlay-absolute";n.setAttribute("class","js-off-canvas-overlay "+i),this.$overlay=h()(n),"is-overlay-fixed"===i?h()(this.$overlay).insertAfter(this.$element):this.$content.append(this.$overlay)}// Get the revealOn option from the class.
var o,r=new RegExp(Object(p.RegExpEscape)(this.options.revealClass)+"([^\\s]+)","g").exec(this.$element[0].className);r&&(this.options.isRevealed=!0,this.options.revealOn=this.options.revealOn||r[1]),// Ensure the `reveal-on-*` class is set.
!0===this.options.isRevealed&&this.options.revealOn&&(this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)),this._setMQChecker()),this.options.transitionTime&&this.$element.css("transition-duration",this.options.transitionTime),// Initally remove all transition/position CSS classes from off-canvas content container.
this._removeContentClasses()}
/**
     * Adds event handlers to the off-canvas wrapper and the exit overlay.
     * @function
     * @private
     */},{key:"_events",value:function t(){var e;(this.$element.off(".zf.trigger .zf.offcanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offcanvas":this._handleKeyboard.bind(this)}),!0===this.options.closeOnClick)&&(this.options.contentOverlay?this.$overlay:this.$content).on({"click.zf.offcanvas":this.close.bind(this)})}
/**
     * Applies event listener for elements that will reveal at certain breakpoints.
     * @private
     */},{key:"_setMQChecker",value:function t(){var e=this;this.onLoadListener=Object(p.onLoad)(h()(window),function(){g.MediaQuery.atLeast(e.options.revealOn)&&e.reveal(!0)}),h()(window).on("changed.zf.mediaquery",function(){g.MediaQuery.atLeast(e.options.revealOn)?e.reveal(!0):e.reveal(!1)})}
/**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_removeContentClasses",value:function t(e){"boolean"!=typeof e?this.$content.removeClass(this.contentClasses.base.join(" ")):!1===e&&this.$content.removeClass("has-reveal-".concat(this.position))}
/**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_addContentClasses",value:function t(e){this._removeContentClasses(e),"boolean"!=typeof e?this.$content.addClass("has-transition-".concat(this.options.transition," has-position-").concat(this.position)):!0===e&&this.$content.addClass("has-reveal-".concat(this.position))}
/**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */},{key:"reveal",value:function t(e){e?(this.close(),this.isRevealed=!0,this.$element.attr("aria-hidden","false"),this.$element.off("open.zf.trigger toggle.zf.trigger"),this.$element.removeClass("is-closed")):(this.isRevealed=!1,this.$element.attr("aria-hidden","true"),this.$element.off("open.zf.trigger toggle.zf.trigger").on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)}),this.$element.addClass("is-closed")),this._addContentClasses(e)}
/**
     * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
     * @private
     */},{key:"_stopScrolling",value:function t(e){return!1}// Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
// Only really works for y, not sure how to extend to x or if we need to.
},{key:"_recordScrollable",value:function t(e){var n=this;// called from event handler context with this as elem
// If the element is scrollable (content overflows), then...
n.scrollHeight!==n.clientHeight&&(
// If we're at the top, scroll down one pixel to allow scrolling up
0===n.scrollTop&&(n.scrollTop=1),// If we're at the bottom, scroll up one pixel to allow scrolling down
n.scrollTop===n.scrollHeight-n.clientHeight&&(n.scrollTop=n.scrollHeight-n.clientHeight-1)),n.allowUp=0<n.scrollTop,n.allowDown=n.scrollTop<n.scrollHeight-n.clientHeight,n.lastY=e.originalEvent.pageY}},{key:"_stopScrollPropagation",value:function t(e){var n=this,i=e.pageY<n.lastY,o=!i;// called from event handler context with this as elem
n.lastY=e.pageY,i&&n.allowUp||o&&n.allowDown?e.stopPropagation():e.preventDefault()}
/**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires Offcanvas#opened
     * @todo also trigger 'open' event?
     */},{key:"open",value:function t(e,n){if(!this.$element.hasClass("is-open")&&!this.isRevealed){var i=this;n&&(this.$lastTrigger=n),"top"===this.options.forceTo?window.scrollTo(0,0):"bottom"===this.options.forceTo&&window.scrollTo(0,document.body.scrollHeight),this.options.transitionTime&&"overlap"!==this.options.transition?this.$element.siblings("[data-off-canvas-content]").css("transition-duration",this.options.transitionTime):this.$element.siblings("[data-off-canvas-content]").css("transition-duration",""),this.$element.addClass("is-open").removeClass("is-closed"),this.$triggers.attr("aria-expanded","true"),this.$element.attr("aria-hidden","false"),this.$content.addClass("is-open-"+this.position),// If `contentScroll` is set to false, add class and disable scrolling on touch devices.
!1===this.options.contentScroll&&(h()("body").addClass("is-off-canvas-open").on("touchmove",this._stopScrolling),this.$element.on("touchstart",this._recordScrollable),this.$element.on("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.addClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.addClass("is-closable"),!0===this.options.autoFocus&&this.$element.one(Object(p.transitionend)(this.$element),function(){if(i.$element.hasClass("is-open")){var t=i.$element.find("[data-autofocus]");t.length?t.eq(0).focus():i.$element.find("a, button").eq(0).focus()}}),!0===this.options.trapFocus&&(this.$content.attr("tabindex","-1"),m.Keyboard.trapFocus(this.$element)),this._addContentClasses(),
/**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#opened
       */
this.$element.trigger("opened.zf.offcanvas")}}
/**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires Offcanvas#closed
     */},{key:"close",value:function t(e){if(this.$element.hasClass("is-open")&&!this.isRevealed){var n=this;this.$element.removeClass("is-open"),this.$element.attr("aria-hidden","true")
/**
       * Fires when the off-canvas menu opens.
       * @event Offcanvas#closed
       */.trigger("closed.zf.offcanvas"),this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"),// If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.
!1===this.options.contentScroll&&(h()("body").removeClass("is-off-canvas-open").off("touchmove",this._stopScrolling),this.$element.off("touchstart",this._recordScrollable),this.$element.off("touchmove",this._stopScrollPropagation)),!0===this.options.contentOverlay&&this.$overlay.removeClass("is-visible"),!0===this.options.closeOnClick&&!0===this.options.contentOverlay&&this.$overlay.removeClass("is-closable"),this.$triggers.attr("aria-expanded","false"),!0===this.options.trapFocus&&(this.$content.removeAttr("tabindex"),m.Keyboard.releaseFocus(this.$element)),// Listen to transitionEnd and add class when done.
this.$element.one(Object(p.transitionend)(this.$element),function(t){n.$element.addClass("is-closed"),n._removeContentClasses()})}}
/**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */},{key:"toggle",value:function t(e,n){this.$element.hasClass("is-open")?this.close(e,n):this.open(e,n)}
/**
     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
     * @function
     * @private
     */},{key:"_handleKeyboard",value:function t(e){var n=this;m.Keyboard.handleKey(e,"OffCanvas",{close:function t(){return n.close(),n.$lastTrigger.focus(),!0},handled:function t(){e.stopPropagation(),e.preventDefault()}})}
/**
     * Destroys the offcanvas plugin.
     * @function
     */},{key:"_destroy",value:function t(){this.close(),this.$element.off(".zf.trigger .zf.offcanvas"),this.$overlay.off(".zf.offcanvas"),this.onLoadListener&&h()(window).off(this.onLoadListener)}}]),o}(v.Plugin);
/* harmony import */b.defaults={
/**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */
contentOverlay:!0,
/**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */
contentId:null,
/**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */
nested:null,
/**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
contentScroll:!0,
/**
   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
   * @option
   * @type {number}
   * @default null
   */
transitionTime:null,
/**
   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
transition:"push",
/**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
forceTo:null,
/**
   * Allow the offcanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
isRevealed:!1,
/**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */
revealOn:null,
/**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
autoFocus:!0,
/**
   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
revealClass:"reveal-for-",
/**
   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:!1}},
/***/"./js/foundation.orbit.js":
/*!********************************!*\
  !*** ./js/foundation.orbit.js ***!
  \********************************/
/*! exports provided: Orbit */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Orbit module.
 * @module foundation.orbit
 * @requires foundation.util.keyboard
 * @requires foundation.util.motion
 * @requires foundation.util.timer
 * @requires foundation.util.imageLoader
 * @requires foundation.util.touch
 */n.r(e),
/* harmony export (binding) */n.d(e,"Orbit",function(){return $});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),m=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),g=n(/*! ./foundation.util.timer */"./js/foundation.util.timer.js"),v=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),y=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),b=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),w=n(/*! ./foundation.util.touch */"./js/foundation.util.touch.js"),$=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Orbit",// ie9 back compat
w.Touch.init(h.a),// Touch init is idempotent, we just need to make sure it's initialied.
this._init(),p.Keyboard.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}
/**
    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
    * @function
    * @private
    */},{key:"_init",value:function t(){
// @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
this._reset(),this.$wrapper=this.$element.find(".".concat(this.options.containerClass)),this.$slides=this.$element.find(".".concat(this.options.slideClass));var e=this.$element.find("img"),n=this.$slides.filter(".is-active"),i=this.$element[0].id||Object(y.GetYoDigits)(6,"orbit");this.$element.attr({"data-resize":i,id:i}),n.length||this.$slides.eq(0).addClass("is-active"),this.options.useMUI||this.$slides.addClass("no-motionui"),e.length?Object(v.onImagesLoaded)(e,this._prepareForOrbit.bind(this)):this._prepareForOrbit(),this.options.bullets&&this._loadBullets(),this._events(),this.options.autoPlay&&1<this.$slides.length&&this.geoSync(),this.options.accessible&&
// allow wrapper to be focusable to enable arrow navigation
this.$wrapper.attr("tabindex",0)}
/**
    * Creates a jQuery collection of bullets, if they are being used.
    * @function
    * @private
    */},{key:"_loadBullets",value:function t(){this.$bullets=this.$element.find(".".concat(this.options.boxOfBullets)).find("button")}
/**
    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
    * @function
    */},{key:"geoSync",value:function t(){var e=this;this.timer=new g.Timer(this.$element,{duration:this.options.timerDelay,infinite:!1},function(){e.changeSlide(!0)}),this.timer.start()}
/**
    * Sets wrapper and slide heights for the orbit.
    * @function
    * @private
    */},{key:"_prepareForOrbit",value:function t(){var e=this;this._setWrapperHeight()}
/**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */},{key:"_setWrapperHeight",value:function t(e){
//rewrite this to `for` loop
var n=0,i,o=0,r=this;this.$slides.each(function(){i=this.getBoundingClientRect().height,h()(this).attr("data-slide",o),// hide all slides but the active one
/mui/g.test(h()(this)[0].className)||r.$slides.filter(".is-active")[0]===r.$slides.eq(o)[0]||h()(this).css({display:"none"}),n=n<i?i:n,o++}),o===this.$slides.length&&(this.$wrapper.css({height:n}),//only change the wrapper height property once.
e&&e(n))}
/**
    * Sets the max-height of each slide.
    * @function
    * @private
    */},{key:"_setSlideHeight",value:function t(e){this.$slides.each(function(){h()(this).css("max-height",e)})}
/**
    * Adds event listeners to basically everything within the element.
    * @function
    * @private
    */},{key:"_events",value:function t(){var i=this;//***************************************
//**Now using custom event - thanks to:**
//**      Yohai Ararat of Toronto      **
//***************************************
//
if(this.$element.off(".resizeme.zf.trigger").on({"resizeme.zf.trigger":this._prepareForOrbit.bind(this)}),1<this.$slides.length){var e;if(this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!0)}).on("swiperight.zf.orbit",function(t){t.preventDefault(),i.changeSlide(!1)}),//***************************************
this.options.autoPlay&&(this.$slides.on("click.zf.orbit",function(){i.$element.data("clickedOn",!i.$element.data("clickedOn")),i.timer[i.$element.data("clickedOn")?"pause":"start"]()}),this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",function(){i.timer.pause()}).on("mouseleave.zf.orbit",function(){i.$element.data("clickedOn")||i.timer.start()})),this.options.navButtons)this.$element.find(".".concat(this.options.nextClass,", .").concat(this.options.prevClass)).attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",function(t){t.preventDefault(),i.changeSlide(h()(this).hasClass(i.options.nextClass))});this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",function(){if(/is-active/g.test(this.className))return!1;//if this is active, kick out of function.
var t=h()(this).data("slide"),e=t>i.$slides.filter(".is-active").data("slide"),n=i.$slides.eq(t);i.changeSlide(e,n,t)}),this.options.accessible&&this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",function(e){
// handle keyboard event with keyboard util
p.Keyboard.handleKey(e,"Orbit",{next:function t(){i.changeSlide(!0)},previous:function t(){i.changeSlide(!1)},handled:function t(){
// if bullet is focused, make sure focus moves
h()(e.target).is(i.$bullets)&&i.$bullets.filter(".is-active").focus()}})})}}
/**
     * Resets Orbit so it can be reinitialized
     */},{key:"_reset",value:function t(){
// Don't do anything if there are no slides (first run)
void 0!==this.$slides&&1<this.$slides.length&&(
// Remove old events
this.$element.off(".zf.orbit").find("*").off(".zf.orbit"),// Restart timer if autoPlay is enabled
this.options.autoPlay&&this.timer.restart(),// Reset all sliddes
this.$slides.each(function(t){h()(t).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()}),// Show the first slide
this.$slides.first().addClass("is-active").show(),// Triggers when the slide has finished animating
this.$element.trigger("slidechange.zf.orbit",[this.$slides.first()]),// Select first bullet if bullets are present
this.options.bullets&&this._updateBullets(0))}
/**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */},{key:"changeSlide",value:function t(e,n,i){if(this.$slides){// Don't freak out if we're in the middle of cleanup
var o=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(o[0].className))return!1;//if the slide is currently animating, kick out of the function
var r=this.$slides.first(),s=this.$slides.last(),a=e?"Right":"Left",l=e?"Left":"Right",u=this,c;(c=n||(e?//if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
this.options.infiniteWrap?o.next(".".concat(this.options.slideClass)).length?o.next(".".concat(this.options.slideClass)):r:o.next(".".concat(this.options.slideClass))://pick next slide if moving left to right
this.options.infiniteWrap?o.prev(".".concat(this.options.slideClass)).length?o.prev(".".concat(this.options.slideClass)):s:o.prev(".".concat(this.options.slideClass)))).length&&(
/**
        * Triggers before the next slide starts animating in and only if a next slide has been found.
        * @event Orbit#beforeslidechange
        */
this.$element.trigger("beforeslidechange.zf.orbit",[o,c]),this.options.bullets&&(i=i||this.$slides.index(c),//grab index to update bullets
this._updateBullets(i)),this.options.useMUI&&!this.$element.is(":hidden")?(m.Motion.animateIn(c.addClass("is-active"),this.options["animInFrom".concat(a)],function(){c.css({display:"block"}).attr("aria-live","polite")}),m.Motion.animateOut(o.removeClass("is-active"),this.options["animOutTo".concat(l)],function(){o.removeAttr("aria-live"),u.options.autoPlay&&!u.timer.isPaused&&u.timer.restart()})):(o.removeClass("is-active is-in").removeAttr("aria-live").hide(),c.addClass("is-active is-in").attr("aria-live","polite").show(),this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart())
/**
        * Triggers when the slide has finished animating in.
        * @event Orbit#slidechange
        */,this.$element.trigger("slidechange.zf.orbit",[c]))}}
/**
    * Updates the active state of the bullets, if displayed.
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */},{key:"_updateBullets",value:function t(e){var n,i=this.$element.find(".".concat(this.options.boxOfBullets)).find(".is-active").removeClass("is-active").blur().find("span:last").detach(),o=this.$bullets.eq(e).addClass("is-active").append(i)}
/**
    * Destroys the carousel and hides the element.
    * @function
    */},{key:"_destroy",value:function t(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()}}]),i}(b.Plugin);
/* harmony import */$.defaults={
/**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
bullets:!0,
/**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
navButtons:!0,
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
animInFromRight:"slide-in-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
animOutToRight:"slide-out-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
animInFromLeft:"slide-in-left",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
animOutToLeft:"slide-out-left",
/**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
autoPlay:!0,
/**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
timerDelay:5e3,
/**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
infiniteWrap:!0,
/**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
swipe:!0,
/**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
pauseOnHover:!0,
/**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
accessible:!0,
/**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
containerClass:"orbit-container",
/**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
slideClass:"orbit-slide",
/**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
boxOfBullets:"orbit-bullets",
/**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
nextClass:"orbit-next",
/**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
prevClass:"orbit-previous",
/**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
  * @option
   * @type {boolean}
  * @default true
  */
useMUI:!0}},
/***/"./js/foundation.positionable.js":
/*!***************************************!*\
  !*** ./js/foundation.positionable.js ***!
  \***************************************/
/*! exports provided: Positionable */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}function f(t,e){var n=e.indexOf(t);return n===e.length-1?e[0]:e[n+1]}n.r(e),
/* harmony export (binding) */n.d(e,"Positionable",function(){return w});
/* harmony import */var h=n(/*! ./foundation.util.box */"./js/foundation.util.box.js"),p=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=["left","right","top","bottom"],v=["top","bottom","center"],y=["left","right","center"],b={left:v,right:v,top:y,bottom:y},w=
/* */
function(t){function e(){return o(this,e),a(this,u(e).apply(this,arguments))}return c(e,t),s(e,[{key:"_init",
/**
     * Abstract class encapsulating the tether-like explicit positioning logic
     * including repositioning based on overlap.
     * Expects classes to define defaults for vOffset, hOffset, position,
     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
     * extending the defaults, or (for now recommended due to the way docs are
     * generated) by explicitly declaring them.
     *
     **/
value:function t(){this.triedPositions={},this.position="auto"===this.options.position?this._getDefaultPosition():this.options.position,this.alignment="auto"===this.options.alignment?this._getDefaultAlignment():this.options.alignment,this.originalPosition=this.position,this.originalAlignment=this.alignment}},{key:"_getDefaultPosition",value:function t(){return"bottom"}},{key:"_getDefaultAlignment",value:function t(){switch(this.position){case"bottom":case"top":return Object(m.rtl)()?"right":"left";case"left":case"right":return"bottom"}}
/**
     * Adjusts the positionable possible positions by iterating through alignments
     * and positions.
     * @function
     * @private
     */},{key:"_reposition",value:function t(){this._alignmentsExhausted(this.position)?(this.position=f(this.position,g),this.alignment=b[this.position][0]):this._realign()}
/**
     * Adjusts the dropdown pane possible positions by iterating through alignments
     * on the current position.
     * @function
     * @private
     */},{key:"_realign",value:function t(){this._addTriedPosition(this.position,this.alignment),this.alignment=f(this.alignment,b[this.position])}},{key:"_addTriedPosition",value:function t(e,n){this.triedPositions[e]=this.triedPositions[e]||[],this.triedPositions[e].push(n)}},{key:"_positionsExhausted",value:function t(){for(var e=!0,n=0;n<g.length;n++)e=e&&this._alignmentsExhausted(g[n]);return e}},{key:"_alignmentsExhausted",value:function t(e){return this.triedPositions[e]&&this.triedPositions[e].length==b[e].length}// When we're trying to center, we don't want to apply offset that's going to
// take us just off center, so wrap around to return 0 for the appropriate
// offset in those alignments.  TODO: Figure out if we want to make this
// configurable behavior... it feels more intuitive, especially for tooltips, but
// it's possible someone might actually want to start from center and then nudge
// slightly off.
},{key:"_getVOffset",value:function t(){return this.options.vOffset}},{key:"_getHOffset",value:function t(){return this.options.hOffset}},{key:"_setPosition",value:function t(e,n,i){if("false"===e.attr("aria-expanded"))return!1;var o=h.Box.GetDimensions(n),r=h.Box.GetDimensions(e);if(this.options.allowOverlap||(
// restore original position & alignment before checking overlap
this.position=this.originalPosition,this.alignment=this.originalAlignment),n.offset(h.Box.GetExplicitOffsets(n,e,this.position,this.alignment,this._getVOffset(),this._getHOffset())),!this.options.allowOverlap){for(var s={},a=1e8,l={position:this.position,alignment:this.alignment};!this._positionsExhausted();){var u=h.Box.OverlapArea(n,i,!1,!1,this.options.allowBottomOverlap);if(0===u)return;u<a&&(a=u,l={position:this.position,alignment:this.alignment}),this._reposition(),n.offset(h.Box.GetExplicitOffsets(n,e,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}// If we get through the entire loop, there was no non-overlapping
// position available. Pick the version with least overlap.
this.position=l.position,this.alignment=l.alignment,n.offset(h.Box.GetExplicitOffsets(n,e,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}}}]),e}(p.Plugin);
/* harmony import */w.defaults={
/**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:!0,
/**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0}},
/***/"./js/foundation.responsiveAccordionTabs.js":
/*!**************************************************!*\
  !*** ./js/foundation.responsiveAccordionTabs.js ***!
  \**************************************************/
/*! exports provided: ResponsiveAccordionTabs */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
// The plugin matches the plugin classes with these plugin instances.
n.r(e),
/* harmony export (binding) */n.d(e,"ResponsiveAccordionTabs",function(){return w});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),v=n(/*! ./foundation.accordion */"./js/foundation.accordion.js"),y,b={tabs:{cssClass:"tabs",plugin:n(/*! ./foundation.tabs */"./js/foundation.tabs.js").Tabs},accordion:{cssClass:"accordion",plugin:v.Accordion}},w=
/* */
function(t){function e(){return o(this,e),a(this,u(e).apply(this,arguments))}return c(e,t),s(e,[{key:"_setup",
/**
     * Creates a new instance of a responsive accordion tabs.
     * @class
     * @name ResponsiveAccordionTabs
     * @fires ResponsiveAccordionTabs#init
     * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=h()(e),this.options=h.a.extend({},this.$element.data(),n),this.rules=this.$element.data("responsive-accordion-tabs"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveAccordionTabs",// ie9 back compat
this.$element.attr("id")||this.$element.attr("id",Object(m.GetYoDigits)(6,"responsiveaccordiontabs")),this._init(),this._events()}
/**
     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function t(){// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(p.MediaQuery._init(),"string"==typeof this.rules){// Iterate through every rule found
for(var e={},n=this.rules.split(" "),i=0// Parse rules from "classes" pulled from data attribute
;i<n.length;i++){var o=n[i].split("-"),r=1<o.length?o[0]:"small",s=1<o.length?o[1]:o[0];null!==b[s]&&(e[r]=b[s])}this.rules=e}this._getAllOptions(),h.a.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_getAllOptions",value:function t(){
//get all defaults and options
var e=this;for(var n in e.allOptions={},b)if(b.hasOwnProperty(n)){var i=b[n];try{var o=h()("<ul></ul>"),r=new i.plugin(o,e.options);for(var s in r.options)if(r.options.hasOwnProperty(s)&&"zfPlugin"!==s){var a=r.options[s];e.allOptions[s]=a}r.destroy()}catch(t){}}}
/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function t(){this._changedZfMediaQueryHandler=this._checkMediaQueries.bind(this),h()(window).on("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}
/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function t(){var e,n=this;// Iterate through each rule and find the last matching rule
h.a.each(this.rules,function(t){p.MediaQuery.atLeast(t)&&(e=t)}),// No match? No dice
e&&(// Plugin already initialized? We good
this.currentPlugin instanceof this.rules[e].plugin||(// Remove existing plugin-specific CSS classes
h.a.each(b,function(t,e){n.$element.removeClass(e.cssClass)}),// Add the CSS class for the new plugin
this.$element.addClass(this.rules[e].cssClass),// Create an instance of the new plugin
this.currentPlugin&&(
//don't know why but on nested elements data zfPlugin get's lost
!this.currentPlugin.$element.data("zfPlugin")&&this.storezfData&&this.currentPlugin.$element.data("zfPlugin",this.storezfData),this.currentPlugin.destroy()),this._handleMarkup(this.rules[e].cssClass),this.currentPlugin=new this.rules[e].plugin(this.$element,{}),this.storezfData=this.currentPlugin.$element.data("zfPlugin")))}},{key:"_handleMarkup",value:function t(e){var n=this,i="accordion",o=h()("[data-tabs-content="+this.$element.attr("id")+"]");if(o.length&&(i="tabs"),i!==e){var r=n.allOptions.linkClass?n.allOptions.linkClass:"tabs-title",s=n.allOptions.panelClass?n.allOptions.panelClass:"tabs-panel";this.$element.removeAttr("role");var a=this.$element.children("."+r+",[data-accordion-item]").removeClass(r).removeClass("accordion-item").removeAttr("data-accordion-item"),l=a.children("a").removeClass("accordion-title");if("tabs"===i?(o=o.children("."+s).removeClass(s).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected"):o=a.children("[data-tab-content]").removeClass("accordion-content"),o.css({display:"",visibility:""}),a.css({display:"",visibility:""}),"accordion"===e)o.each(function(t,e){h()(e).appendTo(a.get(t)).addClass("accordion-content").attr("data-tab-content","").removeClass("is-active").css({height:""}),h()("[data-tabs-content="+n.$element.attr("id")+"]").after('<div id="tabs-placeholder-'+n.$element.attr("id")+'"></div>').detach(),a.addClass("accordion-item").attr("data-accordion-item",""),l.addClass("accordion-title")});else if("tabs"===e){var u=h()("[data-tabs-content="+n.$element.attr("id")+"]"),c=h()("#tabs-placeholder-"+n.$element.attr("id"));c.length?(u=h()('<div class="tabs-content"></div>').insertAfter(c).attr("data-tabs-content",n.$element.attr("id")),c.remove()):u=h()('<div class="tabs-content"></div>').insertAfter(n.$element).attr("data-tabs-content",n.$element.attr("id")),o.each(function(t,e){var n=h()(e).appendTo(u).addClass(s),i=l.get(t).hash.slice(1),o=h()(e).attr("id")||Object(m.GetYoDigits)(6,"accordion"),r;i!==o&&(""!==i?h()(e).attr("id",i):(i=o,h()(e).attr("id",i),h()(l.get(t)).attr("href",h()(l.get(t)).attr("href").replace("#","")+"#"+i))),h()(a.get(t)).hasClass("is-active")&&n.addClass("is-active")}),a.addClass(r)}}}
/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function t(){this.currentPlugin&&this.currentPlugin.destroy(),h()(window).off("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}}]),e}(g.Plugin);
/* harmony import */w.defaults={}},
/***/"./js/foundation.responsiveMenu.js":
/*!*****************************************!*\
  !*** ./js/foundation.responsiveMenu.js ***!
  \*****************************************/
/*! exports provided: ResponsiveMenu */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}n.r(e),
/* harmony export (binding) */n.d(e,"ResponsiveMenu",function(){return $});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),v=n(/*! ./foundation.dropdownMenu */"./js/foundation.dropdownMenu.js"),y=n(/*! ./foundation.drilldown */"./js/foundation.drilldown.js"),b=n(/*! ./foundation.accordionMenu */"./js/foundation.accordionMenu.js"),w={dropdown:{cssClass:"dropdown",plugin:v.DropdownMenu},drilldown:{cssClass:"drilldown",plugin:y.Drilldown},accordion:{cssClass:"accordion-menu",plugin:b.AccordionMenu}},$=
/* */
function(t){function e(){return o(this,e),a(this,u(e).apply(this,arguments))}return c(e,t),s(e,[{key:"_setup",
/**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=h()(e),this.rules=this.$element.data("responsive-menu"),this.currentMq=null,this.currentPlugin=null,this.className="ResponsiveMenu",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
     * @function
     * @private
     */},{key:"_init",value:function t(){// The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules
if(p.MediaQuery._init(),"string"==typeof this.rules){// Iterate through every rule found
for(var e={},n=this.rules.split(" "),i=0// Parse rules from "classes" pulled from data attribute
;i<n.length;i++){var o=n[i].split("-"),r=1<o.length?o[0]:"small",s=1<o.length?o[1]:o[0];null!==w[s]&&(e[r]=w[s])}this.rules=e}h.a.isEmptyObject(this.rules)||this._checkMediaQueries(),// Add data-mutate since children may need it.
this.$element.attr("data-mutate",this.$element.attr("data-mutate")||Object(m.GetYoDigits)(6,"responsive-menu"))}
/**
     * Initializes events for the Menu.
     * @function
     * @private
     */},{key:"_events",value:function t(){var e=this;h()(window).on("changed.zf.mediaquery",function(){e._checkMediaQueries()})}
/**
     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
     * @function
     * @private
     */},{key:"_checkMediaQueries",value:function t(){var e,n=this;// Iterate through each rule and find the last matching rule
h.a.each(this.rules,function(t){p.MediaQuery.atLeast(t)&&(e=t)}),// No match? No dice
e&&(// Plugin already initialized? We good
this.currentPlugin instanceof this.rules[e].plugin||(// Remove existing plugin-specific CSS classes
h.a.each(w,function(t,e){n.$element.removeClass(e.cssClass)}),// Add the CSS class for the new plugin
this.$element.addClass(this.rules[e].cssClass),// Create an instance of the new plugin
this.currentPlugin&&this.currentPlugin.destroy(),this.currentPlugin=new this.rules[e].plugin(this.$element,{})))}
/**
     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
     * @function
     */},{key:"_destroy",value:function t(){this.currentPlugin.destroy(),h()(window).off(".zf.ResponsiveMenu")}}]),e}(g.Plugin);
/* harmony import */$.defaults={}},
/***/"./js/foundation.responsiveToggle.js":
/*!*******************************************!*\
  !*** ./js/foundation.responsiveToggle.js ***!
  \*******************************************/
/*! exports provided: ResponsiveToggle */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * ResponsiveToggle module.
 * @module foundation.responsiveToggle
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion
 */n.r(e),
/* harmony export (binding) */n.d(e,"ResponsiveToggle",function(){return v});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),m=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),g,v=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=h()(e),this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="ResponsiveToggle",// ie9 back compat
this._init(),this._events()}
/**
     * Initializes the tab bar by finding the target element, toggling element, and running update().
     * @function
     * @private
     */},{key:"_init",value:function t(){p.MediaQuery._init();var e=this.$element.data("responsive-toggle");// If they were set, parse the animation classes
if(e||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."),this.$targetMenu=h()("#".concat(e)),this.$toggler=this.$element.find("[data-toggle]").filter(function(){var t=h()(this).data("toggle");return t===e||""===t}),this.options=h.a.extend({},this.options,this.$targetMenu.data()),this.options.animate){var n=this.options.animate.split(" ");this.animationIn=n[0],this.animationOut=n[1]||null}this._update()}
/**
     * Adds necessary event handlers for the tab bar to work.
     * @function
     * @private
     */},{key:"_events",value:function t(){var e=this;this._updateMqHandler=this._update.bind(this),h()(window).on("changed.zf.mediaquery",this._updateMqHandler),this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}
/**
     * Checks the current media query to determine if the tab bar should be visible or hidden.
     * @function
     * @private
     */},{key:"_update",value:function t(){
// Mobile
p.MediaQuery.atLeast(this.options.hideFor)?(this.$element.hide(),this.$targetMenu.show()):(this.$element.show(),this.$targetMenu.hide())}
/**
     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
     * @function
     * @fires ResponsiveToggle#toggled
     */},{key:"toggleMenu",value:function t(){var e=this;p.MediaQuery.atLeast(this.options.hideFor)||(
/**
         * Fires when the element attached to the tab bar toggles.
         * @event ResponsiveToggle#toggled
         */
this.options.animate?this.$targetMenu.is(":hidden")?m.Motion.animateIn(this.$targetMenu,this.animationIn,function(){e.$element.trigger("toggled.zf.responsiveToggle"),e.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")}):m.Motion.animateOut(this.$targetMenu,this.animationOut,function(){e.$element.trigger("toggled.zf.responsiveToggle")}):(this.$targetMenu.toggle(0),this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"),this.$element.trigger("toggled.zf.responsiveToggle")))}},{key:"_destroy",value:function t(){this.$element.off(".zf.responsiveToggle"),this.$toggler.off(".zf.responsiveToggle"),h()(window).off("changed.zf.mediaquery",this._updateMqHandler)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */v.defaults={
/**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
hideFor:"medium",
/**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
animate:!1}},
/***/"./js/foundation.reveal.js":
/*!*********************************!*\
  !*** ./js/foundation.reveal.js ***!
  \*********************************/
/*! exports provided: Reveal */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Reveal module.
 * @module foundation.reveal
 * @requires foundation.util.keyboard
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.motion if using animations
 */n.r(e),
/* harmony export (binding) */n.d(e,"Reveal",function(){return w});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),y=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),b=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),w=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Reveal",// ie9 back compat
this._init(),// Triggers init is idempotent, just need to make sure it is initialized
b.Triggers.init(h.a),m.Keyboard.register("Reveal",{ESCAPE:"close"})}
/**
     * Initializes the modal by adding the overlay and close buttons, (if selected).
     * @private
     */},{key:"_init",value:function t(){var e=this;g.MediaQuery._init(),this.id=this.$element.attr("id"),this.isActive=!1,this.cached={mq:g.MediaQuery.current},this.$anchor=h()('[data-open="'.concat(this.id,'"]')).length?h()('[data-open="'.concat(this.id,'"]')):h()('[data-toggle="'.concat(this.id,'"]')),this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":!0,tabindex:0}),(this.options.fullScreen||this.$element.hasClass("full"))&&(this.options.fullScreen=!0,this.options.overlay=!1),this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id)),this.$element.attr({role:"dialog","aria-hidden":!0,"data-yeti-box":this.id,"data-resize":this.id}),this.$overlay?this.$element.detach().appendTo(this.$overlay):(this.$element.detach().appendTo(h()(this.options.appendTo)),this.$element.addClass("without-overlay")),this._events(),this.options.deepLink&&window.location.hash==="#".concat(this.id)&&(this.onLoadListener=Object(p.onLoad)(h()(window),function(){return e.open()}))}
/**
     * Creates an overlay div to display behind the modal.
     * @private
     */},{key:"_makeOverlay",value:function t(){var e="";return this.options.additionalOverlayClasses&&(e=" "+this.options.additionalOverlayClasses),h()("<div></div>").addClass("reveal-overlay"+e).appendTo(this.options.appendTo)}
/**
     * Updates position of modal
     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
     * @private
     */},{key:"_updatePosition",value:function t(){var e=this.$element.outerWidth(),n=h()(window).width(),i=this.$element.outerHeight(),o=h()(window).height(),r,s=null;r="auto"===this.options.hOffset?parseInt((n-e)/2,10):parseInt(this.options.hOffset,10),"auto"===this.options.vOffset?s=o<i?parseInt(Math.min(100,o/10),10):parseInt((o-i)/4,10):null!==this.options.vOffset&&(s=parseInt(this.options.vOffset,10)),null!==s&&this.$element.css({top:s+"px"}),// only worry about left if we don't have an overlay or we have a horizontal offset,
// otherwise we're perfectly in the middle
this.$overlay&&"auto"===this.options.hOffset||(this.$element.css({left:r+"px"}),this.$element.css({margin:"0px"}))}
/**
     * Adds event handlers for the modal.
     * @private
     */},{key:"_events",value:function t(){var i=this,o=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function t(e,n){if(e.target===o.$element[0]||h()(e.target).parents("[data-closable]")[0]===n)
// only close reveal when it's explicitly called
return i.close.apply(i)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function t(){o._updatePosition()}}),this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.reveal",function(t){t.target!==o.$element[0]&&!h.a.contains(o.$element[0],t.target)&&h.a.contains(document,t.target)&&o.close()}),this.options.deepLink&&h()(window).on("hashchange.zf.reveal:".concat(this.id),this._handleState.bind(this))}
/**
     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
     * @private
     */},{key:"_handleState",value:function t(e){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}
/**
    * Disables the scroll when Reveal is shown to prevent the background from shifting
    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
    */},{key:"_disableScroll",value:function t(e){e=e||h()(window).scrollTop(),h()(document).height()>h()(window).height()&&h()("html").css("top",-e)}
/**
    * Reenables the scroll when Reveal closes
    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
    */},{key:"_enableScroll",value:function t(e){e=e||parseInt(h()("html").css("top")),h()(document).height()>h()(window).height()&&(h()("html").css("top",""),h()(window).scrollTop(-e))}
/**
     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
     * @function
     * @fires Reveal#closeme
     * @fires Reveal#open
     */},{key:"open",value:function t(){var e=this,n="#".concat(this.id);
// either update or replace browser history
this.options.deepLink&&window.location.hash!==n&&(window.history.pushState?this.options.updateHistory?window.history.pushState({},"",n):window.history.replaceState({},"",n):window.location.hash=n),// Remember anchor that opened it to set focus back later, have general anchors as fallback
this.$activeAnchor=h()(document.activeElement).is(this.$anchor)?h()(document.activeElement):this.$anchor,this.isActive=!0,// Make elements invisible, but remove display: none so we can get size and positioning
this.$element.css({visibility:"hidden"}).show().scrollTop(0),this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show(),this._updatePosition(),this.$element.hide().css({visibility:""}),this.$overlay&&(this.$overlay.css({visibility:""}).hide(),this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")),this.options.multipleOpened||
/**
         * Fires immediately before the modal opens.
         * Closes any other modals that are currently open
         * @event Reveal#closeme
         */
this.$element.trigger("closeme.zf.reveal",this.id),this._disableScroll();var i=this;// Motion UI method of reveal
if(this.options.animationIn){var o=function t(){i.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),i._addGlobalClasses(),m.Keyboard.trapFocus(i.$element)};this.options.overlay&&v.Motion.animateIn(this.$overlay,"fade-in"),v.Motion.animateIn(this.$element,this.options.animationIn,function(){e.$element&&(
// protect against object having been removed
e.focusableElements=m.Keyboard.findFocusable(e.$element),o())})}// jQuery method of reveal
else this.options.overlay&&this.$overlay.show(0),this.$element.show(this.options.showDelay);// handle accessibility
this.$element.attr({"aria-hidden":!1,tabindex:-1}).focus(),m.Keyboard.trapFocus(this.$element),this._addGlobalClasses(),this._addGlobalListeners(),
/**
       * Fires when the modal has successfully opened.
       * @event Reveal#open
       */
this.$element.trigger("open.zf.reveal")}
/**
     * Adds classes and listeners on document required by open modals.
     *
     * The following classes are added and updated:
     * - `.is-reveal-open` - Prevents the scroll on document
     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
     *                       scroll was not disabled. This prevent a "shift" of the page content due
     *                       the scrollbar disappearing when the modal opens.
     *
     * @private
     */},{key:"_addGlobalClasses",value:function t(){var e=function t(){h()("html").toggleClass("zf-has-scroll",!!(h()(document).height()>h()(window).height()))};this.$element.on("resizeme.zf.trigger.revealScrollbarListener",function(){return e()}),e(),h()("html").addClass("is-reveal-open")}
/**
     * Removes classes and listeners on document that were required by open modals.
     * @private
     */},{key:"_removeGlobalClasses",value:function t(){this.$element.off("resizeme.zf.trigger.revealScrollbarListener"),h()("html").removeClass("is-reveal-open"),h()("html").removeClass("zf-has-scroll")}
/**
     * Adds extra event handlers for the body and window if necessary.
     * @private
     */},{key:"_addGlobalListeners",value:function t(){var e=this;this.$element&&(// If we're in the middle of cleanup, don't freak out
this.focusableElements=m.Keyboard.findFocusable(this.$element),this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||h()("body").on("click.zf.reveal",function(t){t.target!==e.$element[0]&&!h.a.contains(e.$element[0],t.target)&&h.a.contains(document,t.target)&&e.close()}),this.options.closeOnEsc&&h()(window).on("keydown.zf.reveal",function(t){m.Keyboard.handleKey(t,"Reveal",{close:function t(){e.options.closeOnEsc&&e.close()}})}))}
/**
     * Closes the modal.
     * @function
     * @fires Reveal#closed
     */},{key:"close",value:function t(){function e(){
// Get the current top before the modal is closed and restore the scroll after.
// TODO: use component properties instead of HTML properties
// See https://github.com/zurb/foundation-sites/pull/10786
var t=parseInt(h()("html").css("top"));0===h()(".reveal:visible").length&&n._removeGlobalClasses(),m.Keyboard.releaseFocus(n.$element),n.$element.attr("aria-hidden",!0),n._enableScroll(t),
/**
        * Fires when the modal is done closing.
        * @event Reveal#closed
        */
n.$element.trigger("closed.zf.reveal")}
/**
      * Resets the modal content
      * This prevents a running video to keep going in the background
      */if(!this.isActive||!this.$element.is(":visible"))return!1;var n=this;// Motion UI method of hiding
// If deepLink and we did not switched to an other modal...
if(this.options.animationOut?(this.options.overlay&&v.Motion.animateOut(this.$overlay,"fade-out"),v.Motion.animateOut(this.$element,this.options.animationOut,e)):(this.$element.hide(this.options.hideDelay),this.options.overlay?this.$overlay.hide(0,e):e()),// Conditionals to remove extra event listeners added on open
this.options.closeOnEsc&&h()(window).off("keydown.zf.reveal"),!this.options.overlay&&this.options.closeOnClick&&h()("body").off("click.zf.reveal"),this.$element.off("keydown.zf.reveal"),this.options.resetOnClose&&this.$element.html(this.$element.html()),this.isActive=!1,n.options.deepLink&&window.location.hash==="#".concat(this.id))
// Remove the history hash
if(window.history.replaceState){var i=window.location.pathname+window.location.search;this.options.updateHistory?window.history.pushState({},"",i):window.history.replaceState("",document.title,i)}else window.location.hash="";this.$activeAnchor.focus()}
/**
     * Toggles the open/closed state of a modal.
     * @function
     */},{key:"toggle",value:function t(){this.isActive?this.close():this.open()}},{key:"_destroy",
/**
     * Destroys an instance of a modal.
     * @function
     */
value:function t(){this.options.overlay&&(this.$element.appendTo(h()(this.options.appendTo)),// move $element outside of $overlay to prevent error unregisterPlugin()
this.$overlay.hide().off().remove()),this.$element.hide().off(),this.$anchor.off(".zf"),h()(window).off(".zf.reveal:".concat(this.id)),this.onLoadListener&&h()(window).off(this.onLoadListener),0===h()(".reveal:visible").length&&this._removeGlobalClasses()}}]),i}(y.Plugin);
/* harmony import */w.defaults={
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationIn:"",
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationOut:"",
/**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
showDelay:0,
/**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
hideDelay:0,
/**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:!0,
/**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnEsc:!0,
/**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
multipleOpened:!1,
/**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
vOffset:"auto",
/**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
hOffset:"auto",
/**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
fullScreen:!1,
/**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
overlay:!0,
/**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
resetOnClose:!1,
/**
   * Link the location hash to the modal.
   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, update the browser history with the open modal
   * @option
   * @default false
   */
updateHistory:!1,
/**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
appendTo:"body",
/**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
additionalOverlayClasses:""}},
/***/"./js/foundation.slider.js":
/*!*********************************!*\
  !*** ./js/foundation.slider.js ***!
  \*********************************/
/*! exports provided: Slider */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Slider module.
 * @module foundation.slider
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 * @requires foundation.util.keyboard
 * @requires foundation.util.touch
 */function x(t,e){return t/e}function w(t,e,n,i){return Math.abs(t.position()[e]+t[i]()/2-n)}function f(t,e){return Math.log(e)/Math.log(t)}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Slider",function(){return y});
/* harmony import */var h=n(/*! jquery */"jquery"),$=/* */n.n(h),p=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),_=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),k=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.util.touch */"./js/foundation.util.touch.js"),v=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=$.a.extend({},i.defaults,this.$element.data(),n),this.className="Slider",// ie9 back compat
// Touch and Triggers inits are idempotent, we just need to make sure it's initialied.
g.Touch.init($.a),v.Triggers.init($.a),this._init(),p.Keyboard.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increase_fast",SHIFT_ARROW_UP:"increase_fast",SHIFT_ARROW_DOWN:"decrease_fast",SHIFT_ARROW_LEFT:"decrease_fast",HOME:"min",END:"max"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increase_fast",SHIFT_ARROW_RIGHT:"decrease_fast"}})}
/**
     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
     * @function
     * @private
     */},{key:"_init",value:function t(){this.inputs=this.$element.find("input"),this.handles=this.$element.find("[data-slider-handle]"),this.$handle=this.handles.eq(0),this.$input=this.inputs.length?this.inputs.eq(0):$()("#".concat(this.$handle.attr("aria-controls"))),this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);var e=!1,n=this;(this.options.disabled||this.$element.hasClass(this.options.disabledClass))&&(this.options.disabled=!0,this.$element.addClass(this.options.disabledClass)),this.inputs.length||(this.inputs=$()().add(this.$input),this.options.binding=!0),this._setInitAttr(0),this.handles[1]&&(this.options.doubleSided=!0,this.$handle2=this.handles.eq(1),this.$input2=1<this.inputs.length?this.inputs.eq(1):$()("#".concat(this.$handle2.attr("aria-controls"))),this.inputs[1]||(this.inputs=this.inputs.add(this.$input2)),e=!0,// this.$handle.triggerHandler('click.zf.slider');
this._setInitAttr(1)),// Set handle positions
this.setHandles(),this._events()}},{key:"setHandles",value:function t(){var e=this;this.handles[1]?this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0,function(){e._setHandlePos(e.$handle2,e.inputs.eq(1).val(),!0)}):this._setHandlePos(this.$handle,this.inputs.eq(0).val(),!0)}},{key:"_reflow",value:function t(){this.setHandles()}
/**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */},{key:"_pctOfBar",value:function t(e){var n=x(e-this.options.start,this.options.end-this.options.start);switch(this.options.positionValueFunction){case"pow":n=this._logTransform(n);break;case"log":n=this._powTransform(n);break}return n.toFixed(2)}
/**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */},{key:"_value",value:function t(e){switch(this.options.positionValueFunction){case"pow":e=this._powTransform(e);break;case"log":e=this._logTransform(e);break}var n;return(this.options.end-this.options.start)*e+parseFloat(this.options.start)}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */},{key:"_logTransform",value:function t(e){return f(this.options.nonLinearBase,e*(this.options.nonLinearBase-1)+1)}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */},{key:"_powTransform",value:function t(e){return(Math.pow(this.options.nonLinearBase,e)-1)/(this.options.nonLinearBase-1)}
/**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */},{key:"_setHandlePos",value:function t(e,n,i,o){
// don't move if the slider has been disabled since its initialization
if(!this.$element.hasClass(this.options.disabledClass)){//on input change events, convert string to number...grumble.
// prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max
(//might need to alter that slightly for bars that will have odd number selections.
n=parseFloat(n))<this.options.start?n=this.options.start:n>this.options.end&&(n=this.options.end);var r=this.options.doubleSided;//this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
//for click and drag events, it's weird due to the scale(-1, 1) css property
if(this.options.vertical&&!i&&(n=this.options.end-n),r)
//this block is to prevent 2 handles from crossing eachother. Could/should be improved.
if(0===this.handles.index(e)){var s=parseFloat(this.$handle2.attr("aria-valuenow"));n=s<=n?s-this.options.step:n}else{var a=parseFloat(this.$handle.attr("aria-valuenow"));n=n<=a?a+this.options.step:n}var l=this,u=this.options.vertical,c=u?"height":"width",d=u?"top":"left",f=e[0].getBoundingClientRect()[c],h=this.$element[0].getBoundingClientRect()[c],
//percentage of bar min/max value based on click or drag point
p=this._pctOfBar(n),
//number of actual pixels to shift the handle, based on the percentage obtained above
m,
//percentage of bar to shift the handle
g=(100*x((h-f)*p,h)).toFixed(this.options.decimal);//fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value
n=parseFloat(n.toFixed(this.options.decimal));// declare empty object for css adjustments, only used with 2 handled-sliders
var v={};// TODO update to calculate based on values set to respective inputs??
if(this._setValues(e,n),r){var y=0===this.handles.index(e),
//empty variable, will be used for min-height/width for fill bar
b,
//percentage w/h of the handle compared to the slider bar
w=~~(100*x(f,h));//if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar
if(y)
//left or top percentage value to apply to the fill bar.
v[d]="".concat(g,"%"),//calculate the new min-height/width for the fill bar.
b=parseFloat(this.$handle2[0].style[d])-g+w,//this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
//plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.
o&&"function"==typeof o&&o();else{
//just caching the value of the left/bottom handle's left/top property
var $=parseFloat(this.$handle[0].style[d]);//calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
//based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself
b=g-(isNaN($)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):$)+w}// assign the min-height/width to our css object
v["min-".concat(c)]="".concat(b,"%")}this.$element.one("finished.zf.animate",function(){
/**
         * Fires when the handle is done moving.
         * @event Slider#moved
         */
l.$element.trigger("moved.zf.slider",[e])});//because we don't know exactly how the handle will be moved, check the amount of time it should take to move.
var k=this.$element.data("dragging")?1e3/60:this.options.moveTime;Object(_.Move)(k,e,function(){
// adjusting the left/top property of the handle, based on the percentage calculated above
// if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
// fall back to next best guess.
isNaN(g)?e.css(d,"".concat(100*p,"%")):e.css(d,"".concat(g,"%")),l.options.doubleSided?
//otherwise, use the css object we created above
l.$fill.css(v):
//if single-handled, a simple method to expand the fill bar
l.$fill.css(c,"".concat(100*p,"%"))}),
/**
       * Fires when the value has not been change for a given time.
       * @event Slider#changed
       */
clearTimeout(l.timeout),l.timeout=setTimeout(function(){l.$element.trigger("changed.zf.slider",[e])},l.options.changedDelay)}}
/**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */},{key:"_setInitAttr",value:function t(e){var n=0===e?this.options.initialStart:this.options.initialEnd,i=this.inputs.eq(e).attr("id")||Object(k.GetYoDigits)(6,"slider");this.inputs.eq(e).attr({id:i,max:this.options.end,min:this.options.start,step:this.options.step}),this.inputs.eq(e).val(n),this.handles.eq(e).attr({role:"slider","aria-controls":i,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":n,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}
/**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */},{key:"_setValues",value:function t(e,n){var i=this.options.doubleSided?this.handles.index(e):0;this.inputs.eq(i).val(n),e.attr("aria-valuenow",n)}
/**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */},{key:"_handleEvent",value:function t(e,n,i){var o,r;if(i)
//change event on input
o=this._adjustValue(null,i),r=!0;else{
//click or drag events
e.preventDefault();var s=this,a=this.options.vertical,l=a?"height":"width",u=a?"top":"left",c=a?e.pageY:e.pageX,d=this.$handle[0].getBoundingClientRect()[l]/2,f=this.$element[0].getBoundingClientRect()[l],h=a?$()(window).scrollTop():$()(window).scrollLeft(),p=this.$element.offset()[u];// touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
// best way to guess this is simulated is if clientY == pageY
e.clientY===e.pageY&&(c+=h);var m=c-p,g,v=x(g=m<0?0:f<m?f:m,f),y,b;if(o=this._value(v),// turn everything around for RTL, yay math!
Object(k.rtl)()&&!this.options.vertical&&(o=this.options.end-o),o=s._adjustValue(null,o),//boolean flag for the setHandlePos fn, specifically for vertical sliders
r=!1,!n)n=w(this.$handle,u,g,l)<=w(this.$handle2,u,g,l)?this.$handle:this.$handle2}this._setHandlePos(n,o,r)}
/**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */},{key:"_adjustValue",value:function t(e,n){var i,o=this.options.step,r=parseFloat(o/2),s,a,l;return 0===(s=0<=(i=e?parseFloat(e.attr("aria-valuenow")):n)?i%o:o+i%o)?i:i=(a=i-s)+r<=i?l=a+o:a}
/**
     * Adds event listeners to the slider elements.
     * @function
     * @private
     */},{key:"_events",value:function t(){this._eventsForHandle(this.$handle),this.handles[1]&&this._eventsForHandle(this.$handle2)}
/**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */},{key:"_eventsForHandle",value:function t(e){var r=this,n,i,o=function t(e){var n=r.inputs.index($()(this));r._handleEvent(e,r.handles.eq(n),$()(this).val())};if(// IE only triggers the change event when the input loses focus which strictly follows the HTML specification
// listen for the enter key and trigger a change
// @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events
this.inputs.off("keyup.zf.slider").on("keyup.zf.slider",function(t){13==t.keyCode&&o.call(this,t)}),this.inputs.off("change.zf.slider").on("change.zf.slider",o),this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",function(t){if(r.$element.data("dragging"))return!1;$()(t.target).is("[data-slider-handle]")||(r.options.doubleSided?r._handleEvent(t):r._handleEvent(t,r.$handle))}),this.options.draggable){this.handles.addTouch();var s=$()("body");e.off("mousedown.zf.slider").on("mousedown.zf.slider",function(t){e.addClass("is-dragging"),r.$fill.addClass("is-dragging"),//
r.$element.data("dragging",!0),n=$()(t.currentTarget),s.on("mousemove.zf.slider",function(t){t.preventDefault(),r._handleEvent(t,n)}).on("mouseup.zf.slider",function(t){r._handleEvent(t,n),e.removeClass("is-dragging"),r.$fill.removeClass("is-dragging"),r.$element.data("dragging",!1),s.off("mousemove.zf.slider mouseup.zf.slider")})}).on("selectstart.zf.slider touchmove.zf.slider",function(t){t.preventDefault()})}e.off("keydown.zf.slider").on("keydown.zf.slider",function(e){var n=$()(this),t=r.options.doubleSided?r.handles.index(n):0,i=parseFloat(r.inputs.eq(t).val()),o;// handle keyboard event with keyboard util
p.Keyboard.handleKey(e,"Slider",{decrease:function t(){o=i-r.options.step},increase:function t(){o=i+r.options.step},decrease_fast:function t(){o=i-10*r.options.step},increase_fast:function t(){o=i+10*r.options.step},min:function t(){o=r.options.start},max:function t(){o=r.options.end},handled:function t(){
// only set handle pos when event was handled specially
e.preventDefault(),r._setHandlePos(n,o,!0)}})})}
/**
     * Destroys the slider plugin.
     */},{key:"_destroy",value:function t(){this.handles.off(".zf.slider"),this.inputs.off(".zf.slider"),this.$element.off(".zf.slider"),clearTimeout(this.timeout)}}]),i}(m.Plugin);
/* harmony import */y.defaults={
/**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
start:0,
/**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
end:100,
/**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
step:1,
/**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
initialStart:0,
/**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
initialEnd:100,
/**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
binding:!1,
/**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
clickSelect:!0,
/**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
vertical:!1,
/**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
draggable:!0,
/**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
disabled:!1,
/**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
doubleSided:!1,
/**
   * Potential future feature.
   */
// steps: 100,
/**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
decimal:2,
/**
   * Time delay for dragged elements.
   */
// dragDelay: 0,
/**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
moveTime:200,
//update this if changing the transition time in the sass
/**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
disabledClass:"disabled",
/**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
invertVertical:!1,
/**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
changedDelay:500,
/**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
nonLinearBase:5,
/**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
positionValueFunction:"linear"}},
/***/"./js/foundation.smoothScroll.js":
/*!***************************************!*\
  !*** ./js/foundation.smoothScroll.js ***!
  \***************************************/
/*! exports provided: SmoothScroll */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * SmoothScroll module.
 * @module foundation.smooth-scroll
 */n.r(e),
/* harmony export (binding) */n.d(e,"SmoothScroll",function(){return g});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m,g=
/* */
function(t){function l(){return o(this,l),a(this,u(l).apply(this,arguments))}return c(l,t),s(l,[{key:"_setup",
/**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},l.defaults,this.$element.data(),n),this.className="SmoothScroll",// ie9 back compat
this._init()}
/**
     * Initialize the SmoothScroll plugin
     * @private
     */},{key:"_init",value:function t(){var e=this.$element[0].id||Object(p.GetYoDigits)(6,"smooth-scroll");this.$element.attr({id:e}),this._events()}
/**
     * Initializes events for SmoothScroll.
     * @private
     */},{key:"_events",value:function t(){this.$element.on("click.zf.smoothScroll",this._handleLinkClick),this.$element.on("click.zf.smoothScroll",'a[href^="#"]',this._handleLinkClick)}
/**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */},{key:"_handleLinkClick",value:function t(e){var n=this;
// Follow the link if it does not point to an anchor.
if(h()(e.currentTarget).is('a[href^="#"]')){var i=e.currentTarget.getAttribute("href");this._inTransition=!0,l.scrollToLoc(i,this.options,function(){n._inTransition=!1}),e.preventDefault()}}},{key:"_destroy",
/**
     * Destroys the SmoothScroll instance.
     * @function
     */
value:function t(){this.$element.off("click.zf.smoothScroll",this._handleLinkClick),this.$element.off("click.zf.smoothScroll",'a[href^="#"]',this._handleLinkClick)}}],[{key:"scrollToLoc",
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */
value:function t(e,n,i){var o=1<arguments.length&&void 0!==n?n:l.defaults,r=2<arguments.length?i:void 0,s=h()(e);// Do nothing if target does not exist to prevent errors
if(!s.length)return!1;var a=Math.round(s.offset().top-o.threshold/2-o.offset);h()("html, body").stop(!0).animate({scrollTop:a},o.animationDuration,o.animationEasing,function(){"function"==typeof r&&r()})}}]),l}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */
/**
 * Default settings for plugin.
 */
g.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0}},
/***/"./js/foundation.sticky.js":
/*!*********************************!*\
  !*** ./js/foundation.sticky.js ***!
  \*********************************/
/*! exports provided: Sticky */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Sticky module.
 * @module foundation.sticky
 * @requires foundation.util.triggers
 * @requires foundation.util.mediaQuery
 */
/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */
function f(t){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*t}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Sticky",function(){return b});
/* harmony import */var h=n(/*! jquery */"jquery"),p=/* */n.n(h),m=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),g=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),v=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
value:function t(e,n){this.$element=e,this.options=p.a.extend({},i.defaults,this.$element.data(),n),this.className="Sticky",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(p.a),this._init()}
/**
     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
     * @function
     * @private
     */},{key:"_init",value:function t(){g.MediaQuery._init();var e=this.$element.parent("[data-sticky-container]"),n=this.$element[0].id||Object(m.GetYoDigits)(6,"sticky"),i=this;e.length?this.$container=e:(this.wasWrapped=!0,this.$element.wrap(this.options.container),this.$container=this.$element.parent()),this.$container.addClass(this.options.containerClass),this.$element.addClass(this.options.stickyClass).attr({"data-resize":n,"data-mutate":n}),""!==this.options.anchor&&p()("#"+i.options.anchor).attr({"data-mutate":n}),this.scrollCount=this.options.checkEvery,this.isStuck=!1,this.onLoadListener=Object(m.onLoad)(p()(window),function(){
//We calculate the container height to have correct values for anchor points offset calculation.
i.containerHeight="none"==i.$element.css("display")?0:i.$element[0].getBoundingClientRect().height,i.$container.css("height",i.containerHeight),i.elemHeight=i.containerHeight,""!==i.options.anchor?i.$anchor=p()("#"+i.options.anchor):i._parsePoints(),i._setSizes(function(){var t=window.pageYOffset;i._calc(!1,t),//Unstick the element will ensure that proper classes are set.
i.isStuck||i._removeSticky(!(t>=i.topPoint))}),i._events(n.split("-").reverse().join("-"))})}
/**
     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
     * @function
     * @private
     */},{key:"_parsePoints",value:function t(){for(var e,n,i=[""==this.options.topAnchor?1:this.options.topAnchor,""==this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor],o={},r=0,s=i.length;r<s&&i[r];r++){var a;if("number"==typeof i[r])a=i[r];else{var l=i[r].split(":"),u=p()("#".concat(l[0]));a=u.offset().top,l[1]&&"bottom"===l[1].toLowerCase()&&(a+=u[0].getBoundingClientRect().height)}o[r]=a}this.points=o}
/**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_events",value:function t(n){var i=this,e=this.scrollListener="scroll.zf.".concat(n);this.isOn||(this.canStick&&(this.isOn=!0,p()(window).off(e).on(e,function(t){0===i.scrollCount?(i.scrollCount=i.options.checkEvery,i._setSizes(function(){i._calc(!1,window.pageYOffset)})):(i.scrollCount--,i._calc(!1,window.pageYOffset))})),this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",function(t,e){i._eventsHandler(n)}),this.$element.on("mutateme.zf.trigger",function(t,e){i._eventsHandler(n)}),this.$anchor&&this.$anchor.on("mutateme.zf.trigger",function(t,e){i._eventsHandler(n)}))}
/**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_eventsHandler",value:function t(e){var n=this,i=this.scrollListener="scroll.zf.".concat(e);n._setSizes(function(){n._calc(!1),n.canStick?n.isOn||n._events(e):n.isOn&&n._pauseListeners(i)})}
/**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */},{key:"_pauseListeners",value:function t(e){this.isOn=!1,p()(window).off(e),
/**
       * Fires when the plugin is paused due to resize event shrinking the view.
       * @event Sticky#pause
       * @private
       */
this.$element.trigger("pause.zf.sticky")}
/**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */},{key:"_calc",value:function t(e,n){if(e&&this._setSizes(),!this.canStick)return this.isStuck&&this._removeSticky(!0),!1;n||(n=window.pageYOffset),n>=this.topPoint?n<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(!1):this.isStuck&&this._removeSticky(!0)}
/**
     * Causes the $element to become stuck.
     * Adds `position: fixed;`, and helper classes.
     * @fires Sticky#stuckto
     * @function
     * @private
     */},{key:"_setSticky",value:function t(){var e=this,n=this.options.stickTo,i="top"===n?"marginTop":"marginBottom",o="top"===n?"bottom":"top",r={};r[i]="".concat(this.options[i],"em"),r[n]=0,r[o]="auto",this.isStuck=!0,this.$element.removeClass("is-anchored is-at-".concat(o)).addClass("is-stuck is-at-".concat(n)).css(r)
/**
       * Fires when the $element has become `position: fixed;`
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
       * @event Sticky#stuckto
       */.trigger("sticky.zf.stuckto:".concat(n)),this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){e._setSizes()})}
/**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */},{key:"_removeSticky",value:function t(e){var n=this.options.stickTo,i="top"===n,o={},r=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,s,a=i?"bottom":"top",l=e?"top":"bottom";o[i?"marginTop":"marginBottom"]=0,o.bottom="auto",o.top=e?0:r,this.isStuck=!1,this.$element.removeClass("is-stuck is-at-".concat(n)).addClass("is-anchored is-at-".concat(l)).css(o)
/**
       * Fires when the $element has become anchored.
       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
       * @event Sticky#unstuckfrom
       */.trigger("sticky.zf.unstuckfrom:".concat(l))}
/**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */},{key:"_setSizes",value:function t(e){this.canStick=g.MediaQuery.is(this.options.stickyOn),this.canStick||e&&"function"==typeof e&&e();var n=this,i=this.$container[0].getBoundingClientRect().width,o=window.getComputedStyle(this.$container[0]),r=parseInt(o["padding-left"],10),s=parseInt(o["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints(),this.$element.css({"max-width":"".concat(i-r-s,"px")});var a=this.$element[0].getBoundingClientRect().height||this.containerHeight;if("none"==this.$element.css("display")&&(a=0),this.containerHeight=a,this.$container.css({height:a}),this.elemHeight=a,!this.isStuck&&this.$element.hasClass("is-at-bottom")){var l=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",l)}this._setBreakPoints(a,function(){e&&"function"==typeof e&&e()})}
/**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */},{key:"_setBreakPoints",value:function t(e,n){if(!this.canStick){if(!n||"function"!=typeof n)return!1;n()}var i=f(this.options.marginTop),o=f(this.options.marginBottom),r=this.points?this.points[0]:this.$anchor.offset().top,s=this.points?this.points[1]:r+this.anchorHeight,
// topPoint = this.$anchor.offset().top || this.points[0],
// bottomPoint = topPoint + this.anchorHeight || this.points[1],
a=window.innerHeight;"top"===this.options.stickTo?(r-=i,s-=e+i):"bottom"===this.options.stickTo&&(r-=a-(e+o),s-=a-o),this.topPoint=r,this.bottomPoint=s,n&&"function"==typeof n&&n()}
/**
     * Destroys the current sticky element.
     * Resets the element to the top position first.
     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
     * @function
     */},{key:"_destroy",value:function t(){this._removeSticky(!0),this.$element.removeClass("".concat(this.options.stickyClass," is-anchored is-at-top")).css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger").off("mutateme.zf.trigger"),this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky"),this.scrollListener&&p()(window).off(this.scrollListener),this.onLoadListener&&p()(window).off(this.onLoadListener),this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""})}}]),i}(v.Plugin);
/* harmony import */b.defaults={
/**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
container:"<div data-sticky-container></div>",
/**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
stickTo:"top",
/**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
anchor:"",
/**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
topAnchor:"",
/**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
btmAnchor:"",
/**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginTop:1,
/**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginBottom:1,
/**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
stickyOn:"medium",
/**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
stickyClass:"sticky",
/**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
containerClass:"sticky-container",
/**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
checkEvery:-1}},
/***/"./js/foundation.tabs.js":
/*!*******************************!*\
  !*** ./js/foundation.tabs.js ***!
  \*******************************/
/*! exports provided: Tabs */
/***/function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Tabs module.
 * @module foundation.tabs
 * @requires foundation.util.keyboard
 * @requires foundation.util.imageLoader if tabs contain images
 */n.r(e),
/* harmony export (binding) */n.d(e,"Tabs",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),m=n(/*! ./foundation.util.keyboard */"./js/foundation.util.keyboard.js"),g=n(/*! ./foundation.util.imageLoader */"./js/foundation.util.imageLoader.js"),v,y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,this.$element.data(),n),this.className="Tabs",// ie9 back compat
this._init(),m.Keyboard.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}
/**
     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
     * @private
     */},{key:"_init",value:function t(){var r=this,s=this;if(this._isInitializing=!0,this.$element.attr({role:"tablist"}),this.$tabTitles=this.$element.find(".".concat(this.options.linkClass)),this.$tabContent=h()('[data-tabs-content="'.concat(this.$element[0].id,'"]')),this.$tabTitles.each(function(){var t=h()(this),e=t.find("a"),n=t.hasClass("".concat(s.options.linkActiveClass)),i=e.attr("data-tabs-target")||e[0].hash.slice(1),o=e[0].id?e[0].id:"".concat(i,"-label"),r=h()("#".concat(i));t.attr({role:"presentation"}),e.attr({role:"tab","aria-controls":i,"aria-selected":n,id:o,tabindex:n?"0":"-1"}),r.attr({role:"tabpanel","aria-labelledby":o}),// Save up the initial hash to return to it later when going back in history
n&&(s._initialAnchor="#".concat(i)),n||r.attr("aria-hidden","true"),n&&s.options.autoFocus&&(s.onLoadListener=Object(p.onLoad)(h()(window),function(){h()("html, body").animate({scrollTop:t.offset().top},s.options.deepLinkSmudgeDelay,function(){e.focus()})}))}),this.options.matchHeight){var e=this.$tabContent.find("img");e.length?Object(g.onImagesLoaded)(e,this._setHeight.bind(this)):this._setHeight()}// Current context-bound function to open tabs on page load or history hashchange
this._checkDeepLink=function(){var t=window.location.hash;if(!t.length){
// If we are still initializing and there is no anchor, then there is nothing to do
if(r._isInitializing)return;// Otherwise, move to the initial anchor
r._initialAnchor&&(t=r._initialAnchor)}var e=t&&h()(t),n=t&&r.$element.find('[href$="'+t+'"]'),i=!(!e.length||!n.length);if(// If there is an anchor for the hash, select it
e&&e.length&&n&&n.length?r.selectTab(e,!0):r._collapse(),i){
// Roll up a little to show the titles
if(r.options.deepLinkSmudge){var o=r.$element.offset();h()("html, body").animate({scrollTop:o.top},r.options.deepLinkSmudgeDelay)}
/**
           * Fires when the plugin has deeplinked at pageload
           * @event Tabs#deeplink
           */r.$element.trigger("deeplink.zf.tabs",[n,e])}},//use browser to open a tab, if it exists in this tabset
this.options.deepLink&&this._checkDeepLink(),this._events(),this._isInitializing=!1}
/**
     * Adds event handlers for items within the tabs.
     * @private
     */},{key:"_events",value:function t(){this._addKeyHandler(),this._addClickHandler(),this._setHeightMqHandler=null,this.options.matchHeight&&(this._setHeightMqHandler=this._setHeight.bind(this),h()(window).on("changed.zf.mediaquery",this._setHeightMqHandler)),this.options.deepLink&&h()(window).on("hashchange",this._checkDeepLink)}
/**
     * Adds click handlers for items within the tabs.
     * @private
     */},{key:"_addClickHandler",value:function t(){var e=this;this.$element.off("click.zf.tabs").on("click.zf.tabs",".".concat(this.options.linkClass),function(t){t.preventDefault(),t.stopPropagation(),e._handleTabChange(h()(this))})}
/**
     * Adds keyboard event handlers for items within the tabs.
     * @private
     */},{key:"_addKeyHandler",value:function t(){var s=this;this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",function(e){if(9!==e.which){var n=h()(this),i=n.parent("ul").children("li"),o,r;i.each(function(t){h()(this).is(n)&&(r=s.options.wrapOnKeys?(o=0===t?i.last():i.eq(t-1),t===i.length-1?i.first():i.eq(t+1)):(o=i.eq(Math.max(0,t-1)),i.eq(Math.min(t+1,i.length-1))))}),// handle keyboard event with keyboard util
m.Keyboard.handleKey(e,"Tabs",{open:function t(){n.find('[role="tab"]').focus(),s._handleTabChange(n)},previous:function t(){o.find('[role="tab"]').focus(),s._handleTabChange(o)},next:function t(){r.find('[role="tab"]').focus(),s._handleTabChange(r)},handled:function t(){e.stopPropagation(),e.preventDefault()}})}})}
/**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */},{key:"_handleTabChange",value:function t(e,n){
// With `activeCollapse`, if the target is the active Tab, collapse it.
if(e.hasClass("".concat(this.options.linkActiveClass)))this.options.activeCollapse&&this._collapse();else{var i=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass)),o=e.find('[role="tab"]'),r=o.attr("data-tabs-target"),s=r&&r.length?"#".concat(r):o[0].hash,a=this.$tabContent.find(s);//close old tab
this._collapseTab(i),//open new tab
this._openTab(e),//either replace or update browser history
this.options.deepLink&&!n&&(this.options.updateHistory?history.pushState({},"",s):history.replaceState({},"",s))
/**
       * Fires when the plugin has successfully changed tabs.
       * @event Tabs#change
       */,this.$element.trigger("change.zf.tabs",[e,a]),//fire to children a mutation event
a.find("[data-mutate]").trigger("mutateme.zf.trigger")}}
/**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */},{key:"_openTab",value:function t(e){var n=e.find('[role="tab"]'),i=n.attr("data-tabs-target")||n[0].hash.slice(1),o=this.$tabContent.find("#".concat(i));e.addClass("".concat(this.options.linkActiveClass)),n.attr({"aria-selected":"true",tabindex:"0"}),o.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")}
/**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */},{key:"_collapseTab",value:function t(e){var n=e.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({"aria-selected":"false",tabindex:-1});h()("#".concat(n.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({"aria-hidden":"true"})}
/**
     * Collapses the active Tab.
     * @fires Tabs#collapse
     * @function
     */},{key:"_collapse",value:function t(){var e=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass));e.length&&(this._collapseTab(e),
/**
        * Fires when the plugin has successfully collapsed tabs.
        * @event Tabs#collapse
        */
this.$element.trigger("collapse.zf.tabs",[e]))}
/**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */},{key:"selectTab",value:function t(e,n){var i;(i="object"===r(e)?e[0].id:e).indexOf("#")<0&&(i="#".concat(i));var o=this.$tabTitles.has('[href$="'.concat(i,'"]'));this._handleTabChange(o,n)}},{key:"_setHeight",
/**
     * Sets the height of each panel to the height of the tallest panel.
     * If enabled in options, gets called on media query change.
     * If loading content via external source, can be called directly or with _reflow.
     * If enabled with `data-match-height="true"`, tabs sets to equal height
     * @function
     * @private
     */
value:function t(){var i=0,o=this;// Lock down the `this` value for the root tabs object
this.$tabContent.find(".".concat(this.options.panelClass)).css("height","").each(function(){var t=h()(this),e=t.hasClass("".concat(o.options.panelActiveClass));// get the options from the parent instead of trying to get them from the child
e||t.css({visibility:"hidden",display:"block"});var n=this.getBoundingClientRect().height;e||t.css({visibility:"",display:""}),i=i<n?n:i}).css("height","".concat(i,"px"))}
/**
     * Destroys an instance of tabs.
     * @fires Tabs#destroyed
     */},{key:"_destroy",value:function t(){this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(),this.options.matchHeight&&null!=this._setHeightMqHandler&&h()(window).off("changed.zf.mediaquery",this._setHeightMqHandler),this.options.deepLink&&h()(window).off("hashchange",this._checkDeepLink),this.onLoadListener&&h()(window).off(this.onLoadListener)}}]),i}(n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js").Plugin);
/* harmony import */y.defaults={
/**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:!1,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:!1,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLink` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:!1,
/**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:!1,
/**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
wrapOnKeys:!0,
/**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
matchHeight:!1,
/**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
activeCollapse:!1,
/**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
linkClass:"tabs-title",
/**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
linkActiveClass:"is-active",
/**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
panelClass:"tabs-panel",
/**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
panelActiveClass:"is-active"}},
/***/"./js/foundation.toggler.js":
/*!**********************************!*\
  !*** ./js/foundation.toggler.js ***!
  \**********************************/
/*! exports provided: Toggler */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}function d(t,e){return(d=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Toggler module.
 * @module foundation.toggler
 * @requires foundation.util.motion
 * @requires foundation.util.triggers
 */n.r(e),
/* harmony export (binding) */n.d(e,"Toggler",function(){return y});
/* harmony import */var f=n(/*! jquery */"jquery"),h=/* */n.n(f),p=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),m=n(/*! ./foundation.core.plugin */"./js/foundation.core.plugin.js"),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),y=
/* */
function(t){function i(){return o(this,i),a(this,u(i).apply(this,arguments))}return c(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
value:function t(e,n){this.$element=e,this.options=h.a.extend({},i.defaults,e.data(),n),this.className="",this.className="Toggler",// ie9 back compat
// Triggers init is idempotent, just need to make sure it is initialized
v.Triggers.init(h.a),this._init(),this._events()}
/**
     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
     * @function
     * @private
     */},{key:"_init",value:function t(){var e;// Parse animation classes if they were set
this.options.animate?(e=this.options.animate.split(" "),this.animationIn=e[0],this.animationOut=e[1]||null):(e=this.$element.data("toggler"),// Allow for a . at the beginning of the string
this.className="."===e[0]?e.slice(1):e);// Add ARIA attributes to triggers:
var r=this.$element[0].id,n=h()('[data-open~="'.concat(r,'"], [data-close~="').concat(r,'"], [data-toggle~="').concat(r,'"]'));// - aria-expanded: according to the element visibility.
n.attr("aria-expanded",!this.$element.is(":hidden")),// - aria-controls: adding the element id to it if not already in it.
n.each(function(t,e){var n=h()(e),i=n.attr("aria-controls")||"",o;new RegExp("\\b".concat(Object(g.RegExpEscape)(r),"\\b")).test(i)||n.attr("aria-controls",i?"".concat(i," ").concat(r):r)})}
/**
     * Initializes events for the toggle trigger.
     * @function
     * @private
     */},{key:"_events",value:function t(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}
/**
     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
     * @function
     * @fires Toggler#on
     * @fires Toggler#off
     */},{key:"toggle",value:function t(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function t(){this.$element.toggleClass(this.className);var e=this.$element.hasClass(this.className);e?
/**
         * Fires if the target element has the class after a toggle.
         * @event Toggler#on
         */
this.$element.trigger("on.zf.toggler"):
/**
         * Fires if the target element does not have the class after a toggle.
         * @event Toggler#off
         */
this.$element.trigger("off.zf.toggler"),this._updateARIA(e),this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_toggleAnimate",value:function t(){var e=this;this.$element.is(":hidden")?p.Motion.animateIn(this.$element,this.animationIn,function(){e._updateARIA(!0),this.trigger("on.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")}):p.Motion.animateOut(this.$element,this.animationOut,function(){e._updateARIA(!1),this.trigger("off.zf.toggler"),this.find("[data-mutate]").trigger("mutateme.zf.trigger")})}},{key:"_updateARIA",value:function t(e){var n=this.$element[0].id;h()('[data-open="'.concat(n,'"], [data-close="').concat(n,'"], [data-toggle="').concat(n,'"]')).attr({"aria-expanded":!!e})}
/**
     * Destroys the instance of Toggler on the element.
     * @function
     */},{key:"_destroy",value:function t(){this.$element.off(".zf.toggler")}}]),i}(m.Plugin);
/* harmony import */y.defaults={
/**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
animate:!1}},
/***/"./js/foundation.tooltip.js":
/*!**********************************!*\
  !*** ./js/foundation.tooltip.js ***!
  \**********************************/
/*! exports provided: Tooltip */
/***/function(t,e,n){"use strict";function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function a(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function t(e,n,i){var o=c(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(i):r.value}})(t,e,n||t)}function c(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=d(t)););return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function t(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return(h=Object.setPrototypeOf||function t(e,n){return e.__proto__=n,e})(t,e)}
/**
 * Tooltip module.
 * @module foundation.tooltip
 * @requires foundation.util.box
 * @requires foundation.util.mediaQuery
 * @requires foundation.util.triggers
 */n.r(e),
/* harmony export (binding) */n.d(e,"Tooltip",function(){return w});
/* harmony import */var p=n(/*! jquery */"jquery"),m=/* */n.n(p),g=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),v=n(/*! ./foundation.util.mediaQuery */"./js/foundation.util.mediaQuery.js"),y=n(/*! ./foundation.util.triggers */"./js/foundation.util.triggers.js"),b,w=
/* */
function(t){function i(){return o(this,i),a(this,d(i).apply(this,arguments))}return f(i,t),s(i,[{key:"_setup",
/**
     * Creates a new instance of a Tooltip.
     * @class
     * @name Tooltip
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
value:function t(e,n){this.$element=e,this.options=m.a.extend({},i.defaults,this.$element.data(),n),this.className="Tooltip",// ie9 back compat
this.isActive=!1,this.isClick=!1,// Triggers init is idempotent, just need to make sure it is initialized
y.Triggers.init(m.a),this._init()}
/**
     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
     * @private
     */},{key:"_init",value:function t(){v.MediaQuery._init();var e=this.$element.attr("aria-describedby")||Object(g.GetYoDigits)(6,"tooltip");this.options.tipText=this.options.tipText||this.$element.attr("title"),this.template=this.options.template?m()(this.options.template):this._buildTemplate(e),this.options.allowHtml?this.template.appendTo(document.body).html(this.options.tipText).hide():this.template.appendTo(document.body).text(this.options.tipText).hide(),this.$element.attr({title:"","aria-describedby":e,"data-yeti-box":e,"data-toggle":e,"data-resize":e}).addClass(this.options.triggerClass),u(d(i.prototype),"_init",this).call(this),this._events()}},{key:"_getDefaultPosition",value:function t(){
// handle legacy classnames
var e=this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);return e?e[0]:"top"}},{key:"_getDefaultAlignment",value:function t(){return"center"}},{key:"_getHOffset",value:function t(){return"left"===this.position||"right"===this.position?this.options.hOffset+this.options.tooltipWidth:this.options.hOffset}},{key:"_getVOffset",value:function t(){return"top"===this.position||"bottom"===this.position?this.options.vOffset+this.options.tooltipHeight:this.options.vOffset}
/**
     * builds the tooltip element, adds attributes, and returns the template.
     * @private
     */},{key:"_buildTemplate",value:function t(e){var n="".concat(this.options.tooltipClass," ").concat(this.options.templateClasses).trim(),i;return m()("<div></div>").addClass(n).attr({role:"tooltip","aria-hidden":!0,"data-is-active":!1,"data-is-focus":!1,id:e})}
/**
     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
     * if the tooltip is larger than the screen width, default to full width - any user selected margin
     * @private
     */},{key:"_setPosition",value:function t(){u(d(i.prototype),"_setPosition",this).call(this,this.$element,this.template)}
/**
     * reveals the tooltip, and fires an event to close any other open tooltips on the page
     * @fires Tooltip#closeme
     * @fires Tooltip#show
     * @function
     */},{key:"show",value:function t(){if("all"!==this.options.showOn&&!v.MediaQuery.is(this.options.showOn))
// console.error('The screen is too small to display this tooltip');
return!1;var e=this;this.template.css("visibility","hidden").show(),this._setPosition(),this.template.removeClass("top bottom left right").addClass(this.position),this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-"+this.alignment),
/**
       * Fires to close all other open tooltips on the page
       * @event Closeme#tooltip
       */
this.$element.trigger("closeme.zf.tooltip",this.template.attr("id")),this.template.attr({"data-is-active":!0,"aria-hidden":!1}),e.isActive=!0,// console.log(this.template);
this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,function(){//maybe do stuff?
}),
/**
       * Fires when the tooltip is shown
       * @event Tooltip#show
       */
this.$element.trigger("show.zf.tooltip")}
/**
     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
     * @fires Tooltip#hide
     * @function
     */},{key:"hide",value:function t(){
// console.log('hiding', this.$element.data('yeti-box'));
var e=this;this.template.stop().attr({"aria-hidden":!0,"data-is-active":!1}).fadeOut(this.options.fadeOutDuration,function(){e.isActive=!1,e.isClick=!1}),
/**
       * fires when the tooltip is hidden
       * @event Tooltip#hide
       */
this.$element.trigger("hide.zf.tooltip")}
/**
     * adds event listeners for the tooltip and its anchor
     * TODO combine some of the listeners like focus and mouseenter, etc.
     * @private
     */},{key:"_events",value:function t(){var e=this,n=this.template,i=!1;this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",function(t){e.isActive||(e.timeout=setTimeout(function(){e.show()},e.options.hoverDelay))}).on("mouseleave.zf.tooltip",Object(g.ignoreMousedisappear)(function(t){clearTimeout(e.timeout),(!i||e.isClick&&!e.options.clickOpen)&&e.hide()})),this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",function(t){t.stopImmediatePropagation(),e.isClick||(e.isClick=!0,!e.options.disableHover&&e.$element.attr("tabindex")||e.isActive||e.show())}):this.$element.on("mousedown.zf.tooltip",function(t){t.stopImmediatePropagation(),e.isClick=!0}),this.options.disableForTouch||this.$element.on("tap.zf.tooltip touchend.zf.tooltip",function(t){e.isActive?e.hide():e.show()}),this.$element.on({
// 'toggle.zf.trigger': this.toggle.bind(this),
// 'close.zf.trigger': this.hide.bind(this)
"close.zf.trigger":this.hide.bind(this)}),this.$element.on("focus.zf.tooltip",function(t){if(i=!0,e.isClick)
// If we're not showing open on clicks, we need to pretend a click-launched focus isn't
// a real focus, otherwise on hover and come back we get bad behavior
return e.options.clickOpen||(i=!1),!1;e.show()}).on("focusout.zf.tooltip",function(t){i=!1,e.isClick=!1,e.hide()}).on("resizeme.zf.trigger",function(){e.isActive&&e._setPosition()})}
/**
     * adds a toggle method, in addition to the static show() & hide() functions
     * @function
     */},{key:"toggle",value:function t(){this.isActive?this.hide():this.show()}
/**
     * Destroys an instance of tooltip, removes template element from the view.
     * @function
     */},{key:"_destroy",value:function t(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"),this.template.remove()}}]),i}(n(/*! ./foundation.positionable */"./js/foundation.positionable.js").Positionable);
/* harmony import */w.defaults={disableForTouch:!1,
/**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */
hoverDelay:200,
/**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */
fadeInDuration:150,
/**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */
fadeOutDuration:150,
/**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:!1,
/**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */
templateClasses:"",
/**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */
tooltipClass:"tooltip",
/**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */
triggerClass:"has-tip",
/**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */
showOn:"small",
/**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */
template:"",
/**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */
tipText:"",touchCloseText:"Tap to close.",
/**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */
clickOpen:!0,
/**
   * Position of tooltip. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, tooltip will first try to
   * position as defined by data-position and data-alignment, but reposition if
   * it would cause an overflow.  @option
   * @type {boolean}
   * @default false
   */
allowOverlap:!1,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * Less common for tooltips.
   * @option
   * @type {boolean}
   * @default false
   */
allowBottomOverlap:!1,
/**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Distance, in pixels, the template should push away from the anchor on the X axis
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
   * @option
   * @type {number}
   * @default 14
   */
tooltipHeight:14,
/**
   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
   * @option
   * @type {number}
   * @default 12
   */
tooltipWidth:12,
/**
  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
  * allowing HTML may open yourself up to XSS attacks.
  * @option
  * @type {boolean}
  * @default false
  */
allowHtml:!1}},
/***/"./js/foundation.util.box.js":
/*!***********************************!*\
  !*** ./js/foundation.util.box.js ***!
  \***********************************/
/*! exports provided: Box */
/***/function(t,e,n){"use strict";function i(t,e,n,i,o){return 0===r(t,e,n,i,o)}function r(t,e,n,i,o){var r=d(t),s,a,l,u;if(e){var c=d(e);a=c.height+c.offset.top-(r.offset.top+r.height),s=r.offset.top-c.offset.top,l=r.offset.left-c.offset.left,u=c.width+c.offset.left-(r.offset.left+r.width)}else a=r.windowDims.height+r.windowDims.offset.top-(r.offset.top+r.height),s=r.offset.top-r.windowDims.offset.top,l=r.offset.left-r.windowDims.offset.left,u=r.windowDims.width-(r.offset.left+r.width);return a=o?0:Math.min(a,0),s=Math.min(s,0),l=Math.min(l,0),u=Math.min(u,0),n?l+u:i?s+a:Math.sqrt(s*s+a*a+l*l+u*u)}
/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */function d(t){if((t=t.length?t[0]:t)===window||t===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var e=t.getBoundingClientRect(),n=t.parentNode.getBoundingClientRect(),i=document.body.getBoundingClientRect(),o=window.pageYOffset,r=window.pageXOffset;return{width:e.width,height:e.height,offset:{top:e.top+o,left:e.left+r},parentDims:{width:n.width,height:n.height,offset:{top:n.top+o,left:n.left+r}},windowDims:{width:i.width,height:i.height,offset:{top:o,left:r}}}}
/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */function o(t,e,n,i,o,r){switch(console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"),n){case"top":return Object(a.rtl)()?s(t,e,"top","left",i,o,r):s(t,e,"top","right",i,o,r);case"bottom":return Object(a.rtl)()?s(t,e,"bottom","left",i,o,r):s(t,e,"bottom","right",i,o,r);case"center top":return s(t,e,"top","center",i,o,r);case"center bottom":return s(t,e,"bottom","center",i,o,r);case"center left":return s(t,e,"left","center",i,o,r);case"center right":return s(t,e,"right","center",i,o,r);case"left bottom":return s(t,e,"bottom","left",i,o,r);case"right bottom":return s(t,e,"bottom","right",i,o,r);
// Backwards compatibility... this along with the reveal and reveal full
// classes are the only ones that didn't reference anchor
case"center":return{left:$eleDims.windowDims.offset.left+$eleDims.windowDims.width/2-$eleDims.width/2+o,top:$eleDims.windowDims.offset.top+$eleDims.windowDims.height/2-($eleDims.height/2+i)};case"reveal":return{left:($eleDims.windowDims.width-$eleDims.width)/2+o,top:$eleDims.windowDims.offset.top+i};case"reveal full":return{left:$eleDims.windowDims.offset.left,top:$eleDims.windowDims.offset.top};break;default:return{left:Object(a.rtl)()?$anchorDims.offset.left-$eleDims.width+$anchorDims.width-o:$anchorDims.offset.left+o,top:$anchorDims.offset.top+$anchorDims.height+i}}}function s(t,e,n,i,o,r,s){var a=d(t),l=e?d(e):null,u,c;// set position related attribute
switch(n){case"top":u=l.offset.top-(a.height+o);break;case"bottom":u=l.offset.top+l.height+o;break;case"left":c=l.offset.left-(a.width+r);break;case"right":c=l.offset.left+l.width+r;break}// set alignment related attribute
switch(n){case"top":case"bottom":switch(i){case"left":c=l.offset.left+r;break;case"right":c=l.offset.left-a.width+l.width-r;break;case"center":c=s?r:l.offset.left+l.width/2-a.width/2+r;break}break;case"right":case"left":switch(i){case"bottom":u=l.offset.top-o+l.height-a.height;break;case"top":u=l.offset.top+o;break;case"center":u=l.offset.top+o+l.height/2-a.height/2;break}break}return{top:u,left:c}}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Box",function(){return l});
/* harmony import */var a=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),l={ImNotTouchingYou:i,OverlapArea:r,GetDimensions:d,GetOffsets:o,GetExplicitOffsets:s
/**
   * Compares the dimensions of an element to a container and determines collision events with container.
   * @function
   * @param {jQuery} element - jQuery object to test for collisions.
   * @param {jQuery} parent - jQuery object to use as bounding container.
   * @param {Boolean} lrOnly - set to true to check left and right values only.
   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
   * @default if no parent object passed, detects collisions with `window`.
   * @returns {Boolean} - true if collision free, false if a collision in any direction.
   */}},
/***/"./js/foundation.util.imageLoader.js":
/*!*******************************************!*\
  !*** ./js/foundation.util.imageLoader.js ***!
  \*******************************************/
/*! exports provided: onImagesLoaded */
/***/function(t,e,n){"use strict";
/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */
function i(t,e){function i(){0===--o&&e()}var n=this,o=t.length;0===o&&e(),t.each(function(){
// Check if image is loaded
if(this.complete&&void 0!==this.naturalWidth)i();else{
// If the above check failed, simulate loading on detached element.
var t=new Image,n="load.zf.images error.zf.images";// Still count image as loaded if it finalizes with an error.
r()(t).one(n,function t(e){
// Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
r()(this).off(n,t),i()}),t.src=r()(this).attr("src")}})}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"onImagesLoaded",function(){return i});
/* harmony import */var o=n(/*! jquery */"jquery"),r=/* */n.n(o);
/* harmony import */},
/***/"./js/foundation.util.keyboard.js":
/*!****************************************!*\
  !*** ./js/foundation.util.keyboard.js ***!
  \****************************************/
/*! exports provided: Keyboard */
/***/function(t,e,n){"use strict";// Functions pulled out to be referenceable from internals
function r(t){return!!t&&t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function(){return!(!c()(this).is(":visible")||c()(this).attr("tabindex")<0);//only have visible elements and those that have a tabindex greater or equal 0
})}function s(t){var e=a[t.which||t.keyCode]||String.fromCharCode(t.which).toUpperCase();// Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events
return e=e.replace(/\W+/,""),t.shiftKey&&(e="SHIFT_".concat(e)),t.ctrlKey&&(e="CTRL_".concat(e)),t.altKey&&(e="ALT_".concat(e)),// Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)
e=e.replace(/_$/,"")}
/*
 * Constants for easier comparing.
 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
 */
function i(t){var e={};for(var n in t)e[t[n]]=t[n];return e}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Keyboard",function(){return l});
/* harmony import */var o=n(/*! jquery */"jquery"),c=/* */n.n(o),d=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),a={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",35:"END",36:"HOME",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"},f={},l={keys:i(a),
/**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
parseKey:s,
/**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
handleKey:function t(e,n,i){var o=f[n],r=this.parseKey(e),s,a,l;if(!o)return console.warn("Component not defined!");if((l=i[a=(
// this component does not differentiate between ltr and rtl
s=void 0===o.ltr?o:
// merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
Object(d.rtl)()?c.a.extend({},o.ltr,o.rtl):c.a.extend({},o.rtl,o.ltr))[r]])&&"function"==typeof l){
// execute function  if exists
var u=l.apply();(i.handled||"function"==typeof i.handled)&&
// execute function when event was handled
i.handled(u)}else(i.unhandled||"function"==typeof i.unhandled)&&
// execute function when event was not handled
i.unhandled()},
/**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
findFocusable:r,
/**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */
register:function t(e,n){f[e]=n},
// TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
//
/**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
trapFocus:function t(e){var n=r(e),i=n.eq(0),o=n.eq(-1);e.on("keydown.zf.trapfocus",function(t){t.target===o[0]&&"TAB"===s(t)?(t.preventDefault(),i.focus()):t.target===i[0]&&"SHIFT_TAB"===s(t)&&(t.preventDefault(),o.focus())})},
/**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
releaseFocus:function t(e){e.off("keydown.zf.trapfocus")}};
/* harmony import */},
/***/"./js/foundation.util.mediaQuery.js":
/*!******************************************!*\
  !*** ./js/foundation.util.mediaQuery.js ***!
  \******************************************/
/*! exports provided: MediaQuery */
/***/function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}
// Default set of media queries
// Thank you: https://github.com/sindresorhus/query-string
function s(t){var e={};return"string"!=typeof t?e:// browsers re-quote string style values
(t=t.trim().slice(1,-1))?e=t.split("&").reduce(function(t,e){var n=e.replace(/\+/g," ").split("="),i=n[0],o=n[1];return i=decodeURIComponent(i),// missing `=` should be `null`:
// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
o=void 0===o?null:decodeURIComponent(o),t.hasOwnProperty(i)?Array.isArray(t[i])?t[i].push(o):t[i]=[t[i],o]:t[i]=o,t},{}):e}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"MediaQuery",function(){return l});
/* harmony import */var i=n(/*! jquery */"jquery"),a=/* */n.n(i),r={default:"only screen",landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"};
/* harmony import */ // matchMedia() polyfill - Test a CSS media type/query in JS.
// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license
/* eslint-disable */
window.matchMedia||(window.matchMedia=function(){// For browsers that support matchMedium api such as IE 9 and webkit
var e=window.styleMedia||window.media;// For those that don't support matchMedium
if(!e){var i=document.createElement("style"),t=document.getElementsByTagName("script")[0],o=null;i.type="text/css",i.id="matchmediajs-test",t?t.parentNode.insertBefore(i,t):document.head.appendChild(i),// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
o="getComputedStyle"in window&&window.getComputedStyle(i,null)||i.currentStyle,e={matchMedium:function t(e){var n="@media "+e+"{ #matchmediajs-test { width: 1px; } }";// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
// Test if media query is true or false
return i.styleSheet?i.styleSheet.cssText=n:i.textContent=n,"1px"===o.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
/* eslint-enable */
var l={queries:[],current:"",
/**
   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
   * @function
   * @private
   */
_init:function t(){var e=this,n;a()("meta.foundation-mq").length||a()('<meta class="foundation-mq">').appendTo(document.head);var i=a()(".foundation-mq").css("font-family"),o;for(var r in o=s(i))o.hasOwnProperty(r)&&e.queries.push({name:r,value:"only screen and (min-width: ".concat(o[r],")")});this.current=this._getCurrentSize(),this._watcher()},
/**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
atLeast:function t(e){var n=this.get(e);return!!n&&window.matchMedia(n).matches},
/**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
is:function t(e){return 1<(e=e.trim().split(" ")).length&&"only"===e[1]?e[0]===this._getCurrentSize():this.atLeast(e[0])},
/**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
get:function t(e){for(var n in this.queries)if(this.queries.hasOwnProperty(n)){var i=this.queries[n];if(e===i.name)return i.value}return null},
/**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
_getCurrentSize:function t(){for(var e,n=0;n<this.queries.length;n++){var i=this.queries[n];window.matchMedia(i.value).matches&&(e=i)}return"object"===o(e)?e.name:e},
/**
   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
   * @function
   * @private
   */
_watcher:function t(){var n=this;a()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery",function(){var t=n._getCurrentSize(),e=n.current;t!==e&&(
// Change the current media query
n.current=t,// Broadcast the media query change on the window
a()(window).trigger("changed.zf.mediaquery",[t,e]))})}}},
/***/"./js/foundation.util.motion.js":
/*!**************************************!*\
  !*** ./js/foundation.util.motion.js ***!
  \**************************************/
/*! exports provided: Move, Motion */
/***/function(t,e,n){"use strict";function i(e,n,i){function o(t){a||(a=t),// console.log(start, ts);
s=t-a,i.apply(n),s<e?r=window.requestAnimationFrame(o,n):(window.cancelAnimationFrame(r),n.trigger("finished.zf.animate",[n]).triggerHandler("finished.zf.animate",[n]))}var r,s,a=null;// console.log('called');
if(0===e)return i.apply(n),void n.trigger("finished.zf.animate",[n]).triggerHandler("finished.zf.animate",[n]);r=window.requestAnimationFrame(o)}
/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */function o(t,e,n,i){// Hides the element (for out animations), resets the element, and runs a callback
function o(){t||e.hide(),r(),i&&i.apply(e)}// Resets transitions and removes motion-specific classes
function r(){e[0].style.transitionDuration=0,e.removeClass("".concat(s," ").concat(a," ").concat(n))}if((e=l()(e).eq(0)).length){var s=t?c[0]:c[1],a=t?d[0]:d[1];// Set up the animation
r(),e.addClass(n).css("transition","none"),requestAnimationFrame(function(){e.addClass(s),t&&e.show()}),// Start the animation
requestAnimationFrame(function(){e[0].offsetWidth,e.css("transition","").addClass(a)}),// Clean up the animation when it finishes
e.one(Object(u.transitionend)(e),o)}}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Move",function(){return i}),
/* harmony export (binding) */n.d(e,"Motion",function(){return s});
/* harmony import */var r=n(/*! jquery */"jquery"),l=/* */n.n(r),u=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),c=["mui-enter","mui-leave"],d=["mui-enter-active","mui-leave-active"],s={animateIn:function t(e,n,i){o(!0,e,n,i)},animateOut:function t(e,n,i){o(!1,e,n,i)}};
/* harmony import */},
/***/"./js/foundation.util.nest.js":
/*!************************************!*\
  !*** ./js/foundation.util.nest.js ***!
  \************************************/
/*! exports provided: Nest */
/***/function(t,e,n){"use strict";n.r(e),
/* harmony export (binding) */n.d(e,"Nest",function(){return o});
/* harmony import */var i=n(/*! jquery */"jquery"),u=/* */n.n(i),o={Feather:function t(e,n){var i=1<arguments.length&&void 0!==n?n:"zf";e.attr("role","menubar");var o=e.find("li").attr({role:"menuitem"}),r="is-".concat(i,"-submenu"),s="".concat(r,"-item"),a="is-".concat(i,"-submenu-parent"),l="accordion"!==i;// Accordions handle their own ARIA attriutes.
o.each(function(){var t=u()(this),e=t.children("ul");e.length&&(t.addClass(a),e.addClass("submenu ".concat(r)).attr({"data-submenu":""}),l&&(t.attr({"aria-haspopup":!0,"aria-label":t.children("a:first").text()}),// Note:  Drilldowns behave differently in how they hide, and so need
// additional attributes.  We should look if this possibly over-generalized
// utility (Nest) is appropriate when we rework menus in 6.4
"drilldown"===i&&t.attr({"aria-expanded":!1})),e.addClass("submenu ".concat(r)).attr({"data-submenu":"",role:"menubar"}),"drilldown"===i&&e.attr({"aria-hidden":!0})),t.parent("[data-submenu]").length&&t.addClass("is-submenu-item ".concat(s))})},Burn:function t(e,n){var//items = menu.find('li'),
i="is-".concat(n,"-submenu"),o="".concat(i,"-item"),r="is-".concat(n,"-submenu-parent");e.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(i," ").concat(o," ").concat(r," is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display","")}};
/* harmony import */},
/***/"./js/foundation.util.timer.js":
/*!*************************************!*\
  !*** ./js/foundation.util.timer.js ***!
  \*************************************/
/*! exports provided: Timer */
/***/function(t,e,n){"use strict";function i(e,t,n){var i=this,o=t.duration,
//options is an object for easily adding features later.
r=Object.keys(e.data())[0]||"timer",s=-1,a,l;this.isPaused=!1,this.restart=function(){s=-1,clearTimeout(l),this.start()},this.start=function(){this.isPaused=!1,// if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(l),s=s<=0?o:s,e.data("paused",!1),a=Date.now(),l=setTimeout(function(){t.infinite&&i.restart(),n&&"function"==typeof n&&n()},s),e.trigger("timerstart.zf.".concat(r))},this.pause=function(){this.isPaused=!0,//if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.
clearTimeout(l),e.data("paused",!0);var t=Date.now();s-=t-a,e.trigger("timerpaused.zf.".concat(r))}}
/***/n.r(e),
/* harmony export (binding) */n.d(e,"Timer",function(){return i});
/* harmony import */var o=n(/*! jquery */"jquery"),r=/* */n.n(o);
/* harmony import */},
/***/"./js/foundation.util.touch.js":
/*!*************************************!*\
  !*** ./js/foundation.util.touch.js ***!
  \*************************************/
/*! exports provided: Touch */
/***/function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}
//**************************************************
//**Work inspired by multiple jquery swipe plugins**
//**Done by Yohai Ararat ***************************
//**************************************************
function s(t){// If the touch did not move, consider it as a "tap"
if(this.removeEventListener("touchmove",a),this.removeEventListener("touchend",s),!w){var e=f.a.Event("tap",y||t);f()(this).trigger(e)}y=null,w=b=!1}function a(t){if(f.a.spotSwipe.preventDefault&&t.preventDefault(),b){var e=t.touches[0].pageX,n=t.touches[0].pageY,i=p-e,o=m-n,r;w=!0,v=(new Date).getTime()-g,Math.abs(i)>=f.a.spotSwipe.moveThreshold&&v<=f.a.spotSwipe.timeThreshold&&(r=0<i?"left":"right"),// else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
//   dir = dy > 0 ? 'down' : 'up';
// }
r&&(t.preventDefault(),s.apply(this,arguments),f()(this).trigger(f.a.Event("swipe",t),r).trigger(f.a.Event("swipe".concat(r),t)))}}function l(t){1==t.touches.length&&(p=t.touches[0].pageX,m=t.touches[0].pageY,y=t,w=!(b=!0),g=(new Date).getTime(),this.addEventListener("touchmove",a,!1),this.addEventListener("touchend",s,!1))}function u(){this.addEventListener&&this.addEventListener("touchstart",l,!1)}function c(){this.removeEventListener("touchstart",l)}n.r(e),
/* harmony export (binding) */n.d(e,"Touch",function(){return h});
/* harmony import */var d=n(/*! jquery */"jquery"),f=/* */n.n(d),h={},p,m,g,v,y,b=!1,w=!1,$=
/* */
function(){function e(t){i(this,e),this.version="1.0.0",this.enabled="ontouchstart"in document.documentElement,this.preventDefault=!1,this.moveThreshold=75,this.timeThreshold=200,this.$=t,this._init()}return r(e,[{key:"_init",value:function t(){var e=this.$;e.event.special.swipe={setup:u},e.event.special.tap={setup:u},e.each(["left","up","down","right"],function(){e.event.special["swipe".concat(this)]={setup:function t(){e(this).on("swipe",e.noop)}}})}}]),e}();
/* harmony import */
/****************************************************
 * As far as I can tell, both setupSpotSwipe and    *
 * setupTouchHandler should be idempotent,          *
 * because they directly replace functions &        *
 * values, and do not add event handlers directly.  *
 ****************************************************/
h.setupSpotSwipe=function(t){t.spotSwipe=new $(t)},
/****************************************************
 * Method for adding pseudo drag events to elements *
 ***************************************************/
h.setupTouchHandler=function(i){i.fn.addTouch=function(){this.each(function(t,e){i(e).bind("touchstart touchmove touchend touchcancel",function(t){
//we pass the original event object because the jQuery event
//object is normalized to w3c specs and does not provide the TouchList
n(t)})});var n=function t(e){var n,i=e.changedTouches[0],o,r={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"}[e.type],s;"MouseEvent"in window&&"function"==typeof window.MouseEvent?s=new window.MouseEvent(r,{bubbles:!0,cancelable:!0,screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY}):(s=document.createEvent("MouseEvent")).initMouseEvent(r,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0
/*left*/,null),i.target.dispatchEvent(s)}}},h.init=function(t){void 0===t.spotSwipe&&(h.setupSpotSwipe(t),h.setupTouchHandler(t))}},
/***/"./js/foundation.util.triggers.js":
/*!****************************************!*\
  !*** ./js/foundation.util.triggers.js ***!
  \****************************************/
/*! exports provided: Triggers */
/***/function(t,e,n){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function t(e){return typeof e}:function t(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function i(e,t,n){var i,o=Array.prototype.slice.call(arguments,3);s()(window).off(t).on(t,function(t){i&&clearTimeout(i),i=setTimeout(function(){n.apply(null,o)},e||10)})}n.r(e),
/* harmony export (binding) */n.d(e,"Triggers",function(){return d});
/* harmony import */var r=n(/*! jquery */"jquery"),s=/* */n.n(r),a=n(/*! ./foundation.core.utils */"./js/foundation.core.utils.js"),l=n(/*! ./foundation.util.motion */"./js/foundation.util.motion.js"),u=function(){for(var t=["WebKit","Moz","O","Ms",""],e=0;e<t.length;e++)if("".concat(t[e],"MutationObserver")in window)return window["".concat(t[e],"MutationObserver")];return!1}(),c=function t(e,n){e.data(n).split(" ").forEach(function(t){s()("#".concat(t))["close"===n?"trigger":"triggerHandler"]("".concat(n,".zf.trigger"),[e])})},d={Listeners:{Basic:{},Global:{}},Initializers:{}};
/* harmony import */d.Listeners.Basic={openListener:function t(){c(s()(this),"open")},closeListener:function t(){var e;s()(this).data("close")?c(s()(this),"close"):s()(this).trigger("close.zf.trigger")},toggleListener:function t(){var e;s()(this).data("toggle")?c(s()(this),"toggle"):s()(this).trigger("toggle.zf.trigger")},closeableListener:function t(e){e.stopPropagation();var n=s()(this).data("closable");""!==n?l.Motion.animateOut(s()(this),n,function(){s()(this).trigger("closed.zf")}):s()(this).fadeOut().trigger("closed.zf")},toggleFocusListener:function t(){var e=s()(this).data("toggle-focus");s()("#".concat(e)).triggerHandler("toggle.zf.trigger",[s()(this)])}},// Elements with [data-open] will reveal a plugin that supports it when clicked.
d.Initializers.addOpenListener=function(t){t.off("click.zf.trigger",d.Listeners.Basic.openListener),t.on("click.zf.trigger","[data-open]",d.Listeners.Basic.openListener)},// Elements with [data-close] will close a plugin that supports it when clicked.
// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
d.Initializers.addCloseListener=function(t){t.off("click.zf.trigger",d.Listeners.Basic.closeListener),t.on("click.zf.trigger","[data-close]",d.Listeners.Basic.closeListener)},// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
d.Initializers.addToggleListener=function(t){t.off("click.zf.trigger",d.Listeners.Basic.toggleListener),t.on("click.zf.trigger","[data-toggle]",d.Listeners.Basic.toggleListener)},// Elements with [data-closable] will respond to close.zf.trigger events.
d.Initializers.addCloseableListener=function(t){t.off("close.zf.trigger",d.Listeners.Basic.closeableListener),t.on("close.zf.trigger","[data-closeable], [data-closable]",d.Listeners.Basic.closeableListener)},// Elements with [data-toggle-focus] will respond to coming in and out of focus
d.Initializers.addToggleFocusListener=function(t){t.off("focus.zf.trigger blur.zf.trigger",d.Listeners.Basic.toggleFocusListener),t.on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",d.Listeners.Basic.toggleFocusListener)},// More Global/complex listeners and triggers
d.Listeners.Global={resizeListener:function t(e){u||
//fallback for IE 9
e.each(function(){s()(this).triggerHandler("resizeme.zf.trigger")}),//trigger all listening elements and signal a resize event
e.attr("data-events","resize")},scrollListener:function t(e){u||
//fallback for IE 9
e.each(function(){s()(this).triggerHandler("scrollme.zf.trigger")}),//trigger all listening elements and signal a scroll event
e.attr("data-events","scroll")},closeMeListener:function t(e,n){var i=e.namespace.split(".")[0],o;s()("[data-".concat(i,"]")).not('[data-yeti-box="'.concat(n,'"]')).each(function(){var t=s()(this);t.triggerHandler("close.zf.trigger",[t])})}// Global, parses whole document.
},d.Initializers.addClosemeListener=function(t){var e=s()("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];if(t&&("string"==typeof t?n.push(t):"object"===o(t)&&"string"==typeof t[0]?n.concat(t):console.error("Plugin names must be strings")),e.length){var i=n.map(function(t){return"closeme.zf.".concat(t)}).join(" ");s()(window).off(i).on(i,d.Listeners.Global.closeMeListener)}},d.Initializers.addResizeListener=function(t){var e=s()("[data-resize]");e.length&&i(t,"resize.zf.trigger",d.Listeners.Global.resizeListener,e)},d.Initializers.addScrollListener=function(t){var e=s()("[data-scroll]");e.length&&i(t,"scroll.zf.trigger",d.Listeners.Global.scrollListener,e)},d.Initializers.addMutationEventsListener=function(t){if(!u)return!1;var e=t.find("[data-resize], [data-scroll], [data-mutate]"),n=function t(e){var n=s()(e[0].target);//trigger the event handler for the element depending on type
switch(e[0].type){case"attributes":"scroll"===n.attr("data-events")&&"data-events"===e[0].attributeName&&n.triggerHandler("scrollme.zf.trigger",[n,window.pageYOffset]),"resize"===n.attr("data-events")&&"data-events"===e[0].attributeName&&n.triggerHandler("resizeme.zf.trigger",[n]),"style"===e[0].attributeName&&(n.closest("[data-mutate]").attr("data-events","mutate"),n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[n.closest("[data-mutate]")]));break;case"childList":n.closest("[data-mutate]").attr("data-events","mutate"),n.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[n.closest("[data-mutate]")]);break;default:return!1;
//nothing
}};//element callback
if(e.length)
//for each element that needs to listen for resizing, scrolling, or mutation add a single observer
for(var i=0;i<=e.length-1;i++){var o;new u(n).observe(e[i],{attributes:!0,childList:!0,characterData:!1,subtree:!0,attributeFilter:["data-events","style"]})}},d.Initializers.addSimpleListeners=function(){var t=s()(document);d.Initializers.addOpenListener(t),d.Initializers.addCloseListener(t),d.Initializers.addToggleListener(t),d.Initializers.addCloseableListener(t),d.Initializers.addToggleFocusListener(t)},d.Initializers.addGlobalListeners=function(){var t=s()(document);d.Initializers.addMutationEventsListener(t),d.Initializers.addResizeListener(),d.Initializers.addScrollListener(),d.Initializers.addClosemeListener()},d.init=function(t,e){Object(a.onLoad)(t(window),function(){!0!==t.triggersInitialized&&(d.Initializers.addSimpleListeners(),d.Initializers.addGlobalListeners(),t.triggersInitialized=!0)}),e&&(e.Triggers=d,// Legacy included to be backwards compatible for now.
e.IHearYou=d.Initializers.addGlobalListeners)}},
/***/0:
/*!****************************************!*\
  !*** multi ./js/entries/foundation.js ***!
  \****************************************/
/*! no static exports found */
/***/function(t,e,n){t.exports=n(/*! /Users/ncoden/Documents/Documents/Projects/Programmation/Web/2016/Foundation/foundation-sites/js/entries/foundation.js */"./js/entries/foundation.js");
/***/},
/***/jquery:
/*!********************************************************************************************!*\
  !*** external {"root":["jQuery"],"amd":"jquery","commonjs":"jquery","commonjs2":"jquery"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/function(t,e){t.exports=n;
/***/}
/******/})}),
/*! lightgallery - v1.6.11 - 2018-05-22
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
function(t,e){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define(["jquery"],function(t){return e(t)}):"object"==typeof module&&module.exports?
// Node. Does not work with strict CommonJS, but
// only CommonJS-like environments that support module.exports,
// like Node.
module.exports=e(require("jquery")):e(t.jQuery)}(this,function(v){!function(){"use strict";function e(t,e){
// When using dynamic mode, ensure dynamicEl is an array
if(
// Current lightGallery element
this.el=t,
// Current jquery element
this.$el=v(t),
// lightGallery settings
this.s=v.extend({},n,e),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";
// lightGallery modules
return this.modules={},
// false when lightgallery complete first slide;
this.lGalleryOn=!1,this.lgBusy=!1,
// Timeout function for hiding controls;
this.hideBartimeout=!1,
// To determine browser supports for touch events;
this.isTouch="ontouchstart"in document.documentElement,
// Disable hideControlOnEnd if sildeEndAnimation is true
this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),
// Gallery items
this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=v(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(v(this.s.selector)):this.$items=this.$el.children(),
// .lg-item
this.$slide="",
// .lg-outer
this.$outer="",this.init(),this}var n={mode:"lg-slide",
// Ex : 'ease'
cssEasing:"ease",
//'for jquery animation'
easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,
// .lg-item || '.lg-sub-html'
appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,
/**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",
// 0, 1
index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};e.prototype.init=function(){var t=this;
// s.preload should not be more than $item.length
t.s.preload>t.$items.length&&(t.s.preload=t.$items.length);
// if dynamic option is enabled execute immediately
var e=window.location.hash;0<e.indexOf("lg="+this.s.galleryId)&&(t.index=parseInt(e.split("&slide=")[1],10),v("body").addClass("lg-from-hash"),v("body").hasClass("lg-on")||(setTimeout(function(){t.build(t.index)}),v("body").addClass("lg-on"))),t.s.dynamic?(t.$el.trigger("onBeforeOpen.lg"),t.index=t.s.index||0,
// prevent accidental double execution
v("body").hasClass("lg-on")||setTimeout(function(){t.build(t.index),v("body").addClass("lg-on")})):
// Using different namespace for click because click event should not unbind if selector is same object('this')
t.$items.on("click.lgcustom",function(e){
// For IE8
try{e.preventDefault(),e.preventDefault()}catch(t){e.returnValue=!1}t.$el.trigger("onBeforeOpen.lg"),t.index=t.s.index||t.$items.index(this),
// prevent accidental double execution
v("body").hasClass("lg-on")||(t.build(t.index),v("body").addClass("lg-on"))})},e.prototype.build=function(t){var e=this;e.structure(),
// module constructor
v.each(v.fn.lightGallery.modules,function(t){e.modules[t]=new v.fn.lightGallery.modules[t](e.el)}),
// initiate slide function
e.slide(t,!1,!1,!1),e.s.keyPress&&e.keyPress(),1<e.$items.length?(e.arrow(),setTimeout(function(){e.enableDrag(),e.enableSwipe()},50),e.s.mousewheel&&e.mousewheel()):e.$slide.on("click.lg",function(){e.$el.trigger("onSlideClick.lg")}),e.counter(),e.closeGallery(),e.$el.trigger("onAfterOpen.lg"),
// Hide controllers if mouse doesn't move for some period
e.$outer.on("mousemove.lg click.lg touchstart.lg",function(){e.$outer.removeClass("lg-hide-items"),clearTimeout(e.hideBartimeout),
// Timeout will be cleared on each slide movement also
e.hideBartimeout=setTimeout(function(){e.$outer.addClass("lg-hide-items")},e.s.hideBarsDelay)}),e.$outer.trigger("mousemove.lg")},e.prototype.structure=function(){var t="",e="",n=0,i="",o,r=this;
// Create gallery items
for(v("body").append('<div class="lg-backdrop"></div>'),v(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),n=0;n<this.$items.length;n++)t+='<div class="lg-item"></div>';
// Create controlls
if(this.s.controls&&1<this.$items.length&&(e='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(i='<div class="lg-sub-html"></div>'),o='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+t+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+e+i+"</div></div>",v("body").append(o),this.$outer=v(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),
// Set mode lg-slide if use left is true;
this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),
// For fixed height gallery
r.setTop(),v(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){r.setTop()},100)}),
// add class lg-current to remove initial transition
this.$slide.eq(this.index).addClass("lg-current"),
// add Class for css support and transition mode
this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),
// Set speed 0 because no animation will happen if browser doesn't support css3
this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&1<this.$items.length&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var s=this.$outer.find(".lg-inner");s.css("transition-timing-function",this.s.cssEasing),s.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){v(".lg-backdrop").addClass("in")}),setTimeout(function(){r.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
// Store the current scroll top value to scroll back after closing the gallery..
this.prevScrollTop=v(window).scrollTop()},
// For fixed height gallery
e.prototype.setTop=function(){if("100%"!==this.s.height){var t=v(window).height(),e=(t-parseInt(this.s.height,10))/2,n=this.$outer.find(".lg");t>=parseInt(this.s.height,10)?n.css("top",e+"px"):n.css("top","0px")}},
// Find css3 support
e.prototype.doCss=function(){
// check for css animation support
var t;return!!function(){var t=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],e=document.documentElement,n=0;for(n=0;n<t.length;n++)if(t[n]in e.style)return!0}()},
/**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
e.prototype.isVideo=function(t,e){var n;if(n=this.s.dynamic?this.s.dynamicEl[e].html:this.$items.eq(e).attr("data-html"),!t)return n?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(e+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var i=t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),o=t.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),r=t.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),s=t.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return i?{youtube:i}:o?{vimeo:o}:r?{dailymotion:r}:s?{vk:s}:void 0},
/**
     *  @desc Create image counter
     *  Ex: 1/10
     */
e.prototype.counter=function(){this.s.counter&&v(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},
/**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
e.prototype.addHtml=function(t){var e=null,n,i;if(this.s.dynamic?this.s.dynamicEl[t].subHtmlUrl?n=this.s.dynamicEl[t].subHtmlUrl:e=this.s.dynamicEl[t].subHtml:(i=this.$items.eq(t)).attr("data-sub-html-url")?n=i.attr("data-sub-html-url"):(e=i.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=i.attr("title")||i.find("img").first().attr("alt"))),!n)if(null!=e){
// get first letter of subhtml
// if first letter starts with . or # get the html form the jQuery object
var o=e.substring(0,1);"."!==o&&"#"!==o||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?i.find(e).html():v(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?n?this.$outer.find(this.s.appendSubHtmlTo).load(n):this.$outer.find(this.s.appendSubHtmlTo).html(e):n?this.$slide.eq(t).load(n):this.$slide.eq(t).append(e),
// Add lg-empty-html class if title doesn't exist
null!=e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[t])},
/**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
e.prototype.preload=function(t){var e=1,n=1;for(e=1;e<=this.s.preload&&!(e>=this.$items.length-t);e++)this.loadContent(t+e,!1,0);for(n=1;n<=this.s.preload&&!(t-n<0);n++)this.loadContent(t-n,!1,0)},
/**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
e.prototype.loadContent=function(e,t,n){var i=this,o=!1,r,a,s,l,u,c,d=function(t){for(var e=[],n=[],i=0;i<t.length;i++){var o=t[i].split(" ");
// Manage empty space
""===o[0]&&o.splice(0,1),n.push(o[0]),e.push(o[1])}for(var r=v(window).width(),s=0;s<e.length;s++)if(parseInt(e[s],10)>r){a=n[s];break}};if(i.s.dynamic){var f;if(i.s.dynamicEl[e].poster&&(o=!0,s=i.s.dynamicEl[e].poster),c=i.s.dynamicEl[e].html,a=i.s.dynamicEl[e].src,i.s.dynamicEl[e].responsive)d(i.s.dynamicEl[e].responsive.split(","));l=i.s.dynamicEl[e].srcset,u=i.s.dynamicEl[e].sizes}else{var h;if(i.$items.eq(e).attr("data-poster")&&(o=!0,s=i.$items.eq(e).attr("data-poster")),c=i.$items.eq(e).attr("data-html"),a=i.$items.eq(e).attr("href")||i.$items.eq(e).attr("data-src"),i.$items.eq(e).attr("data-responsive"))d(i.$items.eq(e).attr("data-responsive").split(","));l=i.$items.eq(e).attr("data-srcset"),u=i.$items.eq(e).attr("data-sizes")}
//if (_src || _srcset || _sizes || _poster) {
var p=!1;i.s.dynamic?i.s.dynamicEl[e].iframe&&(p=!0):"true"===i.$items.eq(e).attr("data-iframe")&&(p=!0);var m=i.isVideo(a,e);if(!i.$slide.eq(e).hasClass("lg-loaded")){if(p)i.$slide.eq(e).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+i.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+a+'"  allowfullscreen="true"></iframe></div></div>');else if(o){var g="";g=m&&m.youtube?"lg-has-youtube":m&&m.vimeo?"lg-has-vimeo":"lg-has-html5",i.$slide.eq(e).prepend('<div class="lg-video-cont '+g+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+s+'" /></div></div>')}else m?(i.$slide.eq(e).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),i.$el.trigger("hasVideo.lg",[e,a,c])):i.$slide.eq(e).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+a+'" /></div>');if(i.$el.trigger("onAferAppendSlide.lg",[e]),r=i.$slide.eq(e).find(".lg-object"),u&&r.attr("sizes",u),l){r.attr("srcset",l);try{picturefill({elements:[r[0]]})}catch(t){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&i.addHtml(e),i.$slide.eq(e).addClass("lg-loaded")}i.$slide.eq(e).find(".lg-object").on("load.lg error.lg",function(){
// For first time add some delay for displaying the start animation.
var t=0;
// Do not change the delay value because it is required for zoom plugin.
// If gallery opened from direct url (hash) speed value should be 0
n&&!v("body").hasClass("lg-from-hash")&&(t=n),setTimeout(function(){i.$slide.eq(e).addClass("lg-complete"),i.$el.trigger("onSlideItemLoad.lg",[e,n||0])},t)}),
// @todo check load state for html5 videos
m&&m.html5&&!o&&i.$slide.eq(e).addClass("lg-complete"),!0===t&&(i.$slide.eq(e).hasClass("lg-complete")?i.preload(e):i.$slide.eq(e).find(".lg-object").on("load.lg error.lg",function(){i.preload(e)}))},
/**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();

    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    *   @param {String} direction - Direction of the slide(next/prev)
    */
e.prototype.slide=function(t,e,n,i){var o=this.$outer.find(".lg-current").index(),r=this;
// Prevent if multiple call
// Required for hsh plugin
if(!r.lGalleryOn||o!==t){var s=this.$slide.length,a=r.lGalleryOn?this.s.speed:0;if(!r.lgBusy){var l,u,c;if(this.s.download)(l=r.s.dynamic?!1!==r.s.dynamicEl[t].downloadUrl&&(r.s.dynamicEl[t].downloadUrl||r.s.dynamicEl[t].src):"false"!==r.$items.eq(t).attr("data-download-url")&&(r.$items.eq(t).attr("data-download-url")||r.$items.eq(t).attr("href")||r.$items.eq(t).attr("data-src")))?(v("#lg-download").attr("href",l),r.$outer.removeClass("lg-hide-download")):r.$outer.addClass("lg-hide-download");if(this.$el.trigger("onBeforeSlide.lg",[o,t,e,n]),r.lgBusy=!0,clearTimeout(r.hideBartimeout),
// Add title if this.s.appendSubHtmlTo === lg-sub-html
".lg-sub-html"===this.s.appendSubHtmlTo&&
// wait for slide animation to complete
setTimeout(function(){r.addHtml(t)},a),this.arrowDisable(t),i||(t<o?i="prev":o<t&&(i="next")),e)this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),2<s?(u=t-1,c=t+1,0===t&&o===s-1?(
// next slide
c=0,u=s-1):t===s-1&&0===o&&(
// prev slide
c=0,u=s-1)):(u=0,c=1),"prev"===i?r.$slide.eq(c).addClass("lg-next-slide"):r.$slide.eq(u).addClass("lg-prev-slide"),r.$slide.eq(t).addClass("lg-current");else
// remove all transitions
r.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===i?(
//prevslide
this.$slide.eq(t).addClass("lg-prev-slide"),this.$slide.eq(o).addClass("lg-next-slide")):(
// next slide
this.$slide.eq(t).addClass("lg-next-slide"),this.$slide.eq(o).addClass("lg-prev-slide")),
// give 50 ms for browser to add/remove class
setTimeout(function(){r.$slide.removeClass("lg-current"),
//_this.$slide.eq(_prevIndex).removeClass('lg-current');
r.$slide.eq(t).addClass("lg-current"),
// reset all transitions
r.$outer.removeClass("lg-no-trans")},50);r.lGalleryOn?(setTimeout(function(){r.loadContent(t,!0,0)},this.s.speed+50),setTimeout(function(){r.lgBusy=!1,r.$el.trigger("onAfterSlide.lg",[o,t,e,n])},this.s.speed)):(r.loadContent(t,!0,r.s.backdropDuration),r.lgBusy=!1,r.$el.trigger("onAfterSlide.lg",[o,t,e,n])),r.lGalleryOn=!0,this.s.counter&&v("#lg-counter-current").text(t+1)}r.index=t}},
/**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
e.prototype.goToNextSlide=function(t){var e=this,n=e.s.loop;t&&e.$slide.length<3&&(n=!1),e.lgBusy||(e.index+1<e.$slide.length?(e.index++,e.$el.trigger("onBeforeNextSlide.lg",[e.index]),e.slide(e.index,t,!1,"next")):n?(e.index=0,e.$el.trigger("onBeforeNextSlide.lg",[e.index]),e.slide(e.index,t,!1,"next")):e.s.slideEndAnimatoin&&!t&&(e.$outer.addClass("lg-right-end"),setTimeout(function(){e.$outer.removeClass("lg-right-end")},400)))},
/**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
e.prototype.goToPrevSlide=function(t){var e=this,n=e.s.loop;t&&e.$slide.length<3&&(n=!1),e.lgBusy||(0<e.index?(e.index--,e.$el.trigger("onBeforePrevSlide.lg",[e.index,t]),e.slide(e.index,t,!1,"prev")):n?(e.index=e.$items.length-1,e.$el.trigger("onBeforePrevSlide.lg",[e.index,t]),e.slide(e.index,t,!1,"prev")):e.s.slideEndAnimatoin&&!t&&(e.$outer.addClass("lg-left-end"),setTimeout(function(){e.$outer.removeClass("lg-left-end")},400)))},e.prototype.keyPress=function(){var e=this;1<this.$items.length&&v(window).on("keyup.lg",function(t){1<e.$items.length&&(37===t.keyCode&&(t.preventDefault(),e.goToPrevSlide()),39===t.keyCode&&(t.preventDefault(),e.goToNextSlide()))}),v(window).on("keydown.lg",function(t){!0===e.s.escKey&&27===t.keyCode&&(t.preventDefault(),e.$outer.hasClass("lg-thumb-open")?e.$outer.removeClass("lg-thumb-open"):e.destroy())})},e.prototype.arrow=function(){var t=this;this.$outer.find(".lg-prev").on("click.lg",function(){t.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){t.goToNextSlide()})},e.prototype.arrowDisable=function(t){
// Disable arrows if s.hideControlOnEnd is true
!this.s.loop&&this.s.hideControlOnEnd&&(t+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),0<t?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},e.prototype.setTranslate=function(t,e,n){
// jQuery supports Automatic CSS prefixing since jQuery 1.8.0
this.s.useLeft?t.css("left",e):t.css({transform:"translate3d("+e+"px, "+n+"px, 0px)"})},e.prototype.touchMove=function(t,e){var n=e-t;15<Math.abs(n)&&(
// reset opacity and transition duration
this.$outer.addClass("lg-dragging"),
// move current slide
this.setTranslate(this.$slide.eq(this.index),n,0),
// move next and prev slide with current slide
this.setTranslate(v(".lg-prev-slide"),-this.$slide.eq(this.index).width()+n,0),this.setTranslate(v(".lg-next-slide"),this.$slide.eq(this.index).width()+n,0))},e.prototype.touchEnd=function(t){var e=this;
// keep slide animation for any mode while dragg/swipe
"lg-slide"!==e.s.mode&&e.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),
// set transition duration
setTimeout(function(){e.$outer.removeClass("lg-dragging"),t<0&&Math.abs(t)>e.s.swipeThreshold?e.goToNextSlide(!0):0<t&&Math.abs(t)>e.s.swipeThreshold?e.goToPrevSlide(!0):Math.abs(t)<5&&
// Trigger click if distance is less than 5 pix
e.$el.trigger("onSlideClick.lg"),e.$slide.removeAttr("style")}),
// remove slide class once drag/swipe is completed if mode is not slide
setTimeout(function(){e.$outer.hasClass("lg-dragging")||"lg-slide"===e.s.mode||e.$outer.removeClass("lg-slide")},e.s.speed+100)},e.prototype.enableSwipe=function(){var e=this,n=0,i=0,o=!1;e.s.enableSwipe&&e.doCss()&&(e.$slide.on("touchstart.lg",function(t){e.$outer.hasClass("lg-zoomed")||e.lgBusy||(t.preventDefault(),e.manageSwipeClass(),n=t.originalEvent.targetTouches[0].pageX)}),e.$slide.on("touchmove.lg",function(t){e.$outer.hasClass("lg-zoomed")||(t.preventDefault(),i=t.originalEvent.targetTouches[0].pageX,e.touchMove(n,i),o=!0)}),e.$slide.on("touchend.lg",function(){e.$outer.hasClass("lg-zoomed")||(o?(o=!1,e.touchEnd(i-n)):e.$el.trigger("onSlideClick.lg"))}))},e.prototype.enableDrag=function(){var e=this,n=0,i=0,o=!1,r=!1;e.s.enableDrag&&e.doCss()&&(e.$slide.on("mousedown.lg",function(t){e.$outer.hasClass("lg-zoomed")||e.lgBusy||v(t.target).text().trim()||(t.preventDefault(),e.manageSwipeClass(),n=t.pageX,o=!0,
// ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
e.$outer.scrollLeft+=1,e.$outer.scrollLeft-=1,
// *
e.$outer.removeClass("lg-grab").addClass("lg-grabbing"),e.$el.trigger("onDragstart.lg"))}),v(window).on("mousemove.lg",function(t){o&&(r=!0,i=t.pageX,e.touchMove(n,i),e.$el.trigger("onDragmove.lg"))}),v(window).on("mouseup.lg",function(t){r?(r=!1,e.touchEnd(i-n),e.$el.trigger("onDragend.lg")):(v(t.target).hasClass("lg-object")||v(t.target).hasClass("lg-video-play"))&&e.$el.trigger("onSlideClick.lg"),
// Prevent execution on click
o&&(o=!1,e.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},e.prototype.manageSwipeClass=function(){var t=this.index+1,e=this.index-1;this.s.loop&&2<this.$slide.length&&(0===this.index?e=this.$slide.length-1:this.index===this.$slide.length-1&&(t=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),-1<e&&this.$slide.eq(e).addClass("lg-prev-slide"),this.$slide.eq(t).addClass("lg-next-slide")},e.prototype.mousewheel=function(){var e=this;e.$outer.on("mousewheel.lg",function(t){t.deltaY&&(0<t.deltaY?e.goToPrevSlide():e.goToNextSlide(),t.preventDefault())})},e.prototype.closeGallery=function(){var e=this,n=!1;this.$outer.find(".lg-close").on("click.lg",function(){e.destroy()}),e.s.closable&&(
// If you drag the slide and release outside gallery gets close on chrome
// for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
e.$outer.on("mousedown.lg",function(t){n=!!(v(t.target).is(".lg-outer")||v(t.target).is(".lg-item ")||v(t.target).is(".lg-img-wrap"))}),e.$outer.on("mousemove.lg",function(){n=!1}),e.$outer.on("mouseup.lg",function(t){(v(t.target).is(".lg-outer")||v(t.target).is(".lg-item ")||v(t.target).is(".lg-img-wrap")&&n)&&(e.$outer.hasClass("lg-dragging")||e.destroy())}))},e.prototype.destroy=function(t){var e=this;t||(e.$el.trigger("onBeforeClose.lg"),v(window).scrollTop(e.prevScrollTop))
/**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */,t&&(e.s.dynamic||
// only when not using dynamic mode is $items a jquery collection
this.$items.off("click.lg click.lgcustom"),v.removeData(e.el,"lightGallery")),
// Unbind all events added by lightGallery
this.$el.off(".lg.tm"),
// Distroy all lightGallery modules
v.each(v.fn.lightGallery.modules,function(t){e.modules[t]&&e.modules[t].destroy()}),this.lGalleryOn=!1,clearTimeout(e.hideBartimeout),this.hideBartimeout=!1,v(window).off(".lg"),v("body").removeClass("lg-on lg-from-hash"),e.$outer&&e.$outer.removeClass("lg-visible"),v(".lg-backdrop").removeClass("in"),setTimeout(function(){e.$outer&&e.$outer.remove(),v(".lg-backdrop").remove(),t||e.$el.trigger("onCloseAfter.lg")},e.s.backdropDuration+50)},v.fn.lightGallery=function(t){return this.each(function(){if(v.data(this,"lightGallery"))try{v(this).data("lightGallery").init()}catch(t){console.error("lightGallery has not initiated properly")}else v.data(this,"lightGallery",new e(this,t))})},v.fn.lightGallery.modules={}}()}),$(document).ready(function(){function t(){
// Foundation
// ----------
Foundation.Interchange.SPECIAL_QUERIES["medium-retina"]="only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["large-retina"]="only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["xlarge-retina"]="only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)",Foundation.Interchange.SPECIAL_QUERIES["xxlarge-retina"]="only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)",$(document).foundation(),
// 2. Animate on Scroll
// --------------------
$(function(){AOS.init({offset:64,easing:"ease-in-out-quart",duration:600})}),$(function(){window.addEventListener("load",AOS.refresh)}),$(".video").lightGallery({counter:!1,youtubePlayerParams:{modestbranding:1,showinfo:0,rel:0,controls:0},vimeoPlayerParams:{autoplay:0,title:0,byline:0,portrait:0,color:"FFFFFF"}}),$("[data-curtain-menu-button]").click(function(){$("body").toggleClass("curtain-menu-open")})}
// Run once
// ---------------------------------------------
// ---------------------------------------------
// Page Transitions
// ---------------------------------------------
var e;t(),new Swup({animationSelector:'[class*="swup-transition-"]',elements:["#main, #maintest"]}).on("contentReplaced",function(){t()})});