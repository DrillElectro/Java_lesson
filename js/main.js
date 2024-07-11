//document.write("Привет");
// console.log("Привет");//в консоль
// console.info("Привет");
// console.error("Привет");
// console.warn("Привет!");


// const num = 5;

// console.log("Переменная " + num);

// var number;
// number = false;

// var num_1 = 5;
// var num_2 = "5";

// console.log(num_1 + num_2);

// var str_1 = Number("12");
// var str_2 = Number("2");

// console.log("Результат " + (str_1 + str_2));

// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.min(3, 5, 0));


//массивы
// var arr = [2, 11, "tr", -7, 0.4];
// console.log(arr.length);

// var matrix = [[0,2], ["stroka", 0.5], [-4, 555]];
// matrix[1][0] = 90;
// console.log(matrix);

//цыклы
// for (let index = 0; index < 10; index++) {
//     console.log(index);    
// }

// var j = 1000;

// while (j >= 100) {
//     console.log(j);
//     j -= 100;
// }

// var x = 0;
// do {
//     console.log(x);
//     x++;
// } while (x < 10) { //проверяется после выполнеия инструкции
    
// }

// for (var i = 10; i <= 20; i++) {
//     if (i % 2 == 0) 
//         continue;

//         console.log(i);        
// }


//Всплывающие окна (alert, prompt, confirm)
// alert("АУФ!");

// var date = confirm("AUF?");
// if(date == true) {
//     console.log("ok")
// }
// else console.log("ne ok")

// var date = prompt("Сколько ауф?", 20);

// console.log(date)


var pers = null;
if (confirm("АУФ?")) {
    pers = prompt("Сколько ауф?");
    alert("ауфов " + pers);    
}else ("Не ауф");