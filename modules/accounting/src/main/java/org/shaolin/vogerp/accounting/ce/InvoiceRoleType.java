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
 * entityName: org.shaolin.vogerp.accounting.ce.InvoiceRoleType
 *
 */
public final class InvoiceRoleType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.accounting.ce.InvoiceRoleType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_accounting_i18n";

    //User-defined constant define

    public static final InvoiceRoleType NOT_SPECIFIED = new InvoiceRoleType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final InvoiceRoleType DELIVERED = new InvoiceRoleType("Delivered", 0, "org.shaolin.vogerp.accounting.ce.InvoiceRoleType.DELIVERED", "Delivered Invoice", null, null,false);

    public static final InvoiceRoleType PURCHASED = new InvoiceRoleType("Purchased", 1, "org.shaolin.vogerp.accounting.ce.InvoiceRoleType.PURCHASED", "Purchased Invoice", null, null,false);

    //End of constant define

    //Common constant define
    public InvoiceRoleType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(DELIVERED);
        constantList.add(PURCHASED);
    }

    private InvoiceRoleType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private InvoiceRoleType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private InvoiceRoleType(String value, int intValue, String i18nKey,
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
        return new InvoiceRoleType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

