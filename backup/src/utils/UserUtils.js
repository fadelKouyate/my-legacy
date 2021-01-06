class UserUtils {
    
  static mappingData(data) {
        return {
          cov_mail : data.email,
          cov_first_name : data.fname,
          cov_last_name : data.lname,
          cov_birth : data.birth,
          cov_gender : data.gender,
          cov_phone : data.phone,
          cov_city : data.city,
          cov_picture : data.picture 
        }
      }
}

export default UserUtils