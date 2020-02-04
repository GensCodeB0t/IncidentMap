import React from 'react';
import AppMap from '../components/map';
import WithServices from '../services';

export default function App(){
    return(
      <div className="App">      
        <WithServices>
          <AppMap />
        </WithServices>                
      </div>
    );
  }

