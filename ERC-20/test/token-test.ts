import { expect } from 'chai';
import { Contract } from 'ethers';
import {ethers} from 'hardhat';

describe("LeoToken", function () {
    let token: Contract;

    const tokenCount = 100000;
    const zeroAddress = ethers.constants.AddressZero;
    const totalAmount = ethers.constants.WeiPerEther.mul( tokenCount ); // 1 wei has 18 decimals
    const decimals = 18;

    const messages = {
        errorZeroAddress: 'Zero address is not allowed',
        errorLackOfMoney: 'Not enough tokens',
        errorNotAllowed: 'Not allowed to transfer tokens',
        checkName: 'The name of token should be `Leocode Token`',
        checkSymbol: 'The symbol of token should be `LEO`',
        checkDecimals: 'The token should have 18 decimals',
        checkTotalAmount: 'Check total amount of token',
        checkSenderZeroAddress: 'Throw exception when sender address is null',
        checkReceiverZeroAddress: 'Throw exception when receiver address is null',
        checkTransactionAllowance: 'Throw exception when transaction doesn\'t have allowance',
        checkNotEnoughTokens: 'Throw exception when sender doesn\'t have enough tokens',
        checkBalanceAfterTransaction: 'Check account balance after transaction',
        checkTransferEvent: 'Check Transfer Event',
        checkAllowAndSent: 'Add to allowance, and transfer'
    };

    beforeEach( async() => {
       const Token = await ethers.getContractFactory( 'LeoToken' );
       token = await Token.deploy();
       await token.deployed();
    });

    it( messages.checkName, async() => {
        expect( await token.name() ).to.equal('Leocode Token' );
    });

    it( messages.checkSymbol, async() => {
        expect( await token.symbol() ).to.equal( 'LEO' );
    });

    it( messages.checkDecimals, async() => {
        expect( await token.decimals() ).to.equal( decimals );
    })

    it( messages.checkTotalAmount, async() => {
       const total = await token.totalSupply();
       expect( total.eq( totalAmount ) ).to.equal( true )
    });

    it( messages.checkReceiverZeroAddress, async() => {
        await expect( token.transfer( zeroAddress, 10 ) ).to.be.revertedWith( messages.errorZeroAddress );
    });

    it( messages.checkSenderZeroAddress, async() => {
        const [{address: senderAddress}] = await ethers.getSigners();

        await expect( token.transferFrom( senderAddress, zeroAddress, 10 ) ).to.be.revertedWith( messages.errorZeroAddress );
    });

    it( messages.checkTransactionAllowance, async() => {
        const [{address: senderAddress}, {address: receiverAddress}] = await ethers.getSigners();

        await token.transfer( senderAddress, 10 );
        await expect( token.transferFrom( senderAddress, receiverAddress, 10 ) ).to.be.revertedWith( messages.errorNotAllowed );
    })

    it( messages.checkNotEnoughTokens, async() => {
        const [{address: senderAddress}] = await ethers.getSigners();
        await expect( token.transfer( senderAddress, totalAmount.add(10) ) ).to.be.revertedWith( messages.errorLackOfMoney );
    });

    it( messages.checkBalanceAfterTransaction, async() => {
        const [{address: senderAddress}, {address: receiverAddress}] = await ethers.getSigners();

        await token.transfer( receiverAddress, 10 );
        expect( await token.balanceOf( receiverAddress) ).to.equal( 10 );
        expect( await token.balanceOf( senderAddress ) ).to.equal( totalAmount.sub( 10 ) );
    });

    it( messages.checkTransferEvent, async() => {
        const [{address: senderAddress}, {address: receiverAddress}] = await ethers.getSigners();

        expect( await token.transfer( receiverAddress, 10 ) ).to.emit( token, 'Transfer' ).withArgs( senderAddress, receiverAddress, 10 );
        expect( await token.balanceOf( senderAddress ) ).to.equal( totalAmount.sub( 10 ) );
        expect( await token.balanceOf( receiverAddress) ).to.equal( 10 );
    });

    it( messages.checkAllowAndSent, async() => {
        const [sender, {address: receiverAddress}] = await ethers.getSigners();

        expect( await token.allowance( sender.address, receiverAddress ) ).to.equal( 0 );

        await expect( token.connect( sender ).approve( receiverAddress, 10 ) )
            .to.emit( token, 'Approval' ).withArgs( sender.address, receiverAddress, 10 );
    });
} );
