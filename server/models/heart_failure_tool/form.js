const { queryAsync, pool } = require('../../db/dbConfig');
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');

dayjs.extend(customParseFormat);
exports.getHeartFailureFormFields = (page) => {
    return new Promise((resolve, reject) => {
      const query = 
      `SELECT 
      f.id, f.field, f.name, f.type, f.required, f.options, f.dependent_field_id_range, f.field_order, c.category_order, c.name
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
          c.tool = 1
      AND c.page = ?
      )
      ORDER BY c.category_order, f.field_order
      `;
      pool.query(query, [page], (error, results) => {
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

  exports.saveHeartFailureFormData = async (page, formData) => {
    // field_id 1 == name

    // field_id 5 == national_id
    // field_id 11 == date of visit i.e entry date
    // entry_date optional
    // if entry date then
    // INSERT INTO `Patients`.`HeartFailurePatients` (`full_name`, `national_id`) VALUES (name, nationalId);
    // else 
    // INSERT INTO `Patients`.`HeartFailurePatients` (`full_name`, `entry_date`, `national_id`) VALUES (name, Date of Visit, NationalId);
    // first insert into heartfailure patients
    // then use the id from that to insert patient_id into HeartFailurePatientDataText, num or date based on type
    // using key as field_id and value as value
    
    try {
        const name = formData['1'];
        const nationalId = formData['5'];
        const entryDate = formData['11'] ?? null;

        // Construct the patient insertion query
        const patientInsertQuery = entryDate
            ? "INSERT INTO `Patients`.`HeartFailurePatients` (`full_name`, `entry_date`, `national_id`) VALUES (?, ?, ?);"
            : "INSERT INTO `Patients`.`HeartFailurePatients` (`full_name`, `national_id`) VALUES (?, ?);";

        // Execute the patient insertion query using the connection pool
        const patientInsertResult = await queryAsync(patientInsertQuery, [name, entryDate, nationalId].filter(Boolean));

        // Get the generated patient_id
        const patientId = patientInsertResult.insertId;

        // Now, loop through formData to insert data into HeartFailurePatientDataText
        for (const fieldId in formData) {
            if (formData.hasOwnProperty(fieldId) && fieldId !== '1' && fieldId !== '5' && fieldId !== '11') {
                const value = formData[fieldId];

                // Construct the query for HeartFailurePatientDataText based on the data type
                const dataTypeQuery = "INSERT INTO `Patients`.`HeartFailurePatientDataText` (`patient_id`, `field_id`, `value`) VALUES (?, ?, ?);";
                const numDataTypeQuery = "INSERT INTO `Patients`.`HeartFailurePatientDataNum` (`patient_id`, `field_id`, `value`) VALUES (?, ?, ?);";
                const dateDataTypeQuery = "INSERT INTO `Patients`.`HeartFailurePatientDataDate` (`patient_id`, `field_id`, `value`) VALUES (?, ?, ?);";

                // Determine the data type and execute the corresponding query using the connection pool
                if (!isNaN(value) && dayjs(value).isValid()) {
                    console.log(value)
                    // If value is a valid date, insert into HeartFailurePatientDataDate
                    const formattedDate = dayjs(value).format('YYYY-MM-DD HH:mm:ss');
                    console.log(formattedDate);
                    const dateObj = new Date(formattedDate);
                    console.log(dateObj);
                    await queryAsync(dateDataTypeQuery, [patientId, fieldId, dateObj]);
                } else if (!isNaN(value)) {
                    // If value is a number, insert into HeartFailurePatientDataNum
                    await queryAsync(numDataTypeQuery, [patientId, fieldId, parseFloat(value)]);
                } else {
                    // Otherwise, insert into HeartFailurePatientDataText
                    await queryAsync(dataTypeQuery, [patientId, fieldId, value]);
                }
            }
        }

        console.log('Data successfully saved:', patientId);
        return { success: true, message: 'Data successfully saved' };
    } catch (error) {
        console.error('Error in saveHeartFailureFormData:', error);
        throw error;
    }
    
  };