var app = {
    ordenar(arrayParaOrdenar, idColumna, orden, tipoDato, pagina) {
        var arrayRes = [];
        var total = arrayParaOrdenar.length;
        if (idColumna != '') {
            arrayParaOrdenar = arrayParaOrdenar.sort((a, b) => {
                var ret = 0;
                if (tipoDato == 'date' && orden == 'asc') ret = new Date(a[idColumna]) - new Date(b[idColumna]);
                if (tipoDato == 'date' && orden == 'desc') ret = new Date(b[idColumna]) - new Date(a[idColumna]);

                if ((tipoDato == 'string' || tipoDato == 'int') && orden == 'asc') {
                    if (a[idColumna] > b[idColumna]) {
                        ret = -1;
                    } else {
                        ret = 1;
                    }
                }
                if ((tipoDato == 'string' || tipoDato == 'int') && orden == 'desc') {
                    if (a[idColumna] < b[idColumna]) {
                        ret = -1;
                    } else {
                        ret = 1;
                    }
                }

                return ret;
            })
        }

        var final = (pagina * 10);
        var inicio = final - 10;
        console.log("inicio" + inicio)
        console.log("final" + final)
        arrayParaOrdenar.forEach(function (alerta, indice) {
            if (indice >= inicio && indice <= final) {
                arrayRes.push(alerta);
            }
        });
        console.log("total" + total)
        return { listado: arrayRes, total: total };
    }
};

module.exports = app;
