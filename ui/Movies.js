import React, {Fragment} from "react";

export const Movies = ({ movies, search }) => {
    return (
        <Fragment>
            {movies.map(item => <h6 key={item.name}>{item.name}</h6>)}
        </Fragment>
    );
}