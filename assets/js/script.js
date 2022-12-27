
$(document).ready(function () {


	// MODAL
	$('[data-modal=projects]').on('click', function () {
		$('.overlay, #projects').fadeIn('fast');
	});
	$('[data-modal=social]').on('click', function () {
		$('.overlay, #social').fadeIn('fast');
	});
	// $('[data-modal=projects]').on('click', function () {
	// 	$('#social').fadeOut('fast');
	// });
	$('.modal__close').on('click', function () {
		$('.overlay, #projects, #social').fadeOut('fast');
	})
	$('.overlay').on('click', function () {
		$('.overlay, #projects, #social').fadeOut('fast');
	})
	$(document).on('keydown', function (event) {
		if (event.key == "Escape") {
			$('.overlay, #projects, #social').fadeOut('fast');;
		}
	});
});