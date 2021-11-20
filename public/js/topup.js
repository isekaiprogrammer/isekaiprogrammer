const inputSaldo = document.getElementById("inputSaldo");
const Saldo = document.getElementById("Saldo");
let totalBalance = 0;
const tp = [];
const btnTopup = document.getElementById("btnTopup");

const formatter= new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2,

  });

btnTopup.addEventListener('click', () => {

    //check input from user 
    if (isNaN(inputSaldo.value)){
        alert("Please enter a number");
        return inputSaldo.value = '';
    } else {
        if (inputSaldo.value < 1000 || inputSaldo.value > 10000000){
            alert("You can only top-up beetween Rp.1000 and Rp 10000000")
            return inputSaldo.value = '';
        } else {
            tp.push(Number(inputSaldo.value));
            totalBalance += (Number(inputSaldo.value));

        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("Saldo").innerHTML = totalBalanceFormatted;

        console.log("Rp." + inputSaldo.value);
        return inputSaldo.value = '';
    }
}
});

