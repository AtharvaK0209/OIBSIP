const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {
    const value = parseFloat(temperatureInput.value);
    if (isNaN(value)){
        result.innerHTML = "Please enter a valid temperature.";
        return;
    }

    const from = fromUnit.value;
    const to = toUnit.value;
    if (from == to){
        result.innerHTML = `${value.toFixed(2)} ${getSymbol(to)}`;
        return;
    }

    let celsius;
    switch (from){
        case "celsius":
        celsius = value;
        break;

        case "fahrenheit":
        celsius = (value - 32) * 5 / 9;
        break;

        case "kelvin":
        celsius = value - 273.15;
        break;
    }

    let converted;
    switch (to){
        case "celsius":
        converted = celsius;
        break;

        case "fahrenheit":
        converted = (celsius * 9 / 5) + 32;
        break;

        case "kelvin":
        converted = celsius + 273.15;   
        break;
    }

    result.innerHTML = `${converted.toFixed(2)} ${getSymbol(to)}`;
}

function getSymbol(unit){
    switch (unit){
        case "celsius":
            return "°C";
        
        case "fahrenheit":
            return "°F";

        case "kelvin":
            return "K";
    }
}