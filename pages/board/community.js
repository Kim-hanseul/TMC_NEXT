import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Community} from '@/components';

const communityPage = ({}) => {
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
     <Community onChange={onChange} onSubmit={onSubmit}/>);
};
const mapStateToProps = state => ({})
const CommunityActions = {}
export default connect(mapStateToProps,CommunityActions)(communityPage);