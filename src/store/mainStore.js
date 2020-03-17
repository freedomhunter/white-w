import { observable, action } from "mobx";

class MainStore {
    @observable a='';

    @action change = () => {
        this.a = 'gaurav';
    }
}

export default MainStore