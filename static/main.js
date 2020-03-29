function createGrid(data){
	var result = "";
    var d =  "<thead><tr><th>Country</th><th>Cases Confirmed</th><th>Deaths</th></tr></thead>";
	for (var i = 0; i < data.length; i++){
        cr = "<tr>";
        cr = cr + "<td>"+data[i].country+"</td>"+"<td>"+data[i].latest.confirmed+"</td>"+"<td>"+data[i].latest.deaths+"</td>";
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