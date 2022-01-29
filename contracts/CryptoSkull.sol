// SPDX-License-Identifier: MIT

pragma solidity 0.8.7;

contract CryptoSkull {

    uint public startPrice = 20000000000000000; // 0.02ETH
    uint private priceLevel = 0;
    uint public totalSupply = 1_111;

    address private owner;
    uint public actualPrice;
    uint public skullRemainsForSale; // update after each sale
    uint private nextSkullIndexToSale; // update after each sale

    struct Skull {
        uint index;
        address owner;
        string  rarity;
        uint price;
        bool exist;
    }

    struct Bid {
        Skull skull;
        address bidder;
        uint price;
        bool exist;
        bool isDone;
        bool isAccepted;
    }

    struct Auction {
        uint skullIndex;
        uint state; //1 => open, 2 => closed or 3 => expired
        uint price;
    }

    /*
    *   Save counts of current acquisition of each buyer after each buy
    *
    *  _owner => _acquisitionCount
    */
    mapping(address => uint) acquisitionCount;

    /**
    *   Save a bid for one Skull by index, used to store each bid
    *
    *  _skullIndex => Bid
    */
    mapping(uint => Bid) public bids;

    /**
    *   Retrieve a skull by _skullIndex
    *
    *   _skullIndex => Skull
    */
    mapping(uint => Skull) public skulls;

    // /**
    // *   Retrieve a skull by _skullIndex
    // *
    // *   _skullIndex => bool
    // */
    // mapping(uint => bool) areOpenToBid;

    /**
    *   Retrieve a skull by _skullIndex
    *
    *   _skullIndex => Bid
    */
    mapping(uint => Auction) areOpenToBid;


    /**
    *    Records the amount of a bid to return it to the seller
    *
    *   _address => _amount
    */
    mapping(address => uint) withdrawPending;



    /**
    *   When buy skull
    */
    event BuySkull(Skull skull);

    /**
    *   When place bid
    */
    event PlaceBid(Bid bid);

    /**
    *   Do transfer from _lastOwner to _newOwner
    */
    event Transfer(address _lastOwner, address _newOwner, bool isAccepted);

    /**
    *  Prevent if Auction is open or close
    */
    event AuctionState(uint _skullIndex, uint _state, uint _price);





    constructor() {
        owner = msg.sender;
        skullRemainsForSale = totalSupply;
        actualPrice = startPrice;
    }





    /*
    *   Just to buy Skull. Not for auction or others,
    *   when 1110 skulls are solds, function will be not usable
    */
    function buySkull() external payable {
        require(msg.sender != owner, "Buyer can't be owner");
        require(msg.value > 0, "Value sended too low");
        require(skullRemainsForSale > 1, "Skull remains for sale must be > 1");
        require(msg.sender.balance >= msg.value, "Not enough money to buy this item");

        payable(address(this)).transfer(msg.value);

        withdrawPending[owner] += msg.value;
        acquisitionCount[msg.sender]++;

        Skull memory _skull = Skull(nextSkullIndexToSale,  msg.sender,  getRarity(), msg.value, true);
        skulls[nextSkullIndexToSale] = _skull;

        updateSkullPrice();

        nextSkullIndexToSale++;
        skullRemainsForSale--;

        emit BuySkull(_skull);
    }

    /**
    *   Open , close or set aution to Expired
    */
    function setAuctionState(uint _skullIndex, uint _state, uint  _price) external {

        require(msg.sender != owner, "Action unauthorized");
        require(skullRemainsForSale <= 1, "Must remains 1 or 0 skulls");

        uint _open = 1;
        uint _closed = 2;
        uint _expired = 3;

        require(
            _state == _open
            || _state == _closed
            || _state == _expired,
            "State code invalid"
        );

        areOpenToBid[_skullIndex] = Auction(_skullIndex, _state, _price);

        emit AuctionState(_skullIndex, _state, _price);
    }

    /**
    *   To place a bid, but all Skulls must be sold.
    *
    *   Minimal price is based on _lastBid price if exist otherwise
    *   on Skull purchase price
    *
    */
    function placeBid(uint _skullIndex) external payable {
        require(areOpenToBid[_skullIndex].state == 1, "Auction not open");
        require(msg.sender != owner, "Sender can't be contract owner");
        require(msg.sender != skulls[_skullIndex].owner, "Skull owner cannot place bid on his item");
        require(_skullIndex < totalSupply, "Index out of range");
        require(skullRemainsForSale == 0, "All skulls must be selled to do bid");

        _createBid(_skullIndex);
    }

    /**
    *    Only authorized by skulls Golds owner
    */
    function placeXRarBid() external payable {
        require(skullRemainsForSale == 1, "Only one skull should remain");
        require(msg.sender != owner, "Sender can't be contract owner");
        require(msg.value > 0, "Price to low");

        bool _isGoldOwner;

        for(uint i = totalSupply - 1 ; i >= (totalSupply - 11); i--)
        {
            if(skulls[i].owner == msg.sender)
            {
                _isGoldOwner = true;
                break;
            }
        }

        require(_isGoldOwner == true, "Authorized only for Golds Skull owner");

        _createBid(totalSupply - 1);
    }

    /**
    *   Create a bid
    *   Cancel last bid and reimburse last bidder if exist then send new bid price from new bidder to contract
    *   Otherwise if no bid exist on this skullIndex transfer money from bidder to contract
    */
    function _createBid(uint _skullIndex) private {

        address _actualOwner = skulls[_skullIndex].owner;
        Bid memory _lastBid = bids[_skullIndex];

        if(_lastBid.exist == true)
        {
            require(msg.value > _lastBid.price, "New price lower than old price");
            require(_lastBid.skull.owner != msg.sender, "Cannot place bid for owner of item");

            payable(address(this)).transfer(msg.value); // Send money from _newBidder to contract

            withdrawPending[_lastBid.bidder] += _lastBid.price;
            withdrawPending[_actualOwner] -= _lastBid.price;

            withdrawPending[_actualOwner] +=  msg.value;

            Bid memory _newBid = Bid(_lastBid.skull, msg.sender, msg.value, true, false, false);

            bids[_skullIndex] = _newBid;
            emit PlaceBid(_newBid);

        } else {
            require(skulls[_skullIndex].owner != msg.sender, "Cannot place bid for owner of item");
            require(msg.value > skulls[_skullIndex].price, "Bid price lower than purchase price");

            payable(address(this)).transfer(msg.value); // Send money from _newBidder to contract

            withdrawPending[_actualOwner] +=  msg.value;

            Bid memory _newBid = Bid(skulls[_skullIndex], msg.sender, msg.value, true, false, false);
            bids[_skullIndex] = _newBid;
            emit PlaceBid(_newBid);
        }
    }

    /**
    *   Reply to a bid placed
    */
    function replyBidForSkull(uint _skullIndex, bool _isAccept) external {
        require(areOpenToBid[_skullIndex].state == 1, "Auction not open");

        require(_skullIndex < totalSupply, "Index out of range");
        require(skullRemainsForSale == 0, "All skulls must be selled to accept bid");
        require(skulls[_skullIndex].owner == msg.sender, "Must be valid by skull owner");

        address _lastOwner = skulls[_skullIndex].owner;

        if(_isAccept == true)
        {
            Bid memory _lastBid = bids[_skullIndex];
            address _bidder =_lastBid.bidder;

            skulls[_skullIndex].owner = _bidder;
            bids[_skullIndex].isAccepted = true;

            acquisitionCount[_lastOwner]--;
            acquisitionCount[_bidder]++;

            emit Transfer(msg.sender, _bidder, true);
        }else {

            Bid memory _bid = bids[_skullIndex];
            address _bidder = _bid.bidder;

            bids[_skullIndex].isAccepted = false;

            payable(_bidder).transfer(_bid.price);

            withdrawPending[msg.sender] -= _bid.price;
            withdrawPending[_bidder] += _bid.price;

            emit Transfer(msg.sender, _bidder, false);
        }

        bids[_skullIndex].isDone = true;
        delete areOpenToBid[_skullIndex];
    }

    //Function to delete
    function setSkullRemainsForSale(uint _value) public {
        skulls[totalSupply-2] = Skull(totalSupply-2, 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,  "Gold", uint(90000000000000000), true);
        skulls[totalSupply-3] = Skull(totalSupply-3, 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,  "Gold", uint(100000000000000000), true);
        skulls[totalSupply-4] = Skull(totalSupply-4, 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db,  "Gold", uint(200000000000000000), true);
        skullRemainsForSale = _value;
    }

    // Get actual money on contract
    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }

    // Retrieve money pending
    function withdrawMoneyPendings(uint _skullIndex) external payable {
        require(msg.sender != owner, "Action unauthorized");
        require(skullRemainsForSale == 0, "All skulls must selled to withdraw money pendings");
        require(areOpenToBid[_skullIndex].state == 2, "Auction must be done !");
        require(address(this).balance > 0, "Nothing to withdraw");

        uint _amount = withdrawPending[msg.sender];
        payable(msg.sender).transfer(_amount);

        withdrawPending[msg.sender] = 0;
    }



    function getRarity() public view returns(string memory) {
        if( skullRemainsForSale == 1) { // remain 1 gold
            return "xRar";
        }else if (skullRemainsForSale <= 11) { // remains 10 Golds + 1 xRar
            return "Gold";
        }else {
            return "Common";
        }
    }

    /*
    *  update Skull price after level sale
    *
    */
    function updateSkullPrice() public  { // Will be private
        bool _isUnlockLevel = getIsUnlockLevel();
        uint _soldLevel =  getCurrentSkullSoldLevel();

        if(_soldLevel == 1 && _isUnlockLevel) {
            actualPrice +=  10000000000000000;
        }else if (_soldLevel == 2 && _isUnlockLevel) {
            actualPrice +=  20000000000000000;
        }else if (_soldLevel == 3 && _isUnlockLevel) {
            actualPrice +=  30000000000000000;
        }
    }

    /*
    *  50 > {vaue} <= 100 level0
    *  35 => {vaue} <= 50 + level1
    *  15 => {vaue} < 35 + level2
    *  0 =>  {vaue}< 15 + level3
    */
    function getCurrentSkullSoldLevel() public view returns(uint) {
        uint fiftyPercent = 556;
        uint thirtyFivePercent = 389;
        uint fifteenPercent =  167;

        if(skullRemainsForSale > fiftyPercent && skullRemainsForSale <= totalSupply) {
            return 0;
        }else if(skullRemainsForSale >= thirtyFivePercent && skullRemainsForSale <= fiftyPercent) {
            return 1; // >=389 and <=556
        }else if (skullRemainsForSale >= fifteenPercent && skullRemainsForSale <= thirtyFivePercent) {
            return 2; // >=167 and <=389
        }else if (skullRemainsForSale >= 0 && skullRemainsForSale <= fifteenPercent) {
            return 3; // >=0 and <=167
        }

        // >=556 and <= 1111
        return 0;
    }

    function getIsUnlockLevel() public view returns(bool){

        uint fiftyPercent = 556;
        uint thirtyFivePercent = 389;
        uint fifteenPercent =  167;

        uint[3] memory _levels = [uint(fiftyPercent), uint(thirtyFivePercent), uint(fifteenPercent)];

        for(uint i = 0; i < _levels.length; i++)
        {
            if(_levels[i] == skullRemainsForSale)
            {
                return true;
            }
        }

        return false;
    }

    /**
    *   Retrieve only owner balance
    */
    function ownerWithdraw() external payable {
        require(msg.sender == owner, "Action unauthorized");
        require(address(this).balance > 0, "Nothing to withdraw");

        uint _amount = withdrawPending[owner];
        payable(owner).transfer(_amount);

        withdrawPending[owner] = 0;
    }

    // Get % of _price
    function getRoyalties(uint _price) private  view returns(uint) {
        if(skullRemainsForSale == 0)
        {
            return uint256(_price * 5) / 100;
        }
        return 0;
    }
}
