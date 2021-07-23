import classes from './styles.module.css';
import { Fragment } from 'react';

const Loader = props => {
    const { loading } = props;
    return <Fragment>
        {loading ? <div className={classes.loader} />
            : null}
    </Fragment>;
};

export default Loader;