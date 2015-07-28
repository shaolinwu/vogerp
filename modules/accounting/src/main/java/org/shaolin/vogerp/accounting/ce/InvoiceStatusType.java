/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Sun Jul 19 23:56:29 CST 2015
 */

package org.shaolin.vogerp.accounting.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.accounting.ce.InvoiceStatusType
 *
 */
public final class InvoiceStatusType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.accounting.ce.InvoiceStatusType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_accounting_i18n";

    //User-defined constant define

    public static final InvoiceStatusType NOT_SPECIFIED = new InvoiceStatusType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final InvoiceStatusType APPROVED = new InvoiceStatusType("Approved", 0, "org.shaolin.vogerp.accounting.ce.InvoiceStatusType.APPROVED", "Approved", null, null,false);

    public static final InvoiceStatusType DELIVERED = new InvoiceStatusType("Delivered", 1, "org.shaolin.vogerp.accounting.ce.InvoiceStatusType.DELIVERED", "Delivered", null, null,false);

    //End of constant define

    //Common constant define
    public InvoiceStatusType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(APPROVED);
        constantList.add(DELIVERED);
    }

    private InvoiceStatusType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private InvoiceStatusType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private InvoiceStatusType(String value, int intValue, String i18nKey,
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
        return new InvoiceStatusType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

