import React from 'react';
import './Team.css'

const Team = (props) => {
    const eachPlayer = props.squad;
    let totalSalary = 0;
    for (let i = 0; i < eachPlayer.length; i++) {
        const OnePlayer = eachPlayer[i];
        totalSalary = totalSalary + OnePlayer.salary;
    }
    return (
        <div>
            <h5 className="text-danger">Total Cost For The Squad: {totalSalary}</h5>
            {
                eachPlayer.map((each) => <h4 className="my-3"> {each.fullName} - ${each.salary}</h4>)
            }
        </div>
    );
};

export default Team;