//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract LeoToken {

    string public name = 'Leocode Token';
    string public symbol = 'LEO';
    uint8 public decimals = 18;

    mapping( address => uint256 ) public balanceOf;
    mapping( address => mapping( address => uint256 ) ) public allowance;

    constructor() {
        balanceOf[msg.sender] = totalSupply();
    }

    modifier nonZeroAddress( address _address ) {
        require( _address != address(0), 'Zero address is not allowed' );
        _;
    }

    modifier hasEnoughAmount( address _sender, uint256 _value ) {
        require( balanceOf[ _sender ] >= _value, 'Not enough tokens' );
        _;
    }

    modifier hasEnoughAllowance( address _sender, address _receiver, uint256 _value ) {
        require( allowance[ _sender ][ _receiver ] >= _value, 'Not allowed to transfer tokens' );
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

    /* Start Events */
    event Transfer( address indexed _from, address indexed _to, uint256 _value );
    event Approval( address indexed _owner, address indexed _spender, uint256 _value );
}
