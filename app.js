const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

for( code in countrylist){
    console.log(code);
}
// for(let select of dropdowns){
//     for(currcode in countrylist){
//         let newoption = document.createElement("option");
//         newoption.innerText = currcode;
//         newoption.value = currcode;
//         if(currcode === USD && select.name === "from"){
//             newoption.selected = "selected";
//         }
//         else(currcode === TO && select.name === "from"){
//             newoption.selected = "selected";
//         }
//         select.append(newoption);

//     }
// }