
function getSyncTime() {
    return new Promise( (resolve, reject) =>{
        console.log('开始异步获取时间')
        try {
            let startTime = new Date().getTime();
            console.log('设置起始时间');
            
            setTimeout( () => {
                console.log('设置结束时间');
                
                let endTime = new Date().getTime();
                let data = endTime - startTime;
                resolve( data );
            },1000)
        }catch( err ){
            reject(err);
        }
    })
}

async function getSyncData() {
    let time = await getSyncTime();
    let data = `endTime - startTime = ${time}`;
    return data;
}

async function getData(){
    let data = await getSyncData();
    console.log(data);
    
}

getData();