  var name = prompt("Прежде чем продолжить, введите ваше имя:");
        alert("Добро пожаловать на сайт, " + name + "!");
        if (name) {
            var knowsRasul = prompt("Вы знаете Расула? (да/нет)");
            if (knowsRasul && knowsRasul.toLowerCase() === "да") {
            knowsRasul = true;
            } else {
            knowsRasul = false;
            alert("Ай ай ай, как не стыдно!");
            // "Долго грузится" — эмулируем бесконечную загрузку
            document.body.innerHTML = "<h1>Загрузка...</h1>";
            while (true) {} // бесконечный цикл, страница не откроется
            }
        } else {
            alert("Вы не ввели имя, но за то что знаете Расула, прощаю!");
        }
        var knowsRasul = prompt("Вы знаете Расула? (да/нет)");
        if (knowsRasul && knowsRasul.toLowerCase() === "да") {
            knowsRasul = true;
        } else {
            knowsRasul = false;
            alert("Ай ай ай, как не стыдно!");
        }