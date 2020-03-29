function createGrid(data){
	var result = "";
    var d =  "<thead> <tr><th>ID</th><th>Country</th><th>Cases Confirmed</th><th>Deaths</th></tr></thead>";
	for (var i in data){
        cr = "<tr>";

		for (var j in data[i]){
            cr = cr + "<td>"+data[i][j]+"</td>";
		}

		cr = cr + "</tr>\n";
		result = result + cr;
    }
    var final = d + result

	$("#main-table").html(final);

}
$(document).ready(function(){
    $.get("/",'index.html')
    $.get("/init",{},function(response){
        var data = JSON.parse(response);
        createGrid(data);
    });
});