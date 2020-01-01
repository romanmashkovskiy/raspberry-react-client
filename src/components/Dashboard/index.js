import React from 'react';
import { connect } from 'react-redux';
import { blink, clear } from '../../store/raspberry/actions';

const Dashboard = ({ blink, clear }) => {
    return (
        <>
            <button onClick={ blink }>
                toggle led
            </button>
            <button onClick={ clear }>
                clear led
            </button>
        </>
    );
};

const mapDispatchToProps = { blink, clear };

export default connect(null, mapDispatchToProps)(Dashboard);