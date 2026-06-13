// 🕒 CLOCK (HOME PAGE)
setInterval(function () {
  let now = new Date();
  let time = now.toLocaleTimeString();
  let clock = document.getElementById("clock");
  if (clock) clock.innerHTML = time;
}, 1000);


// 📥 LOAD MEDICINES (HOME PAGE)
db.ref("medicine_schedule").on("value", function(snapshot){

  let data = snapshot.val();
  let output = "";

  let container = document.getElementById("medicine");

  if (!data) {
    if (container) container.innerHTML = "No medicines added";
    return;
  }

  for (let key in data){

    let med = data[key];

    let color = (med.status === "taken") ? "green" : "red";

    output += `
      <div class="med-card">
        <div class="med-name">${med.name}</div>
        <div class="med-time">Time: ${med.time}</div>
        <div class="med-info">${med.slot} (${med.meal})</div>
        <div class="med-status" style="color:${color}">
          Status: ${med.status}
        </div>

        <button class="btn" onclick="markTaken('${key}')">
          Mark as Taken
        </button>
      </div>
    `;
  }

  if (container) container.innerHTML = output;

});


// ➕ ADD MEDICINE (SCHEDULE PAGE)
function addMedicine() {

  let name = document.getElementById("name").value;
  let time = document.getElementById("time").value;
  let meal = document.getElementById("meal").value;
  let slot = document.getElementById("slot").value;

  if (name === "" || time === "") {
    alert("Please fill all fields");
    return;
  }

  db.ref("medicine_schedule").push({
    name: name,
    time: time,
    meal: meal,
    slot: slot,
    status: "pending"
  });

  alert("Medicine Added Successfully");
}


// ✅ MARK AS TAKEN
function markTaken(id){

  db.ref("medicine_schedule/" + id).update({
    status: "taken"
  });

  alert("Medicine marked as taken");
}


// 🚨 ALERT PAGE (SHOW FIRST PENDING MEDICINE)
db.ref("medicine_schedule").on("value", function(snapshot){

  let data = snapshot.val();
  let alertBox = document.getElementById("alertMed");

  if (!data || !alertBox) return;

  let found = false;

  for (let key in data){

    let med = data[key];

    if (med.status === "pending"){
      alertBox.innerHTML = med.name + " (" + med.time + ")";
      found = true;
      break;
    }
  }

  if (!found){
    alertBox.innerHTML = "No pending medicines";
  }

});


// 👨‍⚕️ CAREGIVER PAGE (SHOW STATUS LIST)
db.ref("medicine_schedule").on("value", function(snapshot){

  let data = snapshot.val();
  let output = "";

  let caregiver = document.getElementById("caregiverData");

  if (!data || !caregiver) return;

  for (let key in data){

    let med = data[key];

    let color = (med.status === "taken") ? "green" : "red";

    output += `
      <div class="med-card">
        ${med.name} - 
        <span style="color:${color}">
          ${med.status}
        </span>
      </div>
    `;
  }

  caregiver.innerHTML = output;

});