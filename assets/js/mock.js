
var table = ('#student');

async function mock(){
    let tbody = document.getElementById('tbody')
    console.log("In");
    let response = await fetch('https://638f5b8c4ddca317d7f644f9.mockapi.io/form_pg')
    let result = await (response.json())
    console.log(result);

    
        console.log("In1"); 
        let no = 1;
        result.forEach(element => {
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerHTML = no;
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = element.name
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = element.phno
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = element.email
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = element.id
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = element.tenth
            tr.appendChild(td)

            td = document.createElement('td')
            td.innerHTML = element.twelve
            tr.appendChild(td)
            
            td = document.createElement('td')
            td.innerHTML = `<div>
            <button type = "submit" style="margin-right: 20px" onclick="sendmail('${element.email}','${element.id}')" ><i class="fa fa-check" style="color: rgb(8, 250, 8);"></i></button><button style="margin-right: 20px" onclick="delete_id('${element.id}')" ><i class="fa fa-times" style="color: red;"></i></button>
            </div>`

            tr.appendChild(td)
            tbody.append(tr)
            no = no+1
        });
    }



mock()

async function sendmail(email,id){
    response = await fetch('/admin/sendMail/'+email)
    console.log(id);
    let result = await(response.json())
    console.log(result);
    
}

async function delete_id(id){
    response = await fetch('/delete/'+id)
    console.log(result);
    
}
