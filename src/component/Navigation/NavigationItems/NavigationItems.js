import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';
const navigationItems = (props) =>{
    const navList = [
        {
             name : 'Movies',
             link : '/movies',
             exact : true,
             component : 'component'
        },
        {
            name : 'Collections',
            link : '/collections',
            exact : true,
            component : 'Collections'
        }
    ];
    const navigation = navList.map((item,index)=>{
        return <NavigationItem key={item.name+'__'+index} {...item} />
    })

    return (
        <ul className= {classes.NavigationItems}> 
            {navigation}
        </ul>    
    )
}

export default navigationItems;