import * as React from 'react';
import { render } from 'react-dom';

import MyComp from './myComponent';

const App = () =>
		<div>
			<MyComp />
		</div>


render(<App />, document.getElementById('app'));
