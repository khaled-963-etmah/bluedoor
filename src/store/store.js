import { createStore } from "redux";
const initialstate = {
    ip: "http://192.168.1.9:3000",
    token: " ",

    accountState: false,
    accountName: "guest",
    email: null,
    accountType: "member",
    accountPassword: " ",
    selectAcount: false,
    accountId: null,
    accountBrief: null,
    cr: null,
    toe: null,

    //--------------------
    searchText: null,
    FilterBusiness: false,
    FilterProgramming: false,
    FilterEngineering: false,
    FilterDesign: false,
    FilterMarketing: false,
    FilterWriting: false,
    FilterSupport: false,
    FilterEducation: false,

    //members_plus_filter
};

const reduceres = (state, action) => {
    switch (action.type) {
        case "checkAccount":
            return {
                ...state,
                accountState: action.value,
                accountType: action.typevalue,
            };
        case "tokenStore":
            console.log("token in store :" + action.value);
            return {
                ...state,
                token: action.value,
            };
        case "accountinfo":
            console.log("info in redux:" + action.value);
            return {
                ...state,
                accountName: action.value.name,
                accountType: action.value.type,
                accountId: action.value.id,
                email: action.value.email,
                cr: action.value.cr,
                toe: action.value.toe,
            };

        case "selectMyAccount":
            console.log("selectAcount:" + state.selectAcount);
            return {...state, selectAcount: true };
        case "selectAnotherAccount":
            console.log("selectAcount:" + state.selectAcount);
            return {...state, selectAcount: false };
        case "searchText":
            console.log("searchText:" + state.searchText);
            return {
                ...state,
                searchText: action.value,
            };
        case "checkBoxBusiness":
            console.log("business:" + !state.FilterBusiness);
            return {
                ...state,
                FilterBusiness: !state.FilterBusiness,
            };
        case "checkBoxProgramming":
            return {
                ...state,
                FilterProgramming: !state.FilterProgramming,
            };
        case "checkBoxEngineering":
            return {
                ...state,
                FilterEngineering: !state.FilterEngineering,
            };
        case "checkBoxDesign":
            return {
                ...state,
                FilterDesign: !state.FilterDesign,
            };
        case "checkBoxMarketing":
            return {
                ...state,
                FilterMarketing: !state.FilterMarketing,
            };
        case "checkBoxWriting":
            return {
                ...state,
                FilterWriting: !state.FilterWriting,
            };
        case "checkBoxSupport":
            return {
                ...state,
                FilterSupport: !state.FilterSupport,
            };
        case "checkBoxEducation":
            return {
                ...state,
                FilterEducation: !state.FilterEducation,
            };

        case "FilterRestart":
            return {
                ...state,
                FilterBusiness: false,
                FilterProgramming: false,
                FilterEngineering: false,
                FilterDesign: false,
                FilterMarketing: false,
                FilterWriting: false,
                FilterSupport: false,
                FilterEducation: false,
            };
        default:
            return state;
    }
};
export default createStore(reduceres, initialstate);