﻿/// <reference path="../angular.min.js" />  
/// <reference path="Modules.js" />  
/// <reference path="Service.js" />  
  
app.controller("RestAPIController", function ($scope, RestAPIService, $timeout){  
    $scope.OperType = 1;  
    //1 Mean New Entry
   
   $scope.Students=[];
   
   $scope.datalist=[];
   
    GetAllRecords();
    
    //To Get All Records  
    function GetAllRecords() 
    {  
        //debugger;
        var promiseGet = RestAPIService.getCurrentAccountInfo("11", "PAYMENT", "0");  
        promiseGet.then(function (response) 
        { 
            $scope.datalist = response.data;
            alert(response.data); 
        },  
        function (errorPl) 
        { 
            alert(errorPl.status);
            //console.log("Some Error in Getting Records - " + errorPl.status);  
        });
        
        /*$timeout(function(){
                              $scope.Students = [];
                              GetAllRecords();
                           },10000);*/
    }   
    
    $scope.triggerChangeWithApply = function () 
    {
        setTimeout(function()
        {
            $scope.$apply(function(){
                GetAllRecords();
            })
        }, 15000 )
     };
     
    //To Clear all input controls.  
    function ClearModels() 
    {  
        $scope.OperType = 1;  
        $scope.StudentID = "";  
        $scope.Name = "";  
        $scope.Email = "";  
        $scope.Class = "";  
        $scope.EnrollYear = "";  
        $scope.City = "";  
        $scope.Country = "";  
    }  
  
    //To Create new record and Edit an existing Record.  
    $scope.save = function () {  
        var Student = {  
                          Name: $scope.Name,  
                          Email: $scope.Email,  
                          Class: $scope.Class,  
                          EnrollYear: $scope.EnrollYear,  
                          City: $scope.City,  
                          Country: $scope.Country  
                      };  
        if ($scope.OperType === 1) 
        {  
            //debugger;
            var promisePost = RestAPIService.post(Student);  
            promisePost.then(function (pl) 
            {  
                $scope.Message = "Student Added Successfuly";
                //$scope.StudentID = pl.data.StudentID;
                GetAllRecords();
                //Student.StudentID = $scope.Students.length + 1;
                //$scope.Students.push(Student);
                ClearModels();
            }, 
            function (err) 
            {  
                alert(err.status);
                //console.log("Some error Occured" + err);  
            });  
        } 
        else 
        {  
            //Edit the record      
            //debugger;  
            Student.StudentID = $scope.StudentID;  
            var promisePut = RestAPIService.put($scope.StudentID, Student);
            promisePut.then(function (pl) 
            {  
                $scope.Message = "Student Updated Successfuly";
                GetAllRecords();
                /*setTimeout(function () {
                    $scope.$apply(function () {
                                                 $scope.Message = "Data Refreshed";
                                                 GetAllRecords();
                                              });
                    }, 2000);*/
                
                //$scope.Students.splice($scope.Students.indexOf(Student), 1);
                //$scope.Students.push(Student);
                ClearModels();
            }, 
            function (err) 
            {
                alert(err.data);  
                //console.log("Some Error Occured." + err.status);  
            });  
        }
    };  
  
    //To Get Student Detail on the Base of Student ID  
    $scope.getStudent = function (Student) 
    {  
        var promiseGetSingle = RestAPIService.get(Student.StudentID); 
        promiseGetSingle.then(function (pl) 
        {
            var res = pl.data;
            //alert(res.Email); 
            $scope.StudentID = res.StudentID;  
            $scope.Name = res.Name;  
            $scope.Email = res.Email;  
            $scope.Class = res.Class;  
            $scope.EnrollYear = res.EnrollYear;  
            $scope.City = res.City;  
            $scope.Country = res.Country;  
            $scope.OperType = 0;  
        },  
        function (errorPl) 
        {  
            alert(errorPl.status);  
            //console.log('Some Error in Getting Details', errorPl);  
        });  
    };  
  
    //To Delete Record  
    $scope.deleteStudent = function (Student) 
    {  
        var promiseDelete = RestAPIService.delete(Student.StudentID);  
        promiseDelete.then(function (pl) 
        {  
            //var index = $scope.Students.indexOf(Student);
            //$scope.Students.splice(index,1);  
            $scope.Message = "Student Deleted Successfuly";  
            GetAllRecords();  
            ClearModels();
        }, 
        function (errorPl) 
        {  
            alert(errorPl.data);
            //console.log("Some Error Occured." + err);  
        });  
    }; 
});  
