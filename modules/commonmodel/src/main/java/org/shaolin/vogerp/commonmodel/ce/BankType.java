/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Thu Jul 23 13:15:09 CST 2015
 */

package org.shaolin.vogerp.commonmodel.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.commonmodel.ce.BankType
 *
 */
public final class BankType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.BankType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final BankType NOT_SPECIFIED = new BankType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final BankType CCB = new BankType("CCB", 0, "org.shaolin.vogerp.commonmodel.ce.BankType.CCB", "中国建设银行", null, null,false);

    public static final BankType ABC = new BankType("ABC", 1, "org.shaolin.vogerp.commonmodel.ce.BankType.ABC", "中国农业银行", null, null,false);

    public static final BankType ICBC = new BankType("ICBC", 2, "org.shaolin.vogerp.commonmodel.ce.BankType.ICBC", "中国工商银行", null, null,false);

    public static final BankType BOC = new BankType("BOC", 3, "org.shaolin.vogerp.commonmodel.ce.BankType.BOC", "中国银行", null, null,false);

    public static final BankType CMBC = new BankType("CMBC", 4, "org.shaolin.vogerp.commonmodel.ce.BankType.CMBC", "中国民生银行", null, null,false);

    public static final BankType CMB = new BankType("CMB", 5, "org.shaolin.vogerp.commonmodel.ce.BankType.CMB", "招商银行", null, null,false);

    public static final BankType CIB = new BankType("CIB", 6, "org.shaolin.vogerp.commonmodel.ce.BankType.CIB", "兴业银行", null, null,false);

    public static final BankType BCM = new BankType("BCM", 7, "org.shaolin.vogerp.commonmodel.ce.BankType.BCM", "交通银行", null, null,false);

    public static final BankType CEB = new BankType("CEB", 8, "org.shaolin.vogerp.commonmodel.ce.BankType.CEB", "中国光大银行", null, null,false);

    //End of constant define

    //Common constant define
    public BankType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(CCB);
        constantList.add(ABC);
        constantList.add(ICBC);
        constantList.add(BOC);
        constantList.add(CMBC);
        constantList.add(CMB);
        constantList.add(CIB);
        constantList.add(BCM);
        constantList.add(CEB);
    }

    private BankType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private BankType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private BankType(String value, int intValue, String i18nKey,
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
        return new BankType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

