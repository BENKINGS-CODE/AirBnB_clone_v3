/* A javascript script that adds data or removes data based on an event */
$(document).ready(function () {
  const list = [];
  const url = 'http://0.0.0.0:5001/api/v1/places_search/';
  $('.popover li').each(function () {
    $(this).find("input[type='checkbox']").on('change', function () {
      if ($(this).is(':checked')) {
        list.push($(this).attr('data-id'));
      } else {
        list.pop($(this).attr('data-id'));
      }
    }
    );
  }
  );
  $('.amenities h4').text(list);
  $('button').click(function () {
    $.post(url, JSON.stringify({ amenities: list }), function (response) {
    }
    );
  }
  );
}
);
