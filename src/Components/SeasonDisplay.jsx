import React from 'react'
import './seasonDisplay.css'
const seasonObj = {
    summer: {
        text: `Let's hit the beach`,
        iconName: `sun`
    },
    winter: {
        text:`Burr, it is Chilly`,
        iconName:  `snowflake`
    }
}
// create a function that shows season
const getSeason = (latitude, month) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    }
    else {
        return latitude > 0 ? 'winter' : 'summer';
    }

}

const SeasonDisplay = (props) => {
    // destructuring props
    const { latitude } = props
    console.log(latitude)

    const season = getSeason(latitude, new Date().getMonth())
    const {text,iconName} = seasonObj[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h2> {text} </h2>
            <i className={`icon-right massive ${iconName} icon`} />

        </div>
    )
}

export default SeasonDisplay