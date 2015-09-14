/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Sun Sep 13 23:00:02 CST 2015
 */

package org.shaolin.vogerp.accounting.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.accounting.ce.PaymentMethodsType
 *
 */
public final class PaymentMethodsType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.accounting.ce.PaymentMethodsType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_accounting_i18n";

    //User-defined constant define

    public static final PaymentMethodsType NOT_SPECIFIED = new PaymentMethodsType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PaymentMethodsType CREDIT = new PaymentMethodsType("Credit", 0, "org.shaolin.vogerp.accounting.ce.PaymentMethodsType.CREDIT", "Credit", null, null,false);

    public static final PaymentMethodsType ALIPAY = new PaymentMethodsType("AliPay", 1, "org.shaolin.vogerp.accounting.ce.PaymentMethodsType.ALIPAY", "AliPay", null, null,false);

    public static final PaymentMethodsType UNIONPAY = new PaymentMethodsType("UnionPay", 2, "org.shaolin.vogerp.accounting.ce.PaymentMethodsType.UNIONPAY", "UnionPay", null, null,false);

    //End of constant define

    //Common constant define
    public PaymentMethodsType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(CREDIT);
        constantList.add(ALIPAY);
        constantList.add(UNIONPAY);
    }

    private PaymentMethodsType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PaymentMethodsType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PaymentMethodsType(String value, int intValue, String i18nKey,
            String description, Date effTime, Date expTime, boolean isPassivated)
    {
        super(value, intValue, i18nKey, description, effTime, expTime, isPassivated);
    }
    
    public String getI18nBundle()
    {
        return i18nBundle;
    }

    public void setI18nBundle(String bundle)
    {
        i18nBundle = bundle;
    }

    protected AbstractConstant __create(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        return new PaymentMethodsType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

