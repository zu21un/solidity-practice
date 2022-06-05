const Contacts = artifacts.require('./Contracts.sol');

module.exports = function(deployer) {
    deployer.deploy(Contacts);
}