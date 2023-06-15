$("#selectAll").click(function() {
	$(".checkboxes input[type=checkbox]").prop("checked", $(this).prop("checked"));
});

$(".checkboxes input[type=checkbox]").click(function() {
	if (!$(this).prop("checked")) {
		$("#selectAll").prop("checked", false);
	}
});

jackHarnerSig();







