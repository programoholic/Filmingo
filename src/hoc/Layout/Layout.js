import React, { Component } from 'react';
import Toolbar from '../../component/Navigation/ToolBar/ToolBar';
import classes from './Layout.module.css';
class Layout extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return (
            <React.Fragment>
               <Toolbar />
               <main className={classes.Main}>
                  { this.props.children }  
                </main>  
            </React.Fragment>    
        )
    }
}
export default Layout;