$(document).ready(function(){
    $.get("/",'index.html')
    $(document).ready(function () {
        $('#cases').DataTable({
          "ajax": {
          "url": "/globalcases",
          "dataType": "json",
          "dataSrc": "locations",
          "contentType":"application/json"
          },
          "columns": [
            {'data': 'country'},
            {'data': 'latest.confirmed'},
            {'data': 'latest.deaths'}
          ],
          "order": [[ 1, "desc" ]]
        });
    });
    $('#news').DataTable({
        "ajax": {
        "url": "/news", 
        "dataType": "json",
        "dataSrc": "articles",
        "contentType":"application/json"
        },
        "columns": [
            {'data': 'title'},
            {'data': 'description'},
            {'data': 'source.name'}
        ]
      });
});