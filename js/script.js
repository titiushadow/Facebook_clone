const selectDia = document.getElementById('dia');
    for (let dia = 1; dia <= 31; dia++) {
        const option = document.createElement('option');
        option.value = dia;
        option.text = dia;
        selectDia.add(option);
    }

const selectMes = document.getElementById('mes');
const meses = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul',
    'Ago', 'Set', 'Out', 'Nov', 'Dez'
];

meses.forEach((mes, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.text = mes;
    selectMes.add(option);
});

const selectAno = document.getElementById('ano');
    for (let ano = 2023; ano >= 2000; ano--) {
        const option = document.createElement('option');
        option.value = ano;
        option.text = ano;
        selectAno.add(option);
    }