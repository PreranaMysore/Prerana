const firebase = require('firebase');
const errors = require('../helpers/errors');
const bcrypt = require('bcrypt');

    
//Sign -up (create new user)
const signup = (data, callback) => {
    var username = data.username;
    var email = data.email;
    var password = data.password;
    var mobile = data.mobile;
    var address = data.address;
    var role =data.role;
    var SSLC = data.SSLCSubject || '-';
    var FSTPUC = data.FSTPUCSubject || '-';
    var SCDPUC = data.SCDPUCSubject || '-';
    var subject1 = data.subject1 ||'-';
    var subject2 = data.subject2 ||'-';
    var subject3 = data.subject3 ||'-';
    var subject4 = data.subject4 ||'-';
    var classs = data.classs || '-';
    var fatherName = data.fatherName || '-';
    var motherName = data.motherName || '-';

   firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result){
     
     password = data.password = bcrypt.hashSync(password, 10);  
  var uid = result.uid;

     firebase.database().ref('USERS/'+ uid).set({
    username: username,
    email: email,
    password: password,
    mobile: mobile,
    address: address,
    role : role

   }).then(function(){
     
      if(role === 'staff')
   {
    firebase.database().ref('STAFFS/'+ uid).set({
  
    
    SSLC : SSLC,
    FSTPUC : FSTPUC,
    SCDPUC : SCDPUC,


   }).then(function(){
     
    return callback(null, data);

   }).catch(function(error) {
        console.log(error)
        return callback(errors.internalServer(error), null);

     });
  
   }

  else{

    firebase.database().ref('STUDENTS/'+ uid).set({
    fatherName : fatherName,
    motherName : motherName,
    subject1 : subject1,
    subject2 : subject2,
    subject3 : subject3,
    subject4 : subject4,
    classs : classs

   }).then(function(){
     
    return callback(null, data);

   }).catch(function(error) {
        console.log(error)
        return callback(errors.internalServer(error), null);

     });
        
}

   }).catch(function(error) {
        console.log(error)
        return callback(errors.internalServer(error), null);

     });

   }).catch(function(error) {
         console.log(error)
        if(error.code==='auth/email-already-in-use')
           return callback(errors.emailAlreadyExist(error), null);
        else
           return callback(errors.internalServer(error), null);
   }); 

} 
//Login existing user

const login = (data, callback) => {
    var username = data.username;
    var email = data.email;
    var password = data.password;
    
   firebase.auth().signInWithEmailAndPassword(email, password).then(function(user) {
     
    firebase.database().ref('/USERS/'+user.uid).once('value').then(function(snapshot){
      
      data.role = snapshot.val().role;
      console.log(data.role )
      return callback(null, data);
    });
    

   }).catch(function(error) {
  
     console.log(error);

      if(error.code==='auth/user-not-found'){

            return callback(errors.userNotFound(error), null);
         }

        else if(error.code==='auth/wrong-password'){
          
          return callback(errors.invalidPassword(error), null);
         
        }

        else{
           return callback(errors.internalServer(error), null);
        }
  });

}
  

       
  
module.exports.signup = signup ;
/*module.exports.studentSignup = studentSignup ;
module.exports.staffSignup = staffSignup ;*/
module.exports.login = login ;