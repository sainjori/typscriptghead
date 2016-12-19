import {SocialNetwork} from './social.networks';
class App implements SocialNetwork{
    title = "Eggheads";
    constructor(){
        console.log("Haloo");
    }

    getUsers(){
        return [{name:"john"}];
    }

}
new App();