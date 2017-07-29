var args = $.args;

(function() {
	if (!_.isEmpty(args)) {
		applyProperties(args);
	}
})();

function applyProperties(args) {
	if (_.has(args, "title")) {
		$.lbl.text = args.title;
	}
	if (_.has(args,"onClick")) {
		$.switchView.addEventListener("click", args.onClick);
		$.swt.addEventListener("click", args.onClick);
	}
	$.switchView.applyProperties(_.pick(args, ['top', 'height']));
	$.swt.applyProperties(_.omit(args, ['top', 'text', 'onClick']));
}

function setValue(value) {
	$.swt.value = value;
}

function getValue() {
	return $.swt.value;
}

_.extend($, {
	applyProperties : applyProperties,
	getValue : getValue,
	setValue : setValue
});