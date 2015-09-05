/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Sat Sep 05 13:11:34 CST 2015
 */

package org.shaolin.vogerp.accounting.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.accounting.ce.BudgetStatusType
 *
 */
public final class BudgetStatusType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.accounting.ce.BudgetStatusType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_accounting_i18n";

    //User-defined constant define

    public static final BudgetStatusType NOT_SPECIFIED = new BudgetStatusType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final BudgetStatusType CREATED = new BudgetStatusType("Created", 0, "org.shaolin.vogerp.accounting.ce.BudgetStatusType.CREATED", "Created", null, null,false);

    public static final BudgetStatusType REQUESTED = new BudgetStatusType("Requested", 1, "org.shaolin.vogerp.accounting.ce.BudgetStatusType.REQUESTED", "Requested", null, null,false);

    public static final BudgetStatusType REJECTED = new BudgetStatusType("Rejected", 2, "org.shaolin.vogerp.accounting.ce.BudgetStatusType.REJECTED", "Rejected", null, null,false);

    public static final BudgetStatusType CANCELLED = new BudgetStatusType("Cancelled", 3, "org.shaolin.vogerp.accounting.ce.BudgetStatusType.CANCELLED", "Cancelled", null, null,false);

    public static final BudgetStatusType APPROVED = new BudgetStatusType("Approved", 4, "org.shaolin.vogerp.accounting.ce.BudgetStatusType.APPROVED", "Approved", null, null,false);

    //End of constant define

    //Common constant define
    public BudgetStatusType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(CREATED);
        constantList.add(REQUESTED);
        constantList.add(REJECTED);
        constantList.add(CANCELLED);
        constantList.add(APPROVED);
    }

    private BudgetStatusType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private BudgetStatusType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private BudgetStatusType(String value, int intValue, String i18nKey,
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
        return new BudgetStatusType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

