package org.shaolin.vogerp.accounting;

import org.shaolin.vogerp.accounting.be.IAccountVoucher;
import org.shaolin.vogerp.accounting.be.ICustomerAccount;
import org.shaolin.vogerp.accounting.ce.CoinOrScoreReasonType;

public interface IAccountingService {

	public IAccountVoucher createIncomingVoucher(final String incomingCOAType, final double amount, final String comment);
	
	public IAccountVoucher createOutgoingVoucher(final String outgoingCOAType, final double amount, final String comment);
	
	public ICustomerAccount getCustomerAccount(long userId);
	
	public double queryUserTotalAmount(long userId);
	
	public double queryUserTotalAvailableAmount(long userId);
	
	public double queryUserTotalSpent(long userId);
	
	public int queryUserTotalCoin(long userId);
	
	public int queryUserTotalScore(long userId);
	
	public boolean addScore(long userId, CoinOrScoreReasonType reason);
	
	public boolean addCoin(long userId, CoinOrScoreReasonType reason);
}
