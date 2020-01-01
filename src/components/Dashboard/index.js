import React from 'react';
import { connect } from 'react-redux';
import { blink } from '../../store/raspberry/actions';

const Dashboard = ({ blink }) => {
    return (
        <button onClick={ blink }>
            click
        </button>
    );
};

const mapDispatchToProps = { blink };

export default connect(null, mapDispatchToProps)(Dashboard);