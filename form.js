document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const tableBody = document.querySelector('#dataTable tbody');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const address = document.getElementById('address').value;
      const pincode = document.getElementById('pincode').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const food = document.getElementById('food').value;
      const state = document.getElementById('state').value;
      const country = document.getElementById('country').value;
  
      const newRow = tableBody.insertRow();
      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${food}</td>
        <td>${state}</td>
        <td>${country}</td>
      `;
  
      form.reset();
    });
  });
  