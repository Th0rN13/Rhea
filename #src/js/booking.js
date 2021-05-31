// Booking select

$(".select_btn").click(function(){
	if(clicks % 2 === 0) {
 		$(this).closest('.select').find('.dropdown').css("display", "block");
 		clicks++;
 	} else {
 		$(this).closest('.select').find('.dropdown').css("display", "none");
 		clicks++;
 	}
});

$(".variant_text").click(function() {
	let variant = event.target.textContent;
   $(this).closest(".select").find(".current_text").html(variant);
});

	// Dates datepicker

const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ["January","February","March","April","May","June","July",
            	 "August","September","October","November","December"];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + " " + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

		// Event listeners

date_picker_element.addEventListener('click', toggleDatePicker);
prev_mth_element.addEventListener('click', goToPrevMonth);
next_mth_element.addEventListener('click', goToNextMonth);


		// Functions

function toggleDatePicker (e) {
	console.log(e.path);

	if (checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle("active");
	}
}

function goToPrevMonth (e) {
	month--;
	if (month === 0) {
		 month  = 11;
		 year--;
	}

	mth_element.textContent = months[month] + " " + year;
	populateDates();
}

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}

	mth_element.textContent = months[month] + " " + year;
	populateDates();
}

function populateDates (e) {
	let amounth_days = 31;
	days_element.innerHTML = "";


	if (month === 1) {
		 amounth_days = 28;
	}

	for (let i = 0; i < amounth_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if(selectedDate === (i + 1) && selectedYear === year && selectedMonth === month) {
			days_element.classList.add('selected');
		}

		day_element.addEventListener('click', function () {
			selectedDate = new Date(year + "-" + (month + 1) + "-" + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;
			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;

			$(this).closest('.select').find('.current_text').html(formatDate(selectedDate));

			populateDates();

		});

		days_element.appendChild(day_element);
	}
}

		// Helper functions 

function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if(path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}

	return false;
}

function formatDate (d) {
	let day = d.getDate();
	if (day < 10) day = "0" + day;

	let month = d.getMonth() + 1;
	if (month < 10) month = "0" + month;

	let year = d.getFullYear();

	return day + " / " + month + " / " + year;
}