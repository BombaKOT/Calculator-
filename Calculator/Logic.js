/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

document.querySelector(".buttons").onclick = function(event){
    // console.log("Luigi is better than mario");
    let valu = "";
    let target = event.target;
    let input = document.querySelector(".fred");
    if(target.classList.contains("number")){
        input.value = input.value + target.innerHTML;
    }
    else if(target.classList.contains("action")){
        let posledniy_symbol = input.value.substring()
        valu = target.innerHTML;
        input.value = input.value + valu;
    }
    else if(target.classList.contains("answer")){
        let result = input.value;
        let final_result = eval(result);
        input.value = final_result;
    }
    else if(target.classList.contains("clear")){
        let result = input.value
        result = result.substring(0,result.length-1);
        input.value = result;
    }
    else if(target.classList.contains("all_clear")){
        input.value = "";
    }

}




































































