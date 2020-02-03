import data from '../../../public/data/F01705150090.json';

export const MapMarkerService = (props) =>{
    const getInitialCenter = () =>{
        return{
            lat: data["address"]["latitude"],
            lng: data["address"]["longitude"]
        }
    }

    const getMarkerData = async() =>{
        try{         
            var _markers = [];
            _markers.push({
                name: "Incident",
                latitude: data["address"]["latitude"],
                longitude: data["address"]["longitude"],
                details:{
                    address: data["address"],
                    description: data["description"],
                    fire_department: data["fire_department"]
                },
                weather: {...weatherData}                
            })
            data["apparatus"].forEach(unit => {
                ["arrived", "available", "dispatched", "enroute"].forEach(status =>{
                    var tempUnit = Object.assign({}, unit);
                    delete tempUnit["unit_status"];
                    _markers.push({
                        name: `${unit["car_id"]} ${status}`,
                        latitude: unit["unit_status"][status]["latitude"],
                        longitude: unit["unit_status"][status]["longitude"],
                        details:{
                            ...tempUnit,
                            timestamp: unit["unit_status"][status]["timestamp"]
                        }
                    });
                });                
            });
            return _markers;
        } catch (error) {
            console.error(`AN ERROR OCCURED WHILE PARSING MARKER DATA ${error}`);
            return;
        }
    }

    return {
        getInitialCenter: () => getInitialCenter(),
        getMarkerData: async() => getMarkerData()
    }
}