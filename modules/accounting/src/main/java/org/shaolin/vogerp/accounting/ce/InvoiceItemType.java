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
 * entityName: org.shaolin.vogerp.accounting.ce.InvoiceItemType
 *
 */
public final class InvoiceItemType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.accounting.ce.InvoiceItemType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_accounting_i18n";

    //User-defined constant define

    public static final InvoiceItemType NOT_SPECIFIED = new InvoiceItemType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final InvoiceItemType DISCOUNT = new InvoiceItemType("Discount", 0, "org.shaolin.vogerp.accounting.ce.InvoiceItemType.DISCOUNT", "Discount", null, null,false);

    public static final InvoiceItemType MISCELLANEOUS = new InvoiceItemType("Miscellaneous", 1, "org.shaolin.vogerp.accounting.ce.InvoiceItemType.MISCELLANEOUS", "Miscellaneous", null, null,false);

    public static final InvoiceItemType SALE = new InvoiceItemType("Sale", 2, "org.shaolin.vogerp.accounting.ce.InvoiceItemType.SALE", "Sale", null, null,false);

    public static final InvoiceItemType ADDITIONAL = new InvoiceItemType("Additional", 3, "org.shaolin.vogerp.accounting.ce.InvoiceItemType.ADDITIONAL", "Additional", null, null,false);

    public static final InvoiceItemType SHIPMENT = new InvoiceItemType("Shipment", 4, "org.shaolin.vogerp.accounting.ce.InvoiceItemType.SHIPMENT", "Shipment", null, null,false);

    public static final InvoiceItemType ORDER = new InvoiceItemType("Order", 5, "org.shaolin.vogerp.accounting.ce.InvoiceItemType.ORDER", "Order", null, null,false);

    //End of constant define

    //Common constant define
    public InvoiceItemType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(DISCOUNT);
        constantList.add(MISCELLANEOUS);
        constantList.add(SALE);
        constantList.add(ADDITIONAL);
        constantList.add(SHIPMENT);
        constantList.add(ORDER);
    }

    private InvoiceItemType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private InvoiceItemType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private InvoiceItemType(String value, int intValue, String i18nKey,
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
        return new InvoiceItemType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

