export const solutionFn = ({ arg }: { arg: string }) => {
    let allInvalidIds=0
    const arrOfProdsIDs = arg.split(",");

    for (let prodId of arrOfProdsIDs) {
        const firstId =prodId.split("-")[0]
        const lastId =prodId.split("-")[1]
        for(let i=Number(firstId);i<=Number(lastId);i++){
            const stringifiedId = i.toString()
            if(stringifiedId.length%2!==0){
                continue
            }
            const firstHalf = stringifiedId.substring(0,stringifiedId.length/2)
            const secondHalf = stringifiedId.substring(stringifiedId.length/2,stringifiedId.length)
            if(firstHalf===secondHalf){
                allInvalidIds +=i
            }
        }
    }

    return allInvalidIds
};
