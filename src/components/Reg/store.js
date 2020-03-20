import { observable, computed, action, decorate } from 'mobx';
import { sha512 } from 'js-sha512'

export  default class Store {
    log = '';
    pass = '';
    passr = '';
    changelog(value) { this.log = value};
    changepass(value) {this.pass = value};
    changepassr(value) {this.passr = value};
    get sha(){
        return (sha512(this.pass))
    }
};

decorate(Store, {
    log: observable,
    pass: observable,
    passr: observable,
    sha: computed,
    changelog: action,
    changepass: action,
    changepassr: action,
})

