/* A script that sends ajax request to an API */

const url = 'http://0.0.0.0:5001/api/v1/status/';
$.get(url, function (data, textStatus) {
  if (textStatus === 'success') {
    $('div#api_status').addClass('available');
  } else {
      $('div#api_status').removeClass('available');
  }
}
);
