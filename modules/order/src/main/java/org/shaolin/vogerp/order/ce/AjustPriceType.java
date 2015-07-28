/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Sat Jul 11 22:49:45 CST 2015
 */

package org.shaolin.vogerp.order.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.order.ce.AjustPriceType
 *
 */
public final class AjustPriceType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.order.ce.AjustPriceType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_order_i18n";

    //User-defined constant define

    public static final AjustPriceType NOT_SPECIFIED = new AjustPriceType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final AjustPriceType MINUS = new AjustPriceType("Minus", 0, "org.shaolin.vogerp.order.ce.AjustPriceType.MINUS", "-", null, null,false);

    public static final AjustPriceType PLUS = new AjustPriceType("Plus", 1, "org.shaolin.vogerp.order.ce.AjustPriceType.PLUS", "+", null, null,false);

    //End of constant define

    //Common constant define
    public AjustPriceType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(MINUS);
        constantList.add(PLUS);
    }

    private AjustPriceType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private AjustPriceType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private AjustPriceType(String value, int intValue, String i18nKey,
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
        return new AjustPriceType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

