import {originals,actions,comedy,horror,romance,documentries} from './urls'
import './App.css'
import NavBar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'



function App() {


  return (
 <div>
  <NavBar/>
  <Banner/>
  <RowPost url={originals} title='Netflix Originals'/>
  <RowPost url={actions} title='Action' isSmall/>
  <RowPost url={comedy} title='Comedy' isSmall/>
  <RowPost url={horror} title='Horror' isSmall/>
  <RowPost url={romance} title='Romance' isSmall/>
  <RowPost url={documentries} title='Documentries' isSmall/>
 </div>
  )
}

export default App
