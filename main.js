async function filterByGroupName(groupName) {

    const dataJson = await fetch("./data.json")  // pull data.json
        .then((response) => response.json())
        .catch((error) => console.log(error));  // if occurs some error, show error.
        debugger

        let dataList = dataJson.filter(item => item.group === groupName); // filtering process
        debugger
        // control block 10-17
        if(dataList.length>1)
        {
            getGroups(dataList);
        }
        else
        {
            console.log("Please enter valid group name!");
        }    
};

function getGroups(array){
    const result = array.reduce((total, currentValue) => {   
                         
        if (currentValue.type == null) // collect student data
        {    

            total[currentValue.type] = total[currentValue.type] || [];
            total[currentValue.type].push(currentValue.name); // push student names into array
            debugger
        } 
        else  // collect assistant data
        {                                                                
            total[currentValue.type] = total[currentValue.type] || [];
            total[currentValue.type].push(currentValue.name); // push assistant name into array
            debugger
        }
        return total;
    }, Object.create(null)
    )
    console.log(result);                   
}

filterByGroupName("IndianRed"); 
