// ECMAScript has a 'fetch' call for remote data

// declare that this function may take some time for a resposne to arrive (e.g. from a remote server)
async function getData() {
    // there is NO awareness of server capabilities
    // we have abstracted EVERYTHING away to our remote server
    // our only remaining problem on the lcient is to receive and halde the response from the server
    const url = "https://api.openweathermap.org/data/2.5/weather?q=tring&units=metric&APPID=48f2d5e18b0d2bc50519b58cce6409f1";
    try {
        // we may need to await the response from a remote asset
        const response = await fetch(url); // await endlessly
        // BUT most servers will have a built in timeout
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