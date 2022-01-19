// sociālais nodoklis
function usersSocialTax() {
    var bruttoSalary = document.getElementById("brutto_monthly_salary").value;
    const sociaContributionRate = 0.105;
    var socialTaxCalculation = bruttoSalary * sociaContributionRate;
    return socialTaxCalculation;

}

// Diferencētais neapliekamais minimums
function diffNonTaxableMinimum() {
    var bruttoSalary = document.getElementById("brutto_monthly_salary").value;
    if (bruttoSalary <= 500 && bruttoSalary > 0) {
        var diffNonTaxableMinimumCalc = 350;
    } else if (bruttoSalary > 500 && bruttoSalary <= 1800) {
        var diffNonTaxableMinimumCalc = 0.006;
    } else {
        var diffNonTaxableMinimumCalc = 0;
    }
    return diffNonTaxableMinimumCalc;
}


// Iedzīvotāju ienākuma nodoklis, ja ir/nav ieneigta nodokļu grāmatiņa
function userspersonalIncomeTax() {
    var bruttoSalary = document.getElementById("brutto_monthly_salary").value;
    var checkBox = document.getElementById("have_payroll_tax_record_book1");
    var subjectPersonalIncomeTaxSum = bruttoSalary - usersSocialTax() - diffNonTaxableMinimum();
    if (checkBox.checked == true && bruttoSalary <= 1667) {
        var subjectPersonalIncomeTax = subjectPersonalIncomeTaxSum * 0.2;
    } else if (checkBox.checked == true && 1667 < bruttoSalary <= 6508) {
        var subjectPersonalIncomeTax = subjectPersonalIncomeTaxSum * 0.23;
    } else if (checkBox.checked == true && bruttoSalary > 6508) {
        var subjectPersonalIncomeTax = subjectPersonalIncomeTaxSum * 0.31;
    } else if (checkBox.checked == false && bruttoSalary <= 6508) {
        var subjectPersonalIncomeTax = subjectPersonalIncomeTaxSum * 0.23;
    } else if (checkBox.checked == false && bruttoSalary > 6508) {
        var subjectPersonalIncomeTax = subjectPersonalIncomeTaxSum * 0.31;
    }
    return subjectPersonalIncomeTax;
}

// Neto alga

function netCalc() {
    var bruttoSalary = document.getElementById("brutto_monthly_salary").value;
    if (bruttoSalary == "") {
        alert("Ievadi bruto algu!");
        return false;
    }
    var netSalary = bruttoSalary - usersSocialTax() - userspersonalIncomeTax();
    document.getElementById("net_monthly_salary").value = netSalary.toFixed(2);
    console.log(netSalary);
}



    // function netCalc() {
    //     var bruttoSalary = document.getElementById("brutto_monthly_salary").value;
    //     if (bruttoSalary == ""){
    //         alert("Ievadi bruto algu!");
    //         return false;
    //     }
    //     const sociaContributionRate = 0.105;
    //     var socialTaxCalculation = bruttoSalary * sociaContributionRate;
    //     var netSalary = bruttoSalary - socialTaxCalculation;
    //     document.getElementById("net_monthly_salary").value = netSalary.toFixed(2);
    //     console.log(netSalary);
    // }
