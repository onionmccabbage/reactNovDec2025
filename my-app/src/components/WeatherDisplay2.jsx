import { useEffect, useState } from "react";

// our component
function WeatherDisplay() {
    // state 
    const [weatherData, setWeatherData] = useState([{ 'description': 'waiting...' }])
    const [city, setCity] = useState('Hull')
    // effect
    useEffect(() => {
        // try to get some remote weather data
        async function getData() {
            // there is NO awareness of server capabilities
            // we have abstracted EVERYTHING away to our remote server
            // our only remaining problem on the lcient is to receive and halde the response from the server
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=48f2d5e18b0d2bc50519b58cce6409f1`;

            // we may need to await the response from a remote asset
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError(error.message);
            }
        }
        // here we call our getData function
        getData()

        return () => {
            'we should clean up the connection here' // 
        };
    }, [city]); // any dependencies goes here in an array

    // functions (e.g. handlers)

    // render something
    return (
        <>
            {/* show the raw data that gets returned */}
            {/* <pre> is useful to show pre-formatted output */}
            {/* we may take any Javascript structure and convert it to text (JSON) */}
            {/* <p>The weather in {city} is {weatherData.description}</p> */}
            <pre>{JSON.stringify(weatherData)}</pre>

        </>
    )

}
export default WeatherDisplay