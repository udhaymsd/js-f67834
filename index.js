
const BASE_URL = "https://6289ef495da6ddfd5d5e0477.mockapi.io"

// CRUD Operations on Resources

// READ ( GET ) all, particular
// GET API
const getNationalize = async () => {
  const response = await fetch(`${BASE_URL}/nationalize`);
  const studentsData = await response.json();
  studentsData.forEach(element => {
    console.log(element.name);
    console.log(element.id);
    console.log(element.email);
  });
}

// getStudents();

// GET Specific Student Detail

const getBtn = document.getElementById("get-nationalize");
getBtn.addEventListener("click", () => {
  const inputVal = document.getElementById('text-inp').value;
  getStudent(inputVal);
});


// getStudent(3);


//
const createStudent = async (payload) => {

  const newResponse = await fetch(
    `${BASE_URL}/nationalize`,
    {
      method: "POST", // Has to be there when we make a call other than GET
      body: JSON.stringify( payload),
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    }
  );
  const NationalizeData = await newResponse.json();
  console.log(NationalizeData);
}

// createStudent(
//   { name: "Sammy", email: "sammy@gmail.com"}
// );

const createForm = document.getElementById("create-form");
createForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.target.elements;
  const data = {};

  // console.log(Array(elements));

  Array(...elements).forEach(element => {
    console.log(element);
    if(element.nodeName === "INPUT") {
      data[element.id] = element.value;
    }
  });
  createStudent(data);
});


// UPDATE ( PUT ) ---> To Update an entity
// PUT update a student
const updateStudent = async (id, newPayload) => {
  const updateResponse = await fetch(
    `${BASE_URL}/students/${id}`,
    {
      method: "PUT",response
    }
  )
  const updateStudentData = await updateResponse.json();
  console.log(updateStudentData);
}


// updateStudent("14", { name: "Ajith", email: "ajith@gmail.com" });


// DELETE ( DELETE ) ---> to remove an entity
// DELETE remove an student
const removeStudent = async (id) => {
  const removedResponse = await fetch(
    `${BASE_URL}/students/${id}`,
    {
      method: "DELETE",
    }
  );
  const removedStudentData = await removedResponse.json();
  console.log(removedStudentData);
}
