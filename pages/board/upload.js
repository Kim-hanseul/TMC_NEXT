import React,{useState} from 'react';
import {connect} from 'react-redux';
import {Upload} from '@/components';

const UploadPage = ({}) => {
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
     <Upload onChange={onChange} onSubmit={onSubmit}/>);
};
const mapStateToProps = state => ({})
const UploadPageActions = {}
export default connect(mapStateToProps, UploadPageActions)(UploadPage);

