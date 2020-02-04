var _results = {};

const flattenData = (data) =>{
    _results = {};
    return _flattenData(data);
}


const _flattenData = (data) =>{
    if(Array.isArray(data)){
        data.forEach((_data, _index)=>{
            _results = {..._results, ..._flattenData(_data)};
        })
        return _results;            
    }
    Object.keys(data).forEach(_key =>{
        var key = _key.replace(/[_]/g, " ");
        if(Array.isArray(data[_key]) || data[_key] === Object(data[_key])){                  
            _results[key] = '';
            return _flattenData(data[_key], _key, false);
        }
        _results[key] = data[_key] ? data[_key] : '';
    });
    return _results;
}

export const FlattenDataService = {
    flattenData: (data) => flattenData(data)
}