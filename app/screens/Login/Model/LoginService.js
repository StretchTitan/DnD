import { apiCall } from "../../../common/Model/ServiceCall";
import { setLogin } from './LoginActions'

// export const login = (isLogin, redirect) => {
//     return (dispatch, getState) => {
//         // const url = "https://authentication-dev.mcoe.davita.com/api/v1/applications/D2BA3300-9D6D-E711-BBB6-97577D100D33/platforms/E738CF7E-867B-E711-A011-CC3D82B25EC5/tokens"

//         const { UserName, Password } = getState().LoginReducer,
//             data = {
//                 UserName,
//                 Password,
//                 DeviceId: "banana"
//             };

//         const fetchParams = {
//             method: 'POST',
//             url,
//             data,
//             success: (response) => { 
//                 console.log(response);
//                 return dispatch(setLogin(true));
//             }
//         };

//         return dispatch(apiCall(fetchParams));
//     };
// };