import {SocialNetwork} from './social.networks';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';

Observable.interval(1000)
    .subscribe(x => console.log(x));
class App implements SocialNetwork{
    title = "Eggheads";

    getUsers(){
        return [{name:"john"}];
    }

}

console.log(_.isArray(new App().getUsers()));
