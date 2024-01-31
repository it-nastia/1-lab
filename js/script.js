document.addEventListener('DOMContentLoaded', function () {

    var numberOfHoursInput = document.getElementById('numberOfHours');
    var hourlyRateInput = document.getElementById('hourlyRate');
    var resultParagraph = document.querySelector('.form__result');

    document.querySelector('.calculation__form').addEventListener('submit', function (event) {

        event.preventDefault();

        var numberOfHours = parseFloat(numberOfHoursInput.value);
        var hourlyRate = parseFloat(hourlyRateInput.value);

        if (isNaN(numberOfHours) || isNaN(hourlyRate) || numberOfHours < 0 || hourlyRate < 0) {
            resultParagraph.textContent = 'Будь ласка, введіть коректні значення.';
        } else {
            var totalPayment = numberOfHours * hourlyRate;
            resultParagraph.textContent = 'Оплата за работу: ' + totalPayment.toFixed(2);
        }
    });
});
