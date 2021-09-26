 document.getElementById('submit').addEventListener('click', appointment);


    async function appointment(pincode, date){
        
        let pc = document.getElementById('pincode').value;
        let d = document.getElementById('date').value;
   
        fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pc}&date=${d}`)
        .then(response => response.json())
        .then(data => 
        {
            
            if(data.sessions.length == 0){
                document.getElementById('citystate').innerHTML = `No Drives Available..!<br> Please try for a different date.
`;
            }else{
                console.log(data);
                document.getElementById('userI').remove();
                document.getElementById('citystate').innerHTML = 
            `There are ${data.sessions.length} Upcoming Covid Vaccination Drives in ${data.sessions[0].district_name}, ${data.sessions[0].state_name} | <a href="https://ikshanamit.000webhostapp.com/covid/"><button class="button">Go Back</button></a> 
            `;            
            
            let ou = "";
            for(let i = 0 ; i < data.sessions.length; i++){
                ou += `
                <div class = "placeinfo">
                    <strong><b>Centre Name and ID:</b> </strong> ${data.sessions[i].name}, ${data.sessions[i].center_id} <br>
                    <strong><b>Address:</b> </strong>${data.sessions[i].address} <br>
                    <strong><b>Slots Available:</b> </strong> ${data.sessions[i].available_capacity} <br>
                    <strong><b>Minimum Age:</b> </strong>${data.sessions[i].min_age_limit} <br>
                    <strong><b>Vaccine Available:</b> </strong>${data.sessions[i].vaccine} <br>
                    <strong><b>Fee: </b></strong> ₹${data.sessions[i].fee} <br>
                    <br><strong>Slots Timings Available -</strong> <br>${data.sessions[i].slots} <br>
                </div>
                `;
            }

            document.getElementById('info').innerHTML = ou;

            }
   
        });
        


    }

