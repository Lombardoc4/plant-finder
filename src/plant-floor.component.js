import React from 'react';
import PlantTile from './tile.component';

const plantExample = [
    {'plantName': 'sunflower', 'plantType': 'Wildflower', 'bloomTime': 'Summer', 'color': 'Yellow' },
    {'plantName': 'tulip', 'plantType': 'Wildflower', 'bloomTime': 'Spring', 'color': 'Orange' },
    {'plantName': 'mint', 'plantType': 'Wildflower', 'bloomTime': 'Summer', 'color': 'Purple' },
    {'plantName': 'yarrow', 'plantType': 'Wildflower', 'bloomTime': 'Summer', 'color': 'White' },
    {'plantName': 'milkweed', 'plantType': 'Wildflower', 'bloomTime': 'Summer', 'color': 'Orange' }

]

const PlantFloor = (props) => {

    const tiles = []

    let i = 0;
    const length = props.plantExample.length;
    while (i < length) {
        const myObject = props.plantExample[i];
        const formattedData = []

        // console.log('my object', myObject);
        for (const key in myObject) {
            if (myObject != null && hasOwnProperty.call(myObject, key)){
                formattedData.push(<span key={key}>{key} is {myObject[key]} and </span>)
            }
        }

        tiles.push(
            <PlantTile key={i}>
                This&nbsp;
                { formattedData }
                {/* {Object.values(key).join(', ')} */}
            </PlantTile>
        )
        // callback(object[i], i, object);
        i += 1;
    }

    return (
        <div>
            {tiles}
        </div>
    )

}

export default PlantFloor;