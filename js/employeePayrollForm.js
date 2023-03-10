
window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector('#name');
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
        }
    });

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    });
});
    const save=()=>{
        try{
            let employeePayrollData=createEmployeePayroll();
            createAndUpdateStorage(employeePayrollData);
        }catch(e){
            return;
        }
    }

    function createAndUpdateStorage(employeePayrollData){
        let employeePayrollList=JSON.parse(localStorage.getItem("EmployeePayrollList"));
        if(employeePayrollList!=undefined){
            employeePayrollList.push(employeePayrollData);
        }else{
            employeePayrollList=[employeePayrollData]
        }
        alert(employeePayrollList.toString());
        localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList))
    }

    const createEmployeePayroll=()=>{
        let employeePayrollData=new EmployeePayrollData();
        try{
            employeePayrollData.name=getInputValueById('#name');
        }catch(e){
            setTextValue('.text-error',e);
            throw e;
        }
        employeePayrollData.profilePic=getSelectedValues('[name=profile]').pop();
        employeePayrollData.gender=getSelectedValues('[name=gender]').pop();
        employeePayrollData.department=getSelectedValues('[name=department]');
        employeePayrollData.salary=getInputValueById('#salary');
        employeePayrollData.note=getInputValueById('#notes');
        let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
        employeePayrollData.date=Date.parse(date);
        alert(employeePayrollData.toString());
        return employeePayrollData;
    }

    const getSelectedValues=(propertyValue) =>{
        let allItems=document.querySelectorAll(propertyValue);
        let selItems=[];
        allItems.forEach(item=>{
            if(item.checked)selItems.push(item.value);
        });
        return selItems;
    }

    const getInputValueById=(id) =>{
        let value=document.querySelector(id).value;
        return value;
    }

    const getInputElementValue = (id) => {
        let value=document.getElementById(id).value;
        return value;
    }
    const resetForm=()=>{
        setValue('#name','');
        unsetSelectedValues('[name=profile]');
        unsetSelectedValues('[name=gender]');
        unsetSelectedValues('[name=depatment]');
        setValue('#salary','');
        setValue('#notes','');
        setValue('#day','1');
        setValue('#month','January');
        setValue('#year','2020');
    }

    const unsetSelectedValues=(propertyValue)=>{
        let allItems=document.querySelectorAll(propertyValue);
        allItems.forEach(item=>{
            item.checked=false;
        });
    }

    const setTextValue=(id,value) =>{
        const element=document.querySelector(id);
        element.textContent=value;
    }

    const setValue=(id,value)=>{
        const element =document.querySelector(id);
        element.value=value;
    }

    function getFormValue(e) {
        e.preventDefault();
        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const gender = document.getElementById("gender").value;
        const department = document.getElementById("department").value;
        const salary = document.getElementById("salary").value;
        const startDate = document.getElementById("startDate").value;
        const notes = document.getElementById("notes").value;
    
    }
 


   
 

class EmployeePayrollData{
    id;
    name;
    profilePic;
    gender;
    department;
    salary;
    startDate;
    notes;

  
    get id(){
        return this._name;
    }
    set id(id){
        this._id=id;
    }
    get name(){
        return this.name;
    }
    set name(name){
        let nameRegex=RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(name))
            this._name=name;
        else throw "name is invalid";
    }
    
    get profilePic(){
        return this._profilePic;
    }
    set profilePic(profilePic){
         this._profilePic=profilePic;
    }
    get getGender(){
        return this.gender;
    }
    set gender(gender){
        this._gender=gender;
    }
    get department(){
        return this._department;
    }
    set department(department){
        this._department=department;
    }
    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary=salary;
    }
    get getStartDate(){
        return this.startDate;
    }
    set startDate(startDate){
        this._startDate=startDate;
    }
    get getNotes(){
        return this.notes;
    }
    set notes(notes){
        this._notes=notes;

    }
    
    toString(){
        const options={year:'numeric',month:'long',day:'numeric'}
        const empDate=!this.startDate?"undefined" : this.startDate.toLocaleDateString("en-US",options);
        return "id = "+this.Id+"name = "+this.Name+" , gender = "+this.gender+" ,profilePic = "+this.profilePic
            +" ,salary = "+this.salary+" ,department = "+this.department+" ,gender = "+this.gender+" ,startDate = "+this.startDate+" , notes = "+this.notes;
    } 
    
}

