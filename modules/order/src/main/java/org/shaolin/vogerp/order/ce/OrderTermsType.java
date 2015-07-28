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
 * entityName: org.shaolin.vogerp.order.ce.OrderTermsType
 *
 */
public final class OrderTermsType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.order.ce.OrderTermsType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_order_i18n";

    //User-defined constant define

    public static final OrderTermsType NOT_SPECIFIED = new OrderTermsType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final OrderTermsType CREATED = new OrderTermsType("Created", 0, "org.shaolin.vogerp.order.ce.OrderTermsType.CREATED", "Created", null, null,false);

    //End of constant define

    //Common constant define
    public OrderTermsType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(CREATED);
    }

    private OrderTermsType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private OrderTermsType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private OrderTermsType(String value, int intValue, String i18nKey,
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
        return new OrderTermsType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

