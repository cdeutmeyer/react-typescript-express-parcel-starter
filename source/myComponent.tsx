
import * as React from 'react';
import { addme } from './myLib';

export default () => {
   let a: number = addme(11,6);
   return (        
      <div>
         <div>added: {addme(10,4) } </div>
      </div>         
   )
}