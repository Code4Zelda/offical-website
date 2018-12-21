import React from 'react'
import SimpleModal from './SimpleModal.jsx'

// const styles = {
//     center: {
//         textAlign: center,
//     }
// }

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }
    }
    render() {
        // const { center } = styles
        return (
            <div className='center'>
                <SimpleModal />
            </div>
        )
    }
}


export default App;