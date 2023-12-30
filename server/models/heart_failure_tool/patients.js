const { pool } = require('../../db/dbConfig');

exports.getHeartFailurePatients = () => {
    return new Promise((resolve, reject) => {
      const query = 
             `SELECT id, 
                full_name,
                national_id, 
                entry_date
            FROM Patients.HeartFailurePatients`;
      pool.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          results.forEach((result) => {
            const utcDate = new Date(result.entry_date);
            const egyptTimeZone = 'Africa/Cairo';
            const egyptDate = new Intl.DateTimeFormat('en-EG', {
              timeZone: egyptTimeZone,
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            }).format(utcDate);

            // Extract 'dd/mm/yyyy' format
            const formattedDate = egyptDate.split('/');
            const reverse = [formattedDate[1], formattedDate[0],formattedDate[2]].join('/');
            result.entry_date = reverse;
          });
          resolve(results);
        }
      });
    });
  };