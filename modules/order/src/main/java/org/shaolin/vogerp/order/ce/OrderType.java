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
 * entityName: org.shaolin.vogerp.order.ce.OrderType
 *
 */
public final class OrderType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.order.ce.OrderType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_order_i18n";

    //User-defined constant define

    public static final OrderType NOT_SPECIFIED = new OrderType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final OrderType SALEORDER = new OrderType("SaleOrder", 0, "org.shaolin.vogerp.order.ce.OrderType.SALEORDER", "SaleOrder", null, null,false);

    public static final OrderType PURCHASEORDER = new OrderType("PurchaseOrder", 1, "org.shaolin.vogerp.order.ce.OrderType.PURCHASEORDER", "PurchaseOrder", null, null,false);

    public static final OrderType PRODUCTORDER = new OrderType("ProductOrder", 2, "org.shaolin.vogerp.order.ce.OrderType.PRODUCTORDER", "ProductOrder", null, null,false);

    public static final OrderType STORAGEINORDER = new OrderType("StorageInOrder", 3, "org.shaolin.vogerp.order.ce.OrderType.STORAGEINORDER", "StorageInOrder", null, null,false);

    public static final OrderType STORAGEOUTORDER = new OrderType("StorageOutOrder", 4, "org.shaolin.vogerp.order.ce.OrderType.STORAGEOUTORDER", "StorageOutOrder", null, null,false);

    //End of constant define

    //Common constant define
    public OrderType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(SALEORDER);
        constantList.add(PURCHASEORDER);
        constantList.add(PRODUCTORDER);
        constantList.add(STORAGEINORDER);
        constantList.add(STORAGEOUTORDER);
    }

    private OrderType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private OrderType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private OrderType(String value, int intValue, String i18nKey,
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
        return new OrderType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

