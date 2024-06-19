import Inputmask from "inputmask";
import validate from "../libs/jquery-validation"
import {modals} from "./modals";
var forms = {
	mask: () => {
		var selector = document.querySelectorAll("input.js-mask-phone");
		var email = document.querySelectorAll("input.js-mask-email");

		var im = new Inputmask({
			mask: "+7 (999) 999-99-99",
			clearMaskOnLostFocus: true,
			clearIncomplete: false,
			showMaskOnHover: false,
			inputmode: 'tel'
		});

		var emailMask = new Inputmask({
			mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
			greedy: false,
			showMaskOnHover: false,
			inputmode: 'email',
			onBeforePaste: function (pastedValue, opts) {
				pastedValue = pastedValue.toLowerCase();
				return pastedValue.replace("mailto:", "");
			},
			definitions: {
				'*': {
					validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
					casing: "lower"
				}
			}
		});

		im.mask(selector);
		emailMask.mask(email);
	},

	validate: () => {
		$("form").each((i, el) => {
			var $form = $(el);
			$form.validate({
				errorPlacement: function(error, element) {
					// $(element).closest('.input').append(error.attr('title', error.text()).hide()
					// 	.fadeIn(500))

				},
				highlight: (element, errorClass, validClass) => {
					$(element)
						.parent()
						.parent()
						.addClass(errorClass)
						.removeClass(validClass);
				},
				unhighlight: (element, errorClass, validClass) => {
					$(element)
						.parent()
						.parent()
						.removeClass(errorClass)
						.addClass(validClass);
				},
				submitHandler: (form) => {
					const stepModal = $(form).closest('.modal').attr('data-step-modal')
					if (stepModal) {
						modals.open(false, stepModal)
					}
					// const btnModal = $(form).find('button[data-modal]')
					// if (!btnModal.hasClass('js-modal')) {
					//
					// 	btnModal.addClass('js-modal')
					// } else {
					// 	btnModal.removeClass('js-modal')
					// }

					if ($(form).hasClass('is-submit')) {
						form.submit()
					}
				},
				rules: {
					phone: {
						required: true,
						minlength: 10
					},
					name: {
						required: true,
					},
					email: {
						required: true,
						email: true,
					},
					date: {
						required: true,
					}
				},
				messages: {
					phone: {
						required: "Dieses Feld ist erforderlich",
						minlength: ""
					},
					name: {
						required: "Dieses Feld ist erforderlich",
					},
					email: {
						required: "Dieses Feld ist erforderlich",
						email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
					},
					date: {
						required: "Dieses Feld ist erforderlich",
					}
				}
			});
		});
	},

	events: () => {
		$(".input__field, .textarea__field")
			.on("focus", (e) => {
				let $input = $(e.target);
				$input.parent().parent().addClass("is-focus");
			})
			.on("blur change", (e) => {
				let $input = $(e.target);

				if ($input.val() == "") $input.parent().parent().removeClass("is-focus");
			})
	},

	init: () => {
		forms.mask();
		forms.validate();
		forms.events();
	},
};

export { forms };