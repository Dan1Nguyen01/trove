import react from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import './index.css'


function Index(){
  return (
    <div>
      <App/>
    </div>
  )
}

ReactDOM.render (<Index/>, document.getElementById('root'));