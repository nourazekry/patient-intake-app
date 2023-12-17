const db = require('../../db/dbConfig');

exports.getHeartFailureFormFields = () => {
    return new Promise((resolve, reject) => {
      const query = 
      `SELECT 
        f.id, f.field, f.name, f.type, f.required, f.options, c.name 
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
            if(!resultsMap[result.category_name]){
                resultsMap[result.category_name] = []; 
            }
            resultsMap[result.category_name].push(result);
            delete result.category_name;
          });
          console.log(resultsMap);

          resolve(resultsMap);
        }
      });
    });
  };