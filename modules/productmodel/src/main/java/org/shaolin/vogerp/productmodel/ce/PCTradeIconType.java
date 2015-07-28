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
 * entityName: org.shaolin.vogerp.productmodel.ce.PCTradeIconType
 *
 */
public final class PCTradeIconType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.PCTradeIconType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final PCTradeIconType NOT_SPECIFIED = new PCTradeIconType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PCTradeIconType INCH = new PCTradeIconType("Inch", 0, "org.shaolin.vogerp.productmodel.ce.PCTradeIconType.INCH", "Inch", null, null,false);

    public static final PCTradeIconType POUND = new PCTradeIconType("Pound", 1, "org.shaolin.vogerp.productmodel.ce.PCTradeIconType.POUND", "Pound", null, null,false);

    //End of constant define

    //Common constant define
    public PCTradeIconType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(INCH);
        constantList.add(POUND);
    }

    private PCTradeIconType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PCTradeIconType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PCTradeIconType(String value, int intValue, String i18nKey,
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
        return new PCTradeIconType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

