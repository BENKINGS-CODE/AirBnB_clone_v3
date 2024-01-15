/* A script that sends ajax request to an API */

let post = {};
data = JSON.stringigy(data)
$.ajax({
	type: 'POST',
	url: 'http://0.0.0.0:5001/api/v1/places_search/',
	contentType: 'application/json',
	data: data,
	success: function(response) {
			'<div class="title_box"></div>'
		)
		$('section.places article .title_box').append(
			'<div class="price_by_night"> </div>'
		)
		$('section.places article').append(
			'<div class="information"> </div>'
		)
		$('section.places article .information').append(
			'<div class="max_guest"> </div>'
		)
		$('section.places article .information').append(
			'<div class="number_rooms"> </div>'
		)
		$('section.places article .information').append(
			'div class="number_bathrooms"> </div>'
		)
		response.forEach( (place) => {
			$(section.places).html(<article>place</article>)
			$('section.places article title_box').append(
				'<h2>place.name</h2>'
			)
			$('section.places article .price_by_night').text(
				'place.price_by_night'
			)
			$('section.places article .max_guest').text(
				'place.max_guest'
			)
			$('section.places article .number_rooms').text(
				'place.number_rooms'
			)
			$('section.places article .number_bathrooms').text(
				'place.number_bathrooms'
			)
		}
		)
	},
	error: function(error) {
		console.log('an error occured', error);
	}
}
)
