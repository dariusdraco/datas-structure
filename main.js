//let name_of_the_student = [];

function submit() {
    var name_1 = document.getElementById("name_of_student_1").value;
    var name_2 = document.getElementbyId("name_of_student_2").value;
    var name_3 = document.getElementbyId("name_of_student_3").value;
    var name_4 = document.getElementbyId("name_of_student_4").value;
    alert(name_4);
    name_of_the_student.push(name_1);
    name_of_the_student.push(name_2);
    name_of_the_student.push(name_3);
    name_of_the_student.push(name_4);

    console.log(name_of_the_student);
    alert(name_of_the_student);

    document.getElementById("display_name").innerHTML = name_of_the_student;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline_block";

}

function sorting() {
    name_of_the_student.sort();
    console.log(name_of_the_student);
    document.getElementById("display_name").innerHTML = name_of_the_student;
}

