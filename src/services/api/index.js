export const ApiService = () =>{
    const weatherBaseUri = "/weather";

    const handleError = (status, msg = '') =>{
        switch(status){
            case 401:
                console.log('You are not authorized to access this page/function');
            break;
            case 404:
                console.log('The page or item you are looking for could not be found');
            break;
            case 500:
                console.log(`Something went wrong with your request ${msg}`);
            break;
            default:
                console.log('Something went wrong');
            break;
        }
    }

    const get = async (url) =>{
        try{
            var response = await fetch(url,{
                method: 'GET',   
            });
            if(response.status < 400)
                return response.json();                                        
            else    
                handleError(response.status);

        } catch(err){
            console.error(err)
        }        
    }

    const padDigits = (time) => ("0" + time).slice(-2);

    const getWeatherByDateAndLocation = async (lat, lng, time) =>{
        var _time = new Date(time);
        const _month = padDigits(_time.getMonth());
        const _date = padDigits(_time.getDate());        
        const _hour = padDigits(_time.getHours());
        const _minutes = padDigits(_time.getMinutes());
        const _seconds = padDigits(_time.getSeconds());

        _time = `${_time.getFullYear()}-${_month}-${_date}T${_hour}:${_minutes}:${_seconds}?exclude=currently,minutely,hourly,flags`
        const _url = `${weatherBaseUri}/${lat},${lng},${_time}`
        return get(_url);
    }

    return {
        getWeatherByDateAndLocation: async (date, lat, lng, time) => getWeatherByDateAndLocation(date, lat, lng, time)
    }
}