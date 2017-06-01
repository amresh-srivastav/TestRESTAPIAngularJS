/// <reference path="../angular.min.js" />
/// <reference path="Modules.js" />

app.service("RestAPIService", function($http) {
    //Create new record  
    /*this.post = function(Student) {
        var request = $http({
            method: "post",
            crossDomain: true,
            url: "http://localhost/WCFRESTAPI/StudentService.svc/AddNewStudent",
            data: Student
        });
        return request;
    }

    //Update the Record  
    this.put = function(StudentID, Student) {
        //debugger;  
        var request = $http({
            method: "put",
            url: "http://localhost/WCFRESTAPI/StudentService.svc/UpdateStudent",
            data: Student
        });
        return request;
    }*/

    //Get All Records
    this.getCurrentAccountInfo = function(affNum, addrType, adminNum) {
        alert(affNum);
        return $http.get("http://localhost:55486/affiliateAcctInfo.svc/getCurrentAccountInfo/" + affNum + "/" + addrType + "/" + adminNum);
    };

    //Random code to learn the git source control system
    this.isTestAccount = function (affNum) {
        return (affNum == 10 || affNum == 11 || affNum == 382468);
    }

    //Get Single Records  
    /*this.get = function(StudentID) {
        return $http.get("http://localhost/WCFRESTAPI/StudentService.svc/GetStudentDetails/" + StudentID);
    }

    //Delete the Record  
    this['delete'] = function(StudentID) {
        var request = $http({
            method: "delete",
            url: "http://localhost/WCFRESTAPI/StudentService.svc/DeleteStudent/" + StudentID
        });
        return request;
    }*/
});  

