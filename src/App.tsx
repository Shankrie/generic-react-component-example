import { useState } from 'react'

import './App.css'
import SelectDropdown from './components/SelectDropdown/SelectDropdown'

enum Platform {
  	Android = 'android',
  	Mac = 'macos',
  	Windows = 'win',
  	Linux = 'linux',
}

enum Status {
	Active = 'active',
	Inactive = 'inactive'
}

function App() {
	const [selectedPlatform, setSelectedPlatform] = useState(Platform.Android);

	return (
		<SelectDropdown 
			value={selectedPlatform} 
			options={Object.values(Platform).map((value) => ({ value }))} 
			onChange={(value) => setSelectedPlatform(value)} 
		/>
    );
}

export default App
