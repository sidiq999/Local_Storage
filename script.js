function submitForm() {
    var firstName = document.getElementById("inputFirstName").value;
    var lastName = document.getElementById("inputLastName").value;
    var id = Math.random();

    var new_data = [
        {
            Id: id,
            firstNameValue: firstName,
            lastNameValue: lastName,
        }

    ];

    if(localStorage.getItem("data") == null)
    {
        localStorage.setItem("data", "[]");
    }

    var old_data = JSON.parse(localStorage.getItem("data"));

    old_data.push(new_data);

    localStorage.setItem("data",JSON.stringify(old_data));

    var datas = JSON.parse(localStorage.getItem("data"));

    displayData(datas);
   
}

function displayData(values)
{
    let placeholder = document.querySelector("#data-output");
    let table_data = "";

    values.map(data => {
        table_data += `
        <tr>
           <td>${data[0].firstNameValue}</td>
           <td>${data[0].lastNameValue}</td>
           <td><button onclick="Delete(${data[0].Id})" class="btn btn-danger btn-sm">Delete</button></td>
        </tr>
   `;
    });

    placeholder.innerHTML = table_data;
}


function Delete(id)
{
    var data = JSON.parse(localStorage.getItem("data"));

    var filterData = data.filter(d => d[0].Id != id);
    
    localStorage.setItem("data",JSON.stringify(filterData));

    displayData(filterData);
}