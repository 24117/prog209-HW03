let customerList = [];

document.addEventListener("DOMContentLoaded", function (event) {
        // disable the lower part of the form until we have user input for all values
    document.getElementById("customerLi").disabled = true;
   
})


function formSubmitEvent() {
    let name = document.getElementById("custname").value;
    let city = document.getElementById("city").value;
    let paymentPreference = document.getElementById("paymentpreference").value;

    // we could do much better validation, but that's not the point of this example!
    if (name.length <= 2 ||  city.length <= 2) {
        alert("please fill in all fields");
    }

    console.log(name);
    console.log(city);
    console.log(paymentPreference);

    customerList.push(name + " " + city + " " + paymentPreference);

    console.log(customerList);
    console.log(customerList.length);

    clearList();
    displayList();

}

function clearList() {
    let myUl = document.getElementById('customerLi');
    myUl.innerHTML = "";
}

function displayList() {
    let myUl = document.createElement('ul');
    document.getElementById('customerLi').appendChild(myUl);
    for (let i = 0; i < customerList.length; i++) {
        let myLi = document.createElement('li');
        myUl.appendChild(myLi);
        myLi.innerHTML = customerList[i];
	};

    document.getElementById("customerLi").disabled = false;
}
