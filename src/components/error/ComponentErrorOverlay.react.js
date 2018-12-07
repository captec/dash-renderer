import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ComponentErrorOverlay.css';
import { isEmpty } from 'ramda';

export default class ComponentErrorOverlay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            componentId,
            componentType,
            children
        } = this.props;
        const errorLocationString =
            'Error in ' + componentType + '(id=' + componentId + ')';
        // const errorString = error.name + ' -- ' + error.message;

        return (
            <div
                className={'dash-error-overlay'}
            >
                {errorLocationString}
            </div>
        );
    }
}

ComponentErrorOverlay.propTypes = {
    children: PropTypes.object,
    oldChildren: PropTypes.object,
    error: PropTypes.object,
    componentId: PropTypes.string,
    componentType: PropTypes.string,
    resolve: PropTypes.func,
};
