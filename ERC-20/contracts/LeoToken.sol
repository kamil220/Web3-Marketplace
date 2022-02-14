//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;
import 'hardhat/console.sol';

contract LeoToken {

    string public name = 'Leocode Token';
    string public symbol = 'LEO';
    uint8 public decimals = 18;
    address public owner;

    uint32 public releasePeriod = 7 days;
    uint8 public tokenRate = 100;

    mapping( address => uint256 ) public balanceOf;
    mapping( address => mapping( address => uint256 ) ) public allowance;

    /*
    * @dev We have used two mappings instead of a struct because of the gas price.
    * You can read more at https://ethereum.stackexchange.com/questions/41466/struct-array-or-mappings/64912#64912
    */
    mapping( address => uint256 ) public vestingDate;
    mapping( address => uint256 ) private vestingAmount;


    constructor() {
        owner = msg.sender;
        balanceOf[ address( this ) ] = totalSupply();
        balanceOf[ owner ] = totalSupply();
    }

    modifier nonZeroAddress( address _address ) {
        require( _address != address(0), 'Zero address is not allowed' );
        _;
    }

    modifier hasEnoughAmount( address _sender, uint256 _value ) {
        // solhint-disable-next-line
        if( vestingDate[ _sender ] > block.timestamp && balanceOf[ _sender ] >= _value ) {
            require(  balanceOf[ _sender ] - vestingAmount[ _sender ] >= _value, 'Tokens are vested' );
        } else {
            require( balanceOf[ _sender ] >= _value , 'Not enough tokens' );
        }
        _;
    }

    modifier hasOwnerEnoughToWithdraw( uint256 _value ) {
        require( balanceOf[ owner ] >= _value , 'Not enough tokens' );
        _;
    }

    modifier hasEnoughAllowance( address _sender, address _receiver, uint256 _value ) {
        require( allowance[ _sender ][ _receiver ] >= _value, 'Not allowed to transfer tokens' );
        _;
    }

    modifier canBuy() {
        require( msg.value != 0, 'Not enough tokens' );
        // solhint-disable-next-line
        require( vestingDate[ msg.sender ] <= block.timestamp, 'Not allowed to buy tokens more than once a week' );
        _;

    }

    modifier isOwner() {
        require( owner == msg.sender , 'Miner is not owner' );
        _;
    }

    function totalSupply() public view returns ( uint256 ) {
        return 100_000 * ( 10 ** decimals );
    }

    function transfer( address _to, uint256 _value )
    public nonZeroAddress ( _to ) hasEnoughAmount( msg.sender, _value )
    returns ( bool success ) {
        balanceOf[ msg.sender ] -= _value;
        balanceOf[ _to ] += _value;
        emit Transfer( msg.sender, _to, _value );
        return true;
    }

    function approve( address _spender, uint256 _value )
    public nonZeroAddress( _spender )
    returns ( bool success ) {
        allowance[ msg.sender ][ _spender ] = _value;
        emit Approval( msg.sender, _spender, _value );
        return true;
    }

    function transferFrom( address _from, address _to, uint256 _value )
    public nonZeroAddress( _from ) nonZeroAddress( _to ) hasEnoughAmount( _from, _value ) hasEnoughAllowance( _from, _to, _value )
    returns ( bool success ) {
        balanceOf[ _from ] -= _value;
        allowance[ _from ][ _to ] -= _value;

        balanceOf[ _to ] += _value;
        emit Transfer( _from, _to, _value );
        return true;
    }

    function buyTokens()
    public payable canBuy() {

        uint _amount = msg.value * tokenRate;
        balanceOf[ msg.sender ] += _amount;
        balanceOf[ address( this ) ] -= _amount;

        // solhint-disable-next-line
        _addVesting( msg.sender, _amount, block.timestamp );

        emit Transfer( address( this ), msg.sender, _amount );
    }

    function vestingBalance()
    public view
    returns ( uint256 ) {
        // solhint-disable-next-line
        if( vestingDate[ msg.sender ] > block.timestamp ) {
            return vestingAmount[ msg.sender ];
        } else {
            return 0;
        }
    }

    function withdrawLeoTokens( uint256 _value )
    public isOwner() hasOwnerEnoughToWithdraw( _value )
    returns ( bool success ) {

        balanceOf[ owner ] -= _value;
        balanceOf[ msg.sender ] += _value;

        emit Transfer( owner, msg.sender, _value );

        return true;
    }

    function _addVesting( address _customer, uint256 _amount, uint256 _date )
    private
    {
        _date += releasePeriod;
        vestingDate[ _customer ] = _date;
        vestingAmount[ _customer ] = _amount;
    }

    /* Start Events */
    event Transfer( address indexed _from, address indexed _to, uint256 _value );
    event Approval( address indexed _owner, address indexed _spender, uint256 _value );
}
