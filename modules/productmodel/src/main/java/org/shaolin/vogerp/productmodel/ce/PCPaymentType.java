/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Tue Jul 21 23:50:34 CST 2015
 */

package org.shaolin.vogerp.productmodel.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.productmodel.ce.PCPaymentType
 *
 */
public final class PCPaymentType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.PCPaymentType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final PCPaymentType NOT_SPECIFIED = new PCPaymentType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PCPaymentType DAILY = new PCPaymentType("Daily", 0, "org.shaolin.vogerp.productmodel.ce.PCPaymentType.DAILY", "Day", null, null,false);

    public static final PCPaymentType WEEKLY = new PCPaymentType("Weekly", 1, "org.shaolin.vogerp.productmodel.ce.PCPaymentType.WEEKLY", "Weekly", null, null,false);

    public static final PCPaymentType MONTHLY = new PCPaymentType("Monthly", 2, "org.shaolin.vogerp.productmodel.ce.PCPaymentType.MONTHLY", "Monthly", null, null,false);

    public static final PCPaymentType SEASON = new PCPaymentType("Season", 3, "org.shaolin.vogerp.productmodel.ce.PCPaymentType.SEASON", "Season", null, null,false);

    public static final PCPaymentType YEAR = new PCPaymentType("Year", 4, "org.shaolin.vogerp.productmodel.ce.PCPaymentType.YEAR", "Year", null, null,false);

    //End of constant define

    //Common constant define
    public PCPaymentType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(DAILY);
        constantList.add(WEEKLY);
        constantList.add(MONTHLY);
        constantList.add(SEASON);
        constantList.add(YEAR);
    }

    private PCPaymentType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PCPaymentType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PCPaymentType(String value, int intValue, String i18nKey,
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
        return new PCPaymentType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

