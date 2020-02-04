import React from 'react';
import {ApiService} from './api';
import {MapMarkerService} from './map_marker';
import {FlattenDataService} from './flatten_data';

export default function WithServices(props){
    return (
        <>
            {React.Children.map(props.children, child =>{
                return React.cloneElement(child, {
                ...props,
                ...{
                    ApiService: ApiService,
                    MapMarkerService: MapMarkerService({ApiService:ApiService()}),
                    FlattenDataService: FlattenDataService
                }} );
            })}
        </>
        );
}