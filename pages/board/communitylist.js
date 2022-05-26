import React,{useState} from 'react';
import {connect} from 'react-redux';
import {CommunityList} from '@/components';

const CommunityListPage = ({}) => {
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
     <CommunityList onChange={onChange} onSubmit={onSubmit}/>);
};
const mapStateToProps = state => ({})
const CommunityListActions = {}
export default connect(mapStateToProps, CommunityListActions)(CommunityListPage);