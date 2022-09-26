// se a hora estiver entre 06:00 - 12:00 bom dia. 12:00 - 18:00 boa tarde. se não, boa noite

let hour = 10;

if (hour > 6 && hora < 12) {
    console.log("bom dia");
} else if (hora > 12 && hora < 18) {
    console.log("boa tarde");
} else {
    console.log("boa noite");
}