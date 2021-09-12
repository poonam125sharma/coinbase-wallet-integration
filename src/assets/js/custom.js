'use-strict';

function connectWallet(event) {
    console.log('Connect Wallet clicked');
}

function getBalance(event) {
    $('.bal-wrapper .balance').html();
    $(event.target).find('.fa-spinner').removeClass('d-none');
    let _addrBal = $('input[name="addr_bal"]').val();
    let _tkn = $('select[name="bal_tkn"]').find(":selected").val();
    let _instance = (_tkn == 'tknA') ? objTokensLib.tokenAContractInstance : objTokensLib.tokenBContractInstance;
    objTokensLib.getBalance({
        address: _addrBal,
        instance: _instance
    }).then((balance) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        $('.bal-wrapper .balance').html(balance);
    }).catch((e) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        console.log({e});
        $.notify({
            message: e 
        },{
            type: 'danger'
        });
    });
}

function approve(event) {
    $(event.target).find('.fa-spinner').removeClass('d-none');
    let _addrApprove = $('input[name="addr_approve"]').val();
    let _amtApprove = $('input[name="amt_approve"]').val();
    let _tkn = $('select[name="approve_tkn"]').find(":selected").val();
    let _instance = (_tkn == 'tknA') ? objTokensLib.tokenAContractInstance : objTokensLib.tokenBContractInstance;
    objTokensLib.approve({
        address: _addrApprove,
        amount: _amtApprove,
        instance: _instance
    }).then((receipt) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        console.log({receipt});
        if(receipt && receipt.transactionHash && receipt.status == true) {
            $.notify({
                // options
                message: 'Address approved successfully' 
            },{
                // settings
                type: 'success'
            });
        }
    }).catch((e) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        console.log({e});
        $.notify({
            message: e 
        },{
            type: 'danger'
        });
    });
}

function depositToken(event) {
    $(event.target).find('.fa-spinner').removeClass('d-none');
    let _amt = $('input[name="amt_dep"]').val();
    let _tkn = $('select[name="dep_tkn"]').find(":selected").val();
    objTokensLib.deposit({
        amount: _amt,
        token: _tkn
    }).then((receipt) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        console.log({receipt});
        if(receipt && receipt.transactionHash && receipt.status == true) {
            $.notify({
                // options
                message: 'Token deposited successfully' 
            },{
                // settings
                type: 'success'
            });
        }else{
            $.notify({
                // options
                message: 'Some problem occured during transaction' 
            },{
                // settings
                type: 'danger'
            });
        }
    }).catch((e) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        console.log({e});
        $.notify({
            message: e 
        },{
            type: 'danger'
        });
    });
}

function trade(event) {
    $(event.target).find('.fa-spinner').removeClass('d-none');
    let _amtFrom = $('input[name="amt_from"]').val();
    if(_amtFrom == "") {
        $(event.target).find('.fa-spinner').addClass('d-none');
        $.notify({
            // options
            message: 'From amount is required' 
        },{
            // settings
            type: 'danger'
        });
    } else {
        let _tknFrom = $('select[name="from_tkn"]').find(":selected").val();
        let _tknTo = $('select[name="to_tkn"]').find(":selected").val();
        if(_tknFrom == _tknTo) {
            $(event.target).find('.fa-spinner').addClass('d-none');
            $.notify({
                // options
                message: 'Same tokens can\'t be traded' 
            },{
                // settings
                type: 'danger'
            });
        } else {
            objTokensLib.trade({
                amount: _amtFrom,
                fromToken: _tknFrom,
                toToken: _tknTo
            }).then((receipt) => {
                $(event.target).find('.fa-spinner').addClass('d-none');
                console.log({receipt});
                if(receipt && receipt.transactionHash && receipt.status == true) {
                    $.notify({
                        // options
                        message: 'Token traded successfully' 
                    },{
                        // settings
                        type: 'success'
                    });
                }else{
                    $.notify({
                        // options
                        message: 'Some problem occured during transaction' 
                    },{
                        // settings
                        type: 'danger'
                    });
                }
            }).catch((e) => {
                $(event.target).find('.fa-spinner').addClass('d-none');
                console.log({e});
                $.notify({
                    message: e 
                },{
                    type: 'danger'
                });
            });
        }
    }
}

function withdrawToken(event) {
    $(event.target).find('.fa-spinner').removeClass('d-none');
    let _amt = $('input[name="amt_wth"]').val();
    let _tkn = $('select[name="wth_tkn"]').find(":selected").val();
    objTokensLib.withdraw({
        amount: _amt,
        token: _tkn
    }).then((receipt) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        console.log({receipt});
        if(receipt && receipt.transactionHash && receipt.status == true) {
            $.notify({
                // options
                message: 'Address deposited successfully' 
            },{
                // settings
                type: 'success'
            });
        }else{
            $.notify({
                // options
                message: 'Some problem occured during transaction' 
            },{
                // settings
                type: 'danger'
            });
        }
    }).catch((e) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        console.log({e});
        $.notify({
            message: e 
        },{
            type: 'danger'
        });
    });
}

function getRunningBalance(event) {
    $('.running-bal-wrapper .balance').html();
    $(event.target).find('.fa-spinner').removeClass('d-none');
    let _addrBal = $('input[name="addr_run_bal"]').val();
    let _tkn = $('select[name="run_bal_tkn"]').find(":selected").val();

    objTokensLib.storedBalance({
        address: _addrBal,
        token: _tkn
    }).then((runningBalance) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        $('.running-bal-wrapper .balance').html(runningBalance);
    }).catch((e) => {
        $(event.target).find('.fa-spinner').addClass('d-none');
        console.log({e});
        $.notify({
            message: e 
        },{
            type: 'danger'
        });
    });
}