// ECMAScript has a 'fetch' call for remote data

async function getData() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=tring&units=metric&APPID=48f2d5e18b0d2bc50519b58cce6409f1";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
        // we can pick pieces of this data
        console.log( result.weather[0]['description'] )
        console.log( result.main['temp'] )
    } catch (error) {
        console.error(error.message);
    }
}

getData() // remember to call the function!!