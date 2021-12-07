import {
    Pokemon,
    Pokemon_ennemi
} from "./module/class.js";


let pika = new Pokemon("pikatchu", 70, 100, 150, "Électrik")

let dracaufeu = new Pokemon_ennemi("dracaufeu", 79, 150, 100, "feu")


function combat() {
    let joueur1;
    let joueur2;
    while (pika.hp > 0 && dracaufeu.hp > 0) {
        joueur1 = prompt(" choisissez une atk parmis 1/fatal_foudre, 2/queue_de_fer, 3/quick_attack; contre " + dracaufeu.nom)
        joueur2 = Math.floor(Math.random() * 4 + 1)
        if (pika.vitesse > dracaufeu.vitesse) {
            switch (joueur1) {
                case "1":
                    pika.fatal_foudre(dracaufeu)
                    alert("il reste " + dracaufeu.hp + " hp a " + dracaufeu.nom)
                    break;
                case "2":
                    pika.queue_de_fer(dracaufeu)
                    alert("il reste " + dracaufeu.hp + " hp a " + dracaufeu.nom)
                    break;
                case "3":
                    pika.quick_attack(dracaufeu)
                    alert("il reste " + dracaufeu.hp + " hp a " + dracaufeu.nom)
                    break;
                case "4":
                    pika.bsimilah_boum_boum(dracaufeu)
                    alert("il reste " + dracaufeu.hp + " hp a " + dracaufeu.nom)
                    break;
            }
            switch (joueur2) {
                case 1:
                    dracaufeu.grosse_tarte(pika)
                    alert("il reste " + pika.hp + " hp a " + pika.nom)
                    break;
                case 2:
                    dracaufeu.regard_qui_tue(pika)
                    alert("il reste " + pika.hp + " hp a " + pika.nom)
                    break;
                case 3:
                    dracaufeu.craque_nuque(pika)
                    alert("il reste " + pika.hp + " hp a " + pika.nom)
                    break;
                case 4:
                    dracaufeu.grosse_tarte_dans_sa_gueule(pika)
                    alert("il reste " + pika.hp + " hp a " + pika.nom)
                    break;
            }
            
            if(pika.hp <= 0 ){
                alert("dommage ta pardu")
            }
        }
        
    }
    
    
}



combat()