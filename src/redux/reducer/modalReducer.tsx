export const modalVisible = (state : any = {}, action : any) => {
    switch (action.type) {
        case "OPEN_MODAL":
            return {
                visible:true
            };
        case "CLOSE_MODAL":
            return {
                visible:false
            };
        default:
            return state
    }

};

  