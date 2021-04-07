"use strict";

window.pazuraInternal = "https://pbs.twimg.com/profile_banners/1355620843401994243/1617737600/1500x500";

function bindReload() {
	document.querySelectorAll(`img[data-bind="cezaryPazura"]`).forEach(el => el.src = window.pazuraInternal);
};

Object.defineProperty(window, "cezaryPazura", {
	get: function () {
		return window.pazuraInternal;
	},

	set: function (val) {
		window.pazuraInternal = val;
		bindReload();
	}
});
