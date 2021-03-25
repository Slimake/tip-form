(function() {
    const bill = document.getElementById("input-bill");
    const users = document.getElementById("input-users");
    const inputService = document.getElementById("input-service");
    const submitBtn = document.querySelector(".submitBtn");
    let serviceRating;
    
    // set innerHTML of select element
    inputService.innerHTML += "<option value='20'>Great - 20%</option><option value='10'>Good - 10%</option><option value='2'>Bad - 2%</option>";
    
    // select input event listener
    inputService.addEventListener("change", function(e) {
        console.log(e.target.value);
        serviceRating = e.target.value / 100;
    });
    
    // submit button event listener
    submitBtn.addEventListener("click", function(e) {
        const results = document.querySelector(".results");
        const feedback = document.querySelector(".feedback");
        const loader = document.querySelector(".loader");
        const tipAmount = document.getElementById("tip-amount");
        const totalAmount = document.getElementById("total-amount");
        const personAmount = document.getElementById("person-amount");
        
        e.preventDefault();
        
        // Adding/Removing feedback innerHTML text
        feedback.innerHTML = "";
        if (bill.value === "") {
            feedback.innerHTML = "<p>Bill Amount Cannot Be Blank</p>";
            feedback.classList.add("showItem");
        } else {
            feedback.innerHTML = "";
            feedback.classList.remove("showItem");
        }
        if (users.value == "" || users.value <= 0) {
            feedback.innerHTML += "<p>Number Of Users Must Be Greater Than Zero</p>";
            feedback.classList.add("showItem");
        } else  {
            feedback.innerHTML = "";
            feedback.classList.remove("showItem");
        }
        if (inputService.value == 0) {
            feedback.innerHTML += "<p>You Must Select A Service</p>";
            feedback.classList.add("showItem");
        } else {
            feedback.innerHTML = "";
            feedback.classList.remove("showItem");
        }
        
        // runs if bill.value, users.value are true and inputService.value is any other value in the select field
        if ( bill.value && users.value && !(inputService.value == 0) ) {
            const tip = serviceRating * bill.value;
            tipAmount.textContent = tip.toFixed(2);
            
            const total = Number(tipAmount.textContent) + Number(bill.value);
            totalAmount.textContent = total.toFixed(2);
            
            const person = totalAmount.textContent / users.value;
            personAmount.textContent = person.toFixed(2);
            
            loader.classList.add("showItem");
            setTimeout(function() {
                loader.classList.remove("showItem");
            }, 1500);

            results.classList.remove("showItem");
            setTimeout(function() {
                results.classList.add("showItem");
            }, 1500);
            
        } else {
            results.classList.remove("showItem");
        }
    });
})()