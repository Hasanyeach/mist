
// DUMMY note, while mist doesnt start geth itself
if(!web3.currentProvider.connection.writable){
    alert('PLEASE START GETH FIRST AND RESTART MIST.');
    return;
}


// set browser as default tab
if(!LocalStore.get('selectedTab'))
    LocalStore.set('selectedTab', 'browser');

if(!Tabs.findOne('browser')) {
    Tabs.insert({
        _id: 'browser',
        url: 'about:blank',
        position: 0
    });
    
    Tabs.insert({
        url: 'http://ethereum-dapp-wallet.meteor.com',
        position: 1,
        permissions: {
            accounts: web3.eth.accounts
        }
    });
}



EthAccounts.init();
EthBlocks.init();