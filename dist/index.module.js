export default function(e){var t;e=Object.assign({latency:50,minLength:3,element:document,endKeys:["Enter"],validKey:/^\w$/,stopPropagation:!1,preventDefault:!1},e);var n=0,a="";function o(o){e.stopPropagation&&o.stopImmediatePropagation(),e.preventDefault&&o.preventDefault();var i=o.key,r=o.timeStamp,l=r-n;if(n=r,"Shift"!==i){var v=e.validKey.test(i),d=e.endKeys.includes(i);l>e.latency?a=!d&&v?i:"":v?a+=i:(d&&a.length>=e.minLength&&t(a,o),a="")}}return{on:function(n){e.element.removeEventListener("keydown",o,!0),a="",(t=n)&&e.element.addEventListener("keydown",o,!0)},off:function(){e.element.removeEventListener("keydown",o,!0)}}}