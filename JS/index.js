window.jsPDF = window.jspdf.jsPDF;
var doc = jsPDF();

// Adding Subject Fild
var addSubjectBtn = document.getElementById("add-subjects");
addSubjectBtn.onclick = function() {
    var div = document.createElement("div");
    div.id = "horizontal";

    //Subject input
    var subject = document.createElement("input");
    subject.name = "subject";
    subject.placeholder ="Subect Name";
    subject.type = "text";
    subject.className = "subjects";

    //Full Marks
    var fullmarks = document.createElement("input");
    fullmarks.name = "fullmarks";
    fullmarks.placeholder = "Full Marks";
    fullmarks.type = "number";
    fullmarks.value = 100;
    fullmarks.className = "fullmarks"

    // Obtain Marks
    var obtainmarks = document.createElement("input");
    obtainmarks.name = "obtainmarks";
    obtainmarks.placeholder = "Obtain Marks";
    obtainmarks.type = "number";
    obtainmarks.className = "obtained-marks";

    //Delete Button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='fa fa-trash'></i>";
    deleteButton.className = "delete-button";
    deleteButton.type = "button";

    // Adding input in div tag....
    div.append(subject);
    div.append(fullmarks);
    div.append(obtainmarks);
    div.append(deleteButton);

    // Adding div tag to form
    var dynamicArea = document.getElementById("dynamic-area");
    dynamicArea.append(div);


     // Creating Subject tr
     var subjectTr = document.createElement("tr");
     subjectTr.style.textAlign = "center";

     var subjectTd = document.createElement("td");
     subjectTd.colSpan = 3;
     //subjectTd.innerHTML = "English";

     var fullmarksTd = document.createElement("td");
     fullmarksTd.innerHTML = 100;

     var obtainedTd = document.createElement("td");
     obtainedTd.colSpan = 2;

    subjectTr.append(subjectTd);
    subjectTr.append(fullmarksTd);
    subjectTr.append(obtainedTd);

    var subjectBody = document.getElementById("subject-body");
    subjectBody.append(subjectTr);

    // Live preview subject and marks entery
    subject.oninput = function() {
        subjectTd.innerHTML = this.value;
    }

    // Live preview full marks entery
    fullmarks.oninput = function() {
        fullmarksTd.innerHTML = this.value;
    }

    //Live preview obtain marks entery
    obtainmarks.oninput = function() 
    {
        var totalMarks = 0;
        obtainedTd.innerHTML = this.value;

        //Calculate Total Marks 
        var obm = document.getElementsByClassName("obtained-marks");
        for(var i=0; i<obm.length; i++)
        {
            var num = Number(obm[i].value);
            totalMarks =totalMarks+num;
        }
        
        var totalMarksTd = document.getElementById("total-marks");
        totalMarksTd.innerHTML = totalMarks;

        //Calculate Percentage
        var noOfSubject = obm.length;
        var percentage = (totalMarks/noOfSubject);
        var percentageTd = document.getElementById("percentage");
        percentageTd.innerHTML = percentage.toFixed(2)+"%";

         // Finding Grade...
        var grade = '';
        if(percentage >= 90) grade = 'A+';

        else if(percentage >= 80) grade = 'A';

        else if(percentage >= 70) grade = 'B+';

        else if(percentage >= 60) grade = 'B';

        else if(percentage >= 50) grade = 'C';

        else if(percentage >= 40) grade = 'D';

        else if(percentage >= 35) grade = 'E';

        else grade = 'Fail';


        var gradeTd = document.getElementById("grade");
        gradeTd.innerHTML = grade;
    }
    
    // Deleting Row
    deleteButton.onclick = function() {
        div.remove();
        subjectTr.remove();
    }

   
    

}

// Upload And Preview student image...
var studentPicInput = document.getElementById("student-pic-input");
studentPicInput.onchange = function() {
    var file = this.files[0];
    var url = URL.createObjectURL(file);
    var studentPic = document.getElementById("student-pic");
    studentPic.src = url;
}

// Upload And Preview school logo image...
var schoolLogoInput = document.getElementById("school-logo-input");
schoolLogoInput.onchange = function() {
    var file = this.files[0];
    var url = URL.createObjectURL(file);
    var schoolLogo = document.getElementById("school-logo");
    schoolLogo.src = url;

}

//Live Preview School name
var schoolNameInput = document.getElementById("school-name-input");
schoolNameInput.oninput = function(){
    var schoolName = document.getElementById("school-name");
    schoolName.innerHTML = this.value;
}

//Live Preview School Tag Line name
var tagLine = document.getElementById("tagline");
tagLine.oninput = function() {
    var taglineText = document.getElementById("tagline-text");
    taglineText.innerHTML = this.value;
}

// Candiate Name Live Preview
var candiateNameInput = document.getElementById("candiate-name-input");
candiateNameInput.oninput = function() {
    var candiateName = document.getElementById("candiate-name");
    candiateName.innerHTML = this.value;
}

// Fathers Name Live Preview
var fathersNameInput = document.getElementById("fathers-name-input");
fathersNameInput.oninput = function() {
    var fatherName = document.getElementById("fathers-name");
    fatherName.innerHTML = this.value;
}

// DOB Live Preview
var dobInput = document.getElementById("dob-input");
dobInput.onchange = function() {
var dob = document.getElementById("dob");
dob.innerHTML = this.value;
}

 // Gender Live Preview
 var chooseGender = document.getElementById("choose-gender");
 chooseGender.onchange = function() {
    var gender = document.getElementById("gender");
    gender.innerHTML = this.value;
 }

 // Class Live Preview
 var classInput = document.getElementById("class-input");
 classInput.onchange = function() {
    var classText = document.getElementById("class");
    classText.innerHTML = this.value;
 }

 // Roll Number Live Preview
 var rollInput = document.getElementById("roll-input");
 rollInput.onchange = function() {
    var roll = document.getElementById("roll");
    roll.innerHTML = this .value;
 }




//Getting text width
var findTextWidth = function(text, fontSize) {
    var textWidth = doc.getTextDimensions(text,{
        fontSize: fontSize
    }).w;
    return textWidth;
}

 //Export to PDF 
 var form = document.getElementById("marksheet-form");
 form.onsubmit = function(e) {
    e.preventDefault();
    var elements = form.elements;
    var schoolLogo = elements.schoolLogo.files[0];
    var schoolLogoUrl = URL.createObjectURL(schoolLogo);
    var schoolName = elements.schoolName.value;
    var tagline = elements.tagline.value;
    // var candiateImage = elements.candiateImage.files[0];
    // var candiateImageUrl = URL.createObjectURL(candiateImage);
    var candiateName = elements.candiateName.value;
    var fathersName = elements.fatherName.value;
    var dob = elements.dob.value;
     var gender = elements.gender.value;
     var studentClass = elements.class.value;
     var roll = elements.roll.value;

    //Getting subject values
    var subjects = document.getElementsByClassName("subjects");
    var fullmarks = document.getElementsByClassName("fullmarks");
    var obtainedMarks = document.getElementsByClassName("obtained-marks");

    var subjectsBody = [];

    for(var i=0; i<subjects.length; i++)
    {
        var subject = subjects[i].value;
        var fullmark = fullmarks[i].value;
        var obtainedMark = obtainedMarks[i].value;
        subjectsBody.push([subject,fullmark,obtainedMark]);
    }

    // Generate PDF

    //Setting Schiool Logo
    var schoolLogoWidth = 30;
    var pageWidth = doc.internal.pageSize.width;
    var schoolLogoLeftMargin = (pageWidth - schoolLogoWidth)/2;
    doc.addImage(schoolLogoUrl, 'PNG', schoolLogoLeftMargin, 5, schoolLogoWidth, 30);
   

    //Setting School name
    var schoolNameFontSize = 30;
    var schoolNameWidth = findTextWidth(schoolName,schoolNameFontSize);
    var schoolNameLeftMargin = (pageWidth - schoolNameWidth)/2;
    doc.setFontSize(schoolNameFontSize);
    doc.text(schoolName,schoolNameLeftMargin, 45);
   
   //Setting Tagline
   var taglineFontSize = 14;
   var taglineWidth = findTextWidth(tagline,taglineFontSize);
   var taglineLeftMargin = (pageWidth - taglineWidth)/2;
   doc.setFontSize(taglineFontSize);
   doc.text(tagline,taglineLeftMargin,55);
   
   //Setting Student Table
   doc.autoTable({
    margin: {top: 70},
    body: [
       [
        {content: 'Student`s Name',styles: {fontStyle: 'bold',fillColor: '#2E80BA', textColor: 'white'}},
        candiateName,
        {content: 'Father`s Name',styles: {fontStyle: 'bold',fillColor: '#2E80BA', textColor: 'white'}},
        fathersName
       ],
       [
        {content: 'DOB',styles: {fontStyle: 'bold'}},
        dob,
        {content: 'Gender',styles: {fontStyle: 'bold'}},
        gender
       ],
       [
        {content: 'Class',styles: {fontStyle: 'bold'}},
        studentClass,
        {content: 'Roll Number',styles: {fontStyle: 'bold'}},
        roll
       ]
    ]
   });

   //Setting Subject Table
    doc.autoTable({
        headStyle:{fillColor: '#2E80BA', textColor: 'white'},
        head: [['Subjects', 'Fullmarks', 'Obtained Marks']],
        body: subjectsBody
    })

    //Total Marks Table
    var total = 0;
    for(var i=0; i<obtainedMarks.length; i++){
        total = total + Number(obtainedMarks[i].value);
    }

    var percent = (total/obtainedMarks.length).toFixed(2);

    // Finding Grade...
    var grade = '';
    if(percent >= 90) grade = 'A+';

    else if(percent >= 80) grade = 'A';

    else if(percent >= 70) grade = 'B+';

    else if(percent >= 60) grade = 'B';

    else if(percent >= 50) grade = 'C';

    else if(percent >= 40) grade = 'D';

    else if(percent >= 35) grade = 'E';

    else grade = 'F';


    doc.autoTable({
        head: [['Grade', 'Percentage', 'Total Marks']],
        body: [[grade , percent+'%', total]]
    })
   
   //Download PDF
    doc.save("marksheet.pdf");

 }