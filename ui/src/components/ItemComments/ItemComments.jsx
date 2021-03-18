import React from 'react';
import Typography from '@material-ui/core/Typography';

const ItemComments = ({ name, text }) => {
    return (
        <div className="ItemComments">
            <Typography variant="h6" gutterBottom>
                {name}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {text}
            </Typography>
        </div>
    );
};

export default ItemComments;
