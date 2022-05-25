import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Badge} from '@/components';

const BadgePage = ({}) => {
    const [table, setTable] = useState({blah:''})


    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setTable({
            ...table,
            [name]: value
        })
    }
    
    const onSubmit = e => {
        e.preventDefault()
        
    
    }
    return (
     <Badge onChange={onChange} onSubmit={onSubmit}/>);
};
const mapStateToProps = state => ({})
const BadgePageActions = {}
export default connect(mapStateToProps, BadgePageActions)(BadgePage);