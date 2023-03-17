var result = [];

async function getResponse(value){
    let data = await fetch(value);
    let result = await data.json();

    contentDisplay()
    function contentDisplay() {

        var clear = document.getElementById("tableBody");
        clear.innerText = "";
        

   
        for(i=0; i<=result.length-1; i++){
            console.log(result[i])
            var rowData = document.createElement("tr");
            var tabeldata = document.createElement("td");
            rowData.innerText= "";
            tabeldata.innerHTML = '<img src="' + result[i].image_link + '">';
            rowData.appendChild(tabeldata);
            tabeldata = document.createElement("td");
            tabeldata.innerText = result[i].brand;
            rowData.appendChild(tabeldata);
            tabeldata = document.createElement("td");
            tabeldata.innerText = result[i].name;
            rowData.appendChild(tabeldata);
            tabeldata = document.createElement("td");
            tabeldata.innerText = result[i].price + '$' ;
            rowData.appendChild(tabeldata);
            var rows = document.getElementById("tableBody");
            rows.appendChild(rowData);

    
        }
        }

}

function fetchUrlCreator(){

    var res = document.querySelectorAll('input[type="checkbox"]');
   var selected = [];
   res.forEach((checkbox) => {
    if(checkbox.checked){
        selected.push(checkbox.value);
    }
   });
    
   var appendUrl =  selected.join("&");
   var fetchUrl = "https://makeup-api.herokuapp.com/api/v1/products.json?" + appendUrl
    console.log(fetchUrl)
    getResponse(fetchUrl);

}


    var rowData = document.createElement("tr");
    var tabeldata = document.createElement("td");

