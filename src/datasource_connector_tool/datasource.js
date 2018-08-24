class Datasource{
    getPrices(){
    
        return new Promise(function(resolve, reject){
            var r = new XMLHttpRequest();
            r.open("GET", "https://pastebin.com/raw/KCJm3Kzb", true);
            r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return;
               resolve(JSON.parse(r.responseText).data.prices);
            };
            r.send();
         
        });
        
    }
    
}