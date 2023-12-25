const db = require('../../db/dbConfig');

exports.getHeartFailureFormFields = () => {
    return new Promise((resolve, reject) => {
      const query = 
      `SELECT 
        f.id, f.field, f.name, f.type, f.required, f.options, f.dependent_field_id_range, c.name
       AS 
        category_name 
       FROM 
        Patients.HeartFailureFields f 
        INNER JOIN 
        Patients.Categories c 
        ON 
        c.id = f.category_id 
        WHERE f.category_id IN 
        (SELECT 
            c.id 
        FROM 
            Patients.Categories c 
        WHERE 
            c.tool = 1);
      `;
      db.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
        const resultsMap = {};
          results.forEach((result) => {
            // add the category as key, if it does not already exist
            if(!resultsMap[result.category_name]){
                resultsMap[result.category_name] = []; 
            }
            // add that field to its category key
            // if that result has a nonnull dependent field column
            if(result.dependent_field_id_range !== null){
                //then add a children key to that object
                result.children = []
                // get all the ids from that dependent field value
                const idArray = result.dependent_field_id_range.split(',');
                console.log(result.dependent_field_id_range)

                if (idArray) {
                    idArray.forEach((dependentId) => {
                      const dependentFieldIndex = results.findIndex((dependent) => dependent.id == dependentId);
                  
                      if (dependentFieldIndex !== -1) {
                        const dependentField = results[dependentFieldIndex];
                        result.children.push(dependentField);
                        results.splice(dependentFieldIndex, 1); // Remove the dependent field from the original array
                      }
                    });
                  }
            }
            
            resultsMap[result.category_name].push(result);
            // remove the redundant category name
            delete result.category_name;
          });

          resolve(resultsMap);
        }
      });
    });
  };