console.log("hello JS chart world");
// document.querySelector

// document.createElement

let apiData = {};
console.log('global obj:', apiData);


function render() {
    // console.log('render getting invoked');
    // let output = document.querySelector('#data');
    // console.log('here is the output:', output);
    // output.innerHTML = '';

    for (var key in apiData) {
        if (apiData.hasOwnProperty(key)) {
            console.log(key + " -> " + apiData[key]);
            var div = document.createElement("div")
            div.innerHTML = key;
            x = apiData[key] + 'px';
            document.getElementById("data").appendChild(div).style.
            height = x;
        }
        // let rate = document.createElement('div');
        // rate.setAttribute('src', gif.images.preview_gif.url);
        // output.appendChild(rate);

        // An example of adding a click event:
        // image.onclick = () => alert(`Titled: ${gif.title}`);
    }
}
// render()

function doFetch() {
    console.log('-- doFetch is getting invoked');
    // let element = document.querySelector('#data');
    // let searchTerm = element.value;
    fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then(jsonData => {
            let RateObj = jsonData.rates;
            console.log('arr', jsonData);
            apiData = RateObj;
            render();
        });
}
doFetch();




// snippent form stackoverflow: create and style div using Javasctript
// var div = document.createElement("div");
// div.innerHTML = "Hello";
// document.getElementById("main").appendChild(div);