// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

error Whitelist_alreadyExist(address _address, string message);
error Whitelist_limitOverflow(string message);

contract Whitelist {
    event addressAdded(address indexed whitelistAddress);

    uint8 private s_maxWhitelistAddresses;

    mapping(address => bool) private s_whitelistAddresses;

    uint8 private s_addressesListedCount;

    constructor(uint8 _maxWhitelistAddresses) {
        s_maxWhitelistAddresses = _maxWhitelistAddresses;
    }

    function addAddressToWhiteList() public {
        if (s_whitelistAddresses[msg.sender])
            revert Whitelist_alreadyExist({
                _address: msg.sender,
                message: "Sender has already been whitelisted"
            });
        if (s_addressesListedCount >= s_maxWhitelistAddresses)
            revert Whitelist_limitOverflow({
                message: "More addresses cant be added, limit reached"
            });
        s_whitelistAddresses[msg.sender] = true;
        s_addressesListedCount++;
        emit addressAdded(msg.sender);
    }

    function getMaxWhitelistAddresses() public view returns (uint8) {
        return s_maxWhitelistAddresses;
    }

    function getAddressesListedCount() public view returns (uint8) {
        return s_addressesListedCount;
    }

    function getWhitelistAddress(address _address) public view returns (bool) {
        return s_whitelistAddresses[_address];
    }
}
