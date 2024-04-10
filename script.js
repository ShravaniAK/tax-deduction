document.getElementById('tax-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const grossIncome = parseFloat(document.getElementById('gross-income').value);
    const extraIncome = parseFloat(document.getElementById('extra-income').value);
    const ageGroup = document.getElementById('age-group').value;
    const deductions = parseFloat(document.getElementById('deductions').value);
  
    let isValid = true;
  
    if (isNaN(grossIncome) || grossIncome < 0) {
      document.getElementById('gross-income').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('gross-income').classList.remove('is-invalid');
    }
  
    if (isNaN(extraIncome) || extraIncome < 0) {
      document.getElementById('extra-income').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('extra-income').classList.remove('is-invalid');
    }
  
    if (ageGroup === '') {
      document.getElementById('age-group').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('age-group').classList.remove('is-invalid');
    }
  
    if (isNaN(deductions) || deductions < 0) {
      document.getElementById('deductions').classList.add('is-invalid');
      isValid = false;
    } else {
      document.getElementById('deductions').classList.remove('is-invalid');
    }
  
    if (isValid) {
      const totalIncome = grossIncome + extraIncome;
      let taxRate = 0;
  
      if (ageGroup === 'under-40') {
        taxRate = 0.3;
      } else if (ageGroup === '40-60') {
        taxRate = 0.4;
      } else {
        taxRate = 0.1;
      }
  
      let taxAmount = 0;
      if (totalIncome - deductions > 800000) {
        taxAmount = (totalIncome - deductions - 800000) * taxRate;
      }
  
      const finalIncome = totalIncome - deductions - taxAmount;
      document.getElementById('final-income').textContent = finalIncome.toFixed(2);
      $('#tax-result-modal').modal('show');
    }
  });