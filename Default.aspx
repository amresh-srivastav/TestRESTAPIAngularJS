<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="Default.aspx.vb" Inherits="TestRESTAPIAngularJS._Default" %>

<%--<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
--%>
<script type="text/javascript" src="Scripts/angular.min.js"></script>
<script type="text/javascript" src="Scripts/Module.js"></script>  
<script type="text/javascript" src="Scripts/Service.js"></script>  
<script type="text/javascript" src="Scripts/Controllers.js"></script>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="RestAPIModule">
<head runat="server">
    <title>Testing REST API using Angular</title>
</head>
<body>
    <form id="form1" runat="server">
		<table id="tblContainer" data-ng-controller="RestAPIController"> 
			<tr>
				<td>
					<tbody data-ng-repeat="data in datalist">  
                        <tr>  
                            <td></td>  
                            <%--<td><span>{{stud.StudentID}}</span></td>  
                            <td><span>{{stud.Name}}</span></td>  
                            <td><span>{{stud.Email}}</span></td>  
                            <td><span>{{stud.Class}}</span></td>  
                            <td><span>{{stud.EnrollYear}}</span></td>  
                            <td><span>{{stud.City}}</span></td>  
                            <td><span>{{stud.Country}}</span></td>  --%>
                        </tr>  
                    </tbody>  
				</td>
			</tr>
		</table>
    </form>
</body>
</html>
