import { _post } from '../../lib/http';

export const login = (params:any)=>{
    return _post(`bigtoeconsole/management/account/token`,params)
}