// console.log("Royal Hi");
const cityName = document.getElementById("cityName");
const submit_button = document.getElementById("submit_button");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");
const datahide=document.querySelector(".middle_layer");

const royal = async (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerText = `Please write the name before search.`;
        datahide.classList.add("data_hide");
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=4c746cd680a0cf861372f6f6507b2f7a`
            let response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp_real.innerText = (arrdata[0].main.temp);
            temp_real.innerText=temp_real.innerText-273;
            temp_real.innerText=Math.round(temp_real.innerText * 100) / 100;
            // temp_status.innerText = arrdata[0].weather[0].main;

            const tempmood = arrdata[0].weather[0].main;
            if (tempmood == "Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa fa-sun yellow' style=' color:yellow'></i> ";

            }
            else if (tempmood == "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa fa-cloud-rain black' style= 'color:black'></i> ";


            }
            else if (tempmood == "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa fa-cloud ' style= 'color:white'></i> ";

            }
            else {
                temp_status.innerHTML = "<i class='fa-solid fa fa-sun yellow' style= 'color:yellow'></i> ";


            }
            datahide.classList.remove("data_hide");

            const getDate=()=>{
                let myDateArr=new Array[7];
                myDateArr[0]="Sunday";
                myDateArr[1]="Monday";
                myDateArr[2]="Tueday";
                myDateArr[3]="Wednesday";
                myDateArr[4]="Thrusday";
                myDateArr[5]="Friday";
                myDateArr[6]="Saturday";

                let currDate=new Date();
                let day=myDateArr[currDate.getDate()];

                return day;
                
            }
            const getCurrentTime=()=>{
                var months=[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "June",
                    "July",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ];

                var now =new Date();
                var hours=now.getHours();
                var min=now.getMinutes();

                var month=months[now.getMonth()+1];
                var date=now.getDate();

                var period="am";
                if(hours>11){
                    period="pm";
                    if(hours>12)hours-=12;
                }
                if(min<10){
                    min="0"+min;
                }

                return `${month} ${date} ${hours}:${min}${period}`
            }
        }
        catch {
            city_name.innerText = `Please enter the correct info.`;
            datahide.classList.add("data_hide");


        }
    }
}
submit_button.addEventListener("click", royal);