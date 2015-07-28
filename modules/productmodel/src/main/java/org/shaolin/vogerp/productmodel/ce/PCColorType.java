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
 * entityName: org.shaolin.vogerp.productmodel.ce.PCColorType
 *
 */
public final class PCColorType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.PCColorType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final PCColorType NOT_SPECIFIED = new PCColorType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PCColorType WHITE = new PCColorType("White", 0, "org.shaolin.vogerp.productmodel.ce.PCColorType.WHITE", "White", null, null,false);

    public static final PCColorType RED = new PCColorType("Red", 1, "org.shaolin.vogerp.productmodel.ce.PCColorType.RED", "Red", null, null,false);

    public static final PCColorType BLACK = new PCColorType("Black", 2, "org.shaolin.vogerp.productmodel.ce.PCColorType.BLACK", "Black", null, null,false);

    //End of constant define

    //Common constant define
    public PCColorType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(WHITE);
        constantList.add(RED);
        constantList.add(BLACK);
    }

    private PCColorType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PCColorType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PCColorType(String value, int intValue, String i18nKey,
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
        return new PCColorType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

