import React from 'react';

export const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm || typeof onConfirm !== "function"){ // onConfirm이 존재하는지? 그리고 함수인지?
        return;
    }
    if(onCancel && typeof onCancel !== "function"){ // 만약 존재한다면 그것이 함수인지?(필수 요소가 아님)
        return;
    }
    
    const confirmAction = () => {
        if(window.confirm(message)){
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
}