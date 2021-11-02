import React, { Component } from 'react';
import ReactAux from '../ReactAux/ReactAux';


//HOC, layout is a wrapper technically making it an HOC
class Layout extends Component {
    
    render () {
        return (
            <ReactAux>
                {/*<Toolbar /> */}
                <main>
                    {this.props.children}
                </main>
                <br />
                {/*<Footer /> */}
            </ReactAux>
        )
    }
}

export default Layout;