export default {
    storage:window.localStorage,
    get(key){
        let data = this.storage.getItem(key);
        if(!data){return false}
        let jsonData = JSON.parse(data);
        return jsonData;
    },
    set(key,value){
        let stringData = JSON.stringify(value);
        this.storage.setItem(key,stringData);
    }
}
