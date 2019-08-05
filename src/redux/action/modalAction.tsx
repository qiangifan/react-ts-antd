export const modalVisibleHandle = (param:any,action:boolean)=>{
    return {type:action ? "OPEN_MODAL" : "CLOSE_MODAL",text:param};
}