const validateId = ()=>{
   var id = document.getElementById("id").value;
   console.log(id);
   if(id<=0){
    $("#idd").val="id must be positive";
    return false
   }
   $("#idd").val="";
   return true;
}
const validateName = ()=>{
    var name = document.getElementById("name").value;
    console.log(name);
    if(name.length<=4){
    document.getElementById("ne").innerHTML="name must be contain at least 5 char's";
     return false
    }
    document.getElementById("ne").innerHTML="";
    return true;
 }
 const validateRadio = ()=>{
    var genderarr = document.getElementsByName('gender');
  for (var i=0;i<genderarr.length;i++){
    if(genderarr[i].checked) {
        $('gr').val="";
        return true;}
   }
   $("#gr").html("gender required");
   return false;
 }

 const validatePopUpBox = ()=>{
    if(document.getElementById('city').selectedIndex!=0)
  {
    $("#cy").html("");
    return true;
  }
  
  $("#cy").html("city required");
   return false;
 }
 const validateCheckBox = ()=>{
    var genderarr = document.getElementsByName('skills');
    var count=0;
  for (var i=0;i<genderarr.length;i++){
    
    if(genderarr[i].checked) {
        count++;
        if(count>=1){
            $("#ss").html("");
            return true;
        }
       }
   }
   
   $("#ss").html("At least 1 skills required");
   return false;
 }

 const validateAge=()=>{
    var date=$("#dob").val();
    var today = new Date();
    var birthDate = new Date(date);
    // var age = today.getFullYear() - birthDate.getFullYear();
    // if(age<20){
    //     $("#db").html("age should be greater then 19");
    //     return false;
    // }
    $("#db").html("");
    return true;

 }
const LOCAL_STORAGE_EMPLOYEE="emparr";
const empArr = [];
 //const [empArr, setEmpArr] = useState([])
 const addEmployee=()=>{
   console.log("in add f'n");
   const emp = {id: document.getElementById("id").value,name:document.getElementById("name").value,dob:$("#dob").val(),gender:$("input[name='gender']:checked").val(),
   city:document.getElementById("city").value,skills:getSelectedSkills()}
   console.log("new object is : ",emp);
//    let arr = [...empArr,{...emp}]
//    setEmpArr(arr);
   empArr.push(emp);
   console.log("arry is ",empArr)
     localStorage.setItem(LOCAL_STORAGE_EMPLOYEE,JSON.stringify(empArr));
   
     clearForm();
 }
 const getSelectedSkills = () => {
    const skillCheckboxes = document.getElementsByName("skills");
    const selectedSkills = [];

    skillCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedSkills.push(checkbox.value);
        }
    });

    return selectedSkills;
}
const clearForm = () => {
    $("#id").val("");
    $("#name").val("");
    $("#dob").val("");
    $("input[name='gender']").prop("checked", false);
    $("#city").val("select any one");
    $("input[name='skills']").prop("checked", false);
}
 window.onload = function () {
    if (localStorage.getItem(LOCAL_STORAGE_EMPLOYEE)) {
        var emps = JSON.parse(localStorage.getItem(LOCAL_STORAGE_EMPLOYEE));
        empArr.push(...emps); // Remove the square brackets around emps
        console.log(empArr);
        displayList();
    }
};

     

 const displayList = ()=>{
    var str = "<table>"

       str+= " <th>Id</th><th>Name</th><th>Dob</th><th>Gender</th><th>city</th><th>Language</th>"

       for(var cnd of empArr){
        str += `"<tr><td>${cnd.id}</td><td>${cnd.name}</td><td>${cnd.dob}</td><td>${cnd.gender}</td><td>${cnd.city}</td><td>${cnd.skills}</td><td><input type='button' value='Delete' onclick='Delete(${cnd.id})'/></td></tr>"`
       }
       str+="</table>"
       document.getElementById("list").innerHTML = str;
 }

 const Delete = (id)=>{

    console.log("in delete",id);
    let index= empArr.findIndex((x)=>{console.log(x.id==id); return x.id == id});
    console.log(index);
    empArr.splice(index,1);
   // empArr.map((x)=>x.id!==new.id?x:new);
    console.log(empArr);
    localStorage.setItem(LOCAL_STORAGE_EMPLOYEE,JSON.stringify(empArr));
    displayList();
 }

