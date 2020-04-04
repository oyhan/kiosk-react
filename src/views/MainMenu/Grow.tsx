import * as React from 'react';
import { GrowProps } from '@material-ui/core';


export interface CustomGroProps extends GrowProps {
 
  [key :string] :any
}

declare const Grow: React.ComponentType<CustomGroProps>;

export default Grow;
