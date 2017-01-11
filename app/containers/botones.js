import React, { Component } from 'react'; //definimos este archivo como componente
import { 
	View,
	Text
} from 'react-native';

import _Style_ from './style';

export default class botones extends Component{ //We export the class directly using export default on the class definition.
	render(){
		return(
				<View style={ _Style_.botonView }>
					<Text style={ _Style_.botonTextoView }>{this.props.valu_e}</Text>
				</View>
			);
	};
}