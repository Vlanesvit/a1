/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдов
	if (document.querySelector('.rs-slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider');
		sliderBlocks.forEach(sliderBlock => {
			const sliderImg = sliderBlock.querySelector('.rs-slider-img__slider');
			const sliderContent = sliderBlock.querySelector('.rs-slider-text__slider');
			const pagination = sliderBlock.querySelector('.rs-slider__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-slider__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-slider__button-prev');

			const sliderSwiperContent = new Swiper(sliderContent, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 800,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				slidesPerView: 1,
			});

			const sliderSwiperImg = new Swiper(sliderImg, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 800,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				slidesPerView: 1,
			});

			// "Связка" слайдеров
			sliderSwiperImg.controller.control = sliderSwiperContent;
			sliderSwiperContent.controller.control = sliderSwiperImg;
		});
	}

	if (document.querySelector('.rs-catalog__slider')) {
		// Инициализация слайдера
		const sliderBlocks = document.querySelectorAll('.rs-catalog');

		sliderBlocks.forEach(sliderBlock => {
			const sliders = sliderBlock.querySelectorAll('.rs-catalog__slider');

			sliders.forEach(slider => {
				const arrowPrev = sliderBlock.querySelector('.rs-catalog__button-prev');
				const arrowNext = sliderBlock.querySelector('.rs-catalog__button-next');
				const pagination = sliderBlock.querySelector('.rs-catalog__pagination');

				// До этой ширины слайдер будет неактивным
				const breakpoint = window.matchMedia('(min-width: 991.98px)');

				let sliderSwiper;

				const breakpointChecker = function () {
					if (breakpoint.matches === true) {
						// Выключаем слайдер
						if (sliderSwiper !== undefined) sliderSwiper.destroy(true, true);
						return;
					} else if (breakpoint.matches === false) {
						// Включаем слайдер
						return enableSwiper();
					}
				};

				const enableSwiper = function () {
					sliderSwiper = new Swiper(slider, {
						// // Автопрокрутка
						// autoplay: {
						// 	// Пауза между прокруткой
						// 	delay: 10000,
						// 	// Закончить на последнем слайде
						// 	stopOnLastSlide: false,
						// 	// Отключить после ручного переключения
						// 	disableOnInteraction: false,
						// },

						// Обновить свайпер
						// при изменении элементов слайдера
						observer: true,
						// при изменении родительских элементов слайдера
						observeParents: true,
						// при изменении дочерних элементов слайдера
						observeSlideChildren: true,

						// Скорость смены слайдов
						speed: 500,

						// Включение/отключение
						// перетаскивание на ПК
						simulateTouch: true,
						allowTouchMove: true,
						// Чувствительность свайпа
						touchRadio: 1,
						// Угол срабатывания свайпа/перетаскивания
						touchAngle: 45,

						// Цикличность слайдера
						// loop: true,

						// Анимация переключения
						// effect: 'fade',

						// Курсор перетаскивания
						grabCursor: true,

						// Стрелки
						navigation: {
							prevEl: arrowPrev,
							nextEl: arrowNext,
						},

						// Пагинация
						pagination: {
							el: pagination,
							clickable: true,
						},

						// Брекпоинты (адаптив)
						breakpoints: {
							320: {
								slidesPerView: 1.1,
								spaceBetween: 24,
							},
							767.98: {
								slidesPerView: 2.2,
								spaceBetween: 24,
							},
						},
					});
				}

				breakpoint.addListener(breakpointChecker);
				breakpointChecker();
			});
		});
	}

	if (document.querySelector('.rs-features__slider')) {
		// Инициализация слайдера
		const sliderBlocks = document.querySelectorAll('.rs-features');

		sliderBlocks.forEach(sliderBlock => {
			const sliders = sliderBlock.querySelectorAll('.rs-features__slider');

			sliders.forEach(slider => {
				const arrowPrev = sliderBlock.querySelector('.rs-features__button-prev');
				const arrowNext = sliderBlock.querySelector('.rs-features__button-next');
				const pagination = sliderBlock.querySelector('.rs-features__pagination');

				// До этой ширины слайдер будет неактивным
				const breakpoint = window.matchMedia('(min-width: 991.98px)');

				let sliderSwiper;

				const breakpointChecker = function () {
					if (breakpoint.matches === true) {
						// Выключаем слайдер
						if (sliderSwiper !== undefined) sliderSwiper.destroy(true, true);
						return;
					} else if (breakpoint.matches === false) {
						// Включаем слайдер
						return enableSwiper();
					}
				};

				const enableSwiper = function () {
					sliderSwiper = new Swiper(slider, {
						// // Автопрокрутка
						// autoplay: {
						// 	// Пауза между прокруткой
						// 	delay: 10000,
						// 	// Закончить на последнем слайде
						// 	stopOnLastSlide: false,
						// 	// Отключить после ручного переключения
						// 	disableOnInteraction: false,
						// },

						// Обновить свайпер
						// при изменении элементов слайдера
						observer: true,
						// при изменении родительских элементов слайдера
						observeParents: true,
						// при изменении дочерних элементов слайдера
						observeSlideChildren: true,

						// Скорость смены слайдов
						speed: 500,

						// Включение/отключение
						// перетаскивание на ПК
						simulateTouch: true,
						allowTouchMove: true,
						// Чувствительность свайпа
						touchRadio: 1,
						// Угол срабатывания свайпа/перетаскивания
						touchAngle: 45,

						// Цикличность слайдера
						// loop: true,

						// Анимация переключения
						// effect: 'fade',

						// Курсор перетаскивания
						grabCursor: true,

						// Стрелки
						navigation: {
							prevEl: arrowPrev,
							nextEl: arrowNext,
						},

						// Пагинация
						pagination: {
							el: pagination,
							clickable: true,
						},

						// Брекпоинты (адаптив)
						breakpoints: {
							320: {
								slidesPerView: 1.1,
								spaceBetween: 24,
							},
							767.98: {
								slidesPerView: 2.2,
								spaceBetween: 24,
							},
						},
					});
				}

				breakpoint.addListener(breakpointChecker);
				breakpointChecker();
			});
		});
	}

	if (document.querySelector('.rs-slider-block__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider-block');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-slider-block__slider');
			const pagination = sliderBlock.querySelector('.rs-slider-block__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-slider-block__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-slider-block__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},


				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1.1,
						spaceBetween: 24,
					},
					767.98: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					1439.98: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-about')) {
		const sliderBlocks = document.querySelectorAll('.rs-about');
		sliderBlocks.forEach(sliderBlock => {
			const sliderImg = sliderBlock.querySelector('.rs-about-img__slider');
			const sliderContent = sliderBlock.querySelector('.rs-about-text__slider');
			const pagination = sliderBlock.querySelector('.rs-about-text__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-about-text__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-about-text__button-prev');

			const sliderSwiperContent = new Swiper(sliderContent, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 800,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'fraction',
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				slidesPerView: 1,
				spaceBetween: 30,
			});

			const sliderSwiperImg = new Swiper(sliderImg, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 800,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Курсор
				grabCursor: true,

				slidesPerView: 1,
			});

			// "Связка" слайдеров
			sliderSwiperImg.controller.control = sliderSwiperContent;
			sliderSwiperContent.controller.control = sliderSwiperImg;
		});
	}

	if (document.querySelector('.rs-partners__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-partners');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-partners__slider');
			const pagination = sliderBlock.querySelector('.rs-partners__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-partners__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-partners__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'fraction',
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},


				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 16,
					},
					991.98: {
						slidesPerView: 4,
						spaceBetween: 24,
					},
					1169.98: {
						slidesPerView: 5,
						spaceBetween: 24,
					},
					1439.98: {
						slidesPerView: 6,
						spaceBetween: 24,
					},
				},
			});
		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});