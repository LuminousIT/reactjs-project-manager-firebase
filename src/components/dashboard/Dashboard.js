import React, {Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../project/ProjectList' 

class Dashboard extends Component {
    render() {
        return (
            
            <div className="row container">
                <div className="col s12 m6">
                    <ProjectList />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notifications />
                </div>
            </div>
        )
    }
}

export default Dashboard