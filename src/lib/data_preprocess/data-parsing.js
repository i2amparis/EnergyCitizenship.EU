function xlsx_to_json(file){
    return new Promise((resolve, reject) => {

        let reader = new FileReader();
        reader.onload = function(e) {
            try {

                var data = e.target.result;
                var workbook = XLSX.read(data, {type: 'array'});

                var worksheet = workbook.Sheets['Case studies'];
                var jsonsheet = XLSX.utils.sheet_to_json(worksheet, {
                    blankRows: false,
                    defval: 0,
                });

                resolve(jsonsheet);

            } catch (error) {
                reject(error);
            }
            
        }
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);

    });

    

}

function read_json(file){

    return new Promise((resolve, reject) => {

        let reader = new FileReader();
        reader.onload = function(e) {

            try {
                var data = e.target.result;
                resolve(JSON.parse(JSON.stringify(data)));

            } catch (error) {
                reject(error);
            }

        
        }
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);

    });
    
}

export{
    xlsx_to_json,
    read_json
}