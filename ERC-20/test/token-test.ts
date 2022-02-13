import { expect } from 'chai';
import { Contract } from 'ethers';
import {ethers} from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import {describe} from "mocha";

describe("Leocode Token", function () {
    let token: Contract;
    let owner: SignerWithAddress;
    let address1: SignerWithAddress;
    let address2: SignerWithAddress;
    let address3: SignerWithAddress;

    const tokenCount = 100000;
    const zeroAddress = ethers.constants.AddressZero;
    const totalAmount = ethers.constants.WeiPerEther.mul( tokenCount ); // 1 wei has 18 decimals
    const decimals = 18;

    const messages = {
        errorZeroAddress: 'Zero address is not allowed',
        errorLackOfMoney: 'Not enough tokens',
        errorNotAllowed: 'Not allowed to transfer tokens',
        errorMinerNotOwner: 'Miner is not owner',
        errorHasVested: 'Not allowed to buy tokens more than once a week',
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
        checkAllowAndSent: 'Add to allowance, and transfer',
        checkHasOwnerAllTokens: 'Check, that owner has all tokens',
        checkIsOwner: 'Check, that user is owner',
        checkNormalUserWithdraw: 'An normal user cannot withdraw money',
        checkShouldBeAbleToBuyLeoEth: 'User can buy Leo tokens via ETH'
    };

    beforeEach( async() => {
        const Token = await ethers.getContractFactory( 'LeoToken' );
        token = await Token.deploy();
        [ owner, address1, address2, address3 ] = await ethers.getSigners();
        await token.deployed();
    });

    describe( 'Token details', () => {

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

        it( messages.checkHasOwnerAllTokens, async() => {
            const total = await token.totalSupply();
            const ownerBalance = await token.balanceOf( owner.address );

            expect( ownerBalance.eq( total ) ).to.equal( true );
        });

    });

    describe( 'Transactions', () => {

        it( messages.checkReceiverZeroAddress, async() => {
            await expect( token.transfer( zeroAddress, 10 ) ).to.be.revertedWith( messages.errorZeroAddress );
        });

        it( messages.checkSenderZeroAddress, async() => {
            await expect( token.transferFrom( owner.address, zeroAddress, 10 ) ).to.be.revertedWith( messages.errorZeroAddress );
        });

        it( messages.checkTransactionAllowance, async() => {
            await token.transfer( owner.address, 10 );
            await expect( token.transferFrom( owner.address, address1.address, 10 ) ).to.be.revertedWith( messages.errorNotAllowed );
        })

        it( messages.checkNotEnoughTokens, async() => {
            await expect( token.transfer( owner.address, totalAmount.add(10) ) ).to.be.revertedWith( messages.errorLackOfMoney );
        });

        it( messages.checkBalanceAfterTransaction, async() => {
            await token.transfer( address1.address, 10 );
            expect( await token.balanceOf( address1.address) ).to.equal( 10 );
            expect( await token.balanceOf( owner.address ) ).to.equal( totalAmount.sub( 10 ) );
        });

        it( messages.checkTransferEvent, async() => {
            expect( await token.transfer( address1.address, 10 ) ).to.emit( token, 'Transfer' ).withArgs( owner.address, address1.address, 10 );
            expect( await token.balanceOf( owner.address ) ).to.equal( totalAmount.sub( 10 ) );
            expect( await token.balanceOf( address1.address) ).to.equal( 10 );
        });

        it( messages.checkAllowAndSent, async() => {
            expect( await token.allowance( owner.address, address1.address ) ).to.equal( 0 );

            await expect( token.connect( owner ).approve( address1.address, 10 ) )
                .to.emit( token, 'Approval' ).withArgs( owner.address, address1.address, 10 );
        });
    });

    describe( 'Marketplace', () => {

        describe( 'Permission check', () => {

            it( messages.checkIsOwner, async() => {
                await expect( token.withdrawLeoTokens( 10 ) ).to.not.be.revertedWith( messages.errorMinerNotOwner );
            });

            it( messages.checkNormalUserWithdraw, async() => {
                await expect( token.connect(address1).withdrawLeoTokens( 10 ) ).to.be.revertedWith( messages.errorMinerNotOwner );
            });

        });

        describe( 'Purchase and sale', () => {

            it( messages.checkNotEnoughTokens, async() => {
                await expect(
                    token.connect( address1 )
                        .buyTokens(
                            {
                                value: ethers.utils.parseEther('0' )
                            }))
                    .to.be.revertedWith( messages.errorLackOfMoney );
            });

            it( messages.checkShouldBeAbleToBuyLeoEth, async() => {
                const _amount = 5;
                token.connect( address1 ).buyTokens( { value: ethers.utils.parseEther( _amount.toString() ) } );
                expect(await token.balanceOf(address1.address)).to.equal(
                    ethers.BigNumber.from( _amount * 100 ).mul(
                        ethers.BigNumber.from(10).pow(decimals)
                    )
                );
            });




            // moze kupic
            // nie moze kupic bo vested
            // nie moze sprzedać bo money vested
            // moze sprzedać money no longer vested
        });
    });
} );
