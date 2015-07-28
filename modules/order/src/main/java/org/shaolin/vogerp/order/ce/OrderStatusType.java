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
 * entityName: org.shaolin.vogerp.order.ce.OrderStatusType
 *
 */
public final class OrderStatusType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.order.ce.OrderStatusType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_order_i18n";

    //User-defined constant define

    public static final OrderStatusType NOT_SPECIFIED = new OrderStatusType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final OrderStatusType CREATED = new OrderStatusType("Created", 0, "org.shaolin.vogerp.order.ce.OrderStatusType.CREATED", "Created", null, null,false);

    public static final OrderStatusType DELIVERED = new OrderStatusType("Delivered", 1, "org.shaolin.vogerp.order.ce.OrderStatusType.DELIVERED", "Delivered", null, null,false);

    //End of constant define

    //Common constant define
    public OrderStatusType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(CREATED);
        constantList.add(DELIVERED);
    }

    private OrderStatusType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private OrderStatusType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private OrderStatusType(String value, int intValue, String i18nKey,
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
        return new OrderStatusType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

