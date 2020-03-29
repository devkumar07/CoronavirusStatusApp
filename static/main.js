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

function createCaseGrid(data){
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

function createNewsGrid(data){
    var result = "";
    var d =  "<thead><tr><th>Title</th><th>Description</th><th>Source</th></tr></thead>";
	for (var i = 0; i < data.length; i++){
        cr = "<tr>";
        cr = cr + "<td><a href='"+data[i].url+"'>"+data[i].title+"</a></td>"+"<td><a href='"+data[i].url+"'>"+data[i].description+"</a></td>"+"<td><a href='"+data[i].url+"'>"+data[i].source.name+"</a></td>";
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
    $("#btn1").click(function(){
        $.get("/news",{},function(response){
            var data = JSON.parse(response);
            createNewsGrid(data);
        });
        $("#btn2").click(function(){
            $.get("/globalcases",{},function(response){
                alert("button clicked1");
                var data = JSON.parse(response);
                createCaseGrid(data);
            });
        });
    });
    $("#btn2").click(function(){
        $.get("/globalcases",{},function(response){
            alert("button clicked");
            var data = JSON.parse(response);
            createCaseGrid(data);
        });
    });
});