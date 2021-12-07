export class Pokemon {
    constructor(nom, lvl, hp, vitesse,type) {
        this.nom = nom
        this.lvl = lvl
        this.hp = hp
        this.vitesse = vitesse
        this.type = type
        this.fatal_foudre = (x) =>{
            x.hp -= 20
            alert("pika attaque avec fatal foudre et a enlever 20 hp")
        }
        this.queue_de_fer = (x) =>{
            x.hp -= 25
            alert("pika attaque avec queue de fer  et a enlever 25 hp")
        }
        this.quick_attack = (x) =>{
            x.hp -= 30
            alert("pika attaque avec quick attack  et a enlever 30 hp")
        }
        this.bsimilah_boum_boum = (x) =>{
            x.hp -= 35
            alert("pika attaque avec bsimilah boum boum  et a enlever 35 hp")
        }
    }
}


export class Pokemon_ennemi {
    constructor(nom, lvl, hp, vitesse,type) {
        this.nom = nom
        this.lvl = lvl
        this.hp = hp
        this.vitesse = vitesse
        this.type = type
        this.grosse_tarte = (x) =>{
            x.hp -= 25
            alert("dracaufeu attaque avec grosse_tarte et a enlever 25 hp")
        }
        this.regard_qui_tue = (x) =>{
            x.hp -= 30
            alert("dracaufeu attaque avec regard_qui_tue et a enlever 30 hp")
        }
        this.craque_nuque = (x) =>{
            x.hp -= 35
            alert("dracaufeu attaque avec craque_nuque et a enlever 35 hp")
        }
        this.grosse_tarte_dans_sa_gueule = (x) =>{
            x.hp -= 40
            alert("dracaufeu attaque avec grosse_tarte_dans_sa_gueule et a enlever 40 hp")
        }
}
}

