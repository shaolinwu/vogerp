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
 * entityName: org.shaolin.vogerp.productmodel.ce.PCNumberSizeType
 *
 */
public final class PCNumberSizeType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.PCNumberSizeType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final PCNumberSizeType NOT_SPECIFIED = new PCNumberSizeType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PCNumberSizeType SIZE7_7 = new PCNumberSizeType("Size7_7", 0, "org.shaolin.vogerp.productmodel.ce.PCNumberSizeType.SIZE7_7", "7*7", null, null,false);

    public static final PCNumberSizeType SIZE8_8 = new PCNumberSizeType("Size8_8", 1, "org.shaolin.vogerp.productmodel.ce.PCNumberSizeType.SIZE8_8", "8*8", null, null,false);

    public static final PCNumberSizeType SIZE9_9 = new PCNumberSizeType("Size9_9", 2, "org.shaolin.vogerp.productmodel.ce.PCNumberSizeType.SIZE9_9", "9*9", null, null,false);

    public static final PCNumberSizeType SIZE10_10 = new PCNumberSizeType("Size10_10", 3, "org.shaolin.vogerp.productmodel.ce.PCNumberSizeType.SIZE10_10", "10*10", null, null,false);

    //End of constant define

    //Common constant define
    public PCNumberSizeType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(SIZE7_7);
        constantList.add(SIZE8_8);
        constantList.add(SIZE9_9);
        constantList.add(SIZE10_10);
    }

    private PCNumberSizeType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PCNumberSizeType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PCNumberSizeType(String value, int intValue, String i18nKey,
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
        return new PCNumberSizeType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

