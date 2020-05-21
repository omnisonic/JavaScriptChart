
let apiData = {};

function render() {


    for (var rateData in apiData) {
        if (apiData.hasOwnProperty(rateData)) {
            console.log(rateData + " -> " + apiData[rateData]);
            var div = document.createElement("div")
            div.innerHTML = rateData;
            barSize = apiData[rateData] + 'px';
            document.getElementById("data").appendChild(div).style.
            width = barSize;
        }
    }
}

function doFetch() {
    console.log('-- doFetch is getting invoked');

    fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(jsonData => {
            let RateObj = jsonData.rates;
            apiData = RateObj;
            render();
        });
}
doFetch();