function makeGrid() {
  var dcRows = $("#input_height").val();
  var dcCols = $("#input_width").val();
  var dcTable = $("#pixel_canvas");
  dcTable.children().remove(); 
  for (var row = 0; row < dcRows; row++) {
    dcTable.append("<tr></tr>");
    for (var col = 0; col < dcCols; col++) {
      dcTable.children().last().append("<td></td>");
    }
  }
  
  dcTable.on("click", "td", function() {
    var color = $("input[type='color']").val();
      $(this).attr("bgcolor", color);
  });
}

$("input[type='submit']").click(function(creation) {
  creation.preventDefault();
  makeGrid();
});

$('#refresh').click(function() {
    location.reload();
});

