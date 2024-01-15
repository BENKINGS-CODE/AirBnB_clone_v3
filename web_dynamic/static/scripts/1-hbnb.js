/* A javascript script that adds data or removes data based on an event */
$(document).ready(function () {
  const list = [];
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
}
);
