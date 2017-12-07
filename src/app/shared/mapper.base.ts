export default abstract class MapperBase<IN, OUT>{
    abstract map(obj: IN): OUT;
    mapList(list: IN[]): OUT[] {
        let result: OUT[] = [];

        if (list == undefined) return result;

        list.forEach(element => {
            result.push(this.map(element))
        })

        return result;
    }
}