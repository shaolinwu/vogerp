package org.shaolin.vogerp.coupon.internal;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.shaolin.bmdp.runtime.be.IPersistentEntity;
import org.shaolin.uimaster.page.WebConfig;
import org.shaolin.uimaster.page.qrcode.QRCodeUtil;
import  org.shaolin.vogerp.commonmodel.IUserService.UserActionListener;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.shaolin.vogerp.coupon.be.CouponSystemImpl;
import org.shaolin.vogerp.coupon.be.CouponTypeImpl;
import org.shaolin.vogerp.coupon.be.CouponUserInfoImpl;
import org.shaolin.vogerp.coupon.be.DiscountProductImpl;
import org.shaolin.vogerp.coupon.ce.ChannelType;
import org.shaolin.vogerp.coupon.ce.ResetIntervalType;
import org.shaolin.vogerp.coupon.dao.CouponModel;
import org.slf4j.LoggerFactory;

public class CouponUserActionListener implements UserActionListener {
	
	@Override
	public void loggedIn(IPersonalInfo userInfo) {
		
	}

	@Override
	public void registered(IPersonalInfo userInfo) {
		Long orgId = userInfo.getOrgId();
		
		//generate couponUserInfo
		CouponUserInfoImpl couponUserInfo = new CouponUserInfoImpl();
		/*String lotteryLink = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7425c40996a4e8c3"
				+ "&redirect_uri=http%3A%2F%2Fwww.mr-prize.com%2Fuimaster%2Fwebflow.do%3F_timestamp%3D1"
				+ "%26_chunkname%3Dorg.shaolin.bmdp.coupon.diagram.Lottery%26_nodename%3DStart%26orgid%3D" 
				+ orgId + "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";*/
		String lotteryLink = "http://mr-prize.com/uimaster/wechatpush?orgId=" + orgId;
		couponUserInfo.setLotteryLink(lotteryLink);
		couponUserInfo.setQueryLink("https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7425c40996a4e8c3&redirect_uri=http%3A%2F%2F"
				+ "www.mr-prize.com%2Fuimaster%2Fwebflow.do%3F_chunkname%3Dorg.shaolin.bmdp.coupon.diagram.Lottery%26_nodename%3DViewOrderCoupon%26"
				+ "_page%3Dorg.shaolin.vogerp.coupon.page.ViewOrderCoupon%26orgid%3D" + orgId + "&response_type=code&scope=snsapi_base&state=123#wechat_redirect");
		couponUserInfo.setTopAdvertImage("/uimaster/images/coupon/front/advert_top.jpg");
		couponUserInfo.setBottomAdvertImage("/uimaster/images/coupon/front/advert_bottom.jpg");
		couponUserInfo.setLotteryChannel(ChannelType.WECHAT);
		couponUserInfo.setOrgId(orgId);
		try {
			String relativePath = "/images/coupon/front/couponIcon/" + orgId;
			String path = WebConfig.getRealPath(relativePath);
			String relativePath1 = "/images/coupon/front/mr-prize.png";
			String path1 = WebConfig.getRealPath(relativePath1);
			String file = QRCodeUtil.encode(lotteryLink, path1, path, false);
			couponUserInfo.setLotteryQrCode("/uimaster/images/coupon/front/couponIcon/" + orgId + "/" + file);
		} catch (Exception e) {
			LoggerFactory.getLogger(CouponUserActionListener.class).warn("Generate qrCode failed", e);
			e.printStackTrace();
		}
		
		CouponModel.INSTANCE.create(couponUserInfo);
		
		//generate default coupon type
		generateDefaultCouponTypes(orgId);
		
		//generate coupon system status
		CouponSystemImpl couponSystem = new CouponSystemImpl();
		couponSystem.setIsDevelopTest(false);
		couponSystem.setIsValidateOpenId(true);
		couponSystem.setIsDevelopTest(false);
		couponSystem.setCreateDate(new Date());
		couponSystem.setOrgId(orgId);
		CouponModel.INSTANCE.create(couponSystem);
	}

	/**
	 * generate default coupon type
	 */
	private void generateDefaultCouponTypes(Long orgId) {
		List<IPersistentEntity> discountProducts = new ArrayList<IPersistentEntity>();
		CouponTypeImpl couponType1 = new CouponTypeImpl();
		couponType1.setName("50%off");
		couponType1.setTotalNum(2);
		couponType1.setRestNum(2);
		couponType1.setIcon("/uimaster/images/coupon/front/50off.png");
		couponType1.setResetInterval(ResetIntervalType.ONEDAY);
		couponType1.setIsImmediate(true);
		couponType1.setCreateDate(new Date());
		couponType1.setOrgId(orgId);
		CouponModel.INSTANCE.create(couponType1);
		DiscountProductImpl discountProduct1 = new DiscountProductImpl();
		discountProduct1.setName("\u5168\u53555\u6298");
		discountProduct1.setIcon("/uimaster/images/coupon/front/50off.png");
		discountProduct1.setCouponTypeId(couponType1.getId());
		discountProduct1.setDiscount("50");
		discountProduct1.setIsShared(true);
		discountProduct1.setSuperiorityMessage("\u4E0D\u53EF\u4E0E\u5176\u5B83\u4F18\u60E0\u5238\u53E0\u52A0");
		discountProduct1.setLimitMessage("\u8BF7\u51FA\u793A\u5C0F\u7968");
		discountProduct1.setValidity(30);
		discountProduct1.setCreateDate(new Date());
		discountProduct1.setOrgId(orgId);
		discountProducts.add(discountProduct1);
		
		
		CouponTypeImpl couponType2 = new CouponTypeImpl();
		couponType2.setName("cash deduct");
		couponType2.setTotalNum(20);
		couponType2.setRestNum(20);
		couponType2.setIcon("/uimaster/images/coupon/front/cashDeduction.png");
		couponType2.setResetInterval(ResetIntervalType.ONEDAY);
		couponType2.setIsImmediate(true);
		couponType2.setCreateDate(new Date());
		couponType2.setOrgId(orgId);
		CouponModel.INSTANCE.create(couponType2);
		DiscountProductImpl discountProduct2 = new DiscountProductImpl();
		discountProduct2.setName("\u73B0\u91D1\u6298\u6263");
		discountProduct2.setIcon("/uimaster/images/coupon/front/cashDeduction.png");
		discountProduct2.setCouponTypeId(couponType2.getId());
		discountProduct2.setDiscount("\u7ACB\u51CF15\u5143");
		discountProduct2.setIsShared(true);
		discountProduct2.setSuperiorityMessage("\u4E0D\u53EF\u4E0E\u5176\u5B83\u4F18\u60E0\u5238\u53E0\u52A0");
		discountProduct2.setLimitMessage("\u8BF7\u51FA\u793A\u5C0F\u7968");
		discountProduct2.setValidity(30);
		discountProduct2.setCreateDate(new Date());
		discountProduct2.setOrgId(orgId);
		discountProducts.add(discountProduct2);
		
		CouponTypeImpl couponType3 = new CouponTypeImpl();
		couponType3.setName("new product");
		couponType3.setTotalNum(20);
		couponType3.setRestNum(20);
		couponType3.setIcon("/uimaster/images/coupon/front/newProduct.png");
		couponType3.setResetInterval(ResetIntervalType.ONEDAY);
		couponType3.setIsImmediate(false);
		couponType3.setCreateDate(new Date());
		couponType3.setOrgId(orgId);
		CouponModel.INSTANCE.create(couponType3);
		DiscountProductImpl discountProduct3 = new DiscountProductImpl();
		discountProduct3.setName("\u65B0\u54C1\u8D60\u9001");
		discountProduct3.setIcon("/uimaster/images/coupon/front/newProduct.png");
		discountProduct3.setCouponTypeId(couponType3.getId());
		discountProduct3.setDiscount("0");
		discountProduct3.setIsShared(true);
		discountProduct3.setSuperiorityMessage("\u4E0D\u53EF\u4E0E\u5176\u5B83\u4F18\u60E0\u5238\u53E0\u52A0");
		discountProduct3.setLimitMessage("\u8BF7\u51FA\u793A\u5C0F\u7968");
		discountProduct3.setValidity(30);
		discountProduct3.setCreateDate(new Date());
		discountProduct3.setOrgId(orgId);
		discountProducts.add(discountProduct3);
		
		CouponModel.INSTANCE.batchInsert(discountProducts);
	}

}
