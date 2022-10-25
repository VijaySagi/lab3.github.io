let bill;
let rangeCalculator;
let tipPercent;
let tipAmount;
let totalBillWithTip;
let tipPercentage = 0;

window.addEventListener('change',function(){

    bill = document.getElementById("bill");
    range = document.getElementById("range");
    tipPercent = document.getElementById("tipPercent");
    tipAmount = document.getElementById("tipAmount");
    totalBillWithTip = document.getElementById("totalBillWithTip");

    function getData(){

        bill = parseInt(bill.value);
        tipPercentage = range.value;
        tipPercent = range.value / 100;
        tipAmount = tipPercent * bill;
        tipAmount.toFixed(2);
        totalBillWithTip = bill + tipAmount;
        totalBillWithTip = totalBillWithTip.toFixed(2);

        validateBill();
        document.getElementById("tipPercent").value = tipPercentage;
        document.getElementById("tipAmount").value = tipAmount;
        document.getElementById("totalBillWithTip").value = totalBillWithTip;

        console.log("Bill Total" + bill);
        console.log("Tip percent Display" + tipPercentage);
        console.log("Tip Percent " + tipPercent);
        console.log("Tip Amount " + tipAmount);
        console.log("Total BIll With Tip " + totalBillWithTip);

        validateData();
        }

        function validateData(){
            if(bill.value = NaN && bill.value == null){
                alert("Bill Amount cannot be null");
                console.log("Worked here 2");
            }

           //getData();
        }

        getData();
        
    });

    function validateBill(){
        if(isNaN(bill)){
            alert("Please enter valid input");
            
        }
        if(bill == 0){
            alert("Bill Value must not be 0");
        }
    }